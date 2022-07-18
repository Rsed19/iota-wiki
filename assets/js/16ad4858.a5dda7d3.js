"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[38544],{45648:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",image:"/img/Banner/banner_wasp_core_concepts_smart_contracts.png",keywords:["smart contracts","blockchain","parallel","scaling","explanation"]},s="Smart Contracts",l={unversionedId:"guide/core_concepts/smart-contracts",id:"guide/core_concepts/smart-contracts",title:"Smart Contracts",description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/smart-contracts.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/smart-contracts",permalink:"/smart-contracts/guide/core_concepts/smart-contracts",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/smart-contracts.md",tags:[],version:"current",frontMatter:{description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",image:"/img/Banner/banner_wasp_core_concepts_smart_contracts.png",keywords:["smart contracts","blockchain","parallel","scaling","explanation"]},sidebar:"tutorialSidebar",previous:{title:"IOTA Smart Contracts",permalink:"/smart-contracts/overview"},next:{title:"ISC Architecture",permalink:"/smart-contracts/guide/core_concepts/isc-architecture"}},u={},p=[{value:"Applications You Can Trust",id:"applications-you-can-trust",level:2},{value:"Scalable Smart Contracts",id:"scalable-smart-contracts",level:2}],d={toc:p};function m(t){var e=t.components,i=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wasp Node Smart Contracts",src:n(80016).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"Smart contracts are software applications that run on a distributed network with multiple validators executing and validating the same code. This prevents tampering with the execution of the program and ensures that the application behaves as expected. "),(0,o.kt)("h2",{id:"applications-you-can-trust"},"Applications You Can Trust"),(0,o.kt)("p",null,"As you can be certain that the code that is being executed will never change, this results in applications you can trust. This allows you to use smart contracts for applications where there was a trust issue. The rules of the smart contract define what the contract can and can not do, making it a decentralized and a predictable decision maker."),(0,o.kt)("p",null,"Smart contracts are used for all kinds of purposes. A recurring reason to use a smart contract would be to automate a certain action without needing a centralized entity to enforce it. For example, a smart contract could exchange a certain amount of IOTA tokens for a certain amount of land ownership. That smart contract would accept both the IOTA tokens and the land ownership and predictably exchange them between both parties. It excludes the risk of one of the parties not delivering on their promise: with a smart contract, code is law."),(0,o.kt)("h2",{id:"scalable-smart-contracts"},"Scalable Smart Contracts"),(0,o.kt)("p",null,"Anyone could deploy a smart contract to a public smart contract chain. Once it is deployed, nobody will be able to change or delete it. Smart contracts can communicate with one another, and you can invoke programmed public functions on a smart contract to trigger its execution or check its state."),(0,o.kt)("p",null,"Smart contracts do not run on just a single computer. Instead, each validator of the blockchain has to run it, compare the results with others, and synchronize the state of the network. They need to wait while their messages are carried over the Internet, which introduces delays that you cannot solve with quicker software or faster computers, and this issue will only get worse if you try to add more validators to the network. With enough requests, any blockchain network will get congested, and its execution fees will ramp up."),(0,o.kt)("p",null,"As IOTA Smart Contracts run many independent chains, it spreads out the load and creates a network of a much larger scale. At the same time, it provides advanced means of communication between its chains and preserves the ability to create complex, composed smart contracts."))}m.isMDXComponent=!0},80016:function(t,e,n){e.Z=n.p+"assets/images/banner_wasp_core_concepts_smart_contracts-9b7268f183de6c60a27309cfcfbe6f16.png"},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,c(c({ref:e},u),{},{components:n})):r.createElement(h,c({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);