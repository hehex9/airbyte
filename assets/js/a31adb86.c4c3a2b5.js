"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[45862],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=n,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={},l="Exasol",o={unversionedId:"integrations/destinations/exasol",id:"integrations/destinations/exasol",title:"Exasol",description:"Exasol is the in-memory database built for analytics.",source:"@site/../docs/integrations/destinations/exasol.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/exasol",permalink:"/integrations/destinations/exasol",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/exasol.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Elasticsearch",permalink:"/integrations/destinations/elasticsearch"},next:{title:"Firebolt",permalink:"/integrations/destinations/firebolt"}},s={},d=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Maximum data size two million characters",id:"maximum-data-size-two-million-characters",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Network Access",id:"network-access",level:4},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exasol"},"Exasol"),(0,n.kt)("p",null,"Exasol is the in-memory database built for analytics."),(0,n.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"Each Airbyte Stream becomes an Exasol table and each Airbyte Field becomes an Exasol column. Each Exasol table created by Airbyte will contain 3 columns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_AIRBYTE_AB_ID"),": a uuid assigned by Airbyte to each event that is processed. The column type in Exasol is ",(0,n.kt)("inlineCode",{parentName:"li"},"VARCHAR(64)"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_AIRBYTE_DATA"),": a json blob representing with the event data. The column type in Exasol is ",(0,n.kt)("inlineCode",{parentName:"li"},"VARCHAR(2000000)"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_AIRBYTE_EMITTED_AT"),": a timestamp representing when the event was pulled from the data source. The column type in Exasol is ",(0,n.kt)("inlineCode",{parentName:"li"},"TIMESTAMP"),".")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("p",null,"The Exasol destination supports the following features:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported? (Yes/No)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Normalization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TLS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSH Tunnel Support"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"limitations"},"Limitations"),(0,n.kt)("h4",{id:"maximum-data-size-two-million-characters"},"Maximum data size two million characters"),(0,n.kt)("p",null,"Exasol does not have a special data type for storing data of arbitrary length or JSON. That's why this connector uses type ",(0,n.kt)("inlineCode",{parentName:"p"},"VARCHAR(2000000)")," for storing Airbyte data."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"To use the Exasol destination, you'll need Exasol database version 7.1 or above."),(0,n.kt)("h4",{id:"network-access"},"Network Access"),(0,n.kt)("p",null,"Make sure your Exasol database can be accessed by Airbyte. If your database is within a VPC, you may need to allow access from the IP you're using to expose Airbyte."),(0,n.kt)("h4",{id:"permissions"},(0,n.kt)("strong",{parentName:"h4"},"Permissions")),(0,n.kt)("p",null,"As Airbyte namespaces allow to store data into different schemas, there are different scenarios requiring different permissions assigned to the user account. The following table describes 4 scenarios regarding the login user and the destination user."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Login user"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Destination user"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required permissions"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DBA User"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Regular user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Same user as login"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create, drop and write table, create session"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Regular user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any existing user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create, drop and write ANY table, create session"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Grants can be provided on a system level by DBA or by target user directly")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Regular user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not existing user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create, drop and write ANY table, create user, create session"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Grants should be provided on a system level by DBA")))),(0,n.kt)("p",null,"We highly recommend creating an Airbyte-specific user for this purpose."),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("p",null,"You should now have all the requirements needed to configure Exasol as a destination in the UI. You'll need the following information to configure the Exasol destination:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Host"),(0,n.kt)("li",{parentName:"ul"},"Port"),(0,n.kt)("li",{parentName:"ul"},"Fingerprint of the Exasol server's TLS certificate (if the database uses a self-signed certificate)"),(0,n.kt)("li",{parentName:"ul"},"Username"),(0,n.kt)("li",{parentName:"ul"},"Password")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/xxx"},"xxx")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix the build")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-??"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21200"},"21200")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial version of the Exasol destination")))))}m.isMDXComponent=!0}}]);