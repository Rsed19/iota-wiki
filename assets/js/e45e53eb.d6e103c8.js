"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[11409],{43928:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={description:"How to configure a Hornet node as a verifier node.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","verifier","Chrysalis Phase 2","receipts","how to"]},s="How to Run Hornet as a Verifier Node",d={unversionedId:"how_tos/run_as_a_verifier",id:"how_tos/run_as_a_verifier",title:"How to Run Hornet as a Verifier Node",description:"How to configure a Hornet node as a verifier node.",source:"@site/content/build/hornet/production/documentation/docs/how_tos/run_as_a_verifier.md",sourceDirName:"how_tos",slug:"/how_tos/run_as_a_verifier",permalink:"/hornet/how_tos/run_as_a_verifier",draft:!1,editUrl:"https://github.com/gohornet/hornet/edit/mainnet/documentation/content/build/hornet/production/documentation/docs/how_tos/run_as_a_verifier.md",tags:[],version:"current",frontMatter:{description:"How to configure a Hornet node as a verifier node.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","verifier","Chrysalis Phase 2","receipts","how to"]},sidebar:"mySidebar",previous:{title:"Managing a Node",permalink:"/hornet/how_tos/managing_a_node"},next:{title:"Nodes 101",permalink:"/hornet/explanations/nodes_101"}},c={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-run-hornet-as-a-verifier-node"},"How to Run Hornet as a Verifier Node"),(0,i.kt)("p",null," A verifier node is a node which validates receipts. Receipts are an integral component of the migration mechanism used to migrate funds from the legacy network into the Chrysalis Phase 2 network. You can find a more detailed explanation on how the migration mechanism works in the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/migration_mechanism"},"Chrysalis documentation"),"."),(0,i.kt)("p",null,"This guide explains how to configure a Hornet node as a verifier node:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure you enabled the ",(0,i.kt)("inlineCode",{parentName:"li"},"Receipts")," plugin under ",(0,i.kt)("inlineCode",{parentName:"li"},"node.enablePlugins"),"."),(0,i.kt)("li",{parentName:"ol"},"Set :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"receipts.validator.validate")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". This enables the verification logic in your node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"receipts.validator.ignoreSoftErrors")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set it to  ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", if you don't want the verifier node to panic if it can not query a legacy node for data. "),(0,i.kt)("li",{parentName:"ul"},"Set it to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," if you want to make sure that your verifier node panics if it can not query for data from a legacy node. "),(0,i.kt)("li",{parentName:"ul"},"An invalid receipt will always result in a panic. ",(0,i.kt)("inlineCode",{parentName:"li"},"ignoreSoftErrors")," only controls API call failures to the legacy node."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"receipts.validator.api.timeout")," to something sensible like ",(0,i.kt)("inlineCode",{parentName:"li"},"10s")," (meaning 10 seconds)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"receipts.validator.api.address")," to the URI of your legacy node. Note that this legacy node must have the ",(0,i.kt)("inlineCode",{parentName:"li"},"getWhiteFlagConfirmation")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"getNodeInfo")," API commands whitelisted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"receipts.validator.coordinator.address")," to the Coordinator address in the legacy network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"receipts.validator.coordinator.merkleTreeDepth")," to the correct used Merkle tree depth in the legacy network."))),(0,i.kt)("li",{parentName:"ol"},"Run your Hornet verifier node and let it validate receipts.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend that you use a load balanced endpoint to multiple legacy nodes for ",(0,i.kt)("inlineCode",{parentName:"p"},"receipts.validator.api.address")," to obtain high availability."))),(0,i.kt)("p",null,"After this, if your verifier node panics because of an invalid receipt, it is clear that one of the produced receipts is not valid. In this case, as a verifier node operator, you are invited to inform the community and the IOTA Foundation of your findings. This is, by the way, the same result as when the Coordinator issues a milestone, which diverges from a consistent ledger state."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);