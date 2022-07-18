"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45485],{20859:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return v}});var n=i(87462),a=i(63366),r=(i(67294),i(3905)),o=i(7903),s=["components"],l={title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC is revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke"]},c=void 0,d={unversionedId:"concepts/verifiable_credentials/revoke",id:"concepts/verifiable_credentials/revoke",title:"Verifiable Credential Revocation",description:"Explain how a VC is revoked",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/concepts/verifiable_credentials/revoke.mdx",sourceDirName:"concepts/verifiable_credentials",slug:"/concepts/verifiable_credentials/revoke",permalink:"/identity.rs/0.5/concepts/verifiable_credentials/revoke",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/concepts/verifiable_credentials/revoke.mdx",tags:[],version:"current",frontMatter:{title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC is revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke"]},sidebar:"docs",previous:{title:"Create and Sign",permalink:"/identity.rs/0.5/concepts/verifiable_credentials/create"},next:{title:"Verifiable Presentations",permalink:"/identity.rs/0.5/concepts/verifiable_credentials/verifiable_presentations"}},u={},v=[{value:"Revocation List 2020",id:"revocation-list-2020",level:3},{value:"Example",id:"example",level:2}],h={toc:v};function p(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#example"},"example")," below demonstrates how an issuer can revoke a verifiable credential using the IOTA Identity Framework by removing its verification method. But another aspect of it, is how an issuer can easily allow verifiers to check if the credential has been revoked. In order to allow this, an issuer can link to a location where a verifier can check the credential status. This can be specified in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#status"},"credential status")," property."),(0,r.kt)("h3",{id:"revocation-list-2020"},"Revocation List 2020"),(0,r.kt)("p",null,"One of the ways for an issuer to control the status of its credentials is by using a revocation list. At the most basic level, revocation information for all verifiable credentials issued by an issuer are expressed as simple binary values. The issuer keeps a bitstring list of all verifiable credentials it has issued. Each verifiable credential is associated with a position in the list. If the binary value of the position in the list is 1 (one), the verifiable credential is revoked, if it is 0 (zero) it is not revoked.\nWhen using ",(0,r.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-status-rl-2020/#core-concept"},"revocation list 2020")," the ",(0,r.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-status-rl-2020/#revocationlist2020status"},"credential status")," of the credential must be defined as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID"),": a URL that identifies the status information associated with the verifiable credential."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Types"),": The type property must be RevocationList2020Status. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Revocation List Index"),": an arbitrary size integer greater than or equal to 0, expressed as a string. The value identifies the bit position of the revocation status of the verifiable credential. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Revocation List Credential"),": a URL to a verifiable credential. When the URL is dereferenced, the resulting verifiable credential must have type property that includes the RevocationList2020Credential value.")),(0,r.kt)("p",null,"When a revocation list is published, the result is a verifiable credential that encapsulates the revocation list. This ",(0,r.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-status-rl-2020/#revocationlist2020credential"},"revocation list credential")," must have the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID"),": an id property that matches the value specified in revocationListCredential for the corresponding RevocationList2020Status."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Types"),": must contain RevocationList2020Credential."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Credential Subject Type"),": the type of the credential subject must be RevocationList2020."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Credential Subject Encoded List"),": The encodedList property of the credential subject must be the ZLIB-compressed ",(0,r.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/vc-status-rl-2020/#bib-rfc1950"},"RFC1950"),", base-64 encoded ",(0,r.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/vc-status-rl-2020/#bib-rfc4648"},"RFC4648")," bitstring values for the associated range of verifiable credential status values. The uncompressed bitstring must be at least 16KB in size.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Revocation List 2020 is not yet supported in the IOTA Identity Framework"))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following code exemplifies how you can revoke a ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Verifiable Credential(VC)")," by removing a verification method (public key) from the DID Document of the Issuer. This means the VC can no longer be validated. This would invalidate every VC signed with the same public key, meaning the Issuer would have to sign every VC with a different key."),(0,r.kt)(o.Z,{nodeReplitLink:"https://repl.it/@IOTAFoundation/revoke-vc?lite=true",rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! This example shows how to revoke a verifiable credential.\n//!\n//! The Verifiable Credential is revoked by actually removing a verification method (public key)\n//! from the DID Document of the Issuer.\n//! As such, the Verifiable Credential can no longer be validated.\n//! This would invalidate every Verifiable Credential signed with the same public key, therefore the\n//! issuer would have to sign every VC with a different key.\n//!\n//! cargo run --example account_revoke_vc\n\nuse identity::account::Account;\nuse identity::account::AccountBuilder;\nuse identity::account::IdentitySetup;\nuse identity::account::MethodContent;\nuse identity::account::Result;\nuse identity::core::json;\nuse identity::core::FromJson;\nuse identity::core::Url;\nuse identity::credential::Credential;\nuse identity::credential::CredentialBuilder;\nuse identity::credential::Subject;\nuse identity::crypto::ProofOptions;\nuse identity::did::DID;\nuse identity::iota::CredentialValidationOptions;\nuse identity::iota::CredentialValidator;\nuse identity::iota::ResolvedIotaDocument;\nuse identity::iota::Resolver;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // ===========================================================================\n  // Create a Verifiable Credential.\n  // ===========================================================================\n\n  // Create an account builder with in-memory storage for simplicity.\n  // See `create_did` example to configure Stronghold storage.\n  let mut builder: AccountBuilder = Account::builder();\n\n  // Create an identity for the issuer.\n  let mut issuer: Account = builder.create_identity(IdentitySetup::default()).await?;\n\n  // Add a dedicated verification method to the issuer, with which to sign credentials.\n  issuer\n    .update_identity()\n    .create_method()\n    .content(MethodContent::GenerateEd25519)\n    .fragment("key-1")\n    .apply()\n    .await?;\n\n  // Create a credential subject indicating the degree earned by Alice.\n  let subject: Subject = Subject::from_json_value(json!({\n    "id": "did:iota:B8DucnzULJ9E8cmaReYoePU2b7UKE9WKxyEVov8tQA7H",\n    "name": "Alice",\n    "degree": "Bachelor of Science and Arts",\n    "GPA": "4.0",\n  }))?;\n\n  // Build credential using subject above and issuer.\n  let mut credential: Credential = CredentialBuilder::default()\n    .id(Url::parse("https://example.edu/credentials/3732")?)\n    .issuer(Url::parse(issuer.did().as_str())?)\n    .type_("UniversityDegreeCredential")\n    .subject(subject)\n    .build()?;\n\n  // Sign the Credential with the issuer\'s verification method.\n  issuer.sign("#key-1", &mut credential, ProofOptions::default()).await?;\n\n  // ===========================================================================\n  // Revoke the Verifiable Credential.\n  // ===========================================================================\n\n  // Remove the public key that signed the VC from the issuer\'s DID document\n  // This effectively revokes the VC as it will no longer be able to be verified.\n  issuer\n    .update_identity()\n    .delete_method()\n    .fragment("key-1")\n    .apply()\n    .await?;\n\n  // Check the verifiable credential is revoked.\n  let resolver: Resolver = Resolver::new().await?;\n  let resolved_issuer_doc: ResolvedIotaDocument = resolver.resolve_credential_issuer(&credential).await?;\n  let validation_result = CredentialValidator::validate(\n    &credential,\n    &resolved_issuer_doc,\n    &CredentialValidationOptions::default(),\n    identity::iota::FailFast::FirstError,\n  );\n\n  println!("VC validation result: {:?}", validation_result);\n  assert!(validation_result.is_err());\n  println!("Credential successfully revoked!");\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.5/bindings/wasm/examples-account/src/revoke_vc.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.5/examples/account/revoke_vc.rs",mdxType:"CodeSnippet"}))}p.isMDXComponent=!0},7903:function(e,t,i){i.d(t,{Z:function(){return o}});var n=i(86010),a=i(67294),r=i(87308);function o(e){var t=e.nodeReplitLink,i=e.rustContent,o=e.nodeGithubLink,s=e.rustGithubLink,l=a.useState("node"),c=l[0],d=l[1],u=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,a.useEffect)((function(){var e=localStorage.getItem("lang"),n=e||"node";"node"!==n||t||(n="rust"),"rust"!==n||i||(n="node"),d(n)})),a.createElement("div",null,a.createElement("div",{className:(0,n.Z)("langSelector")},t&&a.createElement("button",{className:(0,n.Z)("button","languageButton","mr-sm",{activeButton:"node"===c,inactiveButton:"node"!==c}),onClick:function(){localStorage.setItem("lang","node"),d("node")}},"Node.js"),i&&a.createElement("button",{className:(0,n.Z)("button","languageButton",{activeButton:"rust"==c,inactiveButton:"rust"!==c}),onClick:function(){localStorage.setItem("lang","rust"),d("rust")}},"Rust")),a.createElement("div",{className:(0,n.Z)("codeSnippetContainer")},"node"===c?a.createElement(a.Fragment,null,a.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):a.createElement("div",{className:(0,n.Z)("rustContainer")},a.createElement(r.Z,{className:(0,n.Z)("noMarginBottom"),language:"rust"},i))),a.createElement("div",{className:(0,n.Z)("githubLink")},o&&"node"===c&&a.createElement("a",{href:o,target:"_blank"},"GitHub\xa0",u),s&&"rust"===c&&a.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u)))}}}]);