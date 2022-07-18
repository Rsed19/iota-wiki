"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[60024],{55635:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],s={},a=void 0,c={unversionedId:"reference/java_api/InfoResponse",id:"reference/java_api/InfoResponse",title:"InfoResponse",description:"Response of GET /api/v1/info.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/InfoResponse.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/InfoResponse",permalink:"/wallet.rs/reference/java_api/InfoResponse",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/InfoResponse.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[{value:"name(): String",id:"name-string",level:3},{value:"version(): String",id:"version-string",level:3},{value:"networkId(): String",id:"networkid-string",level:3},{value:"bech32Hrp(): String",id:"bech32hrp-string",level:3},{value:"messagesPerSecond(): double",id:"messagespersecond-double",level:3},{value:"referencedMessagesPerSecond(): double",id:"referencedmessagespersecond-double",level:3},{value:"referencedRate(): double",id:"referencedrate-double",level:3},{value:"latestMilestoneTimestamp(): long",id:"latestmilestonetimestamp-long",level:3},{value:"minPowScore(): double",id:"minpowscore-double",level:3},{value:"latestMilestoneIndex(): long",id:"latestmilestoneindex-long",level:3},{value:"confirmedMilestoneIndex(): long",id:"confirmedmilestoneindex-long",level:3},{value:"pruningIndex(): long",id:"pruningindex-long",level:3},{value:"features(): String[]",id:"features-string",level:3}],p={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Response of GET /api/v1/info.\nReturns general information about the node."),(0,i.kt)("h3",{id:"name-string"},"name(): String"),(0,i.kt)("p",null,"The name of the node"),(0,i.kt)("h3",{id:"version-string"},"version(): String"),(0,i.kt)("p",null,"The node software version"),(0,i.kt)("h3",{id:"networkid-string"},"networkId(): String"),(0,i.kt)("p",null,"The network id the node is connected to"),(0,i.kt)("h3",{id:"bech32hrp-string"},"bech32Hrp(): String"),(0,i.kt)("p",null,"The bech32 HRP which is accepted by this node"),(0,i.kt)("h3",{id:"messagespersecond-double"},"messagesPerSecond(): double"),(0,i.kt)("p",null,"The messages per second this node is receiving"),(0,i.kt)("h3",{id:"referencedmessagespersecond-double"},"referencedMessagesPerSecond(): double"),(0,i.kt)("p",null,"The referenced messages per second this node is receiving"),(0,i.kt)("h3",{id:"referencedrate-double"},"referencedRate(): double"),(0,i.kt)("p",null,"The reference rate"),(0,i.kt)("h3",{id:"latestmilestonetimestamp-long"},"latestMilestoneTimestamp(): long"),(0,i.kt)("p",null,"The timestamp of the latest received milestone"),(0,i.kt)("h3",{id:"minpowscore-double"},"minPowScore(): double"),(0,i.kt)("p",null,"The minimum required PoW for a message to be accepted"),(0,i.kt)("h3",{id:"latestmilestoneindex-long"},"latestMilestoneIndex(): long"),(0,i.kt)("p",null,"The index of the latest seen milestone"),(0,i.kt)("h3",{id:"confirmedmilestoneindex-long"},"confirmedMilestoneIndex(): long"),(0,i.kt)("p",null,"The index of the latest confirmed milestone"),(0,i.kt)("h3",{id:"pruningindex-long"},"pruningIndex(): long"),(0,i.kt)("p",null,"The milestone index this node is pruning from"),(0,i.kt)("h3",{id:"features-string"},"features(): String[]"),(0,i.kt)("p",null,"List of features running on this node"))}f.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(a,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);