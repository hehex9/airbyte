/*
 * Copyright (c) 2023 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.destination_async.state;

import static java.lang.Thread.sleep;

import com.google.common.base.Preconditions;
import io.airbyte.integrations.destination_async.GlobalMemoryManager;
import io.airbyte.protocol.models.v0.AirbyteMessage;
import io.airbyte.protocol.models.v0.AirbyteStateMessage;
import io.airbyte.protocol.models.v0.AirbyteStreamState;
import io.airbyte.protocol.models.v0.StreamDescriptor;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.atomic.AtomicLong;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.tuple.ImmutablePair;
import org.apache.mina.util.ConcurrentHashSet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AsyncStateManager {

  private static final Logger LOGGER = LoggerFactory.getLogger(AsyncStateManager.class);
  private static final double RETURN_MEMORY_THRESHOLD = .75;

  private static final StreamDescriptor SENTINEL_GLOBAL_DESC = new StreamDescriptor().withName(UUID.randomUUID().toString());
  private final GlobalMemoryManager memoryManager;

  private Long memoryAllocated;
  private Long memoryUsed;

  boolean preState = true;
  private final ConcurrentMap<Long, AtomicLong> stateIdToCounter = new ConcurrentHashMap<>();
  private final ConcurrentMap<StreamDescriptor, LinkedList<Long>> streamToStateIdQ = new ConcurrentHashMap<>();

  private final ConcurrentMap<Long, ImmutablePair<AirbyteMessage, Long>> stateIdToState = new ConcurrentHashMap<>();
  // empty in the STREAM case.

  // Alias-ing only exists in the non-STREAM case where we have to convert existing state ids to one
  // single global id.
  // This only happens once.
  private final Set<Long> aliasIds = new ConcurrentHashSet<>();
  private long retroactiveGlobalStateId = 0;

  public AsyncStateManager(final GlobalMemoryManager memoryManager) {
    this.memoryManager = memoryManager;
    memoryAllocated = memoryManager.requestMemory();
    memoryUsed = 0L;
  }

  // Always assume STREAM to begin, and convert only if needed. Most state is per stream anyway.
  private AirbyteStateMessage.AirbyteStateType stateType = AirbyteStateMessage.AirbyteStateType.STREAM;

  public void trackState(final AirbyteMessage message, final long sizeInBytes) {
    if (preState) {
      convertToGlobalIfNeeded(message);
      preState = false;
    }
    Preconditions.checkArgument(stateType == extractStateType(message));

    closeState(message, sizeInBytes);
  }

  public long getStateId(final StreamDescriptor streamDescriptor) {
    final StreamDescriptor resolvedDescriptor = stateType == AirbyteStateMessage.AirbyteStateType.STREAM ? streamDescriptor : SENTINEL_GLOBAL_DESC;

    if (!streamToStateIdQ.containsKey(resolvedDescriptor)) {
      registerNewStreamDescriptor(resolvedDescriptor);
    }
    // no unboxing should happen since we always guarantee the Long exists.
    return streamToStateIdQ.get(streamDescriptor).peekLast();
  }

  // called by the flush workers per message
  public void decrement(final long stateId, final long count) {
    stateIdToCounter.get(getStateAfterAlias(stateId)).addAndGet(-count);
  }

  // Always try to flush all states with 0 counters.
  public List<AirbyteMessage> flushStates() {
    final List<AirbyteMessage> output = new ArrayList<>();
    Long bytesFlushed = 0L;
    for (final Map.Entry<StreamDescriptor, LinkedList<Long>> entry : streamToStateIdQ.entrySet()) {
      // walk up the states until we find one that has a non zero counter.
      while (true) {
        final Long peek = entry.getValue().peek();
        final boolean emptyQ = peek == null;
        final boolean noCorrespondingStateMsg = stateIdToState.get(peek) == null;
        if (emptyQ || noCorrespondingStateMsg) {
          break;
        }

        final boolean noPrevRecs = !stateIdToCounter.containsKey(peek);
        final boolean allRecsEmitted = stateIdToCounter.get(peek).get() == 0;
        if (noPrevRecs || allRecsEmitted) {
          entry.getValue().poll();
          output.add(stateIdToState.get(peek).getLeft());
          bytesFlushed += stateIdToState.get(peek).getRight();
        } else {
          break;
        }
      }
    }

    freeBytes(bytesFlushed);
    return output;
  }

  /**
   * Pass this the number of bytes that were flushed. It will track those internally and if the
   * memoryUsed gets signficantly lower than what is allocated, then it will return it to the memory
   * manager. We don't always return to the memory manager to avoid needlessly allocating /
   * de-allocating memory rapidly over a few bytes.
   *
   * @param bytesFlushed bytes that were flushed (and should be removed from memory used).
   */
  private void freeBytes(final long bytesFlushed) {
    memoryUsed -= bytesFlushed;
    LOGGER.debug("Bytes flushed memory to store state message. Allocated: {}, Used: {}, Flushed: {}, % Used: {}",
        FileUtils.byteCountToDisplaySize(memoryAllocated),
        FileUtils.byteCountToDisplaySize(memoryUsed),
        FileUtils.byteCountToDisplaySize(bytesFlushed),
        (double) memoryUsed / memoryAllocated);
    if (memoryUsed < memoryAllocated * RETURN_MEMORY_THRESHOLD) {
      final long bytesToFree = (long) (memoryAllocated * RETURN_MEMORY_THRESHOLD);
      memoryManager.free(bytesToFree);
      LOGGER.debug("Returned {} of memory back to the memory manager.", FileUtils.byteCountToDisplaySize(bytesToFree));
    }
  }

  private void convertToGlobalIfNeeded(final AirbyteMessage message) {
    // instead of checking for global or legacy, check for the inverse of stream.
    stateType = extractStateType(message);
    if (stateType != AirbyteStateMessage.AirbyteStateType.STREAM) {// alias old stream-level state ids to single global state id
      // upon conversion, all previous tracking data structures need to be cleared as we move
      // into the non-STREAM world for correctness.

      aliasIds.addAll(streamToStateIdQ.values().stream().flatMap(Collection::stream).toList());
      streamToStateIdQ.clear();
      retroactiveGlobalStateId = PkWhatever.getNextId();

      streamToStateIdQ.put(SENTINEL_GLOBAL_DESC, new LinkedList<>());
      streamToStateIdQ.get(SENTINEL_GLOBAL_DESC).add(retroactiveGlobalStateId);

      final long combinedCounter = stateIdToCounter.values()
          .stream()
          .mapToLong(AtomicLong::get)
          .sum();
      stateIdToCounter.clear();
      stateIdToCounter.put(retroactiveGlobalStateId, new AtomicLong(combinedCounter));
    }
  }

  private AirbyteStateMessage.AirbyteStateType extractStateType(final AirbyteMessage message) {
    if (message.getState().getType() == null) {
      // Treated the same as GLOBAL.
      return AirbyteStateMessage.AirbyteStateType.LEGACY;
    } else {
      return message.getState().getType();
    }
  }

  private void closeState(final AirbyteMessage message, final long sizeInBytes) {
    final StreamDescriptor resolvedDescriptor = extractStream(message).orElse(SENTINEL_GLOBAL_DESC);
    stateIdToState.put(getStateId(resolvedDescriptor), ImmutablePair.of(message, sizeInBytes));
    registerNewStateId(resolvedDescriptor);

    allocateMemoryToState(sizeInBytes);
  }

  /**
   * Given the size of a state message, tracks how much memory the manager is using and requests
   * additional memory from the memory manager if needed.
   *
   * @param sizeInBytes size of the state message
   */
  @SuppressWarnings("BusyWait")
  private void allocateMemoryToState(final long sizeInBytes) {
    if (memoryAllocated < memoryUsed + sizeInBytes) {
      while (memoryAllocated < memoryUsed + sizeInBytes) {
        memoryAllocated += memoryManager.requestMemory();
        try {
          LOGGER.debug("Insufficient memory to store state message. Allocated: {}, Used: {}, Size of State Msg: {}, Needed: {}",
              FileUtils.byteCountToDisplaySize(memoryAllocated),
              FileUtils.byteCountToDisplaySize(memoryUsed),
              FileUtils.byteCountToDisplaySize(sizeInBytes),
              FileUtils.byteCountToDisplaySize(sizeInBytes - (memoryAllocated - memoryUsed)));
          sleep(1000);
        } catch (final InterruptedException e) {
          throw new RuntimeException(e);
        }
      }
    }
    memoryUsed += sizeInBytes;
    LOGGER.debug("State Manager memory usage: Allocated: {}, Used: {}, % Used {}",
        FileUtils.byteCountToDisplaySize(memoryAllocated),
        FileUtils.byteCountToDisplaySize(memoryUsed),
        (double) memoryUsed / memoryAllocated);
  }

  private static Optional<StreamDescriptor> extractStream(final AirbyteMessage message) {
    return Optional.ofNullable(message.getState().getStream()).map(AirbyteStreamState::getStreamDescriptor);
  }

  private long getStateAfterAlias(final long stateId) {
    if (aliasIds.contains(stateId)) {
      return retroactiveGlobalStateId;
    } else {
      return stateId;
    }
  }

  private void registerNewStreamDescriptor(final StreamDescriptor resolvedDescriptor) {
    streamToStateIdQ.put(resolvedDescriptor, new LinkedList<>());
    registerNewStateId(resolvedDescriptor);
  }

  private void registerNewStateId(final StreamDescriptor resolvedDescriptor) {
    final long stateId = PkWhatever.getNextId();
    streamToStateIdQ.get(resolvedDescriptor).add(stateId);
    stateIdToCounter.put(stateId, new AtomicLong());
  }

  private static class PkWhatever {

    private static long pk = 0;

    public static long getNextId() {
      return pk++;
    }

  }

}
