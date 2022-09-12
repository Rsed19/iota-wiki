"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[50350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),l=n(54411),o=n(43305);const r={image:"/img/logo/integration_services.png",description:"This section will guide you on how to install, configure, and run the examples.",keywords:["how to","examples","maven","java","api","examples","maven","java","nodejs","javascript"]},s="Run How-Tos",p={unversionedId:"how_tos/integration-services-sdk/run-how-tos",id:"how_tos/integration-services-sdk/run-how-tos",title:"Run How-Tos",description:"This section will guide you on how to install, configure, and run the examples.",source:"@site/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/run-how-tos.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/run-how-tos",permalink:"/integration-services/how_tos/integration-services-sdk/run-how-tos",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/run-how-tos.mdx",tags:[],version:"current",frontMatter:{image:"/img/logo/integration_services.png",description:"This section will guide you on how to install, configure, and run the examples.",keywords:["how to","examples","maven","java","api","examples","maven","java","nodejs","javascript"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/integration-services/how_tos/integration-services-sdk/introduction"},next:{title:"Create Identity and Credentials",permalink:"/integration-services/how_tos/integration-services-sdk/create-identity-and-credentials"}},u={},d=[{value:"Running Examples",id:"running-examples",level:2},{value:"Install the Examples",id:"install-the-examples",level:3},{value:"Configure the Examples",id:"configure-the-examples",level:3},{value:"Run Example 0",id:"run-example-0",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-how-tos"},"Run How-Tos"),(0,i.kt)("p",null,"You can find many examples related to managing identities and channels in the Github repo:)."),(0,i.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/tree/main/examples"},"Examples"))),(0,i.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/tree/master/clients/client-sdk/examples"},"Examples")))),(0,i.kt)("p",null,"The next sections will describe each example in detail."),(0,i.kt)("h2",{id:"running-examples"},"Running Examples"),(0,i.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get Integration Service API's endpoint by setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"api-key")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"api-url")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"env.properties")," file."),(0,i.kt)("li",{parentName:"ol"},"Make sure you have an ",(0,i.kt)("inlineCode",{parentName:"li"},"adminIdentity.json")," file which is actually an Admin Identity. If this is not the case, please run example-0 (details below) to make the identity an ",(0,i.kt)("inlineCode",{parentName:"li"},"AdminIdentity")),(0,i.kt)("li",{parentName:"ol"},"Make sure that the aforementioned file is located in the same directory from which the code is run (recommended: ",(0,i.kt)("inlineCode",{parentName:"li"},"examples/"),'). This folder will be known as the "examples folder"\nthroughout this section of the docs.'),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"mvn compile")," to install the dependencies from the example folder's ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml"),"."),(0,i.kt)("li",{parentName:"ol"},"Run each example in turn either via the console or your favourite IDE.")),(0,i.kt)("p",null,"Alternatively, a basic ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/Dockerfile"},"Dockerfile")," has been provided that will allow you to run all the examples in one go.")),(0,i.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("p",null,"In order to run examples, you will need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get Integration Service API's endpoint by setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"API_KEY")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"API_URL")," in ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,i.kt)("li",{parentName:"ol"},"Get the MongoDB endpoint for the API by setting ",(0,i.kt)("inlineCode",{parentName:"li"},"MONGO_URL"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DB_NAME")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SECRET_KEY")," in ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,i.kt)("li",{parentName:"ol"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run example-0"),".")),(0,i.kt)("h3",{id:"install-the-examples"},"Install the Examples"),(0,i.kt)("p",null,"You can install the examples by going into your local ",(0,i.kt)("inlineCode",{parentName:"p"},"clients/client-sdk/examples")," directory and running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd clients/client-sdk/examples\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")))),(0,i.kt)("h3",{id:"configure-the-examples"},"Configure the Examples"),(0,i.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("p",null,"In Java, you will need to set up a ",(0,i.kt)("inlineCode",{parentName:"p"},"env.properties")," file with the following properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"api-key=XXXXXXX\napi-version=vX.X\napi-url=XXXXXXX\nidentity-file=adminIdentity.json\n")),(0,i.kt)("p",null,"Please note the Java SDK assumes that an instance of the API, including its MongoDB connection, is already running elsewhere.")),(0,i.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set Integration Service API's endpoint by setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"API_KEY")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"API_URL")," in ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,i.kt)("li",{parentName:"ol"},"Set the MongoDB endpoint for the API by setting ",(0,i.kt)("inlineCode",{parentName:"li"},"MONGO_URL"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DB_NAME")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SECRET_KEY")," in ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file.")),(0,i.kt)("p",null,"If you started the API locally using ",(0,i.kt)("a",{parentName:"p",href:"../../getting_started/installation/kubernetes/local_setup"},"kubernetes"),", you can write\nthe following ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#-----------------------\n# For management purpose\n#-----------------------\nMONGO_URL=mongodb://root:rootpassword@0.0.0.0:27017\nDB_NAME=integration-service\nSECRET_KEY=7w9gfhb123jngh4gd53z465fewcs569e\n\n\n#---------------------\n# Client configuration\n#---------------------\n\n# You can either choose a IS_GATEWAY_URL (used in production)\n# or the SSI_BRIDGE_URL AND AUDIT_TRAIL_URL (for local development)\n\nAPI_KEY=4ed59704-9a26-11ec-a749-3f57454709b9\n\nUSE_GATEWAY_URL=false\nSSI_BRIDGE_URL=http://localhost:3001\nAUDIT_TRAIL_URL=http://localhost:3002\n")))),(0,i.kt)("h2",{id:"run-example-0"},"Run Example 0"),(0,i.kt)(l.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("p",null,"Once you have completed the previous steps, if you do not have an identity stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"adminIdentity.json")," which is actually an Admin Identity\nyou can run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/AddAsRootIdentity.java"},"example-0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:_java -Dexec.mainClass=net.gradbase.how_tos.AddAsRootIdentity\n"))),(0,i.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("p",null,"Once you have completed the previous steps, you can run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/0-MakeRootIdentityAdmin.ts"},"example-0")," to create a decentralized identity with ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin")," role\nthat will be used in the other examples using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-0\n")),(0,i.kt)("p",null,"The admin identity will be saved in ",(0,i.kt)("inlineCode",{parentName:"p"},"adminIdentity.json"),"."))))}c.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(86010);const l="tabItem__kUE";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,o),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),i=n(67294),l=n(86010),o=n(51048),r=n(33609),s=n(1943),p=n(72957);const u="tabList_fbd4",d="tabItem_v5XY";function m(e){var t,n;const{lazy:o,block:m,defaultValue:c,values:h,groupId:g,className:v}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,r.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===c?c:null!=(t=null!=c?c:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[x,I]=(0,i.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=g){const e=N[g];null!=e&&e!==x&&b.some((t=>t.value===e))&&I(e)}const _=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==x&&(E(t),I(a),null!=g&&w(g,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var i;const t=T.indexOf(e.currentTarget)-1;n=null!=(i=T[t])?i:T[T.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},v)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:_,onClick:_},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function c(e){const t=(0,o.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);