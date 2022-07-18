"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12766],{67279:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={description:"Get started with Stronghold. Prerequisites, how to build and use the library.",image:"/img/Banner/banner_stronghold.png",keywords:["getting started","open-source","secure","secrets","Noise","database","p2p","Rust","build","run"]},s="Getting Started",u={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"Get started with Stronghold. Prerequisites, how to build and use the library.",source:"@site/content/build/stronghold.rs/develop/documentation/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/stronghold.rs/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev-refactor/documentation/content/build/stronghold.rs/develop/documentation/docs/getting_started.md",tags:[],version:"current",frontMatter:{description:"Get started with Stronghold. Prerequisites, how to build and use the library.",image:"/img/Banner/banner_stronghold.png",keywords:["getting started","open-source","secure","secrets","Noise","database","p2p","Rust","build","run"]},sidebar:"mySidebar",previous:{title:"Welcome",permalink:"/stronghold.rs/welcome"},next:{title:"Non-Contiguous Data Types and Handling Secrets at Runtime",permalink:"/stronghold.rs/explanations/non-contiguous-data-types"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build the Library",id:"build-the-library",level:2},{value:"Use The Library",id:"use-the-library",level:2}],p={toc:d};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To build Stronghold, you need a recent version of ",(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org"},"Rust")," installed."),(0,a.kt)("h2",{id:"build-the-library"},"Build the Library"),(0,a.kt)("p",null,"The library comes with ",(0,a.kt)("a",{parentName:"p",href:"how_tos/cli/running_examples"},"examples"),", but has no executables on its own. You can use the\nfollowing instructions to build the library:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone the repo:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/iotaledger/stronghold.rs.git\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Build the library")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --release\n")),(0,a.kt)("h2",{id:"use-the-library"},"Use The Library"),(0,a.kt)("p",null,"You can get acquainted with Stronghold by checking out the ",(0,a.kt)("a",{parentName:"p",href:"how_tos/cli/running_examples"},"How Tos section"),"."),(0,a.kt)("p",null,"You can run the examples from the command line interface. Stronghold comes with a simple CLI example that briefly\nshowcases all its features. To run the example, change into the ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," directory, and run the following\ncommand that will print the help of the example with all commands and options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo run --example cli\n")))}g.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=o,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);