"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[56047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||c;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={description:"An overview of the IOTA Smart Contracts architecture.",image:"/img/multichain.png",keywords:["smart contracts","architecture","Layer 2","L2","Layer 1","L1","explanation"]},o="ISC Architecture",i={unversionedId:"guide/core_concepts/isc-architecture",id:"guide/core_concepts/isc-architecture",title:"ISC Architecture",description:"An overview of the IOTA Smart Contracts architecture.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/isc-architecture.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/isc-architecture",permalink:"/smart-contracts/develop/guide/core_concepts/isc-architecture",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/isc-architecture.md",tags:[],version:"current",frontMatter:{description:"An overview of the IOTA Smart Contracts architecture.",image:"/img/multichain.png",keywords:["smart contracts","architecture","Layer 2","L2","Layer 1","L1","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/smart-contracts/develop/guide/core_concepts/smart-contracts"},next:{title:"Validators",permalink:"/smart-contracts/develop/guide/core_concepts/validators"}},s={},p=[],l={toc:p};function u(e){let{components:t,...c}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"isc-architecture"},"ISC Architecture"),(0,a.kt)("p",null,"IOTA Smart Contracts work as a ",(0,a.kt)("em",{parentName:"p"},"layer 2")," (L2 for short) extension of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lzpap/tips/blob/master/tips/TIP-0018/tip-0018.md"},(0,a.kt)("em",{parentName:"a"},"IOTA Multi-Asset\nLedger"))," (Layer 1, or L1 for short, also sometimes\ncalled the UTXO Ledger)."),(0,a.kt)("p",null,"In IOTA Smart Contracts, each L2 chain has its own state and smart contracts that cause this state to change.\nAs validator nodes execute the smart contracts, they tally these state changes and write them into the chain.\nEach time they update the state, they collectively agree on a new state and commit to it by publishing its hash to L1."),(0,a.kt)("p",null,"Each Layer 2 chain is functionally similar to a traditional blockchain.\nHowever, ISC chains can communicate with Layer 1 and each other, making ISC a more sophisticated protocol."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IOTA Smart Contacts multichain architecture",src:r(30354).Z,title:"Click to see the full-size image.",width:"862",height:"588"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"IOTA Smart Contacts multichain architecture.")),(0,a.kt)("p",null,"You can find the comprehensive overview of architectural design decisions of IOTA Smart Contracts in the\n",(0,a.kt)("a",{parentName:"p",href:"https://files.iota.org/papers/ISC_WP_Nov_10_2021.pdf"},"ISC white paper"),"."))}u.isMDXComponent=!0},30354:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/multichain-4f8c53ab2ddaac9eeefe509a54e8f7ee.png"}}]);