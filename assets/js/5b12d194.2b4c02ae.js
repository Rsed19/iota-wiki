"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[16915],{88839:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={description:"Runtime extensions",image:"/img/logo/Stronghold_icon.png",keywords:["apit","security","runtime","traits","explanation"]},s="Runtime Extensions",m={unversionedId:"explanations/runtime-extensions",id:"explanations/runtime-extensions",title:"Runtime Extensions",description:"Runtime extensions",source:"@site/content/build/stronghold.rs/develop/documentation/docs/explanations/runtime-extensions.md",sourceDirName:"explanations",slug:"/explanations/runtime-extensions",permalink:"/stronghold.rs/explanations/runtime-extensions",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev-refactor/documentation/content/build/stronghold.rs/develop/documentation/docs/explanations/runtime-extensions.md",tags:[],version:"current",frontMatter:{description:"Runtime extensions",image:"/img/logo/Stronghold_icon.png",keywords:["apit","security","runtime","traits","explanation"]},sidebar:"mySidebar",previous:{title:"Cryptographic Procedures",permalink:"/stronghold.rs/explanations/procedures"},next:{title:"Software Transactional Memory and Transactional Concurrency",permalink:"/stronghold.rs/explanations/transactional-concurrency"}},p={},d=[{value:"Memory Management",id:"memory-management",level:2},{value:"Boxed Memory",id:"boxed-memory",level:3}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"runtime-extensions"},"Runtime Extensions"),(0,a.kt)("h2",{id:"memory-management"},"Memory Management"),(0,a.kt)("p",null,"Whenever a computer program requires memory to store data (e.g., some text, an image, etc. ), it must allocate memory. Allocating memory is the mechanism by which the operating system grants some of its storage and processing power to a running program to ensure that the problem can run properly."),(0,a.kt)("p",null,'In this context, there is also what is commonly known as "virtual memory space". Every program (process) running does not need to know the actual address in the memory but only an abstracted version.'),(0,a.kt)("p",null,"The Stronghold runtime provides memory (speak managed allocation) types to protect sensitive data."),(0,a.kt)("h3",{id:"boxed-memory"},"Boxed Memory"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Boxed")," memory locks allocated memory and prevents it from being recorded in a memory dump. Since locking memory is dependent on the operating system, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Boxed")," type relies on ",(0,a.kt)("a",{parentName:"p",href:"https://libsodium.gitbook.io/doc/"},"Libsodium\u2019s")," ",(0,a.kt)("inlineCode",{parentName:"p"},"sodium_mlock")," function. This function calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"mlock")," function on Linux (or equivalent functions on other operating systems). ",(0,a.kt)("inlineCode",{parentName:"p"},"mlock")," prevents the current virtual address space of the process from being paged into a swap area, preventing the leakage of sensitive data. This, in turn, will be used by guarded heap allocations of memory."),(0,a.kt)("p",null,"Guarded heap allocations work by placing a guard page in front and at the end of the locked memory and a canary value at the front. The schematic view visualizes it."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/oy0Ri1Z.png",alt:"Guarded Heap Memory Allocations"})),(0,a.kt)("p",null,"Libsodium provides three types to guard memory:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"function"),(0,a.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"sodium_mprotect_noaccess")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Makes the protected memory inaccessible. It can neither be read from nor written to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"sodium_mprotect_readonly")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Makes the protected memory read-only. Memory can be read from but not written to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"sodium_mprotect_readwrite")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Enables reading from and writing to protected memory.")))),(0,a.kt)("p",null,"Stronghold exposes locked memory via the ",(0,a.kt)("inlineCode",{parentName:"p"},"LockedMemory")," trait, that exposes two functions that need to be implemented:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Modifies the value and potentially reallocates the data.\nfn update(self, payload: Buffer<u8>, size: usize) -> Result<Self, MemoryError>;\n\n/// Unlocks the memory and returns a Buffer\nfn unlock(&self) -> Result<Buffer<u8>, MemoryError>;\n")),(0,a.kt)("p",null,"Currently, three types of memory implement this trait:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"RamMemory")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allocated values reside inside the system's ram.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"FileMemory")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allocated values reside on the file system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NonContiguousMemory")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allocated memory is fragmented across the system's ram or file system, or a combination of both.")))))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=o,y=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);