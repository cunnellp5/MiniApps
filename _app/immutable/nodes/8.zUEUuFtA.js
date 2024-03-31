import{s as Y,n as Q,r as Z,f as ye,y as be}from"../chunks/scheduler.CxYgMsxH.js";import{S as $,i as x,e as k,t as q,s as P,c as T,a as G,b as O,d as N,f as U,k as W,l as E,g as H,h,n as R,j,m as M,p as Ee,E as ce,u as ee,z as ue,r as te,A as fe,B as he,o as F,v as me,q as V,C as pe,x as _e,F as Ne}from"../chunks/index.CIHsrv2y.js";import{e as J}from"../chunks/each.D6YF6ztN.js";function Se(a){let e,t,n=a[1].toUpperCase()+"",u,r,l,i,o,v,s,f="⬆️",p,w,S,L,A,_;return{c(){e=k("main"),t=k("h3"),u=q(n),r=q(`:
        `),l=k("span"),i=q(a[0]),o=P(),v=k("div"),s=k("button"),s.textContent=f,p=P(),w=k("button"),S=q("⬇️"),this.h()},l(B){e=T(B,"MAIN",{class:!0});var c=G(e);t=T(c,"H3",{class:!0});var m=G(t);u=O(m,n),r=O(m,`:
        `),l=T(m,"SPAN",{class:!0});var d=G(l);i=O(d,a[0]),d.forEach(N),m.forEach(N),o=U(c),v=T(c,"DIV",{class:!0});var I=G(v);s=T(I,"BUTTON",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-n70qzx"&&(s.textContent=f),p=U(I),w=T(I,"BUTTON",{class:!0});var D=G(w);S=O(D,"⬇️"),D.forEach(N),I.forEach(N),c.forEach(N),this.h()},h(){E(l,"class","playerScore svelte-flavi6"),E(t,"class","svelte-flavi6"),E(s,"class","svelte-flavi6"),w.disabled=L=a[0]===0,E(w,"class","svelte-flavi6"),E(v,"class","incrementors svelte-flavi6"),E(e,"class","scores svelte-flavi6")},m(B,c){H(B,e,c),h(e,t),h(t,u),h(t,r),h(t,l),h(l,i),h(e,o),h(e,v),h(v,s),h(v,p),h(v,w),h(w,S),A||(_=[R(s,"click",a[2]),R(w,"click",a[3])],A=!0)},p(B,[c]){c&2&&n!==(n=B[1].toUpperCase()+"")&&j(u,n),c&1&&j(i,B[0]),c&1&&L!==(L=B[0]===0)&&(w.disabled=L)},i:Q,o:Q,d(B){B&&N(e),A=!1,Z(_)}}}function ke(a,e,t){let{playerName:n}=e,{playerScore:u=0}=e;function r(){t(0,u+=1)}function l(){u>0&&t(0,u-=1)}return a.$$set=i=>{"playerName"in i&&t(1,n=i.playerName),"playerScore"in i&&t(0,u=i.playerScore)},[u,n,r,l]}class Te extends ${constructor(e){super(),x(this,e,ke,Se,Y,{playerName:1,playerScore:0})}}function le(a,e,t){const n=a.slice();return n[8]=e[t],n[9]=e,n[10]=t,n}function ae(a){let e,t,n="add game",u=J(a[2]),r=[];for(let l=0;l<u.length;l+=1)r[l]=ne(le(a,u,l));return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=P(),t=k("button"),t.textContent=n,this.h()},l(l){for(let i=0;i<r.length;i+=1)r[i].l(l);e=U(l),t=T(l,"BUTTON",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-92x1ul"&&(t.textContent=n),this.h()},h(){E(t,"class","svelte-1tq1vt0")},m(l,i){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(l,i);H(l,e,i),H(l,t,i)},p(l,i){if(i&4){u=J(l[2]);let o;for(o=0;o<u.length;o+=1){const v=le(l,u,o);r[o]?r[o].p(v,i):(r[o]=ne(v),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=u.length}},d(l){l&&(N(e),N(t)),ee(r,l)}}}function ne(a){let e,t,n,u;function r(){a[7].call(t,a[9],a[10])}return{c(){e=k("label"),t=k("input"),this.h()},l(l){e=T(l,"LABEL",{});var i=G(e);t=T(i,"INPUT",{type:!0,placeholder:!0,class:!0}),i.forEach(N),this.h()},h(){E(t,"type","text"),E(t,"placeholder","Player name"),E(t,"class","svelte-1tq1vt0")},m(l,i){H(l,e,i),h(e,t),M(t,a[8].name),n||(u=R(t,"input",r),n=!0)},p(l,i){a=l,i&4&&t.value!==a[8].name&&M(t,a[8].name)},d(l){l&&N(e),n=!1,u()}}}function Ce(a){let e,t,n,u,r,l,i,o,v,s=a[0]>0&&a[1].length>0&&ae(a);return{c(){e=k("form"),t=k("label"),n=k("input"),u=P(),r=k("label"),l=k("input"),i=P(),s&&s.c(),this.h()},l(f){e=T(f,"FORM",{action:!0,method:!0,class:!0});var p=G(e);t=T(p,"LABEL",{});var w=G(t);n=T(w,"INPUT",{type:!0,placeholder:!0,class:!0}),w.forEach(N),u=U(p),r=T(p,"LABEL",{});var S=G(r);l=T(S,"INPUT",{type:!0,min:!0,placeholder:!0,class:!0}),S.forEach(N),i=U(p),s&&s.l(p),p.forEach(N),this.h()},h(){E(n,"type","text"),E(n,"placeholder","Enter a game name..."),E(n,"class","svelte-1tq1vt0"),E(l,"type","number"),E(l,"min","0"),E(l,"placeholder","how many players?"),E(l,"class","svelte-1tq1vt0"),E(e,"action",""),E(e,"method","post"),E(e,"class","svelte-1tq1vt0")},m(f,p){H(f,e,p),h(e,t),h(t,n),M(n,a[1]),h(e,u),h(e,r),h(r,l),M(l,a[0]),h(e,i),s&&s.m(e,null),o||(v=[R(n,"input",a[5]),R(l,"input",a[6]),R(e,"submit",Ee(a[3]))],o=!0)},p(f,[p]){p&2&&n.value!==f[1]&&M(n,f[1]),p&1&&ce(l.value)!==f[0]&&M(l,f[0]),f[0]>0&&f[1].length>0?s?s.p(f,p):(s=ae(f),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:Q,o:Q,d(f){f&&N(e),s&&s.d(),o=!1,Z(v)}}}function we(a,e,t){let{addGame:n}=e,u="",r=[],l=0;function i(){n({gameName:u,players:r}),t(1,u=""),t(0,l=0),t(2,r=[])}function o(){u=this.value,t(1,u)}function v(){l=ce(this.value),t(0,l)}function s(f,p){f[p].name=this.value,t(2,r),t(0,l)}return a.$$set=f=>{"addGame"in f&&t(4,n=f.addGame)},a.$$.update=()=>{a.$$.dirty&1&&t(2,r=Array(l).fill(null).map((f,p)=>({name:`Player ${p+1}`,score:0})))},[l,u,r,i,n,o,v,s]}class Ae extends ${constructor(e){super(),x(this,e,we,Ce,Y,{addGame:4})}}function re(a,e,t){const n=a.slice();return n[7]=e[t],n[9]=t,n}function se(a,e,t){const n=a.slice();return n[10]=e[t],n[11]=e,n[12]=t,n}function oe(a){let e,t,n;function u(l){a[4](l,a[10])}let r={playerName:a[10].name};return a[10].score!==void 0&&(r.playerScore=a[10].score),e=new Te({props:r}),ye.push(()=>Ne(e,"playerScore",u)),{c(){ue(e.$$.fragment)},l(l){fe(e.$$.fragment,l)},m(l,i){he(e,l,i),n=!0},p(l,i){a=l;const o={};i&1&&(o.playerName=a[10].name),!t&&i&1&&(t=!0,o.playerScore=a[10].score,be(()=>t=!1)),e.$set(o)},i(l){n||(F(e.$$.fragment,l),n=!0)},o(l){V(e.$$.fragment,l),n=!1},d(l){pe(e,l)}}}function ie(a){let e,t,n,u=a[7].gameName+"",r,l,i,o,v,s=a[7].gameName+"",f,p,w,S,L,A=a[7].gameName+"",_,B,c,m,d,I,D=J(a[7].players),y=[];for(let C=0;C<D.length;C+=1)y[C]=oe(se(a,D,C));const de=C=>V(y[C],1,1,()=>{y[C]=null});function ve(){return a[5](a[7])}function ge(){return a[6](a[9])}return{c(){e=k("div"),t=k("h2"),n=q("Game "),r=q(u),l=P();for(let C=0;C<y.length;C+=1)y[C].c();i=P(),o=k("button"),v=q("RESET '"),f=q(s),p=q("'"),w=P(),S=k("button"),L=q("DELETE '"),_=q(A),B=q("''"),c=P(),this.h()},l(C){e=T(C,"DIV",{class:!0});var g=G(e);t=T(g,"H2",{});var b=G(t);n=O(b,"Game "),r=O(b,u),b.forEach(N),l=U(g);for(let X=0;X<y.length;X+=1)y[X].l(g);i=U(g),o=T(g,"BUTTON",{class:!0});var z=G(o);v=O(z,"RESET '"),f=O(z,s),p=O(z,"'"),z.forEach(N),w=U(g),S=T(g,"BUTTON",{class:!0});var K=G(S);L=O(K,"DELETE '"),_=O(K,A),B=O(K,"''"),K.forEach(N),c=U(g),g.forEach(N),this.h()},h(){E(o,"class","svelte-io2m63"),E(S,"class","removeAll svelte-io2m63"),E(e,"class","gameWrapper svelte-io2m63")},m(C,g){H(C,e,g),h(e,t),h(t,n),h(t,r),h(e,l);for(let b=0;b<y.length;b+=1)y[b]&&y[b].m(e,null);h(e,i),h(e,o),h(o,v),h(o,f),h(o,p),h(e,w),h(e,S),h(S,L),h(S,_),h(S,B),h(e,c),m=!0,d||(I=[R(o,"click",ve),R(S,"click",ge)],d=!0)},p(C,g){if(a=C,(!m||g&1)&&u!==(u=a[7].gameName+"")&&j(r,u),g&1){D=J(a[7].players);let b;for(b=0;b<D.length;b+=1){const z=se(a,D,b);y[b]?(y[b].p(z,g),F(y[b],1)):(y[b]=oe(z),y[b].c(),F(y[b],1),y[b].m(e,i))}for(_e(),b=D.length;b<y.length;b+=1)de(b);me()}(!m||g&1)&&s!==(s=a[7].gameName+"")&&j(f,s),(!m||g&1)&&A!==(A=a[7].gameName+"")&&j(_,A)},i(C){if(!m){for(let g=0;g<D.length;g+=1)F(y[g]);m=!0}},o(C){y=y.filter(Boolean);for(let g=0;g<y.length;g+=1)V(y[g]);m=!1},d(C){C&&N(e),ee(y,C),d=!1,Z(I)}}}function Be(a){let e,t,n="Score keeper",u,r,l="Add games with n-number of players to keep track of player scores",i,o,v=`<li>In order to start a game, you need a name and at least one player</li> <br/>
        Features:
        <ul><li>Reset all player scores</li> <li>Delete a game</li> <li>Increment or decrement player scores</li></ul>`,s,f,p,w,S,L;p=new Ae({props:{addGame:a[1]}});let A=J(a[0]),_=[];for(let c=0;c<A.length;c+=1)_[c]=ie(re(a,A,c));const B=c=>V(_[c],1,1,()=>{_[c]=null});return{c(){e=k("header"),t=k("h1"),t.textContent=n,u=P(),r=k("p"),r.textContent=l,i=P(),o=k("ul"),o.innerHTML=v,s=P(),f=k("div"),ue(p.$$.fragment),w=P();for(let c=0;c<_.length;c+=1)_[c].c();S=te(),this.h()},l(c){e=T(c,"HEADER",{});var m=G(e);t=T(m,"H1",{"data-svelte-h":!0}),W(t)!=="svelte-19dvzzc"&&(t.textContent=n),u=U(m),r=T(m,"P",{"data-svelte-h":!0}),W(r)!=="svelte-15tcn6p"&&(r.textContent=l),i=U(m),o=T(m,"UL",{"data-svelte-h":!0}),W(o)!=="svelte-iln94b"&&(o.innerHTML=v),s=U(m),f=T(m,"DIV",{class:!0});var d=G(f);fe(p.$$.fragment,d),d.forEach(N),m.forEach(N),w=U(c);for(let I=0;I<_.length;I+=1)_[I].l(c);S=te(),this.h()},h(){E(f,"class","formWrapper svelte-io2m63")},m(c,m){H(c,e,m),h(e,t),h(e,u),h(e,r),h(e,i),h(e,o),h(e,s),h(e,f),he(p,f,null),H(c,w,m);for(let d=0;d<_.length;d+=1)_[d]&&_[d].m(c,m);H(c,S,m),L=!0},p(c,[m]){if(m&13){A=J(c[0]);let d;for(d=0;d<A.length;d+=1){const I=re(c,A,d);_[d]?(_[d].p(I,m),F(_[d],1)):(_[d]=ie(I),_[d].c(),F(_[d],1),_[d].m(S.parentNode,S))}for(_e(),d=A.length;d<_.length;d+=1)B(d);me()}},i(c){if(!L){F(p.$$.fragment,c);for(let m=0;m<A.length;m+=1)F(_[m]);L=!0}},o(c){V(p.$$.fragment,c),_=_.filter(Boolean);for(let m=0;m<_.length;m+=1)V(_[m]);L=!1},d(c){c&&(N(e),N(w),N(S)),pe(p),ee(_,c)}}}function Ge(a,e,t){let n=[];typeof window<"u"&&(n=JSON.parse(window.localStorage.getItem("games"))||[]);function u(s){n.push(s),t(0,n)}function r(s){s.players=s.players.map(f=>({...f,score:0})),t(0,n)}function l(s){confirm("Are you sure you want to delete this game?")&&(n.splice(s,1),t(0,n))}function i(s,f){a.$$.not_equal(f.score,s)&&(f.score=s,t(0,n))}const o=s=>r(s),v=s=>l(s);return a.$$.update=()=>{a.$$.dirty&1&&typeof window<"u"&&window.localStorage.setItem("games",JSON.stringify(n))},[n,u,r,l,i,o,v]}class Ue extends ${constructor(e){super(),x(this,e,Ge,Be,Y,{})}}export{Ue as component};