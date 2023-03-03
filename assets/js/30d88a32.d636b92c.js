"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[43732],{26276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},o="Jenkins",l={unversionedId:"integrations/sources/jenkins",id:"integrations/sources/jenkins",title:"Jenkins",description:"Overview",source:"@site/../docs/integrations/sources/jenkins.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/jenkins",permalink:"/integrations/sources/jenkins",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/jenkins.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Iterable",permalink:"/integrations/sources/iterable"},next:{title:"Jira",permalink:"/integrations/sources/jira"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jenkins"},"Jenkins"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Jenkins source is maintained by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/faros-ai/airbyte-connectors/tree/main/sources/jenkins-source"},"Faros\nAI"),".\nPlease file any support requests on that repo to minimize response time from the\nmaintainers. The source supports both Full Refresh and Incremental syncs. You\ncan choose if this source will copy only the new or updated data, or all rows\nin the tables and columns you set up for replication, every time a sync is run."),(0,a.kt)("h3",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"Several output streams are available from this source:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://your.jenkins.url/job/$JOB_NAME/$BUILD_NUMBER/api/json?pretty=true"},"Builds")," ","(","Incremental",")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://your.jenkins.url/job/$JOB_NAME/api/json?pretty=true"},"Jobs"))),(0,a.kt)("p",null,"In the above links, replace ",(0,a.kt)("inlineCode",{parentName:"p"},"your.jenkins.url")," with the url of your Jenkins\ninstance, and replace any environment variables with an existing Jenkins job or\nbuild id."),(0,a.kt)("p",null,"If there are more endpoints you'd like Faros AI to support, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/faros-ai/airbyte-connectors/issues/new"},"create an\nissue.")),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,a.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,a.kt)("p",null,"The Jenkins source should not run into Jenkins API limitations under normal\nusage. Please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/faros-ai/airbyte-connectors/issues/new"},"create an\nissue")," if you see any\nrate limit issues that are not automatically retried successfully."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jenkins Server"),(0,a.kt)("li",{parentName:"ul"},"Jenkins User"),(0,a.kt)("li",{parentName:"ul"},"Jenkins API Token")),(0,a.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,a.kt)("p",null,"Login to your Jenkins server in your browser and go to\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://your.jenkins.url/me/configure")," to generate your API token."),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2021-10-01"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/faros-ai/airbyte-connectors/pull/114"},"114")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Added projects stream to Phabricator + cleanup")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2021-10-01"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/faros-ai/airbyte-connectors/pull/113"},"113")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Added revisions & users streams to Phabricator source + bump version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2021-09-27"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/faros-ai/airbyte-connectors/pull/101"},"101")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Exclude tests from Docker + fix path + bump version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2021-09-27"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/faros-ai/airbyte-connectors/pull/100"},"100")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Update Jenkins spec + refactor + add Phabricator source skeleton")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2021-09-25"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/faros-ai/airbyte-connectors/pull/64"},"64")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Add Jenkins source")))))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);