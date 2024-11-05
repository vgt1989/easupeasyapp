import{r as u,a as re,c as ae}from"./vendor-BzEuPqlG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();var B={exports:{}},O={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne=u,oe=Symbol.for("react.element"),ie=Symbol.for("react.fragment"),le=Object.prototype.hasOwnProperty,ce=ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,de={key:!0,ref:!0,__self:!0,__source:!0};function G(e,s,r){var o,a={},n=null,i=null;r!==void 0&&(n=""+r),s.key!==void 0&&(n=""+s.key),s.ref!==void 0&&(i=s.ref);for(o in s)le.call(s,o)&&!de.hasOwnProperty(o)&&(a[o]=s[o]);if(e&&e.defaultProps)for(o in s=e.defaultProps,s)a[o]===void 0&&(a[o]=s[o]);return{$$typeof:oe,type:e,key:n,ref:i,props:a,_owner:ce.current}}O.Fragment=ie;O.jsx=G;O.jsxs=G;B.exports=O;var t=B.exports,J,D=re;J=D.createRoot,D.hydrateRoot;let ue={data:""},me=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ue,he=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,xe=/\/\*[^]*?\*\/|  +/g,q=/\n+/g,w=(e,s)=>{let r="",o="",a="";for(let n in e){let i=e[n];n[0]=="@"?n[1]=="i"?r=n+" "+i+";":o+=n[1]=="f"?w(i,n):n+"{"+w(i,n[1]=="k"?"":s)+"}":typeof i=="object"?o+=w(i,s?s.replace(/([^,])+/g,l=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):n):i!=null&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=w.p?w.p(n,i):n+":"+i+";")}return r+(s&&a?s+"{"+a+"}":a)+o},b={},H=e=>{if(typeof e=="object"){let s="";for(let r in e)s+=r+H(e[r]);return s}return e},pe=(e,s,r,o,a)=>{let n=H(e),i=b[n]||(b[n]=(c=>{let d=0,m=11;for(;d<c.length;)m=101*m+c.charCodeAt(d++)>>>0;return"go"+m})(n));if(!b[i]){let c=n!==e?e:(d=>{let m,h,x=[{}];for(;m=he.exec(d.replace(xe,""));)m[4]?x.shift():m[3]?(h=m[3].replace(q," ").trim(),x.unshift(x[0][h]=x[0][h]||{})):x[0][m[1]]=m[2].replace(q," ").trim();return x[0]})(e);b[i]=w(a?{["@keyframes "+i]:c}:c,r?"":"."+i)}let l=r&&b.g?b.g:null;return r&&(b.g=b[i]),((c,d,m,h)=>{h?d.data=d.data.replace(h,c):d.data.indexOf(c)===-1&&(d.data=m?c+d.data:d.data+c)})(b[i],s,o,l),i},fe=(e,s,r)=>e.reduce((o,a,n)=>{let i=s[n];if(i&&i.call){let l=i(r),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;i=c?"."+c:l&&typeof l=="object"?l.props?"":w(l,""):l===!1?"":l}return o+a+(i??"")},"");function _(e){let s=this||{},r=e.call?e(s.p):e;return pe(r.unshift?r.raw?fe(r,[].slice.call(arguments,1),s.p):r.reduce((o,a)=>Object.assign(o,a&&a.call?a(s.p):a),{}):r,me(s.target),s.g,s.o,s.k)}let X,P,$;_.bind({g:1});let j=_.bind({k:1});function ge(e,s,r,o){w.p=s,X=e,P=r,$=o}function N(e,s){let r=this||{};return function(){let o=arguments;function a(n,i){let l=Object.assign({},n),c=l.className||a.className;r.p=Object.assign({theme:P&&P()},l),r.o=/ *go\d+/.test(c),l.className=_.apply(r,o)+(c?" "+c:"");let d=e;return e[0]&&(d=l.as||e,delete l.as),$&&d[0]&&$(l),X(d,l)}return a}}var ye=e=>typeof e=="function",M=(e,s)=>ye(e)?e(s):e,be=(()=>{let e=0;return()=>(++e).toString()})(),Z=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let s=matchMedia("(prefers-reduced-motion: reduce)");e=!s||s.matches}return e}})(),ve=20,S=new Map,je=1e3,R=e=>{if(S.has(e))return;let s=setTimeout(()=>{S.delete(e),k({type:4,toastId:e})},je);S.set(e,s)},we=e=>{let s=S.get(e);s&&clearTimeout(s)},L=(e,s)=>{switch(s.type){case 0:return{...e,toasts:[s.toast,...e.toasts].slice(0,ve)};case 1:return s.toast.id&&we(s.toast.id),{...e,toasts:e.toasts.map(n=>n.id===s.toast.id?{...n,...s.toast}:n)};case 2:let{toast:r}=s;return e.toasts.find(n=>n.id===r.id)?L(e,{type:1,toast:r}):L(e,{type:0,toast:r});case 3:let{toastId:o}=s;return o?R(o):e.toasts.forEach(n=>{R(n.id)}),{...e,toasts:e.toasts.map(n=>n.id===o||o===void 0?{...n,visible:!1}:n)};case 4:return s.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==s.toastId)};case 5:return{...e,pausedAt:s.time};case 6:let a=s.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(n=>({...n,pauseDuration:n.pauseDuration+a}))}}},I=[],T={toasts:[],pausedAt:void 0},k=e=>{T=L(T,e),I.forEach(s=>{s(T)})},Ne={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ke=(e={})=>{let[s,r]=u.useState(T);u.useEffect(()=>(I.push(r),()=>{let a=I.indexOf(r);a>-1&&I.splice(a,1)}),[s]);let o=s.toasts.map(a=>{var n,i;return{...e,...e[a.type],...a,duration:a.duration||((n=e[a.type])==null?void 0:n.duration)||(e==null?void 0:e.duration)||Ne[a.type],style:{...e.style,...(i=e[a.type])==null?void 0:i.style,...a.style}}});return{...s,toasts:o}},Ce=(e,s="blank",r)=>({createdAt:Date.now(),visible:!0,type:s,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||be()}),C=e=>(s,r)=>{let o=Ce(s,e,r);return k({type:2,toast:o}),o.id},f=(e,s)=>C("blank")(e,s);f.error=C("error");f.success=C("success");f.loading=C("loading");f.custom=C("custom");f.dismiss=e=>{k({type:3,toastId:e})};f.remove=e=>k({type:4,toastId:e});f.promise=(e,s,r)=>{let o=f.loading(s.loading,{...r,...r==null?void 0:r.loading});return e.then(a=>(f.success(M(s.success,a),{id:o,...r,...r==null?void 0:r.success}),a)).catch(a=>{f.error(M(s.error,a),{id:o,...r,...r==null?void 0:r.error})}),e};var Ee=(e,s)=>{k({type:1,toast:{id:e,height:s}})},Se=()=>{k({type:5,time:Date.now()})},Ie=e=>{let{toasts:s,pausedAt:r}=ke(e);u.useEffect(()=>{if(r)return;let n=Date.now(),i=s.map(l=>{if(l.duration===1/0)return;let c=(l.duration||0)+l.pauseDuration-(n-l.createdAt);if(c<0){l.visible&&f.dismiss(l.id);return}return setTimeout(()=>f.dismiss(l.id),c)});return()=>{i.forEach(l=>l&&clearTimeout(l))}},[s,r]);let o=u.useCallback(()=>{r&&k({type:6,time:Date.now()})},[r]),a=u.useCallback((n,i)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=i||{},m=s.filter(y=>(y.position||d)===(n.position||d)&&y.height),h=m.findIndex(y=>y.id===n.id),x=m.filter((y,A)=>A<h&&y.visible).length;return m.filter(y=>y.visible).slice(...l?[x+1]:[0,x]).reduce((y,A)=>y+(A.height||0)+c,0)},[s]);return{toasts:s,handlers:{updateHeight:Ee,startPause:Se,endPause:o,calculateOffset:a}}},Te=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Me=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Oe=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_e=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Te} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Me} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Oe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ae=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Pe=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ae} 1s linear infinite;
`,$e=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Le=j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ze=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$e} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Le} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,De=N("div")`
  position: absolute;
