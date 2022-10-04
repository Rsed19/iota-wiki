"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[62379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(34259),o=n(18679);const s={keywords:["solo","testing","errors","member function","post","ctx","divide function","error message"],description:"Use the SoloContext to create full-blown tests for the dividend example smart contract.",image:"/img/logo/WASP_logo_dark.png"},l="Example Tests",d={unversionedId:"guide/wasm_vm/examples",id:"guide/wasm_vm/examples",title:"Example Tests",description:"Use the SoloContext to create full-blown tests for the dividend example smart contract.",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/examples.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/examples",permalink:"/next/smart-contracts/guide/wasm_vm/examples",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/examples.mdx",tags:[],version:"current",frontMatter:{keywords:["solo","testing","errors","member function","post","ctx","divide function","error message"],description:"Use the SoloContext to create full-blown tests for the dividend example smart contract.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Testing Smart Contracts",permalink:"/next/smart-contracts/guide/wasm_vm/test"},next:{title:"Colored Tokens and Time Locks",permalink:"/next/smart-contracts/guide/wasm_vm/timelock"}},c={},m=[],u={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"example-tests"},"Example Tests"),(0,r.kt)("p",null,"In the previous sections we showed how you can ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/call"},(0,r.kt)("inlineCode",{parentName:"a"},"call()"))," or\n",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/post"},(0,r.kt)("inlineCode",{parentName:"a"},"post()"))," smart contract function requests. We also created a few wrapper\nfunctions to simplify calling these functions even further. Now we will look at how to use\nthe SoloContext to create full-blown tests for the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," example smart contract."),(0,r.kt)("p",null,"Let's start with a simple test. We are going to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," function to add a valid\nnew member/factor combination to the member group."),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestAddMemberOk(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    dividendMember(ctx, member1, 100)\n    require.NoError(t, ctx.Err)\n}\n")))),(0,r.kt)("p",null,"The above test first deploys the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," smart contract to a new chain, and returns a\nSoloContext ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx"),". Then it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx")," to create a new SoloAgent ",(0,r.kt)("inlineCode",{parentName:"p"},"member1"),". When creating a\nSoloAgent a new Tangle address is created for that agent and int on-chain account is\npre-seeded with 10M base tokens so that it is ready to be used in tests. The SoloAgent can\nbe used whenever an address or agent ID needs to be provided, it can be used to sign a\nrequest to identify it as the sender, and it can be used to inspect the asset balances on\nits Tangle address and its on-chain account."),(0,r.kt)("p",null,"In this case, we simply create ",(0,r.kt)("inlineCode",{parentName:"p"},"member1"),", and pass it to the dividend contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"member"),"\nfunction, which will receive the address of ",(0,r.kt)("inlineCode",{parentName:"p"},"member1")," and a dispersal factor of 100.\nFinally, we check if ctx has received an error during the execution of the call. Remember\nthat the only way to pass an error from a WasmLib function call is through a ",(0,r.kt)("inlineCode",{parentName:"p"},"panic()"),"\ncall. The code that handles the actual call will intercept any ",(0,r.kt)("inlineCode",{parentName:"p"},"panic()")," that was raised,\nand return an error. The SoloContext saves this error for later inspection, because the\nfunction descriptor used in the call itself has no way of passing back this error."),(0,r.kt)("p",null,"The next two example tests each call the contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," function in the exact same\nway, but in both cases one required parameter is omitted. The idea is to test that the\nfunction properly panics by checking the ctx.Err value is not nil after the call. Finally,\nthe error message text is checked to see if it contains the expected error message."),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestAddMemberFailMissingAddress(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member := dividend.ScFuncs.Member(ctx)\n    member.Params.Factor().SetValue(100)\n    member.Func.Post()\n    require.Error(t, ctx.Err)\n    require.Contains(t, ctx.Err.Error(), "missing mandatory address")\n}\n\nfunc TestAddMemberFailMissingFactor(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    member := dividend.ScFuncs.Member(ctx)\n    member.Params.Address().SetValue(member1.ScAgentID().Address())\n    member.Func.Post()\n    require.Error(t, ctx.Err)\n    require.Contains(t, ctx.Err.Error(), "missing mandatory factor")\n}\n')))),(0,r.kt)("p",null,"Each test has to set up the chain/contract/context from scratch. We will often use a\nspecific setupTest() function to do all setup work that is shared by many tests."),(0,r.kt)("p",null,"We cannot use the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividendMember")," wrapper function in these two tests because of the\nmissing required function parameters. So we have simply copy/pasted the code, and removed\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Params")," proxy initialization lines that we wanted to be detected as missing."),(0,r.kt)("p",null,"Now let's see a more complex example:"),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestDivide1Member(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    bal := ctx.Balances(member1)\n\n    dividendMember(ctx, member1, 1000)\n    require.NoError(t, ctx.Err)\n\n    bal.Chain += ctx.GasFee\n    bal.Originator += ctx.StorageDeposit - ctx.GasFee\n    bal.VerifyBalances(t)\n\n    const dividendToDivide = 1*isc.Million + 1\n    dividendDivide(ctx, dividendToDivide)\n    require.NoError(t, ctx.Err)\n\n    bal.Chain += ctx.GasFee\n    bal.Originator -= ctx.GasFee\n    bal.Add(member1, dividendToDivide)\n    bal.VerifyBalances(t)\n}\n")))),(0,r.kt)("p",null,"The first half of the code is almost identical to our first test above. We set up the\ntest, create an agent, set the factor for that agent to 100, and verify that no error\noccurred. Notice how we additionally call ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.Balances()")," to make a snapshot of all the\noriginal asset balances including those of the agent."),(0,r.kt)("p",null,"Then in the next lines we update the asset balances with the changes we expect to happen\nbecause of the call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," function. And then we verify these changes against the\nactual asset balances by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"bal.VerifyBalances(t)"),"."),(0,r.kt)("p",null,"Next we transfer 1M + 1 tokens as part of the post request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide")," function. We\nsubsequently check that no error has occurred. Finally, we again modify the asset balances\nto reflect the expected changes and verify these changes against the actual asset\nbalances."),(0,r.kt)("p",null,"Now let's skip to the most complex test of all:"),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    func TestDivide3Members(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    bal := ctx.Balances(member1)\n\n    dividendMember(ctx, member1, 250)\n    require.NoError(t, ctx.Err)\n\n    bal.Chain += ctx.GasFee\n    bal.Originator += ctx.StorageDeposit - ctx.GasFee\n    bal.VerifyBalances(t)\n\n    member2 := ctx.NewSoloAgent()\n    bal = ctx.Balances(member1, member2)\n\n    dividendMember(ctx, member2, 500)\n    require.NoError(t, ctx.Err)\n\n    bal.Chain += ctx.GasFee\n    bal.Originator += ctx.StorageDeposit - ctx.GasFee\n    bal.VerifyBalances(t)\n\n    member3 := ctx.NewSoloAgent()\n    bal = ctx.Balances(member1, member2, member3)\n\n    dividendMember(ctx, member3, 750)\n    require.NoError(t, ctx.Err)\n\n    bal.Chain += ctx.GasFee\n    bal.Originator += ctx.StorageDeposit - ctx.GasFee\n    bal.VerifyBalances(t)\n\n    const dividendToDivide = 2*isc.Million - 1\n    dividendDivide(ctx, dividendToDivide)\n    require.NoError(t, ctx.Err)\n\n    remain := dividendToDivide - dividendToDivide*250/1500 - dividendToDivide*500/1500 - dividendToDivide*750/1500\n    bal.Chain += ctx.GasFee\n    bal.Originator += remain - ctx.GasFee\n    bal.Add(member1, dividendToDivide*250/1500)\n    bal.Add(member2, dividendToDivide*500/1500)\n    bal.Add(member3, dividendToDivide*750/1500)\n    bal.VerifyBalances(t)\n\n    const dividendToDivide2 = 2*isc.Million + 234\n    dividendDivide(ctx, dividendToDivide2)\n    require.NoError(t, ctx.Err)\n\n    remain = dividendToDivide2 - dividendToDivide2*250/1500 - dividendToDivide2*500/1500 - dividendToDivide2*750/1500\n    bal.Chain += ctx.GasFee\n    bal.Originator += remain - ctx.GasFee\n    bal.Add(member1, dividendToDivide2*250/1500)\n    bal.Add(member2, dividendToDivide2*500/1500)\n    bal.Add(member3, dividendToDivide2*750/1500)\n    bal.VerifyBalances(t)\n}\n")))),(0,r.kt)("p",null,"This function creates 3 agents, and associates factors of 25, 50, and 75 respectively to\nthem. That required 3 ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," requests, and we verify the expected balance changes after\neach request. Next the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide")," function is called, with 2M-1 tokens passed to it."),(0,r.kt)("p",null,"After this we verify that each agent has been distributed tokens according to its relative\nfactor. Those factors are 25/150th, 50/150th, and 75/150th, respectively. Note that we\ncannot transfer fractional tokens, so we truncate to the nearest integer and ultimately\nany remaining tokens are not transferred, but remain in the sender's account."),(0,r.kt)("p",null,"Finally, we call ",(0,r.kt)("inlineCode",{parentName:"p"},"divide")," again with 2M+234 tokens and again verify the asset balances\nafterwards."),(0,r.kt)("p",null,"Next we will show how to test ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/views"},"Views")," and/or ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/funcs"},"Funcs")," that return\na result. Note that even though Funcs are usually invoked through a ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/post"},(0,r.kt)("inlineCode",{parentName:"a"},"post()")),"\nrequest,  in which case any return values are inaccessible, they still can be invoked\nthrough a ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/call"},"call()"),"  from within another Func, in which these return values can\nbe used normally. Since solo executes ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/post"},(0,r.kt)("inlineCode",{parentName:"a"},"post()"))," requests synchronously, it is\npossible to have a Func return a result and test for certain result values."),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestGetFactor(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    dividendMember(ctx, member1, 250)\n    require.NoError(t, ctx.Err)\n\n    member2 := ctx.NewSoloAgent()\n    dividendMember(ctx, member2, 500)\n    require.NoError(t, ctx.Err)\n\n    member3 := ctx.NewSoloAgent()\n    dividendMember(ctx, member3, 750)\n    require.NoError(t, ctx.Err)\n\n    value := dividendGetFactor(ctx, member3)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, 750, value)\n\n    value = dividendGetFactor(ctx, member2)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, 500, value)\n\n    value = dividendGetFactor(ctx, member1)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, 250, value)\n}\n")))),(0,r.kt)("p",null,"Here we first set up the same 3 dispersion factors, and then we retrieve the dispersion\nfactors for each member in reverse order and verify their values."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/timelock"},"next section")," we will describe a few more helper member functions\nof the SoloContext."))}p.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),i=n(86010),o=n(51048),s=n(33609),l=n(1943),d=n(72957);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:n,block:o,defaultValue:u,values:p,groupId:h,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==x&&!f.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,l.U)(),[y,N]=(0,r.useState)(x),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=h){const e=w[h];null!=e&&e!==y&&f.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==y&&(E(t),N(a),null!=h&&k(h,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},b)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:S,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}}}]);