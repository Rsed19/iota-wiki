"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[37455],{22172:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={image:"/img/integration-services/logo/integration_services.png",description:"This section will guide in setting up the Integration Service API using Node.js.",keywords:["how to","nodejs","setup API","configure",".env"]},s="Local Setup",c={unversionedId:"getting_started/installation/node_setup",id:"getting_started/installation/node_setup",title:"Local Setup",description:"This section will guide in setting up the Integration Service API using Node.js.",source:"@site/content/build/integration-services/production/documentation/docs/getting_started/installation/node_setup.md",sourceDirName:"getting_started/installation",slug:"/getting_started/installation/node_setup",permalink:"/integration-services/getting_started/installation/node_setup",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/getting_started/installation/node_setup.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"This section will guide in setting up the Integration Service API using Node.js.",keywords:["how to","nodejs","setup API","configure",".env"]},sidebar:"docs",previous:{title:"Overview",permalink:"/integration-services/getting_started/overview"},next:{title:"Local Setup",permalink:"/integration-services/getting_started/installation/java/local_setup"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Download the Project",id:"download-the-project",level:2},{value:"Configure API",id:"configure-api",level:2},{value:"Start the MongoDB",id:"start-the-mongodb",level:3},{value:"Setup SSI-Bridge",id:"setup-ssi-bridge",level:3},{value:"Set up the Audit-Trail Gateway",id:"set-up-the-audit-trail-gateway",level:3},{value:"FAQ",id:"faq",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-setup"},"Local Setup"),(0,o.kt)("p",null,"This section will guide you in setting up the Integration Services API using node.js. It is mainly relevant for developers who want to contribute to the project or create a project fork."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Please make sure to have the following dependencies installed before moving forward:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"node.js")," min. v15.6.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git"))),(0,o.kt)("h2",{id:"download-the-project"},"Download the Project"),(0,o.kt)("p",null,"Freshly clone the project by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/integration-services.git\n")),(0,o.kt)("h2",{id:"configure-api"},"Configure API"),(0,o.kt)("p",null,"Use the Integration Services CLI to configure the API. The CLI configures your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mongo-init.json")," files."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the root directory: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd integration-services\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Configure the API: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @iota/is-cli@latest setup-node\n")),(0,o.kt)("h3",{id:"start-the-mongodb"},"Start the MongoDB"),(0,o.kt)("p",null,"Now you can start docker-compose in the same root directory to setup your mongo database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose up -d mongo\n")),(0,o.kt)("p",null,"This must only be run once to start the MongoDB you can always check if the MongoDB container is running by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," which should generate a similar output as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CONTAINER ID   IMAGE         COMMAND                  CREATED        STATUS       PORTS                                              NAMES\nf15ab2571369   mongo:latest  "docker-entrypoint.s\u2026"   7 weeks ago    Up 7 weeks   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp      api_mongo_1\n')),(0,o.kt)("h3",{id:"setup-ssi-bridge"},"Setup SSI-Bridge"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Move into the folder ",(0,o.kt)("inlineCode",{parentName:"li"},"api/ssi-bridge"),"."),(0,o.kt)("li",{parentName:"ol"},"Run the following commands to install dependencies, build the project, set up the API, and finally start the SSI-Bridge:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run setup-api\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"To check if the service started run in your terminal:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:3001/info\n")),(0,o.kt)("h3",{id:"set-up-the-audit-trail-gateway"},"Set up the Audit-Trail Gateway"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Move into the folder ",(0,o.kt)("inlineCode",{parentName:"li"},"api/audit-trail-gw"),"."),(0,o.kt)("li",{parentName:"ol"},"Run the following commands to install dependencies, build the project, set up the API, and finally start the Audit-Trail Gateway:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run setup-api\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"To check if the service started run in your terminal:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:3002/info\n")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"I accidentally stopped the mongo db container (the database cannot be reached) can I start it again?"))),(0,o.kt)("p",null,"Yes, the container can be started again by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker start <container-id>")," ",(0,o.kt)("br",null),"\n-> The container id can be found by running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps -a")))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);