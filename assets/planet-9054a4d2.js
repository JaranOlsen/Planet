import{W as Ye,P as Ze,O as Ke,S as Ue,V as S,R as Xe,a as k,b as L,B as C,c as _,T as y,s as Je,d as $e,e as Qe,f as ta,g as ea,h as aa,i as sa,j as na,k as oa,F as E,l as A,m as Q,M as z,n as Gt,o as Jt,p as $t,D as Qt,q as wt,A as te,r as ia,t as U,u as ee,v as X,w as ae,x as zt,G as ra,y as ca,z as se,C as la,E as kt,L as da,H as dt,I as ha,J as ua,K as pa,N as fa,Q as Z,U as Ot,X as yt,Y as ne,Z as oe,_ as Wt,$ as q,a0 as vt,a1 as Nt,a2 as ma,a3 as ga,a4 as Yt,a5 as Lt,a6 as mt,a7 as st,a8 as Zt,a9 as Kt,aa as xa,ab as It,ac as wa,ad as ya,ae as gt,af as R,ag as va,ah as Ma,ai as Tt,aj as Sa,ak as ba,al as za,am as ie}from"./sign-79af7d59.js";import{d as Pa,n as Ba,r as La,c as Ia,a as Ra,b as Ta,e as qa,f as Ca,G as _a}from"./clouds4k-c9480500.js";const re=document.querySelector("#c"),it=new Ye({canvas:re,antialias:!0});it.setPixelRatio(window.devicePixelRatio);function Ea(s){const t=s.domElement,a=t.clientWidth,e=t.clientHeight,n=t.width!==a||t.height!==e;return n&&s.setSize(a,e,!1),n}const Aa=50,Ga=2,ka=.1,Oa=2e3,l=new Ze(Aa,Ga,ka,Oa);l.position.z=500;const B=new Ke(l,re);B.enablePan=!1;B.maxDistance=1e3;B.minDistance=5.2;B.zoomSpeed=.3;B.rotateSpeed=.3;B.target.set(0,0,0);B.update();const j=new Ue,Mt=new S,St=new Xe;new ie;new ie;let h=[],d=null,T=null,bt=null,ce=null,p=null,m=[],Rt=!0,b=!1,nt=new k(l.position.x,l.position.y,l.position.z);const xt=new k(0,0,0),P=new L,f=new ma;f.onStart=function(s,t,a){};const ja=document.getElementById("progress-bar");f.onProgress=function(s,t,a){ja.value=t/a*100};const Fa=document.querySelector(".progress-bar-container");f.onLoad=function(){Fa.style.display="none"};f.onError=function(s){console.log("There was an error loading "+s)};let qt=!1;const ht=document.getElementById("introTune");ht.preload="auto";ht.currentTime=0;ht.volume=1;const Ut=ht.duration,Ct=document.getElementById("playbutton"),le=document.getElementById("credits");Ct.addEventListener("click",()=>{ht.play(),qt=!0,Ct.style.display="none",_t.style.display="none",le.style.display="none"});const _t=document.getElementById("skipbutton");_t.addEventListener("click",()=>{Ct.style.display="none",_t.style.display="none",le.style.display="none",l.position.z=15});let Et;const Va=document.querySelectorAll("[data-carousel-button]");Va.forEach(s=>{s.addEventListener("click",()=>{if(document.querySelector(".carousel"),s.dataset.carouselButton==="exit")Et.style.display="none";else{const t=s.dataset.carouselButton==="next"?1:-1,a=s.closest("[data-carousel]").querySelector("[data-slides]"),e=a.querySelector("[data-active]");let n=[...a.children].indexOf(e)+t;a.children[n].dataset.active=!0,delete e.dataset.active}})});const Da=document.querySelectorAll("[data-menu-button]");Da.forEach(s=>{s.addEventListener("click",()=>{if(document.querySelector(".carousel"),s.dataset.menuButton==="menu"){const t=s.closest("[data-carousel]").querySelector("[data-slides]"),a=t.querySelector("[data-active]"),e=t.querySelector("[menu]");let n=[...t.children].indexOf(e);t.children[n].dataset.active=!0,delete a.dataset.active}if(s.dataset.menuButton==="definition"){const t=s.closest("[data-carousel]").querySelector("[data-slides]"),a=t.querySelector("[data-active]"),e=t.querySelector("[definition]");let n=[...t.children].indexOf(e);t.children[n].dataset.active=!0,delete a.dataset.active}if(s.dataset.menuButton==="exercise"){const t=s.closest("[data-carousel]").querySelector("[data-slides]"),a=t.querySelector("[data-active]"),e=t.querySelector("[exercise]");let n=[...t.children].indexOf(e);t.children[n].dataset.active=!0,delete a.dataset.active}if(s.dataset.menuButton==="theory"){const t=s.closest("[data-carousel]").querySelector("[data-slides]"),a=t.querySelector("[data-active]"),e=t.querySelector("[theory]");let n=[...t.children].indexOf(e);t.children[n].dataset.active=!0,delete a.dataset.active}if(s.dataset.menuButton==="media"){const t=s.closest("[data-carousel]").querySelector("[data-slides]"),a=t.querySelector("[data-active]"),e=t.querySelector("[media]");let n=[...t.children].indexOf(e);t.children[n].dataset.active=!0,delete a.dataset.active}})});const Ha=document.querySelectorAll("[data-nav-button]");Ha.forEach(s=>{s.addEventListener("click",()=>{if(document.querySelector(".carousel"),s.dataset.navButton==="one"){const t=s.closest("[data-carousel]").querySelector("[data-slides]"),a=t.querySelector("[data-active]"),e=t.querySelector("[one]");let n=[...t.children].indexOf(e);t.children[n].dataset.active=!0,delete a.dataset.active}if(s.dataset.navButton==="two"){const t=s.closest("[data-carousel]").querySelector("[data-slides]"),a=t.querySelector("[data-active]"),e=t.querySelector("[two]");let n=[...t.children].indexOf(e);t.children[n].dataset.active=!0,delete a.dataset.active}if(s.dataset.navButton==="three"){const t=s.closest("[data-carousel]").querySelector("[data-slides]"),a=t.querySelector("[data-active]"),e=t.querySelector("[three]");let n=[...t.children].indexOf(e);t.children[n].dataset.active=!0,delete a.dataset.active}if(s.dataset.navButton==="four"){const t=s.closest("[data-carousel]").querySelector("[data-slides]"),a=t.querySelector("[data-active]"),e=t.querySelector("[four]");let n=[...t.children].indexOf(e);t.children[n].dataset.active=!0,delete a.dataset.active}if(s.dataset.navButton==="five"){const t=s.closest("[data-carousel]").querySelector("[data-slides]"),a=t.querySelector("[data-active]"),e=t.querySelector("[five]");let n=[...t.children].indexOf(e);t.children[n].dataset.active=!0,delete a.dataset.active}})});const de=new C,he=new C,ue=new C,pe=new C,fe=new C,me=new C,ge=new C,xe=new C,we=new C,Wa=new _({size:5,map:new y(f).load(Je),transparent:!0,fog:!1}),Na=new _({size:5,map:new y(f).load($e),transparent:!0,fog:!1}),Ya=new _({size:5,map:new y(f).load(Qe),transparent:!0,fog:!1}),Za=new _({size:5,map:new y(f).load(ta),transparent:!0,fog:!1}),Ka=new _({size:5,map:new y(f).load(ea),transparent:!0,fog:!1}),Ua=new _({size:5,map:new y(f).load(aa),transparent:!0,fog:!1}),Xa=new _({size:5,map:new y(f).load(sa),transparent:!0,fog:!1}),Ja=new _({size:5,map:new y(f).load(na),transparent:!0,fog:!1}),$a=new _({size:5,map:new y(f).load(oa),transparent:!0,fog:!1}),ye=[];for(let s=0;s<5e3;s++){const t=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3;Math.abs(t)+Math.abs(a)+Math.abs(e)>400&&ye.push(t,a,e)}const ve=[];for(let s=0;s<1e3;s++){const t=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3;Math.abs(t)+Math.abs(a)+Math.abs(e)>400&&ve.push(t,a,e)}const Me=[];for(let s=0;s<500;s++){const t=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3;Math.abs(t)+Math.abs(a)+Math.abs(e)>400&&Me.push(t,a,e)}const Se=[];for(let s=0;s<100;s++){const t=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3;Math.abs(t)+Math.abs(a)+Math.abs(e)>400&&Se.push(t,a,e)}const be=[];for(let s=0;s<25;s++){const t=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3;Math.abs(t)+Math.abs(a)+Math.abs(e)>400&&be.push(t,a,e)}const ze=[];for(let s=0;s<1e3;s++){const t=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3;Math.abs(t)+Math.abs(a)+Math.abs(e)>400&&ze.push(t,a,e)}const Pe=[];for(let s=0;s<500;s++){const t=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3;Math.abs(t)+Math.abs(a)+Math.abs(e)>400&&Pe.push(t,a,e)}const Be=[];for(let s=0;s<100;s++){const t=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3;Math.abs(t)+Math.abs(a)+Math.abs(e)>400&&Be.push(t,a,e)}const Le=[];for(let s=0;s<25;s++){const t=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3;Math.abs(t)+Math.abs(a)+Math.abs(e)>400&&Le.push(t,a,e)}de.setAttribute("position",new E(ye,3));he.setAttribute("position",new E(ve,3));ue.setAttribute("position",new E(Me,3));pe.setAttribute("position",new E(Se,3));fe.setAttribute("position",new E(be,3));me.setAttribute("position",new E(ze,3));ge.setAttribute("position",new E(Pe,3));xe.setAttribute("position",new E(Be,3));we.setAttribute("position",new E(Le,3));const Qa=new A(de,Wa),ts=new A(he,Na),es=new A(ue,Ya),as=new A(pe,Za),ss=new A(fe,Ka),ns=new A(me,Ua),os=new A(ge,Xa),is=new A(xe,Ja),rs=new A(we,$a);j.add(Qa,ts,es,as,ss,ns,os,is,rs);const tt=new L;j.add(tt);const ut=new L,pt=new L,ft=new L,et=new L;ut.rotation.y=-Math.PI/2.5;ut.rotation.x=.15;pt.rotation.y=2*Math.PI/16;pt.rotation.x=.22;ft.rotation.y=2*Math.PI/2;ft.rotation.x=.31;et.rotation.y=5*Math.PI/3;et.rotation.x=-.41;tt.add(ut);tt.add(pt);tt.add(ft);tt.add(et);const O=new y(f),Ie=new Q(5,250,250);Ie.computeBoundingSphere();const g=new z(Ie,new Gt({map:O.load(Pa),normalMap:O.load(Ba),roughnessMap:O.load(La),normalScale:new S(3,3),metalness:0,roughness:.85,flatShading:!1,side:Jt}));j.add(g);const cs=new $t({map:O.load(Ia),transparent:!0,side:Qt,opacity:.8}),Re=new z(new Q(5.04,50,50),cs);g.add(Re);const Te=new z(new Q(5,500,500),new wt({vertexShader:Ra,fragmentShader:Ta,blending:te}));Te.position.set(0,0,0);g.add(Te);const jt=new z(new Q(5.3,50,50),new wt({vertexShader:qa,fragmentShader:Ca,blending:te,side:ia,transparent:!0,depthWrite:!1}));jt.position.set(0,0,0);jt.scale.set(1.2,1.2,1.2);g.add(jt);const $=new L;g.add($);for(let s=0;s<U.length;s++)ee(U[s].src,U[s].lat,U[s].lng-180,U[s].size/500,U[s].radius,$);for(let s=0;s<X.length;s++)ee(X[s].src,X[s].lat,X[s].lng-180,X[s].size/500,X[s].radius,P);ae(Z,$,5);ae(yt,P,7);const qe=1e-4,Ft=3,Ce=.03,_e=5.01,ct=new L;g.add(ct);let Ee=ct;zt(Z,Ot,qe,Ft,Ce,_e,Ee,!1);zt(Z,ga,qe,Ft,Ce,_e,Ee,!0);const Vt=new L;P.add(Vt);let ls=Vt;zt(yt,ne,2e-4,Ft,.1,7.01,ls,!1);let lt=new L;$.add(lt);lt.position.set(0,-5.05,0);const ds=new ra(f);ds.load(ca,function(s){const t=s.scene;lt.add(t),t.scale.set(5,5,5),t.rotation.y+=Math.PI/2,t.rotation.x+=Math.PI/3},function(s){},function(s){console.log("An error happened")});const Ae=5,hs=new Q(Ae,50,50),us=new se({map:new y(f).load(la)}),rt=new z(hs,us);rt.position.set(0,0,490);et.add(rt);const Dt=new kt(16777215,1.2,2e3);Dt.position.set(rt.position.x,rt.position.y,rt.position.z-Ae*1.5);et.add(Dt);const ps=O.load("https://jaranolsen.github.io/Planet/sunflare.webp"),Pt=O.load("https://jaranolsen.github.io/Planet/lensflare.webp"),K=new da;K.position.set(0,0,0);K.addElement(new dt(ps,2560,0));K.addElement(new dt(Pt,60,.6));K.addElement(new dt(Pt,70,.7));K.addElement(new dt(Pt,120,.9));K.addElement(new dt(Pt,70,1));Dt.add(K);class Ht{constructor(t,a,e,n,i,V){this.radius=t,this.texture=a,this.z=e,this.rotation=n,this.pivot=i,this.intensity=V}}let fs=new Ht(1.5,Sa,110,-5e-4,ut,.1),ms=new Ht(2.5,ba,190,-3e-4,pt,.05),gs=new Ht(1,za,250,-1e-4,ft,.005),Y=[fs,ms,gs];for(let s=0;s<Y.length;s++){const t=new z(new Q(Y[s].radius,50,50),new Gt({map:new y(f).load(Y[s].texture),metalness:0,flatShading:!1,side:Jt}));t.position.set(Y[s].z,0,0),Y[s].pivot.add(t);const a=new kt(16777215,Y[s].intensity);a.position.set(Y[s].z,0,0),t.add(a)}let At=!1;function xs(){At=!0,j.add(P);let s=7,t=9,a=[],e=[];for(let o=0;o<t;o++){a[o]=[],e[o]=[];for(let w=2*Math.PI*o;w<=2*Math.PI*(o+1.0000001);w+=Math.PI/128){let H=Math.sin(w/(t*2)),W=H*s*Math.cos(w),N=H*s*Math.sin(w),at=s/(t*Math.PI)*w;a[o].push(new k(W,at-s,N)),o==0?w>2*Math.PI*o+(2*Math.PI*(o+1.0000001)-2*Math.PI*o)*.98&&e[o].push(new k(W,at-s,N)):o<t?(w<2*Math.PI*o+(2*Math.PI*(o+1.0000001)-2*Math.PI*o)*.02&&e[o-1].push(new k(W,at-s,N)),w>2*Math.PI*o+(2*Math.PI*(o+1.0000001)-2*Math.PI*o)*.98&&e[o].push(new k(W,at-s,N))):w<2*Math.PI*o+(2*Math.PI*(o+1.0000001)-2*Math.PI*o)*.02&&e[o-1].push(new k(W,at-s,N))}let M=new Yt(a[o]);const I=new Lt(M,64,.01,10,!1);I.computeBoundingBox();const Ve=new wt({uniforms:{color1:{value:new mt(st[40+o])},color2:{value:new mt(st[40+o+1])},bboxMin:{value:I.boundingBox.min},bboxMax:{value:I.boundingBox.max}},vertexShader:Zt,fragmentShader:Kt}),De=new z(I,Ve);P.add(De);const He=new Lt(M,64,.12-o/70,10,!1),We=new se({color:st[40+o],transparent:!0,opacity:.6}),Ne=new z(He,We);if(P.add(Ne),P.rotation.set(0,0,0),o!==0){let w=new Yt(e[o-1]);const H=new Lt(w,64,.15-o/70,10,!1);H.computeBoundingBox();const W=new wt({uniforms:{color1:{value:new mt(st[40+o-1])},color2:{value:new mt(st[40+o])},bboxMin:{value:H.boundingBox.min},bboxMax:{value:H.boundingBox.max}},vertexShader:Zt,fragmentShader:Kt}),N=new z(H,W);P.add(N)}}const n=O.load(xa);n.repeat.set(0,100),n.wrapT=It,n.rotation=Math.PI/2;const i=O.load(wa);i.repeat.set(1,100),i.wrapS=It,i.wrapT=It,i.rotation=Math.PI/2,i.offset.set(.5,0);const V=new ya(6.05,.05,50,100),D=new Gt({alphaMap:n,transparent:!0,alphaTest:.5,map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.05,color:16777215,metalness:1,roughness:.7}),v=new z(V,D);v.rotation.x=Math.PI/2,v.position.y=2.34,P.add(v)}const ws=100,r=3e-4,ys=new $t({color:12312012,side:Qt}),F=new ha;F.moveTo(r*5,r*5);F.bezierCurveTo(r*5,r*5,r*4,0,0,0);F.bezierCurveTo(-r*6,0,-r*6,r*7,-r*6,r*7);F.bezierCurveTo(-r*6,r*11,-r*3,r*15.4,r*5,r*19);F.bezierCurveTo(r*12,r*15.4,r*16,r*11,r*16,r*7);F.bezierCurveTo(r*16,r*7,r*16,0,r*10,0);F.bezierCurveTo(r*7,0,r*5,r*5,r*5,r*5);const Bt=new ua(F);Bt.center=0;Bt.rotateZ(Math.PI/2);Bt.rotateY(Math.PI/2);class vs{constructor(t,a){this.lat=t,this.lng=a,this.gutt=new z(Bt,ys),this.pos=new S(t,a),this.velocity=new S(gt(0,0),gt(0,1)).setLength(.001),this.acceleration=new S,this.cartesianPosition=R(this.pos.x,this.pos.y,5.1),this.presentHeading,this.originalHeading,this.gutt.position.set(this.cartesianPosition.x,this.cartesianPosition.y,this.cartesianPosition.z),this.wander=new S(0,0),this.alignment=new S(0,0),this.cohesion=new S(0,0),this.separation=new S(0,0),this.avoidance=new S(0,0),g.add(this.gutt)}move(){this.originalHeading=Math.atan2(this.velocity.x,this.velocity.y),this.acceleration.set(0,0),this.alignment.multiplyScalar(c.alignment),this.cohesion.multiplyScalar(c.cohesion),this.separation.multiplyScalar(c.separation),this.acceleration.add(this.wander),this.acceleration.add(this.alignment),this.acceleration.add(this.cohesion),this.acceleration.add(this.separation),this.acceleration.add(this.avoidance),this.velocity.add(this.acceleration),this.velocity.clampLength(-c.max_speed,c.max_speed),this.velocity.setLength(c.max_speed),this.pos.add(this.velocity),this.pos.x<0&&(this.pos.x=Math.abs(this.pos.x),this.pos.y<180?this.pos.y+=180:this.pos.y-=180,this.velocity.x*=-1,this.velocity.y*=-1),this.pos.x>180&&(this.pos.x=180-(this.pos.x-180),this.pos.y<180?this.pos.y+=180:this.pos.y-=180,this.velocity.x*=-1,this.velocity.y*=-1),this.pos.y<0&&(this.pos.y=360+this.pos.y),this.pos.y>360&&(this.pos.y=this.pos.y-360),this.cartesianPosition=R(this.pos.x,this.pos.y,5.1),this.cartesianVelocity=R(this.velocity.x,this.velocity.y,5.1),this.presentHeading=Math.atan2(this.velocity.x,this.velocity.y),this.cp=new k,this.cp.set(this.cartesianPosition.x,this.cartesianPosition.y,this.cartesianPosition.z),this.gutt.lookAt(this.cp),this.gutt.rotateZ(this.presentHeading-this.originalHeading),this.gutt.position.set(this.cartesianPosition.x,this.cartesianPosition.y,this.cartesianPosition.z)}calculateWander(){this.wander.set(gt(-1e-4,1e-4),gt(-1e-4,1e-4)),this.wander.clampLength(-c.max_force,c.max_force)}calculateAlignment(){let t=0;this.alignment.set(0,0);for(let a=0;a<u.length;a++)u[a]!=this&&this.gutt.position.distanceTo(u[a].gutt.position)<c.alignment_perception_distance&&(this.alignment.add(u[a].velocity),t+=1);t>0&&(this.alignment.set(this.alignment.x/t,this.alignment.y/t),this.alignment.sub(this.velocity),this.alignment.clampLength(-c.max_force,c.max_force))}calculateCohesion(){let t=0;this.cohesion.set(0,0);for(let a=0;a<u.length;a++)u[a]!=this&&this.gutt.position.distanceTo(u[a].gutt.position)<c.cohesion_perception_distance&&(this.cohesion.add(u[a].pos),t+=1);t>0&&(this.cohesion.set(this.cohesion.x/t,this.cohesion.y/t),this.cohesion.sub(this.pos),this.cohesion.clampLength(-c.max_force,c.max_force))}calculateSeparation(){let t=0;this.separation.set(0,0);for(let a=0;a<u.length;a++)if(u[a]!=this&&this.gutt.position.distanceTo(u[a].gutt.position)<c.separation_perception_distance){let e=new S(this.pos.x-u[a].pos.x,this.pos.y-u[a].pos.y);e.divideScalar(this.gutt.position.distanceTo(u[a].gutt.position)),this.separation.add(e),t+=1}t>0&&(this.separation.set(this.separation.x/t,this.separation.y/t),this.separation.clampLength(-c.max_force,c.max_force))}calculateTemperature(){this.avoidance.set(0,0),this.pos.x<40&&(this.avoidance.set(Math.pow(40-this.pos.x,2)/1e5,0),this.avoidance.clampLength(-c.max_force,c.max_force)),this.pos.x>140&&(this.avoidance.set(-Math.pow(140-this.pos.x,2)/1e5,0),this.avoidance.clampLength(-c.max_force,c.max_force))}}let u=[];for(let s=0;s<ws;s++){let t=va(40,140,5),a=Ma(0,359);u.push(new vs(t,a))}const Ge=new _a;let c={alignment:.016,alignment_perception_distance:.435,cohesion:.754,cohesion_perception_distance:.887,separation:.765,separation_perception_distance:.225,max_force:.0029,max_speed:.01};const G=Ge.addFolder("parameters");G.add(c,"alignment",0,.1,1e-4);G.add(c,"alignment_perception_distance",0,1,.001);G.add(c,"cohesion",0,1,.001);G.add(c,"cohesion_perception_distance",0,1,.001);G.add(c,"separation",0,1,.001);G.add(c,"separation_perception_distance",0,1,.001);G.add(c,"max_force",0,.01,1e-4);G.add(c,"max_speed",0,.1,.001);G.close();Ge.hide();const Ms=new pa(16777215,.02);j.add(Ms);const x=new fa(15723480,0);x.penumbra=.8;x.angle=Math.PI/4;j.add(x);let J=.5;const ke=new kt(16777215,.5);ke.position.set(0,0,0);g.add(ke);h.push([Z,Z.length,Ot,ct,5.01]);h.push([yt,h[h.length-1][1]+yt.length,ne,Vt,7.01]);const ot=[];let Xt;const Ss=document.querySelector("#fpsCounter"),Oe=document.createElement("div");function je(){window.requestAnimationFrame(()=>{const s=performance.now();for(;ot.length>0&&ot[0]<=s-1e3;)ot.shift();ot.push(s),Xt=ot.length,Oe.textContent=Xt,je()})}Ss.appendChild(Oe);je();function bs(){St.setFromCamera(Mt,l);const s=St.intersectObjects(Tt);if(s.length==0)for(let t=0;t<q.length;t++)q[t].pin.material.color.set(q[t].originalColor);for(let t=0;t<s.length;t++)s[t].object.material.color.set(16711680)}document.addEventListener("keyup",zs,!1);function zs(s){const t=s.which;if(t==65&&(m.length=0),t==73&&oe(0),t==90&&p!==null&&(m.indexOf(p)==-1&&m.push(p),console.log(m)),t==67&&(Rt==!0?(g.remove($),g.remove(ct),Rt=!1):(g.add($),g.add(ct),Rt=!0)),t==70&&(b==!0?b=!1:b=!0),t==76&&(x.intensity==0?x.intensity=J:x.intensity==J?x.intensity=J*2:x.intensity==J*2?x.intensity=J*3:x.intensity==J*3&&(x.intensity=0)),t==81){let a="";const e=h[d][0];for(let n=0;n<e.length;n++)a=a+'    {id: "'+e[n].id+'", text: '+JSON.stringify(e[n].text)+", lat: "+e[n].lat+", lng: "+e[n].lng+", color: "+e[n].color+", size: "+e[n].size+", slides: "+e[n].slides+`},
`;console.log(a)}if(t==83&&(At==!1?xs():(At=!1,j.remove(P))),t==87){const a=[h[d][0],h[d][2],h[d][3],h[d][4]];a[2].clear();const e=2e-4,n=3,i=.03;zt(a[0],a[1],e,n,i,a[3],a[2])}if(t==187){let a=0,e=0,n={context:h[d][0]},i;d>0?i=h[d-1][1]:i=0,p&&(a=q[p].originalSize),n.context[p-i].size+=5,e=n.context[p-i].size,T.scale.set(e/a,e/a,e/a),bt.scale.set(e/a,e/a,e/a)}if(t==189){let a=0,e=0,n={context:h[d][0]},i;d>0?i=h[d-1][1]:i=0,p&&(a=q[p].originalSize),n.context[p-i].size-=5,e=n.context[p-i].size,T.scale.set(e/a,e/a,e/a),bt.scale.set(e/a,e/a,e/a)}}document.addEventListener("keydown",Ps,!1);function Ps(s){const t=s.which;if(m.length>0){const a={context:h[d][0],length:h[d][1],radius:h[d][4]};for(let e=0;e<m.length;e++)if(t==38||t==40||t==37||t==39){let n=Wt(q[m[e]].pin.position.x,q[m[e]].pin.position.y,q[m[e]].pin.position.z);t==38?(b&&(n.lat-=.4),n.lat-=.1):t==40?(b&&(n.lat+=.4),n.lat+=.1):t==37?(b&&(n.lng-=.4),n.lng-=.1):t==39&&(b&&(n.lng+=.4),n.lng+=.1);const i=a.radius,V=a.radius+.04,D=a.radius+.05,v=R(n.lat,n.lng,i),o=R(n.lat,n.lng,V),M=R(n.lat,n.lng,D);q[m[e]].pin.position.set(v.x,v.y,v.z),vt[m[e]].box.position.set(o.x,o.y,o.z),vt[m[e]].tag.position.set(M.x,M.y,M.z),n=Nt(n.lat,n.lng-180);let I;d>0?I=h[d-1][1]:I=0,a.context[m[e]-I].lat=n.lat.toFixed(1),a.context[m[e]-I].lng=n.lng.toFixed(1)}}else if(T!=null){const a={context:h[d][0],length:h[d][1],radius:h[d][4]};if(t==38||t==40||t==37||t==39){let e=Wt(T.position.x,T.position.y,T.position.z);t==38?(b&&(e.lat-=.4),e.lat-=.1):t==40?(b&&(e.lat+=.4),e.lat+=.1):t==37?(b&&(e.lng-=.4),e.lng-=.1):t==39&&(b&&(e.lng+=.4),e.lng+=.1);const n=a.radius,i=a.radius+.04,V=a.radius+.05,D=R(e.lat,e.lng,n),v=R(e.lat,e.lng,i),o=R(e.lat,e.lng,V);T.position.set(D.x,D.y,D.z),bt.position.set(v.x,v.y,v.z),ce.position.set(o.x,o.y,o.z),e=Nt(e.lat,e.lng-180);let M;d>0?M=h[d-1][1]:M=0,a.context[p-M].lat=e.lat.toFixed(1),a.context[p-M].lng=e.lng.toFixed(1)}}}function Bs(s){Mt.x=s.clientX/window.innerWidth*2-1,Mt.y=-(s.clientY/window.innerHeight)*2+1}function Fe(s){St.setFromCamera(Mt,l);const t=St.intersectObjects(Tt);if(t.length>0){T=t[0].object,p=Tt.findIndex(i=>i==t[0].object),bt=vt[p].box,ce=vt[p].tag;const a=d;for(let i=0;i<100;i++)if(p<h[i][1]){d=i,d!==a&&(m.length=0);break}let e;d>0?e=h[d-1][1]:e=0;let n=h[d][0];if(l.position.distanceTo(T.position)<4&&n[p-e].slides!==void 0){const i=Z[p].slides;oe(i),Et=document.querySelector(".carousel.s1"),Et.style.display="block"}}}window.addEventListener("pointermove",Bs);window.addEventListener("click",Fe);window.addEventListener("touchstart",Fe);Z.length!==Ot.length&&console.log("ERROR: tagPlanetData.length !== tagPlanetConnections.length");function Ls(){it.setAnimationLoop(Is)}function Is(s){if(Ea(it)){const e=it.domElement;l.aspect=e.clientWidth/e.clientHeight,l.updateProjectionMatrix()}for(let e=0;e<u.length;e++)u[e].calculateWander(),u[e].calculateAlignment(),u[e].calculateCohesion(),u[e].calculateSeparation(),u[e].calculateTemperature(),u[e].move();bs(),it.render(j,l);const t=l.position,a=l.rotation;x.position.set(t.x,t.y,t.z),x.rotation.set(a.x,a.y,a.z),tt.rotation.y+=-1e-5,ut.rotation.y+=-3e-4,pt.rotation.y+=-3e-5,ft.rotation.y+=-9e-6,et.rotation.y+=1e-4,Re.rotation.y+=1e-5,l.position.z>15&&qt==!0&&(l.position.z-=.0213*Math.pow(l.position.z-10,1.35)/Ut,g.rotation.y+=5e-4),l.position.z<-15&&qt==!0&&(l.position.z+=.213*Math.pow(Math.abs(l.position.z)-10,1.35)/Ut,g.rotation.y+=5e-4),B.rotateSpeed=(l.position.distanceTo(xt)-5)/l.position.distanceTo(xt),B.zoomSpeed=(l.position.distanceTo(xt)-5)/l.position.distanceTo(xt)/3,lt&&(nt.set(l.position.x,l.position.y,l.position.z),nt.normalize(),lt.lookAt(nt.x,nt.y,nt.z)),B.update()}Ls();
