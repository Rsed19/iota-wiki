"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93999],{58437:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={description:"Existing EVM tooling is compatible and can be used directly with an IOTA Smart Contracts chain running EVM. You can configure Hardhat, Metamask, Remix, Ether.js and Web3.js among others.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","chain","EVM","Solidity","tooling","wasp-cli","hardhat","metamask","JSON-RPC","reference"]},l="EVM Tooling",c={unversionedId:"guide/evm/tooling",id:"guide/evm/tooling",title:"EVM Tooling",description:"Existing EVM tooling is compatible and can be used directly with an IOTA Smart Contracts chain running EVM. You can configure Hardhat, Metamask, Remix, Ether.js and Web3.js among others.",source:"@site/content/build/wasp/develop/documentation/docs/guide/evm/tooling.md",sourceDirName:"guide/evm",slug:"/guide/evm/tooling",permalink:"/smart-contracts/develop/guide/evm/tooling",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/evm/tooling.md",tags:[],version:"current",frontMatter:{description:"Existing EVM tooling is compatible and can be used directly with an IOTA Smart Contracts chain running EVM. You can configure Hardhat, Metamask, Remix, Ether.js and Web3.js among others.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","chain","EVM","Solidity","tooling","wasp-cli","hardhat","metamask","JSON-RPC","reference"]},sidebar:"tutorialSidebar",previous:{title:"How to use EVM in IOTA Smart Contracts",permalink:"/smart-contracts/develop/guide/evm/using"},next:{title:"Solidity Smart Contract Example",permalink:"/smart-contracts/develop/guide/evm/examples/introduction"}},d={},p=[{value:"Tooling Considerations",id:"tooling-considerations",level:2},{value:"MetaMask",id:"metamask",level:2},{value:"Remix",id:"remix",level:3},{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Hardhat",id:"hardhat",level:2},{value:"Video Tutorial",id:"video-tutorial-1",level:2},{value:"Ethers.js/Web3.js",id:"ethersjsweb3js",level:2},{value:"Other Tooling",id:"other-tooling",level:2}],u={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"evm-tooling"},"EVM Tooling"),(0,i.kt)("p",null,"EVM on IOTA Smart Contracts has been integrated in a way that the existing EVM tooling is compatible, and can be used directly with an IOTA Smart Contracts chain running EVM as long as a couple of things are taken into account."),(0,i.kt)("h2",{id:"tooling-considerations"},"Tooling Considerations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Please make sure you use the correct JSON-RPC endpoint URL in your tooling for your chain. The JSON-RPC endpoint and Chain ID can be found in the Wasp dashboard / Chains / your ISC chain page."),(0,i.kt)("li",{parentName:"ol"},"Fees are being handled on the IOTA Smart Contracts chain level, not EVM level. Because of this, you can simply use a gas price of 0 on EVM level.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Re-using an existing Chain ID is not recommended and can be a security risk. For any serious chain you will be running make sure you register a unique Chain ID on ",(0,i.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"Chainlist")," and use that instead of the default."))),(0,i.kt)("h2",{id:"metamask"},"MetaMask"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," is a popular EVM compatible wallet which runs in a browser extension that allows you to let your wallet interact with web applications utilizing an EVM chain (dApps). "),(0,i.kt)("p",null,"To use your EVM chain with MetaMask, simply open up MetaMask and click on the network drop-down list at the very top. At the bottom of this list you will see the option ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom RPC"),", click on this. For a local setup use the values as shown in the image below:"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(16698).Z},(0,i.kt)("img",{alt:"MetaMask Network",src:n(35637).Z,width:"358",height:"597"}))),(0,i.kt)("p",null,"Make sure that your ",(0,i.kt)("inlineCode",{parentName:"p"},"RPC URL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Chain ID")," are set correctly and match the settings listed in the Wasp dashboard. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Network Name")," can be whatever you see fit."),(0,i.kt)("p",null,"If you wish to use additional EVM chains with Metamask, you can simply add more Custom RPC networks, as long as they have a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"Chain ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RPC URL"),". Once this is done, you can start using MetaMask to manage your EVM wallet or issue/sign transactions with any dApp running on that network. "),(0,i.kt)("h3",{id:"remix"},"Remix"),(0,i.kt)("p",null,"If you also want to use the ",(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," to deploy any regular Solidity Smart Contract, you should set the environment as ",(0,i.kt)("strong",{parentName:"p"},"Injected Web3"),", which should then connect with your MetaMask wallet."),(0,i.kt)("p",null,"Click on the ",(0,i.kt)("em",{parentName:"p"},"Deploy & Run transactions")," button in the menu on the left and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Injected Web3")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment")," dropdown."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/7383572/146169413-fd0992e3-7c2d-4c66-bf84-8dd4f2f492a7.png"},(0,i.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/7383572/146169413-fd0992e3-7c2d-4c66-bf84-8dd4f2f492a7.png",alt:"Select Injected Web3 from the Environment dropdown"}))),(0,i.kt)("p",null,"Metamask will ask to connect to Remix and once connected the ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment")," will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"Injected Web3")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom (1074) network"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/7383572/146169653-fd692eab-6e74-4b17-8833-bd87dafc0ce2.png"},(0,i.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/7383572/146169653-fd692eab-6e74-4b17-8833-bd87dafc0ce2.png",alt:"Environment will be set to Injected Web3"}))),(0,i.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yOyl30LQfac",title:"Deploy Solidity Contract via Remix + Metamask",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"hardhat"},"Hardhat"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," is a commandline toolbox that allows you to deploy, test, verify, and interact with Solidity smart contracts on an EVM chain. EVM chains running on IOTA Smart Contracts are compatible with Hardhat; simply make sure you add the correct network parameters to your ",(0,i.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"networks: {\n    local: {\n        url: 'http://localhost:9090/chain/atoi1prkduk8zfp3yzaqcweaz83dja5rqxe5nenm059pzs3mmev9nspwew95dycu/evm/jsonrpc',\n        chainId: 1074,\n        accounts: [privkey],\n        timeout: 60000\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently, there is no validation service available for EVM/Solidity smart contracts on IOTA Smart Contracts, which is often offered through block explorer API's."))),(0,i.kt)("h2",{id:"video-tutorial-1"},"Video Tutorial"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zfc4ENTQkDE",title:"Deploy Solidity Contracts with Hardhat",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"ethersjsweb3js"},"Ethers.js/Web3.js"),(0,i.kt)("p",null,"As long as you input the right configuration parameters for the JSON-RPC endpoint to talk to, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethers.io/"},"Ethers.js")," and ",(0,i.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/"},"Web3.js")," are also compatible with EVM chains on IOTA Smart Contracts. Alternatively you can let both interact through MetaMask instead so that it uses the network as configured in MetaMask. For more information on this, read their documentation."),(0,i.kt)("h2",{id:"other-tooling"},"Other Tooling"),(0,i.kt)("p",null,"Most other tooling available will be compatible as well as long as you enter the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"Chain ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RPC Url"),"."))}m.isMDXComponent=!0},16698:function(e,t,n){t.Z=n.p+"assets/files/metamask_network-cbc823ddea74052c9769089f219c4447.png"},35637:function(e,t,n){t.Z=n.p+"assets/images/metamask_network-cbc823ddea74052c9769089f219c4447.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);