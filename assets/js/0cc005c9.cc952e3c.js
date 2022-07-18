"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[47655],{85413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],i={description:"IOTA Smart Contracts consensus is how Layer 2 validators agree to change the chain state in the same way.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","consensus","validator committee","validators","validator nodes","explanation"]},c="Consensus",l={unversionedId:"guide/core_concepts/consensus",id:"guide/core_concepts/consensus",title:"Consensus",description:"IOTA Smart Contracts consensus is how Layer 2 validators agree to change the chain state in the same way.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/consensus.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/consensus",permalink:"/smart-contracts/guide/core_concepts/consensus",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/consensus.md",tags:[],version:"current",frontMatter:{description:"IOTA Smart Contracts consensus is how Layer 2 validators agree to change the chain state in the same way.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","consensus","validator committee","validators","validator nodes","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Validators",permalink:"/smart-contracts/guide/core_concepts/validators"},next:{title:"State, Transitions, and State Anchoring",permalink:"/smart-contracts/guide/core_concepts/states"}},h={},u=[{value:"Batch Proposals",id:"batch-proposals",level:2},{value:"The Batch",id:"the-batch",level:2},{value:"State Anchor",id:"state-anchor",level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consensus"},"Consensus"),(0,r.kt)("p",null,"To update the chain, its committee needs to reach a consensus, meaning that more than two thirds of its validators have to agree to change the state in the exact same way. This prevents a single malicious node from wreaking havoc over the chain, of course, but there are also more mundane reasons for individual nodes to act up."),(0,r.kt)("p",null,"Smart contracts are deterministic, so all honest nodes will produce the same output \u2014 but only if they have received same the input. Each validator node has its own point of access to the Tangle, so it may look a bit different to different nodes, as fresh transactions take time to propagate through the network. Validator nodes will receive smart contract requests with random delays in a random order, and, finally, all computers run on their own always slightly skewed clocks."),(0,r.kt)("h2",{id:"batch-proposals"},"Batch Proposals"),(0,r.kt)("p",null,"As the first step, each node provides its own vision, a ",(0,r.kt)("em",{parentName:"p"},"batch proposal"),". It contains a local timestamp, a list of unprocessed requests, and the node's partial signature of the current state's hash."),(0,r.kt)("p",null,"Then the nodes have to agree on which batch proposals they want to work on. In short, nodes A, B, and C have to confirm that they plan to work on proposals from A, B, and C, and from no one else. As long as there are more than two thirds of honest nodes, they will be able to find an ",(0,r.kt)("em",{parentName:"p"},"asynchronous common subset")," of the batch proposals. From that point nodes have the same input and will produce the same result independently."),(0,r.kt)("h2",{id:"the-batch"},"The Batch"),(0,r.kt)("p",null,"The next step is to convert the raw list of batch proposals into an actual batch: for that, all requests from all proposals are counted and filtered to produce the same single list of requests in the same order."),(0,r.kt)("p",null,"As all nodes had to sign the same piece of information, the hash of the current state, these partial signatures can be combined into a full, valid signature that is then fed to a pseudo-random function that orders the smart contract requests. Validator nodes can neither affect nor predict the final order of requests in the batch."),(0,r.kt)("h2",{id:"state-anchor"},"State Anchor"),(0,r.kt)("p",null,"After agreeing on the input, each node executes every smart contract request in order, producing the same new block independently. Each node then crafts a state anchor, a Layer 1 transaction that proves the commitment to this new chain state. The timestamp for this transaction is derived from the timestamps of all batch proposals."),(0,r.kt)("p",null,"All nodes then sign the state anchor with their partial keys and exchange these signatures. This way, every node obtains the same valid combined signature and the same valid anchor transaction, which means that any node can publish this transaction to Layer 1. In theory, nodes could publish these state anchors every time they update the state; in practice, they do it only every ten or so seconds to reduce the load on the Tangle."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return n?o.createElement(m,s(s({ref:t},h),{},{components:n})):o.createElement(m,s({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);