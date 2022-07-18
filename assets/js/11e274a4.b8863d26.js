"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99158],{40373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={description:"Getting started with the official IOTA Client Library Wasm binding.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","npm","system environment variables"]},s="Getting Started with Wasm",p={unversionedId:"getting_started/wasm",id:"getting_started/wasm",title:"Getting Started with Wasm",description:"Getting started with the official IOTA Client Library Wasm binding.",source:"@site/content/build/iota.rs/production/documentation/docs/getting_started/wasm.md",sourceDirName:"getting_started",slug:"/getting_started/wasm",permalink:"/iota.rs/getting_started/wasm",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/getting_started/wasm.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Wasm binding.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","npm","system environment variables"]},sidebar:"docs",previous:{title:"Getting Started With Rust",permalink:"/iota.rs/getting_started/rust"},next:{title:"Seeds",permalink:"/iota.rs/explanations/seeds"}},u={},c=[{value:"Install the library",id:"install-the-library",level:2},{value:"NPM",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Build",id:"build",level:2},{value:"NodeJS Setup",id:"nodejs-setup",level:2},{value:"Web Setup",id:"web-setup",level:2},{value:"Rollup",id:"rollup",level:3},{value:"Webpack",id:"webpack",level:3},{value:"Usage",id:"usage",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-wasm"},"Getting Started with Wasm"),(0,r.kt)("h2",{id:"install-the-library"},"Install the library"),(0,r.kt)("h3",{id:"npm"},"NPM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/client-wasm\n")),(0,r.kt)("h3",{id:"yarn"},"Yarn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @iota/client-wasm\n")),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,"Alternatively, you can build the bindings if you have Rust installed. If not, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://rustup.rs"},"rustup.rs")," for installation instructions. Then install the necessary dependencies using:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install")),(0,r.kt)("p",null,"and then build the bindings for ",(0,r.kt)("inlineCode",{parentName:"p"},"node.js")," with"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run build:nodejs")),(0,r.kt)("p",null,"or for the ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," with"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run build:web")),(0,r.kt)("h2",{id:"nodejs-setup"},"NodeJS Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const iota = require(\'@iota/client-wasm/node\')\n\nasync function main() {\n  // Get the nodeinfo\n  let iota_client = await iota.Client.withNode("https://api.lb-0.h.chrysalis-devnet.iota.cafe/");\n  console.log("Nodeinfo: ", await iota_client.getInfo())\n}\nmain()\n')),(0,r.kt)("h2",{id:"web-setup"},"Web Setup"),(0,r.kt)("p",null,"The library loads the WASM file with an HTTP GET request, so the .wasm file must be copied to the root of the dist folder."),(0,r.kt)("h3",{id:"rollup"},"Rollup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"rollup-plugin-copy"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install rollup-plugin-copy --save-dev\n// or using yarn\nyarn add rollup-plugin-copy --dev\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the copy plugin usage to the ",(0,r.kt)("inlineCode",{parentName:"li"},"plugins")," array under ",(0,r.kt)("inlineCode",{parentName:"li"},"rollup.config.js"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Include the copy plugin\nimport copy from 'rollup-plugin-copy'\n\n// Add the copy plugin to the `plugins` array of your rollup config:\ncopy({\n  targets: [{\n    src: 'node_modules/@iota/client-wasm/web/client_wasm_bg.wasm',\n    dest: 'public',\n    rename: 'client_wasm_bg.wasm'\n  }]\n})\n")),(0,r.kt)("h3",{id:"webpack"},"Webpack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"copy-webpack-plugin"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install copy-webpack-plugin --save-dev\n// or using yarn\nyarn add copy-webpack-plugin --dev\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Include the copy plugin\nconst CopyWebPlugin= require('copy-webpack-plugin');\n\n// Add the copy plugin to the `plugins` array of your webpack config:\n\nnew CopyWebPlugin({\n  patterns: [\n    {\n      from: 'node_modules/@iota/client-wasm/web/client_wasm_bg.wasm',\n      to: 'client_wasm_bg.wasm'\n    }\n  ]\n}),\n")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as iota from "@iota/client-wasm/web";\n\niota.init().then(() => {\nasync function main() {\n  // Get the nodeinfo\n  let iota_client = await iota.Client.withNode("https://api.lb-0.h.chrysalis-devnet.iota.cafe/");\n  console.log("Nodeinfo: ", await iota_client.getInfo())\n}\nmain()\n});\n\n// or\n\n(async () => {\n  await iota.init()\n  // Get the nodeinfo\n  let iota_client = await iota.Client.withNode("https://api.lb-0.h.chrysalis-devnet.iota.cafe/");\n  console.log("Nodeinfo: ", await iota_client.getInfo())\n})()\n\n// Default path is "client_wasm_bg.wasm", but you can override it like this\nawait iota.init("./static/client_wasm_bg.wasm");\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"iota.init().then(<callback>)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"await iota.init()")," is required to load the wasm file (from the server if not available, because of that it will only be slow for the first time)"))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);