"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35352],{99599:(e,a,n)=>{n.d(a,{ZP:()=>l});var t=n(87462),o=(n(67294),n(3905));const c={toc:[]};function l(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Online Faucet",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can request test funds from the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer Testnet Faucet"),".")))}l.isMDXComponent=!0},529:(e,a,n)=>{n.d(a,{ZP:()=>l});var t=n(87462),o=(n(67294),n(3905));const c={toc:[]};function l(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}l.isMDXComponent=!0},46853:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>I,contentTitle:()=>Z,default:()=>M,frontMatter:()=>N,metadata:()=>D,toc:()=>A});var t=n(87462),o=(n(67294),n(3905)),c=n(34259),l=n(18679),s=n(69319);const r={toc:[]};function d(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},r,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example gets the balance for an account\n */\n\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n        const account = await manager.getAccount('Alice');\n        const addressObject = await account.addresses();\n        console.log('Addresses before:', addressObject);\n\n        // Always sync before calling getBalance()\n        const synced = await account.sync();\n        console.log('Syncing... - ', synced);\n\n        console.log('Available balance', await account.getBalance());\n\n        // Use the Faucet to send testnet tokens to your address:\n        console.log(\"Fill your address with the Faucet:  https://faucet.testnet.shimmer.network\")\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 3-check-balance.js"))}d.isMDXComponent=!0;const i={toc:[]};function u(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},i,n,{components:a,mdxType:"MDXLayout"}))}u.isMDXComponent=!0;const p={toc:[]};function m(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_wallet import IotaWallet\n\n# This example checks the balance of an account.\n\nwallet = IotaWallet('./alice-database')\n\naccount = wallet.get_account('Alice')\n\n# Sync account with the node\nresponse = account.sync_account()\nprint(f'Synced: {response}')\n\n# Just calculate the balance with the known state\nbalance = account.get_balance()\nprint(f'Balance: {balance}')\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 2-check-balance.py"))}m.isMDXComponent=!0;const b={toc:[]};function f(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},b,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Synced: {\n  'baseCoin': {\n    'total': '3490057203',\n    'available': '3490057203'\n  },\n  'requiredStorageDeposit': '98250300',\n  'nativeTokens': [\n    {\n      'tokenId': '0x08b83d49922e341d2cb45159707cfafdc9dc8fdb9d119543480dbaa5773eed8c4a0100000000',\n      'total': '0x64',\n      'available': '0x64'\n    }\n  ],\n  'nfts': [\n    '0xceae643ff7c112a3adce8f55f7953ba0707ade21256a7a09068c0b47f7c62c5b',\n    '0x1e808b7c6e603aaeb5f718881a74fedae72981ac7d5f0294eb561cad0e653566',\n    '0x77133189021f50d8d66e0678e553af9f46a832a24239653d3555edb8dc859e1f',\n    '0x17f97185f80fa56eab974de6b7bbb80fa812d4e8e37090d166a0a41da129cebc',\n    '0x1b670afba8d59a445cbaf167f1fda05879362e3ea034f5c4a0979fbeb5a3964b',\n    '0x3f0e11e9d9f48a57d0fba43d7d1158ee673cb8055f80a5ce45ad174c962c0d8a',\n    '0xdc8be91d779aac048aa9001ab99ecf12cf62a4701185a95f6206a1a201bfbe7c'\n  ],\n  'aliases': [\n    \n  ],\n  'foundries': [\n    \n  ],\n  'potentiallyLockedOutputs': {\n    '0x8dd4f722a18f3b5822216e856a98ea480fbfaa205f10c08d36dc5ab21efcc8355600': False\n  }[\n    ...\n  ]\n]\n\nBalance: {\n  'baseCoin': {\n    'total': '3490057203',\n    'available': '3490057203'\n  },\n  'requiredStorageDeposit': '98250300',\n  'nativeTokens': [\n    {\n      'tokenId': '0x08b83d49922e341d2cb45159707cfafdc9dc8fdb9d119543480dbaa5773eed8c4a0100000000',\n      'total': '0x64',\n      'available': '0x64'\n    }\n  ],\n  'nfts': [\n    '0xceae643ff7c112a3adce8f55f7953ba0707ade21256a7a09068c0b47f7c62c5b',\n    '0x1e808b7c6e603aaeb5f718881a74fedae72981ac7d5f0294eb561cad0e653566',\n    '0x77133189021f50d8d66e0678e553af9f46a832a24239653d3555edb8dc859e1f',\n    '0x17f97185f80fa56eab974de6b7bbb80fa812d4e8e37090d166a0a41da129cebc',\n    '0x1b670afba8d59a445cbaf167f1fda05879362e3ea034f5c4a0979fbeb5a3964b',\n    '0x3f0e11e9d9f48a57d0fba43d7d1158ee673cb8055f80a5ce45ad174c962c0d8a',\n    '0xdc8be91d779aac048aa9001ab99ecf12cf62a4701185a95f6206a1a201bfbe7c'\n  ],\n  'aliases': [\n    \n  ],\n  'foundries': [\n    \n  ],\n  'potentiallyLockedOutputs': {\n    '0xa10af6cc21fa0b1b67962af7082eb25d8b4aafe50fedda469179f469ab5e33be5300': False,\n    [...]\n  }\n]\n")))}f.isMDXComponent=!0;const h={toc:[]};function k(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"language-java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.InitializeWalletException;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class CheckBalance {\n    public static void main(String[] args) throws WalletException, InterruptedException, InitializeWalletException {\n        // This example assumes that a wallet has already been created using the \xb4CreateAccount.java\xb4 example.\n        // If you haven\'t run the \xb4CreateAccount.java\xb4 example yet, you must run it first to be able to load the wallet as shown below:\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes("https://api.testnet.shimmer.network"))\n                .withSecretManager(new StrongholdSecretManager("PASSWORD_FOR_ENCRYPTION", null, "example-wallet"))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias("Alice"));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // Get the balance.\n        AccountBalance balance = a.getBalance();\n\n        // Print the balance.\n        System.out.println(balance);\n    }\n}'))}k.isMDXComponent=!0;const y={toc:[]};function g(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "baseCoin": {\n    "total": "2096947200",\n    "available": "2096947200"\n  },\n  "requiredStorageDeposit": "323500",\n  "nativeTokens": [\n    {\n      "tokenId": "0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0100000000",\n      "total": "0x3233",\n      "available": "0x3233"\n    },\n    {\n      "tokenId": "0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0200000000",\n      "total": "0x3233",\n      "available": "0x3233"\n    },\n    {\n      "tokenId": "0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0300000000",\n      "total": "0x17",\n      "available": "0x17"\n    }\n  ],\n  "nfts": [\n    "0x60b3a254d7704773c298882b7b93f70d12e1cc4a0b91d0b1037f6ea64d76b249",\n    "0xf95f4d5344217a2ba19a6c19a47f97d267edf8c4d76a7b8c08072ad35acbebbe"\n  ],\n  "aliases": [\n    "0x429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef"\n  ],\n  "foundries": [\n    "0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0300000000",\n    "0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0100000000"\n  ],\n  "potentiallyLockedOutputs": {}\n}\n')))}g.isMDXComponent=!0;var x=n(529);const w={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function v(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},w,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(x.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example get_balance --release\n// In this example we sync the account and get the balance\n// Rename `.env.example` to `.env` first\n\nuse iota_wallet::{account_manager::AccountManager, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Sync and get the balance\n    let _account_balance = account.sync(None).await?;\n    // If already synced, just get the balance\n    let account_balance = account.balance().await?;\n\n    println!("{:?}", account_balance);\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example get_balance --release"))}v.isMDXComponent=!0;const _={toc:[]};function T(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},_,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"AccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 100000000000,\n    available: 100000000000\n  },\n  required_storage_deposit: 213000,\n  native_tokens: [\n    \n  ],\n  nfts: [\n    \n  ],\n  aliases: [\n    \n  ],\n  foundries: [\n    \n  ],\n  potentially_locked_outputs: {\n    \n  }\n}\n")))}T.isMDXComponent=!0;var C=n(99599);const N={title:"Check Balance",description:"How to check a wallet account's balance.",image:"/img/logo/iota_mark_light.png",keywords:["how to","get balance","check balance","nodejs","python","java","rust"]},Z=void 0,D={unversionedId:"how_tos/accounts_and_addresses/check_balance",id:"how_tos/accounts_and_addresses/check_balance",title:"Check Balance",description:"How to check a wallet account's balance.",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/accounts_and_addresses/04_check_balance.mdx",sourceDirName:"how_tos/accounts_and_addresses",slug:"/how_tos/accounts_and_addresses/check_balance",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/check_balance",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/accounts_and_addresses/04_check_balance.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Check Balance",description:"How to check a wallet account's balance.",image:"/img/logo/iota_mark_light.png",keywords:["how to","get balance","check balance","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Request Funds",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/request_funds"},next:{title:"Send a Transaction",permalink:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/send_transaction"}},I={},A=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],S={toc:A};function M(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},S,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can retrieve the balance for any ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"account you created")," by calling the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Account.balance()")," function. Bear in mind that you should always sync the account with the node to get the latest\ntransactions."),(0,o.kt)(C.ZP,{mdxType:"TipFaucet"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Sync the account with the node to get the latest transactions."),(0,o.kt)("li",{parentName:"ol"},"Request the account's balance.")),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(v,{mdxType:"RustCode"})),(0,o.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"NodejsCode"})),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"PythonCode"})),(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(T,{mdxType:"RustOutput"})),(0,o.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"PythonOutput"})),(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(g,{mdxType:"JavaOutput"}))))}M.isMDXComponent=!0},18679:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(67294),o=n(86010);const c="tabItem_Ymn6";function l(e){let{children:a,hidden:n,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(c,l),hidden:n},a)}},34259:(e,a,n)=>{n.d(a,{Z:()=>m});var t=n(87462),o=n(67294),c=n(86010),l=n(51048),s=n(33609),r=n(1943),d=n(72957);const i="tabList__CuJ",u="tabItem_LNqP";function p(e){var a;const{lazy:n,block:l,defaultValue:p,values:m,groupId:b,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),y=(0,s.l)(k,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??h[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:w}=(0,r.U)(),[v,_]=(0,o.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=b){const e=x[b];null!=e&&e!==v&&k.some((a=>a.value===e))&&_(e)}const N=e=>{const a=e.currentTarget,n=T.indexOf(a),t=k[n].value;t!==v&&(C(a),_(t),null!=b&&w(b,String(t)))},Z=e=>{var a;let n=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;n=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;n=T[a]??T[T.length-1];break}}null==(a=n)||a.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",i)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},f)},k.map((e=>{let{value:a,label:n,attributes:l}=e;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,key:a,ref:e=>T.push(e),onKeyDown:Z,onFocus:N,onClick:N},l,{className:(0,c.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":v===a})}),n??a)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==v})))))}function m(e){const a=(0,l.Z)();return o.createElement(p,(0,t.Z)({key:String(a)},e))}}}]);