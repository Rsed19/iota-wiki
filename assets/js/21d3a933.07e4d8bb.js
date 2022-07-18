"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[73461],{48371:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=["components"],s={},d="Zebra-IOTA-Edge-SDK : Identity Enabler : 101 Tutorial",l={unversionedId:"zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial",id:"zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial",title:"Zebra-IOTA-Edge-SDK : Identity Enabler : 101 Tutorial",description:"Understanding Decentralized Identities",source:"@site/content/build/zebra-iota-edge-sdk/production/documentation/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial.md",sourceDirName:"zebra-iota-edge-sdk",slug:"/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial",permalink:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial",draft:!1,editUrl:"https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main/documentation/content/build/zebra-iota-edge-sdk/production/documentation/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"Zebra-IOTA-Edge-SDK : Identity Enabler : 102 Tutorial",permalink:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial"}},c={},p=[{value:"Introduction to Digital Identities",id:"introduction-to-digital-identities",level:2},{value:"Decentralized Digital Identities",id:"decentralized-digital-identities",level:2},{value:"Applications of Decentralized Identities",id:"applications-of-decentralized-identities",level:2},{value:"DLT Technologies and IOTA",id:"dlt-technologies-and-iota",level:2},{value:"The IOTA Identity Framework",id:"the-iota-identity-framework",level:2},{value:"The Zebra-IOTA Edge SDK: Overview",id:"the-zebra-iota-edge-sdk-overview",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Zebra DataWedge Integration",id:"zebra-datawedge-integration",level:3},{value:"Roadmap",id:"roadmap",level:2},{value:"Next Steps",id:"next-steps",level:2}],h={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zebra-iota-edge-sdk--identity-enabler--101-tutorial"},"Zebra-IOTA-Edge-SDK : Identity Enabler : 101 Tutorial"),(0,r.kt)("h2",null,"Understanding Decentralized Identities"),(0,r.kt)("p",null,"In this tutorial series you will learn how to use the ",(0,r.kt)("strong",{parentName:"p"},"Identity Enabler")," of the Zebra-IOTA Edge SDK to issue, verify and manage decentralized and interoperable identities for people, organizations or devices. If you are already familiar with the IOTA Tangle and / or the concepts behind Decentralized Identity you can jump directly to the ",(0,r.kt)("a",{parentName:"p",href:"#the-zebra-iota-edge-sdk-overview"},"tutorial introduction"),". "),(0,r.kt)("p",null,"Other parts in this series are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial"},"102 - Managing Credentials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial"},"103 - Verifying Credentials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial"},"104 - Device onboarding"))),(0,r.kt)("h2",{id:"introduction-to-digital-identities"},"Introduction to Digital Identities"),(0,r.kt)("p",null,"Based on its ",(0,r.kt)("a",{parentName:"p",href:"https://www.justaskgemalto.com/en/what-is-digital-identity/"},"technical definition")," a ",(0,r.kt)("strong",{parentName:"p"},"digital identity")," \u201cis the information on an entity used by computer systems to represent an external agent. That agent may be a person, organization, application, or device.\u201d"),(0,r.kt)("p",null,"The details collected about an identity (for example name, email address, DoB, credit card number, vaccinations taken for personal identities) during the identity creation phase represent what are called the ",(0,r.kt)("strong",{parentName:"p"},"identity claims"),". An identity is associated with zero, one or multiple claims."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/101/image2.png",width:"50%",alt:"Decentralized Identity Overview"})),(0,r.kt)("p",null,"Different roles can be distinguished (see figure above):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identity ",(0,r.kt)("strong",{parentName:"li"},"Subject"),". The agent in question (person, organization, device, \u2026)."),(0,r.kt)("li",{parentName:"ul"},"Identity ",(0,r.kt)("strong",{parentName:"li"},"Holder"),". The entity that presents an identity, (usually the Identity Subject) to a Verifier (see below)."),(0,r.kt)("li",{parentName:"ul"},"Identity ",(0,r.kt)("strong",{parentName:"li"},"Issuer"),". The entity that, after verifying the identity claims made (with a process usually named ",(0,r.kt)("em",{parentName:"li"},"Know Your Customer, KYC"),"), issues an identity, for instance, the public authorities when it comes to national IDs or vaccination certificates."),(0,r.kt)("li",{parentName:"ul"},"Identity ",(0,r.kt)("strong",{parentName:"li"},"Verifier"),": The entity that verifies the authenticity of an identity presented by a Holder. For instance, a restaurant verifying a health passport to grant admission to the holder.")),(0,r.kt)("p",null,"Once an identity is issued it can be used to access a number of services that accept that identity. These services are therefore able to verify that the presented identity exists and it is authentic. In case this ability to verify a given identity is only accessible to the original identity issuer, the digital identity is called a ",(0,r.kt)("em",{parentName:"p"},"centralized digital identity"),". An example of this is the identity that our Internet Provider issued to us (through a username and password) to access the Internet and to pay our bills online."),(0,r.kt)("h2",{id:"decentralized-digital-identities"},"Decentralized Digital Identities"),(0,r.kt)("p",null,"There are novel application scenarios where a subject has to prove its own identity and check those of other parties in the context of ",(0,r.kt)("strong",{parentName:"p"},"heterogeneous")," and global, distributed application services. This requires that the subject\u2019s digital identity and claims are verified without the need to create new digital identities (one for each service or geography) and to repeat the different issuance and claim verification process."),(0,r.kt)("p",null,"This requires the creation of a new model for issuing and verifying digital identities. A model that allows any verifier to verify subject\u2019s identities issued by different issuers and that ",(0,r.kt)("em",{parentName:"p"},"avoids duplication")," in the creation of verified claims. And this is where ",(0,r.kt)("strong",{parentName:"p"},"Decentralized Identities")," come into play."),(0,r.kt)("p",null,"Decentralized digital identities (DIDs) are a new type of digital identities that allow for the creation of identity and their claims verification in a decentralized way. This does not require any one to one integration between identity issuers and identity verifiers. As a result DIDs allow for high scalability and reduction of time and costs, as claims already proofed against a given identity issuer are not required to be proofed again against a different one (e.g. a company operating in a different country)."),(0,r.kt)("p",null,"DIDs build on basic principles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identity and its claims are controlled by the Identity Holder, which is usually equal to the Identity Subject;"),(0,r.kt)("li",{parentName:"ul"},"Identity Verifiers rely on digital signatures to trust the authority of Identity Issuers and the claims that they verify;"),(0,r.kt)("li",{parentName:"ul"},"Verified claims about the Identity Subject are issued in the form of digital certificates signed by Identity Issuers and can be stored directly by the subject/holder;"),(0,r.kt)("li",{parentName:"ul"},"The public key cryptographic materials are anchored to a Distributed Ledger (such as IOTA) to ensure multiple stakeholders access and self-sovereign control on them."),(0,r.kt)("li",{parentName:"ul"},"Acting as Issuer, Subject, Holder, or Verifier requires neither registration nor approval by any authority, as the trust involved is bilateral between parties.")),(0,r.kt)("h2",{id:"applications-of-decentralized-identities"},"Applications of Decentralized Identities"),(0,r.kt)("p",null,"There are several applications of decentralized identities in different domains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Personal Information Management"),": The main application is self-sovereign identities as a privacy improvement. In fact, self-sovereign identities allow individuals to manage their identities (securely stored on their devices) without the intervention of a central authority or issuer. For instance, health credentials could be verified by a restaurant without interacting with a government service endpoint. For a more detailed description of this domain of application, please check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JamesSwinton/Zebra-IOTA-VerifiableCredentials/blob/main/Papers/IOTA%20-%20HealthPass%20-%20adoption%20paper.pdf"},"IOTA-Zebra joint whitepaper")," on health passports and the summary in this ",(0,r.kt)("a",{parentName:"p",href:"https://blog.iota.org/digital-green-certificates-a-decentralized-and-interoperable-infrastructure/"},"blogpost"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Trade Certificates"),": Verifiable claims anchored to decentralized identities can be used to represent digitally different kinds of certificates associated with trade items. For instance:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A phytosanitary certificate is waived to allow entrance of a foreign shipment through a customs post."),(0,r.kt)("li",{parentName:"ul"},"An Electric Vehicle Battery testing certificate is presented by a manufacturer to make claims about the testing made, thus guaranteeing and committing to a proper functioning of the device within a certain timeframe."),(0,r.kt)("li",{parentName:"ul"},"An organisation seeking to prove compliance of a product to certain quality standards can request for certification by a third-party auditor by means of a certificate associated with the product. Subsequently, a customer may verify the certificate as well as the issuing auditor\u2019s identity independently. The identities of the organisations, products and possibly the customer are represented by a Decentralised Identity over which they have full ownership."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Decentralized Identity (DID) for Organizations"),": The main application is the \u201cDID for organizations in global trade\u201d use case. For instance, a trader from Kenya creates its decentralized digital identity (DID) and receives a number of Credentials from Kenyan authorities after the requested verification processes. Some of these Credentials are also accepted by the EU authorities. Once starting to trade in Argentina, the same trader does not require new credentials as the existing ones are already matching those required by the Argentinian authorities, who can verify their authenticity in a decentralized way, without the need to integrate with any of the Kenya or EU Identity Issuers. You can watch this video which shows how we are applying it to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=bnAfclXTaeI"},"TLIP Project")," jointly developed by TradeMark East Africa and IOTA.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Decentralized Device Identity"),". Any device, such as a printer, scanner or RFID reader used in supply chains, may be issued a decentralized identity and associated credentials by the organization owning it. As a result all interactions made with that device can be recorded and audited, increasing the level of traceability, accountability, security and trust in the daily operations of an organization. For instance, a Zebra scanner in a warehouse can be assigned a decentralized identity, including certain verifiable credentials. When the device generates supply chain events, for instance scanning trade items (pallets, cases, etc.), a new record, signed with the keys bound to the identity of such a device, can be recorded and anchored to a distributed ledger such as IOTA. As a result, any associated business operation could be traceable all the way from an origin device to the corresponding business transaction. The Zebra-IOTA SDK already includes a reference application (",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial"},"DeviceID Application")),") structured around a wizard that allows onboarding devices owned by an organization (see below).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supply Chain Credentials"),". Currently there are many supply chain processes that are actually conducted without the proper level of security or with no digitisation at all. We can imagine a truck driver arriving into a warehouse requesting to load / unload some pallets and showing just a document on paper with the transportation order. These kind of processes involve identity, trust and change of custody records between multiple parties each one holding their own decentralized identity: the warehouse manager, the truck driver, the logistics service provider, the supplier company and the customer company, for instance:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The logistics service provider has to issue a credential to the truck driver so that he is authorized to transport certain pallets"),(0,r.kt)("li",{parentName:"ul"},"The truck driver needs to present a credential to the warehouse manager conveying that he is entitled to load/unload the right pallets"),(0,r.kt)("li",{parentName:"ul"},"The warehouse manager needs to verify the truck\u2019s driver credential to allow the load / unload"),(0,r.kt)("li",{parentName:"ul"},"The logistics service provider needs to prove that the goods were loaded and later delivered to the customer"),(0,r.kt)("li",{parentName:"ul"},"The supplier needs to prove that the goods were handed over to the logistics service provider and later received to the customer")))),(0,r.kt)("p",null,"As the amount of stakeholders and their interrelationships can be huge, the only viable solution to these problems is the usage of decentralized identities. The Zebra-IOTA Edge SDK already provides application blueprints that can be extended to meet the scenarios described above."),(0,r.kt)("h2",{id:"dlt-technologies-and-iota"},"DLT Technologies and IOTA"),(0,r.kt)("p",null,"A Ledger is an information store that keeps final and definitive (immutable) records of transactions. A Distributed Ledger is a type of ledger that is shared, replicated, and synchronized in a distributed and decentralized manner. A decentralised system is a system wherein control is shared among the persons or organizations participating in the operation of the system."),(0,r.kt)("p",null,"IOTA is an open source, scalable and permissionless DLT that enables sharing of data guaranteeing traceability of their source, alongside with integrity and immutability of the shared information, and dedicated access management, e.g., who can read what. This is possible using complementary frameworks such as the ",(0,r.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-identity-beta-release/"},"IOTA Identity Framework"),"."),(0,r.kt)("p",null,"In contrast with traditional blockchain-based DLTs, IOTA is based on a Directed Acyclic Graph, the Tangle. ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ivWqqfzunhI"},"This video")," explains how IOTA's Tangle works. ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org"},"Here")," you can find a get started guide intended for IOTA's developers with additional references."),(0,r.kt)("h2",{id:"the-iota-identity-framework"},"The IOTA Identity Framework"),(0,r.kt)("p",null,"The IOTA Identity Framework is an implementation of the W3C Decentralized Identity standards leveraging IOTA Tangle. Such standards are composed of two different specifications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"DID specification"),". Defines a new URI scheme, the ",(0,r.kt)("strong",{parentName:"p"},"did")," scheme, that allows associating dereferenceable URIs to identities. In addition, the specification defines the syntax and structure of a JSON document, the DID document, that contains all the cryptographic materials or metadata associated with an identity identified by a DID URI. Such a JSON document is the result of dereferencing the DID URI."),(0,r.kt)("p",{parentName:"li"},"Different DID methods can be defined, being \u201ciota\u201d one of them, which allows anchoring a DID document to the IOTA Distributed Ledger and managing all its lifecycle (creation, retrieval, update, etc.)."),(0,r.kt)("p",{parentName:"li"},"For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"did:iota:GDCYuLMc14aCuxQXTJ8a4Rdw93WYH19oqTXiDCES4VvE")," is an example of IOTA DID. You can view the associated DID document at ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.iota.org/mainnet/identity-resolver/did:iota:GDCYuLMc14aCuxQXTJ8a4Rdw93WYH19oqTXiDCES4VvE"},"https://explorer.iota.org/mainnet/identity-resolver/did:iota:GDCYuLMc14aCuxQXTJ8a4Rdw93WYH19oqTXiDCES4VvE")," . As you can see the most important part of a DID document are the verification methods which contain public keys that can be later used to verify credentials or signatures in general."),(0,r.kt)("p",{parentName:"li"},"Using the IOTA Identity library one can create and later retrieve (by dereferencing the DID URI) these documents and point to specific parts of it, for instance specific public keys that can be used to verify credentials issued by the entity controlling the DID.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"Verifiable Credentials")," specification. Defines a JSON(-LD) document format to represent credentials issued by an entity (identified by a DID) to a certain subject (identified by another DID). Those credentials contain several claims represented by JSON-LD properties and values. In addition, a Verifiable Credential contains other metadata such as the issuance or expiration date and the verifiable signature of the issuer, that can be used by the verifier to check for its authenticity. The IOTA Identity Framework provides a library that facilitates the issuance and verification of W3C Verifiable Credentials."))),(0,r.kt)("p",null,"The IOTA Identity framework handles all the interactions with the IOTA Tangle where the DID documents are published and anchored to. In the context of Verifiable Credentials, the Tangle acts as the ",(0,r.kt)("em",{parentName:"p"},"Verifiable Data Registry"),". The IOTA Tangle is well-suited as it provides guarantees of data integrity and immutability and, therefore, trust between participating parties but without incurring any fees."),(0,r.kt)("p",null,"The IOTA Identity Framework is coded in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs"},"Rust")," but has also defined WASM (Javascript) bindings which facilitate its usage to Mobile and Web Developers. In fact, the Zebra Edge SDK is using those bindings to implement the functionality described by this tutorial."),(0,r.kt)("h2",{id:"the-zebra-iota-edge-sdk-overview"},"The Zebra-IOTA Edge SDK: Overview"),(0,r.kt)("p",null,"The Zebra-IOTA Edge SDK is composed of different open source modules (enablers) that facilitate the creation of applications that exploit IOTA\u2019s DLT capabilities on edge devices, in particular Zebra Devices. The enabler described by this tutorial (",(0,r.kt)("em",{parentName:"p"},"Identity Enabler"),") is the one corresponding to decentralized identities. It is based on the IOTA Identity Framework and makes it easier to develop solutions on the edge that exploit the capabilities of decentralized identities for people, devices or organizations."),(0,r.kt)("p",null,"The Identity Enabler is composed of a set of ",(0,r.kt)("strong",{parentName:"p"},"reference applications")," that can be used as a ","_","scaffold / blueprint ","_","for developers, and as guidance on how to solve the most common problems around decentralized identity, such as credential issuance or verification using the APIs offered by the IOTA Identity Framework."),(0,r.kt)("p",null,"The SDK uses Web Technologies for the user interface of the aforementioned reference applications. In particular, those applications are coded in ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", using the ",(0,r.kt)("a",{parentName:"p",href:"https://svelte.dev"},"Svelte framework"),". To package the Web Applications as Android applications, the ",(0,r.kt)("a",{parentName:"p",href:"https://capacitorjs.com/"},"Capacitor framework")," is used. That means that you can run these applications in your favourite browser as Web Applications or in your Android device or emulator."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"In order to follow this tutorial series and experiment with the Zebra Edge SDK Identity Enabler you would need the following software artefacts installed on your local development environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Npm")," or yarn package managers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/studio"},"Android Studio")),(0,r.kt)("li",{parentName:"ul"},"Android development tools: ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/adb"},"adb")," command line tool, Android emulator (",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/run/managing-avds"},"AVD"),")"),(0,r.kt)("li",{parentName:"ul"},"Ideally a Zebra Android device equipped with camera/scanning capabilities and the ",(0,r.kt)("a",{parentName:"li",href:"https://techdocs.zebra.com/datawedge/11-1/guide/about/"},"DataWedge")," connector. This tutorial has been developed using the ",(0,r.kt)("a",{parentName:"li",href:"https://www.zebra.com/gb/en/products/mobile-computers/handheld/tc21-tc26.html"},"TC21")," device executing Android 10. It also has been tested with an old regular Android 5.1.1 device."),(0,r.kt)("li",{parentName:"ul"},"The codebase has been tested using the Android System Webview runtimes corresponding to versions 95 (on the Android 5.1.1) and 96 (TC21)."),(0,r.kt)("li",{parentName:"ul"},"DataWedge profiles for the different applications. They can be downloaded from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/test/datawedge/datawedge.db"},"here")," and then imported into your own Zebra device. The profile for each application shall be configured as follows:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Intent Output: Enabled"),(0,r.kt)("li",{parentName:"ul"},"Intent Action: ",(0,r.kt)("inlineCode",{parentName:"li"},"org.iota.zebra.<verifier|holder|device_id>.intent.action.SCAN")),(0,r.kt)("li",{parentName:"ul"},"Intent category: ",(0,r.kt)("inlineCode",{parentName:"li"},"org.iota.zebra.intent.category.DATAWEDGE")),(0,r.kt)("li",{parentName:"ul"},"Intent delivery: Send via ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"startService")))))),(0,r.kt)("p",null,"In the case of the TC21 device we deliberately updated the Android System Webview runtime to version 96. Despite being restricted from Google Play, we managed to install it manually through this ",(0,r.kt)("a",{parentName:"p",href:"https://www.apkmirror.com/apk/google-inc/android-system-webview/android-system-webview-96-0-4664-104-release/android-system-webview-96-0-4664-104-4-android-apk-download/"},"portal")," (please note that ",(0,r.kt)("strong",{parentName:"p"},"64 bit")," ",(0,r.kt)("strong",{parentName:"p"},"ARM")," versions should be downloaded)."),(0,r.kt)("p",null,"If you are going to extend the reference applications, or develop your own applications we recommend that you install the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode")," environment together with the following plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prettier: ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode")),(0,r.kt)("li",{parentName:"ul"},"Svelte: ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode"},"https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode")),(0,r.kt)("li",{parentName:"ul"},"ES Lint: ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"))),(0,r.kt)("p",null,"If you want to do a more exhaustive debugging you can use the adb command line tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"adb logcat | grep -F \"`adb shell ps | grep org.iota.zebra | tr -s [:space:] ' ' | cut -d' ' -f2`\"\n")),(0,r.kt)("h3",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Under the",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK"}," identity-enabler")," folder, there is one subfolder for each of the reference applications. For each application the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory contains the application source code and static web assets. Additionally, each application has a ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ts")," file with settings and contains an Android application in the ",(0,r.kt)("inlineCode",{parentName:"p"},"android")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 identity-enabler\n\u2502   \u251c\u2500\u2500 deviceId-mobile-app\n\u2502   \u2502   \u251c\u2500\u2500 android\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 gradle\n\u2502   \u2502   \u2514\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 holder-mobile-app\n\u2502   \u2502   \u251c\u2500\u2500 android\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 gradle\n\u2502   \u2502   \u2514\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 verifier-mobile-app\n\u2502         \u251c\u2500\u2500 android\n\u2502         \u2502   \u251c\u2500\u2500 app\n\u2502         \u2502   \u2514\u2500\u2500 gradle\n\u2502         \u2514\u2500\u2500 src\n")),(0,r.kt)("p",null,"The specific code that deals with the IOTA Identity framework is at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/dev/identity-enabler/verifier-mobile-app/src/services/identityService.ts"},"IdentityService")," wrapper class. We will explain the specific details of that class under the corresponding application tutorial section. In addition there is a \u201cshow me the code\u201d button on each application screen that you can use to find relevant code snippets in context."),(0,r.kt)("p",null,"During the tutorial we will explain how the applications can make use of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs"},"IOTA Identity")," Framework to solve the decentralized identity functionalities. However, we will not explain the details concerning the implementation of the user interface through the Svelte Framework. Nonetheless, we can recommend this ",(0,r.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/"},"Svelte tutorial"),"."),(0,r.kt)("h3",{id:"zebra-datawedge-integration"},"Zebra DataWedge Integration"),(0,r.kt)("p",null,"The SDK solves the problem of bridging ",(0,r.kt)("a",{parentName:"p",href:"https://techdocs.zebra.com/datawedge/11-1/guide/about/"},"Zebra DataWedge")," and the Web Application code. The main idea is that there is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/dev/identity-enabler/verifier-mobile-app/android/app/src/main/java/org/iota/zebra/verifier/datawedge/DataWedgeService.java"},"DataWedge service")," that is awakened whenever a new DataWedge intent is triggered (if properly configured through a DataWedge profile as previously explained). Afterwards, the Service triggers a data observation event (with the scanned string) to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/dev/identity-enabler/verifier-mobile-app/android/app/src/main/java/org/iota/zebra/verifier/MainActivity.java#L64"},"main Android Activity")," which receives it and executes the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/identity-enabler/verifier-mobile-app/src/App.svelte#L22"},(0,r.kt)("inlineCode",{parentName:"a"},"onScan"))," method at the Web View. Such a method will react to the scanned data accordingly. For those devices which do not incorporate a scanner with DataWedge capabilities, the scanning can proceed through the regular device\u2019s camera (open through the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"},"Media Device Web APIs"),") and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zxing-js/library"},"zxing-js library")," library. For that purpose there is a Svelte ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/identity-enabler/verifier-mobile-app/src/components/Scanner.svelte"},"Scanner")," component and a Svelte ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/identity-enabler/verifier-mobile-app/src/pages/Scan.svelte"},"Scan")," page that can be easily reused."),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"The IOTA Foundation and Zebra Technologies are working continuously to improve and extend the Zebra-IOTA Edge SDK."),(0,r.kt)("p",null,"First of all, by Q2 2022 we plan to release an additional enabler to facilitate the development of applications on the edge based on ",(0,r.kt)("a",{parentName:"p",href:"https://blog.iota.org/epcis-2-0-a-global-standard-to-build-trusted-and-decentralized-supply-chains-with-iota/"},"GS1 EPCIS 2.0"),". The overall goal of EPCIS is to enable disparate supply chain actors to create and share event visibility data (in the form of business events), both within and across enterprises. The ",(0,r.kt)("strong",{parentName:"p"},"EPCIS Enabler"),", in combination with the Identity Enabler, will allow anchoring these events directly from devices to the IOTA DLT. As a result, immutability and trust between actors will be guaranteed, enhancing supply chain digitisation on a decentralized basis."),(0,r.kt)("p",null,"When it comes to the specific functions of the Identity Enabler, we plan to extend it with an ",(0,r.kt)("em",{parentName:"p"},"Issuer Application")," blueprint and to integrate other credential transport mechanisms such as ",(0,r.kt)("strong",{parentName:"p"},"NFC"),"."),(0,r.kt)("p",null,"Finally, on the business development side of things we invite Zebra ISVs to get in touch with us to start creating novel edge solutions along supply chains leveraging this SDK."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"If you want to know how you can generate and manage identities and credentials using the UI toolkit and libraries offered by\nthe SDK, please continue reading the ",(0,r.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial"},"102 Tutorial"),"."))}u.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=i.createContext({}),l=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(a),u=n,m=h["".concat(d,".").concat(u)]||h[u]||p[u]||r;return a?i.createElement(m,o(o({ref:t},c),{},{components:a})):i.createElement(m,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);