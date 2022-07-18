"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[19217],{11997:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return o}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),d=["components"],p={},i="Account Interface",m={unversionedId:"account",id:"account",title:"Account Interface",description:"The Account Interface is evaluated, after the Account Manager Interface, repeatedly through a prompt within the wallet",source:"@site/content/build/cli-wallet/develop/documentation/docs/03_account.md",sourceDirName:".",slug:"/account",permalink:"/cli-wallet/account",draft:!1,editUrl:"https://github.com/iotaledger/cli-wallet/edit/develop/documentation/content/build/cli-wallet/develop/documentation/docs/03_account.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Account Manager Interface",permalink:"/cli-wallet/account_manager"},next:{title:"Step by step examples",permalink:"/cli-wallet/step_by_step"}},u={},o=[{value:"Commands",id:"commands",level:2},{value:"<code>addresses</code>",id:"addresses",level:3},{value:"Example",id:"example",level:4},{value:"<code>balance</code>",id:"balance",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>burn-native-token</code>",id:"burn-native-token",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>burn-nft</code>",id:"burn-nft",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>claim</code>",id:"claim",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Examples",id:"examples",level:4},{value:"<code>clear</code>",id:"clear",level:3},{value:"Example",id:"example-4",level:4},{value:"<code>consolidate</code>",id:"consolidate",level:3},{value:"Example",id:"example-5",level:4},{value:"<code>destroy-alias</code>",id:"destroy-alias",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Example",id:"example-6",level:4},{value:"<code>destroy-foundry</code>",id:"destroy-foundry",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Example",id:"example-7",level:4},{value:"<code>exit</code>",id:"exit",level:3},{value:"Example",id:"example-8",level:4},{value:"<code>faucet</code>",id:"faucet",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Examples",id:"examples-1",level:4},{value:"<code>help</code>",id:"help",level:3},{value:"Example",id:"example-9",level:4},{value:"<code>melt-native-token</code>",id:"melt-native-token",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Example",id:"example-10",level:4},{value:"<code>mint-native-token</code>",id:"mint-native-token",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Examples",id:"examples-2",level:4},{value:"<code>mint-nft</code>",id:"mint-nft",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Examples",id:"examples-3",level:4},{value:"<code>new-address</code>",id:"new-address",level:3},{value:"Example",id:"example-11",level:4},{value:"<code>output</code>",id:"output",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Example",id:"example-12",level:4},{value:"<code>outputs</code>",id:"outputs",level:3},{value:"Example",id:"example-13",level:4},{value:"<code>send</code>",id:"send",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Example",id:"example-14",level:4},{value:"<code>send-micro</code>",id:"send-micro",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Example",id:"example-15",level:4},{value:"<code>send-native-token</code>",id:"send-native-token",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Example",id:"example-16",level:4},{value:"<code>send-nft</code>",id:"send-nft",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Example",id:"example-17",level:4},{value:"<code>sync</code>",id:"sync",level:3},{value:"Example",id:"example-18",level:4},{value:"<code>transactions</code>",id:"transactions",level:3},{value:"Example",id:"example-19",level:4},{value:"<code>unspent-outputs</code>",id:"unspent-outputs",level:3},{value:"Example",id:"example-20",level:4}],k={toc:o};function c(e){var t=e.components,a=(0,l.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-interface"},"Account Interface"),(0,r.kt)("p",null,"The Account Interface is evaluated, after the Account Manager Interface, repeatedly through a prompt within the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet"),"\nbinary."),(0,r.kt)("p",null,"It is responsible for the creation and management of account addresses and their outputs, tokens, native tokens, NFTs..."),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"addresses"},(0,r.kt)("inlineCode",{parentName:"h3"},"addresses")),(0,r.kt)("p",null,"Lists all account addresses."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": addresses\n')),(0,r.kt)("h3",{id:"balance"},(0,r.kt)("inlineCode",{parentName:"h3"},"balance")),(0,r.kt)("p",null,"Prints the account balance."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": balance\n')),(0,r.kt)("h3",{id:"burn-native-token"},(0,r.kt)("inlineCode",{parentName:"h3"},"burn-native-token")),(0,r.kt)("p",null,"Burns a native token."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"token_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"0x08860e1f3593ba86c597cf86f61d8b04d8a714c02c7c5da7132d45be9c2ce6445c0300000000"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"100")))),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,"Burn the provided amount of a native token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": burn-native-token 0x08860e1f3593ba86c597cf86f61d8b04d8a714c02c7c5da7132d45be9c2ce6445c0300000000 100\n')),(0,r.kt)("h3",{id:"burn-nft"},(0,r.kt)("inlineCode",{parentName:"h3"},"burn-nft")),(0,r.kt)("p",null,"Burns an NFT."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nft_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"0x397ae8552dcf0dc604a44c9d86a5005d09f95d67e2965ea3b1c1271f9a9ae44c"')))),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"Burn a provided NFT."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": burn-nft 0x397ae8552dcf0dc604a44c9d86a5005d09f95d67e2965ea3b1c1271f9a9ae44c\n')),(0,r.kt)("h3",{id:"claim"},(0,r.kt)("inlineCode",{parentName:"h3"},"claim")),(0,r.kt)("p",null,"Tries to claim outputs with storage deposit return, expiration or timelock unlock conditions."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"output_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"0xd5dff9ee869dfa7796d5132b220cb5c00146c36abba27d3562e2d726decb50850000"')))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Try to claim all outputs with storage deposit return, expiration or timelock unlock conditions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": claim\n')),(0,r.kt)("p",null,"Try to claim a specific output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": claim 0xd5dff9ee869dfa7796d5132b220cb5c00146c36abba27d3562e2d726decb50850000\n')),(0,r.kt)("h3",{id:"clear"},(0,r.kt)("inlineCode",{parentName:"h3"},"clear")),(0,r.kt)("p",null,"Clears the terminal."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": clear\n')),(0,r.kt)("h3",{id:"consolidate"},(0,r.kt)("inlineCode",{parentName:"h3"},"consolidate")),(0,r.kt)("p",null,"Tries to consolidate outputs into a single one."),(0,r.kt)("p",null,"Note that only Basic Outputs with only an address unlock condition can be consolidated."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": consolidate\n')),(0,r.kt)("h3",{id:"destroy-alias"},(0,r.kt)("inlineCode",{parentName:"h3"},"destroy-alias")),(0,r.kt)("p",null,"Destroys an alias."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alias_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"0xb2bcba092bfb3fe3a12afcf21115016b27d833a7c456404fe2fe0921799f24dd"')))),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": destroy-alias 0xb2bcba092bfb3fe3a12afcf21115016b27d833a7c456404fe2fe0921799f24dd\n')),(0,r.kt)("h3",{id:"destroy-foundry"},(0,r.kt)("inlineCode",{parentName:"h3"},"destroy-foundry")),(0,r.kt)("p",null,"Destroys a foundry."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"foundry_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"0x08b2bcba092bfb3fe3a12afcf21115016b27d833a7c456404fe2fe0921799f24dd0100000000"')))),(0,r.kt)("h4",{id:"example-7"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": destroy-foundry 0x08b2bcba092bfb3fe3a12afcf21115016b27d833a7c456404fe2fe0921799f24dd0100000000\n')),(0,r.kt)("h3",{id:"exit"},(0,r.kt)("inlineCode",{parentName:"h3"},"exit")),(0,r.kt)("p",null,"Exits the ",(0,r.kt)("inlineCode",{parentName:"p"},"cli-wallet"),"."),(0,r.kt)("h4",{id:"example-8"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": exit\n')),(0,r.kt)("h3",{id:"faucet"},(0,r.kt)("inlineCode",{parentName:"h3"},"faucet")),(0,r.kt)("p",null,"Requests funds from a faucet."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},'"http://localhost:8091/api/enqueue"'),(0,r.kt)("td",{parentName:"tr",align:null},'"http://localhost:8091/api/enqueue"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"The latest address of the account"),(0,r.kt)("td",{parentName:"tr",align:null},'"rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3"')))),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"Request funds from a given faucet to the latest account address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": faucet http://localhost:8091/api/enqueue\n')),(0,r.kt)("p",null,"Request funds from a given faucet to a given address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": faucet http://localhost:8091/api/enqueue rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3\n')),(0,r.kt)("h3",{id:"help"},(0,r.kt)("inlineCode",{parentName:"h3"},"help")),(0,r.kt)("p",null,"Displays the account interface usage."),(0,r.kt)("h4",{id:"example-9"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": help\n')),(0,r.kt)("h3",{id:"melt-native-token"},(0,r.kt)("inlineCode",{parentName:"h3"},"melt-native-token")),(0,r.kt)("p",null,"Melts a native token."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"token_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"0x08860e1f3593ba86c597cf86f61d8b04d8a714c02c7c5da7132d45be9c2ce6445c0300000000"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"100")))),(0,r.kt)("h4",{id:"example-10"},"Example"),(0,r.kt)("p",null,"Melt the provided amount of a native token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": melt-native-token 0x08860e1f3593ba86c597cf86f61d8b04d8a714c02c7c5da7132d45be9c2ce6445c0300000000 100\n')),(0,r.kt)("h3",{id:"mint-native-token"},(0,r.kt)("inlineCode",{parentName:"h3"},"mint-native-token")),(0,r.kt)("p",null,"Mints a native token."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"maximum_supply")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"foundry_metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},'"0xabcdef"')))),(0,r.kt)("h4",{id:"examples-2"},"Examples"),(0,r.kt)("p",null,"Mint a native token with a maximum supply."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": mint-native-token 1000\n')),(0,r.kt)("p",null,"Mint a native token with a maximum supply and foundry metadata."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": mint-native-token 1000 0xabcdef\n')),(0,r.kt)("h3",{id:"mint-nft"},(0,r.kt)("inlineCode",{parentName:"h3"},"mint-nft")),(0,r.kt)("p",null,"Mints an NFT."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"The first address of the account"),(0,r.kt)("td",{parentName:"tr",align:null},'"rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"immutable_metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},'"{ key: value }"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},'"{ key: value }"')))),(0,r.kt)("h4",{id:"examples-3"},"Examples"),(0,r.kt)("p",null,"Mint an NFT to the latest address of the account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": mint-nft\n')),(0,r.kt)("p",null,"Mint an NFT to a given address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": mint-nft "rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3"\n')),(0,r.kt)("p",null,"Mint an NFT to a given address with immutable metadata and metadata."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": mint-nft "rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3" "{ key: value }" "{ key: value }"\n')),(0,r.kt)("h3",{id:"new-address"},(0,r.kt)("inlineCode",{parentName:"h3"},"new-address")),(0,r.kt)("p",null,"Generates a new address."),(0,r.kt)("h4",{id:"example-11"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": new-address\n')),(0,r.kt)("h3",{id:"output"},(0,r.kt)("inlineCode",{parentName:"h3"},"output")),(0,r.kt)("p",null,"Displays an output that is stored in the account."),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"output_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"0x1c7a765db0c1f5eceb0ea5578585359c5b0c1ab8d958829f5990997b93f0ec7d0100"')))),(0,r.kt)("h4",{id:"example-12"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": output 0x1c7a765db0c1f5eceb0ea5578585359c5b0c1ab8d958829f5990997b93f0ec7d0100\n')),(0,r.kt)("h3",{id:"outputs"},(0,r.kt)("inlineCode",{parentName:"h3"},"outputs")),(0,r.kt)("p",null,"Displays all outputs that are stored in the account."),(0,r.kt)("h4",{id:"example-13"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": outputs\n')),(0,r.kt)("h3",{id:"send"},(0,r.kt)("inlineCode",{parentName:"h3"},"send")),(0,r.kt)("p",null,"Sends an amount to an address."),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"1000000")))),(0,r.kt)("h4",{id:"example-14"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": send rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3 1000000\n')),(0,r.kt)("h3",{id:"send-micro"},(0,r.kt)("inlineCode",{parentName:"h3"},"send-micro")),(0,r.kt)("p",null,"Sends a micro amount to an address with StorageDepositReturn and Expiration Unlock Conditions."),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("h4",{id:"example-15"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": send-micro rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3 1\n')),(0,r.kt)("h3",{id:"send-native-token"},(0,r.kt)("inlineCode",{parentName:"h3"},"send-native-token")),(0,r.kt)("p",null,"Sends native tokens to an address with StorageDepositReturn and Expiration Unlock Condition."),(0,r.kt)("h4",{id:"parameters-12"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"token_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"0x08860e1f3593ba86c597cf86f61d8b04d8a714c02c7c5da7132d45be9c2ce6445c0300000000"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"100")))),(0,r.kt)("h4",{id:"example-16"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": send-native-token rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3 0x08860e1f3593ba86c597cf86f61d8b04d8a714c02c7c5da7132d45be9c2ce6445c0300000000 100\n')),(0,r.kt)("h3",{id:"send-nft"},(0,r.kt)("inlineCode",{parentName:"h3"},"send-nft")),(0,r.kt)("p",null,"Sends an NFT to an address."),(0,r.kt)("h4",{id:"parameters-13"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nft_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},'"0x397ae8552dcf0dc604a44c9d86a5005d09f95d67e2965ea3b1c1271f9a9ae44c"')))),(0,r.kt)("h4",{id:"example-17"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": send-nft rms1qztwng6cty8cfm42nzvq099ev7udhrnk0rw8jt8vttf9kpqnxhpsx869vr3 0x397ae8552dcf0dc604a44c9d86a5005d09f95d67e2965ea3b1c1271f9a9ae44c\n')),(0,r.kt)("h3",{id:"sync"},(0,r.kt)("inlineCode",{parentName:"h3"},"sync")),(0,r.kt)("p",null,"Synchronises the account."),(0,r.kt)("h4",{id:"example-18"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": sync\n')),(0,r.kt)("h3",{id:"transactions"},(0,r.kt)("inlineCode",{parentName:"h3"},"transactions")),(0,r.kt)("p",null,"Lists all account transactions."),(0,r.kt)("h4",{id:"example-19"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": transactions\n')),(0,r.kt)("h3",{id:"unspent-outputs"},(0,r.kt)("inlineCode",{parentName:"h3"},"unspent-outputs")),(0,r.kt)("p",null,"Displays all unspent outputs that are stored in the account."),(0,r.kt)("h4",{id:"example-20"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'> Account "main": unspent-outputs\n')))}c.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=m(a),c=l,s=k["".concat(i,".").concat(c)]||k[c]||o[c]||r;return a?n.createElement(s,d(d({ref:t},u),{},{components:a})):n.createElement(s,d({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,d=new Array(r);d[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,d[1]=p;for(var m=2;m<r;m++)d[m]=a[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);