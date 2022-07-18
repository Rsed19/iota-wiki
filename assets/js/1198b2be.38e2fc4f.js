"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[90166],{94292:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={image:"/img/integration-services/logo/integration_services.png",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",keywords:["how to","create channel","read channel","write channel","example"]},c="Create Channel",s={unversionedId:"examples/java/create-channel",id:"examples/java/create-channel",title:"Create Channel",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",source:"@site/content/build/integration-services/production/documentation/docs/examples/java/create-channel.md",sourceDirName:"examples/java",slug:"/examples/java/create-channel",permalink:"/integration-services/examples/java/create-channel",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/java/create-channel.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",keywords:["how to","create channel","read channel","write channel","example"]},sidebar:"docs",previous:{title:"Trusted Authorities",permalink:"/integration-services/examples/java/trusted-authorities"},next:{title:"Authorize Channel",permalink:"/integration-services/examples/java/authorize-to-channel"}},p={},u=[{value:"Create Channel",id:"create-channel-1",level:2},{value:"Write on a Channel",id:"write-on-a-channel",level:2},{value:"Read from a Channel",id:"read-from-a-channel",level:2}],d={toc:u};function h(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-channel"},"Create Channel"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/CreateChannel.java"},"example-5"),"\nscript authenticates an Integration Services client to manage identities using the admin identity created in ",(0,i.kt)("a",{parentName:"p",href:"how-to-run-examples"},"example-0")," and then performs the following tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creates a channel."),(0,i.kt)("li",{parentName:"ol"},"Writes data on the channel."),(0,i.kt)("li",{parentName:"ol"},"Reads data from the channel")),(0,i.kt)("p",null,"You can run the example with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/examples/folder/\nmvn exec:java -Dexec.mainClass=net.gradbase.examples.CreateChannel\n")),(0,i.kt)("h2",{id:"create-channel-1"},"Create Channel"),(0,i.kt)("p",null,"You can create a channel using the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'    Map<String, String> topics = new HashMap<String, String>();\n    topics.put("type", "example-data");\n    topics.put("source", "data-creator");\n\n    List<Map<String, String>> allTopics = new ArrayList<Map<String, String>>();\n    allTopics.add(topics);\n\n    // Create a new channel for example data\n    JSONObject newChannelDetails = channelClient.create(null, allTopics, null, null, null);\n\n    // The channel address is used to read and write to channels\n    String channelAddress = newChannelDetails.getString("channelAddress");\n    System.out.println(channelAddress);\n')),(0,i.kt)("h2",{id:"write-on-a-channel"},"Write on a Channel"),(0,i.kt)("p",null,"You can write on a channel using the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    // Writing 5 data packets to channel\n    for (int i = 0; i < 3; i++) {\n        System.out.println("writing data to channel no " + i);\n        channelClient.write(channelAddress, "log", null, new JSONObject().put("log", "This is log number " + i));\n    }\n')),(0,i.kt)("h2",{id:"read-from-a-channel"},"Read from a Channel"),(0,i.kt)("p",null,"You can read from a channel using the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    List<ChannelData> datas = channelClient.read(channelAddress, null, null, null, null, null);\n\n    for (ChannelData data : datas) {\n        System.out.println(data.toString());\n    }\n")))}h.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);