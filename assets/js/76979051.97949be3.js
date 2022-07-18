"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[66618],{70225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),d=n(60760),c=n(87308),a=["components"],s={title:"Secure DIDs",sidebar_label:"Secure"},l=void 0,u={unversionedId:"concepts/decentralized_identifiers/secure",id:"concepts/decentralized_identifiers/secure",title:"Secure DIDs",description:"TODO: Stronghold",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/concepts/decentralized_identifiers/secure.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/secure",permalink:"/identity.rs/0.5/concepts/decentralized_identifiers/secure",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/concepts/decentralized_identifiers/secure.mdx",tags:[],version:"current",frontMatter:{title:"Secure DIDs",sidebar_label:"Secure"}},p={},m=[{value:"Examples",id:"examples",level:2},{value:"Account Module (Recommended)",id:"account-module-recommended",level:3}],h={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TODO: Stronghold"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"account-module-recommended"},"Account Module (Recommended)"),(0,r.kt)(c.Z,{className:"language-rust",mdxType:"CodeBlock"},d.Z))}f.isMDXComponent=!0},60760:function(e,t){t.Z='// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_create\n\nuse std::path::PathBuf;\n\nuse identity::account::Account;\nuse identity::account::IdentitySetup;\nuse identity::account::Result;\nuse identity::account_storage::Stronghold;\nuse identity::iota::ExplorerUrl;\nuse identity::iota_core::IotaDID;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // Sets the location and password for the Stronghold\n  //\n  // Stronghold is an encrypted file that manages private keys.\n  // It implements best practices for security and is the recommended way of handling private keys.\n  let stronghold_path: PathBuf = "./example-strong.hodl".into();\n  let password: String = "my-password".to_owned();\n  let stronghold: Stronghold = Stronghold::new(&stronghold_path, password, None).await?;\n\n  // Create a new identity using Stronghold as local storage.\n  //\n  // The creation step generates a keypair, builds an identity\n  // and publishes it to the IOTA mainnet.\n  let account: Account = Account::builder()\n    .storage(stronghold)\n    .create_identity(IdentitySetup::default())\n    .await?;\n\n  // Retrieve the did of the newly created identity.\n  let iota_did: &IotaDID = account.did();\n\n  // Print the local state of the DID Document\n  println!("[Example] Local Document from {} = {:#?}", iota_did, account.document());\n\n  // Prints the Identity Resolver Explorer URL.\n  // The entire history can be observed on this page by clicking "Loading History".\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(iota_did)?\n  );\n\n  Ok(())\n}\n'}}]);