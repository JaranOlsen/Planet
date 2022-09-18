var qc=Object.defineProperty;var Yc=(s,e,t)=>e in s?qc(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var no=(s,e,t)=>(Yc(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="144",si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jc=0,io=1,Zc=2,Vl=1,Jc=2,Ji=3,Dn=0,xt=1,mt=2,yn=0,Bi=1,Ti=2,so=3,ro=4,$c=5,Ai=100,Kc=101,Qc=102,ao=103,oo=104,eu=200,tu=201,nu=202,iu=203,Gl=204,Hl=205,su=206,ru=207,au=208,ou=209,lu=210,cu=0,uu=1,hu=2,ra=3,du=4,fu=5,pu=6,mu=7,wa=0,gu=1,_u=2,hn=0,xu=1,vu=2,Au=3,Eu=4,Cu=5,Wl=300,Li=301,Pi=302,aa=303,oa=304,or=306,la=1e3,Gt=1001,ca=1002,dt=1003,lo=1004,co=1005,Pt=1006,yu=1007,lr=1008,Xn=1009,Du=1010,bu=1011,Xl=1012,Bu=1013,Un=1014,kn=1015,os=1016,Fu=1017,Mu=1018,Fi=1020,Su=1021,wu=1022,Ot=1023,Tu=1024,Lu=1025,Gn=1026,Ri=1027,Pu=1028,Ru=1029,Iu=1030,Ou=1031,Nu=1033,Cr=33776,yr=33777,Dr=33778,br=33779,uo=35840,ho=35841,fo=35842,po=35843,zu=36196,mo=37492,go=37496,_o=37808,xo=37809,vo=37810,Ao=37811,Eo=37812,Co=37813,yo=37814,Do=37815,bo=37816,Bo=37817,Fo=37818,Mo=37819,So=37820,wo=37821,To=36492,qn=3e3,qe=3001,Uu=3200,ku=3201,Ta=0,Vu=1,ln="srgb",Vn="srgb-linear",Br=7680,Gu=519,ua=35044,Lo="300 es",ha=1035;class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Po=1234567;const es=Math.PI/180,$s=180/Math.PI;function $t(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[s&255]+ut[s>>8&255]+ut[s>>16&255]+ut[s>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function lt(s,e,t){return Math.max(e,Math.min(t,s))}function La(s,e){return(s%e+e)%e}function Hu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Wu(s,e,t){return s!==e?(t-s)/(e-s):0}function ts(s,e,t){return(1-t)*s+t*e}function Xu(s,e,t,n){return ts(s,e,1-Math.exp(-t*n))}function qu(s,e=1){return e-Math.abs(La(s,e*2)-e)}function Yu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ju(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Zu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ju(s,e){return s+Math.random()*(e-s)}function $u(s){return s*(.5-Math.random())}function Ku(s){s!==void 0&&(Po=s);let e=Po+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qu(s){return s*es}function eh(s){return s*$s}function da(s){return(s&s-1)===0&&s!==0}function th(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ks(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nh(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ne(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Qs=Object.freeze({__proto__:null,DEG2RAD:es,RAD2DEG:$s,generateUUID:$t,clamp:lt,euclideanModulo:La,mapLinear:Hu,inverseLerp:Wu,lerp:ts,damp:Xu,pingpong:qu,smoothstep:Yu,smootherstep:ju,randInt:Zu,randFloat:Ju,randFloatSpread:$u,seededRandom:Ku,degToRad:Qu,radToDeg:eh,isPowerOfTwo:da,ceilPowerOfTwo:th,floorPowerOfTwo:Ks,setQuaternionFromProperEuler:nh,normalize:Ne,denormalize:un});class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],p=i[0],d=i[3],_=i[6],A=i[1],b=i[4],E=i[7],v=i[2],M=i[5],T=i[8];return r[0]=o*p+a*A+l*v,r[3]=o*d+a*b+l*M,r[6]=o*_+a*E+l*T,r[1]=c*p+u*A+h*v,r[4]=c*d+u*b+h*M,r[7]=c*_+u*E+h*T,r[2]=f*p+m*A+g*v,r[5]=f*d+m*b+g*M,r[8]=f*_+m*E+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*r+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ql(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Fr={[ln]:{[Vn]:Hn},[Vn]:{[ln]:js}},zt={legacyMode:!0,get workingColorSpace(){return Vn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Fr[e]&&Fr[e][t]!==void 0){const n=Fr[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={r:0,g:0,b:0},Ut={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Mr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function vs(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Vn){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Vn){if(e=La(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Mr(o,r,e+1/3),this.g=Mr(o,r,e),this.b=Mr(o,r,e-1/3)}return zt.toWorkingColorSpace(this,i),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,zt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,zt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,zt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,zt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ln){const n=Yl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return zt.fromWorkingColorSpace(vs(this,nt),e),lt(nt.r*255,0,255)<<16^lt(nt.g*255,0,255)<<8^lt(nt.b*255,0,255)<<0}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vn){zt.fromWorkingColorSpace(vs(this,nt),t);const n=nt.r,i=nt.g,r=nt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Vn){return zt.fromWorkingColorSpace(vs(this,nt),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=ln){return zt.fromWorkingColorSpace(vs(this,nt),e),e!==ln?`color(${e} ${nt.r} ${nt.g} ${nt.b})`:`rgb(${nt.r*255|0},${nt.g*255|0},${nt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ut),Ut.h+=e,Ut.s+=t,Ut.l+=n,this.setHSL(Ut.h,Ut.s,Ut.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ut),e.getHSL(xs);const n=ts(Ut.h,xs.h,t),i=ts(Ut.s,xs.s,t),r=ts(Ut.l,xs.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Te.NAMES=Yl;let ai;class jl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ai===void 0&&(ai=ls("canvas")),ai.width=e.width,ai.height=e.height;const n=ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Zl{constructor(e=null){this.isSource=!0,this.uuid=$t(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Sr(i[o].image)):r.push(Sr(i[o]))}else r=Sr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Sr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ih=0;class Bt extends Zn{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Gt,i=Gt,r=Pt,o=lr,a=Ot,l=Xn,c=1,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=$t(),this.name="",this.source=new Zl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case la:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case la:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Wl;class Ve{constructor(e=0,t=0,n=0,i=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(m+1)/2,v=(_+1)/2,M=(u+f)/4,T=(h+p)/4,x=(g+d)/4;return b>E&&b>v?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=M/n,r=T/n):E>v?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=M/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=T/r,i=x/r),this.set(n,i,r,t),this}let A=Math.sqrt((d-g)*(d-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(d-g)/A,this.y=(h-p)/A,this.z=(f-u)/A,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yn extends Zn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jl extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sh extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==m||u!==g){let d=1-a;const _=l*f+c*m+u*g+h*p,A=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const v=Math.sqrt(b),M=Math.atan2(v,_*A);d=Math.sin(d*M)/v,a=Math.sin(a*M)/v}const E=a*A;if(l=l*d+f*E,c=c*d+m*E,u=u*d+g*E,h=h*d+p*E,d===1-a){const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,n=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ro.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new S,Ro=new jn;class ps{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Tn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Tn)}else n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox),Tr.applyMatrix4(e.matrixWorld),this.union(Tr);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),As.subVectors(this.max,Gi),oi.subVectors(e.a,Gi),li.subVectors(e.b,Gi),ci.subVectors(e.c,Gi),mn.subVectors(li,oi),gn.subVectors(ci,li),Ln.subVectors(oi,ci);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Ln.z,Ln.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Ln.z,0,-Ln.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Ln.y,Ln.x,0];return!Lr(t,oi,li,ci,As)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,oi,li,ci,As))?!1:(Es.crossVectors(mn,gn),t=[Es.x,Es.y,Es.z],Lr(t,oi,li,ci,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new S,new S,new S,new S,new S,new S,new S,new S],Tn=new S,Tr=new ps,oi=new S,li=new S,ci=new S,mn=new S,gn=new S,Ln=new S,Gi=new S,As=new S,Es=new S,Pn=new S;function Lr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Pn.fromArray(s,r);const a=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=e.dot(Pn),c=t.dot(Pn),u=n.dot(Pn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rh=new ps,Io=new S,Cs=new S,Pr=new S;class cr{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Pr.subVectors(e,this.center);const t=Pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Pr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Cs.set(0,0,1).multiplyScalar(e.radius):Cs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Io.copy(e.center).add(Cs)),this.expandByPoint(Io.copy(e.center).sub(Cs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new S,Rr=new S,ys=new S,_n=new S,Ir=new S,Ds=new S,Or=new S;class Pa{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.direction).multiplyScalar(t).add(this.origin),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rr.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(Rr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ys),a=_n.dot(this.direction),l=-_n.dot(ys),c=_n.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ys).multiplyScalar(f).add(Rr),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,i,r){Ir.subVectors(t,e),Ds.subVectors(n,e),Or.crossVectors(Ir,Ds);let o=this.direction.dot(Or),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_n.subVectors(this.origin,e);const l=a*this.direction.dot(Ds.crossVectors(_n,Ds));if(l<0)return null;const c=a*this.direction.dot(Ir.cross(_n));if(c<0||l+c>o)return null;const u=-a*_n.dot(Or);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,u,h,f,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ui.setFromMatrixColumn(e,0).length(),r=1/ui.setFromMatrixColumn(e,1).length(),o=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ah,e,oh)}lookAt(e,t,n){const i=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),xn.crossVectors(n,Ct),xn.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),xn.crossVectors(n,Ct)),xn.normalize(),bs.crossVectors(Ct,xn),i[0]=xn.x,i[4]=bs.x,i[8]=Ct.x,i[1]=xn.y,i[5]=bs.y,i[9]=Ct.y,i[2]=xn.z,i[6]=bs.z,i[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],p=n[6],d=n[10],_=n[14],A=n[3],b=n[7],E=n[11],v=n[15],M=i[0],T=i[4],x=i[8],F=i[12],P=i[1],j=i[5],oe=i[9],z=i[13],L=i[2],X=i[6],J=i[10],$=i[14],H=i[3],I=i[7],U=i[11],Q=i[15];return r[0]=o*M+a*P+l*L+c*H,r[4]=o*T+a*j+l*X+c*I,r[8]=o*x+a*oe+l*J+c*U,r[12]=o*F+a*z+l*$+c*Q,r[1]=u*M+h*P+f*L+m*H,r[5]=u*T+h*j+f*X+m*I,r[9]=u*x+h*oe+f*J+m*U,r[13]=u*F+h*z+f*$+m*Q,r[2]=g*M+p*P+d*L+_*H,r[6]=g*T+p*j+d*X+_*I,r[10]=g*x+p*oe+d*J+_*U,r[14]=g*F+p*z+d*$+_*Q,r[3]=A*M+b*P+E*L+v*H,r[7]=A*T+b*j+E*X+v*I,r[11]=A*x+b*oe+E*J+v*U,r[15]=A*F+b*z+E*$+v*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*m-n*l*m)+p*(+t*l*m-t*c*f+r*o*f-i*o*m+i*c*u-r*l*u)+d*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*u-n*c*u)+_*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],A=h*d*c-p*f*c+p*l*m-a*d*m-h*l*_+a*f*_,b=g*f*c-u*d*c-g*l*m+o*d*m+u*l*_-o*f*_,E=u*p*c-g*h*c+g*a*m-o*p*m-u*a*_+o*h*_,v=g*h*l-u*p*l-g*a*f+o*p*f+u*a*d-o*h*d,M=t*A+n*b+i*E+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=A*T,e[1]=(p*f*r-h*d*r-p*i*m+n*d*m+h*i*_-n*f*_)*T,e[2]=(a*d*r-p*l*r+p*i*c-n*d*c-a*i*_+n*l*_)*T,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*m-n*l*m)*T,e[4]=b*T,e[5]=(u*d*r-g*f*r+g*i*m-t*d*m-u*i*_+t*f*_)*T,e[6]=(g*l*r-o*d*r-g*i*c+t*d*c+o*i*_-t*l*_)*T,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*m+t*l*m)*T,e[8]=E*T,e[9]=(g*h*r-u*p*r-g*n*m+t*p*m+u*n*_-t*h*_)*T,e[10]=(o*p*r-g*a*r+g*n*c-t*p*c-o*n*_+t*a*_)*T,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*m-t*a*m)*T,e[12]=v*T,e[13]=(u*p*i-g*h*i+g*n*f-t*p*f-u*n*d+t*h*d)*T,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*d-t*a*d)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,g=r*h,p=o*u,d=o*h,_=a*h,A=l*c,b=l*u,E=l*h,v=n.x,M=n.y,T=n.z;return i[0]=(1-(p+_))*v,i[1]=(m+E)*v,i[2]=(g-b)*v,i[3]=0,i[4]=(m-E)*M,i[5]=(1-(f+_))*M,i[6]=(d+A)*M,i[7]=0,i[8]=(g+b)*T,i[9]=(d-A)*T,i[10]=(1-(f+p))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ui.set(i[0],i[1],i[2]).length();const o=ui.set(i[4],i[5],i[6]).length(),a=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],kt.copy(this);const c=1/r,u=1/o,h=1/a;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),h=(t+e)*l,f=(n+i)*c,m=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ui=new S,kt=new Ye,ah=new S(0,0,0),oh=new S(1,1,1),xn=new S,bs=new S,Ct=new S,Oo=new Ye,No=new jn;class ms{constructor(e=0,t=0,n=0,i=ms.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return No.setFromEuler(this),this.setFromQuaternion(No,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ms.DefaultOrder="XYZ";ms.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ra{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lh=0;const zo=new S,hi=new jn,sn=new Ye,Bs=new S,Hi=new S,ch=new S,uh=new jn,Uo=new S(1,0,0),ko=new S(0,1,0),Vo=new S(0,0,1),hh={type:"added"},Go={type:"removed"};class je extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DefaultUp.clone();const e=new S,t=new ms,n=new jn,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Nt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=je.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=je.DefaultMatrixWorldAutoUpdate,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Uo,e)}rotateY(e){return this.rotateOnAxis(ko,e)}rotateZ(e){return this.rotateOnAxis(Vo,e)}translateOnAxis(e,t){return zo.copy(e).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uo,e)}translateY(e){return this.translateOnAxis(ko,e)}translateZ(e){return this.translateOnAxis(Vo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Hi,Bs,this.up):sn.lookAt(Bs,Hi,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(sn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Go)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Go)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}je.DefaultUp=new S(0,1,0);je.DefaultMatrixAutoUpdate=!0;je.DefaultMatrixWorldAutoUpdate=!0;const Vt=new S,rn=new S,Nr=new S,an=new S,di=new S,fi=new S,Ho=new S,zr=new S,Ur=new S,kr=new S;class cn{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vt.subVectors(e,t),i.cross(Vt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Vt.subVectors(i,t),rn.subVectors(n,t),Nr.subVectors(e,t);const o=Vt.dot(Vt),a=Vt.dot(rn),l=Vt.dot(Nr),c=rn.dot(rn),u=rn.dot(Nr),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,an),l.set(0,0),l.addScaledVector(r,an.x),l.addScaledVector(o,an.y),l.addScaledVector(a,an.z),l}static isFrontFacing(e,t,n,i){return Vt.subVectors(n,t),rn.subVectors(e,t),Vt.cross(rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Vt.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return cn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;di.subVectors(i,n),fi.subVectors(r,n),zr.subVectors(e,n);const l=di.dot(zr),c=fi.dot(zr);if(l<=0&&c<=0)return t.copy(n);Ur.subVectors(e,i);const u=di.dot(Ur),h=fi.dot(Ur);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(di,o);kr.subVectors(e,r);const m=di.dot(kr),g=fi.dot(kr);if(g>=0&&m<=g)return t.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(fi,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return Ho.subVectors(r,i),a=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Ho,a);const _=1/(d+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(di,o).addScaledVector(fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let dh=0;class Jn extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=$t(),this.name="",this.type="Material",this.blending=Bi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gl,this.blendDst=Hl,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ht extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new S,Fs=new ne;class Wt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ua,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ne(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ne(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ne(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ne(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ne(t,this.array),n=Ne(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ne(t,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ne(t,this.array),n=Ne(n,this.array),i=Ne(i,this.array),r=Ne(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $l extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kl extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fh=0;const Lt=new Ye,Vr=new je,pi=new S,yt=new ps,Wi=new ps,st=new S;class Mt extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ql(e)?Kl:$l)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return Vr.lookAt(e),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];yt.setFromBufferAttribute(r),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(st.addVectors(yt.min,Wi.min),yt.expandByPoint(st),st.addVectors(yt.max,Wi.max),yt.expandByPoint(st)):(yt.expandByPoint(Wi.min),yt.expandByPoint(Wi.max))}yt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)st.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(st));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)st.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(e,c),st.add(pi)),i=Math.max(i,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new S,u[P]=new S;const h=new S,f=new S,m=new S,g=new ne,p=new ne,d=new ne,_=new S,A=new S;function b(P,j,oe){h.fromArray(i,P*3),f.fromArray(i,j*3),m.fromArray(i,oe*3),g.fromArray(o,P*2),p.fromArray(o,j*2),d.fromArray(o,oe*2),f.sub(h),m.sub(h),p.sub(g),d.sub(g);const z=1/(p.x*d.y-d.x*p.y);!isFinite(z)||(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(z),A.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(z),c[P].add(_),c[j].add(_),c[oe].add(_),u[P].add(A),u[j].add(A),u[oe].add(A))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let P=0,j=E.length;P<j;++P){const oe=E[P],z=oe.start,L=oe.count;for(let X=z,J=z+L;X<J;X+=3)b(n[X+0],n[X+1],n[X+2])}const v=new S,M=new S,T=new S,x=new S;function F(P){T.fromArray(r,P*3),x.copy(T);const j=c[P];v.copy(j),v.sub(T.multiplyScalar(T.dot(j))).normalize(),M.crossVectors(x,j);const z=M.dot(u[P])<0?-1:1;l[P*4]=v.x,l[P*4+1]=v.y,l[P*4+2]=v.z,l[P*4+3]=z}for(let P=0,j=E.length;P<j;++P){const oe=E[P],z=oe.start,L=oe.count;for(let X=z,J=z+L;X<J;X+=3)F(n[X+0]),F(n[X+1]),F(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new S,r=new S,o=new S,a=new S,l=new S,c=new S,u=new S,h=new S;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new Wt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new Ye,mi=new Pa,Gr=new cr,vn=new S,An=new S,En=new S,Hr=new S,Wr=new S,Xr=new S,Ms=new S,Ss=new S,ws=new S,Ts=new ne,Ls=new ne,Ps=new ne,qr=new S,Rs=new S;class ze extends je{constructor(e=new Mt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),e.ray.intersectsSphere(Gr)===!1)||(Wo.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Wo),n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],A=i[_.materialIndex],b=Math.max(_.start,g.start),E=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let v=b,M=E;v<M;v+=3){const T=a.getX(v),x=a.getX(v+1),F=a.getX(v+2);o=Is(this,A,e,mi,l,c,u,h,f,T,x,F),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,A=d;_<A;_+=3){const b=a.getX(_),E=a.getX(_+1),v=a.getX(_+2);o=Is(this,i,e,mi,l,c,u,h,f,b,E,v),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],A=i[_.materialIndex],b=Math.max(_.start,g.start),E=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let v=b,M=E;v<M;v+=3){const T=v,x=v+1,F=v+2;o=Is(this,A,e,mi,l,c,u,h,f,T,x,F),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,A=d;_<A;_+=3){const b=_,E=_+1,v=_+2;o=Is(this,i,e,mi,l,c,u,h,f,b,E,v),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function ph(s,e,t,n,i,r,o,a){let l;if(e.side===xt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==mt,a),l===null)return null;Rs.copy(a),Rs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Rs);return c<t.near||c>t.far?null:{distance:c,point:Rs.clone(),object:s}}function Is(s,e,t,n,i,r,o,a,l,c,u,h){vn.fromBufferAttribute(i,c),An.fromBufferAttribute(i,u),En.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){Ms.set(0,0,0),Ss.set(0,0,0),ws.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const d=f[g],_=r[g];d!==0&&(Hr.fromBufferAttribute(_,c),Wr.fromBufferAttribute(_,u),Xr.fromBufferAttribute(_,h),o?(Ms.addScaledVector(Hr,d),Ss.addScaledVector(Wr,d),ws.addScaledVector(Xr,d)):(Ms.addScaledVector(Hr.sub(vn),d),Ss.addScaledVector(Wr.sub(An),d),ws.addScaledVector(Xr.sub(En),d)))}vn.add(Ms),An.add(Ss),En.add(ws)}s.isSkinnedMesh&&(s.boneTransform(c,vn),s.boneTransform(u,An),s.boneTransform(h,En));const m=ph(s,e,t,n,vn,An,En,qr);if(m){a&&(Ts.fromBufferAttribute(a,c),Ls.fromBufferAttribute(a,u),Ps.fromBufferAttribute(a,h),m.uv=cn.getUV(qr,vn,An,En,Ts,Ls,Ps,new ne)),l&&(Ts.fromBufferAttribute(l,c),Ls.fromBufferAttribute(l,u),Ps.fromBufferAttribute(l,h),m.uv2=cn.getUV(qr,vn,An,En,Ts,Ls,Ps,new ne));const g={a:c,b:u,c:h,normal:new S,materialIndex:0};cn.getNormal(vn,An,En,g.normal),m.face=g}return m}class gs extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(p,d,_,A,b,E,v,M,T,x,F){const P=E/T,j=v/x,oe=E/2,z=v/2,L=M/2,X=T+1,J=x+1;let $=0,H=0;const I=new S;for(let U=0;U<J;U++){const Q=U*j-z;for(let K=0;K<X;K++){const ee=K*P-oe;I[p]=ee*A,I[d]=Q*b,I[_]=L,c.push(I.x,I.y,I.z),I[p]=0,I[d]=0,I[_]=M>0?1:-1,u.push(I.x,I.y,I.z),h.push(K/T),h.push(1-U/x),$+=1}}for(let U=0;U<x;U++)for(let Q=0;Q<T;Q++){const K=f+Q+X*U,ee=f+Q+X*(U+1),pe=f+(Q+1)+X*(U+1),Ae=f+(Q+1)+X*U;l.push(K,ee,Ae),l.push(ee,pe,Ae),H+=6}a.addGroup(m,H,F),m+=H,f+=$}}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ht(s){const e={};for(let t=0;t<s.length;t++){const n=Ii(s[t]);for(const i in n)e[i]=n[i]}return e}function mh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const gh={clone:Ii,merge:ht};var _h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_h,this.fragmentShader=xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=mh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ql extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Ql{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=90,_i=1;class vh extends je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Dt(gi,_i,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const r=new Dt(gi,_i,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new S(-1,0,0)),this.add(r);const o=new Dt(gi,_i,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new S(0,1,0)),this.add(o);const a=new Dt(gi,_i,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new S(0,-1,0)),this.add(a);const l=new Dt(gi,_i,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,1)),this.add(l);const c=new Dt(gi,_i,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=hn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class ec extends Bt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Li,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ah extends Yn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ec(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gs(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:yn});r.uniforms.tEquirect.value=t;const o=new ze(i,r),a=t.minFilter;return t.minFilter===lr&&(t.minFilter=Pt),new vh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Yr=new S,Eh=new S,Ch=new Nt;class In{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Yr.subVectors(n,t).cross(Eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Yr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ch.getNormalMatrix(e),i=this.coplanarPoint(Yr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new cr,Os=new S;class Ia{constructor(e=new In,t=new In,n=new In,i=new In,r=new In,o=new In){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],p=n[11],d=n[12],_=n[13],A=n[14],b=n[15];return t[0].setComponents(a-i,h-l,p-f,b-d).normalize(),t[1].setComponents(a+i,h+l,p+f,b+d).normalize(),t[2].setComponents(a+r,h+c,p+m,b+_).normalize(),t[3].setComponents(a-r,h-c,p-m,b-_).normalize(),t[4].setComponents(a-o,h-u,p-g,b-A).normalize(),t[5].setComponents(a+o,h+u,p+g,b+A).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Os.x=i.normal.x>0?e.max.x:e.min.x,Os.y=i.normal.y>0?e.max.y:e.min.y,Os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function yh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;s.bindBuffer(h,c),m.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Oa extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const A=_*f-o;for(let b=0;b<c;b++){const E=b*h-r;g.push(E,-A,0),p.push(0,0,1),d.push(b/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let A=0;A<a;A++){const b=A+c*_,E=A+c*(_+1),v=A+1+c*(_+1),M=A+1+c*_;m.push(b,E,M),m.push(E,v,M)}this.setIndex(m),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(p,3)),this.setAttribute("uv",new ct(d,2))}static fromJSON(e){return new Oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wh="vec3 transformed = vec3( position );",Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Ph=`#ifdef USE_IRIDESCENCE
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
#endif`,Rh=`#ifdef USE_BUMPMAP
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
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hh=`#define PI 3.141592653589793
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
}`,Wh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xh=`vec3 transformedNormal = objectNormal;
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
#endif`,qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kh=`#ifdef USE_ENVMAP
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
#endif`,Qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
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
}`,ld=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,dd=`uniform bool receiveShadow;
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
#endif`,fd=`#if defined( USE_ENVMAP )
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
#endif`,pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,md=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,xd=`PhysicalMaterial material;
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
#endif`,vd=`struct PhysicalMaterial {
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
}`,Ad=`
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
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
#endif`,Id=`#ifdef USE_MORPHTARGETS
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
#endif`,Od=`#ifdef USE_MORPHTARGETS
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
#endif`,Nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,zd=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gd=`#ifdef USE_NORMALMAP
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
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sf=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rf=`float getShadowMask() {
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
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#ifdef USE_TRANSMISSION
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
#endif`,gf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_f=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,xf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Af=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ef=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Df=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#include <envmap_common_pars_fragment>
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
}`,Ff=`#include <common>
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
}`,Mf=`#if DEPTH_PACKING == 3200
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
}`,Sf=`#define DISTANCE
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
}`,wf=`#define DISTANCE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pf=`uniform float scale;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,If=`#include <common>
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
}`,Of=`uniform vec3 diffuse;
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
}`,Nf=`#define LAMBERT
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
}`,zf=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,kf=`#define MATCAP
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
}`,Vf=`#define NORMAL
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
}`,Gf=`#define NORMAL
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
}`,Hf=`#define PHONG
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
}`,Wf=`#define PHONG
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
}`,Xf=`#define STANDARD
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
}`,qf=`#define STANDARD
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
}`,Yf=`#define TOON
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
}`,jf=`#define TOON
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
}`,Zf=`uniform float size;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,$f=`#include <common>
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
}`,Kf=`uniform vec3 color;
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
}`,Qf=`uniform float rotation;
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
}`,ep=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:Dh,alphamap_pars_fragment:bh,alphatest_fragment:Bh,alphatest_pars_fragment:Fh,aomap_fragment:Mh,aomap_pars_fragment:Sh,begin_vertex:wh,beginnormal_vertex:Th,bsdfs:Lh,iridescence_fragment:Ph,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ih,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Nh,clipping_planes_vertex:zh,color_fragment:Uh,color_pars_fragment:kh,color_pars_vertex:Vh,color_vertex:Gh,common:Hh,cube_uv_reflection_fragment:Wh,defaultnormal_vertex:Xh,displacementmap_pars_vertex:qh,displacementmap_vertex:Yh,emissivemap_fragment:jh,emissivemap_pars_fragment:Zh,encodings_fragment:Jh,encodings_pars_fragment:$h,envmap_fragment:Kh,envmap_common_pars_fragment:Qh,envmap_pars_fragment:ed,envmap_pars_vertex:td,envmap_physical_pars_fragment:fd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:sd,fog_fragment:rd,fog_pars_fragment:ad,gradientmap_pars_fragment:od,lightmap_fragment:ld,lightmap_pars_fragment:cd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:hd,lights_pars_begin:dd,lights_toon_fragment:pd,lights_toon_pars_fragment:md,lights_phong_fragment:gd,lights_phong_pars_fragment:_d,lights_physical_fragment:xd,lights_physical_pars_fragment:vd,lights_fragment_begin:Ad,lights_fragment_maps:Ed,lights_fragment_end:Cd,logdepthbuf_fragment:yd,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:bd,logdepthbuf_vertex:Bd,map_fragment:Fd,map_pars_fragment:Md,map_particle_fragment:Sd,map_particle_pars_fragment:wd,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ld,morphcolor_vertex:Pd,morphnormal_vertex:Rd,morphtarget_pars_vertex:Id,morphtarget_vertex:Od,normal_fragment_begin:Nd,normal_fragment_maps:zd,normal_pars_fragment:Ud,normal_pars_vertex:kd,normal_vertex:Vd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:qd,output_fragment:Yd,packing:jd,premultiplied_alpha_fragment:Zd,project_vertex:Jd,dithering_fragment:$d,dithering_pars_fragment:Kd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:ef,shadowmap_pars_fragment:tf,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:uf,specularmap_pars_fragment:hf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:_f,uv_vertex:xf,uv2_pars_fragment:vf,uv2_pars_vertex:Af,uv2_vertex:Ef,worldpos_vertex:Cf,background_vert:yf,background_frag:Df,cube_vert:bf,cube_frag:Bf,depth_vert:Ff,depth_frag:Mf,distanceRGBA_vert:Sf,distanceRGBA_frag:wf,equirect_vert:Tf,equirect_frag:Lf,linedashed_vert:Pf,linedashed_frag:Rf,meshbasic_vert:If,meshbasic_frag:Of,meshlambert_vert:Nf,meshlambert_frag:zf,meshmatcap_vert:Uf,meshmatcap_frag:kf,meshnormal_vert:Vf,meshnormal_frag:Gf,meshphong_vert:Hf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:qf,meshtoon_vert:Yf,meshtoon_frag:jf,points_vert:Zf,points_frag:Jf,shadow_vert:$f,shadow_frag:Kf,sprite_vert:Qf,sprite_frag:ep},re={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nt},uv2Transform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}}},Jt={basic:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ht([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ht([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ht([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ht([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ht([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ht([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:ht([re.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:ht([re.common,re.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:ht([re.lights,re.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Jt.physical={uniforms:ht([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function tp(s,e,t,n,i,r){const o=new Te(0);let a=i===!0?0:1,l,c,u=null,h=0,f=null;function m(p,d){let _=!1,A=d.isScene===!0?d.background:null;A&&A.isTexture&&(A=e.get(A));const b=s.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(A=null),A===null?g(o,a):A&&A.isColor&&(g(A,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),A&&(A.isCubeTexture||A.mapping===or)?(c===void 0&&(c=new ze(new gs(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Ii(Jt.cube.uniforms),vertexShader:Jt.cube.vertexShader,fragmentShader:Jt.cube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,(u!==A||h!==A.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=A,h=A.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ze(new Oa(2,2),new Xt({name:"BackgroundMaterial",uniforms:Ii(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||h!==A.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,h=A.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function np(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(L,X,J,$,H){let I=!1;if(o){const U=p($,J,X);c!==U&&(c=U,m(c.object)),I=_(L,$,J,H),I&&A(L,$,J,H)}else{const U=X.wireframe===!0;(c.geometry!==$.id||c.program!==J.id||c.wireframe!==U)&&(c.geometry=$.id,c.program=J.id,c.wireframe=U,I=!0)}H!==null&&t.update(H,34963),(I||u)&&(u=!1,x(L,X,J,$),H!==null&&s.bindBuffer(34963,t.get(H).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function p(L,X,J){const $=J.wireframe===!0;let H=a[L.id];H===void 0&&(H={},a[L.id]=H);let I=H[X.id];I===void 0&&(I={},H[X.id]=I);let U=I[$];return U===void 0&&(U=d(f()),I[$]=U),U}function d(L){const X=[],J=[],$=[];for(let H=0;H<i;H++)X[H]=0,J[H]=0,$[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:J,attributeDivisors:$,object:L,attributes:{},index:null}}function _(L,X,J,$){const H=c.attributes,I=X.attributes;let U=0;const Q=J.getAttributes();for(const K in Q)if(Q[K].location>=0){const pe=H[K];let Ae=I[K];if(Ae===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor)),pe===void 0||pe.attribute!==Ae||Ae&&pe.data!==Ae.data)return!0;U++}return c.attributesNum!==U||c.index!==$}function A(L,X,J,$){const H={},I=X.attributes;let U=0;const Q=J.getAttributes();for(const K in Q)if(Q[K].location>=0){let pe=I[K];pe===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor));const Ae={};Ae.attribute=pe,pe&&pe.data&&(Ae.data=pe.data),H[K]=Ae,U++}c.attributes=H,c.attributesNum=U,c.index=$}function b(){const L=c.newAttributes;for(let X=0,J=L.length;X<J;X++)L[X]=0}function E(L){v(L,0)}function v(L,X){const J=c.newAttributes,$=c.enabledAttributes,H=c.attributeDivisors;J[L]=1,$[L]===0&&(s.enableVertexAttribArray(L),$[L]=1),H[L]!==X&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,X),H[L]=X)}function M(){const L=c.newAttributes,X=c.enabledAttributes;for(let J=0,$=X.length;J<$;J++)X[J]!==L[J]&&(s.disableVertexAttribArray(J),X[J]=0)}function T(L,X,J,$,H,I){n.isWebGL2===!0&&(J===5124||J===5125)?s.vertexAttribIPointer(L,X,J,H,I):s.vertexAttribPointer(L,X,J,$,H,I)}function x(L,X,J,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const H=$.attributes,I=J.getAttributes(),U=X.defaultAttributeValues;for(const Q in I){const K=I[Q];if(K.location>=0){let ee=H[Q];if(ee===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){const pe=ee.normalized,Ae=ee.itemSize,q=t.get(ee);if(q===void 0)continue;const Le=q.buffer,_e=q.type,Ee=q.bytesPerElement;if(ee.isInterleavedBufferAttribute){const fe=ee.data,Re=fe.stride,De=ee.offset;if(fe.isInstancedInterleavedBuffer){for(let ge=0;ge<K.locationSize;ge++)v(K.location+ge,fe.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ge=0;ge<K.locationSize;ge++)E(K.location+ge);s.bindBuffer(34962,Le);for(let ge=0;ge<K.locationSize;ge++)T(K.location+ge,Ae/K.locationSize,_e,pe,Re*Ee,(De+Ae/K.locationSize*ge)*Ee)}else{if(ee.isInstancedBufferAttribute){for(let fe=0;fe<K.locationSize;fe++)v(K.location+fe,ee.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let fe=0;fe<K.locationSize;fe++)E(K.location+fe);s.bindBuffer(34962,Le);for(let fe=0;fe<K.locationSize;fe++)T(K.location+fe,Ae/K.locationSize,_e,pe,Ae*Ee,Ae/K.locationSize*fe*Ee)}}else if(U!==void 0){const pe=U[Q];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(K.location,pe);break;case 3:s.vertexAttrib3fv(K.location,pe);break;case 4:s.vertexAttrib4fv(K.location,pe);break;default:s.vertexAttrib1fv(K.location,pe)}}}}M()}function F(){oe();for(const L in a){const X=a[L];for(const J in X){const $=X[J];for(const H in $)g($[H].object),delete $[H];delete X[J]}delete a[L]}}function P(L){if(a[L.id]===void 0)return;const X=a[L.id];for(const J in X){const $=X[J];for(const H in $)g($[H].object),delete $[H];delete X[J]}delete a[L.id]}function j(L){for(const X in a){const J=a[X];if(J[L.id]===void 0)continue;const $=J[L.id];for(const H in $)g($[H].object),delete $[H];delete J[L.id]}}function oe(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:oe,resetDefaultState:z,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:j,initAttributes:b,enableAttribute:E,disableUnusedAttributes:M}}function ip(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function sp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),_=s.getParameter(36348),A=s.getParameter(36349),b=f>0,E=o||e.has("OES_texture_float"),v=b&&E,M=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:A,vertexTextures:b,floatFragmentTextures:E,floatVertexTextures:v,maxSamples:M}}function rp(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new In,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!d)r?u(null):c();else{const A=r?0:n,b=A*4;let E=_.clippingState||null;l.value=E,E=u(g,f,b,m);for(let v=0;v!==b;++v)E[v]=t[v];_.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(d===null||d.length<_)&&(d=new Float32Array(_));for(let b=0,E=m;b!==p;++b,E+=4)o.copy(h[b]).applyMatrix4(A,a),o.normal.toArray(d,E),d[E+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function ap(s){let e=new WeakMap;function t(o,a){return a===aa?o.mapping=Li:a===oa&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===aa||a===oa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ah(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class nc extends Ql{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,Xo=[.125,.215,.35,.446,.526,.582],Nn=20,jr=new nc,qo=new Te;let Zr=null;const On=(1+Math.sqrt(5))/2,vi=1/On,Yo=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,On,vi),new S(0,On,-vi),new S(vi,0,On),new S(-vi,0,On),new S(On,vi,0),new S(-On,vi,0)];class jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zr),e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:os,format:Ot,encoding:qn,depthBuffer:!1},i=Zo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(r)),this._blurMaterial=lp(r,e,t)}return i}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,jr)}_sceneToCubeUV(e,t,n,i){const a=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(qo),u.toneMapping=hn,u.autoClear=!1;const m=new Ht({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),g=new ze(new gs,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(qo),p=!0);for(let _=0;_<6;_++){const A=_%3;A===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):A===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const b=this._cubeSize;Ns(i,A*b,_>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Li||e.mapping===Pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,jr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Yo[(i-1)%Yo.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ze(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),p=r/g,d=isFinite(r)?1+Math.floor(u*p):Nn;d>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Nn}`);const _=[];let A=0;for(let T=0;T<Nn;++T){const x=T/p,F=Math.exp(-x*x/2);_.push(F),T===0?A+=F:T<d&&(A+=2*F)}for(let T=0;T<_.length;T++)_[T]=_[T]/A;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const E=this._sizeLods[i],v=3*E*(i>b-yi?i-b+yi:0),M=4*(this._cubeSize-E);Ns(t,v,M,3*E,2*E),l.setRenderTarget(t),l.render(h,jr)}}function op(s){const e=[],t=[],n=[];let i=s;const r=s-yi+1+Xo.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-yi?l=Xo[o-s+yi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,d=2,_=1,A=new Float32Array(p*g*m),b=new Float32Array(d*g*m),E=new Float32Array(_*g*m);for(let M=0;M<m;M++){const T=M%3*2/3-1,x=M>2?0:-1,F=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];A.set(F,p*g*M),b.set(f,d*g*M);const P=[M,M,M,M,M,M];E.set(P,_*g*M)}const v=new Mt;v.setAttribute("position",new Wt(A,p)),v.setAttribute("uv",new Wt(b,d)),v.setAttribute("faceIndex",new Wt(E,_)),e.push(v),i>yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zo(s,e,t){const n=new Yn(s,e,t);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function lp(s,e,t){const n=new Float32Array(Nn),i=new S(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Na(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Jo(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function $o(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Na(){return`

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
	`}function cp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===aa||l===oa,u=l===Li||l===Pi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new jo(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new jo(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function up(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hp(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const A=m.array;p=m.version;for(let b=0,E=A.length;b<E;b+=3){const v=A[b+0],M=A[b+1],T=A[b+2];f.push(v,M,M,T,T,v)}}else{const A=g.array;p=g.version;for(let b=0,E=A.length/3-1;b<E;b+=3){const v=b+0,M=b+1,T=b+2;f.push(v,M,M,T,T,v)}}const d=new(ql(f)?Kl:$l)(f,1);d.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function dp(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){s.drawElements(r,m,a,f*l),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,f*l,g),t.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function fp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pp(s,e){return s[0]-e[0]}function mp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function gp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ve,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==d){let J=function(){L.dispose(),r.delete(u),u.removeEventListener("dispose",J)};var g=J;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let P=0;E===!0&&(P=1),v===!0&&(P=2),M===!0&&(P=3);let j=u.attributes.position.count*P,oe=1;j>e.maxTextureSize&&(oe=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const z=new Float32Array(j*oe*4*d),L=new Jl(z,j,oe,d);L.type=kn,L.needsUpdate=!0;const X=P*4;for(let $=0;$<d;$++){const H=T[$],I=x[$],U=F[$],Q=j*oe*4*$;for(let K=0;K<H.count;K++){const ee=K*X;E===!0&&(o.fromBufferAttribute(H,K),z[Q+ee+0]=o.x,z[Q+ee+1]=o.y,z[Q+ee+2]=o.z,z[Q+ee+3]=0),v===!0&&(o.fromBufferAttribute(I,K),z[Q+ee+4]=o.x,z[Q+ee+5]=o.y,z[Q+ee+6]=o.z,z[Q+ee+7]=0),M===!0&&(o.fromBufferAttribute(U,K),z[Q+ee+8]=o.x,z[Q+ee+9]=o.y,z[Q+ee+10]=o.z,z[Q+ee+11]=U.itemSize===4?o.w:1)}}_={count:d,texture:L,size:new ne(j,oe)},r.set(u,_),u.addEventListener("dispose",J)}let A=0;for(let E=0;E<m.length;E++)A+=m[E];const b=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(s,"morphTargetBaseInfluence",b),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let v=0;v<p;v++)d[v]=[v,0];n[u.id]=d}for(let v=0;v<p;v++){const M=d[v];M[0]=v,M[1]=m[v]}d.sort(mp);for(let v=0;v<8;v++)v<p&&d[v][1]?(a[v][0]=d[v][0],a[v][1]=d[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(pp);const _=u.morphAttributes.position,A=u.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const M=a[v],T=M[0],x=M[1];T!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[T]&&u.setAttribute("morphTarget"+v,_[T]),A&&u.getAttribute("morphNormal"+v)!==A[T]&&u.setAttribute("morphNormal"+v,A[T]),i[v]=x,b+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),A&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const E=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function _p(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const ic=new Bt,sc=new Jl,rc=new sh,ac=new ec,Ko=[],Qo=[],el=new Float32Array(16),tl=new Float32Array(9),nl=new Float32Array(4);function Ni(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ko[i];if(r===void 0&&(r=new Float32Array(i),Ko[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ur(s,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function xp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function Ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function Ep(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function Cp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;nl.set(n),s.uniformMatrix2fv(this.addr,!1,nl),_t(t,n)}}function yp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;tl.set(n),s.uniformMatrix3fv(this.addr,!1,tl),_t(t,n)}}function Dp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;el.set(n),s.uniformMatrix4fv(this.addr,!1,el),_t(t,n)}}function bp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Bp(s,e){const t=this.cache;gt(t,e)||(s.uniform2iv(this.addr,e),_t(t,e))}function Fp(s,e){const t=this.cache;gt(t,e)||(s.uniform3iv(this.addr,e),_t(t,e))}function Mp(s,e){const t=this.cache;gt(t,e)||(s.uniform4iv(this.addr,e),_t(t,e))}function Sp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wp(s,e){const t=this.cache;gt(t,e)||(s.uniform2uiv(this.addr,e),_t(t,e))}function Tp(s,e){const t=this.cache;gt(t,e)||(s.uniform3uiv(this.addr,e),_t(t,e))}function Lp(s,e){const t=this.cache;gt(t,e)||(s.uniform4uiv(this.addr,e),_t(t,e))}function Pp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ic,i)}function Rp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rc,i)}function Ip(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ac,i)}function Op(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sc,i)}function Np(s){switch(s){case 5126:return xp;case 35664:return vp;case 35665:return Ap;case 35666:return Ep;case 35674:return Cp;case 35675:return yp;case 35676:return Dp;case 5124:case 35670:return bp;case 35667:case 35671:return Bp;case 35668:case 35672:return Fp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return wp;case 36295:return Tp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Op}}function zp(s,e){s.uniform1fv(this.addr,e)}function Up(s,e){const t=Ni(e,this.size,2);s.uniform2fv(this.addr,t)}function kp(s,e){const t=Ni(e,this.size,3);s.uniform3fv(this.addr,t)}function Vp(s,e){const t=Ni(e,this.size,4);s.uniform4fv(this.addr,t)}function Gp(s,e){const t=Ni(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Hp(s,e){const t=Ni(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Wp(s,e){const t=Ni(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xp(s,e){s.uniform1iv(this.addr,e)}function qp(s,e){s.uniform2iv(this.addr,e)}function Yp(s,e){s.uniform3iv(this.addr,e)}function jp(s,e){s.uniform4iv(this.addr,e)}function Zp(s,e){s.uniform1uiv(this.addr,e)}function Jp(s,e){s.uniform2uiv(this.addr,e)}function $p(s,e){s.uniform3uiv(this.addr,e)}function Kp(s,e){s.uniform4uiv(this.addr,e)}function Qp(s,e,t){const n=e.length,i=ur(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||ic,i[r])}function e0(s,e,t){const n=e.length,i=ur(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||rc,i[r])}function t0(s,e,t){const n=e.length,i=ur(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||ac,i[r])}function n0(s,e,t){const n=e.length,i=ur(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||sc,i[r])}function i0(s){switch(s){case 5126:return zp;case 35664:return Up;case 35665:return kp;case 35666:return Vp;case 35674:return Gp;case 35675:return Hp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return jp;case 5125:return Zp;case 36294:return Jp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}class s0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Np(t.type)}}class r0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=i0(t.type)}}class a0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Jr=/(\w+)(\])?(\[|\.)?/g;function il(s,e){s.seq.push(e),s.map[e.id]=e}function o0(s,e,t){const n=s.name,i=n.length;for(Jr.lastIndex=0;;){const r=Jr.exec(n),o=Jr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){il(t,c===void 0?new s0(a,s,e):new r0(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new a0(a),il(t,h)),t=h}}}class Zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);o0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let l0=0;function c0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function u0(s){switch(s){case qn:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function rl(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+c0(s.getShaderSource(e),o)}else return i}function h0(s,e){const t=u0(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function d0(s,e){let t;switch(e){case xu:t="Linear";break;case vu:t="Reinhard";break;case Au:t="OptimizedCineon";break;case Eu:t="ACESFilmic";break;case Cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function f0(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($i).join(`
`)}function p0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m0(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function $i(s){return s!==""}function al(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(s){return s.replace(g0,_0)}function _0(s,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return fa(t)}const x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(s){return s.replace(x0,v0)}function v0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function A0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function E0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Li:case Pi:e="ENVMAP_TYPE_CUBE";break;case or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function y0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wa:e="ENVMAP_BLENDING_MULTIPLY";break;case gu:e="ENVMAP_BLENDING_MIX";break;case _u:e="ENVMAP_BLENDING_ADD";break}return e}function D0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function b0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=A0(t),c=E0(t),u=C0(t),h=y0(t),f=D0(t),m=t.isWebGL2?"":f0(t),g=p0(r),p=i.createProgram();let d,_,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter($i).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter($i).join(`
`),_.length>0&&(_+=`
`)):(d=[cl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),_=[m,cl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Be.tonemapping_pars_fragment:"",t.toneMapping!==hn?d0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,h0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),o=fa(o),o=al(o,t),o=ol(o,t),a=fa(a),a=al(a,t),a=ol(a,t),o=ll(o),a=ll(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=A+d+o,E=A+_+a,v=sl(i,35633,b),M=sl(i,35632,E);if(i.attachShader(p,v),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const F=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(v).trim(),j=i.getShaderInfoLog(M).trim();let oe=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){oe=!1;const L=rl(i,v,"vertex"),X=rl(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+F+`
`+L+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(P===""||j==="")&&(z=!1);z&&(this.diagnostics={runnable:oe,programLog:F,vertexShader:{log:P,prefix:d},fragmentShader:{log:j,prefix:_}})}i.deleteShader(v),i.deleteShader(M);let T;this.getUniforms=function(){return T===void 0&&(T=new Zs(i,p)),T};let x;return this.getAttributes=function(){return x===void 0&&(x=m0(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=l0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=M,this}let B0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new M0(e),t.set(e,n)),n}}class M0{constructor(e){this.id=B0++,this.code=e,this.usedTimes=0}}function S0(s,e,t,n,i,r,o){const a=new Ra,l=new F0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,F,P,j,oe){const z=j.fog,L=oe.geometry,X=x.isMeshStandardMaterial?j.environment:null,J=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),$=!!J&&J.mapping===or?J.image.height:null,H=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const I=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,U=I!==void 0?I.length:0;let Q=0;L.morphAttributes.position!==void 0&&(Q=1),L.morphAttributes.normal!==void 0&&(Q=2),L.morphAttributes.color!==void 0&&(Q=3);let K,ee,pe,Ae;if(H){const Re=Jt[H];K=Re.vertexShader,ee=Re.fragmentShader}else K=x.vertexShader,ee=x.fragmentShader,l.update(x),pe=l.getVertexShaderID(x),Ae=l.getFragmentShaderID(x);const q=s.getRenderTarget(),Le=x.alphaTest>0,_e=x.clearcoat>0,Ee=x.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:x.type,vertexShader:K,fragmentShader:ee,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:Ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:oe.isInstancedMesh===!0,instancingColor:oe.isInstancedMesh===!0&&oe.instanceColor!==null,supportsVertexTextures:f,outputEncoding:q===null?s.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:qn,map:!!x.map,matcap:!!x.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:$,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Vu,tangentSpaceNormalMap:x.normalMapType===Ta,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===qe,clearcoat:_e,clearcoatMap:_e&&!!x.clearcoatMap,clearcoatRoughnessMap:_e&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!x.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!x.iridescenceMap,iridescenceThicknessMap:Ee&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Bi,alphaMap:!!x.alphaMap,alphaTest:Le,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!L.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:oe.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Q,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:hn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mt,flipSided:x.side===xt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const F=[];if(x.shaderID?F.push(x.shaderID):(F.push(x.customVertexShaderID),F.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)F.push(P),F.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(_(F,x),A(F,x),F.push(s.outputEncoding)),F.push(x.customProgramCacheKey),F.join()}function _(x,F){x.push(F.precision),x.push(F.outputEncoding),x.push(F.envMapMode),x.push(F.envMapCubeUVHeight),x.push(F.combine),x.push(F.vertexUvs),x.push(F.fogExp2),x.push(F.sizeAttenuation),x.push(F.morphTargetsCount),x.push(F.morphAttributeCount),x.push(F.numDirLights),x.push(F.numPointLights),x.push(F.numSpotLights),x.push(F.numSpotLightMaps),x.push(F.numHemiLights),x.push(F.numRectAreaLights),x.push(F.numDirLightShadows),x.push(F.numPointLightShadows),x.push(F.numSpotLightShadows),x.push(F.numSpotLightShadowsWithMaps),x.push(F.shadowMapType),x.push(F.toneMapping),x.push(F.numClippingPlanes),x.push(F.numClipIntersection),x.push(F.depthPacking)}function A(x,F){a.disableAll(),F.isWebGL2&&a.enable(0),F.supportsVertexTextures&&a.enable(1),F.instancing&&a.enable(2),F.instancingColor&&a.enable(3),F.map&&a.enable(4),F.matcap&&a.enable(5),F.envMap&&a.enable(6),F.lightMap&&a.enable(7),F.aoMap&&a.enable(8),F.emissiveMap&&a.enable(9),F.bumpMap&&a.enable(10),F.normalMap&&a.enable(11),F.objectSpaceNormalMap&&a.enable(12),F.tangentSpaceNormalMap&&a.enable(13),F.clearcoat&&a.enable(14),F.clearcoatMap&&a.enable(15),F.clearcoatRoughnessMap&&a.enable(16),F.clearcoatNormalMap&&a.enable(17),F.iridescence&&a.enable(18),F.iridescenceMap&&a.enable(19),F.iridescenceThicknessMap&&a.enable(20),F.displacementMap&&a.enable(21),F.specularMap&&a.enable(22),F.roughnessMap&&a.enable(23),F.metalnessMap&&a.enable(24),F.gradientMap&&a.enable(25),F.alphaMap&&a.enable(26),F.alphaTest&&a.enable(27),F.vertexColors&&a.enable(28),F.vertexAlphas&&a.enable(29),F.vertexUvs&&a.enable(30),F.vertexTangents&&a.enable(31),F.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.skinning&&a.enable(4),F.morphTargets&&a.enable(5),F.morphNormals&&a.enable(6),F.morphColors&&a.enable(7),F.premultipliedAlpha&&a.enable(8),F.shadowMapEnabled&&a.enable(9),F.physicallyCorrectLights&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.specularIntensityMap&&a.enable(15),F.specularColorMap&&a.enable(16),F.transmission&&a.enable(17),F.transmissionMap&&a.enable(18),F.thicknessMap&&a.enable(19),F.sheen&&a.enable(20),F.sheenColorMap&&a.enable(21),F.sheenRoughnessMap&&a.enable(22),F.decodeVideoTexture&&a.enable(23),F.opaque&&a.enable(24),x.push(a.mask)}function b(x){const F=g[x.type];let P;if(F){const j=Jt[F];P=gh.clone(j.uniforms)}else P=x.uniforms;return P}function E(x,F){let P;for(let j=0,oe=c.length;j<oe;j++){const z=c[j];if(z.cacheKey===F){P=z,++P.usedTimes;break}}return P===void 0&&(P=new b0(s,F,x,r),c.push(P)),P}function v(x){if(--x.usedTimes===0){const F=c.indexOf(x);c[F]=c[c.length-1],c.pop(),x.destroy()}}function M(x){l.remove(x)}function T(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:E,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:T}}function w0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function T0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ul(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,g,p,d){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:d},s[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=d),e++,_}function a(h,f,m,g,p,d){const _=o(h,f,m,g,p,d);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,f,m,g,p,d){const _=o(h,f,m,g,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||T0),n.length>1&&n.sort(f||ul),i.length>1&&i.sort(f||ul)}function u(){for(let h=e,f=s.length;h<f;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function L0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new hl,s.set(n,[o])):i>=r.length?(o=new hl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function P0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Te};break;case"SpotLight":t={position:new S,direction:new S,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function R0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let I0=0;function O0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function N0(s,e){const t=new P0,n=R0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new S);const r=new S,o=new Ye,a=new Ye;function l(u,h){let f=0,m=0,g=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let p=0,d=0,_=0,A=0,b=0,E=0,v=0,M=0,T=0,x=0;u.sort(O0);const F=h!==!0?Math.PI:1;for(let j=0,oe=u.length;j<oe;j++){const z=u[j],L=z.color,X=z.intensity,J=z.distance,$=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=L.r*X*F,m+=L.g*X*F,g+=L.b*X*F;else if(z.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(z.sh.coefficients[H],X);else if(z.isDirectionalLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*F),z.castShadow){const I=z.shadow,U=n.get(z);U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=z.shadow.matrix,E++}i.directional[p]=H,p++}else if(z.isSpotLight){const H=t.get(z);H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(L).multiplyScalar(X*F),H.distance=J,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,i.spot[_]=H;const I=z.shadow;if(z.map&&(i.spotLightMap[T]=z.map,T++,I.updateMatrices(z),z.castShadow&&x++),i.spotLightMatrix[_]=I.matrix,z.castShadow){const U=n.get(z);U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=$,M++}_++}else if(z.isRectAreaLight){const H=t.get(z);H.color.copy(L).multiplyScalar(X),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),i.rectArea[A]=H,A++}else if(z.isPointLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*F),H.distance=z.distance,H.decay=z.decay,z.castShadow){const I=z.shadow,U=n.get(z);U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,U.shadowCameraNear=I.camera.near,U.shadowCameraFar=I.camera.far,i.pointShadow[d]=U,i.pointShadowMap[d]=$,i.pointShadowMatrix[d]=z.shadow.matrix,v++}i.point[d]=H,d++}else if(z.isHemisphereLight){const H=t.get(z);H.skyColor.copy(z.color).multiplyScalar(X*F),H.groundColor.copy(z.groundColor).multiplyScalar(X*F),i.hemi[b]=H,b++}}A>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==p||P.pointLength!==d||P.spotLength!==_||P.rectAreaLength!==A||P.hemiLength!==b||P.numDirectionalShadows!==E||P.numPointShadows!==v||P.numSpotShadows!==M||P.numSpotMaps!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=A,i.point.length=d,i.hemi.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+T-x,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=x,P.directionalLength=p,P.pointLength=d,P.spotLength=_,P.rectAreaLength=A,P.hemiLength=b,P.numDirectionalShadows=E,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=T,i.version=I0++)}function c(u,h){let f=0,m=0,g=0,p=0,d=0;const _=h.matrixWorldInverse;for(let A=0,b=u.length;A<b;A++){const E=u[A];if(E.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),f++}else if(E.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(E.isRectAreaLight){const v=i.rectArea[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(_),a.identity(),o.copy(E.matrixWorld),o.premultiply(_),a.extractRotation(o),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const v=i.hemi[d];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:i}}function dl(s,e){const t=new N0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function z0(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new dl(s,e),t.set(r,[l])):o>=a.length?(l=new dl(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class U0 extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k0 extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const V0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G0=`uniform sampler2D shadow_pass;
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
}`;function H0(s,e,t){let n=new Ia;const i=new ne,r=new ne,o=new Ve,a=new U0({depthPacking:ku}),l=new k0,c={},u=t.maxTextureSize,h={0:xt,1:Dn,2:mt},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:V0,fragmentShader:G0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ze(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl,this.render=function(E,v,M){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const T=s.getRenderTarget(),x=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),P=s.state;P.setBlending(yn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let j=0,oe=E.length;j<oe;j++){const z=E[j],L=z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const X=L.getFrameExtents();if(i.multiply(X),r.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/X.x),i.x=r.x*X.x,L.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/X.y),i.y=r.y*X.y,L.mapSize.y=r.y)),L.map===null){const $=this.type!==Ji?{minFilter:dt,magFilter:dt}:{};L.map=new Yn(i.x,i.y,$),L.map.texture.name=z.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();const J=L.getViewportCount();for(let $=0;$<J;$++){const H=L.getViewport($);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),P.viewport(o),L.updateMatrices(z,$),n=L.getFrustum(),b(v,M,L.camera,z,this.type)}L.isPointLightShadow!==!0&&this.type===Ji&&_(L,M),L.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(T,x,F)};function _(E,v){const M=e.update(p);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yn(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(v,null,M,f,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(v,null,M,m,p,null)}function A(E,v,M,T,x,F){let P=null;const j=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(j!==void 0?P=j:P=M.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const oe=P.uuid,z=v.uuid;let L=c[oe];L===void 0&&(L={},c[oe]=L);let X=L[z];X===void 0&&(X=P.clone(),L[z]=X),P=X}return P.visible=v.visible,P.wireframe=v.wireframe,F===Ji?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:h[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaTest,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(M.matrixWorld),P.nearDistance=T,P.farDistance=x),P}function b(E,v,M,T,x){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Ji)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const j=e.update(E),oe=E.material;if(Array.isArray(oe)){const z=j.groups;for(let L=0,X=z.length;L<X;L++){const J=z[L],$=oe[J.materialIndex];if($&&$.visible){const H=A(E,$,T,M.near,M.far,x);s.renderBufferDirect(M,null,j,H,E,J)}}}else if(oe.visible){const z=A(E,oe,T,M.near,M.far,x);s.renderBufferDirect(M,null,j,z,E,null)}}const P=E.children;for(let j=0,oe=P.length;j<oe;j++)b(P[j],v,M,T,x)}}function W0(s,e,t){const n=t.isWebGL2;function i(){let w=!1;const ae=new Ve;let k=null;const de=new Ve(0,0,0,0);return{setMask:function(he){k!==he&&!w&&(s.colorMask(he,he,he,he),k=he)},setLocked:function(he){w=he},setClear:function(he,we,it,Ze,fn){fn===!0&&(he*=Ze,we*=Ze,it*=Ze),ae.set(he,we,it,Ze),de.equals(ae)===!1&&(s.clearColor(he,we,it,Ze),de.copy(ae))},reset:function(){w=!1,k=null,de.set(-1,0,0,0)}}}function r(){let w=!1,ae=null,k=null,de=null;return{setTest:function(he){he?Le(2929):_e(2929)},setMask:function(he){ae!==he&&!w&&(s.depthMask(he),ae=he)},setFunc:function(he){if(k!==he){if(he)switch(he){case cu:s.depthFunc(512);break;case uu:s.depthFunc(519);break;case hu:s.depthFunc(513);break;case ra:s.depthFunc(515);break;case du:s.depthFunc(514);break;case fu:s.depthFunc(518);break;case pu:s.depthFunc(516);break;case mu:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);k=he}},setLocked:function(he){w=he},setClear:function(he){de!==he&&(s.clearDepth(he),de=he)},reset:function(){w=!1,ae=null,k=null,de=null}}}function o(){let w=!1,ae=null,k=null,de=null,he=null,we=null,it=null,Ze=null,fn=null;return{setTest:function(We){w||(We?Le(2960):_e(2960))},setMask:function(We){ae!==We&&!w&&(s.stencilMask(We),ae=We)},setFunc:function(We,en,wt){(k!==We||de!==en||he!==wt)&&(s.stencilFunc(We,en,wt),k=We,de=en,he=wt)},setOp:function(We,en,wt){(we!==We||it!==en||Ze!==wt)&&(s.stencilOp(We,en,wt),we=We,it=en,Ze=wt)},setLocked:function(We){w=We},setClear:function(We){fn!==We&&(s.clearStencil(We),fn=We)},reset:function(){w=!1,ae=null,k=null,de=null,he=null,we=null,it=null,Ze=null,fn=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,_=!1,A=null,b=null,E=null,v=null,M=null,T=null,x=null,F=!1,P=null,j=null,oe=null,z=null,L=null;const X=s.getParameter(35661);let J=!1,$=0;const H=s.getParameter(7938);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=$>=2);let I=null,U={};const Q=s.getParameter(3088),K=s.getParameter(2978),ee=new Ve().fromArray(Q),pe=new Ve().fromArray(K);function Ae(w,ae,k){const de=new Uint8Array(4),he=s.createTexture();s.bindTexture(w,he),s.texParameteri(w,10241,9728),s.texParameteri(w,10240,9728);for(let we=0;we<k;we++)s.texImage2D(ae+we,0,6408,1,1,0,6408,5121,de);return he}const q={};q[3553]=Ae(3553,3553,1),q[34067]=Ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(2929),l.setFunc(ra),et(!1),vt(io),Le(2884),$e(yn);function Le(w){f[w]!==!0&&(s.enable(w),f[w]=!0)}function _e(w){f[w]!==!1&&(s.disable(w),f[w]=!1)}function Ee(w,ae){return m[w]!==ae?(s.bindFramebuffer(w,ae),m[w]=ae,n&&(w===36009&&(m[36160]=ae),w===36160&&(m[36009]=ae)),!0):!1}function fe(w,ae){let k=p,de=!1;if(w)if(k=g.get(ae),k===void 0&&(k=[],g.set(ae,k)),w.isWebGLMultipleRenderTargets){const he=w.texture;if(k.length!==he.length||k[0]!==36064){for(let we=0,it=he.length;we<it;we++)k[we]=36064+we;k.length=he.length,de=!0}}else k[0]!==36064&&(k[0]=36064,de=!0);else k[0]!==1029&&(k[0]=1029,de=!0);de&&(t.isWebGL2?s.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function Re(w){return d!==w?(s.useProgram(w),d=w,!0):!1}const De={[Ai]:32774,[Kc]:32778,[Qc]:32779};if(n)De[ao]=32775,De[oo]=32776;else{const w=e.get("EXT_blend_minmax");w!==null&&(De[ao]=w.MIN_EXT,De[oo]=w.MAX_EXT)}const ge={[eu]:0,[tu]:1,[nu]:768,[Gl]:770,[lu]:776,[au]:774,[su]:772,[iu]:769,[Hl]:771,[ou]:775,[ru]:773};function $e(w,ae,k,de,he,we,it,Ze){if(w===yn){_===!0&&(_e(3042),_=!1);return}if(_===!1&&(Le(3042),_=!0),w!==$c){if(w!==A||Ze!==F){if((b!==Ai||M!==Ai)&&(s.blendEquation(32774),b=Ai,M=Ai),Ze)switch(w){case Bi:s.blendFuncSeparate(1,771,1,771);break;case Ti:s.blendFunc(1,1);break;case so:s.blendFuncSeparate(0,769,0,1);break;case ro:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Bi:s.blendFuncSeparate(770,771,1,771);break;case Ti:s.blendFunc(770,1);break;case so:s.blendFuncSeparate(0,769,0,1);break;case ro:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}E=null,v=null,T=null,x=null,A=w,F=Ze}return}he=he||ae,we=we||k,it=it||de,(ae!==b||he!==M)&&(s.blendEquationSeparate(De[ae],De[he]),b=ae,M=he),(k!==E||de!==v||we!==T||it!==x)&&(s.blendFuncSeparate(ge[k],ge[de],ge[we],ge[it]),E=k,v=de,T=we,x=it),A=w,F=null}function ot(w,ae){w.side===mt?_e(2884):Le(2884);let k=w.side===xt;ae&&(k=!k),et(k),w.blending===Bi&&w.transparent===!1?$e(yn):$e(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const de=w.stencilWrite;c.setTest(de),de&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Ie(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Le(32926):_e(32926)}function et(w){P!==w&&(w?s.frontFace(2304):s.frontFace(2305),P=w)}function vt(w){w!==jc?(Le(2884),w!==j&&(w===io?s.cullFace(1029):w===Zc?s.cullFace(1028):s.cullFace(1032))):_e(2884),j=w}function tt(w){w!==oe&&(J&&s.lineWidth(w),oe=w)}function Ie(w,ae,k){w?(Le(32823),(z!==ae||L!==k)&&(s.polygonOffset(ae,k),z=ae,L=k)):_e(32823)}function St(w){w?Le(3089):_e(3089)}function At(w){w===void 0&&(w=33984+X-1),I!==w&&(s.activeTexture(w),I=w)}function B(w,ae){I===null&&At();let k=U[I];k===void 0&&(k={type:void 0,texture:void 0},U[I]=k),(k.type!==w||k.texture!==ae)&&(s.bindTexture(w,ae||q[w]),k.type=w,k.texture=ae)}function C(){const w=U[I];w!==void 0&&w.type!==void 0&&(s.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ie(){try{s.texSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xe(){try{s.texStorage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function y(){try{s.texStorage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{s.texImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(){try{s.texImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ue(w){ee.equals(w)===!1&&(s.scissor(w.x,w.y,w.z,w.w),ee.copy(w))}function le(w){pe.equals(w)===!1&&(s.viewport(w.x,w.y,w.z,w.w),pe.copy(w))}function ve(w,ae){let k=h.get(ae);k===void 0&&(k=new WeakMap,h.set(ae,k));let de=k.get(w);de===void 0&&(de=s.getUniformBlockIndex(ae,w.name),k.set(w,de))}function Fe(w,ae){const de=h.get(ae).get(w);u.get(w)!==de&&(s.uniformBlockBinding(ae,de,w.__bindingPointIndex),u.set(w,de))}function Ge(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},I=null,U={},m={},g=new WeakMap,p=[],d=null,_=!1,A=null,b=null,E=null,v=null,M=null,T=null,x=null,F=!1,P=null,j=null,oe=null,z=null,L=null,ee.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:_e,bindFramebuffer:Ee,drawBuffers:fe,useProgram:Re,setBlending:$e,setMaterial:ot,setFlipSided:et,setCullFace:vt,setLineWidth:tt,setPolygonOffset:Ie,setScissorTest:St,activeTexture:At,bindTexture:B,unbindTexture:C,compressedTexImage2D:V,texImage2D:Z,texImage3D:se,updateUBOMapping:ve,uniformBlockBinding:Fe,texStorage2D:xe,texStorage3D:y,texSubImage2D:te,texSubImage3D:ie,compressedTexSubImage2D:ce,scissor:ue,viewport:le,reset:Ge}}function X0(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(B,C){return _?new OffscreenCanvas(B,C):ls("canvas")}function b(B,C,V,te){let ie=1;if((B.width>te||B.height>te)&&(ie=te/Math.max(B.width,B.height)),ie<1||C===!0)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap){const ce=C?Ks:Math.floor,xe=ce(ie*B.width),y=ce(ie*B.height);p===void 0&&(p=A(xe,y));const Z=V?A(xe,y):p;return Z.width=xe,Z.height=y,Z.getContext("2d").drawImage(B,0,0,xe,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+xe+"x"+y+")."),Z}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),B;return B}function E(B){return da(B.width)&&da(B.height)}function v(B){return a?!1:B.wrapS!==Gt||B.wrapT!==Gt||B.minFilter!==dt&&B.minFilter!==Pt}function M(B,C){return B.generateMipmaps&&C&&B.minFilter!==dt&&B.minFilter!==Pt}function T(B){s.generateMipmap(B)}function x(B,C,V,te,ie=!1){if(a===!1)return C;if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ce=C;return C===6403&&(V===5126&&(ce=33326),V===5131&&(ce=33325),V===5121&&(ce=33321)),C===33319&&(V===5126&&(ce=33328),V===5131&&(ce=33327),V===5121&&(ce=33323)),C===6408&&(V===5126&&(ce=34836),V===5131&&(ce=34842),V===5121&&(ce=te===qe&&ie===!1?35907:32856),V===32819&&(ce=32854),V===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function F(B,C,V){return M(B,V)===!0||B.isFramebufferTexture&&B.minFilter!==dt&&B.minFilter!==Pt?Math.log2(Math.max(C.width,C.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?C.mipmaps.length:1}function P(B){return B===dt||B===lo||B===co?9728:9729}function j(B){const C=B.target;C.removeEventListener("dispose",j),z(C),C.isVideoTexture&&g.delete(C)}function oe(B){const C=B.target;C.removeEventListener("dispose",oe),X(C)}function z(B){const C=n.get(B);if(C.__webglInit===void 0)return;const V=B.source,te=d.get(V);if(te){const ie=te[C.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&L(B),Object.keys(te).length===0&&d.delete(V)}n.remove(B)}function L(B){const C=n.get(B);s.deleteTexture(C.__webglTexture);const V=B.source,te=d.get(V);delete te[C.__cacheKey],o.memory.textures--}function X(B){const C=B.texture,V=n.get(B),te=n.get(C);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(V.__webglFramebuffer[ie]),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let ie=0,ce=C.length;ie<ce;ie++){const xe=n.get(C[ie]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(C[ie])}n.remove(C),n.remove(B)}let J=0;function $(){J=0}function H(){const B=J;return B>=l&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l),J+=1,B}function I(B){const C=[];return C.push(B.wrapS),C.push(B.wrapT),C.push(B.magFilter),C.push(B.minFilter),C.push(B.anisotropy),C.push(B.internalFormat),C.push(B.format),C.push(B.type),C.push(B.generateMipmaps),C.push(B.premultiplyAlpha),C.push(B.flipY),C.push(B.unpackAlignment),C.push(B.encoding),C.join()}function U(B,C){const V=n.get(B);if(B.isVideoTexture&&St(B),B.isRenderTargetTexture===!1&&B.version>0&&V.__version!==B.version){const te=B.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(V,B,C);return}}t.activeTexture(33984+C),t.bindTexture(3553,V.__webglTexture)}function Q(B,C){const V=n.get(B);if(B.version>0&&V.__version!==B.version){_e(V,B,C);return}t.activeTexture(33984+C),t.bindTexture(35866,V.__webglTexture)}function K(B,C){const V=n.get(B);if(B.version>0&&V.__version!==B.version){_e(V,B,C);return}t.activeTexture(33984+C),t.bindTexture(32879,V.__webglTexture)}function ee(B,C){const V=n.get(B);if(B.version>0&&V.__version!==B.version){Ee(V,B,C);return}t.activeTexture(33984+C),t.bindTexture(34067,V.__webglTexture)}const pe={[la]:10497,[Gt]:33071,[ca]:33648},Ae={[dt]:9728,[lo]:9984,[co]:9986,[Pt]:9729,[yu]:9985,[lr]:9987};function q(B,C,V){if(V?(s.texParameteri(B,10242,pe[C.wrapS]),s.texParameteri(B,10243,pe[C.wrapT]),(B===32879||B===35866)&&s.texParameteri(B,32882,pe[C.wrapR]),s.texParameteri(B,10240,Ae[C.magFilter]),s.texParameteri(B,10241,Ae[C.minFilter])):(s.texParameteri(B,10242,33071),s.texParameteri(B,10243,33071),(B===32879||B===35866)&&s.texParameteri(B,32882,33071),(C.wrapS!==Gt||C.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(B,10240,P(C.magFilter)),s.texParameteri(B,10241,P(C.minFilter)),C.minFilter!==dt&&C.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(C.type===kn&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===os&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(s.texParameterf(B,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function Le(B,C){let V=!1;B.__webglInit===void 0&&(B.__webglInit=!0,C.addEventListener("dispose",j));const te=C.source;let ie=d.get(te);ie===void 0&&(ie={},d.set(te,ie));const ce=I(C);if(ce!==B.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[ce].usedTimes++;const xe=ie[B.__cacheKey];xe!==void 0&&(ie[B.__cacheKey].usedTimes--,xe.usedTimes===0&&L(C)),B.__cacheKey=ce,B.__webglTexture=ie[ce].texture}return V}function _e(B,C,V){let te=3553;C.isDataArrayTexture&&(te=35866),C.isData3DTexture&&(te=32879);const ie=Le(B,C),ce=C.source;if(t.activeTexture(33984+V),t.bindTexture(te,B.__webglTexture),ce.version!==ce.__currentVersion||ie===!0){s.pixelStorei(37440,C.flipY),s.pixelStorei(37441,C.premultiplyAlpha),s.pixelStorei(3317,C.unpackAlignment),s.pixelStorei(37443,0);const xe=v(C)&&E(C.image)===!1;let y=b(C.image,xe,!1,u);y=At(C,y);const Z=E(y)||a,se=r.convert(C.format,C.encoding);let ue=r.convert(C.type),le=x(C.internalFormat,se,ue,C.encoding,C.isVideoTexture);q(te,C,Z);let ve;const Fe=C.mipmaps,Ge=a&&C.isVideoTexture!==!0,w=ce.__currentVersion===void 0||ie===!0,ae=F(C,y,Z);if(C.isDepthTexture)le=6402,a?C.type===kn?le=36012:C.type===Un?le=33190:C.type===Fi?le=35056:le=33189:C.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Gn&&le===6402&&C.type!==Xl&&C.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Un,ue=r.convert(C.type)),C.format===Ri&&le===6402&&(le=34041,C.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Fi,ue=r.convert(C.type))),w&&(Ge?t.texStorage2D(3553,1,le,y.width,y.height):t.texImage2D(3553,0,le,y.width,y.height,0,se,ue,null));else if(C.isDataTexture)if(Fe.length>0&&Z){Ge&&w&&t.texStorage2D(3553,ae,le,Fe[0].width,Fe[0].height);for(let k=0,de=Fe.length;k<de;k++)ve=Fe[k],Ge?t.texSubImage2D(3553,k,0,0,ve.width,ve.height,se,ue,ve.data):t.texImage2D(3553,k,le,ve.width,ve.height,0,se,ue,ve.data);C.generateMipmaps=!1}else Ge?(w&&t.texStorage2D(3553,ae,le,y.width,y.height),t.texSubImage2D(3553,0,0,0,y.width,y.height,se,ue,y.data)):t.texImage2D(3553,0,le,y.width,y.height,0,se,ue,y.data);else if(C.isCompressedTexture){Ge&&w&&t.texStorage2D(3553,ae,le,Fe[0].width,Fe[0].height);for(let k=0,de=Fe.length;k<de;k++)ve=Fe[k],C.format!==Ot?se!==null?Ge?t.compressedTexSubImage2D(3553,k,0,0,ve.width,ve.height,se,ve.data):t.compressedTexImage2D(3553,k,le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(3553,k,0,0,ve.width,ve.height,se,ue,ve.data):t.texImage2D(3553,k,le,ve.width,ve.height,0,se,ue,ve.data)}else if(C.isDataArrayTexture)Ge?(w&&t.texStorage3D(35866,ae,le,y.width,y.height,y.depth),t.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,se,ue,y.data)):t.texImage3D(35866,0,le,y.width,y.height,y.depth,0,se,ue,y.data);else if(C.isData3DTexture)Ge?(w&&t.texStorage3D(32879,ae,le,y.width,y.height,y.depth),t.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,se,ue,y.data)):t.texImage3D(32879,0,le,y.width,y.height,y.depth,0,se,ue,y.data);else if(C.isFramebufferTexture){if(w)if(Ge)t.texStorage2D(3553,ae,le,y.width,y.height);else{let k=y.width,de=y.height;for(let he=0;he<ae;he++)t.texImage2D(3553,he,le,k,de,0,se,ue,null),k>>=1,de>>=1}}else if(Fe.length>0&&Z){Ge&&w&&t.texStorage2D(3553,ae,le,Fe[0].width,Fe[0].height);for(let k=0,de=Fe.length;k<de;k++)ve=Fe[k],Ge?t.texSubImage2D(3553,k,0,0,se,ue,ve):t.texImage2D(3553,k,le,se,ue,ve);C.generateMipmaps=!1}else Ge?(w&&t.texStorage2D(3553,ae,le,y.width,y.height),t.texSubImage2D(3553,0,0,0,se,ue,y)):t.texImage2D(3553,0,le,se,ue,y);M(C,Z)&&T(te),ce.__currentVersion=ce.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function Ee(B,C,V){if(C.image.length!==6)return;const te=Le(B,C),ie=C.source;if(t.activeTexture(33984+V),t.bindTexture(34067,B.__webglTexture),ie.version!==ie.__currentVersion||te===!0){s.pixelStorei(37440,C.flipY),s.pixelStorei(37441,C.premultiplyAlpha),s.pixelStorei(3317,C.unpackAlignment),s.pixelStorei(37443,0);const ce=C.isCompressedTexture||C.image[0].isCompressedTexture,xe=C.image[0]&&C.image[0].isDataTexture,y=[];for(let k=0;k<6;k++)!ce&&!xe?y[k]=b(C.image[k],!1,!0,c):y[k]=xe?C.image[k].image:C.image[k],y[k]=At(C,y[k]);const Z=y[0],se=E(Z)||a,ue=r.convert(C.format,C.encoding),le=r.convert(C.type),ve=x(C.internalFormat,ue,le,C.encoding),Fe=a&&C.isVideoTexture!==!0,Ge=ie.__currentVersion===void 0||te===!0;let w=F(C,Z,se);q(34067,C,se);let ae;if(ce){Fe&&Ge&&t.texStorage2D(34067,w,ve,Z.width,Z.height);for(let k=0;k<6;k++){ae=y[k].mipmaps;for(let de=0;de<ae.length;de++){const he=ae[de];C.format!==Ot?ue!==null?Fe?t.compressedTexSubImage2D(34069+k,de,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(34069+k,de,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+k,de,0,0,he.width,he.height,ue,le,he.data):t.texImage2D(34069+k,de,ve,he.width,he.height,0,ue,le,he.data)}}}else{ae=C.mipmaps,Fe&&Ge&&(ae.length>0&&w++,t.texStorage2D(34067,w,ve,y[0].width,y[0].height));for(let k=0;k<6;k++)if(xe){Fe?t.texSubImage2D(34069+k,0,0,0,y[k].width,y[k].height,ue,le,y[k].data):t.texImage2D(34069+k,0,ve,y[k].width,y[k].height,0,ue,le,y[k].data);for(let de=0;de<ae.length;de++){const we=ae[de].image[k].image;Fe?t.texSubImage2D(34069+k,de+1,0,0,we.width,we.height,ue,le,we.data):t.texImage2D(34069+k,de+1,ve,we.width,we.height,0,ue,le,we.data)}}else{Fe?t.texSubImage2D(34069+k,0,0,0,ue,le,y[k]):t.texImage2D(34069+k,0,ve,ue,le,y[k]);for(let de=0;de<ae.length;de++){const he=ae[de];Fe?t.texSubImage2D(34069+k,de+1,0,0,ue,le,he.image[k]):t.texImage2D(34069+k,de+1,ve,ue,le,he.image[k])}}}M(C,se)&&T(34067),ie.__currentVersion=ie.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function fe(B,C,V,te,ie){const ce=r.convert(V.format,V.encoding),xe=r.convert(V.type),y=x(V.internalFormat,ce,xe,V.encoding);n.get(C).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,y,C.width,C.height,C.depth,0,ce,xe,null):t.texImage2D(ie,0,y,C.width,C.height,0,ce,xe,null)),t.bindFramebuffer(36160,B),Ie(C)?f.framebufferTexture2DMultisampleEXT(36160,te,ie,n.get(V).__webglTexture,0,tt(C)):s.framebufferTexture2D(36160,te,ie,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Re(B,C,V){if(s.bindRenderbuffer(36161,B),C.depthBuffer&&!C.stencilBuffer){let te=33189;if(V||Ie(C)){const ie=C.depthTexture;ie&&ie.isDepthTexture&&(ie.type===kn?te=36012:ie.type===Un&&(te=33190));const ce=tt(C);Ie(C)?f.renderbufferStorageMultisampleEXT(36161,ce,te,C.width,C.height):s.renderbufferStorageMultisample(36161,ce,te,C.width,C.height)}else s.renderbufferStorage(36161,te,C.width,C.height);s.framebufferRenderbuffer(36160,36096,36161,B)}else if(C.depthBuffer&&C.stencilBuffer){const te=tt(C);V&&Ie(C)===!1?s.renderbufferStorageMultisample(36161,te,35056,C.width,C.height):Ie(C)?f.renderbufferStorageMultisampleEXT(36161,te,35056,C.width,C.height):s.renderbufferStorage(36161,34041,C.width,C.height),s.framebufferRenderbuffer(36160,33306,36161,B)}else{const te=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0;ie<te.length;ie++){const ce=te[ie],xe=r.convert(ce.format,ce.encoding),y=r.convert(ce.type),Z=x(ce.internalFormat,xe,y,ce.encoding),se=tt(C);V&&Ie(C)===!1?s.renderbufferStorageMultisample(36161,se,Z,C.width,C.height):Ie(C)?f.renderbufferStorageMultisampleEXT(36161,se,Z,C.width,C.height):s.renderbufferStorage(36161,Z,C.width,C.height)}}s.bindRenderbuffer(36161,null)}function De(B,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,B),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),U(C.depthTexture,0);const te=n.get(C.depthTexture).__webglTexture,ie=tt(C);if(C.depthTexture.format===Gn)Ie(C)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):s.framebufferTexture2D(36160,36096,3553,te,0);else if(C.depthTexture.format===Ri)Ie(C)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):s.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ge(B){const C=n.get(B),V=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!C.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");De(C.__webglFramebuffer,B)}else if(V){C.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,C.__webglFramebuffer[te]),C.__webglDepthbuffer[te]=s.createRenderbuffer(),Re(C.__webglDepthbuffer[te],B,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),Re(C.__webglDepthbuffer,B,!1);t.bindFramebuffer(36160,null)}function $e(B,C,V){const te=n.get(B);C!==void 0&&fe(te.__webglFramebuffer,B,B.texture,36064,3553),V!==void 0&&ge(B)}function ot(B){const C=B.texture,V=n.get(B),te=n.get(C);B.addEventListener("dispose",oe),B.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=C.version,o.memory.textures++);const ie=B.isWebGLCubeRenderTarget===!0,ce=B.isWebGLMultipleRenderTargets===!0,xe=E(B)||a;if(ie){V.__webglFramebuffer=[];for(let y=0;y<6;y++)V.__webglFramebuffer[y]=s.createFramebuffer()}else{if(V.__webglFramebuffer=s.createFramebuffer(),ce)if(i.drawBuffers){const y=B.texture;for(let Z=0,se=y.length;Z<se;Z++){const ue=n.get(y[Z]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&B.samples>0&&Ie(B)===!1){const y=ce?C:[C];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let Z=0;Z<y.length;Z++){const se=y[Z];V.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(36161,V.__webglColorRenderbuffer[Z]);const ue=r.convert(se.format,se.encoding),le=r.convert(se.type),ve=x(se.internalFormat,ue,le,se.encoding),Fe=tt(B);s.renderbufferStorageMultisample(36161,Fe,ve,B.width,B.height),s.framebufferRenderbuffer(36160,36064+Z,36161,V.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(36161,null),B.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(V.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,te.__webglTexture),q(34067,C,xe);for(let y=0;y<6;y++)fe(V.__webglFramebuffer[y],B,C,36064,34069+y);M(C,xe)&&T(34067),t.unbindTexture()}else if(ce){const y=B.texture;for(let Z=0,se=y.length;Z<se;Z++){const ue=y[Z],le=n.get(ue);t.bindTexture(3553,le.__webglTexture),q(3553,ue,xe),fe(V.__webglFramebuffer,B,ue,36064+Z,3553),M(ue,xe)&&T(3553)}t.unbindTexture()}else{let y=3553;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(a?y=B.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,te.__webglTexture),q(y,C,xe),fe(V.__webglFramebuffer,B,C,36064,y),M(C,xe)&&T(y),t.unbindTexture()}B.depthBuffer&&ge(B)}function et(B){const C=E(B)||a,V=B.isWebGLMultipleRenderTargets===!0?B.texture:[B.texture];for(let te=0,ie=V.length;te<ie;te++){const ce=V[te];if(M(ce,C)){const xe=B.isWebGLCubeRenderTarget?34067:3553,y=n.get(ce).__webglTexture;t.bindTexture(xe,y),T(xe),t.unbindTexture()}}}function vt(B){if(a&&B.samples>0&&Ie(B)===!1){const C=B.isWebGLMultipleRenderTargets?B.texture:[B.texture],V=B.width,te=B.height;let ie=16384;const ce=[],xe=B.stencilBuffer?33306:36096,y=n.get(B),Z=B.isWebGLMultipleRenderTargets===!0;if(Z)for(let se=0;se<C.length;se++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+se,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),s.framebufferTexture2D(36009,36064+se,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let se=0;se<C.length;se++){ce.push(36064+se),B.depthBuffer&&ce.push(xe);const ue=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(ue===!1&&(B.depthBuffer&&(ie|=256),B.stencilBuffer&&(ie|=1024)),Z&&s.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[se]),ue===!0&&(s.invalidateFramebuffer(36008,[xe]),s.invalidateFramebuffer(36009,[xe])),Z){const le=n.get(C[se]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,le,0)}s.blitFramebuffer(0,0,V,te,0,0,V,te,ie,9728),m&&s.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let se=0;se<C.length;se++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+se,36161,y.__webglColorRenderbuffer[se]);const ue=n.get(C[se]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),s.framebufferTexture2D(36009,36064+se,3553,ue,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function tt(B){return Math.min(h,B.samples)}function Ie(B){const C=n.get(B);return a&&B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function St(B){const C=o.render.frame;g.get(B)!==C&&(g.set(B,C),B.update())}function At(B,C){const V=B.encoding,te=B.format,ie=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||B.format===ha||V!==qn&&(V===qe?a===!1?e.has("EXT_sRGB")===!0&&te===Ot?(B.format=ha,B.minFilter=Pt,B.generateMipmaps=!1):C=jl.sRGBToLinear(C):(te!==Ot||ie!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),C}this.allocateTextureUnit=H,this.resetTextureUnits=$,this.setTexture2D=U,this.setTexture2DArray=Q,this.setTexture3D=K,this.setTextureCube=ee,this.rebindTextures=$e,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ie}function q0(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Xn)return 5121;if(r===Fu)return 32819;if(r===Mu)return 32820;if(r===Du)return 5120;if(r===bu)return 5122;if(r===Xl)return 5123;if(r===Bu)return 5124;if(r===Un)return 5125;if(r===kn)return 5126;if(r===os)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Su)return 6406;if(r===Ot)return 6408;if(r===Tu)return 6409;if(r===Lu)return 6410;if(r===Gn)return 6402;if(r===Ri)return 34041;if(r===Pu)return 6403;if(r===wu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ha)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ru)return 36244;if(r===Iu)return 33319;if(r===Ou)return 33320;if(r===Nu)return 36249;if(r===Cr||r===yr||r===Dr||r===br)if(o===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Cr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Cr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uo||r===ho||r===fo||r===po)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===uo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===po)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===mo||r===go)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===mo)return o===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===go)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_o||r===xo||r===vo||r===Ao||r===Eo||r===Co||r===yo||r===Do||r===bo||r===Bo||r===Fo||r===Mo||r===So||r===wo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===_o)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xo)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vo)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ao)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Eo)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Co)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yo)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Do)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bo)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bo)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fo)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mo)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===So)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wo)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===To)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===To)return o===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Fi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Y0 extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zs extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const A=new zs;A.matrixAutoUpdate=!1,A.visible=!1,c.joints[p.jointName]=A,c.add(A)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class Z0 extends Bt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Gn,u!==Gn&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gn&&(n=Un),n===void 0&&u===Ri&&(n=Fi),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1}}class J0 extends Zn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],A=[],b=new Dt;b.layers.enable(1),b.viewport=new Ve;const E=new Dt;E.layers.enable(2),E.viewport=new Ve;const v=[b,E],M=new Y0;M.layers.enable(1),M.layers.enable(2);let T=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let U=_[I];return U===void 0&&(U=new $r,_[I]=U),U.getTargetRaySpace()},this.getControllerGrip=function(I){let U=_[I];return U===void 0&&(U=new $r,_[I]=U),U.getGripSpace()},this.getHand=function(I){let U=_[I];return U===void 0&&(U=new $r,_[I]=U),U.getHandSpace()};function F(I){const U=A.indexOf(I.inputSource);if(U===-1)return;const Q=_[U];Q!==void 0&&Q.dispatchEvent({type:I.type,data:I.inputSource})}function P(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",j);for(let I=0;I<_.length;I++){const U=A[I];U!==null&&(A[I]=null,_[I].disconnect(U))}T=null,x=null,e.setRenderTarget(p),f=null,h=null,u=null,i=null,d=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",P),i.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,U),i.updateRenderState({baseLayer:f}),d=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Ot,type:Xn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,Q=null,K=null;g.depth&&(K=g.stencil?35056:33190,U=g.stencil?Ri:Gn,Q=g.stencil?Fi:Un);const ee={colorFormat:32856,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ee),i.updateRenderState({layers:[h]}),d=new Yn(h.textureWidth,h.textureHeight,{format:Ot,type:Xn,depthTexture:new Z0(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const pe=e.properties.get(d);pe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function j(I){for(let U=0;U<I.removed.length;U++){const Q=I.removed[U],K=A.indexOf(Q);K>=0&&(A[K]=null,_[K].dispatchEvent({type:"disconnected",data:Q}))}for(let U=0;U<I.added.length;U++){const Q=I.added[U];let K=A.indexOf(Q);if(K===-1){for(let pe=0;pe<_.length;pe++)if(pe>=A.length){A.push(Q),K=pe;break}else if(A[pe]===null){A[pe]=Q,K=pe;break}if(K===-1)break}const ee=_[K];ee&&ee.dispatchEvent({type:"connected",data:Q})}}const oe=new S,z=new S;function L(I,U,Q){oe.setFromMatrixPosition(U.matrixWorld),z.setFromMatrixPosition(Q.matrixWorld);const K=oe.distanceTo(z),ee=U.projectionMatrix.elements,pe=Q.projectionMatrix.elements,Ae=ee[14]/(ee[10]-1),q=ee[14]/(ee[10]+1),Le=(ee[9]+1)/ee[5],_e=(ee[9]-1)/ee[5],Ee=(ee[8]-1)/ee[0],fe=(pe[8]+1)/pe[0],Re=Ae*Ee,De=Ae*fe,ge=K/(-Ee+fe),$e=ge*-Ee;U.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX($e),I.translateZ(ge),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const ot=Ae+ge,et=q+ge,vt=Re-$e,tt=De+(K-$e),Ie=Le*q/et*ot,St=_e*q/et*ot;I.projectionMatrix.makePerspective(vt,tt,Ie,St,ot,et)}function X(I,U){U===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(U.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;M.near=E.near=b.near=I.near,M.far=E.far=b.far=I.far,(T!==M.near||x!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,x=M.far);const U=I.parent,Q=M.cameras;X(M,U);for(let ee=0;ee<Q.length;ee++)X(Q[ee],U);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),I.matrix.copy(M.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const K=I.children;for(let ee=0,pe=K.length;ee<pe;ee++)K[ee].updateMatrixWorld(!0);Q.length===2?L(M,b,E):M.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(I){h!==null&&(h.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let J=null;function $(I,U){if(c=U.getViewerPose(l||o),m=U,c!==null){const Q=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let K=!1;Q.length!==M.cameras.length&&(M.cameras.length=0,K=!0);for(let ee=0;ee<Q.length;ee++){const pe=Q[ee];let Ae=null;if(f!==null)Ae=f.getViewport(pe);else{const Le=u.getViewSubImage(h,pe);Ae=Le.viewport,ee===0&&(e.setRenderTargetTextures(d,Le.colorTexture,h.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(d))}let q=v[ee];q===void 0&&(q=new Dt,q.layers.enable(ee),q.viewport=new Ve,v[ee]=q),q.matrix.fromArray(pe.transform.matrix),q.projectionMatrix.fromArray(pe.projectionMatrix),q.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ee===0&&M.matrix.copy(q.matrix),K===!0&&M.cameras.push(q)}}for(let Q=0;Q<_.length;Q++){const K=A[Q],ee=_[Q];K!==null&&ee!==void 0&&ee.update(K,U,l||o)}J&&J(I,U),m=null}const H=new tc;H.setAnimationLoop($),this.setAnimationLoop=function(I){J=I},this.dispose=function(){}}}function $0(s,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,A,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),c(p,d)):d.isMeshStandardMaterial?(i(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,b)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),g(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,A):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===xt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===xt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const E=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*E}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let A;d.map?A=d.map:d.specularMap?A=d.specularMap:d.displacementMap?A=d.displacementMap:d.normalMap?A=d.normalMap:d.bumpMap?A=d.bumpMap:d.roughnessMap?A=d.roughnessMap:d.metalnessMap?A=d.metalnessMap:d.alphaMap?A=d.alphaMap:d.emissiveMap?A=d.emissiveMap:d.clearcoatMap?A=d.clearcoatMap:d.clearcoatNormalMap?A=d.clearcoatNormalMap:d.clearcoatRoughnessMap?A=d.clearcoatRoughnessMap:d.iridescenceMap?A=d.iridescenceMap:d.iridescenceThicknessMap?A=d.iridescenceThicknessMap:d.specularIntensityMap?A=d.specularIntensityMap:d.specularColorMap?A=d.specularColorMap:d.transmissionMap?A=d.transmissionMap:d.thicknessMap?A=d.thicknessMap:d.sheenColorMap?A=d.sheenColorMap:d.sheenRoughnessMap&&(A=d.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=A*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===xt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function K0(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(A,b){const E=b.program;n.uniformBlockBinding(A,E)}function c(A,b){let E=i[A.id];E===void 0&&(g(A),E=u(A),i[A.id]=E,A.addEventListener("dispose",d));const v=b.program;n.updateUBOMapping(A,v);const M=e.render.frame;r[A.id]!==M&&(f(A),r[A.id]=M)}function u(A){const b=h();A.__bindingPointIndex=b;const E=s.createBuffer(),v=A.__size,M=A.usage;return s.bindBuffer(35345,E),s.bufferData(35345,v,M),s.bindBuffer(35345,null),s.bindBufferBase(35345,b,E),E}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const b=i[A.id],E=A.uniforms,v=A.__cache;s.bindBuffer(35345,b);for(let M=0,T=E.length;M<T;M++){const x=E[M];if(m(x,M,v)===!0){const F=x.value,P=x.__offset;typeof F=="number"?(x.__data[0]=F,s.bufferSubData(35345,P,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):F.toArray(x.__data),s.bufferSubData(35345,P,x.__data))}}s.bindBuffer(35345,null)}function m(A,b,E){const v=A.value;if(E[b]===void 0)return typeof v=="number"?E[b]=v:E[b]=v.clone(),!0;if(typeof v=="number"){if(E[b]!==v)return E[b]=v,!0}else{const M=E[b];if(M.equals(v)===!1)return M.copy(v),!0}return!1}function g(A){const b=A.uniforms;let E=0;const v=16;let M=0;for(let T=0,x=b.length;T<x;T++){const F=b[T],P=p(F);if(F.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,T>0){M=E%v;const j=v-M;M!==0&&j-P.boundary<0&&(E+=v-M,F.__offset=E)}E+=P.storage}return M=E%v,M>0&&(E+=v-M),A.__size=E,A.__cache={},this}function p(A){const b=A.value,E={boundary:0,storage:0};return typeof b=="number"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function d(A){const b=A.target;b.removeEventListener("dispose",d);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function _(){for(const A in i)s.deleteBuffer(i[A]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}function Q0(){const s=ls("canvas");return s.style.display="block",s}function oc(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Q0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qn,this.physicallyCorrectLights=!1,this.toneMapping=hn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,A=0,b=null,E=-1,v=null;const M=new Ve,T=new Ve;let x=null,F=e.width,P=e.height,j=1,oe=null,z=null;const L=new Ve(0,0,F,P),X=new Ve(0,0,F,P);let J=!1;const $=new Ia;let H=!1,I=!1,U=null;const Q=new Ye,K=new ne,ee=new S,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return b===null?j:1}let q=t;function Le(D,O){for(let G=0;G<D.length;G++){const R=D[G],W=e.getContext(R,O);if(W!==null)return W}return null}try{const D={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sa}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Ge,!1),q===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),q=Le(O,D),q===null)throw Le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let _e,Ee,fe,Re,De,ge,$e,ot,et,vt,tt,Ie,St,At,B,C,V,te,ie,ce,xe,y,Z,se;function ue(){_e=new up(q),Ee=new sp(q,_e,s),_e.init(Ee),y=new q0(q,_e,Ee),fe=new W0(q,_e,Ee),Re=new fp,De=new w0,ge=new X0(q,_e,fe,De,Ee,y,Re),$e=new ap(p),ot=new cp(p),et=new yh(q,Ee),Z=new np(q,_e,et,Ee),vt=new hp(q,et,Re,Z),tt=new _p(q,vt,et,Re),ie=new gp(q,Ee,ge),C=new rp(De),Ie=new S0(p,$e,ot,_e,Ee,Z,C),St=new $0(p,De),At=new L0,B=new z0(_e,Ee),te=new tp(p,$e,fe,tt,u,o),V=new H0(p,tt,Ee),se=new K0(q,Re,Ee,fe),ce=new ip(q,_e,Re,Ee),xe=new dp(q,_e,Re,Ee),Re.programs=Ie.programs,p.capabilities=Ee,p.extensions=_e,p.properties=De,p.renderLists=At,p.shadowMap=V,p.state=fe,p.info=Re}ue();const le=new J0(p,q);this.xr=le,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const D=_e.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=_e.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(D){D!==void 0&&(j=D,this.setSize(F,P,!1))},this.getSize=function(D){return D.set(F,P)},this.setSize=function(D,O,G){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,P=O,e.width=Math.floor(D*j),e.height=Math.floor(O*j),G!==!1&&(e.style.width=D+"px",e.style.height=O+"px"),this.setViewport(0,0,D,O)},this.getDrawingBufferSize=function(D){return D.set(F*j,P*j).floor()},this.setDrawingBufferSize=function(D,O,G){F=D,P=O,j=G,e.width=Math.floor(D*G),e.height=Math.floor(O*G),this.setViewport(0,0,D,O)},this.getCurrentViewport=function(D){return D.copy(M)},this.getViewport=function(D){return D.copy(L)},this.setViewport=function(D,O,G,R){D.isVector4?L.set(D.x,D.y,D.z,D.w):L.set(D,O,G,R),fe.viewport(M.copy(L).multiplyScalar(j).floor())},this.getScissor=function(D){return D.copy(X)},this.setScissor=function(D,O,G,R){D.isVector4?X.set(D.x,D.y,D.z,D.w):X.set(D,O,G,R),fe.scissor(T.copy(X).multiplyScalar(j).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(D){fe.setScissorTest(J=D)},this.setOpaqueSort=function(D){oe=D},this.setTransparentSort=function(D){z=D},this.getClearColor=function(D){return D.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(D=!0,O=!0,G=!0){let R=0;D&&(R|=16384),O&&(R|=256),G&&(R|=1024),q.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),At.dispose(),B.dispose(),De.dispose(),$e.dispose(),ot.dispose(),tt.dispose(),Z.dispose(),se.dispose(),Ie.dispose(),le.dispose(),le.removeEventListener("sessionstart",we),le.removeEventListener("sessionend",it),U&&(U.dispose(),U=null),Ze.stop()};function ve(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const D=Re.autoReset,O=V.enabled,G=V.autoUpdate,R=V.needsUpdate,W=V.type;ue(),Re.autoReset=D,V.enabled=O,V.autoUpdate=G,V.needsUpdate=R,V.type=W}function Ge(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function w(D){const O=D.target;O.removeEventListener("dispose",w),ae(O)}function ae(D){k(D),De.remove(D)}function k(D){const O=De.get(D).programs;O!==void 0&&(O.forEach(function(G){Ie.releaseProgram(G)}),D.isShaderMaterial&&Ie.releaseShaderCache(D))}this.renderBufferDirect=function(D,O,G,R,W,me){O===null&&(O=pe);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,be=Gc(D,O,G,R,W);fe.setMaterial(R,Ce);let ye=G.index;const Oe=G.attributes.position;if(ye===null){if(Oe===void 0||Oe.count===0)return}else if(ye.count===0)return;let Me=1;R.wireframe===!0&&(ye=vt.getWireframeAttribute(G),Me=2),Z.setup(W,R,be,G,ye);let Se,Xe=ce;ye!==null&&(Se=et.get(ye),Xe=xe,Xe.setIndex(Se));const Sn=ye!==null?ye.count:Oe.count,ti=G.drawRange.start*Me,ni=G.drawRange.count*Me,jt=me!==null?me.start*Me:0,Pe=me!==null?me.count*Me:1/0,ii=Math.max(ti,jt),Ke=Math.min(Sn,ti+ni,jt+Pe)-1,Tt=Math.max(0,Ke-ii+1);if(Tt!==0){if(W.isMesh)R.wireframe===!0?(fe.setLineWidth(R.wireframeLinewidth*Ae()),Xe.setMode(1)):Xe.setMode(4);else if(W.isLine){let pn=R.linewidth;pn===void 0&&(pn=1),fe.setLineWidth(pn*Ae()),W.isLineSegments?Xe.setMode(1):W.isLineLoop?Xe.setMode(2):Xe.setMode(3)}else W.isPoints?Xe.setMode(0):W.isSprite&&Xe.setMode(4);if(W.isInstancedMesh)Xe.renderInstances(ii,Tt,W.count);else if(G.isInstancedBufferGeometry){const pn=Math.min(G.instanceCount,G._maxInstanceCount);Xe.renderInstances(ii,Tt,pn)}else Xe.render(ii,Tt)}},this.compile=function(D,O){function G(R,W,me){R.transparent===!0&&R.side===mt?(R.side=xt,R.needsUpdate=!0,_s(R,W,me),R.side=Dn,R.needsUpdate=!0,_s(R,W,me),R.side=mt):_s(R,W,me)}f=B.get(D),f.init(),g.push(f),D.traverseVisible(function(R){R.isLight&&R.layers.test(O.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),f.setupLights(p.physicallyCorrectLights),D.traverse(function(R){const W=R.material;if(W)if(Array.isArray(W))for(let me=0;me<W.length;me++){const Ce=W[me];G(Ce,D,R)}else G(W,D,R)}),g.pop(),f=null};let de=null;function he(D){de&&de(D)}function we(){Ze.stop()}function it(){Ze.start()}const Ze=new tc;Ze.setAnimationLoop(he),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(D){de=D,le.setAnimationLoop(D),D===null?Ze.stop():Ze.start()},le.addEventListener("sessionstart",we),le.addEventListener("sessionend",it),this.render=function(D,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),D.isScene===!0&&D.onBeforeRender(p,D,O,b),f=B.get(D,g.length),f.init(),g.push(f),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Q),I=this.localClippingEnabled,H=C.init(this.clippingPlanes,I,O),h=At.get(D,m.length),h.init(),m.push(h),fn(D,O,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(oe,z),H===!0&&C.beginShadows();const G=f.state.shadowsArray;if(V.render(G,D,O),H===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,D),f.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const R=O.cameras;for(let W=0,me=R.length;W<me;W++){const Ce=R[W];We(h,D,Ce,Ce.viewport)}}else We(h,D,O);b!==null&&(ge.updateMultisampleRenderTarget(b),ge.updateRenderTargetMipmap(b)),D.isScene===!0&&D.onAfterRender(p,D,O),Z.resetDefaultState(),E=-1,v=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function fn(D,O,G,R){if(D.visible===!1)return;if(D.layers.test(O.layers)){if(D.isGroup)G=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(O);else if(D.isLight)f.pushLight(D),D.castShadow&&f.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||$.intersectsSprite(D)){R&&ee.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Q);const Ce=tt.update(D),be=D.material;be.visible&&h.push(D,Ce,be,G,ee.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==Re.render.frame&&(D.skeleton.update(),D.skeleton.frame=Re.render.frame),!D.frustumCulled||$.intersectsObject(D))){R&&ee.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Q);const Ce=tt.update(D),be=D.material;if(Array.isArray(be)){const ye=Ce.groups;for(let Oe=0,Me=ye.length;Oe<Me;Oe++){const Se=ye[Oe],Xe=be[Se.materialIndex];Xe&&Xe.visible&&h.push(D,Ce,Xe,G,ee.z,Se)}}else be.visible&&h.push(D,Ce,be,G,ee.z,null)}}const me=D.children;for(let Ce=0,be=me.length;Ce<be;Ce++)fn(me[Ce],O,G,R)}function We(D,O,G,R){const W=D.opaque,me=D.transmissive,Ce=D.transparent;f.setupLightsView(G),me.length>0&&en(W,O,G),R&&fe.viewport(M.copy(R)),W.length>0&&wt(W,O,G),me.length>0&&wt(me,O,G),Ce.length>0&&wt(Ce,O,G),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function en(D,O,G){const R=Ee.isWebGL2;U===null&&(U=new Yn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?os:Xn,minFilter:lr,samples:R&&r===!0?4:0})),p.getDrawingBufferSize(K),R?U.setSize(K.x,K.y):U.setSize(Ks(K.x),Ks(K.y));const W=p.getRenderTarget();p.setRenderTarget(U),p.clear();const me=p.toneMapping;p.toneMapping=hn,wt(D,O,G),p.toneMapping=me,ge.updateMultisampleRenderTarget(U),ge.updateRenderTargetMipmap(U),p.setRenderTarget(W)}function wt(D,O,G){const R=O.isScene===!0?O.overrideMaterial:null;for(let W=0,me=D.length;W<me;W++){const Ce=D[W],be=Ce.object,ye=Ce.geometry,Oe=R===null?Ce.material:R,Me=Ce.group;be.layers.test(G.layers)&&Vc(be,O,G,ye,Oe,Me)}}function Vc(D,O,G,R,W,me){D.onBeforeRender(p,O,G,R,W,me),D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),W.onBeforeRender(p,O,G,R,D,me),W.transparent===!0&&W.side===mt?(W.side=xt,W.needsUpdate=!0,p.renderBufferDirect(G,O,R,W,D,me),W.side=Dn,W.needsUpdate=!0,p.renderBufferDirect(G,O,R,W,D,me),W.side=mt):p.renderBufferDirect(G,O,R,W,D,me),D.onAfterRender(p,O,G,R,W,me)}function _s(D,O,G){O.isScene!==!0&&(O=pe);const R=De.get(D),W=f.state.lights,me=f.state.shadowsArray,Ce=W.state.version,be=Ie.getParameters(D,W.state,me,O,G),ye=Ie.getProgramCacheKey(be);let Oe=R.programs;R.environment=D.isMeshStandardMaterial?O.environment:null,R.fog=O.fog,R.envMap=(D.isMeshStandardMaterial?ot:$e).get(D.envMap||R.environment),Oe===void 0&&(D.addEventListener("dispose",w),Oe=new Map,R.programs=Oe);let Me=Oe.get(ye);if(Me!==void 0){if(R.currentProgram===Me&&R.lightsStateVersion===Ce)return eo(D,be),Me}else be.uniforms=Ie.getUniforms(D),D.onBuild(G,be,p),D.onBeforeCompile(be,p),Me=Ie.acquireProgram(be,ye),Oe.set(ye,Me),R.uniforms=be.uniforms;const Se=R.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Se.clippingPlanes=C.uniform),eo(D,be),R.needsLights=Wc(D),R.lightsStateVersion=Ce,R.needsLights&&(Se.ambientLightColor.value=W.state.ambient,Se.lightProbe.value=W.state.probe,Se.directionalLights.value=W.state.directional,Se.directionalLightShadows.value=W.state.directionalShadow,Se.spotLights.value=W.state.spot,Se.spotLightShadows.value=W.state.spotShadow,Se.rectAreaLights.value=W.state.rectArea,Se.ltc_1.value=W.state.rectAreaLTC1,Se.ltc_2.value=W.state.rectAreaLTC2,Se.pointLights.value=W.state.point,Se.pointLightShadows.value=W.state.pointShadow,Se.hemisphereLights.value=W.state.hemi,Se.directionalShadowMap.value=W.state.directionalShadowMap,Se.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Se.spotShadowMap.value=W.state.spotShadowMap,Se.spotLightMatrix.value=W.state.spotLightMatrix,Se.spotLightMap.value=W.state.spotLightMap,Se.pointShadowMap.value=W.state.pointShadowMap,Se.pointShadowMatrix.value=W.state.pointShadowMatrix);const Xe=Me.getUniforms(),Sn=Zs.seqWithValue(Xe.seq,Se);return R.currentProgram=Me,R.uniformsList=Sn,Me}function eo(D,O){const G=De.get(D);G.outputEncoding=O.outputEncoding,G.instancing=O.instancing,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Gc(D,O,G,R,W){O.isScene!==!0&&(O=pe),ge.resetTextureUnits();const me=O.fog,Ce=R.isMeshStandardMaterial?O.environment:null,be=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:qn,ye=(R.isMeshStandardMaterial?ot:$e).get(R.envMap||Ce),Oe=R.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Me=!!R.normalMap&&!!G.attributes.tangent,Se=!!G.morphAttributes.position,Xe=!!G.morphAttributes.normal,Sn=!!G.morphAttributes.color,ti=R.toneMapped?p.toneMapping:hn,ni=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,jt=ni!==void 0?ni.length:0,Pe=De.get(R),ii=f.state.lights;if(H===!0&&(I===!0||D!==v)){const Et=D===v&&R.id===E;C.setState(R,D,Et)}let Ke=!1;R.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==ii.state.version||Pe.outputEncoding!==be||W.isInstancedMesh&&Pe.instancing===!1||!W.isInstancedMesh&&Pe.instancing===!0||W.isSkinnedMesh&&Pe.skinning===!1||!W.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==ye||R.fog===!0&&Pe.fog!==me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==C.numPlanes||Pe.numIntersection!==C.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==Me||Pe.morphTargets!==Se||Pe.morphNormals!==Xe||Pe.morphColors!==Sn||Pe.toneMapping!==ti||Ee.isWebGL2===!0&&Pe.morphTargetsCount!==jt)&&(Ke=!0):(Ke=!0,Pe.__version=R.version);let Tt=Pe.currentProgram;Ke===!0&&(Tt=_s(R,O,W));let pn=!1,Vi=!1,vr=!1;const ft=Tt.getUniforms(),wn=Pe.uniforms;if(fe.useProgram(Tt.program)&&(pn=!0,Vi=!0,vr=!0),R.id!==E&&(E=R.id,Vi=!0),pn||v!==D){if(ft.setValue(q,"projectionMatrix",D.projectionMatrix),Ee.logarithmicDepthBuffer&&ft.setValue(q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),v!==D&&(v=D,Vi=!0,vr=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const Et=ft.map.cameraPosition;Et!==void 0&&Et.setValue(q,ee.setFromMatrixPosition(D.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ft.setValue(q,"isOrthographic",D.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||W.isSkinnedMesh)&&ft.setValue(q,"viewMatrix",D.matrixWorldInverse)}if(W.isSkinnedMesh){ft.setOptional(q,W,"bindMatrix"),ft.setOptional(q,W,"bindMatrixInverse");const Et=W.skeleton;Et&&(Ee.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),ft.setValue(q,"boneTexture",Et.boneTexture,ge),ft.setValue(q,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ar=G.morphAttributes;if((Ar.position!==void 0||Ar.normal!==void 0||Ar.color!==void 0&&Ee.isWebGL2===!0)&&ie.update(W,G,R,Tt),(Vi||Pe.receiveShadow!==W.receiveShadow)&&(Pe.receiveShadow=W.receiveShadow,ft.setValue(q,"receiveShadow",W.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(wn.envMap.value=ye,wn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Vi&&(ft.setValue(q,"toneMappingExposure",p.toneMappingExposure),Pe.needsLights&&Hc(wn,vr),me&&R.fog===!0&&St.refreshFogUniforms(wn,me),St.refreshMaterialUniforms(wn,R,j,P,U),Zs.upload(q,Pe.uniformsList,wn,ge)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Zs.upload(q,Pe.uniformsList,wn,ge),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ft.setValue(q,"center",W.center),ft.setValue(q,"modelViewMatrix",W.modelViewMatrix),ft.setValue(q,"normalMatrix",W.normalMatrix),ft.setValue(q,"modelMatrix",W.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const Et=R.uniformsGroups;for(let Er=0,Xc=Et.length;Er<Xc;Er++)if(Ee.isWebGL2){const to=Et[Er];se.update(to,Tt),se.bind(to,Tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tt}function Hc(D,O){D.ambientLightColor.needsUpdate=O,D.lightProbe.needsUpdate=O,D.directionalLights.needsUpdate=O,D.directionalLightShadows.needsUpdate=O,D.pointLights.needsUpdate=O,D.pointLightShadows.needsUpdate=O,D.spotLights.needsUpdate=O,D.spotLightShadows.needsUpdate=O,D.rectAreaLights.needsUpdate=O,D.hemisphereLights.needsUpdate=O}function Wc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(D,O,G){De.get(D.texture).__webglTexture=O,De.get(D.depthTexture).__webglTexture=G;const R=De.get(D);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=G===void 0,R.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,O){const G=De.get(D);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(D,O=0,G=0){b=D,_=O,A=G;let R=!0;if(D){const ye=De.get(D);ye.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),R=!1):ye.__webglFramebuffer===void 0?ge.setupRenderTarget(D):ye.__hasExternalTextures&&ge.rebindTextures(D,De.get(D.texture).__webglTexture,De.get(D.depthTexture).__webglTexture)}let W=null,me=!1,Ce=!1;if(D){const ye=D.texture;(ye.isData3DTexture||ye.isDataArrayTexture)&&(Ce=!0);const Oe=De.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(W=Oe[O],me=!0):Ee.isWebGL2&&D.samples>0&&ge.useMultisampledRTT(D)===!1?W=De.get(D).__webglMultisampledFramebuffer:W=Oe,M.copy(D.viewport),T.copy(D.scissor),x=D.scissorTest}else M.copy(L).multiplyScalar(j).floor(),T.copy(X).multiplyScalar(j).floor(),x=J;if(fe.bindFramebuffer(36160,W)&&Ee.drawBuffers&&R&&fe.drawBuffers(D,W),fe.viewport(M),fe.scissor(T),fe.setScissorTest(x),me){const ye=De.get(D.texture);q.framebufferTexture2D(36160,36064,34069+O,ye.__webglTexture,G)}else if(Ce){const ye=De.get(D.texture),Oe=O||0;q.framebufferTextureLayer(36160,36064,ye.__webglTexture,G||0,Oe)}E=-1},this.readRenderTargetPixels=function(D,O,G,R,W,me,Ce){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=De.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ce!==void 0&&(be=be[Ce]),be){fe.bindFramebuffer(36160,be);try{const ye=D.texture,Oe=ye.format,Me=ye.type;if(Oe!==Ot&&y.convert(Oe)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Se=Me===os&&(_e.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Me!==Xn&&y.convert(Me)!==q.getParameter(35738)&&!(Me===kn&&(Ee.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Se){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=D.width-R&&G>=0&&G<=D.height-W&&q.readPixels(O,G,R,W,y.convert(Oe),y.convert(Me),me)}finally{const ye=b!==null?De.get(b).__webglFramebuffer:null;fe.bindFramebuffer(36160,ye)}}},this.copyFramebufferToTexture=function(D,O,G=0){const R=Math.pow(2,-G),W=Math.floor(O.image.width*R),me=Math.floor(O.image.height*R);ge.setTexture2D(O,0),q.copyTexSubImage2D(3553,G,0,0,D.x,D.y,W,me),fe.unbindTexture()},this.copyTextureToTexture=function(D,O,G,R=0){const W=O.image.width,me=O.image.height,Ce=y.convert(G.format),be=y.convert(G.type);ge.setTexture2D(G,0),q.pixelStorei(37440,G.flipY),q.pixelStorei(37441,G.premultiplyAlpha),q.pixelStorei(3317,G.unpackAlignment),O.isDataTexture?q.texSubImage2D(3553,R,D.x,D.y,W,me,Ce,be,O.image.data):O.isCompressedTexture?q.compressedTexSubImage2D(3553,R,D.x,D.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):q.texSubImage2D(3553,R,D.x,D.y,Ce,be,O.image),R===0&&G.generateMipmaps&&q.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(D,O,G,R,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=D.max.x-D.min.x+1,Ce=D.max.y-D.min.y+1,be=D.max.z-D.min.z+1,ye=y.convert(R.format),Oe=y.convert(R.type);let Me;if(R.isData3DTexture)ge.setTexture3D(R,0),Me=32879;else if(R.isDataArrayTexture)ge.setTexture2DArray(R,0),Me=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,R.flipY),q.pixelStorei(37441,R.premultiplyAlpha),q.pixelStorei(3317,R.unpackAlignment);const Se=q.getParameter(3314),Xe=q.getParameter(32878),Sn=q.getParameter(3316),ti=q.getParameter(3315),ni=q.getParameter(32877),jt=G.isCompressedTexture?G.mipmaps[0]:G.image;q.pixelStorei(3314,jt.width),q.pixelStorei(32878,jt.height),q.pixelStorei(3316,D.min.x),q.pixelStorei(3315,D.min.y),q.pixelStorei(32877,D.min.z),G.isDataTexture||G.isData3DTexture?q.texSubImage3D(Me,W,O.x,O.y,O.z,me,Ce,be,ye,Oe,jt.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Me,W,O.x,O.y,O.z,me,Ce,be,ye,jt.data)):q.texSubImage3D(Me,W,O.x,O.y,O.z,me,Ce,be,ye,Oe,jt),q.pixelStorei(3314,Se),q.pixelStorei(32878,Xe),q.pixelStorei(3316,Sn),q.pixelStorei(3315,ti),q.pixelStorei(32877,ni),W===0&&R.generateMipmaps&&q.generateMipmap(Me),fe.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?ge.setTextureCube(D,0):D.isData3DTexture?ge.setTexture3D(D,0):D.isDataArrayTexture?ge.setTexture2DArray(D,0):ge.setTexture2D(D,0),fe.unbindTexture()},this.resetState=function(){_=0,A=0,b=null,fe.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class em extends oc{}em.prototype.isWebGL1Renderer=!0;class tm extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class nm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ua,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pt=new S;class er{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}setX(e,t){return this.normalized&&(t=Ne(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ne(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ne(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ne(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ne(t,this.array),n=Ne(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ne(t,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ne(t,this.array),n=Ne(n,this.array),i=Ne(i,this.array),r=Ne(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new er(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class lc extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fl=new Ye,pa=new Pa,Us=new cr,ks=new S;class im extends je{constructor(e=new Mt,t=new lc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=r,e.ray.intersectsSphere(Us)===!1)return;fl.copy(i).invert(),pa.copy(e.ray).applyMatrix4(fl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,p=m;g<p;g++){const d=c.getX(g);ks.fromBufferAttribute(h,d),pl(ks,d,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,p=m;g<p;g++)ks.fromBufferAttribute(h,g),pl(ks,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pl(s,e,t,n,i,r,o){const a=pa.distanceSqToPoint(s);if(a<t){const l=new S;pa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ml extends Bt{constructor(e,t,n){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=n,this.magFilter=dt,this.minFilter=dt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,m=(o-u)/f;return(i+m)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ne:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new S,i=[],r=[],o=[],a=new S,l=new Ye;for(let m=0;m<=e;m++){const g=m/e;i[m]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(lt(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(t===!0){let m=Math.acos(lt(r[0].dot(r[e]),-1,1));m/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class za extends Qt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ne,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sm extends za{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ua(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,i(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Vs=new S,Kr=new Ua,Qr=new Ua,ea=new Ua;class cc extends Qt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Vs.subVectors(i[0],i[1]).add(i[0]),c=Vs);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Vs.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);p<1e-4&&(p=1),g<1e-4&&(g=p),d<1e-4&&(d=p),Kr.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,p,d),Qr.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,p,d),ea.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,p,d)}else this.curveType==="catmullrom"&&(Kr.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Qr.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ea.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Kr.calc(l),Qr.calc(l),ea.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gl(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function rm(s,e){const t=1-s;return t*t*e}function am(s,e){return 2*(1-s)*s*e}function om(s,e){return s*s*e}function ns(s,e,t,n){return rm(s,e)+am(s,t)+om(s,n)}function lm(s,e){const t=1-s;return t*t*t*e}function cm(s,e){const t=1-s;return 3*t*t*s*e}function um(s,e){return 3*(1-s)*s*s*e}function hm(s,e){return s*s*s*e}function is(s,e,t,n,i){return lm(s,e)+cm(s,t)+um(s,n)+hm(s,i)}class uc extends Qt{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(is(e,i.x,r.x,o.x,a.x),is(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dm extends Qt{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(is(e,i.x,r.x,o.x,a.x),is(e,i.y,r.y,o.y,a.y),is(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ka extends Qt{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ne;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fm extends Qt{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hc extends Qt{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ns(e,i.x,r.x,o.x),ns(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dc extends Qt{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ns(e,i.x,r.x,o.x),ns(e,i.y,r.y,o.y),ns(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fc extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(gl(a,l.x,c.x,u.x,h.x),gl(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ne().fromArray(i))}return this}}var pc=Object.freeze({__proto__:null,ArcCurve:sm,CatmullRomCurve3:cc,CubicBezierCurve:uc,CubicBezierCurve3:dm,EllipseCurve:za,LineCurve:ka,LineCurve3:fm,QuadraticBezierCurve:hc,QuadraticBezierCurve3:dc,SplineCurve:fc});class pm extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ka(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new pc[i.type]().fromJSON(i))}return this}}class ma extends pm{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ka(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new hc(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new uc(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new fc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new za(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wn extends ma{constructor(e){super(e),this.uuid=$t(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ma().fromJSON(i))}return this}}const mm={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=mc(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,m;if(n&&(r=Am(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?1/m:0}return cs(r,o,t,a,l,m),o}};function mc(s,e,t,n,i){let r,o;if(i===Tm(s,e,t,n)>0)for(r=e;r<t;r+=n)o=_l(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=_l(r,s[r],s[r+1],o);return o&&hr(o,o.next)&&(hs(o),o=o.next),o}function bn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(hr(t,t.next)||He(t.prev,t,t.next)===0)){if(hs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&bm(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?_m(s,n,i,r):gm(s)){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),hs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=xm(bn(s),e,t),cs(s,e,t,n,i,r,2)):o===2&&vm(s,e,t,n,i,r):cs(bn(s),e,t,n,i,r,1);break}}}function gm(s){const e=s.prev,t=s,n=s.next;if(He(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Di(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&He(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function _m(s,e,t,n){const i=s.prev,r=s,o=s.next;if(He(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,l=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,c=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,u=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,h=ga(a,l,e,t,n),f=ga(c,u,e,t,n);let m=s.prevZ,g=s.nextZ;for(;m&&m.z>=h&&g&&g.z<=f;){if(m!==s.prev&&m!==s.next&&Di(i.x,i.y,r.x,r.y,o.x,o.y,m.x,m.y)&&He(m.prev,m,m.next)>=0||(m=m.prevZ,g!==s.prev&&g!==s.next&&Di(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&He(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;m&&m.z>=h;){if(m!==s.prev&&m!==s.next&&Di(i.x,i.y,r.x,r.y,o.x,o.y,m.x,m.y)&&He(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;g&&g.z<=f;){if(g!==s.prev&&g!==s.next&&Di(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function xm(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!hr(i,r)&&gc(i,n,n.next,r)&&us(i,r)&&us(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),hs(n),hs(n.next),n=s=r),n=n.next}while(n!==s);return bn(n)}function vm(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mm(o,a)){let l=_c(o,a);o=bn(o,o.next),l=bn(l,l.next),cs(o,e,t,n,i,r),cs(l,e,t,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function Am(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=mc(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Fm(c));for(i.sort(Em),r=0;r<i.length;r++)Cm(i[r],t),t=bn(t,t.next);return t}function Em(s,e){return s.x-e.x}function Cm(s,e){if(e=ym(s,e),e){const t=_c(e,s);bn(e,e.next),bn(t,t.next)}}function ym(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r){if(r=f,f===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Di(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),us(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Dm(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function Dm(s,e){return He(s.prev,s,e.prev)<0&&He(e.next,s,s.next)<0}function bm(s,e,t,n){let i=s;do i.z===null&&(i.z=ga(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Bm(i)}function Bm(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function ga(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Fm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Di(s,e,t,n,i,r,o,a){return(i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0}function Mm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Sm(s,e)&&(us(s,e)&&us(e,s)&&wm(s,e)&&(He(s.prev,s,e.prev)||He(s,e.prev,e))||hr(s,e)&&He(s.prev,s,s.next)>0&&He(e.prev,e,e.next)>0)}function He(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function hr(s,e){return s.x===e.x&&s.y===e.y}function gc(s,e,t,n){const i=Hs(He(s,e,t)),r=Hs(He(s,e,n)),o=Hs(He(t,n,s)),a=Hs(He(t,n,e));return!!(i!==r&&o!==a||i===0&&Gs(s,t,e)||r===0&&Gs(s,n,e)||o===0&&Gs(t,s,n)||a===0&&Gs(t,e,n))}function Gs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Hs(s){return s>0?1:s<0?-1:0}function Sm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&gc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function us(s,e){return He(s.prev,s,s.next)<0?He(s,e,s.next)>=0&&He(s,s.prev,e)>=0:He(s,e,s.prev)<0||He(s,s.next,e)<0}function wm(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function _c(s,e){const t=new _a(s.i,s.x,s.y),n=new _a(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _l(s,e,t,n){const i=new _a(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function hs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _a(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tm(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Mi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Mi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];xl(e),vl(n,e);let o=e.length;t.forEach(xl);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,vl(n,t[l]);const a=mm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function xl(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function vl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Oi extends Mt{constructor(e=new Wn([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ct(i,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function c(u){const h=i.length/3,f=u.extractPoints(t);let m=f.shape;const g=f.holes;Mi.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,_=g.length;d<_;d++){const A=g[d];Mi.isClockWise(A)===!0&&(g[d]=A.reverse())}const p=Mi.triangulateShape(m,g);for(let d=0,_=g.length;d<_;d++){const A=g[d];m=m.concat(A)}for(let d=0,_=m.length;d<_;d++){const A=m[d];i.push(A.x,A.y,0),r.push(0,0,1),o.push(A.x,A.y)}for(let d=0,_=p.length;d<_;d++){const A=p[d],b=A[0]+h,E=A[1]+h,v=A[2]+h;n.push(b,E,v),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Lm(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Oi(n,e.curveSegments)}}function Lm(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class bt extends Mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new S,f=new S,m=[],g=[],p=[],d=[];for(let _=0;_<=n;_++){const A=[],b=_/n;let E=0;_==0&&o==0?E=.5/t:_==n&&l==Math.PI&&(E=-.5/t);for(let v=0;v<=t;v++){const M=v/t;h.x=-e*Math.cos(i+M*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(i+M*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(M+E,1-b),A.push(c++)}u.push(A)}for(let _=0;_<n;_++)for(let A=0;A<t;A++){const b=u[_][A+1],E=u[_][A],v=u[_+1][A],M=u[_+1][A+1];(_!==0||o>0)&&m.push(b,E,M),(_!==n-1||l<Math.PI)&&m.push(E,v,M)}this.setIndex(m),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(p,3)),this.setAttribute("uv",new ct(d,2))}static fromJSON(e){return new bt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Va extends Mt{constructor(e=new dc(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,l=new S,c=new ne;let u=new S;const h=[],f=[],m=[],g=[];p(),this.setIndex(g),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(m,2));function p(){for(let b=0;b<t;b++)d(b);d(r===!1?t:0),A(),_()}function d(b){u=e.getPointAt(b/t,u);const E=o.normals[b],v=o.binormals[b];for(let M=0;M<=i;M++){const T=M/i*Math.PI*2,x=Math.sin(T),F=-Math.cos(T);l.x=F*E.x+x*v.x,l.y=F*E.y+x*v.y,l.z=F*E.z+x*v.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function _(){for(let b=1;b<=t;b++)for(let E=1;E<=i;E++){const v=(i+1)*(b-1)+(E-1),M=(i+1)*b+(E-1),T=(i+1)*b+E,x=(i+1)*(b-1)+E;g.push(v,M,x),g.push(M,T,x)}}function A(){for(let b=0;b<=t;b++)for(let E=0;E<=i;E++)c.x=b/t,c.y=E/i,m.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Va(new pc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ta extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xc extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ga extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const tr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Pm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Rm=new Pm;class dr{constructor(e){this.manager=e!==void 0?e:Rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const on={};class Im extends Error{constructor(e,t){super(e),this.response=t}}class Om extends dr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=tr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(on[e]!==void 0){on[e].push({onLoad:t,onProgress:n,onError:i});return}on[e]=[],on[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=on[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){A();function A(){h.read().then(({done:b,value:E})=>{if(b)_.close();else{p+=E.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let M=0,T=u.length;M<T;M++){const x=u[M];x.onProgress&&x.onProgress(v)}_.enqueue(E),A()}})}}});return new Response(d)}else throw new Im(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{tr.add(e,c);const u=on[e];delete on[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=on[e];if(u===void 0)throw this.manager.itemError(e),c;delete on[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Nm extends dr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=tr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ls("img");function l(){u(),tr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class fr extends dr{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,o=new Nm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ha extends je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Al=new Ye,El=new S,Cl=new S;class vc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;El.setFromMatrixPosition(e.matrixWorld),t.position.copy(El),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yl=new Ye,Xi=new S,na=new S;class zm extends vc{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xi),na.copy(n.position),na.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(na),n.updateMatrixWorld(),i.makeTranslation(-Xi.x,-Xi.y,-Xi.z),yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl)}}class Wa extends Ha{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Um extends vc{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DefaultUp),this.updateMatrix(),this.target=new je,this.shadow=new Um}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vm extends Ha{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gm{constructor(e,t,n=0,i=1/0){this.ray=new Pa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return xa(e,this,n,t),n.sort(Dl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)xa(e[i],this,n,t);return n.sort(Dl),n}}function Dl(s,e){return s.distance-e.distance}function xa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)xa(i[r],e,t,!0)}}class bl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Bl=new ne;class Hm{constructor(e=new ne(1/0,1/0),t=new ne(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bl.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Wm{constructor(){this.type="ShapePath",this.color=new Te,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ma,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const A=[];for(let b=0,E=_.length;b<E;b++){const v=_[b],M=new Wn;M.curves=v.curves,A.push(M)}return A}function n(_,A){const b=A.length;let E=!1;for(let v=b-1,M=0;M<b;v=M++){let T=A[v],x=A[M],F=x.x-T.x,P=x.y-T.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(T=A[M],F=-F,x=A[v],P=-P),_.y<T.y||_.y>x.y)continue;if(_.y===T.y){if(_.x===T.x)return!0}else{const j=P*(_.x-T.x)-F*(_.y-T.y);if(j===0)return!0;if(j<0)continue;E=!E}}else{if(_.y!==T.y)continue;if(x.x<=_.x&&_.x<=T.x||T.x<=_.x&&_.x<=x.x)return!0}}return E}const i=Mi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Wn,l.curves=a.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],f=[];let m=[],g=0,p;f[g]=void 0,m[g]=[];for(let _=0,A=r.length;_<A;_++)a=r[_],p=a.getPoints(),o=i(p),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Wn,p},f[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:p[0]});if(!f[0])return t(r);if(f.length>1){let _=!1,A=0;for(let b=0,E=f.length;b<E;b++)h[b]=[];for(let b=0,E=f.length;b<E;b++){const v=m[b];for(let M=0;M<v.length;M++){const T=v[M];let x=!0;for(let F=0;F<f.length;F++)n(T.p,f[F].p)&&(b!==F&&A++,x?(x=!1,h[F].push(T)):_=!0);x&&h[b].push(T)}}A>0&&_===!1&&(m=h)}let d;for(let _=0,A=f.length;_<A;_++){l=f[_].s,c.push(l),d=m[_];for(let b=0,E=d.length;b<E;b++)l.holes.push(d[b].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);const Ue=[["8BD3708E-8E3D-44B8-9E92-1050FA7987E5",` the essence of 
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
positive regard`,129,298,15916398,40],["23D5758E-178A-43BD-A82B-5D1F11CC1223","Alliance work",137,301,15916398,40,18],["7D0652E2-E579-47BC-8FB9-E1FBA3539A3F","Conflict splits",112,275,15916398,40,21],["5D8415B8-AD5B-44AE-804C-9A2A62B177F8","Path of the Heart",112.5,81,7606813,90],["025E5CB8-BF2F-46EC-A170-4F80BD2FCA54","Anxiety splits",119,275,15916398,40,21],["C120D32F-4E27-481A-97F9-9B62BB394DF9","Evocative unfolding",128,279,15916398,40,27],["94D5EB98-E41E-4DD5-8B8D-06598E285B4E","Trauma retelling",137,282,15916398,40,28],["2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB","Self-soothing",143,293,15916398,40,26],["4F5D4105-E8C7-4F54-97E6-F9549BC75D4F","\u2190 back and forth between \u2192",91,3,15916398,30],["65FB0CCF-F7C4-4159-9D6D-0F929AB12136","\u2190 back and forth between \u2192",103,10,15916398,30],["CF403F63-27E2-4424-B4F3-5D6CB1252881","o",180,0,7606813,70]],Xm="/Planet/assets/idealism.77654ec3.png",qm="/Planet/assets/panpsychism.3056551e.png",Ym="/Planet/assets/physicalism.a98c8617.png",jm="/Planet/assets/dualism.e565b18b.png",qi=[["CD8700A2-C44A-4F60-8929-49109F06A53D",Xm,23,184,40],["5FA198AA-C7EF-489E-886D-62A95A32FD09",qm,23,174,40],["F50C2354-B76D-461E-93C1-EEAEED59607B",Ym,23,164,40],["08396D9A-46A7-4789-8BCC-9B4A302DD0B4",jm,35,177,40]],Ws=[["8BD3708E-8E3D-44B8-9E92-1050FA7987E5","D4724AD1-EECD-4975-920C-CDAD71AA53C3","0027E01B-C40A-49F0-9833-30244700C39E"],["D4724AD1-EECD-4975-920C-CDAD71AA53C3","0027E01B-C40A-49F0-9833-30244700C39E"],["0027E01B-C40A-49F0-9833-30244700C39E"],["66F19982-732D-4744-AF06-F1F8A68D898B","287B1377-9E86-42B2-99F1-EBBEA971AB08","B5027C8B-D476-49B0-A713-ACC447159AE1"],["287B1377-9E86-42B2-99F1-EBBEA971AB08","B5027C8B-D476-49B0-A713-ACC447159AE1"],["B5027C8B-D476-49B0-A713-ACC447159AE1"],["4A481D1E-5DB6-4ABB-B9D0-8164F41393F9","876BC8AC-4013-448E-9ACA-A82DA031E09C"],["876BC8AC-4013-448E-9ACA-A82DA031E09C","008ADA1B-1D52-4F68-AB43-97D070D7774C"],["008ADA1B-1D52-4F68-AB43-97D070D7774C","3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A"],["3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A"],["D131CF5B-A895-4212-A4D4-A7E976CF5DA6","90212AAB-4CFE-4FDF-850A-7E6141F727AE"],["90212AAB-4CFE-4FDF-850A-7E6141F727AE","611A4954-9E7D-4D25-AD7D-E1FAB38482F5","5C63879D-74A6-458B-8193-AFA06A62F794","2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5","963CA1BA-9539-4089-96AB-EB0E78602390","EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F","2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7","C978C527-2523-4078-8B16-523DF8553FD5"],["611A4954-9E7D-4D25-AD7D-E1FAB38482F5"],["5C63879D-74A6-458B-8193-AFA06A62F794"],["2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5"],["963CA1BA-9539-4089-96AB-EB0E78602390"],["EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","982A6AFF-D536-4504-B63A-EC42A2712432"],["982A6AFF-D536-4504-B63A-EC42A2712432","F1EB56D4-15AE-4837-A070-40550E1262C7","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75","D456FA2C-65F4-40D2-AC84-4C7E2266BA84"],["F1EB56D4-15AE-4837-A070-40550E1262C7","506E723E-071E-4694-80AD-06BBD0681E26","2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F"],["506E723E-071E-4694-80AD-06BBD0681E26","0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","6BDD61FD-3F46-453B-8714-64AF81BCE3F9","A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["6BDD61FD-3F46-453B-8714-64AF81BCE3F9","A81C54C1-D640-4297-AFA9-346A25B8132E","9E19FF41-5144-4745-9C0B-A99858302CDE","050308DE-F371-436D-AE9F-B0D5B7F8C282"],["A81C54C1-D640-4297-AFA9-346A25B8132E"],["9E19FF41-5144-4745-9C0B-A99858302CDE"],["050308DE-F371-436D-AE9F-B0D5B7F8C282"],["A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD"],["0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD","302B64FD-4E04-4823-8E13-C7F2FAA4E7C9"],["302B64FD-4E04-4823-8E13-C7F2FAA4E7C9"],["2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F"],["3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["D456FA2C-65F4-40D2-AC84-4C7E2266BA84","B90D2293-D457-4567-8102-363F70D95781"],["B90D2293-D457-4567-8102-363F70D95781","2930997B-A726-473E-B6E9-333C2732271F","2B64F02A-BEAA-4403-8380-A8B2614D5F90","4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7"],["2930997B-A726-473E-B6E9-333C2732271F","CCCF1876-3199-41C1-AE98-25A78D1C7F51"],["CCCF1876-3199-41C1-AE98-25A78D1C7F51"],["2B64F02A-BEAA-4403-8380-A8B2614D5F90"],["4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7","EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6"],["EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6","FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8","23979ADC-AD3F-4447-BF76-224A807C2144"],["FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8"],["23979ADC-AD3F-4447-BF76-224A807C2144"],["8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F"],["2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7"],["C978C527-2523-4078-8B16-523DF8553FD5"],["F47603CA-44A7-4009-B07B-29DFA540729D","87B9AFEC-9F64-4748-87F8-F64F2B31FC29","0EF99714-0619-45EC-A71D-B4F01B6211DC"],["87B9AFEC-9F64-4748-87F8-F64F2B31FC29","FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07"],["FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07","EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C"],["EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C","0EF99714-0619-45EC-A71D-B4F01B6211DC"],["0EF99714-0619-45EC-A71D-B4F01B6211DC","7AFE8322-410C-44FA-8223-F6080F45359C","89ED6168-2517-4EF9-A5D6-3635A0C80BDC","B20BB587-FDB1-45B4-9F6B-04D75DB45484"],["7AFE8322-410C-44FA-8223-F6080F45359C","236FD67F-CD44-4B75-96AD-B16FA578E708","C9DCCC19-CD84-427B-9234-09050646BCD3","10D1D640-DE4C-4334-B08F-A4716D198E5F"],["236FD67F-CD44-4B75-96AD-B16FA578E708"],["C9DCCC19-CD84-427B-9234-09050646BCD3"],["10D1D640-DE4C-4334-B08F-A4716D198E5F"],["89ED6168-2517-4EF9-A5D6-3635A0C80BDC","074931F9-D5F1-401B-ABE0-1F26BA921E1F","E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B"],["074931F9-D5F1-401B-ABE0-1F26BA921E1F"],["E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B","9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD"],["9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD","39A86FA9-4CDF-4DD2-8AB6-78A36AC75762"],["39A86FA9-4CDF-4DD2-8AB6-78A36AC75762","60046B15-D09E-4F1F-9BC0-BA3900E29EB9"],["60046B15-D09E-4F1F-9BC0-BA3900E29EB9","263D9AEE-6F33-4D35-B945-CE35173E2F11"],["263D9AEE-6F33-4D35-B945-CE35173E2F11","3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","68B6E135-509A-4064-9FF9-DE55C3B66A8E","6A92592D-70EE-451D-941A-AD8F8435EF6E","DC5F27E6-E594-4651-A151-4F70145EDFD5","092BED79-8510-4E20-9040-0BF73C433EB0","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","9CE480B4-FB41-45F1-ABF5-D956A5526141"],["37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","4572B437-5182-4EBE-A383-F76440484F8E","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["4572B437-5182-4EBE-A383-F76440484F8E","9BA80071-89E9-400F-89CA-53CA700FA703"],["9BA80071-89E9-400F-89CA-53CA700FA703","450F8534-2F59-4A8E-BA92-D417FD0FE000","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C"],["450F8534-2F59-4A8E-BA92-D417FD0FE000","951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","C2B220C0-B7D4-432B-9ADC-1E40F1A66E25"],["951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["C2B220C0-B7D4-432B-9ADC-1E40F1A66E25","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["B470B5D1-31ED-4F91-A94D-6A94CF45E744"],["95A61B65-7A40-42FA-8622-D7A0B736BA9C"],["0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["B8BA585E-D985-44A9-A8E9-6BC1E3EA3731","AA38CD3C-7D47-4CD3-956C-5EE5C285E408","16C1A9C0-30BF-441E-8DA4-3216C0A42C51","807EE50B-B4E4-42B7-B1B4-10EBB38C1299","9CE480B4-FB41-45F1-ABF5-D956A5526141","4265E048-CDF8-4B44-836C-38549C965725"],["AA38CD3C-7D47-4CD3-956C-5EE5C285E408"],["16C1A9C0-30BF-441E-8DA4-3216C0A42C51"],["4265E048-CDF8-4B44-836C-38549C965725","538C89D3-3710-4D3F-9297-50C588EAC961"],["538C89D3-3710-4D3F-9297-50C588EAC961","1CFA1123-E052-4049-AFD7-852D36EDE838","298D83F6-FBCF-4D2F-AC0B-68DFCD6AE5B0","E4B25E04-2873-4203-8E5C-0751BB4CE230","7FA01314-361B-4C77-920A-824B38177CE8","AC391C08-CB42-4443-A2C3-1128AC357F44"],["1CFA1123-E052-4049-AFD7-852D36EDE838"],["298D83F6-FBCF-4D2F-AC0B-68DFCD6AE5B0"],["E4B25E04-2873-4203-8E5C-0751BB4CE230","7E921661-D792-418A-AA51-D1AFB9C2FA7E","1996AC29-0768-4BFD-B503-7EEF89B17DE2","AC6F030A-2049-43C8-B949-803CA7E4FA61","B542C18E-9775-4FF3-A954-282F6DF6F5D0","59883541-AA97-43E4-ADDB-9FAB51337AFA","7775CE2F-41DF-4766-9120-1FC72ABFD9FC","69EDF766-1CA2-451B-83D3-5993A5CC0373"],["7E921661-D792-418A-AA51-D1AFB9C2FA7E"],["1996AC29-0768-4BFD-B503-7EEF89B17DE2"],["AC6F030A-2049-43C8-B949-803CA7E4FA61"],["B542C18E-9775-4FF3-A954-282F6DF6F5D0"],["59883541-AA97-43E4-ADDB-9FAB51337AFA"],["7775CE2F-41DF-4766-9120-1FC72ABFD9FC"],["69EDF766-1CA2-451B-83D3-5993A5CC0373"],["7FA01314-361B-4C77-920A-824B38177CE8"],["AC391C08-CB42-4443-A2C3-1128AC357F44"],["807EE50B-B4E4-42B7-B1B4-10EBB38C1299","B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","A35D6C5D-B56F-416F-B337-41FB9E923AE0"],["B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","B07DBBCA-2123-4D55-828C-6931A999128B"],["B07DBBCA-2123-4D55-828C-6931A999128B","C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8","794FB1D5-42CF-496B-929F-9568976B58FF","12872E37-D9BC-4CDD-BB7E-E09FD46D993A","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8"],["794FB1D5-42CF-496B-929F-9568976B58FF"],["12872E37-D9BC-4CDD-BB7E-E09FD46D993A","2875511F-F91A-4807-9839-4B7153B23143","F7A69942-1F8A-42CC-A8C3-8DF26E439289"],["2875511F-F91A-4807-9839-4B7153B23143","F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","334445AA-FC20-48D6-9A7D-2558857C2346","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","3E8EDBA9-59E1-4835-8343-4AA9FF799D49","43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3"],["3E8EDBA9-59E1-4835-8343-4AA9FF799D49","64077339-5087-4CBD-A706-C1AA35E8AC8B","FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B"],["64077339-5087-4CBD-A706-C1AA35E8AC8B","9E801875-A714-49E5-969A-D9A5E5497D18","334445AA-FC20-48D6-9A7D-2558857C2346"],["9E801875-A714-49E5-969A-D9A5E5497D18","31475508-739B-4966-ADC9-D8EBCE5FE3DB"],["31475508-739B-4966-ADC9-D8EBCE5FE3DB","A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E"],["A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E"],["FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B","9A853604-4CB0-4B1B-98E1-E4D95626433A","53296584-40BE-4F83-96D3-B77540245AC2"],["9A853604-4CB0-4B1B-98E1-E4D95626433A","93C64795-A33C-4578-9694-B8B0FFE287AE"],["93C64795-A33C-4578-9694-B8B0FFE287AE","73E6253F-D36B-45B8-ABF9-A72432F5F576","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["73E6253F-D36B-45B8-ABF9-A72432F5F576","D5F25680-4FED-4B74-A5D5-1B15A8C8A580","C5096451-E5CF-4498-AF7A-E97C3C8197F9"],["D5F25680-4FED-4B74-A5D5-1B15A8C8A580"],["C5096451-E5CF-4498-AF7A-E97C3C8197F9"],["53296584-40BE-4F83-96D3-B77540245AC2","EE9D175C-0953-4B73-9B31-5C7AD0C50288","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["EE9D175C-0953-4B73-9B31-5C7AD0C50288","5A058F3F-7A05-44E2-8417-7B99A2437742","42B4C435-0661-46DB-8D8B-AB2AA00D601B","64BC8F62-AA83-4E65-B1A3-D982DE8A86C1"],["5A058F3F-7A05-44E2-8417-7B99A2437742","42B4C435-0661-46DB-8D8B-AB2AA00D601B","87EFBBA1-F6E2-4A35-8897-A73210A18318","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["42B4C435-0661-46DB-8D8B-AB2AA00D601B","64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["87EFBBA1-F6E2-4A35-8897-A73210A18318","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["FC6818C0-13A9-44E2-8A38-7C4D4FB8827B"],["8873A022-151A-41EA-B380-2284DEB82A22"],["43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3","D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9"],["D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9","9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91"],["9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91"],["334445AA-FC20-48D6-9A7D-2558857C2346","074F7C7B-C390-4328-A205-B73143806FFA"],["074F7C7B-C390-4328-A205-B73143806FFA","9E66D7AE-5825-4691-BADB-FC7A75F7B29D","2C809F14-A1A9-4178-B236-FA6408CD789D","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["9E66D7AE-5825-4691-BADB-FC7A75F7B29D"],["2C809F14-A1A9-4178-B236-FA6408CD789D"],["F7A69942-1F8A-42CC-A8C3-8DF26E439289","5AE32B80-01A1-4314-9A23-453A397A2599","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","68B6E135-509A-4064-9FF9-DE55C3B66A8E"],["5AE32B80-01A1-4314-9A23-453A397A2599","72A32148-45A5-41A7-A836-0CE959AF38D4","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","6A92592D-70EE-451D-941A-AD8F8435EF6E"],["72A32148-45A5-41A7-A836-0CE959AF38D4","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","DC5F27E6-E594-4651-A151-4F70145EDFD5"],["3F0C901E-76B2-463D-B17A-8078CA2E1C91"],["E27CC807-EB70-45C4-84B3-DDF1F8AADB00"],["1E34F972-7322-4F63-A271-2BC8A5241BB8"],["76AB6EF8-AEF6-41D3-9576-2FE8D14F462B"],["5BEDE28D-38C4-4D03-B4C6-2C74ECD89078"],["D7868612-7C4F-49F8-BCAA-B03E2BCEF450"],["820F18C3-7140-4923-9D3A-2CD81A26B702"],["7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6","EB83C866-FF54-449B-A65C-24ECDE2820C1","3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58"],["EB83C866-FF54-449B-A65C-24ECDE2820C1"],["3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58"],["A35D6C5D-B56F-416F-B337-41FB9E923AE0","EDCAFFF6-FD78-40E0-B719-97569DCD8819"],["EDCAFFF6-FD78-40E0-B719-97569DCD8819","46CBB5AE-79D5-4808-A400-4B804DA91E12","E55861C5-E9D1-4B9A-956B-DC53B1C0E01E","8405A4E1-F7F9-4016-86B8-2E5C98520036","8573618D-34C1-481C-A217-71AB05C7C4D7","B9839052-6809-4E31-8792-FF4DF8C9FC48"],["46CBB5AE-79D5-4808-A400-4B804DA91E12","8D82CC00-C9F5-4B9E-B256-A879D4623B3C","9BFCB2C3-78B9-4982-8501-2BFF113D4207"],["8D82CC00-C9F5-4B9E-B256-A879D4623B3C","35476F95-E324-40D2-B224-A5E27568028C","9BFCB2C3-78B9-4982-8501-2BFF113D4207"],["35476F95-E324-40D2-B224-A5E27568028C","4D1CEB04-6987-4C58-93B0-57DBB0914867","7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8","5946ACA1-B182-4776-BAC0-5EC43E0480C6","05C8F42F-1F73-443B-B461-A3FFE6867199","4C0B70B2-C4EC-4716-A08C-220E856D5B4A"],["4D1CEB04-6987-4C58-93B0-57DBB0914867","0EF9450D-3CB7-4D13-BCFB-49088E87F374"],["0EF9450D-3CB7-4D13-BCFB-49088E87F374","80130A99-E12B-459A-B43D-1CE8BB3B1EF2"],["80130A99-E12B-459A-B43D-1CE8BB3B1EF2","2095179D-0AC4-4378-8E6F-8F71E2793FAD","D6B5FE51-C8D9-42EB-B0BE-07B09B51776C"],["2095179D-0AC4-4378-8E6F-8F71E2793FAD","AE242003-1C0A-40BF-AEA2-567E61901171","F3695B21-1EAA-404B-9239-0767DA0BC90C","B7A263AD-5457-4712-A089-03B24D041629","B4399091-3D0A-472B-A40C-BC8CDD097E7F","20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB"],["AE242003-1C0A-40BF-AEA2-567E61901171"],["F3695B21-1EAA-404B-9239-0767DA0BC90C"],["B7A263AD-5457-4712-A089-03B24D041629"],["B4399091-3D0A-472B-A40C-BC8CDD097E7F"],["20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB"],["D6B5FE51-C8D9-42EB-B0BE-07B09B51776C","6473A93C-A4A4-41D5-9765-D58B3F8A57EA","0A57B7F6-E875-485D-98F2-66458F5FBC6B","19DB1035-B51E-4F0A-8F97-888375D12E8F","34C06752-B7AD-461D-A5E9-B29CAE227645","83D9EEC0-3314-4BD5-826E-F1ADDA1492EA","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["6473A93C-A4A4-41D5-9765-D58B3F8A57EA"],["0A57B7F6-E875-485D-98F2-66458F5FBC6B"],["19DB1035-B51E-4F0A-8F97-888375D12E8F"],["34C06752-B7AD-461D-A5E9-B29CAE227645"],["83D9EEC0-3314-4BD5-826E-F1ADDA1492EA"],["1E7C0EB1-1DDE-4044-A8B7-E4540487DB1C","E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","DA6F224D-BC2D-47BF-91C5-9538BF062D81","14BA8BEB-FA35-44B7-9DE3-A1503614069D"],["DA6F224D-BC2D-47BF-91C5-9538BF062D81","603F93B5-AA5A-49C2-8AEE-440DA485BA40","F26DDAD3-74C1-48A8-9488-8BAB580947E7","05CF2077-5B2D-43E7-92AC-232082EA7F8C","DEA78281-438E-4CB6-ADCE-25DC85D9FF37"],["603F93B5-AA5A-49C2-8AEE-440DA485BA40"],["F26DDAD3-74C1-48A8-9488-8BAB580947E7"],["05CF2077-5B2D-43E7-92AC-232082EA7F8C","F0AA6E16-8A46-43FA-B435-942FFF734B06","BEA84E38-CF01-4A16-941B-F26EEE3E6D88","EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3","C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF"],["F0AA6E16-8A46-43FA-B435-942FFF734B06"],["BEA84E38-CF01-4A16-941B-F26EEE3E6D88"],["EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3"],["C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF"],["DEA78281-438E-4CB6-ADCE-25DC85D9FF37","202B8B0D-13DA-459A-9D5E-ED5DD40D30E4"],["202B8B0D-13DA-459A-9D5E-ED5DD40D30E4","0AA203B9-8B52-4412-B32D-D412F894D779","2BAF7986-984E-4937-BA03-E5CBAA234AEF","1D823800-DD7A-4B6F-94EA-517D4DE9876B"],["0AA203B9-8B52-4412-B32D-D412F894D779","6A20558B-3A35-4D14-8EBE-3C5DF4F02868"],["6A20558B-3A35-4D14-8EBE-3C5DF4F02868","96786F52-EB9D-42BB-B854-457841A162BA","28106D6F-9E60-4579-A457-B2F4DB781D6D","D81C6E33-ED3A-45ED-9567-78EC22F9A6C7","8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B","14BA8BEB-FA35-44B7-9DE3-A1503614069D"],["96786F52-EB9D-42BB-B854-457841A162BA"],["28106D6F-9E60-4579-A457-B2F4DB781D6D"],["D81C6E33-ED3A-45ED-9567-78EC22F9A6C7"],["8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B"],["2BAF7986-984E-4937-BA03-E5CBAA234AEF","C0074FCF-7AB4-4781-BC26-3812FBA61015","CB62D122-2342-4D33-B98D-EE3BD70B6538","64192F80-785C-4B14-AF81-987193E41085","83BC3254-7B62-4D9C-BC20-192D2D442466","4788E206-DE47-48FA-8DC4-326274991F8D","111EBFA8-E400-4984-A638-63120DDC1590"],["C0074FCF-7AB4-4781-BC26-3812FBA61015"],["CB62D122-2342-4D33-B98D-EE3BD70B6538"],["64192F80-785C-4B14-AF81-987193E41085"],["83BC3254-7B62-4D9C-BC20-192D2D442466"],["4788E206-DE47-48FA-8DC4-326274991F8D"],["111EBFA8-E400-4984-A638-63120DDC1590"],["1D823800-DD7A-4B6F-94EA-517D4DE9876B","C0993BB8-9C64-4F7A-A673-289EA2A33D0D","4AF3AF2F-5D76-4620-911E-54398F84F288","672E2CBD-7421-4E94-9728-95353BCD772E"],["C0993BB8-9C64-4F7A-A673-289EA2A33D0D","00E891B6-75E2-43B7-97B4-62F6DD69B15B"],["00E891B6-75E2-43B7-97B4-62F6DD69B15B","B477D774-01E4-4F6A-93B1-111E699FFE75","E2D52070-A83C-4D48-A218-BB3DC7BEAF21","EBCF0E75-DA1D-4533-BEEA-73657C4588AF","4AF3AF2F-5D76-4620-911E-54398F84F288","83BA614D-5560-48B0-8377-217CF04E01FC"],["B477D774-01E4-4F6A-93B1-111E699FFE75"],["E2D52070-A83C-4D48-A218-BB3DC7BEAF21"],["EBCF0E75-DA1D-4533-BEEA-73657C4588AF"],["4AF3AF2F-5D76-4620-911E-54398F84F288"],["672E2CBD-7421-4E94-9728-95353BCD772E"],["14BA8BEB-FA35-44B7-9DE3-A1503614069D","1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","E8F9F0EB-2B89-4D4C-901E-A029C0211A93","268F9754-9375-4E1F-B752-233A8F83F592","B20BB587-FDB1-45B4-9F6B-04D75DB45484"],["1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","A478FC19-7AC1-4480-A9C9-93AD4C925970","61282C0C-C654-4B5D-B2F9-ECF698B16489","9FC8F28B-4B52-4BFC-9349-4B5271FCDD84"],["A478FC19-7AC1-4480-A9C9-93AD4C925970","6E92A01E-0E8D-494E-8249-EF0EF0D22987","349EFC6D-D96C-4E61-A839-93D31BF698B5","ED71676A-652A-400A-AAEB-70A6B980A6F2"],["6E92A01E-0E8D-494E-8249-EF0EF0D22987"],["349EFC6D-D96C-4E61-A839-93D31BF698B5"],["ED71676A-652A-400A-AAEB-70A6B980A6F2"],["61282C0C-C654-4B5D-B2F9-ECF698B16489"],["9FC8F28B-4B52-4BFC-9349-4B5271FCDD84"],["E8F9F0EB-2B89-4D4C-901E-A029C0211A93","CCBD9962-2FF7-4C39-97B9-D93FA4044BD3","D0E50499-8C3F-4818-BBAA-FEB433FC1704","BC583511-0DA5-4F1E-B699-D72CB449DD00","C4B7A8B7-5171-4873-B269-0A0582CA2084","FC88FDFD-AE27-4F76-938D-6FE581E65D08","30F3B081-5F90-4F13-BC8D-BBC7293CEC04","D49F0D1E-5DD6-4147-88E2-604F7E4A3566"],["CCBD9962-2FF7-4C39-97B9-D93FA4044BD3"],["D0E50499-8C3F-4818-BBAA-FEB433FC1704"],["BC583511-0DA5-4F1E-B699-D72CB449DD00"],["C4B7A8B7-5171-4873-B269-0A0582CA2084"],["FC88FDFD-AE27-4F76-938D-6FE581E65D08"],["30F3B081-5F90-4F13-BC8D-BBC7293CEC04"],["D49F0D1E-5DD6-4147-88E2-604F7E4A3566"],["268F9754-9375-4E1F-B752-233A8F83F592","B46F4E38-26DA-4388-91DA-32731D7B44A1","21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F","A6BA6799-B325-453E-B4D1-BCD71CF12705"],["B46F4E38-26DA-4388-91DA-32731D7B44A1","6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0","8AABE820-1F0B-4DDD-BFF2-9177B2A47112","128A73FA-B982-4A3E-B9C8-4AFBAB70AB56"],["128A73FA-B982-4A3E-B9C8-4AFBAB70AB56"],["6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0"],["8AABE820-1F0B-4DDD-BFF2-9177B2A47112"],["21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F"],["A6BA6799-B325-453E-B4D1-BCD71CF12705","FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1","D358D3A2-957C-470B-BC5F-A71A7622AE07","55EF8116-598E-4168-ADBC-9248DB79A821"],["FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1"],["D358D3A2-957C-470B-BC5F-A71A7622AE07"],["55EF8116-598E-4168-ADBC-9248DB79A821"],["CBDECA18-D9A1-4FDE-84FD-DDB8849710A3","A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","F05326DF-FA0C-4619-8A75-0411CB1CB2F9"],["F05326DF-FA0C-4619-8A75-0411CB1CB2F9","9EAF3484-3F2C-415B-8067-B50A3FA1B974"],["9EAF3484-3F2C-415B-8067-B50A3FA1B974","ADBA0E07-67F4-47EC-B776-EE198BCA1A53"],["ADBA0E07-67F4-47EC-B776-EE198BCA1A53","75FF467B-7F2F-4EEC-ADC9-2D64EE46D692"],["75FF467B-7F2F-4EEC-ADC9-2D64EE46D692","03593653-145D-4B52-9873-D90B412C8468"],["03593653-145D-4B52-9873-D90B412C8468","4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953"],["4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953"],["B1212500-7C71-4B0B-B979-C8A5E93B544C","D7191BF4-96AD-46A9-89F8-B015FD27C991","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["D7191BF4-96AD-46A9-89F8-B015FD27C991","F63DCD53-F24F-4AE7-84C0-61419A5D6E68"],["F63DCD53-F24F-4AE7-84C0-61419A5D6E68","6FD89C72-5D89-4A96-B643-4BDDDEC450AC"],["6FD89C72-5D89-4A96-B643-4BDDDEC450AC","28B608E4-AED5-4042-977B-B32908F4DC0F"],["28B608E4-AED5-4042-977B-B32908F4DC0F","04FEF0CF-A123-4DB2-A9CC-72E134399258"],["04FEF0CF-A123-4DB2-A9CC-72E134399258","E78076C8-224D-4606-81AD-7DF62AE1B946"],["E78076C8-224D-4606-81AD-7DF62AE1B946","6D9D49EF-63D9-441E-865B-80CFE99B3E48"],["6D9D49EF-63D9-441E-865B-80CFE99B3E48","E0E57B88-D092-45E3-93DE-F47199063BEA"],["E0E57B88-D092-45E3-93DE-F47199063BEA","1F0628F7-D965-4529-8228-AA53C73527B2"],["1F0628F7-D965-4529-8228-AA53C73527B2","5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B"],["5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B","EC74E906-1F03-4570-A640-5E95985106E8"],["EC74E906-1F03-4570-A640-5E95985106E8"],["7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8"],["5946ACA1-B182-4776-BAC0-5EC43E0480C6"],["05C8F42F-1F73-443B-B461-A3FFE6867199","E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0"],["E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0"],["4C0B70B2-C4EC-4716-A08C-220E856D5B4A","A870BA4E-6243-4C93-B823-BDF69104A69A"],["A870BA4E-6243-4C93-B823-BDF69104A69A"],["9BFCB2C3-78B9-4982-8501-2BFF113D4207","2C1FEC64-B01F-4D90-93AF-4F17977F3E05"],["2C1FEC64-B01F-4D90-93AF-4F17977F3E05","27D920A3-4748-497F-92C3-0CEAE399325B","FF0DE3EB-BA66-4B54-9700-1075754A5EB3","53CADF73-2F2C-4BCC-8748-842EE8177A85","5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B","8A3E20D3-00BC-47E5-AC05-E717C6A803C6"],["27D920A3-4748-497F-92C3-0CEAE399325B","3DB4BB32-A030-449C-B131-424A2FD3A651"],["3DB4BB32-A030-449C-B131-424A2FD3A651","FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D"],["FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D","744A07BE-0872-47C6-B69E-6FD2A3E8EC1B","13BD4AA3-E5C9-4A13-A702-70244A2B81AC"],["744A07BE-0872-47C6-B69E-6FD2A3E8EC1B"],["13BD4AA3-E5C9-4A13-A702-70244A2B81AC","6940ABE5-F16A-451E-9986-1853902A8FAA","475EAF65-F5DA-4D50-AA66-64CF5305CBC9","A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","4D115C88-FC8E-4544-AC27-0B775B126D44"],["6940ABE5-F16A-451E-9986-1853902A8FAA","2657C9EE-BFA1-43FA-BB34-1A624A4E5237","228A6803-C3D9-420B-A083-476A5B6FE927"],["2657C9EE-BFA1-43FA-BB34-1A624A4E5237"],["228A6803-C3D9-420B-A083-476A5B6FE927","F095128A-1A37-4D3C-98C5-FAE6E3F9E808"],["F095128A-1A37-4D3C-98C5-FAE6E3F9E808"],["475EAF65-F5DA-4D50-AA66-64CF5305CBC9","39717030-47DE-4D14-8D3B-9D454BE3AF3B"],["39717030-47DE-4D14-8D3B-9D454BE3AF3B"],["A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","08A7BDCA-0161-40B1-9F74-EF7E09C1BE13","8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["08A7BDCA-0161-40B1-9F74-EF7E09C1BE13","8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["4D115C88-FC8E-4544-AC27-0B775B126D44","4D115C88-FC8E-4544-AC27-0B775B126D44","84C0342B-29BC-4E8A-A39D-0D638491312E","F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["84C0342B-29BC-4E8A-A39D-0D638491312E","F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["FF0DE3EB-BA66-4B54-9700-1075754A5EB3"],["53CADF73-2F2C-4BCC-8748-842EE8177A85","D733DA5C-E0BC-4EAE-BD64-92B116E15988"],["D733DA5C-E0BC-4EAE-BD64-92B116E15988"],["5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B","CC9D819E-DC87-4E17-97B4-AADC851E9E8E"],["CC9D819E-DC87-4E17-97B4-AADC851E9E8E"],["8A3E20D3-00BC-47E5-AC05-E717C6A803C6","83BA614D-5560-48B0-8377-217CF04E01FC"],["83BA614D-5560-48B0-8377-217CF04E01FC"],["E55861C5-E9D1-4B9A-956B-DC53B1C0E01E"],["8405A4E1-F7F9-4016-86B8-2E5C98520036"],["8573618D-34C1-481C-A217-71AB05C7C4D7","F05FC454-9C67-4E53-AAC4-A288D7E0E4E2"],["F05FC454-9C67-4E53-AAC4-A288D7E0E4E2"],["B9839052-6809-4E31-8792-FF4DF8C9FC48","38B0E475-2D54-4818-ABC6-E353229FDFF2"],["38B0E475-2D54-4818-ABC6-E353229FDFF2"],["68B6E135-509A-4064-9FF9-DE55C3B66A8E"],["6A92592D-70EE-451D-941A-AD8F8435EF6E"],["DC5F27E6-E594-4651-A151-4F70145EDFD5"],["092BED79-8510-4E20-9040-0BF73C433EB0","F1D5FF04-CA73-47D3-87C6-41C6BA8F6708","ACF82BBE-F34C-4E20-B18E-08F28B3ABA12","B6246F44-0855-4817-9D0D-D397E9DB7442","050CF590-16D7-48A8-9656-E58FD0B6E8BF","1EE48F2F-650A-413A-8F77-720A641BA416","C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA"],["F1D5FF04-CA73-47D3-87C6-41C6BA8F6708"],["ACF82BBE-F34C-4E20-B18E-08F28B3ABA12"],["B6246F44-0855-4817-9D0D-D397E9DB7442"],["050CF590-16D7-48A8-9656-E58FD0B6E8BF"],["1EE48F2F-650A-413A-8F77-720A641BA416"],["C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA"],["20790E3B-9D36-40B2-82CB-56322AA09DE7","28763A09-FA38-43D2-A7C3-52E15D20F5B9"],["28763A09-FA38-43D2-A7C3-52E15D20F5B9"],["B20BB587-FDB1-45B4-9F6B-04D75DB45484","9C1A33F2-FA28-4FD0-B3A3-011939BF112E","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["9C1A33F2-FA28-4FD0-B3A3-011939BF112E","0B0E75E0-8E66-4B96-8D18-05B388B8166B","39C8C744-9E33-4FBD-B64F-4392BB1D7D43","F3CDF5ED-FE39-4306-9BC7-732E7252919B","C4AE0F47-95C9-42BF-875A-9DF1743AAFB2","EE895C76-B04A-4587-9970-5A6CBA56069C"],["0B0E75E0-8E66-4B96-8D18-05B388B8166B"],["39C8C744-9E33-4FBD-B64F-4392BB1D7D43"],["F3CDF5ED-FE39-4306-9BC7-732E7252919B"],["C4AE0F47-95C9-42BF-875A-9DF1743AAFB2","33DB61E6-CD56-4F49-98BD-5397EB788805","6C32C072-E56E-40F0-AC39-7909FC465612","64768881-AED3-403E-92A8-E4A3CBB39100"],["33DB61E6-CD56-4F49-98BD-5397EB788805","554920A7-A50D-44F4-8448-DD747BBB57DA"],["554920A7-A50D-44F4-8448-DD747BBB57DA","803C7EA0-EF36-42AE-B810-7620C3509FEA","21CBC21A-6D6E-424D-B1D0-DCCD5425A05B","A9BA755A-FE4B-498E-9952-40214F02B8D6","6C32C072-E56E-40F0-AC39-7909FC465612","64768881-AED3-403E-92A8-E4A3CBB39100","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["803C7EA0-EF36-42AE-B810-7620C3509FEA"],["21CBC21A-6D6E-424D-B1D0-DCCD5425A05B"],["A9BA755A-FE4B-498E-9952-40214F02B8D6","5503BDDB-9985-44D9-B9A4-F731513F6903","FEC6325D-1E5F-4790-A841-63709B264A8D","82F1F09B-EBCB-4F04-BDF1-4991F27E3724"],["82F1F09B-EBCB-4F04-BDF1-4991F27E3724","82F1F09B-EBCB-4F04-BDF1-4991F27E3724"],["5503BDDB-9985-44D9-B9A4-F731513F6903","FEC6325D-1E5F-4790-A841-63709B264A8D"],["FEC6325D-1E5F-4790-A841-63709B264A8D","905689F0-5537-42CC-B864-9166DA60C470","D8049867-1FC0-4817-BD67-64A421349C65"],["905689F0-5537-42CC-B864-9166DA60C470"],["D8049867-1FC0-4817-BD67-64A421349C65","6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB"],["6C32C072-E56E-40F0-AC39-7909FC465612"],["64768881-AED3-403E-92A8-E4A3CBB39100"],["EE895C76-B04A-4587-9970-5A6CBA56069C"],["DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["95BBCB02-420D-4FD9-A9BA-A404D72B41D3"],["6A893E71-2F6B-4958-B917-5F145FA37CF5","3041389D-AD21-46F6-9721-2DD4E9FC1F65"],["3041389D-AD21-46F6-9721-2DD4E9FC1F65"],["CC97CAEF-3828-466E-B55A-BA85783CE034","4F5D4105-E8C7-4F54-97E6-F9549BC75D4F"],["0F8B3461-7B9D-4E1D-A392-A6DE782AE537"],["DEADD385-73FB-4EA3-AACC-13C6B453E9E6","CDC69285-DE4B-40DE-BDFB-73C750FA8CB4"],["CDC69285-DE4B-40DE-BDFB-73C750FA8CB4","EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95"],["EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95","662B5EE1-6533-44B3-BC7A-2DF7708F1658"],["662B5EE1-6533-44B3-BC7A-2DF7708F1658"],["973015FD-576A-40F3-A86C-2E8EDA196B5F","29155A2F-FCBB-4347-90DE-E8D3F86A3FFA","E400970C-2383-40ED-90F4-793AFAD87E45","65FB0CCF-F7C4-4159-9D6D-0F929AB12136"],["29155A2F-FCBB-4347-90DE-E8D3F86A3FFA"],["E400970C-2383-40ED-90F4-793AFAD87E45","788AC673-A0A0-4E77-93EC-2A21B981D7A8"],["788AC673-A0A0-4E77-93EC-2A21B981D7A8","3C66F9F4-19C8-497C-AD5A-377F74970968"],["3C66F9F4-19C8-497C-AD5A-377F74970968","829B047D-0C32-4887-8A3B-690BED8B847B","DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["829B047D-0C32-4887-8A3B-690BED8B847B","DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["88244D22-DAEF-4189-83EB-E7B5D5726E62"],["9CE480B4-FB41-45F1-ABF5-D956A5526141"],["F2CA7E5B-766D-48F0-941D-D4B1FD54C097"],["987F0FDD-0FAF-44FC-9DE7-7D88E32D801D","6423DD8B-C097-4C26-9917-D401ACA5FE91"],["6423DD8B-C097-4C26-9917-D401ACA5FE91","6345AAF7-5F22-49C1-8052-E28059BFFC3F"],["6345AAF7-5F22-49C1-8052-E28059BFFC3F","29EA91F8-0360-45F4-9E0A-511D80C51516","2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","04C21F20-915C-446A-902D-A8D5D7076C6F"],["29EA91F8-0360-45F4-9E0A-511D80C51516","4798DE69-2868-4EA6-84D8-E4D0CE7A90E8"],["4798DE69-2868-4EA6-84D8-E4D0CE7A90E8"],["2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3"],["2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3"],["04C21F20-915C-446A-902D-A8D5D7076C6F","23D5758E-178A-43BD-A82B-5D1F11CC1223"],["23D5758E-178A-43BD-A82B-5D1F11CC1223"],["7D0652E2-E579-47BC-8FB9-E1FBA3539A3F"],["5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["025E5CB8-BF2F-46EC-A170-4F80BD2FCA54"],["C120D32F-4E27-481A-97F9-9B62BB394DF9"],["94D5EB98-E41E-4DD5-8B8D-06598E285B4E"],["2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB"],["4F5D4105-E8C7-4F54-97E6-F9549BC75D4F"],["65FB0CCF-F7C4-4159-9D6D-0F929AB12136"],["CF403F63-27E2-4424-B4F3-5D6CB1252881"]];function Xs(s,e){return Math.random()*(e-s)+s}function Ac(s,e,t){t===void 0&&(t=7);let n=0,i=0;for(;n===0;)n=Math.random();for(;i===0;)i=Math.random();let r=Math.sqrt(-t*Math.log(n))*Math.cos(t*Math.PI*i);return r=r/10+.5,r>1||r<0?Ac(s,e):(r=Math.floor(r*(e-s+1)+s),r)}function Zm(s,e){return s=Math.ceil(s),e=Math.floor(e),Math.floor(Math.random()*(e-s+1))+s}function It(s,e,t){let n=s*Math.PI/180,i=e*Math.PI/180-Math.PI,r=t*Math.sin(n)*Math.sin(i),o=t*Math.cos(n),a=t*Math.sin(n)*Math.cos(i);return{x:r,y:o,z:a}}function Jm(s,e,t){let n=Math.acos(e/Math.sqrt(Math.pow(t,2)+Math.pow(s,2)+Math.pow(e,2))),i=Math.atan(s/t),r=!1,o=!1;t>0&&(r=!0),s>0&&(o=!0);let a=n/Math.PI*180,l=i/Math.PI*180+180;return r==!1&&o==!1&&(l-=180),r==!1&&o==!0&&(l+=180),{lat:a,lng:l}}const Fl={type:"change"},ia={type:"start"},Ml={type:"end"};class $m extends Zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",At),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Fl),n.update(),r=i.NONE},this.update=function(){const y=new S,Z=new jn().setFromUnitVectors(e.up,new S(0,1,0)),se=Z.clone().invert(),ue=new S,le=new jn,ve=2*Math.PI;return function(){const Ge=n.object.position;y.copy(Ge).sub(n.target),y.applyQuaternion(Z),a.setFromVector3(y),n.autoRotate&&r===i.NONE&&F(T()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let w=n.minAzimuthAngle,ae=n.maxAzimuthAngle;return isFinite(w)&&isFinite(ae)&&(w<-Math.PI?w+=ve:w>Math.PI&&(w-=ve),ae<-Math.PI?ae+=ve:ae>Math.PI&&(ae-=ve),w<=ae?a.theta=Math.max(w,Math.min(ae,a.theta)):a.theta=a.theta>(w+ae)/2?Math.max(w,a.theta):Math.min(ae,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),y.setFromSpherical(a),y.applyQuaternion(se),Ge.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ue.distanceToSquared(n.object.position)>o||8*(1-le.dot(n.object.quaternion))>o?(n.dispatchEvent(Fl),ue.copy(n.object.position),le.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",$e),n.domElement.removeEventListener("pointercancel",vt),n.domElement.removeEventListener("wheel",St),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",et),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",At)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new bl,l=new bl;let c=1;const u=new S;let h=!1;const f=new ne,m=new ne,g=new ne,p=new ne,d=new ne,_=new ne,A=new ne,b=new ne,E=new ne,v=[],M={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function F(y){l.theta-=y}function P(y){l.phi-=y}const j=function(){const y=new S;return function(se,ue){y.setFromMatrixColumn(ue,0),y.multiplyScalar(-se),u.add(y)}}(),oe=function(){const y=new S;return function(se,ue){n.screenSpacePanning===!0?y.setFromMatrixColumn(ue,1):(y.setFromMatrixColumn(ue,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(se),u.add(y)}}(),z=function(){const y=new S;return function(se,ue){const le=n.domElement;if(n.object.isPerspectiveCamera){const ve=n.object.position;y.copy(ve).sub(n.target);let Fe=y.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),j(2*se*Fe/le.clientHeight,n.object.matrix),oe(2*ue*Fe/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(se*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),oe(ue*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(y){n.object.isPerspectiveCamera?c/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(y){n.object.isPerspectiveCamera?c*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(y){f.set(y.clientX,y.clientY)}function $(y){A.set(y.clientX,y.clientY)}function H(y){p.set(y.clientX,y.clientY)}function I(y){m.set(y.clientX,y.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;F(2*Math.PI*g.x/Z.clientHeight),P(2*Math.PI*g.y/Z.clientHeight),f.copy(m),n.update()}function U(y){b.set(y.clientX,y.clientY),E.subVectors(b,A),E.y>0?L(x()):E.y<0&&X(x()),A.copy(b),n.update()}function Q(y){d.set(y.clientX,y.clientY),_.subVectors(d,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(d),n.update()}function K(y){y.deltaY<0?X(x()):y.deltaY>0&&L(x()),n.update()}function ee(y){let Z=!1;switch(y.code){case n.keys.UP:z(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),Z=!0;break}Z&&(y.preventDefault(),n.update())}function pe(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const y=.5*(v[0].pageX+v[1].pageX),Z=.5*(v[0].pageY+v[1].pageY);f.set(y,Z)}}function Ae(){if(v.length===1)p.set(v[0].pageX,v[0].pageY);else{const y=.5*(v[0].pageX+v[1].pageX),Z=.5*(v[0].pageY+v[1].pageY);p.set(y,Z)}}function q(){const y=v[0].pageX-v[1].pageX,Z=v[0].pageY-v[1].pageY,se=Math.sqrt(y*y+Z*Z);A.set(0,se)}function Le(){n.enableZoom&&q(),n.enablePan&&Ae()}function _e(){n.enableZoom&&q(),n.enableRotate&&pe()}function Ee(y){if(v.length==1)m.set(y.pageX,y.pageY);else{const se=xe(y),ue=.5*(y.pageX+se.x),le=.5*(y.pageY+se.y);m.set(ue,le)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;F(2*Math.PI*g.x/Z.clientHeight),P(2*Math.PI*g.y/Z.clientHeight),f.copy(m)}function fe(y){if(v.length===1)d.set(y.pageX,y.pageY);else{const Z=xe(y),se=.5*(y.pageX+Z.x),ue=.5*(y.pageY+Z.y);d.set(se,ue)}_.subVectors(d,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(d)}function Re(y){const Z=xe(y),se=y.pageX-Z.x,ue=y.pageY-Z.y,le=Math.sqrt(se*se+ue*ue);b.set(0,le),E.set(0,Math.pow(b.y/A.y,n.zoomSpeed)),L(E.y),A.copy(b)}function De(y){n.enableZoom&&Re(y),n.enablePan&&fe(y)}function ge(y){n.enableZoom&&Re(y),n.enableRotate&&Ee(y)}function $e(y){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",ot),n.domElement.addEventListener("pointerup",et)),te(y),y.pointerType==="touch"?B(y):tt(y))}function ot(y){n.enabled!==!1&&(y.pointerType==="touch"?C(y):Ie(y))}function et(y){ie(y),v.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",et)),n.dispatchEvent(Ml),r=i.NONE}function vt(y){ie(y)}function tt(y){let Z;switch(y.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case si.DOLLY:if(n.enableZoom===!1)return;$(y),r=i.DOLLY;break;case si.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;H(y),r=i.PAN}else{if(n.enableRotate===!1)return;J(y),r=i.ROTATE}break;case si.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;J(y),r=i.ROTATE}else{if(n.enablePan===!1)return;H(y),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ia)}function Ie(y){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;I(y);break;case i.DOLLY:if(n.enableZoom===!1)return;U(y);break;case i.PAN:if(n.enablePan===!1)return;Q(y);break}}function St(y){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(y.preventDefault(),n.dispatchEvent(ia),K(y),n.dispatchEvent(Ml))}function At(y){n.enabled===!1||n.enablePan===!1||ee(y)}function B(y){switch(ce(y),v.length){case 1:switch(n.touches.ONE){case ri.ROTATE:if(n.enableRotate===!1)return;pe(),r=i.TOUCH_ROTATE;break;case ri.PAN:if(n.enablePan===!1)return;Ae(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(),r=i.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ia)}function C(y){switch(ce(y),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(y),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;fe(y),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(y),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(y),n.update();break;default:r=i.NONE}}function V(y){n.enabled!==!1&&y.preventDefault()}function te(y){v.push(y)}function ie(y){delete M[y.pointerId];for(let Z=0;Z<v.length;Z++)if(v[Z].pointerId==y.pointerId){v.splice(Z,1);return}}function ce(y){let Z=M[y.pointerId];Z===void 0&&(Z=new ne,M[y.pointerId]=Z),Z.set(y.pageX,y.pageY)}function xe(y){const Z=y.pointerId===v[0].pointerId?v[1]:v[0];return M[Z.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",$e),n.domElement.addEventListener("pointercancel",vt),n.domElement.addEventListener("wheel",St,{passive:!1}),this.update()}}class Km extends dr{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Om(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new Qm(e)}}class Qm{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=eg(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function eg(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=r;else{const h=tg(u,i,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function tg(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new Wm;let a,l,c,u,h,f,m,g;if(r.o){const p=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let d=0,_=p.length;d<_;)switch(p[d++]){case"m":a=p[d++]*e+t,l=p[d++]*e+n,o.moveTo(a,l);break;case"l":a=p[d++]*e+t,l=p[d++]*e+n,o.lineTo(a,l);break;case"q":c=p[d++]*e+t,u=p[d++]*e+n,h=p[d++]*e+t,f=p[d++]*e+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=p[d++]*e+t,u=p[d++]*e+n,h=p[d++]*e+t,f=p[d++]*e+n,m=p[d++]*e+t,g=p[d++]*e+n,o.bezierCurveTo(h,f,m,g,c,u);break}}return{offsetX:r.ha*e,path:o}}class ds extends ze{constructor(){super(ds.Geometry,new Ht({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new S,t=new S,n=new ml(16,16,Ot),i=new ml(16,16,Ot),r=ds.Geometry,o=new ta({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),a=new ta({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new ze(r,o),c=[],u=$n.Shader,h=new ta({uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new Te(16777215)},scale:{value:new ne},screenPosition:{value:new S}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ti,transparent:!0,depthWrite:!1}),f=new ze(r,h);this.addElement=function(_){c.push(_)};const m=new ne,g=new ne,p=new Hm,d=new Ve;this.onBeforeRender=function(_,A,b){_.getCurrentViewport(d);const E=d.w/d.z,v=d.z/2,M=d.w/2;let T=16/d.w;if(m.set(T*E,T),p.min.set(d.x,d.y),p.max.set(d.x+(d.z-16),d.y+(d.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(b.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(b.projectionMatrix),g.x=d.x+e.x*v+v-8,g.y=d.y+e.y*M+M-8,p.containsPoint(g))){_.copyFramebufferToTexture(g,n);let x=o.uniforms;x.scale.value=m,x.screenPosition.value=e,_.renderBufferDirect(b,null,r,o,l,null),_.copyFramebufferToTexture(g,i),x=a.uniforms,x.scale.value=m,x.screenPosition.value=e,_.renderBufferDirect(b,null,r,a,l,null);const F=-e.x*2,P=-e.y*2;for(let j=0,oe=c.length;j<oe;j++){const z=c[j],L=h.uniforms;L.color.value.copy(z.color),L.map.value=z.texture,L.screenPosition.value.x=e.x+F*z.distance,L.screenPosition.value.y=e.y+P*z.distance,T=z.size/d.w;const X=d.w/d.z;L.scale.value.set(T*X,T),h.uniformsNeedUpdate=!0,_.renderBufferDirect(b,null,r,h,f,null)}}},this.dispose=function(){o.dispose(),a.dispose(),h.dispose(),n.dispose(),i.dispose();for(let _=0,A=c.length;_<A;_++)c[_].texture.dispose()}}}class $n{constructor(e,t=1,n=0,i=new Te(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}$n.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};ds.Geometry=function(){const s=new Mt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new nm(e,5);return s.setIndex([0,1,2,0,2,3]),s.setAttribute("position",new er(t,3,0,!1)),s.setAttribute("uv",new er(t,2,3,!1)),s}();const ar=class{static createButton(e){const t=document.createElement("button");function n(){let l=null;async function c(h){h.addEventListener("end",u),await e.xr.setSession(h),t.textContent="EXIT VR",l=h}function u(){l.removeEventListener("end",u),t.textContent="ENTER VR",l=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(l===null){const h={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",h).then(c)}else l.end()}}function i(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function r(){i(),t.textContent="VR NOT SUPPORTED"}function o(l){i(),console.warn("Exception when trying to call xr.isSessionSupported",l),t.textContent="VR NOT ALLOWED"}function a(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",a(t),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?n():r(),l&&ar.xrSessionIsGranted&&t.click()}).catch(o),t;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",a(l),l}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{ar.xrSessionIsGranted=!0})}}};let ss=ar;no(ss,"xrSessionIsGranted",!1);ss.registerSessionGrantedListener();function ng(s){if(!!s&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}function bi(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),o=s.a,a=Math.round(s.h),l=s.s.toFixed(1),c=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=s.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+o+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var Sl=Array.prototype.forEach,Yi=Array.prototype.slice,Y={BREAK:{},extend:function(e){return this.each(Yi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(Yi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=Yi.call(arguments);return function(){for(var t=Yi.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(Sl&&e.forEach&&e.forEach===Sl)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var r=this,o=arguments;function a(){i=null,n||e.apply(r,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(r,o)}},toArray:function(e){return e.toArray?e.toArray():Yi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(s){function e(t){return s.apply(this,arguments)}return e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},ig=[{litmus:Y.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:bi},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:bi},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:bi},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:bi}}},{litmus:Y.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Y.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Y.isObject,conversions:{RGBA_OBJ:{read:function(e){return Y.isNumber(e.r)&&Y.isNumber(e.g)&&Y.isNumber(e.b)&&Y.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Y.isNumber(e.r)&&Y.isNumber(e.g)&&Y.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Y.isNumber(e.h)&&Y.isNumber(e.s)&&Y.isNumber(e.v)&&Y.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Y.isNumber(e.h)&&Y.isNumber(e.s)&&Y.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],ji=void 0,qs=void 0,va=function(){qs=!1;var e=arguments.length>1?Y.toArray(arguments):arguments[0];return Y.each(ig,function(t){if(t.litmus(e))return Y.each(t.conversions,function(n,i){if(ji=n.read(e),qs===!1&&ji!==!1)return qs=ji,ji.conversionName=i,ji.conversion=n,Y.BREAK}),Y.BREAK}),qs},wl=void 0,nr={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),l=n*(1-(1-r)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),o=r-i,a=void 0,l=void 0;if(r!==0)l=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:r/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(wl=t*8)|e&~(255<<wl)}},sg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},qt=function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},Yt=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),Bn=function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},Fn=function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},Mn=function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},at=function(){function s(){if(qt(this,s),this.__state=va.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Yt(s,[{key:"toString",value:function(){return bi(this)}},{key:"toHexString",value:function(){return bi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),s}();function Xa(s,e,t){Object.defineProperty(s,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(at.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(at.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function qa(s,e){Object.defineProperty(s,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(at.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(at.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}at.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=nr.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")Y.extend(s.__state,nr.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};at.recalculateHSV=function(s){var e=nr.rgb_to_hsv(s.r,s.g,s.b);Y.extend(s.__state,{s:e.s,v:e.v}),Y.isNaN(e.h)?Y.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};at.COMPONENTS=["r","g","b","h","s","v","hex","a"];Xa(at.prototype,"r",2);Xa(at.prototype,"g",1);Xa(at.prototype,"b",0);qa(at.prototype,"h");qa(at.prototype,"s");qa(at.prototype,"v");Object.defineProperty(at.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(at.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=nr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Kn=function(){function s(e,t){qt(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Yt(s,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),s}(),rg={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Ec={};Y.each(rg,function(s,e){Y.each(s,function(t){Ec[t]=e})});var ag=/(\d+(\.\d+)?)px/;function Zt(s){if(s==="0"||Y.isUndefined(s))return 0;var e=s.match(ag);return Y.isNull(e)?0:parseFloat(e[1])}var N={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,r=t;Y.isUndefined(r)&&(r=!0),Y.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var r=n||{},o=Ec[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=r.x||r.clientX||0,c=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;Y.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}Y.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),N},unbind:function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),N},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return N},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return N},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Zt(t["border-left-width"])+Zt(t["border-right-width"])+Zt(t["padding-left"])+Zt(t["padding-right"])+Zt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Zt(t["border-top-width"])+Zt(t["border-bottom-width"])+Zt(t["padding-top"])+Zt(t["padding-bottom"])+Zt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Cc=function(s){Fn(e,s);function e(t,n){qt(this,e);var i=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return N.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Yt(e,[{key:"setValue",value:function(n){var i=Bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Kn),og=function(s){Fn(e,s);function e(t,n,i){qt(this,e);var r=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=r;if(r.__select=document.createElement("select"),Y.isArray(o)){var l={};Y.each(o,function(c){l[c]=c}),o=l}return Y.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),r.updateDisplay(),N.bind(r.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),r.domElement.appendChild(r.__select),r}return Yt(e,[{key:"setValue",value:function(n){var i=Bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return N.isActive(this.__select)?this:(this.__select.value=this.getValue(),Bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Kn),lg=function(s){Fn(e,s);function e(t,n){qt(this,e);var i=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function o(){r.setValue(r.__input.value)}function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),N.bind(i.__input,"keyup",o),N.bind(i.__input,"change",o),N.bind(i.__input,"blur",a),N.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Yt(e,[{key:"updateDisplay",value:function(){return N.isActive(this.__input)||(this.__input.value=this.getValue()),Bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Kn);function Tl(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var yc=function(s){Fn(e,s);function e(t,n,i){qt(this,e);var r=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,Y.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=Tl(r.__impliedStep),r}return Yt(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Tl(n),this}}]),e}(Kn);function cg(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}var ir=function(s){Fn(e,s);function e(t,n,i){qt(this,e);var r=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var o=r,a=void 0;function l(){var g=parseFloat(o.__input.value);Y.isNaN(g)||o.setValue(g)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(g){var p=a-g.clientY;o.setValue(o.getValue()+p*o.__impliedStep),a=g.clientY}function f(){N.unbind(window,"mousemove",h),N.unbind(window,"mouseup",f),c()}function m(g){N.bind(window,"mousemove",h),N.bind(window,"mouseup",f),a=g.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),N.bind(r.__input,"change",l),N.bind(r.__input,"blur",u),N.bind(r.__input,"mousedown",m),N.bind(r.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Yt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():cg(this.getValue(),this.__precision),Bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(yc);function Ll(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}var Aa=function(s){Fn(e,s);function e(t,n,i,r,o){qt(this,e);var a=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),N.bind(a.__background,"mousedown",c),N.bind(a.__background,"touchstart",f),N.addClass(a.__background,"slider"),N.addClass(a.__foreground,"slider-fg");function c(p){document.activeElement.blur(),N.bind(window,"mousemove",u),N.bind(window,"mouseup",h),u(p)}function u(p){p.preventDefault();var d=l.__background.getBoundingClientRect();return l.setValue(Ll(p.clientX,d.left,d.right,l.__min,l.__max)),!1}function h(){N.unbind(window,"mousemove",u),N.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(p){p.touches.length===1&&(N.bind(window,"touchmove",m),N.bind(window,"touchend",g),m(p))}function m(p){var d=p.touches[0].clientX,_=l.__background.getBoundingClientRect();l.setValue(Ll(d,_.left,_.right,l.__min,l.__max))}function g(){N.unbind(window,"touchmove",m),N.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Yt(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(yc),Dc=function(s){Fn(e,s);function e(t,n,i){qt(this,e);var r=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,N.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),N.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return Yt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Kn),Ea=function(s){Fn(e,s);function e(t,n){qt(this,e);var i=Mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new at(i.getValue()),i.__temp=new at(0);var r=i;i.domElement=document.createElement("div"),N.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",N.bind(i.__input,"keydown",function(p){p.keyCode===13&&h.call(this)}),N.bind(i.__input,"blur",h),N.bind(i.__selector,"mousedown",function(){N.addClass(this,"drag").bind(window,"mouseup",function(){N.removeClass(r.__selector,"drag")})}),N.bind(i.__selector,"touchstart",function(){N.addClass(this,"drag").bind(window,"touchend",function(){N.removeClass(r.__selector,"drag")})});var o=document.createElement("div");Y.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Y.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Y.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Y.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Y.extend(o.style,{width:"100%",height:"100%",background:"none"}),Pl(o,"top","rgba(0,0,0,0)","#000"),Y.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),hg(i.__hue_field),Y.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),N.bind(i.__saturation_field,"mousedown",a),N.bind(i.__saturation_field,"touchstart",a),N.bind(i.__field_knob,"mousedown",a),N.bind(i.__field_knob,"touchstart",a),N.bind(i.__hue_field,"mousedown",l),N.bind(i.__hue_field,"touchstart",l);function a(p){m(p),N.bind(window,"mousemove",m),N.bind(window,"touchmove",m),N.bind(window,"mouseup",c),N.bind(window,"touchend",c)}function l(p){g(p),N.bind(window,"mousemove",g),N.bind(window,"touchmove",g),N.bind(window,"mouseup",u),N.bind(window,"touchend",u)}function c(){N.unbind(window,"mousemove",m),N.unbind(window,"touchmove",m),N.unbind(window,"mouseup",c),N.unbind(window,"touchend",c),f()}function u(){N.unbind(window,"mousemove",g),N.unbind(window,"touchmove",g),N.unbind(window,"mouseup",u),N.unbind(window,"touchend",u),f()}function h(){var p=va(this.value);p!==!1?(r.__color.__state=p,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function f(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(p){p.type.indexOf("touch")===-1&&p.preventDefault();var d=r.__saturation_field.getBoundingClientRect(),_=p.touches&&p.touches[0]||p,A=_.clientX,b=_.clientY,E=(A-d.left)/(d.right-d.left),v=1-(b-d.top)/(d.bottom-d.top);return v>1?v=1:v<0&&(v=0),E>1?E=1:E<0&&(E=0),r.__color.v=v,r.__color.s=E,r.setValue(r.__color.toOriginal()),!1}function g(p){p.type.indexOf("touch")===-1&&p.preventDefault();var d=r.__hue_field.getBoundingClientRect(),_=p.touches&&p.touches[0]||p,A=_.clientY,b=1-(A-d.top)/(d.bottom-d.top);return b>1?b=1:b<0&&(b=0),r.__color.h=b*360,r.setValue(r.__color.toOriginal()),!1}return i}return Yt(e,[{key:"updateDisplay",value:function(){var n=va(this.getValue());if(n!==!1){var i=!1;Y.each(at.COMPONENTS,function(a){if(!Y.isUndefined(n[a])&&!Y.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&Y.extend(this.__color.__state,n)}Y.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;Y.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Pl(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Y.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Kn),ug=["-moz-","-o-","-webkit-","-ms-",""];function Pl(s,e,t,n){s.style.background="",Y.each(ug,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function hg(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var dg={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}}},fg=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,pg=function(e,t){var n=e[t];return Y.isArray(arguments[2])||Y.isObject(arguments[2])?new og(e,t,arguments[2]):Y.isNumber(n)?Y.isNumber(arguments[2])&&Y.isNumber(arguments[3])?Y.isNumber(arguments[4])?new Aa(e,t,arguments[2],arguments[3],arguments[4]):new Aa(e,t,arguments[2],arguments[3]):Y.isNumber(arguments[4])?new ir(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new ir(e,t,{min:arguments[2],max:arguments[3]}):Y.isString(n)?new lg(e,t):Y.isFunction(n)?new Dc(e,t,""):Y.isBoolean(n)?new Cc(e,t):null};function mg(s){setTimeout(s,1e3/60)}var gg=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||mg,_g=function(){function s(){qt(this,s),this.backgroundElement=document.createElement("div"),Y.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),N.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Y.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;N.bind(this.backgroundElement,"click",function(){e.hide()})}return Yt(s,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Y.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",N.unbind(t.domElement,"webkitTransitionEnd",i),N.unbind(t.domElement,"transitionend",i),N.unbind(t.domElement,"oTransitionEnd",i)};N.bind(this.domElement,"webkitTransitionEnd",n),N.bind(this.domElement,"transitionend",n),N.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-N.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-N.getHeight(this.domElement)/2+"px"}}]),s}(),xg=ng(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);dg.inject(xg);var Rl="dg",Il=72,Ol=20,fs="Default",Ki=function(){try{return!!window.localStorage}catch{return!1}}(),rs=void 0,Nl=!0,Ei=void 0,sa=!1,bc=[],ke=function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),N.addClass(this.domElement,Rl),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=Y.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=Y.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),Y.isUndefined(n.load)?n.load={preset:fs}:n.preset&&(n.load.preset=n.preset),Y.isUndefined(n.parent)&&n.hideable&&bc.push(this),n.resizable=Y.isUndefined(n.parent)&&n.resizable,n.autoPlace&&Y.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Ki&&localStorage.getItem(Ci(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,Cg(this),t.revert()}},width:{get:function(){return n.width},set:function(f){n.width=f,Da(t,f)}},name:{get:function(){return n.name},set:function(f){n.name=f,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(f){n.closed=f,n.closed?N.addClass(t.__ul,s.CLASS_CLOSED):N.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?s.TEXT_OPEN:s.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(f){Ki&&(i=f,f?N.bind(window,"unload",r):N.unbind(window,"unload",r),localStorage.setItem(Ci(t,"isLocal"),f))}}}),Y.isUndefined(n.parent)){if(this.closed=n.closed||!1,N.addClass(this.domElement,s.CLASS_MAIN),N.makeSelectable(this.domElement,!1),Ki&&i){t.useLocalStorage=!0;var a=localStorage.getItem(Ci(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,N.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(N.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(N.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),N.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);N.addClass(l,"controller-name"),o=Ya(t,l);var c=function(f){return f.preventDefault(),t.closed=!t.closed,!1};N.addClass(this.__ul,s.CLASS_CLOSED),N.addClass(o,"title"),N.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(Y.isUndefined(n.parent)&&(Nl&&(Ei=document.createElement("div"),N.addClass(Ei,Rl),N.addClass(Ei,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Ei),Nl=!1),Ei.appendChild(this.domElement),N.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||Da(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},N.bind(window,"resize",this.__resizeHandler),N.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),N.bind(this.__ul,"transitionend",this.__resizeHandler),N.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Eg(this),r=function(){Ki&&localStorage.getItem(Ci(t,"isLocal"))==="true"&&localStorage.setItem(Ci(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function u(){var h=t.getRoot();h.width+=1,Y.defer(function(){h.width-=1})}n.parent||u()};ke.toggleHide=function(){sa=!sa,Y.each(bc,function(s){s.domElement.style.display=sa?"none":""})};ke.CLASS_AUTO_PLACE="a";ke.CLASS_AUTO_PLACE_CONTAINER="ac";ke.CLASS_MAIN="main";ke.CLASS_CONTROLLER_ROW="cr";ke.CLASS_TOO_TALL="taller-than-window";ke.CLASS_CLOSED="closed";ke.CLASS_CLOSE_BUTTON="close-button";ke.CLASS_CLOSE_TOP="close-top";ke.CLASS_CLOSE_BOTTOM="close-bottom";ke.CLASS_DRAG="drag";ke.DEFAULT_WIDTH=245;ke.TEXT_CLOSED="Close Controls";ke.TEXT_OPEN="Open Controls";ke._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===Il||s.keyCode===Il)&&ke.toggleHide()};N.bind(window,"keydown",ke._keydownHandler,!1);Y.extend(ke.prototype,{add:function(e,t){return as(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return as(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Y.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Ei.removeChild(this.domElement);var e=this;Y.each(this.__folders,function(t){e.removeFolder(t)}),N.unbind(window,"keydown",ke._keydownHandler,!1),zl(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new ke(t);this.__folders[e]=n;var i=Ya(this,n.domElement);return N.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],zl(e);var t=this;Y.each(e.__folders,function(n){e.removeFolder(n)}),Y.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=N.getOffset(e.__ul).top,n=0;Y.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=N.getHeight(i))}),window.innerHeight-t-Ol<n?(N.addClass(e.domElement,ke.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Ol+"px"):(N.removeClass(e.domElement,ke.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Y.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Y.debounce(function(){this.onResize()},50),remember:function(){if(Y.isUndefined(rs)&&(rs=new _g,rs.domElement.innerHTML=fg),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Y.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Ag(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Da(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Ys(this)),e.folders={},Y.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ys(this),Ca(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[fs]=Ys(this,!0)),this.load.remembered[e]=Ys(this),this.preset=e,ya(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Y.each(this.__controllers,function(t){this.getRoot().load.remembered?Bc(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Y.each(this.__folders,function(t){t.revert(t)}),e||Ca(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Fc(this.__listening)},updateDisplay:function(){Y.each(this.__controllers,function(e){e.updateDisplay()}),Y.each(this.__folders,function(e){e.updateDisplay()})}});function Ya(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}function zl(s){N.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&N.unbind(window,"unload",s.saveToLocalStorageIfPossible)}function Ca(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function vg(s,e,t){if(t.__li=e,t.__gui=s,Y.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),as(s,t.object,t.property,{before:a,factoryArgs:[Y.toArray(arguments)]})}if(Y.isArray(o)||Y.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),as(s,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Aa){var n=new ir(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Y.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),N.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof ir){var i=function(o){if(Y.isNumber(t.__min)&&Y.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=as(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=Y.compose(i,t.min),t.max=Y.compose(i,t.max)}else t instanceof Cc?(N.bind(e,"click",function(){N.fakeEvent(t.__checkbox,"click")}),N.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof Dc?(N.bind(e,"click",function(){N.fakeEvent(t.__button,"click")}),N.bind(e,"mouseover",function(){N.addClass(t.__button,"hover")}),N.bind(e,"mouseout",function(){N.removeClass(t.__button,"hover")})):t instanceof Ea&&(N.addClass(e,"color"),t.updateDisplay=Y.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=Y.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&Ca(s.getRoot(),!0),r},t.setValue)}function Bc(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[s.preset])o=r[s.preset];else if(r[fs])o=r[fs];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function as(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Ea(e,t);else{var r=[e,t].concat(n.factoryArgs);i=pg.apply(s,r)}n.before instanceof Kn&&(n.before=n.before.__li),Bc(s,i),N.addClass(i.domElement,"c");var o=document.createElement("span");N.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=Ya(s,a,n.before);return N.addClass(l,ke.CLASS_CONTROLLER_ROW),i instanceof Ea?N.addClass(l,"color"):N.addClass(l,sg(i.getValue())),vg(s,l,i),s.__controllers.push(i),i}function Ci(s,e){return document.location.href+"."+e}function ya(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}function Ul(s,e){e.style.display=s.useLocalStorage?"block":"none"}function Ag(s){var e=s.__save_row=document.createElement("li");N.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),N.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",N.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",N.addClass(n,"button"),N.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",N.addClass(i,"button"),N.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",N.addClass(r,"button"),N.addClass(r,"revert");var o=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?Y.each(s.load.remembered,function(h,f){ya(s,f,f===s.preset)}):ya(s,fs,!1),N.bind(o,"change",function(){for(var h=0;h<s.__preset_select.length;h++)s.__preset_select[h].innerHTML=s.__preset_select[h].value;s.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),Ki){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Ci(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Ul(s,a),N.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,Ul(s,a)})}var u=document.getElementById("dg-new-constructor");N.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&rs.hide()}),N.bind(t,"click",function(){u.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),rs.show(),u.focus(),u.select()}),N.bind(n,"click",function(){s.save()}),N.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&s.saveAs(h)}),N.bind(r,"click",function(){s.revert()})}function Eg(s){var e=void 0;s.__resize_handle=document.createElement("div"),Y.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}function n(){N.removeClass(s.__closeButton,ke.CLASS_DRAG),N.unbind(window,"mousemove",t),N.unbind(window,"mouseup",n)}function i(r){return r.preventDefault(),e=r.clientX,N.addClass(s.__closeButton,ke.CLASS_DRAG),N.bind(window,"mousemove",t),N.bind(window,"mouseup",n),!1}N.bind(s.__resize_handle,"mousedown",i),N.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}function Da(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}function Ys(s,e){var t={};return Y.each(s.__rememberedObjects,function(n,i){var r={},o=s.__rememberedObjectIndecesToControllers[i];Y.each(o,function(a,l){r[l]=e?a.initialValue:a.getValue()}),t[i]=r}),t}function Cg(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}function Fc(s){s.length!==0&&gg.call(window,function(){Fc(s)}),Y.each(s,function(e){e.updateDisplay()})}var yg=ke;const Dg="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",bg="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=0.7-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.3,0.6,1.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere,1.0);}",Bg="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",Fg="varying vec3 vertexNormal;void main(){float intensity=pow(0.1-dot(vertexNormal,vec3(0.0,0.0,1.0)),1.1);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}",Mg="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",Sg="varying vec3 vertexNormal;void main(){float intensity=pow(0.1-dot(vertexNormal,vec3(0.0,0.0,1.0)),10.0);gl_FragColor=vec4(1.0,1.0,0.4,1.0)*intensity;}",wg="/Planet/assets/terrain4k.7dac6e2b.jpg",Tg="/Planet/assets/normal2k.89263048.jpg",Lg="/Planet/assets/roughness2k.06c786a2.jpg",Pg="/Planet/assets/clouds1.66e34b75.png",Rg="/Planet/assets/clouds1alpha.b508fdf6.jpg",Mc="/Planet/assets/clouds2.dec6ecfe.png",Ig="/Planet/assets/star.71d593a7.png",Og="/Planet/assets/moon.b246064f.jpg",Ng="/Planet/assets/moon2.29310b47.png",zg="/Planet/assets/moon3.d1a182f0.png",Ug="https://jaranolsen.github.io/Planet/SourceSans3_Regular.json",Sc=document.querySelector("#c"),Si=new oc({canvas:Sc,antialias:!0});function kg(s){const e=s.domElement,t=e.clientWidth,n=e.clientHeight,i=e.width!==t||e.height!==n;return i&&s.setSize(t,n,!1),i}const Vg=50,Gg=2,Hg=.1,Wg=2e3,rt=new Dt(Vg,Gg,Hg,Wg);rt.position.z=500;const Kt=new $m(rt,Sc);Kt.enablePan=!1;Kt.maxDistance=1e3;Kt.minDistance=5.2;Kt.zoomSpeed=.3;Kt.rotateSpeed=.3;Kt.target.set(0,0,0);Kt.update();const Qn=new tm,Js=new ne;new S;const sr=new Gm;let zn=null;const Qi=new S(0,0,0);Si.xr.enabled=!0;document.body.appendChild(ss.createButton(Si));let wc=!1;const pr=document.getElementById("introTune");pr.preload="auto";pr.currentTime=1.4;pr.volume=.25;const ja=document.getElementById("introSpeech");ja.preload="auto";ja.currentTime=1.4;const ba=document.getElementById("playbutton"),Tc=document.getElementById("credits");ba.addEventListener("click",()=>{pr.play(),setTimeout(function(){ja.play()},4e4),wc=!0,ba.style.display="none",Ba.style.display="none",Tc.style.display="none"});const Ba=document.getElementById("skipbutton");Ba.addEventListener("click",()=>{ba.style.display="none",Ba.style.display="none",Tc.style.display="none",rt.position.z=15});let Fa;const Xg=document.querySelectorAll("[data-carousel-button]");Xg.forEach(s=>{s.addEventListener("click",()=>{if(document.querySelector(".carousel"),s.dataset.carouselButton==="exit")Fa.style.display="none";else{const e=s.dataset.carouselButton==="next"?1:-1,t=s.closest("[data-carousel]").querySelector("[data-slides]"),n=t.querySelector("[data-active]");let i=[...t.children].indexOf(n)+e;t.children[i].dataset.active=!0,delete n.dataset.active}})});const Lc=new Mt,qg=new lc({size:5,map:new fr().load(Ig),transparent:!0}),Pc=[];for(let s=0;s<1e4;s++){const e=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(e)+Math.abs(t)+Math.abs(n)>400&&Pc.push(e,t,n)}Lc.setAttribute("position",new ct(Pc,3));const Yg=new im(Lc,qg);Qn.add(Yg);const zi=new je;Qn.add(zi);const mr=new je,gr=new je,_r=new je,Ui=new je;mr.rotation.y=-Math.PI/2.5;gr.rotation.y=2*Math.PI/16;_r.rotation.y=2*Math.PI/2;Ui.rotation.y=5*Math.PI/3;Ui.rotation.x=-.9;zi.add(mr);zi.add(gr);zi.add(_r);zi.add(Ui);const dn=new fr;let jg=dn.load(wg);const Rc=new bt(5,250,250);Rc.computeBoundingSphere();const Ft=new ze(Rc,new xc({map:jg,normalMap:dn.load(Tg),roughnessMap:dn.load(Lg),metalness:0,flatShading:!1,side:Dn}));Qn.add(Ft);const Ic=new ze(new bt(5.03,50,50),new Ga({alphaMap:dn.load(Rg),map:dn.load(Pg),transparent:!0,side:mt}));Ft.add(Ic);const Oc=new ze(new bt(5.04,50,50),new Ga({map:dn.load(Mc),transparent:!0,side:mt,opacity:.5}));Ft.add(Oc);const Za=new ze(new bt(5.05,50,50),new Ga({map:dn.load(Mc),transparent:!0,side:mt,opacity:.5}));Ft.add(Za);Za.rotateY(Math.PI/2);const Nc=new ze(new bt(5,250,250),new Xt({vertexShader:Dg,fragmentShader:bg,blending:Ti}));Nc.position.set(0,0,0);Ft.add(Nc);const Ja=new ze(new bt(5.3,50,50),new Xt({vertexShader:Bg,fragmentShader:Fg,blending:Ti,side:xt,transparent:!0,depthWrite:!1}));Ja.position.set(0,0,0);Ja.scale.set(1.2,1.2,1.2);Ft.add(Ja);function Zg(s,e,t,n){let r=new fr().load(s);const o=new Ht({map:r,transparent:!0,side:mt});let a=.01,l=0,c=0,u=n,h=n,f=new Wn;f.moveTo(l,c+a),f.lineTo(l,c+h-a),f.quadraticCurveTo(l,c+h,l+a,c+h),f.lineTo(l+u-a,c+h),f.quadraticCurveTo(l+u,c+h,l+u,c+h-a),f.lineTo(l+u,c+a),f.quadraticCurveTo(l+u,c,l+u-a,c),f.lineTo(l+a,c),f.quadraticCurveTo(l,c,l,c+a);const m=new Oi(f);var g=m.attributes.uv;let p=1/0,d=0;for(var _=0;_<g.count;_++){let T=g.getX(_),x=g.getY(_);p=Math.min(p,T,x),d=Math.max(d,T,x)}for(var _=0;_<g.count;_++){let x=g.getX(_),F=g.getY(_);x=Qs.mapLinear(x,p,d,0,1),F=Qs.mapLinear(F,p,d,0,1),g.setXY(_,x,F)}m.computeBoundingBox();const A=-.5*(m.boundingBox.max.x-m.boundingBox.min.x),b=-.5*(m.boundingBox.max.y-m.boundingBox.min.y);m.translate(A,b*0,0);let E=new ze(m,o),v=It(e,t,5.06),M=new S(v.x,v.y,v.z);E.lookAt(M),E.position.copy(M),Ft.add(E)}for(let s=0;s<qi.length;s++)Zg(qi[s][1],qi[s][2],qi[s][3]-180,qi[s][4]/500);const Jg=new Km;Jg.load(Ug,function(s){function e(t,n,i,r,o,a){const l=new Ht({color:0,transparent:!1,side:mt}),c=new Ht({color:r,transparent:!0,opacity:.65,side:mt}),u=s.generateShapes(t,100),h=new Oi(u);h.computeBoundingBox();const f=-.5*(h.boundingBox.max.x-h.boundingBox.min.x),m=.5*(h.boundingBox.max.y-h.boundingBox.min.y);h.translate(f,m*2,0);const g=new ze(h,l),p=5.06;let d=It(n,i,p),_=new S(d.x,d.y,d.z);g.lookAt(_),g.position.x=d.x,g.position.y=d.y,g.position.z=d.z,g.scale.x=a,g.scale.y=a,g.scale.z=a;const A=200,b=0;let E=a*125,v=0,M=0,T=(Math.abs(h.boundingBox.min.x)+Math.abs(h.boundingBox.max.x)+A)*a,x=(Math.abs(h.boundingBox.min.y)+Math.abs(h.boundingBox.max.y)+b)*a,F=new Wn;F.moveTo(v,M+E),F.lineTo(v,M+x-E),F.quadraticCurveTo(v,M+x,v+E,M+x),F.lineTo(v+T-E,M+x),F.quadraticCurveTo(v+T,M+x,v+T,M+x-E),F.lineTo(v+T,M+E),F.quadraticCurveTo(v+T,M,v+T-E,M),F.lineTo(v+E,M),F.quadraticCurveTo(v,M,v,M+E);const P=new Oi(F);var j=P.attributes.uv;let oe=1/0,z=0;for(var L=0;L<j.count;L++){let U=j.getX(L),Q=j.getY(L);oe=Math.min(oe,U,Q),z=Math.max(z,U,Q)}for(var L=0;L<j.count;L++){let Q=j.getX(L),K=j.getY(L);Q=Qs.mapLinear(Q,oe,z,0,1),K=Qs.mapLinear(K,oe,z,0,1),j.setXY(L,Q,K)}P.computeBoundingBox();const X=-.5*(P.boundingBox.max.x-P.boundingBox.min.x),J=-.5*(P.boundingBox.max.y-P.boundingBox.min.y);P.translate(X,J*0,0);let $=new ze(P,c),H=It(n,i,p-.01),I=new S(H.x,H.y,H.z);$.lookAt(I),$.position.copy(I),Ft.add($),Ft.add(g)}for(let t=0;t<Ue.length;t++)e(Ue[t][1],Ue[t][2],Ue[t][3]-180,Ue[t][4],Ue[t][4],Ue[t][5]/1e5)});let rr=[];function $g(s,e,t,n,i,r,o){let a=Math.floor(r*750);o==!0&&(a=Math.floor(r*750/3));const l=new ze(new bt(r,a,a),new Ht({color:n,wireframe:o}));new ze(new bt(r/2,a,a),new Ht({color:16777215})),new ze(new bt(r/2,a,a),new Ht({color:0})),i=i;let u=It(e,t,5.01);return l.position.set(u.x,u.y,u.z),Ft.add(l),rr.push(l),{pin:l,originalColor:i}}let Cn=[];for(let s=0;s<Ue.length;s++){let e;Ue[s][6]==null?e=!1:e=!0;let t=$g(Ue[s][1],Ue[s][2],Ue[s][3]-180,Ue[s][4],Ue[s][4],Ue[s][5]/1500,e);Cn.push(t)}let Kg=1e-4,Qg=3,e_=.03,Ma=5.01;for(let s=0;s<Ue.length;s++)for(let e=0;e<Ws.length;e++)if(Ue[s][0]==Ws[e][0]){for(let t=1;t<Ws[e].length;t++)for(let n=0;n<Ue.length;n++)if(Ue[n][0]==Ws[e][t]){let i=It(Ue[s][2],Ue[s][3]-180,Ma),r=It(Ue[n][2],Ue[n][3]-180,Ma);const o=(Ue[s][5]+Ue[n][5])/2;t_(i,r,o)}}function t_(s,e,t){let n=new S(s.x,s.y,s.z),i=new S(e.x,e.y,e.z),r=[];for(let u=0;u<=20;u++){let h=new S().lerpVectors(n,i,u/20);h.normalize(),h.multiplyScalar(Ma+e_*Math.sin(Math.PI*u/20)),r.push(h)}let o=new cc(r);const a=new Va(o,20,Kg*t,Qg,!1),l=new Ht({color:16777215,transparent:!0,opacity:.25}),c=new ze(a,l);c.renderOrder=-10,Ft.add(c)}const n_=new bt(25,50,50),i_=new Xt({vertexShader:Mg,fragmentShader:Sg,blending:Ti,transparent:!0,side:xt,lights:!1}),$a=new ze(n_,i_);$a.position.set(0,0,490);Ui.add($a);const Ka=new Wa(16777215,1.2,2e3);Ka.position.copy($a.position);Ui.add(Ka);const s_=dn.load("https://jaranolsen.github.io/Planet/lensflare0.png"),xr=dn.load("https://jaranolsen.github.io/Planet/lensflare3.png"),ki=new ds;ki.addElement(new $n(s_,2560,0));ki.addElement(new $n(xr,60,.6));ki.addElement(new $n(xr,70,.7));ki.addElement(new $n(xr,120,.9));ki.addElement(new $n(xr,70,1));Ka.add(ki);class Qa{constructor(e,t,n,i,r,o){this.radius=e,this.texture=t,this.z=n,this.rotation=i,this.pivot=r,this.intensity=o}}let r_=new Qa(1.5,Og,110,-5e-4,mr,.1),a_=new Qa(2.5,Ng,190,-3e-4,gr,.05),o_=new Qa(1,zg,250,-1e-4,_r,.005),Rn=[r_,a_,o_];for(let s=0;s<Rn.length;s++){const e=new ze(new bt(Rn[s].radius,50,50),new xc({map:new fr().load(Rn[s].texture),metalness:0,flatShading:!1,side:Dn}));e.position.set(Rn[s].z,0,0),Rn[s].pivot.add(e);const t=new Wa(16777215,Rn[s].intensity);t.position.set(Rn[s].z,0,0),e.add(t)}class l_{constructor(e,t,n){this.lat=e,this.lng=t,this.heading=n;let i=5e-4;this.shape=new Wn,this.shape.moveTo(i*5,i*5),this.shape.bezierCurveTo(i*5,i*5,i*4,0,0,0),this.shape.bezierCurveTo(-i*6,0,-i*6,i*7,-i*6,i*7),this.shape.bezierCurveTo(-i*6,i*11,-i*3,i*15.4,i*5,i*19),this.shape.bezierCurveTo(i*12,i*15.4,i*16,i*11,i*16,i*7),this.shape.bezierCurveTo(i*16,i*7,i*16,0,i*10,0),this.shape.bezierCurveTo(i*7,0,i*5,i*5,i*5,i*5),this.geometry=new Oi(this.shape),this.geometry.computeBoundingSphere(),this.center=this.geometry.boundingSphere.center,this.shapePosition=this.geometry.position,this.geometry.rotateZ(Math.PI/2),this.material=new Ht({color:14540253,side:mt}),this.mesh=new ze(this.geometry,this.material),this.mesh.geometry.center(),this.mesh.position.copy(this.center),this.position=new ne(e,t),this.velocity=new ne(Xs(-1,1),Xs(-1,1)).setLength(.01),this.acceleration=new ne,this.cartesianPosition=It(this.position.x,this.position.y,5.1),this.cartesianHeading=It(this.position.x+this.velocity.x,this.position.y+this.velocity.y,5.1),this.mesh.position.set(this.cartesianPosition.x,this.cartesianPosition.y,this.cartesianPosition.z),this.wander=new ne(0,0),this.alignment=new ne(0,0),this.cohesion=new ne(0,0),this.separation=new ne(0,0),this.maxForce=.1,this.maxSpeed=.1,this.velocity.setLength(this.maxSpeed),Qn.add(this.mesh)}move(){this.acceleration.set(0,0),this.alignment.multiplyScalar(Rt.alignment),this.cohesion.multiplyScalar(Rt.cohesion),this.separation.multiplyScalar(Rt.separation),this.acceleration.add(this.alignment),this.acceleration.add(this.cohesion),this.acceleration.add(this.separation),this.position.add(this.velocity),this.velocity.add(this.acceleration),this.velocity.clampLength(-this.maxSpeed,this.maxSpeed),this.velocity.setLength(this.maxSpeed),this.position.x<0&&(this.position.x=Math.abs(this.position.x),this.position.y+=180,this.velocity.x*=-1,this.velocity.y*=-1),this.position.x>180&&(this.position.x=180-(this.position.x-180),this.position.y-=180,this.velocity.x*=-1,this.velocity.y*=-1),this.position.y<0&&(this.position.y=360+this.position.y),this.position.y>360&&(this.position.y=this.position.y-360),this.cartesianPosition=It(this.position.x,this.position.y,5.1),this.cartesianVelocity=It(this.velocity.x,this.velocity.y,5.1),this.cartesianHeading=It(this.position.x+this.velocity.x*200,this.position.y+this.velocity.y*200,5.1),this.mesh.position.set(this.cartesianPosition.x,this.cartesianPosition.y,this.cartesianPosition.z),this.mesh.lookAt(Qi)}calculateWander(){this.wander.set(Xs(-.01,.01),Xs(-.01,.01))}calculateAlignment(){let e=0;for(let t=0;t<Je.length;t++)Je[t]!=this&&this.mesh.position.distanceTo(Je[t].mesh.position)<Rt.alignment_perception_distance&&(this.alignment.add(Je[t].velocity),e+=1);e>0&&this.alignment.set(this.alignment.x/e,this.alignment.y/e),this.alignment.sub(this.velocity),this.alignment.clampLength(-this.maxForce,this.maxForce)}calculateCohesion(){let e=0;for(let t=0;t<Je.length;t++)Je[t]!=this&&this.mesh.position.distanceTo(Je[t].mesh.position)<Rt.cohesion_perception_distance&&(this.cohesion.add(Je[t].position),e+=1);e>0&&this.cohesion.set(this.cohesion.x/e,this.cohesion.y/e),this.cohesion.sub(this.position),this.cohesion.clampLength(-this.maxForce,this.maxForce)}calculateSeparation(){let e=0;for(let t=0;t<Je.length;t++)if(Je[t]!=this&&this.mesh.position.distanceTo(Je[t].mesh.position)<Rt.separation_perception_distance){let n=new ne(this.position.x-Je[t].position.x,this.position.y-Je[t].position.y);n.divideScalar(this.mesh.position.distanceTo(Je[t].mesh.position)),this.separation.add(n),e+=1}e>0&&this.separation.set(this.separation.x/e,this.separation.y/e),this.separation.clampLength(-this.maxForce,this.maxForce)}}let Je=[];for(let s=0;s<300;s++){let e=Ac(10,170,5),t=Zm(0,359);Je.push(new l_(e,t))}const c_=new yg;let Rt={alignment:0,alignment_perception_distance:0,cohesion:0,cohesion_perception_distance:0,separation:0,separation_perception_distance:0};const ei=c_.addFolder("parameters");ei.add(Rt,"alignment",0,100);ei.add(Rt,"alignment_perception_distance",0,5,.01);ei.add(Rt,"cohesion",0,100);ei.add(Rt,"cohesion_perception_distance",0,5,.01);ei.add(Rt,"separation",0,100);ei.add(Rt,"separation_perception_distance",0,5,.01);ei.open();const u_=new Vm(16777215,.02);Qn.add(u_);const wi=new km(16777215,0);Qn.add(wi);let h_=.5;const zc=new Wa(16777215,.5);zc.position.set(0,0,0);Ft.add(zc);function d_(){for(let s=0;s<Cn.length;s++)Cn[s].pin.material.color.set(Cn[s].originalColor)}function f_(){sr.setFromCamera(Js,rt);const s=sr.intersectObjects(rr);for(let e=0;e<s.length;e++)s[e].object.material.color.set(16711680)}document.addEventListener("keyup",p_,!1);function p_(s){s.which==76&&(wi.intensity==0?wi.intensity=h_:wi.intensity=0)}document.addEventListener("keydown",m_,!1);function m_(s){const e=s.which;if(zn!=null){let t=Jm(zn.position.x,zn.position.y,zn.position.z);e==38?t.lat-=.3:e==40?t.lat+=.3:e==37?t.lng-=.3:e==39&&(t.lng+=.3);const n=5.01;let i=It(t.lat,t.lng,n);zn.position.set(i.x,i.y,i.z)}}const Zi=[];let kl;const g_=document.querySelector("#fpsCounter"),Uc=document.createElement("div");function kc(){window.requestAnimationFrame(()=>{const s=performance.now();for(;Zi.length>0&&Zi[0]<=s-1e3;)Zi.shift();Zi.push(s),kl=Zi.length,Uc.textContent=kl,kc()})}g_.appendChild(Uc);kc();function __(){Si.setAnimationLoop(x_)}function x_(s){if(kg(Si)){const r=Si.domElement;rt.aspect=r.clientWidth/r.clientHeight,rt.updateProjectionMatrix()}for(let r=0;r<Je.length;r++)Je[r].calculateWander(),Je[r].calculateAlignment(),Je[r].calculateCohesion(),Je[r].calculateSeparation(),Je[r].move();function e(r){Js.x=r.clientX/window.innerWidth*2-1,Js.y=-(r.clientY/window.innerHeight)*2+1}function t(r){sr.setFromCamera(Js,rt);const o=sr.intersectObjects(rr);if(o.length>0&&(zn=o[0].object,rt.position.distanceTo(zn.position)<3)){const a=rr.findIndex(c=>c==o[0].object),l=Ue[a][6];Fa=document.querySelector(`.carousel.s${l}`),Fa.style.display="block"}}window.addEventListener("pointermove",e),window.addEventListener("click",t),d_(),f_(),Si.render(Qn,rt);const n=rt.position,i=rt.rotation;wi.position.set(n.x,n.y,n.z),wi.rotation.set(i.x,i.y,i.z),zi.rotation.y+=-1e-5,mr.rotation.y+=-3e-4,gr.rotation.y+=-3e-5,_r.rotation.y+=-3e-6,Ui.rotation.y+=1e-4,Ic.rotation.y+=1e-5,Oc.rotation.y+=5e-5,Za.rotation.y+=1e-4,rt.position.z>15&&wc==!0&&(rt.position.z-=1e-4*Math.pow(rt.position.z-10,1.35),Ft.rotation.y+=5e-4);for(let r=0;r<Cn.length;r++)Cn[r].pin.material.wireframe==!0&&(Cn[r].pin.rotation.y+=.002,Cn[r].pin.rotation.x+=.001);Kt.rotateSpeed=(rt.position.distanceTo(Qi)-5)/rt.position.distanceTo(Qi),Kt.zoomSpeed=(rt.position.distanceTo(Qi)-5)/rt.position.distanceTo(Qi)/3,Kt.update()}__();
