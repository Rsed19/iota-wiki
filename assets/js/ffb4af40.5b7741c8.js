"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[50031],{57682:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(87462),o=n(63366),c=(n(67294),n(3905)),r=["components"],s={description:"IOTA Smart Contracts chains keeps a ledger of on-chain account balances. On-chain accounts are identified by an AgentID.",image:"/img/tutorial/accounts.png",keywords:["smart contracts","on-chain account","ownership","accounts Contract","explanation"]},i="How Accounts Work",l={unversionedId:"guide/core_concepts/accounts/how-accounts-work",id:"guide/core_concepts/accounts/how-accounts-work",title:"How Accounts Work",description:"IOTA Smart Contracts chains keeps a ledger of on-chain account balances. On-chain accounts are identified by an AgentID.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/how-accounts-work.md",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-accounts-work",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-accounts-work",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/how-accounts-work.md",tags:[],version:"current",frontMatter:{description:"IOTA Smart Contracts chains keeps a ledger of on-chain account balances. On-chain accounts are identified by an AgentID.",image:"/img/tutorial/accounts.png",keywords:["smart contracts","on-chain account","ownership","accounts Contract","explanation"]},sidebar:"tutorialSidebar",previous:{title:"The `errors` Contract",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/errors"},next:{title:"How to Deposit to a Chain",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-to-deposit-to-a-chain"}},d={},u=[{value:"Types of Accounts",id:"types-of-accounts",level:2},{value:"L1 Address",id:"l1-address",level:3},{value:"Smart Contract",id:"smart-contract",level:3},{value:"The Common Account",id:"the-common-account",level:3},{value:"Ethereum Address",id:"ethereum-address",level:3},{value:"The Accounts Contract",id:"the-accounts-contract",level:2},{value:"Example",id:"example",level:2}],p={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,c.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"how-accounts-work"},"How Accounts Work"),(0,c.kt)("p",null,"On the L1 Ledger, just like with any DLT, we have ",(0,c.kt)("strong",{parentName:"p"},"trustless")," and ",(0,c.kt)("strong",{parentName:"p"},"atomic")," transfers of assets between addresses on the ledger.\nTokens controlled by an address can be moved to another address by providing a valid signature using the private key that controls the source address."),(0,c.kt)("p",null,"In IOTA Smart Contracts, ",(0,c.kt)("a",{parentName:"p",href:"../states#digital-assets-on-the-chain"},"each chain has a L1 address")," (also known as the ",(0,c.kt)("em",{parentName:"p"},"Chain ID"),") which enables it to control L1 assets (base tokens, native tokens and NFTs).\nThe chain acts as a custodian of the L1 assets on behalf of different entities, thus providing a ",(0,c.kt)("em",{parentName:"p"},"L2 Ledger"),"."),(0,c.kt)("p",null,"The L2 ledger is a collection of ",(0,c.kt)("em",{parentName:"p"},"on-chain accounts")," (sometimes also called just ",(0,c.kt)("em",{parentName:"p"},"accounts"),").\nL2 accounts can be owned by different kinds of entities, which are identified by a unique ",(0,c.kt)("em",{parentName:"p"},"Agent ID"),".\nThus, the L2 ledger is a mapping of Agent ID => balances of L2 assets."),(0,c.kt)("h2",{id:"types-of-accounts"},"Types of Accounts"),(0,c.kt)("h3",{id:"l1-address"},"L1 Address"),(0,c.kt)("p",null,"Any L1 address can be the owner of a L2 account.\nThe Agent ID of an L1 address is just the address, e.g. ",(0,c.kt)("inlineCode",{parentName:"p"},"iota1pr7vescn4nqc9lpvv37unzryqc43vw5wuf2zx8tlq2wud0369hjjugg54mf"),"."),(0,c.kt)("p",null,"Tokens in an address account can only be moved trhough a request signed by the private key of the L1 address."),(0,c.kt)("h3",{id:"smart-contract"},"Smart Contract"),(0,c.kt)("p",null,"Any smart contract can be the owner of a L2 account. Recall that a smart\ncontract is uniquely identified in a chain by a ",(0,c.kt)("a",{parentName:"p",href:"../smart-contract-anatomy#identifying-a-smart-contract"},(0,c.kt)("em",{parentName:"a"},"hname")),".\nHowever, the hname is not enough to identify the account since it could be owned by a smart contract on another chain."),(0,c.kt)("p",null,"Thus, the Agent ID of a smart contract is composed as the contract hname plus the ",(0,c.kt)("a",{parentName:"p",href:"../states#digital-assets-on-the-chain"},(0,c.kt)("em",{parentName:"a"},"chain ID")),", with syntax ",(0,c.kt)("inlineCode",{parentName:"p"},"<hname>@<chain-id>"),". For example: ",(0,c.kt)("inlineCode",{parentName:"p"},"cebf5908@tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd"),"."),(0,c.kt)("p",null,"Note that this allows trustless transfers of assets between smart contracts on the same or different chains."),(0,c.kt)("p",null,"Tokens in a smart contract account can only be moved by that smart contract."),(0,c.kt)("h3",{id:"the-common-account"},"The Common Account"),(0,c.kt)("p",null,"The chain itself owns a unique L2 account, called the ",(0,c.kt)("em",{parentName:"p"},"common account"),".\nThe common account is controlled by the chain owner (defined in the chain root contract), and is used to store funds collected by fees, or sent to the chain L1 address."),(0,c.kt)("p",null,"The Agent ID of the common account is ",(0,c.kt)("inlineCode",{parentName:"p"},"<hname=0>@<chain-id>"),". For example: ",(0,c.kt)("inlineCode",{parentName:"p"},"00000000@tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd"),"."),(0,c.kt)("h3",{id:"ethereum-address"},"Ethereum Address"),(0,c.kt)("p",null,"An L2 account can also be owned by an Ethereum address. See ",(0,c.kt)("a",{parentName:"p",href:"../../evm/introduction"},"EVM")," for more information.\nThe Agent ID of an Ethereum address is just the address prefixed with ",(0,c.kt)("inlineCode",{parentName:"p"},"0x"),", e.g. ",(0,c.kt)("inlineCode",{parentName:"p"},"0xd36722adec3edcb29c8e7b5a47f352d701393462"),"."),(0,c.kt)("p",null,"Tokens in an Ethereum account can only be moved by sending an Ethereum transaction signed by the same address."),(0,c.kt)("h2",{id:"the-accounts-contract"},"The Accounts Contract"),(0,c.kt)("p",null,"The ",(0,c.kt)("a",{parentName:"p",href:"../core_contracts/accounts"},(0,c.kt)("inlineCode",{parentName:"a"},"accounts")," core contract")," is responsible for managing the L2 ledger.\nBy calling this contract it is possible to:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/smart-contracts/develop/guide/core_concepts/accounts/view-account-balances"},"View current account balances")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/smart-contracts/develop/guide/core_concepts/accounts/how-to-deposit-to-a-chain"},"Deposit funds to the chain")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/smart-contracts/develop/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"},"Withdraw funds from the chain")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/smart-contracts/develop/guide/core_concepts/accounts/the-common-account"},"Harvest")," - can only be called by the chain owner, to move funds from the chain common account to their account.")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("p",null,"The following diagram illustrates an example situation.\nWe are shortening the IDs and hnames for simplicity."),(0,c.kt)("p",null,(0,c.kt)("a",{target:"_blank",href:n(71160).Z},(0,c.kt)("img",{alt:"Example situation. There are two chains deployed, with three smart contracts and one address.",src:n(9713).Z,width:"862",height:"682"}))),(0,c.kt)("p",null,"There are two chains deployed, with respective IDs ",(0,c.kt)("inlineCode",{parentName:"p"},"chainA")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"chainB"),".\nChain A has two smart contracts on it (with hnames ",(0,c.kt)("inlineCode",{parentName:"p"},"3037")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"2225"),") and chain B has one smart contract (",(0,c.kt)("inlineCode",{parentName:"p"},"7003"),")."),(0,c.kt)("p",null,"There is also an address on the L1 Ledger: ",(0,c.kt)("inlineCode",{parentName:"p"},"iota1a2b3c4d"),".\nThis address controls 1337 iotas and 42 ",(0,c.kt)("inlineCode",{parentName:"p"},"Red")," native tokens on the L1 Ledger.\nThe same address also controls 42 iotas on the chain A and 8 ",(0,c.kt)("inlineCode",{parentName:"p"},"Green")," native tokens on chain B.\nSo, the owner of the private key behind the address controls 3 different accounts: the L1 account and one L2 account on each chain."),(0,c.kt)("p",null,"Smart contract ",(0,c.kt)("inlineCode",{parentName:"p"},"7003@chainB")," has 5 iotas on its native chain and controls 11 iotas on chain A."))}h.isMDXComponent=!0},71160:function(e,t,n){t.Z=n.p+"assets/files/accounts-8cb1cee589b502094c3883ff2bc0f8ba.png"},9713:function(e,t,n){t.Z=n.p+"assets/images/accounts-8cb1cee589b502094c3883ff2bc0f8ba.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||c;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<c;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);