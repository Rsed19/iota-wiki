"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[23585],{68929:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(87462),l=a(63366),c=(a(67294),a(3905)),r=a(76018),o=a(54501),u=["components"],s={description:"The Accounts contract provides the balance, totalAssets and accounts views.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","view","account","balances","Rust","Solo","how to"]},i="View Account Balances",p={unversionedId:"guide/core_concepts/accounts/view-account-balances",id:"guide/core_concepts/accounts/view-account-balances",title:"View Account Balances",description:"The Accounts contract provides the balance, totalAssets and accounts views.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/view-account-balances.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/view-account-balances",permalink:"/smart-contracts/guide/core_concepts/accounts/view-account-balances",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/view-account-balances.mdx",tags:[],version:"current",frontMatter:{description:"The Accounts contract provides the balance, totalAssets and accounts views.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","view","account","balances","Rust","Solo","how to"]},sidebar:"tutorialSidebar",previous:{title:"How to Withdraw From a Chain",permalink:"/smart-contracts/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"},next:{title:"The Common Account",permalink:"/smart-contracts/guide/core_concepts/accounts/the-common-account"}},m={},d=[{value:"balance",id:"balance",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"totalAssets",id:"totalassets",level:2},{value:"Returns",id:"returns-1",level:3},{value:"accounts",id:"accounts",level:2},{value:"Returns",id:"returns-2",level:3},{value:"getAccountNonce",id:"getaccountnonce",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-3",level:4}],v={toc:d};function b(e){var t=e.components,a=(0,l.Z)(e,u);return(0,c.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"view-account-balances"},"View Account Balances"),(0,c.kt)("p",null,"The Accounts contract provides the following views:"),(0,c.kt)("h2",{id:"balance"},"balance"),(0,c.kt)("p",null,"Get the account balance of a specific account."),(0,c.kt)("h3",{id:"parameters"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"ParamAgentID"),": account's AgentID.")),(0,c.kt)("h3",{id:"returns"},"Returns"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"A map of ","[token_color]"," -> ","[amount]",".")),(0,c.kt)("h3",{id:"examples"},"Examples"),(0,c.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,c.kt)(o.Z,{value:"solo",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"balances := chain.GetAccountBalance(agentID)\n// require.NoError(t, ctx.Err) // happens in GetAccountBalance() wrapper function\n"))),(0,c.kt)(o.Z,{value:"soloctx",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"b := coreaccounts.ScFuncs.Balance(ctx)\nb.Params.AgentID().SetValue(agentID)\nb.Func.Call()\nrequire.NoError(t, ctx.Err)\nbalances := b.Results.Balances()\n"))),(0,c.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},"let b = coreaccounts::ScFuncs::balance(ctx);\nb.params.agent_id().set_value(&agentID);\nb.func.call();\nlet balances = b.results.balances();\n"))),(0,c.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"b := coreaccounts.ScFuncs.Balance(ctx)\nb.Params.AgentID().SetValue(agentID)\nb.Func.Call()\nbalances := b.Results.Balances()\n")))),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"totalassets"},"totalAssets"),(0,c.kt)("p",null,"Get the total colored balances controlled by the chain."),(0,c.kt)("h3",{id:"returns-1"},"Returns"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"A map of ","[token_color]"," -> ","[amount]"," .")),(0,c.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,c.kt)(o.Z,{value:"solo",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"balances:= chain.GetTotalAssets()\n"))),(0,c.kt)(o.Z,{value:"soloctx",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"b := coreaccounts.ScFuncs.TotalAssets(ctx)\nb.Func.Call()\nrequire.NoError(t, ctx.Err)\nbalances := b.Results.Balances()\n"))),(0,c.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},"let b = coreaccounts::ScFuncs::total_assets(ctx);\nb.func.call();\nlet balances = b.results.balances();\n"))),(0,c.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"b := coreaccounts.ScFuncs.TotalAssets(ctx)\nb.Func.Call()\nbalances := b.Results.Balances()\n")))),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"accounts"},"accounts"),(0,c.kt)("p",null,"Get a list of all accounts existing on the chain."),(0,c.kt)("h3",{id:"returns-2"},"Returns"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"A list of accounts (AgentIDs).")),(0,c.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,c.kt)(o.Z,{value:"solo",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"accounts := chain.GetAccounts()\n"))),(0,c.kt)(o.Z,{value:"soloctx",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"a := coreaccounts.ScFuncs.Accounts(ctx)\na.Func.Call()\nrequire.NoError(t, ctx.Err)\naccounts := a.Results.Agents()\n"))),(0,c.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},"let a = coreaccounts::ScFuncs::accounts(ctx);\na.func.call();\nlet accounts = a.results.agents();\n"))),(0,c.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"a := coreaccounts.ScFuncs.Accounts(ctx)\na.Func.Call()\naccounts := a.Results.Agents()\n")))),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"getaccountnonce"},"getAccountNonce"),(0,c.kt)("p",null,"Get the current nonce for a given account."),(0,c.kt)("h3",{id:"parameters-1"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"ParamAgentID"),": Account's AgentID.")),(0,c.kt)("h4",{id:"returns-3"},"Returns"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"The current nonce.")),(0,c.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,c.kt)(o.Z,{value:"solo",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"ret, err := chain.CallView(accounts.Contract.Name, accounts.FuncGetAccountNonce.Name,\n    accounts.ParamAgentID, iscp.NewAgentID(address, 0),\n)\nrequire.NoError(t, err)\nnonce, _, err := codec.DecodeUint64(ret.MustGet(accounts.ParamAccountNonce)\n"))),(0,c.kt)(o.Z,{value:"soloctx",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"n := coreaccounts.ScFuncs.GetAccountNonce(ctx)\nn.Params.AgentID().SetValue(agentID)\nn.Func.Call()\nrequire.NoError(t, ctx.Err)\nnonce := n.Results.AccountNonce().Value()\n"))),(0,c.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},"let n = coreaccounts::ScFuncs::get_account_nonce(ctx);\nn.params.agent_id().set_value(&agentID);\nn.func.call();\nlet nonce = n.results.account_nonce().value();\n"))),(0,c.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"n := coreaccounts.ScFuncs.GetAccountNonce(ctx)\nn.Params.AgentID().SetValue(agentID)\nn.Func.Call()\nnonce := n.Results.AccountNonce().Value()\n")))))}b.isMDXComponent=!0},54501:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294),l=a(86010),c="tabItem_OmH5";function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(c,r),hidden:a},t)}},76018:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),l=a(67294),c=a(5730),r=a(20636),o=a(76602),u=a(63735),s=a(86010),i="tabList_uSqn",p="tabItem_LplD";function m(e){var t,a,c,m=e.lazy,d=e.block,v=e.defaultValue,b=e.values,g=e.groupId,f=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,r.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===v?v:null!=(t=null!=v?v:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(c=k[0])?void 0:c.props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,o.U)(),x=T.tabGroupChoices,w=T.setTabGroupChoices,A=(0,l.useState)(N),S=A[0],I=A[1],E=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var _=x[g];null!=_&&_!==S&&h.some((function(e){return e.value===_}))&&I(_)}var Z=function(e){var t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==S&&(D(t),I(n),null!=g&&w(g,n))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var l=E.indexOf(e.currentTarget)-1;a=E[l]||E[E.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",i)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},h.map((function(e){var t=e.value,a=e.label,c=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return E.push(e)},onKeyDown:O,onFocus:Z,onClick:Z},c,{className:(0,s.Z)("tabs__item",p,null==c?void 0:c.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),m?(0,l.cloneElement)(k.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function d(e){var t=(0,c.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return d}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,c=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=l,v=m["".concat(u,".").concat(d)]||m[d]||p[d]||c;return a?n.createElement(v,r(r({ref:t},i),{},{components:a})):n.createElement(v,r({ref:t},i))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=a.length,r=new Array(c);r[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<c;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);