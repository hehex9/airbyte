"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9419],{25938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="Pulsar",l={unversionedId:"integrations/destinations/pulsar",id:"integrations/destinations/pulsar",title:"Pulsar",description:"Overview",source:"@site/../docs/integrations/destinations/pulsar.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/pulsar",permalink:"/integrations/destinations/pulsar",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/pulsar.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"PubSub",permalink:"/integrations/destinations/pubsub"},next:{title:"R2",permalink:"/integrations/destinations/r2"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Network Access",id:"network-access",level:4},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Target topics",id:"target-topics",level:4},{value:"Setup the Pulsar destination in Airbyte",id:"setup-the-pulsar-destination-in-airbyte",level:3},{value:"CHANGELOG",id:"changelog",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pulsar"},"Pulsar"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Airbyte Pulsar destination allows you to sync data to Pulsar. Each stream is written to the corresponding Pulsar topic."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Airbyte Open Source users using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/integrations/sources/postgres"},"Postgres")," source connector, ",(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/operator-guides/upgrading-airbyte/"},"upgrade")," your Airbyte platform to version ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.40.0-alpha")," or newer and upgrade your Pulsar connector to version ",(0,r.kt)("inlineCode",{parentName:"li"},"0.1.3")," or newer")),(0,r.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,r.kt)("h4",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"Each stream will be output into a Pulsar topic."),(0,r.kt)("p",null,"Currently, this connector only writes data with JSON format. More formats ","(","e.g. Apache Avro",")"," will be supported in the future."),(0,r.kt)("p",null,"Each record will contain in its key the uuid assigned by Airbyte, and in the value these 3 fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data encoded in base64 ."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_stream"),": the name of each record's stream.")),(0,r.kt)("h4",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To use the Pulsar destination, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Pulsar cluster 2.8 or above.")),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h4",{id:"network-access"},"Network Access"),(0,r.kt)("p",null,"Make sure your Pulsar brokers can be accessed by Airbyte."),(0,r.kt)("h4",{id:"permissions"},(0,r.kt)("strong",{parentName:"h4"},"Permissions")),(0,r.kt)("p",null,"Airbyte should be allowed to write messages into topics, and these topics should be created before writing into Pulsar or, at least, enable the configuration in the brokers ",(0,r.kt)("inlineCode",{parentName:"p"},"allowAutoTopicCreation")," ","(","which is not recommended for production environments",")","."),(0,r.kt)("p",null,"Note that if you choose to use dynamic topic names, you will probably need to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"allowAutoTopicCreation")," to avoid your connection failing if there was an update to the source connector's schema. Otherwise a hardcoded topic name may be best."),(0,r.kt)("p",null,"Also, notice that the messages will be sent to topics based on the configured Pulsar ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_tenant")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_namespace")," configs with their ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_type"),"."),(0,r.kt)("h4",{id:"target-topics"},"Target topics"),(0,r.kt)("p",null,"You can determine the topics to which messages are written via the ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_pattern")," configuration parameter in its corresponding Pulsar ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_tenant"),"-",(0,r.kt)("inlineCode",{parentName:"p"},"topic_namespace"),". Messages can be written to either a hardcoded, pre-defined topic, or dynamically written to different topics based on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/namespaces"},"namespace")," or stream they came from."),(0,r.kt)("p",null,"To write all messages to a single hardcoded topic, enter its name in the ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_pattern")," field e.g: setting ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_pattern")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic-name")," will write all messages from all streams and namespaces to that topic."),(0,r.kt)("p",null,"To define the output topics dynamically, you can leverage the ",(0,r.kt)("inlineCode",{parentName:"p"},"{namespace}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{stream}")," pattern variables, which cause messages to be written to different topics based on the values present when producing the records. For example, setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"topic_pattern")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_syncs/{namespace}/{stream}")," means that messages from namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"n1")," and stream ",(0,r.kt)("inlineCode",{parentName:"p"},"s1")," will get written to the topic ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_syncs/n1/s1"),", and messages from ",(0,r.kt)("inlineCode",{parentName:"p"},"s2")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_syncs/n1/s2")," etc."),(0,r.kt)("p",null,"If you define output topic dynamically, you might want to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"allowAutoTopicCreation")," to avoid your connection failing if there was an update to the source connector's schema. Otherwise, you'll need to manually create topics in Pulsar as they are added/updated in the source, which is the recommended option for production environments."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTICE"),": a naming convention transformation will be applied to the target topic name using the ",(0,r.kt)("inlineCode",{parentName:"p"},"StandardNameTransformer")," so that some special characters will be replaced."),(0,r.kt)("h3",{id:"setup-the-pulsar-destination-in-airbyte"},"Setup the Pulsar destination in Airbyte"),(0,r.kt)("p",null,"You should now have all the requirements needed to configure Pulsar as a destination in the UI. You can configure the following parameters on the Pulsar destination ","(","though many of these are optional or have default values",")",":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pulsar brokers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use TLS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Topic type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Topic tenant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Topic namespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Topic pattern")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Test topic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Producer name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sync producer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compression type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Message send timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max pending messages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max pending messages across partitions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable batching")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Batching max messages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Batching max publish delay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block if queue is full"))),(0,r.kt)("p",null,"More info about this can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/client-libraries-java/#producer"},"Pulsar producer configs documentation site"),"."),(0,r.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15349"},"15349")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Pulsar destination to use outputRecordCollector to properly store state")))))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);