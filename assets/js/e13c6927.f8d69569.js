"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[42047],{57400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},s="Incremental Streams",o={unversionedId:"connector-development/cdk-python/incremental-stream",id:"connector-development/cdk-python/incremental-stream",title:"Incremental Streams",description:"An incremental Stream is a stream which reads data incrementally. That is, it only reads data that was generated or updated since the last time it ran, and is thus far more efficient than a stream which reads all the source data every time it runs. If possible, developers are encouraged to implement incremental streams to reduce sync times and resource usage.",source:"@site/../docs/connector-development/cdk-python/incremental-stream.md",sourceDirName:"connector-development/cdk-python",slug:"/connector-development/cdk-python/incremental-stream",permalink:"/connector-development/cdk-python/incremental-stream",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/cdk-python/incremental-stream.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Full Refresh Streams",permalink:"/connector-development/cdk-python/full-refresh-stream"},next:{title:"HTTP-API-based Connectors",permalink:"/connector-development/cdk-python/http-streams"}},l={},c=[{value:"<code>AirbyteStateMessage</code>",id:"airbytestatemessage",level:3},{value:"Cursor fields",id:"cursor-fields",level:3},{value:"<code>IncrementalMixin</code>",id:"incrementalmixin",level:3},{value:"<code>Stream.get_updated_state</code>",id:"streamget_updated_state",level:3},{value:"Checkpointing state",id:"checkpointing-state",level:2},{value:"Interval based checkpointing",id:"interval-based-checkpointing",level:3},{value:"<code>Stream.stream_slices</code>",id:"streamstream_slices",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"incremental-streams"},"Incremental Streams"),(0,r.kt)("p",null,"An incremental Stream is a stream which reads data incrementally. That is, it only reads data that was generated or updated since the last time it ran, and is thus far more efficient than a stream which reads all the source data every time it runs. If possible, developers are encouraged to implement incremental streams to reduce sync times and resource usage."),(0,r.kt)("p",null,"Several new pieces are essential to understand how incrementality works with the CDK:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteStateMessage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cursor fields")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IncrementalMixin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Stream.get_updated_state")," (deprecated)"),(0,r.kt)("p",{parentName:"li"},"as well as a few other optional concepts."))),(0,r.kt)("h3",{id:"airbytestatemessage"},(0,r.kt)("inlineCode",{parentName:"h3"},"AirbyteStateMessage")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteStateMessage")," persists state between syncs, and allows a new sync to pick up from where the previous sync last finished. See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/connections/incremental-append"},"incremental sync guide")," for more information."),(0,r.kt)("h3",{id:"cursor-fields"},"Cursor fields"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor_field"),' refers to the field in the stream\'s output records used to determine the "recency" or ordering of records. An example is a ',(0,r.kt)("inlineCode",{parentName:"p"},"created_at")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," field in an API or DB table."),(0,r.kt)("p",null,"Cursor fields can be input by the user ","(","e.g: a user can choose to use an auto-incrementing ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column in a DB table",")"," or they can be defined by the source e.g: where an API defines that ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," is what determines the ordering of records."),(0,r.kt)("p",null,"In the context of the CDK, setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream.cursor_field")," property to any truthy value informs the framework that this stream is incremental."),(0,r.kt)("h3",{id:"incrementalmixin"},(0,r.kt)("inlineCode",{parentName:"h3"},"IncrementalMixin")),(0,r.kt)("p",null,"This class mixin adds property ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," with abstract setter and getter.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," attribute helps the CDK figure out the current state of sync at any moment (in contrast to deprecated ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream.get_updated_state")," method).\nThe setter typically deserialize state saved by CDK and initialize internal state of the stream.\nThe getter should serialize internal state of the stream. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef state(self) -> Mapping[str, Any]:\n   return {self.cursor_field: str(self._cursor_value)}\n\n@state.setter\ndef state(self, value: Mapping[str, Any]):\n   self._cursor_value = value[self.cursor_field]\n")),(0,r.kt)("p",null,"The actual logic of updating state during reading is implemented somewhere else, usually as part of ",(0,r.kt)("inlineCode",{parentName:"p"},"read_records")," method, right after the latest record returned that matches the new state.\nTherefore, the state represents the latest checkpoint successfully achieved, and all next records should match the next state after that one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def read_records(self, ...):\n   ...\n   yield record\n   yield record\n   yield record\n   self._cursor_value = max(record[self.cursor_field], self._cursor_value)\n   yield record\n   yield record\n   yield record\n   self._cursor_value = max(record[self.cursor_field], self._cursor_value)\n")),(0,r.kt)("h3",{id:"streamget_updated_state"},(0,r.kt)("inlineCode",{parentName:"h3"},"Stream.get_updated_state")),(0,r.kt)("p",null,"(deprecated since 1.48.0, see ",(0,r.kt)("inlineCode",{parentName:"p"},"IncrementalMixin"),")"),(0,r.kt)("p",null,"This function helps the stream keep track of the latest state by inspecting every record output by the stream ","(","as returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream.read_records")," method",")"," and comparing it against the most recent state object. This allows sync to resume from where the previous sync last stopped, regardless of success or failure. This function typically compares the state object's and the latest record's cursor field, picking the latest one."),(0,r.kt)("h2",{id:"checkpointing-state"},"Checkpointing state"),(0,r.kt)("p",null,"There are two ways to checkpointing state ","(","i.e: controlling the timing of when state is saved",")"," while reading data from a connector:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Interval-based checkpointing"),(0,r.kt)("li",{parentName:"ol"},"Stream Slices")),(0,r.kt)("h3",{id:"interval-based-checkpointing"},"Interval based checkpointing"),(0,r.kt)("p",null,"This is the simplest method for checkpointing. When the interval is set to a truthy value e.g: 100, then state is persisted after every 100 records output by the connector e.g: state is saved after reading 100 records, then 200, 300, etc.."),(0,r.kt)("p",null,"While this is very simple, ",(0,r.kt)("strong",{parentName:"p"},"it requires that records are output in ascending order with regards to the cursor field"),". For example, if your stream outputs records in ascending order of the ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," field, then this is a good fit for your usecase. But if the stream outputs records in a random order, then you cannot use this method because we can only be certain that we read records after a particular ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," timestamp once all records have been fully read."),(0,r.kt)("p",null,"Interval based checkpointing can be implemented by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream.state_checkpoint_interval")," property e.g:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"class MyAmazingStream(Stream): \n  # Save the state every 100 records\n  state_checkpoint_interval = 100\n")),(0,r.kt)("h3",{id:"streamstream_slices"},(0,r.kt)("inlineCode",{parentName:"h3"},"Stream.stream_slices")),(0,r.kt)("p",null,"Stream slices can be used to achieve finer grain control of when state is checkpointed."),(0,r.kt)("p",null,"Conceptually, a Stream Slice is a subset of the records in a stream which represent the smallest unit of data which can be re-synced. Once a full slice is read, an ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteStateMessage")," will be output, causing state to be saved. If a connector fails while reading the Nth slice of a stream, then the next time it retries, it will begin reading at the beginning of the Nth slice again, rather than re-read slices ",(0,r.kt)("inlineCode",{parentName:"p"},"1...N-1"),"."),(0,r.kt)("p",null,"A Slice object is not typed, and the developer is free to include any information necessary to make the request. This function is called when the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," is about to be read. Typically, the ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_slices")," function, via inspecting the state object, generates a Slice for every request to be made."),(0,r.kt)("p",null,"As an example, suppose an API is able to dispense data hourly. If the last sync was exactly 24 hours ago, we can either make an API call retrieving all data at once, or make 24 calls each retrieving an hour's worth of data. In the latter case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_slices")," function, sees that the previous state contains yesterday's timestamp, and returns a list of 24 Slices, each with a different hourly timestamp to be used when creating request. If the stream fails halfway through ","(","at the 12th slice",")",", then the next time it starts reading, it will read from the beginning of the 12th slice."),(0,r.kt)("p",null,"For a more in-depth description of stream slicing, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/8500fef4133d3d06e16e8b600d65ebf2c58afefd/docs/connector-development/cdk-python/stream-slices.md"},"Stream Slices guide"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In summary, an incremental stream requires:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"cursor_field")," property"),(0,r.kt)("li",{parentName:"ul"},"to be inherited from ",(0,r.kt)("inlineCode",{parentName:"li"},"IncrementalMixin")," and state methods implemented"),(0,r.kt)("li",{parentName:"ul"},"Optionally, the ",(0,r.kt)("inlineCode",{parentName:"li"},"stream_slices")," function")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);