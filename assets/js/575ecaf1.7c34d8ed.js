"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[75542],{96446:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={},l=void 0,p={unversionedId:"libraries/java/api/Message",id:"libraries/java/api/Message",title:"Message",description:"Represent the object that nodes gossip around the network.",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/Message.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/Message",permalink:"/iota.rs/libraries/java/api/Message",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/Message.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"builder(): MessageBuilder",id:"builder-messagebuilder",level:3},{value:"networkId(): long",id:"networkid-long",level:3},{value:"id(): MessageId",id:"id-messageid",level:3},{value:"nonce(): long",id:"nonce-long",level:3},{value:"parents(): MessageId[]",id:"parents-messageid",level:3},{value:"payload(): Optional&lt;MessagePayload&gt;",id:"payload-optionalmessagepayload",level:3}],c={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Represent the object that nodes gossip around the network."),(0,o.kt)("h3",{id:"builder-messagebuilder"},"builder(): ",(0,o.kt)("a",{parentName:"h3",href:"#messagebuilder"},"MessageBuilder")),(0,o.kt)("p",null,"Creates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageBuilder")," to construct an instance of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Message"),"."),(0,o.kt)("h3",{id:"networkid-long"},"networkId(): long"),(0,o.kt)("p",null,"Returns the network id of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Message"),"."),(0,o.kt)("h3",{id:"id-messageid"},"id(): ",(0,o.kt)("a",{parentName:"h3",href:"#messageid"},"MessageId")),(0,o.kt)("p",null,"Computes the identifier of the message."),(0,o.kt)("h3",{id:"nonce-long"},"nonce(): long"),(0,o.kt)("p",null,"Returns the nonce of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Message"),"."),(0,o.kt)("h3",{id:"parents-messageid"},"parents(): ",(0,o.kt)("a",{parentName:"h3",href:"#messageid"},"MessageId[]")),(0,o.kt)("p",null,"Returns the parents of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Message"),"."),(0,o.kt)("h3",{id:"payload-optionalmessagepayload"},"payload(): Optional","<",(0,o.kt)("a",{parentName:"h3",href:"#messagepayload"},"MessagePayload"),">"),(0,o.kt)("p",null,"Returns the optional payload of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Message"),"."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,g=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);