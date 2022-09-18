var Kl=Object.defineProperty;var Ql=(r,e,t)=>e in r?Kl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ca=(r,e,t)=>(Ql(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="144",Xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ec=0,Da=1,tc=2,Qo=1,nc=2,Li=3,gn=0,mt=1,ut=2,mn=0,hi=1,mi=2,ya=3,Ba=4,ic=5,oi=100,sc=101,rc=102,Fa=103,Ma=104,ac=200,oc=201,lc=202,cc=203,el=204,tl=205,hc=206,uc=207,dc=208,fc=209,pc=210,mc=0,gc=1,xc=2,Ir=3,Ac=4,_c=5,vc=6,Ec=7,ea=0,Cc=1,Dc=2,nn=0,yc=1,Bc=2,Fc=3,Mc=4,Sc=5,nl=300,gi=301,xi=302,Nr=303,zr=304,zs=306,Or=1e3,zt=1001,Ur=1002,lt=1003,Sa=1004,ba=1005,bt=1006,bc=1007,Os=1008,Nn=1009,wc=1010,Tc=1011,il=1012,Lc=1013,wn=1014,Tn=1015,Vi=1016,Pc=1017,Rc=1018,ui=1020,Ic=1021,Nc=1022,Tt=1023,zc=1024,Oc=1025,Pn=1026,Ai=1027,Uc=1028,Vc=1029,Gc=1030,kc=1031,Hc=1033,Ks=33776,Qs=33777,er=33778,tr=33779,wa=35840,Ta=35841,La=35842,Pa=35843,Wc=36196,Ra=37492,Ia=37496,Na=37808,za=37809,Oa=37810,Ua=37811,Va=37812,Ga=37813,ka=37814,Ha=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,ja=37820,Za=37821,Ja=36492,zn=3e3,Xe=3001,Xc=3200,qc=3201,ta=0,Yc=1,Qt="srgb",Ln="srgb-linear",nr=7680,jc=519,Vr=35044,$a="300 es",Gr=1035;class Vn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const at=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ka=1234567;const Ii=Math.PI/180,bs=180/Math.PI;function Ht(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toLowerCase()}function rt(r,e,t){return Math.max(e,Math.min(t,r))}function na(r,e){return(r%e+e)%e}function Zc(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Jc(r,e,t){return r!==e?(t-r)/(e-r):0}function Ni(r,e,t){return(1-t)*r+t*e}function $c(r,e,t,n){return Ni(r,e,1-Math.exp(-t*n))}function Kc(r,e=1){return e-Math.abs(na(r,e*2)-e)}function Qc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function eh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function th(r,e){return r+Math.floor(Math.random()*(e-r+1))}function nh(r,e){return r+Math.random()*(e-r)}function ih(r){return r*(.5-Math.random())}function sh(r){r!==void 0&&(Ka=r);let e=Ka+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rh(r){return r*Ii}function ah(r){return r*bs}function kr(r){return(r&r-1)===0&&r!==0}function oh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ws(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lh(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ie(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ts=Object.freeze({__proto__:null,DEG2RAD:Ii,RAD2DEG:bs,generateUUID:Ht,clamp:rt,euclideanModulo:na,mapLinear:Zc,inverseLerp:Jc,lerp:Ni,damp:$c,pingpong:Kc,smoothstep:Qc,smootherstep:eh,randInt:th,randFloat:nh,randFloatSpread:ih,seededRandom:sh,degToRad:rh,radToDeg:ah,isPowerOfTwo:kr,ceilPowerOfTwo:oh,floorPowerOfTwo:ws,setQuaternionFromProperEuler:lh,normalize:Ie,denormalize:tn});class ee{constructor(e=0,t=0){ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],m=i[0],d=i[3],x=i[6],v=i[1],D=i[4],E=i[7],_=i[2],M=i[5],T=i[8];return s[0]=o*m+a*v+l*_,s[3]=o*d+a*D+l*M,s[6]=o*x+a*E+l*T,s[1]=c*m+h*v+u*_,s[4]=c*d+h*D+u*M,s[7]=c*x+h*E+u*T,s[2]=f*m+p*v+g*_,s[5]=f*d+p*D+g*M,s[8]=f*x+p*E+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,p=c*s-o*l,g=t*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*o)*m,e[3]=f*m,e[4]=(h*t-i*l)*m,e[5]=(i*s-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function sl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ir={[Qt]:{[Ln]:Rn},[Ln]:{[Qt]:Fs}},Pt={legacyMode:!0,get workingColorSpace(){return Ln},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(ir[e]&&ir[e][t]!==void 0){const n=ir[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},Rt={h:0,s:0,l:0},$i={h:0,s:0,l:0};function sr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ki(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ln){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ln){if(e=na(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=sr(o,s,e+1/3),this.g=sr(o,s,e),this.b=sr(o,s,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Pt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Pt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Pt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Pt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Qt){const n=rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Pt.fromWorkingColorSpace(Ki(this,Qe),e),rt(Qe.r*255,0,255)<<16^rt(Qe.g*255,0,255)<<8^rt(Qe.b*255,0,255)<<0}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ln){Pt.fromWorkingColorSpace(Ki(this,Qe),t);const n=Qe.r,i=Qe.g,s=Qe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ln){return Pt.fromWorkingColorSpace(Ki(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=Qt){return Pt.fromWorkingColorSpace(Ki(this,Qe),e),e!==Qt?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Rt),Rt.h+=e,Rt.s+=t,Rt.l+=n,this.setHSL(Rt.h,Rt.s,Rt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rt),e.getHSL($i);const n=Ni(Rt.h,$i.h,t),i=Ni(Rt.s,$i.s,t),s=Ni(Rt.l,$i.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Se.NAMES=rl;let Yn;class al{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=Gi("canvas")),Yn.width=e.width,Yn.height=e.height;const n=Yn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Rn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ol{constructor(e=null){this.isSource=!0,this.uuid=Ht(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(rr(i[o].image)):s.push(rr(i[o]))}else s=rr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function rr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?al.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ch=0;class Dt extends Vn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=zt,i=zt,s=bt,o=Os,a=Tt,l=Nn,c=1,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Ht(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Or:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Or:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=nl;class Oe{constructor(e=0,t=0,n=0,i=1){Oe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(c+1)/2,E=(p+1)/2,_=(x+1)/2,M=(h+f)/4,T=(u+m)/4,A=(g+d)/4;return D>E&&D>_?D<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(D),i=M/n,s=T/n):E>_?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=M/i,s=A/i):_<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(_),n=T/s,i=A/s),this.set(n,i,s,t),this}let v=Math.sqrt((d-g)*(d-g)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(d-g)/v,this.y=(u-m)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class On extends Vn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ll extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hh extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(u!==m||l!==f||c!==p||h!==g){let d=1-a;const x=l*f+c*p+h*g+u*m,v=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const _=Math.sqrt(D),M=Math.atan2(_,x*v);d=Math.sin(d*M)/_,a=Math.sin(a*M)/_}const E=a*v;if(l=l*d+f*E,c=c*d+p*E,h=h*d+g*E,u=u*d+m*E,d===1-a){const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+h*-a-u*-o,this.y=h*l+f*-o+u*-s-c*-a,this.z=u*l+f*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ar.copy(this).projectOnVector(e),this.sub(ar)}reflect(e){return this.sub(ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new b,Qa=new Un;class qi{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],f=e[l+2];h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),f=e.getZ(l);h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Cn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Cn)}else n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox),or.applyMatrix4(e.matrixWorld),this.union(or);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fi),Qi.subVectors(this.max,Fi),jn.subVectors(e.a,Fi),Zn.subVectors(e.b,Fi),Jn.subVectors(e.c,Fi),on.subVectors(Zn,jn),ln.subVectors(Jn,Zn),Dn.subVectors(jn,Jn);let t=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Dn.z,Dn.y,on.z,0,-on.x,ln.z,0,-ln.x,Dn.z,0,-Dn.x,-on.y,on.x,0,-ln.y,ln.x,0,-Dn.y,Dn.x,0];return!lr(t,jn,Zn,Jn,Qi)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,jn,Zn,Jn,Qi))?!1:(es.crossVectors(on,ln),t=[es.x,es.y,es.z],lr(t,jn,Zn,Jn,Qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Cn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new b,new b,new b,new b,new b,new b,new b,new b],Cn=new b,or=new qi,jn=new b,Zn=new b,Jn=new b,on=new b,ln=new b,Dn=new b,Fi=new b,Qi=new b,es=new b,yn=new b;function lr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){yn.fromArray(r,s);const a=i.x*Math.abs(yn.x)+i.y*Math.abs(yn.y)+i.z*Math.abs(yn.z),l=e.dot(yn),c=t.dot(yn),h=n.dot(yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const uh=new qi,eo=new b,ts=new b,cr=new b;class Yi{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(cr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?ts.set(0,0,1).multiplyScalar(e.radius):ts.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(eo.copy(e.center).add(ts)),this.expandByPoint(eo.copy(e.center).sub(ts)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new b,hr=new b,ns=new b,cn=new b,ur=new b,is=new b,dr=new b;class Us{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.direction).multiplyScalar(t).add(this.origin),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hr.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(hr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ns),a=cn.dot(this.direction),l=-cn.dot(ns),c=cn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const m=1/h;u*=m,f*=m,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(ns).multiplyScalar(f).add(hr),p}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),i=jt.dot(jt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,i,s){ur.subVectors(t,e),is.subVectors(n,e),dr.crossVectors(ur,is);let o=this.direction.dot(dr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cn.subVectors(this.origin,e);const l=a*this.direction.dot(is.crossVectors(cn,is));if(l<0)return null;const c=a*this.direction.dot(ur.cross(cn));if(c<0||l+c>o)return null;const h=-a*cn.dot(dr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,h,u,f,p,g,m,d){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=f,x[3]=p,x[7]=g,x[11]=m,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$n.setFromMatrixColumn(e,0).length(),s=1/$n.setFromMatrixColumn(e,1).length(),o=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*u,g=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,m=c*u;t[0]=f+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,m=c*u;t[0]=f-m*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,g=a*h,m=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*u,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*h,t[4]=m-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-m*u}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+m,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dh,e,fh)}lookAt(e,t,n){const i=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),hn.crossVectors(n,_t),hn.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),hn.crossVectors(n,_t)),hn.normalize(),ss.crossVectors(_t,hn),i[0]=hn.x,i[4]=ss.x,i[8]=_t.x,i[1]=hn.y,i[5]=ss.y,i[9]=_t.y,i[2]=hn.z,i[6]=ss.z,i[10]=_t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],x=n[14],v=n[3],D=n[7],E=n[11],_=n[15],M=i[0],T=i[4],A=i[8],S=i[12],P=i[1],q=i[5],re=i[9],z=i[13],L=i[2],W=i[6],j=i[10],Z=i[14],k=i[3],I=i[7],O=i[11],$=i[15];return s[0]=o*M+a*P+l*L+c*k,s[4]=o*T+a*q+l*W+c*I,s[8]=o*A+a*re+l*j+c*O,s[12]=o*S+a*z+l*Z+c*$,s[1]=h*M+u*P+f*L+p*k,s[5]=h*T+u*q+f*W+p*I,s[9]=h*A+u*re+f*j+p*O,s[13]=h*S+u*z+f*Z+p*$,s[2]=g*M+m*P+d*L+x*k,s[6]=g*T+m*q+d*W+x*I,s[10]=g*A+m*re+d*j+x*O,s[14]=g*S+m*z+d*Z+x*$,s[3]=v*M+D*P+E*L+_*k,s[7]=v*T+D*q+E*W+_*I,s[11]=v*A+D*re+E*j+_*O,s[15]=v*S+D*z+E*Z+_*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],x=e[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*p-n*l*p)+m*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*h-s*l*h)+d*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+x*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],x=e[15],v=u*d*c-m*f*c+m*l*p-a*d*p-u*l*x+a*f*x,D=g*f*c-h*d*c-g*l*p+o*d*p+h*l*x-o*f*x,E=h*m*c-g*u*c+g*a*p-o*m*p-h*a*x+o*u*x,_=g*u*l-h*m*l-g*a*f+o*m*f+h*a*d-o*u*d,M=t*v+n*D+i*E+s*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(m*f*s-u*d*s-m*i*p+n*d*p+u*i*x-n*f*x)*T,e[2]=(a*d*s-m*l*s+m*i*c-n*d*c-a*i*x+n*l*x)*T,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*p-n*l*p)*T,e[4]=D*T,e[5]=(h*d*s-g*f*s+g*i*p-t*d*p-h*i*x+t*f*x)*T,e[6]=(g*l*s-o*d*s-g*i*c+t*d*c+o*i*x-t*l*x)*T,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*p+t*l*p)*T,e[8]=E*T,e[9]=(g*u*s-h*m*s-g*n*p+t*m*p+h*n*x-t*u*x)*T,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*x+t*a*x)*T,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*T,e[12]=_*T,e[13]=(h*m*i-g*u*i+g*n*f-t*m*f-h*n*d+t*u*d)*T,e[14]=(g*a*i-o*m*i-g*n*l+t*m*l+o*n*d-t*a*d)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,p=s*h,g=s*u,m=o*h,d=o*u,x=a*u,v=l*c,D=l*h,E=l*u,_=n.x,M=n.y,T=n.z;return i[0]=(1-(m+x))*_,i[1]=(p+E)*_,i[2]=(g-D)*_,i[3]=0,i[4]=(p-E)*M,i[5]=(1-(f+x))*M,i[6]=(d+v)*M,i[7]=0,i[8]=(g+D)*T,i[9]=(d-v)*T,i[10]=(1-(f+m))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=$n.set(i[0],i[1],i[2]).length();const o=$n.set(i[4],i[5],i[6]).length(),a=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],It.copy(this);const c=1/s,h=1/o,u=1/a;return It.elements[0]*=c,It.elements[1]*=c,It.elements[2]*=c,It.elements[4]*=h,It.elements[5]*=h,It.elements[6]*=h,It.elements[8]*=u,It.elements[9]*=u,It.elements[10]*=u,t.setFromRotationMatrix(It),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),u=(t+e)*l,f=(n+i)*c,p=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new b,It=new Ge,dh=new b(0,0,0),fh=new b(1,1,1),hn=new b,ss=new b,_t=new b,to=new Ge,no=new Un;class ji{constructor(e=0,t=0,n=0,i=ji.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return to.makeRotationFromQuaternion(e),this.setFromRotationMatrix(to,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return no.setFromEuler(this),this.setFromQuaternion(no,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ji.DefaultOrder="XYZ";ji.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ia{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ph=0;const io=new b,Kn=new Un,Zt=new Ge,rs=new b,Mi=new b,mh=new b,gh=new Un,so=new b(1,0,0),ro=new b(0,1,0),ao=new b(0,0,1),xh={type:"added"},oo={type:"removed"};class ke extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Ht(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DefaultUp.clone();const e=new b,t=new ji,n=new Un,i=new b(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Lt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ke.DefaultMatrixWorldAutoUpdate,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(so,e)}rotateY(e){return this.rotateOnAxis(ro,e)}rotateZ(e){return this.rotateOnAxis(ao,e)}translateOnAxis(e,t){return io.copy(e).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(so,e)}translateY(e){return this.translateOnAxis(ro,e)}translateZ(e){return this.translateOnAxis(ao,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(Mi,rs,this.up):Zt.lookAt(rs,Mi,this.up),this.quaternion.setFromRotationMatrix(Zt),i&&(Zt.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(Zt),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(oo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,e,mh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ke.DefaultUp=new b(0,1,0);ke.DefaultMatrixAutoUpdate=!0;ke.DefaultMatrixWorldAutoUpdate=!0;const Nt=new b,Jt=new b,fr=new b,$t=new b,Qn=new b,ei=new b,lo=new b,pr=new b,mr=new b,gr=new b;class en{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nt.subVectors(e,t),i.cross(Nt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Nt.subVectors(i,t),Jt.subVectors(n,t),fr.subVectors(e,t);const o=Nt.dot(Nt),a=Nt.dot(Jt),l=Nt.dot(fr),c=Jt.dot(Jt),h=Jt.dot(fr),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$t),$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,$t),l.set(0,0),l.addScaledVector(s,$t.x),l.addScaledVector(o,$t.y),l.addScaledVector(a,$t.z),l}static isFrontFacing(e,t,n,i){return Nt.subVectors(n,t),Jt.subVectors(e,t),Nt.cross(Jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Nt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return en.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Qn.subVectors(i,n),ei.subVectors(s,n),pr.subVectors(e,n);const l=Qn.dot(pr),c=ei.dot(pr);if(l<=0&&c<=0)return t.copy(n);mr.subVectors(e,i);const h=Qn.dot(mr),u=ei.dot(mr);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Qn,o);gr.subVectors(e,s);const p=Qn.dot(gr),g=ei.dot(gr);if(g>=0&&p<=g)return t.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ei,a);const d=h*g-p*u;if(d<=0&&u-h>=0&&p-g>=0)return lo.subVectors(s,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(lo,a);const x=1/(d+m+f);return o=m*x,a=f*x,t.copy(n).addScaledVector(Qn,o).addScaledVector(ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ah=0;class _n extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Ht(),this.name="",this.type="Material",this.blending=hi,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ot extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ze=new b,as=new ee;class Ut{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Vr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ie(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ie(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ie(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ie(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ie(t,this.array),n=Ie(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ie(t,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ie(t,this.array),n=Ie(n,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class cl extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hl extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _h=0;const St=new Ge,xr=new ke,ti=new b,vt=new qi,Si=new qi,tt=new b;class pt extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Ht(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sl(e)?hl:cl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return St.makeRotationFromQuaternion(e),this.applyMatrix4(St),this}rotateX(e){return St.makeRotationX(e),this.applyMatrix4(St),this}rotateY(e){return St.makeRotationY(e),this.applyMatrix4(St),this}rotateZ(e){return St.makeRotationZ(e),this.applyMatrix4(St),this}translate(e,t,n){return St.makeTranslation(e,t,n),this.applyMatrix4(St),this}scale(e,t,n){return St.makeScale(e,t,n),this.applyMatrix4(St),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];vt.setFromBufferAttribute(s),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(tt.addVectors(vt.min,Si.min),vt.expandByPoint(tt),tt.addVectors(vt.max,Si.max),vt.expandByPoint(tt)):(vt.expandByPoint(Si.min),vt.expandByPoint(Si.max))}vt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tt.fromBufferAttribute(a,c),l&&(ti.fromBufferAttribute(e,c),tt.add(ti)),i=Math.max(i,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<a;P++)c[P]=new b,h[P]=new b;const u=new b,f=new b,p=new b,g=new ee,m=new ee,d=new ee,x=new b,v=new b;function D(P,q,re){u.fromArray(i,P*3),f.fromArray(i,q*3),p.fromArray(i,re*3),g.fromArray(o,P*2),m.fromArray(o,q*2),d.fromArray(o,re*2),f.sub(u),p.sub(u),m.sub(g),d.sub(g);const z=1/(m.x*d.y-d.x*m.y);!isFinite(z)||(x.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(z),v.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(z),c[P].add(x),c[q].add(x),c[re].add(x),h[P].add(v),h[q].add(v),h[re].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let P=0,q=E.length;P<q;++P){const re=E[P],z=re.start,L=re.count;for(let W=z,j=z+L;W<j;W+=3)D(n[W+0],n[W+1],n[W+2])}const _=new b,M=new b,T=new b,A=new b;function S(P){T.fromArray(s,P*3),A.copy(T);const q=c[P];_.copy(q),_.sub(T.multiplyScalar(T.dot(q))).normalize(),M.crossVectors(A,q);const z=M.dot(h[P])<0?-1:1;l[P*4]=_.x,l[P*4+1]=_.y,l[P*4+2]=_.z,l[P*4+3]=z}for(let P=0,q=E.length;P<q;++P){const re=E[P],z=re.start,L=re.count;for(let W=z,j=z+L;W<j;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new b,s=new b,o=new b,a=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*h;for(let x=0;x<h;x++)f[g++]=c[p++]}return new Ut(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const co=new Ge,ni=new Us,Ar=new Yi,un=new b,dn=new b,fn=new b,_r=new b,vr=new b,Er=new b,os=new b,ls=new b,cs=new b,hs=new ee,us=new ee,ds=new ee,Cr=new b,fs=new b;class Ne extends ke{constructor(e=new pt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),e.ray.intersectsSphere(Ar)===!1)||(co.copy(s).invert(),ni.copy(e.ray).applyMatrix4(co),n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){const x=p[m],v=i[x.materialIndex],D=Math.max(x.start,g.start),E=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let _=D,M=E;_<M;_+=3){const T=a.getX(_),A=a.getX(_+1),S=a.getX(_+2);o=ps(this,v,e,ni,l,c,h,u,f,T,A,S),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let x=m,v=d;x<v;x+=3){const D=a.getX(x),E=a.getX(x+1),_=a.getX(x+2);o=ps(this,i,e,ni,l,c,h,u,f,D,E,_),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){const x=p[m],v=i[x.materialIndex],D=Math.max(x.start,g.start),E=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let _=D,M=E;_<M;_+=3){const T=_,A=_+1,S=_+2;o=ps(this,v,e,ni,l,c,h,u,f,T,A,S),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let x=m,v=d;x<v;x+=3){const D=x,E=x+1,_=x+2;o=ps(this,i,e,ni,l,c,h,u,f,D,E,_),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function vh(r,e,t,n,i,s,o,a){let l;if(e.side===mt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==ut,a),l===null)return null;fs.copy(a),fs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:r}}function ps(r,e,t,n,i,s,o,a,l,c,h,u){un.fromBufferAttribute(i,c),dn.fromBufferAttribute(i,h),fn.fromBufferAttribute(i,u);const f=r.morphTargetInfluences;if(s&&f){os.set(0,0,0),ls.set(0,0,0),cs.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=f[g],x=s[g];d!==0&&(_r.fromBufferAttribute(x,c),vr.fromBufferAttribute(x,h),Er.fromBufferAttribute(x,u),o?(os.addScaledVector(_r,d),ls.addScaledVector(vr,d),cs.addScaledVector(Er,d)):(os.addScaledVector(_r.sub(un),d),ls.addScaledVector(vr.sub(dn),d),cs.addScaledVector(Er.sub(fn),d)))}un.add(os),dn.add(ls),fn.add(cs)}r.isSkinnedMesh&&(r.boneTransform(c,un),r.boneTransform(h,dn),r.boneTransform(u,fn));const p=vh(r,e,t,n,un,dn,fn,Cr);if(p){a&&(hs.fromBufferAttribute(a,c),us.fromBufferAttribute(a,h),ds.fromBufferAttribute(a,u),p.uv=en.getUV(Cr,un,dn,fn,hs,us,ds,new ee)),l&&(hs.fromBufferAttribute(l,c),us.fromBufferAttribute(l,h),ds.fromBufferAttribute(l,u),p.uv2=en.getUV(Cr,un,dn,fn,hs,us,ds,new ee));const g={a:c,b:h,c:u,normal:new b,materialIndex:0};en.getNormal(un,dn,fn,g.normal),p.face=g}return p}class Zi extends pt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(m,d,x,v,D,E,_,M,T,A,S){const P=E/T,q=_/A,re=E/2,z=_/2,L=M/2,W=T+1,j=A+1;let Z=0,k=0;const I=new b;for(let O=0;O<j;O++){const $=O*q-z;for(let J=0;J<W;J++){const K=J*P-re;I[m]=K*v,I[d]=$*D,I[x]=L,c.push(I.x,I.y,I.z),I[m]=0,I[d]=0,I[x]=M>0?1:-1,h.push(I.x,I.y,I.z),u.push(J/T),u.push(1-O/A),Z+=1}}for(let O=0;O<A;O++)for(let $=0;$<T;$++){const J=f+$+W*O,K=f+$+W*(O+1),de=f+($+1)+W*(O+1),Ae=f+($+1)+W*O;l.push(J,K,Ae),l.push(K,de,Ae),k+=6}a.addGroup(p,k,S),p+=k,f+=Z}}static fromJSON(e){return new Zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ot(r){const e={};for(let t=0;t<r.length;t++){const n=_i(r[t]);for(const i in n)e[i]=n[i]}return e}function Eh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const Ch={clone:_i,merge:ot};var Dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dh,this.fragmentShader=yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Eh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ul extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Et extends ul{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ii*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ii=90,si=1;class Bh extends ke{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Et(ii,si,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new b(1,0,0)),this.add(i);const s=new Et(ii,si,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new b(-1,0,0)),this.add(s);const o=new Et(ii,si,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new b(0,1,0)),this.add(o);const a=new Et(ii,si,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new b(0,-1,0)),this.add(a);const l=new Et(ii,si,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new b(0,0,1)),this.add(l);const c=new Et(ii,si,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=nn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class dl extends Dt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:gi,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fh extends On{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new dl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Zi(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mt,blending:mn});s.uniforms.tEquirect.value=t;const o=new Ne(i,s),a=t.minFilter;return t.minFilter===Os&&(t.minFilter=bt),new Bh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Dr=new b,Mh=new b,Sh=new Lt;class Fn{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Dr.subVectors(n,t).cross(Mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Dr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sh.getNormalMatrix(e),i=this.coplanarPoint(Dr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Yi,ms=new b;class sa{constructor(e=new Fn,t=new Fn,n=new Fn,i=new Fn,s=new Fn,o=new Fn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],x=n[13],v=n[14],D=n[15];return t[0].setComponents(a-i,u-l,m-f,D-d).normalize(),t[1].setComponents(a+i,u+l,m+f,D+d).normalize(),t[2].setComponents(a+s,u+c,m+p,D+x).normalize(),t[3].setComponents(a-s,u-c,m-p,D-x).normalize(),t[4].setComponents(a-o,u-h,m-g,D-v).normalize(),t[5].setComponents(a+o,u+h,m+g,D+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ms.x=i.normal.x>0?e.max.x:e.min.x,ms.y=i.normal.y>0?e.max.y:e.min.y,ms.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fl(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bh(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,p=h.updateRange;r.bindBuffer(u,c),p.count===-1?r.bufferSubData(u,0,f):(t?r.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class ra extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],m=[],d=[];for(let x=0;x<h;x++){const v=x*f-o;for(let D=0;D<c;D++){const E=D*u-s;g.push(E,-v,0),m.push(0,0,1),d.push(D/a),d.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<a;v++){const D=v+c*x,E=v+c*(x+1),_=v+1+c*(x+1),M=v+1+c*x;p.push(D,E,M),p.push(E,_,M)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(m,3)),this.setAttribute("uv",new it(d,2))}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nh="vec3 transformed = vec3( position );",zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$h=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",iu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,su=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Au=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_u=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Bu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Wu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ju=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$u=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ed=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,hd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ed=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Cd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Dd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ld=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Id=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Od=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$d=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,rf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ye={alphamap_fragment:wh,alphamap_pars_fragment:Th,alphatest_fragment:Lh,alphatest_pars_fragment:Ph,aomap_fragment:Rh,aomap_pars_fragment:Ih,begin_vertex:Nh,beginnormal_vertex:zh,bsdfs:Oh,iridescence_fragment:Uh,bumpmap_pars_fragment:Vh,clipping_planes_fragment:Gh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Wh,color_fragment:Xh,color_pars_fragment:qh,color_pars_vertex:Yh,color_vertex:jh,common:Zh,cube_uv_reflection_fragment:Jh,defaultnormal_vertex:$h,displacementmap_pars_vertex:Kh,displacementmap_vertex:Qh,emissivemap_fragment:eu,emissivemap_pars_fragment:tu,encodings_fragment:nu,encodings_pars_fragment:iu,envmap_fragment:su,envmap_common_pars_fragment:ru,envmap_pars_fragment:au,envmap_pars_vertex:ou,envmap_physical_pars_fragment:_u,envmap_vertex:lu,fog_vertex:cu,fog_pars_vertex:hu,fog_fragment:uu,fog_pars_fragment:du,gradientmap_pars_fragment:fu,lightmap_fragment:pu,lightmap_pars_fragment:mu,lights_lambert_fragment:gu,lights_lambert_pars_fragment:xu,lights_pars_begin:Au,lights_toon_fragment:vu,lights_toon_pars_fragment:Eu,lights_phong_fragment:Cu,lights_phong_pars_fragment:Du,lights_physical_fragment:yu,lights_physical_pars_fragment:Bu,lights_fragment_begin:Fu,lights_fragment_maps:Mu,lights_fragment_end:Su,logdepthbuf_fragment:bu,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:Tu,logdepthbuf_vertex:Lu,map_fragment:Pu,map_pars_fragment:Ru,map_particle_fragment:Iu,map_particle_pars_fragment:Nu,metalnessmap_fragment:zu,metalnessmap_pars_fragment:Ou,morphcolor_vertex:Uu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Gu,morphtarget_vertex:ku,normal_fragment_begin:Hu,normal_fragment_maps:Wu,normal_pars_fragment:Xu,normal_pars_vertex:qu,normal_vertex:Yu,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:Zu,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:$u,iridescence_pars_fragment:Ku,output_fragment:Qu,packing:ed,premultiplied_alpha_fragment:td,project_vertex:nd,dithering_fragment:id,dithering_pars_fragment:sd,roughnessmap_fragment:rd,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:od,shadowmap_pars_vertex:ld,shadowmap_vertex:cd,shadowmask_pars_fragment:hd,skinbase_vertex:ud,skinning_pars_vertex:dd,skinning_vertex:fd,skinnormal_vertex:pd,specularmap_fragment:md,specularmap_pars_fragment:gd,tonemapping_fragment:xd,tonemapping_pars_fragment:Ad,transmission_fragment:_d,transmission_pars_fragment:vd,uv_pars_fragment:Ed,uv_pars_vertex:Cd,uv_vertex:Dd,uv2_pars_fragment:yd,uv2_pars_vertex:Bd,uv2_vertex:Fd,worldpos_vertex:Md,background_vert:Sd,background_frag:bd,cube_vert:wd,cube_frag:Td,depth_vert:Ld,depth_frag:Pd,distanceRGBA_vert:Rd,distanceRGBA_frag:Id,equirect_vert:Nd,equirect_frag:zd,linedashed_vert:Od,linedashed_frag:Ud,meshbasic_vert:Vd,meshbasic_frag:Gd,meshlambert_vert:kd,meshlambert_frag:Hd,meshmatcap_vert:Wd,meshmatcap_frag:Xd,meshnormal_vert:qd,meshnormal_frag:Yd,meshphong_vert:jd,meshphong_frag:Zd,meshphysical_vert:Jd,meshphysical_frag:$d,meshtoon_vert:Kd,meshtoon_frag:Qd,points_vert:ef,points_frag:tf,shadow_vert:nf,shadow_frag:sf,sprite_vert:rf,sprite_frag:af},ie={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Lt},uv2Transform:{value:new Lt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Lt}}},kt={basic:{uniforms:ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:ot([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:ot([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:ot([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:ot([ie.points,ie.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:ot([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:ot([ie.common,ie.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:ot([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:ot([ie.sprite,ie.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},cube:{uniforms:ot([ie.envmap,{opacity:{value:1}}]),vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:ot([ie.common,ie.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:ot([ie.lights,ie.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};kt.physical={uniforms:ot([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};function of(r,e,t,n,i,s){const o=new Se(0);let a=i===!0?0:1,l,c,h=null,u=0,f=null;function p(m,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=e.get(v));const D=r.xr,E=D.getSession&&D.getSession();E&&E.environmentBlendMode==="additive"&&(v=null),v===null?g(o,a):v&&v.isColor&&(g(v,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===zs)?(c===void 0&&(c=new Ne(new Zi(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:_i(kt.cube.uniforms),vertexShader:kt.cube.vertexShader,fragmentShader:kt.cube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(h!==v||u!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ne(new ra(2,2),new Vt({name:"BackgroundMaterial",uniforms:_i(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function lf(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,h=!1;function u(L,W,j,Z,k){let I=!1;if(o){const O=m(Z,j,W);c!==O&&(c=O,p(c.object)),I=x(L,Z,j,k),I&&v(L,Z,j,k)}else{const O=W.wireframe===!0;(c.geometry!==Z.id||c.program!==j.id||c.wireframe!==O)&&(c.geometry=Z.id,c.program=j.id,c.wireframe=O,I=!0)}k!==null&&t.update(k,34963),(I||h)&&(h=!1,A(L,W,j,Z),k!==null&&r.bindBuffer(34963,t.get(k).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,W,j){const Z=j.wireframe===!0;let k=a[L.id];k===void 0&&(k={},a[L.id]=k);let I=k[W.id];I===void 0&&(I={},k[W.id]=I);let O=I[Z];return O===void 0&&(O=d(f()),I[Z]=O),O}function d(L){const W=[],j=[],Z=[];for(let k=0;k<i;k++)W[k]=0,j[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:j,attributeDivisors:Z,object:L,attributes:{},index:null}}function x(L,W,j,Z){const k=c.attributes,I=W.attributes;let O=0;const $=j.getAttributes();for(const J in $)if($[J].location>=0){const de=k[J];let Ae=I[J];if(Ae===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor)),de===void 0||de.attribute!==Ae||Ae&&de.data!==Ae.data)return!0;O++}return c.attributesNum!==O||c.index!==Z}function v(L,W,j,Z){const k={},I=W.attributes;let O=0;const $=j.getAttributes();for(const J in $)if($[J].location>=0){let de=I[J];de===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(de=L.instanceColor));const Ae={};Ae.attribute=de,de&&de.data&&(Ae.data=de.data),k[J]=Ae,O++}c.attributes=k,c.attributesNum=O,c.index=Z}function D(){const L=c.newAttributes;for(let W=0,j=L.length;W<j;W++)L[W]=0}function E(L){_(L,0)}function _(L,W){const j=c.newAttributes,Z=c.enabledAttributes,k=c.attributeDivisors;j[L]=1,Z[L]===0&&(r.enableVertexAttribArray(L),Z[L]=1),k[L]!==W&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,W),k[L]=W)}function M(){const L=c.newAttributes,W=c.enabledAttributes;for(let j=0,Z=W.length;j<Z;j++)W[j]!==L[j]&&(r.disableVertexAttribArray(j),W[j]=0)}function T(L,W,j,Z,k,I){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(L,W,j,k,I):r.vertexAttribPointer(L,W,j,Z,k,I)}function A(L,W,j,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;D();const k=Z.attributes,I=j.getAttributes(),O=W.defaultAttributeValues;for(const $ in I){const J=I[$];if(J.location>=0){let K=k[$];if(K===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){const de=K.normalized,Ae=K.itemSize,X=t.get(K);if(X===void 0)continue;const we=X.buffer,me=X.type,_e=X.bytesPerElement;if(K.isInterleavedBufferAttribute){const ue=K.data,Le=ue.stride,Ce=K.offset;if(ue.isInstancedInterleavedBuffer){for(let pe=0;pe<J.locationSize;pe++)_(J.location+pe,ue.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<J.locationSize;pe++)E(J.location+pe);r.bindBuffer(34962,we);for(let pe=0;pe<J.locationSize;pe++)T(J.location+pe,Ae/J.locationSize,me,de,Le*_e,(Ce+Ae/J.locationSize*pe)*_e)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)_(J.location+ue,K.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<J.locationSize;ue++)E(J.location+ue);r.bindBuffer(34962,we);for(let ue=0;ue<J.locationSize;ue++)T(J.location+ue,Ae/J.locationSize,me,de,Ae*_e,Ae/J.locationSize*ue*_e)}}else if(O!==void 0){const de=O[$];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(J.location,de);break;case 3:r.vertexAttrib3fv(J.location,de);break;case 4:r.vertexAttrib4fv(J.location,de);break;default:r.vertexAttrib1fv(J.location,de)}}}}M()}function S(){re();for(const L in a){const W=a[L];for(const j in W){const Z=W[j];for(const k in Z)g(Z[k].object),delete Z[k];delete W[j]}delete a[L]}}function P(L){if(a[L.id]===void 0)return;const W=a[L.id];for(const j in W){const Z=W[j];for(const k in Z)g(Z[k].object),delete Z[k];delete W[j]}delete a[L.id]}function q(L){for(const W in a){const j=a[W];if(j[L.id]===void 0)continue;const Z=j[L.id];for(const k in Z)g(Z[k].object),delete Z[k];delete j[L.id]}}function re(){z(),h=!0,c!==l&&(c=l,p(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:re,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:q,initAttributes:D,enableAttribute:E,disableUnusedAttributes:M}}function cf(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,p;if(i)f=r,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function hf(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),f=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),d=r.getParameter(36347),x=r.getParameter(36348),v=r.getParameter(36349),D=f>0,E=o||e.has("OES_texture_float"),_=D&&E,M=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:D,floatFragmentTextures:E,floatVertexTextures:_,maxSamples:M}}function uf(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Fn,a=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,p){const g=u.length!==0||f||n!==0||i;return i=f,t=h(u,p,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,f,p){const g=u.clippingPlanes,m=u.clipIntersection,d=u.clipShadows,x=r.get(u);if(!i||g===null||g.length===0||s&&!d)s?h(null):c();else{const v=s?0:n,D=v*4;let E=x.clippingState||null;l.value=E,E=h(g,f,D,p);for(let _=0;_!==D;++_)E[_]=t[_];x.clippingState=E,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const m=u!==null?u.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const x=p+m*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<x)&&(d=new Float32Array(x));for(let D=0,E=p;D!==m;++D,E+=4)o.copy(u[D]).applyMatrix4(v,a),o.normal.toArray(d,E),d[E+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function df(r){let e=new WeakMap;function t(o,a){return a===Nr?o.mapping=gi:a===zr&&(o.mapping=xi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Nr||a===zr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fh(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class pl extends ul{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const li=4,ho=[.125,.215,.35,.446,.526,.582],Sn=20,yr=new pl,uo=new Se;let Br=null;const Mn=(1+Math.sqrt(5))/2,ai=1/Mn,fo=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Mn,ai),new b(0,Mn,-ai),new b(ai,0,Mn),new b(-ai,0,Mn),new b(Mn,ai,0),new b(-Mn,ai,0)];class po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Br=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Br),e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Br=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Vi,format:Tt,encoding:zn,depthBuffer:!1},i=mo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ff(s)),this._blurMaterial=pf(s,e,t)}return i}_compileMaterial(e){const t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,i){const a=new Et(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(uo),h.toneMapping=nn,h.autoClear=!1;const p=new Ot({name:"PMREM.Background",side:mt,depthWrite:!1,depthTest:!1}),g=new Ne(new Zi,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(uo),m=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):v===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const D=this._cubeSize;gs(i,v*D,x>2?D:0,D,D),h.setRenderTarget(i),m&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gi||e.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=go());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;gs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=fo[(i-1)%fo.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ne(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sn-1),m=s/g,d=isFinite(s)?1+Math.floor(h*m):Sn;d>Sn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Sn}`);const x=[];let v=0;for(let T=0;T<Sn;++T){const A=T/m,S=Math.exp(-A*A/2);x.push(S),T===0?v+=S:T<d&&(v+=2*S)}for(let T=0;T<x.length;T++)x[T]=x[T]/v;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:D}=this;f.dTheta.value=g,f.mipInt.value=D-n;const E=this._sizeLods[i],_=3*E*(i>D-li?i-D+li:0),M=4*(this._cubeSize-E);gs(t,_,M,3*E,2*E),l.setRenderTarget(t),l.render(u,yr)}}function ff(r){const e=[],t=[],n=[];let i=r;const s=r-li+1+ho.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-li?l=ho[o-r+li-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,m=3,d=2,x=1,v=new Float32Array(m*g*p),D=new Float32Array(d*g*p),E=new Float32Array(x*g*p);for(let M=0;M<p;M++){const T=M%3*2/3-1,A=M>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(S,m*g*M),D.set(f,d*g*M);const P=[M,M,M,M,M,M];E.set(P,x*g*M)}const _=new pt;_.setAttribute("position",new Ut(v,m)),_.setAttribute("uv",new Ut(D,d)),_.setAttribute("faceIndex",new Ut(E,x)),e.push(_),i>li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mo(r,e,t){const n=new On(r,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function pf(r,e,t){const n=new Float32Array(Sn),i=new b(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function go(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function xo(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mf(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nr||l===zr,h=l===gi||l===xi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new po(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new po(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xf(r,e,t,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let d=0,x=m.length;d<x;d++)e.update(m[d],34962)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const v=p.array;m=p.version;for(let D=0,E=v.length;D<E;D+=3){const _=v[D+0],M=v[D+1],T=v[D+2];f.push(_,M,M,T,T,_)}}else{const v=g.array;m=g.version;for(let D=0,E=v.length/3-1;D<E;D+=3){const _=D+0,M=D+1,T=D+2;f.push(_,M,M,T,T,_)}}const d=new(sl(f)?hl:cl)(f,1);d.version=m;const x=s.get(u);x&&e.remove(x),s.set(u,d)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Af(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,p){r.drawElements(s,p,a,f*l),t.update(p,s,1)}function u(f,p,g){if(g===0)return;let m,d;if(i)m=r,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function _f(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vf(r,e){return r[0]-e[0]}function Ef(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Cf(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Oe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=m!==void 0?m.length:0;let x=s.get(h);if(x===void 0||x.count!==d){let j=function(){L.dispose(),s.delete(h),h.removeEventListener("dispose",j)};var g=j;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],S=h.morphAttributes.color||[];let P=0;E===!0&&(P=1),_===!0&&(P=2),M===!0&&(P=3);let q=h.attributes.position.count*P,re=1;q>e.maxTextureSize&&(re=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const z=new Float32Array(q*re*4*d),L=new ll(z,q,re,d);L.type=Tn,L.needsUpdate=!0;const W=P*4;for(let Z=0;Z<d;Z++){const k=T[Z],I=A[Z],O=S[Z],$=q*re*4*Z;for(let J=0;J<k.count;J++){const K=J*W;E===!0&&(o.fromBufferAttribute(k,J),z[$+K+0]=o.x,z[$+K+1]=o.y,z[$+K+2]=o.z,z[$+K+3]=0),_===!0&&(o.fromBufferAttribute(I,J),z[$+K+4]=o.x,z[$+K+5]=o.y,z[$+K+6]=o.z,z[$+K+7]=0),M===!0&&(o.fromBufferAttribute(O,J),z[$+K+8]=o.x,z[$+K+9]=o.y,z[$+K+10]=o.z,z[$+K+11]=O.itemSize===4?o.w:1)}}x={count:d,texture:L,size:new ee(q,re)},s.set(h,x),h.addEventListener("dispose",j)}let v=0;for(let E=0;E<p.length;E++)v+=p[E];const D=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(r,"morphTargetBaseInfluence",D),f.getUniforms().setValue(r,"morphTargetInfluences",p),f.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const m=p===void 0?0:p.length;let d=n[h.id];if(d===void 0||d.length!==m){d=[];for(let _=0;_<m;_++)d[_]=[_,0];n[h.id]=d}for(let _=0;_<m;_++){const M=d[_];M[0]=_,M[1]=p[_]}d.sort(Ef);for(let _=0;_<8;_++)_<m&&d[_][1]?(a[_][0]=d[_][0],a[_][1]=d[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(vf);const x=h.morphAttributes.position,v=h.morphAttributes.normal;let D=0;for(let _=0;_<8;_++){const M=a[_],T=M[0],A=M[1];T!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+_)!==x[T]&&h.setAttribute("morphTarget"+_,x[T]),v&&h.getAttribute("morphNormal"+_)!==v[T]&&h.setAttribute("morphNormal"+_,v[T]),i[_]=A,D+=A):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),v&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const E=h.morphTargetsRelative?1:1-D;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Df(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ml=new Dt,gl=new ll,xl=new hh,Al=new dl,Ao=[],_o=[],vo=new Float32Array(16),Eo=new Float32Array(9),Co=new Float32Array(4);function Ei(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ao[i];if(s===void 0&&(s=new Float32Array(i),Ao[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Vs(r,e){let t=_o[e];t===void 0&&(t=new Int32Array(e),_o[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),ft(t,e)}}function Ff(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),ft(t,e)}}function Mf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),ft(t,e)}}function Sf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Co.set(n),r.uniformMatrix2fv(this.addr,!1,Co),ft(t,n)}}function bf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Eo.set(n),r.uniformMatrix3fv(this.addr,!1,Eo),ft(t,n)}}function wf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;vo.set(n),r.uniformMatrix4fv(this.addr,!1,vo),ft(t,n)}}function Tf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Lf(r,e){const t=this.cache;dt(t,e)||(r.uniform2iv(this.addr,e),ft(t,e))}function Pf(r,e){const t=this.cache;dt(t,e)||(r.uniform3iv(this.addr,e),ft(t,e))}function Rf(r,e){const t=this.cache;dt(t,e)||(r.uniform4iv(this.addr,e),ft(t,e))}function If(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Nf(r,e){const t=this.cache;dt(t,e)||(r.uniform2uiv(this.addr,e),ft(t,e))}function zf(r,e){const t=this.cache;dt(t,e)||(r.uniform3uiv(this.addr,e),ft(t,e))}function Of(r,e){const t=this.cache;dt(t,e)||(r.uniform4uiv(this.addr,e),ft(t,e))}function Uf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ml,i)}function Vf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xl,i)}function Gf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Al,i)}function kf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||gl,i)}function Hf(r){switch(r){case 5126:return yf;case 35664:return Bf;case 35665:return Ff;case 35666:return Mf;case 35674:return Sf;case 35675:return bf;case 35676:return wf;case 5124:case 35670:return Tf;case 35667:case 35671:return Lf;case 35668:case 35672:return Pf;case 35669:case 35673:return Rf;case 5125:return If;case 36294:return Nf;case 36295:return zf;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return kf}}function Wf(r,e){r.uniform1fv(this.addr,e)}function Xf(r,e){const t=Ei(e,this.size,2);r.uniform2fv(this.addr,t)}function qf(r,e){const t=Ei(e,this.size,3);r.uniform3fv(this.addr,t)}function Yf(r,e){const t=Ei(e,this.size,4);r.uniform4fv(this.addr,t)}function jf(r,e){const t=Ei(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Zf(r,e){const t=Ei(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Jf(r,e){const t=Ei(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $f(r,e){r.uniform1iv(this.addr,e)}function Kf(r,e){r.uniform2iv(this.addr,e)}function Qf(r,e){r.uniform3iv(this.addr,e)}function ep(r,e){r.uniform4iv(this.addr,e)}function tp(r,e){r.uniform1uiv(this.addr,e)}function np(r,e){r.uniform2uiv(this.addr,e)}function ip(r,e){r.uniform3uiv(this.addr,e)}function sp(r,e){r.uniform4uiv(this.addr,e)}function rp(r,e,t){const n=e.length,i=Vs(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||ml,i[s])}function ap(r,e,t){const n=e.length,i=Vs(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||xl,i[s])}function op(r,e,t){const n=e.length,i=Vs(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Al,i[s])}function lp(r,e,t){const n=e.length,i=Vs(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||gl,i[s])}function cp(r){switch(r){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return jf;case 35675:return Zf;case 35676:return Jf;case 5124:case 35670:return $f;case 35667:case 35671:return Kf;case 35668:case 35672:return Qf;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}class hp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Hf(t.type)}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=cp(t.type)}}class dp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function Do(r,e){r.seq.push(e),r.map[e.id]=e}function fp(r,e,t){const n=r.name,i=n.length;for(Fr.lastIndex=0;;){const s=Fr.exec(n),o=Fr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Do(t,c===void 0?new hp(a,r,e):new up(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new dp(a),Do(t,u)),t=u}}}class Ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);fp(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function yo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let pp=0;function mp(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function gp(r){switch(r){case zn:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Bo(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+mp(r.getShaderSource(e),o)}else return i}function xp(r,e){const t=gp(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ap(r,e){let t;switch(e){case yc:t="Linear";break;case Bc:t="Reinhard";break;case Fc:t="OptimizedCineon";break;case Mc:t="ACESFilmic";break;case Sc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _p(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function vp(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ep(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Pi(r){return r!==""}function Fo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hr(r){return r.replace(Cp,Dp)}function Dp(r,e){const t=ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Hr(t)}const yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(r){return r.replace(yp,Bp)}function Bp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Mp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gi:case xi:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xi:e="ENVMAP_MODE_REFRACTION";break}return e}function bp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ea:e="ENVMAP_BLENDING_MULTIPLY";break;case Cc:e="ENVMAP_BLENDING_MIX";break;case Dc:e="ENVMAP_BLENDING_ADD";break}return e}function wp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Tp(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Fp(t),c=Mp(t),h=Sp(t),u=bp(t),f=wp(t),p=t.isWebGL2?"":_p(t),g=vp(s),m=i.createProgram();let d,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Pi).join(`
`),d.length>0&&(d+=`
`),x=[p,g].filter(Pi).join(`
`),x.length>0&&(x+=`
`)):(d=[bo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),x=[p,bo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?ye.tonemapping_pars_fragment:"",t.toneMapping!==nn?Ap("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ye.encodings_pars_fragment,xp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=Hr(o),o=Fo(o,t),o=Mo(o,t),a=Hr(a),a=Fo(a,t),a=Mo(a,t),o=So(o),a=So(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=v+d+o,E=v+x+a,_=yo(i,35633,D),M=yo(i,35632,E);if(i.attachShader(m,_),i.attachShader(m,M),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(_).trim(),q=i.getShaderInfoLog(M).trim();let re=!0,z=!0;if(i.getProgramParameter(m,35714)===!1){re=!1;const L=Bo(i,_,"vertex"),W=Bo(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+L+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||q==="")&&(z=!1);z&&(this.diagnostics={runnable:re,programLog:S,vertexShader:{log:P,prefix:d},fragmentShader:{log:q,prefix:x}})}i.deleteShader(_),i.deleteShader(M);let T;this.getUniforms=function(){return T===void 0&&(T=new Ms(i,m)),T};let A;return this.getAttributes=function(){return A===void 0&&(A=Ep(i,m)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=pp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=M,this}let Lp=0;class Pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rp(e),t.set(e,n)),n}}class Rp{constructor(e){this.id=Lp++,this.code=e,this.usedTimes=0}}function Ip(r,e,t,n,i,s,o){const a=new ia,l=new Pp,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(A,S,P,q,re){const z=q.fog,L=re.geometry,W=A.isMeshStandardMaterial?q.environment:null,j=(A.isMeshStandardMaterial?t:e).get(A.envMap||W),Z=!!j&&j.mapping===zs?j.image.height:null,k=g[A.type];A.precision!==null&&(p=i.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const I=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,O=I!==void 0?I.length:0;let $=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let J,K,de,Ae;if(k){const Le=kt[k];J=Le.vertexShader,K=Le.fragmentShader}else J=A.vertexShader,K=A.fragmentShader,l.update(A),de=l.getVertexShaderID(A),Ae=l.getFragmentShaderID(A);const X=r.getRenderTarget(),we=A.alphaTest>0,me=A.clearcoat>0,_e=A.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:A.type,vertexShader:J,fragmentShader:K,defines:A.defines,customVertexShaderID:de,customFragmentShaderID:Ae,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?r.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:zn,map:!!A.map,matcap:!!A.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!A.lightMap,aoMap:!!A.aoMap,emissiveMap:!!A.emissiveMap,bumpMap:!!A.bumpMap,normalMap:!!A.normalMap,objectSpaceNormalMap:A.normalMapType===Yc,tangentSpaceNormalMap:A.normalMapType===ta,decodeVideoTexture:!!A.map&&A.map.isVideoTexture===!0&&A.map.encoding===Xe,clearcoat:me,clearcoatMap:me&&!!A.clearcoatMap,clearcoatRoughnessMap:me&&!!A.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!A.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!A.iridescenceMap,iridescenceThicknessMap:_e&&!!A.iridescenceThicknessMap,displacementMap:!!A.displacementMap,roughnessMap:!!A.roughnessMap,metalnessMap:!!A.metalnessMap,specularMap:!!A.specularMap,specularIntensityMap:!!A.specularIntensityMap,specularColorMap:!!A.specularColorMap,opaque:A.transparent===!1&&A.blending===hi,alphaMap:!!A.alphaMap,alphaTest:we,gradientMap:!!A.gradientMap,sheen:A.sheen>0,sheenColorMap:!!A.sheenColorMap,sheenRoughnessMap:!!A.sheenRoughnessMap,transmission:A.transmission>0,transmissionMap:!!A.transmissionMap,thicknessMap:!!A.thicknessMap,combine:A.combine,vertexTangents:!!A.normalMap&&!!L.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatMap||!!A.clearcoatRoughnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||!!A.displacementMap||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||!!A.sheenColorMap||!!A.sheenRoughnessMap,uvsVertexOnly:!(!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||A.transmission>0||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||A.sheen>0||!!A.sheenColorMap||!!A.sheenRoughnessMap)&&!!A.displacementMap,fog:!!z,useFog:A.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!A.flatShading,sizeAttenuation:A.sizeAttenuation,logarithmicDepthBuffer:u,skinning:re.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:A.toneMapped?r.toneMapping:nn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ut,flipSided:A.side===mt,useDepthPacking:!!A.depthPacking,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:A.extensions&&A.extensions.derivatives,extensionFragDepth:A.extensions&&A.extensions.fragDepth,extensionDrawBuffers:A.extensions&&A.extensions.drawBuffers,extensionShaderTextureLOD:A.extensions&&A.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function d(A){const S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)S.push(P),S.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(x(S,A),v(S,A),S.push(r.outputEncoding)),S.push(A.customProgramCacheKey),S.join()}function x(A,S){A.push(S.precision),A.push(S.outputEncoding),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.combine),A.push(S.vertexUvs),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function v(A,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.physicallyCorrectLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),A.push(a.mask)}function D(A){const S=g[A.type];let P;if(S){const q=kt[S];P=Ch.clone(q.uniforms)}else P=A.uniforms;return P}function E(A,S){let P;for(let q=0,re=c.length;q<re;q++){const z=c[q];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new Tp(r,S,A,s),c.push(P)),P}function _(A){if(--A.usedTimes===0){const S=c.indexOf(A);c[S]=c[c.length-1],c.pop(),A.destroy()}}function M(A){l.remove(A)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:D,acquireProgram:E,releaseProgram:_,releaseShaderCache:M,programs:c,dispose:T}}function Np(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function zp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function wo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function To(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,p,g,m,d){let x=r[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:d},r[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=p,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=d),e++,x}function a(u,f,p,g,m,d){const x=o(u,f,p,g,m,d);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function l(u,f,p,g,m,d){const x=o(u,f,p,g,m,d);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function c(u,f){t.length>1&&t.sort(u||zp),n.length>1&&n.sort(f||wo),i.length>1&&i.sort(f||wo)}function h(){for(let u=e,f=r.length;u<f;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Op(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new To,r.set(n,[o])):i>=s.length?(o=new To,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Up(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Se};break;case"SpotLight":t={position:new b,direction:new b,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new b,halfWidth:new b,halfHeight:new b};break}return r[e.id]=t,t}}}function Vp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Gp=0;function kp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Hp(r,e){const t=new Up,n=Vp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new b);const s=new b,o=new Ge,a=new Ge;function l(h,u){let f=0,p=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let m=0,d=0,x=0,v=0,D=0,E=0,_=0,M=0,T=0,A=0;h.sort(kp);const S=u!==!0?Math.PI:1;for(let q=0,re=h.length;q<re;q++){const z=h[q],L=z.color,W=z.intensity,j=z.distance,Z=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=L.r*W*S,p+=L.g*W*S,g+=L.b*W*S;else if(z.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(z.sh.coefficients[k],W);else if(z.isDirectionalLight){const k=t.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*S),z.castShadow){const I=z.shadow,O=n.get(z);O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=z.shadow.matrix,E++}i.directional[m]=k,m++}else if(z.isSpotLight){const k=t.get(z);k.position.setFromMatrixPosition(z.matrixWorld),k.color.copy(L).multiplyScalar(W*S),k.distance=j,k.coneCos=Math.cos(z.angle),k.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),k.decay=z.decay,i.spot[x]=k;const I=z.shadow;if(z.map&&(i.spotLightMap[T]=z.map,T++,I.updateMatrices(z),z.castShadow&&A++),i.spotLightMatrix[x]=I.matrix,z.castShadow){const O=n.get(z);O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.spotShadow[x]=O,i.spotShadowMap[x]=Z,M++}x++}else if(z.isRectAreaLight){const k=t.get(z);k.color.copy(L).multiplyScalar(W),k.halfWidth.set(z.width*.5,0,0),k.halfHeight.set(0,z.height*.5,0),i.rectArea[v]=k,v++}else if(z.isPointLight){const k=t.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*S),k.distance=z.distance,k.decay=z.decay,z.castShadow){const I=z.shadow,O=n.get(z);O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,O.shadowCameraNear=I.camera.near,O.shadowCameraFar=I.camera.far,i.pointShadow[d]=O,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=z.shadow.matrix,_++}i.point[d]=k,d++}else if(z.isHemisphereLight){const k=t.get(z);k.skyColor.copy(z.color).multiplyScalar(W*S),k.groundColor.copy(z.groundColor).multiplyScalar(W*S),i.hemi[D]=k,D++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==m||P.pointLength!==d||P.spotLength!==x||P.rectAreaLength!==v||P.hemiLength!==D||P.numDirectionalShadows!==E||P.numPointShadows!==_||P.numSpotShadows!==M||P.numSpotMaps!==T)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=v,i.point.length=d,i.hemi.length=D,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,P.directionalLength=m,P.pointLength=d,P.spotLength=x,P.rectAreaLength=v,P.hemiLength=D,P.numDirectionalShadows=E,P.numPointShadows=_,P.numSpotShadows=M,P.numSpotMaps=T,i.version=Gp++)}function c(h,u){let f=0,p=0,g=0,m=0,d=0;const x=u.matrixWorldInverse;for(let v=0,D=h.length;v<D;v++){const E=h[v];if(E.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(x),f++}else if(E.isSpotLight){const _=i.spot[g];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(x),_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(x),g++}else if(E.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(x),a.identity(),o.copy(E.matrixWorld),o.premultiply(x),a.extractRotation(o),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(x),p++}else if(E.isHemisphereLight){const _=i.hemi[d];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(x),d++}}}return{setup:l,setupView:c,state:i}}function Lo(r,e){const t=new Hp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wp(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Lo(r,e),t.set(s,[l])):o>=a.length?(l=new Lo(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Xp extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qp extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zp(r,e,t){let n=new sa;const i=new ee,s=new ee,o=new Oe,a=new Xp({depthPacking:qc}),l=new qp,c={},h=t.maxTextureSize,u={0:mt,1:gn,2:ut},f=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Yp,fragmentShader:jp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ne(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo,this.render=function(E,_,M){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const T=r.getRenderTarget(),A=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),P=r.state;P.setBlending(mn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let q=0,re=E.length;q<re;q++){const z=E[q],L=z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const W=L.getFrameExtents();if(i.multiply(W),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/W.x),i.x=s.x*W.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/W.y),i.y=s.y*W.y,L.mapSize.y=s.y)),L.map===null){const Z=this.type!==Li?{minFilter:lt,magFilter:lt}:{};L.map=new On(i.x,i.y,Z),L.map.texture.name=z.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();const j=L.getViewportCount();for(let Z=0;Z<j;Z++){const k=L.getViewport(Z);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),P.viewport(o),L.updateMatrices(z,Z),n=L.getFrustum(),D(_,M,L.camera,z,this.type)}L.isPointLightShadow!==!0&&this.type===Li&&x(L,M),L.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(T,A,S)};function x(E,_){const M=e.update(m);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new On(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(_,null,M,f,m,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(_,null,M,p,m,null)}function v(E,_,M,T,A,S){let P=null;const q=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(q!==void 0?P=q:P=M.isPointLight===!0?l:a,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0){const re=P.uuid,z=_.uuid;let L=c[re];L===void 0&&(L={},c[re]=L);let W=L[z];W===void 0&&(W=P.clone(),L[z]=W),P=W}return P.visible=_.visible,P.wireframe=_.wireframe,S===Li?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaTest,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(M.matrixWorld),P.nearDistance=T,P.farDistance=A),P}function D(E,_,M,T,A){if(E.visible===!1)return;if(E.layers.test(_.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===Li)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const q=e.update(E),re=E.material;if(Array.isArray(re)){const z=q.groups;for(let L=0,W=z.length;L<W;L++){const j=z[L],Z=re[j.materialIndex];if(Z&&Z.visible){const k=v(E,Z,T,M.near,M.far,A);r.renderBufferDirect(M,null,q,k,E,j)}}}else if(re.visible){const z=v(E,re,T,M.near,M.far,A);r.renderBufferDirect(M,null,q,z,E,null)}}const P=E.children;for(let q=0,re=P.length;q<re;q++)D(P[q],_,M,T,A)}}function Jp(r,e,t){const n=t.isWebGL2;function i(){let w=!1;const se=new Oe;let U=null;const he=new Oe(0,0,0,0);return{setMask:function(ce){U!==ce&&!w&&(r.colorMask(ce,ce,ce,ce),U=ce)},setLocked:function(ce){w=ce},setClear:function(ce,be,et,qe,rn){rn===!0&&(ce*=qe,be*=qe,et*=qe),se.set(ce,be,et,qe),he.equals(se)===!1&&(r.clearColor(ce,be,et,qe),he.copy(se))},reset:function(){w=!1,U=null,he.set(-1,0,0,0)}}}function s(){let w=!1,se=null,U=null,he=null;return{setTest:function(ce){ce?we(2929):me(2929)},setMask:function(ce){se!==ce&&!w&&(r.depthMask(ce),se=ce)},setFunc:function(ce){if(U!==ce){if(ce)switch(ce){case mc:r.depthFunc(512);break;case gc:r.depthFunc(519);break;case xc:r.depthFunc(513);break;case Ir:r.depthFunc(515);break;case Ac:r.depthFunc(514);break;case _c:r.depthFunc(518);break;case vc:r.depthFunc(516);break;case Ec:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);U=ce}},setLocked:function(ce){w=ce},setClear:function(ce){he!==ce&&(r.clearDepth(ce),he=ce)},reset:function(){w=!1,se=null,U=null,he=null}}}function o(){let w=!1,se=null,U=null,he=null,ce=null,be=null,et=null,qe=null,rn=null;return{setTest:function(He){w||(He?we(2960):me(2960))},setMask:function(He){se!==He&&!w&&(r.stencilMask(He),se=He)},setFunc:function(He,qt,Ft){(U!==He||he!==qt||ce!==Ft)&&(r.stencilFunc(He,qt,Ft),U=He,he=qt,ce=Ft)},setOp:function(He,qt,Ft){(be!==He||et!==qt||qe!==Ft)&&(r.stencilOp(He,qt,Ft),be=He,et=qt,qe=Ft)},setLocked:function(He){w=He},setClear:function(He){rn!==He&&(r.clearStencil(He),rn=He)},reset:function(){w=!1,se=null,U=null,he=null,ce=null,be=null,et=null,qe=null,rn=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,x=!1,v=null,D=null,E=null,_=null,M=null,T=null,A=null,S=!1,P=null,q=null,re=null,z=null,L=null;const W=r.getParameter(35661);let j=!1,Z=0;const k=r.getParameter(7938);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),j=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),j=Z>=2);let I=null,O={};const $=r.getParameter(3088),J=r.getParameter(2978),K=new Oe().fromArray($),de=new Oe().fromArray(J);function Ae(w,se,U){const he=new Uint8Array(4),ce=r.createTexture();r.bindTexture(w,ce),r.texParameteri(w,10241,9728),r.texParameteri(w,10240,9728);for(let be=0;be<U;be++)r.texImage2D(se+be,0,6408,1,1,0,6408,5121,he);return ce}const X={};X[3553]=Ae(3553,3553,1),X[34067]=Ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(2929),l.setFunc(Ir),$e(!1),gt(Da),we(2884),Ye(mn);function we(w){f[w]!==!0&&(r.enable(w),f[w]=!0)}function me(w){f[w]!==!1&&(r.disable(w),f[w]=!1)}function _e(w,se){return p[w]!==se?(r.bindFramebuffer(w,se),p[w]=se,n&&(w===36009&&(p[36160]=se),w===36160&&(p[36009]=se)),!0):!1}function ue(w,se){let U=m,he=!1;if(w)if(U=g.get(se),U===void 0&&(U=[],g.set(se,U)),w.isWebGLMultipleRenderTargets){const ce=w.texture;if(U.length!==ce.length||U[0]!==36064){for(let be=0,et=ce.length;be<et;be++)U[be]=36064+be;U.length=ce.length,he=!0}}else U[0]!==36064&&(U[0]=36064,he=!0);else U[0]!==1029&&(U[0]=1029,he=!0);he&&(t.isWebGL2?r.drawBuffers(U):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}function Le(w){return d!==w?(r.useProgram(w),d=w,!0):!1}const Ce={[oi]:32774,[sc]:32778,[rc]:32779};if(n)Ce[Fa]=32775,Ce[Ma]=32776;else{const w=e.get("EXT_blend_minmax");w!==null&&(Ce[Fa]=w.MIN_EXT,Ce[Ma]=w.MAX_EXT)}const pe={[ac]:0,[oc]:1,[lc]:768,[el]:770,[pc]:776,[dc]:774,[hc]:772,[cc]:769,[tl]:771,[fc]:775,[uc]:773};function Ye(w,se,U,he,ce,be,et,qe){if(w===mn){x===!0&&(me(3042),x=!1);return}if(x===!1&&(we(3042),x=!0),w!==ic){if(w!==v||qe!==S){if((D!==oi||M!==oi)&&(r.blendEquation(32774),D=oi,M=oi),qe)switch(w){case hi:r.blendFuncSeparate(1,771,1,771);break;case mi:r.blendFunc(1,1);break;case ya:r.blendFuncSeparate(0,769,0,1);break;case Ba:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case hi:r.blendFuncSeparate(770,771,1,771);break;case mi:r.blendFunc(770,1);break;case ya:r.blendFuncSeparate(0,769,0,1);break;case Ba:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}E=null,_=null,T=null,A=null,v=w,S=qe}return}ce=ce||se,be=be||U,et=et||he,(se!==D||ce!==M)&&(r.blendEquationSeparate(Ce[se],Ce[ce]),D=se,M=ce),(U!==E||he!==_||be!==T||et!==A)&&(r.blendFuncSeparate(pe[U],pe[he],pe[be],pe[et]),E=U,_=he,T=be,A=et),v=w,S=null}function st(w,se){w.side===ut?me(2884):we(2884);let U=w.side===mt;se&&(U=!U),$e(U),w.blending===hi&&w.transparent===!1?Ye(mn):Ye(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const he=w.stencilWrite;c.setTest(he),he&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Pe(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?we(32926):me(32926)}function $e(w){P!==w&&(w?r.frontFace(2304):r.frontFace(2305),P=w)}function gt(w){w!==ec?(we(2884),w!==q&&(w===Da?r.cullFace(1029):w===tc?r.cullFace(1028):r.cullFace(1032))):me(2884),q=w}function Ke(w){w!==re&&(j&&r.lineWidth(w),re=w)}function Pe(w,se,U){w?(we(32823),(z!==se||L!==U)&&(r.polygonOffset(se,U),z=se,L=U)):me(32823)}function Bt(w){w?we(3089):me(3089)}function xt(w){w===void 0&&(w=33984+W-1),I!==w&&(r.activeTexture(w),I=w)}function F(w,se){I===null&&xt();let U=O[I];U===void 0&&(U={type:void 0,texture:void 0},O[I]=U),(U.type!==w||U.texture!==se)&&(r.bindTexture(w,se||X[w]),U.type=w,U.texture=se)}function C(){const w=O[I];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function V(){try{r.compressedTexImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function te(){try{r.texSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function y(){try{r.texStorage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y(){try{r.texImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ne(){try{r.texImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function le(w){K.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),K.copy(w))}function ae(w){de.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),de.copy(w))}function xe(w,se){let U=u.get(se);U===void 0&&(U=new WeakMap,u.set(se,U));let he=U.get(w);he===void 0&&(he=r.getUniformBlockIndex(se,w.name),U.set(w,he))}function Be(w,se){const he=u.get(se).get(w);h.get(w)!==he&&(r.uniformBlockBinding(se,he,w.__bindingPointIndex),h.set(w,he))}function Ue(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},I=null,O={},p={},g=new WeakMap,m=[],d=null,x=!1,v=null,D=null,E=null,_=null,M=null,T=null,A=null,S=!1,P=null,q=null,re=null,z=null,L=null,K.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:we,disable:me,bindFramebuffer:_e,drawBuffers:ue,useProgram:Le,setBlending:Ye,setMaterial:st,setFlipSided:$e,setCullFace:gt,setLineWidth:Ke,setPolygonOffset:Pe,setScissorTest:Bt,activeTexture:xt,bindTexture:F,unbindTexture:C,compressedTexImage2D:V,texImage2D:Y,texImage3D:ne,updateUBOMapping:xe,uniformBlockBinding:Be,texStorage2D:ge,texStorage3D:y,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:oe,scissor:le,viewport:ae,reset:Ue}}function $p(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,C){return x?new OffscreenCanvas(F,C):Gi("canvas")}function D(F,C,V,Q){let te=1;if((F.width>Q||F.height>Q)&&(te=Q/Math.max(F.width,F.height)),te<1||C===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const oe=C?ws:Math.floor,ge=oe(te*F.width),y=oe(te*F.height);m===void 0&&(m=v(ge,y));const Y=V?v(ge,y):m;return Y.width=ge,Y.height=y,Y.getContext("2d").drawImage(F,0,0,ge,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+ge+"x"+y+")."),Y}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function E(F){return kr(F.width)&&kr(F.height)}function _(F){return a?!1:F.wrapS!==zt||F.wrapT!==zt||F.minFilter!==lt&&F.minFilter!==bt}function M(F,C){return F.generateMipmaps&&C&&F.minFilter!==lt&&F.minFilter!==bt}function T(F){r.generateMipmap(F)}function A(F,C,V,Q,te=!1){if(a===!1)return C;if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let oe=C;return C===6403&&(V===5126&&(oe=33326),V===5131&&(oe=33325),V===5121&&(oe=33321)),C===33319&&(V===5126&&(oe=33328),V===5131&&(oe=33327),V===5121&&(oe=33323)),C===6408&&(V===5126&&(oe=34836),V===5131&&(oe=34842),V===5121&&(oe=Q===Xe&&te===!1?35907:32856),V===32819&&(oe=32854),V===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function S(F,C,V){return M(F,V)===!0||F.isFramebufferTexture&&F.minFilter!==lt&&F.minFilter!==bt?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function P(F){return F===lt||F===Sa||F===ba?9728:9729}function q(F){const C=F.target;C.removeEventListener("dispose",q),z(C),C.isVideoTexture&&g.delete(C)}function re(F){const C=F.target;C.removeEventListener("dispose",re),W(C)}function z(F){const C=n.get(F);if(C.__webglInit===void 0)return;const V=F.source,Q=d.get(V);if(Q){const te=Q[C.__cacheKey];te.usedTimes--,te.usedTimes===0&&L(F),Object.keys(Q).length===0&&d.delete(V)}n.remove(F)}function L(F){const C=n.get(F);r.deleteTexture(C.__webglTexture);const V=F.source,Q=d.get(V);delete Q[C.__cacheKey],o.memory.textures--}function W(F){const C=F.texture,V=n.get(F),Q=n.get(C);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(V.__webglFramebuffer[te]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let te=0;te<V.__webglColorRenderbuffer.length;te++)V.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[te]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let te=0,oe=C.length;te<oe;te++){const ge=n.get(C[te]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(C[te])}n.remove(C),n.remove(F)}let j=0;function Z(){j=0}function k(){const F=j;return F>=l&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l),j+=1,F}function I(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.encoding),C.join()}function O(F,C){const V=n.get(F);if(F.isVideoTexture&&Bt(F),F.isRenderTargetTexture===!1&&F.version>0&&V.__version!==F.version){const Q=F.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,F,C);return}}t.activeTexture(33984+C),t.bindTexture(3553,V.__webglTexture)}function $(F,C){const V=n.get(F);if(F.version>0&&V.__version!==F.version){me(V,F,C);return}t.activeTexture(33984+C),t.bindTexture(35866,V.__webglTexture)}function J(F,C){const V=n.get(F);if(F.version>0&&V.__version!==F.version){me(V,F,C);return}t.activeTexture(33984+C),t.bindTexture(32879,V.__webglTexture)}function K(F,C){const V=n.get(F);if(F.version>0&&V.__version!==F.version){_e(V,F,C);return}t.activeTexture(33984+C),t.bindTexture(34067,V.__webglTexture)}const de={[Or]:10497,[zt]:33071,[Ur]:33648},Ae={[lt]:9728,[Sa]:9984,[ba]:9986,[bt]:9729,[bc]:9985,[Os]:9987};function X(F,C,V){if(V?(r.texParameteri(F,10242,de[C.wrapS]),r.texParameteri(F,10243,de[C.wrapT]),(F===32879||F===35866)&&r.texParameteri(F,32882,de[C.wrapR]),r.texParameteri(F,10240,Ae[C.magFilter]),r.texParameteri(F,10241,Ae[C.minFilter])):(r.texParameteri(F,10242,33071),r.texParameteri(F,10243,33071),(F===32879||F===35866)&&r.texParameteri(F,32882,33071),(C.wrapS!==zt||C.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(F,10240,P(C.magFilter)),r.texParameteri(F,10241,P(C.minFilter)),C.minFilter!==lt&&C.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(C.type===Tn&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===Vi&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(r.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function we(F,C){let V=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",q));const Q=C.source;let te=d.get(Q);te===void 0&&(te={},d.set(Q,te));const oe=I(C);if(oe!==F.__cacheKey){te[oe]===void 0&&(te[oe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[oe].usedTimes++;const ge=te[F.__cacheKey];ge!==void 0&&(te[F.__cacheKey].usedTimes--,ge.usedTimes===0&&L(C)),F.__cacheKey=oe,F.__webglTexture=te[oe].texture}return V}function me(F,C,V){let Q=3553;C.isDataArrayTexture&&(Q=35866),C.isData3DTexture&&(Q=32879);const te=we(F,C),oe=C.source;if(t.activeTexture(33984+V),t.bindTexture(Q,F.__webglTexture),oe.version!==oe.__currentVersion||te===!0){r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);const ge=_(C)&&E(C.image)===!1;let y=D(C.image,ge,!1,h);y=xt(C,y);const Y=E(y)||a,ne=s.convert(C.format,C.encoding);let le=s.convert(C.type),ae=A(C.internalFormat,ne,le,C.encoding,C.isVideoTexture);X(Q,C,Y);let xe;const Be=C.mipmaps,Ue=a&&C.isVideoTexture!==!0,w=oe.__currentVersion===void 0||te===!0,se=S(C,y,Y);if(C.isDepthTexture)ae=6402,a?C.type===Tn?ae=36012:C.type===wn?ae=33190:C.type===ui?ae=35056:ae=33189:C.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Pn&&ae===6402&&C.type!==il&&C.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=wn,le=s.convert(C.type)),C.format===Ai&&ae===6402&&(ae=34041,C.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=ui,le=s.convert(C.type))),w&&(Ue?t.texStorage2D(3553,1,ae,y.width,y.height):t.texImage2D(3553,0,ae,y.width,y.height,0,ne,le,null));else if(C.isDataTexture)if(Be.length>0&&Y){Ue&&w&&t.texStorage2D(3553,se,ae,Be[0].width,Be[0].height);for(let U=0,he=Be.length;U<he;U++)xe=Be[U],Ue?t.texSubImage2D(3553,U,0,0,xe.width,xe.height,ne,le,xe.data):t.texImage2D(3553,U,ae,xe.width,xe.height,0,ne,le,xe.data);C.generateMipmaps=!1}else Ue?(w&&t.texStorage2D(3553,se,ae,y.width,y.height),t.texSubImage2D(3553,0,0,0,y.width,y.height,ne,le,y.data)):t.texImage2D(3553,0,ae,y.width,y.height,0,ne,le,y.data);else if(C.isCompressedTexture){Ue&&w&&t.texStorage2D(3553,se,ae,Be[0].width,Be[0].height);for(let U=0,he=Be.length;U<he;U++)xe=Be[U],C.format!==Tt?ne!==null?Ue?t.compressedTexSubImage2D(3553,U,0,0,xe.width,xe.height,ne,xe.data):t.compressedTexImage2D(3553,U,ae,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,U,0,0,xe.width,xe.height,ne,le,xe.data):t.texImage2D(3553,U,ae,xe.width,xe.height,0,ne,le,xe.data)}else if(C.isDataArrayTexture)Ue?(w&&t.texStorage3D(35866,se,ae,y.width,y.height,y.depth),t.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,ne,le,y.data)):t.texImage3D(35866,0,ae,y.width,y.height,y.depth,0,ne,le,y.data);else if(C.isData3DTexture)Ue?(w&&t.texStorage3D(32879,se,ae,y.width,y.height,y.depth),t.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,ne,le,y.data)):t.texImage3D(32879,0,ae,y.width,y.height,y.depth,0,ne,le,y.data);else if(C.isFramebufferTexture){if(w)if(Ue)t.texStorage2D(3553,se,ae,y.width,y.height);else{let U=y.width,he=y.height;for(let ce=0;ce<se;ce++)t.texImage2D(3553,ce,ae,U,he,0,ne,le,null),U>>=1,he>>=1}}else if(Be.length>0&&Y){Ue&&w&&t.texStorage2D(3553,se,ae,Be[0].width,Be[0].height);for(let U=0,he=Be.length;U<he;U++)xe=Be[U],Ue?t.texSubImage2D(3553,U,0,0,ne,le,xe):t.texImage2D(3553,U,ae,ne,le,xe);C.generateMipmaps=!1}else Ue?(w&&t.texStorage2D(3553,se,ae,y.width,y.height),t.texSubImage2D(3553,0,0,0,ne,le,y)):t.texImage2D(3553,0,ae,ne,le,y);M(C,Y)&&T(Q),oe.__currentVersion=oe.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function _e(F,C,V){if(C.image.length!==6)return;const Q=we(F,C),te=C.source;if(t.activeTexture(33984+V),t.bindTexture(34067,F.__webglTexture),te.version!==te.__currentVersion||Q===!0){r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);const oe=C.isCompressedTexture||C.image[0].isCompressedTexture,ge=C.image[0]&&C.image[0].isDataTexture,y=[];for(let U=0;U<6;U++)!oe&&!ge?y[U]=D(C.image[U],!1,!0,c):y[U]=ge?C.image[U].image:C.image[U],y[U]=xt(C,y[U]);const Y=y[0],ne=E(Y)||a,le=s.convert(C.format,C.encoding),ae=s.convert(C.type),xe=A(C.internalFormat,le,ae,C.encoding),Be=a&&C.isVideoTexture!==!0,Ue=te.__currentVersion===void 0||Q===!0;let w=S(C,Y,ne);X(34067,C,ne);let se;if(oe){Be&&Ue&&t.texStorage2D(34067,w,xe,Y.width,Y.height);for(let U=0;U<6;U++){se=y[U].mipmaps;for(let he=0;he<se.length;he++){const ce=se[he];C.format!==Tt?le!==null?Be?t.compressedTexSubImage2D(34069+U,he,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(34069+U,he,xe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+U,he,0,0,ce.width,ce.height,le,ae,ce.data):t.texImage2D(34069+U,he,xe,ce.width,ce.height,0,le,ae,ce.data)}}}else{se=C.mipmaps,Be&&Ue&&(se.length>0&&w++,t.texStorage2D(34067,w,xe,y[0].width,y[0].height));for(let U=0;U<6;U++)if(ge){Be?t.texSubImage2D(34069+U,0,0,0,y[U].width,y[U].height,le,ae,y[U].data):t.texImage2D(34069+U,0,xe,y[U].width,y[U].height,0,le,ae,y[U].data);for(let he=0;he<se.length;he++){const be=se[he].image[U].image;Be?t.texSubImage2D(34069+U,he+1,0,0,be.width,be.height,le,ae,be.data):t.texImage2D(34069+U,he+1,xe,be.width,be.height,0,le,ae,be.data)}}else{Be?t.texSubImage2D(34069+U,0,0,0,le,ae,y[U]):t.texImage2D(34069+U,0,xe,le,ae,y[U]);for(let he=0;he<se.length;he++){const ce=se[he];Be?t.texSubImage2D(34069+U,he+1,0,0,le,ae,ce.image[U]):t.texImage2D(34069+U,he+1,xe,le,ae,ce.image[U])}}}M(C,ne)&&T(34067),te.__currentVersion=te.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function ue(F,C,V,Q,te){const oe=s.convert(V.format,V.encoding),ge=s.convert(V.type),y=A(V.internalFormat,oe,ge,V.encoding);n.get(C).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,y,C.width,C.height,C.depth,0,oe,ge,null):t.texImage2D(te,0,y,C.width,C.height,0,oe,ge,null)),t.bindFramebuffer(36160,F),Pe(C)?f.framebufferTexture2DMultisampleEXT(36160,Q,te,n.get(V).__webglTexture,0,Ke(C)):r.framebufferTexture2D(36160,Q,te,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Le(F,C,V){if(r.bindRenderbuffer(36161,F),C.depthBuffer&&!C.stencilBuffer){let Q=33189;if(V||Pe(C)){const te=C.depthTexture;te&&te.isDepthTexture&&(te.type===Tn?Q=36012:te.type===wn&&(Q=33190));const oe=Ke(C);Pe(C)?f.renderbufferStorageMultisampleEXT(36161,oe,Q,C.width,C.height):r.renderbufferStorageMultisample(36161,oe,Q,C.width,C.height)}else r.renderbufferStorage(36161,Q,C.width,C.height);r.framebufferRenderbuffer(36160,36096,36161,F)}else if(C.depthBuffer&&C.stencilBuffer){const Q=Ke(C);V&&Pe(C)===!1?r.renderbufferStorageMultisample(36161,Q,35056,C.width,C.height):Pe(C)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,C.width,C.height):r.renderbufferStorage(36161,34041,C.width,C.height),r.framebufferRenderbuffer(36160,33306,36161,F)}else{const Q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0;te<Q.length;te++){const oe=Q[te],ge=s.convert(oe.format,oe.encoding),y=s.convert(oe.type),Y=A(oe.internalFormat,ge,y,oe.encoding),ne=Ke(C);V&&Pe(C)===!1?r.renderbufferStorageMultisample(36161,ne,Y,C.width,C.height):Pe(C)?f.renderbufferStorageMultisampleEXT(36161,ne,Y,C.width,C.height):r.renderbufferStorage(36161,Y,C.width,C.height)}}r.bindRenderbuffer(36161,null)}function Ce(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),O(C.depthTexture,0);const Q=n.get(C.depthTexture).__webglTexture,te=Ke(C);if(C.depthTexture.format===Pn)Pe(C)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,te):r.framebufferTexture2D(36160,36096,3553,Q,0);else if(C.depthTexture.format===Ai)Pe(C)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,te):r.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function pe(F){const C=n.get(F),V=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ce(C.__webglFramebuffer,F)}else if(V){C.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,C.__webglFramebuffer[Q]),C.__webglDepthbuffer[Q]=r.createRenderbuffer(),Le(C.__webglDepthbuffer[Q],F,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),Le(C.__webglDepthbuffer,F,!1);t.bindFramebuffer(36160,null)}function Ye(F,C,V){const Q=n.get(F);C!==void 0&&ue(Q.__webglFramebuffer,F,F.texture,36064,3553),V!==void 0&&pe(F)}function st(F){const C=F.texture,V=n.get(F),Q=n.get(C);F.addEventListener("dispose",re),F.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=C.version,o.memory.textures++);const te=F.isWebGLCubeRenderTarget===!0,oe=F.isWebGLMultipleRenderTargets===!0,ge=E(F)||a;if(te){V.__webglFramebuffer=[];for(let y=0;y<6;y++)V.__webglFramebuffer[y]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),oe)if(i.drawBuffers){const y=F.texture;for(let Y=0,ne=y.length;Y<ne;Y++){const le=n.get(y[Y]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&F.samples>0&&Pe(F)===!1){const y=oe?C:[C];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let Y=0;Y<y.length;Y++){const ne=y[Y];V.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[Y]);const le=s.convert(ne.format,ne.encoding),ae=s.convert(ne.type),xe=A(ne.internalFormat,le,ae,ne.encoding),Be=Ke(F);r.renderbufferStorageMultisample(36161,Be,xe,F.width,F.height),r.framebufferRenderbuffer(36160,36064+Y,36161,V.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(36161,null),F.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(V.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,Q.__webglTexture),X(34067,C,ge);for(let y=0;y<6;y++)ue(V.__webglFramebuffer[y],F,C,36064,34069+y);M(C,ge)&&T(34067),t.unbindTexture()}else if(oe){const y=F.texture;for(let Y=0,ne=y.length;Y<ne;Y++){const le=y[Y],ae=n.get(le);t.bindTexture(3553,ae.__webglTexture),X(3553,le,ge),ue(V.__webglFramebuffer,F,le,36064+Y,3553),M(le,ge)&&T(3553)}t.unbindTexture()}else{let y=3553;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(a?y=F.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,Q.__webglTexture),X(y,C,ge),ue(V.__webglFramebuffer,F,C,36064,y),M(C,ge)&&T(y),t.unbindTexture()}F.depthBuffer&&pe(F)}function $e(F){const C=E(F)||a,V=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let Q=0,te=V.length;Q<te;Q++){const oe=V[Q];if(M(oe,C)){const ge=F.isWebGLCubeRenderTarget?34067:3553,y=n.get(oe).__webglTexture;t.bindTexture(ge,y),T(ge),t.unbindTexture()}}}function gt(F){if(a&&F.samples>0&&Pe(F)===!1){const C=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],V=F.width,Q=F.height;let te=16384;const oe=[],ge=F.stencilBuffer?33306:36096,y=n.get(F),Y=F.isWebGLMultipleRenderTargets===!0;if(Y)for(let ne=0;ne<C.length;ne++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ne,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ne,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let ne=0;ne<C.length;ne++){oe.push(36064+ne),F.depthBuffer&&oe.push(ge);const le=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(le===!1&&(F.depthBuffer&&(te|=256),F.stencilBuffer&&(te|=1024)),Y&&r.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[ne]),le===!0&&(r.invalidateFramebuffer(36008,[ge]),r.invalidateFramebuffer(36009,[ge])),Y){const ae=n.get(C[ne]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ae,0)}r.blitFramebuffer(0,0,V,Q,0,0,V,Q,te,9728),p&&r.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let ne=0;ne<C.length;ne++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ne,36161,y.__webglColorRenderbuffer[ne]);const le=n.get(C[ne]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ne,3553,le,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function Ke(F){return Math.min(u,F.samples)}function Pe(F){const C=n.get(F);return a&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Bt(F){const C=o.render.frame;g.get(F)!==C&&(g.set(F,C),F.update())}function xt(F,C){const V=F.encoding,Q=F.format,te=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===Gr||V!==zn&&(V===Xe?a===!1?e.has("EXT_sRGB")===!0&&Q===Tt?(F.format=Gr,F.minFilter=bt,F.generateMipmaps=!1):C=al.sRGBToLinear(C):(Q!==Tt||te!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),C}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.setTexture2D=O,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=Ye,this.setupRenderTarget=st,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Pe}function Kp(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Nn)return 5121;if(s===Pc)return 32819;if(s===Rc)return 32820;if(s===wc)return 5120;if(s===Tc)return 5122;if(s===il)return 5123;if(s===Lc)return 5124;if(s===wn)return 5125;if(s===Tn)return 5126;if(s===Vi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ic)return 6406;if(s===Tt)return 6408;if(s===zc)return 6409;if(s===Oc)return 6410;if(s===Pn)return 6402;if(s===Ai)return 34041;if(s===Uc)return 6403;if(s===Nc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Gr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Vc)return 36244;if(s===Gc)return 33319;if(s===kc)return 33320;if(s===Hc)return 36249;if(s===Ks||s===Qs||s===er||s===tr)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===er)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wa||s===Ta||s===La||s===Pa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ta)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===La)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ra||s===Ia)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ra)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ia)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Na||s===za||s===Oa||s===Ua||s===Va||s===Ga||s===ka||s===Ha||s===Wa||s===Xa||s===qa||s===Ya||s===ja||s===Za)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Na)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===za)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ua)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Va)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ga)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ka)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ha)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ya)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ja)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Za)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ja)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ja)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ui?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Qp extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e0={type:"move"};class Mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const v=new xs;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[m.jointName]=v,c.add(v)}const x=c.joints[m.jointName];d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class t0 extends Dt{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Pn,h!==Pn&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pn&&(n=wn),n===void 0&&h===Ai&&(n=ui),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:lt,this.minFilter=l!==void 0?l:lt,this.flipY=!1,this.generateMipmaps=!1}}class n0 extends Vn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const x=[],v=[],D=new Et;D.layers.enable(1),D.viewport=new Oe;const E=new Et;E.layers.enable(2),E.viewport=new Oe;const _=[D,E],M=new Qp;M.layers.enable(1),M.layers.enable(2);let T=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=x[I];return O===void 0&&(O=new Mr,x[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=x[I];return O===void 0&&(O=new Mr,x[I]=O),O.getGripSpace()},this.getHand=function(I){let O=x[I];return O===void 0&&(O=new Mr,x[I]=O),O.getHandSpace()};function S(I){const O=v.indexOf(I.inputSource);if(O===-1)return;const $=x[O];$!==void 0&&$.dispatchEvent({type:I.type,data:I.inputSource})}function P(){i.removeEventListener("select",S),i.removeEventListener("selectstart",S),i.removeEventListener("selectend",S),i.removeEventListener("squeeze",S),i.removeEventListener("squeezestart",S),i.removeEventListener("squeezeend",S),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",q);for(let I=0;I<x.length;I++){const O=v[I];O!==null&&(v[I]=null,x[I].disconnect(O))}T=null,A=null,e.setRenderTarget(m),f=null,u=null,h=null,i=null,d=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",S),i.addEventListener("selectstart",S),i.addEventListener("selectend",S),i.addEventListener("squeeze",S),i.addEventListener("squeezestart",S),i.addEventListener("squeezeend",S),i.addEventListener("end",P),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,O),i.updateRenderState({baseLayer:f}),d=new On(f.framebufferWidth,f.framebufferHeight,{format:Tt,type:Nn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let O=null,$=null,J=null;g.depth&&(J=g.stencil?35056:33190,O=g.stencil?Ai:Pn,$=g.stencil?ui:wn);const K={colorFormat:32856,depthFormat:J,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(K),i.updateRenderState({layers:[u]}),d=new On(u.textureWidth,u.textureHeight,{format:Tt,type:Nn,depthTexture:new t0(u.textureWidth,u.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const de=e.properties.get(d);de.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function q(I){for(let O=0;O<I.removed.length;O++){const $=I.removed[O],J=v.indexOf($);J>=0&&(v[J]=null,x[J].dispatchEvent({type:"disconnected",data:$}))}for(let O=0;O<I.added.length;O++){const $=I.added[O];let J=v.indexOf($);if(J===-1){for(let de=0;de<x.length;de++)if(de>=v.length){v.push($),J=de;break}else if(v[de]===null){v[de]=$,J=de;break}if(J===-1)break}const K=x[J];K&&K.dispatchEvent({type:"connected",data:$})}}const re=new b,z=new b;function L(I,O,$){re.setFromMatrixPosition(O.matrixWorld),z.setFromMatrixPosition($.matrixWorld);const J=re.distanceTo(z),K=O.projectionMatrix.elements,de=$.projectionMatrix.elements,Ae=K[14]/(K[10]-1),X=K[14]/(K[10]+1),we=(K[9]+1)/K[5],me=(K[9]-1)/K[5],_e=(K[8]-1)/K[0],ue=(de[8]+1)/de[0],Le=Ae*_e,Ce=Ae*ue,pe=J/(-_e+ue),Ye=pe*-_e;O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ye),I.translateZ(pe),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const st=Ae+pe,$e=X+pe,gt=Le-Ye,Ke=Ce+(J-Ye),Pe=we*X/$e*st,Bt=me*X/$e*st;I.projectionMatrix.makePerspective(gt,Ke,Pe,Bt,st,$e)}function W(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;M.near=E.near=D.near=I.near,M.far=E.far=D.far=I.far,(T!==M.near||A!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,A=M.far);const O=I.parent,$=M.cameras;W(M,O);for(let K=0;K<$.length;K++)W($[K],O);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),I.matrix.copy(M.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const J=I.children;for(let K=0,de=J.length;K<de;K++)J[K].updateMatrixWorld(!0);$.length===2?L(M,D,E):M.projectionMatrix.copy(D.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(I){u!==null&&(u.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let j=null;function Z(I,O){if(c=O.getViewerPose(l||o),p=O,c!==null){const $=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let J=!1;$.length!==M.cameras.length&&(M.cameras.length=0,J=!0);for(let K=0;K<$.length;K++){const de=$[K];let Ae=null;if(f!==null)Ae=f.getViewport(de);else{const we=h.getViewSubImage(u,de);Ae=we.viewport,K===0&&(e.setRenderTargetTextures(d,we.colorTexture,u.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(d))}let X=_[K];X===void 0&&(X=new Et,X.layers.enable(K),X.viewport=new Oe,_[K]=X),X.matrix.fromArray(de.transform.matrix),X.projectionMatrix.fromArray(de.projectionMatrix),X.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),K===0&&M.matrix.copy(X.matrix),J===!0&&M.cameras.push(X)}}for(let $=0;$<x.length;$++){const J=v[$],K=x[$];J!==null&&K!==void 0&&K.update(J,O,l||o)}j&&j(I,O),p=null}const k=new fl;k.setAnimationLoop(Z),this.setAnimationLoop=function(I){j=I},this.dispose=function(){}}}function i0(r,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,x,v,D){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(m,d):d.isMeshToonMaterial?(i(m,d),h(m,d)):d.isMeshPhongMaterial?(i(m,d),c(m,d)):d.isMeshStandardMaterial?(i(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,D)):d.isMeshMatcapMaterial?(i(m,d),p(m,d)):d.isMeshDepthMaterial?i(m,d):d.isMeshDistanceMaterial?(i(m,d),g(m,d)):d.isMeshNormalMaterial?i(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,x,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===mt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===mt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const E=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*E}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let D;d.aoMap?D=d.aoMap:d.lightMap&&(D=d.lightMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),m.uv2Transform.value.copy(D.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let D;d.map?D=d.map:d.alphaMap&&(D=d.alphaMap),D!==void 0&&(D.matrixAutoUpdate===!0&&D.updateMatrix(),m.uvTransform.value.copy(D.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===mt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function s0(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(v,D){const E=D.program;n.uniformBlockBinding(v,E)}function c(v,D){let E=i[v.id];E===void 0&&(g(v),E=h(v),i[v.id]=E,v.addEventListener("dispose",d));const _=D.program;n.updateUBOMapping(v,_);const M=e.render.frame;s[v.id]!==M&&(f(v),s[v.id]=M)}function h(v){const D=u();v.__bindingPointIndex=D;const E=r.createBuffer(),_=v.__size,M=v.usage;return r.bindBuffer(35345,E),r.bufferData(35345,_,M),r.bindBuffer(35345,null),r.bindBufferBase(35345,D,E),E}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const D=i[v.id],E=v.uniforms,_=v.__cache;r.bindBuffer(35345,D);for(let M=0,T=E.length;M<T;M++){const A=E[M];if(p(A,M,_)===!0){const S=A.value,P=A.__offset;typeof S=="number"?(A.__data[0]=S,r.bufferSubData(35345,P,A.__data)):(A.value.isMatrix3?(A.__data[0]=A.value.elements[0],A.__data[1]=A.value.elements[1],A.__data[2]=A.value.elements[2],A.__data[3]=A.value.elements[0],A.__data[4]=A.value.elements[3],A.__data[5]=A.value.elements[4],A.__data[6]=A.value.elements[5],A.__data[7]=A.value.elements[0],A.__data[8]=A.value.elements[6],A.__data[9]=A.value.elements[7],A.__data[10]=A.value.elements[8],A.__data[11]=A.value.elements[0]):S.toArray(A.__data),r.bufferSubData(35345,P,A.__data))}}r.bindBuffer(35345,null)}function p(v,D,E){const _=v.value;if(E[D]===void 0)return typeof _=="number"?E[D]=_:E[D]=_.clone(),!0;if(typeof _=="number"){if(E[D]!==_)return E[D]=_,!0}else{const M=E[D];if(M.equals(_)===!1)return M.copy(_),!0}return!1}function g(v){const D=v.uniforms;let E=0;const _=16;let M=0;for(let T=0,A=D.length;T<A;T++){const S=D[T],P=m(S);if(S.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=E,T>0){M=E%_;const q=_-M;M!==0&&q-P.boundary<0&&(E+=_-M,S.__offset=E)}E+=P.storage}return M=E%_,M>0&&(E+=_-M),v.__size=E,v.__cache={},this}function m(v){const D=v.value,E={boundary:0,storage:0};return typeof D=="number"?(E.boundary=4,E.storage=4):D.isVector2?(E.boundary=8,E.storage=8):D.isVector3||D.isColor?(E.boundary=16,E.storage=12):D.isVector4?(E.boundary=16,E.storage=16):D.isMatrix3?(E.boundary=48,E.storage=48):D.isMatrix4?(E.boundary=64,E.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),E}function d(v){const D=v.target;D.removeEventListener("dispose",d);const E=o.indexOf(D.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[D.id]),delete i[D.id],delete s[D.id]}function x(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:x}}function r0(){const r=Gi("canvas");return r.style.display="block",r}function _l(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:r0(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=zn,this.physicallyCorrectLights=!1,this.toneMapping=nn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,x=0,v=0,D=null,E=-1,_=null;const M=new Oe,T=new Oe;let A=null,S=e.width,P=e.height,q=1,re=null,z=null;const L=new Oe(0,0,S,P),W=new Oe(0,0,S,P);let j=!1;const Z=new sa;let k=!1,I=!1,O=null;const $=new Ge,J=new ee,K=new b,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return D===null?q:1}let X=t;function we(B,N){for(let G=0;G<B.length;G++){const R=B[G],H=e.getContext(R,N);if(H!==null)return H}return null}try{const B={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qr}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",Be,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),X===null){const N=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&N.shift(),X=we(N,B),X===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let me,_e,ue,Le,Ce,pe,Ye,st,$e,gt,Ke,Pe,Bt,xt,F,C,V,Q,te,oe,ge,y,Y,ne;function le(){me=new gf(X),_e=new hf(X,me,r),me.init(_e),y=new Kp(X,me,_e),ue=new Jp(X,me,_e),Le=new _f,Ce=new Np,pe=new $p(X,me,ue,Ce,_e,y,Le),Ye=new df(m),st=new mf(m),$e=new bh(X,_e),Y=new lf(X,me,$e,_e),gt=new xf(X,$e,Le,Y),Ke=new Df(X,gt,$e,Le),te=new Cf(X,_e,pe),C=new uf(Ce),Pe=new Ip(m,Ye,st,me,_e,Y,C),Bt=new i0(m,Ce),xt=new Op,F=new Wp(me,_e),Q=new of(m,Ye,ue,Ke,h,o),V=new Zp(m,Ke,_e),ne=new s0(X,Le,_e,ue),oe=new cf(X,me,Le,_e),ge=new Af(X,me,Le,_e),Le.programs=Pe.programs,m.capabilities=_e,m.extensions=me,m.properties=Ce,m.renderLists=xt,m.shadowMap=V,m.state=ue,m.info=Le}le();const ae=new n0(m,X);this.xr=ae,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const B=me.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=me.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(B){B!==void 0&&(q=B,this.setSize(S,P,!1))},this.getSize=function(B){return B.set(S,P)},this.setSize=function(B,N,G){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=B,P=N,e.width=Math.floor(B*q),e.height=Math.floor(N*q),G!==!1&&(e.style.width=B+"px",e.style.height=N+"px"),this.setViewport(0,0,B,N)},this.getDrawingBufferSize=function(B){return B.set(S*q,P*q).floor()},this.setDrawingBufferSize=function(B,N,G){S=B,P=N,q=G,e.width=Math.floor(B*G),e.height=Math.floor(N*G),this.setViewport(0,0,B,N)},this.getCurrentViewport=function(B){return B.copy(M)},this.getViewport=function(B){return B.copy(L)},this.setViewport=function(B,N,G,R){B.isVector4?L.set(B.x,B.y,B.z,B.w):L.set(B,N,G,R),ue.viewport(M.copy(L).multiplyScalar(q).floor())},this.getScissor=function(B){return B.copy(W)},this.setScissor=function(B,N,G,R){B.isVector4?W.set(B.x,B.y,B.z,B.w):W.set(B,N,G,R),ue.scissor(T.copy(W).multiplyScalar(q).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(B){ue.setScissorTest(j=B)},this.setOpaqueSort=function(B){re=B},this.setTransparentSort=function(B){z=B},this.getClearColor=function(B){return B.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(B=!0,N=!0,G=!0){let R=0;B&&(R|=16384),N&&(R|=256),G&&(R|=1024),X.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",Be,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),xt.dispose(),F.dispose(),Ce.dispose(),Ye.dispose(),st.dispose(),Ke.dispose(),Y.dispose(),ne.dispose(),Pe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",be),ae.removeEventListener("sessionend",et),O&&(O.dispose(),O=null),qe.stop()};function xe(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const B=Le.autoReset,N=V.enabled,G=V.autoUpdate,R=V.needsUpdate,H=V.type;le(),Le.autoReset=B,V.enabled=N,V.autoUpdate=G,V.needsUpdate=R,V.type=H}function Ue(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function w(B){const N=B.target;N.removeEventListener("dispose",w),se(N)}function se(B){U(B),Ce.remove(B)}function U(B){const N=Ce.get(B).programs;N!==void 0&&(N.forEach(function(G){Pe.releaseProgram(G)}),B.isShaderMaterial&&Pe.releaseShaderCache(B))}this.renderBufferDirect=function(B,N,G,R,H,fe){N===null&&(N=de);const ve=H.isMesh&&H.matrixWorld.determinant()<0,De=jl(B,N,G,R,H);ue.setMaterial(R,ve);let Ee=G.index;const Re=G.attributes.position;if(Ee===null){if(Re===void 0||Re.count===0)return}else if(Ee.count===0)return;let Fe=1;R.wireframe===!0&&(Ee=gt.getWireframeAttribute(G),Fe=2),Y.setup(H,R,De,G,Ee);let Me,We=oe;Ee!==null&&(Me=$e.get(Ee),We=ge,We.setIndex(Me));const vn=Ee!==null?Ee.count:Re.count,kn=G.drawRange.start*Fe,Hn=G.drawRange.count*Fe,Gt=fe!==null?fe.start*Fe:0,Te=fe!==null?fe.count*Fe:1/0,Wn=Math.max(kn,Gt),je=Math.min(vn,kn+Hn,Gt+Te)-1,Mt=Math.max(0,je-Wn+1);if(Mt!==0){if(H.isMesh)R.wireframe===!0?(ue.setLineWidth(R.wireframeLinewidth*Ae()),We.setMode(1)):We.setMode(4);else if(H.isLine){let an=R.linewidth;an===void 0&&(an=1),ue.setLineWidth(an*Ae()),H.isLineSegments?We.setMode(1):H.isLineLoop?We.setMode(2):We.setMode(3)}else H.isPoints?We.setMode(0):H.isSprite&&We.setMode(4);if(H.isInstancedMesh)We.renderInstances(Wn,Mt,H.count);else if(G.isInstancedBufferGeometry){const an=Math.min(G.instanceCount,G._maxInstanceCount);We.renderInstances(Wn,Mt,an)}else We.render(Wn,Mt)}},this.compile=function(B,N){function G(R,H,fe){R.transparent===!0&&R.side===ut?(R.side=mt,R.needsUpdate=!0,Ji(R,H,fe),R.side=gn,R.needsUpdate=!0,Ji(R,H,fe),R.side=ut):Ji(R,H,fe)}f=F.get(B),f.init(),g.push(f),B.traverseVisible(function(R){R.isLight&&R.layers.test(N.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),f.setupLights(m.physicallyCorrectLights),B.traverse(function(R){const H=R.material;if(H)if(Array.isArray(H))for(let fe=0;fe<H.length;fe++){const ve=H[fe];G(ve,B,R)}else G(H,B,R)}),g.pop(),f=null};let he=null;function ce(B){he&&he(B)}function be(){qe.stop()}function et(){qe.start()}const qe=new fl;qe.setAnimationLoop(ce),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(B){he=B,ae.setAnimationLoop(B),B===null?qe.stop():qe.start()},ae.addEventListener("sessionstart",be),ae.addEventListener("sessionend",et),this.render=function(B,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),B.isScene===!0&&B.onBeforeRender(m,B,N,D),f=F.get(B,g.length),f.init(),g.push(f),$.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix($),I=this.localClippingEnabled,k=C.init(this.clippingPlanes,I,N),u=xt.get(B,p.length),u.init(),p.push(u),rn(B,N,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(re,z),k===!0&&C.beginShadows();const G=f.state.shadowsArray;if(V.render(G,B,N),k===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(u,B),f.setupLights(m.physicallyCorrectLights),N.isArrayCamera){const R=N.cameras;for(let H=0,fe=R.length;H<fe;H++){const ve=R[H];He(u,B,ve,ve.viewport)}}else He(u,B,N);D!==null&&(pe.updateMultisampleRenderTarget(D),pe.updateRenderTargetMipmap(D)),B.isScene===!0&&B.onAfterRender(m,B,N),Y.resetDefaultState(),E=-1,_=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function rn(B,N,G,R){if(B.visible===!1)return;if(B.layers.test(N.layers)){if(B.isGroup)G=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(N);else if(B.isLight)f.pushLight(B),B.castShadow&&f.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||Z.intersectsSprite(B)){R&&K.setFromMatrixPosition(B.matrixWorld).applyMatrix4($);const ve=Ke.update(B),De=B.material;De.visible&&u.push(B,ve,De,G,K.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(B.isSkinnedMesh&&B.skeleton.frame!==Le.render.frame&&(B.skeleton.update(),B.skeleton.frame=Le.render.frame),!B.frustumCulled||Z.intersectsObject(B))){R&&K.setFromMatrixPosition(B.matrixWorld).applyMatrix4($);const ve=Ke.update(B),De=B.material;if(Array.isArray(De)){const Ee=ve.groups;for(let Re=0,Fe=Ee.length;Re<Fe;Re++){const Me=Ee[Re],We=De[Me.materialIndex];We&&We.visible&&u.push(B,ve,We,G,K.z,Me)}}else De.visible&&u.push(B,ve,De,G,K.z,null)}}const fe=B.children;for(let ve=0,De=fe.length;ve<De;ve++)rn(fe[ve],N,G,R)}function He(B,N,G,R){const H=B.opaque,fe=B.transmissive,ve=B.transparent;f.setupLightsView(G),fe.length>0&&qt(H,N,G),R&&ue.viewport(M.copy(R)),H.length>0&&Ft(H,N,G),fe.length>0&&Ft(fe,N,G),ve.length>0&&Ft(ve,N,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function qt(B,N,G){const R=_e.isWebGL2;O===null&&(O=new On(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Vi:Nn,minFilter:Os,samples:R&&s===!0?4:0})),m.getDrawingBufferSize(J),R?O.setSize(J.x,J.y):O.setSize(ws(J.x),ws(J.y));const H=m.getRenderTarget();m.setRenderTarget(O),m.clear();const fe=m.toneMapping;m.toneMapping=nn,Ft(B,N,G),m.toneMapping=fe,pe.updateMultisampleRenderTarget(O),pe.updateRenderTargetMipmap(O),m.setRenderTarget(H)}function Ft(B,N,G){const R=N.isScene===!0?N.overrideMaterial:null;for(let H=0,fe=B.length;H<fe;H++){const ve=B[H],De=ve.object,Ee=ve.geometry,Re=R===null?ve.material:R,Fe=ve.group;De.layers.test(G.layers)&&Yl(De,N,G,Ee,Re,Fe)}}function Yl(B,N,G,R,H,fe){B.onBeforeRender(m,N,G,R,H,fe),B.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),H.onBeforeRender(m,N,G,R,B,fe),H.transparent===!0&&H.side===ut?(H.side=mt,H.needsUpdate=!0,m.renderBufferDirect(G,N,R,H,B,fe),H.side=gn,H.needsUpdate=!0,m.renderBufferDirect(G,N,R,H,B,fe),H.side=ut):m.renderBufferDirect(G,N,R,H,B,fe),B.onAfterRender(m,N,G,R,H,fe)}function Ji(B,N,G){N.isScene!==!0&&(N=de);const R=Ce.get(B),H=f.state.lights,fe=f.state.shadowsArray,ve=H.state.version,De=Pe.getParameters(B,H.state,fe,N,G),Ee=Pe.getProgramCacheKey(De);let Re=R.programs;R.environment=B.isMeshStandardMaterial?N.environment:null,R.fog=N.fog,R.envMap=(B.isMeshStandardMaterial?st:Ye).get(B.envMap||R.environment),Re===void 0&&(B.addEventListener("dispose",w),Re=new Map,R.programs=Re);let Fe=Re.get(Ee);if(Fe!==void 0){if(R.currentProgram===Fe&&R.lightsStateVersion===ve)return va(B,De),Fe}else De.uniforms=Pe.getUniforms(B),B.onBuild(G,De,m),B.onBeforeCompile(De,m),Fe=Pe.acquireProgram(De,Ee),Re.set(Ee,Fe),R.uniforms=De.uniforms;const Me=R.uniforms;(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Me.clippingPlanes=C.uniform),va(B,De),R.needsLights=Jl(B),R.lightsStateVersion=ve,R.needsLights&&(Me.ambientLightColor.value=H.state.ambient,Me.lightProbe.value=H.state.probe,Me.directionalLights.value=H.state.directional,Me.directionalLightShadows.value=H.state.directionalShadow,Me.spotLights.value=H.state.spot,Me.spotLightShadows.value=H.state.spotShadow,Me.rectAreaLights.value=H.state.rectArea,Me.ltc_1.value=H.state.rectAreaLTC1,Me.ltc_2.value=H.state.rectAreaLTC2,Me.pointLights.value=H.state.point,Me.pointLightShadows.value=H.state.pointShadow,Me.hemisphereLights.value=H.state.hemi,Me.directionalShadowMap.value=H.state.directionalShadowMap,Me.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Me.spotShadowMap.value=H.state.spotShadowMap,Me.spotLightMatrix.value=H.state.spotLightMatrix,Me.spotLightMap.value=H.state.spotLightMap,Me.pointShadowMap.value=H.state.pointShadowMap,Me.pointShadowMatrix.value=H.state.pointShadowMatrix);const We=Fe.getUniforms(),vn=Ms.seqWithValue(We.seq,Me);return R.currentProgram=Fe,R.uniformsList=vn,Fe}function va(B,N){const G=Ce.get(B);G.outputEncoding=N.outputEncoding,G.instancing=N.instancing,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function jl(B,N,G,R,H){N.isScene!==!0&&(N=de),pe.resetTextureUnits();const fe=N.fog,ve=R.isMeshStandardMaterial?N.environment:null,De=D===null?m.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:zn,Ee=(R.isMeshStandardMaterial?st:Ye).get(R.envMap||ve),Re=R.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!R.normalMap&&!!G.attributes.tangent,Me=!!G.morphAttributes.position,We=!!G.morphAttributes.normal,vn=!!G.morphAttributes.color,kn=R.toneMapped?m.toneMapping:nn,Hn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Gt=Hn!==void 0?Hn.length:0,Te=Ce.get(R),Wn=f.state.lights;if(k===!0&&(I===!0||B!==_)){const At=B===_&&R.id===E;C.setState(R,B,At)}let je=!1;R.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Wn.state.version||Te.outputEncoding!==De||H.isInstancedMesh&&Te.instancing===!1||!H.isInstancedMesh&&Te.instancing===!0||H.isSkinnedMesh&&Te.skinning===!1||!H.isSkinnedMesh&&Te.skinning===!0||Te.envMap!==Ee||R.fog===!0&&Te.fog!==fe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==C.numPlanes||Te.numIntersection!==C.numIntersection)||Te.vertexAlphas!==Re||Te.vertexTangents!==Fe||Te.morphTargets!==Me||Te.morphNormals!==We||Te.morphColors!==vn||Te.toneMapping!==kn||_e.isWebGL2===!0&&Te.morphTargetsCount!==Gt)&&(je=!0):(je=!0,Te.__version=R.version);let Mt=Te.currentProgram;je===!0&&(Mt=Ji(R,N,H));let an=!1,Bi=!1,Zs=!1;const ct=Mt.getUniforms(),En=Te.uniforms;if(ue.useProgram(Mt.program)&&(an=!0,Bi=!0,Zs=!0),R.id!==E&&(E=R.id,Bi=!0),an||_!==B){if(ct.setValue(X,"projectionMatrix",B.projectionMatrix),_e.logarithmicDepthBuffer&&ct.setValue(X,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),_!==B&&(_=B,Bi=!0,Zs=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const At=ct.map.cameraPosition;At!==void 0&&At.setValue(X,K.setFromMatrixPosition(B.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ct.setValue(X,"isOrthographic",B.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||H.isSkinnedMesh)&&ct.setValue(X,"viewMatrix",B.matrixWorldInverse)}if(H.isSkinnedMesh){ct.setOptional(X,H,"bindMatrix"),ct.setOptional(X,H,"bindMatrixInverse");const At=H.skeleton;At&&(_e.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),ct.setValue(X,"boneTexture",At.boneTexture,pe),ct.setValue(X,"boneTextureSize",At.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Js=G.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0&&_e.isWebGL2===!0)&&te.update(H,G,R,Mt),(Bi||Te.receiveShadow!==H.receiveShadow)&&(Te.receiveShadow=H.receiveShadow,ct.setValue(X,"receiveShadow",H.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(En.envMap.value=Ee,En.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Bi&&(ct.setValue(X,"toneMappingExposure",m.toneMappingExposure),Te.needsLights&&Zl(En,Zs),fe&&R.fog===!0&&Bt.refreshFogUniforms(En,fe),Bt.refreshMaterialUniforms(En,R,q,P,O),Ms.upload(X,Te.uniformsList,En,pe)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Ms.upload(X,Te.uniformsList,En,pe),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ct.setValue(X,"center",H.center),ct.setValue(X,"modelViewMatrix",H.modelViewMatrix),ct.setValue(X,"normalMatrix",H.normalMatrix),ct.setValue(X,"modelMatrix",H.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const At=R.uniformsGroups;for(let $s=0,$l=At.length;$s<$l;$s++)if(_e.isWebGL2){const Ea=At[$s];ne.update(Ea,Mt),ne.bind(Ea,Mt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mt}function Zl(B,N){B.ambientLightColor.needsUpdate=N,B.lightProbe.needsUpdate=N,B.directionalLights.needsUpdate=N,B.directionalLightShadows.needsUpdate=N,B.pointLights.needsUpdate=N,B.pointLightShadows.needsUpdate=N,B.spotLights.needsUpdate=N,B.spotLightShadows.needsUpdate=N,B.rectAreaLights.needsUpdate=N,B.hemisphereLights.needsUpdate=N}function Jl(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(B,N,G){Ce.get(B.texture).__webglTexture=N,Ce.get(B.depthTexture).__webglTexture=G;const R=Ce.get(B);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=G===void 0,R.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,N){const G=Ce.get(B);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(B,N=0,G=0){D=B,x=N,v=G;let R=!0;if(B){const Ee=Ce.get(B);Ee.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),R=!1):Ee.__webglFramebuffer===void 0?pe.setupRenderTarget(B):Ee.__hasExternalTextures&&pe.rebindTextures(B,Ce.get(B.texture).__webglTexture,Ce.get(B.depthTexture).__webglTexture)}let H=null,fe=!1,ve=!1;if(B){const Ee=B.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(ve=!0);const Re=Ce.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(H=Re[N],fe=!0):_e.isWebGL2&&B.samples>0&&pe.useMultisampledRTT(B)===!1?H=Ce.get(B).__webglMultisampledFramebuffer:H=Re,M.copy(B.viewport),T.copy(B.scissor),A=B.scissorTest}else M.copy(L).multiplyScalar(q).floor(),T.copy(W).multiplyScalar(q).floor(),A=j;if(ue.bindFramebuffer(36160,H)&&_e.drawBuffers&&R&&ue.drawBuffers(B,H),ue.viewport(M),ue.scissor(T),ue.setScissorTest(A),fe){const Ee=Ce.get(B.texture);X.framebufferTexture2D(36160,36064,34069+N,Ee.__webglTexture,G)}else if(ve){const Ee=Ce.get(B.texture),Re=N||0;X.framebufferTextureLayer(36160,36064,Ee.__webglTexture,G||0,Re)}E=-1},this.readRenderTargetPixels=function(B,N,G,R,H,fe,ve){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ce.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&ve!==void 0&&(De=De[ve]),De){ue.bindFramebuffer(36160,De);try{const Ee=B.texture,Re=Ee.format,Fe=Ee.type;if(Re!==Tt&&y.convert(Re)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Me=Fe===Vi&&(me.has("EXT_color_buffer_half_float")||_e.isWebGL2&&me.has("EXT_color_buffer_float"));if(Fe!==Nn&&y.convert(Fe)!==X.getParameter(35738)&&!(Fe===Tn&&(_e.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=B.width-R&&G>=0&&G<=B.height-H&&X.readPixels(N,G,R,H,y.convert(Re),y.convert(Fe),fe)}finally{const Ee=D!==null?Ce.get(D).__webglFramebuffer:null;ue.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(B,N,G=0){const R=Math.pow(2,-G),H=Math.floor(N.image.width*R),fe=Math.floor(N.image.height*R);pe.setTexture2D(N,0),X.copyTexSubImage2D(3553,G,0,0,B.x,B.y,H,fe),ue.unbindTexture()},this.copyTextureToTexture=function(B,N,G,R=0){const H=N.image.width,fe=N.image.height,ve=y.convert(G.format),De=y.convert(G.type);pe.setTexture2D(G,0),X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment),N.isDataTexture?X.texSubImage2D(3553,R,B.x,B.y,H,fe,ve,De,N.image.data):N.isCompressedTexture?X.compressedTexSubImage2D(3553,R,B.x,B.y,N.mipmaps[0].width,N.mipmaps[0].height,ve,N.mipmaps[0].data):X.texSubImage2D(3553,R,B.x,B.y,ve,De,N.image),R===0&&G.generateMipmaps&&X.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(B,N,G,R,H=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=B.max.x-B.min.x+1,ve=B.max.y-B.min.y+1,De=B.max.z-B.min.z+1,Ee=y.convert(R.format),Re=y.convert(R.type);let Fe;if(R.isData3DTexture)pe.setTexture3D(R,0),Fe=32879;else if(R.isDataArrayTexture)pe.setTexture2DArray(R,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,R.flipY),X.pixelStorei(37441,R.premultiplyAlpha),X.pixelStorei(3317,R.unpackAlignment);const Me=X.getParameter(3314),We=X.getParameter(32878),vn=X.getParameter(3316),kn=X.getParameter(3315),Hn=X.getParameter(32877),Gt=G.isCompressedTexture?G.mipmaps[0]:G.image;X.pixelStorei(3314,Gt.width),X.pixelStorei(32878,Gt.height),X.pixelStorei(3316,B.min.x),X.pixelStorei(3315,B.min.y),X.pixelStorei(32877,B.min.z),G.isDataTexture||G.isData3DTexture?X.texSubImage3D(Fe,H,N.x,N.y,N.z,fe,ve,De,Ee,Re,Gt.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Fe,H,N.x,N.y,N.z,fe,ve,De,Ee,Gt.data)):X.texSubImage3D(Fe,H,N.x,N.y,N.z,fe,ve,De,Ee,Re,Gt),X.pixelStorei(3314,Me),X.pixelStorei(32878,We),X.pixelStorei(3316,vn),X.pixelStorei(3315,kn),X.pixelStorei(32877,Hn),H===0&&R.generateMipmaps&&X.generateMipmap(Fe),ue.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?pe.setTextureCube(B,0):B.isData3DTexture?pe.setTexture3D(B,0):B.isDataArrayTexture?pe.setTexture2DArray(B,0):pe.setTexture2D(B,0),ue.unbindTexture()},this.resetState=function(){x=0,v=0,D=null,ue.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class a0 extends _l{}a0.prototype.isWebGL1Renderer=!0;class o0 extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class l0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ht()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ht=new b;class Ls{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}setX(e,t){return this.normalized&&(t=Ie(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ie(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ie(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ie(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ie(t,this.array),n=Ie(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ie(t,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ie(t,this.array),n=Ie(n,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ls(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vl extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Po=new b,Ro=new b,Io=new Ge,Sr=new Us,As=new Yi;class c0 extends ke{constructor(e=new pt,t=new vl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Po.fromBufferAttribute(t,i-1),Ro.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Po.distanceTo(Ro);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=s,e.ray.intersectsSphere(As)===!1)return;Io.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(Io);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new b,h=new b,u=new b,f=new b,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let D=x,E=v-1;D<E;D+=p){const _=g.getX(D),M=g.getX(D+1);if(c.fromBufferAttribute(d,_),h.fromBufferAttribute(d,M),Sr.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:D,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let D=x,E=v-1;D<E;D+=p){if(c.fromBufferAttribute(d,D),h.fromBufferAttribute(d,D+1),Sr.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:D,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class El extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const No=new Ge,Wr=new Us,_s=new Yi,vs=new b;class h0 extends ke{constructor(e=new pt,t=new El){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=s,e.ray.intersectsSphere(_s)===!1)return;No.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(No);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);vs.fromBufferAttribute(u,d),zo(vs,d,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,m=p;g<m;g++)vs.fromBufferAttribute(u,g),zo(vs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zo(r,e,t,n,i,s,o){const a=Wr.distanceSqToPoint(r);if(a<t){const l=new b;Wr.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Oo extends Dt{constructor(e,t,n){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=lt,this.minFilter=lt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Xt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ee:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],s=[],o=[],a=new b,l=new Ge;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new b)}s[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(rt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class oa extends Xt{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ee,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class u0 extends oa{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function la(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Es=new b,br=new la,wr=new la,Tr=new la;class Cl extends Xt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Es.subVectors(i[0],i[1]).add(i[0]),c=Es);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Es.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Es),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(h),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),br.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,m,d),wr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,m,d),Tr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,m,d)}else this.curveType==="catmullrom"&&(br.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),wr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Tr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(br.calc(l),wr.calc(l),Tr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uo(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function d0(r,e){const t=1-r;return t*t*e}function f0(r,e){return 2*(1-r)*r*e}function p0(r,e){return r*r*e}function zi(r,e,t,n){return d0(r,e)+f0(r,t)+p0(r,n)}function m0(r,e){const t=1-r;return t*t*t*e}function g0(r,e){const t=1-r;return 3*t*t*r*e}function x0(r,e){return 3*(1-r)*r*r*e}function A0(r,e){return r*r*r*e}function Oi(r,e,t,n,i){return m0(r,e)+g0(r,t)+x0(r,n)+A0(r,i)}class Dl extends Xt{constructor(e=new ee,t=new ee,n=new ee,i=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ee){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Oi(e,i.x,s.x,o.x,a.x),Oi(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _0 extends Xt{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Oi(e,i.x,s.x,o.x,a.x),Oi(e,i.y,s.y,o.y,a.y),Oi(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ca extends Xt{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ee;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v0 extends Xt{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yl extends Xt{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(zi(e,i.x,s.x,o.x),zi(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bl extends Xt{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(zi(e,i.x,s.x,o.x),zi(e,i.y,s.y,o.y),zi(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fl extends Xt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Uo(a,l.x,c.x,h.x,u.x),Uo(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ee().fromArray(i))}return this}}var Ml=Object.freeze({__proto__:null,ArcCurve:u0,CatmullRomCurve3:Cl,CubicBezierCurve:Dl,CubicBezierCurve3:_0,EllipseCurve:oa,LineCurve:ca,LineCurve3:v0,QuadraticBezierCurve:yl,QuadraticBezierCurve3:Bl,SplineCurve:Fl});class E0 extends Xt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ca(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ml[i.type]().fromJSON(i))}return this}}class Xr extends E0{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ca(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new yl(this.currentPoint.clone(),new ee(e,t),new ee(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Dl(this.currentPoint.clone(),new ee(e,t),new ee(n,i),new ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Fl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new oa(e,t,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class In extends Xr{constructor(e){super(e),this.uuid=Ht(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Xr().fromJSON(i))}return this}}const C0={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Sl(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,p;if(n&&(s=M0(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)u=r[g],f=r[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?1/p:0}return ki(s,o,t,a,l,p),o}};function Sl(r,e,t,n,i){let s,o;if(i===O0(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Vo(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Vo(s,r[s],r[s+1],o);return o&&Gs(o,o.next)&&(Wi(o),o=o.next),o}function xn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Gs(t,t.next)||Ve(t.prev,t,t.next)===0)){if(Wi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ki(r,e,t,n,i,s,o){if(!r)return;!o&&s&&L0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?y0(r,n,i,s):D0(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Wi(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=B0(xn(r),e,t),ki(r,e,t,n,i,s,2)):o===2&&F0(r,e,t,n,i,s):ki(xn(r),e,t,n,i,s,1);break}}}function D0(r){const e=r.prev,t=r,n=r.next;if(Ve(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(ci(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Ve(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function y0(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Ve(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,u=qr(a,l,e,t,n),f=qr(c,h,e,t,n);let p=r.prevZ,g=r.nextZ;for(;p&&p.z>=u&&g&&g.z<=f;){if(p!==r.prev&&p!==r.next&&ci(i.x,i.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Ve(p.prev,p,p.next)>=0||(p=p.prevZ,g!==r.prev&&g!==r.next&&ci(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Ve(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=u;){if(p!==r.prev&&p!==r.next&&ci(i.x,i.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Ve(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=f;){if(g!==r.prev&&g!==r.next&&ci(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Ve(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function B0(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Gs(i,s)&&bl(i,n,n.next,s)&&Hi(i,s)&&Hi(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Wi(n),Wi(n.next),n=r=s),n=n.next}while(n!==r);return xn(n)}function F0(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&I0(o,a)){let l=wl(o,a);o=xn(o,o.next),l=xn(l,l.next),ki(o,e,t,n,i,s),ki(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function M0(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Sl(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(R0(c));for(i.sort(S0),s=0;s<i.length;s++)b0(i[s],t),t=xn(t,t.next);return t}function S0(r,e){return r.x-e.x}function b0(r,e){if(e=w0(r,e),e){const t=wl(e,r);xn(e,e.next),xn(t,t.next)}}function w0(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&ci(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Hi(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&T0(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function T0(r,e){return Ve(r.prev,r,e.prev)<0&&Ve(e.next,r,r.next)<0}function L0(r,e,t,n){let i=r;do i.z===null&&(i.z=qr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,P0(i)}function P0(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function qr(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function R0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ci(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function I0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!N0(r,e)&&(Hi(r,e)&&Hi(e,r)&&z0(r,e)&&(Ve(r.prev,r,e.prev)||Ve(r,e.prev,e))||Gs(r,e)&&Ve(r.prev,r,r.next)>0&&Ve(e.prev,e,e.next)>0)}function Ve(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Gs(r,e){return r.x===e.x&&r.y===e.y}function bl(r,e,t,n){const i=Ds(Ve(r,e,t)),s=Ds(Ve(r,e,n)),o=Ds(Ve(t,n,r)),a=Ds(Ve(t,n,e));return!!(i!==s&&o!==a||i===0&&Cs(r,t,e)||s===0&&Cs(r,n,e)||o===0&&Cs(t,r,n)||a===0&&Cs(t,e,n))}function Cs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ds(r){return r>0?1:r<0?-1:0}function N0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&bl(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Hi(r,e){return Ve(r.prev,r,r.next)<0?Ve(r,e,r.next)>=0&&Ve(r,r.prev,e)>=0:Ve(r,e,r.prev)<0||Ve(r,r.next,e)<0}function z0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function wl(r,e){const t=new Yr(r.i,r.x,r.y),n=new Yr(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Vo(r,e,t,n){const i=new Yr(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Wi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Yr(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class di{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return di.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Go(e),ko(n,e);let o=e.length;t.forEach(Go);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,ko(n,t[l]);const a=C0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Go(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function ko(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class vi extends pt{constructor(e=new In([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new it(i,3)),this.setAttribute("normal",new it(s,3)),this.setAttribute("uv",new it(o,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let p=f.shape;const g=f.holes;di.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,x=g.length;d<x;d++){const v=g[d];di.isClockWise(v)===!0&&(g[d]=v.reverse())}const m=di.triangulateShape(p,g);for(let d=0,x=g.length;d<x;d++){const v=g[d];p=p.concat(v)}for(let d=0,x=p.length;d<x;d++){const v=p[d];i.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let d=0,x=m.length;d<x;d++){const v=m[d],D=v[0]+u,E=v[1]+u,_=v[2]+u;n.push(D,E,_),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return U0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new vi(n,e.curveSegments)}}function U0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Ct extends pt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new b,f=new b,p=[],g=[],m=[],d=[];for(let x=0;x<=n;x++){const v=[],D=x/n;let E=0;x==0&&o==0?E=.5/t:x==n&&l==Math.PI&&(E=-.5/t);for(let _=0;_<=t;_++){const M=_/t;u.x=-e*Math.cos(i+M*s)*Math.sin(o+D*a),u.y=e*Math.cos(o+D*a),u.z=e*Math.sin(i+M*s)*Math.sin(o+D*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),d.push(M+E,1-D),v.push(c++)}h.push(v)}for(let x=0;x<n;x++)for(let v=0;v<t;v++){const D=h[x][v+1],E=h[x][v],_=h[x+1][v],M=h[x+1][v+1];(x!==0||o>0)&&p.push(D,E,M),(x!==n-1||l<Math.PI)&&p.push(E,_,M)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(m,3)),this.setAttribute("uv",new it(d,2))}static fromJSON(e){return new Ct(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ha extends pt{constructor(e=new Bl(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new b,l=new b,c=new ee;let h=new b;const u=[],f=[],p=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(p,2));function m(){for(let D=0;D<t;D++)d(D);d(s===!1?t:0),v(),x()}function d(D){h=e.getPointAt(D/t,h);const E=o.normals[D],_=o.binormals[D];for(let M=0;M<=i;M++){const T=M/i*Math.PI*2,A=Math.sin(T),S=-Math.cos(T);l.x=S*E.x+A*_.x,l.y=S*E.y+A*_.y,l.z=S*E.z+A*_.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let D=1;D<=t;D++)for(let E=1;E<=i;E++){const _=(i+1)*(D-1)+(E-1),M=(i+1)*D+(E-1),T=(i+1)*D+E,A=(i+1)*(D-1)+E;g.push(_,M,A),g.push(M,T,A)}}function v(){for(let D=0;D<=t;D++)for(let E=0;E<=i;E++)c.x=D/t,c.y=E/i,p.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ha(new Ml[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Lr extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tl extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ua extends _n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ps={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class V0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const G0=new V0;class ks{constructor(e){this.manager=e!==void 0?e:G0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Kt={};class k0 extends Error{constructor(e,t){super(e),this.response=t}}class H0 extends ks{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ps.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Kt[e]!==void 0){Kt[e].push({onLoad:t,onProgress:n,onError:i});return}Kt[e]=[],Kt[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Kt[e],u=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(x){v();function v(){u.read().then(({done:D,value:E})=>{if(D)x.close();else{m+=E.byteLength;const _=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let M=0,T=h.length;M<T;M++){const A=h[M];A.onProgress&&A.onProgress(_)}x.enqueue(E),v()}})}}});return new Response(d)}else throw new k0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ps.add(e,c);const h=Kt[e];delete Kt[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Kt[e];if(h===void 0)throw this.manager.itemError(e),c;delete Kt[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class W0 extends ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ps.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Gi("img");function l(){h(),Ps.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Hs extends ks{constructor(e){super(e)}load(e,t,n,i){const s=new Dt,o=new W0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class da extends ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ho=new Ge,Wo=new b,Xo=new b;class Ll{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wo),Xo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xo),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qo=new Ge,bi=new b,Pr=new b;class X0 extends Ll{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bi.setFromMatrixPosition(e.matrixWorld),n.position.copy(bi),Pr.copy(n.position),Pr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pr),n.updateMatrixWorld(),i.makeTranslation(-bi.x,-bi.y,-bi.z),qo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo)}}class fa extends da{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new X0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class q0 extends Ll{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y0 extends da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.shadow=new q0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class j0 extends da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Z0{constructor(e,t,n=0,i=1/0){this.ray=new Us(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return jr(e,this,n,t),n.sort(Yo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)jr(e[i],this,n,t);return n.sort(Yo),n}}function Yo(r,e){return r.distance-e.distance}function jr(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)jr(i[s],e,t,!0)}}class jo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Zo=new ee;class J0{constructor(e=new ee(1/0,1/0),t=new ee(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zo.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Zo.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class $0{constructor(){this.type="ShapePath",this.color=new Se,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Xr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const v=[];for(let D=0,E=x.length;D<E;D++){const _=x[D],M=new In;M.curves=_.curves,v.push(M)}return v}function n(x,v){const D=v.length;let E=!1;for(let _=D-1,M=0;M<D;_=M++){let T=v[_],A=v[M],S=A.x-T.x,P=A.y-T.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(T=v[M],S=-S,A=v[_],P=-P),x.y<T.y||x.y>A.y)continue;if(x.y===T.y){if(x.x===T.x)return!0}else{const q=P*(x.x-T.x)-S*(x.y-T.y);if(q===0)return!0;if(q<0)continue;E=!E}}else{if(x.y!==T.y)continue;if(A.x<=x.x&&x.x<=T.x||T.x<=x.x&&x.x<=A.x)return!0}}return E}const i=di.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new In,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],f=[];let p=[],g=0,m;f[g]=void 0,p[g]=[];for(let x=0,v=s.length;x<v;x++)a=s[x],m=a.getPoints(),o=i(m),o=e?!o:o,o?(!h&&f[g]&&g++,f[g]={s:new In,p:m},f[g].s.curves=a.curves,h&&g++,p[g]=[]):p[g].push({h:a,p:m[0]});if(!f[0])return t(s);if(f.length>1){let x=!1,v=0;for(let D=0,E=f.length;D<E;D++)u[D]=[];for(let D=0,E=f.length;D<E;D++){const _=p[D];for(let M=0;M<_.length;M++){const T=_[M];let A=!0;for(let S=0;S<f.length;S++)n(T.p,f[S].p)&&(D!==S&&v++,A?(A=!1,u[S].push(T)):x=!0);A&&u[D].push(T)}}v>0&&x===!1&&(p=u)}let d;for(let x=0,v=f.length;x<v;x++){l=f[x].s,c.push(l),d=p[x];for(let D=0,E=d.length;D<E;D++)l.holes.push(d[D].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);const ze=[["8BD3708E-8E3D-44B8-9E92-1050FA7987E5",` the essence of 
 love / meaning`,14.5,90,10649230,40],["D4724AD1-EECD-4975-920C-CDAD71AA53C3",`the essence of 
 wisdom / will`,14.5,210,8965361,40],["0027E01B-C40A-49F0-9833-30244700C39E",`   the essence of 
 salvation / peace`,14.5,330,15916398,40],["66F19982-732D-4744-AF06-F1F8A68D898B","Rewiring the gut",18,330,15916398,40],["287B1377-9E86-42B2-99F1-EBBEA971AB08","Rewiring the heart",18,90,10649230,40],["B5027C8B-D476-49B0-A713-ACC447159AE1","Rewiring the head",18,211,8965361,40],["4A481D1E-5DB6-4ABB-B9D0-8164F41393F9","Unconditional Peace",21,330,15916398,40],["876BC8AC-4013-448E-9ACA-A82DA031E09C","Transcendence",35,328,8965361,40],["008ADA1B-1D52-4F68-AB43-97D070D7774C",`Existential exploration / 
 Insight meditation`,52,321,10649230,40],["3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A","Deep states of calm",67,307,10649230,40],["D131CF5B-A895-4212-A4D4-A7E976CF5DA6","real meaning",21,245,8965361,20],["90212AAB-4CFE-4FDF-850A-7E6141F727AE",`potentially the source of 
 not-so-obvious (but highly 
 attractive) \u201Cqualities\u201D`,25,235,8965361,25],["611A4954-9E7D-4D25-AD7D-E1FAB38482F5","freedom",28,237,8965361,20],["5C63879D-74A6-458B-8193-AFA06A62F794","unshakable peace",30,230,8965361,20],["2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5","salvation",27,227,8965361,20],["963CA1BA-9539-4089-96AB-EB0E78602390","true wisdom",32,235,8965361,20],["EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","why important?",22.5,224,8965361,30],["982A6AFF-D536-4504-B63A-EC42A2712432",`Unconditional 
        Truth`,22.5,211,8965361,50,2],["F1EB56D4-15AE-4837-A070-40550E1262C7","must be reduced to",29,205,8965361,40],["506E723E-071E-4694-80AD-06BBD0681E26",`Conventional 
        truth`,35,211,8965361,50,2],["0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","must transcend",40,217,8965361,40],["6BDD61FD-3F46-453B-8714-64AF81BCE3F9","limitations of",35,223,8965361,30],["A81C54C1-D640-4297-AFA9-346A25B8132E","contextual",44,232,8965361,25],["9E19FF41-5144-4745-9C0B-A99858302CDE","ways of cutting the apple",36,238,8965361,25],["050308DE-F371-436D-AE9F-B0D5B7F8C282","lost in reduction",41,237,8965361,25],["A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","Diversity",35,199,8965361,30],["0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD","Dualist ontologies",31,183,8965361,40],["302B64FD-4E04-4823-8E13-C7F2FAA4E7C9","Dualism",36,177,8965361,30],["2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F","to be communicated",40,205,8965361,40],["3F0021AE-02A1-44B8-AE19-11C0D2A4FE75","to realise",29,217,8965361,40],["D456FA2C-65F4-40D2-AC84-4C7E2266BA84","Unity",22.5,199,8965361,30],["B90D2293-D457-4567-8102-363F70D95781","Monist ontologies",27,183,8965361,40],["2930997B-A726-473E-B6E9-333C2732271F","Idealism",24,184,8965361,30,4],["CCCF1876-3199-41C1-AE98-25A78D1C7F51",`Analytic 
idealism`,25,186,8965361,10,3],["2B64F02A-BEAA-4403-8380-A8B2614D5F90","Panpsychism",24,174,8965361,30],["4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7","Physicalism",24,164,8965361,30],["EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6","Emergence",25.5,162,8965361,25],["FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8","weak",27,160,8965361,20],["23979ADC-AD3F-4447-BF76-224A807C2144","strong",32,170,8965361,20],["8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F",`the essence of 
\u201Cyou\u201D / life`,31,245,8965361,20],["2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7","all-encompassing love",27,248,8965361,20],["C978C527-2523-4078-8B16-523DF8553FD5",`the core of 
will / agency`,24,250,8965361,20],["F47603CA-44A7-4009-B07B-29DFA540729D","Unconditional Love",21,90,10649230,40],["87B9AFEC-9F64-4748-87F8-F64F2B31FC29","Atammayat\u0101",22.5,101,10649230,25],["FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07","Su\xF1\xF1at\u0101",24.5,105,10649230,25],["EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C","Tath\u0101t\u0101",27,108,10649230,25],["0EF99714-0619-45EC-A71D-B4F01B6211DC","Liberation",31,108,10649230,40],["7AFE8322-410C-44FA-8223-F6080F45359C","from",31,94,10649230,25],["236FD67F-CD44-4B75-96AD-B16FA578E708","delusion",34,94,10649230,30],["C9DCCC19-CD84-427B-9234-09050646BCD3","hatred",33,89,10649230,30],["10D1D640-DE4C-4334-B08F-A4716D198E5F","greed",29,90,10649230,30],["89ED6168-2517-4EF9-A5D6-3635A0C80BDC",`Fundamental 
 perspective change`,30,131,8965361,40],["074931F9-D5F1-401B-ABE0-1F26BA921E1F","From paradoxes to wisdom",25,131,8965361,20],["E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B",`Direct experience-based 
 understanding`,35,150,8965361,40],["9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD","Intellectual understanding",51,159,8965361,40],["39A86FA9-4CDF-4DD2-8AB6-78A36AC75762",`Basic conceptual 
 understanding`,72,162,8965361,40],["60046B15-D09E-4F1F-9BC0-BA3900E29EB9","Levels of understanding",81,169,8965361,40],["263D9AEE-6F33-4D35-B945-CE35173E2F11","Analysis / questioning",79,187,8965361,40],["3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","Open-mindedness",89,184,8965361,40],["37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","Observation",94,170,8965361,40],["4572B437-5182-4EBE-A383-F76440484F8E","Indirect",96,164,8965361,40],["9BA80071-89E9-400F-89CA-53CA700FA703","Instruments",97,158,8965361,40],["450F8534-2F59-4A8E-BA92-D417FD0FE000","Advantages",95.5,150,8965361,30],["951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","Sensing",93,158,8965361,40],["C2B220C0-B7D4-432B-9ADC-1E40F1A66E25","Introspection",90,158,8965361,40],["B470B5D1-31ED-4F91-A94D-6A94CF45E744","Limitations",93.5,150,8965361,30],["95A61B65-7A40-42FA-8622-D7A0B736BA9C","Biases",91.5,150,8965361,30],["0CEDFFCF-0C8D-4705-B40C-439631CCD3E1","Direct",92,164,8965361,40],["B8BA585E-D985-44A9-A8E9-6BC1E3EA3731",` Strategies for 
Understanding`,99,197,8965361,70],["AA38CD3C-7D47-4CD3-956C-5EE5C285E408","Dogmatism",109,193,8965361,40],["16C1A9C0-30BF-441E-8DA4-3216C0A42C51",`Thought labyrinths / 
         rumination`,103,181,8965361,40],["4265E048-CDF8-4B44-836C-38549C965725",`     Trusting the 
current paradigm`,94,205,8965361,40],["538C89D3-3710-4D3F-9297-50C588EAC961",`       Phases of 
paradigm change`,95,214,8965361,30,5],["1CFA1123-E052-4049-AFD7-852D36EDE838",`              1. 
Pre-paradigm: 
No consensus`,92,210,8965361,20],["298D83F6-FBCF-4D2F-AC0B-68DFCD6AE5B0",`               2. 
Normal science: 
 One dominant 
       paradigm`,91,217,8965361,20],["E4B25E04-2873-4203-8E5C-0751BB4CE230",`             3. 
Crisis period: 
   Anomalies 
create trouble`,95,221,8965361,20],["7E921661-D792-418A-AA51-D1AFB9C2FA7E","Foundations of science",92.5,221,8965361,15],["1996AC29-0768-4BFD-B503-7EEF89B17DE2","Physics",92.7,223,8965361,15],["AC6F030A-2049-43C8-B949-803CA7E4FA61","Psychology",93.5,223.5,8965361,15],["B542C18E-9775-4FF3-A954-282F6DF6F5D0","Biology",94.5,223.9,8965361,15,15],["59883541-AA97-43E4-ADDB-9FAB51337AFA","Mathematics",95.3,223.5,8965361,15,16],["7775CE2F-41DF-4766-9120-1FC72ABFD9FC","Neuroscience",96,222,8965361,15],["69EDF766-1CA2-451B-83D3-5993A5CC0373","Psi",96,220.5,8965361,15],["7FA01314-361B-4C77-920A-824B38177CE8",`                   4. 
    Paradigm shift: 
Underlying assump-
   tions examined`,99,218,8965361,20],["AC391C08-CB42-4443-A2C3-1128AC357F44",`                 5. 
 Post-revolution: 
 A new paradigm 
gains dominance`,98,211,8965361,20],["807EE50B-B4E4-42B7-B1B4-10EBB38C1299",`             Settles in: 
 Convergence between 
assumptions and reality`,111,212,8965361,50],["B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","Depth of transformation",98,237,8965361,45],["B07DBBCA-2123-4D55-828C-6931A999128B","Brain",82,257,8965361,45],["C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8","Opinions",86,258,8965361,40],["794FB1D5-42CF-496B-929F-9568976B58FF","Intellectual view",80,262,8965361,40],["12872E37-D9BC-4CDD-BB7E-E09FD46D993A","Identification",75,243,8965361,40,9],["2875511F-F91A-4807-9839-4B7153B23143","Witnessing",64,246,10649230,40,10],["F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","What am I not?",64,235,8965361,40],["3E8EDBA9-59E1-4835-8343-4AA9FF799D49","Two methods of approach",60,235,8965361,40],["64077339-5087-4CBD-A706-C1AA35E8AC8B","What am I?",55,235,8965361,40],["9E801875-A714-49E5-969A-D9A5E5497D18","running the risk of",55,228,8965361,40],["31475508-739B-4966-ADC9-D8EBCE5FE3DB","Eternalist view",55,219.5,8965361,40],["A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E",`Drowning the baby 
in the bathwater`,53,219.5,8965361,25],["FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B",`The fundamental nature
            of awareness`,60,220,8965361,40],["9A853604-4CB0-4B1B-98E1-E4D95626433A","The Screen",53,212,8965361,40],["93C64795-A33C-4578-9694-B8B0FFE287AE","What can we know?",57,207,8965361,40],["73E6253F-D36B-45B8-ABF9-A72432F5F576","The content",53,205,8965361,40],["D5F25680-4FED-4B74-A5D5-1B15A8C8A580","The way it is",45,205,8965361,40],["C5096451-E5CF-4498-AF7A-E97C3C8197F9","Reductive categories",45,217,8965361,40],["53296584-40BE-4F83-96D3-B77540245AC2","Direct",66,210,8965361,40],["EE9D175C-0953-4B73-9B31-5C7AD0C50288","Biases",70,214,8965361,30],["5A058F3F-7A05-44E2-8417-7B99A2437742","Experimentation",70,202,8965361,40],["42B4C435-0661-46DB-8D8B-AB2AA00D601B","Mathematics",72,201.5,8965361,40],["64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","Statistics",74,201,8965361,40],["87EFBBA1-F6E2-4A35-8897-A73210A18318","Indirect",66,203,8965361,40],["FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","Limitations",72,214,8965361,30],["8873A022-151A-41EA-B380-2284DEB82A22","Advantages",74,213,8965361,30],["43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3","running the risk of",64,228,8965361,40],["D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9","Annihilationist view",64,219.5,8965361,40],["9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91",`Throwing the baby out 
with the bathwater`,66,219.5,8965361,25],["334445AA-FC20-48D6-9A7D-2558857C2346","Re-uniting",49,246,15916398,40,11],["074F7C7B-C390-4328-A205-B73143806FFA","Gut",39,259,15916398,45],["9E66D7AE-5825-4691-BADB-FC7A75F7B29D","Perceptual view",34,262,15916398,40],["2C809F14-A1A9-4178-B236-FA6408CD789D","Experiential",41,265,15916398,40],["F7A69942-1F8A-42CC-A8C3-8DF26E439289","What do I take to be me?",82,226.5,8965361,40],["5AE32B80-01A1-4314-9A23-453A397A2599","What ceases?",84,225,8965361,40],["72A32148-45A5-41A7-A836-0CE959AF38D4","What persists?",86,225,8965361,40],["3F0C901E-76B2-463D-B17A-8078CA2E1C91","Feelings",76,227,8965361,40],["E27CC807-EB70-45C4-84B3-DDF1F8AADB00","Body",77,221,8965361,40],["1E34F972-7322-4F63-A271-2BC8A5241BB8","Will",87,232,8965361,40],["76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","Perceptions",76,233,8965361,40],["5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","Consciousness",89,226,8965361,40],["D7868612-7C4F-49F8-BCAA-B03E2BCEF450","Thoughts",84,236,8965361,40],["820F18C3-7140-4923-9D3A-2CD81A26B702","Memory",80,237,8965361,40],["7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6","Heart",61,263,10649230,45],["EB83C866-FF54-449B-A65C-24ECDE2820C1","Action",65,266,10649230,40],["3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58","Felt view",58,267,10649230,40],["A35D6C5D-B56F-416F-B337-41FB9E923AE0",`Existential problem: 
 What - and how - 
 do I know?`,150,210,8965361,40],["EDCAFFF6-FD78-40E0-B719-97569DCD8819",`The Human - 
Reason`,162,211,8965361,40],["46CBB5AE-79D5-4808-A400-4B804DA91E12",`What matters to 
       your head`,167,211,8965361,50],["8D82CC00-C9F5-4B9E-B256-A879D4623B3C",`What matters to 
      your heart`,167,90,10649230,50],["35476F95-E324-40D2-B224-A5E27568028C",`The Lion - 
  Thymos`,162,90,10649230,40],["4D1CEB04-6987-4C58-93B0-57DBB0914867",`Existential problem: 
      What gives life 
          meaning?`,153,91,10649230,40],["0EF9450D-3CB7-4D13-BCFB-49088E87F374",`Settles in: Happiness, 
love, meaning`,135,91,10649230,40],["80130A99-E12B-459A-B43D-1CE8BB3B1EF2",`   Strategies for 
happiness / love`,128.5,91.5,10649230,70],["2095179D-0AC4-4378-8E6F-8F71E2793FAD",`getting, avoiding, manipulating, 
changing, controlling, collecting`,120,98,10649230,40],["AE242003-1C0A-40BF-AEA2-567E61901171","doing",120,111,10649230,40],["F3695B21-1EAA-404B-9239-0767DA0BC90C","past / future",122,112,10649230,40],["B7A263AD-5457-4712-A089-03B24D041629","personal identification",124.5,114.5,10649230,40],["B4399091-3D0A-472B-A40C-BC8CDD097E7F","depended on comparison",127,114,10649230,40],["20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB","non-sustainable happiness",129,114,10649230,40],["D6B5FE51-C8D9-42EB-B0BE-07B09B51776C",`accepting, letting be, allowing, 
embracing, opening, experiencing`,120,81,10649230,40],["6473A93C-A4A4-41D5-9765-D58B3F8A57EA","being",121,68,10649230,40],["0A57B7F6-E875-485D-98F2-66458F5FBC6B","present",123,68,10649230,40],["19DB1035-B51E-4F0A-8F97-888375D12E8F","selfless",125,68,10649230,40],["34C06752-B7AD-461D-A5E9-B29CAE227645","sustainable happiness",130,67,10649230,40],["83D9EEC0-3314-4BD5-826E-F1ADDA1492EA","independent of comparison",127,66,10649230,40],["1E7C0EB1-1DDE-4044-A8B7-E4540487DB1C","The threefold training",102.5,71,10649230,40],["E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","S\u012Bla",95.5,63,10649230,60,14],["DA6F224D-BC2D-47BF-91C5-9538BF062D81","Methods",108,59,10649230,40],["603F93B5-AA5A-49C2-8AEE-440DA485BA40","Restraint",102.5,57,10649230,40],["F26DDAD3-74C1-48A8-9488-8BAB580947E7","Generosity",111,64,10649230,40],["05CF2077-5B2D-43E7-92AC-232082EA7F8C","The brahmavih\u0101ras",113,55,10649230,40],["F0AA6E16-8A46-43FA-B435-942FFF734B06","Loving-kindness",117,58,10649230,40],["BEA84E38-CF01-4A16-941B-F26EEE3E6D88","Compassion",118,51,10649230,40],["EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3","Equanimity",110,52,10649230,40],["C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF","Sympathetic joy",114,46,10649230,40],["DEA78281-438E-4CB6-ADCE-25DC85D9FF37","Self-compassion",105,52,10649230,40],["202B8B0D-13DA-459A-9D5E-ED5DD40D30E4","Emotional blockages",66,30,15916398,40],["0AA203B9-8B52-4412-B32D-D412F894D779","P\u012Bti",56,53,10649230,40],["6A20558B-3A35-4D14-8EBE-3C5DF4F02868","Components",57,60,10649230,40],["96786F52-EB9D-42BB-B854-457841A162BA","Sukha",53,57.5,10649230,40],["28106D6F-9E60-4579-A457-B2F4DB781D6D","Ekaggat\u0101",53.5,64,10649230,40],["D81C6E33-ED3A-45ED-9567-78EC22F9A6C7","Vitakka",61,61,10649230,40],["8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B","Vic\u0101ra",60,55,10649230,40],["2BAF7986-984E-4937-BA03-E5CBAA234AEF","Challenging emotions",42,40,15916398,40],["C0074FCF-7AB4-4781-BC26-3812FBA61015","shame",44,50.3,15916398,40],["CB62D122-2342-4D33-B98D-EE3BD70B6538","grief",40,48,15916398,40],["64192F80-785C-4B14-AF81-987193E41085","anger / hate",38,47.2,15916398,40],["83BC3254-7B62-4D9C-BC20-192D2D442466","pride / conceit",36,47,15916398,40],["4788E206-DE47-48FA-8DC4-326274991F8D","doubt / confusion",48,50.5,15916398,40],["111EBFA8-E400-4984-A638-63120DDC1590","fear",46,52,15916398,40],["1D823800-DD7A-4B6F-94EA-517D4DE9876B","Low",124,42,15916398,40],["C0993BB8-9C64-4F7A-A673-289EA2A33D0D","Level of experiencing",140,25,15916398,40],["00E891B6-75E2-43B7-97B4-62F6DD69B15B","Emotions",146,10,15916398,40,22],["B477D774-01E4-4F6A-93B1-111E699FFE75","Components of emotion",141,11,15916398,40],["E2D52070-A83C-4D48-A218-BB3DC7BEAF21","Emotional style",143,1,15916398,40],["EBCF0E75-DA1D-4533-BEEA-73657C4588AF","Types of emotion",150,20,15916398,40],["4AF3AF2F-5D76-4620-911E-54398F84F288",`Degree of emotional 
processing`,146,28,15916398,40],["672E2CBD-7421-4E94-9728-95353BCD772E","High",80,11,15916398,40],["14BA8BEB-FA35-44B7-9DE3-A1503614069D","Sam\u0101dhi",64.5,71.5,10649230,60],["1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","Methods",70,58,10649230,40],["A478FC19-7AC1-4480-A9C9-93AD4C925970","Directed attention",75,57,10649230,40],["6E92A01E-0E8D-494E-8249-EF0EF0D22987","Bodily sensations",80,59,10649230,40],["349EFC6D-D96C-4E61-A839-93D31BF698B5","Breath",79,51,10649230,40],["ED71676A-652A-400A-AAEB-70A6B980A6F2","Mantra",76,47,10649230,40],["61282C0C-C654-4B5D-B2F9-ECF698B16489","Choiceless awareness",69,48,10649230,40],["9FC8F28B-4B52-4BFC-9349-4B5271FCDD84","Open awareness",72,48,10649230,40,8],["E8F9F0EB-2B89-4D4C-901E-A029C0211A93","Progression",53.5,82.5,10649230,40],["CCBD9962-2FF7-4C39-97B9-D93FA4044BD3","outward to inward",56.5,84,10649230,20],["D0E50499-8C3F-4818-BBAA-FEB433FC1704","complexity to simplicity",49,80,10649230,20],["BC583511-0DA5-4F1E-B699-D72CB449DD00","movement to stillness",52,76,10649230,20],["C4B7A8B7-5171-4873-B269-0A0582CA2084","doing to being",56.5,76,10649230,20],["FC88FDFD-AE27-4F76-938D-6FE581E65D08","coarse to refined",48,85,10649230,20],["30F3B081-5F90-4F13-BC8D-BBC7293CEC04","judging to embracing",54,75,10649230,20],["D49F0D1E-5DD6-4147-88E2-604F7E4A3566","diversity to unity",47,90,10649230,20],["268F9754-9375-4E1F-B752-233A8F83F592","Hindrances / Obstacles",42,68,10649230,40],["B46F4E38-26DA-4388-91DA-32731D7B44A1","habits",44,62,10649230,40],["128A73FA-B982-4A3E-B9C8-4AFBAB70AB56","distracting",48,57,10649230,40],["6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0","indulgent",44,55,10649230,40],["8AABE820-1F0B-4DDD-BFF2-9177B2A47112","avoidant",46,56,10649230,40],["21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F",`evolutionary 
 conditioned 
   ignorance`,35.5,66,10649230,40],["A6BA6799-B325-453E-B4D1-BCD71CF12705","wrong views about",38,61,10649230,40],["FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1","happiness / suffering",40,55,10649230,40],["D358D3A2-957C-470B-BC5F-A71A7622AE07","reality",38,53,10649230,40],["55EF8116-598E-4168-ADBC-9248DB79A821","self",36,53,10649230,40],["CBDECA18-D9A1-4FDE-84FD-DDB8849710A3","Seven factors of awakening",98,81,10649230,40],["A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","mindfulness",91,73,10649230,40],["F05326DF-FA0C-4619-8A75-0411CB1CB2F9","investigation",85,71,10649230,40],["9EAF3484-3F2C-415B-8067-B50A3FA1B974","energy",79,71,10649230,40],["ADBA0E07-67F4-47EC-B776-EE198BCA1A53","rapture",73,72,10649230,40],["75FF467B-7F2F-4EEC-ADC9-2D64EE46D692","tranquility",68.5,77.5,10649230,40],["03593653-145D-4B52-9873-D90B412C8468","samadhi",62,87,10649230,40],["4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953","equanimity",49,95,10649230,40],["B1212500-7C71-4B0B-B979-C8A5E93B544C","Natural unfolding",98,93,10649230,40],["D7191BF4-96AD-46A9-89F8-B015FD27C991","virtuous conduct",92,91,10649230,40],["F63DCD53-F24F-4AE7-84C0-61419A5D6E68","freedom from remorse",90,82,10649230,40],["6FD89C72-5D89-4A96-B643-4BDDDEC450AC","gladness",85,77,10649230,40],["28B608E4-AED5-4042-977B-B32908F4DC0F","rapture",81,77,10649230,40],["04FEF0CF-A123-4DB2-A9CC-72E134399258","bodily tranquility",76,77,10649230,40],["E78076C8-224D-4606-81AD-7DF62AE1B946","bliss",72,81,10649230,40],["6D9D49EF-63D9-441E-865B-80CFE99B3E48","samadhi",68,87,10649230,40],["E0E57B88-D092-45E3-93DE-F47199063BEA",`seeing things 
   as they are`,60,95,10649230,40],["1F0628F7-D965-4529-8228-AA53C73527B2","disillusionment",53,99,10649230,40],["5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B","dispassion",44,100,10649230,40],["EC74E906-1F03-4570-A640-5E95985106E8","freedom and release",36,102,10649230,40],["7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8",`Motivated by: 
Honour / Shame`,157,80,10649230,35],["5946ACA1-B182-4776-BAC0-5EC43E0480C6",`Mode: Empathy / 
Intuition / Faith`,157,104,10649230,35,7],["05C8F42F-1F73-443B-B461-A3FFE6867199",`Concerned with: 
Mid-term goals`,162,106,10649230,35],["E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0",`Communal 
well-being`,162,119,10649230,30],["4C0B70B2-C4EC-4716-A08C-220E856D5B4A",`Growth potential: 
Can be trained`,162,73,10649230,35],["A870BA4E-6243-4C93-B823-BDF69104A69A","Cleaning up",162,59,10649230,30],["9BFCB2C3-78B9-4982-8501-2BFF113D4207",`  What matters to 
your gut / genitals`,167,330,15916398,50],["2C1FEC64-B01F-4D90-93AF-4F17977F3E05",`The Beast - 
  Appetite`,162,330,15916398,40],["27D920A3-4748-497F-92C3-0CEAE399325B",`Existential problem: 
     What do I need 
        to function?`,153,330,15916398,40],["3DB4BB32-A030-449C-B131-424A2FD3A651","Path of the Gut",144,335,7606813,90],["FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D","Settles in: Peace",134,339,15916398,40],["744A07BE-0872-47C6-B69E-6FD2A3E8EC1B",`(Even need for excitement 
settles in peace)`,137,347,15916398,40],["13BD4AA3-E5C9-4A13-A702-70244A2B81AC","Strategies for peace",119,339,15916398,70],["6940ABE5-F16A-451E-9986-1853902A8FAA",`In terms of practical 
therapy work`,128,326,15916398,40],["2657C9EE-BFA1-43FA-BB34-1A624A4E5237","Mechanism of change",135,322,15916398,40,25],["228A6803-C3D9-420B-A083-476A5B6FE927","Method",130,311,15916398,40,29],["F095128A-1A37-4D3C-98C5-FAE6E3F9E808",`Islands of work 
in a sea of empathy`,124,303,15916398,40],["475EAF65-F5DA-4D50-AA66-64CF5305CBC9",`In terms of early 
development`,126,353,15916398,40],["39717030-47DE-4D14-8D3B-9D454BE3AF3B",`Authenticity vs. 
attachment`,134,4,15916398,40,12],["A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","In terms of needs",103,334,15916398,40],["08A7BDCA-0161-40B1-9F74-EF7E09C1BE13",`Making adaptations 
in the world`,113,325,15916398,40],["8DFECF54-6362-48C2-84A0-B9A79FD7371A","Adapting one\u2019s mind",94,325,15916398,40],["4D115C88-FC8E-4544-AC27-0B775B126D44","In terms of emotion",103,346,15916398,40,25],["84C0342B-29BC-4E8A-A39D-0D638491312E","Embracing vulnerability",80,343,15916398,40],["F0CABC11-FB43-49D3-B32C-F6AC2F728BEF","Resisting vulnerability",125,10,15916398,40],["FF0DE3EB-BA66-4B54-9700-1075754A5EB3",`Motivated by: 
Pain / Pleasure`,156,319,15916398,35],["53CADF73-2F2C-4BCC-8748-842EE8177A85",`Growth potential: 
Can be tamed`,162,312,15916398,35],["D733DA5C-E0BC-4EAE-BD64-92B116E15988","Growing up",162,298,15916398,30],["5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B",`Concerned with: 
Immidiate goals`,162,348,15916398,35],["CC9D819E-DC87-4E17-97B4-AADC851E9E8E",`Individual 
survival`,162,2,15916398,30],["8A3E20D3-00BC-47E5-AC05-E717C6A803C6",`Mode: Action / 
Needs / Emotion`,156,341,15916398,35],["83BA614D-5560-48B0-8377-217CF04E01FC","Needs",147,7,15916398,40],["E55861C5-E9D1-4B9A-956B-DC53B1C0E01E",`Mode: Thinking / 
Exploration`,156,220,8965361,35],["8405A4E1-F7F9-4016-86B8-2E5C98520036",`Motivated by: 
Truth / Falsity`,156,200,8965361,35],["8573618D-34C1-481C-A217-71AB05C7C4D7",`Concerned with: 
Long-term goals`,161,225,8965361,35],["F05FC454-9C67-4E53-AAC4-A288D7E0E4E2","Abstract principles",161,240,8965361,30],["B9839052-6809-4E31-8792-FF4DF8C9FC48",`Growth potential: Can 
discover principles`,161,195,8965361,35],["38B0E475-2D54-4818-ABC6-E353229FDFF2","Waking up",161,180,8965361,30],["68B6E135-509A-4064-9FF9-DE55C3B66A8E","What is life?",82,207,8965361,40],["6A92592D-70EE-451D-941A-AD8F8435EF6E","What is death?",84,207,8965361,40],["DC5F27E6-E594-4651-A151-4F70145EDFD5","What am I?",86,207,8965361,40],["092BED79-8510-4E20-9040-0BF73C433EB0",`Ontology - 
What is reality?`,56.5,182,8965361,40],["F1D5FF04-CA73-47D3-87C6-41C6BA8F6708","God?",62,177,8965361,40],["ACF82BBE-F34C-4E20-B18E-08F28B3ABA12","Consciousness?",59.5,172,8965361,40],["B6246F44-0855-4817-9D0D-D397E9DB7442","Space?",52,173,8965361,40],["050CF590-16D7-48A8-9656-E58FD0B6E8BF","Time?",54,170,8965361,40],["1EE48F2F-650A-413A-8F77-720A641BA416","Matter?",57,170,8965361,40],["C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA","Ontologies",29,184,8965361,40,1],["20790E3B-9D36-40B2-82CB-56322AA09DE7",`Epistemology - how can 
we get true knowledge?`,62,204,8965361,40],["28763A09-FA38-43D2-A7C3-52E15D20F5B9","What can\u2019t we know?",57,195,8965361,40],["B20BB587-FDB1-45B4-9F6B-04D75DB45484","Pa\xF1\xF1a",67.5,102,10649230,60],["9C1A33F2-FA28-4FD0-B3A3-011939BF112E","Methods",77,101,10649230,40],["0B0E75E0-8E66-4B96-8D18-05B388B8166B","Four noble truths",72,108,10649230,40,13],["39C8C744-9E33-4FBD-B64F-4392BB1D7D43","Dependent origination",76,111,10649230,40],["F3CDF5ED-FE39-4306-9BC7-732E7252919B","Body contemplation",87,100,10649230,40],["C4AE0F47-95C9-42BF-875A-9DF1743AAFB2",`Contemplation of 
the characteristics of 
conditioned phenomena`,81,111,10649230,40],["33DB61E6-CD56-4F49-98BD-5397EB788805","Dukkha",78,122,10649230,40],["554920A7-A50D-44F4-8448-DD747BBB57DA",`The inherent unsatisfactoriness
 of constructed/conditioned 
phenomena`,77,130,10649230,40],["803C7EA0-EF36-42AE-B810-7620C3509FEA","Must be understood",82,138,10649230,30],["21CBC21A-6D6E-424D-B1D0-DCCD5425A05B","Cause and effect",84,124,10649230,40],["A9BA755A-FE4B-498E-9952-40214F02B8D6",`That craving for sensuality, 
being or non-being is 
a necessary cause for 
dissatisfaction`,68,145,10649230,40],["82F1F09B-EBCB-4F04-BDF1-4991F27E3724","Must be abandoned",72,148,10649230,30],["5503BDDB-9985-44D9-B9A4-F731513F6903","Pain \u2022 resistance = suffering",60,146,10649230,25,6],["FEC6325D-1E5F-4790-A841-63709B264A8D","That letting be leads to peace",53,142,10649230,40],["905689F0-5537-42CC-B864-9166DA60C470","Must be realized",50,147,10649230,30],["D8049867-1FC0-4817-BD67-64A421349C65",`That certain conditions 
lead to these insights`,51,124,10649230,40],["6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB","Must be practiced",46,122,10649230,30],["6C32C072-E56E-40F0-AC39-7909FC465612","Anatta",81,122,10649230,40],["64768881-AED3-403E-92A8-E4A3CBB39100","Anicca",76,122,10649230,40],["EE895C76-B04A-4587-9970-5A6CBA56069C","Six sense-spheres",86.5,108,10649230,40,17],["DE7F9890-14E7-433A-AD84-B0E18BE5BD79","Insights",64,115,10649230,40],["95BBCB02-420D-4FD9-A9BA-A404D72B41D3","Nature of fundamental reality",21,174,8965361,25],["6A893E71-2F6B-4958-B917-5F145FA37CF5","Matter",22,164,8965361,20],["3041389D-AD21-46F6-9721-2DD4E9FC1F65","Consciousness",22,184,8965361,20],["CC97CAEF-3828-466E-B55A-BA85783CE034","Acceptance and agency",80,3,15916398,40],["0F8B3461-7B9D-4E1D-A392-A6DE782AE537","Motivation split",82,289,15916398,40],["DEADD385-73FB-4EA3-AACC-13C6B453E9E6","Transcendence needs",83,307,15916398,40],["CDC69285-DE4B-40DE-BDFB-73C750FA8CB4","Fulfilment needs",95,295,15916398,40],["EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95","Psychological needs",109,295,15916398,40],["662B5EE1-6533-44B3-BC7A-2DF7708F1658","Basic needs",118,310,15916398,40],["973015FD-576A-40F3-A86C-2E8EDA196B5F",`Assertive anger /
 self-compassion`,91,10,15916398,40],["29155A2F-FCBB-4347-90DE-E8D3F86A3FFA","Grief / hurt",91,356,15916398,40],["E400970C-2383-40ED-90F4-793AFAD87E45","Rejecting anger",110,25,15916398,40],["788AC673-A0A0-4E77-93EC-2A21B981D7A8","Global distress",121,18,15916398,40],["3C66F9F4-19C8-497C-AD5A-377F74970968","Fear / shame",110,10,15916398,40],["829B047D-0C32-4887-8A3B-690BED8B847B","Needs",103,17,15916398,40],["DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB",`Negative self-
    evaluation`,103,3,15916398,40],["88244D22-DAEF-4189-83EB-E7B5D5726E62","Meaning protest",91,282,15916398,40,24],["9CE480B4-FB41-45F1-ABF5-D956A5526141","Path of the Head",93,191,7606813,90],["F2CA7E5B-766D-48F0-941D-D4B1FD54C097","Unfinished business",100,277,15916398,40,30],["987F0FDD-0FAF-44FC-9DE7-7D88E32D801D","Case formulation",106,277,15916398,40,19],["6423DD8B-C097-4C26-9917-D401ACA5FE91","Wisdom",112,285,15916398,40],["6345AAF7-5F22-49C1-8052-E28059BFFC3F","Empathy",119,292,15916398,40,7],["29EA91F8-0360-45F4-9E0A-511D80C51516","Presence",121.5,286,15916398,40],["4798DE69-2868-4EA6-84D8-E4D0CE7A90E8","Focusing",124,280,15916398,40,20],["2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","Attunement",126,290,15916398,40],["2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3","Empathic exploration",133,286,15916398,40,23],["04C21F20-915C-446A-902D-A8D5D7076C6F",`Unconditional 
positive regard`,129,298,15916398,40],["23D5758E-178A-43BD-A82B-5D1F11CC1223","Alliance work",137,301,15916398,40,18],["7D0652E2-E579-47BC-8FB9-E1FBA3539A3F","Conflict splits",112,275,15916398,40,21],["5D8415B8-AD5B-44AE-804C-9A2A62B177F8","Path of the Heart",112.5,81,7606813,90],["025E5CB8-BF2F-46EC-A170-4F80BD2FCA54","Anxiety splits",119,275,15916398,40,21],["C120D32F-4E27-481A-97F9-9B62BB394DF9","Evocative unfolding",128,279,15916398,40,27],["94D5EB98-E41E-4DD5-8B8D-06598E285B4E","Trauma retelling",137,282,15916398,40,28],["2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB","Self-soothing",143,293,15916398,40,26],["4F5D4105-E8C7-4F54-97E6-F9549BC75D4F","\u2190 back and forth between \u2192",91,3,15916398,30],["65FB0CCF-F7C4-4159-9D6D-0F929AB12136","\u2190 back and forth between \u2192",103,10,15916398,30],["CF403F63-27E2-4424-B4F3-5D6CB1252881","o",180,0,7606813,70]],K0="/Planet/assets/idealism.77654ec3.png",Q0="/Planet/assets/panpsychism.3056551e.png",em="/Planet/assets/physicalism.a98c8617.png",tm="/Planet/assets/dualism.e565b18b.png",wi=[["CD8700A2-C44A-4F60-8929-49109F06A53D",K0,23,184,40],["5FA198AA-C7EF-489E-886D-62A95A32FD09",Q0,23,174,40],["F50C2354-B76D-461E-93C1-EEAEED59607B",em,23,164,40],["08396D9A-46A7-4789-8BCC-9B4A302DD0B4",tm,35,177,40]],ys=[["8BD3708E-8E3D-44B8-9E92-1050FA7987E5","D4724AD1-EECD-4975-920C-CDAD71AA53C3","0027E01B-C40A-49F0-9833-30244700C39E"],["D4724AD1-EECD-4975-920C-CDAD71AA53C3","0027E01B-C40A-49F0-9833-30244700C39E"],["0027E01B-C40A-49F0-9833-30244700C39E"],["66F19982-732D-4744-AF06-F1F8A68D898B","287B1377-9E86-42B2-99F1-EBBEA971AB08","B5027C8B-D476-49B0-A713-ACC447159AE1"],["287B1377-9E86-42B2-99F1-EBBEA971AB08","B5027C8B-D476-49B0-A713-ACC447159AE1"],["B5027C8B-D476-49B0-A713-ACC447159AE1"],["4A481D1E-5DB6-4ABB-B9D0-8164F41393F9","876BC8AC-4013-448E-9ACA-A82DA031E09C"],["876BC8AC-4013-448E-9ACA-A82DA031E09C","008ADA1B-1D52-4F68-AB43-97D070D7774C"],["008ADA1B-1D52-4F68-AB43-97D070D7774C","3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A"],["3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A"],["D131CF5B-A895-4212-A4D4-A7E976CF5DA6","90212AAB-4CFE-4FDF-850A-7E6141F727AE"],["90212AAB-4CFE-4FDF-850A-7E6141F727AE","611A4954-9E7D-4D25-AD7D-E1FAB38482F5","5C63879D-74A6-458B-8193-AFA06A62F794","2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5","963CA1BA-9539-4089-96AB-EB0E78602390","EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F","2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7","C978C527-2523-4078-8B16-523DF8553FD5"],["611A4954-9E7D-4D25-AD7D-E1FAB38482F5"],["5C63879D-74A6-458B-8193-AFA06A62F794"],["2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5"],["963CA1BA-9539-4089-96AB-EB0E78602390"],["EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","982A6AFF-D536-4504-B63A-EC42A2712432"],["982A6AFF-D536-4504-B63A-EC42A2712432","F1EB56D4-15AE-4837-A070-40550E1262C7","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75","D456FA2C-65F4-40D2-AC84-4C7E2266BA84"],["F1EB56D4-15AE-4837-A070-40550E1262C7","506E723E-071E-4694-80AD-06BBD0681E26","2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F"],["506E723E-071E-4694-80AD-06BBD0681E26","0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","6BDD61FD-3F46-453B-8714-64AF81BCE3F9","A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["6BDD61FD-3F46-453B-8714-64AF81BCE3F9","A81C54C1-D640-4297-AFA9-346A25B8132E","9E19FF41-5144-4745-9C0B-A99858302CDE","050308DE-F371-436D-AE9F-B0D5B7F8C282"],["A81C54C1-D640-4297-AFA9-346A25B8132E"],["9E19FF41-5144-4745-9C0B-A99858302CDE"],["050308DE-F371-436D-AE9F-B0D5B7F8C282"],["A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD"],["0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD","302B64FD-4E04-4823-8E13-C7F2FAA4E7C9"],["302B64FD-4E04-4823-8E13-C7F2FAA4E7C9"],["2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F"],["3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["D456FA2C-65F4-40D2-AC84-4C7E2266BA84","B90D2293-D457-4567-8102-363F70D95781"],["B90D2293-D457-4567-8102-363F70D95781","2930997B-A726-473E-B6E9-333C2732271F","2B64F02A-BEAA-4403-8380-A8B2614D5F90","4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7"],["2930997B-A726-473E-B6E9-333C2732271F","CCCF1876-3199-41C1-AE98-25A78D1C7F51"],["CCCF1876-3199-41C1-AE98-25A78D1C7F51"],["2B64F02A-BEAA-4403-8380-A8B2614D5F90"],["4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7","EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6"],["EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6","FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8","23979ADC-AD3F-4447-BF76-224A807C2144"],["FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8"],["23979ADC-AD3F-4447-BF76-224A807C2144"],["8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F"],["2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7"],["C978C527-2523-4078-8B16-523DF8553FD5"],["F47603CA-44A7-4009-B07B-29DFA540729D","87B9AFEC-9F64-4748-87F8-F64F2B31FC29","0EF99714-0619-45EC-A71D-B4F01B6211DC"],["87B9AFEC-9F64-4748-87F8-F64F2B31FC29","FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07"],["FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07","EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C"],["EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C","0EF99714-0619-45EC-A71D-B4F01B6211DC"],["0EF99714-0619-45EC-A71D-B4F01B6211DC","7AFE8322-410C-44FA-8223-F6080F45359C","89ED6168-2517-4EF9-A5D6-3635A0C80BDC","B20BB587-FDB1-45B4-9F6B-04D75DB45484"],["7AFE8322-410C-44FA-8223-F6080F45359C","236FD67F-CD44-4B75-96AD-B16FA578E708","C9DCCC19-CD84-427B-9234-09050646BCD3","10D1D640-DE4C-4334-B08F-A4716D198E5F"],["236FD67F-CD44-4B75-96AD-B16FA578E708"],["C9DCCC19-CD84-427B-9234-09050646BCD3"],["10D1D640-DE4C-4334-B08F-A4716D198E5F"],["89ED6168-2517-4EF9-A5D6-3635A0C80BDC","074931F9-D5F1-401B-ABE0-1F26BA921E1F","E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B"],["074931F9-D5F1-401B-ABE0-1F26BA921E1F"],["E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B","9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD"],["9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD","39A86FA9-4CDF-4DD2-8AB6-78A36AC75762"],["39A86FA9-4CDF-4DD2-8AB6-78A36AC75762","60046B15-D09E-4F1F-9BC0-BA3900E29EB9"],["60046B15-D09E-4F1F-9BC0-BA3900E29EB9","263D9AEE-6F33-4D35-B945-CE35173E2F11"],["263D9AEE-6F33-4D35-B945-CE35173E2F11","3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","68B6E135-509A-4064-9FF9-DE55C3B66A8E","6A92592D-70EE-451D-941A-AD8F8435EF6E","DC5F27E6-E594-4651-A151-4F70145EDFD5","092BED79-8510-4E20-9040-0BF73C433EB0","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","9CE480B4-FB41-45F1-ABF5-D956A5526141"],["37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","4572B437-5182-4EBE-A383-F76440484F8E","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["4572B437-5182-4EBE-A383-F76440484F8E","9BA80071-89E9-400F-89CA-53CA700FA703"],["9BA80071-89E9-400F-89CA-53CA700FA703","450F8534-2F59-4A8E-BA92-D417FD0FE000","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C"],["450F8534-2F59-4A8E-BA92-D417FD0FE000","951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","C2B220C0-B7D4-432B-9ADC-1E40F1A66E25"],["951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["C2B220C0-B7D4-432B-9ADC-1E40F1A66E25","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["B470B5D1-31ED-4F91-A94D-6A94CF45E744"],["95A61B65-7A40-42FA-8622-D7A0B736BA9C"],["0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["B8BA585E-D985-44A9-A8E9-6BC1E3EA3731","AA38CD3C-7D47-4CD3-956C-5EE5C285E408","16C1A9C0-30BF-441E-8DA4-3216C0A42C51","807EE50B-B4E4-42B7-B1B4-10EBB38C1299","9CE480B4-FB41-45F1-ABF5-D956A5526141","4265E048-CDF8-4B44-836C-38549C965725"],["AA38CD3C-7D47-4CD3-956C-5EE5C285E408"],["16C1A9C0-30BF-441E-8DA4-3216C0A42C51"],["4265E048-CDF8-4B44-836C-38549C965725","538C89D3-3710-4D3F-9297-50C588EAC961"],["538C89D3-3710-4D3F-9297-50C588EAC961","1CFA1123-E052-4049-AFD7-852D36EDE838","298D83F6-FBCF-4D2F-AC0B-68DFCD6AE5B0","E4B25E04-2873-4203-8E5C-0751BB4CE230","7FA01314-361B-4C77-920A-824B38177CE8","AC391C08-CB42-4443-A2C3-1128AC357F44"],["1CFA1123-E052-4049-AFD7-852D36EDE838"],["298D83F6-FBCF-4D2F-AC0B-68DFCD6AE5B0"],["E4B25E04-2873-4203-8E5C-0751BB4CE230","7E921661-D792-418A-AA51-D1AFB9C2FA7E","1996AC29-0768-4BFD-B503-7EEF89B17DE2","AC6F030A-2049-43C8-B949-803CA7E4FA61","B542C18E-9775-4FF3-A954-282F6DF6F5D0","59883541-AA97-43E4-ADDB-9FAB51337AFA","7775CE2F-41DF-4766-9120-1FC72ABFD9FC","69EDF766-1CA2-451B-83D3-5993A5CC0373"],["7E921661-D792-418A-AA51-D1AFB9C2FA7E"],["1996AC29-0768-4BFD-B503-7EEF89B17DE2"],["AC6F030A-2049-43C8-B949-803CA7E4FA61"],["B542C18E-9775-4FF3-A954-282F6DF6F5D0"],["59883541-AA97-43E4-ADDB-9FAB51337AFA"],["7775CE2F-41DF-4766-9120-1FC72ABFD9FC"],["69EDF766-1CA2-451B-83D3-5993A5CC0373"],["7FA01314-361B-4C77-920A-824B38177CE8"],["AC391C08-CB42-4443-A2C3-1128AC357F44"],["807EE50B-B4E4-42B7-B1B4-10EBB38C1299","B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","A35D6C5D-B56F-416F-B337-41FB9E923AE0"],["B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","B07DBBCA-2123-4D55-828C-6931A999128B"],["B07DBBCA-2123-4D55-828C-6931A999128B","C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8","794FB1D5-42CF-496B-929F-9568976B58FF","12872E37-D9BC-4CDD-BB7E-E09FD46D993A","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8"],["794FB1D5-42CF-496B-929F-9568976B58FF"],["12872E37-D9BC-4CDD-BB7E-E09FD46D993A","2875511F-F91A-4807-9839-4B7153B23143","F7A69942-1F8A-42CC-A8C3-8DF26E439289"],["2875511F-F91A-4807-9839-4B7153B23143","F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","334445AA-FC20-48D6-9A7D-2558857C2346","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","3E8EDBA9-59E1-4835-8343-4AA9FF799D49","43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3"],["3E8EDBA9-59E1-4835-8343-4AA9FF799D49","64077339-5087-4CBD-A706-C1AA35E8AC8B","FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B"],["64077339-5087-4CBD-A706-C1AA35E8AC8B","9E801875-A714-49E5-969A-D9A5E5497D18","334445AA-FC20-48D6-9A7D-2558857C2346"],["9E801875-A714-49E5-969A-D9A5E5497D18","31475508-739B-4966-ADC9-D8EBCE5FE3DB"],["31475508-739B-4966-ADC9-D8EBCE5FE3DB","A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E"],["A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E"],["FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B","9A853604-4CB0-4B1B-98E1-E4D95626433A","53296584-40BE-4F83-96D3-B77540245AC2"],["9A853604-4CB0-4B1B-98E1-E4D95626433A","93C64795-A33C-4578-9694-B8B0FFE287AE"],["93C64795-A33C-4578-9694-B8B0FFE287AE","73E6253F-D36B-45B8-ABF9-A72432F5F576","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["73E6253F-D36B-45B8-ABF9-A72432F5F576","D5F25680-4FED-4B74-A5D5-1B15A8C8A580","C5096451-E5CF-4498-AF7A-E97C3C8197F9"],["D5F25680-4FED-4B74-A5D5-1B15A8C8A580"],["C5096451-E5CF-4498-AF7A-E97C3C8197F9"],["53296584-40BE-4F83-96D3-B77540245AC2","EE9D175C-0953-4B73-9B31-5C7AD0C50288","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["EE9D175C-0953-4B73-9B31-5C7AD0C50288","5A058F3F-7A05-44E2-8417-7B99A2437742","42B4C435-0661-46DB-8D8B-AB2AA00D601B","64BC8F62-AA83-4E65-B1A3-D982DE8A86C1"],["5A058F3F-7A05-44E2-8417-7B99A2437742","42B4C435-0661-46DB-8D8B-AB2AA00D601B","87EFBBA1-F6E2-4A35-8897-A73210A18318","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["42B4C435-0661-46DB-8D8B-AB2AA00D601B","64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["87EFBBA1-F6E2-4A35-8897-A73210A18318","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["FC6818C0-13A9-44E2-8A38-7C4D4FB8827B"],["8873A022-151A-41EA-B380-2284DEB82A22"],["43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3","D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9"],["D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9","9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91"],["9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91"],["334445AA-FC20-48D6-9A7D-2558857C2346","074F7C7B-C390-4328-A205-B73143806FFA"],["074F7C7B-C390-4328-A205-B73143806FFA","9E66D7AE-5825-4691-BADB-FC7A75F7B29D","2C809F14-A1A9-4178-B236-FA6408CD789D","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["9E66D7AE-5825-4691-BADB-FC7A75F7B29D"],["2C809F14-A1A9-4178-B236-FA6408CD789D"],["F7A69942-1F8A-42CC-A8C3-8DF26E439289","5AE32B80-01A1-4314-9A23-453A397A2599","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","68B6E135-509A-4064-9FF9-DE55C3B66A8E"],["5AE32B80-01A1-4314-9A23-453A397A2599","72A32148-45A5-41A7-A836-0CE959AF38D4","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","6A92592D-70EE-451D-941A-AD8F8435EF6E"],["72A32148-45A5-41A7-A836-0CE959AF38D4","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","DC5F27E6-E594-4651-A151-4F70145EDFD5"],["3F0C901E-76B2-463D-B17A-8078CA2E1C91"],["E27CC807-EB70-45C4-84B3-DDF1F8AADB00"],["1E34F972-7322-4F63-A271-2BC8A5241BB8"],["76AB6EF8-AEF6-41D3-9576-2FE8D14F462B"],["5BEDE28D-38C4-4D03-B4C6-2C74ECD89078"],["D7868612-7C4F-49F8-BCAA-B03E2BCEF450"],["820F18C3-7140-4923-9D3A-2CD81A26B702"],["7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6","EB83C866-FF54-449B-A65C-24ECDE2820C1","3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58"],["EB83C866-FF54-449B-A65C-24ECDE2820C1"],["3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58"],["A35D6C5D-B56F-416F-B337-41FB9E923AE0","EDCAFFF6-FD78-40E0-B719-97569DCD8819"],["EDCAFFF6-FD78-40E0-B719-97569DCD8819","46CBB5AE-79D5-4808-A400-4B804DA91E12","E55861C5-E9D1-4B9A-956B-DC53B1C0E01E","8405A4E1-F7F9-4016-86B8-2E5C98520036","8573618D-34C1-481C-A217-71AB05C7C4D7","B9839052-6809-4E31-8792-FF4DF8C9FC48"],["46CBB5AE-79D5-4808-A400-4B804DA91E12","8D82CC00-C9F5-4B9E-B256-A879D4623B3C","9BFCB2C3-78B9-4982-8501-2BFF113D4207"],["8D82CC00-C9F5-4B9E-B256-A879D4623B3C","35476F95-E324-40D2-B224-A5E27568028C","9BFCB2C3-78B9-4982-8501-2BFF113D4207"],["35476F95-E324-40D2-B224-A5E27568028C","4D1CEB04-6987-4C58-93B0-57DBB0914867","7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8","5946ACA1-B182-4776-BAC0-5EC43E0480C6","05C8F42F-1F73-443B-B461-A3FFE6867199","4C0B70B2-C4EC-4716-A08C-220E856D5B4A"],["4D1CEB04-6987-4C58-93B0-57DBB0914867","0EF9450D-3CB7-4D13-BCFB-49088E87F374"],["0EF9450D-3CB7-4D13-BCFB-49088E87F374","80130A99-E12B-459A-B43D-1CE8BB3B1EF2"],["80130A99-E12B-459A-B43D-1CE8BB3B1EF2","2095179D-0AC4-4378-8E6F-8F71E2793FAD","D6B5FE51-C8D9-42EB-B0BE-07B09B51776C"],["2095179D-0AC4-4378-8E6F-8F71E2793FAD","AE242003-1C0A-40BF-AEA2-567E61901171","F3695B21-1EAA-404B-9239-0767DA0BC90C","B7A263AD-5457-4712-A089-03B24D041629","B4399091-3D0A-472B-A40C-BC8CDD097E7F","20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB"],["AE242003-1C0A-40BF-AEA2-567E61901171"],["F3695B21-1EAA-404B-9239-0767DA0BC90C"],["B7A263AD-5457-4712-A089-03B24D041629"],["B4399091-3D0A-472B-A40C-BC8CDD097E7F"],["20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB"],["D6B5FE51-C8D9-42EB-B0BE-07B09B51776C","6473A93C-A4A4-41D5-9765-D58B3F8A57EA","0A57B7F6-E875-485D-98F2-66458F5FBC6B","19DB1035-B51E-4F0A-8F97-888375D12E8F","34C06752-B7AD-461D-A5E9-B29CAE227645","83D9EEC0-3314-4BD5-826E-F1ADDA1492EA","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["6473A93C-A4A4-41D5-9765-D58B3F8A57EA"],["0A57B7F6-E875-485D-98F2-66458F5FBC6B"],["19DB1035-B51E-4F0A-8F97-888375D12E8F"],["34C06752-B7AD-461D-A5E9-B29CAE227645"],["83D9EEC0-3314-4BD5-826E-F1ADDA1492EA"],["1E7C0EB1-1DDE-4044-A8B7-E4540487DB1C","E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","DA6F224D-BC2D-47BF-91C5-9538BF062D81","14BA8BEB-FA35-44B7-9DE3-A1503614069D"],["DA6F224D-BC2D-47BF-91C5-9538BF062D81","603F93B5-AA5A-49C2-8AEE-440DA485BA40","F26DDAD3-74C1-48A8-9488-8BAB580947E7","05CF2077-5B2D-43E7-92AC-232082EA7F8C","DEA78281-438E-4CB6-ADCE-25DC85D9FF37"],["603F93B5-AA5A-49C2-8AEE-440DA485BA40"],["F26DDAD3-74C1-48A8-9488-8BAB580947E7"],["05CF2077-5B2D-43E7-92AC-232082EA7F8C","F0AA6E16-8A46-43FA-B435-942FFF734B06","BEA84E38-CF01-4A16-941B-F26EEE3E6D88","EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3","C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF"],["F0AA6E16-8A46-43FA-B435-942FFF734B06"],["BEA84E38-CF01-4A16-941B-F26EEE3E6D88"],["EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3"],["C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF"],["DEA78281-438E-4CB6-ADCE-25DC85D9FF37","202B8B0D-13DA-459A-9D5E-ED5DD40D30E4"],["202B8B0D-13DA-459A-9D5E-ED5DD40D30E4","0AA203B9-8B52-4412-B32D-D412F894D779","2BAF7986-984E-4937-BA03-E5CBAA234AEF","1D823800-DD7A-4B6F-94EA-517D4DE9876B"],["0AA203B9-8B52-4412-B32D-D412F894D779","6A20558B-3A35-4D14-8EBE-3C5DF4F02868"],["6A20558B-3A35-4D14-8EBE-3C5DF4F02868","96786F52-EB9D-42BB-B854-457841A162BA","28106D6F-9E60-4579-A457-B2F4DB781D6D","D81C6E33-ED3A-45ED-9567-78EC22F9A6C7","8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B","14BA8BEB-FA35-44B7-9DE3-A1503614069D"],["96786F52-EB9D-42BB-B854-457841A162BA"],["28106D6F-9E60-4579-A457-B2F4DB781D6D"],["D81C6E33-ED3A-45ED-9567-78EC22F9A6C7"],["8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B"],["2BAF7986-984E-4937-BA03-E5CBAA234AEF","C0074FCF-7AB4-4781-BC26-3812FBA61015","CB62D122-2342-4D33-B98D-EE3BD70B6538","64192F80-785C-4B14-AF81-987193E41085","83BC3254-7B62-4D9C-BC20-192D2D442466","4788E206-DE47-48FA-8DC4-326274991F8D","111EBFA8-E400-4984-A638-63120DDC1590"],["C0074FCF-7AB4-4781-BC26-3812FBA61015"],["CB62D122-2342-4D33-B98D-EE3BD70B6538"],["64192F80-785C-4B14-AF81-987193E41085"],["83BC3254-7B62-4D9C-BC20-192D2D442466"],["4788E206-DE47-48FA-8DC4-326274991F8D"],["111EBFA8-E400-4984-A638-63120DDC1590"],["1D823800-DD7A-4B6F-94EA-517D4DE9876B","C0993BB8-9C64-4F7A-A673-289EA2A33D0D","4AF3AF2F-5D76-4620-911E-54398F84F288","672E2CBD-7421-4E94-9728-95353BCD772E"],["C0993BB8-9C64-4F7A-A673-289EA2A33D0D","00E891B6-75E2-43B7-97B4-62F6DD69B15B"],["00E891B6-75E2-43B7-97B4-62F6DD69B15B","B477D774-01E4-4F6A-93B1-111E699FFE75","E2D52070-A83C-4D48-A218-BB3DC7BEAF21","EBCF0E75-DA1D-4533-BEEA-73657C4588AF","4AF3AF2F-5D76-4620-911E-54398F84F288","83BA614D-5560-48B0-8377-217CF04E01FC"],["B477D774-01E4-4F6A-93B1-111E699FFE75"],["E2D52070-A83C-4D48-A218-BB3DC7BEAF21"],["EBCF0E75-DA1D-4533-BEEA-73657C4588AF"],["4AF3AF2F-5D76-4620-911E-54398F84F288"],["672E2CBD-7421-4E94-9728-95353BCD772E"],["14BA8BEB-FA35-44B7-9DE3-A1503614069D","1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","E8F9F0EB-2B89-4D4C-901E-A029C0211A93","268F9754-9375-4E1F-B752-233A8F83F592","B20BB587-FDB1-45B4-9F6B-04D75DB45484"],["1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","A478FC19-7AC1-4480-A9C9-93AD4C925970","61282C0C-C654-4B5D-B2F9-ECF698B16489","9FC8F28B-4B52-4BFC-9349-4B5271FCDD84"],["A478FC19-7AC1-4480-A9C9-93AD4C925970","6E92A01E-0E8D-494E-8249-EF0EF0D22987","349EFC6D-D96C-4E61-A839-93D31BF698B5","ED71676A-652A-400A-AAEB-70A6B980A6F2"],["6E92A01E-0E8D-494E-8249-EF0EF0D22987"],["349EFC6D-D96C-4E61-A839-93D31BF698B5"],["ED71676A-652A-400A-AAEB-70A6B980A6F2"],["61282C0C-C654-4B5D-B2F9-ECF698B16489"],["9FC8F28B-4B52-4BFC-9349-4B5271FCDD84"],["E8F9F0EB-2B89-4D4C-901E-A029C0211A93","CCBD9962-2FF7-4C39-97B9-D93FA4044BD3","D0E50499-8C3F-4818-BBAA-FEB433FC1704","BC583511-0DA5-4F1E-B699-D72CB449DD00","C4B7A8B7-5171-4873-B269-0A0582CA2084","FC88FDFD-AE27-4F76-938D-6FE581E65D08","30F3B081-5F90-4F13-BC8D-BBC7293CEC04","D49F0D1E-5DD6-4147-88E2-604F7E4A3566"],["CCBD9962-2FF7-4C39-97B9-D93FA4044BD3"],["D0E50499-8C3F-4818-BBAA-FEB433FC1704"],["BC583511-0DA5-4F1E-B699-D72CB449DD00"],["C4B7A8B7-5171-4873-B269-0A0582CA2084"],["FC88FDFD-AE27-4F76-938D-6FE581E65D08"],["30F3B081-5F90-4F13-BC8D-BBC7293CEC04"],["D49F0D1E-5DD6-4147-88E2-604F7E4A3566"],["268F9754-9375-4E1F-B752-233A8F83F592","B46F4E38-26DA-4388-91DA-32731D7B44A1","21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F","A6BA6799-B325-453E-B4D1-BCD71CF12705"],["B46F4E38-26DA-4388-91DA-32731D7B44A1","6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0","8AABE820-1F0B-4DDD-BFF2-9177B2A47112","128A73FA-B982-4A3E-B9C8-4AFBAB70AB56"],["128A73FA-B982-4A3E-B9C8-4AFBAB70AB56"],["6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0"],["8AABE820-1F0B-4DDD-BFF2-9177B2A47112"],["21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F"],["A6BA6799-B325-453E-B4D1-BCD71CF12705","FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1","D358D3A2-957C-470B-BC5F-A71A7622AE07","55EF8116-598E-4168-ADBC-9248DB79A821"],["FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1"],["D358D3A2-957C-470B-BC5F-A71A7622AE07"],["55EF8116-598E-4168-ADBC-9248DB79A821"],["CBDECA18-D9A1-4FDE-84FD-DDB8849710A3","A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","F05326DF-FA0C-4619-8A75-0411CB1CB2F9"],["F05326DF-FA0C-4619-8A75-0411CB1CB2F9","9EAF3484-3F2C-415B-8067-B50A3FA1B974"],["9EAF3484-3F2C-415B-8067-B50A3FA1B974","ADBA0E07-67F4-47EC-B776-EE198BCA1A53"],["ADBA0E07-67F4-47EC-B776-EE198BCA1A53","75FF467B-7F2F-4EEC-ADC9-2D64EE46D692"],["75FF467B-7F2F-4EEC-ADC9-2D64EE46D692","03593653-145D-4B52-9873-D90B412C8468"],["03593653-145D-4B52-9873-D90B412C8468","4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953"],["4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953"],["B1212500-7C71-4B0B-B979-C8A5E93B544C","D7191BF4-96AD-46A9-89F8-B015FD27C991","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["D7191BF4-96AD-46A9-89F8-B015FD27C991","F63DCD53-F24F-4AE7-84C0-61419A5D6E68"],["F63DCD53-F24F-4AE7-84C0-61419A5D6E68","6FD89C72-5D89-4A96-B643-4BDDDEC450AC"],["6FD89C72-5D89-4A96-B643-4BDDDEC450AC","28B608E4-AED5-4042-977B-B32908F4DC0F"],["28B608E4-AED5-4042-977B-B32908F4DC0F","04FEF0CF-A123-4DB2-A9CC-72E134399258"],["04FEF0CF-A123-4DB2-A9CC-72E134399258","E78076C8-224D-4606-81AD-7DF62AE1B946"],["E78076C8-224D-4606-81AD-7DF62AE1B946","6D9D49EF-63D9-441E-865B-80CFE99B3E48"],["6D9D49EF-63D9-441E-865B-80CFE99B3E48","E0E57B88-D092-45E3-93DE-F47199063BEA"],["E0E57B88-D092-45E3-93DE-F47199063BEA","1F0628F7-D965-4529-8228-AA53C73527B2"],["1F0628F7-D965-4529-8228-AA53C73527B2","5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B"],["5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B","EC74E906-1F03-4570-A640-5E95985106E8"],["EC74E906-1F03-4570-A640-5E95985106E8"],["7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8"],["5946ACA1-B182-4776-BAC0-5EC43E0480C6"],["05C8F42F-1F73-443B-B461-A3FFE6867199","E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0"],["E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0"],["4C0B70B2-C4EC-4716-A08C-220E856D5B4A","A870BA4E-6243-4C93-B823-BDF69104A69A"],["A870BA4E-6243-4C93-B823-BDF69104A69A"],["9BFCB2C3-78B9-4982-8501-2BFF113D4207","2C1FEC64-B01F-4D90-93AF-4F17977F3E05"],["2C1FEC64-B01F-4D90-93AF-4F17977F3E05","27D920A3-4748-497F-92C3-0CEAE399325B","FF0DE3EB-BA66-4B54-9700-1075754A5EB3","53CADF73-2F2C-4BCC-8748-842EE8177A85","5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B","8A3E20D3-00BC-47E5-AC05-E717C6A803C6"],["27D920A3-4748-497F-92C3-0CEAE399325B","3DB4BB32-A030-449C-B131-424A2FD3A651"],["3DB4BB32-A030-449C-B131-424A2FD3A651","FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D"],["FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D","744A07BE-0872-47C6-B69E-6FD2A3E8EC1B","13BD4AA3-E5C9-4A13-A702-70244A2B81AC"],["744A07BE-0872-47C6-B69E-6FD2A3E8EC1B"],["13BD4AA3-E5C9-4A13-A702-70244A2B81AC","6940ABE5-F16A-451E-9986-1853902A8FAA","475EAF65-F5DA-4D50-AA66-64CF5305CBC9","A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","4D115C88-FC8E-4544-AC27-0B775B126D44"],["6940ABE5-F16A-451E-9986-1853902A8FAA","2657C9EE-BFA1-43FA-BB34-1A624A4E5237","228A6803-C3D9-420B-A083-476A5B6FE927"],["2657C9EE-BFA1-43FA-BB34-1A624A4E5237"],["228A6803-C3D9-420B-A083-476A5B6FE927","F095128A-1A37-4D3C-98C5-FAE6E3F9E808"],["F095128A-1A37-4D3C-98C5-FAE6E3F9E808"],["475EAF65-F5DA-4D50-AA66-64CF5305CBC9","39717030-47DE-4D14-8D3B-9D454BE3AF3B"],["39717030-47DE-4D14-8D3B-9D454BE3AF3B"],["A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","08A7BDCA-0161-40B1-9F74-EF7E09C1BE13","8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["08A7BDCA-0161-40B1-9F74-EF7E09C1BE13","8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["4D115C88-FC8E-4544-AC27-0B775B126D44","4D115C88-FC8E-4544-AC27-0B775B126D44","84C0342B-29BC-4E8A-A39D-0D638491312E","F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["84C0342B-29BC-4E8A-A39D-0D638491312E","F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["FF0DE3EB-BA66-4B54-9700-1075754A5EB3"],["53CADF73-2F2C-4BCC-8748-842EE8177A85","D733DA5C-E0BC-4EAE-BD64-92B116E15988"],["D733DA5C-E0BC-4EAE-BD64-92B116E15988"],["5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B","CC9D819E-DC87-4E17-97B4-AADC851E9E8E"],["CC9D819E-DC87-4E17-97B4-AADC851E9E8E"],["8A3E20D3-00BC-47E5-AC05-E717C6A803C6","83BA614D-5560-48B0-8377-217CF04E01FC"],["83BA614D-5560-48B0-8377-217CF04E01FC"],["E55861C5-E9D1-4B9A-956B-DC53B1C0E01E"],["8405A4E1-F7F9-4016-86B8-2E5C98520036"],["8573618D-34C1-481C-A217-71AB05C7C4D7","F05FC454-9C67-4E53-AAC4-A288D7E0E4E2"],["F05FC454-9C67-4E53-AAC4-A288D7E0E4E2"],["B9839052-6809-4E31-8792-FF4DF8C9FC48","38B0E475-2D54-4818-ABC6-E353229FDFF2"],["38B0E475-2D54-4818-ABC6-E353229FDFF2"],["68B6E135-509A-4064-9FF9-DE55C3B66A8E"],["6A92592D-70EE-451D-941A-AD8F8435EF6E"],["DC5F27E6-E594-4651-A151-4F70145EDFD5"],["092BED79-8510-4E20-9040-0BF73C433EB0","F1D5FF04-CA73-47D3-87C6-41C6BA8F6708","ACF82BBE-F34C-4E20-B18E-08F28B3ABA12","B6246F44-0855-4817-9D0D-D397E9DB7442","050CF590-16D7-48A8-9656-E58FD0B6E8BF","1EE48F2F-650A-413A-8F77-720A641BA416","C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA"],["F1D5FF04-CA73-47D3-87C6-41C6BA8F6708"],["ACF82BBE-F34C-4E20-B18E-08F28B3ABA12"],["B6246F44-0855-4817-9D0D-D397E9DB7442"],["050CF590-16D7-48A8-9656-E58FD0B6E8BF"],["1EE48F2F-650A-413A-8F77-720A641BA416"],["C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA"],["20790E3B-9D36-40B2-82CB-56322AA09DE7","28763A09-FA38-43D2-A7C3-52E15D20F5B9"],["28763A09-FA38-43D2-A7C3-52E15D20F5B9"],["B20BB587-FDB1-45B4-9F6B-04D75DB45484","9C1A33F2-FA28-4FD0-B3A3-011939BF112E","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["9C1A33F2-FA28-4FD0-B3A3-011939BF112E","0B0E75E0-8E66-4B96-8D18-05B388B8166B","39C8C744-9E33-4FBD-B64F-4392BB1D7D43","F3CDF5ED-FE39-4306-9BC7-732E7252919B","C4AE0F47-95C9-42BF-875A-9DF1743AAFB2","EE895C76-B04A-4587-9970-5A6CBA56069C"],["0B0E75E0-8E66-4B96-8D18-05B388B8166B"],["39C8C744-9E33-4FBD-B64F-4392BB1D7D43"],["F3CDF5ED-FE39-4306-9BC7-732E7252919B"],["C4AE0F47-95C9-42BF-875A-9DF1743AAFB2","33DB61E6-CD56-4F49-98BD-5397EB788805","6C32C072-E56E-40F0-AC39-7909FC465612","64768881-AED3-403E-92A8-E4A3CBB39100"],["33DB61E6-CD56-4F49-98BD-5397EB788805","554920A7-A50D-44F4-8448-DD747BBB57DA"],["554920A7-A50D-44F4-8448-DD747BBB57DA","803C7EA0-EF36-42AE-B810-7620C3509FEA","21CBC21A-6D6E-424D-B1D0-DCCD5425A05B","A9BA755A-FE4B-498E-9952-40214F02B8D6","6C32C072-E56E-40F0-AC39-7909FC465612","64768881-AED3-403E-92A8-E4A3CBB39100","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["803C7EA0-EF36-42AE-B810-7620C3509FEA"],["21CBC21A-6D6E-424D-B1D0-DCCD5425A05B"],["A9BA755A-FE4B-498E-9952-40214F02B8D6","5503BDDB-9985-44D9-B9A4-F731513F6903","FEC6325D-1E5F-4790-A841-63709B264A8D","82F1F09B-EBCB-4F04-BDF1-4991F27E3724"],["82F1F09B-EBCB-4F04-BDF1-4991F27E3724","82F1F09B-EBCB-4F04-BDF1-4991F27E3724"],["5503BDDB-9985-44D9-B9A4-F731513F6903","FEC6325D-1E5F-4790-A841-63709B264A8D"],["FEC6325D-1E5F-4790-A841-63709B264A8D","905689F0-5537-42CC-B864-9166DA60C470","D8049867-1FC0-4817-BD67-64A421349C65"],["905689F0-5537-42CC-B864-9166DA60C470"],["D8049867-1FC0-4817-BD67-64A421349C65","6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB"],["6C32C072-E56E-40F0-AC39-7909FC465612"],["64768881-AED3-403E-92A8-E4A3CBB39100"],["EE895C76-B04A-4587-9970-5A6CBA56069C"],["DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["95BBCB02-420D-4FD9-A9BA-A404D72B41D3"],["6A893E71-2F6B-4958-B917-5F145FA37CF5","3041389D-AD21-46F6-9721-2DD4E9FC1F65"],["3041389D-AD21-46F6-9721-2DD4E9FC1F65"],["CC97CAEF-3828-466E-B55A-BA85783CE034","4F5D4105-E8C7-4F54-97E6-F9549BC75D4F"],["0F8B3461-7B9D-4E1D-A392-A6DE782AE537"],["DEADD385-73FB-4EA3-AACC-13C6B453E9E6","CDC69285-DE4B-40DE-BDFB-73C750FA8CB4"],["CDC69285-DE4B-40DE-BDFB-73C750FA8CB4","EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95"],["EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95","662B5EE1-6533-44B3-BC7A-2DF7708F1658"],["662B5EE1-6533-44B3-BC7A-2DF7708F1658"],["973015FD-576A-40F3-A86C-2E8EDA196B5F","29155A2F-FCBB-4347-90DE-E8D3F86A3FFA","E400970C-2383-40ED-90F4-793AFAD87E45","65FB0CCF-F7C4-4159-9D6D-0F929AB12136"],["29155A2F-FCBB-4347-90DE-E8D3F86A3FFA"],["E400970C-2383-40ED-90F4-793AFAD87E45","788AC673-A0A0-4E77-93EC-2A21B981D7A8"],["788AC673-A0A0-4E77-93EC-2A21B981D7A8","3C66F9F4-19C8-497C-AD5A-377F74970968"],["3C66F9F4-19C8-497C-AD5A-377F74970968","829B047D-0C32-4887-8A3B-690BED8B847B","DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["829B047D-0C32-4887-8A3B-690BED8B847B","DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["88244D22-DAEF-4189-83EB-E7B5D5726E62"],["9CE480B4-FB41-45F1-ABF5-D956A5526141"],["F2CA7E5B-766D-48F0-941D-D4B1FD54C097"],["987F0FDD-0FAF-44FC-9DE7-7D88E32D801D","6423DD8B-C097-4C26-9917-D401ACA5FE91"],["6423DD8B-C097-4C26-9917-D401ACA5FE91","6345AAF7-5F22-49C1-8052-E28059BFFC3F"],["6345AAF7-5F22-49C1-8052-E28059BFFC3F","29EA91F8-0360-45F4-9E0A-511D80C51516","2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","04C21F20-915C-446A-902D-A8D5D7076C6F"],["29EA91F8-0360-45F4-9E0A-511D80C51516","4798DE69-2868-4EA6-84D8-E4D0CE7A90E8"],["4798DE69-2868-4EA6-84D8-E4D0CE7A90E8"],["2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3"],["2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3"],["04C21F20-915C-446A-902D-A8D5D7076C6F","23D5758E-178A-43BD-A82B-5D1F11CC1223"],["23D5758E-178A-43BD-A82B-5D1F11CC1223"],["7D0652E2-E579-47BC-8FB9-E1FBA3539A3F"],["5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["025E5CB8-BF2F-46EC-A170-4F80BD2FCA54"],["C120D32F-4E27-481A-97F9-9B62BB394DF9"],["94D5EB98-E41E-4DD5-8B8D-06598E285B4E"],["2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB"],["4F5D4105-E8C7-4F54-97E6-F9549BC75D4F"],["65FB0CCF-F7C4-4159-9D6D-0F929AB12136"],["CF403F63-27E2-4424-B4F3-5D6CB1252881"]];function Bs(r,e){return Math.random()*(e-r)+r}function Pl(r,e,t){t===void 0&&(t=7);let n=0,i=0;for(;n===0;)n=Math.random();for(;i===0;)i=Math.random();let s=Math.sqrt(-t*Math.log(n))*Math.cos(t*Math.PI*i);return s=s/10+.5,s>1||s<0?Pl(r,e):(s=Math.floor(s*(e-r+1)+r),s)}function nm(r,e){return r=Math.ceil(r),e=Math.floor(e),Math.floor(Math.random()*(e-r+1))+r}function wt(r,e,t){let n=r*Math.PI/180,i=e*Math.PI/180-Math.PI,s=t*Math.sin(n)*Math.sin(i),o=t*Math.cos(n),a=t*Math.sin(n)*Math.cos(i);return{x:s,y:o,z:a}}function im(r,e,t){let n=Math.acos(e/Math.sqrt(Math.pow(t,2)+Math.pow(r,2)+Math.pow(e,2))),i=Math.atan(r/t),s=!1,o=!1;t>0&&(s=!0),r>0&&(o=!0);let a=n/Math.PI*180,l=i/Math.PI*180+180;return s==!1&&o==!1&&(l-=180),s==!1&&o==!0&&(l+=180),{lat:a,lng:l}}const Jo={type:"change"},Rr={type:"start"},$o={type:"end"};class sm extends Vn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",xt),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Jo),n.update(),s=i.NONE},this.update=function(){const y=new b,Y=new Un().setFromUnitVectors(e.up,new b(0,1,0)),ne=Y.clone().invert(),le=new b,ae=new Un,xe=2*Math.PI;return function(){const Ue=n.object.position;y.copy(Ue).sub(n.target),y.applyQuaternion(Y),a.setFromVector3(y),n.autoRotate&&s===i.NONE&&S(T()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let w=n.minAzimuthAngle,se=n.maxAzimuthAngle;return isFinite(w)&&isFinite(se)&&(w<-Math.PI?w+=xe:w>Math.PI&&(w-=xe),se<-Math.PI?se+=xe:se>Math.PI&&(se-=xe),w<=se?a.theta=Math.max(w,Math.min(se,a.theta)):a.theta=a.theta>(w+se)/2?Math.max(w,a.theta):Math.min(se,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),y.setFromSpherical(a),y.applyQuaternion(ne),Ue.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||le.distanceToSquared(n.object.position)>o||8*(1-ae.dot(n.object.quaternion))>o?(n.dispatchEvent(Jo),le.copy(n.object.position),ae.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",gt),n.domElement.removeEventListener("wheel",Bt),n.domElement.removeEventListener("pointermove",st),n.domElement.removeEventListener("pointerup",$e),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",xt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new jo,l=new jo;let c=1;const h=new b;let u=!1;const f=new ee,p=new ee,g=new ee,m=new ee,d=new ee,x=new ee,v=new ee,D=new ee,E=new ee,_=[],M={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function S(y){l.theta-=y}function P(y){l.phi-=y}const q=function(){const y=new b;return function(ne,le){y.setFromMatrixColumn(le,0),y.multiplyScalar(-ne),h.add(y)}}(),re=function(){const y=new b;return function(ne,le){n.screenSpacePanning===!0?y.setFromMatrixColumn(le,1):(y.setFromMatrixColumn(le,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(ne),h.add(y)}}(),z=function(){const y=new b;return function(ne,le){const ae=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;y.copy(xe).sub(n.target);let Be=y.length();Be*=Math.tan(n.object.fov/2*Math.PI/180),q(2*ne*Be/ae.clientHeight,n.object.matrix),re(2*le*Be/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(ne*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),re(le*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(y){n.object.isPerspectiveCamera?c/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(y){n.object.isPerspectiveCamera?c*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(y){f.set(y.clientX,y.clientY)}function Z(y){v.set(y.clientX,y.clientY)}function k(y){m.set(y.clientX,y.clientY)}function I(y){p.set(y.clientX,y.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const Y=n.domElement;S(2*Math.PI*g.x/Y.clientHeight),P(2*Math.PI*g.y/Y.clientHeight),f.copy(p),n.update()}function O(y){D.set(y.clientX,y.clientY),E.subVectors(D,v),E.y>0?L(A()):E.y<0&&W(A()),v.copy(D),n.update()}function $(y){d.set(y.clientX,y.clientY),x.subVectors(d,m).multiplyScalar(n.panSpeed),z(x.x,x.y),m.copy(d),n.update()}function J(y){y.deltaY<0?W(A()):y.deltaY>0&&L(A()),n.update()}function K(y){let Y=!1;switch(y.code){case n.keys.UP:z(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),Y=!0;break}Y&&(y.preventDefault(),n.update())}function de(){if(_.length===1)f.set(_[0].pageX,_[0].pageY);else{const y=.5*(_[0].pageX+_[1].pageX),Y=.5*(_[0].pageY+_[1].pageY);f.set(y,Y)}}function Ae(){if(_.length===1)m.set(_[0].pageX,_[0].pageY);else{const y=.5*(_[0].pageX+_[1].pageX),Y=.5*(_[0].pageY+_[1].pageY);m.set(y,Y)}}function X(){const y=_[0].pageX-_[1].pageX,Y=_[0].pageY-_[1].pageY,ne=Math.sqrt(y*y+Y*Y);v.set(0,ne)}function we(){n.enableZoom&&X(),n.enablePan&&Ae()}function me(){n.enableZoom&&X(),n.enableRotate&&de()}function _e(y){if(_.length==1)p.set(y.pageX,y.pageY);else{const ne=ge(y),le=.5*(y.pageX+ne.x),ae=.5*(y.pageY+ne.y);p.set(le,ae)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const Y=n.domElement;S(2*Math.PI*g.x/Y.clientHeight),P(2*Math.PI*g.y/Y.clientHeight),f.copy(p)}function ue(y){if(_.length===1)d.set(y.pageX,y.pageY);else{const Y=ge(y),ne=.5*(y.pageX+Y.x),le=.5*(y.pageY+Y.y);d.set(ne,le)}x.subVectors(d,m).multiplyScalar(n.panSpeed),z(x.x,x.y),m.copy(d)}function Le(y){const Y=ge(y),ne=y.pageX-Y.x,le=y.pageY-Y.y,ae=Math.sqrt(ne*ne+le*le);D.set(0,ae),E.set(0,Math.pow(D.y/v.y,n.zoomSpeed)),L(E.y),v.copy(D)}function Ce(y){n.enableZoom&&Le(y),n.enablePan&&ue(y)}function pe(y){n.enableZoom&&Le(y),n.enableRotate&&_e(y)}function Ye(y){n.enabled!==!1&&(_.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",st),n.domElement.addEventListener("pointerup",$e)),Q(y),y.pointerType==="touch"?F(y):Ke(y))}function st(y){n.enabled!==!1&&(y.pointerType==="touch"?C(y):Pe(y))}function $e(y){te(y),_.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",st),n.domElement.removeEventListener("pointerup",$e)),n.dispatchEvent($o),s=i.NONE}function gt(y){te(y)}function Ke(y){let Y;switch(y.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Xn.DOLLY:if(n.enableZoom===!1)return;Z(y),s=i.DOLLY;break;case Xn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;k(y),s=i.PAN}else{if(n.enableRotate===!1)return;j(y),s=i.ROTATE}break;case Xn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;j(y),s=i.ROTATE}else{if(n.enablePan===!1)return;k(y),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Rr)}function Pe(y){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;I(y);break;case i.DOLLY:if(n.enableZoom===!1)return;O(y);break;case i.PAN:if(n.enablePan===!1)return;$(y);break}}function Bt(y){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(y.preventDefault(),n.dispatchEvent(Rr),J(y),n.dispatchEvent($o))}function xt(y){n.enabled===!1||n.enablePan===!1||K(y)}function F(y){switch(oe(y),_.length){case 1:switch(n.touches.ONE){case qn.ROTATE:if(n.enableRotate===!1)return;de(),s=i.TOUCH_ROTATE;break;case qn.PAN:if(n.enablePan===!1)return;Ae(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case qn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(),s=i.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Rr)}function C(y){switch(oe(y),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(y),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(y),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(y),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(y),n.update();break;default:s=i.NONE}}function V(y){n.enabled!==!1&&y.preventDefault()}function Q(y){_.push(y)}function te(y){delete M[y.pointerId];for(let Y=0;Y<_.length;Y++)if(_[Y].pointerId==y.pointerId){_.splice(Y,1);return}}function oe(y){let Y=M[y.pointerId];Y===void 0&&(Y=new ee,M[y.pointerId]=Y),Y.set(y.pageX,y.pageY)}function ge(y){const Y=y.pointerId===_[0].pointerId?_[1]:_[0];return M[Y.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",gt),n.domElement.addEventListener("wheel",Bt,{passive:!1}),this.update()}}class rm extends ks{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new H0(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new am(e)}}class am{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=om(e,t,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function om(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=lm(h,i,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function lm(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new $0;let a,l,c,h,u,f,p,g;if(s.o){const m=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let d=0,x=m.length;d<x;)switch(m[d++]){case"m":a=m[d++]*e+t,l=m[d++]*e+n,o.moveTo(a,l);break;case"l":a=m[d++]*e+t,l=m[d++]*e+n,o.lineTo(a,l);break;case"q":c=m[d++]*e+t,h=m[d++]*e+n,u=m[d++]*e+t,f=m[d++]*e+n,o.quadraticCurveTo(u,f,c,h);break;case"b":c=m[d++]*e+t,h=m[d++]*e+n,u=m[d++]*e+t,f=m[d++]*e+n,p=m[d++]*e+t,g=m[d++]*e+n,o.bezierCurveTo(u,f,p,g,c,h);break}}return{offsetX:s.ha*e,path:o}}class Xi extends Ne{constructor(){super(Xi.Geometry,new Ot({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new b,t=new b,n=new Oo(16,16,Tt),i=new Oo(16,16,Tt),s=Xi.Geometry,o=new Lr({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),a=new Lr({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new Ne(s,o),c=[],h=Gn.Shader,u=new Lr({uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new Se(16777215)},scale:{value:new ee},screenPosition:{value:new b}},vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:mi,transparent:!0,depthWrite:!1}),f=new Ne(s,u);this.addElement=function(x){c.push(x)};const p=new ee,g=new ee,m=new J0,d=new Oe;this.onBeforeRender=function(x,v,D){x.getCurrentViewport(d);const E=d.w/d.z,_=d.z/2,M=d.w/2;let T=16/d.w;if(p.set(T*E,T),m.min.set(d.x,d.y),m.max.set(d.x+(d.z-16),d.y+(d.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(D.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(D.projectionMatrix),g.x=d.x+e.x*_+_-8,g.y=d.y+e.y*M+M-8,m.containsPoint(g))){x.copyFramebufferToTexture(g,n);let A=o.uniforms;A.scale.value=p,A.screenPosition.value=e,x.renderBufferDirect(D,null,s,o,l,null),x.copyFramebufferToTexture(g,i),A=a.uniforms,A.scale.value=p,A.screenPosition.value=e,x.renderBufferDirect(D,null,s,a,l,null);const S=-e.x*2,P=-e.y*2;for(let q=0,re=c.length;q<re;q++){const z=c[q],L=u.uniforms;L.color.value.copy(z.color),L.map.value=z.texture,L.screenPosition.value.x=e.x+S*z.distance,L.screenPosition.value.y=e.y+P*z.distance,T=z.size/d.w;const W=d.w/d.z;L.scale.value.set(T*W,T),u.uniformsNeedUpdate=!0,x.renderBufferDirect(D,null,s,u,f,null)}}},this.dispose=function(){o.dispose(),a.dispose(),u.dispose(),n.dispose(),i.dispose();for(let x=0,v=c.length;x<v;x++)c[x].texture.dispose()}}}class Gn{constructor(e,t=1,n=0,i=new Se(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}Gn.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};Xi.Geometry=function(){const r=new pt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new l0(e,5);return r.setIndex([0,1,2,0,2,3]),r.setAttribute("position",new Ls(t,3,0,!1)),r.setAttribute("uv",new Ls(t,2,3,!1)),r}();const Ns=class{static createButton(e){const t=document.createElement("button");function n(){let l=null;async function c(u){u.addEventListener("end",h),await e.xr.setSession(u),t.textContent="EXIT VR",l=u}function h(){l.removeEventListener("end",h),t.textContent="ENTER VR",l=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(l===null){const u={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",u).then(c)}else l.end()}}function i(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function s(){i(),t.textContent="VR NOT SUPPORTED"}function o(l){i(),console.warn("Exception when trying to call xr.isSessionSupported",l),t.textContent="VR NOT ALLOWED"}function a(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",a(t),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?n():s(),l&&Ns.xrSessionIsGranted&&t.click()}).catch(o),t;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",a(l),l}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Ns.xrSessionIsGranted=!0})}}};let Ui=Ns;Ca(Ui,"xrSessionIsGranted",!1);Ui.registerSessionGrantedListener();const cm="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",hm="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=0.7-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.3,0.6,1.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere,1.0);}",um="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",dm="varying vec3 vertexNormal;void main(){float intensity=pow(0.1-dot(vertexNormal,vec3(0.0,0.0,1.0)),1.1);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}",fm="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",pm="varying vec3 vertexNormal;void main(){float intensity=pow(0.1-dot(vertexNormal,vec3(0.0,0.0,1.0)),10.0);gl_FragColor=vec4(1.0,1.0,0.4,1.0)*intensity;}",mm="/Planet/assets/terrain8k.d5bba463.jpg",gm="/Planet/assets/normal8k.fc4444fd.jpg",xm="/Planet/assets/roughness2k.06c786a2.jpg",Am="/Planet/assets/clouds1.66e34b75.png",_m="/Planet/assets/clouds1alpha.b508fdf6.jpg",Rl="/Planet/assets/clouds2.dec6ecfe.png",vm="/Planet/assets/star.71d593a7.png",Em="/Planet/assets/moon.b246064f.jpg",Cm="/Planet/assets/moon2.29310b47.png",Dm="/Planet/assets/moon3.d1a182f0.png",ym="https://jaranolsen.github.io/Planet/SourceSans3_Regular.json",Il=document.querySelector("#c"),fi=new _l({canvas:Il,antialias:!0});fi.xr.enabled=!0;function Bm(r){const e=r.domElement,t=e.clientWidth,n=e.clientHeight,i=e.width!==t||e.height!==n;return i&&r.setSize(t,n,!1),i}const Fm=50,Mm=2,Sm=.1,bm=2e3,nt=new Et(Fm,Mm,Sm,bm);nt.position.z=500;const Wt=new sm(nt,Il);Wt.enablePan=!1;Wt.maxDistance=1e3;Wt.minDistance=5.2;Wt.zoomSpeed=.3;Wt.rotateSpeed=.3;Wt.target.set(0,0,0);Wt.update();const An=new o0,Ss=new ee;new b;const Rs=new Z0;let bn=null;const Ri=new b(0,0,0);document.body.appendChild(Ui.createButton(fi));let Nl=!1;const Ws=document.getElementById("introTune");Ws.preload="auto";Ws.currentTime=1.4;Ws.volume=.25;const pa=document.getElementById("introSpeech");pa.preload="auto";pa.currentTime=1.4;const Zr=document.getElementById("playbutton"),zl=document.getElementById("credits");Zr.addEventListener("click",()=>{Ws.play(),setTimeout(function(){pa.play()},4e4),Nl=!0,Zr.style.display="none",Jr.style.display="none",zl.style.display="none"});const Jr=document.getElementById("skipbutton");Jr.addEventListener("click",()=>{Zr.style.display="none",Jr.style.display="none",zl.style.display="none",nt.position.z=15});let $r;const wm=document.querySelectorAll("[data-carousel-button]");wm.forEach(r=>{r.addEventListener("click",()=>{if(document.querySelector(".carousel"),r.dataset.carouselButton==="exit")$r.style.display="none";else{const e=r.dataset.carouselButton==="next"?1:-1,t=r.closest("[data-carousel]").querySelector("[data-slides]"),n=t.querySelector("[data-active]");let i=[...t.children].indexOf(n)+e;t.children[i].dataset.active=!0,delete n.dataset.active}})});const Ol=new pt,Tm=new El({size:5,map:new Hs().load(vm),transparent:!0}),Ul=[];for(let r=0;r<1e4;r++){const e=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(t)+Math.abs(n)>400&&Ul.push(e,t,n)}Ol.setAttribute("position",new it(Ul,3));const Lm=new h0(Ol,Tm);An.add(Lm);const Ci=new ke;An.add(Ci);const Xs=new ke,qs=new ke,Ys=new ke,Di=new ke;Xs.rotation.y=-Math.PI/2.5;qs.rotation.y=2*Math.PI/16;Ys.rotation.y=2*Math.PI/2;Di.rotation.y=5*Math.PI/3;Di.rotation.x=-.9;Ci.add(Xs);Ci.add(qs);Ci.add(Ys);Ci.add(Di);const sn=new Hs;let Pm=sn.load(mm);const Vl=new Ct(5,250,250);Vl.computeBoundingSphere();const yt=new Ne(Vl,new Tl({map:Pm,normalMap:sn.load(gm),roughnessMap:sn.load(xm),metalness:0,flatShading:!1,side:gn}));An.add(yt);const Gl=new Ne(new Ct(5.03,50,50),new ua({alphaMap:sn.load(_m),map:sn.load(Am),transparent:!0,side:ut}));yt.add(Gl);const kl=new Ne(new Ct(5.04,50,50),new ua({map:sn.load(Rl),transparent:!0,side:ut,opacity:.5}));yt.add(kl);const ma=new Ne(new Ct(5.05,50,50),new ua({map:sn.load(Rl),transparent:!0,side:ut,opacity:.5}));yt.add(ma);ma.rotateY(Math.PI/2);const Hl=new Ne(new Ct(5,250,250),new Vt({vertexShader:cm,fragmentShader:hm,blending:mi}));Hl.position.set(0,0,0);yt.add(Hl);const ga=new Ne(new Ct(5.3,50,50),new Vt({vertexShader:um,fragmentShader:dm,blending:mi,side:mt,transparent:!0,depthWrite:!1}));ga.position.set(0,0,0);ga.scale.set(1.2,1.2,1.2);yt.add(ga);function Rm(r,e,t,n){let s=new Hs().load(r);const o=new Ot({map:s,transparent:!0,side:ut});let a=.01,l=0,c=0,h=n,u=n,f=new In;f.moveTo(l,c+a),f.lineTo(l,c+u-a),f.quadraticCurveTo(l,c+u,l+a,c+u),f.lineTo(l+h-a,c+u),f.quadraticCurveTo(l+h,c+u,l+h,c+u-a),f.lineTo(l+h,c+a),f.quadraticCurveTo(l+h,c,l+h-a,c),f.lineTo(l+a,c),f.quadraticCurveTo(l,c,l,c+a);const p=new vi(f);var g=p.attributes.uv;let m=1/0,d=0;for(var x=0;x<g.count;x++){let T=g.getX(x),A=g.getY(x);m=Math.min(m,T,A),d=Math.max(d,T,A)}for(var x=0;x<g.count;x++){let A=g.getX(x),S=g.getY(x);A=Ts.mapLinear(A,m,d,0,1),S=Ts.mapLinear(S,m,d,0,1),g.setXY(x,A,S)}p.computeBoundingBox();const v=-.5*(p.boundingBox.max.x-p.boundingBox.min.x),D=-.5*(p.boundingBox.max.y-p.boundingBox.min.y);p.translate(v,D*0,0);let E=new Ne(p,o),_=wt(e,t,5.06),M=new b(_.x,_.y,_.z);E.lookAt(M),E.position.copy(M),yt.add(E)}for(let r=0;r<wi.length;r++)Rm(wi[r][1],wi[r][2],wi[r][3]-180,wi[r][4]/500);const Im=new rm;Im.load(ym,function(r){function e(t,n,i,s,o,a){const l=new Ot({color:0,transparent:!1,side:ut}),c=new Ot({color:s,transparent:!0,opacity:.65,side:ut}),h=r.generateShapes(t,100),u=new vi(h);u.computeBoundingBox();const f=-.5*(u.boundingBox.max.x-u.boundingBox.min.x),p=.5*(u.boundingBox.max.y-u.boundingBox.min.y);u.translate(f,p*2,0);const g=new Ne(u,l),m=5.06;let d=wt(n,i,m),x=new b(d.x,d.y,d.z);g.lookAt(x),g.position.x=d.x,g.position.y=d.y,g.position.z=d.z,g.scale.x=a,g.scale.y=a,g.scale.z=a;const v=200,D=0;let E=a*125,_=0,M=0,T=(Math.abs(u.boundingBox.min.x)+Math.abs(u.boundingBox.max.x)+v)*a,A=(Math.abs(u.boundingBox.min.y)+Math.abs(u.boundingBox.max.y)+D)*a,S=new In;S.moveTo(_,M+E),S.lineTo(_,M+A-E),S.quadraticCurveTo(_,M+A,_+E,M+A),S.lineTo(_+T-E,M+A),S.quadraticCurveTo(_+T,M+A,_+T,M+A-E),S.lineTo(_+T,M+E),S.quadraticCurveTo(_+T,M,_+T-E,M),S.lineTo(_+E,M),S.quadraticCurveTo(_,M,_,M+E);const P=new vi(S);var q=P.attributes.uv;let re=1/0,z=0;for(var L=0;L<q.count;L++){let O=q.getX(L),$=q.getY(L);re=Math.min(re,O,$),z=Math.max(z,O,$)}for(var L=0;L<q.count;L++){let $=q.getX(L),J=q.getY(L);$=Ts.mapLinear($,re,z,0,1),J=Ts.mapLinear(J,re,z,0,1),q.setXY(L,$,J)}P.computeBoundingBox();const W=-.5*(P.boundingBox.max.x-P.boundingBox.min.x),j=-.5*(P.boundingBox.max.y-P.boundingBox.min.y);P.translate(W,j*0,0);let Z=new Ne(P,c),k=wt(n,i,m-.01),I=new b(k.x,k.y,k.z);Z.lookAt(I),Z.position.copy(I),yt.add(Z),yt.add(g)}for(let t=0;t<ze.length;t++)e(ze[t][1],ze[t][2],ze[t][3]-180,ze[t][4],ze[t][4],ze[t][5]/1e5)});let Is=[];function Nm(r,e,t,n,i,s,o){let a=Math.floor(s*750);o==!0&&(a=Math.floor(s*750/3));const l=new Ne(new Ct(s,a,a),new Ot({color:n,wireframe:o}));new Ne(new Ct(s/2,a,a),new Ot({color:16777215})),new Ne(new Ct(s/2,a,a),new Ot({color:0})),i=i;let h=wt(e,t,5.01);return l.position.set(h.x,h.y,h.z),yt.add(l),Is.push(l),{pin:l,originalColor:i}}let pn=[];for(let r=0;r<ze.length;r++){let e;ze[r][6]==null?e=!1:e=!0;let t=Nm(ze[r][1],ze[r][2],ze[r][3]-180,ze[r][4],ze[r][4],ze[r][5]/1500,e);pn.push(t)}let zm=1e-4,Om=3,Um=.03,Kr=5.01;for(let r=0;r<ze.length;r++)for(let e=0;e<ys.length;e++)if(ze[r][0]==ys[e][0]){for(let t=1;t<ys[e].length;t++)for(let n=0;n<ze.length;n++)if(ze[n][0]==ys[e][t]){let i=wt(ze[r][2],ze[r][3]-180,Kr),s=wt(ze[n][2],ze[n][3]-180,Kr);const o=(ze[r][5]+ze[n][5])/2;Vm(i,s,o)}}function Vm(r,e,t){let n=new b(r.x,r.y,r.z),i=new b(e.x,e.y,e.z),s=[];for(let h=0;h<=20;h++){let u=new b().lerpVectors(n,i,h/20);u.normalize(),u.multiplyScalar(Kr+Um*Math.sin(Math.PI*h/20)),s.push(u)}let o=new Cl(s);const a=new ha(o,20,zm*t,Om,!1),l=new Ot({color:16777215,transparent:!0,opacity:.25}),c=new Ne(a,l);c.renderOrder=-10,yt.add(c)}const Gm=new Ct(25,50,50),km=new Vt({vertexShader:fm,fragmentShader:pm,blending:mi,transparent:!0,side:mt,lights:!1}),xa=new Ne(Gm,km);xa.position.set(0,0,490);Di.add(xa);const Aa=new fa(16777215,1.2,2e3);Aa.position.copy(xa.position);Di.add(Aa);const Hm=sn.load("https://jaranolsen.github.io/Planet/lensflare0.png"),js=sn.load("https://jaranolsen.github.io/Planet/lensflare3.png"),yi=new Xi;yi.addElement(new Gn(Hm,2560,0));yi.addElement(new Gn(js,60,.6));yi.addElement(new Gn(js,70,.7));yi.addElement(new Gn(js,120,.9));yi.addElement(new Gn(js,70,1));Aa.add(yi);class _a{constructor(e,t,n,i,s,o){this.radius=e,this.texture=t,this.z=n,this.rotation=i,this.pivot=s,this.intensity=o}}let Wm=new _a(1.5,Em,110,-5e-4,Xs,.1),Xm=new _a(2.5,Cm,190,-3e-4,qs,.05),qm=new _a(1,Dm,250,-1e-4,Ys,.005),Bn=[Wm,Xm,qm];for(let r=0;r<Bn.length;r++){const e=new Ne(new Ct(Bn[r].radius,50,50),new Tl({map:new Hs().load(Bn[r].texture),metalness:0,flatShading:!1,side:gn}));e.position.set(Bn[r].z,0,0),Bn[r].pivot.add(e);const t=new fa(16777215,Bn[r].intensity);t.position.set(Bn[r].z,0,0),e.add(t)}class Ym{constructor(e,t,n){this.lat=e,this.lng=t,this.heading=n;let i=.005;this.shape=new In,this.shape.moveTo(i*5,i*5),this.shape.bezierCurveTo(i*5,i*5,i*4,0,0,0),this.shape.bezierCurveTo(-i*6,0,-i*6,i*7,-i*6,i*7),this.shape.bezierCurveTo(-i*6,i*11,-i*3,i*15.4,i*5,i*19),this.shape.bezierCurveTo(i*12,i*15.4,i*16,i*11,i*16,i*7),this.shape.bezierCurveTo(i*16,i*7,i*16,0,i*10,0),this.shape.bezierCurveTo(i*7,0,i*5,i*5,i*5,i*5),this.geometry=new vi(this.shape),this.geometry.computeBoundingSphere(),this.center=this.geometry.boundingSphere.center,this.shapePosition=this.geometry.position,this.geometry.rotateZ(Math.PI/2),this.material=new Ot({color:14540253,side:ut}),this.mesh=new Ne(this.geometry,this.material),this.mesh.geometry.center(),this.mesh.position.copy(this.center),this.position=new ee(e,t),this.velocity=new ee(Bs(-1,1),Bs(-1,1)).setLength(.01),this.acceleration=new ee,this.cartesianPosition=wt(this.position.x,this.position.y,5.1),this.cartesianHeading=wt(this.position.x+this.velocity.x,this.position.y+this.velocity.y,5.1),this.mesh.position.set(this.cartesianPosition.x,this.cartesianPosition.y,this.cartesianPosition.z),this.mat=new vl({color:16711680}),this.points=[],this.points.push(this.cartesianPosition.x),this.points.push(this.cartesianHeading),this.geo=new pt().setFromPoints(this.points),this.velocityVector=new c0(this.geo,this.mat),this.velocityVector.geometry.attributes.position.needsUpdate=!0,An.add(this.velocityVector),this.wander=new ee(0,0),this.alignment=new ee(0,0),this.alignmentPerception=.1,this.cohesion=new ee(0,0),this.cohesionPerception=.1,this.separation=new ee(0,0),this.separationPerception=.2,this.maxForce=.1,this.maxSpeed=.1,this.velocity.setLength(this.maxSpeed),An.add(this.mesh)}move(){this.acceleration.set(0,0),this.acceleration.add(this.wander),this.acceleration.add(this.alignment),this.acceleration.add(this.cohesion),this.acceleration.add(this.separation),this.position.add(this.velocity),this.velocity.add(this.acceleration),this.velocity.clampLength(-this.maxSpeed,this.maxSpeed),this.velocity.setLength(this.maxSpeed),this.position.x<0&&(this.position.x=Math.abs(this.position.x),this.position.y+=180,this.velocity.x*=-1,this.velocity.y*=-1),this.position.x>180&&(this.position.x=180-(this.position.x-180),this.position.y-=180,this.velocity.x*=-1,this.velocity.y*=-1),this.position.y<0&&(this.position.y=360+this.position.y),this.position.y>360&&(this.position.y=this.position.y-360),this.cartesianPosition=wt(this.position.x,this.position.y,5.1),this.cartesianVelocity=wt(this.velocity.x,this.velocity.y,5.1),this.cartesianHeading=wt(this.position.x+this.velocity.x*200,this.position.y+this.velocity.y*200,5.1),this.mesh.position.set(this.cartesianPosition.x,this.cartesianPosition.y,this.cartesianPosition.z),this.mesh.lookAt(Ri),this.points.length=0,this.points.push(this.cartesianPosition),this.points.push(this.cartesianHeading),this.velocityVector.geometry.setFromPoints(this.points)}calculateWander(){this.wander.set(Bs(-.01,.01),Bs(-.01,.01))}calculateAlignment(){let e=0;for(let t=0;t<Je.length;t++)Je[t]!=this&&this.mesh.position.distanceTo(Je[t].mesh.position)<this.alignmentPerception&&(this.alignment.add(Je[t].velocity),e+=1);e>0&&this.alignment.set(this.alignment.x/e,this.alignment.y/e),this.alignment.sub(this.velocity),this.alignment.clampLength(-this.maxForce,this.maxForce)}calculateCohesion(){let e=0;for(let t=0;t<Je.length;t++)Je[t]!=this&&this.mesh.position.distanceTo(Je[t].mesh.position)<this.cohesionPerception&&(this.cohesion.add(Je[t].position),e+=1);e>0&&this.cohesion.set(this.cohesion.x/e,this.cohesion.y/e),this.cohesion.sub(this.position),this.cohesion.clampLength(-this.maxForce,this.maxForce)}calculateSeparation(){let e=0;for(let t=0;t<Je.length;t++)if(Je[t]!=this&&this.mesh.position.distanceTo(Je[t].mesh.position)<this.separationPerception){let n=new ee(this.position.x-Je[t].position.x,this.position.y-Je[t].position.y);this.separation.add(n),e+=1}e>0&&this.separation.set(this.separation.x/e,this.separation.y/e),this.separation.clampLength(-this.maxForce,this.maxForce)}}let Je=[];for(let r=0;r<50;r++){let e=Pl(10,170,5),t=nm(0,359);Je.push(new Ym(e,t))}const jm=new j0(16777215,.02);An.add(jm);const pi=new Y0(16777215,0);An.add(pi);let Zm=.5;const Wl=new fa(16777215,.5);Wl.position.set(0,0,0);yt.add(Wl);function Jm(){for(let r=0;r<pn.length;r++)pn[r].pin.material.color.set(pn[r].originalColor)}function $m(){Rs.setFromCamera(Ss,nt);const r=Rs.intersectObjects(Is);for(let e=0;e<r.length;e++)r[e].object.material.color.set(16711680)}document.addEventListener("keyup",Km,!1);function Km(r){r.which==76&&(pi.intensity==0?pi.intensity=Zm:pi.intensity=0)}document.addEventListener("keydown",Qm,!1);function Qm(r){const e=r.which;if(bn!=null){let t=im(bn.position.x,bn.position.y,bn.position.z);e==38?t.lat-=.3:e==40?t.lat+=.3:e==37?t.lng-=.3:e==39&&(t.lng+=.3);const n=5.01;let i=wt(t.lat,t.lng,n);bn.position.set(i.x,i.y,i.z)}}const Ti=[];let Ko;const eg=document.querySelector("#fpsCounter"),Xl=document.createElement("div");function ql(){window.requestAnimationFrame(()=>{const r=performance.now();for(;Ti.length>0&&Ti[0]<=r-1e3;)Ti.shift();Ti.push(r),Ko=Ti.length,Xl.textContent=Ko,ql()})}eg.appendChild(Xl);ql();function tg(){fi.setAnimationLoop(ng)}function ng(r){if(Bm(fi)){const s=fi.domElement;nt.aspect=s.clientWidth/s.clientHeight,nt.updateProjectionMatrix()}for(let s=0;s<Je.length;s++)Je[s].calculateWander(),Je[s].calculateAlignment(),Je[s].calculateCohesion(),Je[s].calculateSeparation(),Je[s].move();function e(s){Ss.x=s.clientX/window.innerWidth*2-1,Ss.y=-(s.clientY/window.innerHeight)*2+1}function t(s){Rs.setFromCamera(Ss,nt);const o=Rs.intersectObjects(Is);if(o.length>0&&(bn=o[0].object,nt.position.distanceTo(bn.position)<3)){const a=Is.findIndex(c=>c==o[0].object),l=ze[a][6];$r=document.querySelector(`.carousel.s${l}`),$r.style.display="block"}}window.addEventListener("pointermove",e),window.addEventListener("click",t),Jm(),$m(),fi.render(An,nt);const n=nt.position,i=nt.rotation;pi.position.set(n.x,n.y,n.z),pi.rotation.set(i.x,i.y,i.z),Ci.rotation.y+=-1e-5,Xs.rotation.y+=-3e-4,qs.rotation.y+=-3e-5,Ys.rotation.y+=-3e-6,Di.rotation.y+=1e-4,Gl.rotation.y+=1e-5,kl.rotation.y+=5e-5,ma.rotation.y+=1e-4,nt.position.z>15&&Nl==!0&&(nt.position.z-=1e-4*Math.pow(nt.position.z-10,1.35),yt.rotation.y+=5e-4);for(let s=0;s<pn.length;s++)pn[s].pin.material.wireframe==!0&&(pn[s].pin.rotation.y+=.002,pn[s].pin.rotation.x+=.001);Wt.rotateSpeed=(nt.position.distanceTo(Ri)-5)/nt.position.distanceTo(Ri),Wt.zoomSpeed=(nt.position.distanceTo(Ri)-5)/nt.position.distanceTo(Ri)/3,Wt.update()}tg();
