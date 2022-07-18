"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[98327],{64143:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={},s="IOTA Track & Trace Ledger APIs 102 Tutorial : Consuming Events",c={unversionedId:"track-trace-ledger-api/track-trace-ledger-api-tutorial-102",id:"track-trace-ledger-api/track-trace-ledger-api-tutorial-102",title:"IOTA Track & Trace Ledger APIs 102 Tutorial : Consuming Events",description:"Introduction",source:"@site/content/build/zebra-iota-edge-sdk/production/documentation/tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-102.md",sourceDirName:"track-trace-ledger-api",slug:"/track-trace-ledger-api/track-trace-ledger-api-tutorial-102",permalink:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-102",draft:!1,editUrl:"https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main/documentation/content/build/zebra-iota-edge-sdk/production/documentation/tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-102.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IOTA Track & Trace Ledger APIs 101 Tutorial : Device Events",permalink:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-101"},next:{title:"IOTA GTSC Track and Trace Ledger APIs 103 Tutorial : Digital Identity",permalink:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Tutorial Part I : Barcode Scan Transactions.",id:"tutorial-part-i--barcode-scan-transactions",level:2},{value:"List all Barcode Values Scanned.",id:"list-all-barcode-values-scanned",level:3},{value:"List all Barcode Scanners Used.",id:"list-all-barcode-scanners-used",level:3},{value:"Retrieve the last transaction involving a Barcode Value.",id:"retrieve-the-last-transaction-involving-a-barcode-value",level:3},{value:"Retrieve the transactions of a Scanner using pagination.",id:"retrieve-the-transactions-of-a-scanner-using-pagination",level:3},{value:"Obtain the details of the Streams Channel used to track a Barcode Value.",id:"obtain-the-details-of-the-streams-channel-used-to-track-a-barcode-value",level:3},{value:"Tutorial Part II : RFID Read Transactions.",id:"tutorial-part-ii--rfid-read-transactions",level:2},{value:"List all EPCs Read.",id:"list-all-epcs-read",level:3},{value:"List all RFID Readers Used.",id:"list-all-rfid-readers-used",level:3},{value:"Retrieve the last transaction involving an RFID EPC.",id:"retrieve-the-last-transaction-involving-an-rfid-epc",level:3},{value:"Retrieve the transactions of a Reader using pagination.",id:"retrieve-the-transactions-of-a-reader-using-pagination",level:3},{value:"Obtain the details of the Streams Channel used to track an EPC.",id:"obtain-the-details-of-the-streams-channel-used-to-track-an-epc",level:3},{value:"Advanced use of EPC Identifiers",id:"advanced-use-of-epc-identifiers",level:3},{value:"Tutorial Part III : Print Transactions.",id:"tutorial-part-iii--print-transactions",level:2},{value:"Get a list of the RFID tag EPC or barcode values that have been printed.",id:"get-a-list-of-the-rfid-tag-epc-or-barcode-values-that-have-been-printed",level:3},{value:"List all Printers Used.",id:"list-all-printers-used",level:3},{value:"Retrieve all printing operations made with a printer using pagination.",id:"retrieve-all-printing-operations-made-with-a-printer-using-pagination",level:3},{value:"Next Steps",id:"next-steps",level:2}],u={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iota-track--trace-ledger-apis-102-tutorial--consuming-events"},"IOTA Track & Trace Ledger APIs 102 Tutorial : Consuming Events"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this tutorial you will learn advanced features of the Track & Trace Ledger APIs concerning consumption of Device Events recorded on the Tangle."),(0,i.kt)("p",null,"As a continuation to ",(0,i.kt)("a",{parentName:"p",href:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-101"},"Tutorial 101"),", we will look into:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Retrieving a given number of transactions (",(0,i.kt)("inlineCode",{parentName:"li"},"lastN"),")."),(0,i.kt)("li",{parentName:"ol"},"Pagination (",(0,i.kt)("inlineCode",{parentName:"li"},"limit"),"). Retrieving a subset of transactions."),(0,i.kt)("li",{parentName:"ol"},"Retrieving Streams channel information. This feature makes it easy for the consuming clients to implement their own functions by the use of the IOTA Streams libraries to retrieve transactions from the IOTA Tangle. E.g. By using the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tangle.js/tree/main/libs/anchors"},"'anchors'")," utility library Powered by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/streams"},"IOTA Streams"),". ")),(0,i.kt)("p",null,"We will use the following identifiers in this example: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Barcode Scanner device id - ",(0,i.kt)("inlineCode",{parentName:"li"},"Zebra-MC-9200-PA12")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"iphone-A-456789")),(0,i.kt)("li",{parentName:"ol"},"Barcode Printer device id - ",(0,i.kt)("inlineCode",{parentName:"li"},"ZQ620-200dpi,V85.20.16,8,8192KB.XXZKJ192800224")),(0,i.kt)("li",{parentName:"ol"},"RFID Reader device id - ",(0,i.kt)("inlineCode",{parentName:"li"},"MC333R-GI4HG4EU-Vall-1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"FX9600-Bur-1")),(0,i.kt)("li",{parentName:"ol"},"RFID Printer device id - ",(0,i.kt)("inlineCode",{parentName:"li"},"ZQ630-1616588083570")),(0,i.kt)("li",{parentName:"ol"},"Barcode value - ",(0,i.kt)("inlineCode",{parentName:"li"},"3700123300014")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"991616586826831")),(0,i.kt)("li",{parentName:"ol"},"RFID EPC - ",(0,i.kt)("inlineCode",{parentName:"li"},"urn:epc:id:sgtin:9524444.100000.10")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"4ae80b6a6c81616588146032"))),(0,i.kt)("h2",{id:"tutorial-part-i--barcode-scan-transactions"},"Tutorial Part I : Barcode Scan Transactions."),(0,i.kt)("h3",{id:"list-all-barcode-values-scanned"},"List all Barcode Values Scanned."),(0,i.kt)("p",null,"This API endpoint allows you to retrieve a list of all the barcode values that have been scanned corresponding to a given API Key."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan' \\\n--header 'apikey: <Your API Key>'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "created": "2021-03-24T16:16:20.842Z",\n        "updated": "2021-03-24T16:22:31.549Z",\n        "totalEventNumber": 3,\n        "value": "3700123300014"\n    },\n    {\n        "created": "2021-03-24T12:19:15.883Z",\n        "updated": "2021-03-24T12:19:28.813Z",\n        "totalEventNumber": 1,\n        "value": "991616586826831"\n    }\n]\n')),(0,i.kt)("p",null,"As seen above, the list of barcode values and the total number of transaction events recorded on the Tangle for each barcode value."),(0,i.kt)("h3",{id:"list-all-barcode-scanners-used"},"List all Barcode Scanners Used."),(0,i.kt)("p",null,"Thi API allows you to get a list of all the Barcode scanners devices associated with a given API Key."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/device' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "deviceId": "Zebra-MC-9200-PA12",\n        "created": "2021-03-24T16:22:10.500Z",\n        "updated": "2021-03-24T16:22:31.549Z",\n        "totalEventNumber": 1\n    },\n    {\n        "deviceId": "iphone-A-456789",\n        "created": "2021-03-24T16:16:21.346Z",\n        "updated": "2021-03-24T16:21:54.731Z",\n        "totalEventNumber": 2\n    }\n]\n')),(0,i.kt)("p",null,"As seen above, you get a list of all the scanners and the total number of transaction events recorded on the Tangle for each device."),(0,i.kt)("h3",{id:"retrieve-the-last-transaction-involving-a-barcode-value"},"Retrieve the last transaction involving a Barcode Value."),(0,i.kt)("p",null,"This API endpoint allows you to retrieve the last transaction involving a value. By including the URL query parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"lastN"),", the API allows you to retrieve the most recent ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," transactions. In this case we want to retrieve the most recent transaction, so we set the ",(0,i.kt)("inlineCode",{parentName:"p"},"lastN")," parameter equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". "),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/3700123300014?lastN=1' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "symbology": "LABEL-TYPE-UPCA",\n        "value": "3700123300014",\n        "timestamp": "2021-04-11T13:23:28.714Z",\n        "deviceId": "Zebra-MC-9200-PA12",\n        "type": "scanTransaction",\n        "jsonData": {\n            "custom": true,\n            "timestamp": 1618147420297\n        },\n        "id": "1a32f9..."\n    }\n]\n')),(0,i.kt)("p",null,"As seen above we can successfully retrieve the last transaction involving a barcode value."),(0,i.kt)("h3",{id:"retrieve-the-transactions-of-a-scanner-using-pagination"},"Retrieve the transactions of a Scanner using pagination."),(0,i.kt)("p",null,"This API endpoint allows you use pagination to retrieve Barcode scanning devices transactions. By including the URL parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),", the API allows you to retrieve pages of ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," transactions. In this case we set the limit to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", thus we get a response of 1 transaction and a ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," in the headers showing the start message root of the next page of transactions."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/device/Zebra-MC-9200-PA12?limit=1' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "transactionId": "1a32f9...",\n        "value": "3700123300014",\n        "deviceId": "Zebra-MC-9200-PA12",\n        "type": "scanTransaction",\n        "id": "ae80baf..."\n    }\n]\n')),(0,i.kt)("p",null,"Response headers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'link -> </scan/3700123300014?startRoot=656b49...&limit=1>; rel="next"; type="application/json"\n')),(0,i.kt)("p",null,"As seen above, one can use the information in the header to retrieve the next page of transactions. Pagination is also available for transactions involving a ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"EPC")),(0,i.kt)("h3",{id:"obtain-the-details-of-the-streams-channel-used-to-track-a-barcode-value"},"Obtain the details of the Streams Channel used to track a Barcode Value."),(0,i.kt)("p",null,"This API allows you to retrieve the IOTA Streams channel that contains all read transactions of a respective Barcode value."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/scan/channels/3700123300014' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "locator": "urn:iota-streams:devnet:1c696e5533bdc7...:2201556d9ea2a31145475b5b:5d3eae80b9be9fbcaf4d788e"\n}\n')),(0,i.kt)("p",null,"With the above information, one can use the IOTA Streams libraries, for instance the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tangle.js/tree/main/libs/anchors"},"anchors library"),", to retrieve the transactions from their own application. In this case the network is ",(0,i.kt)("inlineCode",{parentName:"p"},"devnet")," and it is followed by the channel ID. You need to take into account that the Streams Channel used is an encrypted one, thus the channel ID has three colon-separated components: the channel address, the announce message ID and the keyload message ID. The usage of the Javascript libraries might facilitate the consumption of Track and Trace Ledger data in different application contexts, for instance, to enable a more efficient refresh of a Web UI."),(0,i.kt)("h2",{id:"tutorial-part-ii--rfid-read-transactions"},"Tutorial Part II : RFID Read Transactions."),(0,i.kt)("h3",{id:"list-all-epcs-read"},"List all EPCs Read."),(0,i.kt)("p",null,"This API allows you to retrieve a list of all the RFID tags EPCs that have been read and associated to the given API Key as follows:"),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "created": "2021-03-24T15:24:17.356Z",\n        "updated": "2021-03-24T16:45:49.284Z",\n        "totalEventNumber": 3,\n        "epc": "urn:epc:id:sgtin:9524444.100000.10"\n    },\n    {\n        "created": "2021-03-24T12:42:35.565Z",\n        "updated": "2021-03-24T12:42:46.868Z",\n        "totalEventNumber": 1,\n        "epc": "4ae80b6a6c81616588146032"\n    }\n]\n')),(0,i.kt)("p",null,"As seen above the list of all the RFID tags EPCs and the total number of transaction events recorded on the Tangle for each RFID EPC."),(0,i.kt)("h3",{id:"list-all-rfid-readers-used"},"List all RFID Readers Used."),(0,i.kt)("p",null,"This API allows you to retrieve a list of all the RFID Readers (devices) associated to the given API Key"),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/device' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "deviceId": "FX9600-Bur-1",\n        "created": "2021-03-24T16:45:38.920Z",\n        "updated": "2021-03-24T16:45:49.284Z",\n        "totalEventNumber": 1\n    },\n    {\n        "deviceId": "MC333R-GI4HG4EU-Vall-1",\n        "created": "2021-03-24T15:24:17.900Z",\n        "updated": "2021-03-24T16:44:28.225Z",\n        "totalEventNumber": 2\n    }\n]\n')),(0,i.kt)("p",null,"As seen above, the list of RFID readers and the total number of transaction events recorded on the Tangle for each device."),(0,i.kt)("h3",{id:"retrieve-the-last-transaction-involving-an-rfid-epc"},"Retrieve the last transaction involving an RFID EPC."),(0,i.kt)("p",null,"This API endpoint allows you to retrieve the last transaction involving an RFID EPC. By including the URL parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"lastN"),", the API allows you to retrieve the most recent ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," transactions. In this case we want to retrieve the most recent transaction, so we set the ",(0,i.kt)("inlineCode",{parentName:"p"},"lastN")," parameter equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". "),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/urn:epc:id:sgtin:9524444.100000.10?lastN=1' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "deviceId": "MC333R-GI4HG4EU-Vall-1",\n        "antennaId": "1",\n        "peakRssi": -42,\n        "epc": "urn:epc:id:sgtin:9524444.100000.10",\n        "timestamp": "2021-04-11T13:21:57.152Z",\n        "location": {\n            "latitude": 44,\n            "longitude": -8\n        },\n        "type": "readTransaction",\n        "jsonData": {\n            "timestamp": 1618147330641\n        },\n        "id": "1c696e55..."\n    }\n]\n')),(0,i.kt)("p",null,"As seen above we can successfully retrieve the last transaction involving an RFID EPC."),(0,i.kt)("h3",{id:"retrieve-the-transactions-of-a-reader-using-pagination"},"Retrieve the transactions of a Reader using pagination."),(0,i.kt)("p",null,"This API endpoint allows you to use pagination to retrieve RFID readers devices transactions. By including the URL parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),", the API allows you to retrieve pages of ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," transactions. In this case we set the limit to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", thus we get a response of 1 transaction and a ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," in the headers showing the start message root of the next page of transactions."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/device/MC333R-GI4HG4EU-Vall-1?limit=1' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "transactionId": "1c696e55...",\n        "deviceId": "MC333R-GI4HG4EU-Vall-1",\n        "epc": "urn:epc:id:sgtin:9524444.100000.10",\n        "type": "readTransaction",\n        "id": "2201556d..."\n    }\n]\n')),(0,i.kt)("p",null,"Response headers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'link \u2192</read/urn:epc:id:sgtin:9524444.100000.10?startRoot=5d3eae...&limit=1>; rel="next"; type="application/json"\n')),(0,i.kt)("p",null,"As seen above, one can use the information in the header to retrieve the next page of transactions."),(0,i.kt)("h3",{id:"obtain-the-details-of-the-streams-channel-used-to-track-an-epc"},"Obtain the details of the Streams Channel used to track an EPC."),(0,i.kt)("p",null,"This API allows you to retrieve the details of the IOTA Streams channel that contains all read transactions of a respective RFID EPC."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/read/channels/urn:epc:id:sgtin:9524444.100000.10' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "locator": "urn:iota-streams:devnet:d0d508c7ce84b...:4d14480f2fe8f7fbad65e12f:137bf7689bde186fc9ffef8c"\n}\n')),(0,i.kt)("p",null,"With the above information, one can use the IOTA Streams utility libraries, such as the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tangle.js/tree/main/libs/anchors"},"anchors library")," to retrieve the transactions from their own application. The usage of the Javascript libraries might facilitate the consumption of Track and Trace Ledger data in different application contexts, for instance, to enable a more efficient refresh of a Web UI."),(0,i.kt)("h3",{id:"advanced-use-of-epc-identifiers"},"Advanced use of EPC Identifiers"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Example of use of a GS1 EPC represented as URN. The API will validate the issued EPC.")),(0,i.kt)("p",null,"A GS1 EPC can be represented as a ",(0,i.kt)("inlineCode",{parentName:"p"},"URN")," (Uniform Resource Name). e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"urn:epc:id:sgtin:9524644.100000.10"),". In this case we see that the EPC corresponds to a trade item since it is an ",(0,i.kt)("inlineCode",{parentName:"p"},"sgtin")," URN."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl -i --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/read\' \\\n--header \'apikey: <your API Key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "deviceId": "MC333R-GI4HG4EU-Vall-1",\n  "antennaId": "19495783",\n  "peakRssi": -42,\n  "epc": "urn:epc:id:sgtin:9524644.100000.10",\n  "timestamp": "2020-10-09T12:33:59.452Z",\n  "type": "readTransaction",\n  "location": {\n    "latitude": 41.65518,\n    "longitude": -4.72372\n  }\n}\'\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"202 Accepted\n")),(0,i.kt)("p",null,"Response header:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," header contains a reference to the operation log entry that allows to monitor progress."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Location: /operation-log/65b94c6d...\n")),(0,i.kt)("p",null,"As seen above, the example GS1 URN EPC was validated and successfully recorded in the Tangle."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Example of use of GS1 EPC represented in hex format.")),(0,i.kt)("p",null,"A GS1 EPC can be represented in hex format, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"4ae80b6a6c81618147317153"),". The API will validate the issued EPC. In this case the expected length of the hex format EPC is ",(0,i.kt)("inlineCode",{parentName:"p"},"24")," characters, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"96")," bits."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl -i --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/read\' \\\n--header \'apikey: <your API Key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "deviceId": "MC333R-GI4HG4EU-Vall-1",\n  "antennaId": "19495783",\n  "peakRssi": -42,\n  "epc": "4ae80b6a6c81618147317153",\n  "timestamp": "2020-10-09T12:33:59.452Z",\n  "type": "readTransaction",\n  "location": {\n    "latitude": 41.65518,\n    "longitude": -4.72372\n  }\n}\'\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"202 Accepted\n")),(0,i.kt)("p",null,"Response header:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," header contains a reference to the operation log entry that allows to monitor progress."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Location: /operation-log/2a3114...\n")),(0,i.kt)("p",null,"As seen above, the example GS1 Hexadecimal EPC was validated and successfully recorded in the Tangle."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Example of use of VDA EPC (VDA is the Association of the Automotive Industry in Germany).")),(0,i.kt)("p",null,"An EPC can also be represented as VDA object e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012"),". The API will validate the issued EPC and extract the relevant data from the VDA as an object. The data validated and extracted include ",(0,i.kt)("inlineCode",{parentName:"p"},"Data Identifier"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Company ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Issuing Agency"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Part Number")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial Number"),". The supported VDA Identifiers are those specified by: VDA 4994 (Global Transport Label), VDA 5500, VDA 5510 and VDA5530."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl -i --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/read\' \\\n--header \'apikey: <your API Key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "deviceId": "MC333R-GI4HG4EU-Vall-1",\n  "antennaId": "19495783",\n  "peakRssi": -42,\n  "epc": "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012",\n  "timestamp": "2020-10-09T12:33:59.452Z",\n  "type": "readTransaction",\n  "location": {\n    "latitude": 41.65518,\n    "longitude": -4.72372\n  }\n}\'\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"202 Accepted\n")),(0,i.kt)("p",null,"Response header:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," header contains a reference to the operation log entry that allows to monitor progress."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Location: /operation-log/2a3114...\n")),(0,i.kt)("p",null,"As seen above, the example VDA was validated and successfully recorded in the Tangle."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Example of a transaction with the location as a Geo URI.")),(0,i.kt)("p",null,"The API also supports locations as Geo URI strings as seen in the example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl -i --location --request POST \'https://sandbox-api.zebra.com/v2/ledger/tangle/read\' \\\n--header \'apikey: <your API Key>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "deviceId": "MC333R-GI4HG4EU-Vall-1",\n  "antennaId": "19495783",\n  "peakRssi": -42,\n  "epc": "urn:jaif:id:obj:37SUN321456789A111222333AB+123456789012",\n  "timestamp": "2020-10-09T12:33:59.452Z",\n  "type": "readTransaction",\n  "location": "geo:37.786971,-122.399677"\n}\'\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"202 Accepted\n")),(0,i.kt)("p",null,"Response header:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," header contains a reference to the operation log entry that allows to monitor progress."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Location: /operation-log/2a3114...\n")),(0,i.kt)("h2",{id:"tutorial-part-iii--print-transactions"},"Tutorial Part III : Print Transactions."),(0,i.kt)("h3",{id:"get-a-list-of-the-rfid-tag-epc-or-barcode-values-that-have-been-printed"},"Get a list of the RFID tag EPC or barcode values that have been printed."),(0,i.kt)("p",null,"You can get a list of EPCs of all the RFID tags printed and Values of all the Barcodes printed as follows:"),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/print' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "created": "2021-03-24T12:14:52.401Z",\n        "updated": "2021-03-24T12:15:06.576Z",\n        "totalEventNumber": 1,\n        "epcOrValue": "1ae00b6a6c81617588083570"\n    },\n    {\n        "created": "2021-03-24T12:14:43.959Z",\n        "updated": "2021-03-24T12:14:52.214Z",\n        "totalEventNumber": 1,\n        "epcOrValue": "881616588083570"\n    }\n]\n')),(0,i.kt)("p",null,"You can see from the response that either the barcode value or the RFID tags EPC is provided and the total number of print transaction events associated. Hence you can use the returned EPC or value to get a list of all transactions associated to it. "),(0,i.kt)("h3",{id:"list-all-printers-used"},"List all Printers Used."),(0,i.kt)("p",null,"You can get a list of all the printers as follows."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/print/device' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "deviceId": "ZQ630-1616588083570",\n        "created": "2021-03-24T12:14:44.364Z",\n        "updated": "2021-03-24T14:01:34.291Z",\n        "totalEventNumber": 3\n    },\n    {\n        "deviceId": "ZQ620-200dpi,V85.20.16,8,8192KB.XXZKJ192800224",\n        "created": "2021-03-24T12:10:11.174Z",\n        "updated": "2021-03-24T14:05:22.187Z",\n        "totalEventNumber": 2\n    }\n]\n')),(0,i.kt)("p",null,"As seen above we were able to retrieve a list of all printers and the total number of print events associated to the device."),(0,i.kt)("h3",{id:"retrieve-all-printing-operations-made-with-a-printer-using-pagination"},"Retrieve all printing operations made with a printer using pagination."),(0,i.kt)("p",null,"This API endpoint allows you use pagination to retrieve RFID/Barcode printer devices transactions. By including the url parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),", the API allows you to retrieve pages of ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," device transactions. In this case we set the limit to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", thus we get a response of 1 transaction and a ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," in the headers showing the start message root of the next page of transactions."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i --location --request GET 'https://sandbox-api.zebra.com/v2/ledger/tangle/print/device/ZQ630-1616588083570?limit=1' \\\n--header 'apikey: <your API Key>'\n")),(0,i.kt)("p",null,"Response body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "transactionId": "1c696e55...",\n        "type": "printTransaction",\n        "value": "881618147363842",\n        "deviceId": "ZQ630-1616588083570",\n        "id": "2201556..."\n    }\n]\n')),(0,i.kt)("p",null,"Response header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'link \u2192</print/device/ZQ630-1616588083570?startRoot=c705240...&limit=1>; rel="next"; type="application/json"\n')),(0,i.kt)("p",null,"As seen above, one can use the information in the header to retrieve the next page of transactions."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"You can learn how to register decentralized identities (DIDs) for supply chain participants by reading ",(0,i.kt)("a",{parentName:"p",href:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103"},"Tutorial 103")))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);