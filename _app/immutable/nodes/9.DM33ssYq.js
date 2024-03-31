import{s as j,n as $,r as H}from"../chunks/scheduler.CxYgMsxH.js";import{S as R,i as V,e as g,s as N,t as W,c as b,a as I,d as T,f as S,b as G,l as C,g as P,h as u,m as D,n as y,p as K,z as Q,k as B,A as X,D as O,B as Y,o as Z,q as x,C as ee,u as te,j as le}from"../chunks/index.CIHsrv2y.js";import{e as z}from"../chunks/each.D6YF6ztN.js";function ne(n){let e,l,t,c,o,f,_,m,i;return{c(){e=g("form"),l=g("label"),t=g("input"),c=N(),o=g("button"),f=W("Add Todo"),this.h()},l(h){e=b(h,"FORM",{class:!0});var a=I(e);l=b(a,"LABEL",{});var A=I(l);t=b(A,"INPUT",{placeholder:!0,class:!0}),A.forEach(T),c=S(a),o=b(a,"BUTTON",{class:!0});var k=I(o);f=G(k,"Add Todo"),k.forEach(T),a.forEach(T),this.h()},h(){C(t,"placeholder","Enter a todo..."),C(t,"class","svelte-1tq1vt0"),o.disabled=_=n[0].length===0,C(o,"class","svelte-1tq1vt0"),C(e,"class","svelte-1tq1vt0")},m(h,a){P(h,e,a),u(e,l),u(l,t),D(t,n[0]),u(e,c),u(e,o),u(o,f),m||(i=[y(t,"input",n[3]),y(e,"submit",K(n[1]))],m=!0)},p(h,[a]){a&1&&t.value!==h[0]&&D(t,h[0]),a&1&&_!==(_=h[0].length===0)&&(o.disabled=_)},i:$,o:$,d(h){h&&T(e),m=!1,H(i)}}}function oe(n,e,l){let{addTodo:t}=e,c="";function o(){t(c),l(0,c="")}function f(){c=this.value,l(0,c)}return n.$$set=_=>{"addTodo"in _&&l(2,t=_.addTodo)},[c,o,t,f]}class se extends R{constructor(e){super(),V(this,e,oe,ne,j,{addTodo:2})}}function F(n,e,l){const t=n.slice();return t[6]=e[l].title,t[7]=e[l].done,t[8]=e,t[9]=l,t}function J(n){let e,l,t,c,o,f=n[6]+"",_,m,i,h="🗑️",a,A,k;function q(){return n[4](n[7],n[8],n[9])}function L(){return n[5](n[9])}return{c(){e=g("li"),l=g("input"),c=N(),o=g("label"),_=W(f),m=N(),i=g("span"),i.textContent=h,a=N(),this.h()},l(v){e=b(v,"LI",{class:!0});var s=I(e);l=b(s,"INPUT",{type:!0}),c=S(s),o=b(s,"LABEL",{for:!0});var p=I(o);_=G(p,f),p.forEach(T),m=S(s),i=b(s,"SPAN",{class:!0,"data-svelte-h":!0}),B(i)!=="svelte-1luzb4e"&&(i.textContent=h),a=S(s),s.forEach(T),this.h()},h(){l.checked=t=n[7],C(l,"type","checkbox"),C(o,"for","todo"),C(i,"class","delete svelte-telfis"),C(e,"class","todo svelte-telfis"),O(e,"done",n[7])},m(v,s){P(v,e,s),u(e,l),u(e,c),u(e,o),u(o,_),u(e,m),u(e,i),u(e,a),A||(k=[y(l,"click",q),y(i,"click",L)],A=!0)},p(v,s){n=v,s&1&&t!==(t=n[7])&&(l.checked=t),s&1&&f!==(f=n[6]+"")&&le(_,f),s&1&&O(e,"done",n[7])},d(v){v&&T(e),A=!1,H(k)}}}function M(n){let e,l="No todos";return{c(){e=g("p"),e.textContent=l},l(t){e=b(t,"P",{"data-svelte-h":!0}),B(e)!=="svelte-pksi2q"&&(e.textContent=l)},m(t,c){P(t,e,c)},d(t){t&&T(e)}}}function ae(n){let e,l,t="Todo",c,o,f,_,m,i,h,a,A="Delete All",k,q,L;f=new se({props:{addTodo:n[1]}});let v=z(n[0]),s=[];for(let d=0;d<v.length;d+=1)s[d]=J(F(n,v,d));let p=n[0].length===0&&M();return{c(){e=g("main"),l=g("h1"),l.textContent=t,c=N(),o=g("div"),Q(f.$$.fragment),_=N(),m=g("ul");for(let d=0;d<s.length;d+=1)s[d].c();i=N(),p&&p.c(),h=N(),a=g("button"),a.textContent=A,this.h()},l(d){e=b(d,"MAIN",{});var E=I(e);l=b(E,"H1",{"data-svelte-h":!0}),B(l)!=="svelte-1pfuob8"&&(l.textContent=t),c=S(E),o=b(E,"DIV",{class:!0});var r=I(o);X(f.$$.fragment,r),_=S(r),m=b(r,"UL",{class:!0});var w=I(m);for(let U=0;U<s.length;U+=1)s[U].l(w);w.forEach(T),i=S(r),p&&p.l(r),h=S(r),a=b(r,"BUTTON",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-m6e338"&&(a.textContent=A),r.forEach(T),E.forEach(T),this.h()},h(){C(m,"class","svelte-telfis"),C(a,"class","removeAll svelte-telfis"),O(a,"hidden",n[0].length<3),C(o,"class","todosWrapper svelte-telfis")},m(d,E){P(d,e,E),u(e,l),u(e,c),u(e,o),Y(f,o,null),u(o,_),u(o,m);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(m,null);u(o,i),p&&p.m(o,null),u(o,h),u(o,a),k=!0,q||(L=y(a,"click",n[3]),q=!0)},p(d,[E]){if(E&5){v=z(d[0]);let r;for(r=0;r<v.length;r+=1){const w=F(d,v,r);s[r]?s[r].p(w,E):(s[r]=J(w),s[r].c(),s[r].m(m,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=v.length}d[0].length===0?p||(p=M(),p.c(),p.m(o,h)):p&&(p.d(1),p=null),(!k||E&1)&&O(a,"hidden",d[0].length<3)},i(d){k||(Z(f.$$.fragment,d),k=!0)},o(d){x(f.$$.fragment,d),k=!1},d(d){d&&T(e),ee(f),te(s,d),p&&p.d(),q=!1,L()}}}function re(n,e,l){let t=[];typeof window<"u"&&(t=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);function c(i){i.length&&(t.push({title:i,done:!1}),l(0,t))}function o(i){t.splice(i,1),l(0,t)}function f(){l(0,t=[])}const _=(i,h,a)=>l(0,h[a].done=!i,t),m=i=>o(i);return n.$$.update=()=>{n.$$.dirty&1&&typeof window<"u"&&localStorage.setItem("todos",JSON.stringify(t))},[t,c,o,f,_,m]}class fe extends R{constructor(e){super(),V(this,e,re,ae,j,{})}}export{fe as component};