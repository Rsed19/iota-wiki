"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[42431],{88908:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=t(87462),o=t(63366),s=(t(67294),t(3905)),i=["components"],r={description:"Learn about key concepts to consider for Node maintenance. These include configuring storage, plugins and how to work with snapshots.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","storage","configuration","snapshots","how to"]},l="Managing a Node",p={unversionedId:"how_tos/managing_a_node",id:"how_tos/managing_a_node",title:"Managing a Node",description:"Learn about key concepts to consider for Node maintenance. These include configuring storage, plugins and how to work with snapshots.",source:"@site/content/build/hornet/develop/documentation/docs/how_tos/managing_a_node.md",sourceDirName:"how_tos",slug:"/how_tos/managing_a_node",permalink:"/hornet/develop/how_tos/managing_a_node",draft:!1,editUrl:"https://github.com/gohornet/hornet/edit/develop/documentation/content/build/hornet/develop/documentation/docs/how_tos/managing_a_node.md",tags:[],version:"current",frontMatter:{description:"Learn about key concepts to consider for Node maintenance. These include configuring storage, plugins and how to work with snapshots.",image:"/img/logo/HornetLogo.png",keywords:["IOTA Node","Hornet Node","storage","configuration","snapshots","how to"]},sidebar:"mySidebar",previous:{title:"Post-installation",permalink:"/hornet/develop/how_tos/post_installation"},next:{title:"How to Run Hornet as a Verifier Node",permalink:"/hornet/develop/how_tos/run_as_a_verifier"}},d={},u=[{value:"Storage",id:"storage",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Snapshots",id:"snapshots",level:2},{value:"Snapshot Pruning",id:"snapshot-pruning",level:3},{value:"Delta snapshots",id:"delta-snapshots",level:4},{value:"Full snapshots",id:"full-snapshots",level:4},{value:"How to Work With Snapshots",id:"how-to-work-with-snapshots",level:3}],h={toc:u};function c(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"managing-a-node"},"Managing a Node"),(0,s.kt)("p",null,"In this section, you can find an overview of the key concepts that you should consider during your node's maintenance cycle."),(0,s.kt)("h2",{id:"storage"},"Storage"),(0,s.kt)("p",null,"Hornet uses an embedded database engine that stores its data in a directory in a file system. You can manage the location using the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.json")," file, under the ",(0,s.kt)("inlineCode",{parentName:"p"},"db")," section, with the ",(0,s.kt)("inlineCode",{parentName:"p"},"path")," key:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json{3}"},'"db": {\n    "engine": "rocksdb",\n    "path": "mainnetdb",\n    "autoRevalidation": false\n  }\n')),(0,s.kt)("p",null,"By convention, you should name that directory after the network type: ",(0,s.kt)("inlineCode",{parentName:"p"},"mainnet")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"testnet"),"."),(0,s.kt)("p",null,"Another important directory is the ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshots")," directory. You can control the ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshots")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"snapshots")," section of the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.json")," file, specifically the ",(0,s.kt)("inlineCode",{parentName:"p"},"fullPath")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"deltaPath")," keys:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"snapshots": {\n    "interval": 50,\n    "fullPath": "snapshots/mainnet/full_snapshot.bin",\n    "deltaPath": "snapshots/mainnet/delta_snapshot.bin",\n    "deltaSizeThresholdPercentage": 50.0,\n    "downloadURLs": [\n      {\n        "full": "https://chrysalis-dbfiles.iota.org/snapshots/hornet/latest-full_snapshot.bin",\n        "delta": "https://chrysalis-dbfiles.iota.org/snapshots/hornet/latest-delta_snapshot.bin"\n      },\n      {\n        "full": "https://cdn.tanglebay.com/snapshots/mainnet/full_snapshot.bin",\n        "delta": "https://cdn.tanglebay.com/snapshots/mainnet/delta_snapshot.bin"\n      }\n    ]\n')),(0,s.kt)("p",null,"You should apply the same convention you use for the database engine to name the directories after the network type: ",(0,s.kt)("inlineCode",{parentName:"p"},"mainnet")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"testnet"),"."),(0,s.kt)("p",null,"Here is the full overview of all files and directories that are leveraged by the Hornet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},".\n\u251c\u2500\u2500 config.json\n\u251c\u2500\u2500 hornet              <EXECUTABLE>\n\u251c\u2500\u2500 p2pstore\n\u2502\xa0\xa0 \u251c\u2500\u2500 [...files]\n\u251c\u2500\u2500 snapshots           <SNAPSHOT DIR>\n\u2502\xa0\xa0 \u2514\u2500\u2500 testnet\n\u2502\xa0\xa0     \u251c\u2500\u2500 delta_snapshot.bin\n\u2502\xa0\xa0     \u2514\u2500\u2500 full_snapshot.bin\n\u2514\u2500\u2500 testnetdb           <DB DIR>\n    \u251c\u2500\u2500 [...db files]\n")),(0,s.kt)("h2",{id:"plugins"},"Plugins"),(0,s.kt)("p",null,"Hornet can be extended by plugins. You can control plugins using the ",(0,s.kt)("inlineCode",{parentName:"p"},"node")," section in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.json")," file, specifically ",(0,s.kt)("inlineCode",{parentName:"p"},"disablePlugins")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"enablePlugins")," keys:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"app": {\n    "alias": "Mainnet",\n    "profile": "auto",\n    "disablePlugins": [],\n    "enablePlugins": []\n  },\n')),(0,s.kt)("p",null,"You can also control plugins using the ",(0,s.kt)("a",{parentName:"p",href:"/hornet/develop/how_tos/post_installation#dashboard"},"Dashboard/web interface"),"."),(0,s.kt)("h2",{id:"snapshots"},"Snapshots"),(0,s.kt)("p",null,"Your node's ledger accumulates many messages, which uses a significant disk capacity over time. This section discusses configuring local snapshots to prune old transactions from your node's database and create backup snapshot files."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},' "snapshots": {\n    "interval": 50,\n    "fullPath": "snapshots/mainnet/full_snapshot.bin",\n    "deltaPath": "snapshots/mainnet/delta_snapshot.bin",\n    "deltaSizeThresholdPercentage": 50.0,\n    "downloadURLs": [\n      {\n        "full": "https://chrysalis-dbfiles.iota.org/snapshots/hornet/latest-full_snapshot.bin",\n        "delta": "https://chrysalis-dbfiles.iota.org/snapshots/hornet/latest-delta_snapshot.bin"\n      },\n      {\n        "full": "https://cdn.tanglebay.com/snapshots/mainnet/full_snapshot.bin",\n        "delta": "https://cdn.tanglebay.com/snapshots/mainnet/delta_snapshot.bin"\n      }\n    ]\n  },\n  "pruning": {\n    "milestones": {\n      "enabled": false,\n      "maxMilestonesToKeep": 60480\n    },\n    "size": {\n      "enabled": true,\n      "targetSize": "30GB",\n      "thresholdPercentage": 10.0,\n      "cooldownTime": "5m"\n    },\n    "pruneReceipts": false\n  },\n')),(0,s.kt)("h3",{id:"snapshot-pruning"},"Snapshot Pruning"),(0,s.kt)("p",null,"During a snapshot, Hornet may delete messages from the ledger if they were confirmed by an old milestone. In other words, the term ",(0,s.kt)("em",{parentName:"p"},"pruning")," means the deletion of the old history from the node database."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you want to enable pruning, you should set the ",(0,s.kt)("inlineCode",{parentName:"li"},"pruning.milestones.enabled")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"pruning.size.enabled")," keys to ",(0,s.kt)("em",{parentName:"li"},"enabled"),"."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"pruning.milestones.maxMilestonesToKeep")," defines how far back from the current confirmed milestone should be pruned."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"pruning.size.targetSize")," defines the maximum database size. Old data will be pruned.")),(0,s.kt)("p",null,"There are two types of snapshots:"),(0,s.kt)("h4",{id:"delta-snapshots"},"Delta snapshots"),(0,s.kt)("p",null,"A delta snapshot points to a specific full snapshot, meaning a delta snapshot consists of the changes since the last full snapshot."),(0,s.kt)("h4",{id:"full-snapshots"},"Full snapshots"),(0,s.kt)("p",null,"The full snapshot includes the whole ledger state to a specific milestone and a solid entry point."),(0,s.kt)("h3",{id:"how-to-work-with-snapshots"},"How to Work With Snapshots"),(0,s.kt)("p",null,"If you are running a Hornet node for the first time, you will need to start it with a full snapshot. Hornet automatically downloads this from trusted sources."),(0,s.kt)("p",null,"Additionally, you can start Hornet with a specific delta snapshot using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Hornet")," tools:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"hornet tool\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snap-gen")," Generates an initial snapshot for a private network."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snap-merge")," Merges a full and delta snapshot into an updated full snapshot."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snap-info")," Outputs information about a snapshot file.")))}c.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=p(t),c=o,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||s;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=h;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);