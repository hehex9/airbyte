"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8017],{69651:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={},c="Commcare",i={unversionedId:"integrations/sources/commcare",id:"integrations/sources/commcare",title:"Commcare",description:"This page guides you through the process of setting up the Commcare source connector.",source:"@site/../docs/integrations/sources/commcare.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/commcare",permalink:"/integrations/sources/commcare",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/commcare.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Coinmarketcap API",permalink:"/integrations/sources/coinmarketcap"},next:{title:"Commercetools",permalink:"/integrations/sources/commercetools"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up the Commcare source connector",id:"set-up-the-commcare-source-connector",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"commcare"},"Commcare"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Commcare source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your Commcare API Key"),(0,n.kt)("li",{parentName:"ul"},"The Application ID you are interested in"),(0,n.kt)("li",{parentName:"ul"},"The start date to replicate records")),(0,n.kt)("h2",{id:"set-up-the-commcare-source-connector"},"Set up the Commcare source connector"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into your ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Airbyte Cloud")," or Airbyte Open Source account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Commcare")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for your source."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"API Key"),", enter your Commcare API Key."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Commcare source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh"),(0,n.kt)("li",{parentName:"ul"},"Overwrite"),(0,n.kt)("li",{parentName:"ul"},"Incremental")),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"The Commcare source connector supports the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Application"),(0,n.kt)("li",{parentName:"ul"},"Case"),(0,n.kt)("li",{parentName:"ul"},"Form")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("p",null,"| Version | Date | Pull Request | Subject |\n| 0.1.0   | 2022-11-08 | ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/20220"},"20220"),"   | Commcare Source Connector |"))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?o.createElement(y,c(c({ref:t},u),{},{components:r})):o.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);