"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[36831],{23399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=n(36232),i=n(84661),c=["components"],l={keywords:["balances","color","smart contract function","address","members","incoming","tokens","incoming"],description:"There are two methods in the IOTA Smart Contracts function context that deal with token balances. The balances() method can be used to determine the current total balance per token color. The incoming() method can be used to determine the amounts of incoming tokens per token color that were sent with the request to call the smart contract function.",image:"/img/logo/WASP_logo_dark.png"},d="Token Transfers",u={unversionedId:"guide/schema/transfers",id:"guide/schema/transfers",title:"Token Transfers",description:"There are two methods in the IOTA Smart Contracts function context that deal with token balances. The balances() method can be used to determine the current total balance per token color. The incoming() method can be used to determine the amounts of incoming tokens per token color that were sent with the request to call the smart contract function.",source:"@site/content/build/wasp/production/documentation/docs/guide/schema/transfers.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/transfers",permalink:"/smart-contracts/guide/schema/transfers",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/schema/transfers.mdx",tags:[],version:"current",frontMatter:{keywords:["balances","color","smart contract function","address","members","incoming","tokens","incoming"],description:"There are two methods in the IOTA Smart Contracts function context that deal with token balances. The balances() method can be used to determine the current total balance per token color. The incoming() method can be used to determine the amounts of incoming tokens per token color that were sent with the request to call the smart contract function.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract Initialization",permalink:"/smart-contracts/guide/schema/init"},next:{title:"Function Descriptors",permalink:"/smart-contracts/guide/schema/funcdesc"}},m={},h=[],f={toc:h};function p(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-transfers"},"Token Transfers"),(0,o.kt)("p",null,"There are two methods in the IOTA Smart Contracts function context that deal with token balances. The\nfirst one is the ",(0,o.kt)("inlineCode",{parentName:"p"},"balances()")," method, which can be used to determine the current total\nbalance per token color that is governed by the smart contract. The second one is the\n",(0,o.kt)("inlineCode",{parentName:"p"},"incoming()")," method, which can be used to determine the amounts of incoming tokens per\ntoken color that were sent with the request to call the smart contract function."),(0,o.kt)("p",null,"Both methods provide access to zero or more balances of tokens, each for a different token\ncolor, through a special ",(0,o.kt)("inlineCode",{parentName:"p"},"ScBalances")," map proxy. Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"incoming()")," balances are\nprovided to the smart contract function as if they have already been deposited in the\nsmart contract's account. But, if any error occurs which causes the function to panic,\nthese incoming() tokens will be returned to where they came from, and it will be as if\nthey were never sent to the smart contract."),(0,o.kt)("p",null,"There is also a ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_to_address()")," method in the IOTA Smart Contracts function context that can\ntransfer tokens from the smart contract account to any Tangle address. The tokens to be\ntransferred are provided to the method through a special ",(0,o.kt)("inlineCode",{parentName:"p"},"ScTransfers")," map proxy. We will\nbe using the transfer_to_address() method in the dividend example to disperse the incoming\ntokens to the member addresses."),(0,o.kt)("p",null,"The idea behind the dividend smart contract is that once we have set up the list of\nmembers, consisting of address/factor pairs, and knowing the total sum of the factors, we\ncan automatically pay out a dividend to each of the members in the list according to the\nfactors involved. Whatever amount of tokens gets sent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," function will be\ndivided over the members in proportion based on their respective factors. For example, you\ncould set it up so that address A has a factor of 50, B has 30, and C has 20, for a total\nof 100 to divide. Then whenever an amount of tokens gets sent to the 'divide' function,\naddress A will receive 50/100th, address B will receive 30/100th, and address C will\nreceive 20/100th of that amount."),(0,o.kt)("p",null,"Here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," function:"),(0,o.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// 'divide' is a function that will take any iotas it receives and properly\n// disperse them to the addresses in the member list according to the dispersion\n// factors associated with these addresses.\n// Anyone can send iota tokens to this function and they will automatically be\n// divided over the member list. Note that this function does not deal with\n// fractions. It simply truncates the calculated amount to the nearest lower\n// integer and keeps any remaining iotas in its own account. They will be added\n// to any next round of tokens received prior to calculation of the new\n// dividend amounts.\nfunc funcDivide(ctx wasmlib.ScFuncContext, f *DivideContext) {\n    // Create an ScBalances map proxy to the account balances for this\n    // smart contract. Note that ScBalances wraps an ScImmutableMap of\n    // token color/amount combinations in a simpler to use interface.\n    var balances wasmlib.ScBalances = ctx.Balances()\n\n    // Retrieve the amount of plain iota tokens from the account balance\n    var amount int64 = balances.Balance(wasmlib.IOTA)\n\n    // Retrieve the pre-calculated totalFactor value from the state storage.\n    var totalFactor int64 = f.State.TotalFactor().Value()\n\n    // Get the proxy to the 'members' map in the state storage.\n    var members MapAddressToMutableInt64 = f.State.Members()\n\n    // Get the proxy to the 'memberList' array in the state storage.\n    var memberList ArrayOfMutableAddress = f.State.MemberList()\n\n    // Determine the current length of the memberList array.\n    var size int32 = memberList.Length()\n\n    // Loop through all indexes of the memberList array.\n    for i := int32(0); i < size; i++ {\n        // Retrieve the next indexed address from the memberList array.\n        var address wasmlib.ScAddress = memberList.GetAddress(i).Value()\n\n        // Retrieve the factor associated with the address from the members map.\n        var factor int64 = members.GetInt64(address).Value()\n\n        // Calculate the fair share of iotas to disperse to this member based on the\n        // factor we just retrieved. Note that the result will been truncated.\n        var share int64 = amount * factor / totalFactor\n\n        // Is there anything to disperse to this member?\n        if share > 0 {\n            // Yes, so let's set up an ScTransfers map proxy that transfers the\n            // calculated amount of iotas. Note that ScTransfers wraps an\n            // ScMutableMap of token color/amount combinations in a simpler to use\n            // interface. The constructor we use here creates and initializes a\n            // single token color transfer in a single statement. The actual color\n            // and amount values passed in will be stored in a new map on the host.\n            var transfers wasmlib.ScTransfers = wasmlib.NewScTransferIotas(share)\n\n            // Perform the actual transfer of tokens from the smart contract to the\n            // member address. The transfer_to_address() method receives the address\n            // value and the proxy to the new transfers map on the host, and will\n            // call the corresponding host sandbox function with these values.\n            ctx.TransferToAddress(address, transfers)\n        }\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// 'divide' is a function that will take any iotas it receives and properly\n// disperse them to the addresses in the member list according to the dispersion\n// factors associated with these addresses.\n// Anyone can send iota tokens to this function and they will automatically be\n// divided over the member list. Note that this function does not deal with\n// fractions. It simply truncates the calculated amount to the nearest lower\n// integer and keeps any remaining iotas in its own account. They will be added\n// to any next round of tokens received prior to calculation of the new\n// dividend amounts.\npub fn func_divide(ctx: &ScFuncContext, f: &DivideContext) {\n\n    // Create an ScBalances map proxy to the account balances for this\n    // smart contract. Note that ScBalances wraps an ScImmutableMap of\n    // token color/amount combinations in a simpler to use interface.\n    let balances: ScBalances = ctx.balances();\n\n    // Retrieve the amount of plain iota tokens from the account balance.\n    let amount: i64 = balances.balance(&ScColor::IOTA);\n\n    // Retrieve the pre-calculated totalFactor value from the state storage.\n    let total_factor: i64 = f.state.total_factor().value();\n\n    // Get the proxy to the 'members' map in the state storage.\n    let members: MapAddressToMutableInt64 = f.state.members();\n\n    // Get the proxy to the 'memberList' array in the state storage.\n    let member_list: ArrayOfMutableAddress = f.state.member_list();\n\n    // Determine the current length of the memberList array.\n    let size: i32 = member_list.length();\n\n    // Loop through all indexes of the memberList array.\n    for i in 0..size {\n        // Retrieve the next indexed address from the memberList array.\n        let address: ScAddress = member_list.get_address(i).value();\n\n        // Retrieve the factor associated with the address from the members map.\n        let factor: i64 = members.get_int64(&address).value();\n\n        // Calculate the fair share of iotas to disperse to this member based on the\n        // factor we just retrieved. Note that the result will be truncated.\n        let share: i64 = amount * factor / total_factor;\n\n        // Is there anything to disperse to this member?\n        if share > 0 {\n            // Yes, so let's set up an ScTransfers map proxy that transfers the\n            // calculated amount of iotas. Note that ScTransfers wraps an\n            // ScMutableMap of token color/amount combinations in a simpler to use\n            // interface. The constructor we use here creates and initializes a\n            // single token color transfer in a single statement. The actual color\n            // and amount values passed in will be stored in a new map on the host.\n            let transfers: ScTransfers = ScTransfers::iotas(share);\n\n            // Perform the actual transfer of tokens from the smart contract to the\n            // member address. The transfer_to_address() method receives the address\n            // value and the proxy to the new transfers map on the host, and will\n            // call the corresponding host sandbox function with these values.\n            ctx.transfer_to_address(&address, transfers);\n        }\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// 'divide' is a function that will take any iotas it receives and properly\n// disperse them to the addresses in the member list according to the dispersion\n// factors associated with these addresses.\n// Anyone can send iota tokens to this function and they will automatically be\n// divided over the member list. Note that this function does not deal with\n// fractions. It simply truncates the calculated amount to the nearest lower\n// integer and keeps any remaining iotas in its own account. They will be added\n// to any next round of tokens received prior to calculation of the new\n// dividend amounts.\nexport function funcDivide(ctx: wasmlib.ScFuncContext, f: sc.DivideContext): void {\n\n    // Create an ScBalances map proxy to the account balances for this\n    // smart contract. Note that ScBalances wraps an ScImmutableMap of\n    // token color/amount combinations in a simpler to use interface.\n    let balances: wasmlib.ScBalances = ctx.balances();\n\n    // Retrieve the amount of plain iota tokens from the account balance.\n    let amount: i64 = balances.balance(wasmlib.ScColor.IOTA);\n\n    // Retrieve the pre-calculated totalFactor value from the state storage.\n    let totalFactor: i64 = f.state.totalFactor().value();\n\n    // Get the proxy to the 'members' map in the state storage.\n    let members: sc.MapAddressToMutableInt64 = f.state.members();\n\n    // Get the proxy to the 'memberList' array in the state storage.\n    let memberList: sc.ArrayOfMutableAddress = f.state.memberList();\n\n    // Determine the current length of the memberList array.\n    let size: i32 = memberList.length();\n\n    // Loop through all indexes of the memberList array.\n    for (let i = 0; i < size; i++) {\n        // Retrieve the next indexed address from the memberList array.\n        let address: wasmlib.ScAddress = memberList.getAddress(i).value();\n\n        // Retrieve the factor associated with the address from the members map.\n        let factor: i64 = members.getInt64(address).value();\n\n        // Calculate the fair share of iotas to disperse to this member based on the\n        // factor we just retrieved. Note that the result will be truncated.\n        let share: i64 = amount * factor / totalFactor;\n\n        // Is there anything to disperse to this member?\n        if (share > 0) {\n            // Yes, so let's set up an ScTransfers map proxy that transfers the\n            // calculated amount of iotas. Note that ScTransfers wraps an\n            // ScMutableMap of token color/amount combinations in a simpler to use\n            // interface. The constructor we use here creates and initializes a\n            // single token color transfer in a single statement. The actual color\n            // and amount values passed in will be stored in a new map on the host.\n            let transfers: wasmlib.ScTransfers = wasmlib.ScTransfers.iotas(share);\n\n            // Perform the actual transfer of tokens from the smart contract to the\n            // member address. The transferToAddress() method receives the address\n            // value and the proxy to the new transfers map on the host, and will\n            // call the corresponding host sandbox function with these values.\n            ctx.transferToAddress(address, transfers);\n        }\n    }\n}\n")))),(0,o.kt)("p",null,"In the next section we will introduce ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/funcdesc"},"function descriptors")," that can be\nused to initiate smart contract functions."))}p.isMDXComponent=!0},84661:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},36232:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),o=n(86010),s=n(35074),i=n(74879),c=n(85425),l=n(51085),d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n,s=e.lazy,m=e.block,h=e.defaultValue,f=e.values,p=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(w,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!w.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.U)(),T=k.tabGroupChoices,x=k.setTabGroupChoices,S=(0,r.useState)(y),N=S[0],C=S[1],O=[],I=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var A=T[p];null!=A&&A!==N&&w.some((function(e){return e.value===A}))&&C(A)}var _=function(e){var t=e.currentTarget,n=O.indexOf(t),a=w[n].value;a!==N&&(I(t),C(a),null!=p&&x(p,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,s=O.indexOf(e.currentTarget)-1;n=null!=(o=O[s])?o:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},w.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:L,onFocus:_,onClick:_},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function h(e){var t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,f=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);