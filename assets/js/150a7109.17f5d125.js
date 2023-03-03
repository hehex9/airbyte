"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[82605],{44676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={},c="Configuring Connector Resources",a={unversionedId:"operator-guides/configuring-connector-resources",id:"operator-guides/configuring-connector-resources",title:"Configuring Connector Resources",description:"As noted in Workers & Jobs, there are four different types of jobs.",source:"@site/../docs/operator-guides/configuring-connector-resources.md",sourceDirName:"operator-guides",slug:"/operator-guides/configuring-connector-resources",permalink:"/operator-guides/configuring-connector-resources",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/configuring-connector-resources.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Configuring the Airbyte Database",permalink:"/operator-guides/configuring-airbyte-db"},next:{title:"Browsing Output Logs",permalink:"/operator-guides/browsing-output-logs"}},s={},l=[{value:"Configuring Instance-Wide Requirements",id:"configuring-instance-wide-requirements",level:2},{value:"Configuring Connector-Specific Requirements",id:"configuring-connector-specific-requirements",level:2},{value:"Configuring Connection-Specific Requirements",id:"configuring-connection-specific-requirements",level:2},{value:"Debugging Connection Resources",id:"debugging-connection-resources",level:2}],u={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-connector-resources"},"Configuring Connector Resources"),(0,o.kt)("p",null,"As noted in ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/jobs"},"Workers & Jobs"),", there are four different types of jobs."),(0,o.kt)("p",null,"Although it is possible to configure resources for all four jobs, we focus on Sync jobs as it is the most frequently run job."),(0,o.kt)("p",null,"There are three different ways to configure connector resource requirements for a Sync:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Instance-wide - applies to all containers in a Sync."),(0,o.kt)("li",{parentName:"ol"},"Connector-specific - applies to all containers of that connector type in a Sync."),(0,o.kt)("li",{parentName:"ol"},"Connection-specific - applies to all containers of that connection in a Sync.")),(0,o.kt)("p",null,"In general, ",(0,o.kt)("strong",{parentName:"p"},"the narrower scope the requirement, the higher the precedence"),"."),(0,o.kt)("p",null,"In decreasing order of precedence:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connection-specific - Highest precedence. Overrides all other configuration. We recommend using this on a case-by-case basis."),(0,o.kt)("li",{parentName:"ol"},"Connector-specific - Second-highest precedence. Overrides instance-wide configuration. Mostly for internal Airbyte-use. We recommend staying away from this."),(0,o.kt)("li",{parentName:"ol"},"Instance-wide - Lowest precedence. Overridden by all other configuration. Intended to be a default. We recommend setting this as a baseline.")),(0,o.kt)("h2",{id:"configuring-instance-wide-requirements"},"Configuring Instance-Wide Requirements"),(0,o.kt)("p",null,"Instance-wide requirements are the simplest requirement to configure. All that is needed is to set the following env vars:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"JOB_MAIN_CONTAINER_CPU_REQUEST")," -  Define the job container's minimum CPU usage. Units follow either Docker or Kubernetes, depending on the deployment. Defaults to none."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"JOB_MAIN_CONTAINER_CPU_LIMIT")," - Define the job container's maximum CPU usage. Units follow either Docker or Kubernetes, depending on the deployment. Defaults to none."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"JOB_MAIN_CONTAINER_MEMORY_REQUEST")," - Define the job container's minimum RAM usage. Units follow either Docker or Kubernetes, depending on the deployment. Defaults to none."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"JOB_MAIN_CONTAINER_MEMORY_LIMIT")," - Define the job container's maximum RAM usage. Units follow either Docker or Kubernetes, depending on the deployment. Defaults to none.")),(0,o.kt)("h2",{id:"configuring-connector-specific-requirements"},"Configuring Connector-Specific Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect to the database and run the following query with the image name replaced to find the connector definition id.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select * from actor_definition where actor_definition.docker_repository like '%<image-name>';\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Run the following commend with the resource requirements and the connection definition id filled in.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'update actor_definition set resource_requirements = \'{"jobSpecific": [{"jobType": "sync", "resourceRequirements": {"cpu_limit": "0.5", "cpu_request": "0.5", "memory_limit": "500Mi", "memory_request": "500Mi"}}]}\' where id = \'<id-from-step-1>\';\n')),(0,o.kt)("h2",{id:"configuring-connection-specific-requirements"},"Configuring Connection-Specific Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the connection in the Airbyte UI and extract the connection id from the url.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The url format is ",(0,o.kt)("inlineCode",{parentName:"li"},"<base_url>/workspaces/<workspace-id>/connections/<connection-id>/status"),".\nIf the url is ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:8000/workspaces/92ad8c0e-d204-4bb4-9c9e-30fe25614eee/connections/5432b428-b04a-4562-a12b-21c7b9e8b63a/status"),",\nthe connection id is ",(0,o.kt)("inlineCode",{parentName:"li"},"5432b428-b04a-4562-a12b-21c7b9e8b63a"),"."))),(0,o.kt)("li",{parentName:"ol"},"Connect to the database and run the following command with the connection id and resource requirements filled in.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'// SQL command with example\nupdate connection set resource_requirements = \'{"cpu_limit": "0.5", "cpu_request": "0.5", "memory_limit": "500Mi", "memory_request": "500Mi"}\' where id = \'<id-from-step-1>\';\n')),(0,o.kt)("h2",{id:"debugging-connection-resources"},"Debugging Connection Resources"),(0,o.kt)("p",null,"Airbyte logs the resource requirements as part of the job logs as containers are created. Both source and destination containers are logged."),(0,o.kt)("p",null,"If a job is running out-of-memory, simply navigate to the Job in the UI, and look for the log to confirm the right configuration is being detected."),(0,o.kt)("p",null,"On Docker, the log will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Creating docker container = destination-e2e-test-write-39-0-vnqtl with resources io.airbyte.config.ResourceRequirements@1d86d7c9[cpuRequest=<null>,cpuLimit=<null>,memoryRequest=200Mi,memoryLimit=200Mi]\n")),(0,o.kt)("p",null,"On Kubernetes, the log will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022-08-12 01:22:20 INFO i.a.w.p.KubeProcessFactory(create):100 - Attempting to start pod = source-intercom-check-480195-0-abvnr for airbyte/source-intercom:0.1.24 with resources io.airbyte.config.ResourceRequirements@11cc9fb9[cpuRequest=2,cpuLimit=2,memoryRequest=200Mi,memoryLimit=200Mi]\n")))}m.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);