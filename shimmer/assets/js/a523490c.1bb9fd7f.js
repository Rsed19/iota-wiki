"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[71754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Password Storage",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"It is not recommended to store passwords or seeds on a host's environment variables or in the source code in a production\nsetup. Please follow our ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/guides/backup_security"},"backup and security"),"\nrecommendations for production use.")))}o.isMDXComponent=!0;const l={},s="Getting Started with Java",p={unversionedId:"getting_started/java",id:"getting_started/java",title:"Getting Started with Java",description:"Requirements",source:"@site/shimmer/external/wallet.rs/documentation/docs/getting_started/java.mdx",sourceDirName:"getting_started",slug:"/getting_started/java",permalink:"/shimmer/wallet.rs/getting_started/java",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/getting_started/java.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started with Python",permalink:"/shimmer/wallet.rs/getting_started/python"},next:{title:"Getting Started with Rust",permalink:"/shimmer/wallet.rs/getting_started/rust"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Install the Library with Maven",id:"install-the-library-with-maven",level:2},{value:"linux-x86_64",id:"linux-x86_64",level:4},{value:"windows-x86_64",id:"windows-x86_64",level:4},{value:"aarch64-apple-darwin",id:"aarch64-apple-darwin",level:4},{value:"osx-x86_64",id:"osx-x86_64",level:4},{value:"Use the Library",id:"use-the-library",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-java"},"Getting Started with Java"),(0,r.kt)(o,{mdxType:"WarningPasswordStorage"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you have the latest ",(0,r.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/downloads/"},"Java Development Kit (JDK)")," installed.")),(0,r.kt)("h2",{id:"install-the-library-with-maven"},"Install the Library with Maven"),(0,r.kt)("h4",{id:"linux-x86_64"},"linux-x86_64"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.iota</groupId>\n    <artifactId>iota-wallet-java</artifactId>\n    <version>1.0.0-rc.2</version>\n    <type>jar</type>\n    <classifier>linux-x86_64</classifier>\n</dependency>\n")),(0,r.kt)("h4",{id:"windows-x86_64"},"windows-x86_64"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.iota</groupId>\n    <artifactId>iota-wallet-java</artifactId>\n    <version>1.0.0-rc.2</version>\n    <type>jar</type>\n    <classifier>windows-x86_64</classifier>\n</dependency>\n")),(0,r.kt)("h4",{id:"aarch64-apple-darwin"},"aarch64-apple-darwin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.iota</groupId>\n    <artifactId>iota-wallet-java</artifactId>\n    <version>1.0.0-rc.2</version>\n    <type>jar</type>\n    <classifier>aarch64-apple-darwin</classifier>\n</dependency>\n")),(0,r.kt)("h4",{id:"osx-x86_64"},"osx-x86_64"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.iota</groupId>\n    <artifactId>iota-wallet-java</artifactId>\n    <version>1.0.0-rc.2</version>\n    <type>jar</type>\n    <classifier>osx-x86_64</classifier>\n</dependency>\n")),(0,r.kt)("h2",{id:"use-the-library"},"Use the Library"),(0,r.kt)("p",null,"In order to use the library, you need to create a ",(0,r.kt)("em",{parentName:"p"},"Wallet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.AccountHandle;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.CoinType;\nimport org.iota.types.WalletConfig;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class CreateAccount {\n    private static final String DEFAULT_DEVELOPMENT_MNEMONIC = "hidden enroll proud copper decide negative orient asset speed work dolphin atom unhappy game cannon scheme glow kid ring core name still twist actor";\n\n    public static void main(String[] args) throws WalletException {\n        // Build the wallet.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes("https://api.testnet.shimmer.network"))\n                .withSecretManager(new StrongholdSecretManager("PASSWORD_FOR_ENCRYPTION", null, "example-wallet"))\n                .withCoinType(CoinType.Shimmer)\n        );\n        wallet.storeMnemonic(DEFAULT_DEVELOPMENT_MNEMONIC);\n\n        // Create an account.\n        AccountHandle a = wallet.createAccount("Alice");\n\n        // Print the account.\n        System.out.println(a);\n    }\n}\n')),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"Now that you are up and running, you can get acquainted with the library using\nits ",(0,r.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/run_how_tos"},"how-to guides")," and the\nrepository's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/java/iota-wallet-java/examples/src/main"},"code examples"),"."))}m.isMDXComponent=!0}}]);