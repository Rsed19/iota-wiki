"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[37662],{25815:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(87462),l=n(63366),o=(n(67294),n(3905)),r=n(36232),i=n(84661),u=["components"],s={description:"You can find the source code for Bee in the official Bee repository. Before you can install Bee from the source, you will need to install some required dependencies.",image:"/img/logo/bee_logo.png",keywords:["nodes","setup","set up","windows","macOS","linux","Debian","how to"]},c="Set Up a Node",p={unversionedId:"how_tos/setup_a_node",id:"how_tos/setup_a_node",title:"Set Up a Node",description:"You can find the source code for Bee in the official Bee repository. Before you can install Bee from the source, you will need to install some required dependencies.",source:"@site/content/build/bee/production/documentation/docs/how_tos/setup_a_node.mdx",sourceDirName:"how_tos",slug:"/how_tos/setup_a_node",permalink:"/bee/how_tos/setup_a_node",draft:!1,editUrl:"https://github.com/iotaledger/bee/edit/production/documentation/content/build/bee/production/documentation/docs/how_tos/setup_a_node.mdx",tags:[],version:"current",frontMatter:{description:"You can find the source code for Bee in the official Bee repository. Before you can install Bee from the source, you will need to install some required dependencies.",image:"/img/logo/bee_logo.png",keywords:["nodes","setup","set up","windows","macOS","linux","Debian","how to"]},sidebar:"mySidebar",previous:{title:"Getting Started",permalink:"/bee/getting_started/"},next:{title:"Using Docker",permalink:"/bee/how_tos/docker"}},d={},m=[{value:"Installing from Source",id:"installing-from-source",level:2},{value:"Dependency Packages",id:"dependency-packages",level:3},{value:"Installing Rust",id:"installing-rust",level:3},{value:"Updating Rust",id:"updating-rust",level:3},{value:"Compiling the Bee Node",id:"compiling-the-bee-node",level:2},{value:"Download the Source",id:"download-the-source",level:3},{value:"Compiling",id:"compiling",level:3},{value:"With Dashboard",id:"with-dashboard",level:4},{value:"Without dashboard",id:"without-dashboard",level:4},{value:"Running",id:"running",level:3}],h={toc:m};function g(e){var t=e.components,n=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-a-node"},"Set Up a Node"),(0,o.kt)("p",null,"You can find the source code for Bee in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/bee"},"official Bee repository"),". Before you can install Bee from the source, you will need to install some required dependencies."),(0,o.kt)("h2",{id:"installing-from-source"},"Installing from Source"),(0,o.kt)("h3",{id:"dependency-packages"},"Dependency Packages"),(0,o.kt)("p",null,"Before starting the installation process, you should make sure your system has all the required dependencies."),(0,o.kt)(r.Z,{groupId:"operating-systems",defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"debian",mdxType:"TabItem"},(0,o.kt)("p",null,"To run a Bee node in a Debian base system you will need to install the following packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/build-essential"},"build-essential"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/pkg-config"},"pkg-config"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/librocksdb-dev"},"librocksdb-dev"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apt.llvm.org/"},"llvm"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/search?keywords=clang"},"clang"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/unstable/libclang-dev"},"libclang-dev"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packages.debian.org/jessie/libssl-dev"},"libssl-dev"),".")),(0,o.kt)("p",null,"To install all of these packages, you can run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update\napt-get upgrade\napt-get install git build-essential cmake pkg-config librocksdb-dev llvm clang libclang-dev libssl-dev\n"))),(0,o.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,"To run a Bee node in a macOS system, you will need to install the following packages using the ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"brew")," package manager:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake"),".")),(0,o.kt)("p",null,"You can run the following command to install brew:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,o.kt)("p",null,"After the installer finishes, you can use brew to install the required packages by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install cmake\n"))),(0,o.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,"To run a Bee node in a Windows system, you will need to install the following packages using the\n",(0,o.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"chocolatey")," package manager:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"),".")),(0,o.kt)("p",null,"To install chocolatey, open Powershell and execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n")),(0,o.kt)("p",null,"After the installer finishes, you can use chocolatey to install the required packages by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"choco install git --params '/NoAutoCrlf' cmake --installargs 'ADD_CMAKE_TO_PATH=System' llvm\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You will need to restart Powershell for your changes to take effect.")))),(0,o.kt)("h3",{id:"installing-rust"},"Installing Rust"),(0,o.kt)("p",null,"You will need to install ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," to run a Bee node. You should install version ",(0,o.kt)("a",{parentName:"p",href:"https://blog.rust-lang.org/2021/03/25/Rust-1.51.0.html"},"1.51"),", or above."),(0,o.kt)(r.Z,{groupId:"operating-systems",defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"debian",mdxType:"TabItem"},(0,o.kt)("p",null,"You can install Rust in a Debian system by running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource $HOME/.cargo/env\n"))),(0,o.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,"You can install Rust in a macOS system by running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource $HOME/.cargo/env\n"))),(0,o.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,"You can find installation instructions for the Windows system ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"in the official Rust documentation"),"."))),(0,o.kt)("h3",{id:"updating-rust"},"Updating Rust"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup")," to update your Rust version by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rustup update\n")),(0,o.kt)("h2",{id:"compiling-the-bee-node"},"Compiling the Bee Node"),(0,o.kt)("h3",{id:"download-the-source"},"Download the Source"),(0,o.kt)("p",null,"Once you have installed all the required dependencies, you can start compiling the Bee Node. To get started, you should clone the source code by running the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/bee.git --branch mainnet-develop\n")),(0,o.kt)("h3",{id:"compiling"},"Compiling"),(0,o.kt)("p",null,"Before you start compiling Bee, you should change your current directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"bee/bee-node"),". You can do so by running the following command from the same directory where you downloaded the source:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd bee/bee-node\n")),(0,o.kt)("p",null,"You can compile Bee in two manners:"),(0,o.kt)("h4",{id:"with-dashboard"},"With Dashboard"),(0,o.kt)("p",null,"If you want to build Bee with its Dashboard, you should run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cargo build --release --features dashboard\n")),(0,o.kt)("h4",{id:"without-dashboard"},"Without dashboard"),(0,o.kt)("p",null,"If you want to build Bee without its Dashboard, you should run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --release\n")),(0,o.kt)("h3",{id:"running"},"Running"),(0,o.kt)("p",null,"Once you have downloaded and compiled Bee, you should make a copy of the example config file. Be sure to review and update your configuration. You can find more information on configuring Bee in the ",(0,o.kt)("a",{parentName:"p",href:"/bee/references/configuration"},"configuration section"),"."),(0,o.kt)("p",null,"To copy the example configuration file, you should run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cp config.template.json config.json\n")),(0,o.kt)("p",null,"Once you have copied and updated the configuration, you can run your Bee node by executing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"../target/release/bee\n")))}g.isMDXComponent=!0},84661:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),l=n(86010),o="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},36232:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),l=n(67294),o=n(86010),r=n(35074),i=n(74879),u=n(85425),s=n(51085),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,r=e.lazy,d=e.block,m=e.defaultValue,h=e.values,g=e.groupId,f=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,l.useState)(v),S=O[0],_=O[1],B=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var D=N[g];null!=D&&D!==S&&k.some((function(e){return e.value===D}))&&_(D)}var E=function(e){var t=e.currentTarget,n=B.indexOf(t),a=k[n].value;a!==S&&(x(t),_(a),null!=g&&T(g,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,l=B.indexOf(e.currentTarget)+1;n=null!=(a=B[l])?a:B[0];break;case"ArrowLeft":var o,r=B.indexOf(e.currentTarget)-1;n=null!=(o=B[r])?o:B[B.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return B.push(e)},onKeyDown:P,onFocus:E,onClick:E},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(b.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);