"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[22516],{22651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={},i="Set up a Connection",c={unversionedId:"quickstart/set-up-a-connection",id:"quickstart/set-up-a-connection",title:"Set up a Connection",description:"When we create the connection, we can select which data stream we want to replicate. We can also select if we want an incremental replication, although it isn't currently offered for this source. The replication will run at the specified sync frequency.",source:"@site/../docs/quickstart/set-up-a-connection.md",sourceDirName:"quickstart",slug:"/quickstart/set-up-a-connection",permalink:"/quickstart/set-up-a-connection",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/quickstart/set-up-a-connection.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Add a Destination",permalink:"/quickstart/add-a-destination"},next:{title:"Deploy Airbyte Open Source",permalink:"/category/deploy-airbyte-open-source"}},s={},l=[{value:"Check the logs of your first sync",id:"check-the-logs-of-your-first-sync",level:2},{value:"Check the data of your first sync",id:"check-the-data-of-your-first-sync",level:2},{value:"That&#39;s it!",id:"thats-it",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-up-a-connection"},"Set up a Connection"),(0,a.kt)("p",null,"When we create the connection, we can select which data stream we want to replicate. We can also select if we want an incremental replication, although it isn't currently offered for this source. The replication will run at the specified sync frequency."),(0,a.kt)("p",null,"To set it up, just follow the instructions on the screenshot below."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(83220).Z,width:"2328",height:"1310"})),(0,a.kt)("h2",{id:"check-the-logs-of-your-first-sync"},"Check the logs of your first sync"),(0,a.kt)("p",null,"After you've completed the onboarding, you will be redirected to the source list and will see the source you just added. Click on it to find more information about it. You will now see all the destinations connected to that source. Click on it and you will see the sync history."),(0,a.kt)("p",null,"From there, you can look at the logs, download them, force a sync and adjust the configuration of your connection."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(99712).Z,width:"3242",height:"1572"})),(0,a.kt)("h2",{id:"check-the-data-of-your-first-sync"},"Check the data of your first sync"),(0,a.kt)("p",null,"Now let's verify that this worked:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat /tmp/airbyte_local/json_data/_airbyte_raw_pokemon.jsonl\n")),(0,a.kt)("p",null,"You should see a large JSON object with the response from the API, giving you a lot of information about the selected Pokemon."),(0,a.kt)("p",null,"If you have ",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,a.kt)("inlineCode",{parentName:"a"},"jq"))," installed, let's look at some of the data that we have replicated about ",(0,a.kt)("inlineCode",{parentName:"p"},"charizard"),". We'll pull its abilities and weight:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat _airbyte_raw_pokemon.jsonl | \njq '._airbyte_data | {abilities: .abilities, weight: .weight}'\n")),(0,a.kt)("p",null,"And there you have it. You've pulled data from an API directly into a file, with all of the actual configuration for this replication only taking place in the UI."),(0,a.kt)("p",null,"Note: If you are using Airbyte on Windows with WSL2 and Docker, refer to ",(0,a.kt)("a",{parentName:"p",href:"/operator-guides/locating-files-local-destination"},"this tutorial")," or ",(0,a.kt)("a",{parentName:"p",href:"/integrations/destinations/local-json#access-replicated-data-files"},"this section")," in the local-json destination guide to locate the replicated folder and file."),(0,a.kt)("h2",{id:"thats-it"},"That's it!"),(0,a.kt)("p",null,"This is just the beginning of using Airbyte. We support a large collection of sources and destinations. You can even contribute your own."),(0,a.kt)("p",null,"If you have any questions at all, please reach out to us on ",(0,a.kt)("a",{parentName:"p",href:"https://slack.airbyte.io/"},"Slack"),". We\u2019re still in alpha, so if you see any rough edges or want to request a connector you need, please create an issue on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte"},"Github")," or leave a thumbs up on an existing issue."),(0,a.kt)("p",null,"Thank you and we hope you enjoy using Airbyte."))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83220:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/getting-started-connection-149beeb94c67a4d27b5523c6425ca94b.png"},99712:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/getting-started-logs-421325d17b21f01ed7ff18e1000ac852.png"}}]);