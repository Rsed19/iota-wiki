"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9536],{27295:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),i=["components"],l={description:"An overview of the available guides for the Shimmer network that also outlines the changes from IOTA 1.5, aka Chrysalis to Stardust.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["IOTA 1.5","stardust","changes","guides","migration","developer","reference"]},s="IOTA Stardust Guides",u={unversionedId:"how_tos/overview",id:"how_tos/overview",title:"IOTA Stardust Guides",description:"An overview of the available guides for the Shimmer network that also outlines the changes from IOTA 1.5, aka Chrysalis to Stardust.",source:"@site/content/build/introduction-docs/develop/docs/how_tos/overview.md",sourceDirName:"how_tos",slug:"/how_tos/overview",permalink:"/introduction/develop/how_tos/overview",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/content/build/introduction-docs/develop/docs/how_tos/overview.md",tags:[],version:"current",frontMatter:{description:"An overview of the available guides for the Shimmer network that also outlines the changes from IOTA 1.5, aka Chrysalis to Stardust.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["IOTA 1.5","stardust","changes","guides","migration","developer","reference"]},sidebar:"mySidebar",previous:{title:"FAQ",permalink:"/introduction/develop/explanations/faq"},next:{title:"Backup and Security",permalink:"/introduction/develop/how_tos/backup_security"}},d={},p=[{value:"Overall Changes from IOTA 1.5 (Chrysalis) to Stardust in a Nutshell",id:"overall-changes-from-iota-15-chrysalis-to-stardust-in-a-nutshell",level:2}],c={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iota-stardust-guides"},"IOTA Stardust Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/how_tos/backup_security.md"},"Backup and Security"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/how_tos/verify_download.md"},"Verify Firefly Shimmer download"))),(0,n.kt)("h2",{id:"overall-changes-from-iota-15-chrysalis-to-stardust-in-a-nutshell"},"Overall Changes from IOTA 1.5 (Chrysalis) to Stardust in a Nutshell"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Revised output types and extended ledger model that allows tokenization and smart contract anchoring. Read more in\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/pull/38"},"TIP-18"),"."),(0,n.kt)("li",{parentName:"ul"},"New dust protection mechanism based on virtual byte cost. Read more on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/tree/main/tips/TIP-0019"},"TIP-19"),"."),(0,n.kt)("li",{parentName:"ul"},"Updated transaction structure, furthermore added inputs commitment and network identifier for user protection and security.\nInputs and outputs of a transaction don't have to be sorted anymore. Read more in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/pull/40"},"TIP-20"),"."),(0,n.kt)("li",{parentName:"ul"},"Tagged Data Payloads replace Indexation Payloads. The former are no longer indexed by the core nodes. Read more in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0023/tip-0023.md"},"TIP-23"),"."),(0,n.kt)("li",{parentName:"ul"},"Tangle Messages are replaced by Tangle Blocks to align with the terminology of the upcoming IOTA 2.0 protocol. Read more in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/pull/55"},"TIP-24"),"."),(0,n.kt)("li",{parentName:"ul"},"Redesigned Core Node API. Indexing or additional processing logic has been removed and off-loaded to INX applications. Read more in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/pull/57"},"TIP-25"),"."),(0,n.kt)("li",{parentName:"ul"},"Wallets may use the brand new ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/tree/main/tips/TIP-0026"},"Indexer API")," to query the ledger state."),(0,n.kt)("li",{parentName:"ul"},"Node Event API (MQTT) has been extended to account for the updated ledger models. Read more in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/pull/66"},"TIP-28"),"."),(0,n.kt)("li",{parentName:"ul"},"The Milestone Payload has been redesigned to support fluid protocol and parameter upgrades, Proof-of-Inclusion and much more. Read more in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/pull/69"},"TIP-29")),(0,n.kt)("li",{parentName:"ul"},"Snapshots that hold the copy of the ledger state at a given time have been redesigned. Read more in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/pull/76"},"TIP-35")),(0,n.kt)("li",{parentName:"ul"},"Chronicle has been reimplemented as an INX extension, furthermore it supports the Core Node API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/pull/57"},"TIP-25"),", but also the\nHistory API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/pull/77"},"TIP-36"))))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||n;return r?o.createElement(h,i(i({ref:t},d),{},{components:r})):o.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);