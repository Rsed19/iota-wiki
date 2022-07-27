"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[47362],{44707:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],s={description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","rust","inter-chain protocols","validate smart contracts","install"]},l="Testing Smart Contracts with Solo",c={unversionedId:"guide/solo/what-is-solo",id:"guide/solo/what-is-solo",title:"Testing Smart Contracts with Solo",description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols",source:"@site/content/build/wasp/develop/documentation/docs/guide/solo/what-is-solo.md",sourceDirName:"guide/solo",slug:"/guide/solo/what-is-solo",permalink:"/smart-contracts/develop/guide/solo/what-is-solo",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/solo/what-is-solo.md",tags:[],version:"current",frontMatter:{description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","rust","inter-chain protocols","validate smart contracts","install"]},sidebar:"tutorialSidebar",previous:{title:"The Common Account",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/the-common-account"},next:{title:"First Example",permalink:"/smart-contracts/develop/guide/solo/first-example"}},p={},m=[{value:"What is Solo?",id:"what-is-solo",level:2},{value:"Installation",id:"installation",level:2}],u={toc:m};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-smart-contracts-with-solo"},"Testing Smart Contracts with Solo"),(0,r.kt)("h2",{id:"what-is-solo"},"What is Solo?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/packages/solo"},(0,r.kt)("em",{parentName:"a"},"Solo"))," is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols before deploying them on the distributed network."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solo")," tests are written in Go. Go (version 1.18) needs to be installed on your machine."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solo")," is part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp.git"},(0,r.kt)("em",{parentName:"a"},"Wasp")," codebase repository"),". You can access the Solo framework by cloning the repository with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/wasp.git\n")),(0,r.kt)("p",null,"Alternatively, you can install the Solo package separately using the following command:"),(0,r.kt)("p",null,"In Linux/macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/iotaledger/wasp/packages/solo\n")),(0,r.kt)("p",null,"In Windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go get -buildmode=exe github.com/iotaledger/wasp/packages/solo\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can browse the Solo Go API reference (updated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch) in ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/iotaledger/wasp/packages/solo"},"go-docs"),"."))),(0,r.kt)("p",null,"Of course, along with Solo you will need a smart contract to test.\nYou can find example implementations of Rust/Wasm smart contracts (including source code and tests) in the Wasp repository, in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/contracts/wasm"},"contracts/wasm folder"),".\nFor information about how to create Wasm smart contracts, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/intro"},"Wasm VM chapter"),"."),(0,r.kt)("p",null,"In the following sections we will present some Solo usage examples. The example code can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples"},"Wasp repository"),"."))}d.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=n,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return o?a.createElement(g,i(i({ref:t},p),{},{components:o})):a.createElement(g,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);