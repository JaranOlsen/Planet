import{W as bt,P as Bt,b as Pt,c as It,V as ke,R as zt,d as q,O as p,B as w,e as y,T as u,s as qt,f as Rt,g as Tt,h as Ct,i as Et,j as Lt,k as At,l as kt,m as Gt,F as M,n as x,S as ie,a as g,o as xe,p as Ge,q as jt,D as Ot,u as E,v as je,w as L,x as Oe,y as ge,G as Vt,z as Dt,M as Ve,C as Ft,E as ve,L as Wt,H as U,K as Ht,N as Xt,Q as T,U as Se,X as se,Y as De,a1 as Yt,a4 as Kt,a5 as Re,a6 as le,r as Te,a7 as J,a8 as F,a9 as Ce,aa as Ee,ab as Nt,ac as de,ad as Ut,ae as Qt,al as Zt,am as _t,an as $t,ak as fe,_ as ue,ai as Fe}from"./sign-030e1af6.js";const Jt="/Planet/assets/diffuse2kvibrance-48da219c.webp",ea="/Planet/assets/normal1k-6607b0ee.webp",ta="/Planet/assets/roughness1k-d782f3af.webp",aa="/Planet/assets/clouds1k-0a6ee0f6.webp",We=document.querySelector("#c"),X=new bt({canvas:We,antialias:!0});X.setPixelRatio(window.devicePixelRatio);function na(t){const e=t.domElement,a=e.clientWidth,n=e.clientHeight,o=e.width!==a||e.height!==n;return o&&t.setSize(a,n,!1),o}const sa=50,oa=2,ia=.1,ra=2e3,i=new Bt(sa,oa,ia,ra);i.position.z=500;const m=new Pt(i,We);m.enablePan=!1;m.maxDistance=1e3;m.minDistance=5.2;m.zoomSpeed=.3;m.rotateSpeed=.3;m.target.set(0,0,0);m.update();const S=new It,ne=new ke,oe=new zt;new Fe;new Fe;let R=[],ee=null,Le=null,te=null,he=!0,W=new q(i.position.x,i.position.y,i.position.z);const ae=new q(0,0,0),f=new p,r=new Yt;r.onStart=function(t,e,a){};const ca=document.getElementById("progress-bar");r.onProgress=function(t,e,a){ca.value=e/a*100};const la=document.querySelector(".progress-bar-container");r.onLoad=function(){la.style.display="none"};r.onError=function(t){console.log("There was an error loading "+t)};let pe=!1;const re=document.getElementById("introTune");re.preload="auto";re.currentTime=1.4;re.volume=.25;const be=document.getElementById("introSpeech");be.preload="auto";be.currentTime=1.4;const me=document.getElementById("playbutton"),He=document.getElementById("credits");me.addEventListener("click",()=>{re.play(),setTimeout(function(){be.play()},4e4),pe=!0,me.style.display="none",we.style.display="none",He.style.display="none"});const we=document.getElementById("skipbutton");we.addEventListener("click",()=>{me.style.display="none",we.style.display="none",He.style.display="none",i.position.z=15});let ye;const da=document.querySelectorAll("[data-carousel-button]");da.forEach(t=>{t.addEventListener("click",()=>{if(document.querySelector(".carousel"),t.dataset.carouselButton==="exit")ye.style.display="none";else{const e=t.dataset.carouselButton==="next"?1:-1,a=t.closest("[data-carousel]").querySelector("[data-slides]"),n=a.querySelector("[data-active]");let o=[...a.children].indexOf(n)+e;a.children[o].dataset.active=!0,delete n.dataset.active}})});const ua=document.querySelectorAll("[data-menu-button]");ua.forEach(t=>{t.addEventListener("click",()=>{if(document.querySelector(".carousel"),t.dataset.menuButton==="menu"){const e=t.closest("[data-carousel]").querySelector("[data-slides]"),a=e.querySelector("[data-active]"),n=e.querySelector("[menu]");let o=[...e.children].indexOf(n);e.children[o].dataset.active=!0,delete a.dataset.active}if(t.dataset.menuButton==="definition"){const e=t.closest("[data-carousel]").querySelector("[data-slides]"),a=e.querySelector("[data-active]"),n=e.querySelector("[definition]");let o=[...e.children].indexOf(n);e.children[o].dataset.active=!0,delete a.dataset.active}if(t.dataset.menuButton==="exercise"){const e=t.closest("[data-carousel]").querySelector("[data-slides]"),a=e.querySelector("[data-active]"),n=e.querySelector("[exercise]");let o=[...e.children].indexOf(n);e.children[o].dataset.active=!0,delete a.dataset.active}if(t.dataset.menuButton==="theory"){const e=t.closest("[data-carousel]").querySelector("[data-slides]"),a=e.querySelector("[data-active]"),n=e.querySelector("[theory]");let o=[...e.children].indexOf(n);e.children[o].dataset.active=!0,delete a.dataset.active}if(t.dataset.menuButton==="media"){const e=t.closest("[data-carousel]").querySelector("[data-slides]"),a=e.querySelector("[data-active]"),n=e.querySelector("[media]");let o=[...e.children].indexOf(n);e.children[o].dataset.active=!0,delete a.dataset.active}})});const ha=document.querySelectorAll("[data-nav-button]");ha.forEach(t=>{t.addEventListener("click",()=>{if(document.querySelector(".carousel"),t.dataset.navButton==="one"){const e=t.closest("[data-carousel]").querySelector("[data-slides]"),a=e.querySelector("[data-active]"),n=e.querySelector("[one]");let o=[...e.children].indexOf(n);e.children[o].dataset.active=!0,delete a.dataset.active}if(t.dataset.navButton==="two"){const e=t.closest("[data-carousel]").querySelector("[data-slides]"),a=e.querySelector("[data-active]"),n=e.querySelector("[two]");let o=[...e.children].indexOf(n);e.children[o].dataset.active=!0,delete a.dataset.active}if(t.dataset.navButton==="three"){const e=t.closest("[data-carousel]").querySelector("[data-slides]"),a=e.querySelector("[data-active]"),n=e.querySelector("[three]");let o=[...e.children].indexOf(n);e.children[o].dataset.active=!0,delete a.dataset.active}if(t.dataset.navButton==="four"){const e=t.closest("[data-carousel]").querySelector("[data-slides]"),a=e.querySelector("[data-active]"),n=e.querySelector("[four]");let o=[...e.children].indexOf(n);e.children[o].dataset.active=!0,delete a.dataset.active}if(t.dataset.navButton==="five"){const e=t.closest("[data-carousel]").querySelector("[data-slides]"),a=e.querySelector("[data-active]"),n=e.querySelector("[five]");let o=[...e.children].indexOf(n);e.children[o].dataset.active=!0,delete a.dataset.active}})});const Xe=new w,Ye=new w,Ke=new w,Ne=new w,Ue=new w,Qe=new w,Ze=new w,_e=new w,$e=new w,fa=new y({size:5,map:new u(r).load(qt),transparent:!0,fog:!1}),pa=new y({size:5,map:new u(r).load(Rt),transparent:!0,fog:!1}),ma=new y({size:5,map:new u(r).load(Tt),transparent:!0,fog:!1}),wa=new y({size:5,map:new u(r).load(Ct),transparent:!0,fog:!1}),ya=new y({size:5,map:new u(r).load(Et),transparent:!0,fog:!1}),Ma=new y({size:5,map:new u(r).load(Lt),transparent:!0,fog:!1}),xa=new y({size:5,map:new u(r).load(At),transparent:!0,fog:!1}),ga=new y({size:5,map:new u(r).load(kt),transparent:!0,fog:!1}),va=new y({size:5,map:new u(r).load(Gt),transparent:!0,fog:!1}),Je=[];for(let t=0;t<5e3;t++){const e=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(a)+Math.abs(n)>400&&Je.push(e,a,n)}const et=[];for(let t=0;t<1e3;t++){const e=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(a)+Math.abs(n)>400&&et.push(e,a,n)}const tt=[];for(let t=0;t<500;t++){const e=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(a)+Math.abs(n)>400&&tt.push(e,a,n)}const at=[];for(let t=0;t<100;t++){const e=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(a)+Math.abs(n)>400&&at.push(e,a,n)}const nt=[];for(let t=0;t<25;t++){const e=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(a)+Math.abs(n)>400&&nt.push(e,a,n)}const st=[];for(let t=0;t<1e3;t++){const e=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(a)+Math.abs(n)>400&&st.push(e,a,n)}const ot=[];for(let t=0;t<500;t++){const e=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(a)+Math.abs(n)>400&&ot.push(e,a,n)}const it=[];for(let t=0;t<100;t++){const e=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(a)+Math.abs(n)>400&&it.push(e,a,n)}const rt=[];for(let t=0;t<25;t++){const e=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(a)+Math.abs(n)>400&&rt.push(e,a,n)}Xe.setAttribute("position",new M(Je,3));Ye.setAttribute("position",new M(et,3));Ke.setAttribute("position",new M(tt,3));Ne.setAttribute("position",new M(at,3));Ue.setAttribute("position",new M(nt,3));Qe.setAttribute("position",new M(st,3));Ze.setAttribute("position",new M(ot,3));_e.setAttribute("position",new M(it,3));$e.setAttribute("position",new M(rt,3));const Sa=new x(Xe,fa),ba=new x(Ye,pa),Ba=new x(Ke,ma),Pa=new x(Ne,wa),Ia=new x(Ue,ya),za=new x(Qe,Ma),qa=new x(Ze,xa),Ra=new x(_e,ga),Ta=new x($e,va);S.add(Sa,ba,Ba,Pa,Ia,za,qa,Ra,Ta);const G=new p;S.add(G);const Q=new p,Z=new p,_=new p,j=new p;Q.rotation.y=-Math.PI/2.5;Q.rotation.x=.15;Z.rotation.y=2*Math.PI/16;Z.rotation.x=.22;_.rotation.y=2*Math.PI/2;_.rotation.x=.31;j.rotation.y=5*Math.PI/3;j.rotation.x=-.41;G.add(Q);G.add(Z);G.add(_);G.add(j);const v=new u(r);let Ca=v.load(Jt);const ct=new ie(5,250,250);ct.computeBoundingSphere();const h=new g(ct,new xe({map:Ca,normalMap:v.load(ea),roughnessMap:v.load(ta),normalScale:new ke(1,1),metalness:0,roughness:.85,flatShading:!1,side:Ge}));S.add(h);const Ea=new jt({map:v.load(aa),transparent:!0,side:Ot,opacity:.8}),lt=new g(new ie(5.04,50,50),Ea);h.add(lt);const k=new p;h.add(k);for(let t=0;t<E.length;t++)je(E[t].src,E[t].lat,E[t].lng-180,E[t].size/500,E[t].radius,k);for(let t=0;t<L.length;t++)je(L[t].src,L[t].lat,L[t].lng-180,L[t].size/500,L[t].radius,f);Oe(T,k,5);Oe(se,f,7);const dt=1e-4,Be=3,ut=.03,ht=5.01,K=new p;h.add(K);let ft=K;ge(T,Se,dt,Be,ut,ht,ft,!1);ge(T,Kt,dt,Be,ut,ht,ft,!0);const Pe=new p;f.add(Pe);let La=Pe;ge(se,De,2e-4,Be,.1,7.01,La,!1);let N=new p;k.add(N);N.position.set(0,-5.05,0);const Aa=new Vt(r);Aa.load(Dt,function(t){const e=t.scene;N.add(e),e.scale.set(5,5,5),e.rotation.y+=Math.PI/2,e.rotation.x+=Math.PI/3},function(t){},function(t){console.log("An error happened")});const pt=5,ka=new ie(pt,50,50),Ga=new Ve({map:new u(r).load(Ft)}),Y=new g(ka,Ga);Y.position.set(0,0,490);j.add(Y);const Ie=new ve(16777215,1.2,2e3);Ie.position.set(Y.position.x,Y.position.y,Y.position.z-pt*1.5);j.add(Ie);const ja=v.load("https://jaranolsen.github.io/Planet/sunflare.webp"),ce=v.load("https://jaranolsen.github.io/Planet/lensflare.webp"),C=new Wt;C.position.set(0,0,0);C.addElement(new U(ja,2560,0));C.addElement(new U(ce,60,.6));C.addElement(new U(ce,70,.7));C.addElement(new U(ce,120,.9));C.addElement(new U(ce,70,1));Ie.add(C);class ze{constructor(e,a,n,o,c,b){this.radius=e,this.texture=a,this.z=n,this.rotation=o,this.pivot=c,this.intensity=b}}let Oa=new ze(1.5,Zt,110,-5e-4,Q,.1),Va=new ze(2.5,_t,190,-3e-4,Z,.05),Da=new ze(1,$t,250,-1e-4,_,.005),z=[Oa,Va,Da];for(let t=0;t<z.length;t++){const e=new g(new ie(z[t].radius,50,50),new xe({map:new u(r).load(z[t].texture),metalness:0,flatShading:!1,side:Ge}));e.position.set(z[t].z,0,0),z[t].pivot.add(e);const a=new ve(16777215,z[t].intensity);a.position.set(z[t].z,0,0),e.add(a)}let Me=!1;function Fa(){Me=!0,S.add(f);let t=7,e=9,a=[],n=[];for(let s=0;s<e;s++){a[s]=[],n[s]=[];for(let d=2*Math.PI*s;d<=2*Math.PI*(s+1.0000001);d+=Math.PI/128){let B=Math.sin(d/(e*2)),P=B*t*Math.cos(d),I=B*t*Math.sin(d),D=t/(e*Math.PI)*d;a[s].push(new q(P,D-t,I)),s==0?d>2*Math.PI*s+(2*Math.PI*(s+1.0000001)-2*Math.PI*s)*.98&&n[s].push(new q(P,D-t,I)):s<e?(d<2*Math.PI*s+(2*Math.PI*(s+1.0000001)-2*Math.PI*s)*.02&&n[s-1].push(new q(P,D-t,I)),d>2*Math.PI*s+(2*Math.PI*(s+1.0000001)-2*Math.PI*s)*.98&&n[s].push(new q(P,D-t,I))):d<2*Math.PI*s+(2*Math.PI*(s+1.0000001)-2*Math.PI*s)*.02&&n[s-1].push(new q(P,D-t,I))}let qe=new Re(a[s]);const $=new le(qe,64,.01,10,!1);$.computeBoundingBox();const Mt=new Te({uniforms:{color1:{value:new J(F[40+s])},color2:{value:new J(F[40+s+1])},bboxMin:{value:$.boundingBox.min},bboxMax:{value:$.boundingBox.max}},vertexShader:Ce,fragmentShader:Ee}),xt=new g($,Mt);f.add(xt);const gt=new le(qe,64,.12-s/70,10,!1),vt=new Ve({color:F[40+s],transparent:!0,opacity:.6}),St=new g(gt,vt);if(f.add(St),f.rotation.set(0,0,0),s!==0){let d=new Re(n[s-1]);const B=new le(d,64,.15-s/70,10,!1);B.computeBoundingBox();const P=new Te({uniforms:{color1:{value:new J(F[40+s-1])},color2:{value:new J(F[40+s])},bboxMin:{value:B.boundingBox.min},bboxMax:{value:B.boundingBox.max}},vertexShader:Ce,fragmentShader:Ee}),I=new g(B,P);f.add(I)}}const o=v.load(Nt);o.repeat.set(0,100),o.wrapT=de,o.rotation=Math.PI/2;const c=v.load(Ut);c.repeat.set(1,100),c.wrapS=de,c.wrapT=de,c.rotation=Math.PI/2,c.offset.set(.5,0);const b=new Qt(6.05,.05,50,100),O=new xe({alphaMap:o,transparent:!0,alphaTest:.5,map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:.05,color:16777215,metalness:1,roughness:.7}),V=new g(b,O);V.rotation.x=Math.PI/2,V.position.y=2.34,f.add(V)}const Wa=new Ht(16777215,.02);S.add(Wa);const l=new Xt(15723480,0);l.penumbra=.8;l.angle=Math.PI/8;S.add(l);let A=.5;const mt=new ve(16777215,.5);mt.position.set(0,0,0);h.add(mt);R.push([T,T.length,Se,K,5.01]);R.push([se,R[R.length-1][1]+se.length,De,Pe,7.01]);function Ha(){oe.setFromCamera(ne,i);const t=oe.intersectObjects(fe);if(t.length==0)for(let e=0;e<ue.length;e++)ue[e].pin.material.color.set(ue[e].originalColor);for(let e=0;e<t.length;e++)t[e].object.material.color.set(16711680)}document.addEventListener("keyup",Xa,!1);function Xa(t){const e=t.which;e==67&&(he==!0?(h.remove(k),h.remove(K),he=!1):(h.add(k),h.add(K),he=!0)),e==76&&(l.intensity==0?l.intensity=A:l.intensity==A?l.intensity=A*2:l.intensity==A*2?l.intensity=A*3:l.intensity==A*3&&(l.intensity=0)),e==83&&(Me==!1?Fa():(Me=!1,S.remove(f)))}const H=[];let Ae;const Ya=document.querySelector("#fpsCounter"),wt=document.createElement("div");function yt(){window.requestAnimationFrame(()=>{const t=performance.now();for(;H.length>0&&H[0]<=t-1e3;)H.shift();H.push(t),Ae=H.length,wt.textContent=Ae,yt()})}Ya.appendChild(wt);yt();T.length!==Se.length&&console.log("ERROR: tagPlanetData.length !== tagPlanetConnections.length");function Ka(){X.setAnimationLoop(Na)}function Na(t){if(na(X)){const c=X.domElement;i.aspect=c.clientWidth/c.clientHeight,i.updateProjectionMatrix()}function e(c){ne.x=c.clientX/window.innerWidth*2-1,ne.y=-(c.clientY/window.innerHeight)*2+1}function a(c){oe.setFromCamera(ne,i);const b=oe.intersectObjects(fe);if(b.length>0){Le=b[0].object,te=fe.findIndex(s=>s==b[0].object);for(let s=0;s<100;s++)if(te<R[s][1]){ee=s;break}let O;ee>0?O=R[ee-1][1]:O=0;let V=R[ee][0];if(i.position.distanceTo(Le.position)<4&&V[te-O].slides!==void 0){const s=T[te].slides;ye=document.querySelector(`.carousel.s${s}`),ye.style.display="block"}}}window.addEventListener("pointermove",e),window.addEventListener("mouseup",a),document.addEventListener("touchstart",a),Ha(),X.render(S,i);const n=i.position,o=i.rotation;l.position.set(n.x,n.y,n.z),l.rotation.set(o.x,o.y,o.z),G.rotation.y+=-1e-5,Q.rotation.y+=-3e-4,Z.rotation.y+=-3e-5,_.rotation.y+=-9e-6,j.rotation.y+=1e-4,lt.rotation.y+=1e-5,i.position.z>15&&pe==!0&&(i.position.z-=1e-4*Math.pow(i.position.z-10,1.35),h.rotation.y+=5e-4),i.position.z<-15&&pe==!0&&(i.position.z+=1e-4*Math.pow(Math.abs(i.position.z)-10,1.35),h.rotation.y+=5e-4),m.rotateSpeed=(i.position.distanceTo(ae)-5)/i.position.distanceTo(ae),m.zoomSpeed=(i.position.distanceTo(ae)-5)/i.position.distanceTo(ae)/3,N&&(W.set(i.position.x,i.position.y,i.position.z),W.normalize(),N.lookAt(W.x,W.y,W.z))}Ka();
