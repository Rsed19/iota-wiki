"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28597],{69694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=n(36232),l=n(84661),u=["components"],s={description:"The common account is controlled by the chain owner, and is used to store funds collected by fees, invalid contracts or sent to the L1 chain address.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","deposit","transfer","chain","Rust","Solo","how to"]},i="The Common Account",d={unversionedId:"guide/core_concepts/accounts/the-common-account",id:"guide/core_concepts/accounts/the-common-account",title:"The Common Account",description:"The common account is controlled by the chain owner, and is used to store funds collected by fees, invalid contracts or sent to the L1 chain address.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/the-common-account.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/the-common-account",permalink:"/smart-contracts/guide/core_concepts/accounts/the-common-account",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/the-common-account.mdx",tags:[],version:"current",frontMatter:{description:"The common account is controlled by the chain owner, and is used to store funds collected by fees, invalid contracts or sent to the L1 chain address.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","deposit","transfer","chain","Rust","Solo","how to"]},sidebar:"tutorialSidebar",previous:{title:"View Account Balances",permalink:"/smart-contracts/guide/core_concepts/accounts/view-account-balances"},next:{title:"Testing Smart Contracts with Solo",permalink:"/smart-contracts/guide/solo/what-is-solo"}},m={},p=[{value:"Parameters",id:"parameters",level:2}],f={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-common-account"},"The Common Account"),(0,a.kt)("p",null,"The common account is controlled by the chain owner (defined in the chain root contract)."),(0,a.kt)("p",null,"This account is used to store funds collected by fees, or sent to the chain L1 address, or to invalid contracts. (this way the funds are not permanently lost)"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ParamWithdrawAmount")," - the amount to harvest (defaults to 0, which means all available funds)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ParamWithdrawColor")," - color of the tokens to harvest (defaults to normal iotas)")),(0,a.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"solo",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"req := solo.NewCallParams(accounts.Contract.Name, accounts.FuncHarvest.Name)\n_, err := chain.PostRequestSync(req.WithIotas(1), wallet)\nrequire.NoError(t, err)\n"))),(0,a.kt)(l.Z,{value:"soloctx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"w := coreaccounts.ScFuncs.Harvest(ctx.Sign(wallet))\nw.Func.TransferIotas(1).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,a.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let h = coreaccounts::ScFuncs::harvest(ctx);\nh.func.transfer_iotas(1).post_to_chain(chainID);\n"))),(0,a.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"w := coreaccounts.ScFuncs.Harvest(ctx)\nw.Func.TransferIotas(1).PostToChain(chainID)\n")))))}h.isMDXComponent=!0},84661:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),o=n(86010),a="tabItem_Ymn6";function c(e){var t=e.children,n=e.hidden,c=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,c),hidden:n},t)}},36232:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),o=n(67294),a=n(86010),c=n(35074),l=n(74879),u=n(85425),s=n(51085),i="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,c=e.lazy,m=e.block,p=e.defaultValue,f=e.values,h=e.groupId,v=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,u.U)(),T=k.tabGroupChoices,N=k.setTabGroupChoices,O=(0,o.useState)(w),x=O[0],E=O[1],_=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=T[h];null!=S&&S!==x&&g.some((function(e){return e.value===S}))&&E(S)}var C=function(e){var t=e.currentTarget,n=_.indexOf(t),r=g[n].value;r!==x&&(P(t),E(r),null!=h&&N(h,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=_.indexOf(e.currentTarget)+1;n=null!=(r=_[o])?r:_[0];break;case"ArrowLeft":var a,c=_.indexOf(e.currentTarget)-1;n=null!=(a=_[c])?a:_[_.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",i)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},v)},g.map((function(e){var t=e.value,n=e.label,c=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return _.push(e)},onKeyDown:I,onFocus:C,onClick:C},c,{className:(0,a.Z)("tabs__item",d,null==c?void 0:c.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,c.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);