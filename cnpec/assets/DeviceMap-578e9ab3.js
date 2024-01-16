import{T as G,X,O as K,M as J,d as Y,F as Q,V as W,S as ee,a as te,P as oe,C as se,b as ae,c as ne,e as C,I as T,f as j,g as M,h as re,i as ie}from"./ol-c5086ad1.js";import{a as ce}from"./axios-c24e582b.js";import{r as O,_ as le}from"./index-c4bfa5a7.js";import{q as ue}from"./qs-f71fb591.js";import{r as u,w as de,d as pe,b as me,o as ve,x as h,y as w,A as c,O as fe,J as y,G as ge,P as _e,K as he,L as we}from"./@vue-c25b4755.js";const F="/cnpec/assets/marker-default-6bdf8c2a.png",ye="/cnpec/assets/default-device-9568472a.png",I={base_url:{base:"",dev:"",pro:"",test:""},result_code:"0000",request_timeout:6e4,default_headers:"application/json;charset=UTF-8"},V=u("/"),{base_url:be}=I,Se=be[""];de(()=>O.currentRoute.value,e=>{V.value=e==null?void 0:e.path});const E=ce.create({baseURL:Se,timeout:I.request_timeout});E.interceptors.request.use(e=>{if(e.method==="post"&&e.headers["Content-Type"]==="application/x-www-form-urlencoded"&&(e.data=ue.stringify(e.data)),e.headers.Token="67F4C4DF712F41EB31288EC6BDCD606D",e.method==="get"&&e.params){let r=e.url;r+="?";const d=Object.keys(e.params);for(const v of d)e.params[v]!==void 0&&e.params[v]!==null&&(r+=`${v}=${encodeURIComponent(e.params[v])}&`);r=r.substring(0,r.length-1),e.params={},e.url=r}return e},e=>{console.log(e),Promise.reject(e)});E.interceptors.response.use(async e=>{if(e.data.status==="SUCCEED")return e.data;if(e.data.errorCode==="100")V.value!=="/"&&O.push("/");else return e.config.url==="/china_geo.json"?e.data:(console.log("拦截器返回错误：",e),Promise.reject((e==null?void 0:e.data)||"response-error"))},e=>(console.log("err-----"+e),console.log(e.errorMessage||e.message),Promise.reject(e)));const{default_headers:Le}=I,b=e=>{const{url:r,method:d,params:v,data:L,headersType:g,responseType:D}=e;return E({url:r,method:d,params:v,data:L,responseType:D,headers:{"Content-Type":g||Le}})},S={get:e=>b({method:"get",...e}),post:e=>b({method:"post",...e}),delete:e=>b({method:"delete",...e}),put:e=>b({method:"put",...e})},De=e=>S.post({url:"/customer/device/deviceLocation",data:e}),Be=e=>S.get({url:"/customer/device/kanban/getDevice",params:e}),ze=()=>S.get({url:"/customer/device/kanban/get"}),Ze=()=>S.get({url:"/customer/device/kanban/leaseDevice"}),Pe=e=>(he("data-v-cd9cfaeb"),e=e(),we(),e),xe={class:"map-container"},Ce=Pe(()=>c("div",{id:"map"},null,-1)),Me={class:"container"},ke={class:"model-list-ul"},Ie={class:"header"},Ee={class:"img-box"},Te=["src"],je={class:"base-info"},k=23,Fe=pe({__name:"DeviceMap",setup(e){const r=u({}),d=u({});u(!1),u([]),u([]),u([]);const v=u([]);let L=me({keyword:"",organId:"",brand:"",projectName:"",projectId:""});const g=u(null),D=u(null);u("1");let l={};const A=`${window.location.protocol}//${window.location.host}`,N=new G({visible:!0,source:new X({visible:!0,url:`${A}/A4Service/TileService.ashx?c={x}&r={y}&l={z}&token=84265148-19bb-4b6b-a2d0-923738b4ebbf&type=IMGMIX`})});function R(o){r.value={...o},console.log("deviceInfo",o);const t={organName:"所属单位：",projectName:"项目名称：",tsLon:"经度：",tsLat:"纬度：",pstnTime:"位置时间：",egnState:"发动机状态：",fuel:"当天油耗（L）：",totalFuel:"累计油耗（L）：",runHours:"当天运行小时数：",trunHours:"累计工作小时：",devSerial:"设备机号或识别码："},a={},n=document.createElement("ul");n.className="model-list-ul";for(const m in t)if(o[m]){const s=t[m];let i=o[m];s=="发动机状态："&&(i==1?i="开":i="关"),a[s]=i;const _=document.createElement("li");_.innerHTML=`${s}${i}`,n.appendChild(_)}return d.value={base:{...a},other:{mainImg:o.mainImg||""}},console.log("popupData",d.value),n}let p=null;function $(o){let t=l.forEachFeatureAtPixel(o.pixel,function(a,n){return a});if(t)if(t.getProperties().features){let a=t.getProperties().features;if(t.getProperties().features.length==1){let n=a[0].values_,m=o.coordinate;if(a[0].values_){let s=n.deviceInfo;R(s)}p.setPosition(m),l.addOverlay(p)}else p.setPosition(void 0),l.getView().getZoom()<k&&l.getView().animate({center:t.getGeometry().getCoordinates(),zoom:l.getView().getZoom()+1})}else p.setPosition(void 0);else console.log("非坐标点"),p.setPosition(void 0)}const B=()=>{l=new J({controls:Y().extend([new Q]),layers:[N],target:"map",view:new W({center:[107.73851,34.98333],zoom:3,maxZoom:k,projection:"EPSG:4326",constrainResolution:!0,smoothResolutionConstraint:!1})});var o=new ee({units:"metric"});l.addControl(o),l.on("singleclick",t=>{$(t)})},z=()=>{var o=document.getElementById("popup-closer");return p.setPosition(void 0),o.blur(),!1};var P=[],f,x;const Z=o=>{P=[];let t,a;for(let n of o)t=[n.tsLon,n.tsLat],a=new te({geometry:new oe(t)}),a.setProperties({deviceInfo:n}),P.push(a);f=new se({distance:50,minDistance:10,source:new ae({features:P})}),x=new ne({source:f,zIndex:1,style:function(n){const m=n.get("features").length,s=m;if(m>1){var i=["204,235,197","168,221,181","123,204,196","78,179,211","43,140,190"];i[0],s>=0&&s<10?i[0]:s>=10&&s<100?i[1]:s>=100&&s<1e3?i[2]:s>=1e3&&s<1e4?i[3]:s>=1e4&&i[4];let _=Math.round(12+Math.pow(s,1/5)*10);return l.getView().getZoom()>=k?new C({image:new T({src:F,width:25,height:34}),text:new j({font:"15px sans-serif",text:m.toString(),fill:new M({color:"#fff"})})}):new C({image:new re({radius:_/2,stroke:new ie({color:"#fff"}),fill:new M({color:"rgba(0,0,255,0.5)"})}),text:new j({font:"15px sans-serif",text:m.toString(),fill:new M({color:"#fff"})})})}else return new C({image:new T({src:F,width:25,height:34})})}}),l.addLayer(x)};function H(){if(console.log("clusterSource",f),p&&p.setPosition(void 0),f){var o=f.getSource().getFeatures();o.length!=0&&(f.getSource().clear(),l.removeLayer(x))}}ve(()=>{p=new K({element:g.value,autoPan:!0,offset:[-50,0],autoPanAnimation:{duration:250},stopEvent:!1}),p.setPosition(void 0),B(),H(),U(L)});const U=async o=>{try{const t=await De(o);v.value=(t==null?void 0:t.data)||[],Z(v.value)}catch(t){console.log("获取出错",t)}},q=o=>{const t=o.srcElement;t.src=ye};return(o,t)=>(h(),w("div",xe,[Ce,c("div",{id:"popup",class:"ol-popup",ref_key:"popupContainer",ref:g},[c("div",Me,[c("div",null,[c("a",{href:"#",id:"popup-closer",class:"ol-popup-closer",onClick:z})]),c("div",{id:"popup-content",ref_key:"popupContent",ref:D},[c("div",ke,[c("div",Ie,[c("div",Ee,[d.value&&d.value.other?(h(),w("img",{key:0,src:d.value.other.mainImg,onError:t[0]||(t[0]=a=>q(a))},null,40,Te)):fe("",!0)]),c("div",je,[c("h1",null,y(r.value.deviceName),1),c("small",null,y(r.value.brandName),1)])]),(h(!0),w(ge,null,_e(d.value.base,(a,n)=>(h(),w("div",{key:n},y(n)+y(a),1))),128))])],512)])],512)]))}});const Oe=le(Fe,[["__scopeId","data-v-cd9cfaeb"]]),He=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"}));export{Oe as D,Ze as a,ze as b,He as c,Be as g};