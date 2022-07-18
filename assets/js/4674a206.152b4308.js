"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78224],{67155:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={description:"Using IOTA Identity, a new digital identity can be created by anyone or anything at any time by generating a Decentralized Identifier (DID) combined with Verifiable Credentials",image:"/img/Identity_icon.png",keywords:["Identity","verifiable","credentials","Rust","WASM","reference"]},s="Overview",c={unversionedId:"getting_started/overview",id:"getting_started/overview",title:"Overview",description:"Using IOTA Identity, a new digital identity can be created by anyone or anything at any time by generating a Decentralized Identifier (DID) combined with Verifiable Credentials",source:"@site/content/build/identity.rs/develop/documentation/docs/getting_started/overview.md",sourceDirName:"getting_started",slug:"/getting_started/overview",permalink:"/identity.rs/develop/getting_started/overview",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/getting_started/overview.md",tags:[],version:"current",frontMatter:{description:"Using IOTA Identity, a new digital identity can be created by anyone or anything at any time by generating a Decentralized Identifier (DID) combined with Verifiable Credentials",image:"/img/Identity_icon.png",keywords:["Identity","verifiable","credentials","Rust","WASM","reference"]},sidebar:"docs",previous:{title:"Introduction to Decentralized Identity",permalink:"/identity.rs/develop/decentralized_identity"},next:{title:"Install the Library",permalink:"/identity.rs/develop/getting_started/install"}},d={},u=[{value:"Implementations",id:"implementations",level:2},{value:"Applications",id:"applications",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"standards proposed by W3C"),", this section explains the IOTA Identity implementation. You can use this implementation to create a new digital identity for anyone or anything at any time. To do so, you must first generate a ",(0,a.kt)("a",{parentName:"p",href:"../concepts/decentralized_identifiers/overview"},"Decentralized Identifier (DID)")," that will serve as a reference to the ",(0,a.kt)("a",{parentName:"p",href:"../concepts/decentralized_identifiers/overview#did-documents"},"DID Document"),". The DID Document contains public keys and other mechanisms to enable the subject to prove their association with the DID."),(0,a.kt)("p",null,"However, you cannot tell much about the subject from a DID. You need to combine the DID with ",(0,a.kt)("a",{parentName:"p",href:"../concepts/verifiable_credentials/overview"},"Verifiable Credentials"),'. Verifiable Credentials are statements about the creator of the DID. They can be shared and verified online in a "Bring Your Own Identity" (BYOI) manner, and the DID creator remains in complete control of the process.'),(0,a.kt)("p",null,"You can use this framework in processes such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Address validation: Customers can prove where they live for shipping and billing addresses."),(0,a.kt)("li",{parentName:"ul"},"Age verification: Customers can prove they are 18+ for online purchases."),(0,a.kt)("li",{parentName:"ul"},"(Authority) Login: Customers can prove who they are and gain access to their account,\nwithout passwords. This can be useful for many websites, including eGovernment and\nbanking.")),(0,a.kt)("h2",{id:"implementations"},"Implementations"),(0,a.kt)("p",null,'The IOTA Identity framework is developed in the Rust programming language. We also provide bindings, or "Foreign Function Interfaces" (FFI), to other languages. The full set of language bindings currently available is:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../libraries/rust/getting_started"},"Rust")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../libraries/wasm/getting_started"},"WASM"))),(0,a.kt)("h2",{id:"applications"},"Applications"),(0,a.kt)("p",null,"The following applications are currently utilizing the IOTA Identity framework:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://selv.iota.org/"},"Selv app"))))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);