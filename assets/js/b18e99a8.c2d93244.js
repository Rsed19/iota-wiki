"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[55473],{52233:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={keywords:["Smart Contracts","Chain","Set up","Configuration","Nodes","Tests"],description:"Setting up a chain requirements, configuration parameters, validators and tests.",image:"/img/logo/WASP_logo_dark.png"},c="Setting Up a Chain",l={unversionedId:"guide/chains_and_nodes/setting-up-a-chain",id:"guide/chains_and_nodes/setting-up-a-chain",title:"Setting Up a Chain",description:"Setting up a chain requirements, configuration parameters, validators and tests.",source:"@site/content/build/wasp/production/documentation/docs/guide/chains_and_nodes/setting-up-a-chain.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/setting-up-a-chain",permalink:"/smart-contracts/guide/chains_and_nodes/setting-up-a-chain",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/chains_and_nodes/setting-up-a-chain.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","Chain","Set up","Configuration","Nodes","Tests"],description:"Setting up a chain requirements, configuration parameters, validators and tests.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Configuring wasp-cli",permalink:"/smart-contracts/guide/chains_and_nodes/wasp-cli"},next:{title:"Chain Management",permalink:"/smart-contracts/guide/chains_and_nodes/chain-management"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Trust Setup",id:"trust-setup",level:2},{value:"Starting The Chain",id:"starting-the-chain",level:2},{value:"Requesting Test Funds",id:"requesting-test-funds",level:3},{value:"Deploy the IOTA Smart Contracts Chain",id:"deploy-the-iota-smart-contracts-chain",level:3},{value:"Testing If It Works",id:"testing-if-it-works",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Deploying a Wasm Contract",id:"deploying-a-wasm-contract",level:3},{value:"Interacting With a Smart Contract",id:"interacting-with-a-smart-contract",level:3},{value:"Video Tutorial",id:"video-tutorial-1",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-chain"},"Setting Up a Chain"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'It is possible to run a "committee" composed of a single Wasp node, and\nthis may be fine for testing purposes. However, in normal operation the idea is\nto have multiple Wasp nodes in order to run the smart contracts in a\ndistributed fashion. If you want to run a committee of several nodes on the\nsame machine, ensure that each Wasp instance runs in separate directory with\nits own ',(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," and database. Ports and other settings must be adjusted\naccordingly."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For testing purposes, all Wasp nodes can be connected to the same\nGoshimmer instance.  In normal operation, it is recommended that each Wasp node\nconnects to a different Goshimmer instance."))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/guide/chains_and_nodes/wasp-cli"},(0,r.kt)("inlineCode",{parentName:"a"},"wasp-cli")," configured")," to interact with the wasp nodes. ")),(0,r.kt)("h2",{id:"trust-setup"},"Trust Setup"),(0,r.kt)("p",null,"After starting all the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp")," nodes, you should make them trust each other.\nNode operators should do this manually. It's their responsibility to\naccept trusted nodes only."),(0,r.kt)("p",null,"The operator can read its node's public key and NetID by running ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli peering info"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli peering info\n")),(0,r.kt)("p",null,"Example response: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"PubKey: 8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM\nNetID:  127.0.0.1:4000\n")),(0,r.kt)("p",null,"PubKey and NetID should be provided to other node operators.\nThey can use this info to trust your node and accept communications with it.\nThat's done by invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli peering trust <PubKey> <NetID>"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli peering list-trusted\nwasp-cli peering trust 8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM 127.0.0.1:4000\nwasp-cli peering list-trusted\n")),(0,r.kt)("p",null,"Example response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"------                                        -----\nPubKey                                        NetID\n------                                        -----\n8oQ9xHWvfnShRxB22avvjbMyAumZ7EXKujuthqrzapNM  127.0.0.1:4000\n")),(0,r.kt)("p",null,"All the nodes in a committee must trust each other to run the chain."),(0,r.kt)("h2",{id:"starting-the-chain"},"Starting The Chain"),(0,r.kt)("h3",{id:"requesting-test-funds"},"Requesting Test Funds"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using a seed that already holds fund, you can skip this step."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli request-funds\n")),(0,r.kt)("p",null,"After you have requested the funds, you can deposit funds to a chain by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain deposit IOTA:10000\n")),(0,r.kt)("h3",{id:"deploy-the-iota-smart-contracts-chain"},"Deploy the IOTA Smart Contracts Chain"),(0,r.kt)("p",null,"You can deploy your IOTA Smart Contracts chain by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'wasp-cli chain deploy --committee=0,1,2,3 --quorum=3 --chain=mychain --description="My chain"\n')),(0,r.kt)("p",null,"The indices in ",(0,r.kt)("inlineCode",{parentName:"p"},"--committee=0,1,2,3")," will correspond to ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp.1"),", etc. in ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli.json"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain=mychain")," flag sets up an alias for the chain. From now on all chain commands will be targeted to this chain."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--quorum")," flag indicates the minimum amount of nodes required to form a consensus.  The recommended formula to obtain this number ",(0,r.kt)("inlineCode",{parentName:"p"},"floor(N*2/3)+1")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," is the number of nodes in your committee. "),(0,r.kt)("h2",{id:"testing-if-it-works"},"Testing If It Works"),(0,r.kt)("p",null,"You can check that the chain was properly deployed in the Wasp node dashboard\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7000"),"). Note that the chain was deployed with some ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/overview"},"core contracts"),"."),(0,r.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/3mLpV_neB6I",title:"Setting up Wasp Chain",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h3",{id:"deploying-a-wasm-contract"},"Deploying a Wasm Contract"),(0,r.kt)("p",null,"Now you can deploy a Wasm contract to the chain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'wasp-cli chain deploy-contract wasmtime inccounter "inccounter SC" tools/cluster/tests/wasm/inccounter_bg.wasm\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"inccounter_bg.wasm")," file is a precompiled Wasm contract included in the Wasp repo as an example."),(0,r.kt)("p",null,"If you check the dashboard again, you should see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"inccounter")," contract is listed in the chain."),(0,r.kt)("h3",{id:"interacting-with-a-smart-contract"},"Interacting With a Smart Contract"),(0,r.kt)("p",null,"You can interact with a contract by calling its exposed functions and views."),(0,r.kt)("p",null,"For instance, the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/contracts/wasm/inccounter/src"},(0,r.kt)("inlineCode",{parentName:"a"},"inccounter")),"\ncontract exposes the ",(0,r.kt)("inlineCode",{parentName:"p"},"increment")," function, which simply increments a counter\nstored in the state. It also has the ",(0,r.kt)("inlineCode",{parentName:"p"},"getCounter")," view that returns the\ncurrent value of the counter."),(0,r.kt)("p",null,"You can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"getCounter")," view by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain call-view inccounter getCounter | wasp-cli decode string counter int\n")),(0,r.kt)("p",null,"Example response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"counter: 0\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The part after ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," is necessary because the return value is encoded, and\nyou need to know the ",(0,r.kt)("em",{parentName:"p"},"schema")," in order to decode it. ",(0,r.kt)("strong",{parentName:"p"},"The schema definition is in\nits early stages and will likely change in the future.")))),(0,r.kt)("p",null,"You can now call the ",(0,r.kt)("inlineCode",{parentName:"p"},"increment")," function by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain post-request inccounter increment\n")),(0,r.kt)("p",null,"After the request has been processed by the committee, you should get a new\ncounter value after calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getCounter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain call-view inccounter getCounter | wasp-cli decode string counter int\n")),(0,r.kt)("p",null,"Example response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"counter: 1\n")),(0,r.kt)("h2",{id:"video-tutorial-1"},"Video Tutorial"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Yaev4Cu1GW0",title:"Deploy a Wasm Contract",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Common issues can be caused by using an incompatible version of ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli"),".\nIt's easy to verify that ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp")," nodes are on the same version, by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli check-versions\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);