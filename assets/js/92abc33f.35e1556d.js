"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[23793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4847:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),s=a(54411),i=a(43305);const o={image:"/img/integration-services/logo/integration_services.png",description:"The example-2 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then searches for a user and then updates said user's username.",keywords:["how to","search for users","update user","example","manage identity"]},l="Update Users",u={unversionedId:"how_tos/integration-services-sdk/update-users",id:"how_tos/integration-services-sdk/update-users",title:"Update Users",description:"The example-2 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then searches for a user and then updates said user's username.",source:"@site/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/update-users.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/update-users",permalink:"/integration-services/how_tos/integration-services-sdk/update-users",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/update-users.mdx",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-2 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then searches for a user and then updates said user's username.",keywords:["how to","search for users","update user","example","manage identity"]},sidebar:"docs",previous:{title:"Create Identity and Credentials",permalink:"/integration-services/how_tos/integration-services-sdk/create-identity-and-credentials"},next:{title:"Delete Users",permalink:"/integration-services/how_tos/integration-services-sdk/delete-users"}},c={},d=[{value:"Search for a User",id:"search-for-a-user",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-users"},"Update Users"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"example-2"),"\nscript authenticates an Integration Service client to manage Identities using the Admin identity created in ",(0,r.kt)("a",{parentName:"p",href:"/integration-services/how_tos/integration-services-sdk/run-how-tos"},"example-0")," and then performs the following tasks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Searches for a user."),(0,r.kt)("li",{parentName:"ol"},"Updates said user's username.")),(0,r.kt)("p",null,"You can run the example with the following command:"),(0,r.kt)(s.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:_java -Dexec.mainClass=net.gradbase.how_tos.UpdateUser\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,r.kt)("a",{parentName:"p",href:"hhttps://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/UpdateUser.java"},"Example-7"))),(0,r.kt)(i.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/2-UpdateUser.ts"},"Example-7")))),(0,r.kt)("h2",{id:"search-for-a-user"},"Search for a User"),(0,r.kt)("p",null,"You can search for a user by the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," field with the following script:"),(0,r.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Search for identities with username 'User' in it\nList<IdentityInternal> identities = client.search(null, \"User\", null, null, null);\n"))),(0,r.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Search for identities with username 'User' in it\nconst search: searchCriteria = { username: 'User' };\n\nconst identities = await identity.search(search);\n")))))}m.isMDXComponent=!0},43305:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const s="tabItem__kUE";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:a},t)}},54411:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),s=a(86010),i=a(51048),o=a(33609),l=a(1943),u=a(72957);const c="tabList_fbd4",d="tabItem_v5XY";function p(e){var t,a;const{lazy:i,block:p,defaultValue:m,values:h,groupId:g,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,o.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:x}=(0,l.U)(),[T,N]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=w[g];null!=e&&e!==T&&b.some((t=>t.value===e))&&N(e)}const j=e=>{const t=e.currentTarget,a=O.indexOf(t),n=b[a].value;n!==T&&(E(t),N(n),null!=g&&x(g,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=O.indexOf(e.currentTarget)+1;a=null!=(n=O[t])?n:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;a=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:j,onClick:j},i,{className:(0,s.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}}}]);