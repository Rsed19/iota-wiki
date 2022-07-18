"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[25583],{83391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={description:"Stronghold peer to peer communication",image:"/img/logo/Stronghold_icon.png",keywords:["p2p","networking","explanation"]},c="Peer to Peer Communication in Stronghold",l={unversionedId:"explanations/p2p",id:"explanations/p2p",title:"Peer to Peer Communication in Stronghold",description:"Stronghold peer to peer communication",source:"@site/content/build/stronghold.rs/develop/documentation/docs/explanations/p2p.md",sourceDirName:"explanations",slug:"/explanations/p2p",permalink:"/stronghold.rs/explanations/p2p",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev-refactor/documentation/content/build/stronghold.rs/develop/documentation/docs/explanations/p2p.md",tags:[],version:"current",frontMatter:{description:"Stronghold peer to peer communication",image:"/img/logo/Stronghold_icon.png",keywords:["p2p","networking","explanation"]},sidebar:"mySidebar",previous:{title:"Non-Contiguous Data Types and Handling Secrets at Runtime",permalink:"/stronghold.rs/explanations/non-contiguous-data-types"},next:{title:"Cryptographic Procedures",permalink:"/stronghold.rs/explanations/procedures"}},p={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"peer-to-peer-communication-in-stronghold"},"Peer to Peer Communication in Stronghold"),(0,a.kt)("p",null,"Stronghold includes extensive communication features. At surface level, there are two modes of operations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You can run Stronghold as a server to provide services on sensitive data like remote procedure execution"),(0,a.kt)("li",{parentName:"ol"},"You can run Stronghold as a relay, some intermediary to connect peers. If not peer to peer connection is directly possible.")),(0,a.kt)("p",null,"At the time of writing, all peer to peer connections are currently routed through the relay, but this restriction will be lifted in the future."),(0,a.kt)("p",null,"If you need some kind of server-client setup, you should use the first mode. Think of a remote security module where you can sign messages, export public keys, etc. You should use the second mode to synchronize data between two Strongholds."),(0,a.kt)("p",null,"The peer to peer capabilities are built on top of libp2p, the foundation of IPFS. Communication between two Strongholds is secured by the underlying implementation of the NOISE protocol. In short, in the beginning, two Strongholds exchange handshake messages. Each participant generates a key pair (e.g., Ed25519), exchanges ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"},"Diffie-Helman")," public keys, operates on ephemeral keys and hashes the results into a shared secret. The shared secret is later used to send encrypted transport messages."),(0,a.kt)("p",null,"Stronghold uses static and ephemeral keys for the handshake protocol and encrypted transport. The handshake pattern used for secret exchange is designed as XX. The first X describes the static key transmitted to the responder, while the second describes the static key for the responder sent by the initiator."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Noise Protocol")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can find a detailed explanation of how the NOISE protocol works on the official ",(0,a.kt)("a",{parentName:"p",href:"http://www.noiseprotocol.org/"},"NOISE Protocol website"),"."))),(0,a.kt)("p",null,"A simple application level firewall secures each incoming connection. You can define rules for each peer trying to access certain parts of a Stronghold. For example, you can configure the firewall so only certain paths are available to a remote peer."),(0,a.kt)("p",null,"Remote instances of Stronghold are being addressed with the ",(0,a.kt)("a",{parentName:"p",href:"https://multiformats.io/multiaddr/"},"multiaddr format"),"."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);