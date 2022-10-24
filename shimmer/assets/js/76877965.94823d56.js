"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[44381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(r),f=a,k=c["".concat(o,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},81470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const i={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},l="Class: Ed25519Seed",s={unversionedId:"references/client/classes/Ed25519Seed",id:"references/client/classes/Ed25519Seed",title:"Class: Ed25519Seed",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/client/classes/Ed25519Seed.md",sourceDirName:"references/client/classes",slug:"/references/client/classes/Ed25519Seed",permalink:"/shimmer/iotajs/references/client/classes/Ed25519Seed",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/references/client/classes/Ed25519Seed.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Class: Ed25519Address",permalink:"/shimmer/iotajs/references/client/classes/Ed25519Address"},next:{title:"Class: IndexerPluginClient",permalink:"/shimmer/iotajs/references/client/classes/IndexerPluginClient"}},o={},m=[{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Methods",id:"methods-1",level:2},{value:"fromMnemonic",id:"frommnemonic",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"keyPair",id:"keypair",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"generateSeedFromPath",id:"generateseedfrompath",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"toBytes",id:"tobytes",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-2",level:4}],p={toc:m};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-ed25519seed"},"Class: Ed25519Seed"),(0,a.kt)("p",null,"Class to help with seeds."),(0,a.kt)("h2",{id:"implements"},"Implements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/ISeed"},(0,a.kt)("inlineCode",{parentName:"a"},"ISeed")))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/classes/Ed25519Seed#constructor"},"constructor"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/classes/Ed25519Seed#frommnemonic"},"fromMnemonic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/classes/Ed25519Seed#keypair"},"keyPair")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/classes/Ed25519Seed#generateseedfrompath"},"generateSeedFromPath")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/classes/Ed25519Seed#tobytes"},"toBytes"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new Ed25519Seed"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"secretKeyBytes?"),")"),(0,a.kt)("p",null,"Create a new instance of Ed25519Seed."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"secretKeyBytes?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The bytes.")))),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"frommnemonic"},"fromMnemonic"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"fromMnemonic"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"mnemonic"),"): ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/classes/Ed25519Seed"},(0,a.kt)("inlineCode",{parentName:"a"},"Ed25519Seed"))),(0,a.kt)("p",null,"Create the seed from a Bip39 mnemonic."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"mnemonic")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The mnemonic to create the seed from.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/classes/Ed25519Seed"},(0,a.kt)("inlineCode",{parentName:"a"},"Ed25519Seed"))),(0,a.kt)("p",null,"A new instance of Ed25519Seed."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"keypair"},"keyPair"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"keyPair"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/IKeyPair"},(0,a.kt)("inlineCode",{parentName:"a"},"IKeyPair"))),(0,a.kt)("p",null,"Get the key pair from the seed."),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/IKeyPair"},(0,a.kt)("inlineCode",{parentName:"a"},"IKeyPair"))),(0,a.kt)("p",null,"The key pair."),(0,a.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ISeed"},"ISeed"),".",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ISeed#keypair"},"keyPair")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"generateseedfrompath"},"generateSeedFromPath"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"generateSeedFromPath"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"): ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ISeed"},(0,a.kt)("inlineCode",{parentName:"a"},"ISeed"))),(0,a.kt)("p",null,"Generate a new seed from the path."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"path")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Bip32Path")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The path to generate the seed for.")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ISeed"},(0,a.kt)("inlineCode",{parentName:"a"},"ISeed"))),(0,a.kt)("p",null,"The generated seed."),(0,a.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ISeed"},"ISeed"),".",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ISeed#generateseedfrompath"},"generateSeedFromPath")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tobytes"},"toBytes"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"toBytes"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("p",null,"Return the key as bytes."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,a.kt)("p",null,"The key as bytes."),(0,a.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ISeed"},"ISeed"),".",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/ISeed#tobytes"},"toBytes")))}d.isMDXComponent=!0}}]);