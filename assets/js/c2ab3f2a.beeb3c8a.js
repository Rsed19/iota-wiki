"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10881],{17043:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={},l=void 0,p={unversionedId:"libraries/java/api/MqttManager",id:"libraries/java/api/MqttManager",title:"MqttManager",description:"withTopic(topic): MqttTopicManager",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/MqttManager.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MqttManager",permalink:"/iota.rs/libraries/java/api/MqttManager",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/MqttManager.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"withTopic(topic): MqttTopicManager",id:"withtopictopic-mqtttopicmanager",level:3},{value:"withTopics(topics): MqttTopicManager",id:"withtopicstopics-mqtttopicmanager",level:3},{value:"unsubscribe(): void",id:"unsubscribe-void",level:3},{value:"disconnect(): void",id:"disconnect-void",level:3}],d={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"withtopictopic-mqtttopicmanager"},"withTopic(topic): ",(0,i.kt)("a",{parentName:"h3",href:"#mqtttopicmanager"},"MqttTopicManager")),(0,i.kt)("p",null,"Add a new topic to the list."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topic"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#topic"},"Topic")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"withtopicstopics-mqtttopicmanager"},"withTopics(topics): ",(0,i.kt)("a",{parentName:"h3",href:"#mqtttopicmanager"},"MqttTopicManager")),(0,i.kt)("p",null,"Add a collection of topics to the list."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topics"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#topic"},"Topic[]")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"unsubscribe-void"},"unsubscribe(): void"),(0,i.kt)("p",null,"Unsubscribes from all subscriptions."),(0,i.kt)("h3",{id:"disconnect-void"},"disconnect(): void"),(0,i.kt)("p",null,"Disconnects the broker.\nThis will clear the stored topic handlers and close the MQTT connection."))}m.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);