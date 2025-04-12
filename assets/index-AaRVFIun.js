(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ya(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Tt={},Zn=[],xe=()=>{},Gd=()=>!1,Si=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),va=e=>e.startsWith("onUpdate:"),ie=Object.assign,Ea=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Wd=Object.prototype.hasOwnProperty,_t=(e,t)=>Wd.call(e,t),et=Array.isArray,tr=e=>ps(e)==="[object Map]",Uc=e=>ps(e)==="[object Set]",Jl=e=>ps(e)==="[object Date]",it=e=>typeof e=="function",kt=e=>typeof e=="string",Ae=e=>typeof e=="symbol",At=e=>e!==null&&typeof e=="object",Bc=e=>(At(e)||it(e))&&it(e.then)&&it(e.catch),$c=Object.prototype.toString,ps=e=>$c.call(e),Qd=e=>ps(e).slice(8,-1),jc=e=>ps(e)==="[object Object]",Ta=e=>kt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kr=ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ri=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xd=/-(\w)/g,cn=Ri(e=>e.replace(Xd,(t,n)=>n?n.toUpperCase():"")),Jd=/\B([A-Z])/g,Un=Ri(e=>e.replace(Jd,"-$1").toLowerCase()),qc=Ri(e=>e.charAt(0).toUpperCase()+e.slice(1)),ho=Ri(e=>e?`on${qc(e)}`:""),sn=(e,t)=>!Object.is(e,t),Xs=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Hc=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Yd=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Yl;const Ci=()=>Yl||(Yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gr(e){if(et(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=kt(r)?np(r):gr(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(kt(e)||At(e))return e}const Zd=/;(?![^(]*\))/g,tp=/:([^]+)/,ep=/\/\*[^]*?\*\//g;function np(e){const t={};return e.replace(ep,"").split(Zd).forEach(n=>{if(n){const r=n.split(tp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ia(e){let t="";if(kt(e))t=e;else if(et(e))for(let n=0;n<e.length;n++){const r=Ia(e[n]);r&&(t+=r+" ")}else if(At(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const rp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sp=ya(rp);function zc(e){return!!e||e===""}function ip(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=oi(e[r],t[r]);return n}function oi(e,t){if(e===t)return!0;let n=Jl(e),r=Jl(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Ae(e),r=Ae(t),n||r)return e===t;if(n=et(e),r=et(t),n||r)return n&&r?ip(e,t):!1;if(n=At(e),r=At(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!oi(e[a],t[a]))return!1}}return String(e)===String(t)}const Kc=e=>!!(e&&e.__v_isRef===!0),Ur=e=>kt(e)?e:e==null?"":et(e)||At(e)&&(e.toString===$c||!it(e.toString))?Kc(e)?Ur(e.value):JSON.stringify(e,Gc,2):String(e),Gc=(e,t)=>Kc(t)?Gc(e,t.value):tr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[fo(r,i)+" =>"]=s,n),{})}:Uc(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fo(n))}:Ae(t)?fo(t):At(t)&&!et(t)&&!jc(t)?String(t):t,fo=(e,t="")=>{var n;return Ae(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Wc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qc(e){return new Wc(e)}function Xc(){return ue}function op(e,t=!1){ue&&ue.cleanups.push(e)}let It;const po=new WeakSet;class Jc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,po.has(this)&&(po.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zl(this),th(this);const t=It,n=we;It=this,we=!0;try{return this.fn()}finally{eh(this),It=t,we=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ba(t);this.deps=this.depsTail=void 0,Zl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?po.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ko(this)&&this.run()}get dirty(){return ko(this)}}let Yc=0,Gr,Wr;function Zc(e,t=!1){if(e.flags|=8,t){e.next=Wr,Wr=e;return}e.next=Gr,Gr=e}function wa(){Yc++}function Aa(){if(--Yc>0)return;if(Wr){let t=Wr;for(Wr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Gr;){let t=Gr;for(Gr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function th(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function eh(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ba(r),ap(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ko(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(nh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function nh(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===rs))return;e.globalVersion=rs;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!ko(e)){e.flags&=-3;return}const n=It,r=we;It=e,we=!0;try{th(e);const s=e.fn(e._value);(t.version===0||sn(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{It=n,we=r,eh(e),e.flags&=-3}}function ba(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ba(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ap(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let we=!0;const rh=[];function yn(){rh.push(we),we=!1}function vn(){const e=rh.pop();we=e===void 0?!0:e}function Zl(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=It;It=void 0;try{t()}finally{It=n}}}let rs=0;class lp{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!It||!we||It===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==It)n=this.activeLink=new lp(It,this),It.deps?(n.prevDep=It.depsTail,It.depsTail.nextDep=n,It.depsTail=n):It.deps=It.depsTail=n,sh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=It.depsTail,n.nextDep=void 0,It.depsTail.nextDep=n,It.depsTail=n,It.deps===n&&(It.deps=r)}return n}trigger(t){this.version++,rs++,this.notify(t)}notify(t){wa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Aa()}}}function sh(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)sh(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ai=new WeakMap,Nn=Symbol(""),Lo=Symbol(""),ss=Symbol("");function ee(e,t,n){if(we&&It){let r=ai.get(e);r||ai.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Sa),s.map=r,s.key=n),s.track()}}function qe(e,t,n,r,s,i){const a=ai.get(e);if(!a){rs++;return}const l=c=>{c&&c.trigger()};if(wa(),t==="clear")a.forEach(l);else{const c=et(e),f=c&&Ta(n);if(c&&n==="length"){const d=Number(r);a.forEach((m,A)=>{(A==="length"||A===ss||!Ae(A)&&A>=d)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(ss)),t){case"add":c?f&&l(a.get("length")):(l(a.get(Nn)),tr(e)&&l(a.get(Lo)));break;case"delete":c||(l(a.get(Nn)),tr(e)&&l(a.get(Lo)));break;case"set":tr(e)&&l(a.get(Nn));break}}Aa()}function up(e,t){const n=ai.get(e);return n&&n.get(t)}function Kn(e){const t=mt(e);return t===e?t:(ee(t,"iterate",ss),Ee(e)?t:t.map(ne))}function Pi(e){return ee(e=mt(e),"iterate",ss),e}const cp={__proto__:null,[Symbol.iterator](){return go(this,Symbol.iterator,ne)},concat(...e){return Kn(this).concat(...e.map(t=>et(t)?Kn(t):t))},entries(){return go(this,"entries",e=>(e[1]=ne(e[1]),e))},every(e,t){return $e(this,"every",e,t,void 0,arguments)},filter(e,t){return $e(this,"filter",e,t,n=>n.map(ne),arguments)},find(e,t){return $e(this,"find",e,t,ne,arguments)},findIndex(e,t){return $e(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $e(this,"findLast",e,t,ne,arguments)},findLastIndex(e,t){return $e(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $e(this,"forEach",e,t,void 0,arguments)},includes(...e){return mo(this,"includes",e)},indexOf(...e){return mo(this,"indexOf",e)},join(e){return Kn(this).join(e)},lastIndexOf(...e){return mo(this,"lastIndexOf",e)},map(e,t){return $e(this,"map",e,t,void 0,arguments)},pop(){return Lr(this,"pop")},push(...e){return Lr(this,"push",e)},reduce(e,...t){return tu(this,"reduce",e,t)},reduceRight(e,...t){return tu(this,"reduceRight",e,t)},shift(){return Lr(this,"shift")},some(e,t){return $e(this,"some",e,t,void 0,arguments)},splice(...e){return Lr(this,"splice",e)},toReversed(){return Kn(this).toReversed()},toSorted(e){return Kn(this).toSorted(e)},toSpliced(...e){return Kn(this).toSpliced(...e)},unshift(...e){return Lr(this,"unshift",e)},values(){return go(this,"values",ne)}};function go(e,t,n){const r=Pi(e),s=r[t]();return r!==e&&!Ee(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const hp=Array.prototype;function $e(e,t,n,r,s,i){const a=Pi(e),l=a!==e&&!Ee(e),c=a[t];if(c!==hp[t]){const m=c.apply(e,i);return l?ne(m):m}let f=n;a!==e&&(l?f=function(m,A){return n.call(this,ne(m),A,e)}:n.length>2&&(f=function(m,A){return n.call(this,m,A,e)}));const d=c.call(a,f,r);return l&&s?s(d):d}function tu(e,t,n,r){const s=Pi(e);let i=n;return s!==e&&(Ee(e)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,e)}):i=function(a,l,c){return n.call(this,a,ne(l),c,e)}),s[t](i,...r)}function mo(e,t,n){const r=mt(e);ee(r,"iterate",ss);const s=r[t](...n);return(s===-1||s===!1)&&Pa(n[0])?(n[0]=mt(n[0]),r[t](...n)):s}function Lr(e,t,n=[]){yn(),wa();const r=mt(e)[t].apply(e,n);return Aa(),vn(),r}const fp=ya("__proto__,__v_isRef,__isVue"),ih=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ae));function dp(e){Ae(e)||(e=String(e));const t=mt(this);return ee(t,"has",e),t.hasOwnProperty(e)}class oh{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?wp:ch:i?uh:lh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=et(t);if(!s){let c;if(a&&(c=cp[n]))return c;if(n==="hasOwnProperty")return dp}const l=Reflect.get(t,n,xt(t)?t:r);return(Ae(n)?ih.has(n):fp(n))||(s||ee(t,"get",n),i)?l:xt(l)?a&&Ta(n)?l:l.value:At(l)?s?hh(l):Vi(l):l}}class ah extends oh{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=Ln(i);if(!Ee(r)&&!Ln(r)&&(i=mt(i),r=mt(r)),!et(t)&&xt(i)&&!xt(r))return c?!1:(i.value=r,!0)}const a=et(t)&&Ta(n)?Number(n)<t.length:_t(t,n),l=Reflect.set(t,n,r,xt(t)?t:s);return t===mt(s)&&(a?sn(r,i)&&qe(t,"set",n,r):qe(t,"add",n,r)),l}deleteProperty(t,n){const r=_t(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&qe(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Ae(n)||!ih.has(n))&&ee(t,"has",n),r}ownKeys(t){return ee(t,"iterate",et(t)?"length":Nn),Reflect.ownKeys(t)}}class pp extends oh{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const gp=new ah,mp=new pp,_p=new ah(!0);const Fo=e=>e,Us=e=>Reflect.getPrototypeOf(e);function yp(e,t,n){return function(...r){const s=this.__v_raw,i=mt(s),a=tr(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,f=s[e](...r),d=n?Fo:t?Uo:ne;return!t&&ee(i,"iterate",c?Lo:Nn),{next(){const{value:m,done:A}=f.next();return A?{value:m,done:A}:{value:l?[d(m[0]),d(m[1])]:d(m),done:A}},[Symbol.iterator](){return this}}}}function Bs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function vp(e,t){const n={get(s){const i=this.__v_raw,a=mt(i),l=mt(s);e||(sn(s,l)&&ee(a,"get",s),ee(a,"get",l));const{has:c}=Us(a),f=t?Fo:e?Uo:ne;if(c.call(a,s))return f(i.get(s));if(c.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ee(mt(s),"iterate",Nn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=mt(i),l=mt(s);return e||(sn(s,l)&&ee(a,"has",s),ee(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=mt(l),f=t?Fo:e?Uo:ne;return!e&&ee(c,"iterate",Nn),l.forEach((d,m)=>s.call(i,f(d),f(m),a))}};return ie(n,e?{add:Bs("add"),set:Bs("set"),delete:Bs("delete"),clear:Bs("clear")}:{add(s){!t&&!Ee(s)&&!Ln(s)&&(s=mt(s));const i=mt(this);return Us(i).has.call(i,s)||(i.add(s),qe(i,"add",s,s)),this},set(s,i){!t&&!Ee(i)&&!Ln(i)&&(i=mt(i));const a=mt(this),{has:l,get:c}=Us(a);let f=l.call(a,s);f||(s=mt(s),f=l.call(a,s));const d=c.call(a,s);return a.set(s,i),f?sn(i,d)&&qe(a,"set",s,i):qe(a,"add",s,i),this},delete(s){const i=mt(this),{has:a,get:l}=Us(i);let c=a.call(i,s);c||(s=mt(s),c=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return c&&qe(i,"delete",s,void 0),f},clear(){const s=mt(this),i=s.size!==0,a=s.clear();return i&&qe(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=yp(s,e,t)}),n}function Ra(e,t){const n=vp(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(_t(n,s)&&s in r?n:r,s,i)}const Ep={get:Ra(!1,!1)},Tp={get:Ra(!1,!0)},Ip={get:Ra(!0,!1)};const lh=new WeakMap,uh=new WeakMap,ch=new WeakMap,wp=new WeakMap;function Ap(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bp(e){return e.__v_skip||!Object.isExtensible(e)?0:Ap(Qd(e))}function Vi(e){return Ln(e)?e:Ca(e,!1,gp,Ep,lh)}function Sp(e){return Ca(e,!1,_p,Tp,uh)}function hh(e){return Ca(e,!0,mp,Ip,ch)}function Ca(e,t,n,r,s){if(!At(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=bp(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return s.set(e,l),l}function on(e){return Ln(e)?on(e.__v_raw):!!(e&&e.__v_isReactive)}function Ln(e){return!!(e&&e.__v_isReadonly)}function Ee(e){return!!(e&&e.__v_isShallow)}function Pa(e){return e?!!e.__v_raw:!1}function mt(e){const t=e&&e.__v_raw;return t?mt(t):e}function Va(e){return!_t(e,"__v_skip")&&Object.isExtensible(e)&&Hc(e,"__v_skip",!0),e}const ne=e=>At(e)?Vi(e):e,Uo=e=>At(e)?hh(e):e;function xt(e){return e?e.__v_isRef===!0:!1}function fh(e){return Rp(e,!1)}function Rp(e,t){return xt(e)?e:new Cp(e,t)}class Cp{constructor(t,n){this.dep=new Sa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:mt(t),this._value=n?t:ne(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ee(t)||Ln(t);t=r?t:mt(t),sn(t,n)&&(this._rawValue=t,this._value=r?t:ne(t),this.dep.trigger())}}function Ct(e){return xt(e)?e.value:e}const Pp={get:(e,t,n)=>t==="__v_raw"?e:Ct(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return xt(s)&&!xt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function dh(e){return on(e)?e:new Proxy(e,Pp)}function Vp(e){const t=et(e)?new Array(e.length):{};for(const n in e)t[n]=xp(e,n);return t}class Dp{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return up(mt(this._object),this._key)}}function xp(e,t,n){const r=e[t];return xt(r)?r:new Dp(e,t,n)}class Np{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Sa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&It!==this)return Zc(this,!0),!0}get value(){const t=this.dep.track();return nh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Op(e,t,n=!1){let r,s;return it(e)?r=e:(r=e.get,s=e.set),new Np(r,s,n)}const $s={},li=new WeakMap;let Pn;function Mp(e,t=!1,n=Pn){if(n){let r=li.get(n);r||li.set(n,r=[]),r.push(e)}}function kp(e,t,n=Tt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,f=z=>s?z:Ee(z)||s===!1||s===0?He(z,1):He(z);let d,m,A,R,O=!1,U=!1;if(xt(e)?(m=()=>e.value,O=Ee(e)):on(e)?(m=()=>f(e),O=!0):et(e)?(U=!0,O=e.some(z=>on(z)||Ee(z)),m=()=>e.map(z=>{if(xt(z))return z.value;if(on(z))return f(z);if(it(z))return c?c(z,2):z()})):it(e)?t?m=c?()=>c(e,2):e:m=()=>{if(A){yn();try{A()}finally{vn()}}const z=Pn;Pn=d;try{return c?c(e,3,[R]):e(R)}finally{Pn=z}}:m=xe,t&&s){const z=m,at=s===!0?1/0:s;m=()=>He(z(),at)}const $=Xc(),G=()=>{d.stop(),$&&$.active&&Ea($.effects,d)};if(i&&t){const z=t;t=(...at)=>{z(...at),G()}}let Y=U?new Array(e.length).fill($s):$s;const J=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(t){const at=d.run();if(s||O||(U?at.some((yt,I)=>sn(yt,Y[I])):sn(at,Y))){A&&A();const yt=Pn;Pn=d;try{const I=[at,Y===$s?void 0:U&&Y[0]===$s?[]:Y,R];c?c(t,3,I):t(...I),Y=at}finally{Pn=yt}}}else d.run()};return l&&l(J),d=new Jc(m),d.scheduler=a?()=>a(J,!1):J,R=z=>Mp(z,!1,d),A=d.onStop=()=>{const z=li.get(d);if(z){if(c)c(z,4);else for(const at of z)at();li.delete(d)}},t?r?J(!0):Y=d.run():a?a(J.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function He(e,t=1/0,n){if(t<=0||!At(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,xt(e))He(e.value,t,n);else if(et(e))for(let r=0;r<e.length;r++)He(e[r],t,n);else if(Uc(e)||tr(e))e.forEach(r=>{He(r,t,n)});else if(jc(e)){for(const r in e)He(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&He(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(e,t,n,r){try{return r?e(...r):e()}catch(s){Di(s,t,n)}}function Oe(e,t,n,r){if(it(e)){const s=gs(e,t,n,r);return s&&Bc(s)&&s.catch(i=>{Di(i,t,n)}),s}if(et(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Oe(e[i],t,n,r));return s}}function Di(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Tt;if(t){let l=t.parent;const c=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](e,c,f)===!1)return}l=l.parent}if(i){yn(),gs(i,null,10,[e,c,f]),vn();return}}Lp(e,n,s,r,a)}function Lp(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const ce=[];let Ce=-1;const er=[];let Ze=null,Wn=0;const ph=Promise.resolve();let ui=null;function gh(e){const t=ui||ph;return e?t.then(this?e.bind(this):e):t}function Fp(e){let t=Ce+1,n=ce.length;for(;t<n;){const r=t+n>>>1,s=ce[r],i=is(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Da(e){if(!(e.flags&1)){const t=is(e),n=ce[ce.length-1];!n||!(e.flags&2)&&t>=is(n)?ce.push(e):ce.splice(Fp(t),0,e),e.flags|=1,mh()}}function mh(){ui||(ui=ph.then(yh))}function Up(e){et(e)?er.push(...e):Ze&&e.id===-1?Ze.splice(Wn+1,0,e):e.flags&1||(er.push(e),e.flags|=1),mh()}function eu(e,t,n=Ce+1){for(;n<ce.length;n++){const r=ce[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ce.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function _h(e){if(er.length){const t=[...new Set(er)].sort((n,r)=>is(n)-is(r));if(er.length=0,Ze){Ze.push(...t);return}for(Ze=t,Wn=0;Wn<Ze.length;Wn++){const n=Ze[Wn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ze=null,Wn=0}}const is=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yh(e){try{for(Ce=0;Ce<ce.length;Ce++){const t=ce[Ce];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),gs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ce<ce.length;Ce++){const t=ce[Ce];t&&(t.flags&=-2)}Ce=-1,ce.length=0,_h(),ui=null,(ce.length||er.length)&&yh()}}let Gt=null,vh=null;function ci(e){const t=Gt;return Gt=e,vh=e&&e.type.__scopeId||null,t}function Br(e,t=Gt,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&cu(-1);const i=ci(t);let a;try{a=e(...s)}finally{ci(i),r._d&&cu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function js(e,t){if(Gt===null)return e;const n=Mi(Gt),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,c=Tt]=t[s];i&&(it(i)&&(i={mounted:i,updated:i}),i.deep&&He(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Rn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(yn(),Oe(c,n,8,[e.el,l,e,t]),vn())}}const Bp=Symbol("_vte"),$p=e=>e.__isTeleport;function xa(e,t){e.shapeFlag&6&&e.component?(e.transition=t,xa(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ms(e,t){return it(e)?ie({name:e.name},t,{setup:e}):e}function Eh(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function hi(e,t,n,r,s=!1){if(et(e)){e.forEach((O,U)=>hi(O,t&&(et(t)?t[U]:t),n,r,s));return}if(nr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&hi(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Mi(r.component):r.el,a=s?null:i,{i:l,r:c}=e,f=t&&t.r,d=l.refs===Tt?l.refs={}:l.refs,m=l.setupState,A=mt(m),R=m===Tt?()=>!1:O=>_t(A,O);if(f!=null&&f!==c&&(kt(f)?(d[f]=null,R(f)&&(m[f]=null)):xt(f)&&(f.value=null)),it(c))gs(c,l,12,[a,d]);else{const O=kt(c),U=xt(c);if(O||U){const $=()=>{if(e.f){const G=O?R(c)?m[c]:d[c]:c.value;s?et(G)&&Ea(G,i):et(G)?G.includes(i)||G.push(i):O?(d[c]=[i],R(c)&&(m[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else O?(d[c]=a,R(c)&&(m[c]=a)):U&&(c.value=a,e.k&&(d[e.k]=a))};a?($.id=-1,ge($,n)):$()}}}Ci().requestIdleCallback;Ci().cancelIdleCallback;const nr=e=>!!e.type.__asyncLoader,Th=e=>e.type.__isKeepAlive;function jp(e,t){Ih(e,"a",t)}function qp(e,t){Ih(e,"da",t)}function Ih(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(xi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Th(s.parent.vnode)&&Hp(r,t,n,s),s=s.parent}}function Hp(e,t,n,r){const s=xi(t,e,r,!0);wh(()=>{Ea(r[t],s)},n)}function xi(e,t,n=se,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{yn();const l=_s(n),c=Oe(t,n,e,a);return l(),vn(),c});return r?s.unshift(i):s.push(i),i}}const Ge=e=>(t,n=se)=>{(!as||e==="sp")&&xi(e,(...r)=>t(...r),n)},zp=Ge("bm"),Kp=Ge("m"),Gp=Ge("bu"),Wp=Ge("u"),Qp=Ge("bum"),wh=Ge("um"),Xp=Ge("sp"),Jp=Ge("rtg"),Yp=Ge("rtc");function Zp(e,t=se){xi("ec",e,t)}const tg=Symbol.for("v-ndc");function Dn(e,t,n,r){let s;const i=n,a=et(e);if(a||kt(e)){const l=a&&on(e);let c=!1;l&&(c=!Ee(e),e=Pi(e)),s=new Array(e.length);for(let f=0,d=e.length;f<d;f++)s[f]=t(c?ne(e[f]):e[f],f,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(At(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,f=l.length;c<f;c++){const d=l[c];s[c]=t(e[d],d,c,i)}}else s=[];return s}function Js(e,t,n={},r,s){if(Gt.ce||Gt.parent&&nr(Gt.parent)&&Gt.parent.ce)return t!=="default"&&(n.name=t),Et(),en(Mt,null,[_e("slot",n,r)],64);let i=e[t];i&&i._c&&(i._d=!1),Et();const a=i&&Ah(i(n)),l=n.key||a&&a.key,c=en(Mt,{key:(l&&!Ae(l)?l:`_${t}`)+""},a||[],a&&e._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Ah(e){return e.some(t=>Oa(t)?!(t.type===hn||t.type===Mt&&!Ah(t.children)):!0)?e:null}const Bo=e=>e?zh(e)?Mi(e):Bo(e.parent):null,Qr=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bo(e.parent),$root:e=>Bo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Sh(e),$forceUpdate:e=>e.f||(e.f=()=>{Da(e.update)}),$nextTick:e=>e.n||(e.n=gh.bind(e.proxy)),$watch:e=>wg.bind(e)}),_o=(e,t)=>e!==Tt&&!e.__isScriptSetup&&_t(e,t),eg={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let f;if(t[0]!=="$"){const R=a[t];if(R!==void 0)switch(R){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(_o(r,t))return a[t]=1,r[t];if(s!==Tt&&_t(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&_t(f,t))return a[t]=3,i[t];if(n!==Tt&&_t(n,t))return a[t]=4,n[t];$o&&(a[t]=0)}}const d=Qr[t];let m,A;if(d)return t==="$attrs"&&ee(e.attrs,"get",""),d(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==Tt&&_t(n,t))return a[t]=4,n[t];if(A=c.config.globalProperties,_t(A,t))return A[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return _o(s,t)?(s[t]=n,!0):r!==Tt&&_t(r,t)?(r[t]=n,!0):_t(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==Tt&&_t(e,a)||_o(t,a)||(l=i[0])&&_t(l,a)||_t(r,a)||_t(Qr,a)||_t(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_t(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function nu(e){return et(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let $o=!0;function ng(e){const t=Sh(e),n=e.proxy,r=e.ctx;$o=!1,t.beforeCreate&&ru(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:f,created:d,beforeMount:m,mounted:A,beforeUpdate:R,updated:O,activated:U,deactivated:$,beforeDestroy:G,beforeUnmount:Y,destroyed:J,unmounted:z,render:at,renderTracked:yt,renderTriggered:I,errorCaptured:g,serverPrefetch:_,expose:E,inheritAttrs:w,components:b,directives:y,filters:oe}=t;if(f&&rg(f,r,null),a)for(const rt in a){const pt=a[rt];it(pt)&&(r[rt]=pt.bind(n))}if(s){const rt=s.call(n,n);At(rt)&&(e.data=Vi(rt))}if($o=!0,i)for(const rt in i){const pt=i[rt],Te=it(pt)?pt.bind(n,n):it(pt.get)?pt.get.bind(n,n):xe,En=!it(pt)&&it(pt.set)?pt.set.bind(n):xe,Le=Gh({get:Te,set:En});Object.defineProperty(r,rt,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Lt=>Le.value=Lt})}if(l)for(const rt in l)bh(l[rt],r,n,rt);if(c){const rt=it(c)?c.call(n):c;Reflect.ownKeys(rt).forEach(pt=>{ug(pt,rt[pt])})}d&&ru(d,e,"c");function bt(rt,pt){et(pt)?pt.forEach(Te=>rt(Te.bind(n))):pt&&rt(pt.bind(n))}if(bt(zp,m),bt(Kp,A),bt(Gp,R),bt(Wp,O),bt(jp,U),bt(qp,$),bt(Zp,g),bt(Yp,yt),bt(Jp,I),bt(Qp,Y),bt(wh,z),bt(Xp,_),et(E))if(E.length){const rt=e.exposed||(e.exposed={});E.forEach(pt=>{Object.defineProperty(rt,pt,{get:()=>n[pt],set:Te=>n[pt]=Te})})}else e.exposed||(e.exposed={});at&&e.render===xe&&(e.render=at),w!=null&&(e.inheritAttrs=w),b&&(e.components=b),y&&(e.directives=y),_&&Eh(e)}function rg(e,t,n=xe){et(e)&&(e=jo(e));for(const r in e){const s=e[r];let i;At(s)?"default"in s?i=Xr(s.from||r,s.default,!0):i=Xr(s.from||r):i=Xr(s),xt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function ru(e,t,n){Oe(et(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function bh(e,t,n,r){let s=r.includes(".")?Bh(n,r):()=>n[r];if(kt(e)){const i=t[e];it(i)&&Ys(s,i)}else if(it(e))Ys(s,e.bind(n));else if(At(e))if(et(e))e.forEach(i=>bh(i,t,n,r));else{const i=it(e.handler)?e.handler.bind(n):t[e.handler];it(i)&&Ys(s,i,e)}}function Sh(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(f=>fi(c,f,a,!0)),fi(c,t,a)),At(t)&&i.set(t,c),c}function fi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&fi(e,i,n,!0),s&&s.forEach(a=>fi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=sg[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const sg={data:su,props:iu,emits:iu,methods:$r,computed:$r,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:$r,directives:$r,watch:og,provide:su,inject:ig};function su(e,t){return t?e?function(){return ie(it(e)?e.call(this,this):e,it(t)?t.call(this,this):t)}:t:e}function ig(e,t){return $r(jo(e),jo(t))}function jo(e){if(et(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function $r(e,t){return e?ie(Object.create(null),e,t):t}function iu(e,t){return e?et(e)&&et(t)?[...new Set([...e,...t])]:ie(Object.create(null),nu(e),nu(t??{})):t}function og(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function Rh(){return{app:null,config:{isNativeTag:Gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ag=0;function lg(e,t){return function(r,s=null){it(r)||(r=ie({},r)),s!=null&&!At(s)&&(s=null);const i=Rh(),a=new WeakSet,l=[];let c=!1;const f=i.app={_uid:ag++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qg,get config(){return i.config},set config(d){},use(d,...m){return a.has(d)||(d&&it(d.install)?(a.add(d),d.install(f,...m)):it(d)&&(a.add(d),d(f,...m))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,m){return m?(i.components[d]=m,f):i.components[d]},directive(d,m){return m?(i.directives[d]=m,f):i.directives[d]},mount(d,m,A){if(!c){const R=f._ceVNode||_e(r,s);return R.appContext=i,A===!0?A="svg":A===!1&&(A=void 0),e(R,d,A),c=!0,f._container=d,d.__vue_app__=f,Mi(R.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Oe(l,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,m){return i.provides[d]=m,f},runWithContext(d){const m=On;On=f;try{return d()}finally{On=m}}};return f}}let On=null;function ug(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function Xr(e,t,n=!1){const r=se||Gt;if(r||On){const s=On?On._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&it(t)?t.call(r&&r.proxy):t}}function cg(){return!!(se||Gt||On)}const Ch={},Ph=()=>Object.create(Ch),Vh=e=>Object.getPrototypeOf(e)===Ch;function hg(e,t,n,r=!1){const s={},i=Ph();e.propsDefaults=Object.create(null),Dh(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:Sp(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function fg(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=mt(s),[c]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let A=d[m];if(Ni(e.emitsOptions,A))continue;const R=t[A];if(c)if(_t(i,A))R!==i[A]&&(i[A]=R,f=!0);else{const O=cn(A);s[O]=qo(c,l,O,R,e,!1)}else R!==i[A]&&(i[A]=R,f=!0)}}}else{Dh(e,t,s,i)&&(f=!0);let d;for(const m in l)(!t||!_t(t,m)&&((d=Un(m))===m||!_t(t,d)))&&(c?n&&(n[m]!==void 0||n[d]!==void 0)&&(s[m]=qo(c,l,m,void 0,e,!0)):delete s[m]);if(i!==l)for(const m in i)(!t||!_t(t,m))&&(delete i[m],f=!0)}f&&qe(e.attrs,"set","")}function Dh(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(Kr(c))continue;const f=t[c];let d;s&&_t(s,d=cn(c))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:Ni(e.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,a=!0)}if(i){const c=mt(n),f=l||Tt;for(let d=0;d<i.length;d++){const m=i[d];n[m]=qo(s,c,m,f[m],e,!_t(f,m))}}return a}function qo(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=_t(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&it(c)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=_s(s);r=f[n]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Un(n))&&(r=!0))}return r}const dg=new WeakMap;function xh(e,t,n=!1){const r=n?dg:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!it(e)){const d=m=>{c=!0;const[A,R]=xh(m,t,!0);ie(a,A),R&&l.push(...R)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return At(e)&&r.set(e,Zn),Zn;if(et(i))for(let d=0;d<i.length;d++){const m=cn(i[d]);ou(m)&&(a[m]=Tt)}else if(i)for(const d in i){const m=cn(d);if(ou(m)){const A=i[d],R=a[m]=et(A)||it(A)?{type:A}:ie({},A),O=R.type;let U=!1,$=!0;if(et(O))for(let G=0;G<O.length;++G){const Y=O[G],J=it(Y)&&Y.name;if(J==="Boolean"){U=!0;break}else J==="String"&&($=!1)}else U=it(O)&&O.name==="Boolean";R[0]=U,R[1]=$,(U||_t(R,"default"))&&l.push(m)}}const f=[a,l];return At(e)&&r.set(e,f),f}function ou(e){return e[0]!=="$"&&!Kr(e)}const Nh=e=>e[0]==="_"||e==="$stable",Na=e=>et(e)?e.map(Ve):[Ve(e)],pg=(e,t,n)=>{if(t._n)return t;const r=Br((...s)=>Na(t(...s)),n);return r._c=!1,r},Oh=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Nh(s))continue;const i=e[s];if(it(i))t[s]=pg(s,i,r);else if(i!=null){const a=Na(i);t[s]=()=>a}}},Mh=(e,t)=>{const n=Na(t);e.slots.default=()=>n},kh=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},gg=(e,t,n)=>{const r=e.slots=Ph();if(e.vnode.shapeFlag&32){const s=t._;s?(kh(r,t,n),n&&Hc(r,"_",s,!0)):Oh(t,r)}else t&&Mh(e,t)},mg=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=Tt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:kh(s,t,n):(i=!t.$stable,Oh(t,s)),a=t}else t&&(Mh(e,t),a={default:1});if(i)for(const l in s)!Nh(l)&&a[l]==null&&delete s[l]},ge=Vg;function _g(e){return yg(e)}function yg(e,t){const n=Ci();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:f,setElementText:d,parentNode:m,nextSibling:A,setScopeId:R=xe,insertStaticContent:O}=e,U=(v,T,P,x=null,D=null,N=null,j=void 0,L=null,k=!!T.dynamicChildren)=>{if(v===T)return;v&&!Fr(v,T)&&(x=Fe(v),Lt(v,D,N,!0),v=null),T.patchFlag===-2&&(k=!1,T.dynamicChildren=null);const{type:M,ref:W,shapeFlag:q}=T;switch(M){case Oi:$(v,T,P,x);break;case hn:G(v,T,P,x);break;case vo:v==null&&Y(T,P,x,j);break;case Mt:b(v,T,P,x,D,N,j,L,k);break;default:q&1?at(v,T,P,x,D,N,j,L,k):q&6?y(v,T,P,x,D,N,j,L,k):(q&64||q&128)&&M.process(v,T,P,x,D,N,j,L,k,Se)}W!=null&&D&&hi(W,v&&v.ref,N,T||v,!T)},$=(v,T,P,x)=>{if(v==null)r(T.el=l(T.children),P,x);else{const D=T.el=v.el;T.children!==v.children&&f(D,T.children)}},G=(v,T,P,x)=>{v==null?r(T.el=c(T.children||""),P,x):T.el=v.el},Y=(v,T,P,x)=>{[v.el,v.anchor]=O(v.children,T,P,x,v.el,v.anchor)},J=({el:v,anchor:T},P,x)=>{let D;for(;v&&v!==T;)D=A(v),r(v,P,x),v=D;r(T,P,x)},z=({el:v,anchor:T})=>{let P;for(;v&&v!==T;)P=A(v),s(v),v=P;s(T)},at=(v,T,P,x,D,N,j,L,k)=>{T.type==="svg"?j="svg":T.type==="math"&&(j="mathml"),v==null?yt(T,P,x,D,N,j,L,k):_(v,T,D,N,j,L,k)},yt=(v,T,P,x,D,N,j,L)=>{let k,M;const{props:W,shapeFlag:q,transition:K,dirs:Z}=v;if(k=v.el=a(v.type,N,W&&W.is,W),q&8?d(k,v.children):q&16&&g(v.children,k,null,x,D,yo(v,N),j,L),Z&&Rn(v,null,x,"created"),I(k,v,v.scopeId,j,x),W){for(const st in W)st!=="value"&&!Kr(st)&&i(k,st,null,W[st],N,x);"value"in W&&i(k,"value",null,W.value,N),(M=W.onVnodeBeforeMount)&&Re(M,x,v)}Z&&Rn(v,null,x,"beforeMount");const Q=vg(D,K);Q&&K.beforeEnter(k),r(k,T,P),((M=W&&W.onVnodeMounted)||Q||Z)&&ge(()=>{M&&Re(M,x,v),Q&&K.enter(k),Z&&Rn(v,null,x,"mounted")},D)},I=(v,T,P,x,D)=>{if(P&&R(v,P),x)for(let N=0;N<x.length;N++)R(v,x[N]);if(D){let N=D.subTree;if(T===N||jh(N.type)&&(N.ssContent===T||N.ssFallback===T)){const j=D.vnode;I(v,j,j.scopeId,j.slotScopeIds,D.parent)}}},g=(v,T,P,x,D,N,j,L,k=0)=>{for(let M=k;M<v.length;M++){const W=v[M]=L?tn(v[M]):Ve(v[M]);U(null,W,T,P,x,D,N,j,L)}},_=(v,T,P,x,D,N,j)=>{const L=T.el=v.el;let{patchFlag:k,dynamicChildren:M,dirs:W}=T;k|=v.patchFlag&16;const q=v.props||Tt,K=T.props||Tt;let Z;if(P&&Cn(P,!1),(Z=K.onVnodeBeforeUpdate)&&Re(Z,P,T,v),W&&Rn(T,v,P,"beforeUpdate"),P&&Cn(P,!0),(q.innerHTML&&K.innerHTML==null||q.textContent&&K.textContent==null)&&d(L,""),M?E(v.dynamicChildren,M,L,P,x,yo(T,D),N):j||pt(v,T,L,null,P,x,yo(T,D),N,!1),k>0){if(k&16)w(L,q,K,P,D);else if(k&2&&q.class!==K.class&&i(L,"class",null,K.class,D),k&4&&i(L,"style",q.style,K.style,D),k&8){const Q=T.dynamicProps;for(let st=0;st<Q.length;st++){const ut=Q[st],Qt=q[ut],qt=K[ut];(qt!==Qt||ut==="value")&&i(L,ut,Qt,qt,D,P)}}k&1&&v.children!==T.children&&d(L,T.children)}else!j&&M==null&&w(L,q,K,P,D);((Z=K.onVnodeUpdated)||W)&&ge(()=>{Z&&Re(Z,P,T,v),W&&Rn(T,v,P,"updated")},x)},E=(v,T,P,x,D,N,j)=>{for(let L=0;L<T.length;L++){const k=v[L],M=T[L],W=k.el&&(k.type===Mt||!Fr(k,M)||k.shapeFlag&70)?m(k.el):P;U(k,M,W,null,x,D,N,j,!0)}},w=(v,T,P,x,D)=>{if(T!==P){if(T!==Tt)for(const N in T)!Kr(N)&&!(N in P)&&i(v,N,T[N],null,D,x);for(const N in P){if(Kr(N))continue;const j=P[N],L=T[N];j!==L&&N!=="value"&&i(v,N,L,j,D,x)}"value"in P&&i(v,"value",T.value,P.value,D)}},b=(v,T,P,x,D,N,j,L,k)=>{const M=T.el=v?v.el:l(""),W=T.anchor=v?v.anchor:l("");let{patchFlag:q,dynamicChildren:K,slotScopeIds:Z}=T;Z&&(L=L?L.concat(Z):Z),v==null?(r(M,P,x),r(W,P,x),g(T.children||[],P,W,D,N,j,L,k)):q>0&&q&64&&K&&v.dynamicChildren?(E(v.dynamicChildren,K,P,D,N,j,L),(T.key!=null||D&&T===D.subTree)&&Lh(v,T,!0)):pt(v,T,P,W,D,N,j,L,k)},y=(v,T,P,x,D,N,j,L,k)=>{T.slotScopeIds=L,v==null?T.shapeFlag&512?D.ctx.activate(T,P,x,j,k):oe(T,P,x,D,N,j,k):be(v,T,k)},oe=(v,T,P,x,D,N,j)=>{const L=v.component=Lg(v,x,D);if(Th(v)&&(L.ctx.renderer=Se),Fg(L,!1,j),L.asyncDep){if(D&&D.registerDep(L,bt,j),!v.el){const k=L.subTree=_e(hn);G(null,k,T,P)}}else bt(L,v,T,P,D,N,j)},be=(v,T,P)=>{const x=T.component=v.component;if(Cg(v,T,P))if(x.asyncDep&&!x.asyncResolved){rt(x,T,P);return}else x.next=T,x.update();else T.el=v.el,x.vnode=T},bt=(v,T,P,x,D,N,j)=>{const L=()=>{if(v.isMounted){let{next:q,bu:K,u:Z,parent:Q,vnode:st}=v;{const Xt=Fh(v);if(Xt){q&&(q.el=st.el,rt(v,q,j)),Xt.asyncDep.then(()=>{v.isUnmounted||L()});return}}let ut=q,Qt;Cn(v,!1),q?(q.el=st.el,rt(v,q,j)):q=st,K&&Xs(K),(Qt=q.props&&q.props.onVnodeBeforeUpdate)&&Re(Qt,Q,q,st),Cn(v,!0);const qt=lu(v),ye=v.subTree;v.subTree=qt,U(ye,qt,m(ye.el),Fe(ye),v,D,N),q.el=qt.el,ut===null&&Pg(v,qt.el),Z&&ge(Z,D),(Qt=q.props&&q.props.onVnodeUpdated)&&ge(()=>Re(Qt,Q,q,st),D)}else{let q;const{el:K,props:Z}=T,{bm:Q,m:st,parent:ut,root:Qt,type:qt}=v,ye=nr(T);Cn(v,!1),Q&&Xs(Q),!ye&&(q=Z&&Z.onVnodeBeforeMount)&&Re(q,ut,T),Cn(v,!0);{Qt.ce&&Qt.ce._injectChildStyle(qt);const Xt=v.subTree=lu(v);U(null,Xt,P,x,v,D,N),T.el=Xt.el}if(st&&ge(st,D),!ye&&(q=Z&&Z.onVnodeMounted)){const Xt=T;ge(()=>Re(q,ut,Xt),D)}(T.shapeFlag&256||ut&&nr(ut.vnode)&&ut.vnode.shapeFlag&256)&&v.a&&ge(v.a,D),v.isMounted=!0,T=P=x=null}};v.scope.on();const k=v.effect=new Jc(L);v.scope.off();const M=v.update=k.run.bind(k),W=v.job=k.runIfDirty.bind(k);W.i=v,W.id=v.uid,k.scheduler=()=>Da(W),Cn(v,!0),M()},rt=(v,T,P)=>{T.component=v;const x=v.vnode.props;v.vnode=T,v.next=null,fg(v,T.props,x,P),mg(v,T.children,P),yn(),eu(v),vn()},pt=(v,T,P,x,D,N,j,L,k=!1)=>{const M=v&&v.children,W=v?v.shapeFlag:0,q=T.children,{patchFlag:K,shapeFlag:Z}=T;if(K>0){if(K&128){En(M,q,P,x,D,N,j,L,k);return}else if(K&256){Te(M,q,P,x,D,N,j,L,k);return}}Z&8?(W&16&&In(M,D,N),q!==M&&d(P,q)):W&16?Z&16?En(M,q,P,x,D,N,j,L,k):In(M,D,N,!0):(W&8&&d(P,""),Z&16&&g(q,P,x,D,N,j,L,k))},Te=(v,T,P,x,D,N,j,L,k)=>{v=v||Zn,T=T||Zn;const M=v.length,W=T.length,q=Math.min(M,W);let K;for(K=0;K<q;K++){const Z=T[K]=k?tn(T[K]):Ve(T[K]);U(v[K],Z,P,null,D,N,j,L,k)}M>W?In(v,D,N,!0,!1,q):g(T,P,x,D,N,j,L,k,q)},En=(v,T,P,x,D,N,j,L,k)=>{let M=0;const W=T.length;let q=v.length-1,K=W-1;for(;M<=q&&M<=K;){const Z=v[M],Q=T[M]=k?tn(T[M]):Ve(T[M]);if(Fr(Z,Q))U(Z,Q,P,null,D,N,j,L,k);else break;M++}for(;M<=q&&M<=K;){const Z=v[q],Q=T[K]=k?tn(T[K]):Ve(T[K]);if(Fr(Z,Q))U(Z,Q,P,null,D,N,j,L,k);else break;q--,K--}if(M>q){if(M<=K){const Z=K+1,Q=Z<W?T[Z].el:x;for(;M<=K;)U(null,T[M]=k?tn(T[M]):Ve(T[M]),P,Q,D,N,j,L,k),M++}}else if(M>K)for(;M<=q;)Lt(v[M],D,N,!0),M++;else{const Z=M,Q=M,st=new Map;for(M=Q;M<=K;M++){const Ht=T[M]=k?tn(T[M]):Ve(T[M]);Ht.key!=null&&st.set(Ht.key,M)}let ut,Qt=0;const qt=K-Q+1;let ye=!1,Xt=0;const We=new Array(qt);for(M=0;M<qt;M++)We[M]=0;for(M=Z;M<=q;M++){const Ht=v[M];if(Qt>=qt){Lt(Ht,D,N,!0);continue}let ve;if(Ht.key!=null)ve=st.get(Ht.key);else for(ut=Q;ut<=K;ut++)if(We[ut-Q]===0&&Fr(Ht,T[ut])){ve=ut;break}ve===void 0?Lt(Ht,D,N,!0):(We[ve-Q]=M+1,ve>=Xt?Xt=ve:ye=!0,U(Ht,T[ve],P,null,D,N,j,L,k),Qt++)}const Ar=ye?Eg(We):Zn;for(ut=Ar.length-1,M=qt-1;M>=0;M--){const Ht=Q+M,ve=T[Ht],ws=Ht+1<W?T[Ht+1].el:x;We[M]===0?U(null,ve,P,ws,D,N,j,L,k):ye&&(ut<0||M!==Ar[ut]?Le(ve,P,ws,2):ut--)}}},Le=(v,T,P,x,D=null)=>{const{el:N,type:j,transition:L,children:k,shapeFlag:M}=v;if(M&6){Le(v.component.subTree,T,P,x);return}if(M&128){v.suspense.move(T,P,x);return}if(M&64){j.move(v,T,P,Se);return}if(j===Mt){r(N,T,P);for(let q=0;q<k.length;q++)Le(k[q],T,P,x);r(v.anchor,T,P);return}if(j===vo){J(v,T,P);return}if(x!==2&&M&1&&L)if(x===0)L.beforeEnter(N),r(N,T,P),ge(()=>L.enter(N),D);else{const{leave:q,delayLeave:K,afterLeave:Z}=L,Q=()=>r(N,T,P),st=()=>{q(N,()=>{Q(),Z&&Z()})};K?K(N,Q,st):st()}else r(N,T,P)},Lt=(v,T,P,x=!1,D=!1)=>{const{type:N,props:j,ref:L,children:k,dynamicChildren:M,shapeFlag:W,patchFlag:q,dirs:K,cacheIndex:Z}=v;if(q===-2&&(D=!1),L!=null&&hi(L,null,P,v,!0),Z!=null&&(T.renderCache[Z]=void 0),W&256){T.ctx.deactivate(v);return}const Q=W&1&&K,st=!nr(v);let ut;if(st&&(ut=j&&j.onVnodeBeforeUnmount)&&Re(ut,T,v),W&6)Tn(v.component,P,x);else{if(W&128){v.suspense.unmount(P,x);return}Q&&Rn(v,null,T,"beforeUnmount"),W&64?v.type.remove(v,T,P,Se,x):M&&!M.hasOnce&&(N!==Mt||q>0&&q&64)?In(M,T,P,!1,!0):(N===Mt&&q&384||!D&&W&16)&&In(k,T,P),x&&Ft(v)}(st&&(ut=j&&j.onVnodeUnmounted)||Q)&&ge(()=>{ut&&Re(ut,T,v),Q&&Rn(v,null,T,"unmounted")},P)},Ft=v=>{const{type:T,el:P,anchor:x,transition:D}=v;if(T===Mt){Qi(P,x);return}if(T===vo){z(v);return}const N=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(v.shapeFlag&1&&D&&!D.persisted){const{leave:j,delayLeave:L}=D,k=()=>j(P,N);L?L(v.el,N,k):k()}else N()},Qi=(v,T)=>{let P;for(;v!==T;)P=A(v),s(v),v=P;s(T)},Tn=(v,T,P)=>{const{bum:x,scope:D,job:N,subTree:j,um:L,m:k,a:M}=v;au(k),au(M),x&&Xs(x),D.stop(),N&&(N.flags|=8,Lt(j,v,T,P)),L&&ge(L,T),ge(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},In=(v,T,P,x=!1,D=!1,N=0)=>{for(let j=N;j<v.length;j++)Lt(v[j],T,P,x,D)},Fe=v=>{if(v.shapeFlag&6)return Fe(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=A(v.anchor||v.el),P=T&&T[Bp];return P?A(P):T};let Ir=!1;const Is=(v,T,P)=>{v==null?T._vnode&&Lt(T._vnode,null,null,!0):U(T._vnode||null,v,T,null,null,null,P),T._vnode=v,Ir||(Ir=!0,eu(),_h(),Ir=!1)},Se={p:U,um:Lt,m:Le,r:Ft,mt:oe,mc:g,pc:pt,pbc:E,n:Fe,o:e};return{render:Is,hydrate:void 0,createApp:lg(Is)}}function yo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Cn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function vg(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Lh(e,t,n=!1){const r=e.children,s=t.children;if(et(r)&&et(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=tn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Lh(a,l)),l.type===Oi&&(l.el=a.el)}}function Eg(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<f?i=l+1:a=l;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Fh(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fh(t)}function au(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Tg=Symbol.for("v-scx"),Ig=()=>Xr(Tg);function Ys(e,t,n){return Uh(e,t,n)}function Uh(e,t,n=Tt){const{immediate:r,deep:s,flush:i,once:a}=n,l=ie({},n),c=t&&r||!t&&i!=="post";let f;if(as){if(i==="sync"){const R=Ig();f=R.__watcherHandles||(R.__watcherHandles=[])}else if(!c){const R=()=>{};return R.stop=xe,R.resume=xe,R.pause=xe,R}}const d=se;l.call=(R,O,U)=>Oe(R,d,O,U);let m=!1;i==="post"?l.scheduler=R=>{ge(R,d&&d.suspense)}:i!=="sync"&&(m=!0,l.scheduler=(R,O)=>{O?R():Da(R)}),l.augmentJob=R=>{t&&(R.flags|=4),m&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const A=kp(e,t,l);return as&&(f?f.push(A):c&&A()),A}function wg(e,t,n){const r=this.proxy,s=kt(e)?e.includes(".")?Bh(r,e):()=>r[e]:e.bind(r,r);let i;it(t)?i=t:(i=t.handler,n=t);const a=_s(this),l=Uh(s,i.bind(r),n);return a(),l}function Bh(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ag=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${cn(t)}Modifiers`]||e[`${Un(t)}Modifiers`];function bg(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Tt;let s=n;const i=t.startsWith("update:"),a=i&&Ag(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>kt(d)?d.trim():d)),a.number&&(s=n.map(Yd)));let l,c=r[l=ho(t)]||r[l=ho(cn(t))];!c&&i&&(c=r[l=ho(Un(t))]),c&&Oe(c,e,6,s);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Oe(f,e,6,s)}}function $h(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!it(e)){const c=f=>{const d=$h(f,t,!0);d&&(l=!0,ie(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(At(e)&&r.set(e,null),null):(et(i)?i.forEach(c=>a[c]=null):ie(a,i),At(e)&&r.set(e,a),a)}function Ni(e,t){return!e||!Si(t)?!1:(t=t.slice(2).replace(/Once$/,""),_t(e,t[0].toLowerCase()+t.slice(1))||_t(e,Un(t))||_t(e,t))}function lu(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:f,renderCache:d,props:m,data:A,setupState:R,ctx:O,inheritAttrs:U}=e,$=ci(e);let G,Y;try{if(n.shapeFlag&4){const z=s||r,at=z;G=Ve(f.call(at,z,d,m,R,A,O)),Y=l}else{const z=t;G=Ve(z.length>1?z(m,{attrs:l,slots:a,emit:c}):z(m,null)),Y=t.props?l:Sg(l)}}catch(z){Jr.length=0,Di(z,e,1),G=_e(hn)}let J=G;if(Y&&U!==!1){const z=Object.keys(Y),{shapeFlag:at}=J;z.length&&at&7&&(i&&z.some(va)&&(Y=Rg(Y,i)),J=ar(J,Y,!1,!0))}return n.dirs&&(J=ar(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&xa(J,n.transition),G=J,ci($),G}const Sg=e=>{let t;for(const n in e)(n==="class"||n==="style"||Si(n))&&((t||(t={}))[n]=e[n]);return t},Rg=(e,t)=>{const n={};for(const r in e)(!va(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Cg(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?uu(r,a,f):!!a;if(c&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const A=d[m];if(a[A]!==r[A]&&!Ni(f,A))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?uu(r,a,f):!0:!!a;return!1}function uu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Ni(n,i))return!0}return!1}function Pg({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const jh=e=>e.__isSuspense;function Vg(e,t){t&&t.pendingBranch?et(e)?t.effects.push(...e):t.effects.push(e):Up(e)}const Mt=Symbol.for("v-fgt"),Oi=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),vo=Symbol.for("v-stc"),Jr=[];let me=null;function Et(e=!1){Jr.push(me=e?null:[])}function Dg(){Jr.pop(),me=Jr[Jr.length-1]||null}let os=1;function cu(e,t=!1){os+=e,e<0&&me&&t&&(me.hasOnce=!0)}function qh(e){return e.dynamicChildren=os>0?me||Zn:null,Dg(),os>0&&me&&me.push(e),e}function Ut(e,t,n,r,s,i){return qh(Vt(e,t,n,r,s,i,!0))}function en(e,t,n,r,s){return qh(_e(e,t,n,r,s,!0))}function Oa(e){return e?e.__v_isVNode===!0:!1}function Fr(e,t){return e.type===t.type&&e.key===t.key}const Hh=({key:e})=>e??null,Zs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?kt(e)||xt(e)||it(e)?{i:Gt,r:e,k:t,f:!!n}:e:null);function Vt(e,t=null,n=null,r=0,s=null,i=e===Mt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hh(t),ref:t&&Zs(t),scopeId:vh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Gt};return l?(Ma(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=kt(n)?8:16),os>0&&!a&&me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&me.push(c),c}const _e=xg;function xg(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===tg)&&(e=hn),Oa(e)){const l=ar(e,t,!0);return n&&Ma(l,n),os>0&&!i&&me&&(l.shapeFlag&6?me[me.indexOf(e)]=l:me.push(l)),l.patchFlag=-2,l}if(jg(e)&&(e=e.__vccOpts),t){t=Ng(t);let{class:l,style:c}=t;l&&!kt(l)&&(t.class=Ia(l)),At(c)&&(Pa(c)&&!et(c)&&(c=ie({},c)),t.style=gr(c))}const a=kt(e)?1:jh(e)?128:$p(e)?64:At(e)?4:it(e)?2:0;return Vt(e,t,n,r,s,a,i,!0)}function Ng(e){return e?Pa(e)||Vh(e)?ie({},e):e:null}function ar(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,f=t?Og(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Hh(f),ref:t&&t.ref?n&&i?et(i)?i.concat(Zs(t)):[i,Zs(t)]:Zs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ar(e.ssContent),ssFallback:e.ssFallback&&ar(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&xa(d,c.clone(d)),d}function jr(e=" ",t=0){return _e(Oi,null,e,t)}function hu(e="",t=!1){return t?(Et(),en(hn,null,e)):_e(hn,null,e)}function Ve(e){return e==null||typeof e=="boolean"?_e(hn):et(e)?_e(Mt,null,e.slice()):Oa(e)?tn(e):_e(Oi,null,String(e))}function tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ar(e)}function Ma(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(et(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Ma(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Vh(t)?t._ctx=Gt:s===3&&Gt&&(Gt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else it(t)?(t={default:t,_ctx:Gt},n=32):(t=String(t),r&64?(n=16,t=[jr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Og(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ia([t.class,r.class]));else if(s==="style")t.style=gr([t.style,r.style]);else if(Si(s)){const i=t[s],a=r[s];a&&i!==a&&!(et(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Re(e,t,n,r=null){Oe(e,t,7,[n,r])}const Mg=Rh();let kg=0;function Lg(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Mg,i={uid:kg++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xh(r,s),emitsOptions:$h(r,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:r.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=bg.bind(null,i),e.ce&&e.ce(i),i}let se=null,di,Ho;{const e=Ci(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};di=t("__VUE_INSTANCE_SETTERS__",n=>se=n),Ho=t("__VUE_SSR_SETTERS__",n=>as=n)}const _s=e=>{const t=se;return di(e),e.scope.on(),()=>{e.scope.off(),di(t)}},fu=()=>{se&&se.scope.off(),di(null)};function zh(e){return e.vnode.shapeFlag&4}let as=!1;function Fg(e,t=!1,n=!1){t&&Ho(t);const{props:r,children:s}=e.vnode,i=zh(e);hg(e,r,i,t),gg(e,s,n);const a=i?Ug(e,t):void 0;return t&&Ho(!1),a}function Ug(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,eg);const{setup:r}=n;if(r){yn();const s=e.setupContext=r.length>1?$g(e):null,i=_s(e),a=gs(r,e,0,[e.props,s]),l=Bc(a);if(vn(),i(),(l||e.sp)&&!nr(e)&&Eh(e),l){if(a.then(fu,fu),t)return a.then(c=>{du(e,c)}).catch(c=>{Di(c,e,0)});e.asyncDep=a}else du(e,a)}else Kh(e)}function du(e,t,n){it(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:At(t)&&(e.setupState=dh(t)),Kh(e)}function Kh(e,t,n){const r=e.type;e.render||(e.render=r.render||xe);{const s=_s(e);yn();try{ng(e)}finally{vn(),s()}}}const Bg={get(e,t){return ee(e,"get",""),e[t]}};function $g(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Bg),slots:e.slots,emit:e.emit,expose:t}}function Mi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(dh(Va(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qr)return Qr[n](e)},has(t,n){return n in t||n in Qr}})):e.proxy}function jg(e){return it(e)&&"__vccOpts"in e}const Gh=(e,t)=>Op(e,t,as),qg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zo;const pu=typeof window<"u"&&window.trustedTypes;if(pu)try{zo=pu.createPolicy("vue",{createHTML:e=>e})}catch{}const Wh=zo?e=>zo.createHTML(e):e=>e,Hg="http://www.w3.org/2000/svg",zg="http://www.w3.org/1998/Math/MathML",je=typeof document<"u"?document:null,gu=je&&je.createElement("template"),Kg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?je.createElementNS(Hg,e):t==="mathml"?je.createElementNS(zg,e):n?je.createElement(e,{is:n}):je.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>je.createTextNode(e),createComment:e=>je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gu.innerHTML=Wh(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=gu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Gg=Symbol("_vtc");function Wg(e,t,n){const r=e[Gg];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const mu=Symbol("_vod"),Qg=Symbol("_vsh"),Xg=Symbol(""),Jg=/(^|;)\s*display\s*:/;function Yg(e,t,n){const r=e.style,s=kt(n);let i=!1;if(n&&!s){if(t)if(kt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&ti(r,l,"")}else for(const a in t)n[a]==null&&ti(r,a,"");for(const a in n)a==="display"&&(i=!0),ti(r,a,n[a])}else if(s){if(t!==n){const a=r[Xg];a&&(n+=";"+a),r.cssText=n,i=Jg.test(n)}}else t&&e.removeAttribute("style");mu in e&&(e[mu]=i?r.display:"",e[Qg]&&(r.display="none"))}const _u=/\s*!important$/;function ti(e,t,n){if(et(n))n.forEach(r=>ti(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Zg(e,t);_u.test(n)?e.setProperty(Un(r),n.replace(_u,""),"important"):e[r]=n}}const yu=["Webkit","Moz","ms"],Eo={};function Zg(e,t){const n=Eo[t];if(n)return n;let r=cn(t);if(r!=="filter"&&r in e)return Eo[t]=r;r=qc(r);for(let s=0;s<yu.length;s++){const i=yu[s]+r;if(i in e)return Eo[t]=i}return t}const vu="http://www.w3.org/1999/xlink";function Eu(e,t,n,r,s,i=sp(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(vu,t.slice(6,t.length)):e.setAttributeNS(vu,t,n):n==null||i&&!zc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ae(n)?String(n):n)}function Tu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Wh(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=zc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Qh(e,t,n,r){e.addEventListener(t,n,r)}function tm(e,t,n,r){e.removeEventListener(t,n,r)}const Iu=Symbol("_vei");function em(e,t,n,r,s=null){const i=e[Iu]||(e[Iu]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=nm(t);if(r){const f=i[t]=im(r,s);Qh(e,l,f,c)}else a&&(tm(e,l,a,c),i[t]=void 0)}}const wu=/(?:Once|Passive|Capture)$/;function nm(e){let t;if(wu.test(e)){t={};let r;for(;r=e.match(wu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Un(e.slice(2)),t]}let To=0;const rm=Promise.resolve(),sm=()=>To||(rm.then(()=>To=0),To=Date.now());function im(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(om(r,n.value),t,5,[r])};return n.value=e,n.attached=sm(),n}function om(e,t){if(et(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Au=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,am=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Wg(e,r,a):t==="style"?Yg(e,n,r):Si(t)?va(t)||em(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lm(e,t,r,a))?(Tu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Eu(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!kt(r))?Tu(e,cn(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Eu(e,t,r,a))};function lm(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Au(t)&&it(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Au(t)&&kt(n)?!1:t in e}const bu=e=>{const t=e.props["onUpdate:modelValue"]||!1;return et(t)?n=>Xs(t,n):t},Io=Symbol("_assign"),qs={created(e,{value:t},n){e.checked=oi(t,n.props.value),e[Io]=bu(n),Qh(e,"change",()=>{e[Io](um(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[Io]=bu(r),t!==n&&(e.checked=oi(t,r.props.value))}};function um(e){return"_value"in e?e._value:e.value}const cm=ie({patchProp:am},Kg);let Su;function hm(){return Su||(Su=_g(cm))}const fm=(...e)=>{const t=hm().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=pm(r);if(!s)return;const i=t._component;!it(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,dm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function dm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function pm(e){return kt(e)?document.querySelector(e):e}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Xh;const ki=e=>Xh=e,Jh=Symbol();function Ko(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Yr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Yr||(Yr={}));function gm(){const e=Qc(!0),t=e.run(()=>fh({}));let n=[],r=[];const s=Va({install(i){ki(s),s._a=i,i.provide(Jh,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Yh=()=>{};function Ru(e,t,n,r=Yh){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Xc()&&op(s),s}function Gn(e,...t){e.slice().forEach(n=>{n(...t)})}const mm=e=>e(),Cu=Symbol(),wo=Symbol();function Go(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];Ko(s)&&Ko(r)&&e.hasOwnProperty(n)&&!xt(r)&&!on(r)?e[n]=Go(s,r):e[n]=r}return e}const _m=Symbol();function ym(e){return!Ko(e)||!Object.prototype.hasOwnProperty.call(e,_m)}const{assign:Ye}=Object;function vm(e){return!!(xt(e)&&e.effect)}function Em(e,t,n,r){const{state:s,actions:i,getters:a}=t,l=n.state.value[e];let c;function f(){l||(n.state.value[e]=s?s():{});const d=Vp(n.state.value[e]);return Ye(d,i,Object.keys(a||{}).reduce((m,A)=>(m[A]=Va(Gh(()=>{ki(n);const R=n._s.get(e);return a[A].call(R,R)})),m),{}))}return c=Zh(e,f,t,n,r,!0),c}function Zh(e,t,n={},r,s,i){let a;const l=Ye({actions:{}},n),c={deep:!0};let f,d,m=[],A=[],R;const O=r.state.value[e];!i&&!O&&(r.state.value[e]={}),fh({});let U;function $(g){let _;f=d=!1,typeof g=="function"?(g(r.state.value[e]),_={type:Yr.patchFunction,storeId:e,events:R}):(Go(r.state.value[e],g),_={type:Yr.patchObject,payload:g,storeId:e,events:R});const E=U=Symbol();gh().then(()=>{U===E&&(f=!0)}),d=!0,Gn(m,_,r.state.value[e])}const G=i?function(){const{state:_}=n,E=_?_():{};this.$patch(w=>{Ye(w,E)})}:Yh;function Y(){a.stop(),m=[],A=[],r._s.delete(e)}const J=(g,_="")=>{if(Cu in g)return g[wo]=_,g;const E=function(){ki(r);const w=Array.from(arguments),b=[],y=[];function oe(rt){b.push(rt)}function be(rt){y.push(rt)}Gn(A,{args:w,name:E[wo],store:at,after:oe,onError:be});let bt;try{bt=g.apply(this&&this.$id===e?this:at,w)}catch(rt){throw Gn(y,rt),rt}return bt instanceof Promise?bt.then(rt=>(Gn(b,rt),rt)).catch(rt=>(Gn(y,rt),Promise.reject(rt))):(Gn(b,bt),bt)};return E[Cu]=!0,E[wo]=_,E},z={_p:r,$id:e,$onAction:Ru.bind(null,A),$patch:$,$reset:G,$subscribe(g,_={}){const E=Ru(m,g,_.detached,()=>w()),w=a.run(()=>Ys(()=>r.state.value[e],b=>{(_.flush==="sync"?d:f)&&g({storeId:e,type:Yr.direct,events:R},b)},Ye({},c,_)));return E},$dispose:Y},at=Vi(z);r._s.set(e,at);const I=(r._a&&r._a.runWithContext||mm)(()=>r._e.run(()=>(a=Qc()).run(()=>t({action:J}))));for(const g in I){const _=I[g];if(xt(_)&&!vm(_)||on(_))i||(O&&ym(_)&&(xt(_)?_.value=O[g]:Go(_,O[g])),r.state.value[e][g]=_);else if(typeof _=="function"){const E=J(_,g);I[g]=E,l.actions[g]=_}}return Ye(at,I),Ye(mt(at),I),Object.defineProperty(at,"$state",{get:()=>r.state.value[e],set:g=>{$(_=>{Ye(_,g)})}}),r._p.forEach(g=>{Ye(at,a.run(()=>g({store:at,app:r._a,pinia:r,options:l})))}),O&&i&&n.hydrate&&n.hydrate(at.$state,O),f=!0,d=!0,at}/*! #__NO_SIDE_EFFECTS__ */function Tm(e,t,n){let r;const s=typeof t=="function";r=s?n:t;function i(a,l){const c=cg();return a=a||(c?Xr(Jh,null):null),a&&ki(a),a=Xh,a._s.has(e)||(s?Zh(e,t,r,a):Em(e,r,a)),a._s.get(e)}return i.$id=e,i}const Im=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,wm=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Am=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function bm(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){Sm(e);return}return t}function Sm(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Rm(e,t={}){if(typeof e!="string")return e;if(e[0]==='"'&&e[e.length-1]==='"'&&e.indexOf("\\")===-1)return e.slice(1,-1);const n=e.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!Am.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(Im.test(e)||wm.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,bm)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}function Cm(e,t){if(e==null)return;let n=e;for(let r=0;r<t.length;r++){if(n==null||n[t[r]]==null)return;n=n[t[r]]}return n}function ka(e,t,n){if(n.length===0)return t;const r=n[0];return n.length>1&&(t=ka(typeof e!="object"||e===null||!Object.prototype.hasOwnProperty.call(e,r)?Number.isInteger(Number(n[1]))?[]:{}:e[r],t,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(e)?e.slice()[r]:Object.assign({},e,{[r]:t})}function tf(e,t){if(e==null||t.length===0)return e;if(t.length===1){if(e==null)return e;if(Number.isInteger(t[0])&&Array.isArray(e))return Array.prototype.slice.call(e,0).splice(t[0],1);const n={};for(const r in e)n[r]=e[r];return delete n[t[0]],n}if(e[t[0]]==null){if(Number.isInteger(t[0])&&Array.isArray(e))return Array.prototype.concat.call([],e);const n={};for(const r in e)n[r]=e[r];return n}return ka(e,tf(e[t[0]],Array.prototype.slice.call(t,1)),[t[0]])}function ef(e,t){return t.map(n=>n.split(".")).map(n=>[n,Cm(e,n)]).filter(n=>n[1]!==void 0).reduce((n,r)=>ka(n,r[1],r[0]),{})}function nf(e,t){return t.map(n=>n.split(".")).reduce((n,r)=>tf(n,r),e)}function Pu(e,{storage:t,serializer:n,key:r,debug:s,pick:i,omit:a,beforeHydrate:l,afterHydrate:c},f,d=!0){try{d&&(l==null||l(f));const m=t.getItem(r);if(m){const A=n.deserialize(m),R=i?ef(A,i):A,O=a?nf(R,a):R;e.$patch(O)}d&&(c==null||c(f))}catch(m){s&&console.error("[pinia-plugin-persistedstate]",m)}}function Vu(e,{storage:t,serializer:n,key:r,debug:s,pick:i,omit:a}){try{const l=i?ef(e,i):e,c=a?nf(l,a):l,f=n.serialize(c);t.setItem(r,f)}catch(l){s&&console.error("[pinia-plugin-persistedstate]",l)}}function Pm(e,t,n){const{pinia:r,store:s,options:{persist:i=n}}=e;if(!i)return;if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const l=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(t);s.$hydrate=({runHooks:c=!0}={})=>{l.forEach(f=>{Pu(s,f,e,c)})},s.$persist=()=>{l.forEach(c=>{Vu(s.$state,c)})},l.forEach(c=>{Pu(s,c,e),s.$subscribe((f,d)=>Vu(d,c),{detached:!0})})}function Vm(e={}){return function(t){Pm(t,n=>({key:(e.key?e.key:r=>r)(n.key??t.store.$id),debug:n.debug??e.debug??!1,serializer:n.serializer??e.serializer??{serialize:r=>JSON.stringify(r),deserialize:r=>Rm(r)},storage:n.storage??e.storage??window.localStorage,beforeHydrate:n.beforeHydrate,afterHydrate:n.afterHydrate,pick:n.pick,omit:n.omit}),e.auto??!1)}}var Dm=Vm();const Bn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},xm={},Nm={class:"carafe"};function Om(e,t){return Et(),Ut("div",Nm,[Js(e.$slots,"top",{},void 0,!0),Js(e.$slots,"mid",{},void 0,!0),Js(e.$slots,"bottom",{},void 0,!0)])}const Mm=Bn(xm,[["render",Om],["__scopeId","data-v-8709b092"]]),km={},Lm={class:"mug"};function Fm(e,t){return Et(),Ut("div",Lm,[Js(e.$slots,"default")])}const Um=Bn(km,[["render",Fm]]),Du=["Hot","Cold"],Bm=()=>{};var xu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},$m=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,f=c?e[s+2]:0,d=i>>2,m=(i&3)<<4|l>>4;let A=(l&15)<<2|f>>6,R=f&63;c||(R=64,a||(A=64)),r.push(n[d],n[m],n[A],n[R])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$m(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const m=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||f==null||m==null)throw new jm;const A=i<<2|l>>4;if(r.push(A),f!==64){const R=l<<4&240|f>>2;if(r.push(R),m!==64){const O=f<<6&192|m;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class jm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qm=function(e){const t=rf(e);return sf.encodeByteArray(t,!0)},pi=function(e){return qm(e).replace(/\./g,"")},Hm=function(e){try{return sf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=()=>zm().__FIREBASE_DEFAULTS__,Gm=()=>{if(typeof process>"u"||typeof xu>"u")return;const e=xu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Wm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hm(e[1]);return t&&JSON.parse(t)},La=()=>{try{return Bm()||Km()||Gm()||Wm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Qm=e=>{var t,n;return(n=(t=La())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Xm=e=>{const t=Qm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},of=()=>{var e;return(e=La())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[pi(JSON.stringify(n)),pi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function t_(){var e;const t=(e=La())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e_(){return!t_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function n_(){try{return typeof indexedDB=="object"}catch{return!1}}function r_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="FirebaseError";class mr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=s_,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,af.prototype.create)}}class af{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?i_(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new mr(s,l,r)}}function i_(e,t){return e.replace(o_,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const o_=/\{\$([^}]+)}/g;function gi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(Nu(i)&&Nu(a)){if(!gi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(e){return e&&e._delegate?e._delegate:e}class ls{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Jm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(c_(t))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Vn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vn){return this.instances.has(t)}getOptions(t=Vn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:u_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Vn){return this.component?this.component.multipleInstances?t:Vn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u_(e){return e===Vn?void 0:e}function c_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new l_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ht||(ht={}));const f_={debug:ht.DEBUG,verbose:ht.VERBOSE,info:ht.INFO,warn:ht.WARN,error:ht.ERROR,silent:ht.SILENT},d_=ht.INFO,p_={[ht.DEBUG]:"log",[ht.VERBOSE]:"log",[ht.INFO]:"info",[ht.WARN]:"warn",[ht.ERROR]:"error"},g_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=p_[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lf{constructor(t){this.name=t,this._logLevel=d_,this._logHandler=g_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ht))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?f_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ht.DEBUG,...t),this._logHandler(this,ht.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ht.VERBOSE,...t),this._logHandler(this,ht.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ht.INFO,...t),this._logHandler(this,ht.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ht.WARN,...t),this._logHandler(this,ht.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ht.ERROR,...t),this._logHandler(this,ht.ERROR,...t)}}const m_=(e,t)=>t.some(n=>e instanceof n);let Ou,Mu;function __(){return Ou||(Ou=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function y_(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uf=new WeakMap,Wo=new WeakMap,cf=new WeakMap,Ao=new WeakMap,Fa=new WeakMap;function v_(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(an(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&uf.set(n,e)}).catch(()=>{}),Fa.set(t,e),t}function E_(e){if(Wo.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Wo.set(e,t)}let Qo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Wo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||cf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function T_(e){Qo=e(Qo)}function I_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bo(this),t,...n);return cf.set(r,t.sort?t.sort():[t]),an(r)}:y_().includes(e)?function(...t){return e.apply(bo(this),t),an(uf.get(this))}:function(...t){return an(e.apply(bo(this),t))}}function w_(e){return typeof e=="function"?I_(e):(e instanceof IDBTransaction&&E_(e),m_(e,__())?new Proxy(e,Qo):e)}function an(e){if(e instanceof IDBRequest)return v_(e);if(Ao.has(e))return Ao.get(e);const t=w_(e);return t!==e&&(Ao.set(e,t),Fa.set(t,e)),t}const bo=e=>Fa.get(e);function A_(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=an(a);return r&&a.addEventListener("upgradeneeded",c=>{r(an(a.result),c.oldVersion,c.newVersion,an(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const b_=["get","getKey","getAll","getAllKeys","count"],S_=["put","add","delete","clear"],So=new Map;function ku(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(So.get(t))return So.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=S_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||b_.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&c.done]))[0]};return So.set(t,i),i}T_(e=>({...e,get:(t,n,r)=>ku(t,n)||e.get(t,n,r),has:(t,n)=>!!ku(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(C_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function C_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Xo="@firebase/app",Lu="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new lf("@firebase/app"),P_="@firebase/app-compat",V_="@firebase/analytics-compat",D_="@firebase/analytics",x_="@firebase/app-check-compat",N_="@firebase/app-check",O_="@firebase/auth",M_="@firebase/auth-compat",k_="@firebase/database",L_="@firebase/data-connect",F_="@firebase/database-compat",U_="@firebase/functions",B_="@firebase/functions-compat",$_="@firebase/installations",j_="@firebase/installations-compat",q_="@firebase/messaging",H_="@firebase/messaging-compat",z_="@firebase/performance",K_="@firebase/performance-compat",G_="@firebase/remote-config",W_="@firebase/remote-config-compat",Q_="@firebase/storage",X_="@firebase/storage-compat",J_="@firebase/firestore",Y_="@firebase/vertexai",Z_="@firebase/firestore-compat",ty="firebase",ey="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="[DEFAULT]",ny={[Xo]:"fire-core",[P_]:"fire-core-compat",[D_]:"fire-analytics",[V_]:"fire-analytics-compat",[N_]:"fire-app-check",[x_]:"fire-app-check-compat",[O_]:"fire-auth",[M_]:"fire-auth-compat",[k_]:"fire-rtdb",[L_]:"fire-data-connect",[F_]:"fire-rtdb-compat",[U_]:"fire-fn",[B_]:"fire-fn-compat",[$_]:"fire-iid",[j_]:"fire-iid-compat",[q_]:"fire-fcm",[H_]:"fire-fcm-compat",[z_]:"fire-perf",[K_]:"fire-perf-compat",[G_]:"fire-rc",[W_]:"fire-rc-compat",[Q_]:"fire-gcs",[X_]:"fire-gcs-compat",[J_]:"fire-fst",[Z_]:"fire-fst-compat",[Y_]:"fire-vertex","fire-js":"fire-js",[ty]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Map,ry=new Map,Yo=new Map;function Fu(e,t){try{e.container.addComponent(t)}catch(n){ze.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _i(e){const t=e.name;if(Yo.has(t))return ze.debug(`There were multiple attempts to register component ${t}.`),!1;Yo.set(t,e);for(const n of mi.values())Fu(n,e);for(const n of ry.values())Fu(n,e);return!0}function sy(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function iy(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new af("app","Firebase",oy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=ey;function hf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Jo,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ln.create("bad-app-name",{appName:String(s)});if(n||(n=of()),!n)throw ln.create("no-options");const i=mi.get(s);if(i){if(gi(n,i.options)&&gi(r,i.config))return i;throw ln.create("duplicate-app",{appName:s})}const a=new h_(s);for(const c of Yo.values())a.addComponent(c);const l=new ay(n,r,a);return mi.set(s,l),l}function uy(e=Jo){const t=mi.get(e);if(!t&&e===Jo&&of())return hf();if(!t)throw ln.create("no-app",{appName:e});return t}function rr(e,t,n){var r;let s=(r=ny[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ze.warn(l.join(" "));return}_i(new ls(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="firebase-heartbeat-database",hy=1,us="firebase-heartbeat-store";let Ro=null;function ff(){return Ro||(Ro=A_(cy,hy,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(us)}catch(n){console.warn(n)}}}}).catch(e=>{throw ln.create("idb-open",{originalErrorMessage:e.message})})),Ro}async function fy(e){try{const n=(await ff()).transaction(us),r=await n.objectStore(us).get(df(e));return await n.done,r}catch(t){if(t instanceof mr)ze.warn(t.message);else{const n=ln.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ze.warn(n.message)}}}async function Uu(e,t){try{const r=(await ff()).transaction(us,"readwrite");await r.objectStore(us).put(t,df(e)),await r.done}catch(n){if(n instanceof mr)ze.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ze.warn(r.message)}}}function df(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=1024,py=30;class gy{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _y(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bu();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>py){const a=yy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ze.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bu(),{heartbeatsToSend:r,unsentEntries:s}=my(this._heartbeatsCache.heartbeats),i=pi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ze.warn(n),""}}}function Bu(){return new Date().toISOString().substring(0,10)}function my(e,t=dy){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),$u(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$u(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _y{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n_()?r_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function $u(e){return pi(JSON.stringify({version:2,heartbeats:e})).length}function yy(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(e){_i(new ls("platform-logger",t=>new R_(t),"PRIVATE")),_i(new ls("heartbeat",t=>new gy(t),"PRIVATE")),rr(Xo,Lu,e),rr(Xo,Lu,"esm2017"),rr("fire-js","")}vy("");var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var un,pf;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function _(){}_.prototype=g.prototype,I.D=g.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(E,w,b){for(var y=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)y[oe-2]=arguments[oe];return g.prototype[w].apply(E,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,_){_||(_=0);var E=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)E[w]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(w=0;16>w;++w)E[w]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=I.g[0],_=I.g[1],w=I.g[2];var b=I.g[3],y=g+(b^_&(w^b))+E[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=b+(w^g&(_^w))+E[1]+3905402710&4294967295,b=g+(y<<12&4294967295|y>>>20),y=w+(_^b&(g^_))+E[2]+606105819&4294967295,w=b+(y<<17&4294967295|y>>>15),y=_+(g^w&(b^g))+E[3]+3250441966&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(b^_&(w^b))+E[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(w^g&(_^w))+E[5]+1200080426&4294967295,b=g+(y<<12&4294967295|y>>>20),y=w+(_^b&(g^_))+E[6]+2821735955&4294967295,w=b+(y<<17&4294967295|y>>>15),y=_+(g^w&(b^g))+E[7]+4249261313&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(b^_&(w^b))+E[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(w^g&(_^w))+E[9]+2336552879&4294967295,b=g+(y<<12&4294967295|y>>>20),y=w+(_^b&(g^_))+E[10]+4294925233&4294967295,w=b+(y<<17&4294967295|y>>>15),y=_+(g^w&(b^g))+E[11]+2304563134&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(b^_&(w^b))+E[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(w^g&(_^w))+E[13]+4254626195&4294967295,b=g+(y<<12&4294967295|y>>>20),y=w+(_^b&(g^_))+E[14]+2792965006&4294967295,w=b+(y<<17&4294967295|y>>>15),y=_+(g^w&(b^g))+E[15]+1236535329&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(w^b&(_^w))+E[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^w&(g^_))+E[6]+3225465664&4294967295,b=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(b^g))+E[11]+643717713&4294967295,w=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(w^b))+E[0]+3921069994&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(w^b&(_^w))+E[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^w&(g^_))+E[10]+38016083&4294967295,b=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(b^g))+E[15]+3634488961&4294967295,w=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(w^b))+E[4]+3889429448&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(w^b&(_^w))+E[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^w&(g^_))+E[14]+3275163606&4294967295,b=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(b^g))+E[3]+4107603335&4294967295,w=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(w^b))+E[8]+1163531501&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(w^b&(_^w))+E[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^w&(g^_))+E[2]+4243563512&4294967295,b=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(b^g))+E[7]+1735328473&4294967295,w=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(w^b))+E[12]+2368359562&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(_^w^b)+E[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^w)+E[8]+2272392833&4294967295,b=g+(y<<11&4294967295|y>>>21),y=w+(b^g^_)+E[11]+1839030562&4294967295,w=b+(y<<16&4294967295|y>>>16),y=_+(w^b^g)+E[14]+4259657740&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(_^w^b)+E[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^w)+E[4]+1272893353&4294967295,b=g+(y<<11&4294967295|y>>>21),y=w+(b^g^_)+E[7]+4139469664&4294967295,w=b+(y<<16&4294967295|y>>>16),y=_+(w^b^g)+E[10]+3200236656&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(_^w^b)+E[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^w)+E[0]+3936430074&4294967295,b=g+(y<<11&4294967295|y>>>21),y=w+(b^g^_)+E[3]+3572445317&4294967295,w=b+(y<<16&4294967295|y>>>16),y=_+(w^b^g)+E[6]+76029189&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(_^w^b)+E[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^w)+E[12]+3873151461&4294967295,b=g+(y<<11&4294967295|y>>>21),y=w+(b^g^_)+E[15]+530742520&4294967295,w=b+(y<<16&4294967295|y>>>16),y=_+(w^b^g)+E[2]+3299628645&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(w^(_|~b))+E[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~w))+E[7]+1126891415&4294967295,b=g+(y<<10&4294967295|y>>>22),y=w+(g^(b|~_))+E[14]+2878612391&4294967295,w=b+(y<<15&4294967295|y>>>17),y=_+(b^(w|~g))+E[5]+4237533241&4294967295,_=w+(y<<21&4294967295|y>>>11),y=g+(w^(_|~b))+E[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~w))+E[3]+2399980690&4294967295,b=g+(y<<10&4294967295|y>>>22),y=w+(g^(b|~_))+E[10]+4293915773&4294967295,w=b+(y<<15&4294967295|y>>>17),y=_+(b^(w|~g))+E[1]+2240044497&4294967295,_=w+(y<<21&4294967295|y>>>11),y=g+(w^(_|~b))+E[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~w))+E[15]+4264355552&4294967295,b=g+(y<<10&4294967295|y>>>22),y=w+(g^(b|~_))+E[6]+2734768916&4294967295,w=b+(y<<15&4294967295|y>>>17),y=_+(b^(w|~g))+E[13]+1309151649&4294967295,_=w+(y<<21&4294967295|y>>>11),y=g+(w^(_|~b))+E[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~w))+E[11]+3174756917&4294967295,b=g+(y<<10&4294967295|y>>>22),y=w+(g^(b|~_))+E[2]+718787259&4294967295,w=b+(y<<15&4294967295|y>>>17),y=_+(b^(w|~g))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var _=g-this.blockSize,E=this.B,w=this.h,b=0;b<g;){if(w==0)for(;b<=_;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<g;)if(E[w++]=I.charCodeAt(b++),w==this.blockSize){s(this,E),w=0;break}}else for(;b<g;)if(E[w++]=I[b++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var _=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=_&255,_/=256;for(this.u(I),I=Array(16),g=_=0;4>g;++g)for(var E=0;32>E;E+=8)I[_++]=this.g[g]>>>E&255;return I};function i(I,g){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=g(I)}function a(I,g){this.h=g;for(var _=[],E=!0,w=I.length-1;0<=w;w--){var b=I[w]|0;E&&b==g||(_[w]=b,E=!1)}this.g=_}var l={};function c(I){return-128<=I&&128>I?i(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return $(f(-I));for(var g=[],_=1,E=0;I>=_;E++)g[E]=I/_|0,_*=4294967296;return new a(g,0)}function d(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return $(d(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(g,8)),E=m,w=0;w<I.length;w+=8){var b=Math.min(8,I.length-w),y=parseInt(I.substring(w,w+b),g);8>b?(b=f(Math.pow(g,b)),E=E.j(b).add(f(y))):(E=E.j(_),E=E.add(f(y)))}return E}var m=c(0),A=c(1),R=c(16777216);e=a.prototype,e.m=function(){if(U(this))return-$(this).m();for(var I=0,g=1,_=0;_<this.g.length;_++){var E=this.i(_);I+=(0<=E?E:4294967296+E)*g,g*=4294967296}return I},e.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(O(this))return"0";if(U(this))return"-"+$(this).toString(I);for(var g=f(Math.pow(I,6)),_=this,E="";;){var w=z(_,g).g;_=G(_,w.j(g));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=w,O(_))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},e.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function O(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function U(I){return I.h==-1}e.l=function(I){return I=G(this,I),U(I)?-1:O(I)?0:1};function $(I){for(var g=I.g.length,_=[],E=0;E<g;E++)_[E]=~I.g[E];return new a(_,~I.h).add(A)}e.abs=function(){return U(this)?$(this):this},e.add=function(I){for(var g=Math.max(this.g.length,I.g.length),_=[],E=0,w=0;w<=g;w++){var b=E+(this.i(w)&65535)+(I.i(w)&65535),y=(b>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);E=y>>>16,b&=65535,y&=65535,_[w]=y<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(I,g){return I.add($(g))}e.j=function(I){if(O(this)||O(I))return m;if(U(this))return U(I)?$(this).j($(I)):$($(this).j(I));if(U(I))return $(this.j($(I)));if(0>this.l(R)&&0>I.l(R))return f(this.m()*I.m());for(var g=this.g.length+I.g.length,_=[],E=0;E<2*g;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<I.g.length;w++){var b=this.i(E)>>>16,y=this.i(E)&65535,oe=I.i(w)>>>16,be=I.i(w)&65535;_[2*E+2*w]+=y*be,Y(_,2*E+2*w),_[2*E+2*w+1]+=b*be,Y(_,2*E+2*w+1),_[2*E+2*w+1]+=y*oe,Y(_,2*E+2*w+1),_[2*E+2*w+2]+=b*oe,Y(_,2*E+2*w+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new a(_,0)};function Y(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function J(I,g){this.g=I,this.h=g}function z(I,g){if(O(g))throw Error("division by zero");if(O(I))return new J(m,m);if(U(I))return g=z($(I),g),new J($(g.g),$(g.h));if(U(g))return g=z(I,$(g)),new J($(g.g),g.h);if(30<I.g.length){if(U(I)||U(g))throw Error("slowDivide_ only works with positive integers.");for(var _=A,E=g;0>=E.l(I);)_=at(_),E=at(E);var w=yt(_,1),b=yt(E,1);for(E=yt(E,2),_=yt(_,2);!O(E);){var y=b.add(E);0>=y.l(I)&&(w=w.add(_),b=y),E=yt(E,1),_=yt(_,1)}return g=G(I,w.j(g)),new J(w,g)}for(w=m;0<=I.l(g);){for(_=Math.max(1,Math.floor(I.m()/g.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=f(_),y=b.j(g);U(y)||0<y.l(I);)_-=E,b=f(_),y=b.j(g);O(b)&&(b=A),w=w.add(b),I=G(I,y)}return new J(w,I)}e.A=function(I){return z(this,I).h},e.and=function(I){for(var g=Math.max(this.g.length,I.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)&I.i(E);return new a(_,this.h&I.h)},e.or=function(I){for(var g=Math.max(this.g.length,I.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)|I.i(E);return new a(_,this.h|I.h)},e.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)^I.i(E);return new a(_,this.h^I.h)};function at(I){for(var g=I.g.length+1,_=[],E=0;E<g;E++)_[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(_,I.h)}function yt(I,g){var _=g>>5;g%=32;for(var E=I.g.length-_,w=[],b=0;b<E;b++)w[b]=0<g?I.i(b+_)>>>g|I.i(b+_+1)<<32-g:I.i(b+_);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,un=a}).apply(typeof ju<"u"?ju:typeof self<"u"?self:typeof window<"u"?window:{});var Hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gf,qr,mf,ei,Zo,_f,yf,vf;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hs=="object"&&Hs];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in h))break t;h=h[S]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&t(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,p=!1,S={next:function(){if(!p&&h<o.length){var C=h++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,h){return o.call.apply(o.bind,arguments)}function m(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function A(o,u,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,A.apply(null,arguments)}function R(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function O(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,S,C){for(var F=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)F[vt-2]=arguments[vt];return u.prototype[S].apply(p,F)}}function U(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function $(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const S=o.length||0,C=p.length||0;o.length=S+C;for(let F=0;F<C;F++)o[S+F]=p[F]}else o.push(p)}}class G{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Y(o){return/^[\s\xa0]*$/.test(o)}function J(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var at=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function yt(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function I(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function g(o){const u={};for(const h in o)u[h]=o[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let h,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(h in p)o[h]=p[h];for(let C=0;C<_.length;C++)h=_[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function w(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function b(o){l.setTimeout(()=>{throw o},0)}function y(){var o=Te;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class oe{constructor(){this.h=this.g=null}add(u,h){const p=be.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var be=new G(()=>new bt,o=>o.reset());class bt{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let rt,pt=!1,Te=new oe,En=()=>{const o=l.Promise.resolve(void 0);rt=()=>{o.then(Le)}};var Le=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){b(h)}var u=be;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pt=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ft(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ft.prototype.h=function(){this.defaultPrevented=!0};var Qi=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o}();function Tn(o,u){if(Ft.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(at){t:{try{z(u.nodeName);var S=!0;break t}catch{}S=!1}S||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:In[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Tn.aa.h.call(this)}}O(Tn,Ft);var In={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),Ir=0;function Is(o,u,h,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=S,this.key=++Ir,this.da=this.fa=!1}function Se(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function wr(o){this.src=o,this.g={},this.h=0}wr.prototype.add=function(o,u,h,p,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var F=T(o,u,p,S);return-1<F?(u=o[F],h||(u.fa=!1)):(u=new Is(u,this.src,C,!!p,S),u.fa=h,o.push(u)),u};function v(o,u){var h=u.type;if(h in o.g){var p=o.g[h],S=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(Se(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function T(o,u,h,p){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==u&&C.capture==!!h&&C.ha==p)return S}return-1}var P="closure_lm_"+(1e6*Math.random()|0),x={};function D(o,u,h,p,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)D(o,u[C],h,p,S);return null}return h=Z(h),o&&o[Fe]?o.K(u,h,f(p)?!!p.capture:!1,S):N(o,u,h,!1,p,S)}function N(o,u,h,p,S,C){if(!u)throw Error("Invalid event type");var F=f(S)?!!S.capture:!!S,vt=q(o);if(vt||(o[P]=vt=new wr(o)),h=vt.add(u,h,p,F,C),h.proxy)return h;if(p=j(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Qi||(S=F),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(M(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function j(){function o(h){return u.call(o.src,o.listener,h)}const u=W;return o}function L(o,u,h,p,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)L(o,u[C],h,p,S);else p=f(p)?!!p.capture:!!p,h=Z(h),o&&o[Fe]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],h=T(C,h,p,S),-1<h&&(Se(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=T(u,h,p,S)),(h=-1<o?u[o]:null)&&k(h))}function k(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Fe])v(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(M(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=q(u))?(v(h,o),h.h==0&&(h.src=null,u[P]=null)):Se(o)}}}function M(o){return o in x?x[o]:x[o]="on"+o}function W(o,u){if(o.da)o=!0;else{u=new Tn(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&k(o),o=h.call(p,u)}return o}function q(o){return o=o[P],o instanceof wr?o:null}var K="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(o){return typeof o=="function"?o:(o[K]||(o[K]=function(u){return o.handleEvent(u)}),o[K])}function Q(){Lt.call(this),this.i=new wr(this),this.M=this,this.F=null}O(Q,Lt),Q.prototype[Fe]=!0,Q.prototype.removeEventListener=function(o,u,h,p){L(this,o,u,h,p)};function st(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ft(u,o);else if(u instanceof Ft)u.target=u.target||o;else{var S=u;u=new Ft(p,o),E(u,S)}if(S=!0,h)for(var C=h.length-1;0<=C;C--){var F=u.g=h[C];S=ut(F,p,!0,u)&&S}if(F=u.g=o,S=ut(F,p,!0,u)&&S,S=ut(F,p,!1,u)&&S,h)for(C=0;C<h.length;C++)F=u.g=h[C],S=ut(F,p,!1,u)&&S}Q.prototype.N=function(){if(Q.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)Se(h[p]);delete o.g[u],o.h--}}this.F=null},Q.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},Q.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function ut(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var F=u[C];if(F&&!F.da&&F.capture==h){var vt=F.listener,zt=F.ha||F.src;F.fa&&v(o.i,F),S=vt.call(zt,p)!==!1&&S}}return S&&!p.defaultPrevented}function Qt(o,u,h){if(typeof o=="function")h&&(o=A(o,h));else if(o&&typeof o.handleEvent=="function")o=A(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function qt(o){o.g=Qt(()=>{o.g=null,o.i&&(o.i=!1,qt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class ye extends Lt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:qt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(o){Lt.call(this),this.h=o,this.g={}}O(Xt,Lt);var We=[];function Ar(o){yt(o.g,function(u,h){this.g.hasOwnProperty(h)&&k(u)},o),o.g={}}Xt.prototype.N=function(){Xt.aa.N.call(this),Ar(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ht=l.JSON.stringify,ve=l.JSON.parse,ws=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Xi(){}Xi.prototype.h=null;function ol(o){return o.h||(o.h=o.i())}function al(){}var br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ji(){Ft.call(this,"d")}O(Ji,Ft);function Yi(){Ft.call(this,"c")}O(Yi,Ft);var wn={},ll=null;function As(){return ll=ll||new Q}wn.La="serverreachability";function ul(o){Ft.call(this,wn.La,o)}O(ul,Ft);function Sr(o){const u=As();st(u,new ul(u))}wn.STAT_EVENT="statevent";function cl(o,u){Ft.call(this,wn.STAT_EVENT,o),this.stat=u}O(cl,Ft);function ae(o){const u=As();st(u,new cl(u,o))}wn.Ma="timingevent";function hl(o,u){Ft.call(this,wn.Ma,o),this.size=u}O(hl,Ft);function Rr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Cr(){this.g=!0}Cr.prototype.xa=function(){this.g=!1};function Ad(o,u,h,p,S,C){o.info(function(){if(o.g)if(C)for(var F="",vt=C.split("&"),zt=0;zt<vt.length;zt++){var gt=vt[zt].split("=");if(1<gt.length){var Jt=gt[0];gt=gt[1];var Yt=Jt.split("_");F=2<=Yt.length&&Yt[1]=="type"?F+(Jt+"="+gt+"&"):F+(Jt+"=redacted&")}}else F=null;else F=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+h+`
`+F})}function bd(o,u,h,p,S,C,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+h+`
`+C+" "+F})}function jn(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Rd(o,h)+(p?" "+p:"")})}function Sd(o,u){o.info(function(){return"TIMEOUT: "+u})}Cr.prototype.info=function(){};function Rd(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var F=1;F<S.length;F++)S[F]=""}}}}return Ht(h)}catch{return u}}var bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zi;function Ss(){}O(Ss,Xi),Ss.prototype.g=function(){return new XMLHttpRequest},Ss.prototype.i=function(){return{}},Zi=new Ss;function Qe(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new Xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var pl={},to={};function eo(o,u,h){o.L=1,o.v=Vs(Ue(u)),o.m=h,o.P=!0,gl(o,null)}function gl(o,u){o.F=Date.now(),Rs(o),o.A=Ue(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Pl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new dl,o.g=Gl(o.j,h?u:null,!o.m),0<o.O&&(o.M=new ye(A(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(We[0]=S.toString()),S=We);for(var C=0;C<S.length;C++){var F=D(h,S[C],p||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Sr(),Ad(o.i,o.u,o.A,o.l,o.R,o.m)}Qe.prototype.ca=function(o){o=o.target;const u=this.M;u&&Be(o)==3?u.j():this.Y(o)},Qe.prototype.Y=function(o){try{if(o==this.g)t:{const Yt=Be(this.g);var u=this.g.Ba();const zn=this.g.Z();if(!(3>Yt)&&(Yt!=3||this.g&&(this.h.h||this.g.oa()||kl(this.g)))){this.J||Yt!=4||u==7||(u==8||0>=zn?Sr(3):Sr(2)),no(this);var h=this.g.Z();this.X=h;e:if(ml(this)){var p=kl(this.g);o="";var S=p.length,C=Be(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),Pr(this);var F="";break e}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,bd(this.i,this.u,this.A,this.l,this.R,Yt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var vt,zt=this.g;if((vt=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(vt)){var gt=vt;break e}}gt=null}if(h=gt)jn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ro(this,h);else{this.o=!1,this.s=3,ae(12),An(this),Pr(this);break t}}if(this.P){h=!0;let Ie;for(;!this.J&&this.C<F.length;)if(Ie=Cd(this,F),Ie==to){Yt==4&&(this.s=4,ae(14),h=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==pl){this.s=4,ae(15),jn(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else jn(this.i,this.l,Ie,null),ro(this,Ie);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Yt!=4||F.length!=0||this.h.h||(this.s=1,ae(16),h=!1),this.o=this.o&&h,!h)jn(this.i,this.l,F,"[Invalid Chunked Response]"),An(this),Pr(this);else if(0<F.length&&!this.W){this.W=!0;var Jt=this.j;Jt.g==this&&Jt.ba&&!Jt.M&&(Jt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),uo(Jt),Jt.M=!0,ae(11))}}else jn(this.i,this.l,F,null),ro(this,F);Yt==4&&An(this),this.o&&!this.J&&(Yt==4?ql(this.j,this):(this.o=!1,Rs(this)))}else zd(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,ae(12)):(this.s=0,ae(13)),An(this),Pr(this)}}}catch{}finally{}};function ml(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Cd(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?to:(h=Number(u.substring(h,p)),isNaN(h)?pl:(p+=1,p+h>u.length?to:(u=u.slice(p,p+h),o.C=p+h,u)))}Qe.prototype.cancel=function(){this.J=!0,An(this)};function Rs(o){o.S=Date.now()+o.I,_l(o,o.I)}function _l(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Rr(A(o.ba,o),u)}function no(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Qe.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Sd(this.i,this.A),this.L!=2&&(Sr(),ae(17)),An(this),this.s=2,Pr(this)):_l(this,this.S-o)};function Pr(o){o.j.G==0||o.J||ql(o.j,o)}function An(o){no(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ar(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ro(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||so(h.h,o))){if(!o.K&&so(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ks(h),Os(h);else break t;lo(h),ae(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=Rr(A(h.Za,h),6e3));if(1>=El(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Sn(h,11)}else if((o.K||h.g==o)&&ks(h),!Y(u))for(S=h.Da.g.parse(u),u=0;u<S.length;u++){let gt=S[u];if(h.T=gt[0],gt=gt[1],h.G==2)if(gt[0]=="c"){h.K=gt[1],h.ia=gt[2];const Jt=gt[3];Jt!=null&&(h.la=Jt,h.j.info("VER="+h.la));const Yt=gt[4];Yt!=null&&(h.Aa=Yt,h.j.info("SVER="+h.Aa));const zn=gt[5];zn!=null&&typeof zn=="number"&&0<zn&&(p=1.5*zn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Ie=o.g;if(Ie){const Fs=Ie.g?Ie.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fs){var C=p.h;C.g||Fs.indexOf("spdy")==-1&&Fs.indexOf("quic")==-1&&Fs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(io(C,C.h),C.h=null))}if(p.D){const co=Ie.g?Ie.g.getResponseHeader("X-HTTP-Session-Id"):null;co&&(p.ya=co,wt(p.I,p.D,co))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var F=o;if(p.qa=Kl(p,p.J?p.ia:null,p.W),F.K){Tl(p.h,F);var vt=F,zt=p.L;zt&&(vt.I=zt),vt.B&&(no(vt),Rs(vt)),p.g=F}else $l(p);0<h.i.length&&Ms(h)}else gt[0]!="stop"&&gt[0]!="close"||Sn(h,7);else h.G==3&&(gt[0]=="stop"||gt[0]=="close"?gt[0]=="stop"?Sn(h,7):ao(h):gt[0]!="noop"&&h.l&&h.l.ta(gt),h.v=0)}}Sr(4)}catch{}}var Pd=class{constructor(o,u){this.g=o,this.map=u}};function yl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function El(o){return o.h?1:o.g?o.g.size:0}function so(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function io(o,u){o.g?o.g.add(u):o.h=u}function Tl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}yl.prototype.cancel=function(){if(this.i=Il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Il(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return U(o.i)}function Vd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function Dd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function wl(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=Dd(o),p=Vd(o),S=p.length,C=0;C<S;C++)u.call(void 0,p[C],h&&h[C],o)}var Al=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xd(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),S=null;if(0<=p){var C=o[h].substring(0,p);S=o[h].substring(p+1)}else C=o[h];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function bn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof bn){this.h=o.h,Cs(this,o.j),this.o=o.o,this.g=o.g,Ps(this,o.s),this.l=o.l;var u=o.i,h=new xr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),bl(this,h),this.m=o.m}else o&&(u=String(o).match(Al))?(this.h=!1,Cs(this,u[1]||"",!0),this.o=Vr(u[2]||""),this.g=Vr(u[3]||"",!0),Ps(this,u[4]),this.l=Vr(u[5]||"",!0),bl(this,u[6]||"",!0),this.m=Vr(u[7]||"")):(this.h=!1,this.i=new xr(null,this.h))}bn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Dr(u,Sl,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Dr(u,Sl,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Dr(h,h.charAt(0)=="/"?Md:Od,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Dr(h,Ld)),o.join("")};function Ue(o){return new bn(o)}function Cs(o,u,h){o.j=h?Vr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ps(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function bl(o,u,h){u instanceof xr?(o.i=u,Fd(o.i,o.h)):(h||(u=Dr(u,kd)),o.i=new xr(u,o.h))}function wt(o,u,h){o.i.set(u,h)}function Vs(o){return wt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Vr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Dr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Nd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Nd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Sl=/[#\/\?@]/g,Od=/[#\?:]/g,Md=/[#\?]/g,kd=/[#\?@]/g,Ld=/#/g;function xr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Xe(o){o.g||(o.g=new Map,o.h=0,o.i&&xd(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}e=xr.prototype,e.add=function(o,u){Xe(this),this.i=null,o=qn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Rl(o,u){Xe(o),u=qn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Cl(o,u){return Xe(o),u=qn(o,u),o.g.has(u)}e.forEach=function(o,u){Xe(this),this.g.forEach(function(h,p){h.forEach(function(S){o.call(u,S,p,this)},this)},this)},e.na=function(){Xe(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const S=o[p];for(let C=0;C<S.length;C++)h.push(u[p])}return h},e.V=function(o){Xe(this);let u=[];if(typeof o=="string")Cl(this,o)&&(u=u.concat(this.g.get(qn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},e.set=function(o,u){return Xe(this),this.i=null,o=qn(this,o),Cl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Pl(o,u,h){Rl(o,u),0<h.length&&(o.i=null,o.g.set(qn(o,u),U(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const C=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var S=C;F[p]!==""&&(S+="="+encodeURIComponent(String(F[p]))),o.push(S)}}return this.i=o.join("&")};function qn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Fd(o,u){u&&!o.j&&(Xe(o),o.i=null,o.g.forEach(function(h,p){var S=p.toLowerCase();p!=S&&(Rl(this,p),Pl(this,S,h))},o)),o.j=u}function Ud(o,u){const h=new Cr;if(l.Image){const p=new Image;p.onload=R(Je,h,"TestLoadImage: loaded",!0,u,p),p.onerror=R(Je,h,"TestLoadImage: error",!1,u,p),p.onabort=R(Je,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(Je,h,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Bd(o,u){const h=new Cr,p=new AbortController,S=setTimeout(()=>{p.abort(),Je(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?Je(h,"TestPingServer: ok",!0,u):Je(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Je(h,"TestPingServer: error",!1,u)})}function Je(o,u,h,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(h)}catch{}}function $d(){this.g=new ws}function jd(o,u,h){const p=h||"";try{wl(o,function(S,C){let F=S;f(S)&&(F=Ht(S)),u.push(p+C+"="+encodeURIComponent(F))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function Ds(o){this.l=o.Ub||null,this.j=o.eb||!1}O(Ds,Xi),Ds.prototype.g=function(){return new xs(this.l,this.j)},Ds.prototype.i=function(o){return function(){return o}}({});function xs(o,u){Q.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(xs,Q),e=xs.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Or(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nr(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Nr(this):Or(this),this.readyState==3&&Vl(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,Nr(this))},e.Qa=function(o){this.g&&(this.response=o,Nr(this))},e.ga=function(){this.g&&Nr(this)};function Nr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Or(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Or(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Dl(o){let u="";return yt(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function oo(o,u,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Dl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):wt(o,u,h))}function Rt(o){Q.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Rt,Q);var qd=/^https?$/i,Hd=["POST","PUT"];e=Rt.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zi.g(),this.v=this.o?ol(this.o):ol(Zi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){xl(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)h.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Hd,u,void 0))||p||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,F]of h)this.g.setRequestHeader(C,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ml(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){xl(this,C)}};function xl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Nl(o),Ns(o)}function Nl(o){o.A||(o.A=!0,st(o,"complete"),st(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,st(this,"complete"),st(this,"abort"),Ns(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ns(this,!0)),Rt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ol(this):this.bb())},e.bb=function(){Ol(this)};function Ol(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Be(o)!=4||o.Z()!=2)){if(o.u&&Be(o)==4)Qt(o.Ea,0,o);else if(st(o,"readystatechange"),Be(o)==4){o.h=!1;try{const F=o.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var h;if(!(h=u)){var p;if(p=F===0){var S=String(o.D).match(Al)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!qd.test(S?S.toLowerCase():"")}h=p}if(h)st(o,"complete"),st(o,"success");else{o.m=6;try{var C=2<Be(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Nl(o)}}finally{Ns(o)}}}}function Ns(o,u){if(o.g){Ml(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||st(o,"ready");try{h.onreadystatechange=p}catch{}}}function Ml(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Be(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Be(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ve(u)}};function kl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function zd(o){const u={};o=(o.g&&2<=Be(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Y(o[p]))continue;var h=w(o[p]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=u[S]||[];u[S]=C,C.push(h)}I(u,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Ll(o){this.Aa=0,this.i=[],this.j=new Cr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mr("baseRetryDelayMs",5e3,o),this.cb=Mr("retryDelaySeedMs",1e4,o),this.Wa=Mr("forwardChannelMaxRetries",2,o),this.wa=Mr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new yl(o&&o.concurrentRequestLimit),this.Da=new $d,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Ll.prototype,e.la=8,e.G=1,e.connect=function(o,u,h,p){ae(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Kl(this,null,this.W),Ms(this)};function ao(o){if(Fl(o),o.G==3){var u=o.U++,h=Ue(o.I);if(wt(h,"SID",o.K),wt(h,"RID",u),wt(h,"TYPE","terminate"),kr(o,h),u=new Qe(o,o.j,u),u.L=2,u.v=Vs(Ue(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Gl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Rs(u)}zl(o)}function Os(o){o.g&&(uo(o),o.g.cancel(),o.g=null)}function Fl(o){Os(o),o.u&&(l.clearTimeout(o.u),o.u=null),ks(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ms(o){if(!vl(o.h)&&!o.s){o.s=!0;var u=o.Ga;rt||En(),pt||(rt(),pt=!0),Te.add(u,o),o.B=0}}function Kd(o,u){return El(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Rr(A(o.Ga,o,u),Hl(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Qe(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)t:{for(var u=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break t}if(u===4096||h===this.i.length-1){u=h+1;break t}}u=1e3}else u=1e3;u=Bl(this,S,u),h=Ue(this.I),wt(h,"RID",o),wt(h,"CVER",22),this.D&&wt(h,"X-HTTP-Session-Id",this.D),kr(this,h),C&&(this.O?u="headers="+encodeURIComponent(String(Dl(C)))+"&"+u:this.m&&oo(h,this.m,C)),io(this.h,S),this.Ua&&wt(h,"TYPE","init"),this.P?(wt(h,"$req",u),wt(h,"SID","null"),S.T=!0,eo(S,h,null)):eo(S,h,u),this.G=2}}else this.G==3&&(o?Ul(this,o):this.i.length==0||vl(this.h)||Ul(this))};function Ul(o,u){var h;u?h=u.l:h=o.U++;const p=Ue(o.I);wt(p,"SID",o.K),wt(p,"RID",h),wt(p,"AID",o.T),kr(o,p),o.m&&o.o&&oo(p,o.m,o.o),h=new Qe(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Bl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),io(o.h,h),eo(h,p,u)}function kr(o,u){o.H&&yt(o.H,function(h,p){wt(u,p,h)}),o.l&&wl({},function(h,p){wt(u,p,h)})}function Bl(o,u,h){h=Math.min(o.i.length,h);var p=o.l?A(o.l.Na,o.l,o):null;t:{var S=o.i;let C=-1;for(;;){const F=["count="+h];C==-1?0<h?(C=S[0].g,F.push("ofs="+C)):C=0:F.push("ofs="+C);let vt=!0;for(let zt=0;zt<h;zt++){let gt=S[zt].g;const Jt=S[zt].map;if(gt-=C,0>gt)C=Math.max(0,S[zt].g-100),vt=!1;else try{jd(Jt,F,"req"+gt+"_")}catch{p&&p(Jt)}}if(vt){p=F.join("&");break t}}}return o=o.i.splice(0,h),u.D=o,p}function $l(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;rt||En(),pt||(rt(),pt=!0),Te.add(u,o),o.v=0}}function lo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Rr(A(o.Fa,o),Hl(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,jl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Rr(A(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ae(10),Os(this),jl(this))};function uo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function jl(o){o.g=new Qe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Ue(o.qa);wt(u,"RID","rpc"),wt(u,"SID",o.K),wt(u,"AID",o.T),wt(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&wt(u,"TO",o.ja),wt(u,"TYPE","xmlhttp"),kr(o,u),o.m&&o.o&&oo(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Vs(Ue(u)),h.m=null,h.P=!0,gl(h,o)}e.Za=function(){this.C!=null&&(this.C=null,Os(this),lo(this),ae(19))};function ks(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ql(o,u){var h=null;if(o.g==u){ks(o),uo(o),o.g=null;var p=2}else if(so(o.h,u))h=u.D,Tl(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=As(),st(p,new hl(p,h)),Ms(o)}else $l(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&Kd(o,u)||p==2&&lo(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),S){case 1:Sn(o,5);break;case 4:Sn(o,10);break;case 3:Sn(o,6);break;default:Sn(o,2)}}}function Hl(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Sn(o,u){if(o.j.info("Error code "+u),u==2){var h=A(o.fb,o),p=o.Xa;const S=!p;p=new bn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Cs(p,"https"),Vs(p),S?Ud(p.toString(),h):Bd(p.toString(),h)}else ae(2);o.G=0,o.l&&o.l.sa(u),zl(o),Fl(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))};function zl(o){if(o.G=0,o.ka=[],o.l){const u=Il(o.h);(u.length!=0||o.i.length!=0)&&($(o.ka,u),$(o.ka,o.i),o.h.i.length=0,U(o.i),o.i.length=0),o.l.ra()}}function Kl(o,u,h){var p=h instanceof bn?Ue(h):new bn(h);if(p.g!="")u&&(p.g=u+"."+p.g),Ps(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new bn(null);p&&Cs(C,p),u&&(C.g=u),S&&Ps(C,S),h&&(C.l=h),p=C}return h=o.D,u=o.ya,h&&u&&wt(p,h,u),wt(p,"VER",o.la),kr(o,p),p}function Gl(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Rt(new Ds({eb:h})):new Rt(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wl(){}e=Wl.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Ls(){}Ls.prototype.g=function(o,u){return new pe(o,u)};function pe(o,u){Q.call(this),this.g=new Ll(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Y(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Y(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Hn(this)}O(pe,Q),pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pe.prototype.close=function(){ao(this.g)},pe.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ht(o),o=h);u.i.push(new Pd(u.Ya++,o)),u.G==3&&Ms(u)},pe.prototype.N=function(){this.g.l=null,delete this.j,ao(this.g),delete this.g,pe.aa.N.call(this)};function Ql(o){Ji.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const h in u){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}O(Ql,Ji);function Xl(){Yi.call(this),this.status=1}O(Xl,Yi);function Hn(o){this.g=o}O(Hn,Wl),Hn.prototype.ua=function(){st(this.g,"a")},Hn.prototype.ta=function(o){st(this.g,new Ql(o))},Hn.prototype.sa=function(o){st(this.g,new Xl)},Hn.prototype.ra=function(){st(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,pe.prototype.send=pe.prototype.o,pe.prototype.open=pe.prototype.m,pe.prototype.close=pe.prototype.close,vf=function(){return new Ls},yf=function(){return As()},_f=wn,Zo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bs.NO_ERROR=0,bs.TIMEOUT=8,bs.HTTP_ERROR=6,ei=bs,fl.COMPLETE="complete",mf=fl,al.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",Q.prototype.listen=Q.prototype.K,qr=al,Rt.prototype.listenOnce=Rt.prototype.L,Rt.prototype.getLastError=Rt.prototype.Ka,Rt.prototype.getLastErrorCode=Rt.prototype.Ba,Rt.prototype.getStatus=Rt.prototype.Z,Rt.prototype.getResponseJson=Rt.prototype.Oa,Rt.prototype.getResponseText=Rt.prototype.oa,Rt.prototype.send=Rt.prototype.ea,Rt.prototype.setWithCredentials=Rt.prototype.Ha,gf=Rt}).apply(typeof Hs<"u"?Hs:typeof self<"u"?self:typeof window<"u"?window:{});const qu="@firebase/firestore",Hu="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new lf("@firebase/firestore");function Qn(){return Fn.logLevel}function H(e,...t){if(Fn.logLevel<=ht.DEBUG){const n=t.map(Ua);Fn.debug(`Firestore (${_r}): ${e}`,...n)}}function Ke(e,...t){if(Fn.logLevel<=ht.ERROR){const n=t.map(Ua);Fn.error(`Firestore (${_r}): ${e}`,...n)}}function lr(e,...t){if(Fn.logLevel<=ht.WARN){const n=t.map(Ua);Fn.warn(`Firestore (${_r}): ${e}`,...n)}}function Ua(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e="Unexpected state"){const t=`FIRESTORE (${_r}) INTERNAL ASSERTION FAILED: `+e;throw Ke(t),new Error(t)}function St(e,t){e||ot()}function ft(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends mr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ey{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(te.UNAUTHENTICATED))}shutdown(){}}class Ty{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Iy{constructor(t){this.t=t,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){St(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mn)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(St(typeof r.accessToken=="string"),new Ef(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return St(t===null||typeof t=="string"),new te(t)}}class wy{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=te.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ay{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new wy(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class by{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,iy(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){St(this.o===void 0);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new zu(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(St(typeof n.token=="string"),this.R=n.token,new zu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Sy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function lt(e,t){return e<t?-1:e>t?1:0}function ta(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return lt(r,s);{const i=Tf(),a=Cy(i.encode(Ku(e,n)),i.encode(Ku(t,n)));return a!==0?a:lt(r,s)}}n+=r>65535?2:1}return lt(e.length,t.length)}function Ku(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function Cy(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return lt(e[n],t[n]);return lt(e.length,t.length)}function ur(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=-62135596800,Wu=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(t){return de.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Wu);return new de(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new X(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Gu)throw new X(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new X(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wu}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Gu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static fromTimestamp(t){return new nt(t)}static min(){return new nt(new de(0,0))}static max(){return new nt(new de(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="__name__";class Pe{constructor(t,n,r){n===void 0?n=0:n>t.length&&ot(),r===void 0?r=t.length-n:r>t.length-n&&ot(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Pe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Pe?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=Pe.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return lt(t.length,n.length)}static compareSegments(t,n){const r=Pe.isNumericId(t),s=Pe.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Pe.extractNumericId(t).compare(Pe.extractNumericId(n)):ta(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return un.fromString(t.substring(4,t.length-2))}}class Pt extends Pe{construct(t,n,r){return new Pt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new X(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pt(n)}static emptyPath(){return new Pt([])}}const Py=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends Pe{construct(t,n,r){return new he(t,n,r)}static isValidIdentifier(t){return Py.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qu}static keyField(){return new he([Qu])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(B.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new X(B.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new X(B.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new he(n)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(Pt.fromString(t))}static fromName(t){return new tt(Pt.fromString(t).popFirst(5))}static empty(){return new tt(Pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Pt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new Pt(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=-1;function Vy(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=nt.fromTimestamp(r===1e9?new de(n+1,0):new de(n,r));return new fn(s,tt.empty(),t)}function Dy(e){return new fn(e.readTime,e.key,cs)}class fn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new fn(nt.min(),tt.empty(),cs)}static max(){return new fn(nt.max(),tt.empty(),cs)}}function xy(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=tt.comparator(e.documentKey,t.documentKey),n!==0?n:lt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Oy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e){if(e.code!==B.FAILED_PRECONDITION||e.message!==Ny)throw e;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ot(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):V.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):V.reject(n)}static resolve(t){return new V((n,r)=>{n(t)})}static reject(t){return new V((n,r)=>{r(t)})}static waitFor(t){return new V((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(t){let n=V.resolve(!1);for(const r of t)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new V((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const f=c;n(t[f]).next(d=>{a[f]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new V((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function My(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Fi.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=-1;function Ui(e){return e==null}function ea(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="";function Ly(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Xu(t)),t=Fy(e.get(n),t);return Xu(t)}function Fy(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case If:n+="";break;default:n+=i}}return n}function Xu(e){return e+If+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ys(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Uy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,n){this.comparator=t,this.root=n||Kt.EMPTY}insert(t,n){return new Nt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(t){return new Nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zs(this.root,t,this.comparator,!1)}getReverseIterator(){return new zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zs(this.root,t,this.comparator,!0)}}class zs{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Kt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Kt.RED,this.left=s??Kt.EMPTY,this.right=i??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Kt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Kt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ot();const t=this.left.check();if(t!==this.right.check())throw ot();return t+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw ot()}get value(){throw ot()}get color(){throw ot()}get left(){throw ot()}get right(){throw ot()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Kt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.comparator=t,this.data=new Nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yu(this.data.getIterator())}getIteratorFrom(t){return new Yu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof $t)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new $t(this.comparator);return n.data=t,n}}class Yu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t){this.fields=t,t.sort(he.comparator)}static empty(){return new nn([])}unionWith(t){let n=new $t(he.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new nn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ur(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wf("Invalid base64 string: "+i):i}}(t);return new Wt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Wt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const By=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dn(e){if(St(!!e),typeof e=="string"){let t=0;const n=By.exec(e);if(St(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Dt(e.seconds),nanos:Dt(e.nanos)}}function Dt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function pn(e){return typeof e=="string"?Wt.fromBase64String(e):Wt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="server_timestamp",bf="__type__",Sf="__previous_value__",Rf="__local_write_time__";function Ba(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[bf])===null||n===void 0?void 0:n.stringValue)===Af}function Bi(e){const t=e.mapValue.fields[Sf];return Ba(t)?Bi(t):t}function hs(e){const t=dn(e.mapValue.fields[Rf].timestampValue);return new de(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(t,n,r,s,i,a,l,c,f){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=f}}const yi="(default)";class fs{constructor(t,n){this.projectId=t,this.database=n||yi}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database===yi}isEqual(t){return t instanceof fs&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="__type__",qy="__max__",Ks={mapValue:{}},Hy="__vector__",na="value";function gn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ba(e)?4:Ky(e)?9007199254740991:zy(e)?10:11:ot()}function Me(e,t){if(e===t)return!0;const n=gn(e);if(n!==gn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return hs(e).isEqual(hs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=dn(s.timestampValue),l=dn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return pn(s.bytesValue).isEqual(pn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Dt(s.geoPointValue.latitude)===Dt(i.geoPointValue.latitude)&&Dt(s.geoPointValue.longitude)===Dt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Dt(s.integerValue)===Dt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Dt(s.doubleValue),l=Dt(i.doubleValue);return a===l?ea(a)===ea(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return ur(e.arrayValue.values||[],t.arrayValue.values||[],Me);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ju(a)!==Ju(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Me(a[c],l[c])))return!1;return!0}(e,t);default:return ot()}}function ds(e,t){return(e.values||[]).find(n=>Me(n,t))!==void 0}function cr(e,t){if(e===t)return 0;const n=gn(e),r=gn(t);if(n!==r)return lt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return lt(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Dt(i.integerValue||i.doubleValue),c=Dt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return Zu(e.timestampValue,t.timestampValue);case 4:return Zu(hs(e),hs(t));case 5:return ta(e.stringValue,t.stringValue);case 6:return function(i,a){const l=pn(i),c=pn(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let f=0;f<l.length&&f<c.length;f++){const d=lt(l[f],c[f]);if(d!==0)return d}return lt(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=lt(Dt(i.latitude),Dt(a.latitude));return l!==0?l:lt(Dt(i.longitude),Dt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return tc(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,c,f,d;const m=i.fields||{},A=a.fields||{},R=(l=m[na])===null||l===void 0?void 0:l.arrayValue,O=(c=A[na])===null||c===void 0?void 0:c.arrayValue,U=lt(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((d=O==null?void 0:O.values)===null||d===void 0?void 0:d.length)||0);return U!==0?U:tc(R,O)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===Ks.mapValue&&a===Ks.mapValue)return 0;if(i===Ks.mapValue)return 1;if(a===Ks.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let m=0;m<c.length&&m<d.length;++m){const A=ta(c[m],d[m]);if(A!==0)return A;const R=cr(l[c[m]],f[d[m]]);if(R!==0)return R}return lt(c.length,d.length)}(e.mapValue,t.mapValue);default:throw ot()}}function Zu(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return lt(e,t);const n=dn(e),r=dn(t),s=lt(n.seconds,r.seconds);return s!==0?s:lt(n.nanos,r.nanos)}function tc(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=cr(n[s],r[s]);if(i)return i}return lt(n.length,r.length)}function hr(e){return ra(e)}function ra(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=dn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return pn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return tt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ra(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ra(n.fields[a])}`;return s+"}"}(e.mapValue):ot()}function ni(e){switch(gn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Bi(e);return t?16+ni(t):16;case 5:return 2*e.stringValue.length;case 6:return pn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ni(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return ys(r.fields,(i,a)=>{s+=i.length+ni(a)}),s}(e.mapValue);default:throw ot()}}function sa(e){return!!e&&"integerValue"in e}function $a(e){return!!e&&"arrayValue"in e}function ec(e){return!!e&&"nullValue"in e}function nc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Co(e){return!!e&&"mapValue"in e}function zy(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[jy])===null||n===void 0?void 0:n.stringValue)===Hy}function Zr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ys(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Zr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Zr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ky(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===qy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.value=t}static empty(){return new De({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Co(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zr(n)}setAll(t){let n=he.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Zr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Co(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Me(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Co(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){ys(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new De(Zr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new re(t,0,nt.min(),nt.min(),nt.min(),De.empty(),0)}static newFoundDocument(t,n,r,s){return new re(t,1,n,nt.min(),r,s,0)}static newNoDocument(t,n){return new re(t,2,n,nt.min(),nt.min(),De.empty(),0)}static newUnknownDocument(t,n){return new re(t,3,n,nt.min(),nt.min(),De.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(nt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof re&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,n){this.position=t,this.inclusive=n}}function rc(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=tt.comparator(tt.fromName(a.referenceValue),n.key):r=cr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sc(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Me(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,n="asc"){this.field=t,this.dir=n}}function Gy(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{}class Bt extends Cf{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Qy(t,n,r):n==="array-contains"?new Yy(t,r):n==="in"?new Zy(t,r):n==="not-in"?new tv(t,r):n==="array-contains-any"?new ev(t,r):new Bt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Xy(t,r):new Jy(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(cr(n,this.value)):n!==null&&gn(this.value)===gn(n)&&this.matchesComparison(cr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ot()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ke extends Cf{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new ke(t,n)}matches(t){return Pf(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Pf(e){return e.op==="and"}function Vf(e){return Wy(e)&&Pf(e)}function Wy(e){for(const t of e.filters)if(t instanceof ke)return!1;return!0}function ia(e){if(e instanceof Bt)return e.field.canonicalString()+e.op.toString()+hr(e.value);if(Vf(e))return e.filters.map(t=>ia(t)).join(",");{const t=e.filters.map(n=>ia(n)).join(",");return`${e.op}(${t})`}}function Df(e,t){return e instanceof Bt?function(r,s){return s instanceof Bt&&r.op===s.op&&r.field.isEqual(s.field)&&Me(r.value,s.value)}(e,t):e instanceof ke?function(r,s){return s instanceof ke&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Df(a,s.filters[l]),!0):!1}(e,t):void ot()}function xf(e){return e instanceof Bt?function(n){return`${n.field.canonicalString()} ${n.op} ${hr(n.value)}`}(e):e instanceof ke?function(n){return n.op.toString()+" {"+n.getFilters().map(xf).join(" ,")+"}"}(e):"Filter"}class Qy extends Bt{constructor(t,n,r){super(t,n,r),this.key=tt.fromName(r.referenceValue)}matches(t){const n=tt.comparator(t.key,this.key);return this.matchesComparison(n)}}class Xy extends Bt{constructor(t,n){super(t,"in",n),this.keys=Nf("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Jy extends Bt{constructor(t,n){super(t,"not-in",n),this.keys=Nf("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Nf(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>tt.fromName(r.referenceValue))}class Yy extends Bt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return $a(n)&&ds(n.arrayValue,this.value)}}class Zy extends Bt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ds(this.value.arrayValue,n)}}class tv extends Bt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ds(this.value.arrayValue,n)}}class ev extends Bt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!$a(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ds(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function ic(e,t=null,n=[],r=[],s=null,i=null,a=null){return new nv(e,t,n,r,s,i,a)}function ja(e){const t=ft(e);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ia(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ui(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>hr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>hr(r)).join(",")),t.le=n}return t.le}function qa(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Gy(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Df(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!sc(e.startAt,t.startAt)&&sc(e.endAt,t.endAt)}function oa(e){return tt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function rv(e,t,n,r,s,i,a,l){return new $i(e,t,n,r,s,i,a,l)}function Of(e){return new $i(e)}function oc(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function sv(e){return e.collectionGroup!==null}function ts(e){const t=ft(e);if(t.he===null){t.he=[];const n=new Set;for(const i of t.explicitOrderBy)t.he.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new $t(he.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.he.push(new Ei(i,r))}),n.has(he.keyField().canonicalString())||t.he.push(new Ei(he.keyField(),r))}return t.he}function Ne(e){const t=ft(e);return t.Pe||(t.Pe=iv(t,ts(e))),t.Pe}function iv(e,t){if(e.limitType==="F")return ic(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ei(s.field,i)});const n=e.endAt?new vi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new vi(e.startAt.position,e.startAt.inclusive):null;return ic(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function aa(e,t,n){return new $i(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ji(e,t){return qa(Ne(e),Ne(t))&&e.limitType===t.limitType}function Mf(e){return`${ja(Ne(e))}|lt:${e.limitType}`}function Xn(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>xf(s)).join(", ")}]`),Ui(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>hr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>hr(s)).join(",")),`Target(${r})`}(Ne(e))}; limitType=${e.limitType})`}function qi(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):tt.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of ts(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const f=rc(a,l,c);return a.inclusive?f<=0:f<0}(r.startAt,ts(r),s)||r.endAt&&!function(a,l,c){const f=rc(a,l,c);return a.inclusive?f>=0:f>0}(r.endAt,ts(r),s))}(e,t)}function ov(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function kf(e){return(t,n)=>{let r=!1;for(const s of ts(e)){const i=av(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function av(e,t,n){const r=e.field.isKeyField()?tt.comparator(t.key,n.key):function(i,a,l){const c=a.data.field(i),f=l.data.field(i);return c!==null&&f!==null?cr(c,f):ot()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ys(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Uy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=new Nt(tt.comparator);function mn(){return lv}const Lf=new Nt(tt.comparator);function Hr(...e){let t=Lf;for(const n of e)t=t.insert(n.key,n);return t}function uv(e){let t=Lf;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function xn(){return es()}function Ff(){return es()}function es(){return new $n(e=>e.toString(),(e,t)=>e.isEqual(t))}const cv=new $t(tt.comparator);function dt(...e){let t=cv;for(const n of e)t=t.add(n);return t}const hv=new $t(lt);function fv(){return hv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(t)?"-0":t}}function pv(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this._=void 0}}function gv(e,t,n){return e instanceof la?function(s,i){const a={fields:{[bf]:{stringValue:Af},[Rf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ba(i)&&(i=Bi(i)),i&&(a.fields[Sf]=i),{mapValue:a}}(n,t):e instanceof Ti?Uf(e,t):e instanceof Ii?Bf(e,t):function(s,i){const a=_v(s,i),l=ac(a)+ac(s.Ie);return sa(a)&&sa(s.Ie)?pv(l):dv(s.serializer,l)}(e,t)}function mv(e,t,n){return e instanceof Ti?Uf(e,t):e instanceof Ii?Bf(e,t):n}function _v(e,t){return e instanceof ua?function(r){return sa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class la extends Hi{}class Ti extends Hi{constructor(t){super(),this.elements=t}}function Uf(e,t){const n=$f(t);for(const r of e.elements)n.some(s=>Me(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ii extends Hi{constructor(t){super(),this.elements=t}}function Bf(e,t){let n=$f(t);for(const r of e.elements)n=n.filter(s=>!Me(s,r));return{arrayValue:{values:n}}}class ua extends Hi{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function ac(e){return Dt(e.integerValue||e.doubleValue)}function $f(e){return $a(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function yv(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ti&&s instanceof Ti||r instanceof Ii&&s instanceof Ii?ur(r.elements,s.elements,Me):r instanceof ua&&s instanceof ua?Me(r.Ie,s.Ie):r instanceof la&&s instanceof la}(e.transform,t.transform)}class kn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new kn}static exists(t){return new kn(void 0,t)}static updateTime(t){return new kn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ri(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ha{}function jf(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ev(e.key,kn.none()):new za(e.key,e.data,kn.none());{const n=e.data,r=De.empty();let s=new $t(he.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new zi(e.key,r,new nn(s.toArray()),kn.none())}}function vv(e,t,n){e instanceof za?function(s,i,a){const l=s.value.clone(),c=uc(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof zi?function(s,i,a){if(!ri(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=uc(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(qf(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function ns(e,t,n,r){return e instanceof za?function(i,a,l,c){if(!ri(i.precondition,a))return l;const f=i.value.clone(),d=cc(i.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(e,t,n,r):e instanceof zi?function(i,a,l,c){if(!ri(i.precondition,a))return l;const f=cc(i.fieldTransforms,c,a),d=a.data;return d.setAll(qf(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(e,t,n,r):function(i,a,l){return ri(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function lc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ur(r,s,(i,a)=>yv(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class za extends Ha{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zi extends Ha{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qf(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function uc(e,t,n){const r=new Map;St(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,mv(a,l,n[s]))}return r}function cc(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,gv(i,a,t))}return r}class Ev extends Ha{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&vv(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ns(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ns(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Ff();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=jf(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(nt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),dt())}isEqual(t){return this.batchId===t.batchId&&ur(this.mutations,t.mutations,(n,r)=>lc(n,r))&&ur(this.baseMutations,t.baseMutations,(n,r)=>lc(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot,ct;function Hf(e){if(e===void 0)return Ke("GRPC error has no .code"),B.UNKNOWN;switch(e){case Ot.OK:return B.OK;case Ot.CANCELLED:return B.CANCELLED;case Ot.UNKNOWN:return B.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return B.INTERNAL;case Ot.UNAVAILABLE:return B.UNAVAILABLE;case Ot.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ot.NOT_FOUND:return B.NOT_FOUND;case Ot.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ot.ABORTED:return B.ABORTED;case Ot.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ot.DATA_LOSS:return B.DATA_LOSS;default:return ot()}}(ct=Ot||(Ot={}))[ct.OK=0]="OK",ct[ct.CANCELLED=1]="CANCELLED",ct[ct.UNKNOWN=2]="UNKNOWN",ct[ct.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ct[ct.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ct[ct.NOT_FOUND=5]="NOT_FOUND",ct[ct.ALREADY_EXISTS=6]="ALREADY_EXISTS",ct[ct.PERMISSION_DENIED=7]="PERMISSION_DENIED",ct[ct.UNAUTHENTICATED=16]="UNAUTHENTICATED",ct[ct.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ct[ct.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ct[ct.ABORTED=10]="ABORTED",ct[ct.OUT_OF_RANGE=11]="OUT_OF_RANGE",ct[ct.UNIMPLEMENTED=12]="UNIMPLEMENTED",ct[ct.INTERNAL=13]="INTERNAL",ct[ct.UNAVAILABLE=14]="UNAVAILABLE",ct[ct.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=new un([4294967295,4294967295],0);function hc(e){const t=Tf().encode(e),n=new pf;return n.update(t),new Uint8Array(n.digest())}function fc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new un([n,r],0),new un([s,i],0)]}class Ka{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zr(`Invalid padding: ${n}`);if(r<0)throw new zr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new zr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new zr(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=un.fromNumber(this.Ee)}Ae(t,n,r){let s=t.add(n.multiply(un.fromNumber(r)));return s.compare(Av)===1&&(s=new un([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=hc(t),[r,s]=fc(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Ka(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ee===0)return;const n=hc(t),[r,s]=fc(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,vs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Ki(nt.min(),s,new Nt(lt),mn(),dt())}}class vs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new vs(r,n,dt(),dt(),dt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,n,r,s){this.me=t,this.removedTargetIds=n,this.key=r,this.fe=s}}class zf{constructor(t,n){this.targetId=t,this.ge=n}}class Kf{constructor(t,n,r=Wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class dc{constructor(){this.pe=0,this.ye=pc(),this.we=Wt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=dt(),n=dt(),r=dt();return this.ye.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ot()}}),new vs(this.we,this.Se,t,n,r)}Me(){this.be=!1,this.ye=pc()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,St(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class bv{constructor(t){this.ke=t,this.qe=new Map,this.Qe=mn(),this.$e=Gs(),this.Ue=Gs(),this.Ke=new Nt(lt)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(t.resumeToken));break;default:ot()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){const n=t.targetId,r=t.ge.count,s=this.Xe(n);if(s){const i=s.target;if(oa(i))if(r===0){const a=new tt(i.path);this.ze(n,a,re.newNoDocument(a,nt.min()))}else St(r===1);else{const a=this.et(n);if(a!==r){const l=this.tt(t),c=l?this.nt(l,t,a):1;if(c!==0){this.Ye(n);const f=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,f)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=pn(r).toUint8Array()}catch(c){if(c instanceof wf)return lr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ka(a,s,i)}catch(c){return lr(c instanceof zr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(t,n,r){return n.ge.count===r-this.st(t,n.targetId)?0:2}st(t,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(t){const n=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&oa(l.target)){const c=new tt(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,re.newNoDocument(c,t))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=dt();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const f=this.Xe(c);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(t));const s=new Ki(t,n,this.Ke,this.Qe,r);return this.Qe=mn(),this.$e=Gs(),this.Ue=Gs(),this.Ke=new Nt(lt),s}Ge(t,n){if(!this.Je(t))return;const r=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),this.Ue=this.Ue.insert(n,this.ct(n).add(t)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new dc,this.qe.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new $t(lt),this.Ue=this.Ue.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new $t(lt),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||H("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new dc),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function Gs(){return new Nt(tt.comparator)}function pc(){return new Nt(tt.comparator)}const Sv={asc:"ASCENDING",desc:"DESCENDING"},Rv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cv={and:"AND",or:"OR"};class Pv{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ca(e,t){return e.useProto3Json||Ui(t)?t:{value:t}}function Vv(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Dv(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sr(e){return St(!!e),nt.fromTimestamp(function(n){const r=dn(n);return new de(r.seconds,r.nanos)}(e))}function xv(e,t){return ha(e,t).canonicalString()}function ha(e,t){const n=function(s){return new Pt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Gf(e){const t=Pt.fromString(e);return St(Yf(t)),t}function Po(e,t){const n=Gf(t);if(n.get(1)!==e.databaseId.projectId)throw new X(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new X(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new tt(Qf(n))}function Wf(e,t){return xv(e.databaseId,t)}function Nv(e){const t=Gf(e);return t.length===4?Pt.emptyPath():Qf(t)}function gc(e){return new Pt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Qf(e){return St(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ov(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:ot()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(St(d===void 0||typeof d=="string"),Wt.fromBase64String(d||"")):(St(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Wt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const d=f.code===void 0?B.UNKNOWN:Hf(f.code);return new X(d,f.message||"")}(a);n=new Kf(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Po(e,r.document.name),i=sr(r.document.updateTime),a=r.document.createTime?sr(r.document.createTime):nt.min(),l=new De({mapValue:{fields:r.document.fields}}),c=re.newFoundDocument(s,i,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];n=new si(f,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Po(e,r.document),i=r.readTime?sr(r.readTime):nt.min(),a=re.newNoDocument(s,i),l=r.removedTargetIds||[];n=new si([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Po(e,r.document),i=r.removedTargetIds||[];n=new si([],i,s,null)}else{if(!("filter"in t))return ot();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new wv(s,i),l=r.targetId;n=new zf(l,a)}}return n}function Mv(e,t){return{documents:[Wf(e,t.path)]}}function kv(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Wf(e,s);const i=function(f){if(f.length!==0)return Jf(ke.create(f,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(A){return{field:Jn(A.field),direction:Uv(A.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=ca(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:n,parent:s}}function Lv(e){let t=Nv(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){St(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(m){const A=Xf(m);return A instanceof ke&&Vf(A)?A.getFilters():[A]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(A=>function(O){return new Ei(Yn(O.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(A))}(n.orderBy));let l=null;n.limit&&(l=function(m){let A;return A=typeof m=="object"?m.value:m,Ui(A)?null:A}(n.limit));let c=null;n.startAt&&(c=function(m){const A=!!m.before,R=m.values||[];return new vi(R,A)}(n.startAt));let f=null;return n.endAt&&(f=function(m){const A=!m.before,R=m.values||[];return new vi(R,A)}(n.endAt)),rv(t,s,a,i,l,"F",c,f)}function Fv(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ot()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Xf(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yn(n.unaryFilter.field);return Bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yn(n.unaryFilter.field);return Bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yn(n.unaryFilter.field);return Bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yn(n.unaryFilter.field);return Bt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ot()}}(e):e.fieldFilter!==void 0?function(n){return Bt.create(Yn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ot()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ke.create(n.compositeFilter.filters.map(r=>Xf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ot()}}(n.compositeFilter.op))}(e):ot()}function Uv(e){return Sv[e]}function Bv(e){return Rv[e]}function $v(e){return Cv[e]}function Jn(e){return{fieldPath:e.canonicalString()}}function Yn(e){return he.fromServerFormat(e.fieldPath)}function Jf(e){return e instanceof Bt?function(n){if(n.op==="=="){if(nc(n.value))return{unaryFilter:{field:Jn(n.field),op:"IS_NAN"}};if(ec(n.value))return{unaryFilter:{field:Jn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nc(n.value))return{unaryFilter:{field:Jn(n.field),op:"IS_NOT_NAN"}};if(ec(n.value))return{unaryFilter:{field:Jn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(n.field),op:Bv(n.op),value:n.value}}}(e):e instanceof ke?function(n){const r=n.getFilters().map(s=>Jf(s));return r.length===1?r[0]:{compositeFilter:{op:$v(n.op),filters:r}}}(e):ot()}function Yf(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,n,r,s,i=nt.min(),a=nt.min(),l=Wt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new rn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(t){this.Tt=t}}function qv(e){const t=Lv({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?aa(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.Tn=new zv}addToCollectionParentIndex(t,n){return this.Tn.add(n),V.resolve()}getCollectionParents(t,n){return V.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return V.resolve()}deleteFieldIndex(t,n){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,n){return V.resolve()}getDocumentsMatchingTarget(t,n){return V.resolve(null)}getIndexType(t,n){return V.resolve(0)}getFieldIndexes(t,n){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,n){return V.resolve(fn.min())}getMinOffsetFromCollectionGroup(t,n){return V.resolve(fn.min())}updateCollectionGroup(t,n,r){return V.resolve()}updateIndexEntries(t,n){return V.resolve()}}class zv{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new $t(Pt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new $t(Pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zf=41943040;class fe{static withCacheSize(t){return new fe(t,fe.DEFAULT_COLLECTION_PERCENTILE,fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe.DEFAULT_COLLECTION_PERCENTILE=10,fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fe.DEFAULT=new fe(Zf,fe.DEFAULT_COLLECTION_PERCENTILE,fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fe.DISABLED=new fe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new fr(0)}static Kn(){return new fr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="LruGarbageCollector",Kv=1048576;function yc([e,t],[n,r]){const s=lt(e,n);return s===0?lt(t,r):s}class Gv{constructor(t){this.Hn=t,this.buffer=new $t(yc),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();yc(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Wv{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){H(_c,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){yr(n)?H(_c,"Ignoring IndexedDB error during garbage collection: ",n):await Li(n)}await this.er(3e5)})}}class Qv{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return V.resolve(Fi.ae);const r=new Gv(n);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.tr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(mc)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mc):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let r,s,i,a,l,c,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(t,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(t,r,n))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(m=>(f=Date.now(),Qn()<=ht.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(f-c)+`ms
Total Duration: ${f-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function Xv(e,t){return new Qv(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.changes=new $n(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,re.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ns(r.mutation,s,nn.empty(),de.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,dt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=dt()){const s=xn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=Hr();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=xn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,dt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=mn();const a=es(),l=function(){return es()}();return n.forEach((c,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof zi)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),ns(d.mutation,f,d.mutation.getFieldMask(),de.now())):a.set(f.key,nn.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>{var m;return l.set(f,new Yv(d,(m=a.get(f))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(t,n){const r=es();let s=new Nt((a,l)=>a-l),i=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const f=n.get(c);if(f===null)return;let d=r.get(c)||nn.empty();d=l.applyToLocalView(f,d),r.set(c,d);const m=(s.get(l.batchId)||dt()).add(c);s=s.insert(l.batchId,m)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),f=c.key,d=c.value,m=Ff();d.forEach(A=>{if(!i.has(A)){const R=jf(n.get(A),r.get(A));R!==null&&m.set(A,R),i=i.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,m))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return tt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):sv(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):V.resolve(xn());let l=cs,c=i;return a.next(f=>V.forEach(f,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(t,d).next(A=>{c=c.insert(d,A)}))).next(()=>this.populateOverlays(t,f,i)).next(()=>this.computeViews(t,c,f,dt())).next(d=>({batchId:l,changes:uv(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new tt(n)).next(r=>{let s=Hr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=Hr();return this.indexManager.getCollectionParents(t,i).next(l=>V.forEach(l,c=>{const f=function(m,A){return new $i(A,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(d=>{d.forEach((m,A)=>{a=a.insert(m,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,re.newInvalidDocument(d)))});let l=Hr();return a.forEach((c,f)=>{const d=i.get(c);d!==void 0&&ns(d.mutation,f,nn.empty(),de.now()),qi(n,f)&&(l=l.insert(c,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return V.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:sr(s.createTime)}}(n)),V.resolve()}getNamedQuery(t,n){return V.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:qv(s.bundledQuery),readTime:sr(s.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.overlays=new Nt(tt.comparator),this.Rr=new Map}getOverlay(t,n){return V.resolve(this.overlays.get(n))}getOverlays(t,n){const r=xn();return V.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.Et(t,n,i)}),V.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),V.resolve()}getOverlaysForCollection(t,n,r){const s=xn(),i=n.length+1,a=new tt(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,f=c.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Nt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=xn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=xn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=s)););return V.resolve(l)}Et(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Iv(n,r));let i=this.Rr.get(n);i===void 0&&(i=dt(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.Vr=new $t(jt.mr),this.gr=new $t(jt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const r=new jt(t,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.wr(new jt(t,n))}Sr(t,n){t.forEach(r=>this.removeReference(r,n))}br(t){const n=new tt(new Pt([])),r=new jt(n,t),s=new jt(n,t+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new tt(new Pt([])),r=new jt(n,t),s=new jt(n,t+1);let i=dt();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new jt(t,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class jt{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return tt.comparator(t.key,n.key)||lt(t.Cr,n.Cr)}static pr(t,n){return lt(t.Cr,n.Cr)||tt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new $t(jt.mr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Tv(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new jt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,n){return V.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?ky:this.Fr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new jt(n,0),s=new jt(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new $t(lt);return n.forEach(s=>{const i=new jt(s,0),a=new jt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),V.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;tt.isDocumentKey(i)||(i=i.child(""));const a=new jt(new tt(i),0);let l=new $t(lt);return this.Mr.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(c.Cr)),!0)},a),V.resolve(this.Br(l))}Br(t){const n=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){St(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return V.forEach(n.mutations,s=>{const i=new jt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,n){const r=new jt(n,0),s=this.Mr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t){this.kr=t,this.docs=function(){return new Nt(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():re.newInvalidDocument(n))}getEntries(t,n){let r=mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():re.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=mn();const a=n.path,l=new tt(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||xy(Dy(d),r)<=0||(s.has(d.key)||qi(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(t,n,r,s){ot()}qr(t,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new iE(this)}getSize(t){return V.resolve(this.size)}}class iE extends Jv{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),V.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(t){this.persistence=t,this.Qr=new $n(n=>ja(n),qa),this.lastRemoteSnapshotVersion=nt.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ga,this.targetCount=0,this.Kr=fr.Un()}forEachTarget(t,n){return this.Qr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),V.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Kr=new fr(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,V.resolve()}updateTargetData(t,n){return this.zn(n),V.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,n){const r=this.Qr.get(n)||null;return V.resolve(r)}addMatchingKeys(t,n,r){return this.Ur.yr(n,r),V.resolve()}removeMatchingKeys(t,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ur.br(n),V.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ur.vr(n);return V.resolve(r)}containsKey(t,n){return V.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new Fi(0),this.zr=!1,this.zr=!0,this.jr=new nE,this.referenceDelegate=t(this),this.Hr=new oE(this),this.indexManager=new Hv,this.remoteDocumentCache=function(s){return new sE(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new jv(n),this.Yr=new tE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new eE,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Wr[t.toKey()];return r||(r=new rE(n,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,r){H("MemoryPersistence","Starting transaction:",t);const s=new aE(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(t,n){return V.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,n)))}}class aE extends Oy{constructor(t){super(),this.currentSequenceNumber=t}}class Wa{constructor(t){this.persistence=t,this.ti=new Ga,this.ni=null}static ri(t){return new Wa(t)}get ii(){if(this.ni)return this.ni;throw ot()}addReference(t,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),V.resolve()}removeReference(t,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),V.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,r=>{const s=tt.fromPath(r);return this.si(t,s).next(i=>{i||n.removeEntry(s,nt.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return V.or([()=>V.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class wi{constructor(t,n){this.persistence=t,this.oi=new $n(r=>Ly(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Xv(this,n)}static ri(t,n){return new wi(t,n)}Zr(){}Xr(t){return V.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}sr(t){let n=0;return this.rr(t,r=>{n++}).next(()=>n)}rr(t,n){return V.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,n).next(l=>{l||(r++,i.removeEntry(a,nt.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),V.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),V.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=ni(t.data.value)),n}ar(t,n,r){return V.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.oi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(t,n){let r=dt(),s=dt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qa(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return e_()?8:My(Zm())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.rs(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new lE;return this._s(t,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(t,n,a,l.size)})}).next(()=>i.result)}us(t,n,r,s){return r.documentReadCount<this.es?(Qn()<=ht.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Xn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(Qn()<=ht.DEBUG&&H("QueryEngine","Query:",Xn(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Qn()<=ht.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Xn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ne(n))):V.resolve())}rs(t,n){if(oc(n))return V.resolve(null);let r=Ne(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=aa(n,null,"F"),r=Ne(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=dt(...i);return this.ns.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const f=this.cs(n,l);return this.ls(n,f,a,c.readTime)?this.rs(t,aa(n,null,"F")):this.hs(t,f,n,c)}))})))}ss(t,n,r,s){return oc(n)||s.isEqual(nt.min())?V.resolve(null):this.ns.getDocuments(t,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?V.resolve(null):(Qn()<=ht.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xn(n)),this.hs(t,a,n,Vy(s,cs)).next(l=>l))})}cs(t,n){let r=new $t(kf(t));return n.forEach((s,i)=>{qi(t,i)&&(r=r.add(i))}),r}ls(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(t,n,r){return Qn()<=ht.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Xn(n)),this.ns.getDocumentsMatchingQuery(t,n,fn.min(),r)}hs(t,n,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="LocalStore",cE=3e8;class hE{constructor(t,n,r,s){this.persistence=t,this.Ps=n,this.serializer=s,this.Ts=new Nt(lt),this.Is=new $n(i=>ja(i),qa),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Zv(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function fE(e,t,n,r){return new hE(e,t,n,r)}async function ed(e,t){const n=ft(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=dt();for(const f of s){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:l}))})})}function nd(e){const t=ft(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function dE(e,t){const n=ft(e),r=t.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];t.targetChanges.forEach((d,m)=>{const A=s.get(m);if(!A)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,m).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,m)));let R=A.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(m)!==null?R=R.withResumeToken(Wt.EMPTY_BYTE_STRING,nt.min()).withLastLimboFreeSnapshotVersion(nt.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(m,R),function(U,$,G){return U.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=cE?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(A,R,d)&&l.push(n.Hr.updateTargetData(i,R))});let c=mn(),f=dt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(pE(i,a,t.documentUpdates).next(d=>{c=d.Vs,f=d.fs})),!r.isEqual(nt.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(m=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,f)).next(()=>c)}).then(i=>(n.Ts=s,i))}function pE(e,t,n){let r=dt(),s=dt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=mn();return n.forEach((l,c)=>{const f=i.get(l);c.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(nt.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!f.isValidDocument()||c.version.compareTo(f.version)>0||c.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):H(Xa,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",c.version)}),{Vs:a,fs:s}})}function gE(e,t){const n=ft(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,t).next(i=>i?(s=i,V.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new rn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(t,r.targetId)),r})}async function fa(e,t,n){const r=ft(e),s=r.Ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!yr(a))throw a;H(Xa,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function vc(e,t,n){const r=ft(e);let s=nt.min(),i=dt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,f,d){const m=ft(c),A=m.Is.get(d);return A!==void 0?V.resolve(m.Ts.get(A)):m.Hr.getTargetData(f,d)}(r,a,Ne(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,n?s:nt.min(),n?i:dt())).next(l=>(mE(r,ov(t),l),{documents:l,gs:i})))}function mE(e,t,n){let r=e.Es.get(t)||nt.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Es.set(t,r)}class Ec{constructor(){this.activeTargetIds=fv()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _E{constructor(){this.ho=new Ec,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,r){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Ec,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="ConnectivityMonitor";class Ic{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){H(Tc,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){H(Tc,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws=null;function da(){return Ws===null?Ws=function(){return 268435456+Math.round(2147483648*Math.random())}():Ws++,"0x"+Ws.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="RestConnection",vE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class EE{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===yi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,n,r,s,i){const a=da(),l=this.bo(t,n.toUriEncodedString());H(Vo,`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(t,l,c,r).then(f=>(H(Vo,`Received RPC '${t}' ${a}: `,f),f),f=>{throw lr(Vo,`RPC '${t}' ${a} failed with error: `,f,"url: ",l,"request:",r),f})}Co(t,n,r,s,i,a){return this.So(t,n,r,s,i)}Do(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_r}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}bo(t,n){const r=vE[t];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="WebChannelConnection";class IE extends EE{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,r,s){const i=da();return new Promise((a,l)=>{const c=new gf;c.setWithCredentials(!0),c.listenOnce(mf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ei.NO_ERROR:const d=c.getResponseJson();H(Zt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case ei.TIMEOUT:H(Zt,`RPC '${t}' ${i} timed out`),l(new X(B.DEADLINE_EXCEEDED,"Request time out"));break;case ei.HTTP_ERROR:const m=c.getStatus();if(H(Zt,`RPC '${t}' ${i} failed with status:`,m,"response text:",c.getResponseText()),m>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const O=function($){const G=$.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(G)>=0?G:B.UNKNOWN}(R.status);l(new X(O,R.message))}else l(new X(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new X(B.UNAVAILABLE,"Connection failed."));break;default:ot()}}finally{H(Zt,`RPC '${t}' ${i} completed.`)}});const f=JSON.stringify(s);H(Zt,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",f,r,15)})}Wo(t,n,r){const s=da(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=vf(),l=yf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");H(Zt,`Creating RPC '${t}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);let A=!1,R=!1;const O=new TE({Fo:$=>{R?H(Zt,`Not sending because RPC '${t}' stream ${s} is closed:`,$):(A||(H(Zt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),A=!0),H(Zt,`RPC '${t}' stream ${s} sending:`,$),m.send($))},Mo:()=>m.close()}),U=($,G,Y)=>{$.listen(G,J=>{try{Y(J)}catch(z){setTimeout(()=>{throw z},0)}})};return U(m,qr.EventType.OPEN,()=>{R||(H(Zt,`RPC '${t}' stream ${s} transport opened.`),O.Qo())}),U(m,qr.EventType.CLOSE,()=>{R||(R=!0,H(Zt,`RPC '${t}' stream ${s} transport closed`),O.Uo())}),U(m,qr.EventType.ERROR,$=>{R||(R=!0,lr(Zt,`RPC '${t}' stream ${s} transport errored:`,$),O.Uo(new X(B.UNAVAILABLE,"The operation could not be completed")))}),U(m,qr.EventType.MESSAGE,$=>{var G;if(!R){const Y=$.data[0];St(!!Y);const J=Y,z=(J==null?void 0:J.error)||((G=J[0])===null||G===void 0?void 0:G.error);if(z){H(Zt,`RPC '${t}' stream ${s} received error:`,z);const at=z.status;let yt=function(_){const E=Ot[_];if(E!==void 0)return Hf(E)}(at),I=z.message;yt===void 0&&(yt=B.INTERNAL,I="Unknown error status: "+at+" with message "+z.message),R=!0,O.Uo(new X(yt,I)),m.close()}else H(Zt,`RPC '${t}' stream ${s} received:`,Y),O.Ko(Y)}}),U(l,_f.STAT_EVENT,$=>{$.stat===Zo.PROXY?H(Zt,`RPC '${t}' stream ${s} detected buffering proxy`):$.stat===Zo.NOPROXY&&H(Zt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.$o()},0),O}}function Do(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(e){return new Pv(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Ti=t,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="PersistentStream";class wE{constructor(t,n,r,s,i,a,l,c){this.Ti=t,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new sd(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{t(()=>{const s=new X(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,n){const r=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return H(wc,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(H(wc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AE extends wE{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=Ov(this.serializer,t),r=function(i){if(!("targetChange"in i))return nt.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?nt.min():a.readTime?sr(a.readTime):nt.min()}(t);return this.listener.p_(n,r)}y_(t){const n={};n.database=gc(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=oa(c)?{documents:Mv(i,c)}:{query:kv(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Dv(i,a.resumeToken);const f=ca(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(nt.min())>0){l.readTime=Vv(i,a.snapshotVersion.toTimestamp());const f=ca(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=Fv(this.serializer,t);r&&(n.labels=r),this.I_(n)}w_(t){const n={};n.database=gc(this.serializer),n.removeTarget=t,this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{}class SE extends bE{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new X(B.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(t,ha(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(B.UNKNOWN,i.toString())})}Co(t,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(t,ha(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new X(B.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class RE{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ke(n),this.N_=!1):H("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="RemoteStore";class CE{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Ts(this)&&(H(dr,"Restarting streams for network reachability change."),await async function(c){const f=ft(c);f.W_.add(4),await Es(f),f.j_.set("Unknown"),f.W_.delete(4),await Gi(f)}(this))})}),this.j_=new RE(r,s)}}async function Gi(e){if(Ts(e))for(const t of e.G_)await t(!0)}async function Es(e){for(const t of e.G_)await t(!1)}function id(e,t){const n=ft(e);n.K_.has(t.targetId)||(n.K_.set(t.targetId,t),tl(n)?Za(n):vr(n).c_()&&Ya(n,t))}function Ja(e,t){const n=ft(e),r=vr(n);n.K_.delete(t),r.c_()&&od(n,t),n.K_.size===0&&(r.c_()?r.P_():Ts(n)&&n.j_.set("Unknown"))}function Ya(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}vr(e).y_(t)}function od(e,t){e.H_.Ne(t),vr(e).w_(t)}function Za(e){e.H_=new bv({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.K_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),vr(e).start(),e.j_.B_()}function tl(e){return Ts(e)&&!vr(e).u_()&&e.K_.size>0}function Ts(e){return ft(e).W_.size===0}function ad(e){e.H_=void 0}async function PE(e){e.j_.set("Online")}async function VE(e){e.K_.forEach((t,n)=>{Ya(e,t)})}async function DE(e,t){ad(e),tl(e)?(e.j_.q_(t),Za(e)):e.j_.set("Unknown")}async function xE(e,t,n){if(e.j_.set("Online"),t instanceof Kf&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(e,t)}catch(r){H(dr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ac(e,r)}else if(t instanceof si?e.H_.We(t):t instanceof zf?e.H_.Ze(t):e.H_.je(t),!n.isEqual(nt.min()))try{const r=await nd(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.K_.get(f);d&&i.K_.set(f,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,f)=>{const d=i.K_.get(c);if(!d)return;i.K_.set(c,d.withResumeToken(Wt.EMPTY_BYTE_STRING,d.snapshotVersion)),od(i,c);const m=new rn(d.target,c,f,d.sequenceNumber);Ya(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){H(dr,"Failed to raise snapshot:",r),await Ac(e,r)}}async function Ac(e,t,n){if(!yr(t))throw t;e.W_.add(1),await Es(e),e.j_.set("Offline"),n||(n=()=>nd(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{H(dr,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await Gi(e)})}async function bc(e,t){const n=ft(e);n.asyncQueue.verifyOperationInProgress(),H(dr,"RemoteStore received new credentials");const r=Ts(n);n.W_.add(3),await Es(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Gi(n)}async function NE(e,t){const n=ft(e);t?(n.W_.delete(2),await Gi(n)):t||(n.W_.add(2),await Es(n),n.j_.set("Unknown"))}function vr(e){return e.J_||(e.J_=function(n,r,s){const i=ft(n);return i.M_(),new AE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:PE.bind(null,e),No:VE.bind(null,e),Lo:DE.bind(null,e),p_:xE.bind(null,e)}),e.G_.push(async t=>{t?(e.J_.h_(),tl(e)?Za(e):e.j_.set("Unknown")):(await e.J_.stop(),ad(e))})),e.J_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new el(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(B.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ld(e,t){if(Ke("AsyncQueue",`${t}: ${e}`),yr(e))return new X(B.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{static emptySet(t){return new ir(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||tt.comparator(n.key,r.key):(n,r)=>tt.comparator(n.key,r.key),this.keyedMap=Hr(),this.sortedSet=new Nt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ir)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ir;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.Z_=new Nt(tt.comparator)}track(t){const n=t.doc.key,r=this.Z_.get(n);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(n):t.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):ot():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,r)=>{t.push(r)}),t}}class pr{constructor(t,n,r,s,i,a,l,c,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=f}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new pr(t,n,ir.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ji(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class ME{constructor(){this.queries=Rc(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ft(n),i=s.queries;s.queries=Rc(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new X(B.ABORTED,"Firestore shutting down"))}}function Rc(){return new $n(e=>Mf(e),ji)}async function kE(e,t){const n=ft(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.na()&&t.ra()&&(r=2):(i=new OE,r=t.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=ld(a,`Initialization of query '${Xn(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.ta.push(t),t.sa(n.onlineState),i.ea&&t.oa(i.ea)&&nl(n)}async function LE(e,t){const n=ft(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(t);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=t.ra()?0:1:!i.na()&&t.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function FE(e,t){const n=ft(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&nl(n)}function UE(e,t,n){const r=ft(e),s=r.queries.get(t);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(t)}function nl(e){e.ia.forEach(t=>{t.next()})}var pa,Cc;(Cc=pa||(pa={}))._a="default",Cc.Cache="cache";class BE{constructor(t,n,r){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new pr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=pr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==pa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t){this.key=t}}class cd{constructor(t){this.key=t}}class $E{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=dt(),this.mutatedKeys=dt(),this.ya=kf(t),this.wa=new ir(this.ya)}get Sa(){return this.fa}ba(t,n){const r=n?n.Da:new Sc,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,m)=>{const A=s.get(d),R=qi(this.query,m)?m:null,O=!!A&&this.mutatedKeys.has(A.key),U=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let $=!1;A&&R?A.data.isEqual(R.data)?O!==U&&(r.track({type:3,doc:R}),$=!0):this.va(A,R)||(r.track({type:2,doc:R}),$=!0,(c&&this.ya(R,c)>0||f&&this.ya(R,f)<0)&&(l=!0)):!A&&R?(r.track({type:0,doc:R}),$=!0):A&&!R&&(r.track({type:1,doc:A}),$=!0,(c||f)&&(l=!0)),$&&(R?(a=a.add(R),i=U?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((d,m)=>function(R,O){const U=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ot()}};return U(R)-U(O)}(d.type,m.type)||this.ya(d.doc,m.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,f=c!==this.ga;return this.ga=c,a.length!==0||f?{snapshot:new pr(this.query,t.wa,i,a,t.mutatedKeys,c===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Sc,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=dt(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return t.forEach(r=>{this.pa.has(r)||n.push(new cd(r))}),this.pa.forEach(r=>{t.has(r)||n.push(new ud(r))}),n}Oa(t){this.fa=t.gs,this.pa=dt();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return pr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const rl="SyncEngine";class jE{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class qE{constructor(t){this.key=t,this.Ba=!1}}class HE{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new $n(l=>Mf(l),ji),this.qa=new Map,this.Qa=new Set,this.$a=new Nt(tt.comparator),this.Ua=new Map,this.Ka=new Ga,this.Wa={},this.Ga=new Map,this.za=fr.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function zE(e,t,n=!0){const r=gd(e);let s;const i=r.ka.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await hd(r,t,n,!0),s}async function KE(e,t){const n=gd(e);await hd(n,t,!0,!1)}async function hd(e,t,n,r){const s=await gE(e.localStore,Ne(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await GE(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&id(e.remoteStore,s),l}async function GE(e,t,n,r,s){e.Ha=(m,A,R)=>async function(U,$,G,Y){let J=$.view.ba(G);J.ls&&(J=await vc(U.localStore,$.query,!1).then(({documents:I})=>$.view.ba(I,J)));const z=Y&&Y.targetChanges.get($.targetId),at=Y&&Y.targetMismatches.get($.targetId)!=null,yt=$.view.applyChanges(J,U.isPrimaryClient,z,at);return Vc(U,$.targetId,yt.Ma),yt.snapshot}(e,m,A,R);const i=await vc(e.localStore,t,!0),a=new $E(t,i.gs),l=a.ba(i.documents),c=vs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),f=a.applyChanges(l,e.isPrimaryClient,c);Vc(e,n,f.Ma);const d=new jE(t,n,a);return e.ka.set(t,d),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),f.snapshot}async function WE(e,t,n){const r=ft(e),s=r.ka.get(t),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!ji(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ja(r.remoteStore,s.targetId),ga(r,s.targetId)}).catch(Li)):(ga(r,s.targetId),await fa(r.localStore,s.targetId,!0))}async function QE(e,t){const n=ft(e),r=n.ka.get(t),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ja(n.remoteStore,r.targetId))}async function fd(e,t){const n=ft(e);try{const r=await dE(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Ua.get(i);a&&(St(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?St(a.Ba):s.removedDocuments.size>0&&(St(a.Ba),a.Ba=!1))}),await pd(n,r,t)}catch(r){await Li(r)}}function Pc(e,t,n){const r=ft(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ft(a);c.onlineState=l;let f=!1;c.queries.forEach((d,m)=>{for(const A of m.ta)A.sa(l)&&(f=!0)}),f&&nl(c)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function XE(e,t,n){const r=ft(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ua.get(t),i=s&&s.key;if(i){let a=new Nt(tt.comparator);a=a.insert(i,re.newNoDocument(i,nt.min()));const l=dt().add(i),c=new Ki(nt.min(),new Map,new Nt(lt),a,l);await fd(r,c),r.$a=r.$a.remove(i),r.Ua.delete(t),sl(r)}else await fa(r.localStore,t,!1).then(()=>ga(r,t,n)).catch(Li)}function ga(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.qa.get(t))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ka.br(t).forEach(r=>{e.Ka.containsKey(r)||dd(e,r)})}function dd(e,t){e.Qa.delete(t.path.canonicalString());const n=e.$a.get(t);n!==null&&(Ja(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ua.delete(n),sl(e))}function Vc(e,t,n){for(const r of n)r instanceof ud?(e.Ka.addReference(r.key,t),JE(e,r)):r instanceof cd?(H(rl,"Document no longer in limbo: "+r.key),e.Ka.removeReference(r.key,t),e.Ka.containsKey(r.key)||dd(e,r.key)):ot()}function JE(e,t){const n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(H(rl,"New document in limbo: "+n),e.Qa.add(r),sl(e))}function sl(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){const t=e.Qa.values().next().value;e.Qa.delete(t);const n=new tt(Pt.fromString(t)),r=e.za.next();e.Ua.set(r,new qE(n)),e.$a=e.$a.insert(n,r),id(e.remoteStore,new rn(Ne(Of(n.path)),r,"TargetPurposeLimboResolution",Fi.ae))}}async function pd(e,t,n){const r=ft(e),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,t,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const m=f?!f.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(f){s.push(f);const m=Qa.Yi(c.targetId,f);i.push(m)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,f){const d=ft(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(f,A=>V.forEach(A.Hi,R=>d.persistence.referenceDelegate.addReference(m,A.targetId,R)).next(()=>V.forEach(A.Ji,R=>d.persistence.referenceDelegate.removeReference(m,A.targetId,R)))))}catch(m){if(!yr(m))throw m;H(Xa,"Failed to update sequence numbers: "+m)}for(const m of f){const A=m.targetId;if(!m.fromCache){const R=d.Ts.get(A),O=R.snapshotVersion,U=R.withLastLimboFreeSnapshotVersion(O);d.Ts=d.Ts.insert(A,U)}}}(r.localStore,i))}async function YE(e,t){const n=ft(e);if(!n.currentUser.isEqual(t)){H(rl,"User change. New user:",t.toKey());const r=await ed(n.localStore,t);n.currentUser=t,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new X(B.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await pd(n,r.Rs)}}function ZE(e,t){const n=ft(e),r=n.Ua.get(t);if(r&&r.Ba)return dt().add(r.key);{let s=dt();const i=n.qa.get(t);if(!i)return s;for(const a of i){const l=n.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function gd(e){const t=ft(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=fd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=XE.bind(null,t),t.La.p_=FE.bind(null,t.eventManager),t.La.Ja=UE.bind(null,t.eventManager),t}class Ai{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rd(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return fE(this.persistence,new uE,t.initialUser,this.serializer)}Xa(t){return new td(Wa.ri,this.serializer)}Za(t){return new _E}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ai.provider={build:()=>new Ai};class tT extends Ai{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){St(this.persistence.referenceDelegate instanceof wi);const r=this.persistence.referenceDelegate.garbageCollector;return new Wv(r,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?fe.withCacheSize(this.cacheSizeBytes):fe.DEFAULT;return new td(r=>wi.ri(r,n),this.serializer)}}class ma{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YE.bind(null,this.syncEngine),await NE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ME}()}createDatastore(t){const n=rd(t.databaseInfo.databaseId),r=function(i){return new IE(i)}(t.databaseInfo);return function(i,a,l,c){return new SE(i,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new CE(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>Pc(this.syncEngine,n,0),function(){return Ic.D()?new Ic:new yE}())}createSyncEngine(t,n){return function(s,i,a,l,c,f,d){const m=new HE(s,i,a,l,c,f);return d&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=ft(s);H(dr,"RemoteStore shutting down."),i.W_.add(5),await Es(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ma.provider={build:()=>new ma};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Ke("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="FirestoreClient";class nT{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=te.UNAUTHENTICATED,this.clientId=Ry.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{H(_n,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H(_n,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ld(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function xo(e,t){e.asyncQueue.verifyOperationInProgress(),H(_n,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ed(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Dc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await rT(e);H(_n,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>bc(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>bc(t.remoteStore,s)),e._onlineComponents=t}async function rT(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){H(_n,"Using user provided OfflineComponentProvider");try{await xo(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;lr("Error using user provided cache. Falling back to memory cache: "+n),await xo(e,new Ai)}}else H(_n,"Using default OfflineComponentProvider"),await xo(e,new tT(void 0));return e._offlineComponents}async function sT(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(H(_n,"Using user provided OnlineComponentProvider"),await Dc(e,e._uninitializedComponentsProvider._online)):(H(_n,"Using default OnlineComponentProvider"),await Dc(e,new ma))),e._onlineComponents}async function iT(e){const t=await sT(e),n=t.eventManager;return n.onListen=zE.bind(null,t.syncEngine),n.onUnlisten=WE.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=KE.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=QE.bind(null,t.syncEngine),n}function oT(e,t,n={}){const r=new Mn;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,f){const d=new eT({next:A=>{d.su(),a.enqueueAndForget(()=>LE(i,m)),A.fromCache&&c.source==="server"?f.reject(new X(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(A)},error:A=>f.reject(A)}),m=new BE(l,d,{includeMetadataChanges:!0,Ta:!0});return kE(i,m)}(await iT(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(e,t,n){if(!n)throw new X(B.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function lT(e,t,n,r){if(t===!0&&r===!0)throw new X(B.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Nc(e){if(tt.isDocumentKey(e))throw new X(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function uT(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ot()}function _a(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new X(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uT(e);throw new X(B.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="firestore.googleapis.com",Oc=!0;class Mc{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new X(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_d,this.ssl=Oc}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:Oc;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Zf;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Kv)throw new X(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}lT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=md((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new X(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new X(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new X(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class il{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new X(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ey;switch(r.type){case"firstParty":return new Ay(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xc.get(n);r&&(H("ComponentProvider","Removing Datastore"),xc.delete(n),r.terminate())}(this),Promise.resolve()}}function cT(e,t,n,r={}){var s;const i=(e=_a(e,il))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${n}`;i.host!==_d&&i.host!==l&&lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!gi(c,a)&&(e._setSettings(c),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=te.MOCK_USER;else{f=Ym(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new X(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new te(m)}e._authCredentials=new Ty(new Ef(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Wi(this.firestore,t,this._query)}}class Er{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Er(this.firestore,t,this._key)}}class or extends Wi{constructor(t,n,r){super(t,n,Of(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Er(this.firestore,null,new tt(t))}withConverter(t){return new or(this.firestore,t,this._path)}}function No(e,t,...n){if(e=a_(e),aT("collection","path",t),e instanceof il){const r=Pt.fromString(t,...n);return Nc(r),new or(e,null,r)}{if(!(e instanceof Er||e instanceof or))throw new X(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Pt.fromString(t,...n));return Nc(r),new or(e.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="AsyncQueue";class Lc{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new sd(this,"async_queue_retry"),this.Su=()=>{const r=Do();r&&H(kc,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const n=Do();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=Do();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Mn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!yr(t))throw t;H(kc,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(t,n,r){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const s=el.createAndSchedule(this,t,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ot()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class yd extends il{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Lc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Lc(t),this._firestoreClient=void 0,await t}}}function hT(e,t){const n=typeof e=="object"?e:uy(),r=typeof e=="string"?e:yi,s=sy(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Xm("firestore");i&&cT(s,...i)}return s}function fT(e){if(e._terminated)throw new X(B.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||dT(e),e._firestoreClient}function dT(e){var t,n,r;const s=e._freezeSettings(),i=function(l,c,f,d){return new $y(l,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,md(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new nT(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bi(Wt.fromBase64String(t))}catch(n){throw new X(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new bi(Wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new X(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new X(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new X(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}const mT=new RegExp("[~\\*/\\[\\]]");function _T(e,t,n){if(t.search(mT)>=0)throw Fc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e);try{return new vd(...t.split("."))._internalPath}catch{throw Fc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e)}}function Fc(e,t,n,r,s){let i=`Function ${t}() called with invalid data`;i+=". ";let a="";return new X(B.INVALID_ARGUMENT,i+e+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Er(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new yT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Td("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yT extends Ed{data(){return super.data()}}function Td(e,t){return typeof t=="string"?_T(e,t):t instanceof vd?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new X(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ET{convertValue(t,n="none"){switch(gn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(pn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw ot()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return ys(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n[na].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Dt(a.doubleValue));return new gT(i)}convertGeoPoint(t){return new pT(Dt(t.latitude),Dt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Bi(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hs(t));default:return null}}convertTimestamp(t){const n=dn(t);return new de(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Pt.fromString(t);St(Yf(r));const s=new fs(r.get(1),r.get(3)),i=new tt(r.popFirst(5));return s.isEqual(n)||Ke(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class TT extends Ed{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ii(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Td("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ii extends TT{data(t={}){return super.data(t)}}class IT{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new ii(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new ii(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ii(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:wT(l.type),doc:c,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wT(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ot()}}class AT extends ET{constructor(t){super(),this.firestore=t}convertBytes(t){return new bi(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Er(this.firestore,null,n)}}function Oo(e){e=_a(e,Wi);const t=_a(e.firestore,yd),n=fT(t),r=new AT(t);return vT(e._query),oT(n,e._query).then(s=>new IT(t,r,e,s))}(function(t,n=!0){(function(s){_r=s})(ly),_i(new ls("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new yd(new Iy(r.getProvider("auth-internal")),new by(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new X(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(f.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),rr(qu,Hu,t),rr(qu,Hu,"esm2017")})();var bT="firebase",ST="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(bT,ST,"app");const RT={apiKey:"AIzaSyAmxLtJHU56JStlWuCf9xROAPvpD0FP9RM",authDomain:"cis371-ff6ec.firebaseapp.com",projectId:"cis371-ff6ec",storageBucket:"cis371-ff6ec.firebasestorage.app",messagingSenderId:"1031007686234",appId:"1:1031007686234:web:1a730a8be2671c4cf5d263",measurementId:"G-NFGHNXF9XM"},CT=hf(RT),Mo=hT(CT),Tr=Tm("BeverageStore",{state:()=>({temps:Du,currentTemp:Du[0],bases:[],currentBase:null,syrups:[],currentSyrup:null,creamers:[],currentCreamer:null,beverages:[],currentBeverage:null,currentName:""}),actions:{async init(){const e=await Oo(No(Mo,"bases")),t=await Oo(No(Mo,"creamers")),n=await Oo(No(Mo,"syrups"));this.bases=e.docs.map(r=>r.data()),this.creamers=t.docs.map(r=>r.data()),this.syrups=n.docs.map(r=>r.data()),this.currentBase=this.bases[0]||null,this.currentCreamer=this.creamers[0]||null,this.currentSyrup=this.syrups[0]||null},makeBeverage(){},showBeverage(){}}}),PT=ms({__name:"Syrup",setup(e){const t=Tr();return(n,r)=>{var s;return Et(),Ut("div",{class:"syrup",style:gr({"--texture-color":(s=Ct(t).currentSyrup)==null?void 0:s.color})},null,4)}}}),VT=Bn(PT,[["__scopeId","data-v-2fa3a41a"]]),DT=ms({__name:"Base",setup(e){const t=Tr();return(n,r)=>{var s;return Et(),Ut("div",{class:"baseBeverage",style:gr({backgroundColor:(s=Ct(t).currentBase)==null?void 0:s.color})},null,4)}}}),xT=Bn(DT,[["__scopeId","data-v-8cc1f7b4"]]),NT={class:"froth"},OT=ms({__name:"Creamer",setup(e){const t=Tr();return(n,r)=>(Et(),Ut("div",NT,[(Et(),Ut(Mt,null,Dn(5,()=>{var s;return Vt("div",{class:"foam",style:gr({backgroundColor:(s=Ct(t).currentCreamer)==null?void 0:s.color})},null,4)}),64))]))}}),MT=Bn(OT,[["__scopeId","data-v-84d3ef89"]]),kT={},LT={id:"steam"},FT={class:"stream"};function UT(e,t){return Et(),Ut("div",LT,[(Et(),Ut(Mt,null,Dn(3,()=>Vt("div",FT)),64))])}const BT=Bn(kT,[["render",UT]]),$T={},jT={id:"condensation"},qT={class:"flake"};function HT(e,t){return Et(),Ut("div",jT,[(Et(),Ut(Mt,null,Dn(3,()=>Vt("div",qT)),64))])}const zT=Bn($T,[["render",HT]]),KT=ms({__name:"Beverage",props:{isIced:{type:Boolean}},setup(e){const t=Tr();return(n,r)=>(Et(),en(Um,null,{default:Br(()=>[n.isIced?(Et(),en(zT,{key:0})):(Et(),en(BT,{key:1})),_e(Mm,null,{top:Br(()=>{var s;return[((s=Ct(t).currentCreamer)==null?void 0:s.color)!=="transparent"?(Et(),en(MT,{key:0})):hu("",!0)]}),mid:Br(()=>{var s;return[((s=Ct(t).currentSyrup)==null?void 0:s.color)!=="transparent"?(Et(),en(VT,{key:0})):hu("",!0)]}),bottom:Br(()=>[_e(xT)]),_:1})]),_:1}))}}),GT=["id","value"],WT=["id","value"],QT=["id","value"],XT=["id","value"],Id=ms({__name:"App",setup(e){const t=Tr();return(n,r)=>{var s,i,a;return Et(),Ut(Mt,null,[Vt("div",null,[_e(KT,{isIced:Ct(t).currentTemp==="Cold",baseColor:(s=Ct(t).currentBase)==null?void 0:s.color,creamerColor:(i=Ct(t).currentCreamer)==null?void 0:i.color,syrupColor:(a=Ct(t).currentSyrup)==null?void 0:a.color},null,8,["isIced","baseColor","creamerColor","syrupColor"]),Vt("ul",null,[Vt("li",null,[(Et(!0),Ut(Mt,null,Dn(Ct(t).temps,l=>(Et(),Ut("label",{key:l},[js(Vt("input",{type:"radio",name:"temperature",id:`r${l}`,value:l,"onUpdate:modelValue":r[0]||(r[0]=c=>Ct(t).currentTemp=c)},null,8,GT),[[qs,Ct(t).currentTemp]]),jr(" "+Ur(l),1)]))),128))])]),Vt("ul",null,[Vt("li",null,[(Et(!0),Ut(Mt,null,Dn(Ct(t).bases,l=>(Et(),Ut("label",{key:l.id},[js(Vt("input",{type:"radio",name:"bases",id:`r${l.id}`,value:l,"onUpdate:modelValue":r[1]||(r[1]=c=>Ct(t).currentBase=c)},null,8,WT),[[qs,Ct(t).currentBase]]),jr(" "+Ur(l.name),1)]))),128))])]),Vt("ul",null,[Vt("li",null,[(Et(!0),Ut(Mt,null,Dn(Ct(t).syrups,l=>(Et(),Ut("label",{key:l.id},[js(Vt("input",{type:"radio",name:"syrups",id:`r${l.id}`,value:l,"onUpdate:modelValue":r[2]||(r[2]=c=>Ct(t).currentSyrup=c)},null,8,QT),[[qs,Ct(t).currentSyrup]]),jr(" "+Ur(l.name),1)]))),128))])]),Vt("ul",null,[Vt("li",null,[(Et(!0),Ut(Mt,null,Dn(Ct(t).creamers,l=>(Et(),Ut("label",{key:l.id},[js(Vt("input",{type:"radio",name:"creamers",id:`r${l.id}`,value:l,"onUpdate:modelValue":r[3]||(r[3]=c=>Ct(t).currentCreamer=c)},null,8,XT),[[qs,Ct(t).currentCreamer]]),jr(" "+Ur(l.name),1)]))),128))])]),r[4]||(r[4]=Vt("input",{type:"text",placeholder:"Beverage Name"},null,-1)),r[5]||(r[5]=Vt("button",null,"🍺 Make Beverage",-1))]),r[6]||(r[6]=Vt("div",{id:"beverage-container",style:{"margin-top":"20px"}},null,-1))],64)}}}),wd=gm();wd.use(Dm);fm(Id).use(wd).mount("#app");const JT=Tr();JT.init().then(()=>{Id.mount("#app")});
