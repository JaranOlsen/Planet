import{W as en,P as tn,O as nn,S as sn,V as P,R as an,a as q,b as S,B as T,c as j,T as M,s as on,d as rn,e as ln,f as cn,g as dn,h as un,i as hn,j as fn,k as pn,F as D,l as G,m as te,M as I,n as je,o as ot,p as it,D as rt,q as Se,A as lt,r as mn,t as $,u as ct,v as K,w as dt,x as Be,G as gn,y as xn,z as ut,C as yn,E as De,L as wn,H as fe,I as vn,J as Sn,K as Mn,N as bn,Q as V,U as Ge,X as Me,Y as ht,Z as ft,_ as Xe,$ as A,a0 as be,a1 as Ue,a2 as zn,a3 as R,a4 as Pn,a5 as Ln,a6 as Je,a7 as Ee,a8 as ye,a9 as oe,aa as Ye,ab as Ze,ac as Rn,ad as Te,ae as In,af as Bn,ag as we,ah as qn,ai as Cn,aj as ce,ak as pt,al as En,am as Tn,an as _n,ao as On}from"./sign-0ca2e6cb.js";import{d as An,n as jn,r as Dn,c as Gn,a as Fn,b as kn,e as Vn,f as Wn,G as Hn,V as Nn,X as Xn,g as Un}from"./clouds4k-99ef0f24.js";const Jn="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",Yn="generic-trigger",mt=document.querySelector("#c"),x=new en({canvas:mt,antialias:!0});x.setPixelRatio(window.devicePixelRatio);function Zn(s){const e=s.domElement,n=e.clientWidth,t=e.clientHeight,a=e.width!==n||e.height!==t;return a&&s.setSize(n,t,!1),a}const $n=50,Kn=2,Qn=.1,es=2e3,l=new tn($n,Kn,Qn,es);l.position.z=500;const E=new nn(l,mt);E.enablePan=!1;E.maxDistance=1e3;E.minDistance=5.2;E.zoomSpeed=.3;E.rotateSpeed=.3;E.target.set(0,0,0);E.update();const F=new sn,ze=new P,Y=new an,ts=new pt;new pt;let u=[],d=null,C=null,Pe=null,gt=null,f=null,g=[],_e=!0,L=!1,ie=new q(l.position.x,l.position.y,l.position.z);const ve=new q(0,0,0),B=new S;let xt=!1;const p=new zn;p.onStart=function(s,e,n){};const ns=document.getElementById("progress-bar");p.onProgress=function(s,e,n){ns.value=e/n*100};const ss=document.querySelector(".progress-bar-container");p.onLoad=function(){ss.style.display="none"};p.onError=function(s){console.log("There was an error loading "+s)};const Le=document.getElementById("enableVRbutton");Le.addEventListener("click",()=>{Le.style.display="none",xt=!0});async function as(){navigator.xr.isSessionSupported("immersive-vr").then(s=>{if(s){const e=Nn.createButton(x);document.body.appendChild(e),is()}})}xt==!0&&as();function os(){window.dolly=new S,window.dummyCam=new S,window.workingMatrix=new En,window.buttonStates={},window.gamepadIndices="",window.info={},window.controllers={},window.elapsedTime=0,window.dollyLat=90,window.dollyLng=180,window.dollyRadius=8,window.XRinSession=!1}function is(){x.xr.enabled=!0,os(),l.position.set(0,1.6,0);const s=R(dollyLat,dollyLng,dollyRadius);dolly.position.set(s.x,s.y-1.6,s.z),dolly.add(l),F.add(dolly),l.add(dummyCam),x.xr.getController(0).addEventListener("connected",rs);const n=new Xn,t=new T().setFromPoints([new q(0,0,0),new q(0,0,-1)]),a=new Pn(t);a.scale.z=0,controllers={},controllers.right=$e(0,a,n),controllers.left=$e(1,a,n)}function rs(s){Re.style.display="none",Ie.style.display="none",Fe.style.display="none",info={},Un(s.data,Jn,Yn).then(({profile:e,assetPath:n})=>{console.log(JSON.stringify(e)),info.name=e.profileId,info.targetRayMode=s.data.targetRayMode,Object.entries(e.layouts).forEach(([t,a])=>{const o={};Object.values(a.components).forEach(m=>{o[m.rootNodeName]=m.gamepadIndices}),info[t]=o}),ls(info.right),console.log(JSON.stringify(info)),cs(info)})}function ls(s){buttonStates={},gamepadIndices=s,Object.keys(s).forEach(e=>{e.indexOf("touchpad")!=-1||e.indexOf("thumbstick")!=-1?buttonStates[e]={button:0,xAxis:0,yAxis:0}:buttonStates[e]=0})}function cs(s){if(s.right!==void 0){const e=x.xr.getController(0);let n=!1,t=!1;Object.keys(s.right).forEach(a=>{a.indexOf("trigger")!=-1&&(n=!0),a.indexOf("squeeze")!=-1&&(t=!0)}),n&&(e.addEventListener("selectstart",Ke),e.addEventListener("selectend",Qe)),t&&(e.addEventListener("squeezestart",et),e.addEventListener("squeezeend",tt)),e.addEventListener("disconnected",nt)}if(s.left!==void 0){const e=x.xr.getController(1);let n=!1,t=!1;Object.keys(s.left).forEach(a=>{a.indexOf("trigger")!=-1&&(n=!0),a.indexOf("squeeze")!=-1&&(t=!0)}),n&&(e.addEventListener("selectstart",Ke),e.addEventListener("selectend",Qe)),t&&(e.addEventListener("squeezestart",et),e.addEventListener("squeezeend",tt)),e.addEventListener("disconnected",nt)}}function $e(s,e,n){const t=x.xr.getController(s);t.userData.selectPressed=!1,t.userData.index=s,e&&t.add(e.clone()),dolly.add(t);let a;return n&&(a=x.xr.getControllerGrip(s),a.add(n.createControllerModel(a)),dolly.add(a)),{controller:t,grip:a}}function Ke(){console.log("select"),this.userData.selectPressed=!0}function Qe(){this.children[0].scale.z=0,this.userData.selectPressed=!1,this.userData.selected=void 0,console.log("selectend")}function et(){this.userData.squeezePressed=!0,this.userData.selected!==void 0&&(this.attach(this.userData.selected),this.userData.attachedObject=userData.selected),console.log("squeeze")}function tt(){this.userData.squeezePressed=!1,this.userData.attachedObject!==void 0&&(room.attach(this.userData.attachedObject),this.userData.attachedObject=void 0),console.log("squeezeend")}function nt(){const s=userData.index;if(console.log(`Disconnected controller ${s}`),controllers){const e=s==0?controllers.right:controllers.left;if(e){if(e.controller){const n=e.controller;for(;n.children.length>0;)n.remove(n.children[0]);dolly.remove(n)}e.grip&&dolly.remove(e.grip)}}}function ds(s){if(s.userData.selectPressed){s.children[0].scale.z=10,workingMatrix.identity().extractRotation(s.matrixWorld),Y.ray.origin.setFromMatrixPosition(s.matrixWorld),Y.ray.direction.set(0,0,-1).applyMatrix4(workingMatrix);const e=Y.intersectObjects(ce);if(e.length>0){C=e[0].object;const n=ce.findIndex(a=>a==e[0].object),t=V[n][6];t>0&&(de=document.querySelector(`.carousel.s${t}`),de.style.display="block"),xrSession.end().then(()=>xrSession=null)}}}function us(){const e=x.xr.getSession().inputSources[0];if(e&&e.gamepad&&gamepadIndices&&buttonStates){const n=e.gamepad;XRinSession=!0;try{Object.entries(buttonStates).forEach(([t,a])=>{const o=gamepadIndices[t].button;if(t.indexOf("touchpad")!=-1||t.indexOf("thumbstick")!=-1){const m=gamepadIndices[t].xAxis,_=gamepadIndices[t].yAxis;buttonStates[t].button=n.buttons[o].value,buttonStates[t].xAxis=n.axes[m].toFixed(2),buttonStates[t].yAxis=n.axes[_].toFixed(2)}else buttonStates[t]=n.buttons[o].value})}catch{console.warn("An error occurred setting the ui")}}}let Oe=!1;const pe=document.getElementById("introTune");pe.preload="auto";pe.currentTime=0;pe.volume=1;const st=pe.duration,Re=document.getElementById("playbutton"),Fe=document.getElementById("credits");Re.addEventListener("click",()=>{pe.play(),Oe=!0,Re.style.display="none",Ie.style.display="none",Le.style.display="none",Fe.style.display="none"});const Ie=document.getElementById("skipbutton");Ie.addEventListener("click",()=>{Re.style.display="none",Ie.style.display="none",Le.style.display="none",Fe.style.display="none",l.position.z=15});let de;const hs=document.querySelectorAll("[data-carousel-button]");hs.forEach(s=>{s.addEventListener("click",()=>{if(document.querySelector(".carousel"),s.dataset.carouselButton==="exit")de.style.display="none";else{const e=s.dataset.carouselButton==="next"?1:-1,n=s.closest("[data-carousel]").querySelector("[data-slides]"),t=n.querySelector("[data-active]");let a=[...n.children].indexOf(t)+e;n.children[a].dataset.active=!0,delete t.dataset.active}})});const fs=document.querySelectorAll("[data-menu-button]");fs.forEach(s=>{s.addEventListener("click",()=>{if(document.querySelector(".carousel"),s.dataset.menuButton==="menu"){const e=s.closest("[data-carousel]").querySelector("[data-slides]"),n=e.querySelector("[data-active]"),t=e.querySelector("[menu]");let a=[...e.children].indexOf(t);e.children[a].dataset.active=!0,delete n.dataset.active}if(s.dataset.menuButton==="definition"){const e=s.closest("[data-carousel]").querySelector("[data-slides]"),n=e.querySelector("[data-active]"),t=e.querySelector("[definition]");let a=[...e.children].indexOf(t);e.children[a].dataset.active=!0,delete n.dataset.active}if(s.dataset.menuButton==="exercise"){const e=s.closest("[data-carousel]").querySelector("[data-slides]"),n=e.querySelector("[data-active]"),t=e.querySelector("[exercise]");let a=[...e.children].indexOf(t);e.children[a].dataset.active=!0,delete n.dataset.active}if(s.dataset.menuButton==="theory"){const e=s.closest("[data-carousel]").querySelector("[data-slides]"),n=e.querySelector("[data-active]"),t=e.querySelector("[theory]");let a=[...e.children].indexOf(t);e.children[a].dataset.active=!0,delete n.dataset.active}if(s.dataset.menuButton==="media"){const e=s.closest("[data-carousel]").querySelector("[data-slides]"),n=e.querySelector("[data-active]"),t=e.querySelector("[media]");let a=[...e.children].indexOf(t);e.children[a].dataset.active=!0,delete n.dataset.active}})});const ps=document.querySelectorAll("[data-nav-button]");ps.forEach(s=>{s.addEventListener("click",()=>{if(document.querySelector(".carousel"),s.dataset.navButton==="one"){const e=s.closest("[data-carousel]").querySelector("[data-slides]"),n=e.querySelector("[data-active]"),t=e.querySelector("[one]");let a=[...e.children].indexOf(t);e.children[a].dataset.active=!0,delete n.dataset.active}if(s.dataset.navButton==="two"){const e=s.closest("[data-carousel]").querySelector("[data-slides]"),n=e.querySelector("[data-active]"),t=e.querySelector("[two]");let a=[...e.children].indexOf(t);e.children[a].dataset.active=!0,delete n.dataset.active}if(s.dataset.navButton==="three"){const e=s.closest("[data-carousel]").querySelector("[data-slides]"),n=e.querySelector("[data-active]"),t=e.querySelector("[three]");let a=[...e.children].indexOf(t);e.children[a].dataset.active=!0,delete n.dataset.active}if(s.dataset.navButton==="four"){const e=s.closest("[data-carousel]").querySelector("[data-slides]"),n=e.querySelector("[data-active]"),t=e.querySelector("[four]");let a=[...e.children].indexOf(t);e.children[a].dataset.active=!0,delete n.dataset.active}if(s.dataset.navButton==="five"){const e=s.closest("[data-carousel]").querySelector("[data-slides]"),n=e.querySelector("[data-active]"),t=e.querySelector("[five]");let a=[...e.children].indexOf(t);e.children[a].dataset.active=!0,delete n.dataset.active}})});const yt=new T,wt=new T,vt=new T,St=new T,Mt=new T,bt=new T,zt=new T,Pt=new T,Lt=new T,ms=new j({size:5,map:new M(p).load(on),transparent:!0,fog:!1}),gs=new j({size:5,map:new M(p).load(rn),transparent:!0,fog:!1}),xs=new j({size:5,map:new M(p).load(ln),transparent:!0,fog:!1}),ys=new j({size:5,map:new M(p).load(cn),transparent:!0,fog:!1}),ws=new j({size:5,map:new M(p).load(dn),transparent:!0,fog:!1}),vs=new j({size:5,map:new M(p).load(un),transparent:!0,fog:!1}),Ss=new j({size:5,map:new M(p).load(hn),transparent:!0,fog:!1}),Ms=new j({size:5,map:new M(p).load(fn),transparent:!0,fog:!1}),bs=new j({size:5,map:new M(p).load(pn),transparent:!0,fog:!1}),Rt=[];for(let s=0;s<5e3;s++){const e=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(n)+Math.abs(t)>400&&Rt.push(e,n,t)}const It=[];for(let s=0;s<1e3;s++){const e=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(n)+Math.abs(t)>400&&It.push(e,n,t)}const Bt=[];for(let s=0;s<500;s++){const e=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(n)+Math.abs(t)>400&&Bt.push(e,n,t)}const qt=[];for(let s=0;s<100;s++){const e=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(n)+Math.abs(t)>400&&qt.push(e,n,t)}const Ct=[];for(let s=0;s<25;s++){const e=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(n)+Math.abs(t)>400&&Ct.push(e,n,t)}const Et=[];for(let s=0;s<1e3;s++){const e=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(n)+Math.abs(t)>400&&Et.push(e,n,t)}const Tt=[];for(let s=0;s<500;s++){const e=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(n)+Math.abs(t)>400&&Tt.push(e,n,t)}const _t=[];for(let s=0;s<100;s++){const e=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(n)+Math.abs(t)>400&&_t.push(e,n,t)}const Ot=[];for(let s=0;s<25;s++){const e=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(n)+Math.abs(t)>400&&Ot.push(e,n,t)}yt.setAttribute("position",new D(Rt,3));wt.setAttribute("position",new D(It,3));vt.setAttribute("position",new D(Bt,3));St.setAttribute("position",new D(qt,3));Mt.setAttribute("position",new D(Ct,3));bt.setAttribute("position",new D(Et,3));zt.setAttribute("position",new D(Tt,3));Pt.setAttribute("position",new D(_t,3));Lt.setAttribute("position",new D(Ot,3));const zs=new G(yt,ms),Ps=new G(wt,gs),Ls=new G(vt,xs),Rs=new G(St,ys),Is=new G(Mt,ws),Bs=new G(bt,vs),qs=new G(zt,Ss),Cs=new G(Pt,Ms),Es=new G(Lt,bs);F.add(zs,Ps,Ls,Rs,Is,Bs,qs,Cs,Es);const ne=new S;F.add(ne);const me=new S,ge=new S,xe=new S,se=new S;me.rotation.y=-Math.PI/2.5;me.rotation.x=.15;ge.rotation.y=2*Math.PI/16;ge.rotation.x=.22;xe.rotation.y=2*Math.PI/2;xe.rotation.x=.31;se.rotation.y=5*Math.PI/3;se.rotation.x=-.41;ne.add(me);ne.add(ge);ne.add(xe);ne.add(se);const W=new M(p);let Ts=W.load(An);const At=new te(5,250,250);At.computeBoundingSphere();const y=new I(At,new je({map:Ts,normalMap:W.load(jn),roughnessMap:W.load(Dn),normalScale:new P(1,1),metalness:0,roughness:.85,flatShading:!1,side:ot}));F.add(y);const _s=new it({map:W.load(Gn),transparent:!0,side:rt,opacity:.8}),jt=new I(new te(5.04,50,50),_s);y.add(jt);const Dt=new I(new te(5,500,500),new Se({vertexShader:Fn,fragmentShader:kn,blending:lt}));Dt.position.set(0,0,0);y.add(Dt);const ke=new I(new te(5.3,50,50),new Se({vertexShader:Vn,fragmentShader:Wn,blending:lt,side:mn,transparent:!0,depthWrite:!1}));ke.position.set(0,0,0);ke.scale.set(1.2,1.2,1.2);y.add(ke);const ee=new S;y.add(ee);for(let s=0;s<$.length;s++)ct($[s].src,$[s].lat,$[s].lng-180,$[s].size/500,$[s].radius,ee);for(let s=0;s<K.length;s++)ct(K[s].src,K[s].lat,K[s].lng-180,K[s].size/500,K[s].radius,B);dt(V,ee,5);dt(Me,B,7);const Gt=1e-4,Ve=3,Ft=.03,kt=5.01,ue=new S;y.add(ue);let Vt=ue;Be(V,Ge,Gt,Ve,Ft,kt,Vt,!1);Be(V,Ln,Gt,Ve,Ft,kt,Vt,!0);const We=new S;B.add(We);let Os=We;Be(Me,ht,2e-4,Ve,.1,7.01,Os,!1);let he=new S;ee.add(he);he.position.set(0,-5.05,0);const As=new gn(p);As.load(xn,function(s){const e=s.scene;he.add(e),e.scale.set(5,5,5),e.rotation.y+=Math.PI/2,e.rotation.x+=Math.PI/3},function(s){},function(s){console.log("An error happened")});const Wt=5,js=new te(Wt,50,50),Ds=new ut({map:new M(p).load(yn)}),le=new I(js,Ds);le.position.set(0,0,490);se.add(le);const He=new De(16777215,1.2,2e3);He.position.set(le.position.x,le.position.y,le.position.z-Wt*1.5);se.add(He);const Gs=W.load("https://jaranolsen.github.io/Planet/sunflare.webp"),qe=W.load("https://jaranolsen.github.io/Planet/lensflare.webp"),Z=new wn;Z.position.set(0,0,0);Z.addElement(new fe(Gs,2560,0));Z.addElement(new fe(qe,60,.6));Z.addElement(new fe(qe,70,.7));Z.addElement(new fe(qe,120,.9));Z.addElement(new fe(qe,70,1));He.add(Z);class Ne{constructor(e,n,t,a,o,m){this.radius=e,this.texture=n,this.z=t,this.rotation=a,this.pivot=o,this.intensity=m}}let Fs=new Ne(1.5,Tn,110,-5e-4,me,.1),ks=new Ne(2.5,_n,190,-3e-4,ge,.05),Vs=new Ne(1,On,250,-1e-4,xe,.005),J=[Fs,ks,Vs];for(let s=0;s<J.length;s++){const e=new I(new te(J[s].radius,50,50),new je({map:new M(p).load(J[s].texture),metalness:0,flatShading:!1,side:ot}));e.position.set(J[s].z,0,0),J[s].pivot.add(e);const n=new De(16777215,J[s].intensity);n.position.set(J[s].z,0,0),e.add(n)}let Ae=!1;function Ws(){Ae=!0,F.add(B);let s=7,e=9,n=[],t=[];for(let i=0;i<e;i++){n[i]=[],t[i]=[];for(let v=2*Math.PI*i;v<=2*Math.PI*(i+1.0000001);v+=Math.PI/128){let N=Math.sin(v/(e*2)),X=N*s*Math.cos(v),U=N*s*Math.sin(v),ae=s/(e*Math.PI)*v;n[i].push(new q(X,ae-s,U)),i==0?v>2*Math.PI*i+(2*Math.PI*(i+1.0000001)-2*Math.PI*i)*.98&&t[i].push(new q(X,ae-s,U)):i<e?(v<2*Math.PI*i+(2*Math.PI*(i+1.0000001)-2*Math.PI*i)*.02&&t[i-1].push(new q(X,ae-s,U)),v>2*Math.PI*i+(2*Math.PI*(i+1.0000001)-2*Math.PI*i)*.98&&t[i].push(new q(X,ae-s,U))):v<2*Math.PI*i+(2*Math.PI*(i+1.0000001)-2*Math.PI*i)*.02&&t[i-1].push(new q(X,ae-s,U))}let z=new Je(n[i]);const O=new Ee(z,64,.01,10,!1);O.computeBoundingBox();const Yt=new Se({uniforms:{color1:{value:new ye(oe[40+i])},color2:{value:new ye(oe[40+i+1])},bboxMin:{value:O.boundingBox.min},bboxMax:{value:O.boundingBox.max}},vertexShader:Ye,fragmentShader:Ze}),Zt=new I(O,Yt);B.add(Zt);const $t=new Ee(z,64,.12-i/70,10,!1),Kt=new ut({color:oe[40+i],transparent:!0,opacity:.6}),Qt=new I($t,Kt);if(B.add(Qt),B.rotation.set(0,0,0),i!==0){let v=new Je(t[i-1]);const N=new Ee(v,64,.15-i/70,10,!1);N.computeBoundingBox();const X=new Se({uniforms:{color1:{value:new ye(oe[40+i-1])},color2:{value:new ye(oe[40+i])},bboxMin:{value:N.boundingBox.min},bboxMax:{value:N.boundingBox.max}},vertexShader:Ye,fragmentShader:Ze}),U=new I(N,X);B.add(U)}}const a=W.load(Rn);a.repeat.set(0,100),a.wrapT=Te,a.rotation=Math.PI/2;const o=W.load(In);o.repeat.set(1,100),o.wrapS=Te,o.wrapT=Te,o.rotation=Math.PI/2,o.offset.set(.5,0);const m=new Bn(6.05,.05,50,100),_=new je({alphaMap:a,transparent:!0,alphaTest:.5,map:o,emissive:16777215,emissiveMap:o,emissiveIntensity:.05,color:16777215,metalness:1,roughness:.7}),b=new I(m,_);b.rotation.x=Math.PI/2,b.position.y=2.34,B.add(b)}const Hs=300,r=3e-4,Ns=new it({color:12312012,side:rt}),H=new vn;H.moveTo(r*5,r*5);H.bezierCurveTo(r*5,r*5,r*4,0,0,0);H.bezierCurveTo(-r*6,0,-r*6,r*7,-r*6,r*7);H.bezierCurveTo(-r*6,r*11,-r*3,r*15.4,r*5,r*19);H.bezierCurveTo(r*12,r*15.4,r*16,r*11,r*16,r*7);H.bezierCurveTo(r*16,r*7,r*16,0,r*10,0);H.bezierCurveTo(r*7,0,r*5,r*5,r*5,r*5);const Ce=new Sn(H);Ce.center=0;Ce.rotateZ(Math.PI/2);Ce.rotateY(Math.PI/2);class Xs{constructor(e,n){this.lat=e,this.lng=n,this.gutt=new I(Ce,Ns),this.pos=new P(e,n),this.velocity=new P(we(0,0),we(0,1)).setLength(.001),this.acceleration=new P,this.cartesianPosition=R(this.pos.x,this.pos.y,5.1),this.presentHeading,this.originalHeading,this.gutt.position.set(this.cartesianPosition.x,this.cartesianPosition.y,this.cartesianPosition.z),this.wander=new P(0,0),this.alignment=new P(0,0),this.cohesion=new P(0,0),this.separation=new P(0,0),this.avoidance=new P(0,0),y.add(this.gutt)}move(){this.originalHeading=Math.atan2(this.velocity.x,this.velocity.y),this.acceleration.set(0,0),this.alignment.multiplyScalar(c.alignment),this.cohesion.multiplyScalar(c.cohesion),this.separation.multiplyScalar(c.separation),this.acceleration.add(this.wander),this.acceleration.add(this.alignment),this.acceleration.add(this.cohesion),this.acceleration.add(this.separation),this.acceleration.add(this.avoidance),this.velocity.add(this.acceleration),this.velocity.clampLength(-c.max_speed,c.max_speed),this.velocity.setLength(c.max_speed),this.pos.add(this.velocity),this.pos.x<0&&(this.pos.x=Math.abs(this.pos.x),this.pos.y<180?this.pos.y+=180:this.pos.y-=180,this.velocity.x*=-1,this.velocity.y*=-1),this.pos.x>180&&(this.pos.x=180-(this.pos.x-180),this.pos.y<180?this.pos.y+=180:this.pos.y-=180,this.velocity.x*=-1,this.velocity.y*=-1),this.pos.y<0&&(this.pos.y=360+this.pos.y),this.pos.y>360&&(this.pos.y=this.pos.y-360),this.cartesianPosition=R(this.pos.x,this.pos.y,5.1),this.cartesianVelocity=R(this.velocity.x,this.velocity.y,5.1),this.presentHeading=Math.atan2(this.velocity.x,this.velocity.y),this.cp=new q,this.cp.set(this.cartesianPosition.x,this.cartesianPosition.y,this.cartesianPosition.z),this.gutt.lookAt(this.cp),this.gutt.rotateZ(this.presentHeading-this.originalHeading),this.gutt.position.set(this.cartesianPosition.x,this.cartesianPosition.y,this.cartesianPosition.z)}calculateWander(){this.wander.set(we(-1e-4,1e-4),we(-1e-4,1e-4)),this.wander.clampLength(-c.max_force,c.max_force)}calculateAlignment(){let e=0;this.alignment.set(0,0);for(let n=0;n<h.length;n++)h[n]!=this&&this.gutt.position.distanceTo(h[n].gutt.position)<c.alignment_perception_distance&&(this.alignment.add(h[n].velocity),e+=1);e>0&&(this.alignment.set(this.alignment.x/e,this.alignment.y/e),this.alignment.sub(this.velocity),this.alignment.clampLength(-c.max_force,c.max_force))}calculateCohesion(){let e=0;this.cohesion.set(0,0);for(let n=0;n<h.length;n++)h[n]!=this&&this.gutt.position.distanceTo(h[n].gutt.position)<c.cohesion_perception_distance&&(this.cohesion.add(h[n].pos),e+=1);e>0&&(this.cohesion.set(this.cohesion.x/e,this.cohesion.y/e),this.cohesion.sub(this.pos),this.cohesion.clampLength(-c.max_force,c.max_force))}calculateSeparation(){let e=0;this.separation.set(0,0);for(let n=0;n<h.length;n++)if(h[n]!=this&&this.gutt.position.distanceTo(h[n].gutt.position)<c.separation_perception_distance){let t=new P(this.pos.x-h[n].pos.x,this.pos.y-h[n].pos.y);t.divideScalar(this.gutt.position.distanceTo(h[n].gutt.position)),this.separation.add(t),e+=1}e>0&&(this.separation.set(this.separation.x/e,this.separation.y/e),this.separation.clampLength(-c.max_force,c.max_force))}calculateTemperature(){this.avoidance.set(0,0),this.pos.x<40&&(this.avoidance.set(Math.pow(40-this.pos.x,2)/1e5,0),this.avoidance.clampLength(-c.max_force,c.max_force)),this.pos.x>140&&(this.avoidance.set(-Math.pow(140-this.pos.x,2)/1e5,0),this.avoidance.clampLength(-c.max_force,c.max_force))}}let h=[];for(let s=0;s<Hs;s++){let e=qn(40,140,5),n=Cn(0,359);h.push(new Xs(e,n))}const Ht=new Hn;let c={alignment:.016,alignment_perception_distance:.435,cohesion:.754,cohesion_perception_distance:.887,separation:.765,separation_perception_distance:.225,max_force:.0029,max_speed:.01};const k=Ht.addFolder("parameters");k.add(c,"alignment",0,.1,1e-4);k.add(c,"alignment_perception_distance",0,1,.001);k.add(c,"cohesion",0,1,.001);k.add(c,"cohesion_perception_distance",0,1,.001);k.add(c,"separation",0,1,.001);k.add(c,"separation_perception_distance",0,1,.001);k.add(c,"max_force",0,.01,1e-4);k.add(c,"max_speed",0,.1,.001);k.close();Ht.hide();const Us=new Mn(16777215,.02);F.add(Us);const w=new bn(15723480,0);w.penumbra=.8;w.angle=Math.PI/8;F.add(w);let Q=.5;const Nt=new De(16777215,.5);Nt.position.set(0,0,0);y.add(Nt);u.push([V,V.length,Ge,ue,5.01]);u.push([Me,u[u.length-1][1]+Me.length,ht,We,7.01]);const re=[];let at;const Js=document.querySelector("#fpsCounter"),Xt=document.createElement("div");function Ut(){window.requestAnimationFrame(()=>{const s=performance.now();for(;re.length>0&&re[0]<=s-1e3;)re.shift();re.push(s),at=re.length,Xt.textContent=at,Ut()})}Js.appendChild(Xt);Ut();function Ys(){Y.setFromCamera(ze,l);const s=Y.intersectObjects(ce);if(s.length==0)for(let e=0;e<A.length;e++)A[e].pin.material.color.set(A[e].originalColor);for(let e=0;e<s.length;e++)s[e].object.material.color.set(16711680)}document.addEventListener("keyup",Zs,!1);function Zs(s){const e=s.which;if(e==65&&(g.length=0),e==73&&ft(0),e==90&&f!==null&&(g.indexOf(f)==-1&&g.push(f),console.log(g)),e==67&&(_e==!0?(y.remove(ee),y.remove(ue),_e=!1):(y.add(ee),y.add(ue),_e=!0)),e==70&&(L==!0?L=!1:L=!0),e==76&&(w.intensity==0?w.intensity=Q:w.intensity==Q?w.intensity=Q*2:w.intensity==Q*2?w.intensity=Q*3:w.intensity==Q*3&&(w.intensity=0)),e==81){let n="";const t=u[d][0];for(let a=0;a<t.length;a++)n=n+'    {id: "'+t[a].id+'", text: '+JSON.stringify(t[a].text)+", lat: "+t[a].lat+", lng: "+t[a].lng+", color: "+t[a].color+", size: "+t[a].size+", slides: "+t[a].slides+`},
`;console.log(n)}if(e==83&&(Ae==!1?Ws():(Ae=!1,F.remove(B))),e==87){const n=[u[d][0],u[d][2],u[d][3],u[d][4]];n[2].clear();const t=2e-4,a=3,o=.03;Be(n[0],n[1],t,a,o,n[3],n[2])}if(e==187){let n=0,t=0,a={context:u[d][0]},o;d>0?o=u[d-1][1]:o=0,f&&(n=A[f].originalSize),a.context[f-o].size+=5,t=a.context[f-o].size,C.scale.set(t/n,t/n,t/n),Pe.scale.set(t/n,t/n,t/n)}if(e==189){let n=0,t=0,a={context:u[d][0]},o;d>0?o=u[d-1][1]:o=0,f&&(n=A[f].originalSize),a.context[f-o].size-=5,t=a.context[f-o].size,C.scale.set(t/n,t/n,t/n),Pe.scale.set(t/n,t/n,t/n)}}document.addEventListener("keydown",$s,!1);function $s(s){const e=s.which;if(g.length>0){const n={context:u[d][0],length:u[d][1],radius:u[d][4]};for(let t=0;t<g.length;t++)if(e==38||e==40||e==37||e==39){let a=Xe(A[g[t]].pin.position.x,A[g[t]].pin.position.y,A[g[t]].pin.position.z);e==38?(L&&(a.lat-=.4),a.lat-=.1):e==40?(L&&(a.lat+=.4),a.lat+=.1):e==37?(L&&(a.lng-=.4),a.lng-=.1):e==39&&(L&&(a.lng+=.4),a.lng+=.1);const o=n.radius,m=n.radius+.04,_=n.radius+.05,b=R(a.lat,a.lng,o),i=R(a.lat,a.lng,m),z=R(a.lat,a.lng,_);A[g[t]].pin.position.set(b.x,b.y,b.z),be[g[t]].box.position.set(i.x,i.y,i.z),be[g[t]].tag.position.set(z.x,z.y,z.z),a=Ue(a.lat,a.lng-180);let O;d>0?O=u[d-1][1]:O=0,n.context[g[t]-O].lat=a.lat.toFixed(1),n.context[g[t]-O].lng=a.lng.toFixed(1)}}else if(C!=null){const n={context:u[d][0],length:u[d][1],radius:u[d][4]};if(e==38||e==40||e==37||e==39){let t=Xe(C.position.x,C.position.y,C.position.z);e==38?(L&&(t.lat-=.4),t.lat-=.1):e==40?(L&&(t.lat+=.4),t.lat+=.1):e==37?(L&&(t.lng-=.4),t.lng-=.1):e==39&&(L&&(t.lng+=.4),t.lng+=.1);const a=n.radius,o=n.radius+.04,m=n.radius+.05,_=R(t.lat,t.lng,a),b=R(t.lat,t.lng,o),i=R(t.lat,t.lng,m);C.position.set(_.x,_.y,_.z),Pe.position.set(b.x,b.y,b.z),gt.position.set(i.x,i.y,i.z),t=Ue(t.lat,t.lng-180);let z;d>0?z=u[d-1][1]:z=0,n.context[f-z].lat=t.lat.toFixed(1),n.context[f-z].lng=t.lng.toFixed(1)}}}function Ks(s){ze.x=s.clientX/window.innerWidth*2-1,ze.y=-(s.clientY/window.innerHeight)*2+1}function Jt(s){Y.setFromCamera(ze,l);const e=Y.intersectObjects(ce);if(e.length>0){C=e[0].object,f=ce.findIndex(o=>o==e[0].object),Pe=be[f].box,gt=be[f].tag;const n=d;for(let o=0;o<100;o++)if(f<u[o][1]){d=o,d!==n&&(g.length=0);break}let t;d>0?t=u[d-1][1]:t=0;let a=u[d][0];if(l.position.distanceTo(C.position)<4&&a[f-t].slides!==void 0){const o=V[f].slides;ft(o),de=document.querySelector(".carousel.s1"),de.style.display="block"}}}window.addEventListener("pointermove",Ks);window.addEventListener("click",Jt);document.addEventListener("touchstart",Jt);V.length!==Ge.length&&console.log("ERROR: tagPlanetData.length !== tagPlanetConnections.length");function Qs(){x.setAnimationLoop(ea)}function ea(s){if(x.xr.isPresenting){const t=ts.getDelta();if(controllers&&Object.values(controllers).forEach(a=>{ds(a.controller)}),elapsedTime===void 0&&(elapsedTime=0),elapsedTime+=t,elapsedTime>.3&&(us(),elapsedTime=0),XRinSession==!0){const a=Number(buttonStates.xr_standard_thumbstick.xAxis),o=Number(buttonStates.xr_standard_thumbstick.yAxis);if(a!=0||o!=0||buttonStates.a_button!=0||buttonStates.b_button!=0){dollyLng+=a*2,dollyLat+=o,dollyRadius+=(.1*buttonStates.a_button-.1*buttonStates.b_button)*(dollyRadius-5);const m=R(dollyLat,dollyLng,dollyRadius);dolly.position.set(m.x,m.y-1.6,m.z)}}}if(Zn(x)){const t=x.domElement;l.aspect=t.clientWidth/t.clientHeight,l.updateProjectionMatrix()}for(let t=0;t<h.length;t++)h[t].calculateWander(),h[t].calculateAlignment(),h[t].calculateCohesion(),h[t].calculateSeparation(),h[t].calculateTemperature(),h[t].move();Ys(),x.render(F,l);const e=l.position,n=l.rotation;w.position.set(e.x,e.y,e.z),w.rotation.set(n.x,n.y,n.z),ne.rotation.y+=-1e-5,me.rotation.y+=-3e-4,ge.rotation.y+=-3e-5,xe.rotation.y+=-9e-6,se.rotation.y+=1e-4,jt.rotation.y+=1e-5,l.position.z>15&&Oe==!0&&(l.position.z-=.0213*Math.pow(l.position.z-10,1.35)/st,y.rotation.y+=5e-4),l.position.z<-15&&Oe==!0&&(l.position.z+=.213*Math.pow(Math.abs(l.position.z)-10,1.35)/st,y.rotation.y+=5e-4),E.rotateSpeed=(l.position.distanceTo(ve)-5)/l.position.distanceTo(ve),E.zoomSpeed=(l.position.distanceTo(ve)-5)/l.position.distanceTo(ve)/3,he&&(ie.set(l.position.x,l.position.y,l.position.z),ie.normalize(),he.lookAt(ie.x,ie.y,ie.z)),E.update()}Qs();