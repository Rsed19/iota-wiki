"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[80383],{93408:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(36232),s=t(84661),c=["components"],l={keywords:["functions","views","state","access","params","results"],image:"/img/logo/WASP_logo_dark.png",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state."},u="Function Definitions",d={unversionedId:"guide/schema/funcs",id:"guide/schema/funcs",title:"Function Definitions",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state.",source:"@site/content/build/wasp/develop/documentation/docs/guide/schema/funcs.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/funcs",permalink:"/smart-contracts/develop/guide/schema/funcs",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/schema/funcs.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","views","state","access","params","results"],image:"/img/logo/WASP_logo_dark.png",description:"The code generated for Funcs will be able to inspect and modify the smart contract state, whereas the code generated for Views will only be able to inspect the state."},sidebar:"tutorialSidebar",previous:{title:"Triggering Events",permalink:"/smart-contracts/develop/guide/schema/events"},next:{title:"Limiting Access",permalink:"/smart-contracts/develop/guide/schema/access"}},f={},m=[],p={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function-definitions"},"Function Definitions"),(0,o.kt)("p",null,"Here is the full schema definition file for the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," example. We will now focus on\nits ",(0,o.kt)("inlineCode",{parentName:"p"},"funcs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"views")," sections. Since they are structured identically we will only need\nto explain the layout of these sections once."),(0,o.kt)(i.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Dividend",\n  "description": "Simple dividend smart contract",\n  "state": {\n    "memberList": "Address[] // array with all the recipients of this dividend",\n    "members": "map[Address]Int64 // map with all the recipient factors of this dividend",\n    "owner": "AgentID // owner of contract, the only one who can call \'member\' func",\n    "totalFactor": "Int64 // sum of all recipient factors"\n  },\n  "funcs": {\n    "init": {\n      "params": {\n        "owner": "AgentID? // optional owner of contract, defaults to contract creator"\n      }\n    },\n    "member": {\n      "access": "owner // only defined owner of contract can add members",\n      "params": {\n        "address": "Address // address of dividend recipient",\n        "factor": "Int64 // relative division factor"\n      }\n    },\n    "divide": {\n    },\n    "setOwner": {\n      "access": "owner // only defined owner of contract can change owner",\n      "params": {\n        "owner": "AgentID // new owner of smart contract"\n      }\n    }\n  },\n  "views": {\n    "getFactor": {\n      "params": {\n        "address": "Address // address of dividend recipient"\n      },\n      "results": {\n        "factor": "Int64 // relative division factor"\n      }\n    }\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"name: Dividend\ndescription: Simple dividend smart contract\nstate:\n  memberList: Address[] // array with all the recipients of this dividend\n  members: map[Address]Int64 // map with all the recipient factors of this dividend\n  owner: AgentID // owner of contract, the only one who can call 'member' func\n  totalFactor: Int64 // sum of all recipient factors\nfuncs:\n  init:\n    params:\n      owner: AgentID? // optional owner of contract, defaults to contract creator\n  member:\n    access: owner // only defined owner of contract can add members\n    params:\n      address: Address // address of dividend recipient\n      factor: Int64 // relative division factor\n  divide: {}\n  setOwner:\n    access: owner // only defined owner of contract can change owner\n    params:\n      owner: AgentID // new owner of smart contract\nviews:\n  getFactor:\n    params:\n      address: Address // address of dividend recipient\n    results:\n      factor: Int64 // relative division factor\n")))),(0,o.kt)("p",null,"As you can see each of the ",(0,o.kt)("inlineCode",{parentName:"p"},"funcs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"views")," sections defines their functions in the\nsame way. The only resulting difference is in the way the schema tool generates code for\nthem. The code generated for Funcs will be able to inspect and modify the smart contract\nstate, whereas the code generated for Views will only be able to inspect the state."),(0,o.kt)("p",null,"Functions are defined as named subsections in the schema definition file. The name of the\nsubsection will become the name of the function. In turn, there can be 3 optional\nsubsections under each function subsection."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"access")," indicates who is allowed to access the function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params")," holds the field definitions that describe the function parameters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"results")," holds the field definitions that describe the function results.")),(0,o.kt)("p",null,"We will now examine each subsection in more detail. In the next section we will first look\nat the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/schema/access"},(0,o.kt)("inlineCode",{parentName:"a"},"access"))," subsection."))}h.isMDXComponent=!0},84661:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(86010),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},36232:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),a=t(67294),o=t(86010),i=t(35074),s=t(74879),c=t(85425),l=t(51085),u="tabList__CuJ",d="tabItem_LNqP";function f(e){var n,t,i=e.lazy,f=e.block,m=e.defaultValue,p=e.values,h=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=p?p:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,s.l)(w,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(n=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==y&&!w.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.U)(),T=k.tabGroupChoices,N=k.setTabGroupChoices,O=(0,a.useState)(y),I=O[0],E=O[1],x=[],D=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var A=T[h];null!=A&&A!==I&&w.some((function(e){return e.value===A}))&&E(A)}var j=function(e){var n=e.currentTarget,t=x.indexOf(n),r=w[t].value;r!==I&&(D(n),E(r),null!=h&&N(h,String(r)))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;t=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;t=null!=(o=x[i])?o:x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},v)},w.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function m(e){var n=(0,i.Z)();return a.createElement(f,(0,r.Z)({key:String(n)},e))}},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return t?r.createElement(p,i(i({ref:n},u),{},{components:t})):r.createElement(p,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);