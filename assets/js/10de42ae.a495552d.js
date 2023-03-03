"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[14961],{77472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i="Airbyte Protocol Docker Interface",c={unversionedId:"understanding-airbyte/airbyte-protocol-docker",id:"understanding-airbyte/airbyte-protocol-docker",title:"Airbyte Protocol Docker Interface",description:"Summary",source:"@site/../docs/understanding-airbyte/airbyte-protocol-docker.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/airbyte-protocol-docker",permalink:"/understanding-airbyte/airbyte-protocol-docker",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/understanding-airbyte/airbyte-protocol-docker.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Airbyte Protocol",permalink:"/understanding-airbyte/airbyte-protocol"},next:{title:"Basic Normalization",permalink:"/understanding-airbyte/basic-normalization"}},l={},s=[{value:"Summary",id:"summary",level:2},{value:"Source",id:"source",level:2},{value:"Pseudocode:",id:"pseudocode",level:3},{value:"Docker:",id:"docker",level:3},{value:"Destination",id:"destination",level:2},{value:"Pseudocode:",id:"pseudocode-1",level:3},{value:"Docker:",id:"docker-1",level:3},{value:"I/O:",id:"io",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"airbyte-protocol-docker-interface"},"Airbyte Protocol Docker Interface"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte Protocol")," describes a series of structs and interfaces for building data pipelines. The Protocol article describes those interfaces in language agnostic pseudocode, this article transcribes those into docker commands. Airbyte's implementation of the protocol is all done in docker. Thus, this reference is helpful for getting a more concrete look at how the Protocol is used. It can also be used as a reference for interacting with Airbyte's implementation of the Protocol."),(0,o.kt)("h2",{id:"source"},"Source"),(0,o.kt)("h3",{id:"pseudocode"},"Pseudocode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spec() -> ConnectorSpecification\ncheck(Config) -> AirbyteConnectionStatus\ndiscover(Config) -> AirbyteCatalog\nread(Config, ConfiguredAirbyteCatalog, State) -> Stream<AirbyteRecordMessage | AirbyteStateMessage>\n")),(0,o.kt)("h3",{id:"docker"},"Docker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -i <source-image-name> spec\ndocker run --rm -i <source-image-name> check --config <config-file-path>\ndocker run --rm -i <source-image-name> discover --config <config-file-path>\ndocker run --rm -i <source-image-name> read --config <config-file-path> --catalog <catalog-file-path> [--state <state-file-path>] > message_stream.json\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," command will emit a stream records to STDOUT."),(0,o.kt)("h2",{id:"destination"},"Destination"),(0,o.kt)("h3",{id:"pseudocode-1"},"Pseudocode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spec() -> ConnectorSpecification\ncheck(Config) -> AirbyteConnectionStatus\nwrite(Config, AirbyteCatalog, Stream<AirbyteMessage>(stdin)) -> Stream<AirbyteStateMessage>\n")),(0,o.kt)("h3",{id:"docker-1"},"Docker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -i <destination-image-name> spec\ndocker run --rm -i <destination-image-name> check --config <config-file-path>\ncat <&0 | docker run --rm -i <destination-image-name> write --config <config-file-path> --catalog <catalog-file-path>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," command will consume ",(0,o.kt)("inlineCode",{parentName:"p"},"AirbyteMessage"),"s from STDIN."),(0,o.kt)("h2",{id:"io"},"I/O:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connectors receive arguments on the command line via JSON files. ",(0,o.kt)("inlineCode",{parentName:"li"},"e.g. --catalog catalog.json")),(0,o.kt)("li",{parentName:"ul"},"They read ",(0,o.kt)("inlineCode",{parentName:"li"},"AirbyteMessage"),"s from STDIN. The destination ",(0,o.kt)("inlineCode",{parentName:"li"},"write")," action is the only command that consumes ",(0,o.kt)("inlineCode",{parentName:"li"},"AirbyteMessage"),"s."),(0,o.kt)("li",{parentName:"ul"},"They emit ",(0,o.kt)("inlineCode",{parentName:"li"},"AirbyteMessage"),"s on STDOUT.")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);