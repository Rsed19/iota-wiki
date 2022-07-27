"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[81797],{56599:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={keywords:["Publisher","Nanomsg","Messages"],description:"Publishing important events via a Nanomsg message stream. Subscribing to a stream with a client. Message format description.",image:"/img/logo/WASP_logo_dark.png"},l="Wasp Publisher",p={unversionedId:"guide/chains_and_nodes/publisher",id:"guide/chains_and_nodes/publisher",title:"Wasp Publisher",description:"Publishing important events via a Nanomsg message stream. Subscribing to a stream with a client. Message format description.",source:"@site/content/build/wasp/develop/documentation/docs/guide/chains_and_nodes/publisher.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/publisher",permalink:"/smart-contracts/develop/guide/chains_and_nodes/publisher",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/chains_and_nodes/publisher.md",tags:[],version:"current",frontMatter:{keywords:["Publisher","Nanomsg","Messages"],description:"Publishing important events via a Nanomsg message stream. Subscribing to a stream with a client. Message format description.",image:"/img/logo/WASP_logo_dark.png"}},c={},d=[],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wasp-publisher"},"Wasp Publisher"),(0,i.kt)("p",null,"Each Wasp node publishes important events via a ",(0,i.kt)("a",{parentName:"p",href:"https://nanomsg.org/"},"Nanomsg")," message stream\n(just like ZMQ is used in IRI. Possibly in the future ZMQ and MQTT publishers will be supported too)."),(0,i.kt)("p",null,"Any Nanomsg client can subscribe to the message stream. In Go you can use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"packages/subscribe")," package provided in Wasp for this."),(0,i.kt)("p",null,"The Publisher port can be configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"nanomsg.port"),"\nsetting."),(0,i.kt)("p",null,"Message format is simply a string consisting of a space separated list of tokens; and the first token\nis the message type. Below is a list of all message types published by Wasp. (You can search for\n",(0,i.kt)("inlineCode",{parentName:"p"},"publisher.Publish")," in the code to see the exact places where each message is published.)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Format"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chain record has been saved in the registry"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"chainrec <chain ID> <color>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chain committee has been activated"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"active_committee <chain ID>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chain committee dismissed"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dismissed_committee <chain ID>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"A new SC request reached the node"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"request_in <chain ID> <request tx ID> <request block index>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SC request has been processed (i.e. corresponding state update was confirmed)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"request_out <chain ID> <request tx ID> <request block index> <state index> <seq number in the block> <block size>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"State transition (new state has been committed to DB)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state <chain ID> <state index> <block size> <state tx ID> <state hash> <timestamp>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Event generated by a SC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vmmsg <chain ID> <contract hname> ..."))))))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);