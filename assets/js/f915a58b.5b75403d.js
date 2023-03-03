"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[36015],{37068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},o="November 2022",l={unversionedId:"release_notes/november_2022",id:"release_notes/november_2022",title:"November 2022",description:"Airbyte v0.40.18 to v0.40.23",source:"@site/../docs/release_notes/november_2022.md",sourceDirName:"release_notes",slug:"/release_notes/november_2022",permalink:"/release_notes/november_2022",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/release_notes/november_2022.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"December 2022",permalink:"/release_notes/december_2022"},next:{title:"October 2022",permalink:"/release_notes/october_2022"}},s={},p=[{value:"Airbyte v0.40.18 to v0.40.23",id:"airbyte-v04018-to-v04023",level:2},{value:"New features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"november-2022"},"November 2022"),(0,a.kt)("h2",{id:"airbyte-v04018-to-v04023"},"Airbyte ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.18"},"v0.40.18")," to ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.23"},"v0.40.23")),(0,a.kt)("p",null,"This page includes new features and improvements to the Airbyte Cloud and Airbyte Open Source platforms. "),(0,a.kt)("h3",{id:"new-features"},"New features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added multi-region Cloud architecture, which allows for better ",(0,a.kt)("a",{parentName:"li",href:"https://airbyte.com/blog/why-airbytes-eu-launch-is-a-milestone-for-our-data-protection-roadmap"},"data protection")," and for Airbyte Cloud to ",(0,a.kt)("a",{parentName:"li",href:"https://airbyte.com/blog/airbyte-cloud-is-now-available-in-europe"},"launch in Europe"),"."),(0,a.kt)("li",{parentName:"ul"},"Added the ",(0,a.kt)("a",{parentName:"li",href:"https://www.loom.com/share/acf899938ef74dec8dd61ba012bc872f"},"low-code connector builder")," UI to Airbyte Open Source. Run Airbyte v0.40.19 or higher and visit ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:8000/connector-builder")," to start building low-code connectors."),(0,a.kt)("li",{parentName:"ul"},"Added a Helm chart for deploying ",(0,a.kt)("inlineCode",{parentName:"li"},"airbyte-cron"),". New installations of Airbyte Open Source will now deploy ",(0,a.kt)("inlineCode",{parentName:"li"},"airbyte-cron")," by default. To disable cron, use ",(0,a.kt)("inlineCode",{parentName:"li"},"--set cron.enabled=false")," when running a ",(0,a.kt)("inlineCode",{parentName:"li"},"helm install"),". ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/18542"},"#18542")),(0,a.kt)("li",{parentName:"ul"},"Added a progress bar estimate to syncs in Airbyte Cloud. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/19814"},"#19814"))),(0,a.kt)("h3",{id:"improvements"},"Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved the Airbyte Protocol by introducing Airbyte Protocol v1 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/19846"},"#19846"),", which defines a set of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/5813700927cfc690d2bffcec28f5286e59ac0122/docs/understanding-airbyte/supported-data-types.md"},"well-known data types"),". ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/17486"},"#17486"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"These replace existing JSON Schema primitive types. "),(0,a.kt)("li",{parentName:"ul"},"They provide out-of-the-box validation and enforce specific formatting on some data types, like timestamps. "),(0,a.kt)("li",{parentName:"ul"},"Non-primitive types, like ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),", and ",(0,a.kt)("inlineCode",{parentName:"li"}," oneOf"),", still use raw JSON Schema types."),(0,a.kt)("li",{parentName:"ul"},"These well-known types mostly correspond with the existing Airbyte data types, aside from a few differences: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BinaryData")," is the only new type, which is used in places that previously produced a ",(0,a.kt)("inlineCode",{parentName:"li"},"Base64")," string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TimestampWithTimezone"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"TimestampWithoutTimezone"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"TimeWithTimezone"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"TimeWithoutTimezone")," have been in use for some time, so we made them official."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"big_integer")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"big_number")," types have been retired because they were not being used.")))))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,b=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return r?n.createElement(b,o(o({ref:t},m),{},{components:r})):n.createElement(b,o({ref:t},m))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);