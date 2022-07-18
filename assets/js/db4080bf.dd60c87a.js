"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[82519],{53147:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return h}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],c={},s="Application Architecture",l={unversionedId:"doc-immutability/architecture",id:"doc-immutability/architecture",title:"Application Architecture",description:"The Document immutability application is simply a graphical user interface (GUI), written in React with some additional functionality provided by the poex-tool",source:"@site/content/build/blueprints/production/doc-immutability/architecture.md",sourceDirName:"doc-immutability",slug:"/doc-immutability/architecture",permalink:"/blueprints/doc-immutability/architecture",draft:!1,editUrl:"https://github.com/iotaledger/blueprints/edit/main/content/build/blueprints/production/doc-immutability/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Document Immutability",permalink:"/blueprints/doc-immutability/overview"},next:{title:"Deploy and Test the Document Immutability Demo",permalink:"/blueprints/doc-immutability/deployment-and-testing"}},u={},h=[{value:"Building Blocks",id:"building-blocks",level:2},{value:"Legacy Network Backwards-Compatibility",id:"legacy-network-backwards-compatibility",level:2},{value:"Uploading a Proof of Existence of a Document",id:"uploading-a-proof-of-existence-of-a-document",level:3},{value:"Verifying a Document",id:"verifying-a-document",level:3}],d={toc:h};function p(e){var t=e.components,c=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application-architecture"},"Application Architecture"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Document immutability application is simply a graphical user interface (GUI), written in React with some additional functionality provided by the poex-tool")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),":Disclaimer")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Running an open source project, like any human endeavor, involves uncertainty and trade-offs. We hope the architecture described below helps you to deploy similar systems, but it may include mistakes, and can\u2019t address every situation. If you have any questions about your project, we encourage you to do your own research, seek out experts, and discuss them with the IOTA community."))),(0,o.kt)("p",null,"This blueprint uses the following architecture whereby the application takes file data from a client, saves it to a database, and attaches it to the Tangle through a node."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Document immutability architecture",src:n(75527).Z,width:"2501",height:"900"})),(0,o.kt)("h2",{id:"building-blocks"},"Building Blocks"),(0,o.kt)("p",null,"The application uses the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/poex-tool"},"Proof of Existence Library"),", a basic library that enables users to publish and verify Proof of Existences. With a valid Proof of Existence, users can be certain that the given document has not been changed since the Proof of Existence has been published on the IOTA Tangle, thereby ensuring data integrity."),(0,o.kt)("h2",{id:"legacy-network-backwards-compatibility"},"Legacy Network Backwards-Compatibility"),(0,o.kt)("p",null,"As this is one of the earlier projects, it has been up and running long before the Chrysalis network. While new PoEs are published to Chrysalis, proofs issued on the Legacy network are still verifiable in the application, as the underlying Proof of Existence library provides methods for both networks.\nThe application automatically detects if the provided message-id is from the Legacy or the Chrysalis network and adjusts its procedure accordingly."),(0,o.kt)("h3",{id:"uploading-a-proof-of-existence-of-a-document"},"Uploading a Proof of Existence of a Document"),(0,o.kt)("p",null,"When a user wants to create a Proof of Existence for a document, the application process is the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user provides the document."),(0,o.kt)("li",{parentName:"ol"},"The document is hashed"),(0,o.kt)("li",{parentName:"ol"},"The application includes the hash of the document in a message and attaches it to the Tangle."),(0,o.kt)("li",{parentName:"ol"},"Return the message-id to the user")),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(400).Z},(0,o.kt)("img",{alt:"Document hashing",src:n(27612).Z,width:"2501",height:"901"}))),(0,o.kt)("p",null,"The document is hashed, using the SHA256-hash function. We recommend using at least a 128-bit hashing algorithm.\nThe hash is inserted into an ",(0,o.kt)("inlineCode",{parentName:"p"},"IndexationPayload")," message that is sent to the selected IOTA node, which proceeds to attach it to the Tangle. Once the node has attached the message, it returns the message-id, which the user can then store."),(0,o.kt)("h3",{id:"verifying-a-document"},"Verifying a Document"),(0,o.kt)("p",null,"When a user wants to verify the integrity of a document, the process in the web application is the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user provides the document and the message-id referencing the Proof of Existence"),(0,o.kt)("li",{parentName:"ol"},"The web application fetches the Proof of Existence from the message of the Tangle by querying the selected node"),(0,o.kt)("li",{parentName:"ol"},"The document is hashed "),(0,o.kt)("li",{parentName:"ol"},"The result is compared to the fetched Proof of Existence"),(0,o.kt)("li",{parentName:"ol"},"The verification result is returned to the user")),(0,o.kt)("p",null,"In order to access the Proof of Existence, the message-id, which references the message in the Tangle, has to be provided.\nAn IOTA node is then queried to return the message, which contains the document hash in its ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," field of the ",(0,o.kt)("inlineCode",{parentName:"p"},"IndexationPayload")," of the message.\nNow, the document is simply hashed and compared with the Proof of Existence-hash."),(0,o.kt)("p",null,"If the two hashes match, the file is unchanged.\nif the hashes do not match, we know that the file has been changed between now and the time its Proof of Existence was attached to the Tangle."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Document verification",src:n(96856).Z,width:"2501",height:"901"})))}p.isMDXComponent=!0},400:function(e,t,n){t.Z=n.p+"assets/files/document-immutability-signing-139399c0241d52a3b5cd2f552ef2c195.png"},75527:function(e,t,n){t.Z=n.p+"assets/images/document-immutability-architecture-903814c41fb8c7d79ad9a1aae55995c8.png"},27612:function(e,t,n){t.Z=n.p+"assets/images/document-immutability-signing-139399c0241d52a3b5cd2f552ef2c195.png"},96856:function(e,t,n){t.Z=n.p+"assets/images/document-immutability-verification-46b68951698fdf50649994abd9566f10.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);