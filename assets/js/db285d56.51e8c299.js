"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[76926],{72343:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"ERC721 Example",keywords:["IOTA","Smart Contracts","EVM","Solidity","ERC721","eip-721","token creation","mint tokens"],description:"Create and deploy a Solidity smart contract to mint NFTs using the ERC721 standard.",image:"/img/evm/ozw-721.png"},s="ERC721 Example",p={unversionedId:"guide/evm/examples/ERC721",id:"guide/evm/examples/ERC721",title:"ERC721 Example",description:"Create and deploy a Solidity smart contract to mint NFTs using the ERC721 standard.",source:"@site/content/build/wasp/production/documentation/docs/guide/evm/examples/ERC721.md",sourceDirName:"guide/evm/examples",slug:"/guide/evm/examples/ERC721",permalink:"/smart-contracts/guide/evm/examples/ERC721",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/evm/examples/ERC721.md",tags:[],version:"current",frontMatter:{title:"ERC721 Example",keywords:["IOTA","Smart Contracts","EVM","Solidity","ERC721","eip-721","token creation","mint tokens"],description:"Create and deploy a Solidity smart contract to mint NFTs using the ERC721 standard.",image:"/img/evm/ozw-721.png"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"About ERC721",id:"about-erc721",level:2},{value:"Compile",id:"compile",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Connect your IDE to the network where you want to deploy the smart contract.",id:"connect-your-ide-to-the-network-where-you-want-to-deploy-the-smart-contract",level:3},{value:"Connect to the ISCP Testnet",id:"connect-to-the-iscp-testnet",level:3},{value:"Change the Environment to Injected Web3",id:"change-the-environment-to-injected-web3",level:3},{value:"Select Your Smart Contract From the Dropdown",id:"select-your-smart-contract-from-the-dropdown",level:2},{value:"Select Your New Smart Contract",id:"select-your-new-smart-contract",level:3},{value:"Deploy Your Contract",id:"deploy-your-contract",level:3},{value:"Possible Next Steps",id:"possible-next-steps",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"erc721-example"},"ERC721 Example"),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please keep in mind that this is an EVM only NFT. It's not tied to L1 native assets. Also, these are different from L1 NFTs.")),(0,a.kt)("p",null,"Non-fungible tokens or NFTs are a type of token that can represent any unique object including a real world asset on a decentralised network."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is a token?"),(0,a.kt)("li",{parentName:"ul"},"What is a blockchain?"),(0,a.kt)("li",{parentName:"ul"},"What are ERCs?"),(0,a.kt)("li",{parentName:"ul"},"What is an NFT?"),(0,a.kt)("li",{parentName:"ul"},"What is a smart contract?"),(0,a.kt)("li",{parentName:"ul"},"How to get started with Solidity?")),(0,a.kt)("h2",{id:"about-erc721"},"About ERC721"),(0,a.kt)("p",null,"NFTs are most commonly represented with (",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-721"},"ERC721 standard"),"). You can use the openzepplin lib ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol"},(0,a.kt)("inlineCode",{parentName:"a"},"@openzeppelin/contracts/token/ERC721/ERC721.sol"))," to simplify."),(0,a.kt)("p",null,"You can also use the (",(0,a.kt)("a",{parentName:"p",href:"https://wizard.openzeppelin.com/#erc721"},"OpenZepplin Contracts Wizard"),") to generate and customize your smart contract."),(0,a.kt)("p",null,'The following is an example NFT Smart Contract called "HuskyArt".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.2;\n\nimport "@openzeppelin/contracts/token/ERC721/ERC721.sol";\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";\nimport "@openzeppelin/contracts/access/Ownable.sol";\nimport "@openzeppelin/contracts/utils/Counters.sol";\n\ncontract HuskyArt is ERC721, ERC721URIStorage, Ownable {\n    using Counters for Counters.Counter;\n\n    Counters.Counter private _tokenIdCounter;\n\n    constructor() ERC721("HuskyArt", "HSA") {}\n\n    function _baseURI() internal pure override returns (string memory) {\n        return "https://example.com/nft/";\n    }\n\n    function safeMint(address to, string memory uri) public onlyOwner {\n        uint256 tokenId = _tokenIdCounter.current();\n        _tokenIdCounter.increment();\n        _safeMint(to, tokenId);\n        _setTokenURI(tokenId, uri);\n    }\n\n    // The following functions are overrides required by Solidity.\n\n    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {\n        super._burn(tokenId);\n    }\n\n    function tokenURI(uint256 tokenId)\n        public\n        view\n        override(ERC721, ERC721URIStorage)\n        returns (string memory)\n    {\n        return super.tokenURI(tokenId);\n    }\n}\n')),(0,a.kt)("p",null,"As you can see above, the contract uses standard methods for the most part. You should pay attention to the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pragma solidity ^0.8.2;")," This line means that the contract uses solidity compiler version 0.8.2 or above."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'constructor() ERC721("HuskyArt", "HSA") {}')," This defines the token name and symbol. You can name it whatever you want. We recommend that you use the same name for the token and the contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'import "@openzeppelin/contracts/utils/Counters.sol";')," This lib is used to create auto-incremental ids for the tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'return "https://example.com/nft/";')," You should define the base URI of your NFTs will be. That means the URL you provide here will be used for all your tokens going forward. Since this contract uses auto-incremental token ids, your token URI will look something like ",(0,a.kt)("inlineCode",{parentName:"li"},"https://example.com/nft/0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"https://example.com/nft/1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"https://example.com/nft/2"),", and so on."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"function safeMint(address to, string memory uri) public onlyOwner {")," is the safeMint function. This function will require that you manually input a token's ",(0,a.kt)("inlineCode",{parentName:"li"},"to")," address and a ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," every time you want to mint one. This should work for regular use-cases."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"// SPDX-License-Identifier: MIT")," This line specifies the license type. You do not need to worry about this for this example. If you want to keep it unlicensed, you replace it with ",(0,a.kt)("inlineCode",{parentName:"li"},"// SPDX-License-Identifier: Unlicensed"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Open Zepplin Wizard",src:n(18495).Z,width:"1350",height:"1112"})),(0,a.kt)("p",null,"You can customize your contract further depending on how you would like it to behave. You should consider the following topics and questions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Ownership")," \u2014 Who owns it? How is it stored?"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Creation")," \u2014 Method or Type of Creation."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Transfer & Allowance")," \u2014 How will tokens be transferred? How will they be available to other addresses and accounts?"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Burn")," \u2014 Do you want to destroy it? If yes, how?")),(0,a.kt)("p",null,"You can click on ",(0,a.kt)("strong",{parentName:"p"},"Copy to Clipboard")," and paste it in the IDE of your choice, download it, or click on open in Remix directly. This example uses Remix."),(0,a.kt)("h2",{id:"compile"},"Compile"),(0,a.kt)("p",null,"Compile your Smart Contract to generate the ABI and Bytecode. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix Compile",src:n(51467).Z,width:"2878",height:"1352"})),(0,a.kt)("p",null,"You can check ",(0,a.kt)("inlineCode",{parentName:"p"},"Auto Compile")," so that you do not have to compile manually with every change you make."),(0,a.kt)("p",null,"After you have successfully compiled your smart contract, you can proceed to ",(0,a.kt)("a",{parentName:"p",href:"#deploy"},"deploy it"),"."),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("h3",{id:"connect-your-ide-to-the-network-where-you-want-to-deploy-the-smart-contract"},"Connect your IDE to the network where you want to deploy the smart contract."),(0,a.kt)("p",null,"This example uses the ",(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," with ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io/"},"Metamask")," to handle this task. If you are using hardhat or truffle, you should customize the config file accordingly."),(0,a.kt)("h3",{id:"connect-to-the-iscp-testnet"},"Connect to the ISCP Testnet"),(0,a.kt)("p",null," You can find instructions on this in the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/smart-contracts/guide/chains_and_nodes/testnet#endpoints"},"devnet endpoints section"),").```"),(0,a.kt)("h3",{id:"change-the-environment-to-injected-web3"},"Change the Environment to Injected Web3"),(0,a.kt)("p",null,"After you have completed the prior steps, please select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Injected Web3")," network as pictured below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix VM Select",src:n(19682).Z,width:"650",height:"306"})),(0,a.kt)("p",null,"Wait for the IDE to sync. If it does not, please refresh and try again."),(0,a.kt)("h2",{id:"select-your-smart-contract-from-the-dropdown"},"Select Your Smart Contract From the Dropdown"),(0,a.kt)("h3",{id:"select-your-new-smart-contract"},"Select Your New Smart Contract"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",{parentName:"p",href:"#change-the-environment-to-injected-web3"},"changed the environment to injected web3"),", you can proceed to select your Smart Contract from the dropdown. Ideally, you will see only one option here. However, since your contract imports quite a few libs, those may show up by default."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix Deploy",src:n(18719).Z,width:"1396",height:"876"})),(0,a.kt)("h3",{id:"deploy-your-contract"},"Deploy Your Contract"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy"),". This should open Metamask and ask you to sign the transaction. Please do so and wait for confirmation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix Deployed",src:n(35702).Z,width:"1908",height:"208"})),(0,a.kt)("p",null,"If you see something like this, your contract is now deployed. You can also verify this on the explorer or explore more on Metamask."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remix Deployed",src:n(9391).Z,width:"682",height:"1138"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The node which was used in this example has ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," gas fees. However, depending on which node you choose to deploy to, there may be some gas fees.")),(0,a.kt)("h2",{id:"possible-next-steps"},"Possible Next Steps"),(0,a.kt)("p",null,"The above smart contract is generated by OpenZepplin Wizard and is good enough to be used in production environments. However, you may want more conditions or actions added to it.  For example, you could add royalty for every transfer done after minting."),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/2.x/api/token/erc721"},"OpenZepplin 721 Standard"))))}m.isMDXComponent=!0},18495:function(e,t,n){t.Z=n.p+"assets/images/ozw-721-d499418482e4e5708421122b96d2e213.png"},18719:function(e,t,n){t.Z=n.p+"assets/images/remix-721-deploy-b729e3c33de3ce98bd6cf43f226ed2ab.png"},51467:function(e,t,n){t.Z=n.p+"assets/images/remix-721-4beb895d24d8f610e22bc9904d3936cd.png"},35702:function(e,t,n){t.Z=n.p+"assets/images/remix-deployed-51baffcaeb9f36eb2368d9f176a32e73.png"},9391:function(e,t,n){t.Z=n.p+"assets/images/remix-metamask-detail-117f1241858f98c9954511e070ae18a2.png"},19682:function(e,t,n){t.Z=n.p+"assets/images/remix-vm-injected-f92640e222b782c52ed03cea3dc74914.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);