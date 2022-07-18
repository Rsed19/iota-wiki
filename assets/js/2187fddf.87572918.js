"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13705],{91320:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={image:"/img/integration-services/logo/integration_services.png",description:"Access your Integration Services API using ingress, port forwarding, a load balancer service or an Ingress Controller.",keywords:["minikube nginx ingres","ingres controller","kubectl port","cluster","nginx"]},l="Expose APIs",u={unversionedId:"getting_started/installation/kubernetes/expose_apis",id:"getting_started/installation/kubernetes/expose_apis",title:"Expose APIs",description:"Access your Integration Services API using ingress, port forwarding, a load balancer service or an Ingress Controller.",source:"@site/content/build/integration-services/production/documentation/docs/getting_started/installation/kubernetes/expose_apis.md",sourceDirName:"getting_started/installation/kubernetes",slug:"/getting_started/installation/kubernetes/expose_apis",permalink:"/integration-services/getting_started/installation/kubernetes/expose_apis",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/getting_started/installation/kubernetes/expose_apis.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"Access your Integration Services API using ingress, port forwarding, a load balancer service or an Ingress Controller.",keywords:["minikube nginx ingres","ingres controller","kubectl port","cluster","nginx"]}},c={},p=[{value:"Minikube Nginx Ingress",id:"minikube-nginx-ingress",level:2},{value:"Port Forwarding",id:"port-forwarding",level:2},{value:"Load Balancer Service",id:"load-balancer-service",level:2},{value:"Kubernetes Ingress",id:"kubernetes-ingress",level:2}],g={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"expose-apis"},"Expose APIs"),(0,i.kt)("p",null,"Once you have deployed the service in the Kubernetes cluster and are ready to serve requests, there are different ways\nto access to the APIs."),(0,i.kt)("h2",{id:"minikube-nginx-ingress"},"Minikube Nginx Ingress"),(0,i.kt)("p",null,"In minikube, you can install Nginx Ingress Controller by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"minikube addons enable ingress\n")),(0,i.kt)("p",null,"You can run the following command to install Ingress resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f kubernetes/optional/ingress.yaml\n")),(0,i.kt)("p",null,"You can query the deployed ingress with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ingress\n")),(0,i.kt)("p",null,"After a while, you should get an output similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"NAME                      CLASS    HOSTS                          ADDRESS        PORTS   AGE\nintegration-service-api   <none>   ensuresec.solutions.iota.org   192.168.49.2   80      10m\n")),(0,i.kt)("p",null,"After this, you can query the to query the deployed API by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Host: ensuresec.solutions.iota.org' http://192.168.49.2/info\n")),(0,i.kt)("p",null,"You can avoid using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Host")," header by mapping the host/IP association in your ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),". In that case you could\nuse directly ",(0,i.kt)("inlineCode",{parentName:"p"},"http://ensuresec.solutions.iota.org/info")," in your default browser."),(0,i.kt)("p",null,"If you want to change the domain name, please visit the",(0,i.kt)("a",{parentName:"p",href:"/integration-services/getting_started/installation/kubernetes/configuration"}," configuration section")," for more information."),(0,i.kt)("h2",{id:"port-forwarding"},"Port Forwarding"),(0,i.kt)("p",null,"The service can even be exposed outside the cluster by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl port forward")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/integration-service-api 3000:3000\n")),(0,i.kt)("p",null,"This command will expose APIs on port 3000 of the local host."),(0,i.kt)("p",null,"If you prefer to use visual tool we suggest you\nuse ",(0,i.kt)("a",{parentName:"p",href:"https://kube-forwarder.pixelpoint.io/"},"Kube Forwarder"),"."),(0,i.kt)("h2",{id:"load-balancer-service"},"Load Balancer Service"),(0,i.kt)("p",null,"This is the best solution for deployments in cloud providers (AWS, Azure, GCP, etc.)."),(0,i.kt)("p",null,"You will need to set the value ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},".spec.type")," field\nof ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/kubernetes/is-service.yaml"},"kubernetes/is-service.yaml"),"\nbefore deploying."),(0,i.kt)("p",null,"This way, the Cloud Provider will be instructed to create an external endpoint for that service and will specify it in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," column of the Service details."),(0,i.kt)("p",null,"This is an example output of running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get svc")," on a EKS (AWS Kubernetes cluster) on AWS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},"NAME                      TYPE           CLUSTER-IP       EXTERNAL-IP                                                              PORT(S)          AGE\nintegration-service-api   LoadBalancer   10.100.219.204   <UNIQUE-NUMBER>.us-west-2.elb.amazonaws.com   3000:30733/TCP   22h\nkubernetes                ClusterIP      10.100.0.1       <none>                                                                   443/TCP          7d1h\nmongodb-service           ClusterIP      10.100.175.101   <none>                                                                   27017/TCP        22h\n")),(0,i.kt)("h2",{id:"kubernetes-ingress"},"Kubernetes Ingress"),(0,i.kt)("p",null,"When you use minikube, you can install an Ingress Controller by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"addons enable\n")),(0,i.kt)("p",null,"However, the Kubernetes ecosystem has different Ingress Controllers."),(0,i.kt)("p",null,"You can find a list of popular Kubernetes ingress controllers in\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"official Kubernetes website"),"."))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(t),d=o,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);