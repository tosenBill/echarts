import{R as We,A as me,f as Be,J as Ye,D as fe}from"./@dataview-613fa37c.js";import"./classnames-e8ccfb6c.js";import"./@jiaminghi-ceb7225a.js";import{d as qe}from"./pinia-648bb7b4.js";import{_ as Ge}from"./vue-countup-v3-234159da.js";import{b as P,r as _,k as M,u as h,y as F,o as le,a as te,d as $,v as b,n as ie,C as x,D as w,j as Je,w as R,K as E,M as I,c as y,N as O,O as B,J as ye,P as be,F as i,Q as T,R as Se,S as Ce,E as Ke,T as ee,U as Qe,V as Ze,W as Xe}from"./@vue-4e6d70f1.js";import{U as et}from"./vue-types-06265bf7.js";import{u as tt,i as ot,a as at,b as st,c as nt,d as rt,e as lt,f as it,g as ct,h as ut,j as dt,k as pt,l as _t,m as mt,n as ft,o as ht,p as vt,q as gt,r as xt,s as K}from"./echarts-d850032b.js";import{J as re}from"./china_geo.json-486ded62.js";import{_ as N,c as ce,r as we}from"./index-fabbdf9e.js";import{V as yt}from"./vue3-seamless-scroll-8d78a580.js";import{A as bt,E as St,S as Ct,a as wt}from"./swiper-38ca57fe.js";import{u as $t}from"./@vueuse-e1f4c68c.js";import{a as Dt}from"./axios-82afda87.js";import{q as kt}from"./qs-bff93799.js";import"./lodash-es-d501d8a3.js";import"./@babel-18f3e44a.js";import"./vue-demi-71ba0ef2.js";import"./is-plain-object-24dec1b5.js";import"./zrender-b37f5740.js";import"./tslib-54e39b60.js";import"./vue-router-0ac7f0d1.js";import"./vite-plugin-mock-6a1e592d.js";import"./mockjs-5cb968cc.js";import"./path-to-regexp-31db6522.js";import"./side-channel-3b7991b2.js";import"./get-intrinsic-bd2830fd.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-e5c1c8b0.js";import"./object-inspect-f58b0380.js";const Tt=qe("screen",{state:()=>({mode:"Normal"}),getters:{screenMode(){return this.mode}},actions:{setScreenMode(t){this.mode=t;const e=document.getElementsByTagName("html")[0];t==="AdptMultiDevice"?e.style.setProperty("--app-base-unit","0.01rem"):e.style.setProperty("--app-base-unit","1px")}}}),zt=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"})),he=Object.assign({"./modules/useScreenStore.ts":zt}),$e={};Object.keys(he).forEach(t=>{const e=t.replace(/^\.\/modules\/(.*)\.\w+$/,"$1");$e[e]=he[t].default});function Ft(){return $e}const Lt=()=>{const t=Ft(),{useScreenStore:e}=t,{setScreenMode:a}=e();return{setScreenMode:a}},Mt=Object.freeze(Object.defineProperty({__proto__:null,default:Lt},Symbol.toStringTag,{value:"Module"}));function Nt(){const t=P({delay:1e3,endVal:120500,options:{useEasing:!0,useGrouping:!0,separator:",",decimal:".",prefix:"",suffix:""}});_(null);const e=_({...t});return{CountUp:Ge,countUpOption:e}}const At=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"}));let D={gregorianYear:null,gregorianMonth:null,gregorianDay:null,weekday:null,hours:null,minutes:null,seconds:null,lunarYear:null,lunarMonth:null,lunarDay:null,lunarYearCn:"",lunarMonthCn:"",lunarDayCn:"",zodiacYear:"",solarTerm:"",gregorianFestival:"",lunarFestival:""},oe=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42448,83315,21200,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46496,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19415,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448],jt=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],Ot=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Et=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],It=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];function Rt(t){return Ot[t%10]+Et[t%12]}function Ut(t){let e,a=348;for(e=32768;e>8;e>>=1)a+=oe[t-1900]&e?1:0;return a+De(t)}function De(t){return ke(t)?oe[t-1900]&65536?30:29:0}function ke(t){return oe[t-1900]&15}function Pt(t,e){return oe[t-1900]&65536>>e?30:29}function Ht(t){let e,a=0,s=new Date(1900,0,31),o=Math.floor((t-s)/864e5),r=o+40,c=14;for(e=1900;e<2050&&o>0;e++)a=Ut(e),o-=a,c+=12;o<0&&(o+=a,e--,c-=12);let l=e,n=e-1864,p=ke(e),m=!1;for(e=1;e<13&&o>0;e++)p>0&&e===p+1&&m===!1?(--e,m=!0,a=De(l)):a=Pt(l,e),m===!0&&e===p+1&&(m=!1),o-=a,m===!1&&c++;o===0&&p>0&&e===p+1&&(m?m=!1:(m=!0,--e,--c)),o<0&&(o+=a,--e,--c);let f=e,d=o+1;return{year:l,month:f,day:d,isLeap:m,leap:p,yearCyl:n,dayCyl:r,monCyl:c}}function ve(t,e){let a=["日","一","二","三","四","五","六","七","八","九","十"],s=["初","十","廿","卅",""],o,r;switch(t==10?o="十":t==11?o="冬":t==12?o="腊":(o=a[t],t==1&&(o="正")),o+="月",e){case 10:r="初十";break;case 20:r="二十";break;case 30:r="三十";break;default:r=s[Math.floor(e/10)]+a[e%10]}return{lunarMonthCn:o,lunarDayCn:r}}function Vt(t,e,a){let s=[0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758],o=["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],r="",c=new Date(315569259747e-1*(t-1900)+s[e*2+1]*6e4+Date.UTC(1900,0,6,2,5)),l=c.getUTCDate();return l===a&&(r=o[e*2+1]),c=new Date(315569259747e-1*(t-1900)+s[e*2]*6e4+Date.UTC(1900,0,6,2,5)),l=c.getUTCDate(),l===a&&(r=o[e*2]),r}const Wt={data(t){let e=t||new Date,a=e.getFullYear(),s=e.getMonth(),o=e.getDate(),r=e.getFullYear(),c=e.getMonth()+1,l=e.getDate(),n=e.getHours(),p=e.getMinutes(),m=e.getSeconds();c=c.toString().padStart(2,"0"),l=l.toString().padStart(2,"0"),n=n.toString().padStart(2,"0"),p=p.toString().padStart(2,"0"),m=m.toString().padStart(2,"0"),D.gregorianYear=r,D.gregorianMonth=c,D.gregorianDay=l,D.weekday=It[e.getDay()],D.hours=n,D.minutes=p,D.seconds=m;let f=new Date(a,s,o),d=new Ht(f);return D.lunarYear=d.year,D.lunarMonth=d.month,D.lunarDay=d.day,D.zodiacYear=jt[(d.year-4)%12],D.lunarYearCn=Rt(d.year-1900+36),D.lunarMonthCn=ve(d.month,d.day).lunarMonthCn,D.lunarDayCn=ve(d.month,d.day).lunarDayCn,D.solarTerm=Vt(a,s,o),D}};function Bt(){const t=_(null),e=_(null),a=_(null),s=_(null),o=_(null);return{currentTime:t,currentDate:e,currentWeek:a,currentLunarDate:s,Timer:o,getDateTimeFormat:l=>`${l.getFullYear()}-${(l.getMonth()+1).toString().padStart(2,"0")}-${l.getDate().toString().padStart(2,"0")} ${l.getHours().toString().padStart(2,"0")}`,getCurrentDateTime:()=>{const l=new Date,{lunarYearCn:n,zodiacYear:p,lunarMonthCn:m,lunarDayCn:f,weekday:d,gregorianYear:u,gregorianMonth:v,gregorianDay:g,hours:S,minutes:C,seconds:k}=Wt.data(l);return t.value=`${S}:${C}:${k}`,e.value=`${u}年${v}月${g}日`,a.value=d,s.value=`${n}${p}年${m}${f}`,{lunarYearCn:n,zodiacYear:p,lunarMonthCn:m,lunarDayCn:f,weekday:d,gregorianYear:u,gregorianMonth:v,gregorianDay:g,hours:S,minutes:C,seconds:k}}}}const Yt=Object.freeze(Object.defineProperty({__proto__:null,default:Bt},Symbol.toStringTag,{value:"Module"}));function qt(){return{toThousands:a=>{a=(a||0).toString();let s=0,o="",r="";a.indexOf(".")>0?(s=a.indexOf("."),o=a.substr(s),r=a.substring(0,s)):r=a;let c=[],l=0;r=r.split("");for(let n=r.length-1;n>=0;n--)l++,c.unshift(r[n]),!(l%3)&&n!=0&&c.unshift(",");return c.join("")+o||""},isNull:a=>a&&a!==null&&a!==void 0&&a!==""&&a!=="Null"&&a!=="null"&&a!==" "?a:"-"}}const Gt=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"}));function Jt(t){const e=M("getApiData",null),a=M("getApiLoading",!1),s=M("getContrastRatio",1);return{apiData:e,apiLoading:a,contrastRatio:s,calcFont:r=>h(s)*r}}const Kt=Object.freeze(Object.defineProperty({__proto__:null,default:Jt},Symbol.toStringTag,{value:"Module"})),ge=t=>Object.prototype.toString.call(t)==="[object Function]";function Te(){return{initResizeEvent:a=>{a&&ge(a)&&window.addEventListener("resize",a)},destroyResizeEvent:a=>{a&&ge(a)&&window.removeEventListener("resize",a)}}}const Qt=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"}));function Zt(t){const{initResizeEvent:e,destroyResizeEvent:a}=Te(),s=P({width:1920,height:1080,ratio:1920/1080}),o=P({width:1920,height:1080}),r=P({width:1400,height:820}),c=_(1);return F("getDesign",s),F("getScreen",o),F("getContrastRatio",c),le(()=>{t(),e(t)}),te(()=>{a(t)}),{design:s,screen:o,minScreen:r,contrastRatio:c}}const Xt=Object.freeze(Object.defineProperty({__proto__:null,default:Zt},Symbol.toStringTag,{value:"Module"})),xe=Object.assign({"./modules/useCommon.ts":Mt,"./modules/useCountUp.ts":At,"./modules/useDateTime.ts":Yt,"./modules/useFilter.ts":Gt,"./modules/useModuleData.ts":Kt,"./modules/useResize.ts":Qt,"./modules/useScreen.ts":Xt}),j={};Object.keys(xe).forEach(t=>{const e=t.replace(/^\.\/modules\/(.*)\.\w+$/,"$1");j[e]=xe[t].default});const eo="/echarts/assets/close_btn-5a264076.png",L=et({func:void 0,bool:void 0,string:void 0,number:void 0,object:void 0,integer:void 0});L.extend([{name:"style",getter:!0,type:[String,Object],default:void 0}]);tt([ot,at,st,nt,rt,lt,it,ct,ut,dt,pt,_t,mt,ft,ht,vt,gt,xt]);const to=$({__name:"DefaultChart",props:{option:L.object.def({}),autoplay:L.bool.def(!1),autoplayLen:L.number.def(1),type:L.string.def("")},emits:["mapEmit"],setup(t,{emit:e}){const a=t,{useModuleData:s}=j,{calcFont:o}=s(null),r=M("showTitle",!0),c=b(()=>({top:o(25),left:"center",textStyle:{color:"#fff",fontSize:o(16)},show:r})),l=_(null),n=_(),p=_(null),m=b(()=>({...h(c),...a.option.title})),f=u=>{let v=-1;l.value=setInterval(function(){var g=a.autoplayLen!==1?a.autoplayLen:a.option.series[0].data.length;u.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:v}),v=(v+1)%g,u.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:v}),u.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:v})},2e3),console.log("timer.value",l.value)},d=async()=>{p.value=Je(K.init(n.value));const u=a.option;u.title=m.value,a.type==="map"&&(K.registerMap("china",re),e("mapEmit",re)),p.value.setOption(u),a.autoplay&&f(p.value)};return le(()=>{window.addEventListener("resize",()=>{console.log("屏幕大小变了"),p.value.resize()}),ie(()=>d())}),te(()=>{p.value.dispose(),window.removeEventListener("resize",p.value),clearInterval(l.value),l.value=null}),(u,v)=>(x(),w("div",{ref_key:"chartDom",ref:n,class:"default-echart"},null,512))}});const Y=N(to,[["__scopeId","data-v-47ccd47b"]]),ze=$({__name:"ChartFour",props:{isScale:L.number.def(1)},setup(t){const e=t,a=_(!1),{useModuleData:s}=j,{calcFont:o}=s(null),r=_({}),c=_([]),l=_([]),n=_([]),p=_([]);r.value=M("orderComplete");const m=()=>{h(r.value).forEach(u=>{const{completed:v,success:g,toBeContinued:S,yearMonth:C}=u;c.value.push(v),l.value.push(S),n.value.push(g),p.value.push(C)}),a.value=!0};e.isScale>1&&m(),R(()=>r.value,()=>{m()},{deep:!0});const f=b(()=>({title:{text:"过去半年订单完成率",top:0},tooltip:{trigger:"axis",axisPointer:{type:"none",label:{show:!1}},textStyle:{fontSize:o(14*e.isScale)},extraCssText:"z-index:3"},grid:{left:"10%",top:"20%",right:"10%",bottom:"12%"},legend:{padding:[0,o(100*e.isScale)],data:[{name:"履行中",icon:"circle",textStyle:{color:"#ffffff",fontSize:o(14*e.isScale)}},{name:"已完成",icon:"circle",textStyle:{color:"#ffffff",fontSize:o(14*e.isScale)}},{name:"成功率",icon:"circle",textStyle:{color:"#ffffff",fontSize:o(14*e.isScale)}}],top:"10%",textStyle:{color:"#1FC3CE",fontSize:o(16*e.isScale)}},xAxis:{data:p.value,axisLine:{show:!1},axisTick:{show:!1,alignWithLabel:!0},axisLabel:{show:!0,textStyle:{color:"#0b78d5",fontSize:o(16*e.isScale)},interval:0}},yAxis:[{type:"value",name:"单位：%",max:100,splitNumber:8,nameTextStyle:{color:"#0b78d5",fontSize:o(16*e.isScale)},splitLine:{show:!0,lineStyle:{color:"rgba(21, 78, 129, 0.5 )",type:"solid"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"#0b78d5",fontSize:o(16*e.isScale)}}},{type:"value",name:"单位：件",max:100,splitNumber:8,nameTextStyle:{color:"#0b78d5",fontSize:o(16*e.isScale)},splitLine:{show:!0,lineStyle:{color:"rgba(92, 229, 192, 0.2)",type:"solid"}},axisLabel:{show:!0,textStyle:{color:"#0b78d5",fontSize:o(16*e.isScale)}},axisLine:{show:!1},axisTick:{show:!1}}],series:[{name:"已完成",type:"bar",barWidth:o(24*e.isScale),itemStyle:{normal:{color:new K.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(60, 211, 158, 1)"},{offset:1,color:"rgba(60, 211, 158, 0.1)"}])}},data:c.value,label:{show:!0,position:"top",distance:5,fontSize:o(16*e.isScale),color:"#FFFFFF"}},{name:"履行中",type:"bar",barWidth:o(24*e.isScale),itemStyle:{normal:{color:new K.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(218, 227, 108, 1)"},{offset:1,color:"rgba(218, 227, 108, 0.1)"}])}},data:l.value,label:{show:!0,position:"top",distance:5,fontSize:o(16*e.isScale),color:"#FFFFFF"}},{name:"成功率",type:"line",smooth:!0,yAxisIndex:1,showAllSymbol:!0,symbol:"circle",symbolSize:o(8*e.isScale),itemStyle:{color:"rgba(88, 222, 196, 1)"},lineStyle:{color:"rgba(55, 168, 192, 1)",width:o(5),shadowBlur:2},areaStyle:{normal:{color:new K.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(92, 106, 142, 0.4)"},{offset:1,color:"rgba(92, 106, 142, 0.4)"}],!1)}},data:n.value}]}));return(d,u)=>a.value?(x(),E(Y,{key:0,option:f.value,autoplay:!0,autoplayLen:8},null,8,["option"])):I("",!0)}}),Fe=$({__name:"ChartThree",props:{isScale:L.number.def(1)},setup(t){const e=t,a=_(!1),{useModuleData:s}=j,{calcFont:o}=s(null),r=_([]),c=_([]),l=_([]),n={first:"设备数",second:"设备占比"},p=_([]),m=_([]);r.value=M("projectList",[]);const f=()=>{h(r.value).forEach((v,g)=>{const{projectName:S,deviceNum:C,ratio:k,totalAmount:q}=v,G={data:[C,k],value:[g===0?100:0,g===1?100:0,g===2?100:0,g===3?100:0,g===4?100:0],name:S},ae={name:`${S}$${C}$${k}%`};c.value.push(`${C}`),l.value.push(`${k*10}`),m.value.push(ae),p.value.push(G)}),a.value=!0};e.isScale>1&&f(),R(()=>r.value,()=>{f()},{deep:!0});const d=b(()=>({title:{top:"auto",text:"项目统计图",left:"5%",textStyle:{fontSize:o(14*e.isScale),color:"#fff"}},legend:{show:!0,right:`${3*e.isScale}%`,icon:"circle",data:[{name:n.first},{name:n.second}],textStyle:{color:"#C3E3F9",fontSize:o(14*e.isScale)},selectedMode:!1},tooltip:{show:!0,extraCssText:"z-index:3"},color:["rgba(71, 141, 255, 0.83)","rgba(31, 217, 208, 0.83)"],radar:[{shape:"circle",radius:"45%",center:["50%","50%"],indicator:m.value,splitArea:{areaStyle:{color:["#598EFF","#88aefa","#bad5fe","#e2ecff","#fff"]}},splitLine:{lineStyle:{color:"#969696",type:"dotted",width:2*e.isScale}},axisLine:{lineStyle:{color:"#9EC3FF"}},axisName:{show:!0,rich:{a:{fontSize:o(16*e.isScale),lineHeight:o(25*e.isScale)},b:{fontSize:o(16*e.isScale),lineHeight:o(25*e.isScale)},c:{fontSize:o(16*e.isScale),color:"#478DFF",lineHeight:o(25*e.isScale)},d:{fontSize:o(16*e.isScale),color:"#1FD9D1",lineHeight:o(25*e.isScale)},e:{fontSize:o(16*e.isScale),lineHeight:o(25*e.isScale)}},formatter:u=>{let v=u?u.split("$"):["","",""];return`{a| ${v[0]}}
{c|●}{b| ${v[1]}}
{d|●}{e| ${v[2]}}`},color:"#fff"}},{shape:"circle",center:["50%","50%"],radius:"45%",indicator:m.value,axisLine:{lineStyle:{color:"transparent"}}}],series:[{name:"显示图形",type:"radar",radarIndex:0,tooltip:{show:!1},areaStyle:{opacity:.95},itemStyle:{borderColor:"#fff",borderWidth:1*e.isScale},label:{show:!1,color:"#fff"},data:[{value:c.value,name:n.first},{value:l.value,name:n.second}]},{name:"显示提示",type:"radar",symbol:"none",lineStyle:{color:"transparent"},radarIndex:1,zlevel:2,tooltip:{show:!0,formatter:u=>{console.log("params",u);let{data:v}=u.data;return`${u.name}<br />${n.first}： ${v[0]}个<br />${n.second}： ${v[1]}%<br/>`}},data:p.value}]}));return(u,v)=>a.value?(x(),E(Y,{key:0,option:d.value,autoplay:!0,autoplayLen:5},null,8,["option"])):I("",!0)}}),Le=$({__name:"DeviceCategory",props:{isScale:L.number.def(1)},setup(t){const e=t,{useModuleData:a}=j,{calcFont:s}=a(null),o=_([]),r=_(!1);let c="#fff",l=["#c065e7","#765deb","#3862d8","#6a89E2","#219CF9","#6efbbf","#40c057","#ffd351","#ff8e43","#f56b6d"],n=[{name:"A类",value:"3720"},{name:"B类",value:"2920"},{name:"C类",value:"2200"},{name:"D类",value:"1420"},{name:"E类",value:"3200"},{name:"F类",value:"2420"},{name:"G类",value:"2200"},{name:"H类",value:"1420"},{name:"I类",value:"3200"},{name:"J类",value:"2420"}];const p=M("deviceCategories",[]),m=u=>{var v;o.value=(v=h(u))==null?void 0:v.map(g=>({name:g.typeName,value:g.num})),r.value=!0};e.isScale>1&&m(p),R(()=>p,u=>{u!==void 0&&m(u)},{deep:!0});let f=function(u){let v=/(?=(\B)(\d{3})+$)/g;return u.toString().replace(v,",")};n.reduce((u,v)=>u+v.value*1,0);const d=b(()=>({color:l,tooltip:{trigger:"item",textStyle:{fontSize:s(14*e.isScale)},extraCssText:"z-index:3"},title:{text:"设备类型统计图",top:"auto",left:"center",textStyle:{color:"#fff",fontSize:s(16*e.isScale)}},series:[{type:"pie",roseType:"radius",radius:["25%","60%"],center:["50%","50%"],data:h(o),itemStyle:{normal:{borderColor:c,borderWidth:2*e.isScale}},labelLine:{length:s(20*e.isScale),length2:s(30*e.isScale),lineStyle:{}},label:{normal:{formatter:u=>"{icon|●}{name|"+u.name+`}
{value|`+f(u.value)+"}",rich:{icon:{fontSize:s(18*e.isScale),color:"inherit"},name:{fontSize:s(16*e.isScale),padding:[0,0,0,s(4*e.isScale)],color:"#fff"},value:{fontSize:s(16*e.isScale),fontWeight:"bolder",padding:[s(10*e.isScale),0,0,s(20*e.isScale)],color:"inherit"}}}}}]}));return(u,v)=>r.value?(x(),E(Y,{key:0,option:d.value,autoplay:!0},null,8,["option"])):I("",!0)}});function oo(t,e){return Math.floor(Math.random()*(e-t+1))+t}const ao=$({__name:"AreaMarket",props:{isScale:L.number.def(1)},setup(t){const e=t,{useModuleData:a}=j,{calcFont:s,contrastRatio:o}=a(null),r=_(!1),c=_([]),l=M("supermarket",[]),n=(f=[])=>{var u;for(var d=0;d<f.length;d++){const v=o.value*oo(50*e.isScale,80*e.isScale),g={name:f[d].name,value:(u=f[d].children)==null?void 0:u.length,symbolSize:v,itemStyle:{color:"rgb("+Math.round(Math.random()*255)+", "+Math.round(Math.random()*255)+", "+Math.round(Math.random()*255)+")"}};c.value.push(g)}},p=f=>{const d=h(f).filter(u=>u.id!==1);n(d),r.value=!0,console.log("area-initdata")};e.isScale>1&&p(l),R(()=>l,f=>{p(f)},{deep:!0});const m=b(()=>({title:{top:"auto",text:"区域中心",bottom:0,textStyle:{fontSize:s(16*e.isScale),fontWeight:"bolder",color:"#fff"}},tooltip:{show:!0,extraCssText:"z-index:3"},grid:{bottom:"10%"},series:[{type:"graph",layout:"force",force:{repulsion:[e.isScale>1?50*e.isScale*2:50,e.isScale>1?140*e.isScale*2:140],edgeLength:10*e.isScale},roam:!0,label:{normal:{show:!0}},data:c.value}]}));return(f,d)=>r.value?(x(),E(Y,{key:0,option:m.value,autoplay:!0},null,8,["option"])):I("",!0)}});const Me=N(ao,[["__scopeId","data-v-29f0e197"]]),so=t=>(Se("data-v-614884c7"),t=t(),Ce(),t),no={class:"project-list-item__name ellipsis"},ro={class:"statistics-card"},lo={class:"statistics-card__num font-16"},io=so(()=>i("span",{class:"statistics-card__text mt-5"},"订单数",-1)),co=$({__name:"OrderCarousel",props:{isScale:L.number.def(1)},setup(t){const e=t,{useFilter:a}=j,{toThousands:s}=a(),o=_({});o.value=M("orderCarousel",[]);const r=({type:l})=>{let n="project-list-item__icon";switch(l){case"web":n+=" web";break;case"design":n+=" design";break;case"app":n+=" app";break;case"project":n+=" project";break;default:n+=" web"}return e.isScale>1&&(n+=" big-icon"),n},c=({type:l})=>{let n="iconfont";switch(l){case"web":n+=" icon-webduan";break;case"design":n+=" icon-shejimeigong";break;case"app":n+=" icon-appyingyong";break;case"project":n+=" icon-app";break}return n};return(l,n)=>(x(),w("div",{class:B(["project-scroll",{"is-big-chart":t.isScale>1}])},[y(h(yt),{list:o.value.value,step:.3,hover:!0,class:"project-list"},{default:O(()=>[(x(!0),w(ye,null,be(o.value.value,(p,m)=>(x(),w("div",{class:B(["project-list-item",{"is-big-chart":t.isScale>1}]),key:"project-item"+m},[i("div",{class:B(r(p))},[i("i",{class:B(c(p))},null,2)],2),i("div",no,T(p.organName),1),i("div",ro,[i("span",lo,T(h(s)(p.orderNum)),1),io])],2))),128))]),_:1},8,["list"])],2))}});const Ne=N(co,[["__scopeId","data-v-614884c7"]]),Ae=$({__name:"CompanyDevice",props:{isScale:L.number.def(1)},setup(t){const e=t,a=_(!1),s=_([]),o=_([]),r=_([]),c=_([]),{useModuleData:l}=j,{calcFont:n}=l(null),p=M("deviceCompany",[]),m=d=>{var u;(u=h(d))==null||u.forEach(v=>{const{deviceTypeCount:g,orgName:S,deviceCount:C,brandCount:k}=v;s.value.push(S),o.value.push(C),r.value.push(k),c.value.push(g)}),a.value=!0};e.isScale>1&&m(p),R(()=>p,d=>{m(d)},{deep:!0});const f=b(()=>({title:{text:"公司设备数量/品牌数量/类型数量统计图",top:0},tooltip:{show:!0,trigger:"axis",backgroundColor:"rgba(116,176,222,0.3)",extraCssText:"box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset; z-index:3;",borderWidth:0,axisPointer:{type:"shadow",shadowStyle:{color:"rgba(35,49,77,0.3)"}},textStyle:{color:"#fff",fontSize:n(14*e.isScale)}},grid:{left:"10%",top:"20%",right:"auto",bottom:"12%"},legend:{show:!0,data:[{name:"设备数量",itemStyle:{color:"#4084EE"}},{name:"品牌数量",itemStyle:{color:"#FF8D28"}},{name:"类型数量",itemStyle:{color:"#6ACC29"}}],top:n(25*e.isScale),selectedMode:!1,type:"scroll",icon:"circle",itemWidth:n(16*e.isScale),itemHeight:n(16*e.isScale),textStyle:{color:"#C3E3F9",fontSize:n(14*e.isScale)}},xAxis:{data:s.value,type:"category",axisLine:{show:!0,lineStyle:{color:"#2B72A1"}},axisLabel:{fontSize:n(12*e.isScale),color:"#87CCFF",lineHeight:n(15*e.isScale),formatter:function(d){var u="",v=5,g=d.length,S=Math.ceil(g/v);if(S>1){for(var C=0;C<S;C++){var k="",q=C*v,G=q+v;k=d.substring(q,G)+`
`,u+=k}return u}else return d}},splitLine:{show:!1},axisTick:{show:!1},interval:0},yAxis:[{type:"value",name:"单位",nameGap:24,nameTextStyle:{align:"center",fontSize:n(16*e.isScale),color:"#2869A9"},splitNumber:4,splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.1)"}},axisLine:{show:!1},axisLabel:{margin:10,fontSize:n(16*e.isScale),color:"#2869A9"},axisTick:{show:!0,lineStyle:{color:"#2869A9"}}}],series:[{data:o.value,type:"bar",name:"设备数量",barGap:"20%",barWidth:n(22*e.isScale),label:{show:!0,position:"top",distance:4.8,textStyle:{color:"#4084EE",fontSize:n(14*e.isScale)}},showBackground:!1,backgroundStyle:{color:{x:0,y:1,x2:0,y2:0,type:"linear",global:!1,colorStops:[{offset:0,color:"rgba(64,132,238,0.2)"},{offset:1,color:"rgba(64,132,238,1)"}]},opacity:.1},itemStyle:{color:{x:0,y:1,x2:0,y2:0,type:"linear",global:!1,colorStops:[{offset:0,color:"rgba(64,132,238,0.2)"},{offset:1,color:"rgba(64,132,238,1)"}]}}},{data:r.value,type:"bar",name:"品牌数量",barGap:"20%",barWidth:n(22*e.isScale),barMaxWidth:n(48*e.isScale),label:{show:!0,position:"top",distance:4.8,textStyle:{color:"#FF8D28",fontSize:n(14*e.isScale)}},showBackground:!0,backgroundStyle:{color:{x:0,y:1,x2:0,y2:0,type:"linear",global:!1,colorStops:[{offset:0,color:"rgba(255,141,40,0.2)"},{offset:1,color:"rgba(255,141,40,1)"}]},opacity:.1},itemStyle:{color:{x:0,y:1,x2:0,y2:0,type:"linear",global:!1,colorStops:[{offset:0,color:"rgba(255,141,40,0.2)"},{offset:1,color:"rgba(255,141,40,1)"}]}}},{data:c.value,type:"bar",name:"类型数量",barGap:"20%",barWidth:n(22*e.isScale),label:{show:!0,position:"top",distance:4.8,textStyle:{color:"#6ACC29",fontSize:n(14*e.isScale)}},showBackground:!0,backgroundStyle:{color:{x:0,y:1,x2:0,y2:0,type:"linear",global:!1,colorStops:[{offset:0,color:"rgba(106,204,41,0.2)"},{offset:1,color:"rgba(106,204,41,1)"}]},opacity:.1},itemStyle:{color:{x:0,y:1,x2:0,y2:0,type:"linear",global:!1,colorStops:[{offset:0,color:"rgba(106,204,41,0.2)"},{offset:1,color:"rgba(106,204,41,1)"}]}}}]}));return(d,u)=>a.value?(x(),E(Y,{key:0,option:f.value,autoplay:!0,autoplayLen:s.value.length},null,8,["option","autoplayLen"])):I("",!0)}});function uo(t,e){localStorage.setItem(t,e)}function po(t){const e=localStorage.getItem(t);return e&&e!=="null"?e:!1}function je(t){t.forEach(e=>{e&&(clearInterval(e),clearTimeout(e)),e=null})}const _o={class:"fade-num-container"},mo=$({__name:"index",props:{value:{type:Number,default:0},color:{type:String,default:"#3fffe4"},duration:{type:Number,default:1e3}},emits:["update:value"],setup(t,{emit:e}){const a=t,s=_(null);R(()=>a.value,c=>{c!==0&&(je([s.value]),s.value=setTimeout(()=>{e("update:value",0)},a.duration))});const o=()=>`${a.value>0?"+":""}${a.value}`,r=c=>`-${c.toString().length*10+10}px`;return(c,l)=>(x(),w("div",_o,[Ke(c.$slots,"default",{},void 0,!0),y(Qe,{name:"fade"},{default:O(()=>[t.value!==0?(x(),w("span",{key:0,class:"change-num",style:ee({color:t.color,right:r(t.value)})},T(o()),5)):I("",!0)]),_:1})]))}});const ne=N(mo,[["__scopeId","data-v-e5d8fba0"]]),fo="/echarts/assets/icon-cover-ef3d0d2b.png",ho="/echarts/assets/icon-app-d0cf6220.png",vo="/echarts/assets/icon-vip-fbef5121.png",ue=t=>(Se("data-v-64ac12ae"),t=t(),Ce(),t),go={class:"count-statistic"},xo={class:"count-item"},yo={class:"count-item__icon"},bo=ue(()=>i("div",{class:"icon__circle animate-rotation"},null,-1)),So=["src"],Co={class:"count-item__content ml-20"},wo={class:"count-item__number number"},$o={class:"number__unit"},Do={class:"count-item__name mt-5"},ko={class:"count-item"},To={class:"count-item__icon"},zo=ue(()=>i("div",{class:"icon__circle animate-rotation"},null,-1)),Fo=["src"],Lo={class:"count-item__content ml-20"},Mo={class:"count-item__number number"},No={class:"number__unit"},Ao={class:"count-item__name mt-5"},jo={class:"count-item"},Oo={class:"count-item__icon"},Eo=ue(()=>i("div",{class:"icon__circle animate-rotation"},null,-1)),Io=["src"],Ro={class:"count-item__content ml-20"},Uo={class:"count-item__number number"},Po={class:"number__unit"},Ho={class:"count-item__name mt-5"},Vo=$({__name:"CountStatistic",setup(t){var p,m;const{useCountUp:e,useScreenModuleData:a}=j,{CountUp:s,countUpOption:o}=e(),r=b(()=>M("orderCount")),c=P({name:"订单总金额",img:fo,unit:"万元",value:((p=h(r))==null?void 0:p.totalAmount)||0,valueColor:"#45f3fd",changeNum:0}),l=P({name:"订单覆盖区域",img:ho,unit:"个",value:h(r).regions||0,valueColor:"#71ffaa",changeNum:0}),n=P({name:"上月新增订单数",img:vo,unit:"单",value:((m=h(r))==null?void 0:m.addNewOrder)||0,valueColor:"#ffe66d",changeNum:0});return _(),(f,d)=>(x(),E(h(We),{style:{height:"calc(150 * var(--app-base-unit))"}},{default:O(()=>[i("div",go,[i("div",xo,[i("div",yo,[bo,i("img",{class:"icon__content",src:c.img},null,8,So)]),i("div",Co,[i("div",wo,[i("span",{class:"number__value mr-5",style:ee({color:c.valueColor})},[y(ne,{value:c.changeNum,"onUpdate:value":d[0]||(d[0]=u=>c.changeNum=u)},{default:O(()=>[y(h(s),{delay:h(o).delay,endVal:c.value,options:h(o)},null,8,["delay","endVal","options"])]),_:1},8,["value"])],4),i("span",$o,T(c.unit),1)]),i("div",Do,T(c.name),1)])]),i("div",ko,[i("div",To,[zo,i("img",{class:"icon__content",src:l.img},null,8,Fo)]),i("div",Lo,[i("div",Mo,[i("span",{class:"number__value mr-5",style:ee({color:l.valueColor})},[y(ne,{value:l.changeNum,"onUpdate:value":d[1]||(d[1]=u=>l.changeNum=u)},{default:O(()=>[y(h(s),{delay:h(o).delay,endVal:l.value,options:h(o)},null,8,["delay","endVal","options"])]),_:1},8,["value"])],4),i("span",No,T(l.unit),1)]),i("div",Ao,T(l.name),1)])]),i("div",jo,[i("div",Oo,[Eo,i("img",{class:"icon__content",src:n.img},null,8,Io)]),i("div",Ro,[i("div",Uo,[i("span",{class:"number__value mr-5",style:ee({color:n.valueColor})},[y(ne,{value:n.changeNum,"onUpdate:value":d[2]||(d[2]=u=>n.changeNum=u)},{default:O(()=>[y(h(s),{delay:h(o).delay,endVal:n.value,options:h(o)},null,8,["delay","endVal","options"])]),_:1},8,["value"])],4),i("span",Po,T(n.unit),1)]),i("div",Ho,T(n.name),1)])])])]),_:1}))}});const Oe=N(Vo,[["__scopeId","data-v-64ac12ae"]]),Ee=$({__name:"ChinaChart",props:{isScale:L.number.def(1)},setup(t){const e=t,a=_(!1),s=_([]),{useModuleData:o}=j,{calcFont:r}=o(null),c=M("deviceMapCount",[]),l=()=>{var f=re.features;f.forEach(function(d){var g;var u=d.properties.name,v=d.properties.center.concat([r(80)]);for(let S=0;S<((g=h(c.value))==null?void 0:g.length);S++){const C=h(c.value)[S];if(u.indexOf(C.name)!==-1){const k=C.deviceNum;s.value.push({name:u,deviceNum:k,value:v});break}}}),a.value=!0},n=f=>{var d;(d=h(f))!=null&&d.length&&l()};e.isScale>1&&l(),R(()=>c,f=>{n(f)},{deep:!0});const p=()=>{},m=b(()=>({title:{left:"left",textStyle:{color:"#fff"}},tooltip:{show:!0,trigger:"item",formatter:function(f){var u;var d='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#0090ff"></span>';return`${d}${f.name}</br>${f.marker}设备数量：${((u=f==null?void 0:f.data)==null?void 0:u.deviceNum)||"--"}`},extraCssText:"z-index:3"},geo:{type:"map",zoom:1.2,map:"china",roam:!1,itemStyle:{normal:{areaColor:"#142957",borderColor:"#0692a4"},emphasis:{areaColor:"red"}}},series:[{tooltip:{trigger:"item",textStyle:{fontSize:r(14*e.isScale)}},type:"map",map:"china",zoom:1.2,z:100,itemStyle:{areaColor:"#142957",borderWidth:1*e.isScale,borderColor:"#086b77"},emphasis:{label:{show:!1},itemStyle:{areaColor:"#0b64ad"}},select:{disabled:!0},data:s.value},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,color:"#fff",position:"bottom",formatter:"{b}",textStyle:{fontSize:r(14*e.isScale)}}},itemStyle:{normal:{color:"#3ed4ff"}},data:s.value,symbolSize:function(f){return f[2]/10*e.isScale}}]}));return(f,d)=>a.value?(x(),E(Y,{key:0,option:m.value,autoplay:!0,type:"map",onMapEmit:p},null,8,["option"])):I("",!0)}}),Wo={class:"item"},Bo={class:"title-content text-hidden"},Yo={class:"item__time"},qo=$({__name:"Notice",props:{isScale:L.number.def(1)},setup(t){const e=t,a=[bt,St],s=M("remandList",[]),o=P({delay:2e3,disableOnInteraction:!1,autoplay:!0}),r=b(()=>e.isScale>1?8:3),c=_(),l=_([]),n=p=>{l.value=[],ie(()=>{l.value=h(p)})};return e.isScale>1&&n(s),R(()=>s,p=>{n(p)},{deep:!0}),(p,m)=>(x(),w("div",{class:B(["notie-center left",{"is-big-chart":e.isScale>1}])},[l.value.length?(x(),E(h(Ct),{key:0,class:"swiper-container mt-40px",modules:a,loop:!0,autoplay:o,speed:1e3,direction:"vertical",slidesPerView:r.value,centeredSlides:!0,ref_key:"mySwiper",ref:c},{default:O(()=>[(x(!0),w(ye,null,be(l.value,f=>(x(),E(h(wt),{key:f,class:"swiper-slide"},{default:O(()=>[i("div",Wo,[i("span",Bo,T(f.data),1),i("span",Yo,T(f.time),1)])]),_:2},1024))),128))]),_:1},8,["autoplay","slidesPerView"])):I("",!0)],2))}});const Ie=N(qo,[["__scopeId","data-v-bb4917c9"]]),Go={class:"current-chart-content"},Jo=["title"],Ko={class:"current-chart-content__container"},Qo=["src"],Zo=$({__name:"CurrentChart",emits:["close"],setup(t,{expose:e,emit:a}){const s=_(""),o=_(!1),r=_(""),c=b(()=>r.value==="ChartFour"?ze:r.value==="ChartThree"?Fe:r.value==="DeviceCategory"?Le:r.value==="CompanyDevice"?Ae:r.value==="AreaMarket"?Me:r.value==="ChinaChart"?Ee:r.value==="CountStatistic"?Oe:r.value==="Notice"?Ie:r.value==="OrderCarousel"?Ne:null);F("showTitle",!1);const l=({title:p,compsName:m})=>{console.log("当前组件",p,m),s.value=p,r.value=m,o.value=!0},n=()=>{a("close")};return e({init:l}),(p,m)=>(x(),w("div",Go,[i("div",{title:s.value,class:"custom-border11"},[i("div",Ko,[(x(),E(Ze(c.value),{isScale:2}))])],8,Jo),i("div",{class:"close",onClick:n},[i("img",{src:h(eo),class:"img_btn"},null,8,Qo)])]))}});const Xo=N(Zo,[["__scopeId","data-v-75000649"]]),ea={systemTitle:"设备共享平台",copyrightCompany:"xxx公司",webPort:9999},ta={class:"header-container"},oa={class:"header-lf"},aa={class:"line"},sa={class:"header-center"},na={class:"title"},ra={class:"header-rt"},la={class:"screen-header__right"},ia={class:"screen-header__date"},ca={class:"screen-header__week ml-10"},ua={class:"screen-header__time ml-10"},da={class:"line"},pa={key:0,class:"icon iconfont ds-icon_fullscreen_shrink size"},_a={key:1,class:"icon iconfont ds-fullscreen__ size"},ma=$({__name:"index",setup(t){const{useDateTime:e}=j,{toggle:a,isFullscreen:s}=$t(),{currentTime:o,currentDate:r,currentWeek:c,Timer:l,getDateTimeFormat:n,getCurrentDateTime:p}=e(),{systemTitle:m}=ea;le(()=>{f()}),te(()=>{je([l.value])});const f=()=>{uo("refreshTime",n(new Date)),d(),l.value=setInterval(()=>{d()},1e3)},d=()=>{const{hours:v,minutes:g}=p();if(g%30===0&&v==3){const S=po("refreshTime");n(new Date)!=S&&location.reload()}},u=()=>{a()};return(v,g)=>(x(),w("div",ta,[i("div",oa,[i("div",aa,[y(h(me),{reverse:!0})])]),i("div",sa,[i("div",na,T(h(m)),1)]),i("div",ra,[i("div",la,[i("span",ia,T(h(r)),1),i("span",ca,T(h(c)),1),i("span",ua,T(h(o)),1)]),i("div",da,[y(h(me),{reverse:!0,style:{transform:"rotateY(180deg)"}})]),i("div",{class:"full-screen-btn",onClick:u},[h(s)?(x(),w("span",pa)):(x(),w("span",_a))])])]))}});const fa=N(ma,[["__scopeId","data-v-02724bca"]]),ha={class:"global-loading"},va={class:"global-loading__content"},ga=$({__name:"index",setup(t){return(e,a)=>(x(),w("div",ha,[i("div",va,[y(h(Be),{style:{width:"150px",height:"150px"}},{default:O(()=>[Xe("正在初始化...")]),_:1})])]))}});const xa=N(ga,[["__scopeId","data-v-c808d022"]]),H={ChartFour:"过去半年订单完成率",OrderCarousel:"各公司完成订单统计",ChartThree:"项目统计图",DeviceCategory:"设备类型统计图",CompanyDevice:"公司设备/品牌/类型数量统计",AreaMarket:"区域中心统计",ChinaChart:"设备分布统计",Notice:"需求订单统计"},ya={class:"left-content"},ba={class:"left-content__item"},Sa={class:"left-content__item"},Ca={class:"left-content__item"},wa=$({__name:"LeftContent",emits:["curComps"],setup(t,{emit:e}){const a=(s,o)=>{e("curComps",{compsName:s,title:o})};return(s,o)=>(x(),w("div",ya,[i("div",ba,[y(ze,{onClick:o[0]||(o[0]=r=>a("ChartFour",h(H).ChartFour))})]),i("div",Sa,[y(Ne,{onClick:o[1]||(o[1]=r=>a("OrderCarousel",h(H).OrderCarousel))})]),i("div",Ca,[y(Fe,{onClick:o[2]||(o[2]=r=>a("ChartThree",h(H).ChartThree))})])]))}});const $a=N(wa,[["__scopeId","data-v-bb675d40"]]),Da={class:"center-content"},ka={class:"center-content__top"},Ta={class:"center-content__center"},za={class:"center-content__bottom",style:{fontsize:"30px"}},Fa=$({__name:"CenterContent",emits:["curComps"],setup(t,{emit:e}){const a=(s,o)=>{console.log("chartClicked",s,o),e("curComps",{compsName:s,title:o})};return(s,o)=>(x(),w("div",Da,[i("div",ka,[y(Oe)]),i("div",Ta,[y(Ee,{onClick:o[0]||(o[0]=r=>a("ChinaChart",h(H).ChinaChart))})]),i("div",za,[y(Ie,{onClick:o[1]||(o[1]=r=>a("Notice",h(H).Notice))})])]))}});const La=N(Fa,[["__scopeId","data-v-392307b2"]]),Ma={class:"right-content"},Na={class:"right-content__item"},Aa={class:"right-content__item"},ja={class:"right-content__item"},Oa=$({__name:"RightContent",emits:["curComps"],setup(t,{emit:e}){const a=(s,o)=>{console.log("chartClicked",s,o),e("curComps",{compsName:s,title:o})};return(s,o)=>(x(),w("div",Ma,[i("div",Na,[y(Le,{onClick:o[0]||(o[0]=r=>a("DeviceCategory",h(H).DeviceCategory))})]),i("div",Aa,[y(Ae,{onClick:o[1]||(o[1]=r=>a("CompanyDevice",h(H).CompanyDevice))})]),i("div",ja,[y(Me,{onClick:o[2]||(o[2]=r=>a("AreaMarket",h(H).AreaMarket))})])]))}});const Ea=N(Oa,[["__scopeId","data-v-3ef8bde2"]]),Re=_("/"),{base_url:Ia}=ce,Ra=Ia.test;R(()=>we.currentRoute.value,t=>{Re.value=t==null?void 0:t.path});const de=Dt.create({baseURL:Ra,timeout:ce.request_timeout});de.interceptors.request.use(t=>{if(t.method==="post"&&t.headers["Content-Type"]==="application/x-www-form-urlencoded"&&(t.data=kt.stringify(t.data)),t.headers.Token="C78FE78D5E9F0B3A8E4A1727012A48AC",t.method==="get"&&t.params){let e=t.url;e+="?";const a=Object.keys(t.params);for(const s of a)t.params[s]!==void 0&&t.params[s]!==null&&(e+=`${s}=${encodeURIComponent(t.params[s])}&`);e=e.substring(0,e.length-1),t.params={},t.url=e}return t},t=>{console.log(t),Promise.reject(t)});de.interceptors.response.use(async t=>{if(t.data.status==="SUCCEED")return t.data;if(t.data.errorCode==="100")Re.value!=="/"&&we.push("/");else return t.config.url==="/china_geo.json"?t.data:(console.log("拦截器返回错误：",t),Promise.reject((t==null?void 0:t.data)||"response-error"))},t=>(console.log("err-----"+t),console.log(t.errorMessage||t.message),Promise.reject(t)));const{default_headers:Ua}=ce,X=t=>{const{url:e,method:a,params:s,data:o,headersType:r,responseType:c}=t;return de({url:e,method:a,params:s,data:o,responseType:c,headers:{"Content-Type":r||Ua}})},pe={get:t=>X({method:"get",...t}),post:t=>X({method:"post",...t}),delete:t=>X({method:"delete",...t}),put:t=>X({method:"put",...t})},Pa=()=>pe.get({url:"/mock/api/orderKanbanApi"}),Ha=()=>pe.get({url:"/mock/api/deviceKanbanApi"}),Va=()=>pe.get({url:"/mock/api/remandOrderApi"}),Wa={class:"digital-screen-container"},Ba={key:0,class:"cur-comps-container"},Ya={class:"header"},qa={class:"section"},Ga={class:"aside-lf"},Ja={class:"container"},Ka={class:"center"},Qa={class:"aside-rt"},Za={class:"container"},Xa=$({__name:"Index",setup(t){const e=_(""),a=_(),{useScreen:s,useCommon:o}=j,{setScreenMode:r}=o(),c=_(!0),l=_({}),n=_({}),p=_([]),m=_(),f=b(()=>l.value.regions),d=b(()=>l.value.addNewOrder),u=b(()=>l.value.totalAmount),v=b(()=>l.value.completions),g=b(()=>l.value.unitUseOrder),S=b(()=>l.value.projectInfoList),C=b(()=>n.value.deviceLocationAndNumList),k=b(()=>n.value.typeNameAndNums),q=b(()=>n.value.unitDeviceInfo),G=b(()=>n.value.supermarketVos),ae=b(()=>p.value);F("orderComplete",v),F("orderCarousel",g),F("projectList",S),F("orderCount",{regions:f,totalAmount:u,addNewOrder:d}),F("deviceCategories",k),F("deviceCompany",q),F("deviceMapCount",C),F("remandList",ae),F("supermarket",G);const Ue=async()=>{const A=await Pa();l.value=A.data,c.value=!1},Pe=async()=>{const A=await Ha();n.value=A.data},_e=async()=>{const A=await Va();p.value=A.data};Ue(),Pe(),_e(),m.value=setInterval(()=>{_e()},1e3*60*1);const He=()=>{z.width=document.body.clientWidth,z.height=document.body.clientHeight;const U=z.height/V.height,A=z.width/V.width,J=z.width/z.height;console.log("screen-params",{"screen.width":z.width,"screen.height":z.height,"design.width":V.width,"design.height":V.height,swhr:J}),J>1&&(z.width>1200?J>=21/9?J>V.ratio?W.value=z.height<Q.height?.56:U*1.2:W.value=z.width<Q.width?.6:A*1.2:J>V.ratio?W.value=z.height<Q.height?.56:U:W.value=z.width<Q.width?.6:A:W.value=1),document.documentElement.style.fontSize=W.value*100+"px"},{design:V,screen:z,minScreen:Q,contrastRatio:W}=s(He),Z=_(!1),se=({compsName:U,title:A})=>{console.log("curCompsEmits"),Z.value=!0,e.value=A,ie(()=>{a.value.init({compsName:U,title:A})})},Ve=()=>{Z.value=!1};return r("AdptMultiDevice"),te(()=>{clearInterval(m.value)}),(U,A)=>(x(),w("div",Wa,[i("div",{class:B(["cur-big-comps",{"is-show":Z.value}])},[y(h(Ye),{title:e.value,class:"custome-orderbox11",style:{width:"100vw",height:"100vh"}},null,8,["title"]),Z.value?(x(),w("div",Ba,[y(Xo,{ref_key:"currentChartRef",ref:a,onClose:Ve},null,512)])):I("",!0)],2),i("header",Ya,[y(fa)]),i("section",qa,[i("div",Ga,[y(h(fe),null,{default:O(()=>[i("div",Ja,[y($a,{onCurComps:se})])]),_:1})]),i("div",Ka,[y(La,{onCurComps:se})]),i("div",Qa,[y(h(fe),null,{default:O(()=>[i("div",Za,[y(Ea,{onCurComps:se})])]),_:1})])]),c.value?(x(),E(xa,{key:0})):I("",!0)]))}});const Ns=N(Xa,[["__scopeId","data-v-8cdfdd5e"]]);export{Ns as default};
