"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[20571],{7644:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},c=void 0,u={unversionedId:"reference/java_api/MigrationData",id:"reference/java_api/MigrationData",title:"MigrationData",description:"Migration data.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/MigrationData.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/MigrationData",permalink:"/wallet.rs/reference/java_api/MigrationData",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/MigrationData.mdx",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"balance(): long",id:"balance-long",level:3},{value:"lastCheckedAddressIndex(): long",id:"lastcheckedaddressindex-long",level:3},{value:"inputs(): InputData[]",id:"inputs-inputdata",level:3},{value:"spentAddresses(): boolean",id:"spentaddresses-boolean",level:3}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Migration data."),(0,o.kt)("h3",{id:"balance-long"},"balance(): long"),(0,o.kt)("p",null,"Total seed balance."),(0,o.kt)("h3",{id:"lastcheckedaddressindex-long"},"lastCheckedAddressIndex(): long"),(0,o.kt)("p",null,"The index of the last checked address.\nUseful if you want to call the finder again."),(0,o.kt)("h3",{id:"inputs-inputdata"},"inputs(): ",(0,o.kt)("a",{parentName:"h3",href:"#inputdata"},"InputData[]")),(0,o.kt)("p",null,"Migration inputs."),(0,o.kt)("h3",{id:"spentaddresses-boolean"},"spentAddresses(): boolean"),(0,o.kt)("p",null,"If any of the inputs are spent"))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);