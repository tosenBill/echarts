import{i as Y}from"./vue-demi-71ba0ef2.js";import{j as F,r as V,k as H,l as Z,w as G,b as $,n as k,p as q,t as A,q as T,g as tt,f as et,s as st,v as nt,h as ot}from"./@vue-c25b4755.js";/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let B;const E=t=>B=t,D=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var C;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(C||(C={}));function bt(){const t=F(!0),o=t.run(()=>V({}));let s=[],e=[];const r=H({install(u){E(r),r._a=u,u.provide(D,r),u.config.globalProperties.$pinia=r,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!Y?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const J=()=>{};function O(t,o,s,e=J){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&tt()&&et(r),r}function p(t,...o){t.slice().forEach(s=>{s(...o)})}const ct=t=>t();function I(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];R(r)&&R(e)&&t.hasOwnProperty(s)&&!k(e)&&!q(e)?t[s]=I(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!R(t)||!t.hasOwnProperty(rt)}const{assign:v}=Object;function ft(t){return!!(k(t)&&t.effect)}function at(t,o,s,e){const{state:r,actions:u,getters:a}=o,f=s.state.value[t];let P;function b(){f||(s.state.value[t]=r?r():{});const y=nt(s.state.value[t]);return v(y,u,Object.keys(a||{}).reduce((d,m)=>(d[m]=H(ot(()=>{E(s);const _=s._s.get(t);return a[m].call(_,_)})),d),{}))}return P=N(t,b,o,s,e,!0),P}function N(t,o,s={},e,r,u){let a;const f=v({actions:{}},s),P={deep:!0};let b,y,d=[],m=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let L;function W(c){let n;b=y=!1,typeof c=="function"?(c(e.state.value[t]),n={type:C.patchFunction,storeId:t,events:_}):(I(e.state.value[t],c),n={type:C.patchObject,payload:c,storeId:t,events:_});const h=L=Symbol();st().then(()=>{L===h&&(b=!0)}),y=!0,p(d,n,e.state.value[t])}const z=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{v(S,h)})}:J;function K(){a.stop(),d=[],m=[],e._s.delete(t)}function M(c,n){return function(){E(e);const h=Array.from(arguments),S=[],w=[];function U(i){S.push(i)}function X(i){w.push(i)}p(m,{args:h,name:c,store:l,after:U,onError:X});let x;try{x=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw p(w,i),i}return x instanceof Promise?x.then(i=>(p(S,i),i)).catch(i=>(p(w,i),Promise.reject(i))):(p(S,x),x)}}const Q={_p:e,$id:t,$onAction:O.bind(null,m),$patch:W,$reset:z,$subscribe(c,n={}){const h=O(d,c,n.detached,()=>S()),S=a.run(()=>G(()=>e.state.value[t],w=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:C.direct,events:_},w)},v({},P,n)));return h},$dispose:K},l=$(Q);e._s.set(t,l);const g=(e._a&&e._a.runWithContext||ct)(()=>e._e.run(()=>(a=F()).run(o)));for(const c in g){const n=g[c];if(k(n)&&!ft(n)||q(n))u||(j&&ut(n)&&(k(n)?n.value=j[c]:I(n,j[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=M(c,n);g[c]=h,f.actions[c]=n}}return v(l,g),v(A(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{W(n=>{v(n,c)})}}),e._p.forEach(c=>{v(l,a.run(()=>c({store:l,app:e._a,pinia:e,options:f})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function vt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function a(f,P){const b=T();return f=f||(b?Z(D,null):null),f&&E(f),f=B,f._s.has(e)||(u?N(e,o,r,f):at(e,r,f)),f._s.get(e)}return a.$id=e,a}export{bt as c,vt as d};
