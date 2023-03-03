"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[83478],{5370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},l="R2",o={unversionedId:"integrations/destinations/r2",id:"integrations/destinations/r2",title:"R2",description:"This page guides you through the process of setting up the R2 destination connector.",source:"@site/../docs/integrations/destinations/r2.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/r2",permalink:"/integrations/destinations/r2",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/r2.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Pulsar",permalink:"/integrations/destinations/pulsar"},next:{title:"RabbitMQ",permalink:"/integrations/destinations/rabbitmq"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up R2",id:"step-1-set-up-r2",level:2},{value:"Step 2: Set up the R2 destination connector in Airbyte",id:"step-2-set-up-the-r2-destination-connector-in-airbyte",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Output schema",id:"supported-output-schema",level:2},{value:"Avro",id:"avro",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Data schema",id:"data-schema",level:4},{value:"CSV",id:"csv",level:3},{value:"JSON Lines (JSONL)",id:"json-lines-jsonl",level:3},{value:"Parquet",id:"parquet",level:3},{value:"Configuration",id:"configuration-1",level:4},{value:"Data schema",id:"data-schema-1",level:4},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"r2"},"R2"),(0,r.kt)("p",null,"This page guides you through the process of setting up the R2 destination connector."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"List of required fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Account ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Key ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret Access Key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R2 Bucket Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R2 Bucket Path"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Allow connections from Airbyte server to your Cloudflare R2 bucket")),(0,r.kt)("h2",{id:"step-1-set-up-r2"},"Step 1: Set up R2"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dash.cloudflare.com/login"},"Sign in")," to your Cloudflare account.\nPurchase R2 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/r2/get-started/#purchase-r2"},"this")),(0,r.kt)("p",null,"Use an existing or create new ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/r2/platform/s3-compatibility/tokens/"},"Access Key ID and Secret Access Key"),"."),(0,r.kt)("p",null,"Prepare R2 bucket that will be used as destination, see ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/r2/get-started/#3-create-your-bucket"},"this"),"\nto create an S3 bucket, or you can create bucket via R2 module of ",(0,r.kt)("a",{parentName:"p",href:"https://dash.cloudflare.com"},"dashboard"),"."),(0,r.kt)("h2",{id:"step-2-set-up-the-r2-destination-connector-in-airbyte"},"Step 2: Set up the R2 destination connector in Airbyte"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Destinations"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+ new destination"),"."),(0,r.kt)("li",{parentName:"ol"},"On the destination setup page, select ",(0,r.kt)("strong",{parentName:"li"},"R2")," from the Destination type dropdown and enter a name for this connector."),(0,r.kt)("li",{parentName:"ol"},"Configure fields:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Account Id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/r2/get-started/#4-bind-your-bucket-to-a-worker"},"this")," to copy your Account ID."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Key Id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/r2/platform/s3-compatibility/tokens"},"this")," on how to generate an access key."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret Access Key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corresponding key to the above key id."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R2 Bucket Name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/r2/get-started/#3-create-your-bucket"},"this")," to create an R2 bucket or you can create bucket via R2 module of ",(0,r.kt)("a",{parentName:"li",href:"https://dash.cloudflare.com"},"dashboard"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R2 Bucket Path"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Subdirectory under the above bucket to sync the data into."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R2 Path Format"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Additional string format on how to store data under R2 Bucket Path. Default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"${NAMESPACE}/${STREAM_NAME}/${YEAR}_${MONTH}_${DAY}\n_${EPOCH}_"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R2 Filename pattern"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The pattern allows you to set the file-name format for the R2 staging file(s), next placeholders combinations are currently supported:\n{date}, {date:yyyy_MM}, {timestamp}, {timestamp:millis}, {timestamp:micros}, {part_number}, {sync_id}, {format_extension}. Please, don't use empty space and not supportable placeholders, as they won't recognized."))))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Set up destination"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte OSS:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to local Airbyte page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"p"},"Destinations"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"p"},"+ new destination"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the destination setup page, select ",(0,r.kt)("strong",{parentName:"p"},"R2")," from the Destination type dropdown and enter a name for this connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Account Id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/r2/get-started/#4-bind-your-bucket-to-a-worker"},"this")," to copy your Account ID."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Key Id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/r2/platform/s3-compatibility/tokens"},"this")," on how to generate an access key."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret Access Key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corresponding key to the above key id."))),(0,r.kt)("li",{parentName:"ul"},"Make sure your R2 bucket is accessible from the machine running Airbyte.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This depends on your networking setup."),(0,r.kt)("li",{parentName:"ul"},"The easiest way to verify if Airbyte is able to connect to your R2 bucket is via the check connection tool in the UI."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R2 Bucket Name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/r2/get-started/#3-create-your-bucket"},"this")," to create an R2 bucket or you can create bucket via R2 module of ",(0,r.kt)("a",{parentName:"li",href:"https://dash.cloudflare.com"},"dashboard"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R2 Bucket Path"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Subdirectory under the above bucket to sync the data into."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R2 Path Format"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Additional string format on how to store data under R2 Bucket Path. Default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"${NAMESPACE}/${STREAM_NAME}/${YEAR}_${MONTH}_${DAY}\n_${EPOCH}_"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R2 Filename pattern"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The pattern allows you to set the file-name format for the R2 staging file(s), next placeholders combinations are currently supported:\n{date}, {date:yyyy_MM}, {timestamp}, {timestamp:millis}, {timestamp:micros}, {part_number}, {sync_id}, {format_extension}. Please, don't use empty space and not supportable placeholders, as they won't recognized."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Set up destination"),"."))),(0,r.kt)("p",null,"The full path of the output data with the default S3 Path Format ",(0,r.kt)("inlineCode",{parentName:"p"},"${NAMESPACE}/${STREAM_NAME}/${YEAR}_${MONTH}_${DAY}_${EPOCH}_")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<bucket-name>/<source-namespace-if-exists>/<stream-name>/<upload-date>_<epoch>_<partition-id>.<format-extension>\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"testing_bucket/data_output_path/public/users/2021_01_01_1234567890_0.csv.gz\n\u2191              \u2191                \u2191      \u2191     \u2191          \u2191          \u2191 \u2191\n|              |                |      |     |          |          | format extension\n|              |                |      |     |          |          unique incremental part id\n|              |                |      |     |          milliseconds since epoch\n|              |                |      |     upload date in YYYY_MM_DD\n|              |                |      stream name\n|              |                source namespace (if it exists)\n|              bucket path\nbucket name\n")),(0,r.kt)("p",null,"The rationales behind this naming pattern are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Each stream has its own directory."),(0,r.kt)("li",{parentName:"ol"},"The data output files can be sorted by upload time."),(0,r.kt)("li",{parentName:"ol"},"The upload time composes of a date part and millis part so that it is both readable and unique.")),(0,r.kt)("p",null,"But it is possible to further customize by using the available variables to format the bucket path:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${NAMESPACE}"),": Namespace where the stream comes from or configured by the connection namespace fields."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${STREAM_NAME}"),": Name of the stream"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${YEAR}"),": Year in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${MONTH}"),": Month in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${DAY}"),": Day in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${HOUR}"),": Hour in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${MINUTE}")," : Minute in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${SECOND}"),": Second in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${MILLISECOND}"),": Millisecond in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${EPOCH}"),": Milliseconds since Epoch in which the sync was writing the output data in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${UUID}"),": random uuid string")),(0,r.kt)("p",null,"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," characters in the R2 path are collapsed into a single ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," character."),(0,r.kt)("li",{parentName:"ul"},"If the output bucket contains too many files, the part id variable is using a ",(0,r.kt)("inlineCode",{parentName:"li"},"UUID")," instead. It uses sequential ID otherwise.")),(0,r.kt)("p",null,"Please note that the stream name may contain a prefix, if it is configured on the connection.\nA data sync may create multiple files as the output files can be partitioned by size (targeting a size of 200MB compressed or lower) ."),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured bucket path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Setting a specific bucket path is equivalent to having separate namespaces.")))),(0,r.kt)("p",null,'The Airbyte R2 destination allows you to sync data to Cloudflare R2. Each stream is written to its own directory under the bucket.\n\u26a0\ufe0f Please note that under "Full Refresh Sync" mode, data in the configured bucket and path will be wiped out before each sync. We recommend you to provision a dedicated R2 resource for this sync to prevent unexpected data deletion from misconfiguration. \u26a0\ufe0f'),(0,r.kt)("h2",{id:"supported-output-schema"},"Supported Output schema"),(0,r.kt)("p",null,"Each stream will be outputted to its dedicated directory according to the configuration. The complete datastore of each stream includes all the output files under that directory. You can think of the directory as equivalent of a Table in the database world."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under Full Refresh Sync mode, old output files will be purged before new files are created."),(0,r.kt)("li",{parentName:"ul"},"Under Incremental - Append Sync mode, new output files will be added that only contain the new data.")),(0,r.kt)("h3",{id:"avro"},"Avro"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://avro.apache.org/"},"Apache Avro")," serializes data in a compact binary format. Currently, the Airbyte R2 Avro connector always uses the",(0,r.kt)("a",{parentName:"p",href:"http://avro.apache.org/docs/current/spec.html#binary_encoding"},"binary encoding"),", and assumes that all data records follow the same schema."),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Here is the available compression codecs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No compression"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deflate"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compression level",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Range ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 9]"),". Default to 0."),(0,r.kt)("li",{parentName:"ul"},"Level 0: no compression & fastest."),(0,r.kt)("li",{parentName:"ul"},"Level 9: best compression & slowest."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bzip2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"xz"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compression level",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Range ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 9]"),". Default to 6."),(0,r.kt)("li",{parentName:"ul"},"Level 0-3 are fast with medium compression."),(0,r.kt)("li",{parentName:"ul"},"Level 4-6 are fairly slow with high compression."),(0,r.kt)("li",{parentName:"ul"},"Level 7-9 are like level 6 but use bigger dictionaries and have higher memory requirements. Unless the uncompressed size of the file exceeds 8 MiB, 16 MiB, or 32 MiB, it is waste of memory to use the presets 7, 8, or 9, respectively."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zstandard"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compression level",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Range ",(0,r.kt)("inlineCode",{parentName:"li"},"[-5, 22]"),". Default to 3."),(0,r.kt)("li",{parentName:"ul"},"Negative levels are 'fast' modes akin to ",(0,r.kt)("inlineCode",{parentName:"li"},"lz4")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"snappy"),"."),(0,r.kt)("li",{parentName:"ul"},"Levels above 9 are generally for archival purposes."),(0,r.kt)("li",{parentName:"ul"},"Levels above 18 use a lot of memory."))),(0,r.kt)("li",{parentName:"ul"},"Include checksum",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", a checksum will be included in each data block."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snappy"))),(0,r.kt)("h4",{id:"data-schema"},"Data schema"),(0,r.kt)("p",null,"Under the hood, an Airbyte data stream in JSON schema is first converted to an Avro schema, then the JSON object is converted to an Avro record. Because the data stream can come from any data source, the JSON to Avro conversion process has arbitrary rules and limitations. Learn more about how source data is converted to Avro and the current limitations ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/json-avro-conversion"},"here"),"."),(0,r.kt)("h3",{id:"csv"},"CSV"),(0,r.kt)("p",null,"Like most of the other Airbyte destination connectors, usually the output has three columns: a UUID, an emission timestamp, and the data blob. With the CSV output, it is possible to normalize ","(","flatten",")"," the data blob to multiple columns."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Column"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Condition"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_ab_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Always exists"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A uuid assigned by Airbyte to each processed record.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_emitted_at")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Always exists."),(0,r.kt)("td",{parentName:"tr",align:"left"},"A timestamp representing when the event was pulled from the data source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_airbyte_data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When no normalization ","(","flattening",")"," is needed, all data reside under this column as a json blob."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"root level fields"),(0,r.kt)("td",{parentName:"tr",align:"left"},"When root level normalization ","(","flattening",")"," is selected, the root level fields are expanded."),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"For example, given the following json object from a source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_id": 123,\n  "name": {\n    "first": "John",\n    "last": "Doe"\n  }\n}\n')),(0,r.kt)("p",null,"With no normalization, the output CSV is:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"_airbyte_ab_id")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"_airbyte_emitted_at")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"_airbyte_data")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"26d73cde-7eb1-4e1e-b7db-a4c03b4cf206")),(0,r.kt)("td",{parentName:"tr",align:"left"},"1622135805000"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{ "user_id": 123, name: { "first": "John", "last": "Doe" } }'))))),(0,r.kt)("p",null,"With root level normalization, the output CSV is:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"_airbyte_ab_id")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"_airbyte_emitted_at")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"user_id")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"name")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"26d73cde-7eb1-4e1e-b7db-a4c03b4cf206")),(0,r.kt)("td",{parentName:"tr",align:"left"},"1622135805000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"123"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{ "first": "John", "last": "Doe" }'))))),(0,r.kt)("p",null,"Output files can be compressed. The default option is GZIP compression. If compression is selected, the output filename will have an extra extension (GZIP: ",(0,r.kt)("inlineCode",{parentName:"p"},".csv.gz"),")."),(0,r.kt)("h3",{id:"json-lines-jsonl"},"JSON Lines ","(","JSONL",")"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jsonlines.org/"},"JSON Lines")," is a text format with one JSON per line. Each line has a structure as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_airbyte_ab_id": "<uuid>",\n  "_airbyte_emitted_at": "<timestamp-in-millis>",\n  "_airbyte_data": "<json-data-from-source>"\n}\n')),(0,r.kt)("p",null,"For example, given the following two json objects from a source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "user_id": 123,\n    "name": {\n      "first": "John",\n      "last": "Doe"\n    }\n  },\n  {\n    "user_id": 456,\n    "name": {\n      "first": "Jane",\n      "last": "Roe"\n    }\n  }\n]\n')),(0,r.kt)("p",null,"They will be like this in the output file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{ "_airbyte_ab_id": "26d73cde-7eb1-4e1e-b7db-a4c03b4cf206", "_airbyte_emitted_at": "1622135805000", "_airbyte_data": { "user_id": 123, "name": { "first": "John", "last": "Doe" } } }\n{ "_airbyte_ab_id": "0a61de1b-9cdd-4455-a739-93572c9a5f20", "_airbyte_emitted_at": "1631948170000", "_airbyte_data": { "user_id": 456, "name": { "first": "Jane", "last": "Roe" } } }\n')),(0,r.kt)("p",null,"Output files can be compressed. The default option is GZIP compression. If compression is selected, the output filename will have an extra extension (GZIP: ",(0,r.kt)("inlineCode",{parentName:"p"},".jsonl.gz"),")."),(0,r.kt)("h3",{id:"parquet"},"Parquet"),(0,r.kt)("h4",{id:"configuration-1"},"Configuration"),(0,r.kt)("p",null,"The following configuration is available to configure the Parquet output:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"compression_codec")),(0,r.kt)("td",{parentName:"tr",align:"center"},"enum"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"UNCOMPRESSED")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Compression algorithm"),". Available candidates are: ",(0,r.kt)("inlineCode",{parentName:"td"},"UNCOMPRESSED"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"SNAPPY"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"GZIP"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LZO"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"BROTLI"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LZ4"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ZSTD"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"block_size_mb")),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"128 ","(","MB",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Block size ","(","row group size",")")," in MB. This is the size of a row group being buffered in memory. It limits the memory usage when writing. Larger values will improve the IO when reading, but consume more memory when writing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"max_padding_size_mb")),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8 ","(","MB",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Max padding size")," in MB. This is the maximum size allowed as padding to align row groups. This is also the minimum size of a row group.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"page_size_kb")),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1024 ","(","KB",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Page size")," in KB. The page size is for compression. A block is composed of pages. A page is the smallest unit that must be read fully to access a single record. If this value is too small, the compression will deteriorate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dictionary_page_size_kb")),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1024 ","(","KB",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Dictionary Page Size")," in KB. There is one dictionary page per column per row group when dictionary encoding is used. The dictionary page size works like the page size but for dictionary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dictionary_encoding")),(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Dictionary encoding"),". This parameter controls whether dictionary encoding is turned on.")))),(0,r.kt)("p",null,"These parameters are related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ParquetOutputFormat"),". See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.javadoc.io/doc/org.apache.parquet/parquet-hadoop/1.12.0/org/apache/parquet/hadoop/ParquetOutputFormat.html"},"Java doc")," for more details. Also see ",(0,r.kt)("a",{parentName:"p",href:"https://parquet.apache.org/documentation/latest/#configurations"},"Parquet documentation")," for their recommended configurations ","(","512 - 1024 MB block size, 8 KB page size",")","."),(0,r.kt)("h4",{id:"data-schema-1"},"Data schema"),(0,r.kt)("p",null,"Under the hood, an Airbyte data stream in JSON schema is first converted to an Avro schema, then the JSON object is converted to an Avro record, and finally the Avro record is outputted to the Parquet format. Because the data stream can come from any data source, the JSON to Avro conversion process has arbitrary rules and limitations. Learn more about how source data is converted to Avro and the current limitations ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/json-avro-conversion"},"here"),"."),(0,r.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-25"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15296"},"#","15296")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial release.")))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);