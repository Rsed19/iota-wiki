"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33435],{9038:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),o=["components"],l={description:"The Distributed Random Number Generator protocol is divided into three phases \u2014 committee selection, DKG and publication.",image:"/img/logo/Coordicide_Logo_Black.png",slug:"6.5dRNG",keywords:["random number","committee selection","node","application message","committee member","beacon message","individual beacon message","collective beacon message"]},r="6.5 Distributed Random Number Generator",m={unversionedId:"6.5 dRNG",id:"6.5 dRNG",title:"6.5 Distributed Random Number Generator",description:"The Distributed Random Number Generator protocol is divided into three phases \u2014 committee selection, DKG and publication.",source:"@site/content/build/iota-2.0-research-specifications/6.5 dRNG.md",sourceDirName:".",slug:"/6.5dRNG",permalink:"/IOTA-2.0-Research-Specifications/6.5dRNG",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/content/build/iota-2.0-research-specifications/6.5 dRNG.md",tags:[],version:"current",frontMatter:{description:"The Distributed Random Number Generator protocol is divided into three phases \u2014 committee selection, DKG and publication.",image:"/img/logo/Coordicide_Logo_Black.png",slug:"6.5dRNG",keywords:["random number","committee selection","node","application message","committee member","beacon message","individual beacon message","collective beacon message"]},sidebar:"tutorialSidebar",previous:{title:"6.4 Approval Weight and Finality",permalink:"/IOTA-2.0-Research-Specifications/6.4Finalization"}},p={},c=[{value:"6.5.1 Introduction",id:"651-introduction",level:2},{value:"6.5.2 Dependencies",id:"652-dependencies",level:2},{value:"6.5.3 Parameters",id:"653-parameters",level:2},{value:"6.5.4  Committee Selection",id:"654--committee-selection",level:2},{value:"6.5.4.1 Application Messages",id:"6541-application-messages",level:3},{value:"6.5.4.2 Application Message Sending - Default Algorithm",id:"6542-application-message-sending---default-algorithm",level:3},{value:"6.5.5 DKG phase",id:"655-dkg-phase",level:2},{value:"6.5.6 Double Seats",id:"656-double-seats",level:2},{value:"6.5.7 Publication of the Random Number",id:"657-publication-of-the-random-number",level:2},{value:"6.5.7.1 Collective Beacon Message",id:"6571-collective-beacon-message",level:3},{value:"6.5.8 Duties of the Old Committee",id:"658-duties-of-the-old-committee",level:2},{value:"6.5.9 Alternative Drng and Backup Options",id:"659-alternative-drng-and-backup-options",level:2},{value:"6.5.10 Pseudocodes",id:"6510-pseudocodes",level:2},{value:"6.5.11 Payload Layout",id:"6511-payload-layout",level:2}],d={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"65-distributed-random-number-generator"},"6.5 Distributed Random Number Generator"),(0,s.kt)("h2",{id:"651-introduction"},"6.5.1 Introduction"),(0,s.kt)("p",null,"The module presented in this specification allows for the distributed generation of randomness for the post-Coordicide IOTA network. The distributed random number generator (dRNG) protocol is divided into three phases:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"COMMITTEE SELECTION: In the first phase, a committee of high Consensus Mana nodes is selected. The procedure is objective i.e., all of the nodes in the network reach a consensus on which nodes should be in the committee.\nIn order for a node to be considered as a candidate to the committee, it needs to declare its willingness to participate, with a special ",(0,s.kt)("em",{parentName:"p"},"application message"),". When all of the required application messages are recorded in the Tangle, the ",(0,s.kt)("inlineCode",{parentName:"p"},"committeeNodes")," top consensus Mana holders among the candidates are selected as the committee. In the case where some of the required messages fail to be produced, the committee selection will consequently fail as well.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"DKG PHASE: In the second setup phase, the committee members create a collective private key which will be used later to generate the random number, using the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"(t,n)")," Distributed Key Generation (DKG), that does not rely on centralized, trusted third parties. The participation of the nodes in this phase can be publicly verified since the messages exchange takes place in the Tangle. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"PUBLICATION PHASE: This last phase consists of the periodical publication of the beacon messages in the Tangle. A single individual beacon message should not be sufficient to reveal the random number; instead, the beacon messages from at least ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t")," out of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"n")," committee members are needed for the next random number being revealed. Additionally, the committee members publish a collective beacon message, which would contain the random number. "))),(0,s.kt)("p",null,"A large part of the procedures in this specification is based on the article ",(0,s.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2102.03139"},"Committee selection in DAG distributed ledgers and applications"),", where authors discuss multiple methods of the committee selection and applications."),(0,s.kt)("h2",{id:"652-dependencies"},"6.5.2 Dependencies"),(0,s.kt)("p",null,"The dRNG module depends on the ",(0,s.kt)("a",{parentName:"p",href:"./5.3Mana"},"Section 5.3 - Mana")," since it uses the Consensus Mana (cMana) vector as a measure of trustworthiness. Specifically, it uses the list of the top cMana holders to select a committee to produce the random numbers. During the committee selection, we do not assume a perfect agreement on the cMana values, i.e., different nodes can have slightly different perceptions of the cMana values of other nodes (due to the different local clocks). Obtaining consensus on the cMana values is the central part of this documentation. "),(0,s.kt)("p",null,"The random numbers produced by dRNG are used in ",(0,s.kt)("a",{parentName:"p",href:"./6.3FastProbabilisticConsensus"},"Section 6.3 - Fast Probabilistic Consensus"),"."),(0,s.kt)("h2",{id:"653-parameters"},"6.5.3 Parameters"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Table 6.5.1  dRNG parameters")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Value"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"rnPeriod")),(0,s.kt)("td",{parentName:"tr",align:null},"duration"),(0,s.kt)("td",{parentName:"tr",align:null},"Random number is produced every",(0,s.kt)("inlineCode",{parentName:"td"},"rnPeriod")," seconds"),(0,s.kt)("td",{parentName:"tr",align:null},"20 ","[sec]")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"committeeNodes")),(0,s.kt)("td",{parentName:"tr",align:null},"integer"),(0,s.kt)("td",{parentName:"tr",align:null},"Number of nodes in the committee"),(0,s.kt)("td",{parentName:"tr",align:null},"10 ","[nodes]")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"committeeSeats")),(0,s.kt)("td",{parentName:"tr",align:null},"integer"),(0,s.kt)("td",{parentName:"tr",align:null},"The number of identities (seats) in the top Mana holders committee equals ",(0,s.kt)("inlineCode",{parentName:"td"},"committeeSeats"),". It is different from ",(0,s.kt)("inlineCode",{parentName:"td"},"committeeNodes")," because some of the nodes receive double seats in the committee."),(0,s.kt)("td",{parentName:"tr",align:null},"15   ","[seats]")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"sigThreshold")),(0,s.kt)("td",{parentName:"tr",align:null},"integer"),(0,s.kt)("td",{parentName:"tr",align:null},"Signature threshold parameter (number of beacon messages needed to obtain randomness)"),(0,s.kt)("td",{parentName:"tr",align:null},"8 ","[messages]"," (","[seats]",")")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"committeeUpdate")),(0,s.kt)("td",{parentName:"tr",align:null},"duration"),(0,s.kt)("td",{parentName:"tr",align:null},"Period of committee update"),(0,s.kt)("td",{parentName:"tr",align:null},"1 ","[day]"," = 86400 ","[sec]")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"applicationWindow")),(0,s.kt)("td",{parentName:"tr",align:null},"duration"),(0,s.kt)("td",{parentName:"tr",align:null},"Time window of the ''application'' message submission"),(0,s.kt)("td",{parentName:"tr",align:null},"120 ","[sec]")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"TIMESTAMP_CUTOFF")),(0,s.kt)("td",{parentName:"tr",align:null},"duration"),(0,s.kt)("td",{parentName:"tr",align:null},"Message timestamp cutoff (Assuming the node is in sync, the time after which point the node will receive no new messages with a particular timestamp which will be finalized)"),(0,s.kt)("td",{parentName:"tr",align:null},"2",(0,s.kt)("inlineCode",{parentName:"td"},"DLARGE")," +",(0,s.kt)("inlineCode",{parentName:"td"},"W"),"= 90","[sec]")))),(0,s.kt)("p",null," For more information on the ",(0,s.kt)("inlineCode",{parentName:"p"},"TIMESTAMP_CUTOFF"),"  see section ",(0,s.kt)("a",{parentName:"p",href:"./4.2Timestamps"},"Section 4.2 -  Timestamps")),(0,s.kt)("h2",{id:"654--committee-selection"},"6.5.4  Committee Selection"),(0,s.kt)("p",null,"To select the committee based on the cMana, we need to achieve consensus on these values. To solve this problem, we use epochs a reference point which can be used to calculate the cMana values in an objective manner. "),(0,s.kt)("p",null,"The willingness to participate in the committee is announced with a special application message, which like any other transactions in the Tangle are equipped with timestamps. Since the nodes following the protocol judge and invalidate messages which timestamps are too off, we can assume that the application messages can reliably give us a list of nodes interested in joining the committee. "),(0,s.kt)("p",null," The committee selection process starts at the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_S")," and should be done (assuming no problems occur) at the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_F"),". The time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_F")," is determined by the committee update time, ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_S")," depends also on the ",(0,s.kt)("inlineCode",{parentName:"p"},"applicationWindow")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"TIMESTAMP_CUTOFF"),"."),(0,s.kt)("p",null," Only nodes that are in synch with the network should participate in the committee selection. If a node is out of synch (",(0,s.kt)("inlineCode",{parentName:"p"},"SyncStatus = FALSE"),") it should skip this committee selection. "),(0,s.kt)("h3",{id:"6541-application-messages"},"6.5.4.1 Application Messages"),(0,s.kt)("p",null,"Any node can issue an application message. Such a message would be processed by the nodes (assuming it passes the congestion control, along with other checks). However, for a low mana node, there is no incentive to apply for the committee, as the probability of being selected is very low; hence, they can decide to not take part in sending application messages. Although it is allowed, sending multiple application messages is pointless and costly due to the congestion control mechanism.  "),(0,s.kt)("p",null,"For brevity denote ",(0,s.kt)("inlineCode",{parentName:"p"},"TIMESTAMP_CUTOFF")," by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"\\Delta_C")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"applicationWindow")," by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"\\Delta_A"),". Assume that a committee should be formed at the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_F")," (which is known to all interested nodes; it is defined on the protocol level). Assume further that the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_F")," is in the epoch ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"E")," i.e., ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_F")," ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"\\in")," ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"[t_{E-1}"),",",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_E]"),". Then the active consensus Mana vector from the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_{E-2}")," is calculated,  which is the balance from two epochs before ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_F"),". The committee selection process starts with the opening of the application message window at the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_S"),", where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_S")," = ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_F"),"-",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"\\Delta_A")," -2",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"\\Delta_C"),'. For as long as the application window is open, nodes can issue application messages. See the subsection "6.5.3.1 Application message sending - default algorithm" for the proposed algorithm of issuing application messages (which is not enforceable). '),(0,s.kt)("h3",{id:"6542-application-message-sending---default-algorithm"},"6.5.4.2 Application Message Sending - Default Algorithm"),(0,s.kt)("p",null,"A node is said to be ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"M_\\ell")," if its consensus Mana rank is less or equal to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"\\ell")," (node is among ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"\\ell")," top Mana nodes). Computation of node's Mana rank is taking place with respect to the time from two epochs ago i.e., with respect to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_{E-2}")," under the assumption that ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_S \\in [t_{E-1},t_E]"),"."),(0,s.kt)("p",null,"For brevity denote ",(0,s.kt)("inlineCode",{parentName:"p"},"committeeNodes")," by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"m"),". If an interested node ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"M_{2m}")," then it issues an application at the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_S"),". Notice that, in general, not all of the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"2m")," application messages will be sent (due to for example nodes going offline or malfunction). If less than ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"m")," strongly valid application messages are sent at ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"T_S"),", the nodes that are ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"M_{3m}")," (but not ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"M_{2m}"),") issue their application messages at the time  ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"T_S- \\Delta_A \\frac{1}{2}")," and so on. In general, for ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"k>2"),", if a node ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x")," which is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"M_{m k}")," but not ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"M_{m (k-1)}"),", it submits a committee application whenever before the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"T_S- \\Delta_A \\frac{k-2}{k-1}")," there are less than ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"m")," strongly valid application messages with cMana greater than the cMana of node ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"x"),".  "),(0,s.kt)("p",null,"See subsection ",(0,s.kt)("strong",{parentName:"p"},"6.5.9 Pseudocodes")," for the pseudocodes of the default application message sending procedure."),(0,s.kt)("p",null,"If at least ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"m")," of the nodes sent an application message within the time interval, the committee is formed from the top ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"m")," Mana nodes who applied. Due to the network delay, this can be confirmed only at the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_S+\\Delta_A+\\Delta_C"),".  "),(0,s.kt)("p",null,"If less than ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"m")," nodes send application messages, then the committee selection will fail. This is confirmed at the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_S+\\Delta_A+\\Delta_C"),". In this case, the procedure should be repeated immediately, with new starting time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t'_S")," and finish time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t'_F")," such ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t'_S =t_S+\\Delta_A+\\Delta_C")," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t'_F=t_F+\\Delta_A+\\Delta_C"),". "),(0,s.kt)("h2",{id:"655-dkg-phase"},"6.5.5 DKG phase"),(0,s.kt)("p",null,"After a successful committee selection, confirmed at the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_S+\\Delta_C+\\Delta_A")," with respect to the node's local clock, the DKG phase starts. In this phase, the committee nodes exchange the ",(0,s.kt)("em",{parentName:"p"},"Deal messages")," to produce a public/private collective key. There is no time window for the DKG phase and nodes should proceed with the corresponding  DKG message exchange as soon as the committee selection is confirmed (time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_S+\\Delta_C+\\Delta_A"),"). Only DKG messages with this timestamp are accepted. "),(0,s.kt)("p",null,"If any of the committee nodes refuse to create a collective key pair by not exchanging the  Deal DKG messages, the DKG phase fails. This can be confirmed at the time ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t_F= t_S+2\\Delta_C+\\Delta_A"),". Moreover, since the message exchange occurs on the Tangle, everybody can identify the nodes that caused the failure. In the case of DKG phase failure, the entire committee selection is repeated (including the application phase). New start and finish time are ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t'_S = t_F= t_S+2\\Delta_C+\\Delta_A")," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"t'_F= t_F+2\\Delta_C+\\Delta_A"),". The malicious node is then excluded from the new committee selection - all application messages issued by a malicious node are ignored. Ban on the committee application is lifted after a successful committee selection i.e., the committee produces its first beacon messages. In other words, if a node failed to produce a DKG message (either due to malfunction or maliciousness) it cannot apply to be in the current committee, however, it can apply in the next committee selection process. "),(0,s.kt)("h2",{id:"656-double-seats"},"6.5.6 Double Seats"),(0,s.kt)("p",null,'We can increase the security of the dRNG beacon by granting double seats to half of the committee members that have the highest committee Mana. Those nodes would receive two private keys (identities) with which they sign beacon messages in the Tangle. From the technical point of view, the two seats are completely separate, and issued Beacon messages can not be combined (even though they were signed by the same node). This modification increases the amount of Mana required to "overtake" the committee, which is understood as gaining ',(0,s.kt)("inlineCode",{parentName:"p"},"sigThreshold")," of seats in the committee. "),(0,s.kt)("p",null,"The number of nodes in the committee with double seats equals ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"\\lfloor m/2 \\rfloor")," (top half of the committee nodes). The total number of identities in the committee equals ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},"m + \\lfloor m/2 \\rfloor"),"."),(0,s.kt)("h2",{id:"657-publication-of-the-random-number"},"6.5.7 Publication of the Random Number"),(0,s.kt)("p",null,"The committee will collectively generate a random number based on the set of beacon messages that each node will individually produce. A single beacon message is not sufficient to reveal the random number; instead,  ",(0,s.kt)("inlineCode",{parentName:"p"},"sigThreshold")," or more beacon messages are needed for the next random number to be revealed. "),(0,s.kt)("h3",{id:"6571-collective-beacon-message"},"6.5.7.1 Collective Beacon Message"),(0,s.kt)("p",null,"To recover the random number from the individual beacon messages, all nodes in the network would need to perform Lagrange interpolation. To avoid that, we propose that the committee nodes produce a ",(0,s.kt)("em",{parentName:"p"},"collective beacon message"),", which contains a pre-computed random number (meaning that the committee nodes perform the Lagrange interpolation on their own). Since the committee size is small and the expected throughput of the network is large, we require all committee members to produce this collective beacon message as soon as they receive ",(0,s.kt)("inlineCode",{parentName:"p"},"sigThreshold")," individual beacon messages. "),(0,s.kt)("p",null,"The cost of getting randomness from the collective beacon would be reduced as only (additionally to the default message checks) the signature verification would be required.  "),(0,s.kt)("h2",{id:"658-duties-of-the-old-committee"},"6.5.8 Duties of the Old Committee"),(0,s.kt)("p",null,"An old committee should only stop producing randomness if another committee was successfully selected and started producing random numbers, which will be confirmed when the first collective beacon message is produced by the new committee and can be read directly from the Tangle.   "),(0,s.kt)("h2",{id:"659-alternative-drng-and-backup-options"},"6.5.9 Alternative Drng and Backup Options"),(0,s.kt)("p",null,"To increase the liveness of the random number production multiple dRNGs may be deployed. Secondary dRNGs can be used if the primary one is not available; it is also possible that users alternate between random numbers from multiple dRNGs. "),(0,s.kt)("p",null,"However, this discussion is out of the scope of this specification document. "),(0,s.kt)("h2",{id:"6510-pseudocodes"},"6.5.10 Pseudocodes"),(0,s.kt)("p",null,"Actions after receiving incoming transaction which is an application message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vbnet"},"IF (NOT IsBlacklisted(IssuingNode(tx)))\n   IF (Mana(IssuingNode(tx),E-2) > Mana(My_node,E-2))\n      numberValidApplicationMessagesWithManaHigherThanMine ++ \n")),(0,s.kt)("p",null,"Actions of a node interested in committee participation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vbnet"},"IF (thisNodeWantsToParticipateInDRNG)\n   WaitUntil (tS)  \n        ell = GetManaRank(myNode,Epoch-2)  \n        ApplicationMessageSend(ell)  \n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION ApplicationMessageSend(ell)  \n    IF (ell <= 2m)  \n        SendApplicationMessage()\n    ELSE  \n        WaitUntil(T_S- applicationWindow *[1-(floor(ell/m)-2)/(floor(ell/m)-1)])  \n        IF (numberValidApplicationMessagesWithManaHigherThanMine < m)\n            SendApplicationMessage()\n")),(0,s.kt)("h2",{id:"6511-payload-layout"},"6.5.11 Payload Layout"),(0,s.kt)("p",null,"DRNG payload layout is discussed in ",(0,s.kt)("a",{parentName:"p",href:"./2.3StandardPayloadsLayout#2.3.5.5-drng-application-message"},"Section 2.3 - Standard Payloads Layout"),"."))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),m=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),h=i,u=d["".concat(r,".").concat(h)]||d[h]||c[h]||s;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);