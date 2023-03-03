"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3561],{15375:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={},i="Transformations with dbt (Part 2/3)",s={unversionedId:"operator-guides/transformation-and-normalization/transformations-with-dbt",id:"operator-guides/transformation-and-normalization/transformations-with-dbt",title:"Transformations with dbt (Part 2/3)",description:"Overview",source:"@site/../docs/operator-guides/transformation-and-normalization/transformations-with-dbt.md",sourceDirName:"operator-guides/transformation-and-normalization",slug:"/operator-guides/transformation-and-normalization/transformations-with-dbt",permalink:"/operator-guides/transformation-and-normalization/transformations-with-dbt",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/transformation-and-normalization/transformations-with-dbt.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Transformations with SQL (Part 1/3)",permalink:"/operator-guides/transformation-and-normalization/transformations-with-sql"},next:{title:"Transformations with Airbyte (Part 3/3)",permalink:"/operator-guides/transformation-and-normalization/transformations-with-airbyte"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transformations with dbt",id:"transformations-with-dbt",level:2},{value:"Validate dbt project settings",id:"validate-dbt-project-settings",level:3},{value:"Compile and build dbt normalization models",id:"compile-and-build-dbt-normalization-models",level:3},{value:"Exporting dbt normalization project outside Airbyte",id:"exporting-dbt-normalization-project-outside-airbyte",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transformations-with-dbt-part-23"},"Transformations with dbt (Part 2/3)"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This tutorial will describe how to integrate SQL based transformations with Airbyte syncs using specialized transformation tool: dbt."),(0,o.kt)("p",null,"This tutorial is the second part of the previous tutorial ",(0,o.kt)("a",{parentName:"p",href:"/operator-guides/transformation-and-normalization/transformations-with-sql"},"Transformations with SQL"),". Next, we'll wrap-up with a third part on submitting transformations back in Airbyte: ",(0,o.kt)("a",{parentName:"p",href:"/operator-guides/transformation-and-normalization/transformations-with-airbyte"},"Transformations with Airbyte"),"."),(0,o.kt)("p",null,"(","Example outputs are updated with Airbyte version 0.23.0-alpha from May 2021",")"),(0,o.kt)("h2",{id:"transformations-with-dbt"},"Transformations with dbt"),(0,o.kt)("p",null,"The tool in charge of transformation behind the scenes is actually called ",(0,o.kt)("a",{parentName:"p",href:"https://blog.getdbt.com/what--exactly--is-dbt-/"},"dbt")," ","(","Data Build Tool",")","."),(0,o.kt)("p",null,"Before generating the SQL files as we've seen in the previous tutorial, Airbyte sets up a dbt Docker instance and automatically generates a dbt project for us. This is created as specified in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/building-a-dbt-project/projects"},"dbt project documentation page")," with the right credentials for the target destination. The dbt models are then run afterward, thanks to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/dbt-cli/cli-overview"},"dbt CLI"),". However, for now, let's run through working with the dbt tool."),(0,o.kt)("h3",{id:"validate-dbt-project-settings"},"Validate dbt project settings"),(0,o.kt)("p",null,"Let's say we identified our workspace ","(","as shown in the previous tutorial ",(0,o.kt)("a",{parentName:"p",href:"/operator-guides/transformation-and-normalization/transformations-with-sql"},"Transformations with SQL"),")",", and we have a workspace ID of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'NORMALIZE_WORKSPACE="5/0/"\n')),(0,o.kt)("p",null,"We can verify that the dbt project is properly configured for that workspace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/env bash\ndocker run --rm -i -v airbyte_workspace:/data -w /data/$NORMALIZE_WORKSPACE/normalize --network host --entrypoint /usr/local/bin/dbt airbyte/normalization debug --profiles-dir=. --project-dir=.\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Running with dbt=0.19.1\ndbt version: 0.19.1\npython version: 3.8.8\npython path: /usr/local/bin/python\nos info: Linux-5.10.25-linuxkit-x86_64-with-glibc2.2.5\nUsing profiles.yml file at ./profiles.yml\nUsing dbt_project.yml file at /data/5/0/normalize/dbt_project.yml\n\nConfiguration:\n  profiles.yml file [OK found and valid]\n  dbt_project.yml file [OK found and valid]\n\nRequired dependencies:\n - git [OK found]\n\nConnection:\n  host: localhost\n  port: 3000\n  user: postgres\n  database: postgres\n  schema: quarantine\n  search_path: None\n  keepalives_idle: 0\n  sslmode: None\n  Connection test: OK connection ok\n")),(0,o.kt)("h3",{id:"compile-and-build-dbt-normalization-models"},"Compile and build dbt normalization models"),(0,o.kt)("p",null,"If the previous command does not show any errors or discrepancies, it is now possible to invoke the CLI from within the docker image to trigger transformation processing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/env bash\ndocker run --rm -i -v airbyte_workspace:/data -w /data/$NORMALIZE_WORKSPACE/normalize --network host --entrypoint /usr/local/bin/dbt airbyte/normalization run --profiles-dir=. --project-dir=.\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Running with dbt=0.19.1\nFound 4 models, 0 tests, 0 snapshots, 0 analyses, 364 macros, 0 operations, 0 seed files, 1 source, 0 exposures\n\nConcurrency: 32 threads (target='prod')\n\n1 of 1 START table model quarantine.covid_epidemiology....................................................... [RUN]\n1 of 1 OK created table model quarantine.covid_epidemiology.................................................. [SELECT 35822 in 0.47s]\n\nFinished running 1 table model in 0.74s.\n\nCompleted successfully\n\nDone. PASS=1 WARN=0 ERROR=0 SKIP=0 TOTAL=1\n")),(0,o.kt)("h3",{id:"exporting-dbt-normalization-project-outside-airbyte"},"Exporting dbt normalization project outside Airbyte"),(0,o.kt)("p",null,"As seen in the tutorial on ",(0,o.kt)("a",{parentName:"p",href:"/operator-guides/browsing-output-logs"},"exploring workspace folder"),", it is possible to browse the ",(0,o.kt)("inlineCode",{parentName:"p"},"normalize")," folder and examine further logs if an error occurs."),(0,o.kt)("p",null,"In particular, we can also take a look at the dbt models generated by Airbyte and export them to the local host filesystem:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\nTUTORIAL_DIR="$(pwd)/tutorial/"\nrm -rf $TUTORIAL_DIR/normalization-files\nmkdir -p $TUTORIAL_DIR/normalization-files\n\ndocker cp airbyte-server:/tmp/workspace/$NORMALIZE_WORKSPACE/normalize/ $TUTORIAL_DIR/normalization-files\n\nNORMALIZE_DIR=$TUTORIAL_DIR/normalization-files/normalize\ncd $NORMALIZE_DIR\ncat $NORMALIZE_DIR/models/generated/**/*.sql\n')),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"{{ config(alias=\"covid_epidemiology_ab1\", schema=\"_airbyte_quarantine\", tags=[\"top-level-intermediate\"]) }}\n-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema\nselect\n    {{ json_extract_scalar('_airbyte_data', ['key']) }} as {{ adapter.quote('key') }},\n    {{ json_extract_scalar('_airbyte_data', ['date']) }} as {{ adapter.quote('date') }},\n    {{ json_extract_scalar('_airbyte_data', ['new_tested']) }} as new_tested,\n    {{ json_extract_scalar('_airbyte_data', ['new_deceased']) }} as new_deceased,\n    {{ json_extract_scalar('_airbyte_data', ['total_tested']) }} as total_tested,\n    {{ json_extract_scalar('_airbyte_data', ['new_confirmed']) }} as new_confirmed,\n    {{ json_extract_scalar('_airbyte_data', ['new_recovered']) }} as new_recovered,\n    {{ json_extract_scalar('_airbyte_data', ['total_deceased']) }} as total_deceased,\n    {{ json_extract_scalar('_airbyte_data', ['total_confirmed']) }} as total_confirmed,\n    {{ json_extract_scalar('_airbyte_data', ['total_recovered']) }} as total_recovered,\n    _airbyte_emitted_at\nfrom {{ source('quarantine', '_airbyte_raw_covid_epidemiology') }}\n-- covid_epidemiology\n\n{{ config(alias=\"covid_epidemiology_ab2\", schema=\"_airbyte_quarantine\", tags=[\"top-level-intermediate\"]) }}\n-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type\nselect\n    cast({{ adapter.quote('key') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('key') }},\n    cast({{ adapter.quote('date') }} as {{ dbt_utils.type_string() }}) as {{ adapter.quote('date') }},\n    cast(new_tested as {{ dbt_utils.type_float() }}) as new_tested,\n    cast(new_deceased as {{ dbt_utils.type_float() }}) as new_deceased,\n    cast(total_tested as {{ dbt_utils.type_float() }}) as total_tested,\n    cast(new_confirmed as {{ dbt_utils.type_float() }}) as new_confirmed,\n    cast(new_recovered as {{ dbt_utils.type_float() }}) as new_recovered,\n    cast(total_deceased as {{ dbt_utils.type_float() }}) as total_deceased,\n    cast(total_confirmed as {{ dbt_utils.type_float() }}) as total_confirmed,\n    cast(total_recovered as {{ dbt_utils.type_float() }}) as total_recovered,\n    _airbyte_emitted_at\nfrom {{ ref('covid_epidemiology_ab1_558') }}\n-- covid_epidemiology\n\n{{ config(alias=\"covid_epidemiology_ab3\", schema=\"_airbyte_quarantine\", tags=[\"top-level-intermediate\"]) }}\n-- SQL model to build a hash column based on the values of this record\nselect\n    *,\n    {{ dbt_utils.surrogate_key([\n        adapter.quote('key'),\n        adapter.quote('date'),\n        'new_tested',\n        'new_deceased',\n        'total_tested',\n        'new_confirmed',\n        'new_recovered',\n        'total_deceased',\n        'total_confirmed',\n        'total_recovered',\n    ]) }} as _airbyte_covid_epidemiology_hashid\nfrom {{ ref('covid_epidemiology_ab2_558') }}\n-- covid_epidemiology\n\n{{ config(alias=\"covid_epidemiology\", schema=\"quarantine\", tags=[\"top-level\"]) }}\n-- Final base SQL model\nselect\n    {{ adapter.quote('key') }},\n    {{ adapter.quote('date') }},\n    new_tested,\n    new_deceased,\n    total_tested,\n    new_confirmed,\n    new_recovered,\n    total_deceased,\n    total_confirmed,\n    total_recovered,\n    _airbyte_emitted_at,\n    _airbyte_covid_epidemiology_hashid\nfrom {{ ref('covid_epidemiology_ab3_558') }}\n-- covid_epidemiology from {{ source('quarantine', '_airbyte_raw_covid_epidemiology') }}\n")),(0,o.kt)("p",null,"If you have ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/dbt-cli/installation/"},"dbt installed")," locally on your machine, you can then view, edit, version, customize, and run the dbt models in your project outside Airbyte syncs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/env bash \n\ndbt deps --profiles-dir=$NORMALIZE_DIR --project-dir=$NORMALIZE_DIR\ndbt run --profiles-dir=$NORMALIZE_DIR --project-dir=$NORMALIZE_DIR --full-refresh\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Running with dbt=0.19.1\nInstalling https://github.com/fishtown-analytics/dbt-utils.git@0.6.4\n  Installed from revision 0.6.4\n\nRunning with dbt=0.19.1\nFound 4 models, 0 tests, 0 snapshots, 0 analyses, 364 macros, 0 operations, 0 seed files, 1 source, 0 exposures\n\nConcurrency: 32 threads (target='prod')\n\n1 of 1 START table model quarantine.covid_epidemiology....................................................... [RUN]\n1 of 1 OK created table model quarantine.covid_epidemiology.................................................. [SELECT 35822 in 0.44s]\n\nFinished running 1 table model in 0.63s.\n\nCompleted successfully\n\nDone. PASS=1 WARN=0 ERROR=0 SKIP=0 TOTAL=1\n")),(0,o.kt)("p",null,"Now, that you've exported the generated normalization models, you can edit and tweak them as necessary."),(0,o.kt)("p",null,"If you want to know how to push your modifications back to Airbyte and use your updated dbt project during Airbyte syncs, you can continue with the following ",(0,o.kt)("a",{parentName:"p",href:"/operator-guides/transformation-and-normalization/transformations-with-airbyte"},"tutorial on importing transformations into Airbyte"),"..."))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,b=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);