"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21211],{85883:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),o=["components"],l={image:"/img/logo/integration_services.png",description:"This section will guide you on how to install, configure, and run the examples.",keywords:["examples","node","npm","integration services api"]},p="How To Run Examples",s={unversionedId:"examples/how-to-run-examples",id:"examples/how-to-run-examples",title:"How To Run Examples",description:"This section will guide you on how to install, configure, and run the examples.",source:"@site/content/build/integration-services/production/documentation/docs/examples/how-to-run-examples.mdx",sourceDirName:"examples",slug:"/examples/how-to-run-examples",permalink:"/integration-services/examples/how-to-run-examples",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/how-to-run-examples.mdx",tags:[],version:"current",frontMatter:{image:"/img/logo/integration_services.png",description:"This section will guide you on how to install, configure, and run the examples.",keywords:["examples","node","npm","integration services api"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/integration-services/examples/introduction"},next:{title:"Create Identity and Credentials",permalink:"/integration-services/examples/create-identity-and-credentials"}},u={},c=[{value:"Running Examples",id:"running-examples",level:2},{value:"Install the Examples",id:"install-the-examples",level:3},{value:"Update the .env File",id:"update-the-env-file",level:3},{value:"Run Example 0",id:"run-example-0",level:3}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-run-examples"},"How To Run Examples"),(0,r.kt)("p",null,"You can find many examples related to managing identities and channels in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/tree/master/clients/node/examples"},"clients/node/examples")," directory."),(0,r.kt)("p",null,"The next sections will describe each example in detail."),(0,r.kt)("h2",{id:"running-examples"},"Running Examples"),(0,r.kt)("p",null,"In order to run examples, you will need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get Integration Service API's endpoint by setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"API_KEY")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"API_URL")," in ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,r.kt)("li",{parentName:"ol"},"Get the MongoDB endpoint for the API by setting ",(0,r.kt)("inlineCode",{parentName:"li"},"MONGO_URL"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DB_NAME")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SECRET_KEY")," in ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,r.kt)("li",{parentName:"ol"},"Execute ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run example-0"),".")),(0,r.kt)("h3",{id:"install-the-examples"},"Install the Examples"),(0,r.kt)("p",null,"You can install the examples by going into your local ",(0,r.kt)("inlineCode",{parentName:"p"},"clients/node/examples")," directory and running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd clients/node/examples\nnpm install\n")),(0,r.kt)("h3",{id:"update-the-env-file"},"Update the .env File"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set Integration Service API's endpoint by setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"API_KEY")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"API_URL")," in ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,r.kt)("li",{parentName:"ol"},"Set the MongoDB endpoint for the API by setting ",(0,r.kt)("inlineCode",{parentName:"li"},"MONGO_URL"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DB_NAME")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SECRET_KEY")," in ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file.")),(0,r.kt)("p",null,"If you started the API locally using ",(0,r.kt)("a",{parentName:"p",href:"../getting_started/installation/kubernetes/local_setup"},"kubernetes"),", you can write\nthe following ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MONGO_URL=mongodb://root:rootpassword@0.0.0.0:27017\nDB_NAME=integration-service\nSECRET_KEY=7w9gfhb123jngh4gd53z465fewcs569e\nAPI_KEY=4ed59704-9a26-11ec-a749-3f57454709b9\nAPI_URL=http://localhost:3000\n")),(0,r.kt)("h3",{id:"run-example-0"},"Run Example 0"),(0,r.kt)("p",null,"Once you have completed the previous steps, you can run ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/node/examples/0-MakeRootIdentityAdmin.ts"},"example-0")," to create a decentralized identity with ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin")," role\nthat will be used in the other examples using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-0\n")),(0,r.kt)("p",null,"The admin identity will be saved in ",(0,r.kt)("inlineCode",{parentName:"p"},"adminIdentity.json"),"."))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return t?i.createElement(g,o(o({ref:n},u),{},{components:t})):i.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);