`,qe=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Re=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Fe=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Re} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ue=({toast:e})=>{let{icon:s,type:r,iconTheme:o}=e;return s!==void 0?typeof s=="string"?u.createElement(Fe,null,s):s:r==="blank"?null:u.createElement(qe,null,u.createElement(Pe,{...o}),r!=="loading"&&u.createElement(De,null,r==="error"?u.createElement(_e,{...o}):u.createElement(ze,{...o})))},Be=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Je="0%{opacity:0;} 100%{opacity:1;}",He="0%{opacity:1;} 100%{opacity:0;}",Xe=N("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ze=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ye=(e,s)=>{let r=e.includes("top")?1:-1,[o,a]=Z()?[Je,He]:[Be(r),Ge(r)];return{animation:s?`${j(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},We=u.memo(({toast:e,position:s,style:r,children:o})=>{let a=e.height?Ye(e.position||s||"top-center",e.visible):{opacity:0},n=u.createElement(Ue,{toast:e}),i=u.createElement(Ze,{...e.ariaProps},M(e.message,e));return u.createElement(Xe,{className:e.className,style:{...a,...r,...e.style}},typeof o=="function"?o({icon:n,message:i}):u.createElement(u.Fragment,null,n,i))});ge(u.createElement);var Qe=({id:e,className:s,style:r,onHeightUpdate:o,children:a})=>{let n=u.useCallback(i=>{if(i){let l=()=>{let c=i.getBoundingClientRect().height;o(e,c)};l(),new MutationObserver(l).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return u.createElement("div",{ref:n,className:s,style:r},a)},Ve=(e,s)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${s*(r?1:-1)}px)`,...o,...a}},Ke=_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,et=({reverseOrder:e,position:s="top-center",toastOptions:r,gutter:o,children:a,containerStyle:n,containerClassName:i})=>{let{toasts:l,handlers:c}=Ie(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...n},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(d=>{let m=d.position||s,h=c.calculateOffset(d,{reverseOrder:e,gutter:o,defaultPosition:s}),x=Ve(m,h);return u.createElement(Qe,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Ke:"",style:x},d.type==="custom"?M(d.message,d):a?a(d):u.createElement(We,{toast:d,position:m}))}))},v=f;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),p=(e,s)=>{const r=u.forwardRef(({color:o="currentColor",size:a=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:l="",children:c,...d},m)=>u.createElement("svg",{ref:m,...tt,width:a,height:a,stroke:o,strokeWidth:i?Number(n)*24/Number(a):n,className:["lucide",`lucide-${st(e)}`,l].join(" "),...d},[...s.map(([h,x])=>u.createElement(h,x)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=p("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=p("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=p("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=p("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=p("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=p("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=p("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=p("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=p("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=p("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=p("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=p("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=p("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=p("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function dt({tour:e,guides:s,onAssignGuide:r}){var a;const o=s.filter(n=>n.availability);return t.jsxs("div",{className:"flex items-center space-x-4",children:[t.jsx("div",{className:"flex-grow",children:t.jsxs("select",{className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",value:((a=e.guide)==null?void 0:a.id)||"",onChange:n=>r(e.id,n.target.value),children:[t.jsx("option",{value:"",children:"Select a guide..."}),o.map(n=>t.jsx("option",{value:n.id,children:n.name},n.id))]})}),e.guide&&t.jsxs("div",{className:"flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full",children:[t.jsx(V,{className:"w-4 h-4 mr-1"}),t.jsx("span",{className:"text-sm font-medium",children:"Assigned"})]})]})}function ut({tour:e,onClick:s,isAdmin:r,guides:o,onAssignGuide:a}){const n=e.clients.filter(i=>i.checkInStatus==="checked-in").length;return t.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100",children:[t.jsxs("div",{onClick:()=>s(e),className:"cursor-pointer",children:[t.jsxs("div",{className:"flex justify-between items-start mb-4",children:[t.jsx("h3",{className:"text-xl font-bold text-gray-800",children:e.name}),t.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium",children:new Date(e.date).toLocaleDateString()})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"flex items-center text-gray-600",children:[t.jsx(Y,{className:"w-5 h-5 mr-2"}),t.jsxs("span",{children:["Bus #",e.busNumber]})]}),t.jsxs("div",{className:"flex items-center text-gray-600",children:[t.jsx(z,{className:"w-5 h-5 mr-2"}),t.jsxs("span",{children:[e.startTime," - ",e.endTime]})]}),t.jsxs("div",{className:"flex items-center text-gray-600",children:[t.jsx(W,{className:"w-5 h-5 mr-2"}),t.jsx("span",{children:e.meetingPoint})]}),t.jsxs("div",{className:"flex items-center text-gray-600",children:[t.jsx(ct,{className:"w-5 h-5 mr-2"}),t.jsxs("span",{children:[n,"/",e.clients.length," Checked In"]})]}),e.guide&&!r&&t.jsxs("div",{className:"flex items-center text-gray-600",children:[t.jsx(V,{className:"w-5 h-5 mr-2"}),t.jsxs("span",{children:["Guide: ",e.guide.name]})]})]}),t.jsx("div",{className:"mt-4 pt-4 border-t border-gray-100",children:t.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:t.jsx("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:`${n/e.clients.length*100}%`}})})})]}),r&&o&&a&&t.jsx("div",{className:"mt-4 pt-4 border-t border-gray-100",children:t.jsx(dt,{tour:e,guides:o,onAssignGuide:a})})]})}function mt({clients:e,isAdmin:s,onStatusChange:r}){return t.jsx("div",{className:"bg-white rounded-xl shadow-lg overflow-hidden",children:t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[t.jsx("thead",{className:"bg-gray-50",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),s&&t.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Contact"}),t.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),t.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),t.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:e.map(o=>t.jsxs("tr",{className:"hover:bg-gray-50",children:[t.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.jsx("div",{className:"text-sm font-medium text-gray-900",children:o.name})}),s&&t.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[t.jsx(Q,{className:"w-4 h-4 mr-2"}),o.phone]})}),t.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:t.jsx("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${o.checkInStatus==="checked-in"?"bg-green-100 text-green-800":o.checkInStatus==="no-show"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:o.checkInStatus})}),t.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:t.jsxs("div",{className:"flex space-x-2",children:[t.jsx("button",{onClick:()=>r(o.id,"checked-in"),className:"text-green-600 hover:text-green-900",children:t.jsx(at,{className:"w-5 h-5"})}),t.jsx("button",{onClick:()=>r(o.id,"no-show"),className:"text-red-600 hover:text-red-900",children:t.jsx(K,{className:"w-5 h-5"})})]})})]},o.id))})]})})})}const ht="https://bshmxyrtkdfzgfzvqrng.supabase.co",xt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaG14eXJ0a2RmemdmenZxcm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NzM3MzUsImV4cCI6MjA0NjA0OTczNX0.ORs6c58cXFQ9r9KtfeZqwBOvWYWNNncQuiMi7t8x8VQ",g=ae(ht,xt,{auth:{persistSession:!0,autoRefreshToken:!0}}),ee=u.createContext(void 0);function pt({children:e}){const[s,r]=u.useState(null),[o,a]=u.useState(!0);u.useEffect(()=>{g.auth.getSession().then(({data:{session:c}})=>{r((c==null?void 0:c.user)??null),a(!1)});const{data:{subscription:l}}=g.auth.onAuthStateChange((c,d)=>{r((d==null?void 0:d.user)??null),a(!1)});return()=>l.unsubscribe()},[]);const n=async(l,c)=>{const{error:d}=await g.auth.signInWithPassword({email:l,password:c});if(d)throw d},i=async()=>{const{error:l}=await g.auth.signOut();if(l)throw l};return t.jsx(ee.Provider,{value:{user:s,loading:o,signIn:n,signOut:i},children:e})}function te(){const e=u.useContext(ee);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e}function ft(){const[e,s]=u.useState(""),[r,o]=u.useState(""),[a,n]=u.useState(""),{signIn:i}=te(),l=async c=>{c.preventDefault();try{await i(e,r)}catch{n("Invalid email or password")}};return t.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-md w-full space-y-8",children:[t.jsx("div",{children:t.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"})}),t.jsxs("form",{className:"mt-8 space-y-6",onSubmit:l,children:[a&&t.jsx("div",{className:"rounded-md bg-red-50 p-4",children:t.jsx("div",{className:"text-sm text-red-700",children:a})}),t.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[t.jsx("div",{children:t.jsx("input",{type:"email",required:!0,value:e,onChange:c=>s(c.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Email address"})}),t.jsx("div",{children:t.jsx("input",{type:"password",required:!0,value:r,onChange:c=>o(c.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Password"})})]}),t.jsx("div",{children:t.jsxs("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[t.jsx("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:t.jsx(ot,{className:"h-5 w-5 text-blue-500 group-hover:text-blue-400"})}),"Sign in"]})})]})]})})}function gt({onClose:e}){const[s,r]=u.useState({name:"",date:"",busNumber:"",startTime:"",endTime:"",meetingPoint:""}),o=async a=>{a.preventDefault();try{const{error:n}=await g.from("tours").insert([{name:s.name,date:s.date,bus_number:s.busNumber,start_time:s.startTime,end_time:s.endTime,meeting_point:s.meetingPoint}]);if(n)throw n;v.success("Tour created successfully"),e()}catch(n){v.error("Error creating tour"),console.error("Error:",n)}};return t.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[t.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Create New Tour"}),t.jsxs("form",{onSubmit:o,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Tour Name"}),t.jsx("input",{type:"text",required:!0,value:s.name,onChange:a=>r({...s,name:a.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:[t.jsx(rt,{className:"inline-block w-4 h-4 mr-1"}),"Date"]}),t.jsx("input",{type:"date",required:!0,value:s.date,onChange:a=>r({...s,date:a.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),t.jsxs("div",{children:[t.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:[t.jsx(Y,{className:"inline-block w-4 h-4 mr-1"}),"Bus Number"]}),t.jsx("input",{type:"text",required:!0,value:s.busNumber,onChange:a=>r({...s,busNumber:a.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:[t.jsx(z,{className:"inline-block w-4 h-4 mr-1"}),"Start Time"]}),t.jsx("input",{type:"time",required:!0,value:s.startTime,onChange:a=>r({...s,startTime:a.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),t.jsxs("div",{children:[t.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:[t.jsx(z,{className:"inline-block w-4 h-4 mr-1"}),"End Time"]}),t.jsx("input",{type:"time",required:!0,value:s.endTime,onChange:a=>r({...s,endTime:a.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]})]}),t.jsxs("div",{children:[t.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:[t.jsx(W,{className:"inline-block w-4 h-4 mr-1"}),"Meeting Point"]}),t.jsx("input",{type:"text",required:!0,value:s.meetingPoint,onChange:a=>r({...s,meetingPoint:a.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),t.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[t.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:"Cancel"}),t.jsx("button",{type:"submit",className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Create Tour"})]})]})]})}function yt({tourId:e,onClose:s}){const[r,o]=u.useState({name:"",phone:""}),a=async n=>{n.preventDefault();try{const{error:i}=await g.from("tour_clients").insert([{tour_id:e,name:r.name,phone:r.phone,check_in_status:"pending"}]);if(i)throw i;v.success("Client added successfully"),s()}catch(i){v.error("Error adding client"),console.error("Error:",i)}};return t.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[t.jsx("h2",{className:"text-xl font-bold mb-4",children:"Add New Client"}),t.jsxs("form",{onSubmit:a,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:[t.jsx(lt,{className:"inline-block w-4 h-4 mr-1"}),"Client Name"]}),t.jsx("input",{type:"text",required:!0,value:r.name,onChange:n=>o({...r,name:n.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),t.jsxs("div",{children:[t.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:[t.jsx(Q,{className:"inline-block w-4 h-4 mr-1"}),"Phone Number"]}),t.jsx("input",{type:"tel",required:!0,value:r.phone,onChange:n=>o({...r,phone:n.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),t.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[t.jsx("button",{type:"button",onClick:s,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:"Cancel"}),t.jsx("button",{type:"submit",className:"px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Add Client"})]})]})]})}function U({isOpen:e,onClose:s,children:r}){return e?t.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:t.jsxs("div",{className:"flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",children:[t.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:t.jsx("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})}),t.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),t.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[t.jsx("div",{className:"absolute top-0 right-0 pt-4 pr-4",children:t.jsx("button",{onClick:s,className:"bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:t.jsx(K,{className:"h-6 w-6"})})}),r]})]})}):null}function bt(){const[e,s]=u.useState([]),[r,o]=u.useState(!0);u.useEffect(()=>{a();const l=g.channel("tours").on("postgres_changes",{event:"*",schema:"public",table:"tours"},c=>{console.log("Change received!",c),a()}).subscribe();return()=>{g.removeChannel(l)}},[]);const a=async()=>{try{const{data:l,error:c}=await g.from("tours").select(`
          *,
          guide:tour_guides(*),
          clients:tour_clients(*)
        `).order("date",{ascending:!0});if(c)throw c;s(l||[])}catch(l){v.error("Error loading tours"),console.error("Error:",l)}finally{o(!1)}};return{tours:e,loading:r,updateClientStatus:async(l,c)=>{try{const{error:d}=await g.from("tour_clients").update({check_in_status:c}).eq("id",l);if(d)throw d;v.success("Status updated successfully")}catch(d){v.error("Error updating status"),console.error("Error:",d)}},assignGuide:async(l,c)=>{try{const{error:d}=await g.from("tours").update({guide_id:c}).eq("id",l);if(d)throw d;v.success("Guide assigned successfully")}catch(d){v.error("Error assigning guide"),console.error("Error:",d)}}}}function vt(){const{user:e,signOut:s}=te(),{tours:r,loading:o,updateClientStatus:a,assignGuide:n}=bt(),[i,l]=u.useState(null),[c,d]=u.useState(!1),[m,h]=u.useState(!1);return e?o?t.jsx("div",{className:"min-h-screen flex items-center justify-center",children:t.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"})}):t.jsxs("div",{className:"min-h-screen bg-gray-50",children:[t.jsx("header",{className:"bg-white shadow-sm",children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"flex justify-between items-center py-4",children:[t.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Tour Guide Dashboard"}),t.jsxs("div",{className:"flex items-center space-x-4",children:[t.jsxs("div",{className:"flex items-center text-gray-700",children:[t.jsx(nt,{className:"w-5 h-5 mr-2"}),t.jsx("span",{children:e.email})]}),t.jsx("button",{onClick:()=>s(),className:"text-gray-600 hover:text-gray-900",children:t.jsx(it,{className:"w-5 h-5"})})]})]})})}),t.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:i?t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("h2",{className:"text-xl font-bold text-gray-900",children:[i.name," - Client List"]}),t.jsxs("div",{className:"flex space-x-4",children:[t.jsxs("button",{onClick:()=>h(!0),className:"flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:[t.jsx(F,{className:"w-5 h-5 mr-2"}),"Add Client"]}),t.jsx("button",{onClick:()=>l(null),className:"px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors",children:"Back to Tours"})]})]}),t.jsx(mt,{clients:i.clients,isAdmin:!0,onStatusChange:a})]}):t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Your Tours"}),t.jsxs("button",{onClick:()=>d(!0),className:"flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:[t.jsx(F,{className:"w-5 h-5 mr-2"}),"Create Tour"]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(x=>t.jsx(ut,{tour:x,onClick:l,isAdmin:!0,onAssignGuide:n},x.id))})]})}),t.jsx(U,{isOpen:c,onClose:()=>d(!1),children:t.jsx(gt,{onClose:()=>d(!1)})}),t.jsx(U,{isOpen:m,onClose:()=>h(!1),children:i&&t.jsx(yt,{tourId:i.id,onClose:()=>h(!1)})})]}):t.jsx(ft,{})}const se=document.getElementById("root");if(!se)throw new Error("Root element not found");J(se).render(t.jsx(u.StrictMode,{children:t.jsxs(pt,{children:[t.jsx(vt,{}),t.jsx(et,{position:"top-right"})]})}));
//# sourceMappingURL=index-C9VS_M8K.js.map
