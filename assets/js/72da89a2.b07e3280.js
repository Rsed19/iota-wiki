"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3423],{14544:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={toc:[{value:"Stronghold Vault",id:"stronghold-vault",level:2}]};function l(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"stronghold-vault"},"Stronghold Vault"),(0,o.kt)("p",null,"Vault is an implementation of a secure database for secrets. From an abstract point of view, each database view is a vault which is a collection of records which are all encrypted using the same key.  And a collection of vaults is called a Stronghold. "),(0,o.kt)("p",null,"The vault module defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"Vault")," type. Each of these vaults is composed of ",(0,o.kt)("inlineCode",{parentName:"p"},"Records"),". Each ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," is split into multiple pieces: an id, a data transaction, an optional revocation transaction and the blob of encrypted data. Internally, the data uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"GuardedVec")," type from the runtime module to guard the data for when it is accessed from the ",(0,o.kt)("inlineCode",{parentName:"p"},"DbView")," interface. On the ",(0,o.kt)("inlineCode",{parentName:"p"},"DbView")," interface there are methods for writing data, updating data and deleting data. To delete a record from a vault, a revocation transaction must be added to a record which marks it for garbage collection via the ",(0,o.kt)("inlineCode",{parentName:"p"},"revoke_record")," method. The records may then be garbage collected using the ",(0,o.kt)("inlineCode",{parentName:"p"},"garbage_collect_vault")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," method can be used to both write to a new record or update existing records. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get_guard")," method allows the user to insert a closure which accepts the ",(0,o.kt)("inlineCode",{parentName:"p"},"GuardedVec")," and returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"engine::Result<()>"),".  Through this closure, the user can interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"GuardedVec")," to manipulate the data. The ",(0,o.kt)("inlineCode",{parentName:"p"},"exec_proc")," method is a version of ",(0,o.kt)("inlineCode",{parentName:"p"},"get_guard")," that accepts two vault locations, vault keys and also a closure of type ",(0,o.kt)("inlineCode",{parentName:"p"},"FnOnce(GuardedVec<u8>) -> crate::Result<Vec<u8>>"),". This method places the result of the closure into the newly specified ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," in the vault."))}l.isMDXComponent=!0;var s=["components"],u={description:"Vault is an implementation of a secure database for secrets, each database view is a vault which is a collection of records which are all encrypted using the same key.A collection of vaults is called a Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","crate","vault","records","GuardedVec","DbView"]},d="Structure: Engine::Vault",p={unversionedId:"reference/structure/engine/vault",id:"reference/structure/engine/vault",title:"Structure: Engine::Vault",description:"Vault is an implementation of a secure database for secrets, each database view is a vault which is a collection of records which are all encrypted using the same key.A collection of vaults is called a Stronghold.",source:"@site/content/build/stronghold.rs/develop/documentation/docs/reference/structure/engine/vault.md",sourceDirName:"reference/structure/engine",slug:"/reference/structure/engine/vault",permalink:"/stronghold.rs/reference/structure/engine/vault",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev-refactor/documentation/content/build/stronghold.rs/develop/documentation/docs/reference/structure/engine/vault.md",tags:[],version:"current",frontMatter:{description:"Vault is an implementation of a secure database for secrets, each database view is a vault which is a collection of records which are all encrypted using the same key.A collection of vaults is called a Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","crate","vault","records","GuardedVec","DbView"]},sidebar:"mySidebar",previous:{title:"Structure: Engine::Snapshot",permalink:"/stronghold.rs/reference/structure/engine/snapshot"},next:{title:"Structure: Engine::Store",permalink:"/stronghold.rs/reference/structure/engine/store"}},h={},m=[],g={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-enginevault"},"Structure: Engine::Vault"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/engine/src/vault"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"})),"  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/stronghold_engine/engine/latest/vault/index.html"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/stronghold-engine"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-engine.svg",alt:null}))),(0,o.kt)(l,{mdxType:"Vault"}))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);