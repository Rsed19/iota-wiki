"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[69822],{70652:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],c={},l=void 0,d={unversionedId:"reference/java_api/BalanceEvent",id:"reference/java_api/BalanceEvent",title:"BalanceEvent",description:"The balance change event data.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/BalanceEvent.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/BalanceEvent",permalink:"/wallet.rs/reference/java_api/BalanceEvent",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/BalanceEvent.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"indexationId(): String",id:"indexationid-string",level:3},{value:"accountId(): String",id:"accountid-string",level:3},{value:"messageId(): Optional&lt;MessageId&gt;",id:"messageid-optionalmessageid",level:3},{value:"address(): AddressWrapper",id:"address-addresswrapper",level:3},{value:"remainder(): Optional&lt;Boolean&gt;",id:"remainder-optionalboolean",level:3},{value:"balanceChange(): BalanceChange",id:"balancechange-balancechange",level:3}],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The balance change event data."),(0,i.kt)("h3",{id:"indexationid-string"},"indexationId(): String"),(0,i.kt)("p",null,"Event unique identifier."),(0,i.kt)("h3",{id:"accountid-string"},"accountId(): String"),(0,i.kt)("p",null,"The associated account identifier."),(0,i.kt)("h3",{id:"messageid-optionalmessageid"},"messageId(): Optional","<",(0,i.kt)("a",{parentName:"h3",href:"#messageid"},"MessageId"),">"),(0,i.kt)("p",null,"The message id associated with the balance change.\nNote that this might be empty without\nAccountManagerBuilder#withSyncSpentOutputs"),(0,i.kt)("h3",{id:"address-addresswrapper"},"address(): ",(0,i.kt)("a",{parentName:"h3",href:"#addresswrapper"},"AddressWrapper")),(0,i.kt)("p",null,"The associated address."),(0,i.kt)("h3",{id:"remainder-optionalboolean"},"remainder(): Optional","<","Boolean",">"),(0,i.kt)("p",null,"Whether the event is associated with a remainder output or not.\nNote that this might be empty if we couldn't get the message object from the node."),(0,i.kt)("h3",{id:"balancechange-balancechange"},"balanceChange(): ",(0,i.kt)("a",{parentName:"h3",href:"#balancechange"},"BalanceChange")),(0,i.kt)("p",null,"The balance change data."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);