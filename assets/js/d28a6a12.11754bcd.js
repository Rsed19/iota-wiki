"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22832],{12070:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={description:"Getting started with the official IOTA Wallet Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","Rust","jar","maven","environment variable","getting started"]},s="Getting Started with Java",d={unversionedId:"getting_started/java",id:"getting_started/java",title:"Getting Started with Java",description:"Getting started with the official IOTA Wallet Library Java binding.",source:"@site/content/build/wallet.rs/production/documentation/docs/getting_started/java.md",sourceDirName:"getting_started",slug:"/getting_started/java",permalink:"/wallet.rs/getting_started/java",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/getting_started/java.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Wallet Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","Rust","jar","maven","environment variable","getting started"]},sidebar:"docs",previous:{title:"Getting Started with Python",permalink:"/wallet.rs/getting_started/python"},next:{title:"Getting Started with Java for Android",permalink:"/wallet.rs/getting_started/java_for_android"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Security",id:"security",level:2},{value:"Installation",id:"installation",level:2},{value:"Step 1: Creating the Native Library",id:"step-1-creating-the-native-library",level:3},{value:"Step 2: Creating the Java Archive",id:"step-2-creating-the-java-archive",level:3},{value:"Generating the source files and classes",id:"generating-the-source-files-and-classes",level:4},{value:"Generating the jar",id:"generating-the-jar",level:4},{value:"Gradle",id:"gradle",level:5},{value:"Maven",id:"maven",level:5},{value:"Usage",id:"usage",level:2},{value:"Gradle",id:"gradle-1",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Limitations",id:"limitations",level:2}],p={toc:c};function g(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-java"},"Getting Started with Java"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To use the library, we recommend you update Rust to the latest stable version ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},(0,i.kt)("inlineCode",{parentName:"a"},"$ rustup update stable")),". Nightly should be fine but some changes might not be compatible."),(0,i.kt)("p",null,"Ensure you have installed the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/blob/dev/README.md"},"required dependencies for the library")," first. Then, you can also install the following programs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java & JDK (Make sure $JAVA_HOME env variable is set)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gradle.org/install/"},"Gradle")," v4 or higher or ",(0,i.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven"),"."),(0,i.kt)("li",{parentName:"ul"},"Cargo ndk (",(0,i.kt)("inlineCode",{parentName:"li"},"cargo install cargo-ndk"),")."),(0,i.kt)("li",{parentName:"ul"},"Cargo fmt (",(0,i.kt)("inlineCode",{parentName:"li"},"rustup component add rustfmt"),").")),(0,i.kt)("p",null,"Download or clone the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/iota.rs.git\n")),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("p",null,"In a production setup, do not store passwords in the host's environment variables or in the source code. See our ",(0,i.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/backup_security"},"backup and security recommendations")," for production setups."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To build using the Wallet.rs Java bindings, you will need:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"JNI Native library linking ",(0,i.kt)("inlineCode",{parentName:"li"},"Rust")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"C"),", and then ",(0,i.kt)("inlineCode",{parentName:"li"},"C")," to java ",(0,i.kt)("inlineCode",{parentName:"li"},"native")," methods (",(0,i.kt)("inlineCode",{parentName:"li"},".so")," , ",(0,i.kt)("inlineCode",{parentName:"li"},".dll")," or ",(0,i.kt)("inlineCode",{parentName:"li"},".dylib")," depending on your system)."),(0,i.kt)("li",{parentName:"ol"},"Java archive(Jar) containing ",(0,i.kt)("inlineCode",{parentName:"li"},"native")," methods which call C code. (",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),").")),(0,i.kt)("h3",{id:"step-1-creating-the-native-library"},"Step 1: Creating the Native Library"),(0,i.kt)("p",null,"Build the wallet library (this generates the java source code and JNI library file):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd wallet.rs/bindings/java\ncargo build --release\n")),(0,i.kt)("p",null,"You can find the generated binaries in ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs/bindings/java/target/release"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Compiling for Android requires additional compilation instructions."),(0,i.kt)("p",{parentName:"div"},"You can find these instructions in ",(0,i.kt)("a",{parentName:"p",href:"/wallet.rs/getting_started/java_for_android"},"Getting Started with Java for Android"),"."))),(0,i.kt)("h3",{id:"step-2-creating-the-java-archive"},"Step 2: Creating the Java Archive"),(0,i.kt)("h4",{id:"generating-the-source-files-and-classes"},"Generating the source files and classes"),(0,i.kt)("p",null,"After you complete step 1, you can find the Java generated source files under ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs/bindings/java/native/src/main/java/org/iota/wallet"),"."),(0,i.kt)("p",null,"If this step succeeds, you need to generate the jar file containing the newly generated Java source files."),(0,i.kt)("h4",{id:"generating-the-jar"},"Generating the jar"),(0,i.kt)("p",null,"You can generate the jar file with your tool of preference. This guide provides examples for Gradle and Maven."),(0,i.kt)("h5",{id:"gradle"},"Gradle"),(0,i.kt)("p",null,"Make ",(0,i.kt)("inlineCode",{parentName:"p"},"gradlew")," executable (",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x gradlew"),") if needed, then run the following commands from the project root:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd wallet.rs/bindings/java\n./gradlew jar\n")),(0,i.kt)("h5",{id:"maven"},"Maven"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd wallet.rs/bindings/java\nmvn install\n")),(0,i.kt)("p",null,"After running one of these commands, you can find the jar file at ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs/bindings/java/native/build/libs/native.jar")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"You can find more information on using the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library's java binding in the ",(0,i.kt)("a",{parentName:"p",href:"/wallet.rs/examples/java"},"examples section"),"."),(0,i.kt)("h3",{id:"gradle-1"},"Gradle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./gradlew examples:java-app:test --info\n```bash\n\n### Maven\n\nYou can run the examples using Maven by running the following command:\n\n\n```bash\nmvn exec:exec\n")),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"You can find the references for the binding's API in the ",(0,i.kt)("a",{parentName:"p",href:"/wallet.rs/reference/java"},"Java API Reference")," section."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Due to the fact that tje Java binding through C to Rust, there are a few limiting factors."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Classic builder patterns return a ",(0,i.kt)("inlineCode",{parentName:"li"},"clone")," after each builder call since we can only pass back to C by reference in ",(0,i.kt)("inlineCode",{parentName:"li"},"Rust")," as shown in the example below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},"Builder builder1 = new Builder();\nBuilder builder2 = builder1.setValue(true);\n\n// These are different instances, thus builder1 wont have the value set\nassertNotEquals(builder1, builder2);\n")))}g.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),g=r,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);