"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[60794],{88584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="October 2022",l={unversionedId:"release_notes/october_2022",id:"release_notes/october_2022",title:"October 2022",description:"Airbyte v0.40.13 to v0.40.17",source:"@site/../docs/release_notes/october_2022.md",sourceDirName:"release_notes",slug:"/release_notes/october_2022",permalink:"/release_notes/october_2022",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/release_notes/october_2022.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"November 2022",permalink:"/release_notes/november_2022"},next:{title:"September 2022",permalink:"/release_notes/september_2022"}},s={},p=[{value:"Airbyte v0.40.13 to v0.40.17",id:"airbyte-v04013-to-v04017",level:2},{value:"New features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"october-2022"},"October 2022"),(0,a.kt)("h2",{id:"airbyte-v04013-to-v04017"},"Airbyte ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.13"},"v0.40.13")," to ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.17"},"v0.40.17")),(0,a.kt)("p",null,"This page includes new features and improvements to the Airbyte Cloud and Airbyte Open Source platforms. "),(0,a.kt)("h3",{id:"new-features"},"New features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added the low-code connector builder UI to Airbyte OSS. It includes an embedded YAML editor and significantly reduces the time and complexity of building and maintaining connectors. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/17482"},"#17482")),(0,a.kt)("li",{parentName:"ul"},"Added Datadog Real User Monitoring (RUM) support to the webapp, which helps us monitor frontend performance in Airbyte Cloud. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/17821"},"#17821")),(0,a.kt)("li",{parentName:"ul"},"Added Nginx and Basic Auth to ensure security when using Airbyte Open Source. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/17694"},"#17694"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Now when you start the Airbyte server and go to localhost:8000, you\u2019ll be prompted to log in before accessing your Airbyte workspace.   "),(0,a.kt)("li",{parentName:"ul"},"You should change the default username (airbyte) and password (password) before you deploy Airbyte. If you do not want a username or password, you can remove them by setting ",(0,a.kt)("inlineCode",{parentName:"li"},"BASIC_AUTH_USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"BASIC_AUTH_PASSWORD"),' to empty values (" ") in your ',(0,a.kt)("inlineCode",{parentName:"li"},".env")," file. "),(0,a.kt)("li",{parentName:"ul"},"Our ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/17982"},"CLI")," and ",(0,a.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/deploying-airbyte/local-deployment"},"docs")," have been updated to reflect this change.")))),(0,a.kt)("h3",{id:"improvements"},"Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Since adding Basic Auth to Airbyte Open Source, we improved the ",(0,a.kt)("inlineCode",{parentName:"li"},"load_test")," script to reflect this change. Now when the ",(0,a.kt)("inlineCode",{parentName:"li"},"load_test")," script sources the ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file, it includes ",(0,a.kt)("inlineCode",{parentName:"li"},"BASIC_AUTH_USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"BASIC_AUTH_PASSWORD")," when calling the API. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/18273"},"#18273")),(0,a.kt)("li",{parentName:"ul"},"Improved the Airbyte platform by updating the Apache Commons Text from 1.9 to 1.10.0 because version 1.9 was affected by ",(0,a.kt)("a",{parentName:"li",href:"https://nvd.nist.gov/vuln/detail/CVE-2022-42889"},"CVE 2022-42889")," (Text4Shell). ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/18273"},"#18273")," ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We do not intend to update older versions of Airbyte because we were not affected by the vulnerable behavior:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Our direct usages of ",(0,a.kt)("inlineCode",{parentName:"li"},"commons-text")," either do not use the vulnerable class or are pinned to an unaffected version."),(0,a.kt)("li",{parentName:"ul"},"Almost all of our transitive dependencies on ",(0,a.kt)("inlineCode",{parentName:"li"},"commons-text")," are limited to test code. Runtime code has no vulnerable transitive dependencies on ",(0,a.kt)("inlineCode",{parentName:"li"},"commons-text"),".")))))))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);