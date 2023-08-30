import{c as N}from"./pinia-ea4bbe9a.js";import{d as h,C as _,K as g,u as y,L as v}from"./@vue-df245e2a.js";import{R as C,c as b,a as B}from"./vue-router-33127457.js";import{c as E}from"./vite-plugin-mock-6a1e592d.js";import"./vue-demi-71ba0ef2.js";import"./mockjs-5cb968cc.js";import"./@babel-18f3e44a.js";import"./path-to-regexp-31db6522.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const M=h({__name:"App",setup(n){return(r,s)=>(_(),g(y(C)))}});const O=(n,r)=>{const s=n.__vccOpts||n;for(const[c,t]of r)s[c]=t;return s},P=O(M,[["__scopeId","data-v-7b2a1075"]]),j="modulepreload",L=function(n,r){return new URL(n,r).href},m={},S=function(r,s,c){if(!s||s.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=L(e,c),e in m)return;m[e]=!0;const o=e.endsWith(".css"),f=o?'[rel="stylesheet"]':"";if(!!c)for(let i=t.length-1;i>=0;i--){const u=t[i];if(u.href===e&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":j,o||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),o)return new Promise((i,u)=>{a.addEventListener("load",i),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},w=b({history:B(),routes:[{path:"/",name:"Index",component:()=>S(()=>import("./Index-63bf0792.js"),["./Index-63bf0792.js","./@dataview-64b4a97b.js","./@vue-df245e2a.js","./lodash-es-d501d8a3.js","./classnames-e8ccfb6c.js","./@babel-18f3e44a.js","./@jiaminghi-ceb7225a.js","./pinia-ea4bbe9a.js","./vue-demi-71ba0ef2.js","./vue-countup-v3-0e634110.js","./@vueuse-58b96580.js","./vue-types-06265bf7.js","./is-plain-object-24dec1b5.js","./echarts-909ee9de.js","./zrender-44d86886.js","./tslib-54e39b60.js","./axios-82afda87.js","./qs-bff93799.js","./side-channel-3b7991b2.js","./get-intrinsic-bd2830fd.js","./has-symbols-e8f3ca0e.js","./has-proto-f7d0b240.js","./function-bind-22e7ee79.js","./has-26d28e02.js","./call-bind-e5c1c8b0.js","./object-inspect-f58b0380.js","./china_geo.json-486ded62.js","./vue3-seamless-scroll-5bae5402.js","./swiper-164b78d8.js","./swiper-0705b292.css","./vue-router-33127457.js","./vite-plugin-mock-6a1e592d.js","./mockjs-5cb968cc.js","./path-to-regexp-31db6522.js","./Index-a79afd35.css"],import.meta.url),meta:{title:"数据平台"}}]}),k={base_url:{base:"",dev:"",pro:"",test:""},result_code:"0000",request_timeout:6e4,default_headers:"application/json;charset=UTF-8"},A={status:"SUCCEED",data:{completions:[{yearMonth:"22-08",completed:26,toBeContinued:0,success:100},{yearMonth:"22-09",completed:19,toBeContinued:0,success:100},{yearMonth:"22-10",completed:31,toBeContinued:0,success:100},{yearMonth:"22-11",completed:36,toBeContinued:0,success:100},{yearMonth:"22-12",completed:21,toBeContinued:0,success:100},{yearMonth:"23-01",completed:6,toBeContinued:0,success:100},{yearMonth:"23-02",completed:45,toBeContinued:0,success:100},{yearMonth:"23-03",completed:64,toBeContinued:0,success:100},{yearMonth:"23-04",completed:38,toBeContinued:0,success:100},{yearMonth:"23-05",completed:27,toBeContinued:0,success:100},{yearMonth:"23-06",completed:26,toBeContinued:0,success:100},{yearMonth:"23-07",completed:14,toBeContinued:61,success:19}],addNewOrder:19,totalAmount:"0",regions:6,projectInfoList:[{projectName:"西四线（吐鲁番-中卫）线路工程一标段",deviceNum:"70",ratio:"11.1"},{projectName:"茂名-云安项目线路工程第一标段",deviceNum:"46",ratio:"7.3"},{projectName:"管道局第四分公司设备中心",deviceNum:"37",ratio:"5.9"},{projectName:"中俄东线南段（永清-上海）南通-甪直二标段",deviceNum:"35",ratio:"5.5"},{projectName:"西三中（中卫-吉安）中卫-枣阳线路一标段",deviceNum:"35",ratio:"5.5"},{projectName:"其他项目(共计74个)",deviceNum:"3",ratio:"0.9"}],unitUseOrder:[{organName:"工程建设公司",orderNum:18},{organName:"中国石油管道局工程有限公司第一分公司",orderNum:43},{organName:"中国石油管道局工程有限公司国际分公司",orderNum:39},{organName:"中国石油天然气管道局(泰国)有限公司",orderNum:3},{organName:"中国石油管道局工程有限公司第三工程分公司",orderNum:222},{organName:"中国石油天然气第一建设有限公司",orderNum:14},{organName:"中油(新疆)石油工程有限公司",orderNum:11},{organName:"四川石油天然气建设工程有限责任公司",orderNum:5},{organName:"中国石油天然气管道第二工程有限公司",orderNum:158},{organName:"中国石油管道局工程有限公司第四分公司",orderNum:79},{organName:"河北华北石油工程建设有限公司",orderNum:38},{organName:"大港油田集团工程建设有限责任公司",orderNum:31},{organName:"中石化江汉油建工程有限公司",orderNum:2},{organName:"中石化江苏油建工程有限公",orderNum:2},{organName:"廊坊市海工",orderNum:1},{organName:"东北石油管道有限公司",orderNum:1}],totalOrder:616}},{result_code:R}=k,x=[{url:"/mock/api/orderKanbanApi",method:"get",response:()=>A},{url:"/mock/api/chinaGeoAPI",method:"get",response:()=>({code:R,data:[],status:"SUCCEED"})}],I=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),l=Object.assign({"./index.ts":I}),p=[];Object.keys(l).forEach(async n=>{n.includes("_")||p.push(...l[n])});function U(){E(p)}const d=v(P);d.use(w);d.use(N());d.mount("#app");U();export{O as _,k as c,w as r};
