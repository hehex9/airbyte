"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[39026],{91365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},s="Postmarkapp",p={unversionedId:"integrations/sources/postmarkapp",id:"integrations/sources/postmarkapp",title:"Postmarkapp",description:"Overview",source:"@site/../docs/integrations/sources/postmarkapp.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/postmarkapp",permalink:"/integrations/sources/postmarkapp",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/postmarkapp.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"PostHog",permalink:"/integrations/sources/posthog"},next:{title:"PrestaShop",permalink:"/integrations/sources/prestashop"}},i={},l=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Streams",id:"streams",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up the Postmarkapp connector in Airbyte",id:"step-1-set-up-the-postmarkapp-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postmarkapp"},"Postmarkapp"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Postmarkapp source can sync data from the ",(0,n.kt)("a",{parentName:"p",href:"https://postmarkapp.com/developer"},"Postmarkapp API")),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Postmarkapp requires an API key to make request and retrieve data. You can find your API key in the ",(0,n.kt)("a",{parentName:"p",href:"https://account.postmarkapp.com/servers/9708911/credentials"},"Postmarkapp dashboard"),"."),(0,n.kt)("h2",{id:"streams"},"Streams"),(0,n.kt)("p",null,"Current supported streams: "),(0,n.kt)("p",null,"Server-API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://postmarkapp.com/developer/api/bounce-api#delivery-stats"},"Bounces: Deliverystats"),": Lets you access all reports regarding your bounces for a specific server. Bounces are available for 45 days after a bounce."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://postmarkapp.com/developer/api/message-streams-api#list-message-streams"},"Message-Streams"),": Lets you manage message streams for a specific server. Please note: A Server may have up to 10 Streams, including the default ones. Default Streams cannot be deleted, and Servers can only have 1 Inbound Stream."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://account.postmarkapp.com/servers/9708911/credentials"},"Outbound stats"),": Lets you get all of the statistics of your outbound emails for a specific server. These statistics are stored permantently and do not expire. All stats use EST timezone")),(0,n.kt)("p",null,"Account-API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://postmarkapp.com/developer/api/servers-api"},"Servers"),": Lets you manage servers for a specific account."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://postmarkapp.com/developer/api/domains-api"},"Domains"),": Gets a list of domains containing an overview of the domain and authentication status."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://postmarkapp.com/developer/api/signatures-api"},"Sender signatures"),": Gets a list of sender signatures containing brief details associated with your account.")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h2",{id:"step-1-set-up-the-postmarkapp-connector-in-airbyte"},"Step 1: Set up the Postmarkapp connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Postmarkapp")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,n.kt)("li",{parentName:"ol"},"Set the name for your source (Postmarkapp)."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Postmarkapp source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},"18220"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: Postmarkapp API ","[low-code CDK]")))))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(k,s(s({ref:t},c),{},{components:r})):a.createElement(k,s({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);