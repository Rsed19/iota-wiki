"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59498],{69778:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],o={},l="Track and Trace",d={unversionedId:"track-and-trace/overview",id:"track-and-trace/overview",title:"Track and Trace",description:"Returnable assets that are used within distribution networks are often not returned to their original owners. This blueprint describes how the IBCS Group implemented a track and trace system for recovery of returnable assets, using the IOTA Tangle and other IOTA technologies.",source:"@site/content/build/blueprints/production/track-and-trace/overview.md",sourceDirName:"track-and-trace",slug:"/track-and-trace/overview",permalink:"/blueprints/track-and-trace/overview",draft:!1,editUrl:"https://github.com/iotaledger/blueprints/edit/main/content/build/blueprints/production/track-and-trace/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Deploy and Test the Tangle Data Storage Demo",permalink:"/blueprints/tangle-data-storage/deployment-and-testing"},next:{title:"Application Architecture",permalink:"/blueprints/track-and-trace/architecture"}},u={},c=[{value:"Business Case",id:"business-case",level:2},{value:"Challenges",id:"challenges",level:3},{value:"Solution",id:"solution",level:3},{value:"Demo",id:"demo",level:2},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Client Library",id:"client-library",level:3},{value:"MAM Eloquently Explained",id:"mam-eloquently-explained",level:3},{value:"MAM GitHub Repository",id:"mam-github-repository",level:3}],p={toc:c};function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"track-and-trace"},"Track and Trace"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returnable assets that are used within distribution networks are often not returned to their original owners. This blueprint describes how the IBCS Group implemented a track and trace system for recovery of returnable assets, using the IOTA Tangle and other IOTA technologies.")),(0,s.kt)("p",null,"We present the integration of this blueprint in ",(0,s.kt)("a",{parentName:"p",href:"https://www.ibcsgroup.com/"},"IBCS Group")," business processes. This blueprint is a guide for other organizations to replicate and adapt for their own scenarios and business processes."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This project uses Streams v0 (former MAM). Keep in mind that Streams v0 is deprecated and ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/streams/welcome"},"IOTA Streams")," should be used."))),(0,s.kt)("h2",{id:"business-case"},"Business Case"),(0,s.kt)("p",null,"A returnable asset is an asset that's used by many parties in the distribution and logistics chain."),(0,s.kt)("p",null,"For example, in the glass manufacturing industry, a glass rack is a returnable asset. This asset is used to ship glasses from a glass producer (owner of the asset) to a distributor. Instead of returning the glass rack to the glass producers, the glass distributors might use them to ship other glasses to a window manufacturer. Then, the window manufacturers might use it to deliver windows to their customers."),(0,s.kt)("p",null,"When many parties use the same returnable asset, it's easy for the owner to lose track of it."),(0,s.kt)("p",null,"Misplacement of such assets represents an economic loss for asset owners. When assets are missing, it affects the owners ability to fulfill deliveries and wastes their time and resources on recovering them. "),(0,s.kt)("p",null,"The table below summarizes the different stakeholders and roles considered in this example business case. The table also shows how complex it is to keep track of all the relations involved in the handling of returnable assets."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"th"},"Stakeholder")),(0,s.kt)("th",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"th"},"Role")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Glass producers")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Deliver glasses either to distributors (directly) or to Window Manufacturers (through Logistic Provider). Own the returnable assets.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Window manufacturers")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Deliver windows to windows resellers either directly or through logistic providers. Might own their own returnable assets and use for the delivery. Or they might also re-use returnable assets received from glass producers.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Distributors")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Receive glasses or windows delivered directly or through logistic providers together with returnable assets used for the delivery. Re-use the returnable assets to deliver glasses or windows further down to the distribution chain.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Window resellers")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Receive windows from distributors and use received returnable assets to arrange their delivery to end-customers.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Customers")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Receive windows directly from windows resellers or through logistic providers which use glass producers and windows manufacturers returnable assets. Often dispose returnable assets or do not know to whom and how to return.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Logistic providers")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Move assets and returnable assets along the distribution chain.")))),(0,s.kt)("h3",{id:"challenges"},"Challenges"),(0,s.kt)("p",null,"So far, tracking and tracing returnable assets has been unsuccessful for the following reasons: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Custodians don't see economic value in a returnable asset. Instead, returnable assets are more likely to be seen as disposable"),(0,s.kt)("li",{parentName:"ul"},"Custodians are neither incentivized to help track returnable assets nor held accountable for not doing so"),(0,s.kt)("li",{parentName:"ul"},"Tracking returnable assets requires access to data that's stored in a number of proprietary systems, all of which belong to different custodians. These different systems increase the complexity to predict, map, and integrate the data, and exceed the perceived benefits in tracking returnable assets.")),(0,s.kt)("p",null,"It's not possible to report the custody of assets using a centralized database because this database will also reveal to third parties, proprietary knowledge about different stakeholders, customers, and distribution chains. Moreover, it will be difficult to create a system that's able to track all the possible interactions envisioned for a number of stakeholders that aren't known up front."),(0,s.kt)("h3",{id:"solution"},"Solution"),(0,s.kt)("p",null,"IOTA provides a solution to seamlessly collect and share information about returnable assets without the need to integrate any proprietary system. While doing that, IOTA can still guarantee access control of the collected information through the use of the second layer MAM protocol."),(0,s.kt)("p",null,"Thanks to the permissionless nature of IOTA, no trust is required among those who run the infrastructure because the data is spread across the whole IOTA network. "),(0,s.kt)("p",null,"In addition, the system does not need knowledge of all parties who write information to the ledger. This simplifies the system so that it can be used by all stakeholders and industry sectors as needed and with minimum integration and onboarding time."),(0,s.kt)("p",null,"This solution leads to the following benefits: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Asset owners can track and request the return of their returnable assets")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Asset owners can save the time and the costs associated with searching for missing assets")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Asset owners can better predict and plan shipments of their production by knowing the exact number and the exact location of any returnable assets that are available to them")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Custodians can track the returnable assets they handle, be rewarded for returning them, and increase their reputation with asset owners")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Custodians can save costs associated with supporting requests for returnable assets that are declared missing"))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),":")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Future scenarios the use of the IOTA token (and smart contracts) could allow you to create incentives to reward custodians who participate in tracking and tracing returnable assets, despite the country and the currency in which the assets are handled."))),(0,s.kt)("p",null,"This image presents a simplified stakeholders map and the different actions each stakeholder should perform when in contact with a returnable asset."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Returnable assets stakeholder map",src:a(48133).Z,width:"1600",height:"832"})),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"th"},"Key")),(0,s.kt)("th",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"th"},"Description")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Dotted arrows"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Path of a returnable asset")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Green circles"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Stakeholders such as custodians")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Purple circles"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Owner of the returnable asset")))),(0,s.kt)("h2",{id:"demo"},"Demo"),(0,s.kt)("p",null,"See this website for a ",(0,s.kt)("a",{parentName:"p",href:"http://tradedemo.iota.org"},"demonstration of the application"),".\nAlso, have a look at this website for a ",(0,s.kt)("a",{parentName:"p",href:"https://future-farm.iota.org/"},"smart agriculture PoC")," with a very similar codebase. Read more about it in our ",(0,s.kt)("a",{parentName:"p",href:"https://blog.iota.org/using-the-tangle-for-smart-agriculture-the-iota-foundation-teams-up-with-future-farm-consortium-a9d1757e33c/"},"blogpost"),". "),(0,s.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"client-library"},(0,s.kt)("a",{parentName:"h3",href:"https://wiki.iota.org/iota.rs/welcome"},"Client Library")),(0,s.kt)("p",null,"Learn how to use the JavaScript client library to create, send, and receive transactions."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"mam-eloquently-explained"},(0,s.kt)("a",{parentName:"h3",href:"https://blog.iota.org/introducing-masked-authenticated-messaging-e55c1822d50e"},"MAM Eloquently Explained")),(0,s.kt)("p",null,"Masked Authenticated Messaging is a second layer data communication protocol that adds functionality to publish and control access to an encrypted data stream, over the Tangle. Learn more about how MAM works."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"mam-github-repository"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/iotaledger/mam.js"},"MAM GitHub Repository")),(0,s.kt)("p",null,"Read the code and some quickstart instructions to test MAM with JavaScript."),(0,s.kt)("hr",null))}h.isMDXComponent=!0},48133:function(e,t,a){t.Z=a.p+"assets/images/track-and-trace-returnable-assets-stakeholders-30b1569e8a5c3d009dd57a9f15050a64.png"},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||s;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);