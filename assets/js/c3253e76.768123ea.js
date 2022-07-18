"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[97801],{54922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=(n(36232),n(84661),n(87308),["components"]),s={title:"DID Messages",sidebar_label:"DID Messages",description:"Learn how IOTA Identity recreates and validates the state from its origin to the current version using Integration and Differentiation Chains.",image:"/img/Identity_icon.png",keywords:["Diff Chain","Differentiation Chain","Integration Chain","smart contracts","Chronicle","state","stateless"]},l=void 0,d={unversionedId:"concepts/advanced/did_messages",id:"concepts/advanced/did_messages",title:"DID Messages",description:"Learn how IOTA Identity recreates and validates the state from its origin to the current version using Integration and Differentiation Chains.",source:"@site/content/build/identity.rs/develop/documentation/docs/concepts/advanced/did_messages.mdx",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/did_messages",permalink:"/identity.rs/develop/concepts/advanced/did_messages",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/concepts/advanced/did_messages.mdx",tags:[],version:"current",frontMatter:{title:"DID Messages",sidebar_label:"DID Messages",description:"Learn how IOTA Identity recreates and validates the state from its origin to the current version using Integration and Differentiation Chains.",image:"/img/Identity_icon.png",keywords:["Diff Chain","Differentiation Chain","Integration Chain","smart contracts","Chronicle","state","stateless"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/develop/concepts/advanced/overview"},next:{title:"Storage Interface",permalink:"/identity.rs/develop/concepts/advanced/storage_interface"}},u={},c=[{value:"Valid DID Documents",id:"valid-did-documents",level:3},{value:"DID Messages",id:"did-messages",level:3}],h={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TODO: Explain the concept of DID Messages and how they can be used to optimize DID updates."),(0,r.kt)("h3",{id:"valid-did-documents"},"Valid DID Documents"),(0,r.kt)("p",null,"Most DID methods are implemented on a Distributed Ledger Technology (DLT), such as Bitcoin, Ethereum or IOTA. Most common DID implementation on DLTs are based on fit-for-purpose Blockchains that store the state of a DID Document in the ledger, or a general purpose Blockchain that utilize smart contracts to store the state. Updating a DID Document where the state is understood by the network is straightforward. The network can determine if an action is legal and if a cryptographic signature is provided correctly, as it understands the underlying data structure, and can update the state accordingly. The individual state updates, or transactions, can be forgotten."),(0,r.kt)("p",null,"The IOTA Tangle is unable to track, state, or understand the data structure. Storing the state is neither possible in the ledger, nor via a Smart contract (yet). Therefore, IOTA Identity has to recreate and validate the state from the origin of the Identity to the current version. The process involves querying all the relevant transactions from the Tangle, ordering them, filtering out the transactions that perform illegal actions or have an incorrect signature and then recreate state. As this requires the full history of the Identity, we recommend utilizing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/chronicle.rs"},"Chronicle"),", an IOTA permanode, which stores the entire history of the Tangle. Further research will be performed to reduce storage requirements for IOTA Identity based applications."),(0,r.kt)("h3",{id:"did-messages"},"DID Messages"),(0,r.kt)("p",null,"Due to this constant need for state recreating, unique performance improvements have been design and implemented for IOTA Identity. Most DID Documents will need few to no updates, however identities that sign a lot of Verifiable Credentials might update more frequently, as will be explained in the Verifiable Credentials section. To support higher frequency identity updates, we have introduced a unique solution called the \u201cIntegration Chain\u201d and the \u201cDifferentiation Chain\u201d (Diff Chain)."),(0,r.kt)("p",null,"The Integration Chain is a chain of transactions that contain full DID Documents. They are unrestricted in what they can add or remove from the DID Document. Every Integration Chain transaction points to a separate new Diff Chain. These Diff Chain transactions only list the changes to a DID Document and are therefore more compact. It is, however, restricted in rotating the signing key, making it fast and easy to validate the transaction."),(0,r.kt)("p",null,"Once a new Integration chain transaction is created, it will take all Diff Chain updates and compress them into a new DID Document, essentially combining them all into a single transaction. This reduces the amount of updates that need to be queried and validated tremendously. For example, lets assume every Diff chain contains 100 updates. Then validating a DID that has done 1050 updates, only requires the validation of 10 Integration Chain updates and 40 Diff Chain updates (The latest Diff Chain). We skipped out on 10 Diff Chains each containing 100 updates, and only validated the 10 Integration Chain updates and the last Diff Chain containing 40 updates. If we estimate every update to be on average 1 Kb, we only have to download 50 kb of information and validate it, which is significantly less than the otherwise 1.025 Mb of information."),(0,r.kt)("p",null,"The improved performance and ability to handle frequently updated DID Documents is especially beneficial for Verifiable Credential Revocation."),(0,r.kt)("p",null,"TODO: mention future revocation scheme replacement for MerkleKeyCollection."))}f.isMDXComponent=!0},84661:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),i=n(86010),r="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},36232:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),i=n(67294),r=n(86010),o=n(35074),s=n(74879),l=n(85425),d=n(51085),u="tabList__CuJ",c="tabItem_LNqP";function h(e){var t,n,o=e.lazy,h=e.block,f=e.defaultValue,m=e.values,p=e.groupId,v=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),D=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(D,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!D.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+D.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var I=(0,l.U)(),w=I.tabGroupChoices,k=I.setTabGroupChoices,T=(0,i.useState)(y),C=T[0],_=T[1],O=[],E=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var M=w[p];null!=M&&M!==C&&D.some((function(e){return e.value===M}))&&_(M)}var q=function(e){var t=e.currentTarget,n=O.indexOf(t),a=D[n].value;a!==C&&(E(t),_(a),null!=p&&k(p,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=O.indexOf(e.currentTarget)+1;n=null!=(a=O[i])?a:O[0];break;case"ArrowLeft":var r,o=O.indexOf(e.currentTarget)-1;n=null!=(r=O[o])?r:O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":h},v)},D.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:A,onFocus:q,onClick:q},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function f(e){var t=(0,o.Z)();return i.createElement(h,(0,a.Z)({key:String(t)},e))}}}]);