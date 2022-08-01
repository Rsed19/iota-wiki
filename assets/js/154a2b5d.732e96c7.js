"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[67601],{76581:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),i=["components"],r={title:"Data Transfer",description:"A major use-case for the IOTA Technology is Data Transfer. Learn how it works.",image:"/img/iota-wiki.png",keywords:["explanation"]},l="Data Transfer",d={unversionedId:"about-iota/data-transfer",id:"about-iota/data-transfer",title:"Data Transfer",description:"A major use-case for the IOTA Technology is Data Transfer. Learn how it works.",source:"@site/internal/learn/about-iota/data-transfer.md",sourceDirName:"about-iota",slug:"/about-iota/data-transfer",permalink:"/learn/about-iota/data-transfer",draft:!1,editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/about-iota/data-transfer.md",tags:[],version:"current",lastUpdatedAt:1658264343,formattedLastUpdatedAt:"Jul 19, 2022",frontMatter:{title:"Data Transfer",description:"A major use-case for the IOTA Technology is Data Transfer. Learn how it works.",image:"/img/iota-wiki.png",keywords:["explanation"]},sidebar:"learn",previous:{title:"The Tangle",permalink:"/learn/about-iota/tangle"},next:{title:"Value Transfer",permalink:"/learn/about-iota/value-transfer"}},h={},u=[{value:"Data Usage",id:"data-usage",level:2},{value:"What is an IOTA message?",id:"what-is-an-iota-message",level:2},{value:"Sending a message in IOTA",id:"sending-a-message-in-iota",level:2},{value:"Message structure",id:"message-structure",level:2},{value:"Message validation",id:"message-validation",level:3},{value:"Payloads",id:"payloads",level:3}],c={toc:u};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"data-transfer"},"Data Transfer"),(0,s.kt)("p",null,"IOTA offers the ability to transfer Data for free. The Data transfer is fast, immutable, unforgeable, and secure and is one of the core features of IOTA. This capability opens up a wide array of use cases that most other cryptocurrencies cannot serve in a way that IOTA does."),(0,s.kt)("p",null,"Clients, which can be wallets or applications, send and receive messages (data objects) through nodes in IOTA. Nodes are the entry and exit points for these messages, and those nodes communicate with each other and with the connected clients."),(0,s.kt)("p",null,"There are several types of messages implemented in IOTA. Some messages transfer value (the IOTA token or digital assets), while others transfer only pure data, and some message types can even contain both value and data. This flexible message structure enables the decentralized transport of data and value in a single message with the highest security grade and the total absence of fees. The network nodes take care of the secure distribution of all those messages in the Tangle."),(0,s.kt)("h2",{id:"data-usage"},"Data Usage"),(0,s.kt)("p",null,"Many applications and use cases can profit from this combination of free, secure, and fast data and value transport, which sees demand in many major industries. Read more about ",(0,s.kt)("a",{parentName:"p",href:"https://www.iota.org/solutions/industries"},"IOTA Data use cases"),"."),(0,s.kt)("h2",{id:"what-is-an-iota-message"},"What is an IOTA message?"),(0,s.kt)("p",null,"A message is an object consisting of information broadcasted in the Tangle."),(0,s.kt)("p",null,"Every application that uses the protocol can issue these information objects to a node. The job of an Iota node is to verify incoming messages and broadcast them through the network if they are considered valid and follow the standard specifications of the protocol."),(0,s.kt)("p",null,'If a node decides that a message is valid, it will send it to its direct neighbors using the gossip protocol. Every neighbor that receives the message transfers it again to its neighbors and so on. Very quickly, every other node in the network sees the message and has the same information and the same knowledge of the "state" of the network at a given time.'),(0,s.kt)("p",null,"A Message consists of basic information that defines the type and structure of the message, and it can also contain different ",(0,s.kt)("strong",{parentName:"p"},"payloads"),". A payload is an attachment that can include an IOTA transaction and many other kinds of data."),(0,s.kt)("p",null,"The IOTA protocol categorizes these information packages into different types and handles certain types differently than others. Therefore, every message sent to the network must contain a unique label as an identifier that describes what this message is and what should be done with it. Only if this information is stated correctly, a node will accept and process a message.\nA more detailed description of this process on protocol level can be found in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0006/tip-0006.md"},"TIP-0006 (Tangle Message)"),"."),(0,s.kt)("h2",{id:"sending-a-message-in-iota"},"Sending a message in IOTA"),(0,s.kt)("p",null,"So-called clients create messages. Those clients can be an IOTA wallet or any other application generating IOTA messages. The client sends those messages to an IOTA node to process them."),(0,s.kt)("p",null,"To ensure a message is valid and a node knows what to do with the message, the message label created by a client must provide several pieces of information for the node to be processed and enter the network."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Message ID")),(0,s.kt)("p",null,"The message ID is created as a unique cryptographic hash of the bytes contained in the message. It is created by the client (application) or wallet that issues the message."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Network ID")),(0,s.kt)("p",null,"An identification in which IOTA network the message belongs (Mainnet / Testnet / private network) - Nodes will only accept messages that identify themselves as part of the network the node belongs to."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parents length and Parents ID")),(0,s.kt)("p",null,'This is the amount and the identifier of the messages referenced by the new message. To build up the graph structure of the Tangle, every new message in the Tangle must reference 2 - 8 previous messages. The node selects those two messages and sends the IDs to the client, and the client must include this information into the message "label." Therefore nodes make sure the data structure of the Tangle evolves as specified in the protocol.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Payload length")),(0,s.kt)("p",null,"Because messages in IOTA are not allowed to exceed a size of 32kb, the message must declare the size of its payload to the node... like you would need to report the weight of a package if you want to send it with a courier in advance."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Payload type")),(0,s.kt)("p",null,"A definition of which type of payload is part of the message. The node needs to know this, as some payload types need to processed differently than others."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Nonce")),(0,s.kt)("p",null,"That is the nonce that lets this message fulfill the Proof-of-Work requirement. Proof of work is mainly done locally on the device that issues the message and is a form of spam protection. But if the node allows it, PoW can be done by the node instead of the client. This is a handy feature as it enables very low-powered devices to issue messages (like sensors, chips, etc.) without doing the PoW in the local device. If connected to a node that allows remote PoW, those low-power devices can send messages, and the node (which is usually running on a more powerful device) does the PoW for them. This is one of the reasons why IOTA is so suitable for IoT and data applications. Users planning to issue many data messages from a huge amount of extremely low-power devices only need to connect those devices to a node that allows them to do the PoW for them (which will be, in most cases, their own node). As the PoW requirement in IOTA, in general, is extremely low, it is no problem to do this even for a large number of devices by a node."),(0,s.kt)("p",null,"A side note - in the upcoming 2.0 IOTA version, this PoW requirement will become adaptive and is planned to be completely removed for times of normal network loads... Read more about ",(0,s.kt)("a",{parentName:"p",href:"/goshimmer/welcome"},"IOTA 2.0"),"."),(0,s.kt)("h2",{id:"message-structure"},"Message structure"),(0,s.kt)("p",null,"This is the defined syntactical structure of every message in the IOTA protocol (the label of our package):"),(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Type"),(0,s.kt)("th",null,"Description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"NetworkID"),(0,s.kt)("td",null,"uint64"),(0,s.kt)("td",null,"Network identifier. This field will signify whether this message was meant for mainnet, testnet, or a private net. It also tells what protocol rules apply to the message. It is the first 8 bytes of the `BLAKE2b-256` hash of the concatenation of the network type and the protocol version string.")),(0,s.kt)("tr",null,(0,s.kt)("td",null," Parents' length "),(0,s.kt)("td",null," uint8"),(0,s.kt)("td",null," The number of messages we directly approve. Can be any value between 1-8.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Parents "),(0,s.kt)("td",null,"ByteArray[32 * `parents length`]"),(0,s.kt)("td",null,"The Message IDs that are referenced.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Payload Length"),(0,s.kt)("td",null,"uint32"),(0,s.kt)("td",null," The length of the payload. Since its type may be unknown to the node it must be declared in advance. 0 length means no payload will be attached.")),(0,s.kt)("tr",null,(0,s.kt)("td",{colspan:"1"},"Payload"),(0,s.kt)("td",{colspan:"2"},(0,s.kt)("details",{open:"true"},(0,s.kt)("summary",null,"Generic Payload"),(0,s.kt)("blockquote",null,"An outline of a general payload"),(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("th",null,"Name"),(0,s.kt)("th",null,"Type"),(0,s.kt)("th",null,"Description")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Payload Type"),(0,s.kt)("td",null,"uint32"),(0,s.kt)("td",null,"The type of the payload. It will instruct the node on how to parse the fields that follow.")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Data Fields"),(0,s.kt)("td",null,"ANY"),(0,s.kt)("td",null,"A sequence of fields, where the structure depends on ",(0,s.kt)("code",null,"payload type"),".")))))),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Nonce"),(0,s.kt)("td",null,"uint64"),(0,s.kt)("td",null,"The nonce which lets this message fulfill the Proof-of-Work requirement."))),(0,s.kt)("p",null,"All this information must be created by a client (wallet software or other programs that generate IOTA messages) to issue a message to a node and make sure the node knows what to do with this message."),(0,s.kt)("h3",{id:"message-validation"},"Message validation"),(0,s.kt)("p",null,"A message is considered valid if the following syntactic rules are met:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The message size must not exceed 32 KiB (32 ","*"," 1024 bytes)."),(0,s.kt)("li",{parentName:"ol"},"Analyzing the Syntax structure of the message (parsing) does not leave any unknown bits - this means that all the message information is fully readable by the node... unreadable information could contain malicious code and is therefore denied."),(0,s.kt)("li",{parentName:"ol"},"If the payload type is known to the node."),(0,s.kt)("li",{parentName:"ol"},"If the Message PoW Hash indicates that the minimum requirements of PoW requested by the network or the node have been fulfilled."),(0,s.kt)("li",{parentName:"ol"},"Number of parent messages must be between 1-8.")),(0,s.kt)("p",null,"The message will only be accepted for processing if these parameters are met and readable by the node."),(0,s.kt)("h3",{id:"payloads"},"Payloads"),(0,s.kt)("p",null,"A message may contain a payload. Three payload types are currently defined in the mainnet, but developers can create their custom payloads and attach them to messages as long as they fit the general requirements. This means an IOTA message can contain many types of information, and the IOTA token as transaction payload is just one of many. Below is a table of the currently specified core payloads with a link to their specifications."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Payload Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0007/tip-0007.md"},"Transaction Payload")),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0008/tip-0008.md"},"Milestone Payload")),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0006/tip-0006.md#indexation-payload"},"Indexation Payload")),(0,s.kt)("td",{parentName:"tr",align:null},"2")))),(0,s.kt)("p",null,"A message containing only an ",(0,s.kt)("strong",{parentName:"p"},"indexation payload")," (Data) can be sent without a signature. It can hold any data the user wants to send, as long as it is parsable and follows the required syntax and size limit."),(0,s.kt)("p",null,"The message is specified by an ",(0,s.kt)("strong",{parentName:"p"},"index"),", which will make it possible for any users to find this message and the containing Data by searching the network for this index."),(0,s.kt)("p",null,"As you may have recognized, a message in the IOTA network does not need a specific receiver. All messages in the network are propagated to all nodes and are visible to every network user. Also, the data payload (if not encrypted by the sender) is visible for everyone that sees the message. If you want to send a data message using the IOTA protocol that should only be visible to a selected group of receivers, the IOTA Streams framework is built precisely for this purpose. It will enable a direct gateway to receivers and encrypt the information from everyone else in the network."),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"data message"),", which is defined as an indexation payload, can be easily found by everyone who knows that message's index. If you want to send an arbitrary message or sensitive data, you need to tell the receiver which index you are using. He can observe the network for all messages containing this index using an explorer."),(0,s.kt)("p",null,"In a ",(0,s.kt)("strong",{parentName:"p"},"value transaction"),', the payment receiver - an IOTA address - will be specified in the "signed transaction payload" field. Then, only the owner of that specific address can use the contained funds by unlocking them with the private key that belongs to that receiving address. Read more about how sending value transactions in IOTA work here: ',(0,s.kt)("a",{parentName:"p",href:"/learn/about-iota/value-transfer"},"value transfer")),(0,s.kt)("p",null,"As the IOTA protocol is continuously improving, a new specification for payloads has been developed to dramatically extend the functionality of messages and payloads. Please read the ",(0,s.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-tokenization-framework-specifications/"},"IOTA tokenization framework")," specifications.\nThose changes will be implemented after intensive testing in the next update of the IOTA mainnet."))}p.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=d(a),p=o,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||s;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);