"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99129],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},11004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"The snapshot API allows retrieving current snapshot.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","snapshot","retrieve","current"]},i="Snapshot API Methods",s={unversionedId:"apis/snapshot",id:"apis/snapshot",title:"Snapshot API Methods",description:"The snapshot API allows retrieving current snapshot.",source:"@site/iota/external/goshimmer/develop/documentation/docs/apis/snapshot.md",sourceDirName:"apis",slug:"/apis/snapshot",permalink:"/goshimmer/apis/snapshot",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/iota/external/goshimmer/develop/documentation/docs/apis/snapshot.md",tags:[],version:"current",frontMatter:{description:"The snapshot API allows retrieving current snapshot.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","snapshot","retrieve","current"]},sidebar:"docs",previous:{title:"Mana API Methods",permalink:"/goshimmer/apis/mana"},next:{title:"Faucet API Methods",permalink:"/goshimmer/apis/faucet"}},l={},p=[{value:"<code>/snapshot</code>",id:"snapshot",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"cURL",id:"curl",level:4},{value:"Client lib",id:"client-lib",level:4},{value:"Results",id:"results",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snapshot-api-methods"},"Snapshot API Methods"),(0,a.kt)("p",null,"Snapshot API allows retrieving current snapshot."),(0,a.kt)("p",null,"The API provides the following functions and endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#snapshot"},"/snapshot"))),(0,a.kt)("h2",{id:"snapshot"},(0,a.kt)("inlineCode",{parentName:"h2"},"/snapshot")),(0,a.kt)("p",null,"Returns a snapshot file."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"curl"},"cURL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/snapshot'\n")),(0,a.kt)("h4",{id:"client-lib"},"Client lib"),(0,a.kt)("p",null,"Method not available in the client library."),(0,a.kt)("h4",{id:"results"},"Results"),(0,a.kt)("p",null,"Snapshot file is returned."))}u.isMDXComponent=!0}}]);