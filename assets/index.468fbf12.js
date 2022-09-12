(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gr="144",Un={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bl=0,ra=1,wl=2,To=1,Tl=2,Di=3,cn=0,At=1,at=2,ln=0,si=1,_s=2,aa=3,oa=4,Ll=5,ti=100,Pl=101,Rl=102,la=103,ca=104,Il=200,Nl=201,Ol=202,zl=203,Lo=204,Po=205,Ul=206,Gl=207,kl=208,Vl=209,Hl=210,Wl=0,ql=1,Xl=2,Dr=3,Yl=4,jl=5,Zl=6,Jl=7,kr=0,$l=1,Kl=2,jt=0,Ql=1,ec=2,tc=3,nc=4,ic=5,Ro=300,li=301,ci=302,Br=303,yr=304,Fs=306,Mr=1e3,Lt=1001,Fr=1002,ut=1003,ha=1004,ua=1005,Bt=1006,sc=1007,Ss=1008,Fn=1009,rc=1010,ac=1011,Io=1012,oc=1013,vn=1014,Cn=1015,wi=1016,lc=1017,cc=1018,ri=1020,hc=1021,uc=1022,It=1023,dc=1024,fc=1025,Bn=1026,hi=1027,pc=1028,mc=1029,gc=1030,xc=1031,Ac=1033,ks=33776,Vs=33777,Hs=33778,Ws=33779,da=35840,fa=35841,pa=35842,ma=35843,_c=36196,ga=37492,xa=37496,Aa=37808,_a=37809,Ea=37810,va=37811,Ca=37812,Da=37813,Ba=37814,ya=37815,Ma=37816,Fa=37817,Sa=37818,ba=37819,wa=37820,Ta=37821,La=36492,Sn=3e3,ke=3001,Ec=3200,vc=3201,Vr=0,Cc=1,Xt="srgb",Dn="srgb-linear",qs=7680,Dc=519,Pa=35044,Ra="300 es",Sr=1035;class Pn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const it=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ia=1234567;const Mi=Math.PI/180,Es=180/Math.PI;function Rn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(it[s&255]+it[s>>8&255]+it[s>>16&255]+it[s>>24&255]+"-"+it[e&255]+it[e>>8&255]+"-"+it[e>>16&15|64]+it[e>>24&255]+"-"+it[t&63|128]+it[t>>8&255]+"-"+it[t>>16&255]+it[t>>24&255]+it[n&255]+it[n>>8&255]+it[n>>16&255]+it[n>>24&255]).toLowerCase()}function tt(s,e,t){return Math.max(e,Math.min(t,s))}function Hr(s,e){return(s%e+e)%e}function Bc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function yc(s,e,t){return s!==e?(t-s)/(e-s):0}function Fi(s,e,t){return(1-t)*s+t*e}function Mc(s,e,t,n){return Fi(s,e,1-Math.exp(-t*n))}function Fc(s,e=1){return e-Math.abs(Hr(s,e*2)-e)}function Sc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function wc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Tc(s,e){return s+Math.random()*(e-s)}function Lc(s){return s*(.5-Math.random())}function Pc(s){s!==void 0&&(Ia=s);let e=Ia+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rc(s){return s*Mi}function Ic(s){return s*Es}function br(s){return(s&s-1)===0&&s!==0}function Nc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Oc(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Cs=Object.freeze({__proto__:null,DEG2RAD:Mi,RAD2DEG:Es,generateUUID:Rn,clamp:tt,euclideanModulo:Hr,mapLinear:Bc,inverseLerp:yc,lerp:Fi,damp:Mc,pingpong:Fc,smoothstep:Sc,smootherstep:bc,randInt:wc,randFloat:Tc,randFloatSpread:Lc,seededRandom:Pc,degToRad:Rc,radToDeg:Ic,isPowerOfTwo:br,ceilPowerOfTwo:Nc,floorPowerOfTwo:vs,setQuaternionFromProperEuler:Oc,normalize:ct,denormalize:Bi});class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],m=i[0],f=i[3],x=i[6],E=i[1],y=i[4],C=i[7],_=i[2],S=i[5],T=i[8];return r[0]=o*m+a*E+l*_,r[3]=o*f+a*y+l*S,r[6]=o*x+a*C+l*T,r[1]=c*m+h*E+u*_,r[4]=c*f+h*y+u*S,r[7]=c*x+h*C+u*T,r[2]=d*m+p*E+g*_,r[5]=d*f+p*y+g*S,r[8]=d*x+p*C+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*o)*m,e[3]=d*m,e[4]=(h*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*r+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*r+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function No(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ti(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Xs={[Xt]:{[Dn]:yn},[Dn]:{[Xt]:ps}},St={legacyMode:!0,get workingColorSpace(){return Dn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Xs[e]&&Xs[e][t]!==void 0){const n=Xs[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Oo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Je={r:0,g:0,b:0},bt={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function Ys(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function ki(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Dn){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Dn){if(e=Hr(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ys(o,r,e+1/3),this.g=Ys(o,r,e),this.b=Ys(o,r,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,St.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,St.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,St.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,St.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Xt){const n=Oo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return St.fromWorkingColorSpace(ki(this,Je),e),tt(Je.r*255,0,255)<<16^tt(Je.g*255,0,255)<<8^tt(Je.b*255,0,255)<<0}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dn){St.fromWorkingColorSpace(ki(this,Je),t);const n=Je.r,i=Je.g,r=Je.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Dn){return St.fromWorkingColorSpace(ki(this,Je),t),e.r=Je.r,e.g=Je.g,e.b=Je.b,e}getStyle(e=Xt){return St.fromWorkingColorSpace(ki(this,Je),e),e!==Xt?`color(${e} ${Je.r} ${Je.g} ${Je.b})`:`rgb(${Je.r*255|0},${Je.g*255|0},${Je.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(bt),bt.h+=e,bt.s+=t,bt.l+=n,this.setHSL(bt.h,bt.s,bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bt),e.getHSL(Gi);const n=Fi(bt.h,Gi.h,t),i=Fi(bt.s,Gi.s,t),r=Fi(bt.l,Gi.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Te.NAMES=Oo;let kn;class zo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kn===void 0&&(kn=Ti("canvas")),kn.width=e.width,kn.height=e.height;const n=kn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ti("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=yn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Uo{constructor(e=null){this.isSource=!0,this.uuid=Rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(js(i[o].image)):r.push(js(i[o]))}else r=js(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zc=0;class Mt extends Pn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Lt,i=Lt,r=Bt,o=Ss,a=It,l=Fn,c=1,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Rn(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Ro;class Oe{constructor(e=0,t=0,n=0,i=1){Oe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,C=(p+1)/2,_=(x+1)/2,S=(h+d)/4,T=(u+m)/4,A=(g+f)/4;return y>C&&y>_?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=S/n,r=T/n):C>_?C<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(C),n=S/i,r=A/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=T/r,i=A/r),this.set(n,i,r,t),this}let E=Math.sqrt((f-g)*(f-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(u-m)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bn extends Pn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Go extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(u!==m||l!==d||c!==p||h!==g){let f=1-a;const x=l*d+c*p+h*g+u*m,E=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const _=Math.sqrt(y),S=Math.atan2(_,x*E);f=Math.sin(f*S)/_,a=Math.sin(a*S)/_}const C=a*E;if(l=l*f+d*C,c=c*f+p*C,h=h*f+g*C,u=u*f+m*C,f===1-a){const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Na.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Na.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-r*i,u=l*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zs.copy(this).projectOnVector(e),this.sub(Zs)}reflect(e){return this.sub(Zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new b,Na=new wn;class Ii{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)fn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(fn)}else n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox),Js.applyMatrix4(e.matrixWorld),this.union(Js);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Vi.subVectors(this.max,gi),Vn.subVectors(e.a,gi),Hn.subVectors(e.b,gi),Wn.subVectors(e.c,gi),en.subVectors(Hn,Vn),tn.subVectors(Wn,Hn),pn.subVectors(Vn,Wn);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-pn.z,pn.y,en.z,0,-en.x,tn.z,0,-tn.x,pn.z,0,-pn.x,-en.y,en.x,0,-tn.y,tn.x,0,-pn.y,pn.x,0];return!$s(t,Vn,Hn,Wn,Vi)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,Vn,Hn,Wn,Vi))?!1:(Hi.crossVectors(en,tn),t=[Hi.x,Hi.y,Hi.z],$s(t,Vn,Hn,Wn,Vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gt=[new b,new b,new b,new b,new b,new b,new b,new b],fn=new b,Js=new Ii,Vn=new b,Hn=new b,Wn=new b,en=new b,tn=new b,pn=new b,gi=new b,Vi=new b,Hi=new b,mn=new b;function $s(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){mn.fromArray(s,r);const a=i.x*Math.abs(mn.x)+i.y*Math.abs(mn.y)+i.z*Math.abs(mn.z),l=e.dot(mn),c=t.dot(mn),h=n.dot(mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Gc=new Ii,Oa=new b,Wi=new b,Ks=new b;class bs{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ks.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Wi.set(0,0,1).multiplyScalar(e.radius):Wi.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Oa.copy(e.center).add(Wi)),this.expandByPoint(Oa.copy(e.center).sub(Wi)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kt=new b,Qs=new b,qi=new b,nn=new b,er=new b,Xi=new b,tr=new b;class Wr{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.direction).multiplyScalar(t).add(this.origin),kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qs.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),nn.copy(this.origin).sub(Qs);const r=e.distanceTo(t)*.5,o=-this.direction.dot(qi),a=nn.dot(this.direction),l=-nn.dot(qi),c=nn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(qi).multiplyScalar(d).add(Qs),p}intersectSphere(e,t){kt.subVectors(e.center,this.origin);const n=kt.dot(this.direction),i=kt.dot(kt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,n,i,r){er.subVectors(t,e),Xi.subVectors(n,e),tr.crossVectors(er,Xi);let o=this.direction.dot(tr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nn.subVectors(this.origin,e);const l=a*this.direction.dot(Xi.crossVectors(nn,Xi));if(l<0)return null;const c=a*this.direction.dot(er.cross(nn));if(c<0||l+c>o)return null;const h=-a*nn.dot(tr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,h,u,d,p,g,m,f){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=g,x[11]=m,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qn.setFromMatrixColumn(e,0).length(),r=1/qn.setFromMatrixColumn(e,1).length(),o=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,m=c*u;t[0]=d+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,m=c*u;t[0]=d-m*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,m=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*h,t[4]=m-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-m*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kc,e,Vc)}lookAt(e,t,n){const i=this.elements;return mt.subVectors(e,t),mt.lengthSq()===0&&(mt.z=1),mt.normalize(),sn.crossVectors(n,mt),sn.lengthSq()===0&&(Math.abs(n.z)===1?mt.x+=1e-4:mt.z+=1e-4,mt.normalize(),sn.crossVectors(n,mt)),sn.normalize(),Yi.crossVectors(mt,sn),i[0]=sn.x,i[4]=Yi.x,i[8]=mt.x,i[1]=sn.y,i[5]=Yi.y,i[9]=mt.y,i[2]=sn.z,i[6]=Yi.z,i[10]=mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],x=n[14],E=n[3],y=n[7],C=n[11],_=n[15],S=i[0],T=i[4],A=i[8],F=i[12],P=i[1],X=i[5],se=i[9],z=i[13],L=i[2],q=i[6],j=i[10],Z=i[14],V=i[3],I=i[7],O=i[11],$=i[15];return r[0]=o*S+a*P+l*L+c*V,r[4]=o*T+a*X+l*q+c*I,r[8]=o*A+a*se+l*j+c*O,r[12]=o*F+a*z+l*Z+c*$,r[1]=h*S+u*P+d*L+p*V,r[5]=h*T+u*X+d*q+p*I,r[9]=h*A+u*se+d*j+p*O,r[13]=h*F+u*z+d*Z+p*$,r[2]=g*S+m*P+f*L+x*V,r[6]=g*T+m*X+f*q+x*I,r[10]=g*A+m*se+f*j+x*O,r[14]=g*F+m*z+f*Z+x*$,r[3]=E*S+y*P+C*L+_*V,r[7]=E*T+y*X+C*q+_*I,r[11]=E*A+y*se+C*j+_*O,r[15]=E*F+y*z+C*Z+_*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],m=e[7],f=e[11],x=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+m*(+t*l*p-t*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+f*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+x*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],m=e[13],f=e[14],x=e[15],E=u*f*c-m*d*c+m*l*p-a*f*p-u*l*x+a*d*x,y=g*d*c-h*f*c-g*l*p+o*f*p+h*l*x-o*d*x,C=h*m*c-g*u*c+g*a*p-o*m*p-h*a*x+o*u*x,_=g*u*l-h*m*l-g*a*d+o*m*d+h*a*f-o*u*f,S=t*E+n*y+i*C+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=E*T,e[1]=(m*d*r-u*f*r-m*i*p+n*f*p+u*i*x-n*d*x)*T,e[2]=(a*f*r-m*l*r+m*i*c-n*f*c-a*i*x+n*l*x)*T,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*T,e[4]=y*T,e[5]=(h*f*r-g*d*r+g*i*p-t*f*p-h*i*x+t*d*x)*T,e[6]=(g*l*r-o*f*r-g*i*c+t*f*c+o*i*x-t*l*x)*T,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*p+t*l*p)*T,e[8]=C*T,e[9]=(g*u*r-h*m*r-g*n*p+t*m*p+h*n*x-t*u*x)*T,e[10]=(o*m*r-g*a*r+g*n*c-t*m*c-o*n*x+t*a*x)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*T,e[12]=_*T,e[13]=(h*m*i-g*u*i+g*n*d-t*m*d-h*n*f+t*u*f)*T,e[14]=(g*a*i-o*m*i-g*n*l+t*m*l+o*n*f-t*a*f)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,m=o*h,f=o*u,x=a*u,E=l*c,y=l*h,C=l*u,_=n.x,S=n.y,T=n.z;return i[0]=(1-(m+x))*_,i[1]=(p+C)*_,i[2]=(g-y)*_,i[3]=0,i[4]=(p-C)*S,i[5]=(1-(d+x))*S,i[6]=(f+E)*S,i[7]=0,i[8]=(g+y)*T,i[9]=(f-E)*T,i[10]=(1-(d+m))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=qn.set(i[0],i[1],i[2]).length();const o=qn.set(i[4],i[5],i[6]).length(),a=qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wt.copy(this);const c=1/r,h=1/o,u=1/a;return wt.elements[0]*=c,wt.elements[1]*=c,wt.elements[2]*=c,wt.elements[4]*=h,wt.elements[5]*=h,wt.elements[6]*=h,wt.elements[8]*=u,wt.elements[9]*=u,wt.elements[10]*=u,t.setFromRotationMatrix(wt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-r),u=(t+e)*l,d=(n+i)*c,p=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new b,wt=new Ve,kc=new b(0,0,0),Vc=new b(1,1,1),sn=new b,Yi=new b,mt=new b,za=new Ve,Ua=new wn;class Ni{constructor(e=0,t=0,n=0,i=Ni.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(za,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ni.DefaultOrder="XYZ";Ni.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class qr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hc=0;const Ga=new b,Xn=new wn,Vt=new Ve,ji=new b,xi=new b,Wc=new b,qc=new wn,ka=new b(1,0,0),Va=new b(0,1,0),Ha=new b(0,0,1),Xc={type:"added"},Wa={type:"removed"};class $e extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DefaultUp.clone();const e=new b,t=new Ni,n=new wn,i=new b(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new yt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=$e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$e.DefaultMatrixWorldAutoUpdate,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(ka,e)}rotateY(e){return this.rotateOnAxis(Va,e)}rotateZ(e){return this.rotateOnAxis(Ha,e)}translateOnAxis(e,t){return Ga.copy(e).applyQuaternion(this.quaternion),this.position.add(Ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ka,e)}translateY(e){return this.translateOnAxis(Va,e)}translateZ(e){return this.translateOnAxis(Ha,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Vt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ji.copy(e):ji.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vt.lookAt(xi,ji,this.up):Vt.lookAt(ji,xi,this.up),this.quaternion.setFromRotationMatrix(Vt),i&&(Vt.extractRotation(i.matrixWorld),Xn.setFromRotationMatrix(Vt),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Wa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,Wc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,qc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$e.DefaultUp=new b(0,1,0);$e.DefaultMatrixAutoUpdate=!0;$e.DefaultMatrixWorldAutoUpdate=!0;const Tt=new b,Ht=new b,nr=new b,Wt=new b,Yn=new b,jn=new b,qa=new b,ir=new b,sr=new b,rr=new b;class Yt{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tt.subVectors(e,t),i.cross(Tt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tt.subVectors(i,t),Ht.subVectors(n,t),nr.subVectors(e,t);const o=Tt.dot(Tt),a=Tt.dot(Ht),l=Tt.dot(nr),c=Ht.dot(Ht),h=Ht.dot(nr),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wt),Wt.x>=0&&Wt.y>=0&&Wt.x+Wt.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Wt),l.set(0,0),l.addScaledVector(r,Wt.x),l.addScaledVector(o,Wt.y),l.addScaledVector(a,Wt.z),l}static isFrontFacing(e,t,n,i){return Tt.subVectors(n,t),Ht.subVectors(e,t),Tt.cross(Ht).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tt.subVectors(this.c,this.b),Ht.subVectors(this.a,this.b),Tt.cross(Ht).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Yt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Yn.subVectors(i,n),jn.subVectors(r,n),ir.subVectors(e,n);const l=Yn.dot(ir),c=jn.dot(ir);if(l<=0&&c<=0)return t.copy(n);sr.subVectors(e,i);const h=Yn.dot(sr),u=jn.dot(sr);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Yn,o);rr.subVectors(e,r);const p=Yn.dot(rr),g=jn.dot(rr);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(jn,a);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return qa.subVectors(r,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(qa,a);const x=1/(f+m+d);return o=m*x,a=d*x,t.copy(n).addScaledVector(Yn,o).addScaledVector(jn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Yc=0;class In extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=si,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lo,this.blendDst=Po,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tn extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ye=new b,Zi=new le;class Nt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Pa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zi.fromBufferAttribute(this,t),Zi.applyMatrix3(e),this.setXY(t,Zi.x,Zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix3(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ko extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vo extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jc=0;const Dt=new Ve,ar=new $e,Zn=new b,gt=new Ii,Ai=new Ii,Qe=new b;class Ft extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(No(e)?Vo:ko)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return ar.lookAt(e),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];gt.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,gt.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,gt.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(gt.min),this.boundingBox.expandByPoint(gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(gt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(gt.min,Ai.min),gt.expandByPoint(Qe),Qe.addVectors(gt.max,Ai.max),gt.expandByPoint(Qe)):(gt.expandByPoint(Ai.min),gt.expandByPoint(Ai.max))}gt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Qe.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Qe));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Zn.fromBufferAttribute(e,c),Qe.add(Zn)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<a;P++)c[P]=new b,h[P]=new b;const u=new b,d=new b,p=new b,g=new le,m=new le,f=new le,x=new b,E=new b;function y(P,X,se){u.fromArray(i,P*3),d.fromArray(i,X*3),p.fromArray(i,se*3),g.fromArray(o,P*2),m.fromArray(o,X*2),f.fromArray(o,se*2),d.sub(u),p.sub(u),m.sub(g),f.sub(g);const z=1/(m.x*f.y-f.x*m.y);!isFinite(z)||(x.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(z),E.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(z),c[P].add(x),c[X].add(x),c[se].add(x),h[P].add(E),h[X].add(E),h[se].add(E))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let P=0,X=C.length;P<X;++P){const se=C[P],z=se.start,L=se.count;for(let q=z,j=z+L;q<j;q+=3)y(n[q+0],n[q+1],n[q+2])}const _=new b,S=new b,T=new b,A=new b;function F(P){T.fromArray(r,P*3),A.copy(T);const X=c[P];_.copy(X),_.sub(T.multiplyScalar(T.dot(X))).normalize(),S.crossVectors(A,X);const z=S.dot(h[P])<0?-1:1;l[P*4]=_.x,l[P*4+1]=_.y,l[P*4+2]=_.z,l[P*4+3]=z}for(let P=0,X=C.length;P<X;++P){const se=C[P],z=se.start,L=se.count;for(let q=z,j=z+L;q<j;q+=3)F(n[q+0]),F(n[q+1]),F(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new b,r=new b,o=new b,a=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),m=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,f),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*h;for(let x=0;x<h;x++)d[g++]=c[p++]}return new Nt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new Ve,Jn=new Wr,or=new bs,rn=new b,an=new b,on=new b,lr=new b,cr=new b,hr=new b,Ji=new b,$i=new b,Ki=new b,Qi=new le,es=new le,ts=new le,ur=new b,ns=new b;class We extends $e{constructor(e=new Ft,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),e.ray.intersectsSphere(or)===!1)||(Xa.copy(r).invert(),Jn.copy(e.ray).applyMatrix4(Xa),n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const x=p[m],E=i[x.materialIndex],y=Math.max(x.start,g.start),C=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let _=y,S=C;_<S;_+=3){const T=a.getX(_),A=a.getX(_+1),F=a.getX(_+2);o=is(this,E,e,Jn,l,c,h,u,d,T,A,F),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let x=m,E=f;x<E;x+=3){const y=a.getX(x),C=a.getX(x+1),_=a.getX(x+2);o=is(this,i,e,Jn,l,c,h,u,d,y,C,_),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const x=p[m],E=i[x.materialIndex],y=Math.max(x.start,g.start),C=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let _=y,S=C;_<S;_+=3){const T=_,A=_+1,F=_+2;o=is(this,E,e,Jn,l,c,h,u,d,T,A,F),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let x=m,E=f;x<E;x+=3){const y=x,C=x+1,_=x+2;o=is(this,i,e,Jn,l,c,h,u,d,y,C,_),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Zc(s,e,t,n,i,r,o,a){let l;if(e.side===At?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==at,a),l===null)return null;ns.copy(a),ns.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ns);return c<t.near||c>t.far?null:{distance:c,point:ns.clone(),object:s}}function is(s,e,t,n,i,r,o,a,l,c,h,u){rn.fromBufferAttribute(i,c),an.fromBufferAttribute(i,h),on.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(r&&d){Ji.set(0,0,0),$i.set(0,0,0),Ki.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const f=d[g],x=r[g];f!==0&&(lr.fromBufferAttribute(x,c),cr.fromBufferAttribute(x,h),hr.fromBufferAttribute(x,u),o?(Ji.addScaledVector(lr,f),$i.addScaledVector(cr,f),Ki.addScaledVector(hr,f)):(Ji.addScaledVector(lr.sub(rn),f),$i.addScaledVector(cr.sub(an),f),Ki.addScaledVector(hr.sub(on),f)))}rn.add(Ji),an.add($i),on.add(Ki)}s.isSkinnedMesh&&(s.boneTransform(c,rn),s.boneTransform(h,an),s.boneTransform(u,on));const p=Zc(s,e,t,n,rn,an,on,ur);if(p){a&&(Qi.fromBufferAttribute(a,c),es.fromBufferAttribute(a,h),ts.fromBufferAttribute(a,u),p.uv=Yt.getUV(ur,rn,an,on,Qi,es,ts,new le)),l&&(Qi.fromBufferAttribute(l,c),es.fromBufferAttribute(l,h),ts.fromBufferAttribute(l,u),p.uv2=Yt.getUV(ur,rn,an,on,Qi,es,ts,new le));const g={a:c,b:h,c:u,normal:new b,materialIndex:0};Yt.getNormal(rn,an,on,g.normal),p.face=g}return p}class Oi extends Ft{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(m,f,x,E,y,C,_,S,T,A,F){const P=C/T,X=_/A,se=C/2,z=_/2,L=S/2,q=T+1,j=A+1;let Z=0,V=0;const I=new b;for(let O=0;O<j;O++){const $=O*X-z;for(let J=0;J<q;J++){const K=J*P-se;I[m]=K*E,I[f]=$*y,I[x]=L,c.push(I.x,I.y,I.z),I[m]=0,I[f]=0,I[x]=S>0?1:-1,h.push(I.x,I.y,I.z),u.push(J/T),u.push(1-O/A),Z+=1}}for(let O=0;O<A;O++)for(let $=0;$<T;$++){const J=d+$+q*O,K=d+$+q*(O+1),de=d+($+1)+q*(O+1),Ae=d+($+1)+q*O;l.push(J,K,Ae),l.push(K,de,Ae),V+=6}a.addGroup(p,V,F),p+=V,d+=Z}}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ui(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function st(s){const e={};for(let t=0;t<s.length;t++){const n=ui(s[t]);for(const i in n)e[i]=n[i]}return e}function Jc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const $c={clone:ui,merge:st};var Kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kc,this.fragmentShader=Qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=Jc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ho extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xt extends Ho{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $n=90,Kn=1;class eh extends $e{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new xt($n,Kn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new b(1,0,0)),this.add(i);const r=new xt($n,Kn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new b(-1,0,0)),this.add(r);const o=new xt($n,Kn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new b(0,1,0)),this.add(o);const a=new xt($n,Kn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new b(0,-1,0)),this.add(a);const l=new xt($n,Kn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new b(0,0,1)),this.add(l);const c=new xt($n,Kn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=jt,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Wo extends Mt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:li,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class th extends bn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oi(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:ln});r.uniforms.tEquirect.value=t;const o=new We(i,r),a=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Bt),new eh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const dr=new b,nh=new b,ih=new yt;class xn{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=dr.subVectors(n,t).cross(nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(dr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ih.getNormalMatrix(e),i=this.coplanarPoint(dr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new bs,ss=new b;class Xr{constructor(e=new xn,t=new xn,n=new xn,i=new xn,r=new xn,o=new xn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],g=n[10],m=n[11],f=n[12],x=n[13],E=n[14],y=n[15];return t[0].setComponents(a-i,u-l,m-d,y-f).normalize(),t[1].setComponents(a+i,u+l,m+d,y+f).normalize(),t[2].setComponents(a+r,u+c,m+p,y+x).normalize(),t[3].setComponents(a-r,u-c,m-p,y-x).normalize(),t[4].setComponents(a-o,u-h,m-g,y-E).normalize(),t[5].setComponents(a+o,u+h,m+g,y+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ss.x=i.normal.x>0?e.max.x:e.min.x,ss.y=i.normal.y>0?e.max.y:e.min.y,ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qo(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,p=h.updateRange;s.bindBuffer(u,c),p.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Yr extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],m=[],f=[];for(let x=0;x<h;x++){const E=x*d-o;for(let y=0;y<c;y++){const C=y*u-r;g.push(C,-E,0),m.push(0,0,1),f.push(y/a),f.push(1-x/l)}}for(let x=0;x<l;x++)for(let E=0;E<a;E++){const y=E+c*x,C=E+c*(x+1),_=E+1+c*(x+1),S=E+1+c*x;p.push(y,C,S),p.push(C,_,S)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(m,3)),this.setAttribute("uv",new nt(f,2))}static fromJSON(e){return new Yr(e.width,e.height,e.widthSegments,e.heightSegments)}}var rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uh="vec3 transformed = vec3( position );",dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,ph=`#ifdef USE_IRIDESCENCE
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
#endif`,mh=`#ifdef USE_BUMPMAP
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
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bh=`#define PI 3.141592653589793
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
}`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mh=`vec3 transformedNormal = objectNormal;
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
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Th="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Rh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
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
}`,Hh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xh=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Yh=`uniform bool receiveShadow;
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
#endif`,jh=`#if defined( USE_ENVMAP )
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
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jh=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,$h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Qh=`PhysicalMaterial material;
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
#endif`,eu=`struct PhysicalMaterial {
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
}`,tu=`
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
#endif`,nu=`#if defined( RE_IndirectDiffuse )
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
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,su=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mu=`#ifdef USE_MORPHNORMALS
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
#endif`,gu=`#ifdef USE_MORPHTARGETS
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
#endif`,xu=`#ifdef USE_MORPHTARGETS
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
#endif`,Au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,_u=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Du=`#ifdef USE_NORMALMAP
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
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Mu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Su=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ru=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uu=`float getShadowMask() {
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
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ku=`#ifdef USE_SKINNING
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
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hu=`#ifdef USE_SKINNING
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
#endif`,Wu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ju=`#ifdef USE_TRANSMISSION
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
#endif`,Zu=`#ifdef USE_TRANSMISSION
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
#endif`,Ju=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,$u=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ku=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Qu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ed=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,td=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const id=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`#include <envmap_common_pars_fragment>
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
}`,od=`#include <common>
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
}`,ld=`#if DEPTH_PACKING == 3200
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
}`,cd=`#define DISTANCE
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
}`,hd=`#define DISTANCE
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
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fd=`uniform float scale;
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
}`,pd=`uniform vec3 diffuse;
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
}`,md=`#include <common>
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
}`,gd=`uniform vec3 diffuse;
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
}`,xd=`#define LAMBERT
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
}`,Ad=`#define LAMBERT
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
}`,_d=`#define MATCAP
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
}`,Ed=`#define MATCAP
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
}`,vd=`#define NORMAL
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
}`,Cd=`#define NORMAL
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
}`,Dd=`#define PHONG
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
}`,Bd=`#define PHONG
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
}`,yd=`#define STANDARD
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
}`,Md=`#define STANDARD
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
}`,Fd=`#define TOON
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
}`,Sd=`#define TOON
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
}`,bd=`uniform float size;
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
}`,wd=`uniform vec3 diffuse;
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
}`,Td=`#include <common>
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
}`,Ld=`uniform vec3 color;
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
}`,Pd=`uniform float rotation;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:rh,alphamap_pars_fragment:ah,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:hh,begin_vertex:uh,beginnormal_vertex:dh,bsdfs:fh,iridescence_fragment:ph,bumpmap_pars_fragment:mh,clipping_planes_fragment:gh,clipping_planes_pars_fragment:xh,clipping_planes_pars_vertex:Ah,clipping_planes_vertex:_h,color_fragment:Eh,color_pars_fragment:vh,color_pars_vertex:Ch,color_vertex:Dh,common:Bh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Mh,displacementmap_pars_vertex:Fh,displacementmap_vertex:Sh,emissivemap_fragment:bh,emissivemap_pars_fragment:wh,encodings_fragment:Th,encodings_pars_fragment:Lh,envmap_fragment:Ph,envmap_common_pars_fragment:Rh,envmap_pars_fragment:Ih,envmap_pars_vertex:Nh,envmap_physical_pars_fragment:jh,envmap_vertex:Oh,fog_vertex:zh,fog_pars_vertex:Uh,fog_fragment:Gh,fog_pars_fragment:kh,gradientmap_pars_fragment:Vh,lightmap_fragment:Hh,lightmap_pars_fragment:Wh,lights_lambert_fragment:qh,lights_lambert_pars_fragment:Xh,lights_pars_begin:Yh,lights_toon_fragment:Zh,lights_toon_pars_fragment:Jh,lights_phong_fragment:$h,lights_phong_pars_fragment:Kh,lights_physical_fragment:Qh,lights_physical_pars_fragment:eu,lights_fragment_begin:tu,lights_fragment_maps:nu,lights_fragment_end:iu,logdepthbuf_fragment:su,logdepthbuf_pars_fragment:ru,logdepthbuf_pars_vertex:au,logdepthbuf_vertex:ou,map_fragment:lu,map_pars_fragment:cu,map_particle_fragment:hu,map_particle_pars_fragment:uu,metalnessmap_fragment:du,metalnessmap_pars_fragment:fu,morphcolor_vertex:pu,morphnormal_vertex:mu,morphtarget_pars_vertex:gu,morphtarget_vertex:xu,normal_fragment_begin:Au,normal_fragment_maps:_u,normal_pars_fragment:Eu,normal_pars_vertex:vu,normal_vertex:Cu,normalmap_pars_fragment:Du,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:yu,clearcoat_pars_fragment:Mu,iridescence_pars_fragment:Fu,output_fragment:Su,packing:bu,premultiplied_alpha_fragment:wu,project_vertex:Tu,dithering_fragment:Lu,dithering_pars_fragment:Pu,roughnessmap_fragment:Ru,roughnessmap_pars_fragment:Iu,shadowmap_pars_fragment:Nu,shadowmap_pars_vertex:Ou,shadowmap_vertex:zu,shadowmask_pars_fragment:Uu,skinbase_vertex:Gu,skinning_pars_vertex:ku,skinning_vertex:Vu,skinnormal_vertex:Hu,specularmap_fragment:Wu,specularmap_pars_fragment:qu,tonemapping_fragment:Xu,tonemapping_pars_fragment:Yu,transmission_fragment:ju,transmission_pars_fragment:Zu,uv_pars_fragment:Ju,uv_pars_vertex:$u,uv_vertex:Ku,uv2_pars_fragment:Qu,uv2_pars_vertex:ed,uv2_vertex:td,worldpos_vertex:nd,background_vert:id,background_frag:sd,cube_vert:rd,cube_frag:ad,depth_vert:od,depth_frag:ld,distanceRGBA_vert:cd,distanceRGBA_frag:hd,equirect_vert:ud,equirect_frag:dd,linedashed_vert:fd,linedashed_frag:pd,meshbasic_vert:md,meshbasic_frag:gd,meshlambert_vert:xd,meshlambert_frag:Ad,meshmatcap_vert:_d,meshmatcap_frag:Ed,meshnormal_vert:vd,meshnormal_frag:Cd,meshphong_vert:Dd,meshphong_frag:Bd,meshphysical_vert:yd,meshphysical_frag:Md,meshtoon_vert:Fd,meshtoon_frag:Sd,points_vert:bd,points_frag:wd,shadow_vert:Td,shadow_frag:Ld,sprite_vert:Pd,sprite_frag:Rd},ne={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}}},Rt={basic:{uniforms:st([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:st([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:st([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:st([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:st([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:st([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:st([ne.points,ne.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:st([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:st([ne.common,ne.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:st([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:st([ne.sprite,ne.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:st([ne.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:st([ne.common,ne.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:st([ne.lights,ne.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Rt.physical={uniforms:st([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function Id(s,e,t,n,i,r){const o=new Te(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function p(m,f){let x=!1,E=f.isScene===!0?f.background:null;E&&E.isTexture&&(E=e.get(E));const y=s.xr,C=y.getSession&&y.getSession();C&&C.environmentBlendMode==="additive"&&(E=null),E===null?g(o,a):E&&E.isColor&&(g(E,1),x=!0),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Fs)?(c===void 0&&(c=new We(new Oi(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:ui(Rt.cube.uniforms),vertexShader:Rt.cube.vertexShader,fragmentShader:Rt.cube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,(h!==E||u!==E.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new We(new Yr(2,2),new Zt({name:"BackgroundMaterial",uniforms:ui(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=E,u=E.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){t.buffers.color.setClear(m.r,m.g,m.b,f,r)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),a=f,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function Nd(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=f(null);let c=l,h=!1;function u(L,q,j,Z,V){let I=!1;if(o){const O=m(Z,j,q);c!==O&&(c=O,p(c.object)),I=x(L,Z,j,V),I&&E(L,Z,j,V)}else{const O=q.wireframe===!0;(c.geometry!==Z.id||c.program!==j.id||c.wireframe!==O)&&(c.geometry=Z.id,c.program=j.id,c.wireframe=O,I=!0)}V!==null&&t.update(V,34963),(I||h)&&(h=!1,A(L,q,j,Z),V!==null&&s.bindBuffer(34963,t.get(V).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function m(L,q,j){const Z=j.wireframe===!0;let V=a[L.id];V===void 0&&(V={},a[L.id]=V);let I=V[q.id];I===void 0&&(I={},V[q.id]=I);let O=I[Z];return O===void 0&&(O=f(d()),I[Z]=O),O}function f(L){const q=[],j=[],Z=[];for(let V=0;V<i;V++)q[V]=0,j[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:j,attributeDivisors:Z,object:L,attributes:{},index:null}}function x(L,q,j,Z){const V=c.attributes,I=q.attributes;let O=0;const $=j.getAttributes();for(const J in $)if($[J].location>=0){const de=V[J];let Ae=I[J];if(Ae===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor)),de===void 0||de.attribute!==Ae||Ae&&de.data!==Ae.data)return!0;O++}return c.attributesNum!==O||c.index!==Z}function E(L,q,j,Z){const V={},I=q.attributes;let O=0;const $=j.getAttributes();for(const J in $)if($[J].location>=0){let de=I[J];de===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(de=L.instanceColor));const Ae={};Ae.attribute=de,de&&de.data&&(Ae.data=de.data),V[J]=Ae,O++}c.attributes=V,c.attributesNum=O,c.index=Z}function y(){const L=c.newAttributes;for(let q=0,j=L.length;q<j;q++)L[q]=0}function C(L){_(L,0)}function _(L,q){const j=c.newAttributes,Z=c.enabledAttributes,V=c.attributeDivisors;j[L]=1,Z[L]===0&&(s.enableVertexAttribArray(L),Z[L]=1),V[L]!==q&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,q),V[L]=q)}function S(){const L=c.newAttributes,q=c.enabledAttributes;for(let j=0,Z=q.length;j<Z;j++)q[j]!==L[j]&&(s.disableVertexAttribArray(j),q[j]=0)}function T(L,q,j,Z,V,I){n.isWebGL2===!0&&(j===5124||j===5125)?s.vertexAttribIPointer(L,q,j,V,I):s.vertexAttribPointer(L,q,j,Z,V,I)}function A(L,q,j,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const V=Z.attributes,I=j.getAttributes(),O=q.defaultAttributeValues;for(const $ in I){const J=I[$];if(J.location>=0){let K=V[$];if(K===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){const de=K.normalized,Ae=K.itemSize,W=t.get(K);if(W===void 0)continue;const be=W.buffer,me=W.type,_e=W.bytesPerElement;if(K.isInterleavedBufferAttribute){const ue=K.data,Le=ue.stride,Ce=K.offset;if(ue.isInstancedInterleavedBuffer){for(let pe=0;pe<J.locationSize;pe++)_(J.location+pe,ue.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<J.locationSize;pe++)C(J.location+pe);s.bindBuffer(34962,be);for(let pe=0;pe<J.locationSize;pe++)T(J.location+pe,Ae/J.locationSize,me,de,Le*_e,(Ce+Ae/J.locationSize*pe)*_e)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)_(J.location+ue,K.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<J.locationSize;ue++)C(J.location+ue);s.bindBuffer(34962,be);for(let ue=0;ue<J.locationSize;ue++)T(J.location+ue,Ae/J.locationSize,me,de,Ae*_e,Ae/J.locationSize*ue*_e)}}else if(O!==void 0){const de=O[$];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(J.location,de);break;case 3:s.vertexAttrib3fv(J.location,de);break;case 4:s.vertexAttrib4fv(J.location,de);break;default:s.vertexAttrib1fv(J.location,de)}}}}S()}function F(){se();for(const L in a){const q=a[L];for(const j in q){const Z=q[j];for(const V in Z)g(Z[V].object),delete Z[V];delete q[j]}delete a[L]}}function P(L){if(a[L.id]===void 0)return;const q=a[L.id];for(const j in q){const Z=q[j];for(const V in Z)g(Z[V].object),delete Z[V];delete q[j]}delete a[L.id]}function X(L){for(const q in a){const j=a[q];if(j[L.id]===void 0)continue;const Z=j[L.id];for(const V in Z)g(Z[V].object),delete Z[V];delete j[L.id]}}function se(){z(),h=!0,c!==l&&(c=l,p(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:se,resetDefaultState:z,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:X,initAttributes:y,enableAttribute:C,disableUnusedAttributes:S}}function Od(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function zd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),m=s.getParameter(34921),f=s.getParameter(36347),x=s.getParameter(36348),E=s.getParameter(36349),y=d>0,C=o||e.has("OES_texture_float"),_=y&&C,S=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:C,floatVertexTextures:_,maxSamples:S}}function Ud(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new xn,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,p,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,d,p){const g=u.clippingPlanes,m=u.clipIntersection,f=u.clipShadows,x=s.get(u);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{const E=r?0:n,y=E*4;let C=x.clippingState||null;l.value=C,C=h(g,d,y,p);for(let _=0;_!==y;++_)C[_]=t[_];x.clippingState=C,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const m=u!==null?u.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const x=p+m*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<x)&&(f=new Float32Array(x));for(let y=0,C=p;y!==m;++y,C+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(f,C),f[C+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function Gd(s){let e=new WeakMap;function t(o,a){return a===Br?o.mapping=li:a===yr&&(o.mapping=ci),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Br||a===yr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new th(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class kd extends Ho{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,Ya=[.125,.215,.35,.446,.526,.582],_n=20,fr=new kd,ja=new Te;let pr=null;const An=(1+Math.sqrt(5))/2,ei=1/An,Za=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,An,ei),new b(0,An,-ei),new b(ei,0,An),new b(-ei,0,An),new b(An,ei,0),new b(-An,ei,0)];class Ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){pr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pr),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:wi,format:It,encoding:Sn,depthBuffer:!1},i=$a(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$a(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vd(r)),this._blurMaterial=Hd(r,e,t)}return i}_compileMaterial(e){const t=new We(this._lodPlanes[0],e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,n,i){const a=new xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ja),h.toneMapping=jt,h.autoClear=!1;const p=new Tn({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),g=new We(new Oi,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(ja),m=!0);for(let x=0;x<6;x++){const E=x%3;E===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):E===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const y=this._cubeSize;rs(i,E*y,x>2?y:0,y,y),h.setRenderTarget(i),m&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===li||e.mapping===ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,fr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Za[(i-1)%Za.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new We(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_n-1),m=r/g,f=isFinite(r)?1+Math.floor(h*m):_n;f>_n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${_n}`);const x=[];let E=0;for(let T=0;T<_n;++T){const A=T/m,F=Math.exp(-A*A/2);x.push(F),T===0?E+=F:T<f&&(E+=2*F)}for(let T=0;T<x.length;T++)x[T]=x[T]/E;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const C=this._sizeLods[i],_=3*C*(i>y-ni?i-y+ni:0),S=4*(this._cubeSize-C);rs(t,_,S,3*C,2*C),l.setRenderTarget(t),l.render(u,fr)}}function Vd(s){const e=[],t=[],n=[];let i=s;const r=s-ni+1+Ya.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ni?l=Ya[o-s+ni-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,m=3,f=2,x=1,E=new Float32Array(m*g*p),y=new Float32Array(f*g*p),C=new Float32Array(x*g*p);for(let S=0;S<p;S++){const T=S%3*2/3-1,A=S>2?0:-1,F=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];E.set(F,m*g*S),y.set(d,f*g*S);const P=[S,S,S,S,S,S];C.set(P,x*g*S)}const _=new Ft;_.setAttribute("position",new Nt(E,m)),_.setAttribute("uv",new Nt(y,f)),_.setAttribute("faceIndex",new Nt(C,x)),e.push(_),i>ni&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $a(s,e,t){const n=new bn(s,e,t);return n.texture.mapping=Fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hd(s,e,t){const n=new Float32Array(_n),i=new b(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:_n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jr(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ka(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jr(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Qa(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function jr(){return`

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
	`}function Wd(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Br||l===yr,h=l===li||l===ci;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ja(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Ja(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xd(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let f=0,x=m.length;f<x;f++)e.update(m[f],34962)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const E=p.array;m=p.version;for(let y=0,C=E.length;y<C;y+=3){const _=E[y+0],S=E[y+1],T=E[y+2];d.push(_,S,S,T,T,_)}}else{const E=g.array;m=g.version;for(let y=0,C=E.length/3-1;y<C;y+=3){const _=y+0,S=y+1,T=y+2;d.push(_,S,S,T,T,_)}}const f=new(No(d)?Vo:ko)(d,1);f.version=m;const x=r.get(u);x&&e.remove(x),r.set(u,f)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Yd(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,p){s.drawElements(r,p,a,d*l),t.update(p,r,1)}function u(d,p,g){if(g===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,p,a,d*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function jd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zd(s,e){return s[0]-e[0]}function Jd(s,e){return Math.abs(e[1])-Math.abs(s[1])}function $d(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Oe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=m!==void 0?m.length:0;let x=r.get(h);if(x===void 0||x.count!==f){let j=function(){L.dispose(),r.delete(h),h.removeEventListener("dispose",j)};var g=j;x!==void 0&&x.texture.dispose();const C=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let P=0;C===!0&&(P=1),_===!0&&(P=2),S===!0&&(P=3);let X=h.attributes.position.count*P,se=1;X>e.maxTextureSize&&(se=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const z=new Float32Array(X*se*4*f),L=new Go(z,X,se,f);L.type=Cn,L.needsUpdate=!0;const q=P*4;for(let Z=0;Z<f;Z++){const V=T[Z],I=A[Z],O=F[Z],$=X*se*4*Z;for(let J=0;J<V.count;J++){const K=J*q;C===!0&&(o.fromBufferAttribute(V,J),z[$+K+0]=o.x,z[$+K+1]=o.y,z[$+K+2]=o.z,z[$+K+3]=0),_===!0&&(o.fromBufferAttribute(I,J),z[$+K+4]=o.x,z[$+K+5]=o.y,z[$+K+6]=o.z,z[$+K+7]=0),S===!0&&(o.fromBufferAttribute(O,J),z[$+K+8]=o.x,z[$+K+9]=o.y,z[$+K+10]=o.z,z[$+K+11]=O.itemSize===4?o.w:1)}}x={count:f,texture:L,size:new le(X,se)},r.set(h,x),h.addEventListener("dispose",j)}let E=0;for(let C=0;C<p.length;C++)E+=p[C];const y=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",y),d.getUniforms().setValue(s,"morphTargetInfluences",p),d.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const m=p===void 0?0:p.length;let f=n[h.id];if(f===void 0||f.length!==m){f=[];for(let _=0;_<m;_++)f[_]=[_,0];n[h.id]=f}for(let _=0;_<m;_++){const S=f[_];S[0]=_,S[1]=p[_]}f.sort(Jd);for(let _=0;_<8;_++)_<m&&f[_][1]?(a[_][0]=f[_][0],a[_][1]=f[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Zd);const x=h.morphAttributes.position,E=h.morphAttributes.normal;let y=0;for(let _=0;_<8;_++){const S=a[_],T=S[0],A=S[1];T!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+_)!==x[T]&&h.setAttribute("morphTarget"+_,x[T]),E&&h.getAttribute("morphNormal"+_)!==E[T]&&h.setAttribute("morphNormal"+_,E[T]),i[_]=A,y+=A):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),E&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const C=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",C),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Kd(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Xo=new Mt,Yo=new Go,jo=new Uc,Zo=new Wo,eo=[],to=[],no=new Float32Array(16),io=new Float32Array(9),so=new Float32Array(4);function fi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=eo[i];if(r===void 0&&(r=new Float32Array(i),eo[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ws(s,e){let t=to[e];t===void 0&&(t=new Int32Array(e),to[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Qd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2fv(this.addr,e),lt(t,e)}}function tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;s.uniform3fv(this.addr,e),lt(t,e)}}function nf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4fv(this.addr,e),lt(t,e)}}function sf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;so.set(n),s.uniformMatrix2fv(this.addr,!1,so),lt(t,n)}}function rf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;io.set(n),s.uniformMatrix3fv(this.addr,!1,io),lt(t,n)}}function af(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;no.set(n),s.uniformMatrix4fv(this.addr,!1,no),lt(t,n)}}function of(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lf(s,e){const t=this.cache;ot(t,e)||(s.uniform2iv(this.addr,e),lt(t,e))}function cf(s,e){const t=this.cache;ot(t,e)||(s.uniform3iv(this.addr,e),lt(t,e))}function hf(s,e){const t=this.cache;ot(t,e)||(s.uniform4iv(this.addr,e),lt(t,e))}function uf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function df(s,e){const t=this.cache;ot(t,e)||(s.uniform2uiv(this.addr,e),lt(t,e))}function ff(s,e){const t=this.cache;ot(t,e)||(s.uniform3uiv(this.addr,e),lt(t,e))}function pf(s,e){const t=this.cache;ot(t,e)||(s.uniform4uiv(this.addr,e),lt(t,e))}function mf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Xo,i)}function gf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jo,i)}function xf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zo,i)}function Af(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yo,i)}function _f(s){switch(s){case 5126:return Qd;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return sf;case 35675:return rf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return hf;case 5125:return uf;case 36294:return df;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return Af}}function Ef(s,e){s.uniform1fv(this.addr,e)}function vf(s,e){const t=fi(e,this.size,2);s.uniform2fv(this.addr,t)}function Cf(s,e){const t=fi(e,this.size,3);s.uniform3fv(this.addr,t)}function Df(s,e){const t=fi(e,this.size,4);s.uniform4fv(this.addr,t)}function Bf(s,e){const t=fi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yf(s,e){const t=fi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mf(s,e){const t=fi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ff(s,e){s.uniform1iv(this.addr,e)}function Sf(s,e){s.uniform2iv(this.addr,e)}function bf(s,e){s.uniform3iv(this.addr,e)}function wf(s,e){s.uniform4iv(this.addr,e)}function Tf(s,e){s.uniform1uiv(this.addr,e)}function Lf(s,e){s.uniform2uiv(this.addr,e)}function Pf(s,e){s.uniform3uiv(this.addr,e)}function Rf(s,e){s.uniform4uiv(this.addr,e)}function If(s,e,t){const n=e.length,i=ws(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Xo,i[r])}function Nf(s,e,t){const n=e.length,i=ws(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||jo,i[r])}function Of(s,e,t){const n=e.length,i=ws(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Zo,i[r])}function zf(s,e,t){const n=e.length,i=ws(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Yo,i[r])}function Uf(s){switch(s){case 5126:return Ef;case 35664:return vf;case 35665:return Cf;case 35666:return Df;case 35674:return Bf;case 35675:return yf;case 35676:return Mf;case 5124:case 35670:return Ff;case 35667:case 35671:return Sf;case 35668:case 35672:return bf;case 35669:case 35673:return wf;case 5125:return Tf;case 36294:return Lf;case 36295:return Pf;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return If;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return zf}}class Gf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=_f(t.type)}}class kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Uf(t.type)}}class Vf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const mr=/(\w+)(\])?(\[|\.)?/g;function ro(s,e){s.seq.push(e),s.map[e.id]=e}function Hf(s,e,t){const n=s.name,i=n.length;for(mr.lastIndex=0;;){const r=mr.exec(n),o=mr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ro(t,c===void 0?new Gf(a,s,e):new kf(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Vf(a),ro(t,u)),t=u}}}class ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Hf(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ao(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Wf=0;function qf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Xf(s){switch(s){case Sn:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function oo(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+qf(s.getShaderSource(e),o)}else return i}function Yf(s,e){const t=Xf(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function jf(s,e){let t;switch(e){case Ql:t="Linear";break;case ec:t="Reinhard";break;case tc:t="OptimizedCineon";break;case nc:t="ACESFilmic";break;case ic:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zf(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yi).join(`
`)}function Jf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $f(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function yi(s){return s!==""}function lo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function co(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function wr(s){return s.replace(Kf,Qf)}function Qf(s,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wr(t)}const ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(s){return s.replace(ep,tp)}function tp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function uo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function np(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===To?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function ip(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case Fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function rp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kr:e="ENVMAP_BLENDING_MULTIPLY";break;case $l:e="ENVMAP_BLENDING_MIX";break;case Kl:e="ENVMAP_BLENDING_ADD";break}return e}function ap(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function op(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=np(t),c=ip(t),h=sp(t),u=rp(t),d=ap(t),p=t.isWebGL2?"":Zf(t),g=Jf(r),m=i.createProgram();let f,x,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(yi).join(`
`),f.length>0&&(f+=`
`),x=[p,g].filter(yi).join(`
`),x.length>0&&(x+=`
`)):(f=[uo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),x=[p,uo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jt?"#define TONE_MAPPING":"",t.toneMapping!==jt?Be.tonemapping_pars_fragment:"",t.toneMapping!==jt?jf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,Yf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yi).join(`
`)),o=wr(o),o=lo(o,t),o=co(o,t),a=wr(a),a=lo(a,t),a=co(a,t),o=ho(o),a=ho(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=E+f+o,C=E+x+a,_=ao(i,35633,y),S=ao(i,35632,C);if(i.attachShader(m,_),i.attachShader(m,S),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const F=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(_).trim(),X=i.getShaderInfoLog(S).trim();let se=!0,z=!0;if(i.getProgramParameter(m,35714)===!1){se=!1;const L=oo(i,_,"vertex"),q=oo(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+F+`
`+L+`
`+q)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(P===""||X==="")&&(z=!1);z&&(this.diagnostics={runnable:se,programLog:F,vertexShader:{log:P,prefix:f},fragmentShader:{log:X,prefix:x}})}i.deleteShader(_),i.deleteShader(S);let T;this.getUniforms=function(){return T===void 0&&(T=new ms(i,m)),T};let A;return this.getAttributes=function(){return A===void 0&&(A=$f(i,m)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Wf++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=S,this}let lp=0;class cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hp(e),t.set(e,n)),n}}class hp{constructor(e){this.id=lp++,this.code=e,this.usedTimes=0}}function up(s,e,t,n,i,r,o){const a=new qr,l=new cp,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(A,F,P,X,se){const z=X.fog,L=se.geometry,q=A.isMeshStandardMaterial?X.environment:null,j=(A.isMeshStandardMaterial?t:e).get(A.envMap||q),Z=!!j&&j.mapping===Fs?j.image.height:null,V=g[A.type];A.precision!==null&&(p=i.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const I=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,O=I!==void 0?I.length:0;let $=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let J,K,de,Ae;if(V){const Le=Rt[V];J=Le.vertexShader,K=Le.fragmentShader}else J=A.vertexShader,K=A.fragmentShader,l.update(A),de=l.getVertexShaderID(A),Ae=l.getFragmentShaderID(A);const W=s.getRenderTarget(),be=A.alphaTest>0,me=A.clearcoat>0,_e=A.iridescence>0;return{isWebGL2:h,shaderID:V,shaderName:A.type,vertexShader:J,fragmentShader:K,defines:A.defines,customVertexShaderID:de,customFragmentShaderID:Ae,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,instancing:se.isInstancedMesh===!0,instancingColor:se.isInstancedMesh===!0&&se.instanceColor!==null,supportsVertexTextures:d,outputEncoding:W===null?s.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Sn,map:!!A.map,matcap:!!A.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!A.lightMap,aoMap:!!A.aoMap,emissiveMap:!!A.emissiveMap,bumpMap:!!A.bumpMap,normalMap:!!A.normalMap,objectSpaceNormalMap:A.normalMapType===Cc,tangentSpaceNormalMap:A.normalMapType===Vr,decodeVideoTexture:!!A.map&&A.map.isVideoTexture===!0&&A.map.encoding===ke,clearcoat:me,clearcoatMap:me&&!!A.clearcoatMap,clearcoatRoughnessMap:me&&!!A.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!A.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!A.iridescenceMap,iridescenceThicknessMap:_e&&!!A.iridescenceThicknessMap,displacementMap:!!A.displacementMap,roughnessMap:!!A.roughnessMap,metalnessMap:!!A.metalnessMap,specularMap:!!A.specularMap,specularIntensityMap:!!A.specularIntensityMap,specularColorMap:!!A.specularColorMap,opaque:A.transparent===!1&&A.blending===si,alphaMap:!!A.alphaMap,alphaTest:be,gradientMap:!!A.gradientMap,sheen:A.sheen>0,sheenColorMap:!!A.sheenColorMap,sheenRoughnessMap:!!A.sheenRoughnessMap,transmission:A.transmission>0,transmissionMap:!!A.transmissionMap,thicknessMap:!!A.thicknessMap,combine:A.combine,vertexTangents:!!A.normalMap&&!!L.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatMap||!!A.clearcoatRoughnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||!!A.displacementMap||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||!!A.sheenColorMap||!!A.sheenRoughnessMap,uvsVertexOnly:!(!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||A.transmission>0||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||A.sheen>0||!!A.sheenColorMap||!!A.sheenRoughnessMap)&&!!A.displacementMap,fog:!!z,useFog:A.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!A.flatShading,sizeAttenuation:A.sizeAttenuation,logarithmicDepthBuffer:u,skinning:se.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:A.toneMapped?s.toneMapping:jt,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===at,flipSided:A.side===At,useDepthPacking:!!A.depthPacking,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:A.extensions&&A.extensions.derivatives,extensionFragDepth:A.extensions&&A.extensions.fragDepth,extensionDrawBuffers:A.extensions&&A.extensions.drawBuffers,extensionShaderTextureLOD:A.extensions&&A.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function f(A){const F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)F.push(P),F.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(x(F,A),E(F,A),F.push(s.outputEncoding)),F.push(A.customProgramCacheKey),F.join()}function x(A,F){A.push(F.precision),A.push(F.outputEncoding),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.combine),A.push(F.vertexUvs),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function E(A,F){a.disableAll(),F.isWebGL2&&a.enable(0),F.supportsVertexTextures&&a.enable(1),F.instancing&&a.enable(2),F.instancingColor&&a.enable(3),F.map&&a.enable(4),F.matcap&&a.enable(5),F.envMap&&a.enable(6),F.lightMap&&a.enable(7),F.aoMap&&a.enable(8),F.emissiveMap&&a.enable(9),F.bumpMap&&a.enable(10),F.normalMap&&a.enable(11),F.objectSpaceNormalMap&&a.enable(12),F.tangentSpaceNormalMap&&a.enable(13),F.clearcoat&&a.enable(14),F.clearcoatMap&&a.enable(15),F.clearcoatRoughnessMap&&a.enable(16),F.clearcoatNormalMap&&a.enable(17),F.iridescence&&a.enable(18),F.iridescenceMap&&a.enable(19),F.iridescenceThicknessMap&&a.enable(20),F.displacementMap&&a.enable(21),F.specularMap&&a.enable(22),F.roughnessMap&&a.enable(23),F.metalnessMap&&a.enable(24),F.gradientMap&&a.enable(25),F.alphaMap&&a.enable(26),F.alphaTest&&a.enable(27),F.vertexColors&&a.enable(28),F.vertexAlphas&&a.enable(29),F.vertexUvs&&a.enable(30),F.vertexTangents&&a.enable(31),F.uvsVertexOnly&&a.enable(32),A.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.skinning&&a.enable(4),F.morphTargets&&a.enable(5),F.morphNormals&&a.enable(6),F.morphColors&&a.enable(7),F.premultipliedAlpha&&a.enable(8),F.shadowMapEnabled&&a.enable(9),F.physicallyCorrectLights&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.specularIntensityMap&&a.enable(15),F.specularColorMap&&a.enable(16),F.transmission&&a.enable(17),F.transmissionMap&&a.enable(18),F.thicknessMap&&a.enable(19),F.sheen&&a.enable(20),F.sheenColorMap&&a.enable(21),F.sheenRoughnessMap&&a.enable(22),F.decodeVideoTexture&&a.enable(23),F.opaque&&a.enable(24),A.push(a.mask)}function y(A){const F=g[A.type];let P;if(F){const X=Rt[F];P=$c.clone(X.uniforms)}else P=A.uniforms;return P}function C(A,F){let P;for(let X=0,se=c.length;X<se;X++){const z=c[X];if(z.cacheKey===F){P=z,++P.usedTimes;break}}return P===void 0&&(P=new op(s,F,A,r),c.push(P)),P}function _(A){if(--A.usedTimes===0){const F=c.indexOf(A);c[F]=c[c.length-1],c.pop(),A.destroy()}}function S(A){l.remove(A)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:_,releaseShaderCache:S,programs:c,dispose:T}}function dp(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function fp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function po(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,m,f){let x=s[e];return x===void 0?(x={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:f},s[e]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=p,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=f),e++,x}function a(u,d,p,g,m,f){const x=o(u,d,p,g,m,f);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function l(u,d,p,g,m,f){const x=o(u,d,p,g,m,f);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function c(u,d){t.length>1&&t.sort(u||fp),n.length>1&&n.sort(d||fo),i.length>1&&i.sort(d||fo)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function pp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new po,s.set(n,[o])):i>=r.length?(o=new po,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function mp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Te};break;case"SpotLight":t={position:new b,direction:new b,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new b,halfWidth:new b,halfHeight:new b};break}return s[e.id]=t,t}}}function gp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let xp=0;function Ap(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _p(s,e){const t=new mp,n=gp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new b);const r=new b,o=new Ve,a=new Ve;function l(h,u){let d=0,p=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,f=0,x=0,E=0,y=0,C=0,_=0,S=0,T=0,A=0;h.sort(Ap);const F=u!==!0?Math.PI:1;for(let X=0,se=h.length;X<se;X++){const z=h[X],L=z.color,q=z.intensity,j=z.distance,Z=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=L.r*q*F,p+=L.g*q*F,g+=L.b*q*F;else if(z.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(z.sh.coefficients[V],q);else if(z.isDirectionalLight){const V=t.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity*F),z.castShadow){const I=z.shadow,O=n.get(z);O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=z.shadow.matrix,C++}i.directional[m]=V,m++}else if(z.isSpotLight){const V=t.get(z);V.position.setFromMatrixPosition(z.matrixWorld),V.color.copy(L).multiplyScalar(q*F),V.distance=j,V.coneCos=Math.cos(z.angle),V.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),V.decay=z.decay,i.spot[x]=V;const I=z.shadow;if(z.map&&(i.spotLightMap[T]=z.map,T++,I.updateMatrices(z),z.castShadow&&A++),i.spotLightMatrix[x]=I.matrix,z.castShadow){const O=n.get(z);O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.spotShadow[x]=O,i.spotShadowMap[x]=Z,S++}x++}else if(z.isRectAreaLight){const V=t.get(z);V.color.copy(L).multiplyScalar(q),V.halfWidth.set(z.width*.5,0,0),V.halfHeight.set(0,z.height*.5,0),i.rectArea[E]=V,E++}else if(z.isPointLight){const V=t.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity*F),V.distance=z.distance,V.decay=z.decay,z.castShadow){const I=z.shadow,O=n.get(z);O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,O.shadowCameraNear=I.camera.near,O.shadowCameraFar=I.camera.far,i.pointShadow[f]=O,i.pointShadowMap[f]=Z,i.pointShadowMatrix[f]=z.shadow.matrix,_++}i.point[f]=V,f++}else if(z.isHemisphereLight){const V=t.get(z);V.skyColor.copy(z.color).multiplyScalar(q*F),V.groundColor.copy(z.groundColor).multiplyScalar(q*F),i.hemi[y]=V,y++}}E>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==m||P.pointLength!==f||P.spotLength!==x||P.rectAreaLength!==E||P.hemiLength!==y||P.numDirectionalShadows!==C||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==T)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=E,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,P.directionalLength=m,P.pointLength=f,P.spotLength=x,P.rectAreaLength=E,P.hemiLength=y,P.numDirectionalShadows=C,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=T,i.version=xp++)}function c(h,u){let d=0,p=0,g=0,m=0,f=0;const x=u.matrixWorldInverse;for(let E=0,y=h.length;E<y;E++){const C=h[E];if(C.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(x),d++}else if(C.isSpotLight){const _=i.spot[g];_.position.setFromMatrixPosition(C.matrixWorld),_.position.applyMatrix4(x),_.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(x),g++}else if(C.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(C.matrixWorld),_.position.applyMatrix4(x),a.identity(),o.copy(C.matrixWorld),o.premultiply(x),a.extractRotation(o),_.halfWidth.set(C.width*.5,0,0),_.halfHeight.set(0,C.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(C.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(C.matrixWorld),_.position.applyMatrix4(x),p++}else if(C.isHemisphereLight){const _=i.hemi[f];_.direction.setFromMatrixPosition(C.matrixWorld),_.direction.transformDirection(x),f++}}}return{setup:l,setupView:c,state:i}}function mo(s,e){const t=new _p(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ep(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new mo(s,e),t.set(r,[l])):o>=a.length?(l=new mo(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class vp extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cp extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
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
}`;function yp(s,e,t){let n=new Xr;const i=new le,r=new le,o=new Oe,a=new vp({depthPacking:vc}),l=new Cp,c={},h=t.maxTextureSize,u={0:At,1:cn,2:at},d=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Dp,fragmentShader:Bp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new We(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To,this.render=function(C,_,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const T=s.getRenderTarget(),A=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),P=s.state;P.setBlending(ln),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let X=0,se=C.length;X<se;X++){const z=C[X],L=z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const q=L.getFrameExtents();if(i.multiply(q),r.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,L.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,L.mapSize.y=r.y)),L.map===null){const Z=this.type!==Di?{minFilter:ut,magFilter:ut}:{};L.map=new bn(i.x,i.y,Z),L.map.texture.name=z.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();const j=L.getViewportCount();for(let Z=0;Z<j;Z++){const V=L.getViewport(Z);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),P.viewport(o),L.updateMatrices(z,Z),n=L.getFrustum(),y(_,S,L.camera,z,this.type)}L.isPointLightShadow!==!0&&this.type===Di&&x(L,S),L.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(T,A,F)};function x(C,_){const S=e.update(m);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new bn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(_,null,S,d,m,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(_,null,S,p,m,null)}function E(C,_,S,T,A,F){let P=null;const X=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(X!==void 0?P=X:P=S.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0){const se=P.uuid,z=_.uuid;let L=c[se];L===void 0&&(L={},c[se]=L);let q=L[z];q===void 0&&(q=P.clone(),L[z]=q),P=q}return P.visible=_.visible,P.wireframe=_.wireframe,F===Di?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaTest,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(S.matrixWorld),P.nearDistance=T,P.farDistance=A),P}function y(C,_,S,T,A){if(C.visible===!1)return;if(C.layers.test(_.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===Di)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);const X=e.update(C),se=C.material;if(Array.isArray(se)){const z=X.groups;for(let L=0,q=z.length;L<q;L++){const j=z[L],Z=se[j.materialIndex];if(Z&&Z.visible){const V=E(C,Z,T,S.near,S.far,A);s.renderBufferDirect(S,null,X,V,C,j)}}}else if(se.visible){const z=E(C,se,T,S.near,S.far,A);s.renderBufferDirect(S,null,X,z,C,null)}}const P=C.children;for(let X=0,se=P.length;X<se;X++)y(P[X],_,S,T,A)}}function Mp(s,e,t){const n=t.isWebGL2;function i(){let w=!1;const ie=new Oe;let U=null;const he=new Oe(0,0,0,0);return{setMask:function(ce){U!==ce&&!w&&(s.colorMask(ce,ce,ce,ce),U=ce)},setLocked:function(ce){w=ce},setClear:function(ce,Se,Ke,He,Kt){Kt===!0&&(ce*=He,Se*=He,Ke*=He),ie.set(ce,Se,Ke,He),he.equals(ie)===!1&&(s.clearColor(ce,Se,Ke,He),he.copy(ie))},reset:function(){w=!1,U=null,he.set(-1,0,0,0)}}}function r(){let w=!1,ie=null,U=null,he=null;return{setTest:function(ce){ce?be(2929):me(2929)},setMask:function(ce){ie!==ce&&!w&&(s.depthMask(ce),ie=ce)},setFunc:function(ce){if(U!==ce){if(ce)switch(ce){case Wl:s.depthFunc(512);break;case ql:s.depthFunc(519);break;case Xl:s.depthFunc(513);break;case Dr:s.depthFunc(515);break;case Yl:s.depthFunc(514);break;case jl:s.depthFunc(518);break;case Zl:s.depthFunc(516);break;case Jl:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);U=ce}},setLocked:function(ce){w=ce},setClear:function(ce){he!==ce&&(s.clearDepth(ce),he=ce)},reset:function(){w=!1,ie=null,U=null,he=null}}}function o(){let w=!1,ie=null,U=null,he=null,ce=null,Se=null,Ke=null,He=null,Kt=null;return{setTest:function(Ue){w||(Ue?be(2960):me(2960))},setMask:function(Ue){ie!==Ue&&!w&&(s.stencilMask(Ue),ie=Ue)},setFunc:function(Ue,Ut,vt){(U!==Ue||he!==Ut||ce!==vt)&&(s.stencilFunc(Ue,Ut,vt),U=Ue,he=Ut,ce=vt)},setOp:function(Ue,Ut,vt){(Se!==Ue||Ke!==Ut||He!==vt)&&(s.stencilOp(Ue,Ut,vt),Se=Ue,Ke=Ut,He=vt)},setLocked:function(Ue){w=Ue},setClear:function(Ue){Kt!==Ue&&(s.clearStencil(Ue),Kt=Ue)},reset:function(){w=!1,ie=null,U=null,he=null,ce=null,Se=null,Ke=null,He=null,Kt=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,m=[],f=null,x=!1,E=null,y=null,C=null,_=null,S=null,T=null,A=null,F=!1,P=null,X=null,se=null,z=null,L=null;const q=s.getParameter(35661);let j=!1,Z=0;const V=s.getParameter(7938);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=Z>=2);let I=null,O={};const $=s.getParameter(3088),J=s.getParameter(2978),K=new Oe().fromArray($),de=new Oe().fromArray(J);function Ae(w,ie,U){const he=new Uint8Array(4),ce=s.createTexture();s.bindTexture(w,ce),s.texParameteri(w,10241,9728),s.texParameteri(w,10240,9728);for(let Se=0;Se<U;Se++)s.texImage2D(ie+Se,0,6408,1,1,0,6408,5121,he);return ce}const W={};W[3553]=Ae(3553,3553,1),W[34067]=Ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(2929),l.setFunc(Dr),je(!1),dt(ra),be(2884),qe(ln);function be(w){d[w]!==!0&&(s.enable(w),d[w]=!0)}function me(w){d[w]!==!1&&(s.disable(w),d[w]=!1)}function _e(w,ie){return p[w]!==ie?(s.bindFramebuffer(w,ie),p[w]=ie,n&&(w===36009&&(p[36160]=ie),w===36160&&(p[36009]=ie)),!0):!1}function ue(w,ie){let U=m,he=!1;if(w)if(U=g.get(ie),U===void 0&&(U=[],g.set(ie,U)),w.isWebGLMultipleRenderTargets){const ce=w.texture;if(U.length!==ce.length||U[0]!==36064){for(let Se=0,Ke=ce.length;Se<Ke;Se++)U[Se]=36064+Se;U.length=ce.length,he=!0}}else U[0]!==36064&&(U[0]=36064,he=!0);else U[0]!==1029&&(U[0]=1029,he=!0);he&&(t.isWebGL2?s.drawBuffers(U):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}function Le(w){return f!==w?(s.useProgram(w),f=w,!0):!1}const Ce={[ti]:32774,[Pl]:32778,[Rl]:32779};if(n)Ce[la]=32775,Ce[ca]=32776;else{const w=e.get("EXT_blend_minmax");w!==null&&(Ce[la]=w.MIN_EXT,Ce[ca]=w.MAX_EXT)}const pe={[Il]:0,[Nl]:1,[Ol]:768,[Lo]:770,[Hl]:776,[kl]:774,[Ul]:772,[zl]:769,[Po]:771,[Vl]:775,[Gl]:773};function qe(w,ie,U,he,ce,Se,Ke,He){if(w===ln){x===!0&&(me(3042),x=!1);return}if(x===!1&&(be(3042),x=!0),w!==Ll){if(w!==E||He!==F){if((y!==ti||S!==ti)&&(s.blendEquation(32774),y=ti,S=ti),He)switch(w){case si:s.blendFuncSeparate(1,771,1,771);break;case _s:s.blendFunc(1,1);break;case aa:s.blendFuncSeparate(0,769,0,1);break;case oa:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case si:s.blendFuncSeparate(770,771,1,771);break;case _s:s.blendFunc(770,1);break;case aa:s.blendFuncSeparate(0,769,0,1);break;case oa:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}C=null,_=null,T=null,A=null,E=w,F=He}return}ce=ce||ie,Se=Se||U,Ke=Ke||he,(ie!==y||ce!==S)&&(s.blendEquationSeparate(Ce[ie],Ce[ce]),y=ie,S=ce),(U!==C||he!==_||Se!==T||Ke!==A)&&(s.blendFuncSeparate(pe[U],pe[he],pe[Se],pe[Ke]),C=U,_=he,T=Se,A=Ke),E=w,F=null}function et(w,ie){w.side===at?me(2884):be(2884);let U=w.side===At;ie&&(U=!U),je(U),w.blending===si&&w.transparent===!1?qe(ln):qe(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const he=w.stencilWrite;c.setTest(he),he&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Pe(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?be(32926):me(32926)}function je(w){P!==w&&(w?s.frontFace(2304):s.frontFace(2305),P=w)}function dt(w){w!==bl?(be(2884),w!==X&&(w===ra?s.cullFace(1029):w===wl?s.cullFace(1028):s.cullFace(1032))):me(2884),X=w}function Ze(w){w!==se&&(j&&s.lineWidth(w),se=w)}function Pe(w,ie,U){w?(be(32823),(z!==ie||L!==U)&&(s.polygonOffset(ie,U),z=ie,L=U)):me(32823)}function Et(w){w?be(3089):me(3089)}function ft(w){w===void 0&&(w=33984+q-1),I!==w&&(s.activeTexture(w),I=w)}function M(w,ie){I===null&&ft();let U=O[I];U===void 0&&(U={type:void 0,texture:void 0},O[I]=U),(U.type!==w||U.texture!==ie)&&(s.bindTexture(w,ie||W[w]),U.type=w,U.texture=ie)}function v(){const w=O[I];w!==void 0&&w.type!==void 0&&(s.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ee(){try{s.texSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ge(){try{s.texStorage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function D(){try{s.texStorage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y(){try{s.texImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function te(){try{s.texImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function oe(w){K.equals(w)===!1&&(s.scissor(w.x,w.y,w.z,w.w),K.copy(w))}function re(w){de.equals(w)===!1&&(s.viewport(w.x,w.y,w.z,w.w),de.copy(w))}function xe(w,ie){let U=u.get(ie);U===void 0&&(U=new WeakMap,u.set(ie,U));let he=U.get(w);he===void 0&&(he=s.getUniformBlockIndex(ie,w.name),U.set(w,he))}function ye(w,ie){const he=u.get(ie).get(w);h.get(w)!==he&&(s.uniformBlockBinding(ie,he,w.__bindingPointIndex),h.set(w,he))}function Ne(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},I=null,O={},p={},g=new WeakMap,m=[],f=null,x=!1,E=null,y=null,C=null,_=null,S=null,T=null,A=null,F=!1,P=null,X=null,se=null,z=null,L=null,K.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:be,disable:me,bindFramebuffer:_e,drawBuffers:ue,useProgram:Le,setBlending:qe,setMaterial:et,setFlipSided:je,setCullFace:dt,setLineWidth:Ze,setPolygonOffset:Pe,setScissorTest:Et,activeTexture:ft,bindTexture:M,unbindTexture:v,compressedTexImage2D:G,texImage2D:Y,texImage3D:te,updateUBOMapping:xe,uniformBlockBinding:ye,texStorage2D:ge,texStorage3D:D,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:ae,scissor:oe,viewport:re,reset:Ne}}function Fp(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,v){return x?new OffscreenCanvas(M,v):Ti("canvas")}function y(M,v,G,Q){let ee=1;if((M.width>Q||M.height>Q)&&(ee=Q/Math.max(M.width,M.height)),ee<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ae=v?vs:Math.floor,ge=ae(ee*M.width),D=ae(ee*M.height);m===void 0&&(m=E(ge,D));const Y=G?E(ge,D):m;return Y.width=ge,Y.height=D,Y.getContext("2d").drawImage(M,0,0,ge,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ge+"x"+D+")."),Y}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function C(M){return br(M.width)&&br(M.height)}function _(M){return a?!1:M.wrapS!==Lt||M.wrapT!==Lt||M.minFilter!==ut&&M.minFilter!==Bt}function S(M,v){return M.generateMipmaps&&v&&M.minFilter!==ut&&M.minFilter!==Bt}function T(M){s.generateMipmap(M)}function A(M,v,G,Q,ee=!1){if(a===!1)return v;if(M!==null){if(s[M]!==void 0)return s[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ae=v;return v===6403&&(G===5126&&(ae=33326),G===5131&&(ae=33325),G===5121&&(ae=33321)),v===33319&&(G===5126&&(ae=33328),G===5131&&(ae=33327),G===5121&&(ae=33323)),v===6408&&(G===5126&&(ae=34836),G===5131&&(ae=34842),G===5121&&(ae=Q===ke&&ee===!1?35907:32856),G===32819&&(ae=32854),G===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function F(M,v,G){return S(M,G)===!0||M.isFramebufferTexture&&M.minFilter!==ut&&M.minFilter!==Bt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function P(M){return M===ut||M===ha||M===ua?9728:9729}function X(M){const v=M.target;v.removeEventListener("dispose",X),z(v),v.isVideoTexture&&g.delete(v)}function se(M){const v=M.target;v.removeEventListener("dispose",se),q(v)}function z(M){const v=n.get(M);if(v.__webglInit===void 0)return;const G=M.source,Q=f.get(G);if(Q){const ee=Q[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(M),Object.keys(Q).length===0&&f.delete(G)}n.remove(M)}function L(M){const v=n.get(M);s.deleteTexture(v.__webglTexture);const G=M.source,Q=f.get(G);delete Q[v.__cacheKey],o.memory.textures--}function q(M){const v=M.texture,G=n.get(M),Q=n.get(v);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)s.deleteFramebuffer(G.__webglFramebuffer[ee]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ee]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ee=0,ae=v.length;ee<ae;ee++){const ge=n.get(v[ee]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(v[ee])}n.remove(v),n.remove(M)}let j=0;function Z(){j=0}function V(){const M=j;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),j+=1,M}function I(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.encoding),v.join()}function O(M,v){const G=n.get(M);if(M.isVideoTexture&&Et(M),M.isRenderTargetTexture===!1&&M.version>0&&G.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(G,M,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,G.__webglTexture)}function $(M,v){const G=n.get(M);if(M.version>0&&G.__version!==M.version){me(G,M,v);return}t.activeTexture(33984+v),t.bindTexture(35866,G.__webglTexture)}function J(M,v){const G=n.get(M);if(M.version>0&&G.__version!==M.version){me(G,M,v);return}t.activeTexture(33984+v),t.bindTexture(32879,G.__webglTexture)}function K(M,v){const G=n.get(M);if(M.version>0&&G.__version!==M.version){_e(G,M,v);return}t.activeTexture(33984+v),t.bindTexture(34067,G.__webglTexture)}const de={[Mr]:10497,[Lt]:33071,[Fr]:33648},Ae={[ut]:9728,[ha]:9984,[ua]:9986,[Bt]:9729,[sc]:9985,[Ss]:9987};function W(M,v,G){if(G?(s.texParameteri(M,10242,de[v.wrapS]),s.texParameteri(M,10243,de[v.wrapT]),(M===32879||M===35866)&&s.texParameteri(M,32882,de[v.wrapR]),s.texParameteri(M,10240,Ae[v.magFilter]),s.texParameteri(M,10241,Ae[v.minFilter])):(s.texParameteri(M,10242,33071),s.texParameteri(M,10243,33071),(M===32879||M===35866)&&s.texParameteri(M,32882,33071),(v.wrapS!==Lt||v.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(M,10240,P(v.magFilter)),s.texParameteri(M,10241,P(v.minFilter)),v.minFilter!==ut&&v.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.type===Cn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(M,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function be(M,v){let G=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",X));const Q=v.source;let ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));const ae=I(v);if(ae!==M.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[ae].usedTimes++;const ge=ee[M.__cacheKey];ge!==void 0&&(ee[M.__cacheKey].usedTimes--,ge.usedTimes===0&&L(v)),M.__cacheKey=ae,M.__webglTexture=ee[ae].texture}return G}function me(M,v,G){let Q=3553;v.isDataArrayTexture&&(Q=35866),v.isData3DTexture&&(Q=32879);const ee=be(M,v),ae=v.source;if(t.activeTexture(33984+G),t.bindTexture(Q,M.__webglTexture),ae.version!==ae.__currentVersion||ee===!0){s.pixelStorei(37440,v.flipY),s.pixelStorei(37441,v.premultiplyAlpha),s.pixelStorei(3317,v.unpackAlignment),s.pixelStorei(37443,0);const ge=_(v)&&C(v.image)===!1;let D=y(v.image,ge,!1,h);D=ft(v,D);const Y=C(D)||a,te=r.convert(v.format,v.encoding);let oe=r.convert(v.type),re=A(v.internalFormat,te,oe,v.encoding,v.isVideoTexture);W(Q,v,Y);let xe;const ye=v.mipmaps,Ne=a&&v.isVideoTexture!==!0,w=ae.__currentVersion===void 0||ee===!0,ie=F(v,D,Y);if(v.isDepthTexture)re=6402,a?v.type===Cn?re=36012:v.type===vn?re=33190:v.type===ri?re=35056:re=33189:v.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Bn&&re===6402&&v.type!==Io&&v.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=vn,oe=r.convert(v.type)),v.format===hi&&re===6402&&(re=34041,v.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ri,oe=r.convert(v.type))),w&&(Ne?t.texStorage2D(3553,1,re,D.width,D.height):t.texImage2D(3553,0,re,D.width,D.height,0,te,oe,null));else if(v.isDataTexture)if(ye.length>0&&Y){Ne&&w&&t.texStorage2D(3553,ie,re,ye[0].width,ye[0].height);for(let U=0,he=ye.length;U<he;U++)xe=ye[U],Ne?t.texSubImage2D(3553,U,0,0,xe.width,xe.height,te,oe,xe.data):t.texImage2D(3553,U,re,xe.width,xe.height,0,te,oe,xe.data);v.generateMipmaps=!1}else Ne?(w&&t.texStorage2D(3553,ie,re,D.width,D.height),t.texSubImage2D(3553,0,0,0,D.width,D.height,te,oe,D.data)):t.texImage2D(3553,0,re,D.width,D.height,0,te,oe,D.data);else if(v.isCompressedTexture){Ne&&w&&t.texStorage2D(3553,ie,re,ye[0].width,ye[0].height);for(let U=0,he=ye.length;U<he;U++)xe=ye[U],v.format!==It?te!==null?Ne?t.compressedTexSubImage2D(3553,U,0,0,xe.width,xe.height,te,xe.data):t.compressedTexImage2D(3553,U,re,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,U,0,0,xe.width,xe.height,te,oe,xe.data):t.texImage2D(3553,U,re,xe.width,xe.height,0,te,oe,xe.data)}else if(v.isDataArrayTexture)Ne?(w&&t.texStorage3D(35866,ie,re,D.width,D.height,D.depth),t.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,te,oe,D.data)):t.texImage3D(35866,0,re,D.width,D.height,D.depth,0,te,oe,D.data);else if(v.isData3DTexture)Ne?(w&&t.texStorage3D(32879,ie,re,D.width,D.height,D.depth),t.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,te,oe,D.data)):t.texImage3D(32879,0,re,D.width,D.height,D.depth,0,te,oe,D.data);else if(v.isFramebufferTexture){if(w)if(Ne)t.texStorage2D(3553,ie,re,D.width,D.height);else{let U=D.width,he=D.height;for(let ce=0;ce<ie;ce++)t.texImage2D(3553,ce,re,U,he,0,te,oe,null),U>>=1,he>>=1}}else if(ye.length>0&&Y){Ne&&w&&t.texStorage2D(3553,ie,re,ye[0].width,ye[0].height);for(let U=0,he=ye.length;U<he;U++)xe=ye[U],Ne?t.texSubImage2D(3553,U,0,0,te,oe,xe):t.texImage2D(3553,U,re,te,oe,xe);v.generateMipmaps=!1}else Ne?(w&&t.texStorage2D(3553,ie,re,D.width,D.height),t.texSubImage2D(3553,0,0,0,te,oe,D)):t.texImage2D(3553,0,re,te,oe,D);S(v,Y)&&T(Q),ae.__currentVersion=ae.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function _e(M,v,G){if(v.image.length!==6)return;const Q=be(M,v),ee=v.source;if(t.activeTexture(33984+G),t.bindTexture(34067,M.__webglTexture),ee.version!==ee.__currentVersion||Q===!0){s.pixelStorei(37440,v.flipY),s.pixelStorei(37441,v.premultiplyAlpha),s.pixelStorei(3317,v.unpackAlignment),s.pixelStorei(37443,0);const ae=v.isCompressedTexture||v.image[0].isCompressedTexture,ge=v.image[0]&&v.image[0].isDataTexture,D=[];for(let U=0;U<6;U++)!ae&&!ge?D[U]=y(v.image[U],!1,!0,c):D[U]=ge?v.image[U].image:v.image[U],D[U]=ft(v,D[U]);const Y=D[0],te=C(Y)||a,oe=r.convert(v.format,v.encoding),re=r.convert(v.type),xe=A(v.internalFormat,oe,re,v.encoding),ye=a&&v.isVideoTexture!==!0,Ne=ee.__currentVersion===void 0||Q===!0;let w=F(v,Y,te);W(34067,v,te);let ie;if(ae){ye&&Ne&&t.texStorage2D(34067,w,xe,Y.width,Y.height);for(let U=0;U<6;U++){ie=D[U].mipmaps;for(let he=0;he<ie.length;he++){const ce=ie[he];v.format!==It?oe!==null?ye?t.compressedTexSubImage2D(34069+U,he,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(34069+U,he,xe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(34069+U,he,0,0,ce.width,ce.height,oe,re,ce.data):t.texImage2D(34069+U,he,xe,ce.width,ce.height,0,oe,re,ce.data)}}}else{ie=v.mipmaps,ye&&Ne&&(ie.length>0&&w++,t.texStorage2D(34067,w,xe,D[0].width,D[0].height));for(let U=0;U<6;U++)if(ge){ye?t.texSubImage2D(34069+U,0,0,0,D[U].width,D[U].height,oe,re,D[U].data):t.texImage2D(34069+U,0,xe,D[U].width,D[U].height,0,oe,re,D[U].data);for(let he=0;he<ie.length;he++){const Se=ie[he].image[U].image;ye?t.texSubImage2D(34069+U,he+1,0,0,Se.width,Se.height,oe,re,Se.data):t.texImage2D(34069+U,he+1,xe,Se.width,Se.height,0,oe,re,Se.data)}}else{ye?t.texSubImage2D(34069+U,0,0,0,oe,re,D[U]):t.texImage2D(34069+U,0,xe,oe,re,D[U]);for(let he=0;he<ie.length;he++){const ce=ie[he];ye?t.texSubImage2D(34069+U,he+1,0,0,oe,re,ce.image[U]):t.texImage2D(34069+U,he+1,xe,oe,re,ce.image[U])}}}S(v,te)&&T(34067),ee.__currentVersion=ee.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ue(M,v,G,Q,ee){const ae=r.convert(G.format,G.encoding),ge=r.convert(G.type),D=A(G.internalFormat,ae,ge,G.encoding);n.get(v).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,D,v.width,v.height,v.depth,0,ae,ge,null):t.texImage2D(ee,0,D,v.width,v.height,0,ae,ge,null)),t.bindFramebuffer(36160,M),Pe(v)?d.framebufferTexture2DMultisampleEXT(36160,Q,ee,n.get(G).__webglTexture,0,Ze(v)):s.framebufferTexture2D(36160,Q,ee,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function Le(M,v,G){if(s.bindRenderbuffer(36161,M),v.depthBuffer&&!v.stencilBuffer){let Q=33189;if(G||Pe(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Cn?Q=36012:ee.type===vn&&(Q=33190));const ae=Ze(v);Pe(v)?d.renderbufferStorageMultisampleEXT(36161,ae,Q,v.width,v.height):s.renderbufferStorageMultisample(36161,ae,Q,v.width,v.height)}else s.renderbufferStorage(36161,Q,v.width,v.height);s.framebufferRenderbuffer(36160,36096,36161,M)}else if(v.depthBuffer&&v.stencilBuffer){const Q=Ze(v);G&&Pe(v)===!1?s.renderbufferStorageMultisample(36161,Q,35056,v.width,v.height):Pe(v)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,v.width,v.height):s.renderbufferStorage(36161,34041,v.width,v.height),s.framebufferRenderbuffer(36160,33306,36161,M)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ee=0;ee<Q.length;ee++){const ae=Q[ee],ge=r.convert(ae.format,ae.encoding),D=r.convert(ae.type),Y=A(ae.internalFormat,ge,D,ae.encoding),te=Ze(v);G&&Pe(v)===!1?s.renderbufferStorageMultisample(36161,te,Y,v.width,v.height):Pe(v)?d.renderbufferStorageMultisampleEXT(36161,te,Y,v.width,v.height):s.renderbufferStorage(36161,Y,v.width,v.height)}}s.bindRenderbuffer(36161,null)}function Ce(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),O(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,ee=Ze(v);if(v.depthTexture.format===Bn)Pe(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ee):s.framebufferTexture2D(36160,36096,3553,Q,0);else if(v.depthTexture.format===hi)Pe(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ee):s.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function pe(M){const v=n.get(M),G=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ce(v.__webglFramebuffer,M)}else if(G){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=s.createRenderbuffer(),Le(v.__webglDepthbuffer[Q],M,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Le(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function qe(M,v,G){const Q=n.get(M);v!==void 0&&ue(Q.__webglFramebuffer,M,M.texture,36064,3553),G!==void 0&&pe(M)}function et(M){const v=M.texture,G=n.get(M),Q=n.get(v);M.addEventListener("dispose",se),M.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=v.version,o.memory.textures++);const ee=M.isWebGLCubeRenderTarget===!0,ae=M.isWebGLMultipleRenderTargets===!0,ge=C(M)||a;if(ee){G.__webglFramebuffer=[];for(let D=0;D<6;D++)G.__webglFramebuffer[D]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),ae)if(i.drawBuffers){const D=M.texture;for(let Y=0,te=D.length;Y<te;Y++){const oe=n.get(D[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&Pe(M)===!1){const D=ae?v:[v];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let Y=0;Y<D.length;Y++){const te=D[Y];G.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer[Y]);const oe=r.convert(te.format,te.encoding),re=r.convert(te.type),xe=A(te.internalFormat,oe,re,te.encoding),ye=Ze(M);s.renderbufferStorageMultisample(36161,ye,xe,M.width,M.height),s.framebufferRenderbuffer(36160,36064+Y,36161,G.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(36161,null),M.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,Q.__webglTexture),W(34067,v,ge);for(let D=0;D<6;D++)ue(G.__webglFramebuffer[D],M,v,36064,34069+D);S(v,ge)&&T(34067),t.unbindTexture()}else if(ae){const D=M.texture;for(let Y=0,te=D.length;Y<te;Y++){const oe=D[Y],re=n.get(oe);t.bindTexture(3553,re.__webglTexture),W(3553,oe,ge),ue(G.__webglFramebuffer,M,oe,36064+Y,3553),S(oe,ge)&&T(3553)}t.unbindTexture()}else{let D=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?D=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,Q.__webglTexture),W(D,v,ge),ue(G.__webglFramebuffer,M,v,36064,D),S(v,ge)&&T(D),t.unbindTexture()}M.depthBuffer&&pe(M)}function je(M){const v=C(M)||a,G=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0,ee=G.length;Q<ee;Q++){const ae=G[Q];if(S(ae,v)){const ge=M.isWebGLCubeRenderTarget?34067:3553,D=n.get(ae).__webglTexture;t.bindTexture(ge,D),T(ge),t.unbindTexture()}}}function dt(M){if(a&&M.samples>0&&Pe(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],G=M.width,Q=M.height;let ee=16384;const ae=[],ge=M.stencilBuffer?33306:36096,D=n.get(M),Y=M.isWebGLMultipleRenderTargets===!0;if(Y)for(let te=0;te<v.length;te++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+te,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),s.framebufferTexture2D(36009,36064+te,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let te=0;te<v.length;te++){ae.push(36064+te),M.depthBuffer&&ae.push(ge);const oe=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(oe===!1&&(M.depthBuffer&&(ee|=256),M.stencilBuffer&&(ee|=1024)),Y&&s.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[te]),oe===!0&&(s.invalidateFramebuffer(36008,[ge]),s.invalidateFramebuffer(36009,[ge])),Y){const re=n.get(v[te]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,re,0)}s.blitFramebuffer(0,0,G,Q,0,0,G,Q,ee,9728),p&&s.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let te=0;te<v.length;te++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+te,36161,D.__webglColorRenderbuffer[te]);const oe=n.get(v[te]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),s.framebufferTexture2D(36009,36064+te,3553,oe,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function Ze(M){return Math.min(u,M.samples)}function Pe(M){const v=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Et(M){const v=o.render.frame;g.get(M)!==v&&(g.set(M,v),M.update())}function ft(M,v){const G=M.encoding,Q=M.format,ee=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Sr||G!==Sn&&(G===ke?a===!1?e.has("EXT_sRGB")===!0&&Q===It?(M.format=Sr,M.minFilter=Bt,M.generateMipmaps=!1):v=zo.sRGBToLinear(v):(Q!==It||ee!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),v}this.allocateTextureUnit=V,this.resetTextureUnits=Z,this.setTexture2D=O,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=qe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Pe}function Sp(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Fn)return 5121;if(r===lc)return 32819;if(r===cc)return 32820;if(r===rc)return 5120;if(r===ac)return 5122;if(r===Io)return 5123;if(r===oc)return 5124;if(r===vn)return 5125;if(r===Cn)return 5126;if(r===wi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===hc)return 6406;if(r===It)return 6408;if(r===dc)return 6409;if(r===fc)return 6410;if(r===Bn)return 6402;if(r===hi)return 34041;if(r===pc)return 6403;if(r===uc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Sr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===mc)return 36244;if(r===gc)return 33319;if(r===xc)return 33320;if(r===Ac)return 36249;if(r===ks||r===Vs||r===Hs||r===Ws)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===da||r===fa||r===pa||r===ma)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===da)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ma)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_c)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ga||r===xa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ga)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===xa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Aa||r===_a||r===Ea||r===va||r===Ca||r===Da||r===Ba||r===ya||r===Ma||r===Fa||r===Sa||r===ba||r===wa||r===Ta)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Aa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_a)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ea)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===va)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ca)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Da)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ba)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ya)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ma)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ba)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ta)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===La)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===La)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ri?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class bp extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class as extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wp={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const E=new as;E.matrixAutoUpdate=!1,E.visible=!1,c.joints[m.jointName]=E,c.add(E)}const x=c.joints[m.jointName];f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class Tp extends Mt{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Bn,h!==Bn&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bn&&(n=vn),n===void 0&&h===hi&&(n=ri),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ut,this.minFilter=l!==void 0?l:ut,this.flipY=!1,this.generateMipmaps=!1}}class Lp extends Pn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,p=null;const g=t.getContextAttributes();let m=null,f=null;const x=[],E=[],y=new xt;y.layers.enable(1),y.viewport=new Oe;const C=new xt;C.layers.enable(2),C.viewport=new Oe;const _=[y,C],S=new bp;S.layers.enable(1),S.layers.enable(2);let T=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=x[I];return O===void 0&&(O=new gr,x[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=x[I];return O===void 0&&(O=new gr,x[I]=O),O.getGripSpace()},this.getHand=function(I){let O=x[I];return O===void 0&&(O=new gr,x[I]=O),O.getHandSpace()};function F(I){const O=E.indexOf(I.inputSource);if(O===-1)return;const $=x[O];$!==void 0&&$.dispatchEvent({type:I.type,data:I.inputSource})}function P(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",X);for(let I=0;I<x.length;I++){const O=E[I];O!==null&&(E[I]=null,x[I].disconnect(O))}T=null,A=null,e.setRenderTarget(m),d=null,u=null,h=null,i=null,f=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",P),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,O),i.updateRenderState({baseLayer:d}),f=new bn(d.framebufferWidth,d.framebufferHeight,{format:It,type:Fn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let O=null,$=null,J=null;g.depth&&(J=g.stencil?35056:33190,O=g.stencil?hi:Bn,$=g.stencil?ri:vn);const K={colorFormat:32856,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(K),i.updateRenderState({layers:[u]}),f=new bn(u.textureWidth,u.textureHeight,{format:It,type:Fn,depthTexture:new Tp(u.textureWidth,u.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const de=e.properties.get(f);de.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function X(I){for(let O=0;O<I.removed.length;O++){const $=I.removed[O],J=E.indexOf($);J>=0&&(E[J]=null,x[J].dispatchEvent({type:"disconnected",data:$}))}for(let O=0;O<I.added.length;O++){const $=I.added[O];let J=E.indexOf($);if(J===-1){for(let de=0;de<x.length;de++)if(de>=E.length){E.push($),J=de;break}else if(E[de]===null){E[de]=$,J=de;break}if(J===-1)break}const K=x[J];K&&K.dispatchEvent({type:"connected",data:$})}}const se=new b,z=new b;function L(I,O,$){se.setFromMatrixPosition(O.matrixWorld),z.setFromMatrixPosition($.matrixWorld);const J=se.distanceTo(z),K=O.projectionMatrix.elements,de=$.projectionMatrix.elements,Ae=K[14]/(K[10]-1),W=K[14]/(K[10]+1),be=(K[9]+1)/K[5],me=(K[9]-1)/K[5],_e=(K[8]-1)/K[0],ue=(de[8]+1)/de[0],Le=Ae*_e,Ce=Ae*ue,pe=J/(-_e+ue),qe=pe*-_e;O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(qe),I.translateZ(pe),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const et=Ae+pe,je=W+pe,dt=Le-qe,Ze=Ce+(J-qe),Pe=be*W/je*et,Et=me*W/je*et;I.projectionMatrix.makePerspective(dt,Ze,Pe,Et,et,je)}function q(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;S.near=C.near=y.near=I.near,S.far=C.far=y.far=I.far,(T!==S.near||A!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,A=S.far);const O=I.parent,$=S.cameras;q(S,O);for(let K=0;K<$.length;K++)q($[K],O);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),I.matrix.copy(S.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const J=I.children;for(let K=0,de=J.length;K<de;K++)J[K].updateMatrixWorld(!0);$.length===2?L(S,y,C):S.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(I){u!==null&&(u.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)};let j=null;function Z(I,O){if(c=O.getViewerPose(l||o),p=O,c!==null){const $=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let J=!1;$.length!==S.cameras.length&&(S.cameras.length=0,J=!0);for(let K=0;K<$.length;K++){const de=$[K];let Ae=null;if(d!==null)Ae=d.getViewport(de);else{const be=h.getViewSubImage(u,de);Ae=be.viewport,K===0&&(e.setRenderTargetTextures(f,be.colorTexture,u.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(f))}let W=_[K];W===void 0&&(W=new xt,W.layers.enable(K),W.viewport=new Oe,_[K]=W),W.matrix.fromArray(de.transform.matrix),W.projectionMatrix.fromArray(de.projectionMatrix),W.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),K===0&&S.matrix.copy(W.matrix),J===!0&&S.cameras.push(W)}}for(let $=0;$<x.length;$++){const J=E[$],K=x[$];J!==null&&K!==void 0&&K.update(J,O,l||o)}j&&j(I,O),p=null}const V=new qo;V.setAnimationLoop(Z),this.setAnimationLoop=function(I){j=I},this.dispose=function(){}}}function Pp(s,e){function t(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,x,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),c(m,f)):f.isMeshStandardMaterial?(i(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,y)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?a(m,f,x,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===At&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===At&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const C=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*C}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let E;f.map?E=f.map:f.specularMap?E=f.specularMap:f.displacementMap?E=f.displacementMap:f.normalMap?E=f.normalMap:f.bumpMap?E=f.bumpMap:f.roughnessMap?E=f.roughnessMap:f.metalnessMap?E=f.metalnessMap:f.alphaMap?E=f.alphaMap:f.emissiveMap?E=f.emissiveMap:f.clearcoatMap?E=f.clearcoatMap:f.clearcoatNormalMap?E=f.clearcoatNormalMap:f.clearcoatRoughnessMap?E=f.clearcoatRoughnessMap:f.iridescenceMap?E=f.iridescenceMap:f.iridescenceThicknessMap?E=f.iridescenceThicknessMap:f.specularIntensityMap?E=f.specularIntensityMap:f.specularColorMap?E=f.specularColorMap:f.transmissionMap?E=f.transmissionMap:f.thicknessMap?E=f.thicknessMap:f.sheenColorMap?E=f.sheenColorMap:f.sheenRoughnessMap&&(E=f.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix));let y;f.aoMap?y=f.aoMap:f.lightMap&&(y=f.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,x,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=E*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===At&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Rp(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(E,y){const C=y.program;n.uniformBlockBinding(E,C)}function c(E,y){let C=i[E.id];C===void 0&&(g(E),C=h(E),i[E.id]=C,E.addEventListener("dispose",f));const _=y.program;n.updateUBOMapping(E,_);const S=e.render.frame;r[E.id]!==S&&(d(E),r[E.id]=S)}function h(E){const y=u();E.__bindingPointIndex=y;const C=s.createBuffer(),_=E.__size,S=E.usage;return s.bindBuffer(35345,C),s.bufferData(35345,_,S),s.bindBuffer(35345,null),s.bindBufferBase(35345,y,C),C}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=i[E.id],C=E.uniforms,_=E.__cache;s.bindBuffer(35345,y);for(let S=0,T=C.length;S<T;S++){const A=C[S];if(p(A,S,_)===!0){const F=A.value,P=A.__offset;typeof F=="number"?(A.__data[0]=F,s.bufferSubData(35345,P,A.__data)):(A.value.isMatrix3?(A.__data[0]=A.value.elements[0],A.__data[1]=A.value.elements[1],A.__data[2]=A.value.elements[2],A.__data[3]=A.value.elements[0],A.__data[4]=A.value.elements[3],A.__data[5]=A.value.elements[4],A.__data[6]=A.value.elements[5],A.__data[7]=A.value.elements[0],A.__data[8]=A.value.elements[6],A.__data[9]=A.value.elements[7],A.__data[10]=A.value.elements[8],A.__data[11]=A.value.elements[0]):F.toArray(A.__data),s.bufferSubData(35345,P,A.__data))}}s.bindBuffer(35345,null)}function p(E,y,C){const _=E.value;if(C[y]===void 0)return typeof _=="number"?C[y]=_:C[y]=_.clone(),!0;if(typeof _=="number"){if(C[y]!==_)return C[y]=_,!0}else{const S=C[y];if(S.equals(_)===!1)return S.copy(_),!0}return!1}function g(E){const y=E.uniforms;let C=0;const _=16;let S=0;for(let T=0,A=y.length;T<A;T++){const F=y[T],P=m(F);if(F.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=C,T>0){S=C%_;const X=_-S;S!==0&&X-P.boundary<0&&(C+=_-S,F.__offset=C)}C+=P.storage}return S=C%_,S>0&&(C+=_-S),E.__size=C,E.__cache={},this}function m(E){const y=E.value,C={boundary:0,storage:0};return typeof y=="number"?(C.boundary=4,C.storage=4):y.isVector2?(C.boundary=8,C.storage=8):y.isVector3||y.isColor?(C.boundary=16,C.storage=12):y.isVector4?(C.boundary=16,C.storage=16):y.isMatrix3?(C.boundary=48,C.storage=48):y.isMatrix4?(C.boundary=64,C.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),C}function f(E){const y=E.target;y.removeEventListener("dispose",f);const C=o.indexOf(y.__bindingPointIndex);o.splice(C,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function x(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:x}}function Ip(){const s=Ti("canvas");return s.style.display="block",s}function Jo(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Ip(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Sn,this.physicallyCorrectLights=!1,this.toneMapping=jt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let f=!1,x=0,E=0,y=null,C=-1,_=null;const S=new Oe,T=new Oe;let A=null,F=e.width,P=e.height,X=1,se=null,z=null;const L=new Oe(0,0,F,P),q=new Oe(0,0,F,P);let j=!1;const Z=new Xr;let V=!1,I=!1,O=null;const $=new Ve,J=new le,K=new b,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return y===null?X:1}let W=t;function be(B,N){for(let k=0;k<B.length;k++){const R=B[k],H=e.getContext(R,N);if(H!==null)return H}return null}try{const B={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gr}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),W===null){const N=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&N.shift(),W=be(N,B),W===null)throw be(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let me,_e,ue,Le,Ce,pe,qe,et,je,dt,Ze,Pe,Et,ft,M,v,G,Q,ee,ae,ge,D,Y,te;function oe(){me=new qd(W),_e=new zd(W,me,s),me.init(_e),D=new Sp(W,me,_e),ue=new Mp(W,me,_e),Le=new jd,Ce=new dp,pe=new Fp(W,me,ue,Ce,_e,D,Le),qe=new Gd(m),et=new Wd(m),je=new sh(W,_e),Y=new Nd(W,me,je,_e),dt=new Xd(W,je,Le,Y),Ze=new Kd(W,dt,je,Le),ee=new $d(W,_e,pe),v=new Ud(Ce),Pe=new up(m,qe,et,me,_e,Y,v),Et=new Pp(m,Ce),ft=new pp,M=new Ep(me,_e),Q=new Id(m,qe,ue,Ze,h,o),G=new yp(m,Ze,_e),te=new Rp(W,Le,_e,ue),ae=new Od(W,me,Le,_e),ge=new Yd(W,me,Le,_e),Le.programs=Pe.programs,m.capabilities=_e,m.extensions=me,m.properties=Ce,m.renderLists=ft,m.shadowMap=G,m.state=ue,m.info=Le}oe();const re=new Lp(m,W);this.xr=re,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const B=me.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=me.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(B){B!==void 0&&(X=B,this.setSize(F,P,!1))},this.getSize=function(B){return B.set(F,P)},this.setSize=function(B,N,k){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=B,P=N,e.width=Math.floor(B*X),e.height=Math.floor(N*X),k!==!1&&(e.style.width=B+"px",e.style.height=N+"px"),this.setViewport(0,0,B,N)},this.getDrawingBufferSize=function(B){return B.set(F*X,P*X).floor()},this.setDrawingBufferSize=function(B,N,k){F=B,P=N,X=k,e.width=Math.floor(B*k),e.height=Math.floor(N*k),this.setViewport(0,0,B,N)},this.getCurrentViewport=function(B){return B.copy(S)},this.getViewport=function(B){return B.copy(L)},this.setViewport=function(B,N,k,R){B.isVector4?L.set(B.x,B.y,B.z,B.w):L.set(B,N,k,R),ue.viewport(S.copy(L).multiplyScalar(X).floor())},this.getScissor=function(B){return B.copy(q)},this.setScissor=function(B,N,k,R){B.isVector4?q.set(B.x,B.y,B.z,B.w):q.set(B,N,k,R),ue.scissor(T.copy(q).multiplyScalar(X).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(B){ue.setScissorTest(j=B)},this.setOpaqueSort=function(B){se=B},this.setTransparentSort=function(B){z=B},this.getClearColor=function(B){return B.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(B=!0,N=!0,k=!0){let R=0;B&&(R|=16384),N&&(R|=256),k&&(R|=1024),W.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),ft.dispose(),M.dispose(),Ce.dispose(),qe.dispose(),et.dispose(),Ze.dispose(),Y.dispose(),te.dispose(),Pe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Se),re.removeEventListener("sessionend",Ke),O&&(O.dispose(),O=null),He.stop()};function xe(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const B=Le.autoReset,N=G.enabled,k=G.autoUpdate,R=G.needsUpdate,H=G.type;oe(),Le.autoReset=B,G.enabled=N,G.autoUpdate=k,G.needsUpdate=R,G.type=H}function Ne(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function w(B){const N=B.target;N.removeEventListener("dispose",w),ie(N)}function ie(B){U(B),Ce.remove(B)}function U(B){const N=Ce.get(B).programs;N!==void 0&&(N.forEach(function(k){Pe.releaseProgram(k)}),B.isShaderMaterial&&Pe.releaseShaderCache(B))}this.renderBufferDirect=function(B,N,k,R,H,fe){N===null&&(N=de);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,De=yl(B,N,k,R,H);ue.setMaterial(R,Ee);let ve=k.index;const Re=k.attributes.position;if(ve===null){if(Re===void 0||Re.count===0)return}else if(ve.count===0)return;let Me=1;R.wireframe===!0&&(ve=dt.getWireframeAttribute(k),Me=2),Y.setup(H,R,De,k,ve);let Fe,Ge=ae;ve!==null&&(Fe=je.get(ve),Ge=ge,Ge.setIndex(Fe));const un=ve!==null?ve.count:Re.count,Nn=k.drawRange.start*Me,On=k.drawRange.count*Me,Pt=fe!==null?fe.start*Me:0,we=fe!==null?fe.count*Me:1/0,zn=Math.max(Nn,Pt),Xe=Math.min(un,Nn+On,Pt+we)-1,Ct=Math.max(0,Xe-zn+1);if(Ct!==0){if(H.isMesh)R.wireframe===!0?(ue.setLineWidth(R.wireframeLinewidth*Ae()),Ge.setMode(1)):Ge.setMode(4);else if(H.isLine){let Qt=R.linewidth;Qt===void 0&&(Qt=1),ue.setLineWidth(Qt*Ae()),H.isLineSegments?Ge.setMode(1):H.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else H.isPoints?Ge.setMode(0):H.isSprite&&Ge.setMode(4);if(H.isInstancedMesh)Ge.renderInstances(zn,Ct,H.count);else if(k.isInstancedBufferGeometry){const Qt=Math.min(k.instanceCount,k._maxInstanceCount);Ge.renderInstances(zn,Ct,Qt)}else Ge.render(zn,Ct)}},this.compile=function(B,N){function k(R,H,fe){R.transparent===!0&&R.side===at?(R.side=At,R.needsUpdate=!0,Ui(R,H,fe),R.side=cn,R.needsUpdate=!0,Ui(R,H,fe),R.side=at):Ui(R,H,fe)}d=M.get(B),d.init(),g.push(d),B.traverseVisible(function(R){R.isLight&&R.layers.test(N.layers)&&(d.pushLight(R),R.castShadow&&d.pushShadow(R))}),d.setupLights(m.physicallyCorrectLights),B.traverse(function(R){const H=R.material;if(H)if(Array.isArray(H))for(let fe=0;fe<H.length;fe++){const Ee=H[fe];k(Ee,B,R)}else k(H,B,R)}),g.pop(),d=null};let he=null;function ce(B){he&&he(B)}function Se(){He.stop()}function Ke(){He.start()}const He=new qo;He.setAnimationLoop(ce),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(B){he=B,re.setAnimationLoop(B),B===null?He.stop():He.start()},re.addEventListener("sessionstart",Se),re.addEventListener("sessionend",Ke),this.render=function(B,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),B.isScene===!0&&B.onBeforeRender(m,B,N,y),d=M.get(B,g.length),d.init(),g.push(d),$.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix($),I=this.localClippingEnabled,V=v.init(this.clippingPlanes,I,N),u=ft.get(B,p.length),u.init(),p.push(u),Kt(B,N,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(se,z),V===!0&&v.beginShadows();const k=d.state.shadowsArray;if(G.render(k,B,N),V===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(u,B),d.setupLights(m.physicallyCorrectLights),N.isArrayCamera){const R=N.cameras;for(let H=0,fe=R.length;H<fe;H++){const Ee=R[H];Ue(u,B,Ee,Ee.viewport)}}else Ue(u,B,N);y!==null&&(pe.updateMultisampleRenderTarget(y),pe.updateRenderTargetMipmap(y)),B.isScene===!0&&B.onAfterRender(m,B,N),Y.resetDefaultState(),C=-1,_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function Kt(B,N,k,R){if(B.visible===!1)return;if(B.layers.test(N.layers)){if(B.isGroup)k=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(N);else if(B.isLight)d.pushLight(B),B.castShadow&&d.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||Z.intersectsSprite(B)){R&&K.setFromMatrixPosition(B.matrixWorld).applyMatrix4($);const Ee=Ze.update(B),De=B.material;De.visible&&u.push(B,Ee,De,k,K.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(B.isSkinnedMesh&&B.skeleton.frame!==Le.render.frame&&(B.skeleton.update(),B.skeleton.frame=Le.render.frame),!B.frustumCulled||Z.intersectsObject(B))){R&&K.setFromMatrixPosition(B.matrixWorld).applyMatrix4($);const Ee=Ze.update(B),De=B.material;if(Array.isArray(De)){const ve=Ee.groups;for(let Re=0,Me=ve.length;Re<Me;Re++){const Fe=ve[Re],Ge=De[Fe.materialIndex];Ge&&Ge.visible&&u.push(B,Ee,Ge,k,K.z,Fe)}}else De.visible&&u.push(B,Ee,De,k,K.z,null)}}const fe=B.children;for(let Ee=0,De=fe.length;Ee<De;Ee++)Kt(fe[Ee],N,k,R)}function Ue(B,N,k,R){const H=B.opaque,fe=B.transmissive,Ee=B.transparent;d.setupLightsView(k),fe.length>0&&Ut(H,N,k),R&&ue.viewport(S.copy(R)),H.length>0&&vt(H,N,k),fe.length>0&&vt(fe,N,k),Ee.length>0&&vt(Ee,N,k),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ut(B,N,k){const R=_e.isWebGL2;O===null&&(O=new bn(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?wi:Fn,minFilter:Ss,samples:R&&r===!0?4:0})),m.getDrawingBufferSize(J),R?O.setSize(J.x,J.y):O.setSize(vs(J.x),vs(J.y));const H=m.getRenderTarget();m.setRenderTarget(O),m.clear();const fe=m.toneMapping;m.toneMapping=jt,vt(B,N,k),m.toneMapping=fe,pe.updateMultisampleRenderTarget(O),pe.updateRenderTargetMipmap(O),m.setRenderTarget(H)}function vt(B,N,k){const R=N.isScene===!0?N.overrideMaterial:null;for(let H=0,fe=B.length;H<fe;H++){const Ee=B[H],De=Ee.object,ve=Ee.geometry,Re=R===null?Ee.material:R,Me=Ee.group;De.layers.test(k.layers)&&Bl(De,N,k,ve,Re,Me)}}function Bl(B,N,k,R,H,fe){B.onBeforeRender(m,N,k,R,H,fe),B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),H.onBeforeRender(m,N,k,R,B,fe),H.transparent===!0&&H.side===at?(H.side=At,H.needsUpdate=!0,m.renderBufferDirect(k,N,R,H,B,fe),H.side=cn,H.needsUpdate=!0,m.renderBufferDirect(k,N,R,H,B,fe),H.side=at):m.renderBufferDirect(k,N,R,H,B,fe),B.onAfterRender(m,N,k,R,H,fe)}function Ui(B,N,k){N.isScene!==!0&&(N=de);const R=Ce.get(B),H=d.state.lights,fe=d.state.shadowsArray,Ee=H.state.version,De=Pe.getParameters(B,H.state,fe,N,k),ve=Pe.getProgramCacheKey(De);let Re=R.programs;R.environment=B.isMeshStandardMaterial?N.environment:null,R.fog=N.fog,R.envMap=(B.isMeshStandardMaterial?et:qe).get(B.envMap||R.environment),Re===void 0&&(B.addEventListener("dispose",w),Re=new Map,R.programs=Re);let Me=Re.get(ve);if(Me!==void 0){if(R.currentProgram===Me&&R.lightsStateVersion===Ee)return ia(B,De),Me}else De.uniforms=Pe.getUniforms(B),B.onBuild(k,De,m),B.onBeforeCompile(De,m),Me=Pe.acquireProgram(De,ve),Re.set(ve,Me),R.uniforms=De.uniforms;const Fe=R.uniforms;(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Fe.clippingPlanes=v.uniform),ia(B,De),R.needsLights=Fl(B),R.lightsStateVersion=Ee,R.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix);const Ge=Me.getUniforms(),un=ms.seqWithValue(Ge.seq,Fe);return R.currentProgram=Me,R.uniformsList=un,Me}function ia(B,N){const k=Ce.get(B);k.outputEncoding=N.outputEncoding,k.instancing=N.instancing,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function yl(B,N,k,R,H){N.isScene!==!0&&(N=de),pe.resetTextureUnits();const fe=N.fog,Ee=R.isMeshStandardMaterial?N.environment:null,De=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Sn,ve=(R.isMeshStandardMaterial?et:qe).get(R.envMap||Ee),Re=R.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Me=!!R.normalMap&&!!k.attributes.tangent,Fe=!!k.morphAttributes.position,Ge=!!k.morphAttributes.normal,un=!!k.morphAttributes.color,Nn=R.toneMapped?m.toneMapping:jt,On=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Pt=On!==void 0?On.length:0,we=Ce.get(R),zn=d.state.lights;if(V===!0&&(I===!0||B!==_)){const pt=B===_&&R.id===C;v.setState(R,B,pt)}let Xe=!1;R.version===we.__version?(we.needsLights&&we.lightsStateVersion!==zn.state.version||we.outputEncoding!==De||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||we.envMap!==ve||R.fog===!0&&we.fog!==fe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==v.numPlanes||we.numIntersection!==v.numIntersection)||we.vertexAlphas!==Re||we.vertexTangents!==Me||we.morphTargets!==Fe||we.morphNormals!==Ge||we.morphColors!==un||we.toneMapping!==Nn||_e.isWebGL2===!0&&we.morphTargetsCount!==Pt)&&(Xe=!0):(Xe=!0,we.__version=R.version);let Ct=we.currentProgram;Xe===!0&&(Ct=Ui(R,N,H));let Qt=!1,mi=!1,zs=!1;const rt=Ct.getUniforms(),dn=we.uniforms;if(ue.useProgram(Ct.program)&&(Qt=!0,mi=!0,zs=!0),R.id!==C&&(C=R.id,mi=!0),Qt||_!==B){if(rt.setValue(W,"projectionMatrix",B.projectionMatrix),_e.logarithmicDepthBuffer&&rt.setValue(W,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),_!==B&&(_=B,mi=!0,zs=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const pt=rt.map.cameraPosition;pt!==void 0&&pt.setValue(W,K.setFromMatrixPosition(B.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&rt.setValue(W,"isOrthographic",B.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||H.isSkinnedMesh)&&rt.setValue(W,"viewMatrix",B.matrixWorldInverse)}if(H.isSkinnedMesh){rt.setOptional(W,H,"bindMatrix"),rt.setOptional(W,H,"bindMatrixInverse");const pt=H.skeleton;pt&&(_e.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),rt.setValue(W,"boneTexture",pt.boneTexture,pe),rt.setValue(W,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Us=k.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0&&_e.isWebGL2===!0)&&ee.update(H,k,R,Ct),(mi||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,rt.setValue(W,"receiveShadow",H.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(dn.envMap.value=ve,dn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),mi&&(rt.setValue(W,"toneMappingExposure",m.toneMappingExposure),we.needsLights&&Ml(dn,zs),fe&&R.fog===!0&&Et.refreshFogUniforms(dn,fe),Et.refreshMaterialUniforms(dn,R,X,P,O),ms.upload(W,we.uniformsList,dn,pe)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(ms.upload(W,we.uniformsList,dn,pe),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&rt.setValue(W,"center",H.center),rt.setValue(W,"modelViewMatrix",H.modelViewMatrix),rt.setValue(W,"normalMatrix",H.normalMatrix),rt.setValue(W,"modelMatrix",H.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const pt=R.uniformsGroups;for(let Gs=0,Sl=pt.length;Gs<Sl;Gs++)if(_e.isWebGL2){const sa=pt[Gs];te.update(sa,Ct),te.bind(sa,Ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ct}function Ml(B,N){B.ambientLightColor.needsUpdate=N,B.lightProbe.needsUpdate=N,B.directionalLights.needsUpdate=N,B.directionalLightShadows.needsUpdate=N,B.pointLights.needsUpdate=N,B.pointLightShadows.needsUpdate=N,B.spotLights.needsUpdate=N,B.spotLightShadows.needsUpdate=N,B.rectAreaLights.needsUpdate=N,B.hemisphereLights.needsUpdate=N}function Fl(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(B,N,k){Ce.get(B.texture).__webglTexture=N,Ce.get(B.depthTexture).__webglTexture=k;const R=Ce.get(B);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=k===void 0,R.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,N){const k=Ce.get(B);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(B,N=0,k=0){y=B,x=N,E=k;let R=!0;if(B){const ve=Ce.get(B);ve.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),R=!1):ve.__webglFramebuffer===void 0?pe.setupRenderTarget(B):ve.__hasExternalTextures&&pe.rebindTextures(B,Ce.get(B.texture).__webglTexture,Ce.get(B.depthTexture).__webglTexture)}let H=null,fe=!1,Ee=!1;if(B){const ve=B.texture;(ve.isData3DTexture||ve.isDataArrayTexture)&&(Ee=!0);const Re=Ce.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(H=Re[N],fe=!0):_e.isWebGL2&&B.samples>0&&pe.useMultisampledRTT(B)===!1?H=Ce.get(B).__webglMultisampledFramebuffer:H=Re,S.copy(B.viewport),T.copy(B.scissor),A=B.scissorTest}else S.copy(L).multiplyScalar(X).floor(),T.copy(q).multiplyScalar(X).floor(),A=j;if(ue.bindFramebuffer(36160,H)&&_e.drawBuffers&&R&&ue.drawBuffers(B,H),ue.viewport(S),ue.scissor(T),ue.setScissorTest(A),fe){const ve=Ce.get(B.texture);W.framebufferTexture2D(36160,36064,34069+N,ve.__webglTexture,k)}else if(Ee){const ve=Ce.get(B.texture),Re=N||0;W.framebufferTextureLayer(36160,36064,ve.__webglTexture,k||0,Re)}C=-1},this.readRenderTargetPixels=function(B,N,k,R,H,fe,Ee){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ce.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){ue.bindFramebuffer(36160,De);try{const ve=B.texture,Re=ve.format,Me=ve.type;if(Re!==It&&D.convert(Re)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Me===wi&&(me.has("EXT_color_buffer_half_float")||_e.isWebGL2&&me.has("EXT_color_buffer_float"));if(Me!==Fn&&D.convert(Me)!==W.getParameter(35738)&&!(Me===Cn&&(_e.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=B.width-R&&k>=0&&k<=B.height-H&&W.readPixels(N,k,R,H,D.convert(Re),D.convert(Me),fe)}finally{const ve=y!==null?Ce.get(y).__webglFramebuffer:null;ue.bindFramebuffer(36160,ve)}}},this.copyFramebufferToTexture=function(B,N,k=0){const R=Math.pow(2,-k),H=Math.floor(N.image.width*R),fe=Math.floor(N.image.height*R);pe.setTexture2D(N,0),W.copyTexSubImage2D(3553,k,0,0,B.x,B.y,H,fe),ue.unbindTexture()},this.copyTextureToTexture=function(B,N,k,R=0){const H=N.image.width,fe=N.image.height,Ee=D.convert(k.format),De=D.convert(k.type);pe.setTexture2D(k,0),W.pixelStorei(37440,k.flipY),W.pixelStorei(37441,k.premultiplyAlpha),W.pixelStorei(3317,k.unpackAlignment),N.isDataTexture?W.texSubImage2D(3553,R,B.x,B.y,H,fe,Ee,De,N.image.data):N.isCompressedTexture?W.compressedTexSubImage2D(3553,R,B.x,B.y,N.mipmaps[0].width,N.mipmaps[0].height,Ee,N.mipmaps[0].data):W.texSubImage2D(3553,R,B.x,B.y,Ee,De,N.image),R===0&&k.generateMipmaps&&W.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(B,N,k,R,H=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=B.max.x-B.min.x+1,Ee=B.max.y-B.min.y+1,De=B.max.z-B.min.z+1,ve=D.convert(R.format),Re=D.convert(R.type);let Me;if(R.isData3DTexture)pe.setTexture3D(R,0),Me=32879;else if(R.isDataArrayTexture)pe.setTexture2DArray(R,0),Me=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,R.flipY),W.pixelStorei(37441,R.premultiplyAlpha),W.pixelStorei(3317,R.unpackAlignment);const Fe=W.getParameter(3314),Ge=W.getParameter(32878),un=W.getParameter(3316),Nn=W.getParameter(3315),On=W.getParameter(32877),Pt=k.isCompressedTexture?k.mipmaps[0]:k.image;W.pixelStorei(3314,Pt.width),W.pixelStorei(32878,Pt.height),W.pixelStorei(3316,B.min.x),W.pixelStorei(3315,B.min.y),W.pixelStorei(32877,B.min.z),k.isDataTexture||k.isData3DTexture?W.texSubImage3D(Me,H,N.x,N.y,N.z,fe,Ee,De,ve,Re,Pt.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Me,H,N.x,N.y,N.z,fe,Ee,De,ve,Pt.data)):W.texSubImage3D(Me,H,N.x,N.y,N.z,fe,Ee,De,ve,Re,Pt),W.pixelStorei(3314,Fe),W.pixelStorei(32878,Ge),W.pixelStorei(3316,un),W.pixelStorei(3315,Nn),W.pixelStorei(32877,On),H===0&&R.generateMipmaps&&W.generateMipmap(Me),ue.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?pe.setTextureCube(B,0):B.isData3DTexture?pe.setTexture3D(B,0):B.isDataArrayTexture?pe.setTexture2DArray(B,0):pe.setTexture2D(B,0),ue.unbindTexture()},this.resetState=function(){x=0,E=0,y=null,ue.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Np extends Jo{}Np.prototype.isWebGL1Renderer=!0;class Op extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class $o extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const go=new Ve,Tr=new Wr,os=new bs,ls=new b;class zp extends $e{constructor(e=new Ft,t=new $o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(i),os.radius+=r,e.ray.intersectsSphere(os)===!1)return;go.copy(i).invert(),Tr.copy(e.ray).applyMatrix4(go);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,m=p;g<m;g++){const f=c.getX(g);ls.fromBufferAttribute(u,f),xo(ls,f,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,m=p;g<m;g++)ls.fromBufferAttribute(u,g),xo(ls,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xo(s,e,t,n,i,r,o){const a=Tr.distanceSqToPoint(s);if(a<t){const l=new b;Tr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ot{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new le:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],r=[],o=[],a=new b,l=new Ve;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(tt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(tt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Zr extends Ot{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new le,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Up extends Zr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jr(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const cs=new b,xr=new Jr,Ar=new Jr,_r=new Jr;class Ko extends Ot{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(cs.subVectors(i[0],i[1]).add(i[0]),c=cs);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(cs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=cs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);m<1e-4&&(m=1),g<1e-4&&(g=m),f<1e-4&&(f=m),xr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,m,f),Ar.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,m,f),_r.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,m,f)}else this.curveType==="catmullrom"&&(xr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ar.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_r.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(xr.calc(l),Ar.calc(l),_r.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ao(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Gp(s,e){const t=1-s;return t*t*e}function kp(s,e){return 2*(1-s)*s*e}function Vp(s,e){return s*s*e}function Si(s,e,t,n){return Gp(s,e)+kp(s,t)+Vp(s,n)}function Hp(s,e){const t=1-s;return t*t*t*e}function Wp(s,e){const t=1-s;return 3*t*t*s*e}function qp(s,e){return 3*(1-s)*s*s*e}function Xp(s,e){return s*s*s*e}function bi(s,e,t,n,i){return Hp(s,e)+Wp(s,t)+qp(s,n)+Xp(s,i)}class Qo extends Ot{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bi(e,i.x,r.x,o.x,a.x),bi(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yp extends Ot{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bi(e,i.x,r.x,o.x,a.x),bi(e,i.y,r.y,o.y,a.y),bi(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $r extends Ot{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new le;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jp extends Ot{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class el extends Ot{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Si(e,i.x,r.x,o.x),Si(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tl extends Ot{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Si(e,i.x,r.x,o.x),Si(e,i.y,r.y,o.y),Si(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nl extends Ot{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ao(a,l.x,c.x,h.x,u.x),Ao(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}}var il=Object.freeze({__proto__:null,ArcCurve:Up,CatmullRomCurve3:Ko,CubicBezierCurve:Qo,CubicBezierCurve3:Yp,EllipseCurve:Zr,LineCurve:$r,LineCurve3:jp,QuadraticBezierCurve:el,QuadraticBezierCurve3:tl,SplineCurve:nl});class Zp extends Ot{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new $r(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new il[i.type]().fromJSON(i))}return this}}class Lr extends Zp{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new $r(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new el(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Qo(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new nl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Zr(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Mn extends Lr{constructor(e){super(e),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Lr().fromJSON(i))}return this}}const Jp={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=sl(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=t0(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?1/p:0}return Li(r,o,t,a,l,p),o}};function sl(s,e,t,n,i){let r,o;if(i===d0(s,e,t,n)>0)for(r=e;r<t;r+=n)o=_o(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=_o(r,s[r],s[r+1],o);return o&&Ts(o,o.next)&&(Ri(o),o=o.next),o}function hn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ts(t,t.next)||ze(t.prev,t,t.next)===0)){if(Ri(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Li(s,e,t,n,i,r,o){if(!s)return;!o&&r&&a0(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Kp(s,n,i,r):$p(s)){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),Ri(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Qp(hn(s),e,t),Li(s,e,t,n,i,r,2)):o===2&&e0(s,e,t,n,i,r):Li(hn(s),e,t,n,i,r,1);break}}}function $p(s){const e=s.prev,t=s,n=s.next;if(ze(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(ii(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ze(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Kp(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ze(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,l=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,c=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,h=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,u=Pr(a,l,e,t,n),d=Pr(c,h,e,t,n);let p=s.prevZ,g=s.nextZ;for(;p&&p.z>=u&&g&&g.z<=d;){if(p!==s.prev&&p!==s.next&&ii(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&ze(p.prev,p,p.next)>=0||(p=p.prevZ,g!==s.prev&&g!==s.next&&ii(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&ze(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=u;){if(p!==s.prev&&p!==s.next&&ii(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&ze(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=d;){if(g!==s.prev&&g!==s.next&&ii(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&ze(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Qp(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ts(i,r)&&rl(i,n,n.next,r)&&Pi(i,r)&&Pi(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),Ri(n),Ri(n.next),n=s=r),n=n.next}while(n!==s);return hn(n)}function e0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c0(o,a)){let l=al(o,a);o=hn(o,o.next),l=hn(l,l.next),Li(o,e,t,n,i,r),Li(l,e,t,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function t0(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=sl(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(l0(c));for(i.sort(n0),r=0;r<i.length;r++)i0(i[r],t),t=hn(t,t.next);return t}function n0(s,e){return s.x-e.x}function i0(s,e){if(e=s0(s,e),e){const t=al(e,s);hn(e,e.next),hn(t,t.next)}}function s0(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&ii(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Pi(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&r0(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function r0(s,e){return ze(s.prev,s,e.prev)<0&&ze(e.next,s,s.next)<0}function a0(s,e,t,n){let i=s;do i.z===null&&(i.z=Pr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,o0(i)}function o0(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Pr(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function l0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ii(s,e,t,n,i,r,o,a){return(i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0}function c0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!h0(s,e)&&(Pi(s,e)&&Pi(e,s)&&u0(s,e)&&(ze(s.prev,s,e.prev)||ze(s,e.prev,e))||Ts(s,e)&&ze(s.prev,s,s.next)>0&&ze(e.prev,e,e.next)>0)}function ze(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ts(s,e){return s.x===e.x&&s.y===e.y}function rl(s,e,t,n){const i=us(ze(s,e,t)),r=us(ze(s,e,n)),o=us(ze(t,n,s)),a=us(ze(t,n,e));return!!(i!==r&&o!==a||i===0&&hs(s,t,e)||r===0&&hs(s,n,e)||o===0&&hs(t,s,n)||a===0&&hs(t,e,n))}function hs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function us(s){return s>0?1:s<0?-1:0}function h0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&rl(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Pi(s,e){return ze(s.prev,s,s.next)<0?ze(s,e,s.next)>=0&&ze(s,s.prev,e)>=0:ze(s,e,s.prev)<0||ze(s,s.next,e)<0}function u0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function al(s,e){const t=new Rr(s.i,s.x,s.y),n=new Rr(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _o(s,e,t,n){const i=new Rr(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ri(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Rr(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function d0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ai{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ai.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Eo(e),vo(n,e);let o=e.length;t.forEach(Eo);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,vo(n,t[l]);const a=Jp.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Eo(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function vo(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class di extends Ft{constructor(e=new Mn([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(i,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(o,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let p=d.shape;const g=d.holes;ai.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,x=g.length;f<x;f++){const E=g[f];ai.isClockWise(E)===!0&&(g[f]=E.reverse())}const m=ai.triangulateShape(p,g);for(let f=0,x=g.length;f<x;f++){const E=g[f];p=p.concat(E)}for(let f=0,x=p.length;f<x;f++){const E=p[f];i.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let f=0,x=m.length;f<x;f++){const E=m[f],y=E[0]+u,C=E[1]+u,_=E[2]+u;n.push(y,C,_),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return f0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new di(n,e.curveSegments)}}function f0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class zt extends Ft{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new b,d=new b,p=[],g=[],m=[],f=[];for(let x=0;x<=n;x++){const E=[],y=x/n;let C=0;x==0&&o==0?C=.5/t:x==n&&l==Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){const S=_/t;u.x=-e*Math.cos(i+S*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+S*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),f.push(S+C,1-y),E.push(c++)}h.push(E)}for(let x=0;x<n;x++)for(let E=0;E<t;E++){const y=h[x][E+1],C=h[x][E],_=h[x+1][E],S=h[x+1][E+1];(x!==0||o>0)&&p.push(y,C,S),(x!==n-1||l<Math.PI)&&p.push(C,_,S)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(m,3)),this.setAttribute("uv",new nt(f,2))}static fromJSON(e){return new zt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kr extends Ft{constructor(e=new tl(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new b,l=new b,c=new le;let h=new b;const u=[],d=[],p=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(p,2));function m(){for(let y=0;y<t;y++)f(y);f(r===!1?t:0),E(),x()}function f(y){h=e.getPointAt(y/t,h);const C=o.normals[y],_=o.binormals[y];for(let S=0;S<=i;S++){const T=S/i*Math.PI*2,A=Math.sin(T),F=-Math.cos(T);l.x=F*C.x+A*_.x,l.y=F*C.y+A*_.y,l.z=F*C.z+A*_.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let y=1;y<=t;y++)for(let C=1;C<=i;C++){const _=(i+1)*(y-1)+(C-1),S=(i+1)*y+(C-1),T=(i+1)*y+C,A=(i+1)*(y-1)+C;g.push(_,S,A),g.push(S,T,A)}}function E(){for(let y=0;y<=t;y++)for(let C=0;C<=i;C++)c.x=y/t,c.y=C/i,p.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Kr(new il[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ol extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ls extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ds={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class p0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const m0=new p0;class Ps{constructor(e){this.manager=e!==void 0?e:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const qt={};class g0 extends Error{constructor(e,t){super(e),this.response=t}}class x0 extends Ps{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qt[e]!==void 0){qt[e].push({onLoad:t,onProgress:n,onError:i});return}qt[e]=[],qt[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=qt[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let m=0;const f=new ReadableStream({start(x){E();function E(){u.read().then(({done:y,value:C})=>{if(y)x.close();else{m+=C.byteLength;const _=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let S=0,T=h.length;S<T;S++){const A=h[S];A.onProgress&&A.onProgress(_)}x.enqueue(C),E()}})}}});return new Response(f)}else throw new g0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ds.add(e,c);const h=qt[e];delete qt[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=qt[e];if(h===void 0)throw this.manager.itemError(e),c;delete qt[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class A0 extends Ps{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ds.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ti("img");function l(){h(),Ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Rs extends Ps{constructor(e){super(e)}load(e,t,n,i){const r=new Mt,o=new A0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ll extends $e{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Co=new Ve,Do=new b,Bo=new b;class _0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Do.setFromMatrixPosition(e.matrixWorld),t.position.copy(Do),Bo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bo),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yo=new Ve,_i=new b,Er=new b;class E0 extends _0{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_i.setFromMatrixPosition(e.matrixWorld),n.position.copy(_i),Er.copy(n.position),Er.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Er),n.updateMatrixWorld(),i.makeTranslation(-_i.x,-_i.y,-_i.z),yo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo)}}class cl extends ll{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new E0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class v0 extends ll{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class C0{constructor(e,t,n=0,i=1/0){this.ray=new Wr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ir(e,this,n,t),n.sort(Mo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ir(e[i],this,n,t);return n.sort(Mo),n}}function Mo(s,e){return s.distance-e.distance}function Ir(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Ir(i[r],e,t,!0)}}class Fo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class D0{constructor(){this.type="ShapePath",this.color=new Te,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Lr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const E=[];for(let y=0,C=x.length;y<C;y++){const _=x[y],S=new Mn;S.curves=_.curves,E.push(S)}return E}function n(x,E){const y=E.length;let C=!1;for(let _=y-1,S=0;S<y;_=S++){let T=E[_],A=E[S],F=A.x-T.x,P=A.y-T.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(T=E[S],F=-F,A=E[_],P=-P),x.y<T.y||x.y>A.y)continue;if(x.y===T.y){if(x.x===T.x)return!0}else{const X=P*(x.x-T.x)-F*(x.y-T.y);if(X===0)return!0;if(X<0)continue;C=!C}}else{if(x.y!==T.y)continue;if(A.x<=x.x&&x.x<=T.x||T.x<=x.x&&x.x<=A.x)return!0}}return C}const i=ai.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Mn,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let p=[],g=0,m;d[g]=void 0,p[g]=[];for(let x=0,E=r.length;x<E;x++)a=r[x],m=a.getPoints(),o=i(m),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new Mn,p:m},d[g].s.curves=a.curves,h&&g++,p[g]=[]):p[g].push({h:a,p:m[0]});if(!d[0])return t(r);if(d.length>1){let x=!1,E=0;for(let y=0,C=d.length;y<C;y++)u[y]=[];for(let y=0,C=d.length;y<C;y++){const _=p[y];for(let S=0;S<_.length;S++){const T=_[S];let A=!0;for(let F=0;F<d.length;F++)n(T.p,d[F].p)&&(y!==F&&E++,A?(A=!1,u[F].push(T)):x=!0);A&&u[y].push(T)}}E>0&&x===!1&&(p=u)}let f;for(let x=0,E=d.length;x<E;x++){l=d[x].s,c.push(l),f=p[x];for(let y=0,C=f.length;y<C;y++)l.holes.push(f[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gr);class oi{static setLevel(e){ds=e}static log(...e){ds<=oi.LEVEL.LOG&&console.log(...e)}static warn(...e){ds<=oi.LEVEL.WARN&&console.warn(...e)}static error(...e){ds<=oi.LEVEL.ERROR&&console.error(...e)}}oi.LEVEL=Object.freeze({LOG:0,WARN:1,ERROR:2,SILENT:3});let ds=oi.LEVEL.WARN;const B0=new Array;for(let s=0;s<256;s++)B0[s]=(s<16?"0":"")+s.toString(16);new Array;Object.freeze({MAXAV:0,CENTROID:1});Object.freeze({ACTIVE:"active",INACTIVE:"inactive",COMPLETED:"completed",FAILED:"failed"});new Array;new Array;new Array;const Ie=[["8BD3708E-8E3D-44B8-9E92-1050FA7987E5",` the essence of 
 love / meaning`,14.5,90,10649230,40],["D4724AD1-EECD-4975-920C-CDAD71AA53C3",`the essence of 
 wisdom / will`,14.5,210,8965361,40],["0027E01B-C40A-49F0-9833-30244700C39E",`   the essence of 
 salvation / peace`,14.5,330,15916398,40],["66F19982-732D-4744-AF06-F1F8A68D898B","Rewiring the gut",18,330,15916398,40],["287B1377-9E86-42B2-99F1-EBBEA971AB08","Rewiring the heart",18,90,10649230,40],["B5027C8B-D476-49B0-A713-ACC447159AE1","Rewiring the head",18,211,8965361,40],["4A481D1E-5DB6-4ABB-B9D0-8164F41393F9","Unconditional Peace",21,330,15916398,40],["876BC8AC-4013-448E-9ACA-A82DA031E09C","Transcendence",35,328,15916398,40],["008ADA1B-1D52-4F68-AB43-97D070D7774C",`Existential exploration / 
 Insight meditation`,52,321,15916398,40],["3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A","Deep states of calm",67,307,15916398,40],["D131CF5B-A895-4212-A4D4-A7E976CF5DA6","real meaning",21,245,8965361,20],["90212AAB-4CFE-4FDF-850A-7E6141F727AE",`potentially the source of 
 not-so-obvious (but highly 
 attractive) \u201Cqualities\u201D`,25,235,8965361,25],["611A4954-9E7D-4D25-AD7D-E1FAB38482F5","freedom",28,237,8965361,20],["5C63879D-74A6-458B-8193-AFA06A62F794","unshakable peace",30,230,8965361,20],["2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5","salvation",27,227,8965361,20],["963CA1BA-9539-4089-96AB-EB0E78602390","true wisdom",32,235,8965361,20],["EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","why important?",22.5,224,8965361,30],["982A6AFF-D536-4504-B63A-EC42A2712432",`Unconditional 
        Truth`,22.5,211,8965361,50,2],["F1EB56D4-15AE-4837-A070-40550E1262C7","must be reduced to",29,205,8965361,40],["506E723E-071E-4694-80AD-06BBD0681E26",`Conventional 
        truth`,35,211,8965361,50,2],["0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","must transcend",40,217,8965361,40],["6BDD61FD-3F46-453B-8714-64AF81BCE3F9","limitations of",35,223,8965361,30],["A81C54C1-D640-4297-AFA9-346A25B8132E","contextual",44,232,8965361,25],["9E19FF41-5144-4745-9C0B-A99858302CDE","ways of cutting the apple",36,238,8965361,25],["050308DE-F371-436D-AE9F-B0D5B7F8C282","lost in reduction",41,237,8965361,25],["A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","Diversity",35,199,8965361,30],["0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD","Dualist ontologies",31,183,8965361,40],["302B64FD-4E04-4823-8E13-C7F2FAA4E7C9","Dualism",36,177,8965361,30],["2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F","to be communicated",40,205,8965361,40],["3F0021AE-02A1-44B8-AE19-11C0D2A4FE75","to realise",29,217,8965361,40],["D456FA2C-65F4-40D2-AC84-4C7E2266BA84","Unity",22.5,199,8965361,30],["B90D2293-D457-4567-8102-363F70D95781","Monist ontologies",27,183,8965361,40],["2930997B-A726-473E-B6E9-333C2732271F","Idealism",24,184,8965361,30,4],["CCCF1876-3199-41C1-AE98-25A78D1C7F51",`Analytic 
idealism`,25,186,8965361,10,3],["2B64F02A-BEAA-4403-8380-A8B2614D5F90","Panpsychism",24,174,8965361,30],["4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7","Physicalism",24,164,8965361,30],["EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6","Emergence",25.5,162,8965361,25],["FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8","weak",27,160,8965361,20],["23979ADC-AD3F-4447-BF76-224A807C2144","strong",32,170,8965361,20],["8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F",`the essence of 
\u201Cyou\u201D / life`,31,245,8965361,20],["2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7","all-encompassing love",27,248,8965361,20],["C978C527-2523-4078-8B16-523DF8553FD5",`the core of 
will / agency`,24,250,8965361,20],["F47603CA-44A7-4009-B07B-29DFA540729D","Unconditional Love",21,90,10649230,40],["87B9AFEC-9F64-4748-87F8-F64F2B31FC29","Atammayat\u0101",22.5,101,10649230,25],["FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07","Su\xF1\xF1at\u0101",24.5,105,10649230,25],["EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C","Tath\u0101t\u0101",27,108,10649230,25],["0EF99714-0619-45EC-A71D-B4F01B6211DC","Liberation",31,108,10649230,40],["7AFE8322-410C-44FA-8223-F6080F45359C","from",31,94,10649230,25],["236FD67F-CD44-4B75-96AD-B16FA578E708","delusion",34,94,10649230,30],["C9DCCC19-CD84-427B-9234-09050646BCD3","hatred",33,89,10649230,30],["10D1D640-DE4C-4334-B08F-A4716D198E5F","greed",29,90,10649230,30],["89ED6168-2517-4EF9-A5D6-3635A0C80BDC",`Fundamental 
 perspective change`,30,131,8965361,40],["074931F9-D5F1-401B-ABE0-1F26BA921E1F","From paradoxes to wisdom",25,131,8965361,40],["E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B",`Direct experience-based 
 understanding`,35,150,8965361,40],["9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD","Intellectual understanding",51,159,8965361,40],["39A86FA9-4CDF-4DD2-8AB6-78A36AC75762",`Basic conceptual 
 understanding`,72,162,8965361,40],["60046B15-D09E-4F1F-9BC0-BA3900E29EB9","Levels of understanding",81,169,8965361,40],["263D9AEE-6F33-4D35-B945-CE35173E2F11","Analysis / questioning",79,187,8965361,40],["3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","Open-mindedness",89,184,8965361,40],["37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","Observation",94,170,8965361,40],["4572B437-5182-4EBE-A383-F76440484F8E","Indirect",96,164,8965361,40],["9BA80071-89E9-400F-89CA-53CA700FA703","Instruments",97,158,8965361,40],["450F8534-2F59-4A8E-BA92-D417FD0FE000","Advantages",95.5,150,8965361,40],["951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","Sensing",93,158,8965361,40],["C2B220C0-B7D4-432B-9ADC-1E40F1A66E25","Introspection",90,158,8965361,40],["B470B5D1-31ED-4F91-A94D-6A94CF45E744","Limitations",93.5,150,8965361,40],["95A61B65-7A40-42FA-8622-D7A0B736BA9C","Biases",91.5,150,8965361,40],["0CEDFFCF-0C8D-4705-B40C-439631CCD3E1","Direct",92,164,8965361,40],["B8BA585E-D985-44A9-A8E9-6BC1E3EA3731",` Strategies for 
Understanding`,98,197,8965361,50],["AA38CD3C-7D47-4CD3-956C-5EE5C285E408","Dogmatism",109,193,8965361,40],["16C1A9C0-30BF-441E-8DA4-3216C0A42C51",`Thought labyrinths / 
         rumination`,103,181,8965361,40],["4265E048-CDF8-4B44-836C-38549C965725",`     Trusting the 
current paradigm`,94,205,8965361,40],["538C89D3-3710-4D3F-9297-50C588EAC961",`       Phases of 
paradigm change`,95,214,8965361,30,5],["1CFA1123-E052-4049-AFD7-852D36EDE838",`              1. 
Pre-paradigm: 
No consensus`,92,210,8965361,20],["298D83F6-FBCF-4D2F-AC0B-68DFCD6AE5B0",`              2. 
Normal science: 
 One dominant 
       paradigm`,91,217,8965361,20],["E4B25E04-2873-4203-8E5C-0751BB4CE230",`              3. 
Crisis period: 
   Anomalies 
create trouble`,95,221,8965361,20],["7FA01314-361B-4C77-920A-824B38177CE8",`               4. 
    Paradigm shift: 
Underlying assump-
   tions examined`,98,218,8965361,20],["AC391C08-CB42-4443-A2C3-1128AC357F44",`               5. 
Post-revolution: 
A new paradigm 
gains dominance`,98,211,8965361,20],["807EE50B-B4E4-42B7-B1B4-10EBB38C1299",`             Settles in: 
 Convergence between 
assumptions and reality`,111,212,8965361,40],["B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","Depth of transformation",98,237,8965361,40],["B07DBBCA-2123-4D55-828C-6931A999128B","Brain",82,257,8965361,40],["C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8","Opinions",86,258,8965361,40],["794FB1D5-42CF-496B-929F-9568976B58FF","Intellectual view",80,262,8965361,40],["12872E37-D9BC-4CDD-BB7E-E09FD46D993A","Identification",75,243,8965361,40],["2875511F-F91A-4807-9839-4B7153B23143","Witnessing",64,246,8965361,40],["F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","What am I not?",64,235,8965361,40],["3E8EDBA9-59E1-4835-8343-4AA9FF799D49","Two methods of approach",60,235,8965361,40],["64077339-5087-4CBD-A706-C1AA35E8AC8B","What am I?",55,235,8965361,40],["9E801875-A714-49E5-969A-D9A5E5497D18","running the risk of",55,228,8965361,40],["31475508-739B-4966-ADC9-D8EBCE5FE3DB","Eternalist view",55,219.5,8965361,40],["A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E",`Drowning the baby 
in the bathwater`,53,219.5,8965361,25],["FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B",`The fundamental nature
 of awareness`,60,220,8965361,40],["9A853604-4CB0-4B1B-98E1-E4D95626433A","The Screen",53,212,8965361,40],["93C64795-A33C-4578-9694-B8B0FFE287AE","What can we know?",57,207,8965361,40],["73E6253F-D36B-45B8-ABF9-A72432F5F576","The content",53,205,8965361,40],["D5F25680-4FED-4B74-A5D5-1B15A8C8A580","The way it is",45,205,8965361,40],["C5096451-E5CF-4498-AF7A-E97C3C8197F9","Reductive categories",45,217,8965361,40],["53296584-40BE-4F83-96D3-B77540245AC2","Direct",66,210,8965361,40],["EE9D175C-0953-4B73-9B31-5C7AD0C50288","Biases",70,214,8965361,40],["5A058F3F-7A05-44E2-8417-7B99A2437742","Experimentation",70,202,8965361,40],["42B4C435-0661-46DB-8D8B-AB2AA00D601B","Mathematics",72,201.5,8965361,40],["64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","Statistics",74,201,8965361,40],["87EFBBA1-F6E2-4A35-8897-A73210A18318","Indirect",66,203,8965361,40],["FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","Limitations",72,214,8965361,40],["8873A022-151A-41EA-B380-2284DEB82A22","Advantages",74,213,8965361,40],["43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3","running the risk of",64,228,8965361,40],["D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9","Annihilationist view",64,219.5,8965361,40],["9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91",`Throwing the baby out 
with the bathwater`,66,219.5,8965361,25],["334445AA-FC20-48D6-9A7D-2558857C2346","Re-uniting",49,246,8965361,40],["074F7C7B-C390-4328-A205-B73143806FFA","Gut",39,259,8965361,40],["9E66D7AE-5825-4691-BADB-FC7A75F7B29D","Perceptual view",34,262,8965361,40],["2C809F14-A1A9-4178-B236-FA6408CD789D","Experiential",41,265,8965361,40],["F7A69942-1F8A-42CC-A8C3-8DF26E439289","What do I take to be me?",82,226.5,8965361,40],["5AE32B80-01A1-4314-9A23-453A397A2599","What ceases?",84,225,8965361,40],["72A32148-45A5-41A7-A836-0CE959AF38D4","What persists?",86,225,8965361,40],["3F0C901E-76B2-463D-B17A-8078CA2E1C91","Feelings",76,227,8965361,40],["E27CC807-EB70-45C4-84B3-DDF1F8AADB00","Body",77,221,8965361,40],["1E34F972-7322-4F63-A271-2BC8A5241BB8","Will",87,232,8965361,40],["76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","Perceptions",76,233,8965361,40],["5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","Consciousness",89,226,8965361,40],["D7868612-7C4F-49F8-BCAA-B03E2BCEF450","Thoughts",84,236,8965361,40],["820F18C3-7140-4923-9D3A-2CD81A26B702","Memory",80,237,8965361,40],["7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6","Heart",61,263,8965361,40],["EB83C866-FF54-449B-A65C-24ECDE2820C1","Action",65,266,8965361,40],["3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58","Felt view",58,267,8965361,40],["A35D6C5D-B56F-416F-B337-41FB9E923AE0",`Existential problem: 
 What - and how - 
 do I know?`,150,210,8965361,40],["EDCAFFF6-FD78-40E0-B719-97569DCD8819",`The Human - 
Reason`,162,211,8965361,40],["46CBB5AE-79D5-4808-A400-4B804DA91E12",`What matters to 
       your head`,167,211,8965361,50],["8D82CC00-C9F5-4B9E-B256-A879D4623B3C",`What matters to 
      your heart`,167,90,10649230,50],["35476F95-E324-40D2-B224-A5E27568028C",`The Lion - 
Thymos`,162,90,10649230,40],["4D1CEB04-6987-4C58-93B0-57DBB0914867",`Existential problem: 
What gives life 
meaning?`,153,91,10649230,40],["0EF9450D-3CB7-4D13-BCFB-49088E87F374",`Settles in: Happiness, 
love, meaning`,135,91,10649230,40],["80130A99-E12B-459A-B43D-1CE8BB3B1EF2",`Strategies for 
happiness / love`,128.5,91.5,10649230,50],["2095179D-0AC4-4378-8E6F-8F71E2793FAD",`getting, avoiding, manipulating, 
changing, controlling, collecting`,120,98,10649230,40],["AE242003-1C0A-40BF-AEA2-567E61901171","doing",120,111,10649230,40],["F3695B21-1EAA-404B-9239-0767DA0BC90C","past / future",122,112,10649230,40],["B7A263AD-5457-4712-A089-03B24D041629","personal identification",124.5,114.5,10649230,40],["B4399091-3D0A-472B-A40C-BC8CDD097E7F","depended on comparison",127,114,10649230,40],["20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB","non-sustainable happiness",129,114,10649230,40],["D6B5FE51-C8D9-42EB-B0BE-07B09B51776C",`accepting, letting be, allowing, 
embracing, opening, experiencing`,120,81,10649230,40],["6473A93C-A4A4-41D5-9765-D58B3F8A57EA","being",121,68,10649230,40],["0A57B7F6-E875-485D-98F2-66458F5FBC6B","present",123,68,10649230,40],["19DB1035-B51E-4F0A-8F97-888375D12E8F","selfless",125,68,10649230,40],["34C06752-B7AD-461D-A5E9-B29CAE227645","sustainable happiness",130,67,10649230,40],["83D9EEC0-3314-4BD5-826E-F1ADDA1492EA","independent of comparison",127,66,10649230,40],["1E7C0EB1-1DDE-4044-A8B7-E4540487DB1C","The threefold training",102.5,71,10649230,40],["E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","S\u012Bla",95.5,63,10649230,50],["DA6F224D-BC2D-47BF-91C5-9538BF062D81","Methods",108,59,10649230,40],["603F93B5-AA5A-49C2-8AEE-440DA485BA40","Restraint",102.5,57,10649230,40],["F26DDAD3-74C1-48A8-9488-8BAB580947E7","Generosity",111,64,10649230,40],["05CF2077-5B2D-43E7-92AC-232082EA7F8C","The brahmavih\u0101ras",113,55,10649230,40],["F0AA6E16-8A46-43FA-B435-942FFF734B06","Loving-kindness",117,58,10649230,40],["BEA84E38-CF01-4A16-941B-F26EEE3E6D88","Compassion",118,51,10649230,40],["EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3","Equanimity",110,52,10649230,40],["C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF","Sympathetic joy",114,46,10649230,40],["DEA78281-438E-4CB6-ADCE-25DC85D9FF37","Self-compassion",105,52,10649230,40],["202B8B0D-13DA-459A-9D5E-ED5DD40D30E4","Emotional blockages",66,30,10649230,40],["0AA203B9-8B52-4412-B32D-D412F894D779","P\u012Bti",56,53,10649230,40],["6A20558B-3A35-4D14-8EBE-3C5DF4F02868","Components",57,60,10649230,40],["96786F52-EB9D-42BB-B854-457841A162BA","Sukha",53,57.5,10649230,40],["28106D6F-9E60-4579-A457-B2F4DB781D6D","Ekaggat\u0101",53.5,64,10649230,40],["D81C6E33-ED3A-45ED-9567-78EC22F9A6C7","Vitakka",61,61,10649230,40],["8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B","Vic\u0101ra",60,55,10649230,40],["2BAF7986-984E-4937-BA03-E5CBAA234AEF","Challenging emotions",42,40,10649230,40],["C0074FCF-7AB4-4781-BC26-3812FBA61015","shame",44,50.3,10649230,40],["CB62D122-2342-4D33-B98D-EE3BD70B6538","grief",40,48,10649230,40],["64192F80-785C-4B14-AF81-987193E41085","anger / hate",38,47.2,10649230,40],["83BC3254-7B62-4D9C-BC20-192D2D442466","pride / conceit",36,47,10649230,40],["4788E206-DE47-48FA-8DC4-326274991F8D","doubt / confusion",48,50.5,10649230,40],["111EBFA8-E400-4984-A638-63120DDC1590","fear",46,52,10649230,40],["1D823800-DD7A-4B6F-94EA-517D4DE9876B","Low",124,42,15916398,40],["C0993BB8-9C64-4F7A-A673-289EA2A33D0D","Level of experiencing",140,25,15916398,40],["00E891B6-75E2-43B7-97B4-62F6DD69B15B","Emotions",146,10,15916398,40],["B477D774-01E4-4F6A-93B1-111E699FFE75","Components of emotion",141,11,15916398,40],["E2D52070-A83C-4D48-A218-BB3DC7BEAF21","Emotional style",143,1,15916398,40],["EBCF0E75-DA1D-4533-BEEA-73657C4588AF","Types of emotion",150,20,15916398,40],["4AF3AF2F-5D76-4620-911E-54398F84F288",`Degree of emotional 
processing`,146,28,15916398,40],["672E2CBD-7421-4E94-9728-95353BCD772E","High",80,11,15916398,40],["14BA8BEB-FA35-44B7-9DE3-A1503614069D","Sam\u0101dhi",64.5,71.5,10649230,50],["1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","Methods",70,58,10649230,40],["A478FC19-7AC1-4480-A9C9-93AD4C925970","Directed attention",75,57,10649230,40],["6E92A01E-0E8D-494E-8249-EF0EF0D22987","Bodily sensations",80,59,10649230,40],["349EFC6D-D96C-4E61-A839-93D31BF698B5","Breath",79,51,10649230,40],["ED71676A-652A-400A-AAEB-70A6B980A6F2","Mantra",76,47,10649230,40],["61282C0C-C654-4B5D-B2F9-ECF698B16489","Choiceless awareness",69,48,10649230,40],["9FC8F28B-4B52-4BFC-9349-4B5271FCDD84","Open awareness",72,48,10649230,40],["E8F9F0EB-2B89-4D4C-901E-A029C0211A93","Progression",53.5,82.5,10649230,40],["CCBD9962-2FF7-4C39-97B9-D93FA4044BD3","outward to inward",56.5,84,10649230,20],["D0E50499-8C3F-4818-BBAA-FEB433FC1704","complexity to simplicity",49,80,10649230,20],["BC583511-0DA5-4F1E-B699-D72CB449DD00","movement to stillness",52,76,10649230,20],["C4B7A8B7-5171-4873-B269-0A0582CA2084","doing to being",56.5,76,10649230,20],["FC88FDFD-AE27-4F76-938D-6FE581E65D08","coarse to refined",48,85,10649230,20],["30F3B081-5F90-4F13-BC8D-BBC7293CEC04","judging to embracing",54,75,10649230,20],["D49F0D1E-5DD6-4147-88E2-604F7E4A3566","diversity to unity",47,90,10649230,20],["268F9754-9375-4E1F-B752-233A8F83F592","Hindrances / Obstacles",42,68,10649230,40],["B46F4E38-26DA-4388-91DA-32731D7B44A1","habits",44,62,10649230,40],["128A73FA-B982-4A3E-B9C8-4AFBAB70AB56","distracting",48,57,10649230,40],["6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0","indulgent",44,55,10649230,40],["8AABE820-1F0B-4DDD-BFF2-9177B2A47112","avoidant",46,56,10649230,40],["21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F",`evolutionary 
conditioned 
ignorance`,35.5,66,10649230,40],["A6BA6799-B325-453E-B4D1-BCD71CF12705","wrong views about",38,61,10649230,40],["FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1","happiness / suffering",40,55,10649230,40],["D358D3A2-957C-470B-BC5F-A71A7622AE07","reality",38,53,10649230,40],["55EF8116-598E-4168-ADBC-9248DB79A821","self",36,53,10649230,40],["CBDECA18-D9A1-4FDE-84FD-DDB8849710A3","Seven factors of awakening",98,81,10649230,40],["A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","mindfulness",91,73,10649230,40],["F05326DF-FA0C-4619-8A75-0411CB1CB2F9","investigation",85,71,10649230,40],["9EAF3484-3F2C-415B-8067-B50A3FA1B974","energy",79,71,10649230,40],["ADBA0E07-67F4-47EC-B776-EE198BCA1A53","rapture",73,72,10649230,40],["75FF467B-7F2F-4EEC-ADC9-2D64EE46D692","tranquility",68.5,77.5,10649230,40],["03593653-145D-4B52-9873-D90B412C8468","samadhi",62,87,10649230,40],["4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953","equanimity",49,95,10649230,40],["B1212500-7C71-4B0B-B979-C8A5E93B544C","Natural unfolding",98,93,10649230,40],["D7191BF4-96AD-46A9-89F8-B015FD27C991","virtuous conduct",92,91,10649230,40],["F63DCD53-F24F-4AE7-84C0-61419A5D6E68","freedom from remorse",90,82,10649230,40],["6FD89C72-5D89-4A96-B643-4BDDDEC450AC","gladness",85,77,10649230,40],["28B608E4-AED5-4042-977B-B32908F4DC0F","rapture",81,77,10649230,40],["04FEF0CF-A123-4DB2-A9CC-72E134399258","bodily tranquility",76,77,10649230,40],["E78076C8-224D-4606-81AD-7DF62AE1B946","bliss",72,81,10649230,40],["6D9D49EF-63D9-441E-865B-80CFE99B3E48","samadhi",68,87,10649230,40],["E0E57B88-D092-45E3-93DE-F47199063BEA",`seeing things 
as they are`,60,95,10649230,40],["1F0628F7-D965-4529-8228-AA53C73527B2","disillusionment",53,99,10649230,40],["5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B","dispassion",44,100,10649230,40],["EC74E906-1F03-4570-A640-5E95985106E8","freedom and release",36,102,10649230,40],["7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8",`Motivated by: 
Honour / Shame`,157,80,10649230,35],["5946ACA1-B182-4776-BAC0-5EC43E0480C6",`Mode: Empathy / 
Intuition / Faith`,157,104,10649230,35],["05C8F42F-1F73-443B-B461-A3FFE6867199",`Concerned with: 
Mid-term goals`,162,106,10649230,35],["E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0",`Communal 
well-being`,162,119,10649230,30],["4C0B70B2-C4EC-4716-A08C-220E856D5B4A",`Growth potential: 
Can be trained`,162,73,10649230,35],["A870BA4E-6243-4C93-B823-BDF69104A69A","Cleaning up",162,59,10649230,30],["9BFCB2C3-78B9-4982-8501-2BFF113D4207",`  What matters to 
your gut / genitals`,167,330,15916398,50],["2C1FEC64-B01F-4D90-93AF-4F17977F3E05",`The Beast - 
Appetite`,162,330,15916398,40],["27D920A3-4748-497F-92C3-0CEAE399325B",`Existential problem: 
What do I need 
to function?`,153,330,15916398,40],["3DB4BB32-A030-449C-B131-424A2FD3A651","Path of the Gut",144,335,7606813,70],["FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D","Settles in: Peace",134,339,15916398,40],["744A07BE-0872-47C6-B69E-6FD2A3E8EC1B",`(Even need for excitement 
settles in peace)`,137,347,15916398,40],["13BD4AA3-E5C9-4A13-A702-70244A2B81AC","Strategies for peace",119,339,15916398,50],["6940ABE5-F16A-451E-9986-1853902A8FAA",`In terms of practical 
therapy work`,128,326,15916398,40],["2657C9EE-BFA1-43FA-BB34-1A624A4E5237","Mechanism of change",135,322,15916398,40],["228A6803-C3D9-420B-A083-476A5B6FE927","Method",130,311,15916398,40],["F095128A-1A37-4D3C-98C5-FAE6E3F9E808",`Islands of work 
in a sea of empathy`,124,303,15916398,40],["475EAF65-F5DA-4D50-AA66-64CF5305CBC9",`In terms of early 
development`,126,353,15916398,40],["39717030-47DE-4D14-8D3B-9D454BE3AF3B",`Authenticity vs. 
attachment`,134,4,15916398,40],["A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","In terms of needs",103,334,15916398,40],["08A7BDCA-0161-40B1-9F74-EF7E09C1BE13",`Making adaptations 
in the world`,113,325,15916398,40],["8DFECF54-6362-48C2-84A0-B9A79FD7371A","Adapting one\u2019s mind",94,325,15916398,40],["4D115C88-FC8E-4544-AC27-0B775B126D44","In terms of emotion",103,346,15916398,40],["84C0342B-29BC-4E8A-A39D-0D638491312E","Embracing vulnerability",80,343,15916398,40],["F0CABC11-FB43-49D3-B32C-F6AC2F728BEF","Resisting vulnerability",125,10,15916398,40],["FF0DE3EB-BA66-4B54-9700-1075754A5EB3",`Motivated by: 
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
we get true knowledge?`,62,204,8965361,40],["28763A09-FA38-43D2-A7C3-52E15D20F5B9","What can\u2019t we know?",57,195,8965361,40],["B20BB587-FDB1-45B4-9F6B-04D75DB45484","Pa\xF1\xF1a",67.5,102,10649230,50],["9C1A33F2-FA28-4FD0-B3A3-011939BF112E","Methods",77,101,10649230,40],["0B0E75E0-8E66-4B96-8D18-05B388B8166B","Four noble truths",72,108,10649230,40],["39C8C744-9E33-4FBD-B64F-4392BB1D7D43","Dependent origination",76,111,10649230,40],["F3CDF5ED-FE39-4306-9BC7-732E7252919B","Body contemplation",87,100,10649230,40],["C4AE0F47-95C9-42BF-875A-9DF1743AAFB2",`Contemplation of 
the characteristics of 
conditioned phenomena`,81,111,10649230,40],["33DB61E6-CD56-4F49-98BD-5397EB788805","Dukkha",78,122,10649230,40],["554920A7-A50D-44F4-8448-DD747BBB57DA",`The inherent unsatisfactoriness
 of constructed/conditioned 
phenomena`,77,130,10649230,40],["803C7EA0-EF36-42AE-B810-7620C3509FEA","Must be understood",82,138,10649230,40],["21CBC21A-6D6E-424D-B1D0-DCCD5425A05B","Cause and effect",84,124,10649230,40],["A9BA755A-FE4B-498E-9952-40214F02B8D6",`That craving for sensuality, 
being or non-being is 
a necessary cause for 
dissatisfaction`,68,145,10649230,40],["82F1F09B-EBCB-4F04-BDF1-4991F27E3724","Must be abandoned",72,148,10649230,40],["5503BDDB-9985-44D9-B9A4-F731513F6903","Pain \u2022 resistance = suffering",60,146,10649230,40],["FEC6325D-1E5F-4790-A841-63709B264A8D","That letting be leads to peace",53,142,10649230,40],["905689F0-5537-42CC-B864-9166DA60C470","Must be realized",50,147,10649230,40],["D8049867-1FC0-4817-BD67-64A421349C65",`That certain conditions 
lead to these insights`,51,124,10649230,40],["6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB","Must be practiced",46,122,10649230,40],["6C32C072-E56E-40F0-AC39-7909FC465612","Anatta",81,122,10649230,40],["64768881-AED3-403E-92A8-E4A3CBB39100","Anicca",76,122,10649230,40],["EE895C76-B04A-4587-9970-5A6CBA56069C","Six sense-spheres",86.5,108,10649230,40],["DE7F9890-14E7-433A-AD84-B0E18BE5BD79","Insights",64,115,10649230,40],["95BBCB02-420D-4FD9-A9BA-A404D72B41D3","Nature of fundamental reality",21,174,8965361,25],["6A893E71-2F6B-4958-B917-5F145FA37CF5","Matter",22,164,8965361,20],["3041389D-AD21-46F6-9721-2DD4E9FC1F65","Consciousness",22,184,8965361,20],["CC97CAEF-3828-466E-B55A-BA85783CE034","Acceptance and agency",80,3,15916398,40],["0F8B3461-7B9D-4E1D-A392-A6DE782AE537","Motivation split",82,289,15916398,40],["DEADD385-73FB-4EA3-AACC-13C6B453E9E6","Transcendence needs",83,307,15916398,40],["CDC69285-DE4B-40DE-BDFB-73C750FA8CB4","Fulfilment needs",95,295,15916398,40],["EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95","Psychological needs",109,295,15916398,40],["662B5EE1-6533-44B3-BC7A-2DF7708F1658","Basic needs",118,310,15916398,40],["973015FD-576A-40F3-A86C-2E8EDA196B5F",`Assertive anger /
 self-compassion`,91,10,15916398,40],["29155A2F-FCBB-4347-90DE-E8D3F86A3FFA","Grief / hurt",91,356,15916398,40],["E400970C-2383-40ED-90F4-793AFAD87E45","Rejecting anger",110,25,15916398,40],["788AC673-A0A0-4E77-93EC-2A21B981D7A8","Global distress",121,18,15916398,40],["3C66F9F4-19C8-497C-AD5A-377F74970968","Fear / shame",110,10,15916398,40],["829B047D-0C32-4887-8A3B-690BED8B847B","Needs",103,17,15916398,40],["DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB",`Negative 
self-evaluation`,103,3,15916398,40],["88244D22-DAEF-4189-83EB-E7B5D5726E62","Meaning protest",91,282,15916398,40],["9CE480B4-FB41-45F1-ABF5-D956A5526141","Path of the Head",93,191,7606813,70],["F2CA7E5B-766D-48F0-941D-D4B1FD54C097","Unfinished business",100,277,15916398,40],["987F0FDD-0FAF-44FC-9DE7-7D88E32D801D","Case formulation",106,277,15916398,40],["6423DD8B-C097-4C26-9917-D401ACA5FE91","Wisdom",112,285,15916398,40],["6345AAF7-5F22-49C1-8052-E28059BFFC3F","Empathy",119,292,15916398,40],["29EA91F8-0360-45F4-9E0A-511D80C51516","Presence",121.5,286,15916398,40],["4798DE69-2868-4EA6-84D8-E4D0CE7A90E8","Focusing",124,280,15916398,40],["2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","Attunement",126,290,15916398,40],["2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3","Empathic exploration",133,286,15916398,40],["04C21F20-915C-446A-902D-A8D5D7076C6F",`Unconditional 
positive regard`,129,298,15916398,40],["23D5758E-178A-43BD-A82B-5D1F11CC1223","Alliance work",137,301,15916398,40],["7D0652E2-E579-47BC-8FB9-E1FBA3539A3F","Conflict splits",112,275,15916398,40],["5D8415B8-AD5B-44AE-804C-9A2A62B177F8","Path of the Heart",112.5,81,7606813,70],["025E5CB8-BF2F-46EC-A170-4F80BD2FCA54","Anxiety splits",119,275,15916398,40],["C120D32F-4E27-481A-97F9-9B62BB394DF9","Evocative unfolding",128,279,15916398,40],["94D5EB98-E41E-4DD5-8B8D-06598E285B4E","Trauma retelling",137,282,15916398,40],["2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB","Self-soothing",143,293,15916398,40],["4F5D4105-E8C7-4F54-97E6-F9549BC75D4F","\u2190 back and forth between \u2192",91,3,15916398,30],["65FB0CCF-F7C4-4159-9D6D-0F929AB12136","\u2190 back and forth between \u2192",103,10,15916398,30],["CF403F63-27E2-4424-B4F3-5D6CB1252881","o",180,0,7606813,70]],y0="/Planet/assets/idealism.77654ec3.png",M0="/Planet/assets/panpsychism.3056551e.png",F0="/Planet/assets/physicalism.a98c8617.png",S0="/Planet/assets/dualism.e565b18b.png",Ei=[["CD8700A2-C44A-4F60-8929-49109F06A53D",y0,23,184,40],["5FA198AA-C7EF-489E-886D-62A95A32FD09",M0,23,174,40],["F50C2354-B76D-461E-93C1-EEAEED59607B",F0,23,164,40],["08396D9A-46A7-4789-8BCC-9B4A302DD0B4",S0,35,177,40]],fs=[["8BD3708E-8E3D-44B8-9E92-1050FA7987E5","D4724AD1-EECD-4975-920C-CDAD71AA53C3","0027E01B-C40A-49F0-9833-30244700C39E"],["D4724AD1-EECD-4975-920C-CDAD71AA53C3","0027E01B-C40A-49F0-9833-30244700C39E"],["0027E01B-C40A-49F0-9833-30244700C39E"],["66F19982-732D-4744-AF06-F1F8A68D898B","287B1377-9E86-42B2-99F1-EBBEA971AB08","B5027C8B-D476-49B0-A713-ACC447159AE1"],["287B1377-9E86-42B2-99F1-EBBEA971AB08","B5027C8B-D476-49B0-A713-ACC447159AE1"],["B5027C8B-D476-49B0-A713-ACC447159AE1"],["4A481D1E-5DB6-4ABB-B9D0-8164F41393F9","876BC8AC-4013-448E-9ACA-A82DA031E09C"],["876BC8AC-4013-448E-9ACA-A82DA031E09C","008ADA1B-1D52-4F68-AB43-97D070D7774C"],["008ADA1B-1D52-4F68-AB43-97D070D7774C","3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A"],["3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A"],["D131CF5B-A895-4212-A4D4-A7E976CF5DA6","90212AAB-4CFE-4FDF-850A-7E6141F727AE"],["90212AAB-4CFE-4FDF-850A-7E6141F727AE","611A4954-9E7D-4D25-AD7D-E1FAB38482F5","5C63879D-74A6-458B-8193-AFA06A62F794","2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5","963CA1BA-9539-4089-96AB-EB0E78602390","EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F","2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7","C978C527-2523-4078-8B16-523DF8553FD5"],["611A4954-9E7D-4D25-AD7D-E1FAB38482F5"],["5C63879D-74A6-458B-8193-AFA06A62F794"],["2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5"],["963CA1BA-9539-4089-96AB-EB0E78602390"],["EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","982A6AFF-D536-4504-B63A-EC42A2712432"],["982A6AFF-D536-4504-B63A-EC42A2712432","F1EB56D4-15AE-4837-A070-40550E1262C7","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75","D456FA2C-65F4-40D2-AC84-4C7E2266BA84"],["F1EB56D4-15AE-4837-A070-40550E1262C7","506E723E-071E-4694-80AD-06BBD0681E26","2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F"],["506E723E-071E-4694-80AD-06BBD0681E26","0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","6BDD61FD-3F46-453B-8714-64AF81BCE3F9","A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["6BDD61FD-3F46-453B-8714-64AF81BCE3F9","A81C54C1-D640-4297-AFA9-346A25B8132E","9E19FF41-5144-4745-9C0B-A99858302CDE","050308DE-F371-436D-AE9F-B0D5B7F8C282"],["A81C54C1-D640-4297-AFA9-346A25B8132E"],["9E19FF41-5144-4745-9C0B-A99858302CDE"],["050308DE-F371-436D-AE9F-B0D5B7F8C282"],["A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD"],["0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD","302B64FD-4E04-4823-8E13-C7F2FAA4E7C9"],["302B64FD-4E04-4823-8E13-C7F2FAA4E7C9"],["2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F"],["3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["D456FA2C-65F4-40D2-AC84-4C7E2266BA84","B90D2293-D457-4567-8102-363F70D95781"],["B90D2293-D457-4567-8102-363F70D95781","2930997B-A726-473E-B6E9-333C2732271F","2B64F02A-BEAA-4403-8380-A8B2614D5F90","4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7"],["2930997B-A726-473E-B6E9-333C2732271F","CCCF1876-3199-41C1-AE98-25A78D1C7F51"],["CCCF1876-3199-41C1-AE98-25A78D1C7F51"],["2B64F02A-BEAA-4403-8380-A8B2614D5F90"],["4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7","EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6"],["EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6","FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8","23979ADC-AD3F-4447-BF76-224A807C2144"],["FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8"],["23979ADC-AD3F-4447-BF76-224A807C2144"],["8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F"],["2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7"],["C978C527-2523-4078-8B16-523DF8553FD5"],["F47603CA-44A7-4009-B07B-29DFA540729D","87B9AFEC-9F64-4748-87F8-F64F2B31FC29","0EF99714-0619-45EC-A71D-B4F01B6211DC"],["87B9AFEC-9F64-4748-87F8-F64F2B31FC29","FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07"],["FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07","EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C"],["EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C","0EF99714-0619-45EC-A71D-B4F01B6211DC"],["0EF99714-0619-45EC-A71D-B4F01B6211DC","7AFE8322-410C-44FA-8223-F6080F45359C","89ED6168-2517-4EF9-A5D6-3635A0C80BDC","B20BB587-FDB1-45B4-9F6B-04D75DB45484"],["7AFE8322-410C-44FA-8223-F6080F45359C","236FD67F-CD44-4B75-96AD-B16FA578E708","C9DCCC19-CD84-427B-9234-09050646BCD3","10D1D640-DE4C-4334-B08F-A4716D198E5F"],["236FD67F-CD44-4B75-96AD-B16FA578E708"],["C9DCCC19-CD84-427B-9234-09050646BCD3"],["10D1D640-DE4C-4334-B08F-A4716D198E5F"],["89ED6168-2517-4EF9-A5D6-3635A0C80BDC","074931F9-D5F1-401B-ABE0-1F26BA921E1F","E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B"],["074931F9-D5F1-401B-ABE0-1F26BA921E1F"],["E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B","9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD"],["9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD","39A86FA9-4CDF-4DD2-8AB6-78A36AC75762"],["39A86FA9-4CDF-4DD2-8AB6-78A36AC75762","60046B15-D09E-4F1F-9BC0-BA3900E29EB9"],["60046B15-D09E-4F1F-9BC0-BA3900E29EB9","263D9AEE-6F33-4D35-B945-CE35173E2F11"],["263D9AEE-6F33-4D35-B945-CE35173E2F11","3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","68B6E135-509A-4064-9FF9-DE55C3B66A8E","6A92592D-70EE-451D-941A-AD8F8435EF6E","DC5F27E6-E594-4651-A151-4F70145EDFD5","092BED79-8510-4E20-9040-0BF73C433EB0","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","9CE480B4-FB41-45F1-ABF5-D956A5526141"],["37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","4572B437-5182-4EBE-A383-F76440484F8E","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["4572B437-5182-4EBE-A383-F76440484F8E","9BA80071-89E9-400F-89CA-53CA700FA703"],["9BA80071-89E9-400F-89CA-53CA700FA703","450F8534-2F59-4A8E-BA92-D417FD0FE000","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C"],["450F8534-2F59-4A8E-BA92-D417FD0FE000","951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","C2B220C0-B7D4-432B-9ADC-1E40F1A66E25"],["951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["C2B220C0-B7D4-432B-9ADC-1E40F1A66E25","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["B470B5D1-31ED-4F91-A94D-6A94CF45E744"],["95A61B65-7A40-42FA-8622-D7A0B736BA9C"],["0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["B8BA585E-D985-44A9-A8E9-6BC1E3EA3731","AA38CD3C-7D47-4CD3-956C-5EE5C285E408","16C1A9C0-30BF-441E-8DA4-3216C0A42C51","807EE50B-B4E4-42B7-B1B4-10EBB38C1299","9CE480B4-FB41-45F1-ABF5-D956A5526141","4265E048-CDF8-4B44-836C-38549C965725"],["AA38CD3C-7D47-4CD3-956C-5EE5C285E408"],["16C1A9C0-30BF-441E-8DA4-3216C0A42C51"],["4265E048-CDF8-4B44-836C-38549C965725","538C89D3-3710-4D3F-9297-50C588EAC961"],["538C89D3-3710-4D3F-9297-50C588EAC961","1CFA1123-E052-4049-AFD7-852D36EDE838","298D83F6-FBCF-4D2F-AC0B-68DFCD6AE5B0","E4B25E04-2873-4203-8E5C-0751BB4CE230","7FA01314-361B-4C77-920A-824B38177CE8","AC391C08-CB42-4443-A2C3-1128AC357F44"],["1CFA1123-E052-4049-AFD7-852D36EDE838"],["298D83F6-FBCF-4D2F-AC0B-68DFCD6AE5B0"],["E4B25E04-2873-4203-8E5C-0751BB4CE230"],["7FA01314-361B-4C77-920A-824B38177CE8"],["AC391C08-CB42-4443-A2C3-1128AC357F44"],["807EE50B-B4E4-42B7-B1B4-10EBB38C1299","B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","A35D6C5D-B56F-416F-B337-41FB9E923AE0"],["B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","B07DBBCA-2123-4D55-828C-6931A999128B"],["B07DBBCA-2123-4D55-828C-6931A999128B","C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8","794FB1D5-42CF-496B-929F-9568976B58FF","12872E37-D9BC-4CDD-BB7E-E09FD46D993A","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8"],["794FB1D5-42CF-496B-929F-9568976B58FF"],["12872E37-D9BC-4CDD-BB7E-E09FD46D993A","2875511F-F91A-4807-9839-4B7153B23143","F7A69942-1F8A-42CC-A8C3-8DF26E439289"],["2875511F-F91A-4807-9839-4B7153B23143","F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","334445AA-FC20-48D6-9A7D-2558857C2346","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","3E8EDBA9-59E1-4835-8343-4AA9FF799D49","43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3"],["3E8EDBA9-59E1-4835-8343-4AA9FF799D49","64077339-5087-4CBD-A706-C1AA35E8AC8B","FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B"],["64077339-5087-4CBD-A706-C1AA35E8AC8B","9E801875-A714-49E5-969A-D9A5E5497D18","334445AA-FC20-48D6-9A7D-2558857C2346"],["9E801875-A714-49E5-969A-D9A5E5497D18","31475508-739B-4966-ADC9-D8EBCE5FE3DB"],["31475508-739B-4966-ADC9-D8EBCE5FE3DB","A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E"],["A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E"],["FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B","9A853604-4CB0-4B1B-98E1-E4D95626433A","53296584-40BE-4F83-96D3-B77540245AC2"],["9A853604-4CB0-4B1B-98E1-E4D95626433A","93C64795-A33C-4578-9694-B8B0FFE287AE"],["93C64795-A33C-4578-9694-B8B0FFE287AE","73E6253F-D36B-45B8-ABF9-A72432F5F576","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["73E6253F-D36B-45B8-ABF9-A72432F5F576","D5F25680-4FED-4B74-A5D5-1B15A8C8A580","C5096451-E5CF-4498-AF7A-E97C3C8197F9"],["D5F25680-4FED-4B74-A5D5-1B15A8C8A580"],["C5096451-E5CF-4498-AF7A-E97C3C8197F9"],["53296584-40BE-4F83-96D3-B77540245AC2","EE9D175C-0953-4B73-9B31-5C7AD0C50288","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["EE9D175C-0953-4B73-9B31-5C7AD0C50288","5A058F3F-7A05-44E2-8417-7B99A2437742","42B4C435-0661-46DB-8D8B-AB2AA00D601B","64BC8F62-AA83-4E65-B1A3-D982DE8A86C1"],["5A058F3F-7A05-44E2-8417-7B99A2437742","42B4C435-0661-46DB-8D8B-AB2AA00D601B","87EFBBA1-F6E2-4A35-8897-A73210A18318","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["42B4C435-0661-46DB-8D8B-AB2AA00D601B","64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["87EFBBA1-F6E2-4A35-8897-A73210A18318","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["FC6818C0-13A9-44E2-8A38-7C4D4FB8827B"],["8873A022-151A-41EA-B380-2284DEB82A22"],["43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3","D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9"],["D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9","9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91"],["9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91"],["334445AA-FC20-48D6-9A7D-2558857C2346","074F7C7B-C390-4328-A205-B73143806FFA"],["074F7C7B-C390-4328-A205-B73143806FFA","9E66D7AE-5825-4691-BADB-FC7A75F7B29D","2C809F14-A1A9-4178-B236-FA6408CD789D","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["9E66D7AE-5825-4691-BADB-FC7A75F7B29D"],["2C809F14-A1A9-4178-B236-FA6408CD789D"],["F7A69942-1F8A-42CC-A8C3-8DF26E439289","5AE32B80-01A1-4314-9A23-453A397A2599","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","68B6E135-509A-4064-9FF9-DE55C3B66A8E"],["5AE32B80-01A1-4314-9A23-453A397A2599","72A32148-45A5-41A7-A836-0CE959AF38D4","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","6A92592D-70EE-451D-941A-AD8F8435EF6E"],["72A32148-45A5-41A7-A836-0CE959AF38D4","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","DC5F27E6-E594-4651-A151-4F70145EDFD5"],["3F0C901E-76B2-463D-B17A-8078CA2E1C91"],["E27CC807-EB70-45C4-84B3-DDF1F8AADB00"],["1E34F972-7322-4F63-A271-2BC8A5241BB8"],["76AB6EF8-AEF6-41D3-9576-2FE8D14F462B"],["5BEDE28D-38C4-4D03-B4C6-2C74ECD89078"],["D7868612-7C4F-49F8-BCAA-B03E2BCEF450"],["820F18C3-7140-4923-9D3A-2CD81A26B702"],["7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6","EB83C866-FF54-449B-A65C-24ECDE2820C1","3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58"],["EB83C866-FF54-449B-A65C-24ECDE2820C1"],["3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58"],["A35D6C5D-B56F-416F-B337-41FB9E923AE0","EDCAFFF6-FD78-40E0-B719-97569DCD8819"],["EDCAFFF6-FD78-40E0-B719-97569DCD8819","46CBB5AE-79D5-4808-A400-4B804DA91E12","E55861C5-E9D1-4B9A-956B-DC53B1C0E01E","8405A4E1-F7F9-4016-86B8-2E5C98520036","8573618D-34C1-481C-A217-71AB05C7C4D7","B9839052-6809-4E31-8792-FF4DF8C9FC48"],["46CBB5AE-79D5-4808-A400-4B804DA91E12","8D82CC00-C9F5-4B9E-B256-A879D4623B3C","9BFCB2C3-78B9-4982-8501-2BFF113D4207"],["8D82CC00-C9F5-4B9E-B256-A879D4623B3C","35476F95-E324-40D2-B224-A5E27568028C","9BFCB2C3-78B9-4982-8501-2BFF113D4207"],["35476F95-E324-40D2-B224-A5E27568028C","4D1CEB04-6987-4C58-93B0-57DBB0914867","7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8","5946ACA1-B182-4776-BAC0-5EC43E0480C6","05C8F42F-1F73-443B-B461-A3FFE6867199","4C0B70B2-C4EC-4716-A08C-220E856D5B4A"],["4D1CEB04-6987-4C58-93B0-57DBB0914867","0EF9450D-3CB7-4D13-BCFB-49088E87F374"],["0EF9450D-3CB7-4D13-BCFB-49088E87F374","80130A99-E12B-459A-B43D-1CE8BB3B1EF2"],["80130A99-E12B-459A-B43D-1CE8BB3B1EF2","2095179D-0AC4-4378-8E6F-8F71E2793FAD","D6B5FE51-C8D9-42EB-B0BE-07B09B51776C"],["2095179D-0AC4-4378-8E6F-8F71E2793FAD","AE242003-1C0A-40BF-AEA2-567E61901171","F3695B21-1EAA-404B-9239-0767DA0BC90C","B7A263AD-5457-4712-A089-03B24D041629","B4399091-3D0A-472B-A40C-BC8CDD097E7F","20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB"],["AE242003-1C0A-40BF-AEA2-567E61901171"],["F3695B21-1EAA-404B-9239-0767DA0BC90C"],["B7A263AD-5457-4712-A089-03B24D041629"],["B4399091-3D0A-472B-A40C-BC8CDD097E7F"],["20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB"],["D6B5FE51-C8D9-42EB-B0BE-07B09B51776C","6473A93C-A4A4-41D5-9765-D58B3F8A57EA","0A57B7F6-E875-485D-98F2-66458F5FBC6B","19DB1035-B51E-4F0A-8F97-888375D12E8F","34C06752-B7AD-461D-A5E9-B29CAE227645","83D9EEC0-3314-4BD5-826E-F1ADDA1492EA","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["6473A93C-A4A4-41D5-9765-D58B3F8A57EA"],["0A57B7F6-E875-485D-98F2-66458F5FBC6B"],["19DB1035-B51E-4F0A-8F97-888375D12E8F"],["34C06752-B7AD-461D-A5E9-B29CAE227645"],["83D9EEC0-3314-4BD5-826E-F1ADDA1492EA"],["1E7C0EB1-1DDE-4044-A8B7-E4540487DB1C","E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","DA6F224D-BC2D-47BF-91C5-9538BF062D81","14BA8BEB-FA35-44B7-9DE3-A1503614069D"],["DA6F224D-BC2D-47BF-91C5-9538BF062D81","603F93B5-AA5A-49C2-8AEE-440DA485BA40","F26DDAD3-74C1-48A8-9488-8BAB580947E7","05CF2077-5B2D-43E7-92AC-232082EA7F8C","DEA78281-438E-4CB6-ADCE-25DC85D9FF37"],["603F93B5-AA5A-49C2-8AEE-440DA485BA40"],["F26DDAD3-74C1-48A8-9488-8BAB580947E7"],["05CF2077-5B2D-43E7-92AC-232082EA7F8C","F0AA6E16-8A46-43FA-B435-942FFF734B06","BEA84E38-CF01-4A16-941B-F26EEE3E6D88","EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3","C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF"],["F0AA6E16-8A46-43FA-B435-942FFF734B06"],["BEA84E38-CF01-4A16-941B-F26EEE3E6D88"],["EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3"],["C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF"],["DEA78281-438E-4CB6-ADCE-25DC85D9FF37","202B8B0D-13DA-459A-9D5E-ED5DD40D30E4"],["202B8B0D-13DA-459A-9D5E-ED5DD40D30E4","0AA203B9-8B52-4412-B32D-D412F894D779","2BAF7986-984E-4937-BA03-E5CBAA234AEF","1D823800-DD7A-4B6F-94EA-517D4DE9876B"],["0AA203B9-8B52-4412-B32D-D412F894D779","6A20558B-3A35-4D14-8EBE-3C5DF4F02868"],["6A20558B-3A35-4D14-8EBE-3C5DF4F02868","96786F52-EB9D-42BB-B854-457841A162BA","28106D6F-9E60-4579-A457-B2F4DB781D6D","D81C6E33-ED3A-45ED-9567-78EC22F9A6C7","8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B","14BA8BEB-FA35-44B7-9DE3-A1503614069D"],["96786F52-EB9D-42BB-B854-457841A162BA"],["28106D6F-9E60-4579-A457-B2F4DB781D6D"],["D81C6E33-ED3A-45ED-9567-78EC22F9A6C7"],["8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B"],["2BAF7986-984E-4937-BA03-E5CBAA234AEF","C0074FCF-7AB4-4781-BC26-3812FBA61015","CB62D122-2342-4D33-B98D-EE3BD70B6538","64192F80-785C-4B14-AF81-987193E41085","83BC3254-7B62-4D9C-BC20-192D2D442466","4788E206-DE47-48FA-8DC4-326274991F8D","111EBFA8-E400-4984-A638-63120DDC1590"],["C0074FCF-7AB4-4781-BC26-3812FBA61015"],["CB62D122-2342-4D33-B98D-EE3BD70B6538"],["64192F80-785C-4B14-AF81-987193E41085"],["83BC3254-7B62-4D9C-BC20-192D2D442466"],["4788E206-DE47-48FA-8DC4-326274991F8D"],["111EBFA8-E400-4984-A638-63120DDC1590"],["1D823800-DD7A-4B6F-94EA-517D4DE9876B","C0993BB8-9C64-4F7A-A673-289EA2A33D0D","4AF3AF2F-5D76-4620-911E-54398F84F288","672E2CBD-7421-4E94-9728-95353BCD772E"],["C0993BB8-9C64-4F7A-A673-289EA2A33D0D","00E891B6-75E2-43B7-97B4-62F6DD69B15B"],["00E891B6-75E2-43B7-97B4-62F6DD69B15B","B477D774-01E4-4F6A-93B1-111E699FFE75","E2D52070-A83C-4D48-A218-BB3DC7BEAF21","EBCF0E75-DA1D-4533-BEEA-73657C4588AF","4AF3AF2F-5D76-4620-911E-54398F84F288","83BA614D-5560-48B0-8377-217CF04E01FC"],["B477D774-01E4-4F6A-93B1-111E699FFE75"],["E2D52070-A83C-4D48-A218-BB3DC7BEAF21"],["EBCF0E75-DA1D-4533-BEEA-73657C4588AF"],["4AF3AF2F-5D76-4620-911E-54398F84F288"],["672E2CBD-7421-4E94-9728-95353BCD772E"],["14BA8BEB-FA35-44B7-9DE3-A1503614069D","1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","E8F9F0EB-2B89-4D4C-901E-A029C0211A93","268F9754-9375-4E1F-B752-233A8F83F592","B20BB587-FDB1-45B4-9F6B-04D75DB45484"],["1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","A478FC19-7AC1-4480-A9C9-93AD4C925970","61282C0C-C654-4B5D-B2F9-ECF698B16489","9FC8F28B-4B52-4BFC-9349-4B5271FCDD84"],["A478FC19-7AC1-4480-A9C9-93AD4C925970","6E92A01E-0E8D-494E-8249-EF0EF0D22987","349EFC6D-D96C-4E61-A839-93D31BF698B5","ED71676A-652A-400A-AAEB-70A6B980A6F2"],["6E92A01E-0E8D-494E-8249-EF0EF0D22987"],["349EFC6D-D96C-4E61-A839-93D31BF698B5"],["ED71676A-652A-400A-AAEB-70A6B980A6F2"],["61282C0C-C654-4B5D-B2F9-ECF698B16489"],["9FC8F28B-4B52-4BFC-9349-4B5271FCDD84"],["E8F9F0EB-2B89-4D4C-901E-A029C0211A93","CCBD9962-2FF7-4C39-97B9-D93FA4044BD3","D0E50499-8C3F-4818-BBAA-FEB433FC1704","BC583511-0DA5-4F1E-B699-D72CB449DD00","C4B7A8B7-5171-4873-B269-0A0582CA2084","FC88FDFD-AE27-4F76-938D-6FE581E65D08","30F3B081-5F90-4F13-BC8D-BBC7293CEC04","D49F0D1E-5DD6-4147-88E2-604F7E4A3566"],["CCBD9962-2FF7-4C39-97B9-D93FA4044BD3"],["D0E50499-8C3F-4818-BBAA-FEB433FC1704"],["BC583511-0DA5-4F1E-B699-D72CB449DD00"],["C4B7A8B7-5171-4873-B269-0A0582CA2084"],["FC88FDFD-AE27-4F76-938D-6FE581E65D08"],["30F3B081-5F90-4F13-BC8D-BBC7293CEC04"],["D49F0D1E-5DD6-4147-88E2-604F7E4A3566"],["268F9754-9375-4E1F-B752-233A8F83F592","B46F4E38-26DA-4388-91DA-32731D7B44A1","21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F","A6BA6799-B325-453E-B4D1-BCD71CF12705"],["B46F4E38-26DA-4388-91DA-32731D7B44A1","6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0","8AABE820-1F0B-4DDD-BFF2-9177B2A47112","128A73FA-B982-4A3E-B9C8-4AFBAB70AB56"],["128A73FA-B982-4A3E-B9C8-4AFBAB70AB56"],["6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0"],["8AABE820-1F0B-4DDD-BFF2-9177B2A47112"],["21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F"],["A6BA6799-B325-453E-B4D1-BCD71CF12705","FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1","D358D3A2-957C-470B-BC5F-A71A7622AE07","55EF8116-598E-4168-ADBC-9248DB79A821"],["FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1"],["D358D3A2-957C-470B-BC5F-A71A7622AE07"],["55EF8116-598E-4168-ADBC-9248DB79A821"],["CBDECA18-D9A1-4FDE-84FD-DDB8849710A3","A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","F05326DF-FA0C-4619-8A75-0411CB1CB2F9"],["F05326DF-FA0C-4619-8A75-0411CB1CB2F9","9EAF3484-3F2C-415B-8067-B50A3FA1B974"],["9EAF3484-3F2C-415B-8067-B50A3FA1B974","ADBA0E07-67F4-47EC-B776-EE198BCA1A53"],["ADBA0E07-67F4-47EC-B776-EE198BCA1A53","75FF467B-7F2F-4EEC-ADC9-2D64EE46D692"],["75FF467B-7F2F-4EEC-ADC9-2D64EE46D692","03593653-145D-4B52-9873-D90B412C8468"],["03593653-145D-4B52-9873-D90B412C8468","4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953"],["4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953"],["B1212500-7C71-4B0B-B979-C8A5E93B544C","D7191BF4-96AD-46A9-89F8-B015FD27C991","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["D7191BF4-96AD-46A9-89F8-B015FD27C991","F63DCD53-F24F-4AE7-84C0-61419A5D6E68"],["F63DCD53-F24F-4AE7-84C0-61419A5D6E68","6FD89C72-5D89-4A96-B643-4BDDDEC450AC"],["6FD89C72-5D89-4A96-B643-4BDDDEC450AC","28B608E4-AED5-4042-977B-B32908F4DC0F"],["28B608E4-AED5-4042-977B-B32908F4DC0F","04FEF0CF-A123-4DB2-A9CC-72E134399258"],["04FEF0CF-A123-4DB2-A9CC-72E134399258","E78076C8-224D-4606-81AD-7DF62AE1B946"],["E78076C8-224D-4606-81AD-7DF62AE1B946","6D9D49EF-63D9-441E-865B-80CFE99B3E48"],["6D9D49EF-63D9-441E-865B-80CFE99B3E48","E0E57B88-D092-45E3-93DE-F47199063BEA"],["E0E57B88-D092-45E3-93DE-F47199063BEA","1F0628F7-D965-4529-8228-AA53C73527B2"],["1F0628F7-D965-4529-8228-AA53C73527B2","5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B"],["5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B","EC74E906-1F03-4570-A640-5E95985106E8"],["EC74E906-1F03-4570-A640-5E95985106E8"],["7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8"],["5946ACA1-B182-4776-BAC0-5EC43E0480C6"],["05C8F42F-1F73-443B-B461-A3FFE6867199","E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0"],["E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0"],["4C0B70B2-C4EC-4716-A08C-220E856D5B4A","A870BA4E-6243-4C93-B823-BDF69104A69A"],["A870BA4E-6243-4C93-B823-BDF69104A69A"],["9BFCB2C3-78B9-4982-8501-2BFF113D4207","2C1FEC64-B01F-4D90-93AF-4F17977F3E05"],["2C1FEC64-B01F-4D90-93AF-4F17977F3E05","27D920A3-4748-497F-92C3-0CEAE399325B","FF0DE3EB-BA66-4B54-9700-1075754A5EB3","53CADF73-2F2C-4BCC-8748-842EE8177A85","5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B","8A3E20D3-00BC-47E5-AC05-E717C6A803C6"],["27D920A3-4748-497F-92C3-0CEAE399325B","3DB4BB32-A030-449C-B131-424A2FD3A651"],["3DB4BB32-A030-449C-B131-424A2FD3A651","FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D"],["FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D","744A07BE-0872-47C6-B69E-6FD2A3E8EC1B","13BD4AA3-E5C9-4A13-A702-70244A2B81AC"],["744A07BE-0872-47C6-B69E-6FD2A3E8EC1B"],["13BD4AA3-E5C9-4A13-A702-70244A2B81AC","6940ABE5-F16A-451E-9986-1853902A8FAA","475EAF65-F5DA-4D50-AA66-64CF5305CBC9","A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","4D115C88-FC8E-4544-AC27-0B775B126D44"],["6940ABE5-F16A-451E-9986-1853902A8FAA","2657C9EE-BFA1-43FA-BB34-1A624A4E5237","228A6803-C3D9-420B-A083-476A5B6FE927"],["2657C9EE-BFA1-43FA-BB34-1A624A4E5237"],["228A6803-C3D9-420B-A083-476A5B6FE927","F095128A-1A37-4D3C-98C5-FAE6E3F9E808"],["F095128A-1A37-4D3C-98C5-FAE6E3F9E808"],["475EAF65-F5DA-4D50-AA66-64CF5305CBC9","39717030-47DE-4D14-8D3B-9D454BE3AF3B"],["39717030-47DE-4D14-8D3B-9D454BE3AF3B"],["A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","08A7BDCA-0161-40B1-9F74-EF7E09C1BE13","8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["08A7BDCA-0161-40B1-9F74-EF7E09C1BE13","8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["4D115C88-FC8E-4544-AC27-0B775B126D44","4D115C88-FC8E-4544-AC27-0B775B126D44","84C0342B-29BC-4E8A-A39D-0D638491312E","F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["84C0342B-29BC-4E8A-A39D-0D638491312E","F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["FF0DE3EB-BA66-4B54-9700-1075754A5EB3"],["53CADF73-2F2C-4BCC-8748-842EE8177A85","D733DA5C-E0BC-4EAE-BD64-92B116E15988"],["D733DA5C-E0BC-4EAE-BD64-92B116E15988"],["5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B","CC9D819E-DC87-4E17-97B4-AADC851E9E8E"],["CC9D819E-DC87-4E17-97B4-AADC851E9E8E"],["8A3E20D3-00BC-47E5-AC05-E717C6A803C6","83BA614D-5560-48B0-8377-217CF04E01FC"],["83BA614D-5560-48B0-8377-217CF04E01FC"],["E55861C5-E9D1-4B9A-956B-DC53B1C0E01E"],["8405A4E1-F7F9-4016-86B8-2E5C98520036"],["8573618D-34C1-481C-A217-71AB05C7C4D7","F05FC454-9C67-4E53-AAC4-A288D7E0E4E2"],["F05FC454-9C67-4E53-AAC4-A288D7E0E4E2"],["B9839052-6809-4E31-8792-FF4DF8C9FC48","38B0E475-2D54-4818-ABC6-E353229FDFF2"],["38B0E475-2D54-4818-ABC6-E353229FDFF2"],["68B6E135-509A-4064-9FF9-DE55C3B66A8E"],["6A92592D-70EE-451D-941A-AD8F8435EF6E"],["DC5F27E6-E594-4651-A151-4F70145EDFD5"],["092BED79-8510-4E20-9040-0BF73C433EB0","F1D5FF04-CA73-47D3-87C6-41C6BA8F6708","ACF82BBE-F34C-4E20-B18E-08F28B3ABA12","B6246F44-0855-4817-9D0D-D397E9DB7442","050CF590-16D7-48A8-9656-E58FD0B6E8BF","1EE48F2F-650A-413A-8F77-720A641BA416","C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA"],["F1D5FF04-CA73-47D3-87C6-41C6BA8F6708"],["ACF82BBE-F34C-4E20-B18E-08F28B3ABA12"],["B6246F44-0855-4817-9D0D-D397E9DB7442"],["050CF590-16D7-48A8-9656-E58FD0B6E8BF"],["1EE48F2F-650A-413A-8F77-720A641BA416"],["C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA"],["20790E3B-9D36-40B2-82CB-56322AA09DE7","28763A09-FA38-43D2-A7C3-52E15D20F5B9"],["28763A09-FA38-43D2-A7C3-52E15D20F5B9"],["B20BB587-FDB1-45B4-9F6B-04D75DB45484","9C1A33F2-FA28-4FD0-B3A3-011939BF112E","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["9C1A33F2-FA28-4FD0-B3A3-011939BF112E","0B0E75E0-8E66-4B96-8D18-05B388B8166B","39C8C744-9E33-4FBD-B64F-4392BB1D7D43","F3CDF5ED-FE39-4306-9BC7-732E7252919B","C4AE0F47-95C9-42BF-875A-9DF1743AAFB2","EE895C76-B04A-4587-9970-5A6CBA56069C"],["0B0E75E0-8E66-4B96-8D18-05B388B8166B"],["39C8C744-9E33-4FBD-B64F-4392BB1D7D43"],["F3CDF5ED-FE39-4306-9BC7-732E7252919B"],["C4AE0F47-95C9-42BF-875A-9DF1743AAFB2","33DB61E6-CD56-4F49-98BD-5397EB788805","6C32C072-E56E-40F0-AC39-7909FC465612","64768881-AED3-403E-92A8-E4A3CBB39100"],["33DB61E6-CD56-4F49-98BD-5397EB788805","554920A7-A50D-44F4-8448-DD747BBB57DA"],["554920A7-A50D-44F4-8448-DD747BBB57DA","803C7EA0-EF36-42AE-B810-7620C3509FEA","21CBC21A-6D6E-424D-B1D0-DCCD5425A05B","A9BA755A-FE4B-498E-9952-40214F02B8D6","6C32C072-E56E-40F0-AC39-7909FC465612","64768881-AED3-403E-92A8-E4A3CBB39100","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["803C7EA0-EF36-42AE-B810-7620C3509FEA"],["21CBC21A-6D6E-424D-B1D0-DCCD5425A05B"],["A9BA755A-FE4B-498E-9952-40214F02B8D6","5503BDDB-9985-44D9-B9A4-F731513F6903","FEC6325D-1E5F-4790-A841-63709B264A8D","82F1F09B-EBCB-4F04-BDF1-4991F27E3724"],["82F1F09B-EBCB-4F04-BDF1-4991F27E3724","82F1F09B-EBCB-4F04-BDF1-4991F27E3724"],["5503BDDB-9985-44D9-B9A4-F731513F6903","FEC6325D-1E5F-4790-A841-63709B264A8D"],["FEC6325D-1E5F-4790-A841-63709B264A8D","905689F0-5537-42CC-B864-9166DA60C470","D8049867-1FC0-4817-BD67-64A421349C65"],["905689F0-5537-42CC-B864-9166DA60C470"],["D8049867-1FC0-4817-BD67-64A421349C65","6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB"],["6C32C072-E56E-40F0-AC39-7909FC465612"],["64768881-AED3-403E-92A8-E4A3CBB39100"],["EE895C76-B04A-4587-9970-5A6CBA56069C"],["DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["95BBCB02-420D-4FD9-A9BA-A404D72B41D3"],["6A893E71-2F6B-4958-B917-5F145FA37CF5","3041389D-AD21-46F6-9721-2DD4E9FC1F65"],["3041389D-AD21-46F6-9721-2DD4E9FC1F65"],["CC97CAEF-3828-466E-B55A-BA85783CE034","4F5D4105-E8C7-4F54-97E6-F9549BC75D4F"],["0F8B3461-7B9D-4E1D-A392-A6DE782AE537"],["DEADD385-73FB-4EA3-AACC-13C6B453E9E6","CDC69285-DE4B-40DE-BDFB-73C750FA8CB4"],["CDC69285-DE4B-40DE-BDFB-73C750FA8CB4","EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95"],["EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95","662B5EE1-6533-44B3-BC7A-2DF7708F1658"],["662B5EE1-6533-44B3-BC7A-2DF7708F1658"],["973015FD-576A-40F3-A86C-2E8EDA196B5F","29155A2F-FCBB-4347-90DE-E8D3F86A3FFA","E400970C-2383-40ED-90F4-793AFAD87E45","65FB0CCF-F7C4-4159-9D6D-0F929AB12136"],["29155A2F-FCBB-4347-90DE-E8D3F86A3FFA"],["E400970C-2383-40ED-90F4-793AFAD87E45","788AC673-A0A0-4E77-93EC-2A21B981D7A8"],["788AC673-A0A0-4E77-93EC-2A21B981D7A8","3C66F9F4-19C8-497C-AD5A-377F74970968"],["3C66F9F4-19C8-497C-AD5A-377F74970968","829B047D-0C32-4887-8A3B-690BED8B847B","DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["829B047D-0C32-4887-8A3B-690BED8B847B","DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["88244D22-DAEF-4189-83EB-E7B5D5726E62"],["9CE480B4-FB41-45F1-ABF5-D956A5526141"],["F2CA7E5B-766D-48F0-941D-D4B1FD54C097"],["987F0FDD-0FAF-44FC-9DE7-7D88E32D801D","6423DD8B-C097-4C26-9917-D401ACA5FE91"],["6423DD8B-C097-4C26-9917-D401ACA5FE91","6345AAF7-5F22-49C1-8052-E28059BFFC3F"],["6345AAF7-5F22-49C1-8052-E28059BFFC3F","29EA91F8-0360-45F4-9E0A-511D80C51516","2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","04C21F20-915C-446A-902D-A8D5D7076C6F"],["29EA91F8-0360-45F4-9E0A-511D80C51516","4798DE69-2868-4EA6-84D8-E4D0CE7A90E8"],["4798DE69-2868-4EA6-84D8-E4D0CE7A90E8"],["2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3"],["2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3"],["04C21F20-915C-446A-902D-A8D5D7076C6F","23D5758E-178A-43BD-A82B-5D1F11CC1223"],["23D5758E-178A-43BD-A82B-5D1F11CC1223"],["7D0652E2-E579-47BC-8FB9-E1FBA3539A3F"],["5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["025E5CB8-BF2F-46EC-A170-4F80BD2FCA54"],["C120D32F-4E27-481A-97F9-9B62BB394DF9"],["94D5EB98-E41E-4DD5-8B8D-06598E285B4E"],["2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB"],["4F5D4105-E8C7-4F54-97E6-F9549BC75D4F"],["65FB0CCF-F7C4-4159-9D6D-0F929AB12136"],["CF403F63-27E2-4424-B4F3-5D6CB1252881"]];function vi(s,e){return Math.random()*(e-s)+s}function hl(s,e,t){t===void 0&&(t=7);let n=0,i=0;for(;n===0;)n=Math.random();for(;i===0;)i=Math.random();let r=Math.sqrt(-t*Math.log(n))*Math.cos(t*Math.PI*i);return r=r/10+.5,r>1||r<0?hl(s,e):(r=Math.floor(r*(e-s+1)+s),r)}function b0(s,e){return s=Math.ceil(s),e=Math.floor(e),Math.floor(Math.random()*(e-s+1))+s}function Jt(s,e,t){let n=s*Math.PI/180,i=e*Math.PI/180-Math.PI,r=t*Math.sin(n)*Math.sin(i),o=t*Math.cos(n),a=t*Math.sin(n)*Math.cos(i);return{x:r,y:o,z:a}}function w0(s,e,t){let n=Math.acos(e/Math.sqrt(Math.pow(t,2)+Math.pow(s,2)+Math.pow(e,2))),i=Math.atan(s/t),r=!1,o=!1;t>0&&(r=!0),s>0&&(o=!0);let a=n/Math.PI*180,l=i/Math.PI*180+180;return r==!1&&o==!1&&(l-=180),r==!1&&o==!0&&(l+=180),{lat:a,lng:l}}const So={type:"change"},vr={type:"start"},bo={type:"end"};class T0 extends Pn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:Gn.ROTATE,TWO:Gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",ft),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(So),n.update(),r=i.NONE},this.update=function(){const D=new b,Y=new wn().setFromUnitVectors(e.up,new b(0,1,0)),te=Y.clone().invert(),oe=new b,re=new wn,xe=2*Math.PI;return function(){const Ne=n.object.position;D.copy(Ne).sub(n.target),D.applyQuaternion(Y),a.setFromVector3(D),n.autoRotate&&r===i.NONE&&F(T()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let w=n.minAzimuthAngle,ie=n.maxAzimuthAngle;return isFinite(w)&&isFinite(ie)&&(w<-Math.PI?w+=xe:w>Math.PI&&(w-=xe),ie<-Math.PI?ie+=xe:ie>Math.PI&&(ie-=xe),w<=ie?a.theta=Math.max(w,Math.min(ie,a.theta)):a.theta=a.theta>(w+ie)/2?Math.max(w,a.theta):Math.min(ie,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),D.setFromSpherical(a),D.applyQuaternion(te),Ne.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||oe.distanceToSquared(n.object.position)>o||8*(1-re.dot(n.object.quaternion))>o?(n.dispatchEvent(So),oe.copy(n.object.position),re.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",qe),n.domElement.removeEventListener("pointercancel",dt),n.domElement.removeEventListener("wheel",Et),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ft)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Fo,l=new Fo;let c=1;const h=new b;let u=!1;const d=new le,p=new le,g=new le,m=new le,f=new le,x=new le,E=new le,y=new le,C=new le,_=[],S={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function F(D){l.theta-=D}function P(D){l.phi-=D}const X=function(){const D=new b;return function(te,oe){D.setFromMatrixColumn(oe,0),D.multiplyScalar(-te),h.add(D)}}(),se=function(){const D=new b;return function(te,oe){n.screenSpacePanning===!0?D.setFromMatrixColumn(oe,1):(D.setFromMatrixColumn(oe,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(te),h.add(D)}}(),z=function(){const D=new b;return function(te,oe){const re=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;D.copy(xe).sub(n.target);let ye=D.length();ye*=Math.tan(n.object.fov/2*Math.PI/180),X(2*te*ye/re.clientHeight,n.object.matrix),se(2*oe*ye/re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(te*(n.object.right-n.object.left)/n.object.zoom/re.clientWidth,n.object.matrix),se(oe*(n.object.top-n.object.bottom)/n.object.zoom/re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(D){d.set(D.clientX,D.clientY)}function Z(D){E.set(D.clientX,D.clientY)}function V(D){m.set(D.clientX,D.clientY)}function I(D){p.set(D.clientX,D.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const Y=n.domElement;F(2*Math.PI*g.x/Y.clientHeight),P(2*Math.PI*g.y/Y.clientHeight),d.copy(p),n.update()}function O(D){y.set(D.clientX,D.clientY),C.subVectors(y,E),C.y>0?L(A()):C.y<0&&q(A()),E.copy(y),n.update()}function $(D){f.set(D.clientX,D.clientY),x.subVectors(f,m).multiplyScalar(n.panSpeed),z(x.x,x.y),m.copy(f),n.update()}function J(D){D.deltaY<0?q(A()):D.deltaY>0&&L(A()),n.update()}function K(D){let Y=!1;switch(D.code){case n.keys.UP:z(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),Y=!0;break}Y&&(D.preventDefault(),n.update())}function de(){if(_.length===1)d.set(_[0].pageX,_[0].pageY);else{const D=.5*(_[0].pageX+_[1].pageX),Y=.5*(_[0].pageY+_[1].pageY);d.set(D,Y)}}function Ae(){if(_.length===1)m.set(_[0].pageX,_[0].pageY);else{const D=.5*(_[0].pageX+_[1].pageX),Y=.5*(_[0].pageY+_[1].pageY);m.set(D,Y)}}function W(){const D=_[0].pageX-_[1].pageX,Y=_[0].pageY-_[1].pageY,te=Math.sqrt(D*D+Y*Y);E.set(0,te)}function be(){n.enableZoom&&W(),n.enablePan&&Ae()}function me(){n.enableZoom&&W(),n.enableRotate&&de()}function _e(D){if(_.length==1)p.set(D.pageX,D.pageY);else{const te=ge(D),oe=.5*(D.pageX+te.x),re=.5*(D.pageY+te.y);p.set(oe,re)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const Y=n.domElement;F(2*Math.PI*g.x/Y.clientHeight),P(2*Math.PI*g.y/Y.clientHeight),d.copy(p)}function ue(D){if(_.length===1)f.set(D.pageX,D.pageY);else{const Y=ge(D),te=.5*(D.pageX+Y.x),oe=.5*(D.pageY+Y.y);f.set(te,oe)}x.subVectors(f,m).multiplyScalar(n.panSpeed),z(x.x,x.y),m.copy(f)}function Le(D){const Y=ge(D),te=D.pageX-Y.x,oe=D.pageY-Y.y,re=Math.sqrt(te*te+oe*oe);y.set(0,re),C.set(0,Math.pow(y.y/E.y,n.zoomSpeed)),L(C.y),E.copy(y)}function Ce(D){n.enableZoom&&Le(D),n.enablePan&&ue(D)}function pe(D){n.enableZoom&&Le(D),n.enableRotate&&_e(D)}function qe(D){n.enabled!==!1&&(_.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",et),n.domElement.addEventListener("pointerup",je)),Q(D),D.pointerType==="touch"?M(D):Ze(D))}function et(D){n.enabled!==!1&&(D.pointerType==="touch"?v(D):Pe(D))}function je(D){ee(D),_.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(bo),r=i.NONE}function dt(D){ee(D)}function Ze(D){let Y;switch(D.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Un.DOLLY:if(n.enableZoom===!1)return;Z(D),r=i.DOLLY;break;case Un.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;V(D),r=i.PAN}else{if(n.enableRotate===!1)return;j(D),r=i.ROTATE}break;case Un.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;j(D),r=i.ROTATE}else{if(n.enablePan===!1)return;V(D),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(vr)}function Pe(D){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;I(D);break;case i.DOLLY:if(n.enableZoom===!1)return;O(D);break;case i.PAN:if(n.enablePan===!1)return;$(D);break}}function Et(D){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(D.preventDefault(),n.dispatchEvent(vr),J(D),n.dispatchEvent(bo))}function ft(D){n.enabled===!1||n.enablePan===!1||K(D)}function M(D){switch(ae(D),_.length){case 1:switch(n.touches.ONE){case Gn.ROTATE:if(n.enableRotate===!1)return;de(),r=i.TOUCH_ROTATE;break;case Gn.PAN:if(n.enablePan===!1)return;Ae(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Gn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(),r=i.TOUCH_DOLLY_PAN;break;case Gn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(vr)}function v(D){switch(ae(D),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(D),n.update();break;default:r=i.NONE}}function G(D){n.enabled!==!1&&D.preventDefault()}function Q(D){_.push(D)}function ee(D){delete S[D.pointerId];for(let Y=0;Y<_.length;Y++)if(_[Y].pointerId==D.pointerId){_.splice(Y,1);return}}function ae(D){let Y=S[D.pointerId];Y===void 0&&(Y=new le,S[D.pointerId]=Y),Y.set(D.pageX,D.pageY)}function ge(D){const Y=D.pointerId===_[0].pointerId?_[1]:_[0];return S[Y.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",qe),n.domElement.addEventListener("pointercancel",dt),n.domElement.addEventListener("wheel",Et,{passive:!1}),this.update()}}class L0 extends Ps{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new x0(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new P0(e)}}class P0{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=R0(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function R0(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=r;else{const u=I0(h,i,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function I0(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new D0;let a,l,c,h,u,d,p,g;if(r.o){const m=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let f=0,x=m.length;f<x;)switch(m[f++]){case"m":a=m[f++]*e+t,l=m[f++]*e+n,o.moveTo(a,l);break;case"l":a=m[f++]*e+t,l=m[f++]*e+n,o.lineTo(a,l);break;case"q":c=m[f++]*e+t,h=m[f++]*e+n,u=m[f++]*e+t,d=m[f++]*e+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=m[f++]*e+t,h=m[f++]*e+n,u=m[f++]*e+t,d=m[f++]*e+n,p=m[f++]*e+t,g=m[f++]*e+n,o.bezierCurveTo(u,d,p,g,c,h);break}}return{offsetX:r.ha*e,path:o}}const N0="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",O0="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=0.7-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.3,0.6,1.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere,1.0);}",z0="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",U0="varying vec3 vertexNormal;void main(){float intensity=pow(0.1-dot(vertexNormal,vec3(0.0,0.0,1.0)),1.1);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}",G0="/Planet/assets/terrain8k.d5bba463.jpg",k0="/Planet/assets/normal8k.fc4444fd.jpg",V0="/Planet/assets/roughness2k.06c786a2.jpg",H0="/Planet/assets/clouds1.66e34b75.png",W0="/Planet/assets/clouds1alpha.b508fdf6.jpg",ul="/Planet/assets/clouds2.dec6ecfe.png",q0="/Planet/assets/star.71d593a7.png",X0="/Planet/assets/moon.b246064f.jpg",Y0="/Planet/assets/moon2.29310b47.png",j0="/Planet/assets/moon3.d1a182f0.png",Z0="https://jaranolsen.github.io/Planet/SourceSans3_Regular.json",dl=document.querySelector("#c"),Cr=new Jo({canvas:dl,antialias:!0});function J0(s){const e=s.domElement,t=e.clientWidth,n=e.clientHeight,i=e.width!==t||e.height!==n;return i&&s.setSize(t,n,!1),i}const $0=50,K0=2,Q0=.1,em=2e3,ht=new xt($0,K0,Q0,em);ht.position.z=500;const $t=new T0(ht,dl);$t.enablePan=!1;$t.maxDistance=1e3;$t.minDistance=5.5;$t.zoomSpeed=.3;$t.rotateSpeed=.3;$t.target.set(0,0,0);$t.update();const pi=new Op,gs=new le;new b;const Bs=new C0;let En=null;const Nr=new b(0,0,0);let fl=!1;const Qr=document.getElementById("introTune");Qr.preload="auto";Qr.currentTime=1.4;const Or=document.getElementById("playbutton");Or.addEventListener("click",()=>{Qr.play(),fl=!0,Or.style.display="none",zr.style.display="none"});const zr=document.getElementById("skipbutton");zr.addEventListener("click",()=>{Or.style.display="none",zr.style.display="none",ht.position.z=15});let ys;const tm=document.querySelectorAll("[data-carousel-button]");tm.forEach(s=>{s.addEventListener("click",()=>{if(document.querySelector(".carousel"),s.dataset.carouselButton==="exit")console.log("trying to close",ys),ys.style.display="none";else{const e=s.dataset.carouselButton==="next"?1:-1,t=s.closest("[data-carousel]").querySelector("[data-slides]"),n=t.querySelector("[data-active]");let i=[...t.children].indexOf(n)+e;t.children[i].dataset.active=!0,delete n.dataset.active}})});const pl=new Ft,nm=new $o({size:5,map:new Rs().load(q0),transparent:!0}),ml=[];for(let s=0;s<1e4;s++){const e=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(t)+Math.abs(n)>400&&ml.push(e,t,n)}pl.setAttribute("position",new nt(ml,3));const im=new zp(pl,nm);pi.add(im);const zi=new $e;pi.add(zi);const Is=new $e,Ns=new $e,Os=new $e;Is.rotation.y=0;Ns.rotation.y=0;Os.rotation.y=0;zi.add(Is);zi.add(Ns);zi.add(Os);const Ln=new Rs;let sm=Ln.load(G0);const gl=new zt(5,250,250);gl.computeBoundingSphere();const _t=new We(gl,new ol({map:sm,normalMap:Ln.load(k0),roughnessMap:Ln.load(V0),metalness:0,flatShading:!1,side:cn}));pi.add(_t);const xl=new We(new zt(5.03,50,50),new Ls({alphaMap:Ln.load(W0),map:Ln.load(H0),transparent:!0,side:at}));_t.add(xl);const Al=new We(new zt(5.04,50,50),new Ls({map:Ln.load(ul),transparent:!0,side:at}));_t.add(Al);const ea=new We(new zt(5.05,50,50),new Ls({map:Ln.load(ul),transparent:!0,side:at}));_t.add(ea);ea.rotateY(Math.PI/2);const _l=new We(new zt(5,250,250),new Zt({vertexShader:N0,fragmentShader:O0,blending:_s}));_l.position.set(0,0,0);_t.add(_l);const ta=new We(new zt(5.3,50,50),new Zt({vertexShader:z0,fragmentShader:U0,blending:_s,side:At,transparent:!0}));ta.position.set(0,0,0);ta.scale.set(1.2,1.2,1.2);_t.add(ta);function rm(s,e,t,n){let r=new Rs().load(s);const o=new Tn({map:r,transparent:!0,side:at});let a=.01,l=0,c=0,h=n,u=n,d=new Mn;d.moveTo(l,c+a),d.lineTo(l,c+u-a),d.quadraticCurveTo(l,c+u,l+a,c+u),d.lineTo(l+h-a,c+u),d.quadraticCurveTo(l+h,c+u,l+h,c+u-a),d.lineTo(l+h,c+a),d.quadraticCurveTo(l+h,c,l+h-a,c),d.lineTo(l+a,c),d.quadraticCurveTo(l,c,l,c+a);const p=new di(d);var g=p.attributes.uv;let m=1/0,f=0;for(var x=0;x<g.count;x++){let T=g.getX(x),A=g.getY(x);m=Math.min(m,T,A),f=Math.max(f,T,A)}for(var x=0;x<g.count;x++){let A=g.getX(x),F=g.getY(x);A=Cs.mapLinear(A,m,f,0,1),F=Cs.mapLinear(F,m,f,0,1),g.setXY(x,A,F)}p.computeBoundingBox();const E=-.5*(p.boundingBox.max.x-p.boundingBox.min.x),y=-.5*(p.boundingBox.max.y-p.boundingBox.min.y);p.translate(E,y*0,0);let C=new We(p,o),_=Jt(e,t,5.06),S=new b(_.x,_.y,_.z);C.lookAt(S),C.position.copy(S),_t.add(C)}for(let s=0;s<Ei.length;s++)rm(Ei[s][1],Ei[s][2],Ei[s][3]-180,Ei[s][4]/500);const am=new L0;am.load(Z0,function(s){function e(t,n,i,r,o,a){const l=new Tn({color:0,transparent:!1,side:at}),c=new Tn({color:r,transparent:!0,opacity:.5,side:at}),h=s.generateShapes(t,100),u=new di(h);u.computeBoundingBox();const d=-.5*(u.boundingBox.max.x-u.boundingBox.min.x),p=.5*(u.boundingBox.max.y-u.boundingBox.min.y);u.translate(d,p*2,0);const g=new We(u,l),m=5.06;let f=Jt(n,i,m),x=new b(f.x,f.y,f.z);g.lookAt(x),g.position.x=f.x,g.position.y=f.y,g.position.z=f.z,g.scale.x=a,g.scale.y=a,g.scale.z=a;const E=200,y=0;let C=a*125,_=0,S=0,T=(Math.abs(u.boundingBox.min.x)+Math.abs(u.boundingBox.max.x)+E)*a,A=(Math.abs(u.boundingBox.min.y)+Math.abs(u.boundingBox.max.y)+y)*a,F=new Mn;F.moveTo(_,S+C),F.lineTo(_,S+A-C),F.quadraticCurveTo(_,S+A,_+C,S+A),F.lineTo(_+T-C,S+A),F.quadraticCurveTo(_+T,S+A,_+T,S+A-C),F.lineTo(_+T,S+C),F.quadraticCurveTo(_+T,S,_+T-C,S),F.lineTo(_+C,S),F.quadraticCurveTo(_,S,_,S+C);const P=new di(F);var X=P.attributes.uv;let se=1/0,z=0;for(var L=0;L<X.count;L++){let O=X.getX(L),$=X.getY(L);se=Math.min(se,O,$),z=Math.max(z,O,$)}for(var L=0;L<X.count;L++){let $=X.getX(L),J=X.getY(L);$=Cs.mapLinear($,se,z,0,1),J=Cs.mapLinear(J,se,z,0,1),X.setXY(L,$,J)}P.computeBoundingBox();const q=-.5*(P.boundingBox.max.x-P.boundingBox.min.x),j=-.5*(P.boundingBox.max.y-P.boundingBox.min.y);P.translate(q,j*0,0);let Z=new We(P,c),V=Jt(n,i,m-.01),I=new b(V.x,V.y,V.z);Z.lookAt(I),Z.position.copy(I),_t.add(Z),_t.add(g)}for(let t=0;t<Ie.length;t++)e(Ie[t][1],Ie[t][2],Ie[t][3]-180,Ie[t][4],Ie[t][4],Ie[t][5]/1e5)});let Ms=[];function om(s,e,t,n,i,r){const o=new We(new zt(r,20,20),new Tn({color:n}));i=i;let l=Jt(e,t,5.01);return o.position.set(l.x,l.y,l.z),_t.add(o),Ms.push(o),{pin:o,originalColor:i}}let xs=[];for(let s=0;s<Ie.length;s++){let e=om(Ie[s][1],Ie[s][2],Ie[s][3]-180,Ie[s][4],Ie[s][4],Ie[s][5]/1500);xs.push(e)}let lm=.01,cm=3,hm=.05,Ur=5.01;for(let s=0;s<Ie.length;s++)for(let e=0;e<fs.length;e++)if(Ie[s][0]==fs[e][0]){for(let t=1;t<fs[e].length;t++)for(let n=0;n<Ie.length;n++)if(Ie[n][0]==fs[e][t]){let i=Jt(Ie[s][2],Ie[s][3]-180,Ur),r=Jt(Ie[n][2],Ie[n][3]-180,Ur);const o=(Ie[s][5]+Ie[n][5])/2/50;um(i,r,o)}}function um(s,e,t){let n=new b(s.x,s.y,s.z),i=new b(e.x,e.y,e.z),r=[];for(let h=0;h<=20;h++){let u=new b().lerpVectors(n,i,h/20);u.normalize(),u.multiplyScalar(Ur+hm*Math.sin(Math.PI*h/20)),r.push(u)}let o=new Ko(r);const a=new Kr(o,20,lm*t,cm,!1),l=new Tn({color:16777215,transparent:!0,opacity:.15}),c=new We(a,l);c.renderOrder=-10,_t.add(c)}class na{constructor(e,t,n,i,r,o){this.radius=e,this.texture=t,this.z=n,this.rotation=i,this.pivot=r,this.intensity=o}}let dm=new na(1.5,X0,110,-5e-4,Is,.4),fm=new na(2.5,Y0,190,-3e-4,Ns,.1),pm=new na(1,j0,250,-1e-4,Os,.005),gn=[dm,fm,pm];for(let s=0;s<gn.length;s++){const e=new We(new zt(gn[s].radius,50,50),new ol({map:new Rs().load(gn[s].texture),metalness:0,flatShading:!1,side:cn}));e.position.set(gn[s].z,0,0),gn[s].pivot.add(e);const t=new cl(16777215,gn[s].intensity);t.position.set(gn[s].z,0,0),t.castShadow=!0,e.add(t)}class mm{constructor(e,t,n){this.lat=e,this.lng=t,this.heading=n;let i=5e-4;this.shape=new Mn,this.shape.moveTo(i*5,i*5),this.shape.bezierCurveTo(i*5,i*5,i*4,0,0,0),this.shape.bezierCurveTo(-i*6,0,-i*6,i*7,-i*6,i*7),this.shape.bezierCurveTo(-i*6,i*11,-i*3,i*15.4,i*5,i*19),this.shape.bezierCurveTo(i*12,i*15.4,i*16,i*11,i*16,i*7),this.shape.bezierCurveTo(i*16,i*7,i*16,0,i*10,0),this.shape.bezierCurveTo(i*7,0,i*5,i*5,i*5,i*5),this.geometry=new di(this.shape),this.geometry.computeBoundingSphere(),this.center=this.geometry.boundingSphere.center,this.shapePosition=this.geometry.position,this.geometry.rotateZ(Math.PI/2),this.material=new Ls({color:14540253,side:at}),this.mesh=new We(this.geometry,this.material),this.mesh.geometry.center(),this.mesh.position.copy(this.center),this.pos=Jt(this.lat,this.lng,5.01),this.heading=vi(0,2*Math.PI),this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z),this.mesh.lookAt(Nr),pi.add(this.mesh)}move(){this.lat-=Math.cos(this.heading)/20,this.lng+=Math.sin(this.heading)/20,this.lat<0&&(this.lat=Math.abs(this.lat)),this.lat>180&&(this.lat=180-(this.lat-180)),this.lng<0&&(this.lng=360+this.lng),this.lng>360&&(this.lng=this.lng-360),this.pos=Jt(this.lat,this.lng,5.2),this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z)}steer(){vi(0,1)>.9&&(this.heading+=Math.PI/20),vi(0,1)>.9&&(this.heading-=Math.PI/20),this.lat<10&&(this.heading=vi(4*Math.PI/3,5*Math.PI/3)),this.lat>170&&(this.heading=vi(Math.PI/3,2*Math.PI/3)),this.mesh.lookAt(0,0,0),this.mesh.rotateZ(this.heading-Math.PI/2)}}let As=[];for(let s=0;s<1e3;s++){let e=hl(10,170,5),t=b0(0,359);As.push(new mm(e,t))}const gm=new v0(16777215,.1);pi.add(gm);const El=new cl(16777215,.5);El.position.set(0,0,0);_t.add(El);function xm(){for(let s=0;s<xs.length;s++)xs[s].pin.material.color.set(xs[s].originalColor)}function Am(){Bs.setFromCamera(gs,ht);const s=Bs.intersectObjects(Ms);for(let e=0;e<s.length;e++)s[e].object.material.color.set(16711680)}document.addEventListener("keydown",_m,!1);function _m(s){const e=s.which;if(En!=null){let t=w0(En.position.x,En.position.y,En.position.z);e==38?t.lat-=.3:e==40?t.lat+=.3:e==37?t.lng-=.3:e==39&&(t.lng+=.3);const n=5.01;let i=Jt(t.lat,t.lng,n);En.position.set(i.x,i.y,i.z)}}const Ci=[];let wo;const Em=document.querySelector("#fpsCounter"),vl=document.createElement("div");function Cl(){window.requestAnimationFrame(()=>{const s=performance.now();for(;Ci.length>0&&Ci[0]<=s-1e3;)Ci.shift();Ci.push(s),wo=Ci.length,vl.textContent=wo,Cl()})}Em.appendChild(vl);Cl();function Dl(s){if(J0(Cr)){const n=Cr.domElement;ht.aspect=n.clientWidth/n.clientHeight,ht.updateProjectionMatrix()}for(let n=0;n<As.length;n++)As[n].move(),As[n].steer();function e(n){gs.x=n.clientX/window.innerWidth*2-1,gs.y=-(n.clientY/window.innerHeight)*2+1}function t(n){Bs.setFromCamera(gs,ht);const i=Bs.intersectObjects(Ms);if(i.length>0&&(En=i[0].object,ht.position.distanceTo(En.position)<3)){const r=Ms.findIndex(a=>a==i[0].object),o=Ie[r][6];ys=document.querySelector(`.carousel.s${o}`),ys.style.display="block"}}window.addEventListener("pointermove",e),window.addEventListener("click",t),xm(),Am(),Cr.render(pi,ht),zi.rotation.y+=-1e-5,Is.rotation.y+=-3e-4,Ns.rotation.y+=-3e-5,Os.rotation.y+=-3e-6,xl.rotation.y+=1e-5,Al.rotation.y+=5e-5,ea.rotation.y+=1e-4,ht.position.z>15&&fl==!0&&(ht.position.z-=1e-4*Math.pow(ht.position.z-8,1.35),_t.rotation.y+=3e-4),$t.rotateSpeed=(ht.position.distanceTo(Nr)-5)/ht.position.distanceTo(Nr),$t.update(),requestAnimationFrame(Dl)}requestAnimationFrame(Dl);
