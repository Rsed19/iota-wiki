"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8605],{74848:(e,t,n)=>{n.d(t,{ZP:()=>a});var o=n(87462),i=(n(67294),n(3905));const r={toc:[]};function a(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"More advanced examples can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/examples"},"examples")," folder."))}a.isMDXComponent=!0},95218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>_,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=n(87462),i=(n(67294),n(3905)),r=n(44393),a=n(74848);const s={title:"How To Get Node Info"},l=void 0,d={unversionedId:"libraries/rust/how_to/get_node_info",id:"libraries/rust/how_to/get_node_info",title:"How To Get Node Info",description:"Run it with",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/rust/how_to/get_node_info.mdx",sourceDirName:"libraries/rust/how_to",slug:"/libraries/rust/how_to/get_node_info",permalink:"/iota.rs/develop/libraries/rust/how_to/get_node_info",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/rust/how_to/get_node_info.mdx",tags:[],version:"current",frontMatter:{title:"How To Get Node Info"},sidebar:"docs",previous:{title:"Getting Started With Rust",permalink:"/iota.rs/develop/libraries/rust/getting_started"},next:{title:"How To Get A Block",permalink:"/iota.rs/develop/libraries/rust/how_to/get_block"}},u={},c=[],p={toc:c};function _(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! Calls `GET /api/core/v2/info`.\n//! Returns general information about the node.\n//! Run: `cargo run --example node_api_core_get_info --release -- [NODE URL]`.\n\nuse iota_client::{Client, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Take the node URL from command line argument or use one from env as default.\n    let node_url = std::env::args().nth(1).unwrap_or_else(|| {\n        // This example uses dotenv, which is not safe for use in production.\n        dotenv::dotenv().ok();\n        std::env::var("NODE_URL").unwrap()\n    });\n\n    // Create a client with that node.\n    let client = Client::builder()\n        .with_node(&node_url)?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    // Get node info.\n    let info = client.get_info().await?;\n\n    println!("{info:#?}");\n\n    Ok(())\n}\n'),(0,i.kt)("p",null,"Run it with"),(0,i.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example node_api_core_get_info --release -- [NODE URL]"),(0,i.kt)(a.ZP,{mdxType:"MoreExamples"}))}_.isMDXComponent=!0}}]);