"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[93543],{68800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Advanced Topics",l={unversionedId:"connector-development/config-based/advanced-topics",id:"connector-development/config-based/advanced-topics",title:"Advanced Topics",description:"Object instantiation",source:"@site/../docs/connector-development/config-based/advanced-topics.md",sourceDirName:"connector-development/config-based",slug:"/connector-development/config-based/advanced-topics",permalink:"/connector-development/config-based/advanced-topics",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/advanced-topics.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"YAML Reference",permalink:"/connector-development/config-based/understanding-the-yaml-file/reference"},next:{title:"Python CDK Speedrun: Creating a Source",permalink:"/connector-development/tutorials/cdk-speedrun"}},s={},p=[{value:"Object instantiation",id:"object-instantiation",level:2},{value:"$parameters",id:"parameters",level:2},{value:"References",id:"references",level:2},{value:"String interpolation",id:"string-interpolation",level:2},{value:"Component schema reference",id:"component-schema-reference",level:2},{value:"Custom components",id:"custom-components",level:2},{value:"Custom Components that pass fields to child components",id:"custom-components-that-pass-fields-to-child-components",level:3},{value:"How the framework works",id:"how-the-framework-works",level:2},{value:"More readings",id:"more-readings",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-topics"},"Advanced Topics"),(0,r.kt)("h2",{id:"object-instantiation"},"Object instantiation"),(0,r.kt)("p",null,"This section describes the object that are to be instantiated from the YAML definition."),(0,r.kt)("p",null,"If the component is a literal, then it is returned as is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"3\n")),(0,r.kt)("p",null,"will result in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"3\n")),(0,r.kt)("p",null,'If the component definition is a mapping with a "type" field,\nthe factory will lookup the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/declarative/parsers/class_types_registry.py"},"CLASS_TYPES_REGISTRY"),' and replace the "type" field by "class_name" -> CLASS_TYPES_REGISTRY',"[type]","\nand instantiate the object from the resulting mapping"),(0,r.kt)("p",null,'If the component definition is a mapping with neither a "class_name" nor a "type" field,\nthe factory will do a best-effort attempt at inferring the component type by looking up the parent object\'s constructor type hints.\nIf the type hint is an interface present in ',"[DEFAULT_IMPLEMENTATIONS_REGISTRY]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/declarative/parsers/default_implementation_registry.py"},"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/declarative/parsers/default_implementation_registry.py"),",\nthen the factory will create an object of its default implementation."),(0,r.kt)("p",null,"If the component definition is a list, then the factory will iterate over the elements of the list,\ninstantiate its subcomponents, and return a list of instantiated objects."),(0,r.kt)("p",null,"If the component has subcomponents, the factory will create the subcomponents before instantiating the top level object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "type": TopLevel\n  "param":\n    {\n      "type": "ParamType"\n      "k": "v"\n    }\n}\n')),(0,r.kt)("p",null,"will result in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'TopLevel(param=ParamType(k="v"))\n')),(0,r.kt)("p",null,"More details on object instantiation can be found ",(0,r.kt)("a",{parentName:"p",href:"https://airbyte-cdk.readthedocs.io/en/latest/api/airbyte_cdk.sources.declarative.parsers.html?highlight=factory#airbyte_cdk.sources.declarative.parsers.factory.DeclarativeComponentFactory"},"here"),"."),(0,r.kt)("h2",{id:"parameters"},"$parameters"),(0,r.kt)("p",null,"Parameters can be passed down from a parent component to its subcomponents using the $parameters key.\nThis can be used to avoid repetitions."),(0,r.kt)("p",null,"Schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  "$parameters":\n    type: object\n    additionalProperties: true\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"outer:\n  $parameters:\n    MyKey: MyValue\n  inner:\n    k2: v2\n")),(0,r.kt)("p",null,'This the example above, if both outer and inner are types with a "MyKey" field, both of them will evaluate to "MyValue".'),(0,r.kt)("p",null,"These parameters can be overwritten by subcomponents as a form of specialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"outer:\n  $parameters:\n    MyKey: MyValue\n  inner:\n    $parameters:\n      MyKey: YourValue\n    k2: v2\n")),(0,r.kt)("p",null,'In this example, "outer.MyKey" will evaluate to "MyValue", and "inner.MyKey" will evaluate to "YourValue".'),(0,r.kt)("p",null,"The value can also be used for string interpolation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"outer:\n  $parameters:\n    MyKey: MyValue\n  inner:\n    k2: \"MyKey is {{ parameters['MyKey'] }}\"\n")),(0,r.kt)("p",null,'In this example, outer.inner.k2 will evaluate to "MyKey is MyValue"'),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"Strings can contain references to previously defined values.\nThe parser will dereference these values to produce a complete object definition."),(0,r.kt)("p",null,'References can be defined using a "#/{arg}" string.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'key: 1234\nreference: "#/key"\n')),(0,r.kt)("p",null,"will produce the following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"key: 1234\nreference: 1234\n")),(0,r.kt)("p",null,"This also works with objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'key_value_pairs:\n  k1: v1\n  k2: v2\nsame_key_value_pairs: "#/key_value_pairs"\n')),(0,r.kt)("p",null,"will produce the following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"key_value_pairs:\n  k1: v1\n  k2: v2\nsame_key_value_pairs:\n  k1: v1\n  k2: v2\n")),(0,r.kt)("p",null,"The $ref keyword can be used to refer to an object and enhance it with addition key-value pairs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'key_value_pairs:\n  k1: v1\n  k2: v2\nsame_key_value_pairs:\n  $ref: "#/key_value_pairs"\n  k3: v3\n')),(0,r.kt)("p",null,"will produce the following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"key_value_pairs:\n  k1: v1\n  k2: v2\nsame_key_value_pairs:\n  k1: v1\n  k2: v2\n  k3: v3\n")),(0,r.kt)("p",null,"References can also point to nested values.\nNested references are ambiguous because one could define a key containing with ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"\nin this example, we want to refer to the limit key in the dict object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'dict:\n  limit: 50\nlimit_ref: "#/dict/limit"\n')),(0,r.kt)("p",null,"will produce the following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dict\nlimit: 50\nlimit-ref: 50\n")),(0,r.kt)("p",null,"whereas here we want to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"nested/path")," value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'nested:\n  path: "first one"\nnested.path: "uh oh"\nvalue: "ref(nested.path)\n')),(0,r.kt)("p",null,"will produce the following definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'nested:\n  path: "first one"\nnested/path: "uh oh"\nvalue: "uh oh"\n')),(0,r.kt)("p",null,"To resolve the ambiguity, we try looking for the reference key at the top-level, and then traverse the structs downward\nuntil we find a key with the given path, or until there is nothing to traverse."),(0,r.kt)("p",null,"More details on referencing values can be found ",(0,r.kt)("a",{parentName:"p",href:"https://airbyte-cdk.readthedocs.io/en/latest/api/airbyte_cdk.sources.declarative.parsers.html?highlight=yamlparser#airbyte_cdk.sources.declarative.parsers.yaml_parser.YamlParser"},"here"),"."),(0,r.kt)("h2",{id:"string-interpolation"},"String interpolation"),(0,r.kt)("p",null,"String values can be evaluated as Jinja2 templates."),(0,r.kt)("p",null,"If the input string is a raw string, the interpolated string will be the same.\n",(0,r.kt)("inlineCode",{parentName:"p"},'"hello world" -> "hello world"')),(0,r.kt)("p",null,"The engine will evaluate the content passed within ",(0,r.kt)("inlineCode",{parentName:"p"},"{{...}}"),', interpolating the keys from context-specific arguments.\nThe "parameters" keyword ',(0,r.kt)("a",{parentName:"p",href:"#parameters"},"see ($parameters)")," can be referenced."),(0,r.kt)("p",null,'For example, some_object.inner_object.key will evaluate to "Hello airbyte" at runtime.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'some_object:\n  $parameters:\n    name: "airbyte"\n  inner_object:\n    key: "Hello {{ parameters.name }}"\n')),(0,r.kt)("p",null,"Some components also pass in additional arguments to the context.\nThis is the case for the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/understanding-the-yaml-file/record-selector"},"record selector"),", which passes in an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," argument."),(0,r.kt)("p",null,"Both dot notation and bracket notations (with single quotes ( ",(0,r.kt)("inlineCode",{parentName:"p"},"'"),")) are interchangeable.\nThis means that both these string templates will evaluate to the same string:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},'"{{ parameters.name }}"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"\"{{ parameters['name'] }}\""))),(0,r.kt)("p",null,"In addition to passing additional values through the $parameters argument, macros can be called from within the string interpolation.\nFor example,\n",(0,r.kt)("inlineCode",{parentName:"p"},'"{{ max(2, 3) }}" -> 3')),(0,r.kt)("p",null,"The macros available can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/declarative/interpolation/macros.py"},"here"),"."),(0,r.kt)("p",null,"Additional information on jinja templating can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#"},"https://jinja.palletsprojects.com/en/3.1.x/templates/#")),(0,r.kt)("h2",{id:"component-schema-reference"},"Component schema reference"),(0,r.kt)("p",null,"A JSON schema representation of the relationships between the components that can be used in the YAML configuration can be found ",(0,r.kt)("a",{target:"_blank",href:n(29631).Z},"here"),"."),(0,r.kt)("h2",{id:"custom-components"},"Custom components"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please help us improve the low code CDK! If you find yourself needing to build a custom component,please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new?assignees=&labels=type%2Fenhancement%2C+%2Cneeds-triage%2C+area%2Flow-code%2Fcomponents&template=feature-request.md&title=Low%20Code%20Feature:"},"create a feature request issue"),". If appropriate, we'll add it directly to the framework (or you can submit a PR)!"),(0,r.kt)("p",{parentName:"admonition"},"If an issue already exist for the missing feature you need, please upvote or comment on it so we can prioritize the issue accordingly.")),(0,r.kt)("p",null,"Any built-in components can be overloaded by a custom Python class.\nTo create a custom component, define a new class in a new file in the connector's module.\nThe class must implement the interface of the component it is replacing. For instance, a pagination strategy must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_cdk.sources.declarative.requesters.paginators.strategies.pagination_strategy.PaginationStrategy"),".\nThe class must also be a dataclass where each field represents an argument to configure from the yaml file, and an ",(0,r.kt)("inlineCode",{parentName:"p"},"InitVar")," named parameters."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@dataclass\nclass MyPaginationStrategy(PaginationStrategy):\n  my_field: Union[InterpolatedString, str]\n  parameters: InitVar[Mapping[str, Any]]\n\n  def __post_init__(self, parameters: Mapping[str, Any]):\n    pass\n\n  def next_page_token(self, response: requests.Response, last_records: List[Mapping[str, Any]]) -> Optional[Any]:\n    pass\n\n  def reset(self):\n    pass\n")),(0,r.kt)("p",null,"This class can then be referred from the yaml file by specifying the type of custom component and using its fully qualified class name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination_strategy:\n  type: "CustomPaginationStrategy"\n  class_name: "my_connector_module.MyPaginationStrategy"\n  my_field: "hello world"\n')),(0,r.kt)("h3",{id:"custom-components-that-pass-fields-to-child-components"},"Custom Components that pass fields to child components"),(0,r.kt)("p",null,"There are certain scenarios where a child subcomponent might rely on a field defined on a parent component. For regular components, we perform this propagation of fields from the parent component to the child automatically.\nHowever, custom components do not support this behavior. If you have a child subcomponent of your custom component that falls under this use case, you will see an error message like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error creating component 'DefaultPaginator' with parent custom component source_example.components.CustomRetriever: Please provide DefaultPaginator.$parameters.url_base\n")),(0,r.kt)("p",null,"When you receive this error, you can address this by defining the missing field within the ",(0,r.kt)("inlineCode",{parentName:"p"},"$parameters")," block of the child component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  paginator:\n    type: "DefaultPaginator"\n    <...>\n    $parameters:\n      url_base: "https://example.com"\n')),(0,r.kt)("h2",{id:"how-the-framework-works"},"How the framework works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Given the connection config and an optional stream state, the ",(0,r.kt)("inlineCode",{parentName:"li"},"PartitionRouter")," computes the partitions that should be routed to read data."),(0,r.kt)("li",{parentName:"ol"},"Iterate over all the partitions defined by the stream's partition router."),(0,r.kt)("li",{parentName:"ol"},"For each partition,",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Submit a request to the partner API as defined by the requester"),(0,r.kt)("li",{parentName:"ol"},"Select the records from the response"),(0,r.kt)("li",{parentName:"ol"},"Repeat for as long as the paginator points to a next page")))),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(36123).Z},"connector-flow")),(0,r.kt)("h2",{id:"more-readings"},"More readings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/understanding-the-yaml-file/record-selector"},"Record selector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/understanding-the-yaml-file/partition-router"},"Partition routers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(29631).Z},"Source schema"))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29631:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/declarative_component_schema-32e91eb96a8f78b8e0d6d29e5e65cb3e.yaml"},36123:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/connector-flow-8acd0f3ab6dcdc3b80bfbecc56f7ed11.png"}}]);