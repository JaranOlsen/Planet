(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="144",si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zh=0,ba=1,jh=2,kc=1,$h=2,Zi=3,Bn=0,De=1,He=2,Mn=0,Si=1,pr=2,Ta=3,Pa=4,Kh=5,Di=100,Qh=101,tu=102,La=103,Ra=104,eu=200,nu=201,iu=202,su=203,Gc=204,Hc=205,ru=206,ou=207,au=208,lu=209,cu=210,hu=0,uu=1,du=2,Xo=3,fu=4,pu=5,mu=6,gu=7,aa=0,xu=1,_u=2,cn=0,Au=1,vu=2,Eu=3,yu=4,Cu=5,Wc=300,Pi=301,Li=302,Jo=303,Yo=304,Er=306,Zo=1e3,Ge=1001,jo=1002,ge=1003,za=1004,Ia=1005,Re=1006,Du=1007,yr=1008,Jn=1009,Mu=1010,Bu=1011,qc=1012,wu=1013,Gn=1014,Hn=1015,ns=1016,Su=1017,Fu=1018,Fi=1020,bu=1021,Tu=1022,Xe=1023,Pu=1024,Lu=1025,qn=1026,Ri=1027,Ru=1028,zu=1029,Iu=1030,Nu=1031,Ou=1033,Ur=33776,Vr=33777,kr=33778,Gr=33779,Na=35840,Oa=35841,Ua=35842,Va=35843,Uu=36196,ka=37492,Ga=37496,Ha=37808,Wa=37809,qa=37810,Xa=37811,Ja=37812,Ya=37813,Za=37814,ja=37815,$a=37816,Ka=37817,Qa=37818,tl=37819,el=37820,nl=37821,il=36492,Yn=3e3,Xt=3001,Vu=3200,ku=3201,la=0,Gu=1,on="srgb",Wn="srgb-linear",Hr=7680,Hu=519,sl=35044,rl="300 es",$o=1035;class Kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const he=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ol=1234567;const Ki=Math.PI/180,mr=180/Math.PI;function Qn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(he[r&255]+he[r>>8&255]+he[r>>16&255]+he[r>>24&255]+"-"+he[t&255]+he[t>>8&255]+"-"+he[t>>16&15|64]+he[t>>24&255]+"-"+he[e&63|128]+he[e>>8&255]+"-"+he[e>>16&255]+he[e>>24&255]+he[n&255]+he[n>>8&255]+he[n>>16&255]+he[n>>24&255]).toLowerCase()}function le(r,t,e){return Math.max(t,Math.min(e,r))}function ca(r,t){return(r%t+t)%t}function Wu(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function qu(r,t,e){return r!==t?(e-r)/(t-r):0}function Qi(r,t,e){return(1-e)*r+e*t}function Xu(r,t,e,n){return Qi(r,t,1-Math.exp(-e*n))}function Ju(r,t=1){return t-Math.abs(ca(r,t*2)-t)}function Yu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Zu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function ju(r,t){return r+Math.floor(Math.random()*(t-r+1))}function $u(r,t){return r+Math.random()*(t-r)}function Ku(r){return r*(.5-Math.random())}function Qu(r){r!==void 0&&(ol=r);let t=ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function td(r){return r*Ki}function ed(r){return r*mr}function Ko(r){return(r&r-1)===0&&r!==0}function nd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function gr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function id(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ji(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function me(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var al=Object.freeze({__proto__:null,DEG2RAD:Ki,RAD2DEG:mr,generateUUID:Qn,clamp:le,euclideanModulo:ca,mapLinear:Wu,inverseLerp:qu,lerp:Qi,damp:Xu,pingpong:Ju,smoothstep:Yu,smootherstep:Zu,randInt:ju,randFloat:$u,randFloatSpread:Ku,seededRandom:Qu,degToRad:td,radToDeg:ed,isPowerOfTwo:Ko,ceilPowerOfTwo:nd,floorPowerOfTwo:gr,setQuaternionFromProperEuler:id,normalize:me,denormalize:ji});class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],m=i[0],f=i[3],x=i[6],_=i[1],y=i[4],E=i[7],A=i[2],S=i[5],b=i[8];return s[0]=a*m+o*_+l*A,s[3]=a*f+o*y+l*S,s[6]=a*x+o*E+l*b,s[1]=c*m+h*_+u*A,s[4]=c*f+h*y+u*S,s[7]=c*x+h*E+u*b,s[2]=d*m+p*_+g*A,s[5]=d*f+p*y+g*S,s[8]=d*x+p*E+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(o*n-i*a)*m,t[3]=d*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-o*e)*m,t[6]=p*m,t[7]=(n*l-c*e)*m,t[8]=(a*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*s+n*l,i[3]=e*a+n*c,i[6]=e*o+n*h,i[1]=-n*s+e*l,i[4]=-n*a+e*c,i[7]=-n*o+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Xc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function is(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Xn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Wr={[on]:{[Wn]:Xn},[Wn]:{[on]:hr}},Oe={legacyMode:!0,get workingColorSpace(){return Wn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(Wr[t]&&Wr[t][e]!==void 0){const n=Wr[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ee={r:0,g:0,b:0},Ue={h:0,s:0,l:0},gs={h:0,s:0,l:0};function qr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function xs(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wn){return this.r=t,this.g=e,this.b=n,Oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wn){if(t=ca(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=qr(a,s,t+1/3),this.g=qr(a,s,t),this.b=qr(a,s,t-1/3)}return Oe.toWorkingColorSpace(this,i),this}setStyle(t,e=on){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Oe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Oe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Oe.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Oe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=on){const n=Jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Oe.fromWorkingColorSpace(xs(this,ee),t),le(ee.r*255,0,255)<<16^le(ee.g*255,0,255)<<8^le(ee.b*255,0,255)<<0}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wn){Oe.fromWorkingColorSpace(xs(this,ee),e);const n=ee.r,i=ee.g,s=ee.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wn){return Oe.fromWorkingColorSpace(xs(this,ee),e),t.r=ee.r,t.g=ee.g,t.b=ee.b,t}getStyle(t=on){return Oe.fromWorkingColorSpace(xs(this,ee),t),t!==on?`color(${t} ${ee.r} ${ee.g} ${ee.b})`:`rgb(${ee.r*255|0},${ee.g*255|0},${ee.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ue),Ue.h+=t,Ue.s+=e,Ue.l+=n,this.setHSL(Ue.h,Ue.s,Ue.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ue),t.getHSL(gs);const n=Qi(Ue.h,gs.h,e),i=Qi(Ue.s,gs.s,e),s=Qi(Ue.l,gs.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}zt.NAMES=Jc;let oi;class Yc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=is("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Zc{constructor(t=null){this.isSource=!0,this.uuid=Qn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Xr(i[a].image)):s.push(Xr(i[a]))}else s=Xr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Xr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sd=0;class Ie extends Kn{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Ge,i=Ge,s=Re,a=yr,o=Xe,l=Jn,c=1,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Qn(),this.name="",this.source=new Zc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case Ge:t.x=t.x<0?0:1;break;case jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case Ge:t.y=t.y<0?0:1;break;case jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Wc;class kt{constructor(t=0,e=0,n=0,i=1){kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,E=(p+1)/2,A=(x+1)/2,S=(h+d)/4,b=(u+m)/4,v=(g+f)/4;return y>E&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=S/n,s=b/n):E>A?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=S/i,s=v/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=v/s),this.set(n,i,s,e),this}let _=Math.sqrt((f-g)*(f-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(u-m)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zn extends Kn{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new kt(0,0,t,e),this.scissorTest=!1,this.viewport=new kt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Re,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jc extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rd extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],m=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==d||c!==p||h!==g){let f=1-o;const x=l*d+c*p+h*g+u*m,_=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const A=Math.sqrt(y),S=Math.atan2(A,x*_);f=Math.sin(f*S)/A,o=Math.sin(o*S)/A}const E=o*_;if(l=l*f+d*E,c=c*f+p*E,h=h*f+g*E,u=u*f+m*E,f===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,h=l*n+o*e-s*i,u=l*i+s*n-a*e,d=-s*e-a*n-o*i;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new F,ll=new jn;class ls{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(e,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(e,n,i),this.max.set(s,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Tn.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Tn)}else n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox),Yr.applyMatrix4(t.matrixWorld),this.union(Yr);const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),_s.subVectors(this.max,Ui),ai.subVectors(t.a,Ui),li.subVectors(t.b,Ui),ci.subVectors(t.c,Ui),gn.subVectors(li,ai),xn.subVectors(ci,li),Pn.subVectors(ai,ci);let e=[0,-gn.z,gn.y,0,-xn.z,xn.y,0,-Pn.z,Pn.y,gn.z,0,-gn.x,xn.z,0,-xn.x,Pn.z,0,-Pn.x,-gn.y,gn.x,0,-xn.y,xn.x,0,-Pn.y,Pn.x,0];return!Zr(e,ai,li,ci,_s)||(e=[1,0,0,0,1,0,0,0,1],!Zr(e,ai,li,ci,_s))?!1:(As.crossVectors(gn,xn),e=[As.x,As.y,As.z],Zr(e,ai,li,ci,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Tn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($e),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $e=[new F,new F,new F,new F,new F,new F,new F,new F],Tn=new F,Yr=new ls,ai=new F,li=new F,ci=new F,gn=new F,xn=new F,Pn=new F,Ui=new F,_s=new F,As=new F,Ln=new F;function Zr(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ln.fromArray(r,s);const o=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=t.dot(Ln),c=e.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const od=new ls,cl=new F,vs=new F,jr=new F;class Cr{constructor(t=new F,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):od.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){jr.subVectors(t,this.center);const e=jr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(jr.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?vs.set(0,0,1).multiplyScalar(t.radius):vs.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(cl.copy(t.center).add(vs)),this.expandByPoint(cl.copy(t.center).sub(vs)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ke=new F,$r=new F,Es=new F,_n=new F,Kr=new F,ys=new F,Qr=new F;class ha{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ke)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ke.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ke.copy(this.direction).multiplyScalar(e).add(this.origin),Ke.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$r.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),_n.copy(this.origin).sub($r);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Es),o=_n.dot(this.direction),l=-_n.dot(Es),c=_n.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Es).multiplyScalar(d).add($r),p}intersectSphere(t,e){Ke.subVectors(t.center,this.origin);const n=Ke.dot(this.direction),i=Ke.dot(Ke)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ke)!==null}intersectTriangle(t,e,n,i,s){Kr.subVectors(e,t),ys.subVectors(n,t),Qr.crossVectors(Kr,ys);let a=this.direction.dot(Qr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);const l=o*this.direction.dot(ys.crossVectors(_n,ys));if(l<0)return null;const c=o*this.direction.dot(Kr.cross(_n));if(c<0||l+c>a)return null;const h=-o*_n.dot(Qr);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,a,o,l,c,h,u,d,p,g,m,f){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=g,x[11]=m,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/hi.setFromMatrixColumn(t,0).length(),s=1/hi.setFromMatrixColumn(t,1).length(),a=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,m=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-m*c,e[9]=-o*l,e[2]=m-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,m=c*u;e[0]=d+m*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=m+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,m=c*u;e[0]=d-m*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=m-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,m=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+m,e[1]=l*u,e[5]=m*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,m=o*c;e[0]=l*h,e[4]=m-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-m*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,m=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+m,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ad,t,ld)}lookAt(t,e,n){const i=this.elements;return Ee.subVectors(t,e),Ee.lengthSq()===0&&(Ee.z=1),Ee.normalize(),An.crossVectors(n,Ee),An.lengthSq()===0&&(Math.abs(n.z)===1?Ee.x+=1e-4:Ee.z+=1e-4,Ee.normalize(),An.crossVectors(n,Ee)),An.normalize(),Cs.crossVectors(Ee,An),i[0]=An.x,i[4]=Cs.x,i[8]=Ee.x,i[1]=An.y,i[5]=Cs.y,i[9]=Ee.y,i[2]=An.z,i[6]=Cs.z,i[10]=Ee.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],x=n[14],_=n[3],y=n[7],E=n[11],A=n[15],S=i[0],b=i[4],v=i[8],B=i[12],R=i[1],X=i[5],et=i[9],O=i[13],L=i[2],W=i[6],J=i[10],Z=i[14],V=i[3],z=i[7],U=i[11],j=i[15];return s[0]=a*S+o*R+l*L+c*V,s[4]=a*b+o*X+l*W+c*z,s[8]=a*v+o*et+l*J+c*U,s[12]=a*B+o*O+l*Z+c*j,s[1]=h*S+u*R+d*L+p*V,s[5]=h*b+u*X+d*W+p*z,s[9]=h*v+u*et+d*J+p*U,s[13]=h*B+u*O+d*Z+p*j,s[2]=g*S+m*R+f*L+x*V,s[6]=g*b+m*X+f*W+x*z,s[10]=g*v+m*et+f*J+x*U,s[14]=g*B+m*O+f*Z+x*j,s[3]=_*S+y*R+E*L+A*V,s[7]=_*b+y*X+E*W+A*z,s[11]=_*v+y*et+E*J+A*U,s[15]=_*B+y*O+E*Z+A*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],m=t[7],f=t[11],x=t[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+m*(+e*l*p-e*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+f*(+e*c*u-e*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+x*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],m=t[13],f=t[14],x=t[15],_=u*f*c-m*d*c+m*l*p-o*f*p-u*l*x+o*d*x,y=g*d*c-h*f*c-g*l*p+a*f*p+h*l*x-a*d*x,E=h*m*c-g*u*c+g*o*p-a*m*p-h*o*x+a*u*x,A=g*u*l-h*m*l-g*o*d+a*m*d+h*o*f-a*u*f,S=e*_+n*y+i*E+s*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/S;return t[0]=_*b,t[1]=(m*d*s-u*f*s-m*i*p+n*f*p+u*i*x-n*d*x)*b,t[2]=(o*f*s-m*l*s+m*i*c-n*f*c-o*i*x+n*l*x)*b,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*b,t[4]=y*b,t[5]=(h*f*s-g*d*s+g*i*p-e*f*p-h*i*x+e*d*x)*b,t[6]=(g*l*s-a*f*s-g*i*c+e*f*c+a*i*x-e*l*x)*b,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*p+e*l*p)*b,t[8]=E*b,t[9]=(g*u*s-h*m*s-g*n*p+e*m*p+h*n*x-e*u*x)*b,t[10]=(a*m*s-g*o*s+g*n*c-e*m*c-a*n*x+e*o*x)*b,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*p-e*o*p)*b,t[12]=A*b,t[13]=(h*m*i-g*u*i+g*n*d-e*m*d-h*n*f+e*u*f)*b,t[14]=(g*o*i-a*m*i-g*n*l+e*m*l+a*n*f-e*o*f)*b,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,m=a*h,f=a*u,x=o*u,_=l*c,y=l*h,E=l*u,A=n.x,S=n.y,b=n.z;return i[0]=(1-(m+x))*A,i[1]=(p+E)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(p-E)*S,i[5]=(1-(d+x))*S,i[6]=(f+_)*S,i[7]=0,i[8]=(g+y)*b,i[9]=(f-_)*b,i[10]=(1-(d+m))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=hi.set(i[0],i[1],i[2]).length();const a=hi.set(i[4],i[5],i[6]).length(),o=hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ve.copy(this);const c=1/s,h=1/a,u=1/o;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=u,Ve.elements[9]*=u,Ve.elements[10]*=u,e.setFromRotationMatrix(Ve),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a){const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,a){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(a-s),u=(e+t)*l,d=(n+i)*c,p=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new F,Ve=new Yt,ad=new F(0,0,0),ld=new F(1,1,1),An=new F,Cs=new F,Ee=new F,hl=new Yt,ul=new jn;class cs{constructor(t=0,e=0,n=0,i=cs.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ul.setFromEuler(this),this.setFromQuaternion(ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}cs.DefaultOrder="XYZ";cs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ua{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cd=0;const dl=new F,ui=new jn,Qe=new Yt,Ds=new F,Vi=new F,hd=new F,ud=new jn,fl=new F(1,0,0),pl=new F(0,1,0),ml=new F(0,0,1),dd={type:"added"},gl={type:"removed"};class ie extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ie.DefaultUp.clone();const t=new F,e=new cs,n=new jn,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ze}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=ie.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ie.DefaultMatrixWorldAutoUpdate,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return dl.copy(t).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Vi,Ds,this.up):Qe.lookAt(Ds,Vi,this.up),this.quaternion.setFromRotationMatrix(Qe),i&&(Qe.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(Qe),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(dd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(gl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,t,hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ie.DefaultUp=new F(0,1,0);ie.DefaultMatrixAutoUpdate=!0;ie.DefaultMatrixWorldAutoUpdate=!0;const ke=new F,tn=new F,to=new F,en=new F,di=new F,fi=new F,xl=new F,eo=new F,no=new F,io=new F;class ln{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ke.subVectors(t,e),i.cross(ke);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ke.subVectors(i,e),tn.subVectors(n,e),to.subVectors(t,e);const a=ke.dot(ke),o=ke.dot(tn),l=ke.dot(to),c=tn.dot(tn),h=tn.dot(to),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,en),l.set(0,0),l.addScaledVector(s,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l}static isFrontFacing(t,e,n,i){return ke.subVectors(n,e),tn.subVectors(t,e),ke.cross(tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),ke.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ln.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;di.subVectors(i,n),fi.subVectors(s,n),eo.subVectors(t,n);const l=di.dot(eo),c=fi.dot(eo);if(l<=0&&c<=0)return e.copy(n);no.subVectors(t,i);const h=di.dot(no),u=fi.dot(no);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(di,a);io.subVectors(t,s);const p=di.dot(io),g=fi.dot(io);if(g>=0&&p<=g)return e.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(fi,o);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return xl.subVectors(s,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(xl,o);const x=1/(f+m+d);return a=m*x,o=d*x,e.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let fd=0;class ti extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Si,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gc,this.blendDst=Hc,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wn extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kt=new F,Ms=new ct;class Je{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=sl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ms.fromBufferAttribute(this,e),Ms.applyMatrix3(t),this.setXY(e,Ms.x,Ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix3(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix4(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyNormalMatrix(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.transformDirection(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $c extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kc extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pd=0;const be=new Yt,so=new ie,pi=new F,ye=new ls,ki=new ls,re=new F;class Ne extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xc(t)?Kc:$c)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return be.makeRotationFromQuaternion(t),this.applyMatrix4(be),this}rotateX(t){return be.makeRotationX(t),this.applyMatrix4(be),this}rotateY(t){return be.makeRotationY(t),this.applyMatrix4(be),this}rotateZ(t){return be.makeRotationZ(t),this.applyMatrix4(be),this}translate(t,e,n){return be.makeTranslation(t,e,n),this.applyMatrix4(be),this}scale(t,e,n){return be.makeScale(t,e,n),this.applyMatrix4(be),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];ye.setFromBufferAttribute(s),this.morphTargetsRelative?(re.addVectors(this.boundingBox.min,ye.min),this.boundingBox.expandByPoint(re),re.addVectors(this.boundingBox.max,ye.max),this.boundingBox.expandByPoint(re)):(this.boundingBox.expandByPoint(ye.min),this.boundingBox.expandByPoint(ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(ye.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(re.addVectors(ye.min,ki.min),ye.expandByPoint(re),re.addVectors(ye.max,ki.max),ye.expandByPoint(re)):(ye.expandByPoint(ki.min),ye.expandByPoint(ki.max))}ye.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)re.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(re));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)re.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(t,c),re.add(pi)),i=Math.max(i,n.distanceToSquared(re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new F,h[R]=new F;const u=new F,d=new F,p=new F,g=new ct,m=new ct,f=new ct,x=new F,_=new F;function y(R,X,et){u.fromArray(i,R*3),d.fromArray(i,X*3),p.fromArray(i,et*3),g.fromArray(a,R*2),m.fromArray(a,X*2),f.fromArray(a,et*2),d.sub(u),p.sub(u),m.sub(g),f.sub(g);const O=1/(m.x*f.y-f.x*m.y);!isFinite(O)||(x.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(O),_.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(O),c[R].add(x),c[X].add(x),c[et].add(x),h[R].add(_),h[X].add(_),h[et].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let R=0,X=E.length;R<X;++R){const et=E[R],O=et.start,L=et.count;for(let W=O,J=O+L;W<J;W+=3)y(n[W+0],n[W+1],n[W+2])}const A=new F,S=new F,b=new F,v=new F;function B(R){b.fromArray(s,R*3),v.copy(b);const X=c[R];A.copy(X),A.sub(b.multiplyScalar(b.dot(X))).normalize(),S.crossVectors(v,X);const O=S.dot(h[R])<0?-1:1;l[R*4]=A.x,l[R*4+1]=A.y,l[R*4+2]=A.z,l[R*4+3]=O}for(let R=0,X=E.length;R<X;++R){const et=E[R],O=et.start,L=et.count;for(let W=O,J=O+L;W<J;W+=3)B(n[W+0]),B(n[W+1]),B(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new F,s=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),m=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),a.fromBufferAttribute(e,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)re.fromBufferAttribute(t,e),re.normalize(),t.setXYZ(e,re.x,re.y,re.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*h;for(let x=0;x<h;x++)d[g++]=c[p++]}return new Je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _l=new Yt,mi=new ha,ro=new Cr,vn=new F,En=new F,yn=new F,oo=new F,ao=new F,lo=new F,Bs=new F,ws=new F,Ss=new F,Fs=new ct,bs=new ct,Ts=new ct,co=new F,Ps=new F;class ne extends ie{constructor(t=new Ne,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),t.ray.intersectsSphere(ro)===!1)||(_l.copy(s).invert(),mi.copy(t.ray).applyMatrix4(_l),n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const x=p[m],_=i[x.materialIndex],y=Math.max(x.start,g.start),E=Math.min(o.count,Math.min(x.start+x.count,g.start+g.count));for(let A=y,S=E;A<S;A+=3){const b=o.getX(A),v=o.getX(A+1),B=o.getX(A+2);a=Ls(this,_,t,mi,l,c,h,u,d,b,v,B),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{const m=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let x=m,_=f;x<_;x+=3){const y=o.getX(x),E=o.getX(x+1),A=o.getX(x+2);a=Ls(this,i,t,mi,l,c,h,u,d,y,E,A),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const x=p[m],_=i[x.materialIndex],y=Math.max(x.start,g.start),E=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let A=y,S=E;A<S;A+=3){const b=A,v=A+1,B=A+2;a=Ls(this,_,t,mi,l,c,h,u,d,b,v,B),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{const m=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let x=m,_=f;x<_;x+=3){const y=x,E=x+1,A=x+2;a=Ls(this,i,t,mi,l,c,h,u,d,y,E,A),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}}}function md(r,t,e,n,i,s,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side!==He,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ps);return c<e.near||c>e.far?null:{distance:c,point:Ps.clone(),object:r}}function Ls(r,t,e,n,i,s,a,o,l,c,h,u){vn.fromBufferAttribute(i,c),En.fromBufferAttribute(i,h),yn.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(s&&d){Bs.set(0,0,0),ws.set(0,0,0),Ss.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const f=d[g],x=s[g];f!==0&&(oo.fromBufferAttribute(x,c),ao.fromBufferAttribute(x,h),lo.fromBufferAttribute(x,u),a?(Bs.addScaledVector(oo,f),ws.addScaledVector(ao,f),Ss.addScaledVector(lo,f)):(Bs.addScaledVector(oo.sub(vn),f),ws.addScaledVector(ao.sub(En),f),Ss.addScaledVector(lo.sub(yn),f)))}vn.add(Bs),En.add(ws),yn.add(Ss)}r.isSkinnedMesh&&(r.boneTransform(c,vn),r.boneTransform(h,En),r.boneTransform(u,yn));const p=md(r,t,e,n,vn,En,yn,co);if(p){o&&(Fs.fromBufferAttribute(o,c),bs.fromBufferAttribute(o,h),Ts.fromBufferAttribute(o,u),p.uv=ln.getUV(co,vn,En,yn,Fs,bs,Ts,new ct)),l&&(Fs.fromBufferAttribute(l,c),bs.fromBufferAttribute(l,h),Ts.fromBufferAttribute(l,u),p.uv2=ln.getUV(co,vn,En,yn,Fs,bs,Ts,new ct));const g={a:c,b:h,c:u,normal:new F,materialIndex:0};ln.getNormal(vn,En,yn,g.normal),p.face=g}return p}class hs extends Ne{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function g(m,f,x,_,y,E,A,S,b,v,B){const R=E/b,X=A/v,et=E/2,O=A/2,L=S/2,W=b+1,J=v+1;let Z=0,V=0;const z=new F;for(let U=0;U<J;U++){const j=U*X-O;for(let K=0;K<W;K++){const Q=K*R-et;z[m]=Q*_,z[f]=j*y,z[x]=L,c.push(z.x,z.y,z.z),z[m]=0,z[f]=0,z[x]=S>0?1:-1,h.push(z.x,z.y,z.z),u.push(K/b),u.push(1-U/v),Z+=1}}for(let U=0;U<v;U++)for(let j=0;j<b;j++){const K=d+j+W*U,Q=d+j+W*(U+1),dt=d+(j+1)+W*(U+1),gt=d+(j+1)+W*U;l.push(K,Q,gt),l.push(Q,dt,gt),V+=6}o.addGroup(p,V,B),p+=V,d+=Z}}static fromJSON(t){return new hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ue(r){const t={};for(let e=0;e<r.length;e++){const n=zi(r[e]);for(const i in n)t[i]=n[i]}return t}function gd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}const xd={clone:zi,merge:ue};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qc extends ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ce extends Qc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=90,xi=1;class vd extends ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ce(gi,xi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new F(1,0,0)),this.add(i);const s=new Ce(gi,xi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new F(-1,0,0)),this.add(s);const a=new Ce(gi,xi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new F(0,1,0)),this.add(a);const o=new Ce(gi,xi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new F(0,-1,0)),this.add(o);const l=new Ce(gi,xi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,1)),this.add(l);const c=new Ce(gi,xi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new F(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=cn,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class th extends Ie{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ed extends Zn{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new th(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Re}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hs(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Mn});s.uniforms.tEquirect.value=e;const a=new ne(i,s),o=e.minFilter;return e.minFilter===yr&&(e.minFilter=Re),new vd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const ho=new F,yd=new F,Cd=new ze;class On{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ho.subVectors(n,e).cross(yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cd.getNormalMatrix(t),i=this.coplanarPoint(ho).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Cr,Rs=new F;class da{constructor(t=new On,e=new On,n=new On,i=new On,s=new On,a=new On){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],g=n[10],m=n[11],f=n[12],x=n[13],_=n[14],y=n[15];return e[0].setComponents(o-i,u-l,m-d,y-f).normalize(),e[1].setComponents(o+i,u+l,m+d,y+f).normalize(),e[2].setComponents(o+s,u+c,m+p,y+x).normalize(),e[3].setComponents(o-s,u-c,m-p,y-x).normalize(),e[4].setComponents(o-a,u-h,m-g,y-_).normalize(),e[5].setComponents(o+a,u+h,m+g,y+_).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Rs.x=i.normal.x>0?t.max.x:t.min.x,Rs.y=i.normal.y>0?t.max.y:t.min.y,Rs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eh(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Dd(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,p=h.updateRange;r.bindBuffer(u,c),p.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class fa extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],m=[],f=[];for(let x=0;x<h;x++){const _=x*d-a;for(let y=0;y<c;y++){const E=y*u-s;g.push(E,-_,0),m.push(0,0,1),f.push(y/o),f.push(1-x/l)}}for(let x=0;x<l;x++)for(let _=0;_<o;_++){const y=_+c*x,E=_+c*(x+1),A=_+1+c*(x+1),S=_+1+c*x;p.push(y,E,S),p.push(E,A,S)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(m,3)),this.setAttribute("uv",new ce(f,2))}static fromJSON(t){return new fa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td="vec3 transformed = vec3( position );",Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ld=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wd=`#define PI 3.141592653589793
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
}`,qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
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
}`,hf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,pf=`uniform bool receiveShadow;
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
#endif`,mf=`#if defined( USE_ENVMAP )
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
#endif`,gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,vf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,yf=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,If=`#ifdef USE_MORPHNORMALS
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
#endif`,Nf=`#ifdef USE_MORPHTARGETS
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
#endif`,Of=`#ifdef USE_MORPHTARGETS
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
#endif`,Uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Vf=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
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
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,op=`float getShadowMask() {
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
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#ifdef USE_TRANSMISSION
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
#endif`,xp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_p=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ap=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ep=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,yp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`#include <envmap_common_pars_fragment>
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
}`,Sp=`#include <common>
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
}`,Fp=`#if DEPTH_PACKING == 3200
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
}`,bp=`#define DISTANCE
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
}`,Tp=`#define DISTANCE
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rp=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Np=`uniform vec3 diffuse;
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
}`,Op=`#define LAMBERT
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
}`,Up=`#define LAMBERT
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
}`,Vp=`#define MATCAP
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
}`,kp=`#define MATCAP
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
}`,Gp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Wp=`#define PHONG
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
}`,qp=`#define PHONG
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
}`,Xp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,Yp=`#define TOON
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
}`,Zp=`#define TOON
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
}`,jp=`uniform float size;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,Qp=`uniform vec3 color;
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
}`,t0=`uniform float rotation;
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
}`,e0=`uniform vec3 diffuse;
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
}`,Bt={alphamap_fragment:Md,alphamap_pars_fragment:Bd,alphatest_fragment:wd,alphatest_pars_fragment:Sd,aomap_fragment:Fd,aomap_pars_fragment:bd,begin_vertex:Td,beginnormal_vertex:Pd,bsdfs:Ld,iridescence_fragment:Rd,bumpmap_pars_fragment:zd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:Ud,color_fragment:Vd,color_pars_fragment:kd,color_pars_vertex:Gd,color_vertex:Hd,common:Wd,cube_uv_reflection_fragment:qd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:Jd,displacementmap_vertex:Yd,emissivemap_fragment:Zd,emissivemap_pars_fragment:jd,encodings_fragment:$d,encodings_pars_fragment:Kd,envmap_fragment:Qd,envmap_common_pars_fragment:tf,envmap_pars_fragment:ef,envmap_pars_vertex:nf,envmap_physical_pars_fragment:mf,envmap_vertex:sf,fog_vertex:rf,fog_pars_vertex:of,fog_fragment:af,fog_pars_fragment:lf,gradientmap_pars_fragment:cf,lightmap_fragment:hf,lightmap_pars_fragment:uf,lights_lambert_fragment:df,lights_lambert_pars_fragment:ff,lights_pars_begin:pf,lights_toon_fragment:gf,lights_toon_pars_fragment:xf,lights_phong_fragment:_f,lights_phong_pars_fragment:Af,lights_physical_fragment:vf,lights_physical_pars_fragment:Ef,lights_fragment_begin:yf,lights_fragment_maps:Cf,lights_fragment_end:Df,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:Bf,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:Sf,map_fragment:Ff,map_pars_fragment:bf,map_particle_fragment:Tf,map_particle_pars_fragment:Pf,metalnessmap_fragment:Lf,metalnessmap_pars_fragment:Rf,morphcolor_vertex:zf,morphnormal_vertex:If,morphtarget_pars_vertex:Nf,morphtarget_vertex:Of,normal_fragment_begin:Uf,normal_fragment_maps:Vf,normal_pars_fragment:kf,normal_pars_vertex:Gf,normal_vertex:Hf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:Yf,output_fragment:Zf,packing:jf,premultiplied_alpha_fragment:$f,project_vertex:Kf,dithering_fragment:Qf,dithering_pars_fragment:tp,roughnessmap_fragment:ep,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:ip,shadowmap_pars_vertex:sp,shadowmap_vertex:rp,shadowmask_pars_fragment:op,skinbase_vertex:ap,skinning_pars_vertex:lp,skinning_vertex:cp,skinnormal_vertex:hp,specularmap_fragment:up,specularmap_pars_fragment:dp,tonemapping_fragment:fp,tonemapping_pars_fragment:pp,transmission_fragment:mp,transmission_pars_fragment:gp,uv_pars_fragment:xp,uv_pars_vertex:_p,uv_vertex:Ap,uv2_pars_fragment:vp,uv2_pars_vertex:Ep,uv2_vertex:yp,worldpos_vertex:Cp,background_vert:Dp,background_frag:Mp,cube_vert:Bp,cube_frag:wp,depth_vert:Sp,depth_frag:Fp,distanceRGBA_vert:bp,distanceRGBA_frag:Tp,equirect_vert:Pp,equirect_frag:Lp,linedashed_vert:Rp,linedashed_frag:zp,meshbasic_vert:Ip,meshbasic_frag:Np,meshlambert_vert:Op,meshlambert_frag:Up,meshmatcap_vert:Vp,meshmatcap_frag:kp,meshnormal_vert:Gp,meshnormal_frag:Hp,meshphong_vert:Wp,meshphong_frag:qp,meshphysical_vert:Xp,meshphysical_frag:Jp,meshtoon_vert:Yp,meshtoon_frag:Zp,points_vert:jp,points_frag:$p,shadow_vert:Kp,shadow_frag:Qp,sprite_vert:t0,sprite_frag:e0},st={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ze},uv2Transform:{value:new ze},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ze}}},qe={basic:{uniforms:ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:ue([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:ue([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:ue([st.points,st.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:ue([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:ue([st.common,st.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:ue([st.sprite,st.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},cube:{uniforms:ue([st.envmap,{opacity:{value:1}}]),vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:ue([st.common,st.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:ue([st.lights,st.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};qe.physical={uniforms:ue([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ct(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};function n0(r,t,e,n,i,s){const a=new zt(0);let o=i===!0?0:1,l,c,h=null,u=0,d=null;function p(m,f){let x=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=t.get(_));const y=r.xr,E=y.getSession&&y.getSession();E&&E.environmentBlendMode==="additive"&&(_=null),_===null?g(a,o):_&&_.isColor&&(g(_,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Er)?(c===void 0&&(c=new ne(new hs(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:zi(qe.cube.uniforms),vertexShader:qe.cube.vertexShader,fragmentShader:qe.cube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,(h!==_||u!==_.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ne(new fa(2,2),new hn({name:"BackgroundMaterial",uniforms:zi(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){e.buffers.color.setClear(m.r,m.g,m.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),o=f,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:p}}function i0(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=f(null);let c=l,h=!1;function u(L,W,J,Z,V){let z=!1;if(a){const U=m(Z,J,W);c!==U&&(c=U,p(c.object)),z=x(L,Z,J,V),z&&_(L,Z,J,V)}else{const U=W.wireframe===!0;(c.geometry!==Z.id||c.program!==J.id||c.wireframe!==U)&&(c.geometry=Z.id,c.program=J.id,c.wireframe=U,z=!0)}V!==null&&e.update(V,34963),(z||h)&&(h=!1,v(L,W,J,Z),V!==null&&r.bindBuffer(34963,e.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,W,J){const Z=J.wireframe===!0;let V=o[L.id];V===void 0&&(V={},o[L.id]=V);let z=V[W.id];z===void 0&&(z={},V[W.id]=z);let U=z[Z];return U===void 0&&(U=f(d()),z[Z]=U),U}function f(L){const W=[],J=[],Z=[];for(let V=0;V<i;V++)W[V]=0,J[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:J,attributeDivisors:Z,object:L,attributes:{},index:null}}function x(L,W,J,Z){const V=c.attributes,z=W.attributes;let U=0;const j=J.getAttributes();for(const K in j)if(j[K].location>=0){const dt=V[K];let gt=z[K];if(gt===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(gt=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(gt=L.instanceColor)),dt===void 0||dt.attribute!==gt||gt&&dt.data!==gt.data)return!0;U++}return c.attributesNum!==U||c.index!==Z}function _(L,W,J,Z){const V={},z=W.attributes;let U=0;const j=J.getAttributes();for(const K in j)if(j[K].location>=0){let dt=z[K];dt===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(dt=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(dt=L.instanceColor));const gt={};gt.attribute=dt,dt&&dt.data&&(gt.data=dt.data),V[K]=gt,U++}c.attributes=V,c.attributesNum=U,c.index=Z}function y(){const L=c.newAttributes;for(let W=0,J=L.length;W<J;W++)L[W]=0}function E(L){A(L,0)}function A(L,W){const J=c.newAttributes,Z=c.enabledAttributes,V=c.attributeDivisors;J[L]=1,Z[L]===0&&(r.enableVertexAttribArray(L),Z[L]=1),V[L]!==W&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,W),V[L]=W)}function S(){const L=c.newAttributes,W=c.enabledAttributes;for(let J=0,Z=W.length;J<Z;J++)W[J]!==L[J]&&(r.disableVertexAttribArray(J),W[J]=0)}function b(L,W,J,Z,V,z){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(L,W,J,V,z):r.vertexAttribPointer(L,W,J,Z,V,z)}function v(L,W,J,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const V=Z.attributes,z=J.getAttributes(),U=W.defaultAttributeValues;for(const j in z){const K=z[j];if(K.location>=0){let Q=V[j];if(Q===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const dt=Q.normalized,gt=Q.itemSize,Y=e.get(Q);if(Y===void 0)continue;const Lt=Y.buffer,xt=Y.type,vt=Y.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ft=Q.data,It=ft.stride,Dt=Q.offset;if(ft.isInstancedInterleavedBuffer){for(let mt=0;mt<K.locationSize;mt++)A(K.location+mt,ft.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let mt=0;mt<K.locationSize;mt++)E(K.location+mt);r.bindBuffer(34962,Lt);for(let mt=0;mt<K.locationSize;mt++)b(K.location+mt,gt/K.locationSize,xt,dt,It*vt,(Dt+gt/K.locationSize*mt)*vt)}else{if(Q.isInstancedBufferAttribute){for(let ft=0;ft<K.locationSize;ft++)A(K.location+ft,Q.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ft=0;ft<K.locationSize;ft++)E(K.location+ft);r.bindBuffer(34962,Lt);for(let ft=0;ft<K.locationSize;ft++)b(K.location+ft,gt/K.locationSize,xt,dt,gt*vt,gt/K.locationSize*ft*vt)}}else if(U!==void 0){const dt=U[j];if(dt!==void 0)switch(dt.length){case 2:r.vertexAttrib2fv(K.location,dt);break;case 3:r.vertexAttrib3fv(K.location,dt);break;case 4:r.vertexAttrib4fv(K.location,dt);break;default:r.vertexAttrib1fv(K.location,dt)}}}}S()}function B(){et();for(const L in o){const W=o[L];for(const J in W){const Z=W[J];for(const V in Z)g(Z[V].object),delete Z[V];delete W[J]}delete o[L]}}function R(L){if(o[L.id]===void 0)return;const W=o[L.id];for(const J in W){const Z=W[J];for(const V in Z)g(Z[V].object),delete Z[V];delete W[J]}delete o[L.id]}function X(L){for(const W in o){const J=o[W];if(J[L.id]===void 0)continue;const Z=J[L.id];for(const V in Z)g(Z[V].object),delete Z[V];delete J[L.id]}}function et(){O(),h=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:et,resetDefaultState:O,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:X,initAttributes:y,enableAttribute:E,disableUnusedAttributes:S}}function s0(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,h,u),e.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function r0(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),f=r.getParameter(36347),x=r.getParameter(36348),_=r.getParameter(36349),y=d>0,E=a||t.has("OES_texture_float"),A=y&&E,S=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:S}}function o0(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new On,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const g=u.length!==0||d||n!==0||i;return i=d,e=h(u,p,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,p){const g=u.clippingPlanes,m=u.clipIntersection,f=u.clipShadows,x=r.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const _=s?0:n,y=_*4;let E=x.clippingState||null;l.value=E,E=h(g,d,y,p);for(let A=0;A!==y;++A)E[A]=e[A];x.clippingState=E,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const m=u!==null?u.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const x=p+m*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(f===null||f.length<x)&&(f=new Float32Array(x));for(let y=0,E=p;y!==m;++y,E+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(f,E),f[E+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,f}}function a0(r){let t=new WeakMap;function e(a,o){return o===Jo?a.mapping=Pi:o===Yo&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Jo||o===Yo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ed(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class l0 extends Qc{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,Al=[.125,.215,.35,.446,.526,.582],kn=20,uo=new l0,vl=new zt;let fo=null;const Un=(1+Math.sqrt(5))/2,Ai=1/Un,El=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Un,Ai),new F(0,Un,-Ai),new F(Ai,0,Un),new F(-Ai,0,Un),new F(Un,Ai,0),new F(-Un,Ai,0)];class yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){fo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fo),t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:ns,format:Xe,encoding:Yn,depthBuffer:!1},i=Cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c0(s)),this._blurMaterial=h0(s,t,e)}return i}_compileMaterial(t){const e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,uo)}_sceneToCubeUV(t,e,n,i){const o=new Ce(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(vl),h.toneMapping=cn,h.autoClear=!1;const p=new wn({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new ne(new hs,p);let m=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,m=!0):(p.color.copy(vl),m=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(o.up.set(0,l[x],0),o.lookAt(c[x],0,0)):_===1?(o.up.set(0,0,l[x]),o.lookAt(0,c[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,c[x]));const y=this._cubeSize;zs(i,_*y,x>2?y:0,y,y),h.setRenderTarget(i),m&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Pi||t.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=El[(i-1)%El.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ne(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*kn-1),m=s/g,f=isFinite(s)?1+Math.floor(h*m):kn;f>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${kn}`);const x=[];let _=0;for(let b=0;b<kn;++b){const v=b/m,B=Math.exp(-v*v/2);x.push(B),b===0?_+=B:b<f&&(_+=2*B)}for(let b=0;b<x.length;b++)x[b]=x[b]/_;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=x,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const E=this._sizeLods[i],A=3*E*(i>y-Bi?i-y+Bi:0),S=4*(this._cubeSize-E);zs(e,A,S,3*E,2*E),l.setRenderTarget(e),l.render(u,uo)}}function c0(r){const t=[],e=[],n=[];let i=r;const s=r-Bi+1+Al.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Bi?l=Al[a-r+Bi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,m=3,f=2,x=1,_=new Float32Array(m*g*p),y=new Float32Array(f*g*p),E=new Float32Array(x*g*p);for(let S=0;S<p;S++){const b=S%3*2/3-1,v=S>2?0:-1,B=[b,v,0,b+2/3,v,0,b+2/3,v+1,0,b,v,0,b+2/3,v+1,0,b,v+1,0];_.set(B,m*g*S),y.set(d,f*g*S);const R=[S,S,S,S,S,S];E.set(R,x*g*S)}const A=new Ne;A.setAttribute("position",new Je(_,m)),A.setAttribute("uv",new Je(y,f)),A.setAttribute("faceIndex",new Je(E,x)),t.push(A),i>Bi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cl(r,t,e){const n=new Zn(r,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function h0(r,t,e){const n=new Float32Array(kn),i=new F(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Dl(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ml(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function pa(){return`

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
	`}function u0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jo||l===Yo,h=l===Pi||l===Li;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new yl(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new yl(r));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function d0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function f0(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let f=0,x=m.length;f<x;f++)t.update(m[f],34962)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const _=p.array;m=p.version;for(let y=0,E=_.length;y<E;y+=3){const A=_[y+0],S=_[y+1],b=_[y+2];d.push(A,S,S,b,b,A)}}else{const _=g.array;m=g.version;for(let y=0,E=_.length/3-1;y<E;y+=3){const A=y+0,S=y+1,b=y+2;d.push(A,S,S,b,b,A)}}const f=new(Xc(d)?Kc:$c)(d,1);f.version=m;const x=s.get(u);x&&t.remove(x),s.set(u,f)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function p0(r,t,e,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,p){r.drawElements(s,p,o,d*l),e.update(p,s,1)}function u(d,p,g){if(g===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,o,d*l,g),e.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function m0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function g0(r,t){return r[0]-t[0]}function x0(r,t){return Math.abs(t[1])-Math.abs(r[1])}function _0(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new kt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,d){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=m!==void 0?m.length:0;let x=s.get(h);if(x===void 0||x.count!==f){let J=function(){L.dispose(),s.delete(h),h.removeEventListener("dispose",J)};var g=J;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),A===!0&&(R=2),S===!0&&(R=3);let X=h.attributes.position.count*R,et=1;X>t.maxTextureSize&&(et=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const O=new Float32Array(X*et*4*f),L=new jc(O,X,et,f);L.type=Hn,L.needsUpdate=!0;const W=R*4;for(let Z=0;Z<f;Z++){const V=b[Z],z=v[Z],U=B[Z],j=X*et*4*Z;for(let K=0;K<V.count;K++){const Q=K*W;E===!0&&(a.fromBufferAttribute(V,K),O[j+Q+0]=a.x,O[j+Q+1]=a.y,O[j+Q+2]=a.z,O[j+Q+3]=0),A===!0&&(a.fromBufferAttribute(z,K),O[j+Q+4]=a.x,O[j+Q+5]=a.y,O[j+Q+6]=a.z,O[j+Q+7]=0),S===!0&&(a.fromBufferAttribute(U,K),O[j+Q+8]=a.x,O[j+Q+9]=a.y,O[j+Q+10]=a.z,O[j+Q+11]=U.itemSize===4?a.w:1)}}x={count:f,texture:L,size:new ct(X,et)},s.set(h,x),h.addEventListener("dispose",J)}let _=0;for(let E=0;E<p.length;E++)_+=p[E];const y=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const m=p===void 0?0:p.length;let f=n[h.id];if(f===void 0||f.length!==m){f=[];for(let A=0;A<m;A++)f[A]=[A,0];n[h.id]=f}for(let A=0;A<m;A++){const S=f[A];S[0]=A,S[1]=p[A]}f.sort(x0);for(let A=0;A<8;A++)A<m&&f[A][1]?(o[A][0]=f[A][0],o[A][1]=f[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(g0);const x=h.morphAttributes.position,_=h.morphAttributes.normal;let y=0;for(let A=0;A<8;A++){const S=o[A],b=S[0],v=S[1];b!==Number.MAX_SAFE_INTEGER&&v?(x&&h.getAttribute("morphTarget"+A)!==x[b]&&h.setAttribute("morphTarget"+A,x[b]),_&&h.getAttribute("morphNormal"+A)!==_[b]&&h.setAttribute("morphNormal"+A,_[b]),i[A]=v,y+=v):(x&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),_&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),i[A]=0)}const E=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function A0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const nh=new Ie,ih=new jc,sh=new rd,rh=new th,Bl=[],wl=[],Sl=new Float32Array(16),Fl=new Float32Array(9),bl=new Float32Array(4);function Ni(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Bl[i];if(s===void 0&&(s=new Float32Array(i),Bl[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function fe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function pe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Dr(r,t){let e=wl[t];e===void 0&&(e=new Int32Array(t),wl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function v0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function E0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;r.uniform2fv(this.addr,t),pe(e,t)}}function y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;r.uniform3fv(this.addr,t),pe(e,t)}}function C0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;r.uniform4fv(this.addr,t),pe(e,t)}}function D0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;bl.set(n),r.uniformMatrix2fv(this.addr,!1,bl),pe(e,n)}}function M0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Fl.set(n),r.uniformMatrix3fv(this.addr,!1,Fl),pe(e,n)}}function B0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Sl.set(n),r.uniformMatrix4fv(this.addr,!1,Sl),pe(e,n)}}function w0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function S0(r,t){const e=this.cache;fe(e,t)||(r.uniform2iv(this.addr,t),pe(e,t))}function F0(r,t){const e=this.cache;fe(e,t)||(r.uniform3iv(this.addr,t),pe(e,t))}function b0(r,t){const e=this.cache;fe(e,t)||(r.uniform4iv(this.addr,t),pe(e,t))}function T0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function P0(r,t){const e=this.cache;fe(e,t)||(r.uniform2uiv(this.addr,t),pe(e,t))}function L0(r,t){const e=this.cache;fe(e,t)||(r.uniform3uiv(this.addr,t),pe(e,t))}function R0(r,t){const e=this.cache;fe(e,t)||(r.uniform4uiv(this.addr,t),pe(e,t))}function z0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||nh,i)}function I0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sh,i)}function N0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||rh,i)}function O0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ih,i)}function U0(r){switch(r){case 5126:return v0;case 35664:return E0;case 35665:return y0;case 35666:return C0;case 35674:return D0;case 35675:return M0;case 35676:return B0;case 5124:case 35670:return w0;case 35667:case 35671:return S0;case 35668:case 35672:return F0;case 35669:case 35673:return b0;case 5125:return T0;case 36294:return P0;case 36295:return L0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return O0}}function V0(r,t){r.uniform1fv(this.addr,t)}function k0(r,t){const e=Ni(t,this.size,2);r.uniform2fv(this.addr,e)}function G0(r,t){const e=Ni(t,this.size,3);r.uniform3fv(this.addr,e)}function H0(r,t){const e=Ni(t,this.size,4);r.uniform4fv(this.addr,e)}function W0(r,t){const e=Ni(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function q0(r,t){const e=Ni(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function X0(r,t){const e=Ni(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function J0(r,t){r.uniform1iv(this.addr,t)}function Y0(r,t){r.uniform2iv(this.addr,t)}function Z0(r,t){r.uniform3iv(this.addr,t)}function j0(r,t){r.uniform4iv(this.addr,t)}function $0(r,t){r.uniform1uiv(this.addr,t)}function K0(r,t){r.uniform2uiv(this.addr,t)}function Q0(r,t){r.uniform3uiv(this.addr,t)}function tm(r,t){r.uniform4uiv(this.addr,t)}function em(r,t,e){const n=t.length,i=Dr(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||nh,i[s])}function nm(r,t,e){const n=t.length,i=Dr(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||sh,i[s])}function im(r,t,e){const n=t.length,i=Dr(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||rh,i[s])}function sm(r,t,e){const n=t.length,i=Dr(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||ih,i[s])}function rm(r){switch(r){case 5126:return V0;case 35664:return k0;case 35665:return G0;case 35666:return H0;case 35674:return W0;case 35675:return q0;case 35676:return X0;case 5124:case 35670:return J0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return j0;case 5125:return $0;case 36294:return K0;case 36295:return Q0;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}class om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=U0(e.type)}}class am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=rm(e.type)}}class lm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function Tl(r,t){r.seq.push(t),r.map[t.id]=t}function cm(r,t,e){const n=r.name,i=n.length;for(po.lastIndex=0;;){const s=po.exec(n),a=po.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Tl(e,c===void 0?new om(o,r,t):new am(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new lm(o),Tl(e,u)),e=u}}}class ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);cm(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Pl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let hm=0;function um(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function dm(r){switch(r){case Yn:return["Linear","( value )"];case Xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ll(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+um(r.getShaderSource(t),a)}else return i}function fm(r,t){const e=dm(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function pm(r,t){let e;switch(t){case Au:e="Linear";break;case vu:e="Reinhard";break;case Eu:e="OptimizedCineon";break;case yu:e="ACESFilmic";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function mm(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($i).join(`
`)}function gm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xm(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function $i(r){return r!==""}function Rl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(r){return r.replace(_m,Am)}function Am(r,t){const e=Bt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Qo(e)}const vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(r){return r.replace(vm,Em)}function Em(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nl(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ym(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zi&&(t="SHADOWMAP_TYPE_VSM"),t}function Cm(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dm(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function Mm(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case aa:t="ENVMAP_BLENDING_MULTIPLY";break;case xu:t="ENVMAP_BLENDING_MIX";break;case _u:t="ENVMAP_BLENDING_ADD";break}return t}function Bm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wm(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ym(e),c=Cm(e),h=Dm(e),u=Mm(e),d=Bm(e),p=e.isWebGL2?"":mm(e),g=gm(s),m=i.createProgram();let f,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter($i).join(`
`),f.length>0&&(f+=`
`),x=[p,g].filter($i).join(`
`),x.length>0&&(x+=`
`)):(f=[Nl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),x=[p,Nl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cn?"#define TONE_MAPPING":"",e.toneMapping!==cn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==cn?pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.encodings_pars_fragment,fm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($i).join(`
`)),a=Qo(a),a=Rl(a,e),a=zl(a,e),o=Qo(o),o=Rl(o,e),o=zl(o,e),a=Il(a),o=Il(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",e.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+f+a,E=_+x+o,A=Pl(i,35633,y),S=Pl(i,35632,E);if(i.attachShader(m,A),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const B=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(A).trim(),X=i.getShaderInfoLog(S).trim();let et=!0,O=!0;if(i.getProgramParameter(m,35714)===!1){et=!1;const L=Ll(i,A,"vertex"),W=Ll(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+B+`
`+L+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(R===""||X==="")&&(O=!1);O&&(this.diagnostics={runnable:et,programLog:B,vertexShader:{log:R,prefix:f},fragmentShader:{log:X,prefix:x}})}i.deleteShader(A),i.deleteShader(S);let b;this.getUniforms=function(){return b===void 0&&(b=new ur(i,m)),b};let v;return this.getAttributes=function(){return v===void 0&&(v=xm(i,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=S,this}let Sm=0;class Fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bm(t),e.set(t,n)),n}}class bm{constructor(t){this.id=Sm++,this.code=t,this.usedTimes=0}}function Tm(r,t,e,n,i,s,a){const o=new ua,l=new Fm,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,B,R,X,et){const O=X.fog,L=et.geometry,W=v.isMeshStandardMaterial?X.environment:null,J=(v.isMeshStandardMaterial?e:t).get(v.envMap||W),Z=!!J&&J.mapping===Er?J.image.height:null,V=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,U=z!==void 0?z.length:0;let j=0;L.morphAttributes.position!==void 0&&(j=1),L.morphAttributes.normal!==void 0&&(j=2),L.morphAttributes.color!==void 0&&(j=3);let K,Q,dt,gt;if(V){const It=qe[V];K=It.vertexShader,Q=It.fragmentShader}else K=v.vertexShader,Q=v.fragmentShader,l.update(v),dt=l.getVertexShaderID(v),gt=l.getFragmentShaderID(v);const Y=r.getRenderTarget(),Lt=v.alphaTest>0,xt=v.clearcoat>0,vt=v.iridescence>0;return{isWebGL2:h,shaderID:V,shaderName:v.type,vertexShader:K,fragmentShader:Q,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:et.isInstancedMesh===!0,instancingColor:et.isInstancedMesh===!0&&et.instanceColor!==null,supportsVertexTextures:d,outputEncoding:Y===null?r.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Yn,map:!!v.map,matcap:!!v.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Z,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Gu,tangentSpaceNormalMap:v.normalMapType===la,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Xt,clearcoat:xt,clearcoatMap:xt&&!!v.clearcoatMap,clearcoatRoughnessMap:xt&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!v.clearcoatNormalMap,iridescence:vt,iridescenceMap:vt&&!!v.iridescenceMap,iridescenceThicknessMap:vt&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Si,alphaMap:!!v.alphaMap,alphaTest:Lt,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!L.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:et.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:j,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:cn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===He,flipSided:v.side===De,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const B=[];if(v.shaderID?B.push(v.shaderID):(B.push(v.customVertexShaderID),B.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)B.push(R),B.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(x(B,v),_(B,v),B.push(r.outputEncoding)),B.push(v.customProgramCacheKey),B.join()}function x(v,B){v.push(B.precision),v.push(B.outputEncoding),v.push(B.envMapMode),v.push(B.envMapCubeUVHeight),v.push(B.combine),v.push(B.vertexUvs),v.push(B.fogExp2),v.push(B.sizeAttenuation),v.push(B.morphTargetsCount),v.push(B.morphAttributeCount),v.push(B.numDirLights),v.push(B.numPointLights),v.push(B.numSpotLights),v.push(B.numSpotLightMaps),v.push(B.numHemiLights),v.push(B.numRectAreaLights),v.push(B.numDirLightShadows),v.push(B.numPointLightShadows),v.push(B.numSpotLightShadows),v.push(B.numSpotLightShadowsWithMaps),v.push(B.shadowMapType),v.push(B.toneMapping),v.push(B.numClippingPlanes),v.push(B.numClipIntersection),v.push(B.depthPacking)}function _(v,B){o.disableAll(),B.isWebGL2&&o.enable(0),B.supportsVertexTextures&&o.enable(1),B.instancing&&o.enable(2),B.instancingColor&&o.enable(3),B.map&&o.enable(4),B.matcap&&o.enable(5),B.envMap&&o.enable(6),B.lightMap&&o.enable(7),B.aoMap&&o.enable(8),B.emissiveMap&&o.enable(9),B.bumpMap&&o.enable(10),B.normalMap&&o.enable(11),B.objectSpaceNormalMap&&o.enable(12),B.tangentSpaceNormalMap&&o.enable(13),B.clearcoat&&o.enable(14),B.clearcoatMap&&o.enable(15),B.clearcoatRoughnessMap&&o.enable(16),B.clearcoatNormalMap&&o.enable(17),B.iridescence&&o.enable(18),B.iridescenceMap&&o.enable(19),B.iridescenceThicknessMap&&o.enable(20),B.displacementMap&&o.enable(21),B.specularMap&&o.enable(22),B.roughnessMap&&o.enable(23),B.metalnessMap&&o.enable(24),B.gradientMap&&o.enable(25),B.alphaMap&&o.enable(26),B.alphaTest&&o.enable(27),B.vertexColors&&o.enable(28),B.vertexAlphas&&o.enable(29),B.vertexUvs&&o.enable(30),B.vertexTangents&&o.enable(31),B.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),B.fog&&o.enable(0),B.useFog&&o.enable(1),B.flatShading&&o.enable(2),B.logarithmicDepthBuffer&&o.enable(3),B.skinning&&o.enable(4),B.morphTargets&&o.enable(5),B.morphNormals&&o.enable(6),B.morphColors&&o.enable(7),B.premultipliedAlpha&&o.enable(8),B.shadowMapEnabled&&o.enable(9),B.physicallyCorrectLights&&o.enable(10),B.doubleSided&&o.enable(11),B.flipSided&&o.enable(12),B.useDepthPacking&&o.enable(13),B.dithering&&o.enable(14),B.specularIntensityMap&&o.enable(15),B.specularColorMap&&o.enable(16),B.transmission&&o.enable(17),B.transmissionMap&&o.enable(18),B.thicknessMap&&o.enable(19),B.sheen&&o.enable(20),B.sheenColorMap&&o.enable(21),B.sheenRoughnessMap&&o.enable(22),B.decodeVideoTexture&&o.enable(23),B.opaque&&o.enable(24),v.push(o.mask)}function y(v){const B=g[v.type];let R;if(B){const X=qe[B];R=xd.clone(X.uniforms)}else R=v.uniforms;return R}function E(v,B){let R;for(let X=0,et=c.length;X<et;X++){const O=c[X];if(O.cacheKey===B){R=O,++R.usedTimes;break}}return R===void 0&&(R=new wm(r,B,v,s),c.push(R)),R}function A(v){if(--v.usedTimes===0){const B=c.indexOf(v);c[B]=c[c.length-1],c.pop(),v.destroy()}}function S(v){l.remove(v)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:S,programs:c,dispose:b}}function Pm(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Lm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ol(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ul(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,g,m,f){let x=r[t];return x===void 0?(x={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:f},r[t]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=p,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=f),t++,x}function o(u,d,p,g,m,f){const x=a(u,d,p,g,m,f);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):e.push(x)}function l(u,d,p,g,m,f){const x=a(u,d,p,g,m,f);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):e.unshift(x)}function c(u,d){e.length>1&&e.sort(u||Lm),n.length>1&&n.sort(d||Ol),i.length>1&&i.sort(d||Ol)}function h(){for(let u=t,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Rm(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ul,r.set(n,[a])):i>=s.length?(a=new Ul,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function zm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new zt};break;case"SpotLight":e={position:new F,direction:new F,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function Im(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Nm=0;function Om(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Um(r,t){const e=new zm,n=Im(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new F);const s=new F,a=new Yt,o=new Yt;function l(h,u){let d=0,p=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,f=0,x=0,_=0,y=0,E=0,A=0,S=0,b=0,v=0;h.sort(Om);const B=u!==!0?Math.PI:1;for(let X=0,et=h.length;X<et;X++){const O=h[X],L=O.color,W=O.intensity,J=O.distance,Z=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=L.r*W*B,p+=L.g*W*B,g+=L.b*W*B;else if(O.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(O.sh.coefficients[V],W);else if(O.isDirectionalLight){const V=e.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*B),O.castShadow){const z=O.shadow,U=n.get(O);U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.directionalShadow[m]=U,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=O.shadow.matrix,E++}i.directional[m]=V,m++}else if(O.isSpotLight){const V=e.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(L).multiplyScalar(W*B),V.distance=J,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,i.spot[x]=V;const z=O.shadow;if(O.map&&(i.spotLightMap[b]=O.map,b++,z.updateMatrices(O),O.castShadow&&v++),i.spotLightMatrix[x]=z.matrix,O.castShadow){const U=n.get(O);U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=Z,S++}x++}else if(O.isRectAreaLight){const V=e.get(O);V.color.copy(L).multiplyScalar(W),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),i.rectArea[_]=V,_++}else if(O.isPointLight){const V=e.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*B),V.distance=O.distance,V.decay=O.decay,O.castShadow){const z=O.shadow,U=n.get(O);U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,U.shadowCameraNear=z.camera.near,U.shadowCameraFar=z.camera.far,i.pointShadow[f]=U,i.pointShadowMap[f]=Z,i.pointShadowMatrix[f]=O.shadow.matrix,A++}i.point[f]=V,f++}else if(O.isHemisphereLight){const V=e.get(O);V.skyColor.copy(O.color).multiplyScalar(W*B),V.groundColor.copy(O.groundColor).multiplyScalar(W*B),i.hemi[y]=V,y++}}_>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==m||R.pointLength!==f||R.spotLength!==x||R.rectAreaLength!==_||R.hemiLength!==y||R.numDirectionalShadows!==E||R.numPointShadows!==A||R.numSpotShadows!==S||R.numSpotMaps!==b)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=_,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+b-v,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=v,R.directionalLength=m,R.pointLength=f,R.spotLength=x,R.rectAreaLength=_,R.hemiLength=y,R.numDirectionalShadows=E,R.numPointShadows=A,R.numSpotShadows=S,R.numSpotMaps=b,i.version=Nm++)}function c(h,u){let d=0,p=0,g=0,m=0,f=0;const x=u.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){const E=h[_];if(E.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),d++}else if(E.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),g++}else if(E.isRectAreaLight){const A=i.rectArea[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(x),o.identity(),a.copy(E.matrixWorld),a.premultiply(x),o.extractRotation(a),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(x),p++}else if(E.isHemisphereLight){const A=i.hemi[f];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(x),f++}}}return{setup:l,setupView:c,state:i}}function Vl(r,t){const e=new Um(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Vm(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Vl(r,t),e.set(s,[l])):a>=o.length?(l=new Vl(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class km extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gm extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function qm(r,t,e){let n=new da;const i=new ct,s=new ct,a=new kt,o=new km({depthPacking:ku}),l=new Gm,c={},h=e.maxTextureSize,u={0:De,1:Bn,2:He},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Hm,fragmentShader:Wm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ne(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc,this.render=function(E,A,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const b=r.getRenderTarget(),v=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),R=r.state;R.setBlending(Mn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let X=0,et=E.length;X<et;X++){const O=E[X],L=O.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const W=L.getFrameExtents();if(i.multiply(W),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/W.x),i.x=s.x*W.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/W.y),i.y=s.y*W.y,L.mapSize.y=s.y)),L.map===null){const Z=this.type!==Zi?{minFilter:ge,magFilter:ge}:{};L.map=new Zn(i.x,i.y,Z),L.map.texture.name=O.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();const J=L.getViewportCount();for(let Z=0;Z<J;Z++){const V=L.getViewport(Z);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),R.viewport(a),L.updateMatrices(O,Z),n=L.getFrustum(),y(A,S,L.camera,O,this.type)}L.isPointLightShadow!==!0&&this.type===Zi&&x(L,S),L.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(b,v,B)};function x(E,A){const S=t.update(m);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Zn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,S,d,m,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,S,p,m,null)}function _(E,A,S,b,v,B){let R=null;const X=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(X!==void 0?R=X:R=S.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const et=R.uuid,O=A.uuid;let L=c[et];L===void 0&&(L={},c[et]=L);let W=L[O];W===void 0&&(W=R.clone(),L[O]=W),R=W}return R.visible=A.visible,R.wireframe=A.wireframe,B===Zi?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaTest,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(S.matrixWorld),R.nearDistance=b,R.farDistance=v),R}function y(E,A,S,b,v){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Zi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const X=t.update(E),et=E.material;if(Array.isArray(et)){const O=X.groups;for(let L=0,W=O.length;L<W;L++){const J=O[L],Z=et[J.materialIndex];if(Z&&Z.visible){const V=_(E,Z,b,S.near,S.far,v);r.renderBufferDirect(S,null,X,V,E,J)}}}else if(et.visible){const O=_(E,et,b,S.near,S.far,v);r.renderBufferDirect(S,null,X,O,E,null)}}const R=E.children;for(let X=0,et=R.length;X<et;X++)y(R[X],A,S,b,v)}}function Xm(r,t,e){const n=e.isWebGL2;function i(){let T=!1;const rt=new kt;let k=null;const ut=new kt(0,0,0,0);return{setMask:function(ht){k!==ht&&!T&&(r.colorMask(ht,ht,ht,ht),k=ht)},setLocked:function(ht){T=ht},setClear:function(ht,Tt,se,Zt,pn){pn===!0&&(ht*=Zt,Tt*=Zt,se*=Zt),rt.set(ht,Tt,se,Zt),ut.equals(rt)===!1&&(r.clearColor(ht,Tt,se,Zt),ut.copy(rt))},reset:function(){T=!1,k=null,ut.set(-1,0,0,0)}}}function s(){let T=!1,rt=null,k=null,ut=null;return{setTest:function(ht){ht?Lt(2929):xt(2929)},setMask:function(ht){rt!==ht&&!T&&(r.depthMask(ht),rt=ht)},setFunc:function(ht){if(k!==ht){if(ht)switch(ht){case hu:r.depthFunc(512);break;case uu:r.depthFunc(519);break;case du:r.depthFunc(513);break;case Xo:r.depthFunc(515);break;case fu:r.depthFunc(514);break;case pu:r.depthFunc(518);break;case mu:r.depthFunc(516);break;case gu:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);k=ht}},setLocked:function(ht){T=ht},setClear:function(ht){ut!==ht&&(r.clearDepth(ht),ut=ht)},reset:function(){T=!1,rt=null,k=null,ut=null}}}function a(){let T=!1,rt=null,k=null,ut=null,ht=null,Tt=null,se=null,Zt=null,pn=null;return{setTest:function(Wt){T||(Wt?Lt(2960):xt(2960))},setMask:function(Wt){rt!==Wt&&!T&&(r.stencilMask(Wt),rt=Wt)},setFunc:function(Wt,je,Se){(k!==Wt||ut!==je||ht!==Se)&&(r.stencilFunc(Wt,je,Se),k=Wt,ut=je,ht=Se)},setOp:function(Wt,je,Se){(Tt!==Wt||se!==je||Zt!==Se)&&(r.stencilOp(Wt,je,Se),Tt=Wt,se=je,Zt=Se)},setLocked:function(Wt){T=Wt},setClear:function(Wt){pn!==Wt&&(r.clearStencil(Wt),pn=Wt)},reset:function(){T=!1,rt=null,k=null,ut=null,ht=null,Tt=null,se=null,Zt=null,pn=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,m=[],f=null,x=!1,_=null,y=null,E=null,A=null,S=null,b=null,v=null,B=!1,R=null,X=null,et=null,O=null,L=null;const W=r.getParameter(35661);let J=!1,Z=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),J=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),J=Z>=2);let z=null,U={};const j=r.getParameter(3088),K=r.getParameter(2978),Q=new kt().fromArray(j),dt=new kt().fromArray(K);function gt(T,rt,k){const ut=new Uint8Array(4),ht=r.createTexture();r.bindTexture(T,ht),r.texParameteri(T,10241,9728),r.texParameteri(T,10240,9728);for(let Tt=0;Tt<k;Tt++)r.texImage2D(rt+Tt,0,6408,1,1,0,6408,5121,ut);return ht}const Y={};Y[3553]=gt(3553,3553,1),Y[34067]=gt(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Lt(2929),l.setFunc(Xo),Qt(!1),_e(ba),Lt(2884),jt(Mn);function Lt(T){d[T]!==!0&&(r.enable(T),d[T]=!0)}function xt(T){d[T]!==!1&&(r.disable(T),d[T]=!1)}function vt(T,rt){return p[T]!==rt?(r.bindFramebuffer(T,rt),p[T]=rt,n&&(T===36009&&(p[36160]=rt),T===36160&&(p[36009]=rt)),!0):!1}function ft(T,rt){let k=m,ut=!1;if(T)if(k=g.get(rt),k===void 0&&(k=[],g.set(rt,k)),T.isWebGLMultipleRenderTargets){const ht=T.texture;if(k.length!==ht.length||k[0]!==36064){for(let Tt=0,se=ht.length;Tt<se;Tt++)k[Tt]=36064+Tt;k.length=ht.length,ut=!0}}else k[0]!==36064&&(k[0]=36064,ut=!0);else k[0]!==1029&&(k[0]=1029,ut=!0);ut&&(e.isWebGL2?r.drawBuffers(k):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function It(T){return f!==T?(r.useProgram(T),f=T,!0):!1}const Dt={[Di]:32774,[Qh]:32778,[tu]:32779};if(n)Dt[La]=32775,Dt[Ra]=32776;else{const T=t.get("EXT_blend_minmax");T!==null&&(Dt[La]=T.MIN_EXT,Dt[Ra]=T.MAX_EXT)}const mt={[eu]:0,[nu]:1,[iu]:768,[Gc]:770,[cu]:776,[au]:774,[ru]:772,[su]:769,[Hc]:771,[lu]:775,[ou]:773};function jt(T,rt,k,ut,ht,Tt,se,Zt){if(T===Mn){x===!0&&(xt(3042),x=!1);return}if(x===!1&&(Lt(3042),x=!0),T!==Kh){if(T!==_||Zt!==B){if((y!==Di||S!==Di)&&(r.blendEquation(32774),y=Di,S=Di),Zt)switch(T){case Si:r.blendFuncSeparate(1,771,1,771);break;case pr:r.blendFunc(1,1);break;case Ta:r.blendFuncSeparate(0,769,0,1);break;case Pa:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Si:r.blendFuncSeparate(770,771,1,771);break;case pr:r.blendFunc(770,1);break;case Ta:r.blendFuncSeparate(0,769,0,1);break;case Pa:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}E=null,A=null,b=null,v=null,_=T,B=Zt}return}ht=ht||rt,Tt=Tt||k,se=se||ut,(rt!==y||ht!==S)&&(r.blendEquationSeparate(Dt[rt],Dt[ht]),y=rt,S=ht),(k!==E||ut!==A||Tt!==b||se!==v)&&(r.blendFuncSeparate(mt[k],mt[ut],mt[Tt],mt[se]),E=k,A=ut,b=Tt,v=se),_=T,B=null}function oe(T,rt){T.side===He?xt(2884):Lt(2884);let k=T.side===De;rt&&(k=!k),Qt(k),T.blending===Si&&T.transparent===!1?jt(Mn):jt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),o.setMask(T.colorWrite);const ut=T.stencilWrite;c.setTest(ut),ut&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Nt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Lt(32926):xt(32926)}function Qt(T){R!==T&&(T?r.frontFace(2304):r.frontFace(2305),R=T)}function _e(T){T!==Zh?(Lt(2884),T!==X&&(T===ba?r.cullFace(1029):T===jh?r.cullFace(1028):r.cullFace(1032))):xt(2884),X=T}function te(T){T!==et&&(J&&r.lineWidth(T),et=T)}function Nt(T,rt,k){T?(Lt(32823),(O!==rt||L!==k)&&(r.polygonOffset(rt,k),O=rt,L=k)):xt(32823)}function we(T){T?Lt(3089):xt(3089)}function Ae(T){T===void 0&&(T=33984+W-1),z!==T&&(r.activeTexture(T),z=T)}function w(T,rt){z===null&&Ae();let k=U[z];k===void 0&&(k={type:void 0,texture:void 0},U[z]=k),(k.type!==T||k.texture!==rt)&&(r.bindTexture(T,rt||Y[T]),k.type=T,k.texture=rt)}function C(){const T=U[z];T!==void 0&&T.type!==void 0&&(r.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function G(){try{r.compressedTexImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function nt(){try{r.texSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _t(){try{r.texStorage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function D(){try{r.texStorage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function $(){try{r.texImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function it(){try{r.texImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function lt(T){Q.equals(T)===!1&&(r.scissor(T.x,T.y,T.z,T.w),Q.copy(T))}function ot(T){dt.equals(T)===!1&&(r.viewport(T.x,T.y,T.z,T.w),dt.copy(T))}function At(T,rt){let k=u.get(rt);k===void 0&&(k=new WeakMap,u.set(rt,k));let ut=k.get(T);ut===void 0&&(ut=r.getUniformBlockIndex(rt,T.name),k.set(T,ut))}function wt(T,rt){const ut=u.get(rt).get(T);h.get(T)!==ut&&(r.uniformBlockBinding(rt,ut,T.__bindingPointIndex),h.set(T,ut))}function Vt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},z=null,U={},p={},g=new WeakMap,m=[],f=null,x=!1,_=null,y=null,E=null,A=null,S=null,b=null,v=null,B=!1,R=null,X=null,et=null,O=null,L=null,Q.set(0,0,r.canvas.width,r.canvas.height),dt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Lt,disable:xt,bindFramebuffer:vt,drawBuffers:ft,useProgram:It,setBlending:jt,setMaterial:oe,setFlipSided:Qt,setCullFace:_e,setLineWidth:te,setPolygonOffset:Nt,setScissorTest:we,activeTexture:Ae,bindTexture:w,unbindTexture:C,compressedTexImage2D:G,texImage2D:$,texImage3D:it,updateUBOMapping:At,uniformBlockBinding:wt,texStorage2D:_t,texStorage3D:D,texSubImage2D:tt,texSubImage3D:nt,compressedTexSubImage2D:at,scissor:lt,viewport:ot,reset:Vt}}function Jm(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,C){return x?new OffscreenCanvas(w,C):is("canvas")}function y(w,C,G,tt){let nt=1;if((w.width>tt||w.height>tt)&&(nt=tt/Math.max(w.width,w.height)),nt<1||C===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const at=C?gr:Math.floor,_t=at(nt*w.width),D=at(nt*w.height);m===void 0&&(m=_(_t,D));const $=G?_(_t,D):m;return $.width=_t,$.height=D,$.getContext("2d").drawImage(w,0,0,_t,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_t+"x"+D+")."),$}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function E(w){return Ko(w.width)&&Ko(w.height)}function A(w){return o?!1:w.wrapS!==Ge||w.wrapT!==Ge||w.minFilter!==ge&&w.minFilter!==Re}function S(w,C){return w.generateMipmaps&&C&&w.minFilter!==ge&&w.minFilter!==Re}function b(w){r.generateMipmap(w)}function v(w,C,G,tt,nt=!1){if(o===!1)return C;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let at=C;return C===6403&&(G===5126&&(at=33326),G===5131&&(at=33325),G===5121&&(at=33321)),C===33319&&(G===5126&&(at=33328),G===5131&&(at=33327),G===5121&&(at=33323)),C===6408&&(G===5126&&(at=34836),G===5131&&(at=34842),G===5121&&(at=tt===Xt&&nt===!1?35907:32856),G===32819&&(at=32854),G===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function B(w,C,G){return S(w,G)===!0||w.isFramebufferTexture&&w.minFilter!==ge&&w.minFilter!==Re?Math.log2(Math.max(C.width,C.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?C.mipmaps.length:1}function R(w){return w===ge||w===za||w===Ia?9728:9729}function X(w){const C=w.target;C.removeEventListener("dispose",X),O(C),C.isVideoTexture&&g.delete(C)}function et(w){const C=w.target;C.removeEventListener("dispose",et),W(C)}function O(w){const C=n.get(w);if(C.__webglInit===void 0)return;const G=w.source,tt=f.get(G);if(tt){const nt=tt[C.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&L(w),Object.keys(tt).length===0&&f.delete(G)}n.remove(w)}function L(w){const C=n.get(w);r.deleteTexture(C.__webglTexture);const G=w.source,tt=f.get(G);delete tt[C.__cacheKey],a.memory.textures--}function W(w){const C=w.texture,G=n.get(w),tt=n.get(C);if(tt.__webglTexture!==void 0&&(r.deleteTexture(tt.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)r.deleteFramebuffer(G.__webglFramebuffer[nt]),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[nt]);else{if(r.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let nt=0;nt<G.__webglColorRenderbuffer.length;nt++)G.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[nt]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let nt=0,at=C.length;nt<at;nt++){const _t=n.get(C[nt]);_t.__webglTexture&&(r.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(C[nt])}n.remove(C),n.remove(w)}let J=0;function Z(){J=0}function V(){const w=J;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),J+=1,w}function z(w){const C=[];return C.push(w.wrapS),C.push(w.wrapT),C.push(w.magFilter),C.push(w.minFilter),C.push(w.anisotropy),C.push(w.internalFormat),C.push(w.format),C.push(w.type),C.push(w.generateMipmaps),C.push(w.premultiplyAlpha),C.push(w.flipY),C.push(w.unpackAlignment),C.push(w.encoding),C.join()}function U(w,C){const G=n.get(w);if(w.isVideoTexture&&we(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const tt=w.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(G,w,C);return}}e.activeTexture(33984+C),e.bindTexture(3553,G.__webglTexture)}function j(w,C){const G=n.get(w);if(w.version>0&&G.__version!==w.version){xt(G,w,C);return}e.activeTexture(33984+C),e.bindTexture(35866,G.__webglTexture)}function K(w,C){const G=n.get(w);if(w.version>0&&G.__version!==w.version){xt(G,w,C);return}e.activeTexture(33984+C),e.bindTexture(32879,G.__webglTexture)}function Q(w,C){const G=n.get(w);if(w.version>0&&G.__version!==w.version){vt(G,w,C);return}e.activeTexture(33984+C),e.bindTexture(34067,G.__webglTexture)}const dt={[Zo]:10497,[Ge]:33071,[jo]:33648},gt={[ge]:9728,[za]:9984,[Ia]:9986,[Re]:9729,[Du]:9985,[yr]:9987};function Y(w,C,G){if(G?(r.texParameteri(w,10242,dt[C.wrapS]),r.texParameteri(w,10243,dt[C.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,dt[C.wrapR]),r.texParameteri(w,10240,gt[C.magFilter]),r.texParameteri(w,10241,gt[C.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(C.wrapS!==Ge||C.wrapT!==Ge)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,R(C.magFilter)),r.texParameteri(w,10241,R(C.minFilter)),C.minFilter!==ge&&C.minFilter!==Re&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(C.type===Hn&&t.has("OES_texture_float_linear")===!1||o===!1&&C.type===ns&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(r.texParameterf(w,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function Lt(w,C){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,C.addEventListener("dispose",X));const tt=C.source;let nt=f.get(tt);nt===void 0&&(nt={},f.set(tt,nt));const at=z(C);if(at!==w.__cacheKey){nt[at]===void 0&&(nt[at]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),nt[at].usedTimes++;const _t=nt[w.__cacheKey];_t!==void 0&&(nt[w.__cacheKey].usedTimes--,_t.usedTimes===0&&L(C)),w.__cacheKey=at,w.__webglTexture=nt[at].texture}return G}function xt(w,C,G){let tt=3553;C.isDataArrayTexture&&(tt=35866),C.isData3DTexture&&(tt=32879);const nt=Lt(w,C),at=C.source;if(e.activeTexture(33984+G),e.bindTexture(tt,w.__webglTexture),at.version!==at.__currentVersion||nt===!0){r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);const _t=A(C)&&E(C.image)===!1;let D=y(C.image,_t,!1,h);D=Ae(C,D);const $=E(D)||o,it=s.convert(C.format,C.encoding);let lt=s.convert(C.type),ot=v(C.internalFormat,it,lt,C.encoding,C.isVideoTexture);Y(tt,C,$);let At;const wt=C.mipmaps,Vt=o&&C.isVideoTexture!==!0,T=at.__currentVersion===void 0||nt===!0,rt=B(C,D,$);if(C.isDepthTexture)ot=6402,o?C.type===Hn?ot=36012:C.type===Gn?ot=33190:C.type===Fi?ot=35056:ot=33189:C.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===qn&&ot===6402&&C.type!==qc&&C.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Gn,lt=s.convert(C.type)),C.format===Ri&&ot===6402&&(ot=34041,C.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Fi,lt=s.convert(C.type))),T&&(Vt?e.texStorage2D(3553,1,ot,D.width,D.height):e.texImage2D(3553,0,ot,D.width,D.height,0,it,lt,null));else if(C.isDataTexture)if(wt.length>0&&$){Vt&&T&&e.texStorage2D(3553,rt,ot,wt[0].width,wt[0].height);for(let k=0,ut=wt.length;k<ut;k++)At=wt[k],Vt?e.texSubImage2D(3553,k,0,0,At.width,At.height,it,lt,At.data):e.texImage2D(3553,k,ot,At.width,At.height,0,it,lt,At.data);C.generateMipmaps=!1}else Vt?(T&&e.texStorage2D(3553,rt,ot,D.width,D.height),e.texSubImage2D(3553,0,0,0,D.width,D.height,it,lt,D.data)):e.texImage2D(3553,0,ot,D.width,D.height,0,it,lt,D.data);else if(C.isCompressedTexture){Vt&&T&&e.texStorage2D(3553,rt,ot,wt[0].width,wt[0].height);for(let k=0,ut=wt.length;k<ut;k++)At=wt[k],C.format!==Xe?it!==null?Vt?e.compressedTexSubImage2D(3553,k,0,0,At.width,At.height,it,At.data):e.compressedTexImage2D(3553,k,ot,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage2D(3553,k,0,0,At.width,At.height,it,lt,At.data):e.texImage2D(3553,k,ot,At.width,At.height,0,it,lt,At.data)}else if(C.isDataArrayTexture)Vt?(T&&e.texStorage3D(35866,rt,ot,D.width,D.height,D.depth),e.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,it,lt,D.data)):e.texImage3D(35866,0,ot,D.width,D.height,D.depth,0,it,lt,D.data);else if(C.isData3DTexture)Vt?(T&&e.texStorage3D(32879,rt,ot,D.width,D.height,D.depth),e.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,it,lt,D.data)):e.texImage3D(32879,0,ot,D.width,D.height,D.depth,0,it,lt,D.data);else if(C.isFramebufferTexture){if(T)if(Vt)e.texStorage2D(3553,rt,ot,D.width,D.height);else{let k=D.width,ut=D.height;for(let ht=0;ht<rt;ht++)e.texImage2D(3553,ht,ot,k,ut,0,it,lt,null),k>>=1,ut>>=1}}else if(wt.length>0&&$){Vt&&T&&e.texStorage2D(3553,rt,ot,wt[0].width,wt[0].height);for(let k=0,ut=wt.length;k<ut;k++)At=wt[k],Vt?e.texSubImage2D(3553,k,0,0,it,lt,At):e.texImage2D(3553,k,ot,it,lt,At);C.generateMipmaps=!1}else Vt?(T&&e.texStorage2D(3553,rt,ot,D.width,D.height),e.texSubImage2D(3553,0,0,0,it,lt,D)):e.texImage2D(3553,0,ot,it,lt,D);S(C,$)&&b(tt),at.__currentVersion=at.version,C.onUpdate&&C.onUpdate(C)}w.__version=C.version}function vt(w,C,G){if(C.image.length!==6)return;const tt=Lt(w,C),nt=C.source;if(e.activeTexture(33984+G),e.bindTexture(34067,w.__webglTexture),nt.version!==nt.__currentVersion||tt===!0){r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);const at=C.isCompressedTexture||C.image[0].isCompressedTexture,_t=C.image[0]&&C.image[0].isDataTexture,D=[];for(let k=0;k<6;k++)!at&&!_t?D[k]=y(C.image[k],!1,!0,c):D[k]=_t?C.image[k].image:C.image[k],D[k]=Ae(C,D[k]);const $=D[0],it=E($)||o,lt=s.convert(C.format,C.encoding),ot=s.convert(C.type),At=v(C.internalFormat,lt,ot,C.encoding),wt=o&&C.isVideoTexture!==!0,Vt=nt.__currentVersion===void 0||tt===!0;let T=B(C,$,it);Y(34067,C,it);let rt;if(at){wt&&Vt&&e.texStorage2D(34067,T,At,$.width,$.height);for(let k=0;k<6;k++){rt=D[k].mipmaps;for(let ut=0;ut<rt.length;ut++){const ht=rt[ut];C.format!==Xe?lt!==null?wt?e.compressedTexSubImage2D(34069+k,ut,0,0,ht.width,ht.height,lt,ht.data):e.compressedTexImage2D(34069+k,ut,At,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?e.texSubImage2D(34069+k,ut,0,0,ht.width,ht.height,lt,ot,ht.data):e.texImage2D(34069+k,ut,At,ht.width,ht.height,0,lt,ot,ht.data)}}}else{rt=C.mipmaps,wt&&Vt&&(rt.length>0&&T++,e.texStorage2D(34067,T,At,D[0].width,D[0].height));for(let k=0;k<6;k++)if(_t){wt?e.texSubImage2D(34069+k,0,0,0,D[k].width,D[k].height,lt,ot,D[k].data):e.texImage2D(34069+k,0,At,D[k].width,D[k].height,0,lt,ot,D[k].data);for(let ut=0;ut<rt.length;ut++){const Tt=rt[ut].image[k].image;wt?e.texSubImage2D(34069+k,ut+1,0,0,Tt.width,Tt.height,lt,ot,Tt.data):e.texImage2D(34069+k,ut+1,At,Tt.width,Tt.height,0,lt,ot,Tt.data)}}else{wt?e.texSubImage2D(34069+k,0,0,0,lt,ot,D[k]):e.texImage2D(34069+k,0,At,lt,ot,D[k]);for(let ut=0;ut<rt.length;ut++){const ht=rt[ut];wt?e.texSubImage2D(34069+k,ut+1,0,0,lt,ot,ht.image[k]):e.texImage2D(34069+k,ut+1,At,lt,ot,ht.image[k])}}}S(C,it)&&b(34067),nt.__currentVersion=nt.version,C.onUpdate&&C.onUpdate(C)}w.__version=C.version}function ft(w,C,G,tt,nt){const at=s.convert(G.format,G.encoding),_t=s.convert(G.type),D=v(G.internalFormat,at,_t,G.encoding);n.get(C).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,D,C.width,C.height,C.depth,0,at,_t,null):e.texImage2D(nt,0,D,C.width,C.height,0,at,_t,null)),e.bindFramebuffer(36160,w),Nt(C)?d.framebufferTexture2DMultisampleEXT(36160,tt,nt,n.get(G).__webglTexture,0,te(C)):r.framebufferTexture2D(36160,tt,nt,n.get(G).__webglTexture,0),e.bindFramebuffer(36160,null)}function It(w,C,G){if(r.bindRenderbuffer(36161,w),C.depthBuffer&&!C.stencilBuffer){let tt=33189;if(G||Nt(C)){const nt=C.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Hn?tt=36012:nt.type===Gn&&(tt=33190));const at=te(C);Nt(C)?d.renderbufferStorageMultisampleEXT(36161,at,tt,C.width,C.height):r.renderbufferStorageMultisample(36161,at,tt,C.width,C.height)}else r.renderbufferStorage(36161,tt,C.width,C.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(C.depthBuffer&&C.stencilBuffer){const tt=te(C);G&&Nt(C)===!1?r.renderbufferStorageMultisample(36161,tt,35056,C.width,C.height):Nt(C)?d.renderbufferStorageMultisampleEXT(36161,tt,35056,C.width,C.height):r.renderbufferStorage(36161,34041,C.width,C.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const tt=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let nt=0;nt<tt.length;nt++){const at=tt[nt],_t=s.convert(at.format,at.encoding),D=s.convert(at.type),$=v(at.internalFormat,_t,D,at.encoding),it=te(C);G&&Nt(C)===!1?r.renderbufferStorageMultisample(36161,it,$,C.width,C.height):Nt(C)?d.renderbufferStorageMultisampleEXT(36161,it,$,C.width,C.height):r.renderbufferStorage(36161,$,C.width,C.height)}}r.bindRenderbuffer(36161,null)}function Dt(w,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,w),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),U(C.depthTexture,0);const tt=n.get(C.depthTexture).__webglTexture,nt=te(C);if(C.depthTexture.format===qn)Nt(C)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,nt):r.framebufferTexture2D(36160,36096,3553,tt,0);else if(C.depthTexture.format===Ri)Nt(C)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,nt):r.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function mt(w){const C=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!C.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Dt(C.__webglFramebuffer,w)}else if(G){C.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,C.__webglFramebuffer[tt]),C.__webglDepthbuffer[tt]=r.createRenderbuffer(),It(C.__webglDepthbuffer[tt],w,!1)}else e.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),It(C.__webglDepthbuffer,w,!1);e.bindFramebuffer(36160,null)}function jt(w,C,G){const tt=n.get(w);C!==void 0&&ft(tt.__webglFramebuffer,w,w.texture,36064,3553),G!==void 0&&mt(w)}function oe(w){const C=w.texture,G=n.get(w),tt=n.get(C);w.addEventListener("dispose",et),w.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=C.version,a.memory.textures++);const nt=w.isWebGLCubeRenderTarget===!0,at=w.isWebGLMultipleRenderTargets===!0,_t=E(w)||o;if(nt){G.__webglFramebuffer=[];for(let D=0;D<6;D++)G.__webglFramebuffer[D]=r.createFramebuffer()}else{if(G.__webglFramebuffer=r.createFramebuffer(),at)if(i.drawBuffers){const D=w.texture;for(let $=0,it=D.length;$<it;$++){const lt=n.get(D[$]);lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Nt(w)===!1){const D=at?C:[C];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let $=0;$<D.length;$++){const it=D[$];G.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer[$]);const lt=s.convert(it.format,it.encoding),ot=s.convert(it.type),At=v(it.internalFormat,lt,ot,it.encoding),wt=te(w);r.renderbufferStorageMultisample(36161,wt,At,w.width,w.height),r.framebufferRenderbuffer(36160,36064+$,36161,G.__webglColorRenderbuffer[$])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),It(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,tt.__webglTexture),Y(34067,C,_t);for(let D=0;D<6;D++)ft(G.__webglFramebuffer[D],w,C,36064,34069+D);S(C,_t)&&b(34067),e.unbindTexture()}else if(at){const D=w.texture;for(let $=0,it=D.length;$<it;$++){const lt=D[$],ot=n.get(lt);e.bindTexture(3553,ot.__webglTexture),Y(3553,lt,_t),ft(G.__webglFramebuffer,w,lt,36064+$,3553),S(lt,_t)&&b(3553)}e.unbindTexture()}else{let D=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?D=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(D,tt.__webglTexture),Y(D,C,_t),ft(G.__webglFramebuffer,w,C,36064,D),S(C,_t)&&b(D),e.unbindTexture()}w.depthBuffer&&mt(w)}function Qt(w){const C=E(w)||o,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let tt=0,nt=G.length;tt<nt;tt++){const at=G[tt];if(S(at,C)){const _t=w.isWebGLCubeRenderTarget?34067:3553,D=n.get(at).__webglTexture;e.bindTexture(_t,D),b(_t),e.unbindTexture()}}}function _e(w){if(o&&w.samples>0&&Nt(w)===!1){const C=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],G=w.width,tt=w.height;let nt=16384;const at=[],_t=w.stencilBuffer?33306:36096,D=n.get(w),$=w.isWebGLMultipleRenderTargets===!0;if($)for(let it=0;it<C.length;it++)e.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+it,36161,null),e.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+it,3553,null,0);e.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,D.__webglFramebuffer);for(let it=0;it<C.length;it++){at.push(36064+it),w.depthBuffer&&at.push(_t);const lt=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(lt===!1&&(w.depthBuffer&&(nt|=256),w.stencilBuffer&&(nt|=1024)),$&&r.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[it]),lt===!0&&(r.invalidateFramebuffer(36008,[_t]),r.invalidateFramebuffer(36009,[_t])),$){const ot=n.get(C[it]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ot,0)}r.blitFramebuffer(0,0,G,tt,0,0,G,tt,nt,9728),p&&r.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),$)for(let it=0;it<C.length;it++){e.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+it,36161,D.__webglColorRenderbuffer[it]);const lt=n.get(C[it]).__webglTexture;e.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+it,3553,lt,0)}e.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function te(w){return Math.min(u,w.samples)}function Nt(w){const C=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function we(w){const C=a.render.frame;g.get(w)!==C&&(g.set(w,C),w.update())}function Ae(w,C){const G=w.encoding,tt=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===$o||G!==Yn&&(G===Xt?o===!1?t.has("EXT_sRGB")===!0&&tt===Xe?(w.format=$o,w.minFilter=Re,w.generateMipmaps=!1):C=Yc.sRGBToLinear(C):(tt!==Xe||nt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),C}this.allocateTextureUnit=V,this.resetTextureUnits=Z,this.setTexture2D=U,this.setTexture2DArray=j,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=jt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Nt}function Ym(r,t,e){const n=e.isWebGL2;function i(s,a=null){let o;if(s===Jn)return 5121;if(s===Su)return 32819;if(s===Fu)return 32820;if(s===Mu)return 5120;if(s===Bu)return 5122;if(s===qc)return 5123;if(s===wu)return 5124;if(s===Gn)return 5125;if(s===Hn)return 5126;if(s===ns)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===bu)return 6406;if(s===Xe)return 6408;if(s===Pu)return 6409;if(s===Lu)return 6410;if(s===qn)return 6402;if(s===Ri)return 34041;if(s===Ru)return 6403;if(s===Tu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===$o)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===zu)return 36244;if(s===Iu)return 33319;if(s===Nu)return 33320;if(s===Ou)return 36249;if(s===Ur||s===Vr||s===kr||s===Gr)if(a===Xt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ur)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ur)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Na||s===Oa||s===Ua||s===Va)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Na)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Oa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ua)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Va)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ka||s===Ga)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ka)return a===Xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ga)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ha||s===Wa||s===qa||s===Xa||s===Ja||s===Ya||s===Za||s===ja||s===$a||s===Ka||s===Qa||s===tl||s===el||s===nl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ha)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wa)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qa)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xa)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ja)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ya)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Za)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ja)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$a)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ka)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qa)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tl)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===el)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nl)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===il)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===il)return a===Xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Fi?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Zm extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Is extends ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jm={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const m of t.hand.values()){const f=e.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const _=new Is;_.matrixAutoUpdate=!1,_.visible=!1,c.joints[m.jointName]=_,c.add(_)}const x=c.joints[m.jointName];f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class $m extends Ie{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:qn,h!==qn&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qn&&(n=Gn),n===void 0&&h===Ri&&(n=Fi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ge,this.minFilter=l!==void 0?l:ge,this.flipY=!1,this.generateMipmaps=!1}}class Km extends Kn{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,c=null,h=null,u=null,d=null,p=null;const g=e.getContextAttributes();let m=null,f=null;const x=[],_=[],y=new Ce;y.layers.enable(1),y.viewport=new kt;const E=new Ce;E.layers.enable(2),E.viewport=new kt;const A=[y,E],S=new Zm;S.layers.enable(1),S.layers.enable(2);let b=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let U=x[z];return U===void 0&&(U=new mo,x[z]=U),U.getTargetRaySpace()},this.getControllerGrip=function(z){let U=x[z];return U===void 0&&(U=new mo,x[z]=U),U.getGripSpace()},this.getHand=function(z){let U=x[z];return U===void 0&&(U=new mo,x[z]=U),U.getHandSpace()};function B(z){const U=_.indexOf(z.inputSource);if(U===-1)return;const j=x[U];j!==void 0&&j.dispatchEvent({type:z.type,data:z.inputSource})}function R(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",X);for(let z=0;z<x.length;z++){const U=_[z];U!==null&&(_[z]=null,x[z].disconnect(U))}b=null,v=null,t.setRenderTarget(m),d=null,u=null,h=null,i=null,f=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",R),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:d}),f=new Zn(d.framebufferWidth,d.framebufferHeight,{format:Xe,type:Jn,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,j=null,K=null;g.depth&&(K=g.stencil?35056:33190,U=g.stencil?Ri:qn,j=g.stencil?Fi:Gn);const Q={colorFormat:32856,depthFormat:K,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(Q),i.updateRenderState({layers:[u]}),f=new Zn(u.textureWidth,u.textureHeight,{format:Xe,type:Jn,depthTexture:new $m(u.textureWidth,u.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const dt=t.properties.get(f);dt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function X(z){for(let U=0;U<z.removed.length;U++){const j=z.removed[U],K=_.indexOf(j);K>=0&&(_[K]=null,x[K].dispatchEvent({type:"disconnected",data:j}))}for(let U=0;U<z.added.length;U++){const j=z.added[U];let K=_.indexOf(j);if(K===-1){for(let dt=0;dt<x.length;dt++)if(dt>=_.length){_.push(j),K=dt;break}else if(_[dt]===null){_[dt]=j,K=dt;break}if(K===-1)break}const Q=x[K];Q&&Q.dispatchEvent({type:"connected",data:j})}}const et=new F,O=new F;function L(z,U,j){et.setFromMatrixPosition(U.matrixWorld),O.setFromMatrixPosition(j.matrixWorld);const K=et.distanceTo(O),Q=U.projectionMatrix.elements,dt=j.projectionMatrix.elements,gt=Q[14]/(Q[10]-1),Y=Q[14]/(Q[10]+1),Lt=(Q[9]+1)/Q[5],xt=(Q[9]-1)/Q[5],vt=(Q[8]-1)/Q[0],ft=(dt[8]+1)/dt[0],It=gt*vt,Dt=gt*ft,mt=K/(-vt+ft),jt=mt*-vt;U.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(jt),z.translateZ(mt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const oe=gt+mt,Qt=Y+mt,_e=It-jt,te=Dt+(K-jt),Nt=Lt*Y/Qt*oe,we=xt*Y/Qt*oe;z.projectionMatrix.makePerspective(_e,te,Nt,we,oe,Qt)}function W(z,U){U===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(U.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;S.near=E.near=y.near=z.near,S.far=E.far=y.far=z.far,(b!==S.near||v!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,v=S.far);const U=z.parent,j=S.cameras;W(S,U);for(let Q=0;Q<j.length;Q++)W(j[Q],U);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),z.matrix.copy(S.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const K=z.children;for(let Q=0,dt=K.length;Q<dt;Q++)K[Q].updateMatrixWorld(!0);j.length===2?L(S,y,E):S.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(z){u!==null&&(u.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let J=null;function Z(z,U){if(c=U.getViewerPose(l||a),p=U,c!==null){const j=c.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let K=!1;j.length!==S.cameras.length&&(S.cameras.length=0,K=!0);for(let Q=0;Q<j.length;Q++){const dt=j[Q];let gt=null;if(d!==null)gt=d.getViewport(dt);else{const Lt=h.getViewSubImage(u,dt);gt=Lt.viewport,Q===0&&(t.setRenderTargetTextures(f,Lt.colorTexture,u.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(f))}let Y=A[Q];Y===void 0&&(Y=new Ce,Y.layers.enable(Q),Y.viewport=new kt,A[Q]=Y),Y.matrix.fromArray(dt.transform.matrix),Y.projectionMatrix.fromArray(dt.projectionMatrix),Y.viewport.set(gt.x,gt.y,gt.width,gt.height),Q===0&&S.matrix.copy(Y.matrix),K===!0&&S.cameras.push(Y)}}for(let j=0;j<x.length;j++){const K=_[j],Q=x[j];K!==null&&Q!==void 0&&Q.update(K,U,l||a)}J&&J(z,U),p=null}const V=new eh;V.setAnimationLoop(Z),this.setAnimationLoop=function(z){J=z},this.dispose=function(){}}}function Qm(r,t){function e(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,x,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),c(m,f)):f.isMeshStandardMaterial?(i(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,y)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?o(m,f,x,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const E=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*E}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let _;f.map?_=f.map:f.specularMap?_=f.specularMap:f.displacementMap?_=f.displacementMap:f.normalMap?_=f.normalMap:f.bumpMap?_=f.bumpMap:f.roughnessMap?_=f.roughnessMap:f.metalnessMap?_=f.metalnessMap:f.alphaMap?_=f.alphaMap:f.emissiveMap?_=f.emissiveMap:f.clearcoatMap?_=f.clearcoatMap:f.clearcoatNormalMap?_=f.clearcoatNormalMap:f.clearcoatRoughnessMap?_=f.clearcoatRoughnessMap:f.iridescenceMap?_=f.iridescenceMap:f.iridescenceThicknessMap?_=f.iridescenceThicknessMap:f.specularIntensityMap?_=f.specularIntensityMap:f.specularColorMap?_=f.specularColorMap:f.transmissionMap?_=f.transmissionMap:f.thicknessMap?_=f.thicknessMap:f.sheenColorMap?_=f.sheenColorMap:f.sheenRoughnessMap&&(_=f.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let y;f.aoMap?y=f.aoMap:f.lightMap&&(y=f.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,x,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=_*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===De&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function tg(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(35375):0;function l(_,y){const E=y.program;n.uniformBlockBinding(_,E)}function c(_,y){let E=i[_.id];E===void 0&&(g(_),E=h(_),i[_.id]=E,_.addEventListener("dispose",f));const A=y.program;n.updateUBOMapping(_,A);const S=t.render.frame;s[_.id]!==S&&(d(_),s[_.id]=S)}function h(_){const y=u();_.__bindingPointIndex=y;const E=r.createBuffer(),A=_.__size,S=_.usage;return r.bindBuffer(35345,E),r.bufferData(35345,A,S),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,E),E}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],E=_.uniforms,A=_.__cache;r.bindBuffer(35345,y);for(let S=0,b=E.length;S<b;S++){const v=E[S];if(p(v,S,A)===!0){const B=v.value,R=v.__offset;typeof B=="number"?(v.__data[0]=B,r.bufferSubData(35345,R,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):B.toArray(v.__data),r.bufferSubData(35345,R,v.__data))}}r.bindBuffer(35345,null)}function p(_,y,E){const A=_.value;if(E[y]===void 0)return typeof A=="number"?E[y]=A:E[y]=A.clone(),!0;if(typeof A=="number"){if(E[y]!==A)return E[y]=A,!0}else{const S=E[y];if(S.equals(A)===!1)return S.copy(A),!0}return!1}function g(_){const y=_.uniforms;let E=0;const A=16;let S=0;for(let b=0,v=y.length;b<v;b++){const B=y[b],R=m(B);if(B.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,b>0){S=E%A;const X=A-S;S!==0&&X-R.boundary<0&&(E+=A-S,B.__offset=E)}E+=R.storage}return S=E%A,S>0&&(E+=A-S),_.__size=E,_.__cache={},this}function m(_){const y=_.value,E={boundary:0,storage:0};return typeof y=="number"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function f(_){const y=_.target;y.removeEventListener("dispose",f);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function x(){for(const _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:l,update:c,dispose:x}}function eg(){const r=is("canvas");return r.style.display="block",r}function oh(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:eg(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Yn,this.physicallyCorrectLights=!1,this.toneMapping=cn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let f=!1,x=0,_=0,y=null,E=-1,A=null;const S=new kt,b=new kt;let v=null,B=t.width,R=t.height,X=1,et=null,O=null;const L=new kt(0,0,B,R),W=new kt(0,0,B,R);let J=!1;const Z=new da;let V=!1,z=!1,U=null;const j=new Yt,K=new ct,Q=new F,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return y===null?X:1}let Y=e;function Lt(M,N){for(let H=0;H<M.length;H++){const I=M[H],q=t.getContext(I,N);if(q!==null)return q}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oa}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),Y===null){const N=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&N.shift(),Y=Lt(N,M),Y===null)throw Lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xt,vt,ft,It,Dt,mt,jt,oe,Qt,_e,te,Nt,we,Ae,w,C,G,tt,nt,at,_t,D,$,it;function lt(){xt=new d0(Y),vt=new r0(Y,xt,r),xt.init(vt),D=new Ym(Y,xt,vt),ft=new Xm(Y,xt,vt),It=new m0,Dt=new Pm,mt=new Jm(Y,xt,ft,Dt,vt,D,It),jt=new a0(m),oe=new u0(m),Qt=new Dd(Y,vt),$=new i0(Y,xt,Qt,vt),_e=new f0(Y,Qt,It,$),te=new A0(Y,_e,Qt,It),nt=new _0(Y,vt,mt),C=new o0(Dt),Nt=new Tm(m,jt,oe,xt,vt,$,C),we=new Qm(m,Dt),Ae=new Rm,w=new Vm(xt,vt),tt=new n0(m,jt,ft,te,h,a),G=new qm(m,te,vt),it=new tg(Y,It,vt,ft),at=new s0(Y,xt,It,vt),_t=new p0(Y,xt,It,vt),It.programs=Nt.programs,m.capabilities=vt,m.extensions=xt,m.properties=Dt,m.renderLists=Ae,m.shadowMap=G,m.state=ft,m.info=It}lt();const ot=new Km(m,Y);this.xr=ot,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const M=xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(B,R,!1))},this.getSize=function(M){return M.set(B,R)},this.setSize=function(M,N,H){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,R=N,t.width=Math.floor(M*X),t.height=Math.floor(N*X),H!==!1&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(B*X,R*X).floor()},this.setDrawingBufferSize=function(M,N,H){B=M,R=N,X=H,t.width=Math.floor(M*H),t.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(L)},this.setViewport=function(M,N,H,I){M.isVector4?L.set(M.x,M.y,M.z,M.w):L.set(M,N,H,I),ft.viewport(S.copy(L).multiplyScalar(X).floor())},this.getScissor=function(M){return M.copy(W)},this.setScissor=function(M,N,H,I){M.isVector4?W.set(M.x,M.y,M.z,M.w):W.set(M,N,H,I),ft.scissor(b.copy(W).multiplyScalar(X).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(M){ft.setScissorTest(J=M)},this.setOpaqueSort=function(M){et=M},this.setTransparentSort=function(M){O=M},this.getClearColor=function(M){return M.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(M=!0,N=!0,H=!0){let I=0;M&&(I|=16384),N&&(I|=256),H&&(I|=1024),Y.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),Ae.dispose(),w.dispose(),Dt.dispose(),jt.dispose(),oe.dispose(),te.dispose(),$.dispose(),it.dispose(),Nt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Tt),ot.removeEventListener("sessionend",se),U&&(U.dispose(),U=null),Zt.stop()};function At(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const M=It.autoReset,N=G.enabled,H=G.autoUpdate,I=G.needsUpdate,q=G.type;lt(),It.autoReset=M,G.enabled=N,G.autoUpdate=H,G.needsUpdate=I,G.type=q}function Vt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function T(M){const N=M.target;N.removeEventListener("dispose",T),rt(N)}function rt(M){k(M),Dt.remove(M)}function k(M){const N=Dt.get(M).programs;N!==void 0&&(N.forEach(function(H){Nt.releaseProgram(H)}),M.isShaderMaterial&&Nt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,I,q,pt){N===null&&(N=dt);const Et=q.isMesh&&q.matrixWorld.determinant()<0,Mt=qh(M,N,H,I,q);ft.setMaterial(I,Et);let Ct=H.index;const Ot=H.attributes.position;if(Ct===null){if(Ot===void 0||Ot.count===0)return}else if(Ct.count===0)return;let Ft=1;I.wireframe===!0&&(Ct=_e.getWireframeAttribute(H),Ft=2),$.setup(q,I,Mt,H,Ct);let bt,qt=at;Ct!==null&&(bt=Qt.get(Ct),qt=_t,qt.setIndex(bt));const Fn=Ct!==null?Ct.count:Ot.count,ei=H.drawRange.start*Ft,ni=H.drawRange.count*Ft,We=pt!==null?pt.start*Ft:0,Rt=pt!==null?pt.count*Ft:1/0,ii=Math.max(ei,We),$t=Math.min(Fn,ei+ni,We+Rt)-1,Fe=Math.max(0,$t-ii+1);if(Fe!==0){if(q.isMesh)I.wireframe===!0?(ft.setLineWidth(I.wireframeLinewidth*gt()),qt.setMode(1)):qt.setMode(4);else if(q.isLine){let mn=I.linewidth;mn===void 0&&(mn=1),ft.setLineWidth(mn*gt()),q.isLineSegments?qt.setMode(1):q.isLineLoop?qt.setMode(2):qt.setMode(3)}else q.isPoints?qt.setMode(0):q.isSprite&&qt.setMode(4);if(q.isInstancedMesh)qt.renderInstances(ii,Fe,q.count);else if(H.isInstancedBufferGeometry){const mn=Math.min(H.instanceCount,H._maxInstanceCount);qt.renderInstances(ii,Fe,mn)}else qt.render(ii,Fe)}},this.compile=function(M,N){function H(I,q,pt){I.transparent===!0&&I.side===He?(I.side=De,I.needsUpdate=!0,ms(I,q,pt),I.side=Bn,I.needsUpdate=!0,ms(I,q,pt),I.side=He):ms(I,q,pt)}d=w.get(M),d.init(),g.push(d),M.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(m.physicallyCorrectLights),M.traverse(function(I){const q=I.material;if(q)if(Array.isArray(q))for(let pt=0;pt<q.length;pt++){const Et=q[pt];H(Et,M,I)}else H(q,M,I)}),g.pop(),d=null};let ut=null;function ht(M){ut&&ut(M)}function Tt(){Zt.stop()}function se(){Zt.start()}const Zt=new eh;Zt.setAnimationLoop(ht),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(M){ut=M,ot.setAnimationLoop(M),M===null?Zt.stop():Zt.start()},ot.addEventListener("sessionstart",Tt),ot.addEventListener("sessionend",se),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(N),N=ot.getCamera()),M.isScene===!0&&M.onBeforeRender(m,M,N,y),d=w.get(M,g.length),d.init(),g.push(d),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(j),z=this.localClippingEnabled,V=C.init(this.clippingPlanes,z,N),u=Ae.get(M,p.length),u.init(),p.push(u),pn(M,N,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(et,O),V===!0&&C.beginShadows();const H=d.state.shadowsArray;if(G.render(H,M,N),V===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(u,M),d.setupLights(m.physicallyCorrectLights),N.isArrayCamera){const I=N.cameras;for(let q=0,pt=I.length;q<pt;q++){const Et=I[q];Wt(u,M,Et,Et.viewport)}}else Wt(u,M,N);y!==null&&(mt.updateMultisampleRenderTarget(y),mt.updateRenderTargetMipmap(y)),M.isScene===!0&&M.onAfterRender(m,M,N),$.resetDefaultState(),E=-1,A=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function pn(M,N,H,I){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){I&&Q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);const Et=te.update(M),Mt=M.material;Mt.visible&&u.push(M,Et,Mt,H,Q.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==It.render.frame&&(M.skeleton.update(),M.skeleton.frame=It.render.frame),!M.frustumCulled||Z.intersectsObject(M))){I&&Q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);const Et=te.update(M),Mt=M.material;if(Array.isArray(Mt)){const Ct=Et.groups;for(let Ot=0,Ft=Ct.length;Ot<Ft;Ot++){const bt=Ct[Ot],qt=Mt[bt.materialIndex];qt&&qt.visible&&u.push(M,Et,qt,H,Q.z,bt)}}else Mt.visible&&u.push(M,Et,Mt,H,Q.z,null)}}const pt=M.children;for(let Et=0,Mt=pt.length;Et<Mt;Et++)pn(pt[Et],N,H,I)}function Wt(M,N,H,I){const q=M.opaque,pt=M.transmissive,Et=M.transparent;d.setupLightsView(H),pt.length>0&&je(q,N,H),I&&ft.viewport(S.copy(I)),q.length>0&&Se(q,N,H),pt.length>0&&Se(pt,N,H),Et.length>0&&Se(Et,N,H),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function je(M,N,H){const I=vt.isWebGL2;U===null&&(U=new Zn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?ns:Jn,minFilter:yr,samples:I&&s===!0?4:0})),m.getDrawingBufferSize(K),I?U.setSize(K.x,K.y):U.setSize(gr(K.x),gr(K.y));const q=m.getRenderTarget();m.setRenderTarget(U),m.clear();const pt=m.toneMapping;m.toneMapping=cn,Se(M,N,H),m.toneMapping=pt,mt.updateMultisampleRenderTarget(U),mt.updateRenderTargetMipmap(U),m.setRenderTarget(q)}function Se(M,N,H){const I=N.isScene===!0?N.overrideMaterial:null;for(let q=0,pt=M.length;q<pt;q++){const Et=M[q],Mt=Et.object,Ct=Et.geometry,Ot=I===null?Et.material:I,Ft=Et.group;Mt.layers.test(H.layers)&&Wh(Mt,N,H,Ct,Ot,Ft)}}function Wh(M,N,H,I,q,pt){M.onBeforeRender(m,N,H,I,q,pt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(m,N,H,I,M,pt),q.transparent===!0&&q.side===He?(q.side=De,q.needsUpdate=!0,m.renderBufferDirect(H,N,I,q,M,pt),q.side=Bn,q.needsUpdate=!0,m.renderBufferDirect(H,N,I,q,M,pt),q.side=He):m.renderBufferDirect(H,N,I,q,M,pt),M.onAfterRender(m,N,H,I,q,pt)}function ms(M,N,H){N.isScene!==!0&&(N=dt);const I=Dt.get(M),q=d.state.lights,pt=d.state.shadowsArray,Et=q.state.version,Mt=Nt.getParameters(M,q.state,pt,N,H),Ct=Nt.getProgramCacheKey(Mt);let Ot=I.programs;I.environment=M.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(M.isMeshStandardMaterial?oe:jt).get(M.envMap||I.environment),Ot===void 0&&(M.addEventListener("dispose",T),Ot=new Map,I.programs=Ot);let Ft=Ot.get(Ct);if(Ft!==void 0){if(I.currentProgram===Ft&&I.lightsStateVersion===Et)return Sa(M,Mt),Ft}else Mt.uniforms=Nt.getUniforms(M),M.onBuild(H,Mt,m),M.onBeforeCompile(Mt,m),Ft=Nt.acquireProgram(Mt,Ct),Ot.set(Ct,Ft),I.uniforms=Mt.uniforms;const bt=I.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(bt.clippingPlanes=C.uniform),Sa(M,Mt),I.needsLights=Jh(M),I.lightsStateVersion=Et,I.needsLights&&(bt.ambientLightColor.value=q.state.ambient,bt.lightProbe.value=q.state.probe,bt.directionalLights.value=q.state.directional,bt.directionalLightShadows.value=q.state.directionalShadow,bt.spotLights.value=q.state.spot,bt.spotLightShadows.value=q.state.spotShadow,bt.rectAreaLights.value=q.state.rectArea,bt.ltc_1.value=q.state.rectAreaLTC1,bt.ltc_2.value=q.state.rectAreaLTC2,bt.pointLights.value=q.state.point,bt.pointLightShadows.value=q.state.pointShadow,bt.hemisphereLights.value=q.state.hemi,bt.directionalShadowMap.value=q.state.directionalShadowMap,bt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,bt.spotShadowMap.value=q.state.spotShadowMap,bt.spotLightMatrix.value=q.state.spotLightMatrix,bt.spotLightMap.value=q.state.spotLightMap,bt.pointShadowMap.value=q.state.pointShadowMap,bt.pointShadowMatrix.value=q.state.pointShadowMatrix);const qt=Ft.getUniforms(),Fn=ur.seqWithValue(qt.seq,bt);return I.currentProgram=Ft,I.uniformsList=Fn,Ft}function Sa(M,N){const H=Dt.get(M);H.outputEncoding=N.outputEncoding,H.instancing=N.instancing,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function qh(M,N,H,I,q){N.isScene!==!0&&(N=dt),mt.resetTextureUnits();const pt=N.fog,Et=I.isMeshStandardMaterial?N.environment:null,Mt=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Yn,Ct=(I.isMeshStandardMaterial?oe:jt).get(I.envMap||Et),Ot=I.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ft=!!I.normalMap&&!!H.attributes.tangent,bt=!!H.morphAttributes.position,qt=!!H.morphAttributes.normal,Fn=!!H.morphAttributes.color,ei=I.toneMapped?m.toneMapping:cn,ni=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,We=ni!==void 0?ni.length:0,Rt=Dt.get(I),ii=d.state.lights;if(V===!0&&(z===!0||M!==A)){const ve=M===A&&I.id===E;C.setState(I,M,ve)}let $t=!1;I.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ii.state.version||Rt.outputEncoding!==Mt||q.isInstancedMesh&&Rt.instancing===!1||!q.isInstancedMesh&&Rt.instancing===!0||q.isSkinnedMesh&&Rt.skinning===!1||!q.isSkinnedMesh&&Rt.skinning===!0||Rt.envMap!==Ct||I.fog===!0&&Rt.fog!==pt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==C.numPlanes||Rt.numIntersection!==C.numIntersection)||Rt.vertexAlphas!==Ot||Rt.vertexTangents!==Ft||Rt.morphTargets!==bt||Rt.morphNormals!==qt||Rt.morphColors!==Fn||Rt.toneMapping!==ei||vt.isWebGL2===!0&&Rt.morphTargetsCount!==We)&&($t=!0):($t=!0,Rt.__version=I.version);let Fe=Rt.currentProgram;$t===!0&&(Fe=ms(I,N,q));let mn=!1,Oi=!1,Ir=!1;const de=Fe.getUniforms(),bn=Rt.uniforms;if(ft.useProgram(Fe.program)&&(mn=!0,Oi=!0,Ir=!0),I.id!==E&&(E=I.id,Oi=!0),mn||A!==M){if(de.setValue(Y,"projectionMatrix",M.projectionMatrix),vt.logarithmicDepthBuffer&&de.setValue(Y,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),A!==M&&(A=M,Oi=!0,Ir=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const ve=de.map.cameraPosition;ve!==void 0&&ve.setValue(Y,Q.setFromMatrixPosition(M.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&de.setValue(Y,"isOrthographic",M.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||q.isSkinnedMesh)&&de.setValue(Y,"viewMatrix",M.matrixWorldInverse)}if(q.isSkinnedMesh){de.setOptional(Y,q,"bindMatrix"),de.setOptional(Y,q,"bindMatrixInverse");const ve=q.skeleton;ve&&(vt.floatVertexTextures?(ve.boneTexture===null&&ve.computeBoneTexture(),de.setValue(Y,"boneTexture",ve.boneTexture,mt),de.setValue(Y,"boneTextureSize",ve.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Nr=H.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0&&vt.isWebGL2===!0)&&nt.update(q,H,I,Fe),(Oi||Rt.receiveShadow!==q.receiveShadow)&&(Rt.receiveShadow=q.receiveShadow,de.setValue(Y,"receiveShadow",q.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(bn.envMap.value=Ct,bn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Oi&&(de.setValue(Y,"toneMappingExposure",m.toneMappingExposure),Rt.needsLights&&Xh(bn,Ir),pt&&I.fog===!0&&we.refreshFogUniforms(bn,pt),we.refreshMaterialUniforms(bn,I,X,R,U),ur.upload(Y,Rt.uniformsList,bn,mt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ur.upload(Y,Rt.uniformsList,bn,mt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&de.setValue(Y,"center",q.center),de.setValue(Y,"modelViewMatrix",q.modelViewMatrix),de.setValue(Y,"normalMatrix",q.normalMatrix),de.setValue(Y,"modelMatrix",q.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const ve=I.uniformsGroups;for(let Or=0,Yh=ve.length;Or<Yh;Or++)if(vt.isWebGL2){const Fa=ve[Or];it.update(Fa,Fe),it.bind(Fa,Fe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fe}function Xh(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Jh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(M,N,H){Dt.get(M.texture).__webglTexture=N,Dt.get(M.depthTexture).__webglTexture=H;const I=Dt.get(M);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=H===void 0,I.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,N){const H=Dt.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,H=0){y=M,x=N,_=H;let I=!0;if(M){const Ct=Dt.get(M);Ct.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(36160,null),I=!1):Ct.__webglFramebuffer===void 0?mt.setupRenderTarget(M):Ct.__hasExternalTextures&&mt.rebindTextures(M,Dt.get(M.texture).__webglTexture,Dt.get(M.depthTexture).__webglTexture)}let q=null,pt=!1,Et=!1;if(M){const Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture)&&(Et=!0);const Ot=Dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(q=Ot[N],pt=!0):vt.isWebGL2&&M.samples>0&&mt.useMultisampledRTT(M)===!1?q=Dt.get(M).__webglMultisampledFramebuffer:q=Ot,S.copy(M.viewport),b.copy(M.scissor),v=M.scissorTest}else S.copy(L).multiplyScalar(X).floor(),b.copy(W).multiplyScalar(X).floor(),v=J;if(ft.bindFramebuffer(36160,q)&&vt.drawBuffers&&I&&ft.drawBuffers(M,q),ft.viewport(S),ft.scissor(b),ft.setScissorTest(v),pt){const Ct=Dt.get(M.texture);Y.framebufferTexture2D(36160,36064,34069+N,Ct.__webglTexture,H)}else if(Et){const Ct=Dt.get(M.texture),Ot=N||0;Y.framebufferTextureLayer(36160,36064,Ct.__webglTexture,H||0,Ot)}E=-1},this.readRenderTargetPixels=function(M,N,H,I,q,pt,Et){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et]),Mt){ft.bindFramebuffer(36160,Mt);try{const Ct=M.texture,Ot=Ct.format,Ft=Ct.type;if(Ot!==Xe&&D.convert(Ot)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const bt=Ft===ns&&(xt.has("EXT_color_buffer_half_float")||vt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Ft!==Jn&&D.convert(Ft)!==Y.getParameter(35738)&&!(Ft===Hn&&(vt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-I&&H>=0&&H<=M.height-q&&Y.readPixels(N,H,I,q,D.convert(Ot),D.convert(Ft),pt)}finally{const Ct=y!==null?Dt.get(y).__webglFramebuffer:null;ft.bindFramebuffer(36160,Ct)}}},this.copyFramebufferToTexture=function(M,N,H=0){const I=Math.pow(2,-H),q=Math.floor(N.image.width*I),pt=Math.floor(N.image.height*I);mt.setTexture2D(N,0),Y.copyTexSubImage2D(3553,H,0,0,M.x,M.y,q,pt),ft.unbindTexture()},this.copyTextureToTexture=function(M,N,H,I=0){const q=N.image.width,pt=N.image.height,Et=D.convert(H.format),Mt=D.convert(H.type);mt.setTexture2D(H,0),Y.pixelStorei(37440,H.flipY),Y.pixelStorei(37441,H.premultiplyAlpha),Y.pixelStorei(3317,H.unpackAlignment),N.isDataTexture?Y.texSubImage2D(3553,I,M.x,M.y,q,pt,Et,Mt,N.image.data):N.isCompressedTexture?Y.compressedTexSubImage2D(3553,I,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,Et,N.mipmaps[0].data):Y.texSubImage2D(3553,I,M.x,M.y,Et,Mt,N.image),I===0&&H.generateMipmaps&&Y.generateMipmap(3553),ft.unbindTexture()},this.copyTextureToTexture3D=function(M,N,H,I,q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=M.max.x-M.min.x+1,Et=M.max.y-M.min.y+1,Mt=M.max.z-M.min.z+1,Ct=D.convert(I.format),Ot=D.convert(I.type);let Ft;if(I.isData3DTexture)mt.setTexture3D(I,0),Ft=32879;else if(I.isDataArrayTexture)mt.setTexture2DArray(I,0),Ft=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,I.flipY),Y.pixelStorei(37441,I.premultiplyAlpha),Y.pixelStorei(3317,I.unpackAlignment);const bt=Y.getParameter(3314),qt=Y.getParameter(32878),Fn=Y.getParameter(3316),ei=Y.getParameter(3315),ni=Y.getParameter(32877),We=H.isCompressedTexture?H.mipmaps[0]:H.image;Y.pixelStorei(3314,We.width),Y.pixelStorei(32878,We.height),Y.pixelStorei(3316,M.min.x),Y.pixelStorei(3315,M.min.y),Y.pixelStorei(32877,M.min.z),H.isDataTexture||H.isData3DTexture?Y.texSubImage3D(Ft,q,N.x,N.y,N.z,pt,Et,Mt,Ct,Ot,We.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ft,q,N.x,N.y,N.z,pt,Et,Mt,Ct,We.data)):Y.texSubImage3D(Ft,q,N.x,N.y,N.z,pt,Et,Mt,Ct,Ot,We),Y.pixelStorei(3314,bt),Y.pixelStorei(32878,qt),Y.pixelStorei(3316,Fn),Y.pixelStorei(3315,ei),Y.pixelStorei(32877,ni),q===0&&I.generateMipmaps&&Y.generateMipmap(Ft),ft.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?mt.setTextureCube(M,0):M.isData3DTexture?mt.setTexture3D(M,0):M.isDataArrayTexture?mt.setTexture2DArray(M,0):mt.setTexture2D(M,0),ft.unbindTexture()},this.resetState=function(){x=0,_=0,y=null,ft.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ng extends oh{}ng.prototype.isWebGL1Renderer=!0;class ig extends ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ah extends ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kl=new Yt,ta=new ha,Ns=new Cr,Os=new F;class sg extends ie{constructor(t=new Ne,e=new ah){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=s,t.ray.intersectsSphere(Ns)===!1)return;kl.copy(i).invert(),ta.copy(t.ray).applyMatrix4(kl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,m=p;g<m;g++){const f=c.getX(g);Os.fromBufferAttribute(u,f),Gl(Os,f,l,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,m=p;g<m;g++)Os.fromBufferAttribute(u,g),Gl(Os,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Gl(r,t,e,n,i,s,a){const o=ta.distanceSqToPoint(r);if(o<e){const l=new F;ta.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Ze{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new ct:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,i=[],s=[],a=[],o=new F,l=new Yt;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new F)}s[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(le(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(le(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ma extends Ze{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new ct,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rg extends ma{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ga(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Us=new F,go=new ga,xo=new ga,_o=new ga;class lh extends Ze{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Us.subVectors(i[0],i[1]).add(i[0]),c=Us);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Us.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Us),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);m<1e-4&&(m=1),g<1e-4&&(g=m),f<1e-4&&(f=m),go.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,m,f),xo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,m,f),_o.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,m,f)}else this.curveType==="catmullrom"&&(go.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_o.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(go.calc(l),xo.calc(l),_o.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hl(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function og(r,t){const e=1-r;return e*e*t}function ag(r,t){return 2*(1-r)*r*t}function lg(r,t){return r*r*t}function ts(r,t,e,n){return og(r,t)+ag(r,e)+lg(r,n)}function cg(r,t){const e=1-r;return e*e*e*t}function hg(r,t){const e=1-r;return 3*e*e*r*t}function ug(r,t){return 3*(1-r)*r*r*t}function dg(r,t){return r*r*r*t}function es(r,t,e,n,i){return cg(r,t)+hg(r,e)+ug(r,n)+dg(r,i)}class ch extends Ze{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(es(t,i.x,s.x,a.x,o.x),es(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fg extends Ze{constructor(t=new F,e=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(es(t,i.x,s.x,a.x,o.x),es(t,i.y,s.y,a.y,o.y),es(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xa extends Ze{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new ct;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pg extends Ze{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends Ze{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(ts(t,i.x,s.x,a.x),ts(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends Ze{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(ts(t,i.x,s.x,a.x),ts(t,i.y,s.y,a.y),ts(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dh extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Hl(o,l.x,c.x,h.x,u.x),Hl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var fh=Object.freeze({__proto__:null,ArcCurve:rg,CatmullRomCurve3:lh,CubicBezierCurve:ch,CubicBezierCurve3:fg,EllipseCurve:ma,LineCurve:xa,LineCurve3:pg,QuadraticBezierCurve:hh,QuadraticBezierCurve3:uh,SplineCurve:dh});class mg extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new xa(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new fh[i.type]().fromJSON(i))}return this}}class ea extends mg{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xa(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new hh(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new ch(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new dh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new ma(t,e,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class bi extends ea{constructor(t){super(t),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ea().fromJSON(i))}return this}}const gg={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=ph(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=Eg(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?1/p:0}return ss(s,a,e,o,l,p),a}};function ph(r,t,e,n,i){let s,a;if(i===Pg(r,t,e,n)>0)for(s=t;s<e;s+=n)a=Wl(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=Wl(s,r[s],r[s+1],a);return a&&Mr(a,a.next)&&(os(a),a=a.next),a}function Sn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Mr(e,e.next)||Ht(e.prev,e,e.next)===0)){if(os(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ss(r,t,e,n,i,s,a){if(!r)return;!a&&s&&Bg(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?_g(r,n,i,s):xg(r)){t.push(l.i/e),t.push(r.i/e),t.push(c.i/e),os(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Ag(Sn(r),t,e),ss(r,t,e,n,i,s,2)):a===2&&vg(r,t,e,n,i,s):ss(Sn(r),t,e,n,i,s,1);break}}}function xg(r){const t=r.prev,e=r,n=r.next;if(Ht(t,e,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(wi(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&Ht(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function _g(r,t,e,n){const i=r.prev,s=r,a=r.next;if(Ht(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,h=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,u=na(o,l,t,e,n),d=na(c,h,t,e,n);let p=r.prevZ,g=r.nextZ;for(;p&&p.z>=u&&g&&g.z<=d;){if(p!==r.prev&&p!==r.next&&wi(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&Ht(p.prev,p,p.next)>=0||(p=p.prevZ,g!==r.prev&&g!==r.next&&wi(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&Ht(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=u;){if(p!==r.prev&&p!==r.next&&wi(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&wi(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&Ht(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Ag(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Mr(i,s)&&mh(i,n,n.next,s)&&rs(i,s)&&rs(s,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(s.i/e),os(n),os(n.next),n=r=s),n=n.next}while(n!==r);return Sn(n)}function vg(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fg(a,o)){let l=gh(a,o);a=Sn(a,a.next),l=Sn(l,l.next),ss(a,t,e,n,i,s),ss(l,t,e,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function Eg(r,t,e,n){const i=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=ph(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Sg(c));for(i.sort(yg),s=0;s<i.length;s++)Cg(i[s],e),e=Sn(e,e.next);return e}function yg(r,t){return r.x-t.x}function Cg(r,t){if(t=Dg(r,t),t){const e=gh(t,r);Sn(t,t.next),Sn(e,e.next)}}function Dg(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s){if(s=d,d===n){if(i===e.y)return e;if(i===e.next.y)return e.next}a=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let h=1/0,u;e=a;do n>=e.x&&e.x>=l&&n!==e.x&&wi(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)&&(u=Math.abs(i-e.y)/(n-e.x),rs(e,r)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Mg(a,e)))&&(a=e,h=u)),e=e.next;while(e!==o);return a}function Mg(r,t){return Ht(r.prev,r,t.prev)<0&&Ht(t.next,r,r.next)<0}function Bg(r,t,e,n){let i=r;do i.z===null&&(i.z=na(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,wg(i)}function wg(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function na(r,t,e,n,i){return r=32767*(r-e)*i,t=32767*(t-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Sg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function wi(r,t,e,n,i,s,a,o){return(i-a)*(t-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(e-a)*(t-o)>=0&&(e-a)*(s-o)-(i-a)*(n-o)>=0}function Fg(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!bg(r,t)&&(rs(r,t)&&rs(t,r)&&Tg(r,t)&&(Ht(r.prev,r,t.prev)||Ht(r,t.prev,t))||Mr(r,t)&&Ht(r.prev,r,r.next)>0&&Ht(t.prev,t,t.next)>0)}function Ht(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Mr(r,t){return r.x===t.x&&r.y===t.y}function mh(r,t,e,n){const i=ks(Ht(r,t,e)),s=ks(Ht(r,t,n)),a=ks(Ht(e,n,r)),o=ks(Ht(e,n,t));return!!(i!==s&&a!==o||i===0&&Vs(r,e,t)||s===0&&Vs(r,n,t)||a===0&&Vs(e,r,n)||o===0&&Vs(e,t,n))}function Vs(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function ks(r){return r>0?1:r<0?-1:0}function bg(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&mh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function rs(r,t){return Ht(r.prev,r,r.next)<0?Ht(r,t,r.next)>=0&&Ht(r,r.prev,t)>=0:Ht(r,t,r.prev)<0||Ht(r,r.next,t)<0}function Tg(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function gh(r,t){const e=new ia(r.i,r.x,r.y),n=new ia(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Wl(r,t,e,n){const i=new ia(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function os(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ia(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pg(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Ti{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ti.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];ql(t),Xl(n,t);let a=t.length;e.forEach(ql);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Xl(n,e[l]);const o=gg.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ql(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Xl(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class us extends Ne{constructor(t=new bi([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ce(i,3)),this.setAttribute("normal",new ce(s,3)),this.setAttribute("uv",new ce(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let p=d.shape;const g=d.holes;Ti.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,x=g.length;f<x;f++){const _=g[f];Ti.isClockWise(_)===!0&&(g[f]=_.reverse())}const m=Ti.triangulateShape(p,g);for(let f=0,x=g.length;f<x;f++){const _=g[f];p=p.concat(_)}for(let f=0,x=p.length;f<x;f++){const _=p[f];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let f=0,x=m.length;f<x;f++){const _=m[f],y=_[0]+u,E=_[1]+u,A=_[2]+u;n.push(y,E,A),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Lg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const a=e[t.shapes[i]];n.push(a)}return new us(n,t.curveSegments)}}function Lg(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class fn extends Ne{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new F,d=new F,p=[],g=[],m=[],f=[];for(let x=0;x<=n;x++){const _=[],y=x/n;let E=0;x==0&&a==0?E=.5/e:x==n&&l==Math.PI&&(E=-.5/e);for(let A=0;A<=e;A++){const S=A/e;u.x=-t*Math.cos(i+S*s)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+S*s)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),f.push(S+E,1-y),_.push(c++)}h.push(_)}for(let x=0;x<n;x++)for(let _=0;_<e;_++){const y=h[x][_+1],E=h[x][_],A=h[x+1][_],S=h[x+1][_+1];(x!==0||a>0)&&p.push(y,E,S),(x!==n-1||l<Math.PI)&&p.push(E,A,S)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(m,3)),this.setAttribute("uv",new ce(f,2))}static fromJSON(t){return new fn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _a extends Ne{constructor(t=new uh(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new F,l=new F,c=new ct;let h=new F;const u=[],d=[],p=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(p,2));function m(){for(let y=0;y<e;y++)f(y);f(s===!1?e:0),_(),x()}function f(y){h=t.getPointAt(y/e,h);const E=a.normals[y],A=a.binormals[y];for(let S=0;S<=i;S++){const b=S/i*Math.PI*2,v=Math.sin(b),B=-Math.cos(b);l.x=B*E.x+v*A.x,l.y=B*E.y+v*A.y,l.z=B*E.z+v*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function x(){for(let y=1;y<=e;y++)for(let E=1;E<=i;E++){const A=(i+1)*(y-1)+(E-1),S=(i+1)*y+(E-1),b=(i+1)*y+E,v=(i+1)*(y-1)+E;g.push(A,S,v),g.push(S,b,v)}}function _(){for(let y=0;y<=e;y++)for(let E=0;E<=i;E++)c.x=y/e,c.y=E/i,p.push(c.x,c.y)}}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _a(new fh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class xh extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rg extends ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const xr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class zg{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Ig=new zg;class Br{constructor(t){this.manager=t!==void 0?t:Ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const nn={};class Ng extends Error{constructor(t,e){super(t),this.response=e}}class Og extends Br{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=xr.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(nn[t]!==void 0){nn[t].push({onLoad:e,onProgress:n,onError:i});return}nn[t]=[],nn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=nn[t],u=c.body.getReader(),d=c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let m=0;const f=new ReadableStream({start(x){_();function _(){u.read().then(({done:y,value:E})=>{if(y)x.close();else{m+=E.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let S=0,b=h.length;S<b;S++){const v=h[S];v.onProgress&&v.onProgress(A)}x.enqueue(E),_()}})}}});return new Response(f)}else throw new Ng(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{xr.add(t,c);const h=nn[t];delete nn[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=nn[t];if(h===void 0)throw this.manager.itemError(t),c;delete nn[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ug extends Br{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=xr.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=is("img");function l(){h(),xr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Aa extends Br{constructor(t){super(t)}load(t,e,n,i){const s=new Ie,a=new Ug(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class _h extends ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Jl=new Yt,Yl=new F,Zl=new F;class Vg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yl),Zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zl),e.updateMatrixWorld(),Jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const jl=new Yt,Gi=new F,Ao=new F;class kg extends Vg{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gi),Ao.copy(n.position),Ao.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ao),n.updateMatrixWorld(),i.makeTranslation(-Gi.x,-Gi.y,-Gi.z),jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl)}}class Ah extends _h{constructor(t,e,n=0,i=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Gg extends _h{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hg{constructor(t,e,n=0,i=1/0){this.ray=new ha(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return sa(t,this,n,e),n.sort($l),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)sa(t[i],this,n,e);return n.sort($l),n}}function $l(r,t){return r.distance-t.distance}function sa(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)sa(i[s],t,e,!0)}}class Kl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wg{constructor(){this.type="ShapePath",this.color=new zt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ea,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,a){return this.currentPath.bezierCurveTo(t,e,n,i,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(x){const _=[];for(let y=0,E=x.length;y<E;y++){const A=x[y],S=new bi;S.curves=A.curves,_.push(S)}return _}function n(x,_){const y=_.length;let E=!1;for(let A=y-1,S=0;S<y;A=S++){let b=_[A],v=_[S],B=v.x-b.x,R=v.y-b.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(b=_[S],B=-B,v=_[A],R=-R),x.y<b.y||x.y>v.y)continue;if(x.y===b.y){if(x.x===b.x)return!0}else{const X=R*(x.x-b.x)-B*(x.y-b.y);if(X===0)return!0;if(X<0)continue;E=!E}}else{if(x.y!==b.y)continue;if(v.x<=x.x&&x.x<=b.x||b.x<=x.x&&x.x<=v.x)return!0}}return E}const i=Ti.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new bi,l.curves=o.curves,c.push(l),c;let h=!i(s[0].getPoints());h=t?!h:h;const u=[],d=[];let p=[],g=0,m;d[g]=void 0,p[g]=[];for(let x=0,_=s.length;x<_;x++)o=s[x],m=o.getPoints(),a=i(m),a=t?!a:a,a?(!h&&d[g]&&g++,d[g]={s:new bi,p:m},d[g].s.curves=o.curves,h&&g++,p[g]=[]):p[g].push({h:o,p:m[0]});if(!d[0])return e(s);if(d.length>1){let x=!1,_=0;for(let y=0,E=d.length;y<E;y++)u[y]=[];for(let y=0,E=d.length;y<E;y++){const A=p[y];for(let S=0;S<A.length;S++){const b=A[S];let v=!0;for(let B=0;B<d.length;B++)n(b.p,d[B].p)&&(y!==B&&_++,v?(v=!1,u[B].push(b)):x=!0);v&&u[y].push(b)}}_>0&&x===!1&&(p=u)}let f;for(let x=0,_=d.length;x<_;x++){l=d[x].s,c.push(l),f=p[x];for(let y=0,E=f.length;y<E;y++)l.holes.push(f[y].h)}return c}}class qg extends us{constructor(t,e){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(t,e)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);/**
 * @license
 * The MIT License
 *
 * Copyright © 2021 Yuka authors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */class Ql{constructor(t,e,n,i,s){this.sender=t,this.receiver=e,this.message=n,this.delay=i,this.data=s}toJSON(){return{type:this.constructor.name,sender:this.sender.uuid,receiver:this.receiver.uuid,message:this.message,delay:this.delay,data:this.data}}fromJSON(t){return this.sender=t.sender,this.receiver=t.receiver,this.message=t.message,this.delay=t.delay,this.data=t.data,this}resolveReferences(t){return this.sender=t.get(this.sender),this.receiver=t.get(this.receiver),this}}class Me{static setLevel(t){Gs=t}static log(...t){Gs<=Me.LEVEL.LOG&&console.log(...t)}static warn(...t){Gs<=Me.LEVEL.WARN&&console.warn(...t)}static error(...t){Gs<=Me.LEVEL.ERROR&&console.error(...t)}}Me.LEVEL=Object.freeze({LOG:0,WARN:1,ERROR:2,SILENT:3});let Gs=Me.LEVEL.WARN;class Xg{constructor(){this.delayedTelegrams=new Array}deliver(t){const e=t.receiver;return e.handleMessage(t)===!1&&Me.warn("YUKA.MessageDispatcher: Message not handled by receiver: %o",e),this}dispatch(t,e,n,i,s){const a=new Ql(t,e,n,i,s);return i<=0?this.deliver(a):this.delayedTelegrams.push(a),this}dispatchDelayedMessages(t){let e=this.delayedTelegrams.length;for(;e--;){const n=this.delayedTelegrams[e];n.delay-=t,n.delay<=0&&(this.deliver(n),this.delayedTelegrams.pop())}return this}clear(){return this.delayedTelegrams.length=0,this}toJSON(){const t={type:this.constructor.name,delayedTelegrams:new Array};for(let e=0,n=this.delayedTelegrams.length;e<n;e++){const i=this.delayedTelegrams[e];t.delayedTelegrams.push(i.toJSON())}return t}fromJSON(t){this.clear();const e=t.delayedTelegrams;for(let n=0,i=e.length;n<i;n++){const s=e[n],a=new Ql().fromJSON(s);this.delayedTelegrams.push(a)}return this}resolveReferences(t){const e=this.delayedTelegrams;for(let n=0,i=e.length;n<i;n++)e[n].resolveReferences(t);return this}}const ae=new Array;for(let r=0;r<256;r++)ae[r]=(r<16?"0":"")+r.toString(16);class Ye{static area(t,e,n){return(n.x-t.x)*(e.z-t.z)-(e.x-t.x)*(n.z-t.z)}static argmax(t){const e=Math.max(...t),n=[];for(let i=0,s=t.length;i<s;i++)t[i]===e&&n.push(i);return n}static choice(t,e=null){const n=Math.random();if(e===null)return t[Math.floor(Math.random()*t.length)];{let i=0;const s=t.map((a,o)=>(i+=e[o],i)).findIndex(a=>a>=n);return t[s]}}static clamp(t,e,n){return Math.max(e,Math.min(n,t))}static generateUUID(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ae[t&255]+ae[t>>8&255]+ae[t>>16&255]+ae[t>>24&255]+"-"+ae[e&255]+ae[e>>8&255]+"-"+ae[e>>16&15|64]+ae[e>>24&255]+"-"+ae[n&63|128]+ae[n>>8&255]+"-"+ae[n>>16&255]+ae[n>>24&255]+ae[i&255]+ae[i>>8&255]+ae[i>>16&255]+ae[i>>24&255]).toUpperCase()}static randFloat(t,e){return t+Math.random()*(e-t)}static randInt(t,e){return t+Math.floor(Math.random()*(e-t+1))}}class P{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}clone(){return new this.constructor().copy(this)}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.x/=t,this.y/=t,this.z/=t,this}divideVectors(t,e){return this.x=t.x/e.x,this.y=t.y/e.y,this.z=t.z/e.z,this}reflect(t){return this.sub(Jg.copy(t).multiplyScalar(2*this.dot(t)))}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}cross(t){const e=this.x,n=this.y,i=this.z;return this.x=n*t.z-i*t.y,this.y=i*t.x-e*t.z,this.z=e*t.y-n*t.x,this}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}angleTo(t){const e=Math.sqrt(this.squaredLength()*t.squaredLength());if(e===0)return 0;const n=this.dot(t)/e;return Math.acos(Ye.clamp(n,-1,1))}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}distanceTo(t){return Math.sqrt(this.squaredDistanceTo(t))}squaredDistanceTo(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return Math.abs(e)+Math.abs(n)+Math.abs(i)}normalize(){return this.divideScalar(this.length()||1)}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyRotation(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,h=l*n+o*e-s*i,u=l*i+s*n-a*e,d=-s*e-a*n-o*i;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}extractPositionFromMatrix(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}fromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}fromMatrix4Column(t,e){return this.fromArray(t.elements,e*4)}fromSpherical(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}fromArray(t,e=0){return this.x=t[e+0],this.y=t[e+1],this.z=t[e+2],this}toArray(t,e=0){return t[e+0]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}}const Jg=new P,tc=new P(0,1,0),ec=new P,Hi=new P,nc=new P,ic=new P,vo=[2,2,1],Eo=[1,0,0];class $n{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[3]=e,h[6]=n,h[1]=i,h[4]=s,h[7]=a,h[2]=o,h[5]=l,h[8]=c,this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],m=i[0],f=i[3],x=i[6],_=i[1],y=i[4],E=i[7],A=i[2],S=i[5],b=i[8];return s[0]=a*m+o*_+l*A,s[3]=a*f+o*y+l*S,s[6]=a*x+o*E+l*b,s[1]=c*m+h*_+u*A,s[4]=c*f+h*y+u*S,s[7]=c*x+h*E+u*b,s[2]=d*m+p*_+g*A,s[5]=d*f+p*y+g*S,s[8]=d*x+p*E+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}extractBasis(t,e,n){return t.fromMatrix3Column(this,0),e.fromMatrix3Column(this,1),n.fromMatrix3Column(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,t.y,e.y,n.y,t.z,e.z,n.z),this}lookAt(t,e,n){return ec.crossVectors(n,t).normalize(),Hi.crossVectors(tc,e).normalize(),Hi.squaredLength()===0&&(ic.copy(e).addScalar(Number.EPSILON),Hi.crossVectors(tc,ic).normalize()),nc.crossVectors(e,Hi).normalize(),vi.makeBasis(Hi,nc,e),Hs.makeBasis(ec,n,t),this.multiplyMatrices(vi,Hs.transpose()),this}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getElementIndex(t,e){return t*3+e}frobeniusNorm(){const t=this.elements;let e=0;for(let n=0;n<9;n++)e+=t[n]*t[n];return Math.sqrt(e)}offDiagonalFrobeniusNorm(){const t=this.elements;let e=0;for(let n=0;n<3;n++){const i=t[this.getElementIndex(vo[n],Eo[n])];e+=2*i*i}return Math.sqrt(e)}eigenDecomposition(t){let e=0,n=0;const i=10;t.unitary.identity(),t.diagonal.copy(this);const s=t.unitary,a=t.diagonal,o=Number.EPSILON*a.frobeniusNorm();for(;n<i&&a.offDiagonalFrobeniusNorm()>o;)a.shurDecomposition(vi),Hs.copy(vi).transpose(),a.multiply(vi),a.premultiply(Hs),s.multiply(vi),++e>2&&(n++,e=0);return t}shurDecomposition(t){let e=0,n=1;const i=this.elements;for(let c=0;c<3;c++){const h=Math.abs(i[this.getElementIndex(vo[c],Eo[c])]);h>e&&(e=h,n=c)}let s=1,a=0;const o=Eo[n],l=vo[n];if(Math.abs(i[this.getElementIndex(l,o)])>Number.EPSILON){const c=i[this.getElementIndex(l,l)],h=i[this.getElementIndex(o,o)],u=i[this.getElementIndex(l,o)],d=(c-h)/2/u;let p;d<0?p=-1/(-d+Math.sqrt(1+d*d)):p=1/(d+Math.sqrt(1+d*d)),s=1/Math.sqrt(1+p*p),a=p*s}return t.identity(),t.elements[this.getElementIndex(o,o)]=s,t.elements[this.getElementIndex(l,l)]=s,t.elements[this.getElementIndex(l,o)]=a,t.elements[this.getElementIndex(o,l)]=-a,t}fromQuaternion(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=t.w,o=n+n,l=i+i,c=s+s,h=n*o,u=n*l,d=n*c,p=i*l,g=i*c,m=s*c,f=a*o,x=a*l,_=a*c;return e[0]=1-(p+m),e[3]=u-_,e[6]=d+x,e[1]=u+_,e[4]=1-(h+m),e[7]=g-f,e[2]=d-x,e[5]=g+f,e[8]=1-(h+p),this}fromMatrix4(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[4],e[4]=n[5],e[5]=n[6],e[6]=n[8],e[7]=n[9],e[8]=n[10],this}fromArray(t,e=0){const n=this.elements;for(let i=0;i<9;i++)n[i]=t[i+e];return this}toArray(t,e=0){const n=this.elements;return t[e+0]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}}const vi=new $n,Hs=new $n,Ws=new $n,yo=new P;class _r{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}clone(){return new this.constructor().copy(this)}inverse(){return this.conjugate().normalize()}conjugate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}normalize(){let t=this.length();return t===0?(this.x=0,this.y=0,this.z=0,this.w=1):(t=1/t,this.x=this.x*t,this.y=this.y*t,this.z=this.z*t,this.w=this.w*t),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t.x,i=t.y,s=t.z,a=t.w,o=e.x,l=e.y,c=e.z,h=e.w;return this.x=n*h+a*o+i*c-s*l,this.y=i*h+a*l+s*o-n*c,this.z=s*h+a*c+n*l-i*o,this.w=a*h-n*o-i*l-s*c,this}angleTo(t){return 2*Math.acos(Math.abs(Ye.clamp(this.dot(t),-1,1)))}rotateTo(t,e,n=1e-4){const i=this.angleTo(t);if(i<n)return!0;const s=Math.min(1,e/i);return this.slerp(t,s),!1}lookAt(t,e,n){Ws.lookAt(t,e,n),this.fromMatrix3(Ws)}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this.x,i=this.y,s=this.z,a=this.w;let o=a*t.w+n*t.x+i*t.y+s*t.z;if(o<0?(this.w=-t.w,this.x=-t.x,this.y=-t.y,this.z=-t.z,o=-o):this.copy(t),o>=1)return this.w=a,this.x=n,this.y=i,this.z=s,this;const l=Math.sqrt(1-o*o);if(Math.abs(l)<.001)return this.w=.5*(a+this.w),this.x=.5*(n+this.x),this.y=.5*(i+this.y),this.z=.5*(s+this.z),this;const c=Math.atan2(l,o),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this.w=a*h+this.w*u,this.x=n*h+this.x*u,this.y=i*h+this.y*u,this.z=s*h+this.z*u,this}extractRotationFromMatrix(t){const e=Ws.elements,n=t.elements,i=1/yo.fromMatrix4Column(t,0).length(),s=1/yo.fromMatrix4Column(t,1).length(),a=1/yo.fromMatrix4Column(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=n[4]*s,e[4]=n[5]*s,e[5]=n[6]*s,e[6]=n[8]*a,e[7]=n[9]*a,e[8]=n[10]*a,this.fromMatrix3(Ws),this}fromEuler(t,e,n){const i=Math.cos(e/2),s=Math.cos(t/2),a=Math.cos(n/2),o=Math.sin(e/2),l=Math.sin(t/2),c=Math.sin(n/2);return this.w=i*s*a+o*l*c,this.x=i*l*a+o*s*c,this.y=o*s*a-i*l*c,this.z=i*s*c-o*l*a,this}toEuler(t){const e=-2*(this.y*this.z-this.x*this.w);return Math.abs(e)>.9999?(t.x=Math.PI*.5*e,t.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),t.z=0):(t.x=Math.asin(e),t.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),t.z=Math.atan2(this.x*this.y+this.w*this.z,.5-this.x*this.x-this.z*this.z)),t}fromMatrix3(t){const e=t.elements,n=e[0],i=e[3],s=e[6],a=e[1],o=e[4],l=e[7],c=e[2],h=e[5],u=e[8],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this.w=.25/p,this.x=(h-l)*p,this.y=(s-c)*p,this.z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this.w=(h-l)/p,this.x=.25*p,this.y=(i+a)/p,this.z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this.w=(s-c)/p,this.x=(i+a)/p,this.y=.25*p,this.z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this.w=(a-i)/p,this.x=(s+c)/p,this.y=(l+h)/p,this.z=.25*p}return this}fromArray(t,e=0){return this.x=t[e+0],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t,e=0){return t[e+0]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}}class Ii{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,a,o,l,c,h,u,d,p,g,m,f){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=g,x[11]=m,x[15]=f,this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],x=n[14],_=n[3],y=n[7],E=n[11],A=n[15],S=i[0],b=i[4],v=i[8],B=i[12],R=i[1],X=i[5],et=i[9],O=i[13],L=i[2],W=i[6],J=i[10],Z=i[14],V=i[3],z=i[7],U=i[11],j=i[15];return s[0]=a*S+o*R+l*L+c*V,s[4]=a*b+o*X+l*W+c*z,s[8]=a*v+o*et+l*J+c*U,s[12]=a*B+o*O+l*Z+c*j,s[1]=h*S+u*R+d*L+p*V,s[5]=h*b+u*X+d*W+p*z,s[9]=h*v+u*et+d*J+p*U,s[13]=h*B+u*O+d*Z+p*j,s[2]=g*S+m*R+f*L+x*V,s[6]=g*b+m*X+f*W+x*z,s[10]=g*v+m*et+f*J+x*U,s[14]=g*B+m*O+f*Z+x*j,s[3]=_*S+y*R+E*L+A*V,s[7]=_*b+y*X+E*W+A*z,s[11]=_*v+y*et+E*J+A*U,s[15]=_*B+y*O+E*Z+A*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}extractBasis(t,e,n){return t.fromMatrix4Column(this,0),e.fromMatrix4Column(this,1),n.fromMatrix4Column(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}compose(t,e,n){return this.fromQuaternion(e),this.scale(n),this.setPosition(t),this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}setPosition(t){const e=this.elements;return e[12]=t.x,e[13]=t.y,e[14]=t.z,this}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}getInverse(t){const e=this.elements,n=t.elements,i=e[0],s=e[1],a=e[2],o=e[3],l=e[4],c=e[5],h=e[6],u=e[7],d=e[8],p=e[9],g=e[10],m=e[11],f=e[12],x=e[13],_=e[14],y=e[15],E=p*_*u-x*g*u+x*h*m-c*_*m-p*h*y+c*g*y,A=f*g*u-d*_*u-f*h*m+l*_*m+d*h*y-l*g*y,S=d*x*u-f*p*u+f*c*m-l*x*m-d*c*y+l*p*y,b=f*p*h-d*x*h-f*c*g+l*x*g+d*c*_-l*p*_,v=i*E+s*A+a*S+o*b;if(v===0)return t.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/v;return n[0]=E*B,n[1]=(x*g*o-p*_*o-x*a*m+s*_*m+p*a*y-s*g*y)*B,n[2]=(c*_*o-x*h*o+x*a*u-s*_*u-c*a*y+s*h*y)*B,n[3]=(p*h*o-c*g*o-p*a*u+s*g*u+c*a*m-s*h*m)*B,n[4]=A*B,n[5]=(d*_*o-f*g*o+f*a*m-i*_*m-d*a*y+i*g*y)*B,n[6]=(f*h*o-l*_*o-f*a*u+i*_*u+l*a*y-i*h*y)*B,n[7]=(l*g*o-d*h*o+d*a*u-i*g*u-l*a*m+i*h*m)*B,n[8]=S*B,n[9]=(f*p*o-d*x*o-f*s*m+i*x*m+d*s*y-i*p*y)*B,n[10]=(l*x*o-f*c*o+f*s*u-i*x*u-l*s*y+i*c*y)*B,n[11]=(d*c*o-l*p*o-d*s*u+i*p*u+l*s*m-i*c*m)*B,n[12]=b*B,n[13]=(d*x*a-f*p*a+f*s*g-i*x*g-d*s*_+i*p*_)*B,n[14]=(f*c*a-l*x*a-f*s*h+i*x*h+l*s*_-i*c*_)*B,n[15]=(l*p*a-d*c*a+d*s*h-i*p*h-l*s*g+i*c*g)*B,t}getMaxScale(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}fromQuaternion(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=t.w,o=n+n,l=i+i,c=s+s,h=n*o,u=n*l,d=n*c,p=i*l,g=i*c,m=s*c,f=a*o,x=a*l,_=a*c;return e[0]=1-(p+m),e[4]=u-_,e[8]=d+x,e[1]=u+_,e[5]=1-(h+m),e[9]=g-f,e[2]=d-x,e[6]=g+f,e[10]=1-(h+p),e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}fromMatrix3(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=0,e[4]=n[3],e[5]=n[4],e[6]=n[5],e[7]=0,e[8]=n[6],e[9]=n[7],e[10]=n[8],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}fromArray(t,e=0){const n=this.elements;for(let i=0;i<16;i++)n[i]=t[i+e];return this}toArray(t,e=0){const n=this.elements;return t[e+0]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}}const qs=new _r,Cn=new P,Xs=new P,Ei=new _r;class wr{constructor(){this.name="",this.active=!0,this.children=new Array,this.parent=null,this.neighbors=new Array,this.neighborhoodRadius=1,this.updateNeighborhood=!1,this.position=new P,this.rotation=new _r,this.scale=new P(1,1,1),this.forward=new P(0,0,1),this.up=new P(0,1,0),this.boundingRadius=0,this.maxTurnRate=Math.PI,this.canActivateTrigger=!0,this.manager=null,this._localMatrix=new Ii,this._worldMatrix=new Ii,this._cache={position:new P,rotation:new _r,scale:new P(1,1,1)},this._renderComponent=null,this._renderComponentCallback=null,this._started=!1,this._uuid=null,this._worldMatrixDirty=!1}get worldMatrix(){return this._updateWorldMatrix(),this._worldMatrix}get uuid(){return this._uuid===null&&(this._uuid=Ye.generateUUID()),this._uuid}start(){return this}update(){return this}add(t){return t.parent!==null&&t.parent.remove(t),this.children.push(t),t.parent=this,this}remove(t){const e=this.children.indexOf(t);return this.children.splice(e,1),t.parent=null,this}getDirection(t){return t.copy(this.forward).applyRotation(this.rotation).normalize()}lookAt(t){const e=this.parent;return e!==null?(this.getWorldPosition(Xs),Cn.subVectors(t,Xs).normalize(),this.rotation.lookAt(this.forward,Cn,this.up),Ei.extractRotationFromMatrix(e.worldMatrix).inverse(),this.rotation.premultiply(Ei)):(Cn.subVectors(t,this.position).normalize(),this.rotation.lookAt(this.forward,Cn,this.up)),this}rotateTo(t,e,n=1e-4){const i=this.parent;return i!==null?(this.getWorldPosition(Xs),Cn.subVectors(t,Xs).normalize(),qs.lookAt(this.forward,Cn,this.up),Ei.extractRotationFromMatrix(i.worldMatrix).inverse(),qs.premultiply(Ei)):(Cn.subVectors(t,this.position).normalize(),qs.lookAt(this.forward,Cn,this.up)),this.rotation.rotateTo(qs,this.maxTurnRate*e,n)}getWorldDirection(t){return Ei.extractRotationFromMatrix(this.worldMatrix),t.copy(this.forward).applyRotation(Ei).normalize()}getWorldPosition(t){return t.extractPositionFromMatrix(this.worldMatrix)}setRenderComponent(t,e){return this._renderComponent=t,this._renderComponentCallback=e,this}handleMessage(){return!1}lineOfSightTest(){return null}sendMessage(t,e,n=0,i=null){return this.manager!==null?this.manager.sendMessage(this,t,e,n,i):Me.error("YUKA.GameEntity: The game entity must be added to a manager in order to send a message."),this}toJSON(){return{type:this.constructor.name,uuid:this.uuid,name:this.name,active:this.active,children:sc(this.children),parent:this.parent!==null?this.parent.uuid:null,neighbors:sc(this.neighbors),neighborhoodRadius:this.neighborhoodRadius,updateNeighborhood:this.updateNeighborhood,position:this.position.toArray(new Array),rotation:this.rotation.toArray(new Array),scale:this.scale.toArray(new Array),forward:this.forward.toArray(new Array),up:this.up.toArray(new Array),boundingRadius:this.boundingRadius,maxTurnRate:this.maxTurnRate,canActivateTrigger:this.canActivateTrigger,worldMatrix:this.worldMatrix.toArray(new Array),_localMatrix:this._localMatrix.toArray(new Array),_cache:{position:this._cache.position.toArray(new Array),rotation:this._cache.rotation.toArray(new Array),scale:this._cache.scale.toArray(new Array)},_started:this._started}}fromJSON(t){return this.name=t.name,this.active=t.active,this.neighborhoodRadius=t.neighborhoodRadius,this.updateNeighborhood=t.updateNeighborhood,this.position.fromArray(t.position),this.rotation.fromArray(t.rotation),this.scale.fromArray(t.scale),this.forward.fromArray(t.forward),this.up.fromArray(t.up),this.boundingRadius=t.boundingRadius,this.maxTurnRate=t.maxTurnRate,this.canActivateTrigger=t.canActivateTrigger,this.children=t.children.slice(),this.neighbors=t.neighbors.slice(),this.parent=t.parent,this._localMatrix.fromArray(t._localMatrix),this._worldMatrix.fromArray(t.worldMatrix),this._cache.position.fromArray(t._cache.position),this._cache.rotation.fromArray(t._cache.rotation),this._cache.scale.fromArray(t._cache.scale),this._started=t._started,this._uuid=t.uuid,this}resolveReferences(t){const e=this.neighbors;for(let i=0,s=e.length;i<s;i++)e[i]=t.get(e[i]);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i]=t.get(n[i]);return this.parent=t.get(this.parent)||null,this}_updateMatrix(){const t=this._cache;t.position.equals(this.position)&&t.rotation.equals(this.rotation)&&t.scale.equals(this.scale)||(this._localMatrix.compose(this.position,this.rotation,this.scale),t.position.copy(this.position),t.rotation.copy(this.rotation),t.scale.copy(this.scale),this._worldMatrixDirty=!0)}_updateWorldMatrix(){const t=this.parent;if(t!==null&&t._updateWorldMatrix(),this._updateMatrix(),this._worldMatrixDirty===!0){t===null?this._worldMatrix.copy(this._localMatrix):this._worldMatrix.multiplyMatrices(this.parent._worldMatrix,this._localMatrix),this._worldMatrixDirty=!1;const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];s._worldMatrixDirty=!0}}}updateWorldMatrix(){return console.warn("GameEntity: .updateWorldMatrix() has been removed. World matrices are automatically updated on access."),this}}function sc(r){const t=new Array;for(let e=0,n=r.length;e<n;e++)t.push(r[e].uuid);return t}const rc=new P,Co=new P;class vh extends wr{constructor(){super(),this.velocity=new P,this.maxSpeed=1,this.updateOrientation=!0}update(t){return this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),rc.copy(this.velocity).multiplyScalar(t),Co.copy(this.position).add(rc),this.updateOrientation&&this.getSpeedSquared()>1e-8&&this.lookAt(Co),this.position.copy(Co),this}getSpeed(){return this.velocity.length()}getSpeedSquared(){return this.velocity.squaredLength()}toJSON(){const t=super.toJSON();return t.velocity=this.velocity.toArray(new Array),t.maxSpeed=this.maxSpeed,t.updateOrientation=this.updateOrientation,t}fromJSON(t){return super.fromJSON(t),this.velocity.fromArray(t.velocity),this.maxSpeed=t.maxSpeed,this.updateOrientation=t.updateOrientation,this}}class xe{constructor(){this.active=!0,this.weight=1}calculate(){}toJSON(){return{type:this.constructor.name,active:this.active,weight:this.weight}}fromJSON(t){return this.active=t.active,this.weight=t.weight,this}resolveReferences(){}}const Js=new P,Ys=new P;class Eh extends xe{constructor(){super()}calculate(t,e){Js.set(0,0,0);const n=t.neighbors;for(let i=0,s=n.length;i<s;i++)n[i].getDirection(Ys),Js.add(Ys);return n.length>0&&(Js.divideScalar(n.length),t.getDirection(Ys),e.subVectors(Js,Ys)),e}}const Do=new P,Mo=new P;class ds extends xe{constructor(t=new P,e=3,n=0){super(),this.target=t,this.deceleration=e,this.tolerance=n}calculate(t,e){const n=this.target,i=this.deceleration;Mo.subVectors(n,t.position);const s=Mo.length();if(s>this.tolerance){let a=s/i;a=Math.min(a,t.maxSpeed),Do.copy(Mo).multiplyScalar(a/s)}else Do.set(0,0,0);return e.subVectors(Do,t.velocity)}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t.deceleration=this.deceleration,t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this.deceleration=t.deceleration,this}}const Bo=new P;class Sr extends xe{constructor(t=new P){super(),this.target=t}calculate(t,e){const n=this.target;return Bo.subVectors(n,t.position).normalize(),Bo.multiplyScalar(t.maxSpeed),e.subVectors(Bo,t.velocity)}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this}}const Zs=new P;class yh extends xe{constructor(){super(),this._seek=new Sr}calculate(t,e){Zs.set(0,0,0);const n=t.neighbors;for(let i=0,s=n.length;i<s;i++){const a=n[i];Zs.add(a.position)}return n.length>0&&(Zs.divideScalar(n.length),this._seek.target=Zs,this._seek.calculate(t,e),e.normalize()),e}}const Wi=new P;class va extends xe{constructor(t=new P,e=10){super(),this.target=t,this.panicDistance=e}calculate(t,e){const n=this.target;return t.position.squaredDistanceTo(n)<=this.panicDistance*this.panicDistance&&(Wi.subVectors(t.position,n).normalize(),Wi.squaredLength()===0&&Wi.set(0,0,1),Wi.multiplyScalar(t.maxSpeed),e.subVectors(Wi,t.velocity)),e}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t.panicDistance=this.panicDistance,t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this.panicDistance=t.panicDistance,this}}const oc=new P,ac=new P,lc=new P;class Yg extends xe{constructor(t=null,e=10,n=1){super(),this.pursuer=t,this.panicDistance=e,this.predictionFactor=n,this._flee=new va}calculate(t,e){const n=this.pursuer;oc.subVectors(n.position,t.position);let i=oc.length()/(t.maxSpeed+n.getSpeed());return i*=this.predictionFactor,ac.copy(n.velocity).multiplyScalar(i),lc.addVectors(n.position,ac),this._flee.target=lc,this._flee.panicDistance=this.panicDistance,this._flee.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.pursuer=this.pursuer?this.pursuer.uuid:null,t.panicDistance=this.panicDistance,t.predictionFactor=this.predictionFactor,t}fromJSON(t){return super.fromJSON(t),this.pursuer=t.pursuer,this.panicDistance=t.panicDistance,this.predictionFactor=t.predictionFactor,this}resolveReferences(t){this.pursuer=t.get(this.pursuer)||null}}class Zg{constructor(){this.loop=!1,this._waypoints=new Array,this._index=0}add(t){return this._waypoints.push(t),this}clear(){return this._waypoints.length=0,this._index=0,this}current(){return this._waypoints[this._index]}finished(){const t=this._waypoints.length-1;return this.loop===!0?!1:this._index===t}advance(){return this._index++,this._index===this._waypoints.length&&(this.loop===!0?this._index=0:this._index--),this}toJSON(){const t={type:this.constructor.name,loop:this.loop,_waypoints:new Array,_index:this._index},e=this._waypoints;for(let n=0,i=e.length;n<i;n++){const s=e[n];t._waypoints.push(s.toArray(new Array))}return t}fromJSON(t){this.loop=t.loop,this._index=t._index;const e=t._waypoints;for(let n=0,i=e.length;n<i;n++){const s=e[n];this._waypoints.push(new P().fromArray(s))}return this}}class jg extends xe{constructor(t=new Zg,e=1){super(),this.path=t,this.nextWaypointDistance=e,this._arrive=new ds,this._seek=new Sr}calculate(t,e){const n=this.path;n.current().squaredDistanceTo(t.position)<this.nextWaypointDistance*this.nextWaypointDistance&&n.advance();const s=n.current();return n.finished()===!0?(this._arrive.target=s,this._arrive.calculate(t,e)):(this._seek.target=s,this._seek.calculate(t,e)),e}toJSON(){const t=super.toJSON();return t.path=this.path.toJSON(),t.nextWaypointDistance=this.nextWaypointDistance,t}fromJSON(t){return super.fromJSON(t),this.path.fromJSON(t.path),this.nextWaypointDistance=t.nextWaypointDistance,this}}const js=new P,$s=new P,cc=new P,hc=new P;class $g extends xe{constructor(t=null,e=null,n=3){super(),this.entity1=t,this.entity2=e,this.deceleration=n,this._arrive=new ds}calculate(t,e){const n=this.entity1,i=this.entity2;js.addVectors(n.position,i.position).multiplyScalar(.5);const s=t.position.distanceTo(js)/t.maxSpeed;return $s.copy(n.velocity).multiplyScalar(s),cc.addVectors(n.position,$s),$s.copy(i.velocity).multiplyScalar(s),hc.addVectors(i.position,$s),js.addVectors(cc,hc).multiplyScalar(.5),this._arrive.deceleration=this.deceleration,this._arrive.target=js,this._arrive.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.entity1=this.entity1?this.entity1.uuid:null,t.entity2=this.entity2?this.entity2.uuid:null,t.deceleration=this.deceleration,t}fromJSON(t){return super.fromJSON(t),this.entity1=t.entity1,this.entity2=t.entity2,this.deceleration=t.deceleration,this}resolveReferences(t){this.entity1=t.get(this.entity1)||null,this.entity2=t.get(this.entity2)||null}}const Te=new P,qi=new P,Dn=new P,sn=[new P,new P,new P,new P,new P,new P,new P,new P];class Fr{constructor(t=new P,e=new P){this.min=t,this.max=e}set(t,e){return this.min=t,this.max=e,this}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}clone(){return new this.constructor().copy(this)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max),e}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}expand(t){return this.min.min(t),this.max.max(t),this}getCenter(t){return t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t.subVectors(this.max,this.min)}intersectsAABB(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsBoundingSphere(t){return this.clampPoint(t.center,Te),Te.squaredDistanceTo(t.center)<=t.radius*t.radius}intersectsPlane(t){const e=t.normal;this.getCenter(qi),Dn.subVectors(this.max,qi);const n=Dn.x*Math.abs(e.x)+Dn.y*Math.abs(e.y)+Dn.z*Math.abs(e.z),i=t.distanceToPoint(qi);return Math.abs(i)<=n}getNormalFromSurfacePoint(t,e){e.set(0,0,0);let n,i=1/0;return this.getCenter(qi),this.getSize(Dn),Te.copy(t).sub(qi),n=Math.abs(Dn.x-Math.abs(Te.x)),n<i&&(i=n,e.set(1*Math.sign(Te.x),0,0)),n=Math.abs(Dn.y-Math.abs(Te.y)),n<i&&(i=n,e.set(0,1*Math.sign(Te.y),0)),n=Math.abs(Dn.z-Math.abs(Te.z)),n<i&&e.set(0,0,1*Math.sign(Te.z)),e}fromCenterAndSize(t,e){return Te.copy(e).multiplyScalar(.5),this.min.copy(t).sub(Te),this.max.copy(t).add(Te),this}fromPoints(t){this.min.set(1/0,1/0,1/0),this.max.set(-1/0,-1/0,-1/0);for(let e=0,n=t.length;e<n;e++)this.expand(t[e]);return this}applyMatrix4(t){const e=this.min,n=this.max;return sn[0].set(e.x,e.y,e.z).applyMatrix4(t),sn[1].set(e.x,e.y,n.z).applyMatrix4(t),sn[2].set(e.x,n.y,e.z).applyMatrix4(t),sn[3].set(e.x,n.y,n.z).applyMatrix4(t),sn[4].set(n.x,e.y,e.z).applyMatrix4(t),sn[5].set(n.x,e.y,n.z).applyMatrix4(t),sn[6].set(n.x,n.y,e.z).applyMatrix4(t),sn[7].set(n.x,n.y,n.z).applyMatrix4(t),this.fromPoints(sn)}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{type:this.constructor.name,min:this.min.toArray(new Array),max:this.max.toArray(new Array)}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wo=new Fr;class fs{constructor(t=new P,e=0){this.center=t,this.radius=e}set(t,e){return this.center=t,this.radius=e,this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}clone(){return new this.constructor().copy(this)}clampPoint(t,e){return e.copy(t),this.center.squaredDistanceTo(t)>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}containsPoint(t){return t.squaredDistanceTo(this.center)<=this.radius*this.radius}intersectsBoundingSphere(t){const e=this.radius+t.radius;return t.center.squaredDistanceTo(this.center)<=e*e}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}getNormalFromSurfacePoint(t,e){return e.subVectors(t,this.center).normalize()}fromPoints(t){return wo.fromPoints(t),wo.getCenter(this.center),this.radius=this.center.distanceTo(wo.max),this}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScale(),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}toJSON(){return{type:this.constructor.name,center:this.center.toArray(new Array),radius:this.radius}}fromJSON(t){return this.center.fromArray(t.center),this.radius=t.radius,this}}const Pe=new P,So=new P,Ks=new P,Fo=new P,uc=new P,Qs=new Ii,Kg=new Ii,dc=new Fr;class br{constructor(t=new P,e=new P){this.origin=t,this.direction=e}set(t,e){return this.origin=t,this.direction=e,this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}clone(){return new this.constructor().copy(this)}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}intersectBoundingSphere(t,e){Pe.subVectors(t.center,this.origin);const n=Pe.dot(this.direction),i=Pe.dot(Pe)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsBoundingSphere(t){const e=new P;let n;const i=e.subVectors(t.center,this.origin).dot(this.direction);return i<0?n=this.origin.squaredDistanceTo(t.center):(e.copy(this.direction).multiplyScalar(i).add(this.origin),n=e.squaredDistanceTo(t.center)),n<=t.radius*t.radius}intersectAABB(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsAABB(t){return this.intersectAABB(t,Pe)!==null}intersectPlane(t,e){let n;const i=t.normal.dot(this.direction);if(i===0)if(t.distanceToPoint(this.origin)===0)n=0;else return null;else n=-(this.origin.dot(t.normal)+t.constant)/i;return n>=0?this.at(n,e):null}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectOBB(t,e){return t.getSize(uc),dc.fromCenterAndSize(Pe.set(0,0,0),uc),Qs.fromMatrix3(t.rotation),Qs.setPosition(t.center),fc.copy(this).applyMatrix4(Qs.getInverse(Kg)),fc.intersectAABB(dc,e)?e.applyMatrix4(Qs):null}intersectsOBB(t){return this.intersectOBB(t,Pe)!==null}intersectConvexHull(t,e){const n=t.faces;let i=-1/0,s=1/0;for(let a=0,o=n.length;a<o;a++){const c=n[a].plane,h=c.distanceToPoint(this.origin),u=c.normal.dot(this.direction);if(h>0&&u>=0)return null;const d=u!==0?-h/u:0;if(!(d<=0)&&(u>0?s=Math.min(d,s):i=Math.max(d,i),i>s))return null}return i!==-1/0?this.at(i,e):this.at(s,e),e}intersectsConvexHull(t){return this.intersectConvexHull(t,Pe)!==null}intersectTriangle(t,e,n){const i=t.a,s=t.b,a=t.c;So.subVectors(s,i),Ks.subVectors(a,i),Fo.crossVectors(So,Ks);let o=this.direction.dot(Fo),l;if(o>0){if(e)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Pe.subVectors(this.origin,i);const c=l*this.direction.dot(Ks.crossVectors(Pe,Ks));if(c<0)return null;const h=l*this.direction.dot(So.cross(Pe));if(h<0||c+h>o)return null;const u=-l*Pe.dot(Fo);return u<0?null:this.at(u/o,n)}intersectBVH(t,e){return t.root.intersectRay(this,e)}intersectsBVH(t){return t.root.intersectsRay(this)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}}const fc=new br,pc=new Ii,yi=new P,tr=new P,bo=new P,To=new fs,Qg=new br(new P(0,0,0),new P(0,0,1));class Ch extends xe{constructor(t=new Array){super(),this.obstacles=t,this.brakingWeight=.2,this.dBoxMinLength=4}calculate(t,e){const n=this.obstacles;let i=null,s=1/0;const a=this.dBoxMinLength+t.getSpeed()/t.maxSpeed*this.dBoxMinLength;t.worldMatrix.getInverse(pc);for(let o=0,l=n.length;o<l;o++){const c=n[o];if(c!==t&&(yi.copy(c.position).applyMatrix4(pc),yi.z>0&&Math.abs(yi.z)<a)){const h=c.boundingRadius+t.boundingRadius;Math.abs(yi.x)<h&&(To.center.copy(yi),To.radius=h,Qg.intersectBoundingSphere(To,bo),bo.z<s&&(s=bo.z,i=c,tr.copy(yi)))}}if(i!==null){const o=1+(a-tr.z)/a;e.x=(i.boundingRadius-tr.x)*o,e.z=(i.boundingRadius-tr.z)*this.brakingWeight,e.applyRotation(t.rotation)}return e}toJSON(){const t=super.toJSON();t.obstacles=new Array,t.brakingWeight=this.brakingWeight,t.dBoxMinLength=this.dBoxMinLength;for(let e=0,n=this.obstacles.length;e<n;e++)t.obstacles.push(this.obstacles[e].uuid);return t}fromJSON(t){return super.fromJSON(t),this.obstacles=t.obstacles,this.brakingWeight=t.brakingWeight,this.dBoxMinLength=t.dBoxMinLength,this}resolveReferences(t){const e=this.obstacles;for(let n=0,i=e.length;n<i;n++)e[n]=t.get(e[n])}}const Po=new P,mc=new P,gc=new P,xc=new P;class t1 extends xe{constructor(t=null,e=new P){super(),this.leader=t,this.offset=e,this._arrive=new ds,this._arrive.deceleration=1.5}calculate(t,e){const n=this.leader,i=this.offset;Po.copy(i).applyMatrix4(n.worldMatrix),mc.subVectors(Po,t.position);const s=mc.length()/(t.maxSpeed+n.getSpeed());return gc.copy(n.velocity).multiplyScalar(s),xc.addVectors(Po,gc),this._arrive.target=xc,this._arrive.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.leader=this.leader?this.leader.uuid:null,t.offset=this.offset,t}fromJSON(t){return super.fromJSON(t),this.leader=t.leader,this.offset=t.offset,this}resolveReferences(t){this.leader=t.get(this.leader)||null}}const Lo=new P,Ro=new P,_c=new P,Ac=new P,vc=new P;class e1 extends xe{constructor(t=null,e=1){super(),this.evader=t,this.predictionFactor=e,this._seek=new Sr}calculate(t,e){const n=this.evader;Lo.subVectors(n.position,t.position),t.getDirection(Ro),n.getDirection(_c);const i=Lo.dot(Ro)>0,s=Ro.dot(_c)<-.95;if(i===!0&&s===!0)return this._seek.target=n.position,this._seek.calculate(t,e),e;let a=Lo.length()/(t.maxSpeed+n.getSpeed());return a*=this.predictionFactor,Ac.copy(n.velocity).multiplyScalar(a),vc.addVectors(n.position,Ac),this._seek.target=vc,this._seek.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.evader=this.evader?this.evader.uuid:null,t.predictionFactor=this.predictionFactor,t}fromJSON(t){return super.fromJSON(t),this.evader=t.evader,this.predictionFactor=t.predictionFactor,this}resolveReferences(t){this.evader=t.get(this.evader)||null}}const er=new P;class Dh extends xe{constructor(){super()}calculate(t,e){const n=t.neighbors;for(let i=0,s=n.length;i<s;i++){const a=n[i];er.subVectors(t.position,a.position);let o=er.length();o===0&&(o=1e-4),er.normalize().divideScalar(o),e.add(er)}return e}}const nr=new P,zo=new P;class Mh extends xe{constructor(t=1,e=5,n=5){super(),this.radius=t,this.distance=e,this.jitter=n,this._targetLocal=new P,n1(this.radius,this._targetLocal)}calculate(t,e,n){const i=this.jitter*n;return zo.x=Ye.randFloat(-1,1)*i,zo.z=Ye.randFloat(-1,1)*i,this._targetLocal.add(zo),this._targetLocal.normalize(),this._targetLocal.multiplyScalar(this.radius),nr.copy(this._targetLocal),nr.z+=this.distance,nr.applyMatrix4(t.worldMatrix),e.subVectors(nr,t.position),e}toJSON(){const t=super.toJSON();return t.radius=this.radius,t.distance=this.distance,t.jitter=this.jitter,t._targetLocal=this._targetLocal.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.radius=t.radius,this.distance=t.distance,this.jitter=t.jitter,this._targetLocal.fromArray(t._targetLocal),this}}function n1(r,t){const e=Math.random()*Math.PI*2;t.x=r*Math.cos(e),t.z=r*Math.sin(e)}const ir=new P;class Ec{constructor(t){this.vehicle=t,this.behaviors=new Array,this._steeringForce=new P,this._typesMap=new Map}add(t){return this.behaviors.push(t),this}remove(t){const e=this.behaviors.indexOf(t);return this.behaviors.splice(e,1),this}clear(){return this.behaviors.length=0,this}calculate(t,e){return this._calculateByOrder(t),e.copy(this._steeringForce)}_accumulate(t){const e=this._steeringForce.length(),n=this.vehicle.maxForce-e;return n<=0?!1:(t.length()>n&&t.normalize().multiplyScalar(n),this._steeringForce.add(t),!0)}_calculateByOrder(t){const e=this.behaviors;this._steeringForce.set(0,0,0);for(let n=0,i=e.length;n<i;n++){const s=e[n];if(s.active===!0&&(ir.set(0,0,0),s.calculate(this.vehicle,ir,t),ir.multiplyScalar(s.weight),this._accumulate(ir)===!1))return}}toJSON(){const t={type:"SteeringManager",behaviors:new Array},e=this.behaviors;for(let n=0,i=e.length;n<i;n++){const s=e[n];t.behaviors.push(s.toJSON())}return t}fromJSON(t){this.clear();const e=t.behaviors;for(let n=0,i=e.length;n<i;n++){const s=e[n],a=s.type;let o;switch(a){case"SteeringBehavior":o=new xe().fromJSON(s);break;case"AlignmentBehavior":o=new Eh().fromJSON(s);break;case"ArriveBehavior":o=new ds().fromJSON(s);break;case"CohesionBehavior":o=new yh().fromJSON(s);break;case"EvadeBehavior":o=new Yg().fromJSON(s);break;case"FleeBehavior":o=new va().fromJSON(s);break;case"FollowPathBehavior":o=new jg().fromJSON(s);break;case"InterposeBehavior":o=new $g().fromJSON(s);break;case"ObstacleAvoidanceBehavior":o=new Ch().fromJSON(s);break;case"OffsetPursuitBehavior":o=new t1().fromJSON(s);break;case"PursuitBehavior":o=new e1().fromJSON(s);break;case"SeekBehavior":o=new Sr().fromJSON(s);break;case"SeparationBehavior":o=new Dh().fromJSON(s);break;case"WanderBehavior":o=new Mh().fromJSON(s);break;default:const l=this._typesMap.get(a);if(l!==void 0)o=new l().fromJSON(s);else{Me.warn("YUKA.SteeringManager: Unsupported steering behavior type:",a);continue}}this.add(o)}return this}registerType(t,e){return this._typesMap.set(t,e),this}resolveReferences(t){const e=this.behaviors;for(let n=0,i=e.length;n<i;n++)e[n].resolveReferences(t);return this}}class i1{constructor(t=10){this.count=t,this._history=new Array,this._slot=0;for(let e=0;e<this.count;e++)this._history[e]=new P}calculate(t,e){e.set(0,0,0),this._slot===this.count&&(this._slot=0),this._history[this._slot].copy(t),this._slot++;for(let n=0;n<this.count;n++)e.add(this._history[n]);return e.divideScalar(this.count),e}toJSON(){const t={type:this.constructor.name,count:this.count,_history:new Array,_slot:this._slot},e=this._history;for(let n=0,i=e.length;n<i;n++){const s=e[n];t._history.push(s.toArray(new Array))}return t}fromJSON(t){this.count=t.count,this._slot=t._slot;const e=t._history;this._history.length=0;for(let n=0,i=e.length;n<i;n++){const s=e[n];this._history.push(new P().fromArray(s))}return this}}const yc=new P,sr=new P,Cc=new P,Xi=new P,Dc=new P;class Bh extends vh{constructor(){super(),this.mass=1,this.maxForce=100,this.steering=new Ec(this),this.smoother=null}update(t){return this.steering.calculate(t,yc),Cc.copy(yc).divideScalar(this.mass),this.velocity.add(Cc.multiplyScalar(t)),this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),sr.copy(this.velocity).multiplyScalar(t),Xi.copy(this.position).add(sr),this.updateOrientation===!0&&this.smoother===null&&this.getSpeedSquared()>1e-8&&this.lookAt(Xi),this.position.copy(Xi),this.updateOrientation===!0&&this.smoother!==null&&(this.smoother.calculate(this.velocity,Dc),sr.copy(Dc).multiplyScalar(t),Xi.copy(this.position).add(sr),this.lookAt(Xi)),this}toJSON(){const t=super.toJSON();return t.mass=this.mass,t.maxForce=this.maxForce,t.steering=this.steering.toJSON(),t.smoother=this.smoother?this.smoother.toJSON():null,t}fromJSON(t){return super.fromJSON(t),this.mass=t.mass,this.maxForce=t.maxForce,this.steering=new Ec(this).fromJSON(t.steering),this.smoother=t.smoother?new i1().fromJSON(t.smoother):null,this}resolveReferences(t){super.resolveReferences(t),this.steering.resolveReferences(t)}}class Ar{touching(){return!1}update(){return this}toJSON(){return{type:this.constructor.name}}fromJSON(){return this}}const Mc=new fs,Bc=new P;class s1 extends Ar{constructor(t=new P){super(),this.size=t,this._aabb=new Fr}touching(t){return Mc.set(t.position,t.boundingRadius),this._aabb.intersectsBoundingSphere(Mc)}update(t){return t.getWorldPosition(Bc),this._aabb.fromCenterAndSize(Bc,this.size),this}toJSON(){const t=super.toJSON();return t.size=this.size.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.size.fromArray(t.size),this}}const Io=new fs;class r1 extends Ar{constructor(t=0){super(),this.radius=t,this._boundingSphere=new fs}touching(t){return t.getWorldPosition(Io.center),Io.radius=t.boundingRadius,this._boundingSphere.intersectsBoundingSphere(Io)}update(t){return t.getWorldPosition(this._boundingSphere.center),this._boundingSphere.radius=this.radius,this}toJSON(){const t=super.toJSON();return t.radius=this.radius,t}fromJSON(t){return super.fromJSON(t),this.radius=t.radius,this}}class wc extends wr{constructor(t=new Ar){super(),this.region=t,this.canActivateTrigger=!1,this._typesMap=new Map}check(t){return this.region.touching(t)===!0&&this.execute(t),this}execute(){}updateRegion(){return this.region.update(this),this}toJSON(){const t=super.toJSON();return t.region=this.region.toJSON(),t}fromJSON(t){super.fromJSON(t);const e=t.region;let n=e.type;switch(n){case"TriggerRegion":this.region=new Ar().fromJSON(e);break;case"RectangularTriggerRegion":this.region=new s1().fromJSON(e);break;case"SphericalTriggerRegion":this.region=new r1().fromJSON(e);break;default:const i=this._typesMap.get(n);i!==void 0?this.region=new i().fromJSON(e):Me.warn("YUKA.Trigger: Unsupported trigger region type:",e.type)}return this}registerType(t,e){return this._typesMap.set(t,e),this}}const Ji=new Array;class o1{constructor(){this.entities=new Array,this.spatialIndex=null,this._triggers=new Array,this._indexMap=new Map,this._typesMap=new Map,this._messageDispatcher=new Xg}add(t){return this.entities.push(t),t.manager=this,this}remove(t){const e=this.entities.indexOf(t);return this.entities.splice(e,1),t.manager=null,this}clear(){return this.entities.length=0,this._messageDispatcher.clear(),this}getEntityByName(t){const e=this.entities;for(let n=0,i=e.length;n<i;n++){const s=e[n];if(s.name===t)return s}return null}update(t){const e=this.entities,n=this._triggers;for(let i=e.length-1;i>=0;i--){const s=e[i];this.updateEntity(s,t)}for(let i=n.length-1;i>=0;i--){const s=n[i];this.processTrigger(s)}return this._triggers.length=0,this._messageDispatcher.dispatchDelayedMessages(t),this}updateEntity(t,e){if(t.active===!0){this.updateNeighborhood(t),t._started===!1&&(t.start(),t._started=!0),t.update(e);const n=t.children;for(let a=n.length-1;a>=0;a--){const o=n[a];this.updateEntity(o,e)}if(t instanceof wc&&this._triggers.push(t),this.spatialIndex!==null){let a=this._indexMap.get(t)||-1;a=this.spatialIndex.updateEntity(t,a),this._indexMap.set(t,a)}const i=t._renderComponent,s=t._renderComponentCallback;i!==null&&s!==null&&s(t,i)}return this}updateNeighborhood(t){if(t.updateNeighborhood===!0){t.neighbors.length=0,this.spatialIndex!==null?this.spatialIndex.query(t.position,t.neighborhoodRadius,Ji):(Ji.length=0,Ji.push(...this.entities));const e=t.neighborhoodRadius*t.neighborhoodRadius;for(let n=0,i=Ji.length;n<i;n++){const s=Ji[n];t!==s&&s.active===!0&&t.position.squaredDistanceTo(s.position)<=e&&t.neighbors.push(s)}}return this}processTrigger(t){t.updateRegion();const e=this.entities;for(let n=e.length-1;n>=0;n--){const i=e[n];t!==i&&i.active===!0&&i.canActivateTrigger===!0&&t.check(i)}return this}sendMessage(t,e,n,i,s){return this._messageDispatcher.dispatch(t,e,n,i,s),this}toJSON(){const t={type:this.constructor.name,entities:new Array,_messageDispatcher:this._messageDispatcher.toJSON()};function e(n){t.entities.push(n.toJSON());for(let i=0,s=n.children.length;i<s;i++)e(n.children[i])}for(let n=0,i=this.entities.length;n<i;n++)e(this.entities[n]);return t}fromJSON(t){this.clear();const e=t.entities,n=t._messageDispatcher,i=new Map;for(let s=0,a=e.length;s<a;s++){const o=e[s],l=o.type;let c;switch(l){case"GameEntity":c=new wr().fromJSON(o);break;case"MovingEntity":c=new vh().fromJSON(o);break;case"Vehicle":c=new Bh().fromJSON(o);break;case"Trigger":c=new wc().fromJSON(o);break;default:const h=this._typesMap.get(l);if(h!==void 0)c=new h().fromJSON(o);else{Me.warn("YUKA.EntityManager: Unsupported entity type:",l);continue}}i.set(c.uuid,c),c.parent===null&&this.add(c)}for(let s of i.values())s.resolveReferences(i);return this._messageDispatcher.fromJSON(n),this}registerType(t,e){return this._typesMap.set(t,e),this}}const Ci=new P,No=new P,rr=new P;class Ea{constructor(t=new P(0,0,1),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal=t,this.constant=e,this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}clone(){return new this.constructor().copy(this)}distanceToPoint(t){return this.normal.dot(t)+this.constant}fromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}fromCoplanarPoints(t,e,n){return Ci.subVectors(n,e).cross(No.subVectors(t,e)).normalize(),this.fromNormalAndCoplanarPoint(Ci,t),this}intersectPlane(t,e){rr.crossVectors(this.normal,t.normal);const n=rr.dot(rr);return n===0?null:(Ci.copy(t.normal).multiplyScalar(this.constant),No.copy(this.normal).multiplyScalar(t.constant),e.crossVectors(Ci.sub(No),rr).divideScalar(n),e)}intersectsPlane(t){const e=this.normal.dot(t.normal);return Math.abs(e)!==1}projectPoint(t,e){return Ci.copy(this.normal).multiplyScalar(this.distanceToPoint(t)),e.subVectors(t,Ci),e}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}}new fs;new P,new P,new P;new br;new Ea;new Ii;new P;new P,new P,new P;class a1{constructor(){this._previousTime=0,this._currentTime=0,this._delta=0,this._elapsed=0,this._timescale=1,this._useFixedDelta=!1,this._fixedDelta=16.67,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=l1.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disableFixedDelta(){return this._useFixedDelta=!1,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}enableFixedDelta(){return this._useFixedDelta=!0,this}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getFixedDelta(){return this._fixedDelta/1e3}getTimescale(){return this._timescale}reset(){return this._currentTime=this._now(),this}setFixedDelta(t){return this._fixedDelta=t*1e3,this}setTimescale(t){return this._timescale=t,this}update(){return this._useFixedDelta===!0?this._delta=this._fixedDelta:(this._previousTime=this._currentTime,this._currentTime=this._now(),this._delta=this._currentTime-this._previousTime),this._delta*=this._timescale,this._elapsed+=this._delta,this}_now(){return(typeof performance>"u"?Date:performance).now()}}function l1(){document.hidden===!1&&this.reset()}Object.freeze({MAXAV:0,CENTROID:1});Object.freeze({ACTIVE:"active",INACTIVE:"inactive",COMPLETED:"completed",FAILED:"failed"});new P;new P;new P;new P(1,0,0);new P(0,1,0);new P(0,0,1);new P,new P,new P;new P;new Array;const Sc=new P,or=new P;class ya{constructor(t=new P,e=new P){this.from=t,this.to=e}set(t,e){return this.from=t,this.to=e,this}copy(t){return this.from.copy(t.from),this.to.copy(t.to),this}clone(){return new this.constructor().copy(this)}delta(t){return t.subVectors(this.to,this.from)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.from)}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.at(i,n)}closestPointToPointParameter(t,e=!0){Sc.subVectors(t,this.from),or.subVectors(this.to,this.from);const n=or.dot(or);let s=or.dot(Sc)/n;return e&&(s=Ye.clamp(s,0,1)),s}equals(t){return t.from.equals(this.from)&&t.to.equals(this.to)}}const ar=new P,Fc=new P,Oo=new P,Uo=new P,Vo=new P,ko=new P,bc=new P;class c1{intersects(t,e){return!(this._checkFaceDirections(t,e)||this._checkFaceDirections(e,t)||this._checkEdgeDirections(t,e))}_checkFaceDirections(t,e){const n=t.faces;for(let i=0,s=n.length;i<s;i++){const o=n[i].plane;Fc.copy(o.normal).multiplyScalar(-1);const l=this._getSupportVertex(e,Fc);if(o.distanceToPoint(l)>0)return!0}return!1}_checkEdgeDirections(t,e){const n=t.edges,i=e.edges;for(let s=0,a=n.length;s<a;s++){const o=n[s];for(let l=0,c=i.length;l<c;l++){const h=i[l];if(o.getDirection(Oo),h.getDirection(Uo),this._minkowskiFace(o,Oo,h,Uo)&&this._distanceBetweenEdges(o,Oo,h,Uo,t)>0)return!0}}return!1}_getSupportVertex(t,e){let n=-1/0,i=null;const s=t.vertices;for(let a=0,o=s.length;a<o;a++){const l=s[a],c=l.dot(e);c>n&&(n=c,i=l)}return i}_minkowskiFace(t,e,n,i){const s=t.polygon.plane.normal,a=t.twin.polygon.plane.normal;Vo.copy(n.polygon.plane.normal),ko.copy(n.twin.polygon.plane.normal),Vo.multiplyScalar(-1),ko.multiplyScalar(-1);const o=Vo.dot(e),l=ko.dot(e),c=s.dot(i),h=a.dot(i);return o*l<0&&c*h<0&&o*h>0}_distanceBetweenEdges(t,e,n,i,s){return Math.abs(e.dot(i))===1?-1/0:(ar.crossVectors(e,i).normalize(),ar.dot(bc.subVectors(t.vertex,s.centroid))<0&&ar.multiplyScalar(-1),ar.dot(bc.subVectors(n.vertex,t.vertex)))}}class h1{constructor(t=new P){this.vertex=t,this.next=null,this.prev=null,this.twin=null,this.polygon=null}tail(){return this.prev?this.prev.vertex:null}head(){return this.vertex}length(){const t=this.tail(),e=this.head();return t!==null?t.distanceTo(e):-1}squaredLength(){const t=this.tail(),e=this.head();return t!==null?t.squaredDistanceTo(e):-1}linkOpponent(t){return this.twin=t,t.twin=this,this}getDirection(t){return t.subVectors(this.vertex,this.prev.vertex).normalize()}}class Vn{constructor(){this.centroid=new P,this.edge=null,this.plane=new Ea}fromContour(t){const e=new Array;if(t.length<3)return Me.error("YUKA.Polygon: Unable to create polygon from contour. It needs at least three points."),this;for(let n=0,i=t.length;n<i;n++){const s=new h1(t[n]);e.push(s)}for(let n=0,i=e.length;n<i;n++){let s,a,o;n===0?(s=e[n],a=e[i-1],o=e[n+1]):n===i-1?(s=e[n],a=e[n-1],o=e[0]):(s=e[n],a=e[n-1],o=e[n+1]),s.prev=a,s.next=o,s.polygon=this}return this.edge=e[0],this.plane.fromCoplanarPoints(t[0],t[1],t[2]),this}computeCentroid(){const t=this.centroid;let e=this.edge,n=0;t.set(0,0,0);do t.add(e.vertex),n++,e=e.next;while(e!==this.edge);return t.divideScalar(n),this}contains(t,e=.001){const n=this.plane;let i=this.edge;do{const a=i.tail(),o=i.head();if(Go(a,o,t)===!1)return!1;i=i.next}while(i!==this.edge);const s=n.distanceToPoint(t);return!(Math.abs(s)>e)}convex(t=!0){let e=this.edge;do{const n=e.tail(),i=e.head(),s=e.next.head();if(t){if(Go(n,i,s)===!1)return!1}else if(Go(s,i,n)===!1)return!1;e=e.next}while(e!==this.edge);return!0}coplanar(t=.001){const e=this.plane;let n=this.edge;do{const i=e.distanceToPoint(n.vertex);if(Math.abs(i)>t)return!1;n=n.next}while(n!==this.edge);return!0}distanceToPoint(t){return this.plane.distanceToPoint(t)}getContour(t){let e=this.edge;t.length=0;do t.push(e.vertex),e=e.next;while(e!==this.edge);return t}}function Go(r,t,e){return Ye.area(r,t,e)>=0}class Tc{constructor(){this.faces=new Array,this.edges=new Array,this.vertices=new Array,this.centroid=new P}computeCentroid(){const t=this.centroid;let e=this.faces;t.set(0,0,0);for(let n=0,i=e.length;n<i;n++){const s=e[n];t.add(s.centroid)}return t.divideScalar(e.length),this}computeUniqueVertices(){const t=this.faces,e=this.vertices;e.length=0;const n=new Set;for(let i=0,s=t.length;i<s;i++){const a=t[i];let o=a.edge;do n.add(o.vertex),o=o.next;while(o!==a.edge)}return e.push(...n),this}computeUniqueEdges(){const t=this.faces,e=this.edges;e.length=0;for(let n=0,i=t.length;n<i;n++){const s=t[n];let a=s.edge;do e.includes(a.twin)===!1&&e.push(a),a=a.next;while(a!==s.edge)}return this}fromAABB(t){this.faces.length=0,this.vertices.length=0;const e=t.min,n=t.max,i=[new P(n.x,n.y,n.z),new P(n.x,n.y,e.z),new P(n.x,e.y,n.z),new P(n.x,e.y,e.z),new P(e.x,n.y,n.z),new P(e.x,n.y,e.z),new P(e.x,e.y,n.z),new P(e.x,e.y,e.z)];this.vertices.push(...i);const s=new Vn().fromContour([i[4],i[0],i[1],i[5]]),a=new Vn().fromContour([i[2],i[3],i[1],i[0]]),o=new Vn().fromContour([i[6],i[2],i[0],i[4]]),l=new Vn().fromContour([i[3],i[7],i[5],i[1]]),c=new Vn().fromContour([i[3],i[2],i[6],i[7]]),h=new Vn().fromContour([i[7],i[6],i[4],i[5]]);return s.edge.linkOpponent(h.edge.prev),s.edge.next.linkOpponent(o.edge.prev),s.edge.next.next.linkOpponent(a.edge.prev),s.edge.prev.linkOpponent(l.edge.prev),c.edge.linkOpponent(l.edge.next),c.edge.next.linkOpponent(a.edge.next),c.edge.next.next.linkOpponent(o.edge.next),c.edge.prev.linkOpponent(h.edge.next),h.edge.linkOpponent(l.edge.next.next),l.edge.linkOpponent(a.edge.next.next),a.edge.linkOpponent(o.edge.next.next),o.edge.linkOpponent(h.edge.next.next),this.faces.push(s,a,o,l,c,h),s.computeCentroid(),a.computeCentroid(),o.computeCentroid(),l.computeCentroid(),c.computeCentroid(),h.computeCentroid(),t.getCenter(this.centroid),this.computeUniqueEdges(),this}}const Pc=new ya,lr=new Ea,Lc=new P,u1=new P(0,1,0),Rc=new c1;let Yi;class d1 extends Tc{constructor(){super(),this.mergeFaces=!0,this._tolerance=-1,this._vertices=new Array,this._assigned=new zc,this._unassigned=new zc}containsPoint(t){const e=this.faces;for(let n=0,i=e.length;n<i;n++)if(e[n].distanceToPoint(t)>this._tolerance)return!1;return!0}intersectsAABB(t){if(Yi===void 0)Yi=new Tc().fromAABB(t);else{const e=t.min,n=t.max,i=Yi.vertices;i[0].set(n.x,n.y,n.z),i[1].set(n.x,n.y,e.z),i[2].set(n.x,e.y,n.z),i[3].set(n.x,e.y,e.z),i[4].set(e.x,n.y,n.z),i[5].set(e.x,n.y,e.z),i[6].set(e.x,e.y,n.z),i[7].set(e.x,e.y,e.z),t.getCenter(Yi.centroid)}return Rc.intersects(this,Yi)}intersectsConvexHull(t){return Rc.intersects(this,t)}fromPoints(t){if(t.length<4)return Me.error("YUKA.ConvexHull: The given points array needs at least four points."),this;for(let e=0,n=t.length;e<n;e++)this._vertices.push(new f1(t[e]));return this._generate(),this}_addAdjoiningFace(t,e){const n=new rn(t.point,e.prev.vertex,e.vertex);return this.faces.push(n),n.getEdge(-1).linkOpponent(e.twin),n.getEdge(0)}_addNewFaces(t,e){const n=[];let i=null,s=null;for(let a=0,o=e.length;a<o;a++){let l=this._addAdjoiningFace(t,e[a]);i===null?i=l:l.next.linkOpponent(s),n.push(l.polygon),s=l}return i.next.linkOpponent(s),n}_addVertexToFace(t,e){return t.face=e,e.outside===null?(this._assigned.append(t),e.outside=t):this._assigned.insertAfter(e.outside,t),this}_addVertexToHull(t){const e=[];this._unassigned.clear(),this._computeHorizon(t.point,null,t.face,e);const n=this._addNewFaces(t,e);return this._resolveUnassignedPoints(n),this}_reset(){return this._vertices.length=0,this._assigned.clear(),this._unassigned.clear(),this}_computeInitialHull(){let t,e,n,i;const s=this._vertices,a=this._computeExtremes(),o=a.min,l=a.max;let c,h;h=l.x.point.x-o.x.point.x,t=o.x,e=l.x,c=l.y.point.y-o.y.point.y,c>h&&(t=o.y,e=l.y,h=c),c=l.z.point.z-o.z.point.z,c>h&&(t=o.z,e=l.z),h=-1/0,Pc.set(t.point,e.point);for(let d=0,p=s.length;d<p;d++){const g=s[d];g!==t&&g!==e&&(Pc.closestPointToPoint(g.point,!0,Lc),c=Lc.squaredDistanceTo(g.point),c>h&&(h=c,n=g))}h=-1/0,lr.fromCoplanarPoints(t.point,e.point,n.point);for(let d=0,p=s.length;d<p;d++){const g=s[d];g!==t&&g!==e&&g!==n&&(c=Math.abs(lr.distanceToPoint(g.point)),c>h&&(h=c,i=g))}if(lr.distanceToPoint(i.point)===0)throw"ERROR: YUKA.ConvexHull: All extreme points lie in a single plane. Unable to compute convex hull.";const u=this.faces;lr.distanceToPoint(i.point)<0?(u.push(new rn(t.point,e.point,n.point),new rn(i.point,e.point,t.point),new rn(i.point,n.point,e.point),new rn(i.point,t.point,n.point)),u[1].getEdge(2).linkOpponent(u[0].getEdge(1)),u[2].getEdge(2).linkOpponent(u[0].getEdge(2)),u[3].getEdge(2).linkOpponent(u[0].getEdge(0)),u[1].getEdge(1).linkOpponent(u[2].getEdge(0)),u[2].getEdge(1).linkOpponent(u[3].getEdge(0)),u[3].getEdge(1).linkOpponent(u[1].getEdge(0))):(u.push(new rn(t.point,n.point,e.point),new rn(i.point,t.point,e.point),new rn(i.point,e.point,n.point),new rn(i.point,n.point,t.point)),u[1].getEdge(2).linkOpponent(u[0].getEdge(0)),u[2].getEdge(2).linkOpponent(u[0].getEdge(2)),u[3].getEdge(2).linkOpponent(u[0].getEdge(1)),u[1].getEdge(0).linkOpponent(u[2].getEdge(1)),u[2].getEdge(0).linkOpponent(u[3].getEdge(1)),u[3].getEdge(0).linkOpponent(u[1].getEdge(1)));for(let d=0,p=s.length;d<p;d++){const g=s[d];if(g!==t&&g!==e&&g!==n&&g!==i){h=this._tolerance;let m=null;for(let f=0;f<4;f++)c=u[f].distanceToPoint(g.point),c>h&&(h=c,m=u[f]);m!==null&&this._addVertexToFace(g,m)}}return this}_computeExtremes(){const t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0),n={x:null,y:null,z:null},i={x:null,y:null,z:null};for(let s=0,a=this._vertices.length;s<a;s++){const o=this._vertices[s],l=o.point;l.x<t.x&&(t.x=l.x,n.x=o),l.y<t.y&&(t.y=l.y,n.y=o),l.z<t.z&&(t.z=l.z,n.z=o),l.x>e.x&&(e.x=l.x,i.x=o),l.y>e.y&&(e.y=l.y,i.y=o),l.z>e.z&&(e.z=l.z,i.z=o)}return this._tolerance=3*Number.EPSILON*(Math.max(Math.abs(t.x),Math.abs(e.x))+Math.max(Math.abs(t.y),Math.abs(e.y))+Math.max(Math.abs(t.z),Math.abs(e.z))),{min:n,max:i}}_computeHorizon(t,e,n,i){if(n.outside){const a=n.outside;this._removeAllVerticesFromFace(n),this._unassigned.appendChain(a)}n.active=!1;let s;e===null?s=e=n.getEdge(0):s=e.next;do{let a=s.twin,o=a.polygon;o.active&&(o.distanceToPoint(t)>this._tolerance?this._computeHorizon(t,a,o,i):i.push(s)),s=s.next}while(s!==e);return this}_generate(){this.faces.length=0,this._computeInitialHull();let t;for(;t=this._nextVertexToAdd();)this._addVertexToHull(t);return this._updateFaces(),this._postprocessHull(),this._reset(),this}_postprocessHull(){const t=this.faces,e=this.edges;if(this.mergeFaces===!0){const n={leftPrev:null,leftNext:null,rightPrev:null,rightNext:null};this.computeUniqueEdges(),e.sort((i,s)=>s.length()-i.length());for(let i=0,s=e.length;i<s;i++){const a=e[i];if(this._mergePossible(a)===!1)continue;let o=a;n.prev=o.prev,n.next=o.next,n.prevTwin=o.twin.prev,n.nextTwin=o.twin.next,o.prev.next=o.twin.next,o.next.prev=o.twin.prev,o.twin.prev.next=o.next,o.twin.next.prev=o.prev;const l=o.polygon;l.edge=o.prev;const c=l.plane.normal.dot(u1)>=0;if(l.convex(c)===!0&&l.coplanar(this._tolerance)===!0){let h=l.edge;do h.polygon=l,h=h.next;while(h!==l.edge);const u=t.indexOf(a.twin.polygon);t.splice(u,1)}else n.prev.next=o,n.next.prev=o,n.prevTwin.next=o.twin,n.nextTwin.prev=o.twin,l.edge=o}for(let i=0,s=t.length;i<s;i++)t[i].computeCentroid()}return this.computeCentroid(),this.computeUniqueEdges(),this.computeUniqueVertices(),this}_mergePossible(t){const e=t.polygon;let n=t.twin;do{if(n!==t.twin&&n.twin.polygon===e)return!1;n=n.next}while(t.twin!==n);return!0}_nextVertexToAdd(){let t=null;if(this._assigned.empty()===!1){let e=0,n=this._assigned.first();const i=n.face;do{const s=i.distanceToPoint(n.point);s>e&&(e=s,t=n),n=n.next}while(n!==null&&n.face===i)}return t}_updateFaces(){const t=this.faces,e=new Array;for(let n=0,i=t.length;n<i;n++){const s=t[n];s.active&&e.push(s)}return this.faces.length=0,this.faces.push(...e),this}_removeAllVerticesFromFace(t){if(t.outside!==null){const e=t.outside;e.face=null;let n=t.outside;for(;n.next!==null&&n.next.face===t;)n=n.next,n.face=null;t.outside=null,this._assigned.removeChain(e,n)}return this}_removeVertexFromFace(t,e){return t.face=null,t===e.outside&&(t.next!==null&&t.next.face===e?e.outside=t.next:e.outside=null),this._assigned.remove(t),this}_resolveUnassignedPoints(t){if(this._unassigned.empty()===!1){let e=this._unassigned.first();do{let n=e.next,i=this._tolerance,s=null;for(let a=0,o=t.length;a<o;a++){const l=t[a];if(l.active){const c=l.distanceToPoint(e.point);c>i&&(i=c,s=l)}}s!==null&&this._addVertexToFace(e,s),e=n}while(e!==null)}return this}}class rn extends Vn{constructor(t=new P,e=new P,n=new P){super(),this.outside=null,this.active=!0,this.fromContour([t,e,n]),this.computeCentroid()}getEdge(t){let e=this.edge;for(;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e}}class f1{constructor(t=new P){this.point=t,this.prev=null,this.next=null,this.face=null}}class zc{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertAfter(t,e){return e.prev=t,e.next=t.next,e.next?e.next.prev=e:this.tail=e,t.next=e,this}append(t){return this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this}appendChain(t){for(this.head===null?this.head=t:this.tail.next=t,t.prev=this.tail;t.next!==null;)t=t.next;return this.tail=t,this}remove(t){return t.prev===null?this.head=t.next:t.prev.next=t.next,t.next===null?this.tail=t.prev:t.next.prev=t.prev,t.prev=null,t.next=null,this}removeChain(t,e){return t.prev===null?this.head=e.next:t.prev.next=e.next,e.next===null?this.tail=t.prev:e.next.prev=t.prev,t.prev=null,e.next=null,this}empty(){return this.head===null}}const Ic={unitary:new $n,diagonal:new $n},St={c:null,u:[new P,new P,new P],e:[]},Pt={c:null,u:[new P,new P,new P],e:[]},Gt=[[],[],[]],yt=[[],[],[]],Ut=[],Rn=new P,zn=new P,In=new P,Le=new P,Nc=new P;class p1{constructor(t=new P,e=new P,n=new $n){this.center=t,this.halfSizes=e,this.rotation=n}set(t,e,n){return this.center=t,this.halfSizes=e,this.rotation=n,this}copy(t){return this.center.copy(t.center),this.halfSizes.copy(t.halfSizes),this.rotation.copy(t.rotation),this}clone(){return new this.constructor().copy(this)}getSize(t){return t.copy(this.halfSizes).multiplyScalar(2)}clampPoint(t,e){const n=this.halfSizes;Le.subVectors(t,this.center),this.rotation.extractBasis(Rn,zn,In),e.copy(this.center);const i=Ye.clamp(Le.dot(Rn),-n.x,n.x);e.add(Rn.multiplyScalar(i));const s=Ye.clamp(Le.dot(zn),-n.y,n.y);e.add(zn.multiplyScalar(s));const a=Ye.clamp(Le.dot(In),-n.z,n.z);return e.add(In.multiplyScalar(a)),e}containsPoint(t){return Le.subVectors(t,this.center),this.rotation.extractBasis(Rn,zn,In),Math.abs(Le.dot(Rn))<=this.halfSizes.x&&Math.abs(Le.dot(zn))<=this.halfSizes.y&&Math.abs(Le.dot(In))<=this.halfSizes.z}intersectsAABB(t){return this.intersectsOBB(m1.fromAABB(t))}intersectsBoundingSphere(t){return this.clampPoint(t.center,Nc),Nc.squaredDistanceTo(t.center)<=t.radius*t.radius}intersectsOBB(t,e=Number.EPSILON){St.c=this.center,St.e[0]=this.halfSizes.x,St.e[1]=this.halfSizes.y,St.e[2]=this.halfSizes.z,this.rotation.extractBasis(St.u[0],St.u[1],St.u[2]),Pt.c=t.center,Pt.e[0]=t.halfSizes.x,Pt.e[1]=t.halfSizes.y,Pt.e[2]=t.halfSizes.z,t.rotation.extractBasis(Pt.u[0],Pt.u[1],Pt.u[2]);for(let s=0;s<3;s++)for(let a=0;a<3;a++)Gt[s][a]=St.u[s].dot(Pt.u[a]);Le.subVectors(Pt.c,St.c),Ut[0]=Le.dot(St.u[0]),Ut[1]=Le.dot(St.u[1]),Ut[2]=Le.dot(St.u[2]);for(let s=0;s<3;s++)for(let a=0;a<3;a++)yt[s][a]=Math.abs(Gt[s][a])+e;let n,i;for(let s=0;s<3;s++)if(n=St.e[s],i=Pt.e[0]*yt[s][0]+Pt.e[1]*yt[s][1]+Pt.e[2]*yt[s][2],Math.abs(Ut[s])>n+i)return!1;for(let s=0;s<3;s++)if(n=St.e[0]*yt[0][s]+St.e[1]*yt[1][s]+St.e[2]*yt[2][s],i=Pt.e[s],Math.abs(Ut[0]*Gt[0][s]+Ut[1]*Gt[1][s]+Ut[2]*Gt[2][s])>n+i)return!1;return n=St.e[1]*yt[2][0]+St.e[2]*yt[1][0],i=Pt.e[1]*yt[0][2]+Pt.e[2]*yt[0][1],!(Math.abs(Ut[2]*Gt[1][0]-Ut[1]*Gt[2][0])>n+i||(n=St.e[1]*yt[2][1]+St.e[2]*yt[1][1],i=Pt.e[0]*yt[0][2]+Pt.e[2]*yt[0][0],Math.abs(Ut[2]*Gt[1][1]-Ut[1]*Gt[2][1])>n+i)||(n=St.e[1]*yt[2][2]+St.e[2]*yt[1][2],i=Pt.e[0]*yt[0][1]+Pt.e[1]*yt[0][0],Math.abs(Ut[2]*Gt[1][2]-Ut[1]*Gt[2][2])>n+i)||(n=St.e[0]*yt[2][0]+St.e[2]*yt[0][0],i=Pt.e[1]*yt[1][2]+Pt.e[2]*yt[1][1],Math.abs(Ut[0]*Gt[2][0]-Ut[2]*Gt[0][0])>n+i)||(n=St.e[0]*yt[2][1]+St.e[2]*yt[0][1],i=Pt.e[0]*yt[1][2]+Pt.e[2]*yt[1][0],Math.abs(Ut[0]*Gt[2][1]-Ut[2]*Gt[0][1])>n+i)||(n=St.e[0]*yt[2][2]+St.e[2]*yt[0][2],i=Pt.e[0]*yt[1][1]+Pt.e[1]*yt[1][0],Math.abs(Ut[0]*Gt[2][2]-Ut[2]*Gt[0][2])>n+i)||(n=St.e[0]*yt[1][0]+St.e[1]*yt[0][0],i=Pt.e[1]*yt[2][2]+Pt.e[2]*yt[2][1],Math.abs(Ut[1]*Gt[0][0]-Ut[0]*Gt[1][0])>n+i)||(n=St.e[0]*yt[1][1]+St.e[1]*yt[0][1],i=Pt.e[0]*yt[2][2]+Pt.e[2]*yt[2][0],Math.abs(Ut[1]*Gt[0][1]-Ut[0]*Gt[1][1])>n+i)||(n=St.e[0]*yt[1][2]+St.e[1]*yt[0][2],i=Pt.e[0]*yt[2][1]+Pt.e[1]*yt[2][0],Math.abs(Ut[1]*Gt[0][2]-Ut[0]*Gt[1][2])>n+i))}intersectsPlane(t){this.rotation.extractBasis(Rn,zn,In);const e=this.halfSizes.x*Math.abs(t.normal.dot(Rn))+this.halfSizes.y*Math.abs(t.normal.dot(zn))+this.halfSizes.z*Math.abs(t.normal.dot(In)),n=t.normal.dot(this.center)-t.constant;return Math.abs(n)<=e}fromAABB(t){return t.getCenter(this.center),t.getSize(this.halfSizes).multiplyScalar(.5),this.rotation.identity(),this}fromPoints(t){const n=new d1().fromPoints(t).faces,i=new Array,s=new Array;for(let J=0,Z=n.length;J<Z;J++){const V=n[J];let z=V.edge;i.length=0;do i.push(z),z=z.next;while(z!==V.edge);const U=i.length-2;for(let j=1,K=U;j<=K;j++){const Q=i[0].vertex,dt=i[j+0].vertex,gt=i[j+1].vertex;s.push(Q.x,Q.y,Q.z),s.push(dt.x,dt.y,dt.z),s.push(gt.x,gt.y,gt.z)}}const a=new P,o=new P,l=new P,c=new P,h=new P,u=new P,d=new P,p=new P;let g=0,m,f,x,_,y,E;m=f=x=_=y=E=0;for(let J=0,Z=s.length;J<Z;J+=9){a.fromArray(s,J),o.fromArray(s,J+3),l.fromArray(s,J+6),d.set(0,0,0),d.add(a).add(o).add(l).divideScalar(3),c.subVectors(o,a),h.subVectors(l,a);const V=u.crossVectors(c,h).length()/2;p.add(u.copy(d).multiplyScalar(V)),g+=V,m+=(9*d.x*d.x+a.x*a.x+o.x*o.x+l.x*l.x)*(V/12),f+=(9*d.x*d.y+a.x*a.y+o.x*o.y+l.x*l.y)*(V/12),x+=(9*d.x*d.z+a.x*a.z+o.x*o.z+l.x*l.z)*(V/12),_+=(9*d.y*d.y+a.y*a.y+o.y*o.y+l.y*l.y)*(V/12),y+=(9*d.y*d.z+a.y*a.z+o.y*o.z+l.y*l.z)*(V/12),E+=(9*d.z*d.z+a.z*a.z+o.z*o.z+l.z*l.z)*(V/12)}p.divideScalar(g),m/=g,f/=g,x/=g,_/=g,y/=g,E/=g,m-=p.x*p.x,f-=p.x*p.y,x-=p.x*p.z,_-=p.y*p.y,y-=p.y*p.z,E-=p.z*p.z;const A=new $n;A.elements[0]=m,A.elements[1]=f,A.elements[2]=x,A.elements[3]=f,A.elements[4]=_,A.elements[5]=y,A.elements[6]=x,A.elements[7]=y,A.elements[8]=E,A.eigenDecomposition(Ic);const S=Ic.unitary,b=new P,v=new P,B=new P;S.extractBasis(b,v,B);let R=-1/0,X=-1/0,et=-1/0,O=1/0,L=1/0,W=1/0;for(let J=0,Z=t.length;J<Z;J++){const V=t[J];R=Math.max(b.dot(V),R),X=Math.max(v.dot(V),X),et=Math.max(B.dot(V),et),O=Math.min(b.dot(V),O),L=Math.min(v.dot(V),L),W=Math.min(B.dot(V),W)}return b.multiplyScalar(.5*(O+R)),v.multiplyScalar(.5*(L+X)),B.multiplyScalar(.5*(W+et)),this.center.add(b).add(v).add(B),this.halfSizes.x=R-O,this.halfSizes.y=X-L,this.halfSizes.z=et-W,this.halfSizes.multiplyScalar(.5),this.rotation.copy(S),this}equals(t){return t.center.equals(this.center)&&t.halfSizes.equals(this.halfSizes)&&t.rotation.equals(this.rotation)}toJSON(){return{type:this.constructor.name,center:this.center.toArray(new Array),halfSizes:this.halfSizes.toArray(new Array),rotation:this.rotation.toArray(new Array)}}fromJSON(t){return this.center.fromArray(t.center),this.halfSizes.fromArray(t.halfSizes),this.rotation.fromArray(t.rotation),this}}const m1=new p1;new P;new P;new P;new P;new ya;new Array;new P;new P;new Fr;new Array;new P;new P;new br;new P;new P;new P;new P;new P;new ya;new P;const Jt=[["8BD3708E-8E3D-44B8-9E92-1050FA7987E5",` the essence of 
 love / meaning`,14.5,90,10649230,40],["D4724AD1-EECD-4975-920C-CDAD71AA53C3",`the essence of 
 wisdom / will`,14.5,210,8965361,40],["0027E01B-C40A-49F0-9833-30244700C39E",`   the essence of 
 salvation / peace`,14.5,330,15916398,40],["66F19982-732D-4744-AF06-F1F8A68D898B","Rewiring the gut",18,330,15916398,40],["287B1377-9E86-42B2-99F1-EBBEA971AB08","Rewiring the heart",18,90,10649230,40],["B5027C8B-D476-49B0-A713-ACC447159AE1","Rewiring the head",18,211,8965361,40],["4A481D1E-5DB6-4ABB-B9D0-8164F41393F9","Unconditional Peace",21,330,15916398,40],["876BC8AC-4013-448E-9ACA-A82DA031E09C","Transcendence",35,328,15916398,40],["008ADA1B-1D52-4F68-AB43-97D070D7774C",`Existential exploration / 
 Insight meditation`,52,321,15916398,40],["3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A","Deep states of calm",67,307,15916398,40],["D131CF5B-A895-4212-A4D4-A7E976CF5DA6","real meaning",21,245,8965361,20],["90212AAB-4CFE-4FDF-850A-7E6141F727AE",`potentially the source of 
 not-so-obvious (but highly 
 attractive) \u201Cqualities\u201D`,25,235,8965361,25],["611A4954-9E7D-4D25-AD7D-E1FAB38482F5","freedom",28,237,8965361,20],["5C63879D-74A6-458B-8193-AFA06A62F794","unshakable peace",30,230,8965361,20],["2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5","salvation",27,227,8965361,20],["963CA1BA-9539-4089-96AB-EB0E78602390","true wisdom",32,235,8965361,20],["EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","why important?",22.5,224,8965361,30],["982A6AFF-D536-4504-B63A-EC42A2712432",`Unconditional 
        Truth`,22.5,211,8965361,50],["F1EB56D4-15AE-4837-A070-40550E1262C7","must be reduced to",29,205,8965361,40],["506E723E-071E-4694-80AD-06BBD0681E26",`Conventional 
        truth`,35,211,8965361,50],["0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","must transcend",40,217,8965361,40],["6BDD61FD-3F46-453B-8714-64AF81BCE3F9","limitations of",35,223,8965361,30],["A81C54C1-D640-4297-AFA9-346A25B8132E","contextual",44,232,8965361,25],["9E19FF41-5144-4745-9C0B-A99858302CDE","ways of cutting the apple",36,238,8965361,25],["050308DE-F371-436D-AE9F-B0D5B7F8C282","lost in reduction",41,237,8965361,25],["A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","Diversity",35,199,8965361,30],["0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD","Dualist ontologies",31,183,8965361,40],["302B64FD-4E04-4823-8E13-C7F2FAA4E7C9","Dualism",36,177,8965361,30],["2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F","to be communicated",40,205,8965361,40],["3F0021AE-02A1-44B8-AE19-11C0D2A4FE75","to realise",29,217,8965361,40],["D456FA2C-65F4-40D2-AC84-4C7E2266BA84","Unity",22.5,199,8965361,30],["B90D2293-D457-4567-8102-363F70D95781","Monist ontologies",27,183,8965361,40],["2930997B-A726-473E-B6E9-333C2732271F","Idealism",24,184,8965361,30],["2B64F02A-BEAA-4403-8380-A8B2614D5F90","Panpsychism",24,174,8965361,30],["4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7","Physicalism",24,164,8965361,30],["EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6","Emergence",25.5,162,8965361,25],["FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8","weak",27,160,8965361,20],["23979ADC-AD3F-4447-BF76-224A807C2144","strong",32,170,8965361,20],["8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F",`the essence of 
\u201Cyou\u201D / life`,31,245,8965361,20],["2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7","all-encompassing love",27,248,8965361,20],["C978C527-2523-4078-8B16-523DF8553FD5",`the core of 
will / agency`,24,250,8965361,20],["F47603CA-44A7-4009-B07B-29DFA540729D","Unconditional Love",21,90,10649230,40],["87B9AFEC-9F64-4748-87F8-F64F2B31FC29","Atammayat\u0101",22.5,101,10649230,25],["FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07","Su\xF1\xF1at\u0101",24.5,105,10649230,25],["EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C","Tath\u0101t\u0101",27,108,10649230,25],["0EF99714-0619-45EC-A71D-B4F01B6211DC","Liberation",31,108,10649230,40],["7AFE8322-410C-44FA-8223-F6080F45359C","from",31,94,10649230,25],["236FD67F-CD44-4B75-96AD-B16FA578E708","delusion",34,94,10649230,30],["C9DCCC19-CD84-427B-9234-09050646BCD3","hatred",33,89,10649230,30],["10D1D640-DE4C-4334-B08F-A4716D198E5F","greed",29,90,10649230,30],["89ED6168-2517-4EF9-A5D6-3635A0C80BDC",`Fundamental 
 perspective change`,30,131,8965361,40],["074931F9-D5F1-401B-ABE0-1F26BA921E1F","From paradoxes to wisdom",25,131,8965361,40],["E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B",`Direct experience-based 
 understanding`,35,150,8965361,40],["9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD","Intellectual understanding",51,159,8965361,40],["39A86FA9-4CDF-4DD2-8AB6-78A36AC75762",`Basic conceptual 
 understanding`,72,162,8965361,40],["60046B15-D09E-4F1F-9BC0-BA3900E29EB9","Levels of understanding",81,169,8965361,40],["263D9AEE-6F33-4D35-B945-CE35173E2F11","Analysis / questioning",79,187,8965361,40],["3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","Open-mindedness",89,184,8965361,40],["37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","Observation",94,170,8965361,40],["4572B437-5182-4EBE-A383-F76440484F8E","Indirect",96,164,8965361,40],["9BA80071-89E9-400F-89CA-53CA700FA703","Instruments",97,158,8965361,40],["450F8534-2F59-4A8E-BA92-D417FD0FE000","Advantages",95.5,150,8965361,40],["951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","Sensing",93,158,8965361,40],["C2B220C0-B7D4-432B-9ADC-1E40F1A66E25","Introspection",90,158,8965361,40],["B470B5D1-31ED-4F91-A94D-6A94CF45E744","Limitations",93.5,150,8965361,40],["95A61B65-7A40-42FA-8622-D7A0B736BA9C","Biases",91.5,150,8965361,40],["0CEDFFCF-0C8D-4705-B40C-439631CCD3E1","Direct",92,164,8965361,40],["B8BA585E-D985-44A9-A8E9-6BC1E3EA3731",`Strategies for 
Understanding`,98,197,8965361,50],["AA38CD3C-7D47-4CD3-956C-5EE5C285E408","Dogmatism",109,193,8965361,40],["16C1A9C0-30BF-441E-8DA4-3216C0A42C51",`Thought labyrinths / 
rumination`,103,181,8965361,40],["4265E048-CDF8-4B44-836C-38549C965725","Wearing blinders",94,205,8965361,40],["807EE50B-B4E4-42B7-B1B4-10EBB38C1299",`Settles in: 
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
What is reality?`,56.5,182,8965361,40],["F1D5FF04-CA73-47D3-87C6-41C6BA8F6708","God?",62,177,8965361,40],["ACF82BBE-F34C-4E20-B18E-08F28B3ABA12","Consciousness?",59.5,172,8965361,40],["B6246F44-0855-4817-9D0D-D397E9DB7442","Space?",52,173,8965361,40],["050CF590-16D7-48A8-9656-E58FD0B6E8BF","Time?",54,170,8965361,40],["1EE48F2F-650A-413A-8F77-720A641BA416","Matter?",57,170,8965361,40],["C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA","Ontologies",29,184,8965361,40],["20790E3B-9D36-40B2-82CB-56322AA09DE7",`Epistemology - how can 
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
positive regard`,129,298,15916398,40],["23D5758E-178A-43BD-A82B-5D1F11CC1223","Alliance work",137,301,15916398,40],["7D0652E2-E579-47BC-8FB9-E1FBA3539A3F","Conflict splits",112,275,15916398,40],["5D8415B8-AD5B-44AE-804C-9A2A62B177F8","Path of the Heart",112.5,81,7606813,70],["025E5CB8-BF2F-46EC-A170-4F80BD2FCA54","Anxiety splits",119,275,15916398,40],["C120D32F-4E27-481A-97F9-9B62BB394DF9","Evocative unfolding",128,279,15916398,40],["94D5EB98-E41E-4DD5-8B8D-06598E285B4E","Trauma retelling",137,282,15916398,40],["2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB","Self-soothing",143,293,15916398,40],["4F5D4105-E8C7-4F54-97E6-F9549BC75D4F","\u2190 back and forth between \u2192",91,3,15916398,30],["65FB0CCF-F7C4-4159-9D6D-0F929AB12136","\u2190 back and forth between \u2192",103,10,15916398,30],["CF403F63-27E2-4424-B4F3-5D6CB1252881","o",180,0,7606813,70]],cr=[["8BD3708E-8E3D-44B8-9E92-1050FA7987E5","D4724AD1-EECD-4975-920C-CDAD71AA53C3","0027E01B-C40A-49F0-9833-30244700C39E"],["D4724AD1-EECD-4975-920C-CDAD71AA53C3","0027E01B-C40A-49F0-9833-30244700C39E"],["0027E01B-C40A-49F0-9833-30244700C39E"],["66F19982-732D-4744-AF06-F1F8A68D898B","287B1377-9E86-42B2-99F1-EBBEA971AB08","B5027C8B-D476-49B0-A713-ACC447159AE1"],["287B1377-9E86-42B2-99F1-EBBEA971AB08","B5027C8B-D476-49B0-A713-ACC447159AE1"],["B5027C8B-D476-49B0-A713-ACC447159AE1"],["4A481D1E-5DB6-4ABB-B9D0-8164F41393F9","876BC8AC-4013-448E-9ACA-A82DA031E09C"],["876BC8AC-4013-448E-9ACA-A82DA031E09C","008ADA1B-1D52-4F68-AB43-97D070D7774C"],["008ADA1B-1D52-4F68-AB43-97D070D7774C","3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A"],["3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A"],["D131CF5B-A895-4212-A4D4-A7E976CF5DA6","90212AAB-4CFE-4FDF-850A-7E6141F727AE"],["90212AAB-4CFE-4FDF-850A-7E6141F727AE","611A4954-9E7D-4D25-AD7D-E1FAB38482F5","5C63879D-74A6-458B-8193-AFA06A62F794","2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5","963CA1BA-9539-4089-96AB-EB0E78602390","EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F","2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7","C978C527-2523-4078-8B16-523DF8553FD5"],["611A4954-9E7D-4D25-AD7D-E1FAB38482F5"],["5C63879D-74A6-458B-8193-AFA06A62F794"],["2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5"],["963CA1BA-9539-4089-96AB-EB0E78602390"],["EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","982A6AFF-D536-4504-B63A-EC42A2712432"],["982A6AFF-D536-4504-B63A-EC42A2712432","F1EB56D4-15AE-4837-A070-40550E1262C7","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75","D456FA2C-65F4-40D2-AC84-4C7E2266BA84"],["F1EB56D4-15AE-4837-A070-40550E1262C7","506E723E-071E-4694-80AD-06BBD0681E26","2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F"],["506E723E-071E-4694-80AD-06BBD0681E26","0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","6BDD61FD-3F46-453B-8714-64AF81BCE3F9","A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["6BDD61FD-3F46-453B-8714-64AF81BCE3F9","A81C54C1-D640-4297-AFA9-346A25B8132E","9E19FF41-5144-4745-9C0B-A99858302CDE","050308DE-F371-436D-AE9F-B0D5B7F8C282"],["A81C54C1-D640-4297-AFA9-346A25B8132E"],["9E19FF41-5144-4745-9C0B-A99858302CDE"],["050308DE-F371-436D-AE9F-B0D5B7F8C282"],["A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD"],["0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD","302B64FD-4E04-4823-8E13-C7F2FAA4E7C9"],["302B64FD-4E04-4823-8E13-C7F2FAA4E7C9"],["2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F"],["3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["D456FA2C-65F4-40D2-AC84-4C7E2266BA84","B90D2293-D457-4567-8102-363F70D95781"],["B90D2293-D457-4567-8102-363F70D95781","2930997B-A726-473E-B6E9-333C2732271F","2B64F02A-BEAA-4403-8380-A8B2614D5F90","4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7"],["2930997B-A726-473E-B6E9-333C2732271F"],["2B64F02A-BEAA-4403-8380-A8B2614D5F90"],["4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7","EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6"],["EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6","FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8","23979ADC-AD3F-4447-BF76-224A807C2144"],["FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8"],["23979ADC-AD3F-4447-BF76-224A807C2144"],["8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F"],["2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7"],["C978C527-2523-4078-8B16-523DF8553FD5"],["F47603CA-44A7-4009-B07B-29DFA540729D","87B9AFEC-9F64-4748-87F8-F64F2B31FC29","0EF99714-0619-45EC-A71D-B4F01B6211DC"],["87B9AFEC-9F64-4748-87F8-F64F2B31FC29","FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07"],["FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07","EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C"],["EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C","0EF99714-0619-45EC-A71D-B4F01B6211DC"],["0EF99714-0619-45EC-A71D-B4F01B6211DC","7AFE8322-410C-44FA-8223-F6080F45359C","89ED6168-2517-4EF9-A5D6-3635A0C80BDC","B20BB587-FDB1-45B4-9F6B-04D75DB45484"],["7AFE8322-410C-44FA-8223-F6080F45359C","236FD67F-CD44-4B75-96AD-B16FA578E708","C9DCCC19-CD84-427B-9234-09050646BCD3","10D1D640-DE4C-4334-B08F-A4716D198E5F"],["236FD67F-CD44-4B75-96AD-B16FA578E708"],["C9DCCC19-CD84-427B-9234-09050646BCD3"],["10D1D640-DE4C-4334-B08F-A4716D198E5F"],["89ED6168-2517-4EF9-A5D6-3635A0C80BDC","074931F9-D5F1-401B-ABE0-1F26BA921E1F","E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B"],["074931F9-D5F1-401B-ABE0-1F26BA921E1F"],["E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B","9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD"],["9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD","39A86FA9-4CDF-4DD2-8AB6-78A36AC75762"],["39A86FA9-4CDF-4DD2-8AB6-78A36AC75762","60046B15-D09E-4F1F-9BC0-BA3900E29EB9"],["60046B15-D09E-4F1F-9BC0-BA3900E29EB9","263D9AEE-6F33-4D35-B945-CE35173E2F11"],["263D9AEE-6F33-4D35-B945-CE35173E2F11","3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","68B6E135-509A-4064-9FF9-DE55C3B66A8E","6A92592D-70EE-451D-941A-AD8F8435EF6E","DC5F27E6-E594-4651-A151-4F70145EDFD5","092BED79-8510-4E20-9040-0BF73C433EB0","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","9CE480B4-FB41-45F1-ABF5-D956A5526141"],["37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","4572B437-5182-4EBE-A383-F76440484F8E","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["4572B437-5182-4EBE-A383-F76440484F8E","9BA80071-89E9-400F-89CA-53CA700FA703"],["9BA80071-89E9-400F-89CA-53CA700FA703","450F8534-2F59-4A8E-BA92-D417FD0FE000","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C"],["450F8534-2F59-4A8E-BA92-D417FD0FE000","951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","C2B220C0-B7D4-432B-9ADC-1E40F1A66E25"],["951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["C2B220C0-B7D4-432B-9ADC-1E40F1A66E25","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["B470B5D1-31ED-4F91-A94D-6A94CF45E744"],["95A61B65-7A40-42FA-8622-D7A0B736BA9C"],["0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["B8BA585E-D985-44A9-A8E9-6BC1E3EA3731","AA38CD3C-7D47-4CD3-956C-5EE5C285E408","16C1A9C0-30BF-441E-8DA4-3216C0A42C51","807EE50B-B4E4-42B7-B1B4-10EBB38C1299","9CE480B4-FB41-45F1-ABF5-D956A5526141"],["AA38CD3C-7D47-4CD3-956C-5EE5C285E408"],["16C1A9C0-30BF-441E-8DA4-3216C0A42C51"],["4265E048-CDF8-4B44-836C-38549C965725"],["807EE50B-B4E4-42B7-B1B4-10EBB38C1299","B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","A35D6C5D-B56F-416F-B337-41FB9E923AE0"],["B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","B07DBBCA-2123-4D55-828C-6931A999128B"],["B07DBBCA-2123-4D55-828C-6931A999128B","C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8","794FB1D5-42CF-496B-929F-9568976B58FF","12872E37-D9BC-4CDD-BB7E-E09FD46D993A","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8"],["794FB1D5-42CF-496B-929F-9568976B58FF"],["12872E37-D9BC-4CDD-BB7E-E09FD46D993A","2875511F-F91A-4807-9839-4B7153B23143","F7A69942-1F8A-42CC-A8C3-8DF26E439289"],["2875511F-F91A-4807-9839-4B7153B23143","F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","334445AA-FC20-48D6-9A7D-2558857C2346","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","3E8EDBA9-59E1-4835-8343-4AA9FF799D49","43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3"],["3E8EDBA9-59E1-4835-8343-4AA9FF799D49","64077339-5087-4CBD-A706-C1AA35E8AC8B","FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B"],["64077339-5087-4CBD-A706-C1AA35E8AC8B","9E801875-A714-49E5-969A-D9A5E5497D18","334445AA-FC20-48D6-9A7D-2558857C2346"],["9E801875-A714-49E5-969A-D9A5E5497D18","31475508-739B-4966-ADC9-D8EBCE5FE3DB"],["31475508-739B-4966-ADC9-D8EBCE5FE3DB","A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E"],["A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E"],["FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B","9A853604-4CB0-4B1B-98E1-E4D95626433A","53296584-40BE-4F83-96D3-B77540245AC2"],["9A853604-4CB0-4B1B-98E1-E4D95626433A","93C64795-A33C-4578-9694-B8B0FFE287AE"],["93C64795-A33C-4578-9694-B8B0FFE287AE","73E6253F-D36B-45B8-ABF9-A72432F5F576","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["73E6253F-D36B-45B8-ABF9-A72432F5F576","D5F25680-4FED-4B74-A5D5-1B15A8C8A580","C5096451-E5CF-4498-AF7A-E97C3C8197F9"],["D5F25680-4FED-4B74-A5D5-1B15A8C8A580"],["C5096451-E5CF-4498-AF7A-E97C3C8197F9"],["53296584-40BE-4F83-96D3-B77540245AC2","EE9D175C-0953-4B73-9B31-5C7AD0C50288","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["EE9D175C-0953-4B73-9B31-5C7AD0C50288","5A058F3F-7A05-44E2-8417-7B99A2437742","42B4C435-0661-46DB-8D8B-AB2AA00D601B","64BC8F62-AA83-4E65-B1A3-D982DE8A86C1"],["5A058F3F-7A05-44E2-8417-7B99A2437742","42B4C435-0661-46DB-8D8B-AB2AA00D601B","87EFBBA1-F6E2-4A35-8897-A73210A18318","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["42B4C435-0661-46DB-8D8B-AB2AA00D601B","64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["87EFBBA1-F6E2-4A35-8897-A73210A18318","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["FC6818C0-13A9-44E2-8A38-7C4D4FB8827B"],["8873A022-151A-41EA-B380-2284DEB82A22"],["43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3","D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9"],["D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9","9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91"],["9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91"],["334445AA-FC20-48D6-9A7D-2558857C2346","074F7C7B-C390-4328-A205-B73143806FFA"],["074F7C7B-C390-4328-A205-B73143806FFA","9E66D7AE-5825-4691-BADB-FC7A75F7B29D","2C809F14-A1A9-4178-B236-FA6408CD789D","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["9E66D7AE-5825-4691-BADB-FC7A75F7B29D"],["2C809F14-A1A9-4178-B236-FA6408CD789D"],["F7A69942-1F8A-42CC-A8C3-8DF26E439289","5AE32B80-01A1-4314-9A23-453A397A2599","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","68B6E135-509A-4064-9FF9-DE55C3B66A8E"],["5AE32B80-01A1-4314-9A23-453A397A2599","72A32148-45A5-41A7-A836-0CE959AF38D4","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","6A92592D-70EE-451D-941A-AD8F8435EF6E"],["72A32148-45A5-41A7-A836-0CE959AF38D4","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","DC5F27E6-E594-4651-A151-4F70145EDFD5"],["3F0C901E-76B2-463D-B17A-8078CA2E1C91"],["E27CC807-EB70-45C4-84B3-DDF1F8AADB00"],["1E34F972-7322-4F63-A271-2BC8A5241BB8"],["76AB6EF8-AEF6-41D3-9576-2FE8D14F462B"],["5BEDE28D-38C4-4D03-B4C6-2C74ECD89078"],["D7868612-7C4F-49F8-BCAA-B03E2BCEF450"],["820F18C3-7140-4923-9D3A-2CD81A26B702"],["7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6","EB83C866-FF54-449B-A65C-24ECDE2820C1","3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58"],["EB83C866-FF54-449B-A65C-24ECDE2820C1"],["3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58"],["A35D6C5D-B56F-416F-B337-41FB9E923AE0","EDCAFFF6-FD78-40E0-B719-97569DCD8819"],["EDCAFFF6-FD78-40E0-B719-97569DCD8819","46CBB5AE-79D5-4808-A400-4B804DA91E12","E55861C5-E9D1-4B9A-956B-DC53B1C0E01E","8405A4E1-F7F9-4016-86B8-2E5C98520036","8573618D-34C1-481C-A217-71AB05C7C4D7","B9839052-6809-4E31-8792-FF4DF8C9FC48"],["46CBB5AE-79D5-4808-A400-4B804DA91E12","8D82CC00-C9F5-4B9E-B256-A879D4623B3C","9BFCB2C3-78B9-4982-8501-2BFF113D4207"],["8D82CC00-C9F5-4B9E-B256-A879D4623B3C","35476F95-E324-40D2-B224-A5E27568028C","9BFCB2C3-78B9-4982-8501-2BFF113D4207"],["35476F95-E324-40D2-B224-A5E27568028C","4D1CEB04-6987-4C58-93B0-57DBB0914867","7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8","5946ACA1-B182-4776-BAC0-5EC43E0480C6","05C8F42F-1F73-443B-B461-A3FFE6867199","4C0B70B2-C4EC-4716-A08C-220E856D5B4A"],["4D1CEB04-6987-4C58-93B0-57DBB0914867","0EF9450D-3CB7-4D13-BCFB-49088E87F374"],["0EF9450D-3CB7-4D13-BCFB-49088E87F374","80130A99-E12B-459A-B43D-1CE8BB3B1EF2"],["80130A99-E12B-459A-B43D-1CE8BB3B1EF2","2095179D-0AC4-4378-8E6F-8F71E2793FAD","D6B5FE51-C8D9-42EB-B0BE-07B09B51776C"],["2095179D-0AC4-4378-8E6F-8F71E2793FAD","AE242003-1C0A-40BF-AEA2-567E61901171","F3695B21-1EAA-404B-9239-0767DA0BC90C","B7A263AD-5457-4712-A089-03B24D041629","B4399091-3D0A-472B-A40C-BC8CDD097E7F","20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB"],["AE242003-1C0A-40BF-AEA2-567E61901171"],["F3695B21-1EAA-404B-9239-0767DA0BC90C"],["B7A263AD-5457-4712-A089-03B24D041629"],["B4399091-3D0A-472B-A40C-BC8CDD097E7F"],["20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB"],["D6B5FE51-C8D9-42EB-B0BE-07B09B51776C","6473A93C-A4A4-41D5-9765-D58B3F8A57EA","0A57B7F6-E875-485D-98F2-66458F5FBC6B","19DB1035-B51E-4F0A-8F97-888375D12E8F","34C06752-B7AD-461D-A5E9-B29CAE227645","83D9EEC0-3314-4BD5-826E-F1ADDA1492EA","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["6473A93C-A4A4-41D5-9765-D58B3F8A57EA"],["0A57B7F6-E875-485D-98F2-66458F5FBC6B"],["19DB1035-B51E-4F0A-8F97-888375D12E8F"],["34C06752-B7AD-461D-A5E9-B29CAE227645"],["83D9EEC0-3314-4BD5-826E-F1ADDA1492EA"],["1E7C0EB1-1DDE-4044-A8B7-E4540487DB1C","E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","DA6F224D-BC2D-47BF-91C5-9538BF062D81","14BA8BEB-FA35-44B7-9DE3-A1503614069D"],["DA6F224D-BC2D-47BF-91C5-9538BF062D81","603F93B5-AA5A-49C2-8AEE-440DA485BA40","F26DDAD3-74C1-48A8-9488-8BAB580947E7","05CF2077-5B2D-43E7-92AC-232082EA7F8C","DEA78281-438E-4CB6-ADCE-25DC85D9FF37"],["603F93B5-AA5A-49C2-8AEE-440DA485BA40"],["F26DDAD3-74C1-48A8-9488-8BAB580947E7"],["05CF2077-5B2D-43E7-92AC-232082EA7F8C","F0AA6E16-8A46-43FA-B435-942FFF734B06","BEA84E38-CF01-4A16-941B-F26EEE3E6D88","EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3","C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF"],["F0AA6E16-8A46-43FA-B435-942FFF734B06"],["BEA84E38-CF01-4A16-941B-F26EEE3E6D88"],["EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3"],["C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF"],["DEA78281-438E-4CB6-ADCE-25DC85D9FF37","202B8B0D-13DA-459A-9D5E-ED5DD40D30E4"],["202B8B0D-13DA-459A-9D5E-ED5DD40D30E4","0AA203B9-8B52-4412-B32D-D412F894D779","2BAF7986-984E-4937-BA03-E5CBAA234AEF","1D823800-DD7A-4B6F-94EA-517D4DE9876B"],["0AA203B9-8B52-4412-B32D-D412F894D779","6A20558B-3A35-4D14-8EBE-3C5DF4F02868"],["6A20558B-3A35-4D14-8EBE-3C5DF4F02868","96786F52-EB9D-42BB-B854-457841A162BA","28106D6F-9E60-4579-A457-B2F4DB781D6D","D81C6E33-ED3A-45ED-9567-78EC22F9A6C7","8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B","14BA8BEB-FA35-44B7-9DE3-A1503614069D"],["96786F52-EB9D-42BB-B854-457841A162BA"],["28106D6F-9E60-4579-A457-B2F4DB781D6D"],["D81C6E33-ED3A-45ED-9567-78EC22F9A6C7"],["8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B"],["2BAF7986-984E-4937-BA03-E5CBAA234AEF","C0074FCF-7AB4-4781-BC26-3812FBA61015","CB62D122-2342-4D33-B98D-EE3BD70B6538","64192F80-785C-4B14-AF81-987193E41085","83BC3254-7B62-4D9C-BC20-192D2D442466","4788E206-DE47-48FA-8DC4-326274991F8D","111EBFA8-E400-4984-A638-63120DDC1590"],["C0074FCF-7AB4-4781-BC26-3812FBA61015"],["CB62D122-2342-4D33-B98D-EE3BD70B6538"],["64192F80-785C-4B14-AF81-987193E41085"],["83BC3254-7B62-4D9C-BC20-192D2D442466"],["4788E206-DE47-48FA-8DC4-326274991F8D"],["111EBFA8-E400-4984-A638-63120DDC1590"],["1D823800-DD7A-4B6F-94EA-517D4DE9876B","C0993BB8-9C64-4F7A-A673-289EA2A33D0D","4AF3AF2F-5D76-4620-911E-54398F84F288","672E2CBD-7421-4E94-9728-95353BCD772E"],["C0993BB8-9C64-4F7A-A673-289EA2A33D0D","00E891B6-75E2-43B7-97B4-62F6DD69B15B"],["00E891B6-75E2-43B7-97B4-62F6DD69B15B","B477D774-01E4-4F6A-93B1-111E699FFE75","E2D52070-A83C-4D48-A218-BB3DC7BEAF21","EBCF0E75-DA1D-4533-BEEA-73657C4588AF","4AF3AF2F-5D76-4620-911E-54398F84F288","83BA614D-5560-48B0-8377-217CF04E01FC"],["B477D774-01E4-4F6A-93B1-111E699FFE75"],["E2D52070-A83C-4D48-A218-BB3DC7BEAF21"],["EBCF0E75-DA1D-4533-BEEA-73657C4588AF"],["4AF3AF2F-5D76-4620-911E-54398F84F288"],["672E2CBD-7421-4E94-9728-95353BCD772E"],["14BA8BEB-FA35-44B7-9DE3-A1503614069D","1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","E8F9F0EB-2B89-4D4C-901E-A029C0211A93","268F9754-9375-4E1F-B752-233A8F83F592","B20BB587-FDB1-45B4-9F6B-04D75DB45484"],["1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","A478FC19-7AC1-4480-A9C9-93AD4C925970","61282C0C-C654-4B5D-B2F9-ECF698B16489","9FC8F28B-4B52-4BFC-9349-4B5271FCDD84"],["A478FC19-7AC1-4480-A9C9-93AD4C925970","6E92A01E-0E8D-494E-8249-EF0EF0D22987","349EFC6D-D96C-4E61-A839-93D31BF698B5","ED71676A-652A-400A-AAEB-70A6B980A6F2"],["6E92A01E-0E8D-494E-8249-EF0EF0D22987"],["349EFC6D-D96C-4E61-A839-93D31BF698B5"],["ED71676A-652A-400A-AAEB-70A6B980A6F2"],["61282C0C-C654-4B5D-B2F9-ECF698B16489"],["9FC8F28B-4B52-4BFC-9349-4B5271FCDD84"],["E8F9F0EB-2B89-4D4C-901E-A029C0211A93","CCBD9962-2FF7-4C39-97B9-D93FA4044BD3","D0E50499-8C3F-4818-BBAA-FEB433FC1704","BC583511-0DA5-4F1E-B699-D72CB449DD00","C4B7A8B7-5171-4873-B269-0A0582CA2084","FC88FDFD-AE27-4F76-938D-6FE581E65D08","30F3B081-5F90-4F13-BC8D-BBC7293CEC04","D49F0D1E-5DD6-4147-88E2-604F7E4A3566"],["CCBD9962-2FF7-4C39-97B9-D93FA4044BD3"],["D0E50499-8C3F-4818-BBAA-FEB433FC1704"],["BC583511-0DA5-4F1E-B699-D72CB449DD00"],["C4B7A8B7-5171-4873-B269-0A0582CA2084"],["FC88FDFD-AE27-4F76-938D-6FE581E65D08"],["30F3B081-5F90-4F13-BC8D-BBC7293CEC04"],["D49F0D1E-5DD6-4147-88E2-604F7E4A3566"],["268F9754-9375-4E1F-B752-233A8F83F592","B46F4E38-26DA-4388-91DA-32731D7B44A1","21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F","A6BA6799-B325-453E-B4D1-BCD71CF12705"],["B46F4E38-26DA-4388-91DA-32731D7B44A1","6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0","8AABE820-1F0B-4DDD-BFF2-9177B2A47112","128A73FA-B982-4A3E-B9C8-4AFBAB70AB56"],["128A73FA-B982-4A3E-B9C8-4AFBAB70AB56"],["6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0"],["8AABE820-1F0B-4DDD-BFF2-9177B2A47112"],["21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F"],["A6BA6799-B325-453E-B4D1-BCD71CF12705","FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1","D358D3A2-957C-470B-BC5F-A71A7622AE07","55EF8116-598E-4168-ADBC-9248DB79A821"],["FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1"],["D358D3A2-957C-470B-BC5F-A71A7622AE07"],["55EF8116-598E-4168-ADBC-9248DB79A821"],["CBDECA18-D9A1-4FDE-84FD-DDB8849710A3","A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","F05326DF-FA0C-4619-8A75-0411CB1CB2F9"],["F05326DF-FA0C-4619-8A75-0411CB1CB2F9","9EAF3484-3F2C-415B-8067-B50A3FA1B974"],["9EAF3484-3F2C-415B-8067-B50A3FA1B974","ADBA0E07-67F4-47EC-B776-EE198BCA1A53"],["ADBA0E07-67F4-47EC-B776-EE198BCA1A53","75FF467B-7F2F-4EEC-ADC9-2D64EE46D692"],["75FF467B-7F2F-4EEC-ADC9-2D64EE46D692","03593653-145D-4B52-9873-D90B412C8468"],["03593653-145D-4B52-9873-D90B412C8468","4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953"],["4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953"],["B1212500-7C71-4B0B-B979-C8A5E93B544C","D7191BF4-96AD-46A9-89F8-B015FD27C991","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["D7191BF4-96AD-46A9-89F8-B015FD27C991","F63DCD53-F24F-4AE7-84C0-61419A5D6E68"],["F63DCD53-F24F-4AE7-84C0-61419A5D6E68","6FD89C72-5D89-4A96-B643-4BDDDEC450AC"],["6FD89C72-5D89-4A96-B643-4BDDDEC450AC","28B608E4-AED5-4042-977B-B32908F4DC0F"],["28B608E4-AED5-4042-977B-B32908F4DC0F","04FEF0CF-A123-4DB2-A9CC-72E134399258"],["04FEF0CF-A123-4DB2-A9CC-72E134399258","E78076C8-224D-4606-81AD-7DF62AE1B946"],["E78076C8-224D-4606-81AD-7DF62AE1B946","6D9D49EF-63D9-441E-865B-80CFE99B3E48"],["6D9D49EF-63D9-441E-865B-80CFE99B3E48","E0E57B88-D092-45E3-93DE-F47199063BEA"],["E0E57B88-D092-45E3-93DE-F47199063BEA","1F0628F7-D965-4529-8228-AA53C73527B2"],["1F0628F7-D965-4529-8228-AA53C73527B2","5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B"],["5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B","EC74E906-1F03-4570-A640-5E95985106E8"],["EC74E906-1F03-4570-A640-5E95985106E8"],["7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8"],["5946ACA1-B182-4776-BAC0-5EC43E0480C6"],["05C8F42F-1F73-443B-B461-A3FFE6867199","E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0"],["E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0"],["4C0B70B2-C4EC-4716-A08C-220E856D5B4A","A870BA4E-6243-4C93-B823-BDF69104A69A"],["A870BA4E-6243-4C93-B823-BDF69104A69A"],["9BFCB2C3-78B9-4982-8501-2BFF113D4207","2C1FEC64-B01F-4D90-93AF-4F17977F3E05"],["2C1FEC64-B01F-4D90-93AF-4F17977F3E05","27D920A3-4748-497F-92C3-0CEAE399325B","FF0DE3EB-BA66-4B54-9700-1075754A5EB3","53CADF73-2F2C-4BCC-8748-842EE8177A85","5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B","8A3E20D3-00BC-47E5-AC05-E717C6A803C6"],["27D920A3-4748-497F-92C3-0CEAE399325B","3DB4BB32-A030-449C-B131-424A2FD3A651"],["3DB4BB32-A030-449C-B131-424A2FD3A651","FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D"],["FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D","744A07BE-0872-47C6-B69E-6FD2A3E8EC1B","13BD4AA3-E5C9-4A13-A702-70244A2B81AC"],["744A07BE-0872-47C6-B69E-6FD2A3E8EC1B"],["13BD4AA3-E5C9-4A13-A702-70244A2B81AC","6940ABE5-F16A-451E-9986-1853902A8FAA","475EAF65-F5DA-4D50-AA66-64CF5305CBC9","A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","4D115C88-FC8E-4544-AC27-0B775B126D44"],["6940ABE5-F16A-451E-9986-1853902A8FAA","2657C9EE-BFA1-43FA-BB34-1A624A4E5237","228A6803-C3D9-420B-A083-476A5B6FE927"],["2657C9EE-BFA1-43FA-BB34-1A624A4E5237"],["228A6803-C3D9-420B-A083-476A5B6FE927","F095128A-1A37-4D3C-98C5-FAE6E3F9E808"],["F095128A-1A37-4D3C-98C5-FAE6E3F9E808"],["475EAF65-F5DA-4D50-AA66-64CF5305CBC9","39717030-47DE-4D14-8D3B-9D454BE3AF3B"],["39717030-47DE-4D14-8D3B-9D454BE3AF3B"],["A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","08A7BDCA-0161-40B1-9F74-EF7E09C1BE13","8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["08A7BDCA-0161-40B1-9F74-EF7E09C1BE13","8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["4D115C88-FC8E-4544-AC27-0B775B126D44","4D115C88-FC8E-4544-AC27-0B775B126D44","84C0342B-29BC-4E8A-A39D-0D638491312E","F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["84C0342B-29BC-4E8A-A39D-0D638491312E","F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["FF0DE3EB-BA66-4B54-9700-1075754A5EB3"],["53CADF73-2F2C-4BCC-8748-842EE8177A85","D733DA5C-E0BC-4EAE-BD64-92B116E15988"],["D733DA5C-E0BC-4EAE-BD64-92B116E15988"],["5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B","CC9D819E-DC87-4E17-97B4-AADC851E9E8E"],["CC9D819E-DC87-4E17-97B4-AADC851E9E8E"],["8A3E20D3-00BC-47E5-AC05-E717C6A803C6","83BA614D-5560-48B0-8377-217CF04E01FC"],["83BA614D-5560-48B0-8377-217CF04E01FC"],["E55861C5-E9D1-4B9A-956B-DC53B1C0E01E"],["8405A4E1-F7F9-4016-86B8-2E5C98520036"],["8573618D-34C1-481C-A217-71AB05C7C4D7","F05FC454-9C67-4E53-AAC4-A288D7E0E4E2"],["F05FC454-9C67-4E53-AAC4-A288D7E0E4E2"],["B9839052-6809-4E31-8792-FF4DF8C9FC48","38B0E475-2D54-4818-ABC6-E353229FDFF2"],["38B0E475-2D54-4818-ABC6-E353229FDFF2"],["68B6E135-509A-4064-9FF9-DE55C3B66A8E"],["6A92592D-70EE-451D-941A-AD8F8435EF6E"],["DC5F27E6-E594-4651-A151-4F70145EDFD5"],["092BED79-8510-4E20-9040-0BF73C433EB0","F1D5FF04-CA73-47D3-87C6-41C6BA8F6708","ACF82BBE-F34C-4E20-B18E-08F28B3ABA12","B6246F44-0855-4817-9D0D-D397E9DB7442","050CF590-16D7-48A8-9656-E58FD0B6E8BF","1EE48F2F-650A-413A-8F77-720A641BA416","C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA"],["F1D5FF04-CA73-47D3-87C6-41C6BA8F6708"],["ACF82BBE-F34C-4E20-B18E-08F28B3ABA12"],["B6246F44-0855-4817-9D0D-D397E9DB7442"],["050CF590-16D7-48A8-9656-E58FD0B6E8BF"],["1EE48F2F-650A-413A-8F77-720A641BA416"],["C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA"],["20790E3B-9D36-40B2-82CB-56322AA09DE7","28763A09-FA38-43D2-A7C3-52E15D20F5B9"],["28763A09-FA38-43D2-A7C3-52E15D20F5B9"],["B20BB587-FDB1-45B4-9F6B-04D75DB45484","9C1A33F2-FA28-4FD0-B3A3-011939BF112E","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["9C1A33F2-FA28-4FD0-B3A3-011939BF112E","0B0E75E0-8E66-4B96-8D18-05B388B8166B","39C8C744-9E33-4FBD-B64F-4392BB1D7D43","F3CDF5ED-FE39-4306-9BC7-732E7252919B","C4AE0F47-95C9-42BF-875A-9DF1743AAFB2","EE895C76-B04A-4587-9970-5A6CBA56069C"],["0B0E75E0-8E66-4B96-8D18-05B388B8166B"],["39C8C744-9E33-4FBD-B64F-4392BB1D7D43"],["F3CDF5ED-FE39-4306-9BC7-732E7252919B"],["C4AE0F47-95C9-42BF-875A-9DF1743AAFB2","33DB61E6-CD56-4F49-98BD-5397EB788805","6C32C072-E56E-40F0-AC39-7909FC465612","64768881-AED3-403E-92A8-E4A3CBB39100"],["33DB61E6-CD56-4F49-98BD-5397EB788805","554920A7-A50D-44F4-8448-DD747BBB57DA"],["554920A7-A50D-44F4-8448-DD747BBB57DA","803C7EA0-EF36-42AE-B810-7620C3509FEA","21CBC21A-6D6E-424D-B1D0-DCCD5425A05B","A9BA755A-FE4B-498E-9952-40214F02B8D6","6C32C072-E56E-40F0-AC39-7909FC465612","64768881-AED3-403E-92A8-E4A3CBB39100","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["803C7EA0-EF36-42AE-B810-7620C3509FEA"],["21CBC21A-6D6E-424D-B1D0-DCCD5425A05B"],["A9BA755A-FE4B-498E-9952-40214F02B8D6","5503BDDB-9985-44D9-B9A4-F731513F6903","FEC6325D-1E5F-4790-A841-63709B264A8D","82F1F09B-EBCB-4F04-BDF1-4991F27E3724"],["82F1F09B-EBCB-4F04-BDF1-4991F27E3724","82F1F09B-EBCB-4F04-BDF1-4991F27E3724"],["5503BDDB-9985-44D9-B9A4-F731513F6903","FEC6325D-1E5F-4790-A841-63709B264A8D"],["FEC6325D-1E5F-4790-A841-63709B264A8D","905689F0-5537-42CC-B864-9166DA60C470","D8049867-1FC0-4817-BD67-64A421349C65"],["905689F0-5537-42CC-B864-9166DA60C470"],["D8049867-1FC0-4817-BD67-64A421349C65","6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB"],["6C32C072-E56E-40F0-AC39-7909FC465612"],["64768881-AED3-403E-92A8-E4A3CBB39100"],["EE895C76-B04A-4587-9970-5A6CBA56069C"],["DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["95BBCB02-420D-4FD9-A9BA-A404D72B41D3"],["6A893E71-2F6B-4958-B917-5F145FA37CF5","3041389D-AD21-46F6-9721-2DD4E9FC1F65"],["3041389D-AD21-46F6-9721-2DD4E9FC1F65"],["CC97CAEF-3828-466E-B55A-BA85783CE034","4F5D4105-E8C7-4F54-97E6-F9549BC75D4F"],["0F8B3461-7B9D-4E1D-A392-A6DE782AE537"],["DEADD385-73FB-4EA3-AACC-13C6B453E9E6","CDC69285-DE4B-40DE-BDFB-73C750FA8CB4"],["CDC69285-DE4B-40DE-BDFB-73C750FA8CB4","EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95"],["EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95","662B5EE1-6533-44B3-BC7A-2DF7708F1658"],["662B5EE1-6533-44B3-BC7A-2DF7708F1658"],["973015FD-576A-40F3-A86C-2E8EDA196B5F","29155A2F-FCBB-4347-90DE-E8D3F86A3FFA","E400970C-2383-40ED-90F4-793AFAD87E45","65FB0CCF-F7C4-4159-9D6D-0F929AB12136"],["29155A2F-FCBB-4347-90DE-E8D3F86A3FFA"],["E400970C-2383-40ED-90F4-793AFAD87E45","788AC673-A0A0-4E77-93EC-2A21B981D7A8"],["788AC673-A0A0-4E77-93EC-2A21B981D7A8","3C66F9F4-19C8-497C-AD5A-377F74970968"],["3C66F9F4-19C8-497C-AD5A-377F74970968","829B047D-0C32-4887-8A3B-690BED8B847B","DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["829B047D-0C32-4887-8A3B-690BED8B847B","DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["88244D22-DAEF-4189-83EB-E7B5D5726E62"],["9CE480B4-FB41-45F1-ABF5-D956A5526141"],["F2CA7E5B-766D-48F0-941D-D4B1FD54C097"],["987F0FDD-0FAF-44FC-9DE7-7D88E32D801D","6423DD8B-C097-4C26-9917-D401ACA5FE91"],["6423DD8B-C097-4C26-9917-D401ACA5FE91","6345AAF7-5F22-49C1-8052-E28059BFFC3F"],["6345AAF7-5F22-49C1-8052-E28059BFFC3F","29EA91F8-0360-45F4-9E0A-511D80C51516","2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","04C21F20-915C-446A-902D-A8D5D7076C6F"],["29EA91F8-0360-45F4-9E0A-511D80C51516","4798DE69-2868-4EA6-84D8-E4D0CE7A90E8"],["4798DE69-2868-4EA6-84D8-E4D0CE7A90E8"],["2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3"],["2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3"],["04C21F20-915C-446A-902D-A8D5D7076C6F","23D5758E-178A-43BD-A82B-5D1F11CC1223"],["23D5758E-178A-43BD-A82B-5D1F11CC1223"],["7D0652E2-E579-47BC-8FB9-E1FBA3539A3F"],["5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["025E5CB8-BF2F-46EC-A170-4F80BD2FCA54"],["C120D32F-4E27-481A-97F9-9B62BB394DF9"],["94D5EB98-E41E-4DD5-8B8D-06598E285B4E"],["2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB"],["4F5D4105-E8C7-4F54-97E6-F9549BC75D4F"],["65FB0CCF-F7C4-4159-9D6D-0F929AB12136"],["CF403F63-27E2-4424-B4F3-5D6CB1252881"]];function Ho(r,t){return Math.random()*(t-r)+r}function wh(r,t,e){e===void 0&&(e=7);let n=0,i=0;for(;n===0;)n=Math.random();for(;i===0;)i=Math.random();let s=Math.sqrt(-e*Math.log(n))*Math.cos(e*Math.PI*i);return s=s/10+.5,s>1||s<0?wh(r,t):(s=Math.floor(s*(t-r+1)+r),s)}function g1(r,t){return r=Math.ceil(r),t=Math.floor(t),Math.floor(Math.random()*(t-r+1))+r}function un(r,t,e){let n=r*Math.PI/180,i=t*Math.PI/180-Math.PI,s=e*Math.sin(n)*Math.sin(i),a=e*Math.cos(n),o=e*Math.sin(n)*Math.cos(i);return{x:s,y:a,z:o}}function x1(r,t,e){let n=Math.acos(t/Math.sqrt(Math.pow(e,2)+Math.pow(r,2)+Math.pow(t,2))),i=Math.atan(r/e),s=!1,a=!1;e>0&&(s=!0),r>0&&(a=!0);let o=n/Math.PI*180,l=i/Math.PI*180+180;return s==!1&&a==!1&&(l-=180),s==!1&&a==!0&&(l+=180),{lat:o,lng:l}}const _1="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",A1="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=0.7-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.3,0.6,1.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere,1.0);}",v1="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",E1="varying vec3 vertexNormal;void main(){float intensity=pow(0.1-dot(vertexNormal,vec3(0.0,0.0,1.0)),1.1);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}",Oc={type:"change"},Wo={type:"start"},Uc={type:"end"};class y1 extends Kn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Ae),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Oc),n.update(),s=i.NONE},this.update=function(){const D=new F,$=new jn().setFromUnitVectors(t.up,new F(0,1,0)),it=$.clone().invert(),lt=new F,ot=new jn,At=2*Math.PI;return function(){const Vt=n.object.position;D.copy(Vt).sub(n.target),D.applyQuaternion($),o.setFromVector3(D),n.autoRotate&&s===i.NONE&&B(b()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let T=n.minAzimuthAngle,rt=n.maxAzimuthAngle;return isFinite(T)&&isFinite(rt)&&(T<-Math.PI?T+=At:T>Math.PI&&(T-=At),rt<-Math.PI?rt+=At:rt>Math.PI&&(rt-=At),T<=rt?o.theta=Math.max(T,Math.min(rt,o.theta)):o.theta=o.theta>(T+rt)/2?Math.max(T,o.theta):Math.min(rt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),D.setFromSpherical(o),D.applyQuaternion(it),Vt.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||lt.distanceToSquared(n.object.position)>a||8*(1-ot.dot(n.object.quaternion))>a?(n.dispatchEvent(Oc),lt.copy(n.object.position),ot.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",jt),n.domElement.removeEventListener("pointercancel",_e),n.domElement.removeEventListener("wheel",we),n.domElement.removeEventListener("pointermove",oe),n.domElement.removeEventListener("pointerup",Qt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ae)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Kl,l=new Kl;let c=1;const h=new F;let u=!1;const d=new ct,p=new ct,g=new ct,m=new ct,f=new ct,x=new ct,_=new ct,y=new ct,E=new ct,A=[],S={};function b(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function B(D){l.theta-=D}function R(D){l.phi-=D}const X=function(){const D=new F;return function(it,lt){D.setFromMatrixColumn(lt,0),D.multiplyScalar(-it),h.add(D)}}(),et=function(){const D=new F;return function(it,lt){n.screenSpacePanning===!0?D.setFromMatrixColumn(lt,1):(D.setFromMatrixColumn(lt,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(it),h.add(D)}}(),O=function(){const D=new F;return function(it,lt){const ot=n.domElement;if(n.object.isPerspectiveCamera){const At=n.object.position;D.copy(At).sub(n.target);let wt=D.length();wt*=Math.tan(n.object.fov/2*Math.PI/180),X(2*it*wt/ot.clientHeight,n.object.matrix),et(2*lt*wt/ot.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(it*(n.object.right-n.object.left)/n.object.zoom/ot.clientWidth,n.object.matrix),et(lt*(n.object.top-n.object.bottom)/n.object.zoom/ot.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(D){d.set(D.clientX,D.clientY)}function Z(D){_.set(D.clientX,D.clientY)}function V(D){m.set(D.clientX,D.clientY)}function z(D){p.set(D.clientX,D.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const $=n.domElement;B(2*Math.PI*g.x/$.clientHeight),R(2*Math.PI*g.y/$.clientHeight),d.copy(p),n.update()}function U(D){y.set(D.clientX,D.clientY),E.subVectors(y,_),E.y>0?L(v()):E.y<0&&W(v()),_.copy(y),n.update()}function j(D){f.set(D.clientX,D.clientY),x.subVectors(f,m).multiplyScalar(n.panSpeed),O(x.x,x.y),m.copy(f),n.update()}function K(D){D.deltaY<0?W(v()):D.deltaY>0&&L(v()),n.update()}function Q(D){let $=!1;switch(D.code){case n.keys.UP:O(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:O(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:O(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:O(-n.keyPanSpeed,0),$=!0;break}$&&(D.preventDefault(),n.update())}function dt(){if(A.length===1)d.set(A[0].pageX,A[0].pageY);else{const D=.5*(A[0].pageX+A[1].pageX),$=.5*(A[0].pageY+A[1].pageY);d.set(D,$)}}function gt(){if(A.length===1)m.set(A[0].pageX,A[0].pageY);else{const D=.5*(A[0].pageX+A[1].pageX),$=.5*(A[0].pageY+A[1].pageY);m.set(D,$)}}function Y(){const D=A[0].pageX-A[1].pageX,$=A[0].pageY-A[1].pageY,it=Math.sqrt(D*D+$*$);_.set(0,it)}function Lt(){n.enableZoom&&Y(),n.enablePan&&gt()}function xt(){n.enableZoom&&Y(),n.enableRotate&&dt()}function vt(D){if(A.length==1)p.set(D.pageX,D.pageY);else{const it=_t(D),lt=.5*(D.pageX+it.x),ot=.5*(D.pageY+it.y);p.set(lt,ot)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const $=n.domElement;B(2*Math.PI*g.x/$.clientHeight),R(2*Math.PI*g.y/$.clientHeight),d.copy(p)}function ft(D){if(A.length===1)f.set(D.pageX,D.pageY);else{const $=_t(D),it=.5*(D.pageX+$.x),lt=.5*(D.pageY+$.y);f.set(it,lt)}x.subVectors(f,m).multiplyScalar(n.panSpeed),O(x.x,x.y),m.copy(f)}function It(D){const $=_t(D),it=D.pageX-$.x,lt=D.pageY-$.y,ot=Math.sqrt(it*it+lt*lt);y.set(0,ot),E.set(0,Math.pow(y.y/_.y,n.zoomSpeed)),L(E.y),_.copy(y)}function Dt(D){n.enableZoom&&It(D),n.enablePan&&ft(D)}function mt(D){n.enableZoom&&It(D),n.enableRotate&&vt(D)}function jt(D){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",oe),n.domElement.addEventListener("pointerup",Qt)),tt(D),D.pointerType==="touch"?w(D):te(D))}function oe(D){n.enabled!==!1&&(D.pointerType==="touch"?C(D):Nt(D))}function Qt(D){nt(D),A.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",oe),n.domElement.removeEventListener("pointerup",Qt)),n.dispatchEvent(Uc),s=i.NONE}function _e(D){nt(D)}function te(D){let $;switch(D.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case si.DOLLY:if(n.enableZoom===!1)return;Z(D),s=i.DOLLY;break;case si.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;V(D),s=i.PAN}else{if(n.enableRotate===!1)return;J(D),s=i.ROTATE}break;case si.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;J(D),s=i.ROTATE}else{if(n.enablePan===!1)return;V(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Wo)}function Nt(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;z(D);break;case i.DOLLY:if(n.enableZoom===!1)return;U(D);break;case i.PAN:if(n.enablePan===!1)return;j(D);break}}function we(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(Wo),K(D),n.dispatchEvent(Uc))}function Ae(D){n.enabled===!1||n.enablePan===!1||Q(D)}function w(D){switch(at(D),A.length){case 1:switch(n.touches.ONE){case ri.ROTATE:if(n.enableRotate===!1)return;dt(),s=i.TOUCH_ROTATE;break;case ri.PAN:if(n.enablePan===!1)return;gt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Lt(),s=i.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Wo)}function C(D){switch(at(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;vt(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ft(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Dt(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(D),n.update();break;default:s=i.NONE}}function G(D){n.enabled!==!1&&D.preventDefault()}function tt(D){A.push(D)}function nt(D){delete S[D.pointerId];for(let $=0;$<A.length;$++)if(A[$].pointerId==D.pointerId){A.splice($,1);return}}function at(D){let $=S[D.pointerId];$===void 0&&($=new ct,S[D.pointerId]=$),$.set(D.pageX,D.pageY)}function _t(D){const $=D.pointerId===A[0].pointerId?A[1]:A[0];return S[$.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",jt),n.domElement.addEventListener("pointercancel",_e),n.domElement.addEventListener("wheel",we,{passive:!1}),this.update()}}class C1 extends Br{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new Og(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){const l=s.parse(JSON.parse(o));e&&e(l)},n,i)}parse(t){return new D1(t)}}class D1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=M1(t,e,this.data);for(let s=0,a=i.length;s<a;s++)n.push(...i[s].toShapes());return n}}function M1(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=s;else{const u=B1(h,i,o,l,e);o+=u.offsetX,a.push(u.path)}}return a}function B1(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const a=new Wg;let o,l,c,h,u,d,p,g;if(s.o){const m=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let f=0,x=m.length;f<x;)switch(m[f++]){case"m":o=m[f++]*t+e,l=m[f++]*t+n,a.moveTo(o,l);break;case"l":o=m[f++]*t+e,l=m[f++]*t+n,a.lineTo(o,l);break;case"q":c=m[f++]*t+e,h=m[f++]*t+n,u=m[f++]*t+e,d=m[f++]*t+n,a.quadraticCurveTo(u,d,c,h);break;case"b":c=m[f++]*t+e,h=m[f++]*t+n,u=m[f++]*t+e,d=m[f++]*t+n,p=m[f++]*t+e,g=m[f++]*t+n,a.bezierCurveTo(u,d,p,g,c,h);break}}return{offsetX:s.ha*t,path:a}}const w1="/Planet/assets/terrain8k.d5bba463.jpg",S1="/Planet/assets/normal8k.fc4444fd.jpg",F1="/Planet/assets/roughness2k.06c786a2.jpg",b1="/Planet/assets/clouds2.dec6ecfe.png",T1="/Planet/assets/cloudsalpha.78a3d208.jpg",P1="/Planet/assets/star.71d593a7.png",L1="/Planet/assets/moon.b246064f.jpg",R1="/Planet/assets/moon2.29310b47.png",z1="/Planet/assets/moon3.d1a182f0.png",I1="https://jaranolsen.github.io/Planet/SourceSans3_Regular.json",Sh=document.querySelector("#c"),qo=new oh({canvas:Sh,antialias:!0});function N1(r){const t=r.domElement,e=t.clientWidth,n=t.clientHeight,i=t.width!==e||t.height!==n;return i&&r.setSize(e,n,!1),i}const O1=50,U1=2,V1=.1,k1=2e3,an=new Ce(O1,U1,V1,k1);an.position.z=50;const dn=new y1(an,Sh);dn.enablePan=!1;dn.maxDistance=1e3;dn.minDistance=5.5;dn.zoomSpeed=.3;dn.rotateSpeed=.3;dn.target.set(0,0,0);dn.update();const Be=new ig,dr=new ct;new F;const vr=new Hg;let Mi=null;const Vc=new F(0,0,0),G1=new C1;G1.load(I1,function(r){function t(e,n,i,s,a,o){const l=new wn({color:0,transparent:!1,side:He}),c=new wn({color:s,transparent:!0,opacity:.5,side:He}),h=r.generateShapes(e,100),u=new us(h);u.computeBoundingBox();const d=-.5*(u.boundingBox.max.x-u.boundingBox.min.x),p=.5*(u.boundingBox.max.y-u.boundingBox.min.y);u.translate(d,p*2,0);const g=new ne(u,l),m=5.06;let f=un(n,i,m),x=new F(f.x,f.y,f.z);g.lookAt(x),g.position.x=f.x,g.position.y=f.y,g.position.z=f.z,g.scale.x=o,g.scale.y=o,g.scale.z=o;const _=200,y=0;let E=o*125,A=0,S=0,b=(Math.abs(u.boundingBox.min.x)+Math.abs(u.boundingBox.max.x)+_)*o,v=(Math.abs(u.boundingBox.min.y)+Math.abs(u.boundingBox.max.y)+y)*o,B=new bi;B.moveTo(A,S+E),B.lineTo(A,S+v-E),B.quadraticCurveTo(A,S+v,A+E,S+v),B.lineTo(A+b-E,S+v),B.quadraticCurveTo(A+b,S+v,A+b,S+v-E),B.lineTo(A+b,S+E),B.quadraticCurveTo(A+b,S,A+b-E,S),B.lineTo(A+E,S),B.quadraticCurveTo(A,S,A,S+E);const R=new qg(B);var X=R.attributes.uv;let et=1/0,O=0;for(var L=0;L<X.count;L++){let U=X.getX(L),j=X.getY(L);et=Math.min(et,U,j),O=Math.max(O,U,j)}for(var L=0;L<X.count;L++){let j=X.getX(L),K=X.getY(L);j=al.mapLinear(j,et,O,0,1),K=al.mapLinear(K,et,O,0,1),X.setXY(L,j,K)}R.computeBoundingBox();const W=-.5*(R.boundingBox.max.x-R.boundingBox.min.x),J=-.5*(R.boundingBox.max.y-R.boundingBox.min.y);R.translate(W,J*0,0);let Z=new ne(R,c),V=un(n,i,m-.01),z=new F(V.x,V.y,V.z);Z.lookAt(z),Z.position.copy(z),Be.add(Z),Be.add(g)}for(let e=0;e<Jt.length;e++)t(Jt[e][1],Jt[e][2],Jt[e][3]-180,Jt[e][4],Jt[e][4],Jt[e][5]/1e5)});let Ca=[];document.querySelector("#labels");function H1(r,t,e,n,i,s){const a=new ne(new fn(s,20,20),new wn({color:n}));i=i;let l=un(t,e,5.01);return a.position.set(l.x,l.y,l.z),Be.add(a),Ca.push(a),{pin:a,originalColor:i}}let fr=[];for(let r=0;r<Jt.length;r++){let t=H1(Jt[r][1],Jt[r][2],Jt[r][3]-180,Jt[r][4],Jt[r][4],Jt[r][5]/1500);fr.push(t)}for(let r=0;r<Jt.length;r++)for(let t=0;t<cr.length;t++)if(Jt[r][0]==cr[t][0]){for(let e=1;e<cr[t].length;e++)for(let n=0;n<Jt.length;n++)if(Jt[n][0]==cr[t][e]){let i=un(Jt[r][2],Jt[r][3]-180,5),s=un(Jt[n][2],Jt[n][3]-180,5);W1(i,s)}}function W1(r,t){let e=.01,n=3,i=.05,s=new F(r.x,r.y,r.z),a=new F(t.x,t.y,t.z),o=[];for(let d=0;d<=20;d++){let p=new F().lerpVectors(s,a,d/20);p.normalize(),p.multiplyScalar(5+i*Math.sin(Math.PI*d/20)),o.push(p)}let l=new lh(o);const c=new _a(l,20,e,n,!1),h=new wn({color:16777215,transparent:!0,opacity:.15}),u=new ne(c,h);Be.add(u)}const Fh=new Ne,q1=new ah({size:5,map:new Aa().load(P1),transparent:!0}),bh=[];for(let r=0;r<1e4;r++){const t=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3,n=(Math.random()-.5)*2e3;Math.abs(t)+Math.abs(e)+Math.abs(n)>400&&bh.push(t,e,n)}Fh.setAttribute("position",new ce(bh,3));const X1=new sg(Fh,q1);Be.add(X1);const ps=new ie;Be.add(ps);const Tr=new ie,Pr=new ie,Lr=new ie;Tr.rotation.y=0;Pr.rotation.y=0;Lr.rotation.y=0;ps.add(Tr);ps.add(Pr);ps.add(Lr);const as=new Aa;let J1=as.load(w1);const Da=new fn(5,250,250);Da.computeBoundingSphere();const Rr=new ne(Da,new xh({map:J1,normalMap:as.load(S1),roughnessMap:as.load(F1),metalness:0,flatShading:!1,side:Bn}));Be.add(Rr);const Th=new ne(new fn(5.05,50,50),new Rg({alphaMap:as.load(T1),map:as.load(b1),transparent:!0}));Rr.add(Th);const Ph=new ne(new fn(5.01,250,250),new hn({vertexShader:_1,fragmentShader:A1,blending:pr}));Ph.position.set(0,0,0);Rr.add(Ph);const Ma=new ne(new fn(5,50,50),new hn({vertexShader:v1,fragmentShader:E1,blending:pr,side:De}));Ma.position.set(0,0,0);Ma.scale.set(1.2,1.2,1.2);Be.add(Ma);class Ba{constructor(t,e,n,i,s,a){this.radius=t,this.texture=e,this.z=n,this.rotation=i,this.pivot=s,this.intensity=a}}let Y1=new Ba(1.5,L1,110,-5e-4,Tr,.4),Z1=new Ba(2.5,R1,190,-3e-4,Pr,.1),j1=new Ba(1,z1,250,-1e-4,Lr,.005),Nn=[Y1,Z1,j1];for(let r=0;r<Nn.length;r++){const t=new ne(new fn(Nn[r].radius,50,50),new xh({map:new Aa().load(Nn[r].texture),metalness:0,flatShading:!1,side:Bn}));t.position.set(Nn[r].z,0,0),Nn[r].pivot.add(t);const e=new Ah(16777215,Nn[r].intensity);e.position.set(Nn[r].z,0,0),e.castShadow=!0,t.add(e)}const wa=new o1,$1=new a1;function K1(r,t){t.matrix.copy(r.worldMatrix)}const ra=[],Q1=new fn(.001,5,5),tx=new wn({color:16711680,transparent:!0,opacity:0});for(let r=20;r<=160;r+=10)for(let t=0;t<360;t+=15){let e=un(r,t,10),n=new P(e.x,e.y,e.z);const i=new ne(Q1,tx);i.position.set(e.x,e.y,e.z),Be.add(i),ra.push(n)}const zr=new wr;zr.position.copy(Rr.position);wa.add(zr);zr.boundingRadius=Da.boundingSphere.radius;const Lh=[];Lh.push(zr);const Rh=new Ch(Lh);Rh.weight=1;const zh=new Eh;zh.weight=.1;const Ih=new yh;Ih.weight=.3;const Nh=new Dh;Nh.weight=.1;const Oh=new Mh(1,.5,2);Oh.weight=.2;let Uh=new P;Uh=un(90,1,5.1);const Vh=new ds(Uh);Vh.weight=0;class ex{constructor(t,e,n){this.lat=t,this.lng=e,this.heading=n;let i=5e-4;this.shape=new bi,this.shape.moveTo(i*5,i*5),this.shape.bezierCurveTo(i*5,i*5,i*4,0,0,0),this.shape.bezierCurveTo(-i*6,0,-i*6,i*7,-i*6,i*7),this.shape.bezierCurveTo(-i*6,i*11,-i*3,i*15.4,i*5,i*19),this.shape.bezierCurveTo(i*12,i*15.4,i*16,i*11,i*16,i*7),this.shape.bezierCurveTo(i*16,i*7,i*16,0,i*10,0),this.shape.bezierCurveTo(i*7,0,i*5,i*5,i*5,i*5),this.geometry=new us(this.shape),this.geometry.computeBoundingSphere(),this.center=this.geometry.boundingSphere.center,this.geometry.rotateX(Math.PI/2),this.geometry.rotateZ(Math.PI/2),this.material=new wn({color:16777215,side:He,transparent:!0,opacity:.5}),this.mesh=new ne(this.geometry,this.material),this.mesh.geometry.center(),this.mesh.position.copy(this.center),this.mesh.matrixAutoUpdate=!1,Be.add(this.mesh),this.vehicle=new Bh,this.vehicle.boundingRadius=this.geometry.boundingSphere.radius,this.vehicle.setRenderComponent(this.mesh,K1),this.pos=un(this.lat,this.lng,5.5),this.vehicle.position.set(this.pos.x,this.pos.y,this.pos.z),this.vehicle.rotation.fromEuler(Ho(0,Math.PI*2),Ho(0,Math.PI*2),Ho(0,Math.PI*2)),this.vehicle.maxSpeed=.1,this.vehicle.updateNeighborhood=!0,this.vehicle.neighborhoodRadius=.1,this.vehicle.steering.add(Oh),this.vehicle.steering.add(zh),this.vehicle.steering.add(Ih),this.vehicle.steering.add(Nh),this.vehicle.steering.add(Vh),this.vehicle.steering.add(Rh);for(let s=0;s<ra.length;s++)this.fleeBehavior=new va(ra[s],4),this.fleeBehavior.weight=.1,this.vehicle.steering.add(this.fleeBehavior);wa.add(this.vehicle)}}let nx=[];for(let r=0;r<1e3;r++){let t=wh(10,170,5),e=g1(0,359);nx.push(new ex(t,e))}const ix=new Gg(16777215,.01);Be.add(ix);const kh=new Ah(16777215,.01);kh.position.set(0,0,0);Be.add(kh);function sx(){for(let r=0;r<fr.length;r++)fr[r].pin.material.color.set(fr[r].originalColor)}function rx(){vr.setFromCamera(dr,an);const r=vr.intersectObjects(Ca);for(let t=0;t<r.length;t++)r[t].object.material.color.set(16711680)}document.addEventListener("keydown",ox,!1);function ox(r){const t=r.which;if(Mi!=null){let e=x1(Mi.position.x,Mi.position.y,Mi.position.z);t==38?e.lat-=.3:t==40?e.lat+=.3:t==37?e.lng-=.3:t==39&&(e.lng+=.3);const n=5.01;let i=un(e.lat,e.lng,n);Mi.position.set(i.x,i.y,i.z)}}function Gh(){window.requestAnimationFrame(()=>{performance.now(),Gh()})}Gh();function Hh(r){if(N1(qo)){const i=qo.domElement;an.aspect=i.clientWidth/i.clientHeight,an.updateProjectionMatrix()}const t=$1.update().getDelta();wa.update(t);function e(i){dr.x=i.clientX/window.innerWidth*2-1,dr.y=-(i.clientY/window.innerHeight)*2+1}function n(i){vr.setFromCamera(dr,an);const s=vr.intersectObjects(Ca);s.length>0&&(Mi=s[0].object)}window.addEventListener("pointermove",e),window.addEventListener("click",n),sx(),rx(),qo.render(Be,an),ps.rotation.y+=-1e-5,Tr.rotation.y+=-3e-4,Pr.rotation.y+=-3e-5,Lr.rotation.y+=-3e-6,Th.rotation.y+=3e-4,dn.rotateSpeed=(an.position.distanceTo(Vc)-5)/an.position.distanceTo(Vc),dn.update(),requestAnimationFrame(Hh)}requestAnimationFrame(Hh);
