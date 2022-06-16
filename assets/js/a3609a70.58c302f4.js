"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1765],{3903:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={description:"The snapshot API allows retrieving current snapshot.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","snapshot","retrieve","current"]},l="Snapshot API Methods",p={unversionedId:"apis/snapshot",id:"apis/snapshot",title:"Snapshot API Methods",description:"The snapshot API allows retrieving current snapshot.",source:"@site/content/build/goshimmer/develop/documentation/docs/apis/snapshot.md",sourceDirName:"apis",slug:"/apis/snapshot",permalink:"/goshimmer/apis/snapshot",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/content/build/goshimmer/develop/documentation/docs/apis/snapshot.md",tags:[],version:"current",frontMatter:{description:"The snapshot API allows retrieving current snapshot.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","snapshot","retrieve","current"]},sidebar:"docs",previous:{title:"Mana API Methods",permalink:"/goshimmer/apis/mana"},next:{title:"Faucet API Methods",permalink:"/goshimmer/apis/faucet"}},c={},u=[{value:"<code>/snapshot</code>",id:"snapshot",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"cURL",id:"curl",level:4},{value:"Client lib",id:"client-lib",level:4},{value:"Results",id:"results",level:4}],h={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snapshot-api-methods"},"Snapshot API Methods"),(0,a.kt)("p",null,"Snapshot API allows retrieving current snapshot."),(0,a.kt)("p",null,"The API provides the following functions and endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#snapshot"},"/snapshot"))),(0,a.kt)("h2",{id:"snapshot"},(0,a.kt)("inlineCode",{parentName:"h2"},"/snapshot")),(0,a.kt)("p",null,"Returns a snapshot file."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"curl"},"cURL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/snapshot'\n")),(0,a.kt)("h4",{id:"client-lib"},"Client lib"),(0,a.kt)("p",null,"Method not available in the client library."),(0,a.kt)("h4",{id:"results"},"Results"),(0,a.kt)("p",null,"Snapshot file is returned."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);