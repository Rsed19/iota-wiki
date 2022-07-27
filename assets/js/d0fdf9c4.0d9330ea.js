"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9155],{73807:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=["components"],i={keywords:["Smart Contracts","blockchain","parallel","scaling"],description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code",image:"/img/logo/WASP_logo_dark.png"},s="Smart Contracts",l={unversionedId:"guide/core_concepts/smart-contracts",id:"guide/core_concepts/smart-contracts",title:"Smart Contracts",description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code",source:"@site/content/build/wasp/production/documentation/docs/guide/core_concepts/smart-contracts.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/smart-contracts",permalink:"/smart-contracts/guide/core_concepts/smart-contracts",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/core_concepts/smart-contracts.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","blockchain","parallel","scaling"],description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"IOTA Smart Contracts",permalink:"/smart-contracts/overview"},next:{title:"IOTA Smart Contracts Architecture",permalink:"/smart-contracts/guide/core_concepts/iscp-architecture"}},u={},p=[{value:"What Are Smart Contracts?",id:"what-are-smart-contracts",level:2},{value:"Applications You Can Trust",id:"applications-you-can-trust",level:3},{value:"Scalable Smart Contracts",id:"scalable-smart-contracts",level:3}],m={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("h2",{id:"what-are-smart-contracts"},"What Are Smart Contracts?"),(0,o.kt)("p",null,"Smart contracts are software applications that run on a distributed network with multiple validators executing and validating the same code. This ensures the application behaves as expected, and that there is no tampering in the execution of the program. "),(0,o.kt)("h3",{id:"applications-you-can-trust"},"Applications You Can Trust"),(0,o.kt)("p",null,"As you can be certain that the code being executed is always the same (and will not change), this results in applications you can trust. This allows you to use smart contracts for applications where there was a trust issue. The rules of the smart contract define what the contract can and can not do, making it a decentralized and a predictable decision-maker."),(0,o.kt)("p",null,"Smart contracts are used for all kinds of purposes. A recurring reason to use a smart contract is to automate certain actions without needing a centralized entity to enforce this specific action. A good example of this is a smart contract that can exchange a certain amount of IOTA tokens for a certain amount of land ownership. The smart contract will accept both the IOTA tokens and the land ownership, and will predictably exchange them between both parties without the risk of one of the parties not delivering on their promise. ",(0,o.kt)("strong",{parentName:"p"},"With a smart contract, code is law"),"."),(0,o.kt)("h3",{id:"scalable-smart-contracts"},"Scalable Smart Contracts"),(0,o.kt)("p",null,"On a public blockchain, anyone willing to pay the fees for deploying a smart contract can deploy one. Once your smart contract has been deployed to the chain you no longer have the option to change it, and you can be assured that your smart contract application will be there as long as that blockchain exists. Smart contracts can communicate with one another, and you can invoke programmed public functions on a smart contract to trigger actions on a smart contract, or address the state of a smart contract."),(0,o.kt)("p",null,"Because smart contracts do not run on a single computer, but on many validators, a network of smart contracts can only process so many smart contracts at once, even if the software has been written optimally. This means smart contracts are expensive to execute, and do not scale well on a single blockchain, often resulting in congested networks and expensive fees for executing functions on smart contracts. ",(0,o.kt)("strong",{parentName:"p"},"By allowing many blockchains executing smart contracts to run in parallel"),", and communicate with one another, ",(0,o.kt)("strong",{parentName:"p"},"IOTA Smart Contracts will solve this scalability problem.")))}d.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,c(c({ref:e},u),{},{components:n})):a.createElement(h,c({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);