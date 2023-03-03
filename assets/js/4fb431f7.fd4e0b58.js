"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[53301],{83985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="Pocket",l={unversionedId:"integrations/sources/pocket",id:"integrations/sources/pocket",title:"Pocket",description:"Overview",source:"@site/../docs/integrations/sources/pocket.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/pocket",permalink:"/integrations/sources/pocket",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/pocket.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Plausible",permalink:"/integrations/sources/plausible"},next:{title:"Pok\xe9API",permalink:"/integrations/sources/pokeapi"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup Guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pocket"},"Pocket"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Pocket source connector only supports full refresh syncs"),(0,a.kt)("h3",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"A single output stream is available from this source:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://getpocket.com/developer/docs/v3/retrieve"},"Retrieve"))),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,a.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,a.kt)("p",null,"For more info on rate limiting, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://getpocket.com/developer/docs/rate-limits"},"Pocket Docs > Rate Limits")),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Consumer Key"),(0,a.kt)("li",{parentName:"ul"},"Access Token")),(0,a.kt)("h3",{id:"setup-guide"},"Setup Guide"),(0,a.kt)("p",null,"In order to obtain the Consumer Key and Access Token, please follow the official ",(0,a.kt)("a",{parentName:"p",href:"https://getpocket.com/developer/docs/authentication"},"Pocket Authentication docs"),"."),(0,a.kt)("p",null,"It's nevertheless, very recommended to follow ",(0,a.kt)("a",{parentName:"p",href:"https://www.jamesfmackenzie.com/getting-started-with-the-pocket-developer-api/"},"this guide")," by James Mackenzie, which is summarized below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an App in the ",(0,a.kt)("a",{parentName:"li",href:"https://getpocket.com/developer/apps/new"},"Pocket Developer Portal"),", give it Retrieve permissions and get your Consumer Key."),(0,a.kt)("li",{parentName:"ol"},"Obtain a Request Token. To do so, you need to issue a POST request to get a temporary Request Token. You can execute the command below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl --insecure -X POST -H \'Content-Type: application/json\' -H \'X-Accept: application/json\' \\\n    https://getpocket.com/v3/oauth/request  -d \'{"consumer_key":"REPLACE-ME","redirect_uri":"http://www.google.com"}\'\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Visit the following website from your browser, and authorize the app: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://getpocket.com/auth/authorize?request_token=REPLACE-ME&redirect_uri=http://www.google.com")),(0,a.kt)("li",{parentName:"ol"},"Convert your Request Token Into a Pocket Access Token. To do so, you can execute the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl --insecure -X POST -H \'Content-Type: application/json\' -H \'X-Accept: application/json\' \\\n    https://getpocket.com/v3/oauth/authorize  -d \'{"consumer_key":"REPLACE-ME","code":"REQUEST-TOKEN"}\'\n')),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-10-30"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18655"},"18655")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: Pocket")))))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);