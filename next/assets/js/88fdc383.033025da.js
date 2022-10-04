"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10014],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||s;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var m=2;m<s;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),s=a(34259),o=a(18679);const i={keywords:["params","parameters","field definition","field type","optional","schema tool","structure","immutable"],description:"The optional params subsection contains field definitions for each of the parameters that a function takes.",image:"/img/logo/WASP_logo_dark.png"},l="Function Parameters",m={unversionedId:"guide/wasm_vm/params",id:"guide/wasm_vm/params",title:"Function Parameters",description:"The optional params subsection contains field definitions for each of the parameters that a function takes.",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/params.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/params",permalink:"/next/smart-contracts/guide/wasm_vm/params",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/params.mdx",tags:[],version:"current",frontMatter:{keywords:["params","parameters","field definition","field type","optional","schema tool","structure","immutable"],description:"The optional params subsection contains field definitions for each of the parameters that a function takes.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Limiting Access",permalink:"/next/smart-contracts/guide/wasm_vm/access"},next:{title:"Function Results",permalink:"/next/smart-contracts/guide/wasm_vm/results"}},u={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"function-parameters"},"Function Parameters"),(0,n.kt)("p",null,"The optional ",(0,n.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/params"},(0,n.kt)("inlineCode",{parentName:"a"},"params"))," subsection contains field definitions for each of the\nparameters that a function takes. The layout of the field definitions is identical to the\n",(0,n.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/state"},(0,n.kt)("inlineCode",{parentName:"a"},"state"))," subsection field definitions with one addition, the field type can be\nfollowed by a question mark to indicate that the parameter is optional."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," will automatically generate an immutable structure with\nmember variables for proxies to each parameter variable in the ",(0,n.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/params"},"Params")," map.\nIt will also generate code to check the presence of each non-optional parameter, and it\nwill also verify the parameter's data type. This checking is done before the function is\ncalled. The user will be able to immediately start using the parameter proxy through the\nstructure that is passed to the function."),(0,n.kt)("p",null,"When this subsection is empty or completely omitted, no structure will be generated or\npassed to the function."),(0,n.kt)("p",null,"For example, here is the structure generated for the immutable ",(0,n.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/params"},"Params")," for\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"member")," function:"),(0,n.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type ImmutableMemberParams struct {\n    proxy wasmtypes.Proxy\n}\n\n// address of dividend recipient\nfunc (s ImmutableMemberParams) Address() wasmtypes.ScImmutableAddress {\n    return wasmtypes.NewScImmutableAddress(s.proxy.Root(ParamAddress))\n}\n\n// relative division factor\nfunc (s ImmutableMemberParams) Factor() wasmtypes.ScImmutableUint64 {\n    return wasmtypes.NewScImmutableUint64(s.proxy.Root(ParamFactor))\n}\n"))),(0,n.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone)]\npub struct ImmutableMemberParams {\n    pub(crate) proxy: Proxy,\n}\n\nimpl ImmutableMemberParams {\n    // address of dividend recipient\n    pub fn address(&self) -> ScImmutableAddress {\n        ScImmutableAddress::new(self.proxy.root(PARAM_ADDRESS))\n    }\n\n    // relative division factor\n    pub fn factor(&self) -> ScImmutableUint64 {\n        ScImmutableUint64::new(self.proxy.root(PARAM_FACTOR))\n    }\n}\n"))),(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export class ImmutableMemberParams extends wasmtypes.ScProxy {\n    // address of dividend recipient\n    address(): wasmtypes.ScImmutableAddress {\n        return new wasmtypes.ScImmutableAddress(this.proxy.root(sc.ParamAddress));\n    }\n\n    // relative division factor\n    factor(): wasmtypes.ScImmutableUint64 {\n        return new wasmtypes.ScImmutableUint64(this.proxy.root(sc.ParamFactor));\n    }\n}\n")))),(0,n.kt)("p",null,"Note that the ",(0,n.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," will also generate a mutable version of the\nstructure, suitable for providing the parameters when calling this smart contract function\nfrom any ",(0,n.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/context"},"Call Context"),"."),(0,n.kt)("p",null,"In the next section, we will look at the ",(0,n.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/results"},(0,n.kt)("inlineCode",{parentName:"a"},"results"))," subsection."))}d.isMDXComponent=!0},18679:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,o),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),s=a(86010),o=a(51048),i=a(33609),l=a(1943),m=a(72957);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:a,block:o,defaultValue:p,values:d,groupId:f,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,l.U)(),[x,T]=(0,n.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:N}=(0,m.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&v.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,a=P.indexOf(t),r=v[a].value;r!==x&&(N(t),T(r),null!=f&&k(f,String(r)))},_=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;a=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=P[t]??P[P.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},b)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>P.push(e),onKeyDown:_,onFocus:I,onClick:I},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,n.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}}}]);