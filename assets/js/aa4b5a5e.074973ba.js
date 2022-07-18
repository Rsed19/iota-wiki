"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[41290],{1522:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={keywords:["Stardust","Shimmer","Upgrades","Smart Contract","Anchoring","Protocol Improvements","explanation"],description:"Smart contract chain support in Stardust.",image:"/img/logo/Chrysalis_logo_dark.png"},c="Smart Contract Chain Support",u={unversionedId:"explanations/what_is_stardust/sc_support",id:"explanations/what_is_stardust/sc_support",title:"Smart Contract Chain Support",description:"Smart contract chain support in Stardust.",source:"@site/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/sc_support.md",sourceDirName:"explanations/what_is_stardust",slug:"/explanations/what_is_stardust/sc_support",permalink:"/introduction/develop/explanations/what_is_stardust/sc_support",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/sc_support.md",tags:[],version:"current",frontMatter:{keywords:["Stardust","Shimmer","Upgrades","Smart Contract","Anchoring","Protocol Improvements","explanation"],description:"Smart contract chain support in Stardust.",image:"/img/logo/Chrysalis_logo_dark.png"},sidebar:"mySidebar",previous:{title:"Rethinking the UTXO Model",permalink:"/introduction/develop/explanations/what_is_stardust/rethink_utxo"},next:{title:"Tokenization",permalink:"/introduction/develop/explanations/what_is_stardust/tokenization"}},l={},p=[],d={toc:p};function h(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"smart-contract-chain-support"},"Smart Contract Chain Support"),(0,a.kt)("p",null,"A new ledger account is introduced for smart contract chains, called the Alias Account. Such accounts receive a global and\nunique address upon creation, which stays the same for their lifetime. The unique address is owned by the two controllers\nof the Alias account that have different privileges."),(0,a.kt)("p",null,"Smart contract chain validators are assigned to the role of ",(0,a.kt)("em",{parentName:"p"},"state controller")," of the alias account through a\nthreshold signature address. T out of N validator signatures are required to move assets on the base protocol that belong\nto the alias account."),(0,a.kt)("p",null,"Smart contract chain owners are assigned to the role of ",(0,a.kt)("em",{parentName:"p"},"governor")," of the alias account. They may replace validators\nand are the ones who can eventually destroy the account all together. If the governor and state controller entities are\nthe same, we talk about a self-governing smart contract chain."),(0,a.kt)("p",null,"While smart contract chain owners might change or validators might be rotated over time, the address of the chain stays\nthe same."))}h.isMDXComponent=!0},3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=u(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:e},l),{},{components:r})):n.createElement(m,i({ref:e},l))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);