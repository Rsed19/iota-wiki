"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[17101],{6241:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={keywords:["Stardust","Shimmer","Upgrades","Ledger","UTXO","Protocol Improvements","explanation"],description:"Extending the UTXO ledger concept with Stardust.",image:"/img/logo/Chrysalis_logo_dark.png"},l="Rethinking the UTXO Model",u={unversionedId:"explanations/what_is_stardust/rethink_utxo",id:"explanations/what_is_stardust/rethink_utxo",title:"Rethinking the UTXO Model",description:"Extending the UTXO ledger concept with Stardust.",source:"@site/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/rethink_utxo.md",sourceDirName:"explanations/what_is_stardust",slug:"/explanations/what_is_stardust/rethink_utxo",permalink:"/introduction/develop/explanations/what_is_stardust/rethink_utxo",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/rethink_utxo.md",tags:[],version:"current",frontMatter:{keywords:["Stardust","Shimmer","Upgrades","Ledger","UTXO","Protocol Improvements","explanation"],description:"Extending the UTXO ledger concept with Stardust.",image:"/img/logo/Chrysalis_logo_dark.png"},sidebar:"mySidebar",previous:{title:"What is Stardust?",permalink:"/introduction/develop/explanations/what_is_stardust/"},next:{title:"Smart Contract Chain Support",permalink:"/introduction/develop/explanations/what_is_stardust/sc_support"}},c={},p=[],d={toc:p};function h(t){var e=t.components,s=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rethinking-the-utxo-model"},"Rethinking the UTXO Model"),(0,a.kt)("p",null,"Since the Chrysalis upgrade IOTA has been using the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unspent_transaction_output"},"Unspent Transaction Output (UTXO)"),"\nmodel for ledger accounting. The essential part of this model are outputs that hold user funds. Whenever a user wishes\nto transfer tokens, they create a transaction in which unspent transaction outputs are consumed and new ones are created."),(0,a.kt)("p",null,"Each output defines who is allowed to unlock them via an address. The protocol only allows consumption of outputs in\ntransactions if the owner can present a valid digital signature corresponding to the owner address recorded in the output\nitself."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The UTXO Model",src:n(94373).Z,width:"931",height:"481"})),(0,a.kt)("p",null,"In Chrysalis an output consists of a ",(0,a.kt)("inlineCode",{parentName:"p"},"{tokens, address}")," pair, therefore all you can do with outputs is define their\nowner and who is allowed to unlock them. There is no restrictions whatsoever on what one might do with the funds in\na transaction once the output is unlocked. This is what we call the cryptocurrency application, or in simple words,\ndigital cash."),(0,a.kt)("p",null,"Stardust introduces new output types that are more expressive:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"output types define additional fields for outputs,"),(0,a.kt)("li",{parentName:"ul"},"output unlocking is configurable via unlock conditions, moreover, output types might define additional unlocking constraints based on the context of transaction that tries to unlock them.")),(0,a.kt)("p",null,"At first glance, this might look as just a small improvement, but notice that if we can"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"record any state as data in outputs, and"),(0,a.kt)("li",{parentName:"ul"},"program how that state can be manipulated in transactions,")),(0,a.kt)("p",null,"we essentially implemented a computer program ran by the protocol itself. The program state is stored in outputs, while\ncommands to the program are issued via transactions. Could we implement then any program on the UTXO ledger via outputs?"),(0,a.kt)("p",null,"The answer is no. First, we have limited space to store program data in outputs, therefore not any state can be stored.\nSecond, we have to be overly restrictive about what commands are supported, as their execution takes time and must be\nperformed on all network nodes. Also, such programs don't have access to the state of other programs present in the\nledger, only to what is in the context of their transaction. This is a deliberate design choice in IOTA which\nallows parallel execution and validation of transactions and such programs, unlike the serialized approach in other\nprotocols such as Ethereum."),(0,a.kt)("p",null,"As a consequence, Stardust implements a limited set of programs and commands via outputs. The main goal of these\nbuilt-in ledger programs is to support second-layer IOTA Smart Contracts, the general, Turing-complete decentralized\napplication platform on which any smart contract logic can be implemented."),(0,a.kt)("p",null,"To learn more about the ledger programs and outputs, check out ",(0,a.kt)("a",{parentName:"p",href:"/introduction/develop/explanations/ledger/intro"},"Anatomy of Stardust Ledger"),"."))}h.isMDXComponent=!0},94373:function(t,e,n){e.Z=n.p+"assets/images/utxo-7099e996c94120f8b5284e0425ece453.png"},3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);