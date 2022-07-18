"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[58707],{57855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=n(55299),l=n(36232),d=n(84661),s=(n(87308),["components"]),c={title:"Update DID Documents",sidebar_label:"Update",description:"How DID Documents can be manipulated and how updates should be published",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Update","Publish"]},p=void 0,u={unversionedId:"concepts/decentralized_identifiers/update",id:"concepts/decentralized_identifiers/update",title:"Update DID Documents",description:"How DID Documents can be manipulated and how updates should be published",source:"@site/content/build/identity.rs/v0.6.0/documentation/docs/concepts/decentralized_identifiers/update.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/update",permalink:"/identity.rs/concepts/decentralized_identifiers/update",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/content/build/identity.rs/v0.6.0/documentation/docs/concepts/decentralized_identifiers/update.mdx",tags:[],version:"current",frontMatter:{title:"Update DID Documents",sidebar_label:"Update",description:"How DID Documents can be manipulated and how updates should be published",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Update","Publish"]},sidebar:"docs",previous:{title:"Create and Publish",permalink:"/identity.rs/concepts/decentralized_identifiers/create"},next:{title:"Resolve",permalink:"/identity.rs/concepts/decentralized_identifiers/resolve"}},m={},h=[{value:"Verification Methods",id:"verification-methods",level:3},{value:"Verification Relationships",id:"verification-relationships",level:3},{value:"Services",id:"services",level:3},{value:"Example",id:"example",level:2},{value:"Creating Identity",id:"creating-identity",level:3},{value:"Adding Verification Methods",id:"adding-verification-methods",level:3},{value:"Adding Verification Relationships",id:"adding-verification-relationships",level:3},{value:"Adding a Service",id:"adding-a-service",level:3},{value:"Removing a Verification Method",id:"removing-a-verification-method",level:3}],f={toc:h};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DID Documents can be extended by adding ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#verification-methods"},"Verification Methods"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#services"},"Services")," and custom properties.\nA verification method adds public keys, which can be used to digitally sign things like a DID message or a verifiable credential, while a service can provide metadata around the identity via URIs."),(0,o.kt)("h3",{id:"verification-methods"},"Verification Methods"),(0,o.kt)("p",null,"As demonstrated by the ",(0,o.kt)("a",{parentName:"p",href:"#example"},"example")," below, the Iota identity framework offers easy-to-use methods for adding verification methods."),(0,o.kt)("p",null,"The following properties can be specified for a verification method:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"id"),": a ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DID URL")," for the verification method. It can be specified by setting the ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#fragment"},"fragment"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type"),": specifies the type of the Verification Method. The framework supports ",(0,o.kt)("inlineCode",{parentName:"li"},"Ed25519")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"X25519")," key types. This property is automatically filled by the framework when specifying the verification material."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"publicKeyMultibase"),": multibase encoded public key which concludes the ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#verification-material"},"verification material"),". This can be automatically generated by the framework or manually provided by users.")),(0,o.kt)("h3",{id:"verification-relationships"},"Verification Relationships"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#verification-relationships"},"Verification relationships")," express the relationship between the DID subject and the verification method. It can be used to specify the\nthe purpose of the verification method."),(0,o.kt)("p",null,"The following relationships are supported by the Identity Framework:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#authentication"},"Authentication")),": used to specify authentication methods for the DID subject."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#assertion"},"Assertion")),": can be used for verifiable credential verification."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#assertion"},"Key Agreement")),": used for establishing secure communication channels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#capability-invocation"},"Capability Invocation")),": can be used to authorize updates to the DID Document."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/did-core/#capability-delegation"},"Capability Delegation")),": a mechanism to delegate cryptographic capability to another party.")),(0,o.kt)("p",null,"Verification methods can be either ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#example-14-embedding-and-referencing-verification-methods"},"embedded or referenced"),". Referencing verification\nmethods allow them to be used by more than one verification relationship.\nUpon creating a verification method using the identity framework, specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodScope")," option will result in an embedded verification method. Leaving that option unset will create the verification method as\na map entry of the ",(0,o.kt)("inlineCode",{parentName:"p"},"verificationMethod")," property. Verification relationships can be added afterwards using references."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Any update to the DID document must be signed using a verification method with ",(0,o.kt)("inlineCode",{parentName:"p"},"capability invocation")," relationship to be valid. Removing all capability invocation verification methods\ndisallows any further updates to the document."))),(0,o.kt)("h3",{id:"services"},"Services"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#services"},"Services")," allow adding other ways of communicating with the DID subject. An endpoint included in the DID Document can offer a way of reaching services for different purposes\nlike authentication, communicating, and discovery."),(0,o.kt)("p",null,"The following properties can be specified for a service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"id"),":  a ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DID URL")," for referecing the service in the DID document.\nIt can be specified by setting the ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#fragment"},"fragment"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type"),": a string used to maximize interoperability between services. The framework does not perform any checks on the content of this string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"serviceEndpoint"),": a URL that points to the service endpoint.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The following example demonstrates adding verification methods and services to a DID Document."),(0,o.kt)(r.Z,{nodeReplitLink:"https://repl.it/@IOTAFoundation/manipulate-did?lite=true",rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_manipulate\n\nuse std::path::PathBuf;\n\nuse identity_iota::account::Account;\nuse identity_iota::account::IdentitySetup;\nuse identity_iota::account::MethodContent;\nuse identity_iota::account::Result;\nuse identity_iota::account_storage::Stronghold;\nuse identity_iota::client::ExplorerUrl;\nuse identity_iota::core::Url;\nuse identity_iota::did::MethodRelationship;\nuse identity_iota::iota_core::IotaDID;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // ===========================================================================\n  // Create Identity - Similar to create_did example\n  // ===========================================================================\n\n  // Stronghold settings\n  let stronghold_path: PathBuf = "./example-strong.hodl".into();\n  let password: String = "my-password".to_owned();\n  let stronghold: Stronghold = Stronghold::new(&stronghold_path, password, None).await?;\n\n  // Create a new Account with the default configuration\n  let mut account: Account = Account::builder()\n    .storage(stronghold)\n    .create_identity(IdentitySetup::default())\n    .await?;\n\n  // ===========================================================================\n  // Identity Manipulation\n  // ===========================================================================\n\n  // Add another Ed25519 verification method to the identity\n  account\n    .update_identity()\n    .create_method()\n    .content(MethodContent::GenerateEd25519)\n    .fragment("my-next-key")\n    .apply()\n    .await?;\n\n  // Associate the newly created method with additional verification relationships\n  account\n    .update_identity()\n    .attach_method_relationship()\n    .fragment("my-next-key")\n    .relationships(vec![\n      MethodRelationship::CapabilityDelegation,\n      MethodRelationship::CapabilityInvocation,\n    ])\n    .apply()\n    .await?;\n\n  // Add a new service to the identity.\n  account\n    .update_identity()\n    .create_service()\n    .fragment("my-service-1")\n    .type_("MyCustomService")\n    .endpoint(Url::parse("https://example.com")?)\n    .apply()\n    .await?;\n\n  // Remove the Ed25519 verification method\n  account\n    .update_identity()\n    .delete_method()\n    .fragment("my-next-key")\n    .apply()\n    .await?;\n\n  // Retrieve the DID from the newly created identity.\n  let iota_did: &IotaDID = account.did();\n\n  // Prints the Identity Resolver Explorer URL.\n  // The entire history can be observed on this page by clicking "Loading History".\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(iota_did)?\n  );\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/bindings/wasm/examples-account/src/manipulate_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/examples/account/manipulate_did.rs",mdxType:"CodeSnippet"}),(0,o.kt)("h3",{id:"creating-identity"},"Creating Identity"),(0,o.kt)("p",null,"The Example above starts by ",(0,o.kt)("a",{parentName:"p",href:"/identity.rs/concepts/decentralized_identifiers/create"},"creating an identity using the account"),"."),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let mut account: Account = Account::builder()\n    .storage(stronghold)\n    .create_identity(IdentitySetup::default())\n    .await?;\n"))),(0,o.kt)(d.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let builder = new AccountBuilder({\n    storage,\n});\nlet account = await builder.createIdentity();\n")))),(0,o.kt)("p",null,"This will create a DID document and publish it to the tangle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "doc":{\n      "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n      "capabilityInvocation":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#sign-0",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z5k7vzMVuXXj8MJDcfzP2owvc8xKBA6BBsAkFf1GSNu2X"\n         }\n      ]\n   },\n   "meta":{\n      "created":"2022-04-13T09:27:48Z",\n      "updated":"2022-04-13T09:27:48Z"\n   }\n}\n')),(0,o.kt)("p",null,"The created document only contains one verification method with ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#capability-invocation"},"capabilityInvocation")," relationship.\nThis method is used to sign the DID Document for publication to the Tangle.\nThe signature proves that the publisher of the document is in control over the capability invocation keys and is allowed to create, update or delete the DID Document."),(0,o.kt)("p",null,"Any future updates to the DID Document in this example will be signed using this verification method. The Account will automatically sign each update with this method so individual\nupdates don't have to be explicitly signed."),(0,o.kt)("p",null,"Furthermore, it's possible to rotate a capability Invocation key. In this case, the Account will sign next update with a key which was valid in the previous state of the DID Document. Afterwards it will\nuse the first (oldest) of the remaining capability invocation keys as a default signing method.\nOther capability invocation keys can still be explicitly specified to sign an update. These can be set in ",(0,o.kt)("inlineCode",{parentName:"p"},"PublishOptions"),"."),(0,o.kt)("p",null,"Note that the Account does not allow removing all capability invocation keys."),(0,o.kt)("h3",{id:"adding-verification-methods"},"Adding Verification Methods"),(0,o.kt)("p",null,"Another verification method can be added to the DID document using the Account:"),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'account\n    .update_identity()\n    .create_method()\n    .content(methodcontent::generateed25519)\n    .fragment("my-next-key")\n    .apply()\n    .await?;\n'))),(0,o.kt)(d.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await account.createMethod({\n    content: MethodContent.GenerateEd25519(),\n    fragment: "my-next-key"\n})\n')))),(0,o.kt)("p",null,"The code above creates a new verification method that includes a newly generated Ed25519 public key,\nsigns the updated document using the private key of the default ",(0,o.kt)("inlineCode",{parentName:"p"},"capabilityInvocation")," verification method\nand publishes the document to the tangle."),(0,o.kt)("p",null,"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodScope")," is not specified, the verification method will be created in the ",(0,o.kt)("inlineCode",{parentName:"p"},"verificationMethod")," map. The updated DID Document will look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "doc":{\n      "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n      "verificationMethod":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z2Zthec5siTfxCjPwZUHGDGybKNy9oc3ZYeftvEE2nEL3"\n         }\n      ],\n      "capabilityInvocation":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#sign-0",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z5k7vzMVuXXj8MJDcfzP2owvc8xKBA6BBsAkFf1GSNu2X"\n         }\n      ]\n   },\n   "meta":{\n      "created":"2022-04-13T09:27:48Z",\n      "updated":"2022-04-13T09:28:06Z"\n   }\n}\n')),(0,o.kt)("h3",{id:"adding-verification-relationships"},"Adding Verification Relationships"),(0,o.kt)("p",null,"Verification relationship can be attached to a verification method by referencing its fragment."),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'account\n    .update_identity()\n    .attach_method_relationship()\n    .fragment("my-next-key")\n    .relationships(vec![\n      MethodRelationship::CapabilityDelegation,\n      MethodRelationship::CapabilityInvocation,\n    ])\n    .apply()\n    .await?;\n'))),(0,o.kt)(d.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await account.attachMethodRelationships({\n    fragment: "my-next-key",\n    relationships: [\n        MethodRelationship.CapabilityDelegation,\n        MethodRelationship.CapabilityInvocation\n    ]\n})\n')))),(0,o.kt)("p",null,"This will add ",(0,o.kt)("inlineCode",{parentName:"p"},"CapabilityDelegation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CapabilityInvocation")," relationships to the created verification method with the fragment ",(0,o.kt)("inlineCode",{parentName:"p"},"my-next-key"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"capabilityInvocation"),"\nproperty now has both an embedded and a referenced verification method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "doc":{\n      "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n      "verificationMethod":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z2Zthec5siTfxCjPwZUHGDGybKNy9oc3ZYeftvEE2nEL3"\n         }\n      ],\n      "capabilityDelegation":[\n         "did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key"\n      ],\n      "capabilityInvocation":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#sign-0",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z5k7vzMVuXXj8MJDcfzP2owvc8xKBA6BBsAkFf1GSNu2X"\n         },\n         "did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key"\n      ]\n   },\n   "meta":{\n      "created":"2022-04-13T09:27:48Z",\n      "updated":"2022-04-13T09:28:23Z"\n   }\n}\n')),(0,o.kt)("h3",{id:"adding-a-service"},"Adding a Service"),(0,o.kt)("p",null,"Similar to verification methods, services can be added to a DID Document."),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'account\n    .update_identity()\n    .create_service()\n    .fragment("my-service-1")\n    .type_("MyCustomService")\n    .endpoint(Url::parse("https://example.com")?)\n    .apply()\n    .await?;\n'))),(0,o.kt)(d.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await account.createService({\n   fragment: "my-service-1",\n   type: "MyCustomService",\n   endpoint: "https://example.com"\n})\n')))),(0,o.kt)("p",null,"In JavaScript, the endpoint property type is a string, this must be a valid URL, otherwise an error will be thrown.\nAdditionally, custom properties can be added to a service by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," in both Rust and JavaScript."),(0,o.kt)("p",null,"The updated Document with the newly created service looks as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "doc":{\n      "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n      "verificationMethod":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z2Zthec5siTfxCjPwZUHGDGybKNy9oc3ZYeftvEE2nEL3"\n         }\n      ],\n      "capabilityDelegation":[\n         "did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key"\n      ],\n      "capabilityInvocation":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#sign-0",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z5k7vzMVuXXj8MJDcfzP2owvc8xKBA6BBsAkFf1GSNu2X"\n         },\n         "did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-next-key"\n      ],\n      "service":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-service-1",\n            "type":"MyCustomService",\n            "serviceEndpoint":"https://example.com/"\n         }\n      ]\n   },\n   "meta":{\n      "created":"2022-04-13T09:27:48Z",\n      "updated":"2022-04-13T09:28:34Z"\n   }\n}\n')),(0,o.kt)("h3",{id:"removing-a-verification-method"},"Removing a Verification Method"),(0,o.kt)("p",null,"Verification methods and/or their relationships can be removed from the DID Document. The following code removes the verification method that we created previously."),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"Rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'account\n    .update_identity()\n    .delete_method()\n    .fragment("my-next-key")\n    .apply()\n    .await?;\n'))),(0,o.kt)(d.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await account.deleteMethod({fragment: "my-next-key"})\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "doc":{\n      "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n      "capabilityInvocation":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#sign-0",\n            "controller":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf",\n            "type":"Ed25519VerificationKey2018",\n            "publicKeyMultibase":"z5k7vzMVuXXj8MJDcfzP2owvc8xKBA6BBsAkFf1GSNu2X"\n         }\n      ],\n      "service":[\n         {\n            "id":"did:iota:6T4PRHWp7bNsKaBWr1gVtUBQfLaxAKqKGAeJWFBZkMyf#my-service-1",\n            "type":"MyCustomService",\n            "serviceEndpoint":"https://example.com/"\n         }\n      ]\n   },\n   "meta":{\n      "created":"2022-04-13T09:27:48Z",\n      "updated":"2022-04-13T09:29:03Z"\n   }\n}\n')),(0,o.kt)("p",null,"Notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"capabilityDelegation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"verificationMethod")," properties are also removed from the DID Document since they became empty after the only verification method they contained and referenced was removed."),(0,o.kt)("p",null,"Furthermore and similar to deleting verification methods, services can be deleted using ",(0,o.kt)("inlineCode",{parentName:"p"},"account.update_identity().delete_service()...")," in Rust and ",(0,o.kt)("inlineCode",{parentName:"p"},"account.deleteService(..)")," in JavaScript."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In this example, a message is published to the tangle every time the document is updated. These messages can be unnecessary. Instead, one message can be published that contains all the updates to the DID Document.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/examples/account/lazy.rs"},"lazy example for Rust")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/bindings/wasm/examples-account/src/lazy.ts"},"lazy example for JS")," to learn more about lazy publishing."))))}g.isMDXComponent=!0},55299:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(86010),i=n(67294),o=n(87308);function r(e){var t=e.nodeReplitLink,n=e.rustContent,r=e.nodeGithubLink,l=e.rustGithubLink,d=i.useState("node"),s=d[0],c=d[1],p=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),i.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,i.useEffect)((function(){var e=localStorage.getItem("lang"),a=e||"node";"node"!==a||t||(a="rust"),"rust"!==a||n||(a="node"),c(a)})),i.createElement("div",null,i.createElement("div",{className:(0,a.Z)("langSelector")},t&&i.createElement("button",{className:(0,a.Z)("button","languageButton","mr-sm",{activeButton:"node"===s,inactiveButton:"node"!==s}),onClick:function(){localStorage.setItem("lang","node"),c("node")}},"Node.js"),n&&i.createElement("button",{className:(0,a.Z)("button","languageButton",{activeButton:"rust"==s,inactiveButton:"rust"!==s}),onClick:function(){localStorage.setItem("lang","rust"),c("rust")}},"Rust")),i.createElement("div",{className:(0,a.Z)("codeSnippetContainer")},"node"===s?i.createElement(i.Fragment,null,i.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):i.createElement("div",{className:(0,a.Z)("rustContainer")},i.createElement(o.Z,{className:(0,a.Z)("noMarginBottom"),language:"rust"},n))),i.createElement("div",{className:(0,a.Z)("githubLink")},r&&"node"===s&&i.createElement("a",{href:r,target:"_blank"},"GitHub\xa0",p),l&&"rust"===s&&i.createElement("a",{href:l,target:"_blank"},"GitHub\xa0",p)))}},84661:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),i=n(86010),o="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},36232:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),i=n(67294),o=n(86010),r=n(35074),l=n(74879),d=n(85425),s=n(51085),c="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,n,r=e.lazy,u=e.block,m=e.defaultValue,h=e.values,f=e.groupId,g=e.className,y=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,d.U)(),N=w.tabGroupChoices,x=w.setTabGroupChoices,T=(0,i.useState)(k),D=T[0],B=T[1],K=[],A=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=N[f];null!=I&&I!==D&&v.some((function(e){return e.value===I}))&&B(I)}var M=function(e){var t=e.currentTarget,n=K.indexOf(t),a=v[n].value;a!==D&&(A(t),B(a),null!=f&&x(f,String(a)))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=K.indexOf(e.currentTarget)+1;n=null!=(a=K[i])?a:K[0];break;case"ArrowLeft":var o,r=K.indexOf(e.currentTarget)-1;n=null!=(o=K[r])?o:K[K.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},g)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return K.push(e)},onKeyDown:R,onFocus:M,onClick:M},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(y.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function m(e){var t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}}}]);