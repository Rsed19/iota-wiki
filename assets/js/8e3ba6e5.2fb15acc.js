"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[50071],{41684:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Network Token Migration",description:"We describe the process of migrating tokens from the IOTA legacy network into the new Chrysalis network"},s="Network Token migration:",c={unversionedId:"network-token-migration",id:"network-token-migration",title:"Network Token Migration",description:"We describe the process of migrating tokens from the IOTA legacy network into the new Chrysalis network",source:"@site/content/networks/network-token-migration.md",sourceDirName:".",slug:"/network-token-migration",permalink:"/networks/network-token-migration",draft:!1,editUrl:"https://github.com/iota-community/iota-wiki/edit/main/content/networks/network-token-migration.md",tags:[],version:"current",lastUpdatedAt:1658146548,formattedLastUpdatedAt:"7/18/2022",frontMatter:{title:"Network Token Migration",description:"We describe the process of migrating tokens from the IOTA legacy network into the new Chrysalis network"},sidebar:"networks",previous:{title:"Testnets",permalink:"/networks/testnets"}},u={},p=[{value:"Why does IOTA migrate tokens?",id:"why-does-iota-migrate-tokens",level:2},{value:"Migration process",id:"migration-process",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"network-token-migration"},"Network Token migration:"),(0,i.kt)("h2",{id:"why-does-iota-migrate-tokens"},"Why does IOTA migrate tokens?"),(0,i.kt)("p",null,"The Chrysalis network update in April 2021 changed the core functionalities of the protocol and improved IOTA in many ways. These have been breaking changes, and nearly every part of the protocol has been changed. Therefore, the IOTA legacy network has been depreciated and can no longer perform normal transactions of tokens."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://chrysalis.iota.org/"},"chrysalis website")," gives detailed information on why this happened and what has been changed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"/introduction/welcome"},"Chrysalis documentation")," gives detailed insight into the new network and its specifications."))),(0,i.kt)("p",null,"To continue the guaranteed accessibility of tokens, all owners of tokens in the old IOTA 1.0 network are therefore asked to move the funds they own into the new Chrysalis IOTA 1.5 network."),(0,i.kt)("h2",{id:"migration-process"},"Migration process"),(0,i.kt)("p",null,"The migration of tokens from the old to the new network is a special process executed in the ",(0,i.kt)("a",{parentName:"p",href:"https://firely.iota.org"},"IOTA Firefly Wallet")),(0,i.kt)("p",null,"It follows the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1.) You enter your seed in Firefly."),(0,i.kt)("li",{parentName:"ul"},"2.) Firefly creates a new seed and generates an EdDSA address for the new network."),(0,i.kt)("li",{parentName:"ul"},"3.) Firefly sends your funds to a specific migration address (which encapsulates your EdDSA address) on the old network."),(0,i.kt)("li",{parentName:"ul"},"4.) Your funds become available on the new network on the EdDSA address Firefly created for you."),(0,i.kt)("li",{parentName:"ul"},"5.) Your funds are successfully migrated.")),(0,i.kt)("p",null,"The technical details are explained in the ",(0,i.kt)("a",{parentName:"p",href:"/introduction/guides/migration_mechanism"},"chrysalis documentation")),(0,i.kt)("p",null,"Exact guides how to migrate your funds are located here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/wallets/firefly/general#firefly-token-migration"},"Firefly token migration"))),(0,i.kt)("p",null,"We urge every IOTA token holder who still has not completed the migration to follow the steps and move the tokens into the new network."),(0,i.kt)("p",null,"The possibility of using the Firefly token migration will end at the latest with the upgrade to the fully decentralized IOTA 2.0 network (Coordicide)."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);