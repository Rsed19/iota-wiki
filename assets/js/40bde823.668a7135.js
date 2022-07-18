"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9108],{3805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={image:"/img/integration-services/architecture-integration.png",description:"The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel\u2019s data on the IOTA Tangle.",keywords:["how to","subscribe to channel","ecommerce","immutable data channel","subscriber","Identity"]},s="Ecommerce-Audit Trail Gateway (GW)",u={unversionedId:"services/audit-trail-gateway/introduction",id:"services/audit-trail-gateway/introduction",title:"Ecommerce-Audit Trail Gateway (GW)",description:"The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel\u2019s data on the IOTA Tangle.",source:"@site/content/build/integration-services/production/documentation/docs/services/audit-trail-gateway/introduction.md",sourceDirName:"services/audit-trail-gateway",slug:"/services/audit-trail-gateway/introduction",permalink:"/integration-services/services/audit-trail-gateway/introduction",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/services/audit-trail-gateway/introduction.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/architecture-integration.png",description:"The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel\u2019s data on the IOTA Tangle.",keywords:["how to","subscribe to channel","ecommerce","immutable data channel","subscriber","Identity"]},sidebar:"docs",previous:{title:"Welcome",permalink:"/integration-services/welcome"},next:{title:"Software Architecture and APIs Definition",permalink:"/integration-services/services/audit-trail-gateway/API-definition"}},l={},d=[],m={toc:d};function p(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ecommerce-audit-trail-gateway-gw"},"Ecommerce-Audit Trail Gateway (GW)"),(0,i.kt)("p",null,"The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel\u2019s data on\nthe IOTA Tangle. A channel is implemented as an IOTA Stream and can handle multiple different types of ",(0,i.kt)("strong",{parentName:"p"},"Subscribers"),".\nWhen you request ",(0,i.kt)("inlineCode",{parentName:"p"},"Read"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Write"),"or ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadAndWrite")," access to a channel, you become a channel Subscriber. However, it is\nup to the channel\u2019s creator (",(0,i.kt)("strong",{parentName:"p"},"Author"),") to authorize these requests. In addition to authorized subscribers, the author\ncan always read and write messages in the channel."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Audit Trail GW currently integrates the ",(0,i.kt)("a",{parentName:"p",href:"/integration-services/services/SSI-bridge/introduction"},"SSI Bridge"),"\nto identify and authorize subscribers. This means anyone interacting with the audit trail must create their\nown ",(0,i.kt)("a",{parentName:"p",href:"/integration-services/basics/identity"},"Identity")," beforehand."),(0,i.kt)("p",{parentName:"div"},"In the future, you will be able to remove this dependency and deploy the Audit Trail and Gateway in the presence of\nother (centralized) Accounting, Authentication, and Authorization (AAA) systems."))),(0,i.kt)("p",null,"The figure below shows a logic architecture with the integration of both IOTA Integration Services."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IOTA-Tools-Architecture",src:n(86722).Z,width:"960",height:"540"})))}p.isMDXComponent=!0},86722:function(e,t,n){t.Z=n.p+"assets/images/architecture-integration-808a9bd5eca8712894d46b172d7feeb0.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);