"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[68987],{88208:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=a(36232),i=a(84661),c=["components"],l={keywords:["results","Smart Contracts function context","view function","retrieve state"],description:"Views are smart contract functions that only allow you to retrieve state information about the smart contract. They have a special, limited IOTA Smart Contracts function context that does not allow them to change the smart contract state.",image:"/img/logo/WASP_logo_dark.png"},u="View-Only Functions",m={unversionedId:"guide/schema/views",id:"guide/schema/views",title:"View-Only Functions",description:"Views are smart contract functions that only allow you to retrieve state information about the smart contract. They have a special, limited IOTA Smart Contracts function context that does not allow them to change the smart contract state.",source:"@site/content/build/wasp/production/documentation/docs/guide/schema/views.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/views",permalink:"/smart-contracts/guide/schema/views",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/schema/views.mdx",tags:[],version:"current",frontMatter:{keywords:["results","Smart Contracts function context","view function","retrieve state"],description:"Views are smart contract functions that only allow you to retrieve state information about the smart contract. They have a special, limited IOTA Smart Contracts function context that does not allow them to change the smart contract state.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Thunk Functions",permalink:"/smart-contracts/guide/schema/thunks"},next:{title:"Smart Contract Initialization",permalink:"/smart-contracts/guide/schema/init"}},d={},p=[],h={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"view-only-functions"},"View-Only Functions"),(0,o.kt)("p",null,"View-only functions, or Views for short, are smart contract functions that only allow you\nto ",(0,o.kt)("em",{parentName:"p"},"retrieve")," state information about the smart contract. They have a special, limited\nIOTA Smart Contracts function context that does not allow access to functionality that could result in\nchanges to the smart contract state. This means that all access to the state storage will\nbe through immutable proxies. It also means that they cannot receive or transfer tokens,\nbecause changes to the smart contract account are by definition state changes as well."),(0,o.kt)("p",null,"Views are allowed to call other views on the same chain, but they cannot call any non-view\nsmart contract function, nor can they post cross-chain requests."),(0,o.kt)("p",null,"View functions will always return some data to their caller. It would be silly not to\nreturn data from a View because by definition it cannot have any other side effects that\nshow up elsewhere."),(0,o.kt)("p",null,"For demonstration purposes we provided a View function with the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," smart contract,\ncalled 'getFactor':"),(0,o.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// 'getFactor' is a simple View function. It will retrieve the factor\n// associated with the (mandatory) address parameter it was provided with.\nfunc viewGetFactor(ctx wasmlib.ScViewContext, f *GetFactorContext) {\n    // Since we are sure that the 'address' parameter actually exists we can\n    // retrieve its actual value into an ScAddress value type.\n    var address wasmlib.ScAddress = f.Params.Address().Value()\n\n    // Create an ScImmutableMap proxy to the 'members' map in the state storage.\n    // Note that for views this is an *immutable* map as opposed to the *mutable*\n    // map we can access from the *mutable* state that gets passed to funcs.\n    var members MapAddressToImmutableInt64 = f.State.Members()\n\n    // Retrieve the factor associated with the address parameter.\n    var factor int64 = members.GetInt64(address).Value()\n\n    // Set the factor in the results map of the function context.\n    // The contents of this results map is returned to the caller of the function.\n    f.Results.Factor().SetValue(factor)\n}\n"))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// 'getFactor' is a simple View function. It will retrieve the factor\n// associated with the (mandatory) address parameter it was provided with.\npub fn view_get_factor(_ctx: &ScViewContext, f: &GetFactorContext) {\n\n    // Since we are sure that the 'address' parameter actually exists we can\n    // retrieve its actual value into an ScAddress value type.\n    let address: ScAddress = f.params.address().value();\n\n    // Create an ScImmutableMap proxy to the 'members' map in the state storage.\n    // Note that for views this is an *immutable* map as opposed to the *mutable*\n    // map we can access from the *mutable* state that gets passed to funcs.\n    let members: MapAddressToImmutableInt64 = f.state.members();\n\n    // Retrieve the factor associated with the address parameter.\n    let factor: i64 = members.get_int64(&address).value();\n\n    // Set the factor in the results map of the function context.\n    // The contents of this results map is returned to the caller of the function.\n    f.results.factor().set_value(factor);\n}\n"))),(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// 'getFactor' is a simple View function. It will retrieve the factor\n// associated with the (mandatory) address parameter it was provided with.\nexport function viewGetFactor(ctx: wasmlib.ScViewContext, f: sc.GetFactorContext): void {\n\n    // Since we are sure that the 'address' parameter actually exists we can\n    // retrieve its actual value into an ScAddress value type.\n    let address: wasmlib.ScAddress = f.params.address().value();\n\n    // Create an ScImmutableMap proxy to the 'members' map in the state storage.\n    // Note that for views this is an *immutable* map as opposed to the *mutable*\n    // map we can access from the *mutable* state that gets passed to funcs.\n    let members: sc.MapAddressToImmutableInt64 = f.state.members();\n\n    // Retrieve the factor associated with the address parameter.\n    let factor: i64 = members.getInt64(address).value();\n\n    // Set the factor in the results map of the function context.\n    // The contents of this results map is returned to the caller of the function.\n    f.results.factor().setValue(factor);\n}\n")))),(0,o.kt)("p",null,"Return values are passed to the caller through the predefined ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," map associated\nwith the IOTA Smart Contracts function context. Again, this works the same way as for Funcs, although\nFuncs do not necessarily return values to the caller. The schema tool will set up a\nfunction-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," structure with proxies to the result fields in this map."),(0,o.kt)("p",null,"In the next section we will look at ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/init"},"smart contract initialization"),"."))}f.isMDXComponent=!0},84661:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),o="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},36232:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(87462),r=a(67294),o=a(86010),s=a(35074),i=a(74879),c=a(85425),l=a(51085),u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,a,s=e.lazy,d=e.block,p=e.defaultValue,h=e.values,f=e.groupId,v=e.className,w=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:w.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=w.find((function(e){return e.props.default})))?void 0:a.props.value)?t:w[0].props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,c.U)(),x=k.tabGroupChoices,T=k.setTabGroupChoices,S=(0,r.useState)(g),O=S[0],I=S[1],C=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var V=x[f];null!=V&&V!==O&&b.some((function(e){return e.value===V}))&&I(V)}var E=function(e){var t=e.currentTarget,a=C.indexOf(t),n=b[a].value;n!==O&&(N(t),I(n),null!=f&&T(f,String(n)))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=C.indexOf(e.currentTarget)+1;a=null!=(n=C[r])?n:C[0];break;case"ArrowLeft":var o,s=C.indexOf(e.currentTarget)-1;a=null!=(o=C[s])?o:C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},b.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return C.push(e)},onKeyDown:A,onFocus:E,onClick:E},s,{className:(0,o.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(w.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(a),p=r,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);