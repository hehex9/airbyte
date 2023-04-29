"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[31274],{91737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Incremental sync",s={unversionedId:"connector-development/connector-builder-ui/incremental-sync",id:"connector-development/connector-builder-ui/incremental-sync",title:"Incremental sync",description:"An incremental sync is a sync which pulls only the data that has changed since the previous sync (as opposed to all the data available in the data source).",source:"@site/../docs/connector-development/connector-builder-ui/incremental-sync.md",sourceDirName:"connector-development/connector-builder-ui",slug:"/connector-development/connector-builder-ui/incremental-sync",permalink:"/connector-development/connector-builder-ui/incremental-sync",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/connector-builder-ui/incremental-sync.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Pagination",permalink:"/connector-development/connector-builder-ui/pagination"},next:{title:"Partitioning",permalink:"/connector-development/connector-builder-ui/partitioning"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:2},{value:"Advanced settings",id:"advanced-settings",level:2},{value:"Step",id:"step",level:3},{value:"Lookback window",id:"lookback-window",level:3},{value:"Custom parameter injection",id:"custom-parameter-injection",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"incremental-sync"},"Incremental sync"),(0,r.kt)("p",null,"An incremental sync is a sync which pulls only the data that has changed since the previous sync (as opposed to all the data available in the data source)."),(0,r.kt)("p",null,"This is especially important if there are a large number of records to sync and/or the API has tight request limits which makes a full sync of all records on a regular schedule too expensive or too slow."),(0,r.kt)("p",null,"Incremental syncs are usually implemented using a cursor value (like a timestamp) that delineates which data was pulled and which data is new. A very common cursor value is an ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," timestamp. This cursor means that records whose ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," value is less than or equal than that cursor value have been synced already, and that the next sync should only export records whose ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," value is greater than the cursor value."),(0,r.kt)("p",null,"To use incremental syncs, the API endpoint needs to fullfil the following requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Records contain a top-level date/time field that defines when this record was last updated (the "cursor field")',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'If the record\'s cursor field is nested, you can use an "Add Field" transformation to copy it to the top-level, and a Remove Field to remove it from the object. This will effectively move the field to the top-level of the record'))),(0,r.kt)("li",{parentName:"ul"},"It's possible to filter/request records by the cursor field"),(0,r.kt)("li",{parentName:"ul"},"The records are sorted in ascending order based on their cursor field")),(0,r.kt)("p",null,"The knowledge of a cursor value also allows the Airbyte system to automatically keep a history of changes to records in the destination. To learn more about how different modes of incremental syncs, check out the ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/incremental-append/"},"Incremental Sync - Append")," and ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/incremental-deduped-history"},"Incremental Sync - Deduped History")," pages."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To configure incremental syncs for a stream in the connector builder, you have to specify how the records will represent the ",(0,r.kt)("strong",{parentName:"p"},'"last changed" / "updated at" timestamp'),", the ",(0,r.kt)("strong",{parentName:"p"},"initial time range")," to fetch records for and ",(0,r.kt)("strong",{parentName:"p"},"how to request records from a certain time range"),"."),(0,r.kt)("p",null,"In the builder UI, these things are specified like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "Cursor field" is the property in the record that defines the date and time when the record got changed. It\'s used to decide which records are synced already and which records are "new"'),(0,r.kt)("li",{parentName:"ul"},'The "Datetime format" specifies the ',(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes"},"format")," the cursor field is using to specify date and time,"),(0,r.kt)("li",{parentName:"ul"},'The "Cursor granularity" is the smallest time unit supported by the API to specify the time range to request records for expressed as ',(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 duration")),(0,r.kt)("li",{parentName:"ul"},'The "Start datetime" is the initial start date of the time range to fetch records for. When doing incremental syncs, the second sync will overwrite this date with the last record that got synced so far.'),(0,r.kt)("li",{parentName:"ul"},'The "End datetime" is the end date of the time range to fetch records for. In most cases it\'s set to the current date and time when the sync is started to sync all changes that happened so far.'),(0,r.kt)("li",{parentName:"ul"},'The "Inject start/end time into outgoing HTTP request" defines how to request records that got changed in the time range to sync. In most cases the start and end time is added as a request parameter or body parameter')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://open-platform.theguardian.com/documentation/search"},"API of The Guardian")," has a ",(0,r.kt)("inlineCode",{parentName:"p"},"/search")," endpoint that allows to extract a list of articles."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/search")," endpoint has a ",(0,r.kt)("inlineCode",{parentName:"p"},"from-date")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"to-date")," query parameter which can be used to only request data for a certain time range."),(0,r.kt)("p",null,"Content records have the following form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "id": "world/2022/oct/21/russia-ukraine-war-latest-what-we-know-on-day-240-of-the-invasion",\n    "type": "article",\n    "sectionId": "world",\n    "sectionName": "World news",\n    "webPublicationDate": "2022-10-21T14:06:14Z",\n    "webTitle": "Russia-Ukraine war latest: what we know on day 240 of the invasion",\n    // ...\n}\n')),(0,r.kt)("p",null,'As this fulfills the requirements for incremental syncs, we can configure the "Incremental sync" section in the following way:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Cursor field" is set to ',(0,r.kt)("inlineCode",{parentName:"li"},"webPublicationDate")),(0,r.kt)("li",{parentName:"ul"},'"Datetime format" is set to ',(0,r.kt)("inlineCode",{parentName:"li"},"%Y-%m-%dT%H:%M:%SZ")),(0,r.kt)("li",{parentName:"ul"},'"Cursor granularity is set to ',(0,r.kt)("inlineCode",{parentName:"li"},"PT1S")," as this API can handle date/time values on the second level"),(0,r.kt)("li",{parentName:"ul"},'"Start datetime" is set to "user input" to allow the user of the connector configuring a Source to specify the time to start syncing'),(0,r.kt)("li",{parentName:"ul"},'"End datetime" is set to "now" to fetch all articles up to the current date'),(0,r.kt)("li",{parentName:"ul"},'"Inject start time into outgoing HTTP request" is set to ',(0,r.kt)("inlineCode",{parentName:"li"},"request_parameter"),' with "Field" set to ',(0,r.kt)("inlineCode",{parentName:"li"},"from-date")),(0,r.kt)("li",{parentName:"ul"},'"Inject end time into outgoing HTTP request" is set to ',(0,r.kt)("inlineCode",{parentName:"li"},"request_parameter"),' with "Field" set to ',(0,r.kt)("inlineCode",{parentName:"li"},"to-date"))),(0,r.kt)("p",null,"This API orders records by default from new to old, which is not optimal for a reliable sync as the last encountered cursor value will be the most recent date even if some older records did not get synced (for example if a sync fails halfway through). It's better to start with the oldest records and work your way up to make sure that all older records are synced already once a certain date is encountered on a record. In this case the API can be configured to behave like this by setting an additional parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'At the bottom of the stream configuration page, add a new "Request parameter"'),(0,r.kt)("li",{parentName:"ul"},"Set the key to ",(0,r.kt)("inlineCode",{parentName:"li"},"order-by")),(0,r.kt)("li",{parentName:"ul"},"Set the value to ",(0,r.kt)("inlineCode",{parentName:"li"},"oldest"))),(0,r.kt)("p",null,'Setting the start date in the "Testing values" to a date in the past like ',(0,r.kt)("strong",{parentName:"p"},"2023-04-09T00:00:00Z")," results in the following request:"),(0,r.kt)("pre",null,"curl 'https://content.guardianapis.com/search?order-by=oldest&from-date=",(0,r.kt)("b",null,"2023-04-09T00:00:00Z"),"&to-date=","now","'"),(0,r.kt)("p",null,"The last encountered date will be saved as part of the connection - when the next sync is running, it picks up from the last record. Let's assume the last ecountered article looked like this:"),(0,r.kt)("pre",null,'{\n  "id": "business/live/2023/apr/15/uk-bosses-more-optimistic-energy-prices-fall-ai-spending-boom-economics-business-live",\n  "type": "liveblog",\n  "sectionId": "business",\n  "sectionName": "Business",\n  "webPublicationDate": ',(0,r.kt)("b",null,'"2023-04-15T07:30:58Z"'),",\n}"),(0,r.kt)("p",null,"Then when a sync is triggered for the same connection the next day, the following request is made:"),(0,r.kt)("pre",null,"curl 'https://content.guardianapis.com/search?order-by=oldest&from-date=",(0,r.kt)("b",null,"2023-04-15T07:30:58Z"),"&to-date=","<now>","'"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"from-date")," is set to the cutoff date of articles synced already and the ",(0,r.kt)("inlineCode",{parentName:"p"},"to-date")," is set to the current date."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In some cases, it's helpful to reference the start and end date of the interval that's currently synced, for example if it needs to be injected into the URL path of the current stream. In these cases it can be referenced using the ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ stream_interval.start_date }}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ stream_interval.end_date }}")," ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/understanding-the-yaml-file/reference#variables"},"placeholders"),". Check out ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/connector-builder-ui/tutorial#adding-incremental-reads"},"the tutorial")," for such a case.")),(0,r.kt)("h2",{id:"advanced-settings"},"Advanced settings"),(0,r.kt)("p",null,"The description above is sufficient for a lot of APIs. However there are some more subtle configurations which sometimes become relevant. "),(0,r.kt)("h3",{id:"step"},"Step"),(0,r.kt)("p",null,"When incremental syncs are enabled, the connector is not fetching all records since the cutoff date at once - instead it's splitting up the time range between the cutoff date and the desired end date into intervals based on the \"Step\" configuration (by default it's set to one month) expressed as ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 duration"),"."),(0,r.kt)("p",null,'For example if the "Step" is set to 10 days (',(0,r.kt)("inlineCode",{parentName:"p"},"P10D"),") for the Guardian articles stream described above and a longer time range, then the following requests will be performed:"),(0,r.kt)("pre",null,"curl 'https://content.guardianapis.com/search?order-by=oldest&from-date=",(0,r.kt)("b",null,"2023-01-01T00:00:00Z"),"&to-date=",(0,r.kt)("b",null,"2023-01-10T00:00:00Z"),"'","\n","curl 'https://content.guardianapis.com/search?order-by=oldest&from-date=",(0,r.kt)("b",null,"2023-01-10T00:00:00Z"),"&to-date=",(0,r.kt)("b",null,"2023-01-20T00:00:00Z"),"'","\n","curl 'https://content.guardianapis.com/search?order-by=oldest&from-date=",(0,r.kt)("b",null,"2023-01-20T00:00:00Z"),"&to-date=",(0,r.kt)("b",null,"2023-01-30T00:00:00Z"),"'","\n","..."),(0,r.kt)("p",null,"After an interval is processed, the cursor value of the last record will be saved as part of the connection as the new cutoff date."),(0,r.kt)("p",null,"In most cases, the default step size is fine, but there are two reasons to change it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"To protect a connection against intermittent failures"),' - if the "Step" size is a day, the cutoff date is saved after all records associated with a day are proccessed. If a sync fails halfway through because the API, the Airbyte system, the destination or the network between these components has a failure, then at most one day worth of data needs to be resynced. However, a smaller step size might cause more requests to the API and more load on the system. It depends on the expected amount of data and load characteristics of an API what step size is optimal, but for a lot of applications the default of one month is a good starting point.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The API requires the connector to fetch data in pre-specified chunks")," - for example the ",(0,r.kt)("a",{parentName:"li",href:"https://exchangeratesapi.io/documentation/"},"Exchange Rates API")," makes the date to fetch data for part of the URL path and only allows to fetch data for a single day at a time")),(0,r.kt)("h3",{id:"lookback-window"},"Lookback window"),(0,r.kt)("p",null,'The "Lookback window" specifies a duration that is subtracted from the last cutoff date before starting to sync.'),(0,r.kt)("p",null,"Some APIs update records over time but do not allow to filter or search by modification date, only by creation date. For example the API of The Guardian might change the title of an article after it got published, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"webPublicationDate")," still shows the original date the article got published initially."),(0,r.kt)("p",null,"In these cases, there are two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do not use incremental sync")," and always sync the full set of records to always have a consistent state, losing the advantages of reduced load and ",(0,r.kt)("a",{parentName:"li",href:"/understanding-airbyte/connections/incremental-deduped-history"},"automatic history keeping in the destination")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'Configure the "Lookback window"')," to not only sync exclusively new records, but resync some portion of records before the cutoff date to catch changes that were made to existing records, trading off data consistency and the amount of synced records. In the case of the API of The Guardian, news articles tend to only be updated for a few days after the initial release date, so this strategy should be able to catch most updates without having to resync all articles.")),(0,r.kt)("p",null,'Reiterating the example from above with a "Lookback window" of 2 days configured, let\'s assume the last encountered article looked like this:'),(0,r.kt)("pre",null,'{\n  "id": "business/live/2023/apr/15/uk-bosses-more-optimistic-energy-prices-fall-ai-spending-boom-economics-business-live",\n  "type": "liveblog",\n  "sectionId": "business",\n  "sectionName": "Business",\n  "webPublicationDate": ',(0,r.kt)("b",null,'"2023-04-15T07:30:58Z"'),",\n}"),(0,r.kt)("p",null,"Then when a sync is triggered for the same connection the next day, the following request is made:"),(0,r.kt)("pre",null,"curl 'https://content.guardianapis.com/search?order-by=oldest&from-date=",(0,r.kt)("b",null,"2023-04-13T07:30:58Z"),"&to-date=","<now>","'"),(0,r.kt)("h2",{id:"custom-parameter-injection"},"Custom parameter injection"),(0,r.kt)("p",null,'Using the "Inject start time / end time into outgoing HTTP request" option in the incremental sync form works for most cases, but sometimes the API has special requirements that can\'t be handled this way:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The API requires adding a prefix or a suffix to the actual value"),(0,r.kt)("li",{parentName:"ul"},"Multiple values need to be put together in a single parameter"),(0,r.kt)("li",{parentName:"ul"},"The value needs to be injected into the URL path"),(0,r.kt)("li",{parentName:"ul"},"Some conditional logic needs to be applied")),(0,r.kt)("p",null,"To handle these cases, disable injection in the incremental sync form and use the generic parameter section at the bottom of the stream configuration form to freely configure query parameters, headers and properties of the JSON body, by using jinja expressions and ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/understanding-the-yaml-file/reference/#/variables"},"available variables"),". You can also use these variables as part of the URL path."),(0,r.kt)("p",null,"For example the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sendgrid.com/api-reference/e-mail-activity/filter-all-messages"},"Sendgrid API")," requires setting both start and end time in a ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," parameter.\nFor this case, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_interval"),' variable to configure a request parameter with "key" ',(0,r.kt)("inlineCode",{parentName:"p"},"query"),' and "value" ',(0,r.kt)("inlineCode",{parentName:"p"},'last_event_time BETWEEN TIMESTAMP "{{stream_interval.start_time}}" AND TIMESTAMP "{{stream_interval.end_time}}"')," to filter down to the right window in time."))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);