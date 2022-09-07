(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const q of n)if(q.type==="childList")for(const s of q.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const q={};return n.integrity&&(q.integrity=n.integrity),n.referrerpolicy&&(q.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?q.credentials="include":n.crossorigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function l(n){if(n.ep)return;n.ep=!0;const q=t(n);fetch(n.href,q)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const v5="144",w3={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},T3={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},p9=0,U5=1,_9=2,f7=1,g9=2,f4=3,i3=0,v2=1,w2=2,q3=0,K3=1,k5=2,G5=3,V5=4,A9=5,j3=100,E9=101,v9=102,H5=103,W5=104,C9=200,D9=201,B9=202,y9=203,d7=204,x7=205,M9=206,F9=207,S9=208,b9=209,z9=210,w9=0,T9=1,L9=2,o5=3,P9=4,R9=5,I9=6,N9=7,C5=0,O9=1,U9=2,Y2=0,k9=1,G9=2,V9=3,H9=4,W9=5,p7=300,t4=301,l4=302,m5=303,h5=304,f6=306,c5=1e3,S2=1001,u5=1002,o2=1003,X5=1004,Y5=1005,A2=1006,X9=1007,d6=1008,E3=1009,Y9=1010,j9=1011,_7=1012,Z9=1013,x3=1014,p3=1015,v4=1016,J9=1017,$9=1018,Q3=1020,K9=1021,Q9=1022,T2=1023,e0=1024,t0=1025,g3=1026,n4=1027,l0=1028,n0=1029,q0=1030,i0=1031,a0=1033,M6=33776,F6=33777,S6=33778,b6=33779,j5=35840,Z5=35841,J5=35842,$5=35843,s0=36196,K5=37492,Q5=37496,e8=37808,t8=37809,l8=37810,n8=37811,q8=37812,i8=37813,a8=37814,s8=37815,r8=37816,o8=37817,m8=37818,h8=37819,c8=37820,u8=37821,f8=36492,v3=3e3,U1=3001,r0=3200,o0=3201,D5=0,m0=1,H2="srgb",_3="srgb-linear",z6=7680,h0=519,d8=35044,x8="300 es",f5=1035;class y3{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const l=this._listeners;l[e]===void 0&&(l[e]=[]),l[e].indexOf(t)===-1&&l[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const l=this._listeners;return l[e]!==void 0&&l[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const q=n.indexOf(t);q!==-1&&n.splice(q,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const l=this._listeners[e.type];if(l!==void 0){e.target=this;const n=l.slice(0);for(let q=0,s=n.length;q<s;q++)n[q].call(this,e);e.target=null}}}const l2=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let p8=1234567;const p4=Math.PI/180,m6=180/Math.PI;function M3(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,l=Math.random()*4294967295|0;return(l2[i&255]+l2[i>>8&255]+l2[i>>16&255]+l2[i>>24&255]+"-"+l2[e&255]+l2[e>>8&255]+"-"+l2[e>>16&15|64]+l2[e>>24&255]+"-"+l2[t&63|128]+l2[t>>8&255]+"-"+l2[t>>16&255]+l2[t>>24&255]+l2[l&255]+l2[l>>8&255]+l2[l>>16&255]+l2[l>>24&255]).toLowerCase()}function e2(i,e,t){return Math.max(e,Math.min(t,i))}function B5(i,e){return(i%e+e)%e}function c0(i,e,t,l,n){return l+(i-e)*(n-l)/(t-e)}function u0(i,e,t){return i!==e?(t-i)/(e-i):0}function _4(i,e,t){return(1-t)*i+t*e}function f0(i,e,t,l){return _4(i,e,1-Math.exp(-t*l))}function d0(i,e=1){return e-Math.abs(B5(i,e*2)-e)}function x0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function p0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function g0(i,e){return i+Math.random()*(e-i)}function A0(i){return i*(.5-Math.random())}function E0(i){i!==void 0&&(p8=i);let e=p8+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(i){return i*p4}function C0(i){return i*m6}function d5(i){return(i&i-1)===0&&i!==0}function D0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function h6(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function B0(i,e,t,l,n){const q=Math.cos,s=Math.sin,a=q(t/2),r=s(t/2),o=q((e+l)/2),m=s((e+l)/2),h=q((e-l)/2),c=s((e-l)/2),f=q((l-e)/2),x=s((l-e)/2);switch(n){case"XYX":i.set(a*m,r*h,r*c,a*o);break;case"YZY":i.set(r*c,a*m,r*h,a*o);break;case"ZXZ":i.set(r*h,r*c,a*m,a*o);break;case"XZX":i.set(a*m,r*x,r*f,a*o);break;case"YXY":i.set(r*f,a*m,r*x,a*o);break;case"ZYZ":i.set(r*x,r*f,a*m,a*o);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function d4(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function r2(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _8=Object.freeze({__proto__:null,DEG2RAD:p4,RAD2DEG:m6,generateUUID:M3,clamp:e2,euclideanModulo:B5,mapLinear:c0,inverseLerp:u0,lerp:_4,damp:f0,pingpong:d0,smoothstep:x0,smootherstep:p0,randInt:_0,randFloat:g0,randFloatSpread:A0,seededRandom:E0,degToRad:v0,radToDeg:C0,isPowerOfTwo:d5,ceilPowerOfTwo:D0,floorPowerOfTwo:h6,setQuaternionFromProperEuler:B0,normalize:r2,denormalize:d4});class r1{constructor(e=0,t=0){r1.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,l=this.y,n=e.elements;return this.x=n[0]*t+n[3]*l+n[6],this.y=n[1]*t+n[4]*l+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const l=this.length();return this.divideScalar(l||1).multiplyScalar(Math.max(e,Math.min(t,l)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,l=this.y-e.y;return t*t+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,l){return this.x=e.x+(t.x-e.x)*l,this.y=e.y+(t.y-e.y)*l,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const l=Math.cos(t),n=Math.sin(t),q=this.x-e.x,s=this.y-e.y;return this.x=q*l-s*n+e.x,this.y=q*n+s*l+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class E2{constructor(){E2.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,l,n,q,s,a,r,o){const m=this.elements;return m[0]=e,m[1]=n,m[2]=a,m[3]=t,m[4]=q,m[5]=r,m[6]=l,m[7]=s,m[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,l=e.elements;return t[0]=l[0],t[1]=l[1],t[2]=l[2],t[3]=l[3],t[4]=l[4],t[5]=l[5],t[6]=l[6],t[7]=l[7],t[8]=l[8],this}extractBasis(e,t,l){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),l.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const l=e.elements,n=t.elements,q=this.elements,s=l[0],a=l[3],r=l[6],o=l[1],m=l[4],h=l[7],c=l[2],f=l[5],x=l[8],d=n[0],u=n[3],p=n[6],A=n[1],B=n[4],v=n[7],g=n[2],F=n[5],z=n[8];return q[0]=s*d+a*A+r*g,q[3]=s*u+a*B+r*F,q[6]=s*p+a*v+r*z,q[1]=o*d+m*A+h*g,q[4]=o*u+m*B+h*F,q[7]=o*p+m*v+h*z,q[2]=c*d+f*A+x*g,q[5]=c*u+f*B+x*F,q[8]=c*p+f*v+x*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],l=e[1],n=e[2],q=e[3],s=e[4],a=e[5],r=e[6],o=e[7],m=e[8];return t*s*m-t*a*o-l*q*m+l*a*r+n*q*o-n*s*r}invert(){const e=this.elements,t=e[0],l=e[1],n=e[2],q=e[3],s=e[4],a=e[5],r=e[6],o=e[7],m=e[8],h=m*s-a*o,c=a*r-m*q,f=o*q-s*r,x=t*h+l*c+n*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/x;return e[0]=h*d,e[1]=(n*o-m*l)*d,e[2]=(a*l-n*s)*d,e[3]=c*d,e[4]=(m*t-n*r)*d,e[5]=(n*q-a*t)*d,e[6]=f*d,e[7]=(l*r-o*t)*d,e[8]=(s*t-l*q)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,l,n,q,s,a){const r=Math.cos(q),o=Math.sin(q);return this.set(l*r,l*o,-l*(r*s+o*a)+s+e,-n*o,n*r,-n*(-o*s+r*a)+a+t,0,0,1),this}scale(e,t){const l=this.elements;return l[0]*=e,l[3]*=e,l[6]*=e,l[1]*=t,l[4]*=t,l[7]*=t,this}rotate(e){const t=Math.cos(e),l=Math.sin(e),n=this.elements,q=n[0],s=n[3],a=n[6],r=n[1],o=n[4],m=n[7];return n[0]=t*q+l*r,n[3]=t*s+l*o,n[6]=t*a+l*m,n[1]=-l*q+t*r,n[4]=-l*s+t*o,n[7]=-l*a+t*m,this}translate(e,t){const l=this.elements;return l[0]+=e*l[2],l[3]+=e*l[5],l[6]+=e*l[8],l[1]+=t*l[2],l[4]+=t*l[5],l[7]+=t*l[8],this}equals(e){const t=this.elements,l=e.elements;for(let n=0;n<9;n++)if(t[n]!==l[n])return!1;return!0}fromArray(e,t=0){for(let l=0;l<9;l++)this.elements[l]=e[l+t];return this}toArray(e=[],t=0){const l=this.elements;return e[t]=l[0],e[t+1]=l[1],e[t+2]=l[2],e[t+3]=l[3],e[t+4]=l[4],e[t+5]=l[5],e[t+6]=l[6],e[t+7]=l[7],e[t+8]=l[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function g7(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function C4(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function A3(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function a6(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const w6={[H2]:{[_3]:A3},[_3]:{[H2]:a6}},B2={legacyMode:!0,get workingColorSpace(){return _3},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(w6[e]&&w6[e][t]!==void 0){const l=w6[e][t];return i.r=l(i.r),i.g=l(i.g),i.b=l(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},A7={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Z1={r:0,g:0,b:0},y2={h:0,s:0,l:0},T4={h:0,s:0,l:0};function T6(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function L4(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class z1{constructor(e,t,l){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&l===void 0?this.set(e):this.setRGB(e,t,l)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=H2){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,B2.toWorkingColorSpace(this,t),this}setRGB(e,t,l,n=_3){return this.r=e,this.g=t,this.b=l,B2.toWorkingColorSpace(this,n),this}setHSL(e,t,l,n=_3){if(e=B5(e,1),t=e2(t,0,1),l=e2(l,0,1),t===0)this.r=this.g=this.b=l;else{const q=l<=.5?l*(1+t):l+t-l*t,s=2*l-q;this.r=T6(s,q,e+1/3),this.g=T6(s,q,e),this.b=T6(s,q,e-1/3)}return B2.toWorkingColorSpace(this,n),this}setStyle(e,t=H2){function l(q){q!==void 0&&parseFloat(q)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let q;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(q[1],10))/255,this.g=Math.min(255,parseInt(q[2],10))/255,this.b=Math.min(255,parseInt(q[3],10))/255,B2.toWorkingColorSpace(this,t),l(q[4]),this;if(q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(q[1],10))/100,this.g=Math.min(100,parseInt(q[2],10))/100,this.b=Math.min(100,parseInt(q[3],10))/100,B2.toWorkingColorSpace(this,t),l(q[4]),this;break;case"hsl":case"hsla":if(q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const r=parseFloat(q[1])/360,o=parseFloat(q[2])/100,m=parseFloat(q[3])/100;return l(q[4]),this.setHSL(r,o,m,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const q=n[1],s=q.length;if(s===3)return this.r=parseInt(q.charAt(0)+q.charAt(0),16)/255,this.g=parseInt(q.charAt(1)+q.charAt(1),16)/255,this.b=parseInt(q.charAt(2)+q.charAt(2),16)/255,B2.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(q.charAt(0)+q.charAt(1),16)/255,this.g=parseInt(q.charAt(2)+q.charAt(3),16)/255,this.b=parseInt(q.charAt(4)+q.charAt(5),16)/255,B2.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=H2){const l=A7[e.toLowerCase()];return l!==void 0?this.setHex(l,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=A3(e.r),this.g=A3(e.g),this.b=A3(e.b),this}copyLinearToSRGB(e){return this.r=a6(e.r),this.g=a6(e.g),this.b=a6(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=H2){return B2.fromWorkingColorSpace(L4(this,Z1),e),e2(Z1.r*255,0,255)<<16^e2(Z1.g*255,0,255)<<8^e2(Z1.b*255,0,255)<<0}getHexString(e=H2){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_3){B2.fromWorkingColorSpace(L4(this,Z1),t);const l=Z1.r,n=Z1.g,q=Z1.b,s=Math.max(l,n,q),a=Math.min(l,n,q);let r,o;const m=(a+s)/2;if(a===s)r=0,o=0;else{const h=s-a;switch(o=m<=.5?h/(s+a):h/(2-s-a),s){case l:r=(n-q)/h+(n<q?6:0);break;case n:r=(q-l)/h+2;break;case q:r=(l-n)/h+4;break}r/=6}return e.h=r,e.s=o,e.l=m,e}getRGB(e,t=_3){return B2.fromWorkingColorSpace(L4(this,Z1),t),e.r=Z1.r,e.g=Z1.g,e.b=Z1.b,e}getStyle(e=H2){return B2.fromWorkingColorSpace(L4(this,Z1),e),e!==H2?`color(${e} ${Z1.r} ${Z1.g} ${Z1.b})`:`rgb(${Z1.r*255|0},${Z1.g*255|0},${Z1.b*255|0})`}offsetHSL(e,t,l){return this.getHSL(y2),y2.h+=e,y2.s+=t,y2.l+=l,this.setHSL(y2.h,y2.s,y2.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,l){return this.r=e.r+(t.r-e.r)*l,this.g=e.g+(t.g-e.g)*l,this.b=e.b+(t.b-e.b)*l,this}lerpHSL(e,t){this.getHSL(y2),e.getHSL(T4);const l=_4(y2.h,T4.h,t),n=_4(y2.s,T4.s,t),q=_4(y2.l,T4.l,t);return this.setHSL(l,n,q),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}z1.NAMES=A7;let L3;class E7{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{L3===void 0&&(L3=C4("canvas")),L3.width=e.width,L3.height=e.height;const l=L3.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),t=L3}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=C4("canvas");t.width=e.width,t.height=e.height;const l=t.getContext("2d");l.drawImage(e,0,0,e.width,e.height);const n=l.getImageData(0,0,e.width,e.height),q=n.data;for(let s=0;s<q.length;s++)q[s]=A3(q[s]/255)*255;return l.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let l=0;l<t.length;l++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[l]=Math.floor(A3(t[l]/255)*255):t[l]=A3(t[l]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class v7{constructor(e=null){this.isSource=!0,this.uuid=M3(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const l={uuid:this.uuid,url:""},n=this.data;if(n!==null){let q;if(Array.isArray(n)){q=[];for(let s=0,a=n.length;s<a;s++)n[s].isDataTexture?q.push(L6(n[s].image)):q.push(L6(n[s]))}else q=L6(n);l.url=q}return t||(e.images[this.uuid]=l),l}}function L6(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?E7.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let y0=0;class C2 extends y3{constructor(e=C2.DEFAULT_IMAGE,t=C2.DEFAULT_MAPPING,l=S2,n=S2,q=A2,s=d6,a=T2,r=E3,o=1,m=v3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=M3(),this.name="",this.source=new v7(e),this.mipmaps=[],this.mapping=t,this.wrapS=l,this.wrapT=n,this.magFilter=q,this.minFilter=s,this.anisotropy=o,this.format=a,this.internalFormat=null,this.type=r,this.offset=new r1(0,0),this.repeat=new r1(1,1),this.center=new r1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new E2,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const l={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(l.userData=this.userData),t||(e.textures[this.uuid]=l),l}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p7)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case c5:e.x=e.x-Math.floor(e.x);break;case S2:e.x=e.x<0?0:1;break;case u5:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case c5:e.y=e.y-Math.floor(e.y);break;case S2:e.y=e.y<0?0:1;break;case u5:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}C2.DEFAULT_IMAGE=null;C2.DEFAULT_MAPPING=p7;class R1{constructor(e=0,t=0,l=0,n=1){R1.prototype.isVector4=!0,this.x=e,this.y=t,this.z=l,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,l,n){return this.x=e,this.y=t,this.z=l,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,l=this.y,n=this.z,q=this.w,s=e.elements;return this.x=s[0]*t+s[4]*l+s[8]*n+s[12]*q,this.y=s[1]*t+s[5]*l+s[9]*n+s[13]*q,this.z=s[2]*t+s[6]*l+s[10]*n+s[14]*q,this.w=s[3]*t+s[7]*l+s[11]*n+s[15]*q,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,l,n,q;const r=e.elements,o=r[0],m=r[4],h=r[8],c=r[1],f=r[5],x=r[9],d=r[2],u=r[6],p=r[10];if(Math.abs(m-c)<.01&&Math.abs(h-d)<.01&&Math.abs(x-u)<.01){if(Math.abs(m+c)<.1&&Math.abs(h+d)<.1&&Math.abs(x+u)<.1&&Math.abs(o+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const B=(o+1)/2,v=(f+1)/2,g=(p+1)/2,F=(m+c)/4,z=(h+d)/4,_=(x+u)/4;return B>v&&B>g?B<.01?(l=0,n=.707106781,q=.707106781):(l=Math.sqrt(B),n=F/l,q=z/l):v>g?v<.01?(l=.707106781,n=0,q=.707106781):(n=Math.sqrt(v),l=F/n,q=_/n):g<.01?(l=.707106781,n=.707106781,q=0):(q=Math.sqrt(g),l=z/q,n=_/q),this.set(l,n,q,t),this}let A=Math.sqrt((u-x)*(u-x)+(h-d)*(h-d)+(c-m)*(c-m));return Math.abs(A)<.001&&(A=1),this.x=(u-x)/A,this.y=(h-d)/A,this.z=(c-m)/A,this.w=Math.acos((o+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const l=this.length();return this.divideScalar(l||1).multiplyScalar(Math.max(e,Math.min(t,l)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,l){return this.x=e.x+(t.x-e.x)*l,this.y=e.y+(t.y-e.y)*l,this.z=e.z+(t.z-e.z)*l,this.w=e.w+(t.w-e.w)*l,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C3 extends y3{constructor(e,t,l={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new R1(0,0,e,t),this.scissorTest=!1,this.viewport=new R1(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new C2(n,l.mapping,l.wrapS,l.wrapT,l.magFilter,l.minFilter,l.format,l.type,l.anisotropy,l.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=l.generateMipmaps!==void 0?l.generateMipmaps:!1,this.texture.internalFormat=l.internalFormat!==void 0?l.internalFormat:null,this.texture.minFilter=l.minFilter!==void 0?l.minFilter:A2,this.depthBuffer=l.depthBuffer!==void 0?l.depthBuffer:!0,this.stencilBuffer=l.stencilBuffer!==void 0?l.stencilBuffer:!1,this.depthTexture=l.depthTexture!==void 0?l.depthTexture:null,this.samples=l.samples!==void 0?l.samples:0}setSize(e,t,l=1){(this.width!==e||this.height!==t||this.depth!==l)&&(this.width=e,this.height=t,this.depth=l,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=l,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new v7(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class C7 extends C2{constructor(e=null,t=1,l=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:l,depth:n},this.magFilter=o2,this.minFilter=o2,this.wrapR=S2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class M0 extends C2{constructor(e=null,t=1,l=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:l,depth:n},this.magFilter=o2,this.minFilter=o2,this.wrapR=S2,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class D3{constructor(e=0,t=0,l=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=l,this._w=n}static slerpFlat(e,t,l,n,q,s,a){let r=l[n+0],o=l[n+1],m=l[n+2],h=l[n+3];const c=q[s+0],f=q[s+1],x=q[s+2],d=q[s+3];if(a===0){e[t+0]=r,e[t+1]=o,e[t+2]=m,e[t+3]=h;return}if(a===1){e[t+0]=c,e[t+1]=f,e[t+2]=x,e[t+3]=d;return}if(h!==d||r!==c||o!==f||m!==x){let u=1-a;const p=r*c+o*f+m*x+h*d,A=p>=0?1:-1,B=1-p*p;if(B>Number.EPSILON){const g=Math.sqrt(B),F=Math.atan2(g,p*A);u=Math.sin(u*F)/g,a=Math.sin(a*F)/g}const v=a*A;if(r=r*u+c*v,o=o*u+f*v,m=m*u+x*v,h=h*u+d*v,u===1-a){const g=1/Math.sqrt(r*r+o*o+m*m+h*h);r*=g,o*=g,m*=g,h*=g}}e[t]=r,e[t+1]=o,e[t+2]=m,e[t+3]=h}static multiplyQuaternionsFlat(e,t,l,n,q,s){const a=l[n],r=l[n+1],o=l[n+2],m=l[n+3],h=q[s],c=q[s+1],f=q[s+2],x=q[s+3];return e[t]=a*x+m*h+r*f-o*c,e[t+1]=r*x+m*c+o*h-a*f,e[t+2]=o*x+m*f+a*c-r*h,e[t+3]=m*x-a*h-r*c-o*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,l,n){return this._x=e,this._y=t,this._z=l,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const l=e._x,n=e._y,q=e._z,s=e._order,a=Math.cos,r=Math.sin,o=a(l/2),m=a(n/2),h=a(q/2),c=r(l/2),f=r(n/2),x=r(q/2);switch(s){case"XYZ":this._x=c*m*h+o*f*x,this._y=o*f*h-c*m*x,this._z=o*m*x+c*f*h,this._w=o*m*h-c*f*x;break;case"YXZ":this._x=c*m*h+o*f*x,this._y=o*f*h-c*m*x,this._z=o*m*x-c*f*h,this._w=o*m*h+c*f*x;break;case"ZXY":this._x=c*m*h-o*f*x,this._y=o*f*h+c*m*x,this._z=o*m*x+c*f*h,this._w=o*m*h-c*f*x;break;case"ZYX":this._x=c*m*h-o*f*x,this._y=o*f*h+c*m*x,this._z=o*m*x-c*f*h,this._w=o*m*h+c*f*x;break;case"YZX":this._x=c*m*h+o*f*x,this._y=o*f*h+c*m*x,this._z=o*m*x-c*f*h,this._w=o*m*h-c*f*x;break;case"XZY":this._x=c*m*h-o*f*x,this._y=o*f*h-c*m*x,this._z=o*m*x+c*f*h,this._w=o*m*h+c*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const l=t/2,n=Math.sin(l);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(l),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,l=t[0],n=t[4],q=t[8],s=t[1],a=t[5],r=t[9],o=t[2],m=t[6],h=t[10],c=l+a+h;if(c>0){const f=.5/Math.sqrt(c+1);this._w=.25/f,this._x=(m-r)*f,this._y=(q-o)*f,this._z=(s-n)*f}else if(l>a&&l>h){const f=2*Math.sqrt(1+l-a-h);this._w=(m-r)/f,this._x=.25*f,this._y=(n+s)/f,this._z=(q+o)/f}else if(a>h){const f=2*Math.sqrt(1+a-l-h);this._w=(q-o)/f,this._x=(n+s)/f,this._y=.25*f,this._z=(r+m)/f}else{const f=2*Math.sqrt(1+h-l-a);this._w=(s-n)/f,this._x=(q+o)/f,this._y=(r+m)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let l=e.dot(t)+1;return l<Number.EPSILON?(l=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=l):(this._x=0,this._y=-e.z,this._z=e.y,this._w=l)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=l),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(e2(this.dot(e),-1,1)))}rotateTowards(e,t){const l=this.angleTo(e);if(l===0)return this;const n=Math.min(1,t/l);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const l=e._x,n=e._y,q=e._z,s=e._w,a=t._x,r=t._y,o=t._z,m=t._w;return this._x=l*m+s*a+n*o-q*r,this._y=n*m+s*r+q*a-l*o,this._z=q*m+s*o+l*r-n*a,this._w=s*m-l*a-n*r-q*o,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const l=this._x,n=this._y,q=this._z,s=this._w;let a=s*e._w+l*e._x+n*e._y+q*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=l,this._y=n,this._z=q,this;const r=1-a*a;if(r<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*l+t*this._x,this._y=f*n+t*this._y,this._z=f*q+t*this._z,this.normalize(),this._onChangeCallback(),this}const o=Math.sqrt(r),m=Math.atan2(o,a),h=Math.sin((1-t)*m)/o,c=Math.sin(t*m)/o;return this._w=s*h+this._w*c,this._x=l*h+this._x*c,this._y=n*h+this._y*c,this._z=q*h+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,l){return this.copy(e).slerp(t,l)}random(){const e=Math.random(),t=Math.sqrt(1-e),l=Math.sqrt(e),n=2*Math.PI*Math.random(),q=2*Math.PI*Math.random();return this.set(t*Math.cos(n),l*Math.sin(q),l*Math.cos(q),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,l=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=l}set(e,t,l){return l===void 0&&(l=this.z),this.x=e,this.y=t,this.z=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(g8.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(g8.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,l=this.y,n=this.z,q=e.elements;return this.x=q[0]*t+q[3]*l+q[6]*n,this.y=q[1]*t+q[4]*l+q[7]*n,this.z=q[2]*t+q[5]*l+q[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,l=this.y,n=this.z,q=e.elements,s=1/(q[3]*t+q[7]*l+q[11]*n+q[15]);return this.x=(q[0]*t+q[4]*l+q[8]*n+q[12])*s,this.y=(q[1]*t+q[5]*l+q[9]*n+q[13])*s,this.z=(q[2]*t+q[6]*l+q[10]*n+q[14])*s,this}applyQuaternion(e){const t=this.x,l=this.y,n=this.z,q=e.x,s=e.y,a=e.z,r=e.w,o=r*t+s*n-a*l,m=r*l+a*t-q*n,h=r*n+q*l-s*t,c=-q*t-s*l-a*n;return this.x=o*r+c*-q+m*-a-h*-s,this.y=m*r+c*-s+h*-q-o*-a,this.z=h*r+c*-a+o*-s-m*-q,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,l=this.y,n=this.z,q=e.elements;return this.x=q[0]*t+q[4]*l+q[8]*n,this.y=q[1]*t+q[5]*l+q[9]*n,this.z=q[2]*t+q[6]*l+q[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const l=this.length();return this.divideScalar(l||1).multiplyScalar(Math.max(e,Math.min(t,l)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,l){return this.x=e.x+(t.x-e.x)*l,this.y=e.y+(t.y-e.y)*l,this.z=e.z+(t.z-e.z)*l,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const l=e.x,n=e.y,q=e.z,s=t.x,a=t.y,r=t.z;return this.x=n*r-q*a,this.y=q*s-l*r,this.z=l*a-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const l=e.dot(this)/t;return this.copy(e).multiplyScalar(l)}projectOnPlane(e){return P6.copy(this).projectOnVector(e),this.sub(P6)}reflect(e){return this.sub(P6.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const l=this.dot(e)/t;return Math.acos(e2(l,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,l=this.y-e.y,n=this.z-e.z;return t*t+l*l+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,l){const n=Math.sin(t)*e;return this.x=n*Math.sin(l),this.y=Math.cos(t)*e,this.z=n*Math.cos(l),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,l){return this.x=e*Math.sin(t),this.y=l,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),l=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=l,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,l=Math.sqrt(1-e**2);return this.x=l*Math.cos(t),this.y=l*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const P6=new S,g8=new D3;class F4{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,l=1/0,n=1/0,q=-1/0,s=-1/0,a=-1/0;for(let r=0,o=e.length;r<o;r+=3){const m=e[r],h=e[r+1],c=e[r+2];m<t&&(t=m),h<l&&(l=h),c<n&&(n=c),m>q&&(q=m),h>s&&(s=h),c>a&&(a=c)}return this.min.set(t,l,n),this.max.set(q,s,a),this}setFromBufferAttribute(e){let t=1/0,l=1/0,n=1/0,q=-1/0,s=-1/0,a=-1/0;for(let r=0,o=e.count;r<o;r++){const m=e.getX(r),h=e.getY(r),c=e.getZ(r);m<t&&(t=m),h<l&&(l=h),c<n&&(n=c),m>q&&(q=m),h>s&&(s=h),c>a&&(a=c)}return this.min.set(t,l,n),this.max.set(q,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,l=e.length;t<l;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const l=o3.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(l),this.max.copy(e).add(l),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const l=e.geometry;if(l!==void 0)if(t&&l.attributes!=null&&l.attributes.position!==void 0){const q=l.attributes.position;for(let s=0,a=q.count;s<a;s++)o3.fromBufferAttribute(q,s).applyMatrix4(e.matrixWorld),this.expandByPoint(o3)}else l.boundingBox===null&&l.computeBoundingBox(),R6.copy(l.boundingBox),R6.applyMatrix4(e.matrixWorld),this.union(R6);const n=e.children;for(let q=0,s=n.length;q<s;q++)this.expandByObject(n[q],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,o3),o3.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,l;return e.normal.x>0?(t=e.normal.x*this.min.x,l=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,l=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,l+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,l+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,l+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,l+=e.normal.z*this.min.z),t<=-e.constant&&l>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(m4),P4.subVectors(this.max,m4),P3.subVectors(e.a,m4),R3.subVectors(e.b,m4),I3.subVectors(e.c,m4),$2.subVectors(R3,P3),K2.subVectors(I3,R3),m3.subVectors(P3,I3);let t=[0,-$2.z,$2.y,0,-K2.z,K2.y,0,-m3.z,m3.y,$2.z,0,-$2.x,K2.z,0,-K2.x,m3.z,0,-m3.x,-$2.y,$2.x,0,-K2.y,K2.x,0,-m3.y,m3.x,0];return!I6(t,P3,R3,I3,P4)||(t=[1,0,0,0,1,0,0,0,1],!I6(t,P3,R3,I3,P4))?!1:(R4.crossVectors($2,K2),t=[R4.x,R4.y,R4.z],I6(t,P3,R3,I3,P4))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return o3.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(o3).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(N2[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),N2[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),N2[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),N2[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),N2[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),N2[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),N2[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),N2[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(N2),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const N2=[new S,new S,new S,new S,new S,new S,new S,new S],o3=new S,R6=new F4,P3=new S,R3=new S,I3=new S,$2=new S,K2=new S,m3=new S,m4=new S,P4=new S,R4=new S,h3=new S;function I6(i,e,t,l,n){for(let q=0,s=i.length-3;q<=s;q+=3){h3.fromArray(i,q);const a=n.x*Math.abs(h3.x)+n.y*Math.abs(h3.y)+n.z*Math.abs(h3.z),r=e.dot(h3),o=t.dot(h3),m=l.dot(h3);if(Math.max(-Math.max(r,o,m),Math.min(r,o,m))>a)return!1}return!0}const F0=new F4,A8=new S,I4=new S,N6=new S;class x6{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const l=this.center;t!==void 0?l.copy(t):F0.setFromPoints(e).getCenter(l);let n=0;for(let q=0,s=e.length;q<s;q++)n=Math.max(n,l.distanceToSquared(e[q]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const l=this.center.distanceToSquared(e);return t.copy(e),l>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){N6.subVectors(e,this.center);const t=N6.lengthSq();if(t>this.radius*this.radius){const l=Math.sqrt(t),n=(l-this.radius)*.5;this.center.add(N6.multiplyScalar(n/l)),this.radius+=n}return this}union(e){return this.center.equals(e.center)===!0?I4.set(0,0,1).multiplyScalar(e.radius):I4.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(A8.copy(e.center).add(I4)),this.expandByPoint(A8.copy(e.center).sub(I4)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const O2=new S,O6=new S,N4=new S,Q2=new S,U6=new S,O4=new S,k6=new S;class y5{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,O2)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const l=t.dot(this.direction);return l<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(l).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=O2.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(O2.copy(this.direction).multiplyScalar(t).add(this.origin),O2.distanceToSquared(e))}distanceSqToSegment(e,t,l,n){O6.copy(e).add(t).multiplyScalar(.5),N4.copy(t).sub(e).normalize(),Q2.copy(this.origin).sub(O6);const q=e.distanceTo(t)*.5,s=-this.direction.dot(N4),a=Q2.dot(this.direction),r=-Q2.dot(N4),o=Q2.lengthSq(),m=Math.abs(1-s*s);let h,c,f,x;if(m>0)if(h=s*r-a,c=s*a-r,x=q*m,h>=0)if(c>=-x)if(c<=x){const d=1/m;h*=d,c*=d,f=h*(h+s*c+2*a)+c*(s*h+c+2*r)+o}else c=q,h=Math.max(0,-(s*c+a)),f=-h*h+c*(c+2*r)+o;else c=-q,h=Math.max(0,-(s*c+a)),f=-h*h+c*(c+2*r)+o;else c<=-x?(h=Math.max(0,-(-s*q+a)),c=h>0?-q:Math.min(Math.max(-q,-r),q),f=-h*h+c*(c+2*r)+o):c<=x?(h=0,c=Math.min(Math.max(-q,-r),q),f=c*(c+2*r)+o):(h=Math.max(0,-(s*q+a)),c=h>0?q:Math.min(Math.max(-q,-r),q),f=-h*h+c*(c+2*r)+o);else c=s>0?-q:q,h=Math.max(0,-(s*c+a)),f=-h*h+c*(c+2*r)+o;return l&&l.copy(this.direction).multiplyScalar(h).add(this.origin),n&&n.copy(N4).multiplyScalar(c).add(O6),f}intersectSphere(e,t){O2.subVectors(e.center,this.origin);const l=O2.dot(this.direction),n=O2.dot(O2)-l*l,q=e.radius*e.radius;if(n>q)return null;const s=Math.sqrt(q-n),a=l-s,r=l+s;return a<0&&r<0?null:a<0?this.at(r,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const l=-(this.origin.dot(e.normal)+e.constant)/t;return l>=0?l:null}intersectPlane(e,t){const l=this.distanceToPlane(e);return l===null?null:this.at(l,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let l,n,q,s,a,r;const o=1/this.direction.x,m=1/this.direction.y,h=1/this.direction.z,c=this.origin;return o>=0?(l=(e.min.x-c.x)*o,n=(e.max.x-c.x)*o):(l=(e.max.x-c.x)*o,n=(e.min.x-c.x)*o),m>=0?(q=(e.min.y-c.y)*m,s=(e.max.y-c.y)*m):(q=(e.max.y-c.y)*m,s=(e.min.y-c.y)*m),l>s||q>n||((q>l||l!==l)&&(l=q),(s<n||n!==n)&&(n=s),h>=0?(a=(e.min.z-c.z)*h,r=(e.max.z-c.z)*h):(a=(e.max.z-c.z)*h,r=(e.min.z-c.z)*h),l>r||a>n)||((a>l||l!==l)&&(l=a),(r<n||n!==n)&&(n=r),n<0)?null:this.at(l>=0?l:n,t)}intersectsBox(e){return this.intersectBox(e,O2)!==null}intersectTriangle(e,t,l,n,q){U6.subVectors(t,e),O4.subVectors(l,e),k6.crossVectors(U6,O4);let s=this.direction.dot(k6),a;if(s>0){if(n)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Q2.subVectors(this.origin,e);const r=a*this.direction.dot(O4.crossVectors(Q2,O4));if(r<0)return null;const o=a*this.direction.dot(U6.cross(Q2));if(o<0||r+o>s)return null;const m=-a*Q2.dot(k6);return m<0?null:this.at(m/s,q)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class G1{constructor(){G1.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,l,n,q,s,a,r,o,m,h,c,f,x,d,u){const p=this.elements;return p[0]=e,p[4]=t,p[8]=l,p[12]=n,p[1]=q,p[5]=s,p[9]=a,p[13]=r,p[2]=o,p[6]=m,p[10]=h,p[14]=c,p[3]=f,p[7]=x,p[11]=d,p[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new G1().fromArray(this.elements)}copy(e){const t=this.elements,l=e.elements;return t[0]=l[0],t[1]=l[1],t[2]=l[2],t[3]=l[3],t[4]=l[4],t[5]=l[5],t[6]=l[6],t[7]=l[7],t[8]=l[8],t[9]=l[9],t[10]=l[10],t[11]=l[11],t[12]=l[12],t[13]=l[13],t[14]=l[14],t[15]=l[15],this}copyPosition(e){const t=this.elements,l=e.elements;return t[12]=l[12],t[13]=l[13],t[14]=l[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,l){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),l.setFromMatrixColumn(this,2),this}makeBasis(e,t,l){return this.set(e.x,t.x,l.x,0,e.y,t.y,l.y,0,e.z,t.z,l.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,l=e.elements,n=1/N3.setFromMatrixColumn(e,0).length(),q=1/N3.setFromMatrixColumn(e,1).length(),s=1/N3.setFromMatrixColumn(e,2).length();return t[0]=l[0]*n,t[1]=l[1]*n,t[2]=l[2]*n,t[3]=0,t[4]=l[4]*q,t[5]=l[5]*q,t[6]=l[6]*q,t[7]=0,t[8]=l[8]*s,t[9]=l[9]*s,t[10]=l[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,l=e.x,n=e.y,q=e.z,s=Math.cos(l),a=Math.sin(l),r=Math.cos(n),o=Math.sin(n),m=Math.cos(q),h=Math.sin(q);if(e.order==="XYZ"){const c=s*m,f=s*h,x=a*m,d=a*h;t[0]=r*m,t[4]=-r*h,t[8]=o,t[1]=f+x*o,t[5]=c-d*o,t[9]=-a*r,t[2]=d-c*o,t[6]=x+f*o,t[10]=s*r}else if(e.order==="YXZ"){const c=r*m,f=r*h,x=o*m,d=o*h;t[0]=c+d*a,t[4]=x*a-f,t[8]=s*o,t[1]=s*h,t[5]=s*m,t[9]=-a,t[2]=f*a-x,t[6]=d+c*a,t[10]=s*r}else if(e.order==="ZXY"){const c=r*m,f=r*h,x=o*m,d=o*h;t[0]=c-d*a,t[4]=-s*h,t[8]=x+f*a,t[1]=f+x*a,t[5]=s*m,t[9]=d-c*a,t[2]=-s*o,t[6]=a,t[10]=s*r}else if(e.order==="ZYX"){const c=s*m,f=s*h,x=a*m,d=a*h;t[0]=r*m,t[4]=x*o-f,t[8]=c*o+d,t[1]=r*h,t[5]=d*o+c,t[9]=f*o-x,t[2]=-o,t[6]=a*r,t[10]=s*r}else if(e.order==="YZX"){const c=s*r,f=s*o,x=a*r,d=a*o;t[0]=r*m,t[4]=d-c*h,t[8]=x*h+f,t[1]=h,t[5]=s*m,t[9]=-a*m,t[2]=-o*m,t[6]=f*h+x,t[10]=c-d*h}else if(e.order==="XZY"){const c=s*r,f=s*o,x=a*r,d=a*o;t[0]=r*m,t[4]=-h,t[8]=o*m,t[1]=c*h+d,t[5]=s*m,t[9]=f*h-x,t[2]=x*h-f,t[6]=a*m,t[10]=d*h+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,b0)}lookAt(e,t,l){const n=this.elements;return u2.subVectors(e,t),u2.lengthSq()===0&&(u2.z=1),u2.normalize(),e3.crossVectors(l,u2),e3.lengthSq()===0&&(Math.abs(l.z)===1?u2.x+=1e-4:u2.z+=1e-4,u2.normalize(),e3.crossVectors(l,u2)),e3.normalize(),U4.crossVectors(u2,e3),n[0]=e3.x,n[4]=U4.x,n[8]=u2.x,n[1]=e3.y,n[5]=U4.y,n[9]=u2.y,n[2]=e3.z,n[6]=U4.z,n[10]=u2.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const l=e.elements,n=t.elements,q=this.elements,s=l[0],a=l[4],r=l[8],o=l[12],m=l[1],h=l[5],c=l[9],f=l[13],x=l[2],d=l[6],u=l[10],p=l[14],A=l[3],B=l[7],v=l[11],g=l[15],F=n[0],z=n[4],_=n[8],M=n[12],T=n[1],X=n[5],q1=n[9],N=n[13],w=n[2],W=n[6],j=n[10],Z=n[14],G=n[3],P=n[7],I=n[11],$=n[15];return q[0]=s*F+a*T+r*w+o*G,q[4]=s*z+a*X+r*W+o*P,q[8]=s*_+a*q1+r*j+o*I,q[12]=s*M+a*N+r*Z+o*$,q[1]=m*F+h*T+c*w+f*G,q[5]=m*z+h*X+c*W+f*P,q[9]=m*_+h*q1+c*j+f*I,q[13]=m*M+h*N+c*Z+f*$,q[2]=x*F+d*T+u*w+p*G,q[6]=x*z+d*X+u*W+p*P,q[10]=x*_+d*q1+u*j+p*I,q[14]=x*M+d*N+u*Z+p*$,q[3]=A*F+B*T+v*w+g*G,q[7]=A*z+B*X+v*W+g*P,q[11]=A*_+B*q1+v*j+g*I,q[15]=A*M+B*N+v*Z+g*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],l=e[4],n=e[8],q=e[12],s=e[1],a=e[5],r=e[9],o=e[13],m=e[2],h=e[6],c=e[10],f=e[14],x=e[3],d=e[7],u=e[11],p=e[15];return x*(+q*r*h-n*o*h-q*a*c+l*o*c+n*a*f-l*r*f)+d*(+t*r*f-t*o*c+q*s*c-n*s*f+n*o*m-q*r*m)+u*(+t*o*h-t*a*f-q*s*h+l*s*f+q*a*m-l*o*m)+p*(-n*a*m-t*r*h+t*a*c+n*s*h-l*s*c+l*r*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,l){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=l),this}invert(){const e=this.elements,t=e[0],l=e[1],n=e[2],q=e[3],s=e[4],a=e[5],r=e[6],o=e[7],m=e[8],h=e[9],c=e[10],f=e[11],x=e[12],d=e[13],u=e[14],p=e[15],A=h*u*o-d*c*o+d*r*f-a*u*f-h*r*p+a*c*p,B=x*c*o-m*u*o-x*r*f+s*u*f+m*r*p-s*c*p,v=m*d*o-x*h*o+x*a*f-s*d*f-m*a*p+s*h*p,g=x*h*r-m*d*r-x*a*c+s*d*c+m*a*u-s*h*u,F=t*A+l*B+n*v+q*g;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=A*z,e[1]=(d*c*q-h*u*q-d*n*f+l*u*f+h*n*p-l*c*p)*z,e[2]=(a*u*q-d*r*q+d*n*o-l*u*o-a*n*p+l*r*p)*z,e[3]=(h*r*q-a*c*q-h*n*o+l*c*o+a*n*f-l*r*f)*z,e[4]=B*z,e[5]=(m*u*q-x*c*q+x*n*f-t*u*f-m*n*p+t*c*p)*z,e[6]=(x*r*q-s*u*q-x*n*o+t*u*o+s*n*p-t*r*p)*z,e[7]=(s*c*q-m*r*q+m*n*o-t*c*o-s*n*f+t*r*f)*z,e[8]=v*z,e[9]=(x*h*q-m*d*q-x*l*f+t*d*f+m*l*p-t*h*p)*z,e[10]=(s*d*q-x*a*q+x*l*o-t*d*o-s*l*p+t*a*p)*z,e[11]=(m*a*q-s*h*q-m*l*o+t*h*o+s*l*f-t*a*f)*z,e[12]=g*z,e[13]=(m*d*n-x*h*n+x*l*c-t*d*c-m*l*u+t*h*u)*z,e[14]=(x*a*n-s*d*n-x*l*r+t*d*r+s*l*u-t*a*u)*z,e[15]=(s*h*n-m*a*n+m*l*r-t*h*r-s*l*c+t*a*c)*z,this}scale(e){const t=this.elements,l=e.x,n=e.y,q=e.z;return t[0]*=l,t[4]*=n,t[8]*=q,t[1]*=l,t[5]*=n,t[9]*=q,t[2]*=l,t[6]*=n,t[10]*=q,t[3]*=l,t[7]*=n,t[11]*=q,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],l=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,l,n))}makeTranslation(e,t,l){return this.set(1,0,0,e,0,1,0,t,0,0,1,l,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),l=Math.sin(e);return this.set(1,0,0,0,0,t,-l,0,0,l,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),l=Math.sin(e);return this.set(t,0,l,0,0,1,0,0,-l,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),l=Math.sin(e);return this.set(t,-l,0,0,l,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const l=Math.cos(t),n=Math.sin(t),q=1-l,s=e.x,a=e.y,r=e.z,o=q*s,m=q*a;return this.set(o*s+l,o*a-n*r,o*r+n*a,0,o*a+n*r,m*a+l,m*r-n*s,0,o*r-n*a,m*r+n*s,q*r*r+l,0,0,0,0,1),this}makeScale(e,t,l){return this.set(e,0,0,0,0,t,0,0,0,0,l,0,0,0,0,1),this}makeShear(e,t,l,n,q,s){return this.set(1,l,q,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,l){const n=this.elements,q=t._x,s=t._y,a=t._z,r=t._w,o=q+q,m=s+s,h=a+a,c=q*o,f=q*m,x=q*h,d=s*m,u=s*h,p=a*h,A=r*o,B=r*m,v=r*h,g=l.x,F=l.y,z=l.z;return n[0]=(1-(d+p))*g,n[1]=(f+v)*g,n[2]=(x-B)*g,n[3]=0,n[4]=(f-v)*F,n[5]=(1-(c+p))*F,n[6]=(u+A)*F,n[7]=0,n[8]=(x+B)*z,n[9]=(u-A)*z,n[10]=(1-(c+d))*z,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,l){const n=this.elements;let q=N3.set(n[0],n[1],n[2]).length();const s=N3.set(n[4],n[5],n[6]).length(),a=N3.set(n[8],n[9],n[10]).length();this.determinant()<0&&(q=-q),e.x=n[12],e.y=n[13],e.z=n[14],M2.copy(this);const o=1/q,m=1/s,h=1/a;return M2.elements[0]*=o,M2.elements[1]*=o,M2.elements[2]*=o,M2.elements[4]*=m,M2.elements[5]*=m,M2.elements[6]*=m,M2.elements[8]*=h,M2.elements[9]*=h,M2.elements[10]*=h,t.setFromRotationMatrix(M2),l.x=q,l.y=s,l.z=a,this}makePerspective(e,t,l,n,q,s){const a=this.elements,r=2*q/(t-e),o=2*q/(l-n),m=(t+e)/(t-e),h=(l+n)/(l-n),c=-(s+q)/(s-q),f=-2*s*q/(s-q);return a[0]=r,a[4]=0,a[8]=m,a[12]=0,a[1]=0,a[5]=o,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=c,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,l,n,q,s){const a=this.elements,r=1/(t-e),o=1/(l-n),m=1/(s-q),h=(t+e)*r,c=(l+n)*o,f=(s+q)*m;return a[0]=2*r,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*o,a[9]=0,a[13]=-c,a[2]=0,a[6]=0,a[10]=-2*m,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,l=e.elements;for(let n=0;n<16;n++)if(t[n]!==l[n])return!1;return!0}fromArray(e,t=0){for(let l=0;l<16;l++)this.elements[l]=e[l+t];return this}toArray(e=[],t=0){const l=this.elements;return e[t]=l[0],e[t+1]=l[1],e[t+2]=l[2],e[t+3]=l[3],e[t+4]=l[4],e[t+5]=l[5],e[t+6]=l[6],e[t+7]=l[7],e[t+8]=l[8],e[t+9]=l[9],e[t+10]=l[10],e[t+11]=l[11],e[t+12]=l[12],e[t+13]=l[13],e[t+14]=l[14],e[t+15]=l[15],e}}const N3=new S,M2=new G1,S0=new S(0,0,0),b0=new S(1,1,1),e3=new S,U4=new S,u2=new S,E8=new G1,v8=new D3;class S4{constructor(e=0,t=0,l=0,n=S4.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=l,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,l,n=this._order){return this._x=e,this._y=t,this._z=l,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,l=!0){const n=e.elements,q=n[0],s=n[4],a=n[8],r=n[1],o=n[5],m=n[9],h=n[2],c=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(e2(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,f),this._z=Math.atan2(-s,q)):(this._x=Math.atan2(c,o),this._z=0);break;case"YXZ":this._x=Math.asin(-e2(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(r,o)):(this._y=Math.atan2(-h,q),this._z=0);break;case"ZXY":this._x=Math.asin(e2(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,o)):(this._y=0,this._z=Math.atan2(r,q));break;case"ZYX":this._y=Math.asin(-e2(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(r,q)):(this._x=0,this._z=Math.atan2(-s,o));break;case"YZX":this._z=Math.asin(e2(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-m,o),this._y=Math.atan2(-h,q)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-e2(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,o),this._y=Math.atan2(a,q)):(this._x=Math.atan2(-m,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,l===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,l){return E8.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E8,t,l)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return v8.setFromEuler(this),this.setFromQuaternion(v8,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}S4.DefaultOrder="XYZ";S4.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class M5{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const C8=new S,O3=new D3,U2=new G1,k4=new S,h4=new S,w0=new S,T0=new D3,D8=new S(1,0,0),B8=new S(0,1,0),y8=new S(0,0,1),L0={type:"added"},M8={type:"removed"};class J1 extends y3{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=M3(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=J1.DefaultUp.clone();const e=new S,t=new S4,l=new D3,n=new S(1,1,1);function q(){l.setFromEuler(t,!1)}function s(){t.setFromQuaternion(l,void 0,!1)}t._onChange(q),l._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:l},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new G1},normalMatrix:{value:new E2}}),this.matrix=new G1,this.matrixWorld=new G1,this.matrixAutoUpdate=J1.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=J1.DefaultMatrixWorldAutoUpdate,this.layers=new M5,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return O3.setFromAxisAngle(e,t),this.quaternion.multiply(O3),this}rotateOnWorldAxis(e,t){return O3.setFromAxisAngle(e,t),this.quaternion.premultiply(O3),this}rotateX(e){return this.rotateOnAxis(D8,e)}rotateY(e){return this.rotateOnAxis(B8,e)}rotateZ(e){return this.rotateOnAxis(y8,e)}translateOnAxis(e,t){return C8.copy(e).applyQuaternion(this.quaternion),this.position.add(C8.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(D8,e)}translateY(e){return this.translateOnAxis(B8,e)}translateZ(e){return this.translateOnAxis(y8,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(U2.copy(this.matrixWorld).invert())}lookAt(e,t,l){e.isVector3?k4.copy(e):k4.set(e,t,l);const n=this.parent;this.updateWorldMatrix(!0,!1),h4.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?U2.lookAt(h4,k4,this.up):U2.lookAt(k4,h4,this.up),this.quaternion.setFromRotationMatrix(U2),n&&(U2.extractRotation(n.matrixWorld),O3.setFromRotationMatrix(U2),this.quaternion.premultiply(O3.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(L0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let l=0;l<arguments.length;l++)this.remove(arguments[l]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M8)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(M8)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),U2.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),U2.multiply(e.parent.matrixWorld)),e.applyMatrix4(U2),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let l=0,n=this.children.length;l<n;l++){const s=this.children[l].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(h4,e,w0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(h4,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let l=0,n=t.length;l<n;l++)t[l].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let l=0,n=t.length;l<n;l++)t[l].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let l=0,n=t.length;l<n;l++){const q=t[l];(q.matrixWorldAutoUpdate===!0||e===!0)&&q.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const l=this.parent;if(e===!0&&l!==null&&l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let q=0,s=n.length;q<s;q++){const a=n[q];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",l={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},l.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function q(a,r){return a[r.uuid]===void 0&&(a[r.uuid]=r.toJSON(e)),r.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=q(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const r=a.shapes;if(Array.isArray(r))for(let o=0,m=r.length;o<m;o++){const h=r[o];q(e.shapes,h)}else q(e.shapes,r)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(q(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let r=0,o=this.material.length;r<o;r++)a.push(q(e.materials,this.material[r]));n.material=a}else n.material=q(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const r=this.animations[a];n.animations.push(q(e.animations,r))}}if(t){const a=s(e.geometries),r=s(e.materials),o=s(e.textures),m=s(e.images),h=s(e.shapes),c=s(e.skeletons),f=s(e.animations),x=s(e.nodes);a.length>0&&(l.geometries=a),r.length>0&&(l.materials=r),o.length>0&&(l.textures=o),m.length>0&&(l.images=m),h.length>0&&(l.shapes=h),c.length>0&&(l.skeletons=c),f.length>0&&(l.animations=f),x.length>0&&(l.nodes=x)}return l.object=n,l;function s(a){const r=[];for(const o in a){const m=a[o];delete m.metadata,r.push(m)}return r}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let l=0;l<e.children.length;l++){const n=e.children[l];this.add(n.clone())}return this}}J1.DefaultUp=new S(0,1,0);J1.DefaultMatrixAutoUpdate=!0;J1.DefaultMatrixWorldAutoUpdate=!0;const F2=new S,k2=new S,G6=new S,G2=new S,U3=new S,k3=new S,F8=new S,V6=new S,H6=new S,W6=new S;class X2{constructor(e=new S,t=new S,l=new S){this.a=e,this.b=t,this.c=l}static getNormal(e,t,l,n){n.subVectors(l,t),F2.subVectors(e,t),n.cross(F2);const q=n.lengthSq();return q>0?n.multiplyScalar(1/Math.sqrt(q)):n.set(0,0,0)}static getBarycoord(e,t,l,n,q){F2.subVectors(n,t),k2.subVectors(l,t),G6.subVectors(e,t);const s=F2.dot(F2),a=F2.dot(k2),r=F2.dot(G6),o=k2.dot(k2),m=k2.dot(G6),h=s*o-a*a;if(h===0)return q.set(-2,-1,-1);const c=1/h,f=(o*r-a*m)*c,x=(s*m-a*r)*c;return q.set(1-f-x,x,f)}static containsPoint(e,t,l,n){return this.getBarycoord(e,t,l,n,G2),G2.x>=0&&G2.y>=0&&G2.x+G2.y<=1}static getUV(e,t,l,n,q,s,a,r){return this.getBarycoord(e,t,l,n,G2),r.set(0,0),r.addScaledVector(q,G2.x),r.addScaledVector(s,G2.y),r.addScaledVector(a,G2.z),r}static isFrontFacing(e,t,l,n){return F2.subVectors(l,t),k2.subVectors(e,t),F2.cross(k2).dot(n)<0}set(e,t,l){return this.a.copy(e),this.b.copy(t),this.c.copy(l),this}setFromPointsAndIndices(e,t,l,n){return this.a.copy(e[t]),this.b.copy(e[l]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,l,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,l),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return F2.subVectors(this.c,this.b),k2.subVectors(this.a,this.b),F2.cross(k2).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return X2.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return X2.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,l,n,q){return X2.getUV(e,this.a,this.b,this.c,t,l,n,q)}containsPoint(e){return X2.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return X2.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const l=this.a,n=this.b,q=this.c;let s,a;U3.subVectors(n,l),k3.subVectors(q,l),V6.subVectors(e,l);const r=U3.dot(V6),o=k3.dot(V6);if(r<=0&&o<=0)return t.copy(l);H6.subVectors(e,n);const m=U3.dot(H6),h=k3.dot(H6);if(m>=0&&h<=m)return t.copy(n);const c=r*h-m*o;if(c<=0&&r>=0&&m<=0)return s=r/(r-m),t.copy(l).addScaledVector(U3,s);W6.subVectors(e,q);const f=U3.dot(W6),x=k3.dot(W6);if(x>=0&&f<=x)return t.copy(q);const d=f*o-r*x;if(d<=0&&o>=0&&x<=0)return a=o/(o-x),t.copy(l).addScaledVector(k3,a);const u=m*x-f*h;if(u<=0&&h-m>=0&&f-x>=0)return F8.subVectors(q,n),a=(h-m)/(h-m+(f-x)),t.copy(n).addScaledVector(F8,a);const p=1/(u+d+c);return s=d*p,a=c*p,t.copy(l).addScaledVector(U3,s).addScaledVector(k3,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let P0=0;class F3 extends y3{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=M3(),this.name="",this.type="Material",this.blending=K3,this.side=i3,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=d7,this.blendDst=x7,this.blendEquation=j3,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=o5,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=z6,this.stencilZFail=z6,this.stencilZPass=z6,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const l=e[t];if(l===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(l):n&&n.isVector3&&l&&l.isVector3?n.copy(l):this[t]=l}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const l={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.color&&this.color.isColor&&(l.color=this.color.getHex()),this.roughness!==void 0&&(l.roughness=this.roughness),this.metalness!==void 0&&(l.metalness=this.metalness),this.sheen!==void 0&&(l.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(l.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(l.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(l.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(l.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(l.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(l.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(l.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(l.shininess=this.shininess),this.clearcoat!==void 0&&(l.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(l.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(l.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(l.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(l.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,l.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(l.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(l.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(l.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(l.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(l.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(l.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(l.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(l.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(l.lightMap=this.lightMap.toJSON(e).uuid,l.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(l.aoMap=this.aoMap.toJSON(e).uuid,l.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(l.bumpMap=this.bumpMap.toJSON(e).uuid,l.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(l.normalMap=this.normalMap.toJSON(e).uuid,l.normalMapType=this.normalMapType,l.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(l.displacementMap=this.displacementMap.toJSON(e).uuid,l.displacementScale=this.displacementScale,l.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(l.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(l.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(l.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(l.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(l.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(l.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(l.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(l.combine=this.combine)),this.envMapIntensity!==void 0&&(l.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(l.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(l.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(l.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(l.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(l.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(l.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(l.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(l.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(l.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(l.size=this.size),this.shadowSide!==null&&(l.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(l.sizeAttenuation=this.sizeAttenuation),this.blending!==K3&&(l.blending=this.blending),this.side!==i3&&(l.side=this.side),this.vertexColors&&(l.vertexColors=!0),this.opacity<1&&(l.opacity=this.opacity),this.transparent===!0&&(l.transparent=this.transparent),l.depthFunc=this.depthFunc,l.depthTest=this.depthTest,l.depthWrite=this.depthWrite,l.colorWrite=this.colorWrite,l.stencilWrite=this.stencilWrite,l.stencilWriteMask=this.stencilWriteMask,l.stencilFunc=this.stencilFunc,l.stencilRef=this.stencilRef,l.stencilFuncMask=this.stencilFuncMask,l.stencilFail=this.stencilFail,l.stencilZFail=this.stencilZFail,l.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(l.rotation=this.rotation),this.polygonOffset===!0&&(l.polygonOffset=!0),this.polygonOffsetFactor!==0&&(l.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(l.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(l.linewidth=this.linewidth),this.dashSize!==void 0&&(l.dashSize=this.dashSize),this.gapSize!==void 0&&(l.gapSize=this.gapSize),this.scale!==void 0&&(l.scale=this.scale),this.dithering===!0&&(l.dithering=!0),this.alphaTest>0&&(l.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(l.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(l.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(l.wireframe=this.wireframe),this.wireframeLinewidth>1&&(l.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(l.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(l.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(l.flatShading=this.flatShading),this.visible===!1&&(l.visible=!1),this.toneMapped===!1&&(l.toneMapped=!1),this.fog===!1&&(l.fog=!1),JSON.stringify(this.userData)!=="{}"&&(l.userData=this.userData);function n(q){const s=[];for(const a in q){const r=q[a];delete r.metadata,s.push(r)}return s}if(t){const q=n(e.textures),s=n(e.images);q.length>0&&(l.textures=q),s.length>0&&(l.images=s)}return l}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let l=null;if(t!==null){const n=t.length;l=new Array(n);for(let q=0;q!==n;++q)l[q]=t[q].clone()}return this.clippingPlanes=l,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class q4 extends F3{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new z1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=C5,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const X1=new S,G4=new r1;class L2{constructor(e,t,l){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=l===!0,this.usage=d8,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,l){e*=this.itemSize,l*=t.itemSize;for(let n=0,q=this.itemSize;n<q;n++)this.array[e+n]=t.array[l+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,l=this.count;t<l;t++)G4.fromBufferAttribute(this,t),G4.applyMatrix3(e),this.setXY(t,G4.x,G4.y);else if(this.itemSize===3)for(let t=0,l=this.count;t<l;t++)X1.fromBufferAttribute(this,t),X1.applyMatrix3(e),this.setXYZ(t,X1.x,X1.y,X1.z);return this}applyMatrix4(e){for(let t=0,l=this.count;t<l;t++)X1.fromBufferAttribute(this,t),X1.applyMatrix4(e),this.setXYZ(t,X1.x,X1.y,X1.z);return this}applyNormalMatrix(e){for(let t=0,l=this.count;t<l;t++)X1.fromBufferAttribute(this,t),X1.applyNormalMatrix(e),this.setXYZ(t,X1.x,X1.y,X1.z);return this}transformDirection(e){for(let t=0,l=this.count;t<l;t++)X1.fromBufferAttribute(this,t),X1.transformDirection(e),this.setXYZ(t,X1.x,X1.y,X1.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=d4(t,this.array)),t}setX(e,t){return this.normalized&&(t=r2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=d4(t,this.array)),t}setY(e,t){return this.normalized&&(t=r2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=d4(t,this.array)),t}setZ(e,t){return this.normalized&&(t=r2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=d4(t,this.array)),t}setW(e,t){return this.normalized&&(t=r2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,l){return e*=this.itemSize,this.normalized&&(t=r2(t,this.array),l=r2(l,this.array)),this.array[e+0]=t,this.array[e+1]=l,this}setXYZ(e,t,l,n){return e*=this.itemSize,this.normalized&&(t=r2(t,this.array),l=r2(l,this.array),n=r2(n,this.array)),this.array[e+0]=t,this.array[e+1]=l,this.array[e+2]=n,this}setXYZW(e,t,l,n,q){return e*=this.itemSize,this.normalized&&(t=r2(t,this.array),l=r2(l,this.array),n=r2(n,this.array),q=r2(q,this.array)),this.array[e+0]=t,this.array[e+1]=l,this.array[e+2]=n,this.array[e+3]=q,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==d8&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class D7 extends L2{constructor(e,t,l){super(new Uint16Array(e),t,l)}}class B7 extends L2{constructor(e,t,l){super(new Uint32Array(e),t,l)}}class t2 extends L2{constructor(e,t,l){super(new Float32Array(e),t,l)}}let R0=0;const g2=new G1,X6=new J1,G3=new S,f2=new F4,c4=new F4,K1=new S;class D2 extends y3{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=M3(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g7(e)?B7:D7)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,l=0){this.groups.push({start:e,count:t,materialIndex:l})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const l=this.attributes.normal;if(l!==void 0){const q=new E2().getNormalMatrix(e);l.applyNormalMatrix(q),l.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return g2.makeRotationFromQuaternion(e),this.applyMatrix4(g2),this}rotateX(e){return g2.makeRotationX(e),this.applyMatrix4(g2),this}rotateY(e){return g2.makeRotationY(e),this.applyMatrix4(g2),this}rotateZ(e){return g2.makeRotationZ(e),this.applyMatrix4(g2),this}translate(e,t,l){return g2.makeTranslation(e,t,l),this.applyMatrix4(g2),this}scale(e,t,l){return g2.makeScale(e,t,l),this.applyMatrix4(g2),this}lookAt(e){return X6.lookAt(e),X6.updateMatrix(),this.applyMatrix4(X6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(G3).negate(),this.translate(G3.x,G3.y,G3.z),this}setFromPoints(e){const t=[];for(let l=0,n=e.length;l<n;l++){const q=e[l];t.push(q.x,q.y,q.z||0)}return this.setAttribute("position",new t2(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new F4);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let l=0,n=t.length;l<n;l++){const q=t[l];f2.setFromBufferAttribute(q),this.morphTargetsRelative?(K1.addVectors(this.boundingBox.min,f2.min),this.boundingBox.expandByPoint(K1),K1.addVectors(this.boundingBox.max,f2.max),this.boundingBox.expandByPoint(K1)):(this.boundingBox.expandByPoint(f2.min),this.boundingBox.expandByPoint(f2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new x6);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){const l=this.boundingSphere.center;if(f2.setFromBufferAttribute(e),t)for(let q=0,s=t.length;q<s;q++){const a=t[q];c4.setFromBufferAttribute(a),this.morphTargetsRelative?(K1.addVectors(f2.min,c4.min),f2.expandByPoint(K1),K1.addVectors(f2.max,c4.max),f2.expandByPoint(K1)):(f2.expandByPoint(c4.min),f2.expandByPoint(c4.max))}f2.getCenter(l);let n=0;for(let q=0,s=e.count;q<s;q++)K1.fromBufferAttribute(e,q),n=Math.max(n,l.distanceToSquared(K1));if(t)for(let q=0,s=t.length;q<s;q++){const a=t[q],r=this.morphTargetsRelative;for(let o=0,m=a.count;o<m;o++)K1.fromBufferAttribute(a,o),r&&(G3.fromBufferAttribute(e,o),K1.add(G3)),n=Math.max(n,l.distanceToSquared(K1))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const l=e.array,n=t.position.array,q=t.normal.array,s=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new L2(new Float32Array(4*a),4));const r=this.getAttribute("tangent").array,o=[],m=[];for(let T=0;T<a;T++)o[T]=new S,m[T]=new S;const h=new S,c=new S,f=new S,x=new r1,d=new r1,u=new r1,p=new S,A=new S;function B(T,X,q1){h.fromArray(n,T*3),c.fromArray(n,X*3),f.fromArray(n,q1*3),x.fromArray(s,T*2),d.fromArray(s,X*2),u.fromArray(s,q1*2),c.sub(h),f.sub(h),d.sub(x),u.sub(x);const N=1/(d.x*u.y-u.x*d.y);!isFinite(N)||(p.copy(c).multiplyScalar(u.y).addScaledVector(f,-d.y).multiplyScalar(N),A.copy(f).multiplyScalar(d.x).addScaledVector(c,-u.x).multiplyScalar(N),o[T].add(p),o[X].add(p),o[q1].add(p),m[T].add(A),m[X].add(A),m[q1].add(A))}let v=this.groups;v.length===0&&(v=[{start:0,count:l.length}]);for(let T=0,X=v.length;T<X;++T){const q1=v[T],N=q1.start,w=q1.count;for(let W=N,j=N+w;W<j;W+=3)B(l[W+0],l[W+1],l[W+2])}const g=new S,F=new S,z=new S,_=new S;function M(T){z.fromArray(q,T*3),_.copy(z);const X=o[T];g.copy(X),g.sub(z.multiplyScalar(z.dot(X))).normalize(),F.crossVectors(_,X);const N=F.dot(m[T])<0?-1:1;r[T*4]=g.x,r[T*4+1]=g.y,r[T*4+2]=g.z,r[T*4+3]=N}for(let T=0,X=v.length;T<X;++T){const q1=v[T],N=q1.start,w=q1.count;for(let W=N,j=N+w;W<j;W+=3)M(l[W+0]),M(l[W+1]),M(l[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let l=this.getAttribute("normal");if(l===void 0)l=new L2(new Float32Array(t.count*3),3),this.setAttribute("normal",l);else for(let c=0,f=l.count;c<f;c++)l.setXYZ(c,0,0,0);const n=new S,q=new S,s=new S,a=new S,r=new S,o=new S,m=new S,h=new S;if(e)for(let c=0,f=e.count;c<f;c+=3){const x=e.getX(c+0),d=e.getX(c+1),u=e.getX(c+2);n.fromBufferAttribute(t,x),q.fromBufferAttribute(t,d),s.fromBufferAttribute(t,u),m.subVectors(s,q),h.subVectors(n,q),m.cross(h),a.fromBufferAttribute(l,x),r.fromBufferAttribute(l,d),o.fromBufferAttribute(l,u),a.add(m),r.add(m),o.add(m),l.setXYZ(x,a.x,a.y,a.z),l.setXYZ(d,r.x,r.y,r.z),l.setXYZ(u,o.x,o.y,o.z)}else for(let c=0,f=t.count;c<f;c+=3)n.fromBufferAttribute(t,c+0),q.fromBufferAttribute(t,c+1),s.fromBufferAttribute(t,c+2),m.subVectors(s,q),h.subVectors(n,q),m.cross(h),l.setXYZ(c+0,m.x,m.y,m.z),l.setXYZ(c+1,m.x,m.y,m.z),l.setXYZ(c+2,m.x,m.y,m.z);this.normalizeNormals(),l.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,l=e.count;t<l;t++)K1.fromBufferAttribute(e,t),K1.normalize(),e.setXYZ(t,K1.x,K1.y,K1.z)}toNonIndexed(){function e(a,r){const o=a.array,m=a.itemSize,h=a.normalized,c=new o.constructor(r.length*m);let f=0,x=0;for(let d=0,u=r.length;d<u;d++){a.isInterleavedBufferAttribute?f=r[d]*a.data.stride+a.offset:f=r[d]*m;for(let p=0;p<m;p++)c[x++]=o[f++]}return new L2(c,m,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new D2,l=this.index.array,n=this.attributes;for(const a in n){const r=n[a],o=e(r,l);t.setAttribute(a,o)}const q=this.morphAttributes;for(const a in q){const r=[],o=q[a];for(let m=0,h=o.length;m<h;m++){const c=o[m],f=e(c,l);r.push(f)}t.morphAttributes[a]=r}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,r=s.length;a<r;a++){const o=s[a];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const r=this.parameters;for(const o in r)r[o]!==void 0&&(e[o]=r[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const l=this.attributes;for(const r in l){const o=l[r];e.data.attributes[r]=o.toJSON(e.data)}const n={};let q=!1;for(const r in this.morphAttributes){const o=this.morphAttributes[r],m=[];for(let h=0,c=o.length;h<c;h++){const f=o[h];m.push(f.toJSON(e.data))}m.length>0&&(n[r]=m,q=!0)}q&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const l=e.index;l!==null&&this.setIndex(l.clone(t));const n=e.attributes;for(const o in n){const m=n[o];this.setAttribute(o,m.clone(t))}const q=e.morphAttributes;for(const o in q){const m=[],h=q[o];for(let c=0,f=h.length;c<f;c++)m.push(h[c].clone(t));this.morphAttributes[o]=m}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let o=0,m=s.length;o<m;o++){const h=s[o];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const r=e.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const S8=new G1,V3=new y5,Y6=new x6,t3=new S,l3=new S,n3=new S,j6=new S,Z6=new S,J6=new S,V4=new S,H4=new S,W4=new S,X4=new r1,Y4=new r1,j4=new r1,$6=new S,Z4=new S;class i2 extends J1{constructor(e=new D2,t=new q4){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,l=Object.keys(t);if(l.length>0){const n=t[l[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let q=0,s=n.length;q<s;q++){const a=n[q].name||String(q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=q}}}}raycast(e,t){const l=this.geometry,n=this.material,q=this.matrixWorld;if(n===void 0||(l.boundingSphere===null&&l.computeBoundingSphere(),Y6.copy(l.boundingSphere),Y6.applyMatrix4(q),e.ray.intersectsSphere(Y6)===!1)||(S8.copy(q).invert(),V3.copy(e.ray).applyMatrix4(S8),l.boundingBox!==null&&V3.intersectsBox(l.boundingBox)===!1))return;let s;const a=l.index,r=l.attributes.position,o=l.morphAttributes.position,m=l.morphTargetsRelative,h=l.attributes.uv,c=l.attributes.uv2,f=l.groups,x=l.drawRange;if(a!==null)if(Array.isArray(n))for(let d=0,u=f.length;d<u;d++){const p=f[d],A=n[p.materialIndex],B=Math.max(p.start,x.start),v=Math.min(a.count,Math.min(p.start+p.count,x.start+x.count));for(let g=B,F=v;g<F;g+=3){const z=a.getX(g),_=a.getX(g+1),M=a.getX(g+2);s=J4(this,A,e,V3,r,o,m,h,c,z,_,M),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const d=Math.max(0,x.start),u=Math.min(a.count,x.start+x.count);for(let p=d,A=u;p<A;p+=3){const B=a.getX(p),v=a.getX(p+1),g=a.getX(p+2);s=J4(this,n,e,V3,r,o,m,h,c,B,v,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(r!==void 0)if(Array.isArray(n))for(let d=0,u=f.length;d<u;d++){const p=f[d],A=n[p.materialIndex],B=Math.max(p.start,x.start),v=Math.min(r.count,Math.min(p.start+p.count,x.start+x.count));for(let g=B,F=v;g<F;g+=3){const z=g,_=g+1,M=g+2;s=J4(this,A,e,V3,r,o,m,h,c,z,_,M),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const d=Math.max(0,x.start),u=Math.min(r.count,x.start+x.count);for(let p=d,A=u;p<A;p+=3){const B=p,v=p+1,g=p+2;s=J4(this,n,e,V3,r,o,m,h,c,B,v,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function I0(i,e,t,l,n,q,s,a){let r;if(e.side===v2?r=l.intersectTriangle(s,q,n,!0,a):r=l.intersectTriangle(n,q,s,e.side!==w2,a),r===null)return null;Z4.copy(a),Z4.applyMatrix4(i.matrixWorld);const o=t.ray.origin.distanceTo(Z4);return o<t.near||o>t.far?null:{distance:o,point:Z4.clone(),object:i}}function J4(i,e,t,l,n,q,s,a,r,o,m,h){t3.fromBufferAttribute(n,o),l3.fromBufferAttribute(n,m),n3.fromBufferAttribute(n,h);const c=i.morphTargetInfluences;if(q&&c){V4.set(0,0,0),H4.set(0,0,0),W4.set(0,0,0);for(let x=0,d=q.length;x<d;x++){const u=c[x],p=q[x];u!==0&&(j6.fromBufferAttribute(p,o),Z6.fromBufferAttribute(p,m),J6.fromBufferAttribute(p,h),s?(V4.addScaledVector(j6,u),H4.addScaledVector(Z6,u),W4.addScaledVector(J6,u)):(V4.addScaledVector(j6.sub(t3),u),H4.addScaledVector(Z6.sub(l3),u),W4.addScaledVector(J6.sub(n3),u)))}t3.add(V4),l3.add(H4),n3.add(W4)}i.isSkinnedMesh&&(i.boneTransform(o,t3),i.boneTransform(m,l3),i.boneTransform(h,n3));const f=I0(i,e,t,l,t3,l3,n3,$6);if(f){a&&(X4.fromBufferAttribute(a,o),Y4.fromBufferAttribute(a,m),j4.fromBufferAttribute(a,h),f.uv=X2.getUV($6,t3,l3,n3,X4,Y4,j4,new r1)),r&&(X4.fromBufferAttribute(r,o),Y4.fromBufferAttribute(r,m),j4.fromBufferAttribute(r,h),f.uv2=X2.getUV($6,t3,l3,n3,X4,Y4,j4,new r1));const x={a:o,b:m,c:h,normal:new S,materialIndex:0};X2.getNormal(t3,l3,n3,x.normal),f.face=x}return f}class b4 extends D2{constructor(e=1,t=1,l=1,n=1,q=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:l,widthSegments:n,heightSegments:q,depthSegments:s};const a=this;n=Math.floor(n),q=Math.floor(q),s=Math.floor(s);const r=[],o=[],m=[],h=[];let c=0,f=0;x("z","y","x",-1,-1,l,t,e,s,q,0),x("z","y","x",1,-1,l,t,-e,s,q,1),x("x","z","y",1,1,e,l,t,n,s,2),x("x","z","y",1,-1,e,l,-t,n,s,3),x("x","y","z",1,-1,e,t,l,n,q,4),x("x","y","z",-1,-1,e,t,-l,n,q,5),this.setIndex(r),this.setAttribute("position",new t2(o,3)),this.setAttribute("normal",new t2(m,3)),this.setAttribute("uv",new t2(h,2));function x(d,u,p,A,B,v,g,F,z,_,M){const T=v/z,X=g/_,q1=v/2,N=g/2,w=F/2,W=z+1,j=_+1;let Z=0,G=0;const P=new S;for(let I=0;I<j;I++){const $=I*X-N;for(let J=0;J<W;J++){const K=J*T-q1;P[d]=K*A,P[u]=$*B,P[p]=w,o.push(P.x,P.y,P.z),P[d]=0,P[u]=0,P[p]=F>0?1:-1,m.push(P.x,P.y,P.z),h.push(J/z),h.push(1-I/_),Z+=1}}for(let I=0;I<_;I++)for(let $=0;$<z;$++){const J=c+$+W*I,K=c+$+W*(I+1),c1=c+($+1)+W*(I+1),_1=c+($+1)+W*I;r.push(J,K,_1),r.push(K,c1,_1),G+=6}a.addGroup(f,G,M),f+=G,c+=Z}}static fromJSON(e){return new b4(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function i4(i){const e={};for(const t in i){e[t]={};for(const l in i[t]){const n=i[t][l];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][l]=n.clone():Array.isArray(n)?e[t][l]=n.slice():e[t][l]=n}}return e}function n2(i){const e={};for(let t=0;t<i.length;t++){const l=i4(i[t]);for(const n in l)e[n]=l[n]}return e}function N0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const O0={clone:i4,merge:n2};var U0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class B3 extends F3{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=i4(e.uniforms),this.uniformsGroups=N0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const l={};for(const n in this.extensions)this.extensions[n]===!0&&(l[n]=!0);return Object.keys(l).length>0&&(t.extensions=l),t}}class y7 extends J1{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new G1,this.projectionMatrix=new G1,this.projectionMatrixInverse=new G1}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class d2 extends y7{constructor(e=50,t=1,l=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=l,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=m6*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(p4*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return m6*2*Math.atan(Math.tan(p4*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,l,n,q,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=l,this.view.offsetY=n,this.view.width=q,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(p4*.5*this.fov)/this.zoom,l=2*t,n=this.aspect*l,q=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const r=s.fullWidth,o=s.fullHeight;q+=s.offsetX*n/r,t-=s.offsetY*l/o,n*=s.width/r,l*=s.height/o}const a=this.filmOffset;a!==0&&(q+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(q,q+n,t,t-l,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const H3=90,W3=1;class G0 extends J1{constructor(e,t,l){super(),this.type="CubeCamera",this.renderTarget=l;const n=new d2(H3,W3,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new S(1,0,0)),this.add(n);const q=new d2(H3,W3,e,t);q.layers=this.layers,q.up.set(0,-1,0),q.lookAt(new S(-1,0,0)),this.add(q);const s=new d2(H3,W3,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new S(0,1,0)),this.add(s);const a=new d2(H3,W3,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new S(0,-1,0)),this.add(a);const r=new d2(H3,W3,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new S(0,0,1)),this.add(r);const o=new d2(H3,W3,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new S(0,0,-1)),this.add(o)}update(e,t){this.parent===null&&this.updateMatrixWorld();const l=this.renderTarget,[n,q,s,a,r,o]=this.children,m=e.getRenderTarget(),h=e.toneMapping,c=e.xr.enabled;e.toneMapping=Y2,e.xr.enabled=!1;const f=l.texture.generateMipmaps;l.texture.generateMipmaps=!1,e.setRenderTarget(l,0),e.render(t,n),e.setRenderTarget(l,1),e.render(t,q),e.setRenderTarget(l,2),e.render(t,s),e.setRenderTarget(l,3),e.render(t,a),e.setRenderTarget(l,4),e.render(t,r),l.texture.generateMipmaps=f,e.setRenderTarget(l,5),e.render(t,o),e.setRenderTarget(m),e.toneMapping=h,e.xr.enabled=c,l.texture.needsPMREMUpdate=!0}}class M7 extends C2{constructor(e,t,l,n,q,s,a,r,o,m){e=e!==void 0?e:[],t=t!==void 0?t:t4,super(e,t,l,n,q,s,a,r,o,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V0 extends C3{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const l={width:e,height:e,depth:1},n=[l,l,l,l,l,l];this.texture=new M7(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:A2}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const l={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new b4(5,5,5),q=new B3({name:"CubemapFromEquirect",uniforms:i4(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,side:v2,blending:q3});q.uniforms.tEquirect.value=t;const s=new i2(n,q),a=t.minFilter;return t.minFilter===d6&&(t.minFilter=A2),new G0(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,l,n){const q=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,l,n);e.setRenderTarget(q)}}const K6=new S,H0=new S,W0=new E2;class u3{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,l,n){return this.normal.set(e,t,l),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,l){const n=K6.subVectors(l,t).cross(H0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const l=e.delta(K6),n=this.normal.dot(l);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const q=-(e.start.dot(this.normal)+this.constant)/n;return q<0||q>1?null:t.copy(l).multiplyScalar(q).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),l=this.distanceToPoint(e.end);return t<0&&l>0||l<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const l=t||W0.getNormalMatrix(e),n=this.coplanarPoint(K6).applyMatrix4(e),q=this.normal.applyMatrix3(l).normalize();return this.constant=-n.dot(q),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const X3=new x6,$4=new S;class F5{constructor(e=new u3,t=new u3,l=new u3,n=new u3,q=new u3,s=new u3){this.planes=[e,t,l,n,q,s]}set(e,t,l,n,q,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(l),a[3].copy(n),a[4].copy(q),a[5].copy(s),this}copy(e){const t=this.planes;for(let l=0;l<6;l++)t[l].copy(e.planes[l]);return this}setFromProjectionMatrix(e){const t=this.planes,l=e.elements,n=l[0],q=l[1],s=l[2],a=l[3],r=l[4],o=l[5],m=l[6],h=l[7],c=l[8],f=l[9],x=l[10],d=l[11],u=l[12],p=l[13],A=l[14],B=l[15];return t[0].setComponents(a-n,h-r,d-c,B-u).normalize(),t[1].setComponents(a+n,h+r,d+c,B+u).normalize(),t[2].setComponents(a+q,h+o,d+f,B+p).normalize(),t[3].setComponents(a-q,h-o,d-f,B-p).normalize(),t[4].setComponents(a-s,h-m,d-x,B-A).normalize(),t[5].setComponents(a+s,h+m,d+x,B+A).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),X3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(X3)}intersectsSprite(e){return X3.center.set(0,0,0),X3.radius=.7071067811865476,X3.applyMatrix4(e.matrixWorld),this.intersectsSphere(X3)}intersectsSphere(e){const t=this.planes,l=e.center,n=-e.radius;for(let q=0;q<6;q++)if(t[q].distanceToPoint(l)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let l=0;l<6;l++){const n=t[l];if($4.x=n.normal.x>0?e.max.x:e.min.x,$4.y=n.normal.y>0?e.max.y:e.min.y,$4.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint($4)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let l=0;l<6;l++)if(t[l].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function F7(){let i=null,e=!1,t=null,l=null;function n(q,s){t(q,s),l=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(l=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(l),e=!1},setAnimationLoop:function(q){t=q},setContext:function(q){i=q}}}function X0(i,e){const t=e.isWebGL2,l=new WeakMap;function n(o,m){const h=o.array,c=o.usage,f=i.createBuffer();i.bindBuffer(m,f),i.bufferData(m,h,c),o.onUploadCallback();let x;if(h instanceof Float32Array)x=5126;else if(h instanceof Uint16Array)if(o.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(h instanceof Int16Array)x=5122;else if(h instanceof Uint32Array)x=5125;else if(h instanceof Int32Array)x=5124;else if(h instanceof Int8Array)x=5120;else if(h instanceof Uint8Array)x=5121;else if(h instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version}}function q(o,m,h){const c=m.array,f=m.updateRange;i.bindBuffer(h,o),f.count===-1?i.bufferSubData(h,0,c):(t?i.bufferSubData(h,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count):i.bufferSubData(h,f.offset*c.BYTES_PER_ELEMENT,c.subarray(f.offset,f.offset+f.count)),f.count=-1)}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),l.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const m=l.get(o);m&&(i.deleteBuffer(m.buffer),l.delete(o))}function r(o,m){if(o.isGLBufferAttribute){const c=l.get(o);(!c||c.version<o.version)&&l.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const h=l.get(o);h===void 0?l.set(o,n(o,m)):h.version<o.version&&(q(h.buffer,o,m),h.version=o.version)}return{get:s,remove:a,update:r}}class S5 extends D2{constructor(e=1,t=1,l=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:l,heightSegments:n};const q=e/2,s=t/2,a=Math.floor(l),r=Math.floor(n),o=a+1,m=r+1,h=e/a,c=t/r,f=[],x=[],d=[],u=[];for(let p=0;p<m;p++){const A=p*c-s;for(let B=0;B<o;B++){const v=B*h-q;x.push(v,-A,0),d.push(0,0,1),u.push(B/a),u.push(1-p/r)}}for(let p=0;p<r;p++)for(let A=0;A<a;A++){const B=A+o*p,v=A+o*(p+1),g=A+1+o*(p+1),F=A+1+o*p;f.push(B,v,F),f.push(v,g,F)}this.setIndex(f),this.setAttribute("position",new t2(x,3)),this.setAttribute("normal",new t2(d,3)),this.setAttribute("uv",new t2(u,2))}static fromJSON(e){return new S5(e.width,e.height,e.widthSegments,e.heightSegments)}}var Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0="vec3 transformed = vec3( position );",ee=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,te=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,le=`#ifdef USE_IRIDESCENCE
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
#endif`,ne=`#ifdef USE_BUMPMAP
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
#endif`,qe=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ie=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ae=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,se=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,re=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oe=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,me=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,he=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ce=`#define PI 3.141592653589793
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
}`,ue=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fe=`vec3 transformedNormal = objectNormal;
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
#endif`,de=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xe=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,pe=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_e=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ge="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ae=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ee=`#ifdef USE_ENVMAP
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
#endif`,ve=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ce=`#ifdef USE_ENVMAP
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
#endif`,De=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Be=`#ifdef USE_ENVMAP
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
#endif`,ye=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Me=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fe=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Se=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,be=`#ifdef USE_GRADIENTMAP
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
}`,ze=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,we=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Te=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Le=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Pe=`uniform bool receiveShadow;
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
#endif`,Re=`#if defined( USE_ENVMAP )
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
#endif`,Ie=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ne=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Oe=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ue=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,ke=`PhysicalMaterial material;
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
#endif`,Ge=`struct PhysicalMaterial {
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
}`,Ve=`
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
#endif`,He=`#if defined( RE_IndirectDiffuse )
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
#endif`,We=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xe=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ye=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,je=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ze=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Je=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$e=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ke=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qe=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,et=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tt=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lt=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nt=`#ifdef USE_MORPHNORMALS
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
#endif`,qt=`#ifdef USE_MORPHTARGETS
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
#endif`,it=`#ifdef USE_MORPHTARGETS
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
#endif`,at=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,st=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,rt=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ot=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mt=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ht=`#ifdef USE_NORMALMAP
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
#endif`,ct=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ut=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ft=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dt=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xt=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pt=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_t=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gt=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,At=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Et=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vt=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ct=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dt=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bt=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yt=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mt=`float getShadowMask() {
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
}`,Ft=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,St=`#ifdef USE_SKINNING
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
#endif`,bt=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zt=`#ifdef USE_SKINNING
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
#endif`,wt=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tt=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lt=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pt=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rt=`#ifdef USE_TRANSMISSION
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
#endif`,It=`#ifdef USE_TRANSMISSION
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
#endif`,Nt=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ot=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ut=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kt=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gt=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vt=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ht=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wt=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xt=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yt=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jt=`#include <envmap_common_pars_fragment>
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
}`,Zt=`#include <common>
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
}`,Jt=`#if DEPTH_PACKING == 3200
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
}`,$t=`#define DISTANCE
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
}`,Kt=`#define DISTANCE
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
}`,Qt=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,el=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tl=`uniform float scale;
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
}`,ll=`uniform vec3 diffuse;
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
}`,nl=`#include <common>
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
}`,ql=`uniform vec3 diffuse;
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
}`,il=`#define LAMBERT
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
}`,al=`#define LAMBERT
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
}`,sl=`#define MATCAP
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
}`,rl=`#define MATCAP
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
}`,ol=`#define NORMAL
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
}`,ml=`#define NORMAL
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
}`,hl=`#define PHONG
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
}`,cl=`#define PHONG
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
}`,ul=`#define STANDARD
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
}`,fl=`#define STANDARD
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
}`,dl=`#define TOON
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
}`,xl=`#define TOON
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
}`,pl=`uniform float size;
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
}`,_l=`uniform vec3 diffuse;
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
}`,gl=`#include <common>
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
}`,Al=`uniform vec3 color;
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
}`,El=`uniform float rotation;
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
}`,vl=`uniform vec3 diffuse;
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
}`,D1={alphamap_fragment:Y0,alphamap_pars_fragment:j0,alphatest_fragment:Z0,alphatest_pars_fragment:J0,aomap_fragment:$0,aomap_pars_fragment:K0,begin_vertex:Q0,beginnormal_vertex:ee,bsdfs:te,iridescence_fragment:le,bumpmap_pars_fragment:ne,clipping_planes_fragment:qe,clipping_planes_pars_fragment:ie,clipping_planes_pars_vertex:ae,clipping_planes_vertex:se,color_fragment:re,color_pars_fragment:oe,color_pars_vertex:me,color_vertex:he,common:ce,cube_uv_reflection_fragment:ue,defaultnormal_vertex:fe,displacementmap_pars_vertex:de,displacementmap_vertex:xe,emissivemap_fragment:pe,emissivemap_pars_fragment:_e,encodings_fragment:ge,encodings_pars_fragment:Ae,envmap_fragment:Ee,envmap_common_pars_fragment:ve,envmap_pars_fragment:Ce,envmap_pars_vertex:De,envmap_physical_pars_fragment:Re,envmap_vertex:Be,fog_vertex:ye,fog_pars_vertex:Me,fog_fragment:Fe,fog_pars_fragment:Se,gradientmap_pars_fragment:be,lightmap_fragment:ze,lightmap_pars_fragment:we,lights_lambert_fragment:Te,lights_lambert_pars_fragment:Le,lights_pars_begin:Pe,lights_toon_fragment:Ie,lights_toon_pars_fragment:Ne,lights_phong_fragment:Oe,lights_phong_pars_fragment:Ue,lights_physical_fragment:ke,lights_physical_pars_fragment:Ge,lights_fragment_begin:Ve,lights_fragment_maps:He,lights_fragment_end:We,logdepthbuf_fragment:Xe,logdepthbuf_pars_fragment:Ye,logdepthbuf_pars_vertex:je,logdepthbuf_vertex:Ze,map_fragment:Je,map_pars_fragment:$e,map_particle_fragment:Ke,map_particle_pars_fragment:Qe,metalnessmap_fragment:et,metalnessmap_pars_fragment:tt,morphcolor_vertex:lt,morphnormal_vertex:nt,morphtarget_pars_vertex:qt,morphtarget_vertex:it,normal_fragment_begin:at,normal_fragment_maps:st,normal_pars_fragment:rt,normal_pars_vertex:ot,normal_vertex:mt,normalmap_pars_fragment:ht,clearcoat_normal_fragment_begin:ct,clearcoat_normal_fragment_maps:ut,clearcoat_pars_fragment:ft,iridescence_pars_fragment:dt,output_fragment:xt,packing:pt,premultiplied_alpha_fragment:_t,project_vertex:gt,dithering_fragment:At,dithering_pars_fragment:Et,roughnessmap_fragment:vt,roughnessmap_pars_fragment:Ct,shadowmap_pars_fragment:Dt,shadowmap_pars_vertex:Bt,shadowmap_vertex:yt,shadowmask_pars_fragment:Mt,skinbase_vertex:Ft,skinning_pars_vertex:St,skinning_vertex:bt,skinnormal_vertex:zt,specularmap_fragment:wt,specularmap_pars_fragment:Tt,tonemapping_fragment:Lt,tonemapping_pars_fragment:Pt,transmission_fragment:Rt,transmission_pars_fragment:It,uv_pars_fragment:Nt,uv_pars_vertex:Ot,uv_vertex:Ut,uv2_pars_fragment:kt,uv2_pars_vertex:Gt,uv2_vertex:Vt,worldpos_vertex:Ht,background_vert:Wt,background_frag:Xt,cube_vert:Yt,cube_frag:jt,depth_vert:Zt,depth_frag:Jt,distanceRGBA_vert:$t,distanceRGBA_frag:Kt,equirect_vert:Qt,equirect_frag:el,linedashed_vert:tl,linedashed_frag:ll,meshbasic_vert:nl,meshbasic_frag:ql,meshlambert_vert:il,meshlambert_frag:al,meshmatcap_vert:sl,meshmatcap_frag:rl,meshnormal_vert:ol,meshnormal_frag:ml,meshphong_vert:hl,meshphong_frag:cl,meshphysical_vert:ul,meshphysical_frag:fl,meshtoon_vert:dl,meshtoon_frag:xl,points_vert:pl,points_frag:_l,shadow_vert:gl,shadow_frag:Al,sprite_vert:El,sprite_frag:vl},l1={common:{diffuse:{value:new z1(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new E2},uv2Transform:{value:new E2},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new r1(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new z1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new E2}},sprite:{diffuse:{value:new z1(16777215)},opacity:{value:1},center:{value:new r1(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new E2}}},z2={basic:{uniforms:n2([l1.common,l1.specularmap,l1.envmap,l1.aomap,l1.lightmap,l1.fog]),vertexShader:D1.meshbasic_vert,fragmentShader:D1.meshbasic_frag},lambert:{uniforms:n2([l1.common,l1.specularmap,l1.envmap,l1.aomap,l1.lightmap,l1.emissivemap,l1.bumpmap,l1.normalmap,l1.displacementmap,l1.fog,l1.lights,{emissive:{value:new z1(0)}}]),vertexShader:D1.meshlambert_vert,fragmentShader:D1.meshlambert_frag},phong:{uniforms:n2([l1.common,l1.specularmap,l1.envmap,l1.aomap,l1.lightmap,l1.emissivemap,l1.bumpmap,l1.normalmap,l1.displacementmap,l1.fog,l1.lights,{emissive:{value:new z1(0)},specular:{value:new z1(1118481)},shininess:{value:30}}]),vertexShader:D1.meshphong_vert,fragmentShader:D1.meshphong_frag},standard:{uniforms:n2([l1.common,l1.envmap,l1.aomap,l1.lightmap,l1.emissivemap,l1.bumpmap,l1.normalmap,l1.displacementmap,l1.roughnessmap,l1.metalnessmap,l1.fog,l1.lights,{emissive:{value:new z1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:D1.meshphysical_vert,fragmentShader:D1.meshphysical_frag},toon:{uniforms:n2([l1.common,l1.aomap,l1.lightmap,l1.emissivemap,l1.bumpmap,l1.normalmap,l1.displacementmap,l1.gradientmap,l1.fog,l1.lights,{emissive:{value:new z1(0)}}]),vertexShader:D1.meshtoon_vert,fragmentShader:D1.meshtoon_frag},matcap:{uniforms:n2([l1.common,l1.bumpmap,l1.normalmap,l1.displacementmap,l1.fog,{matcap:{value:null}}]),vertexShader:D1.meshmatcap_vert,fragmentShader:D1.meshmatcap_frag},points:{uniforms:n2([l1.points,l1.fog]),vertexShader:D1.points_vert,fragmentShader:D1.points_frag},dashed:{uniforms:n2([l1.common,l1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:D1.linedashed_vert,fragmentShader:D1.linedashed_frag},depth:{uniforms:n2([l1.common,l1.displacementmap]),vertexShader:D1.depth_vert,fragmentShader:D1.depth_frag},normal:{uniforms:n2([l1.common,l1.bumpmap,l1.normalmap,l1.displacementmap,{opacity:{value:1}}]),vertexShader:D1.meshnormal_vert,fragmentShader:D1.meshnormal_frag},sprite:{uniforms:n2([l1.sprite,l1.fog]),vertexShader:D1.sprite_vert,fragmentShader:D1.sprite_frag},background:{uniforms:{uvTransform:{value:new E2},t2D:{value:null}},vertexShader:D1.background_vert,fragmentShader:D1.background_frag},cube:{uniforms:n2([l1.envmap,{opacity:{value:1}}]),vertexShader:D1.cube_vert,fragmentShader:D1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:D1.equirect_vert,fragmentShader:D1.equirect_frag},distanceRGBA:{uniforms:n2([l1.common,l1.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:D1.distanceRGBA_vert,fragmentShader:D1.distanceRGBA_frag},shadow:{uniforms:n2([l1.lights,l1.fog,{color:{value:new z1(0)},opacity:{value:1}}]),vertexShader:D1.shadow_vert,fragmentShader:D1.shadow_frag}};z2.physical={uniforms:n2([z2.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new r1(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new z1(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new r1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new z1(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new z1(1,1,1)},specularColorMap:{value:null}}]),vertexShader:D1.meshphysical_vert,fragmentShader:D1.meshphysical_frag};function Cl(i,e,t,l,n,q){const s=new z1(0);let a=n===!0?0:1,r,o,m=null,h=0,c=null;function f(d,u){let p=!1,A=u.isScene===!0?u.background:null;A&&A.isTexture&&(A=e.get(A));const B=i.xr,v=B.getSession&&B.getSession();v&&v.environmentBlendMode==="additive"&&(A=null),A===null?x(s,a):A&&A.isColor&&(x(A,1),p=!0),(i.autoClear||p)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),A&&(A.isCubeTexture||A.mapping===f6)?(o===void 0&&(o=new i2(new b4(1,1,1),new B3({name:"BackgroundCubeMaterial",uniforms:i4(z2.cube.uniforms),vertexShader:z2.cube.vertexShader,fragmentShader:z2.cube.fragmentShader,side:v2,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(g,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(o)),o.material.uniforms.envMap.value=A,o.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,(m!==A||h!==A.version||c!==i.toneMapping)&&(o.material.needsUpdate=!0,m=A,h=A.version,c=i.toneMapping),o.layers.enableAll(),d.unshift(o,o.geometry,o.material,0,0,null)):A&&A.isTexture&&(r===void 0&&(r=new i2(new S5(2,2),new B3({name:"BackgroundMaterial",uniforms:i4(z2.background.uniforms),vertexShader:z2.background.vertexShader,fragmentShader:z2.background.fragmentShader,side:i3,depthTest:!1,depthWrite:!1,fog:!1})),r.geometry.deleteAttribute("normal"),Object.defineProperty(r.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(r)),r.material.uniforms.t2D.value=A,A.matrixAutoUpdate===!0&&A.updateMatrix(),r.material.uniforms.uvTransform.value.copy(A.matrix),(m!==A||h!==A.version||c!==i.toneMapping)&&(r.material.needsUpdate=!0,m=A,h=A.version,c=i.toneMapping),r.layers.enableAll(),d.unshift(r,r.geometry,r.material,0,0,null))}function x(d,u){t.buffers.color.setClear(d.r,d.g,d.b,u,q)}return{getClearColor:function(){return s},setClearColor:function(d,u=1){s.set(d),a=u,x(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,x(s,a)},render:f}}function Dl(i,e,t,l){const n=i.getParameter(34921),q=l.isWebGL2?null:e.get("OES_vertex_array_object"),s=l.isWebGL2||q!==null,a={},r=u(null);let o=r,m=!1;function h(w,W,j,Z,G){let P=!1;if(s){const I=d(Z,j,W);o!==I&&(o=I,f(o.object)),P=p(w,Z,j,G),P&&A(w,Z,j,G)}else{const I=W.wireframe===!0;(o.geometry!==Z.id||o.program!==j.id||o.wireframe!==I)&&(o.geometry=Z.id,o.program=j.id,o.wireframe=I,P=!0)}G!==null&&t.update(G,34963),(P||m)&&(m=!1,_(w,W,j,Z),G!==null&&i.bindBuffer(34963,t.get(G).buffer))}function c(){return l.isWebGL2?i.createVertexArray():q.createVertexArrayOES()}function f(w){return l.isWebGL2?i.bindVertexArray(w):q.bindVertexArrayOES(w)}function x(w){return l.isWebGL2?i.deleteVertexArray(w):q.deleteVertexArrayOES(w)}function d(w,W,j){const Z=j.wireframe===!0;let G=a[w.id];G===void 0&&(G={},a[w.id]=G);let P=G[W.id];P===void 0&&(P={},G[W.id]=P);let I=P[Z];return I===void 0&&(I=u(c()),P[Z]=I),I}function u(w){const W=[],j=[],Z=[];for(let G=0;G<n;G++)W[G]=0,j[G]=0,Z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:j,attributeDivisors:Z,object:w,attributes:{},index:null}}function p(w,W,j,Z){const G=o.attributes,P=W.attributes;let I=0;const $=j.getAttributes();for(const J in $)if($[J].location>=0){const c1=G[J];let _1=P[J];if(_1===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(_1=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(_1=w.instanceColor)),c1===void 0||c1.attribute!==_1||_1&&c1.data!==_1.data)return!0;I++}return o.attributesNum!==I||o.index!==Z}function A(w,W,j,Z){const G={},P=W.attributes;let I=0;const $=j.getAttributes();for(const J in $)if($[J].location>=0){let c1=P[J];c1===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(c1=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(c1=w.instanceColor));const _1={};_1.attribute=c1,c1&&c1.data&&(_1.data=c1.data),G[J]=_1,I++}o.attributes=G,o.attributesNum=I,o.index=Z}function B(){const w=o.newAttributes;for(let W=0,j=w.length;W<j;W++)w[W]=0}function v(w){g(w,0)}function g(w,W){const j=o.newAttributes,Z=o.enabledAttributes,G=o.attributeDivisors;j[w]=1,Z[w]===0&&(i.enableVertexAttribArray(w),Z[w]=1),G[w]!==W&&((l.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[l.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,W),G[w]=W)}function F(){const w=o.newAttributes,W=o.enabledAttributes;for(let j=0,Z=W.length;j<Z;j++)W[j]!==w[j]&&(i.disableVertexAttribArray(j),W[j]=0)}function z(w,W,j,Z,G,P){l.isWebGL2===!0&&(j===5124||j===5125)?i.vertexAttribIPointer(w,W,j,G,P):i.vertexAttribPointer(w,W,j,Z,G,P)}function _(w,W,j,Z){if(l.isWebGL2===!1&&(w.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;B();const G=Z.attributes,P=j.getAttributes(),I=W.defaultAttributeValues;for(const $ in P){const J=P[$];if(J.location>=0){let K=G[$];if(K===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(K=w.instanceColor)),K!==void 0){const c1=K.normalized,_1=K.itemSize,H=t.get(K);if(H===void 0)continue;const S1=H.buffer,d1=H.type,g1=H.bytesPerElement;if(K.isInterleavedBufferAttribute){const h1=K.data,w1=h1.stride,v1=K.offset;if(h1.isInstancedInterleavedBuffer){for(let f1=0;f1<J.locationSize;f1++)g(J.location+f1,h1.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=h1.meshPerAttribute*h1.count)}else for(let f1=0;f1<J.locationSize;f1++)v(J.location+f1);i.bindBuffer(34962,S1);for(let f1=0;f1<J.locationSize;f1++)z(J.location+f1,_1/J.locationSize,d1,c1,w1*g1,(v1+_1/J.locationSize*f1)*g1)}else{if(K.isInstancedBufferAttribute){for(let h1=0;h1<J.locationSize;h1++)g(J.location+h1,K.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let h1=0;h1<J.locationSize;h1++)v(J.location+h1);i.bindBuffer(34962,S1);for(let h1=0;h1<J.locationSize;h1++)z(J.location+h1,_1/J.locationSize,d1,c1,_1*g1,_1/J.locationSize*h1*g1)}}else if(I!==void 0){const c1=I[$];if(c1!==void 0)switch(c1.length){case 2:i.vertexAttrib2fv(J.location,c1);break;case 3:i.vertexAttrib3fv(J.location,c1);break;case 4:i.vertexAttrib4fv(J.location,c1);break;default:i.vertexAttrib1fv(J.location,c1)}}}}F()}function M(){q1();for(const w in a){const W=a[w];for(const j in W){const Z=W[j];for(const G in Z)x(Z[G].object),delete Z[G];delete W[j]}delete a[w]}}function T(w){if(a[w.id]===void 0)return;const W=a[w.id];for(const j in W){const Z=W[j];for(const G in Z)x(Z[G].object),delete Z[G];delete W[j]}delete a[w.id]}function X(w){for(const W in a){const j=a[W];if(j[w.id]===void 0)continue;const Z=j[w.id];for(const G in Z)x(Z[G].object),delete Z[G];delete j[w.id]}}function q1(){N(),m=!0,o!==r&&(o=r,f(o.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:q1,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:X,initAttributes:B,enableAttribute:v,disableUnusedAttributes:F}}function Bl(i,e,t,l){const n=l.isWebGL2;let q;function s(o){q=o}function a(o,m){i.drawArrays(q,o,m),t.update(m,q,1)}function r(o,m,h){if(h===0)return;let c,f;if(n)c=i,f="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[f](q,o,m,h),t.update(m,q,h)}this.setMode=s,this.render=a,this.renderInstances=r}function yl(i,e,t){let l;function n(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function q(z){if(z==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const r=q(a);r!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",r,"instead."),a=r);const o=s||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),c=i.getParameter(35660),f=i.getParameter(3379),x=i.getParameter(34076),d=i.getParameter(34921),u=i.getParameter(36347),p=i.getParameter(36348),A=i.getParameter(36349),B=c>0,v=s||e.has("OES_texture_float"),g=B&&v,F=s?i.getParameter(36183):0;return{isWebGL2:s,drawBuffers:o,getMaxAnisotropy:n,getMaxPrecision:q,precision:a,logarithmicDepthBuffer:m,maxTextures:h,maxVertexTextures:c,maxTextureSize:f,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:u,maxVaryings:p,maxFragmentUniforms:A,vertexTextures:B,floatFragmentTextures:v,floatVertexTextures:g,maxSamples:F}}function Ml(i){const e=this;let t=null,l=0,n=!1,q=!1;const s=new u3,a=new E2,r={value:null,needsUpdate:!1};this.uniform=r,this.numPlanes=0,this.numIntersection=0,this.init=function(h,c,f){const x=h.length!==0||c||l!==0||n;return n=c,t=m(h,f,0),l=h.length,x},this.beginShadows=function(){q=!0,m(null)},this.endShadows=function(){q=!1,o()},this.setState=function(h,c,f){const x=h.clippingPlanes,d=h.clipIntersection,u=h.clipShadows,p=i.get(h);if(!n||x===null||x.length===0||q&&!u)q?m(null):o();else{const A=q?0:l,B=A*4;let v=p.clippingState||null;r.value=v,v=m(x,c,B,f);for(let g=0;g!==B;++g)v[g]=t[g];p.clippingState=v,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=A}};function o(){r.value!==t&&(r.value=t,r.needsUpdate=l>0),e.numPlanes=l,e.numIntersection=0}function m(h,c,f,x){const d=h!==null?h.length:0;let u=null;if(d!==0){if(u=r.value,x!==!0||u===null){const p=f+d*4,A=c.matrixWorldInverse;a.getNormalMatrix(A),(u===null||u.length<p)&&(u=new Float32Array(p));for(let B=0,v=f;B!==d;++B,v+=4)s.copy(h[B]).applyMatrix4(A,a),s.normal.toArray(u,v),u[v+3]=s.constant}r.value=u,r.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,u}}function Fl(i){let e=new WeakMap;function t(s,a){return a===m5?s.mapping=t4:a===h5&&(s.mapping=l4),s}function l(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===m5||a===h5)if(e.has(s)){const r=e.get(s).texture;return t(r,s.mapping)}else{const r=s.image;if(r&&r.height>0){const o=new V0(r.height/2);return o.fromEquirectangularTexture(i,s),e.set(s,o),s.addEventListener("dispose",n),t(o.texture,s.mapping)}else return null}}return s}function n(s){const a=s.target;a.removeEventListener("dispose",n);const r=e.get(a);r!==void 0&&(e.delete(a),r.dispose())}function q(){e=new WeakMap}return{get:l,dispose:q}}class Sl extends y7{constructor(e=-1,t=1,l=1,n=-1,q=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=l,this.bottom=n,this.near=q,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,l,n,q,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=l,this.view.offsetY=n,this.view.width=q,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),l=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let q=l-e,s=l+e,a=n+t,r=n-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;q+=o*this.view.offsetX,s=q+o*this.view.width,a-=m*this.view.offsetY,r=a-m*this.view.height}this.projectionMatrix.makeOrthographic(q,s,a,r,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const J3=4,b8=[.125,.215,.35,.446,.526,.582],d3=20,Q6=new Sl,z8=new z1;let e5=null;const f3=(1+Math.sqrt(5))/2,Y3=1/f3,w8=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,f3,Y3),new S(0,f3,-Y3),new S(Y3,0,f3),new S(-Y3,0,f3),new S(f3,Y3,0),new S(-f3,Y3,0)];class T8{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,l=.1,n=100){e5=this._renderer.getRenderTarget(),this._setSize(256);const q=this._allocateTargets();return q.depthBuffer=!0,this._sceneToCubeUV(e,l,n,q),t>0&&this._blur(q,0,0,t),this._applyPMREM(q),this._cleanup(q),q}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R8(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P8(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(e5),e.scissorTest=!1,K4(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===t4||e.mapping===l4?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),e5=this._renderer.getRenderTarget();const l=t||this._allocateTargets();return this._textureToCubeUV(e,l),this._applyPMREM(l),this._cleanup(l),l}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,l={magFilter:A2,minFilter:A2,generateMipmaps:!1,type:v4,format:T2,encoding:v3,depthBuffer:!1},n=L8(e,t,l);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L8(e,t,l);const{_lodMax:q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bl(q)),this._blurMaterial=zl(q,e,t)}return n}_compileMaterial(e){const t=new i2(this._lodPlanes[0],e);this._renderer.compile(t,Q6)}_sceneToCubeUV(e,t,l,n){const a=new d2(90,1,t,l),r=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,c=m.toneMapping;m.getClearColor(z8),m.toneMapping=Y2,m.autoClear=!1;const f=new q4({name:"PMREM.Background",side:v2,depthWrite:!1,depthTest:!1}),x=new i2(new b4,f);let d=!1;const u=e.background;u?u.isColor&&(f.color.copy(u),e.background=null,d=!0):(f.color.copy(z8),d=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,r[p],0),a.lookAt(o[p],0,0)):A===1?(a.up.set(0,0,r[p]),a.lookAt(0,o[p],0)):(a.up.set(0,r[p],0),a.lookAt(0,0,o[p]));const B=this._cubeSize;K4(n,A*B,p>2?B:0,B,B),m.setRenderTarget(n),d&&m.render(x,a),m.render(e,a)}x.geometry.dispose(),x.material.dispose(),m.toneMapping=c,m.autoClear=h,e.background=u}_textureToCubeUV(e,t){const l=this._renderer,n=e.mapping===t4||e.mapping===l4;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=R8()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P8());const q=n?this._cubemapMaterial:this._equirectMaterial,s=new i2(this._lodPlanes[0],q),a=q.uniforms;a.envMap.value=e;const r=this._cubeSize;K4(t,0,0,3*r,2*r),l.setRenderTarget(t),l.render(s,Q6)}_applyPMREM(e){const t=this._renderer,l=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const q=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=w8[(n-1)%w8.length];this._blur(e,n-1,n,q,s)}t.autoClear=l}_blur(e,t,l,n,q){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,l,n,"latitudinal",q),this._halfBlur(s,e,l,l,n,"longitudinal",q)}_halfBlur(e,t,l,n,q,s,a){const r=this._renderer,o=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,h=new i2(this._lodPlanes[n],o),c=o.uniforms,f=this._sizeLods[l]-1,x=isFinite(q)?Math.PI/(2*f):2*Math.PI/(2*d3-1),d=q/x,u=isFinite(q)?1+Math.floor(m*d):d3;u>d3&&console.warn(`sigmaRadians, ${q}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${d3}`);const p=[];let A=0;for(let z=0;z<d3;++z){const _=z/d,M=Math.exp(-_*_/2);p.push(M),z===0?A+=M:z<u&&(A+=2*M)}for(let z=0;z<p.length;z++)p[z]=p[z]/A;c.envMap.value=e.texture,c.samples.value=u,c.weights.value=p,c.latitudinal.value=s==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:B}=this;c.dTheta.value=x,c.mipInt.value=B-l;const v=this._sizeLods[n],g=3*v*(n>B-J3?n-B+J3:0),F=4*(this._cubeSize-v);K4(t,g,F,3*v,2*v),r.setRenderTarget(t),r.render(h,Q6)}}function bl(i){const e=[],t=[],l=[];let n=i;const q=i-J3+1+b8.length;for(let s=0;s<q;s++){const a=Math.pow(2,n);t.push(a);let r=1/a;s>i-J3?r=b8[s-i+J3-1]:s===0&&(r=0),l.push(r);const o=1/(a-2),m=-o,h=1+o,c=[m,m,h,m,h,h,m,m,h,h,m,h],f=6,x=6,d=3,u=2,p=1,A=new Float32Array(d*x*f),B=new Float32Array(u*x*f),v=new Float32Array(p*x*f);for(let F=0;F<f;F++){const z=F%3*2/3-1,_=F>2?0:-1,M=[z,_,0,z+2/3,_,0,z+2/3,_+1,0,z,_,0,z+2/3,_+1,0,z,_+1,0];A.set(M,d*x*F),B.set(c,u*x*F);const T=[F,F,F,F,F,F];v.set(T,p*x*F)}const g=new D2;g.setAttribute("position",new L2(A,d)),g.setAttribute("uv",new L2(B,u)),g.setAttribute("faceIndex",new L2(v,p)),e.push(g),n>J3&&n--}return{lodPlanes:e,sizeLods:t,sigmas:l}}function L8(i,e,t){const l=new C3(i,e,t);return l.texture.mapping=f6,l.texture.name="PMREM.cubeUv",l.scissorTest=!0,l}function K4(i,e,t,l,n){i.viewport.set(e,t,l,n),i.scissor.set(e,t,l,n)}function zl(i,e,t){const l=new Float32Array(d3),n=new S(0,1,0);return new B3({name:"SphericalGaussianBlur",defines:{n:d3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:b5(),fragmentShader:`

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
		`,blending:q3,depthTest:!1,depthWrite:!1})}function P8(){return new B3({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:b5(),fragmentShader:`

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
		`,blending:q3,depthTest:!1,depthWrite:!1})}function R8(){return new B3({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:b5(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:q3,depthTest:!1,depthWrite:!1})}function b5(){return`

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
	`}function wl(i){let e=new WeakMap,t=null;function l(a){if(a&&a.isTexture){const r=a.mapping,o=r===m5||r===h5,m=r===t4||r===l4;if(o||m)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new T8(i)),h=o?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(o&&h&&h.height>0||m&&h&&n(h)){t===null&&(t=new T8(i));const c=o?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,c),a.addEventListener("dispose",q),c.texture}else return null}}}return a}function n(a){let r=0;const o=6;for(let m=0;m<o;m++)a[m]!==void 0&&r++;return r===o}function q(a){const r=a.target;r.removeEventListener("dispose",q);const o=e.get(r);o!==void 0&&(e.delete(r),o.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:l,dispose:s}}function Tl(i){const e={};function t(l){if(e[l]!==void 0)return e[l];let n;switch(l){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(l)}return e[l]=n,n}return{has:function(l){return t(l)!==null},init:function(l){l.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(l){const n=t(l);return n===null&&console.warn("THREE.WebGLRenderer: "+l+" extension not supported."),n}}}function Ll(i,e,t,l){const n={},q=new WeakMap;function s(h){const c=h.target;c.index!==null&&e.remove(c.index);for(const x in c.attributes)e.remove(c.attributes[x]);c.removeEventListener("dispose",s),delete n[c.id];const f=q.get(c);f&&(e.remove(f),q.delete(c)),l.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function a(h,c){return n[c.id]===!0||(c.addEventListener("dispose",s),n[c.id]=!0,t.memory.geometries++),c}function r(h){const c=h.attributes;for(const x in c)e.update(c[x],34962);const f=h.morphAttributes;for(const x in f){const d=f[x];for(let u=0,p=d.length;u<p;u++)e.update(d[u],34962)}}function o(h){const c=[],f=h.index,x=h.attributes.position;let d=0;if(f!==null){const A=f.array;d=f.version;for(let B=0,v=A.length;B<v;B+=3){const g=A[B+0],F=A[B+1],z=A[B+2];c.push(g,F,F,z,z,g)}}else{const A=x.array;d=x.version;for(let B=0,v=A.length/3-1;B<v;B+=3){const g=B+0,F=B+1,z=B+2;c.push(g,F,F,z,z,g)}}const u=new(g7(c)?B7:D7)(c,1);u.version=d;const p=q.get(h);p&&e.remove(p),q.set(h,u)}function m(h){const c=q.get(h);if(c){const f=h.index;f!==null&&c.version<f.version&&o(h)}else o(h);return q.get(h)}return{get:a,update:r,getWireframeAttribute:m}}function Pl(i,e,t,l){const n=l.isWebGL2;let q;function s(c){q=c}let a,r;function o(c){a=c.type,r=c.bytesPerElement}function m(c,f){i.drawElements(q,f,a,c*r),t.update(f,q,1)}function h(c,f,x){if(x===0)return;let d,u;if(n)d=i,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](q,f,a,c*r,x),t.update(f,q,x)}this.setMode=s,this.setIndex=o,this.render=m,this.renderInstances=h}function Rl(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function l(q,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(q/3);break;case 1:t.lines+=a*(q/2);break;case 3:t.lines+=a*(q-1);break;case 2:t.lines+=a*q;break;case 0:t.points+=a*q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:l}}function Il(i,e){return i[0]-e[0]}function Nl(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ol(i,e,t){const l={},n=new Float32Array(8),q=new WeakMap,s=new R1,a=[];for(let o=0;o<8;o++)a[o]=[o,0];function r(o,m,h,c){const f=o.morphTargetInfluences;if(e.isWebGL2===!0){const d=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,u=d!==void 0?d.length:0;let p=q.get(m);if(p===void 0||p.count!==u){let j=function(){w.dispose(),q.delete(m),m.removeEventListener("dispose",j)};var x=j;p!==void 0&&p.texture.dispose();const v=m.morphAttributes.position!==void 0,g=m.morphAttributes.normal!==void 0,F=m.morphAttributes.color!==void 0,z=m.morphAttributes.position||[],_=m.morphAttributes.normal||[],M=m.morphAttributes.color||[];let T=0;v===!0&&(T=1),g===!0&&(T=2),F===!0&&(T=3);let X=m.attributes.position.count*T,q1=1;X>e.maxTextureSize&&(q1=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const N=new Float32Array(X*q1*4*u),w=new C7(N,X,q1,u);w.type=p3,w.needsUpdate=!0;const W=T*4;for(let Z=0;Z<u;Z++){const G=z[Z],P=_[Z],I=M[Z],$=X*q1*4*Z;for(let J=0;J<G.count;J++){const K=J*W;v===!0&&(s.fromBufferAttribute(G,J),N[$+K+0]=s.x,N[$+K+1]=s.y,N[$+K+2]=s.z,N[$+K+3]=0),g===!0&&(s.fromBufferAttribute(P,J),N[$+K+4]=s.x,N[$+K+5]=s.y,N[$+K+6]=s.z,N[$+K+7]=0),F===!0&&(s.fromBufferAttribute(I,J),N[$+K+8]=s.x,N[$+K+9]=s.y,N[$+K+10]=s.z,N[$+K+11]=I.itemSize===4?s.w:1)}}p={count:u,texture:w,size:new r1(X,q1)},q.set(m,p),m.addEventListener("dispose",j)}let A=0;for(let v=0;v<f.length;v++)A+=f[v];const B=m.morphTargetsRelative?1:1-A;c.getUniforms().setValue(i,"morphTargetBaseInfluence",B),c.getUniforms().setValue(i,"morphTargetInfluences",f),c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const d=f===void 0?0:f.length;let u=l[m.id];if(u===void 0||u.length!==d){u=[];for(let g=0;g<d;g++)u[g]=[g,0];l[m.id]=u}for(let g=0;g<d;g++){const F=u[g];F[0]=g,F[1]=f[g]}u.sort(Nl);for(let g=0;g<8;g++)g<d&&u[g][1]?(a[g][0]=u[g][0],a[g][1]=u[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Il);const p=m.morphAttributes.position,A=m.morphAttributes.normal;let B=0;for(let g=0;g<8;g++){const F=a[g],z=F[0],_=F[1];z!==Number.MAX_SAFE_INTEGER&&_?(p&&m.getAttribute("morphTarget"+g)!==p[z]&&m.setAttribute("morphTarget"+g,p[z]),A&&m.getAttribute("morphNormal"+g)!==A[z]&&m.setAttribute("morphNormal"+g,A[z]),n[g]=_,B+=_):(p&&m.hasAttribute("morphTarget"+g)===!0&&m.deleteAttribute("morphTarget"+g),A&&m.hasAttribute("morphNormal"+g)===!0&&m.deleteAttribute("morphNormal"+g),n[g]=0)}const v=m.morphTargetsRelative?1:1-B;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",n)}}return{update:r}}function Ul(i,e,t,l){let n=new WeakMap;function q(r){const o=l.render.frame,m=r.geometry,h=e.get(r,m);return n.get(h)!==o&&(e.update(h),n.set(h,o)),r.isInstancedMesh&&(r.hasEventListener("dispose",a)===!1&&r.addEventListener("dispose",a),t.update(r.instanceMatrix,34962),r.instanceColor!==null&&t.update(r.instanceColor,34962)),h}function s(){n=new WeakMap}function a(r){const o=r.target;o.removeEventListener("dispose",a),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:q,dispose:s}}const S7=new C2,b7=new C7,z7=new M0,w7=new M7,I8=[],N8=[],O8=new Float32Array(16),U8=new Float32Array(9),k8=new Float32Array(4);function s4(i,e,t){const l=i[0];if(l<=0||l>0)return i;const n=e*t;let q=I8[n];if(q===void 0&&(q=new Float32Array(n),I8[n]=q),e!==0){l.toArray(q,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(q,a)}return q}function a2(i,e){if(i.length!==e.length)return!1;for(let t=0,l=i.length;t<l;t++)if(i[t]!==e[t])return!1;return!0}function s2(i,e){for(let t=0,l=e.length;t<l;t++)i[t]=e[t]}function p6(i,e){let t=N8[e];t===void 0&&(t=new Int32Array(e),N8[e]=t);for(let l=0;l!==e;++l)t[l]=i.allocateTextureUnit();return t}function kl(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gl(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(a2(t,e))return;i.uniform2fv(this.addr,e),s2(t,e)}}function Vl(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(a2(t,e))return;i.uniform3fv(this.addr,e),s2(t,e)}}function Hl(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(a2(t,e))return;i.uniform4fv(this.addr,e),s2(t,e)}}function Wl(i,e){const t=this.cache,l=e.elements;if(l===void 0){if(a2(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),s2(t,e)}else{if(a2(t,l))return;k8.set(l),i.uniformMatrix2fv(this.addr,!1,k8),s2(t,l)}}function Xl(i,e){const t=this.cache,l=e.elements;if(l===void 0){if(a2(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),s2(t,e)}else{if(a2(t,l))return;U8.set(l),i.uniformMatrix3fv(this.addr,!1,U8),s2(t,l)}}function Yl(i,e){const t=this.cache,l=e.elements;if(l===void 0){if(a2(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),s2(t,e)}else{if(a2(t,l))return;O8.set(l),i.uniformMatrix4fv(this.addr,!1,O8),s2(t,l)}}function jl(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zl(i,e){const t=this.cache;a2(t,e)||(i.uniform2iv(this.addr,e),s2(t,e))}function Jl(i,e){const t=this.cache;a2(t,e)||(i.uniform3iv(this.addr,e),s2(t,e))}function $l(i,e){const t=this.cache;a2(t,e)||(i.uniform4iv(this.addr,e),s2(t,e))}function Kl(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ql(i,e){const t=this.cache;a2(t,e)||(i.uniform2uiv(this.addr,e),s2(t,e))}function en(i,e){const t=this.cache;a2(t,e)||(i.uniform3uiv(this.addr,e),s2(t,e))}function tn(i,e){const t=this.cache;a2(t,e)||(i.uniform4uiv(this.addr,e),s2(t,e))}function ln(i,e,t){const l=this.cache,n=t.allocateTextureUnit();l[0]!==n&&(i.uniform1i(this.addr,n),l[0]=n),t.setTexture2D(e||S7,n)}function nn(i,e,t){const l=this.cache,n=t.allocateTextureUnit();l[0]!==n&&(i.uniform1i(this.addr,n),l[0]=n),t.setTexture3D(e||z7,n)}function qn(i,e,t){const l=this.cache,n=t.allocateTextureUnit();l[0]!==n&&(i.uniform1i(this.addr,n),l[0]=n),t.setTextureCube(e||w7,n)}function an(i,e,t){const l=this.cache,n=t.allocateTextureUnit();l[0]!==n&&(i.uniform1i(this.addr,n),l[0]=n),t.setTexture2DArray(e||b7,n)}function sn(i){switch(i){case 5126:return kl;case 35664:return Gl;case 35665:return Vl;case 35666:return Hl;case 35674:return Wl;case 35675:return Xl;case 35676:return Yl;case 5124:case 35670:return jl;case 35667:case 35671:return Zl;case 35668:case 35672:return Jl;case 35669:case 35673:return $l;case 5125:return Kl;case 36294:return Ql;case 36295:return en;case 36296:return tn;case 35678:case 36198:case 36298:case 36306:case 35682:return ln;case 35679:case 36299:case 36307:return nn;case 35680:case 36300:case 36308:case 36293:return qn;case 36289:case 36303:case 36311:case 36292:return an}}function rn(i,e){i.uniform1fv(this.addr,e)}function on(i,e){const t=s4(e,this.size,2);i.uniform2fv(this.addr,t)}function mn(i,e){const t=s4(e,this.size,3);i.uniform3fv(this.addr,t)}function hn(i,e){const t=s4(e,this.size,4);i.uniform4fv(this.addr,t)}function cn(i,e){const t=s4(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function un(i,e){const t=s4(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fn(i,e){const t=s4(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dn(i,e){i.uniform1iv(this.addr,e)}function xn(i,e){i.uniform2iv(this.addr,e)}function pn(i,e){i.uniform3iv(this.addr,e)}function _n(i,e){i.uniform4iv(this.addr,e)}function gn(i,e){i.uniform1uiv(this.addr,e)}function An(i,e){i.uniform2uiv(this.addr,e)}function En(i,e){i.uniform3uiv(this.addr,e)}function vn(i,e){i.uniform4uiv(this.addr,e)}function Cn(i,e,t){const l=e.length,n=p6(t,l);i.uniform1iv(this.addr,n);for(let q=0;q!==l;++q)t.setTexture2D(e[q]||S7,n[q])}function Dn(i,e,t){const l=e.length,n=p6(t,l);i.uniform1iv(this.addr,n);for(let q=0;q!==l;++q)t.setTexture3D(e[q]||z7,n[q])}function Bn(i,e,t){const l=e.length,n=p6(t,l);i.uniform1iv(this.addr,n);for(let q=0;q!==l;++q)t.setTextureCube(e[q]||w7,n[q])}function yn(i,e,t){const l=e.length,n=p6(t,l);i.uniform1iv(this.addr,n);for(let q=0;q!==l;++q)t.setTexture2DArray(e[q]||b7,n[q])}function Mn(i){switch(i){case 5126:return rn;case 35664:return on;case 35665:return mn;case 35666:return hn;case 35674:return cn;case 35675:return un;case 35676:return fn;case 5124:case 35670:return dn;case 35667:case 35671:return xn;case 35668:case 35672:return pn;case 35669:case 35673:return _n;case 5125:return gn;case 36294:return An;case 36295:return En;case 36296:return vn;case 35678:case 36198:case 36298:case 36306:case 35682:return Cn;case 35679:case 36299:case 36307:return Dn;case 35680:case 36300:case 36308:case 36293:return Bn;case 36289:case 36303:case 36311:case 36292:return yn}}class Fn{constructor(e,t,l){this.id=e,this.addr=l,this.cache=[],this.setValue=sn(t.type)}}class Sn{constructor(e,t,l){this.id=e,this.addr=l,this.cache=[],this.size=t.size,this.setValue=Mn(t.type)}}class bn{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,l){const n=this.seq;for(let q=0,s=n.length;q!==s;++q){const a=n[q];a.setValue(e,t[a.id],l)}}}const t5=/(\w+)(\])?(\[|\.)?/g;function G8(i,e){i.seq.push(e),i.map[e.id]=e}function zn(i,e,t){const l=i.name,n=l.length;for(t5.lastIndex=0;;){const q=t5.exec(l),s=t5.lastIndex;let a=q[1];const r=q[2]==="]",o=q[3];if(r&&(a=a|0),o===void 0||o==="["&&s+2===n){G8(t,o===void 0?new Fn(a,i,e):new Sn(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new bn(a),G8(t,h)),t=h}}}class s6{constructor(e,t){this.seq=[],this.map={};const l=e.getProgramParameter(t,35718);for(let n=0;n<l;++n){const q=e.getActiveUniform(t,n),s=e.getUniformLocation(t,q.name);zn(q,s,this)}}setValue(e,t,l,n){const q=this.map[t];q!==void 0&&q.setValue(e,l,n)}setOptional(e,t,l){const n=t[l];n!==void 0&&this.setValue(e,l,n)}static upload(e,t,l,n){for(let q=0,s=t.length;q!==s;++q){const a=t[q],r=l[a.id];r.needsUpdate!==!1&&a.setValue(e,r.value,n)}}static seqWithValue(e,t){const l=[];for(let n=0,q=e.length;n!==q;++n){const s=e[n];s.id in t&&l.push(s)}return l}}function V8(i,e,t){const l=i.createShader(e);return i.shaderSource(l,t),i.compileShader(l),l}let wn=0;function Tn(i,e){const t=i.split(`
`),l=[],n=Math.max(e-6,0),q=Math.min(e+6,t.length);for(let s=n;s<q;s++){const a=s+1;l.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return l.join(`
`)}function Ln(i){switch(i){case v3:return["Linear","( value )"];case U1:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function H8(i,e,t){const l=i.getShaderParameter(e,35713),n=i.getShaderInfoLog(e).trim();if(l&&n==="")return"";const q=/ERROR: 0:(\d+)/.exec(n);if(q){const s=parseInt(q[1]);return t.toUpperCase()+`

`+n+`

`+Tn(i.getShaderSource(e),s)}else return n}function Pn(i,e){const t=Ln(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Rn(i,e){let t;switch(e){case k9:t="Linear";break;case G9:t="Reinhard";break;case V9:t="OptimizedCineon";break;case H9:t="ACESFilmic";break;case W9:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function In(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(x4).join(`
`)}function Nn(i){const e=[];for(const t in i){const l=i[t];l!==!1&&e.push("#define "+t+" "+l)}return e.join(`
`)}function On(i,e){const t={},l=i.getProgramParameter(e,35721);for(let n=0;n<l;n++){const q=i.getActiveAttrib(e,n),s=q.name;let a=1;q.type===35674&&(a=2),q.type===35675&&(a=3),q.type===35676&&(a=4),t[s]={type:q.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function x4(i){return i!==""}function W8(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function X8(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Un=/^[ \t]*#include +<([\w\d./]+)>/gm;function x5(i){return i.replace(Un,kn)}function kn(i,e){const t=D1[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return x5(t)}const Gn=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y8(i){return i.replace(Gn,Vn)}function Vn(i,e,t,l){let n="";for(let q=parseInt(e);q<parseInt(t);q++)n+=l.replace(/\[\s*i\s*\]/g,"[ "+q+" ]").replace(/UNROLLED_LOOP_INDEX/g,q);return n}function j8(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hn(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===f7?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===g9?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===f4&&(e="SHADOWMAP_TYPE_VSM"),e}function Wn(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case t4:case l4:e="ENVMAP_TYPE_CUBE";break;case f6:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xn(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case l4:e="ENVMAP_MODE_REFRACTION";break}return e}function Yn(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case C5:e="ENVMAP_BLENDING_MULTIPLY";break;case O9:e="ENVMAP_BLENDING_MIX";break;case U9:e="ENVMAP_BLENDING_ADD";break}return e}function jn(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,l=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:l,maxMip:t}}function Zn(i,e,t,l){const n=i.getContext(),q=t.defines;let s=t.vertexShader,a=t.fragmentShader;const r=Hn(t),o=Wn(t),m=Xn(t),h=Yn(t),c=jn(t),f=t.isWebGL2?"":In(t),x=Nn(q),d=n.createProgram();let u,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=[x].filter(x4).join(`
`),u.length>0&&(u+=`
`),p=[f,x].filter(x4).join(`
`),p.length>0&&(p+=`
`)):(u=[j8(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+r:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(x4).join(`
`),p=[f,j8(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+m:"",t.envMap?"#define "+h:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+r:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Y2?"#define TONE_MAPPING":"",t.toneMapping!==Y2?D1.tonemapping_pars_fragment:"",t.toneMapping!==Y2?Rn("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",D1.encodings_pars_fragment,Pn("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(x4).join(`
`)),s=x5(s),s=W8(s,t),s=X8(s,t),a=x5(a),a=W8(a,t),a=X8(a,t),s=Y8(s),a=Y8(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,p=["#define varying in",t.glslVersion===x8?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===x8?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const B=A+u+s,v=A+p+a,g=V8(n,35633,B),F=V8(n,35632,v);if(n.attachShader(d,g),n.attachShader(d,F),t.index0AttributeName!==void 0?n.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d),i.debug.checkShaderErrors){const M=n.getProgramInfoLog(d).trim(),T=n.getShaderInfoLog(g).trim(),X=n.getShaderInfoLog(F).trim();let q1=!0,N=!0;if(n.getProgramParameter(d,35714)===!1){q1=!1;const w=H8(n,g,"vertex"),W=H8(n,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,35715)+`

Program Info Log: `+M+`
`+w+`
`+W)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||X==="")&&(N=!1);N&&(this.diagnostics={runnable:q1,programLog:M,vertexShader:{log:T,prefix:u},fragmentShader:{log:X,prefix:p}})}n.deleteShader(g),n.deleteShader(F);let z;this.getUniforms=function(){return z===void 0&&(z=new s6(n,d)),z};let _;return this.getAttributes=function(){return _===void 0&&(_=On(n,d)),_},this.destroy=function(){l.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=wn++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=g,this.fragmentShader=F,this}let Jn=0;class $n{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,l=e.fragmentShader,n=this._getShaderStage(t),q=this._getShaderStage(l),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(q)===!1&&(s.add(q),q.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const l of t)l.usedTimes--,l.usedTimes===0&&this.shaderCache.delete(l.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let l=t.get(e);return l===void 0&&(l=new Set,t.set(e,l)),l}_getShaderStage(e){const t=this.shaderCache;let l=t.get(e);return l===void 0&&(l=new Kn(e),t.set(e,l)),l}}class Kn{constructor(e){this.id=Jn++,this.code=e,this.usedTimes=0}}function Qn(i,e,t,l,n,q,s){const a=new M5,r=new $n,o=[],m=n.isWebGL2,h=n.logarithmicDepthBuffer,c=n.vertexTextures;let f=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_,M,T,X,q1){const N=X.fog,w=q1.geometry,W=_.isMeshStandardMaterial?X.environment:null,j=(_.isMeshStandardMaterial?t:e).get(_.envMap||W),Z=!!j&&j.mapping===f6?j.image.height:null,G=x[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const P=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,I=P!==void 0?P.length:0;let $=0;w.morphAttributes.position!==void 0&&($=1),w.morphAttributes.normal!==void 0&&($=2),w.morphAttributes.color!==void 0&&($=3);let J,K,c1,_1;if(G){const w1=z2[G];J=w1.vertexShader,K=w1.fragmentShader}else J=_.vertexShader,K=_.fragmentShader,r.update(_),c1=r.getVertexShaderID(_),_1=r.getFragmentShaderID(_);const H=i.getRenderTarget(),S1=_.alphaTest>0,d1=_.clearcoat>0,g1=_.iridescence>0;return{isWebGL2:m,shaderID:G,shaderName:_.type,vertexShader:J,fragmentShader:K,defines:_.defines,customVertexShaderID:c1,customFragmentShaderID:_1,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,instancing:q1.isInstancedMesh===!0,instancingColor:q1.isInstancedMesh===!0&&q1.instanceColor!==null,supportsVertexTextures:c,outputEncoding:H===null?i.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:v3,map:!!_.map,matcap:!!_.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===m0,tangentSpaceNormalMap:_.normalMapType===D5,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===U1,clearcoat:d1,clearcoatMap:d1&&!!_.clearcoatMap,clearcoatRoughnessMap:d1&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:d1&&!!_.clearcoatNormalMap,iridescence:g1,iridescenceMap:g1&&!!_.iridescenceMap,iridescenceThicknessMap:g1&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===K3,alphaMap:!!_.alphaMap,alphaTest:S1,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!w.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!N,useFog:_.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:h,skinning:q1.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:_.toneMapped?i.toneMapping:Y2,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===w2,flipSided:_.side===v2,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:m||l.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||l.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||l.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function u(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)M.push(T),M.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(p(M,_),A(M,_),M.push(i.outputEncoding)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputEncoding),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.combine),_.push(M.vertexUvs),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function A(_,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.physicallyCorrectLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),_.push(a.mask)}function B(_){const M=x[_.type];let T;if(M){const X=z2[M];T=O0.clone(X.uniforms)}else T=_.uniforms;return T}function v(_,M){let T;for(let X=0,q1=o.length;X<q1;X++){const N=o[X];if(N.cacheKey===M){T=N,++T.usedTimes;break}}return T===void 0&&(T=new Zn(i,M,_,q),o.push(T)),T}function g(_){if(--_.usedTimes===0){const M=o.indexOf(_);o[M]=o[o.length-1],o.pop(),_.destroy()}}function F(_){r.remove(_)}function z(){r.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:B,acquireProgram:v,releaseProgram:g,releaseShaderCache:F,programs:o,dispose:z}}function eq(){let i=new WeakMap;function e(q){let s=i.get(q);return s===void 0&&(s={},i.set(q,s)),s}function t(q){i.delete(q)}function l(q,s,a){i.get(q)[s]=a}function n(){i=new WeakMap}return{get:e,remove:t,update:l,dispose:n}}function tq(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Z8(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function J8(){const i=[];let e=0;const t=[],l=[],n=[];function q(){e=0,t.length=0,l.length=0,n.length=0}function s(h,c,f,x,d,u){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:c,material:f,groupOrder:x,renderOrder:h.renderOrder,z:d,group:u},i[e]=p):(p.id=h.id,p.object=h,p.geometry=c,p.material=f,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=d,p.group=u),e++,p}function a(h,c,f,x,d,u){const p=s(h,c,f,x,d,u);f.transmission>0?l.push(p):f.transparent===!0?n.push(p):t.push(p)}function r(h,c,f,x,d,u){const p=s(h,c,f,x,d,u);f.transmission>0?l.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function o(h,c){t.length>1&&t.sort(h||tq),l.length>1&&l.sort(c||Z8),n.length>1&&n.sort(c||Z8)}function m(){for(let h=e,c=i.length;h<c;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:l,transparent:n,init:q,push:a,unshift:r,finish:m,sort:o}}function lq(){let i=new WeakMap;function e(l,n){const q=i.get(l);let s;return q===void 0?(s=new J8,i.set(l,[s])):n>=q.length?(s=new J8,q.push(s)):s=q[n],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function nq(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new z1};break;case"SpotLight":t={position:new S,direction:new S,color:new z1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new z1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new z1,groundColor:new z1};break;case"RectAreaLight":t={color:new z1,position:new S,halfWidth:new S,halfHeight:new S};break}return i[e.id]=t,t}}}function qq(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r1};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r1};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r1,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let iq=0;function aq(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sq(i,e){const t=new nq,l=qq(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)n.probe.push(new S);const q=new S,s=new G1,a=new G1;function r(m,h){let c=0,f=0,x=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let d=0,u=0,p=0,A=0,B=0,v=0,g=0,F=0,z=0,_=0;m.sort(aq);const M=h!==!0?Math.PI:1;for(let X=0,q1=m.length;X<q1;X++){const N=m[X],w=N.color,W=N.intensity,j=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)c+=w.r*W*M,f+=w.g*W*M,x+=w.b*W*M;else if(N.isLightProbe)for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],W);else if(N.isDirectionalLight){const G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const P=N.shadow,I=l.get(N);I.shadowBias=P.bias,I.shadowNormalBias=P.normalBias,I.shadowRadius=P.radius,I.shadowMapSize=P.mapSize,n.directionalShadow[d]=I,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=N.shadow.matrix,v++}n.directional[d]=G,d++}else if(N.isSpotLight){const G=t.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(w).multiplyScalar(W*M),G.distance=j,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[p]=G;const P=N.shadow;if(N.map&&(n.spotLightMap[z]=N.map,z++,P.updateMatrices(N),N.castShadow&&_++),n.spotLightMatrix[p]=P.matrix,N.castShadow){const I=l.get(N);I.shadowBias=P.bias,I.shadowNormalBias=P.normalBias,I.shadowRadius=P.radius,I.shadowMapSize=P.mapSize,n.spotShadow[p]=I,n.spotShadowMap[p]=Z,F++}p++}else if(N.isRectAreaLight){const G=t.get(N);G.color.copy(w).multiplyScalar(W),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=G,A++}else if(N.isPointLight){const G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity*M),G.distance=N.distance,G.decay=N.decay,N.castShadow){const P=N.shadow,I=l.get(N);I.shadowBias=P.bias,I.shadowNormalBias=P.normalBias,I.shadowRadius=P.radius,I.shadowMapSize=P.mapSize,I.shadowCameraNear=P.camera.near,I.shadowCameraFar=P.camera.far,n.pointShadow[u]=I,n.pointShadowMap[u]=Z,n.pointShadowMatrix[u]=N.shadow.matrix,g++}n.point[u]=G,u++}else if(N.isHemisphereLight){const G=t.get(N);G.skyColor.copy(N.color).multiplyScalar(W*M),G.groundColor.copy(N.groundColor).multiplyScalar(W*M),n.hemi[B]=G,B++}}A>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=l1.LTC_FLOAT_1,n.rectAreaLTC2=l1.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=l1.LTC_HALF_1,n.rectAreaLTC2=l1.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=f,n.ambient[2]=x;const T=n.hash;(T.directionalLength!==d||T.pointLength!==u||T.spotLength!==p||T.rectAreaLength!==A||T.hemiLength!==B||T.numDirectionalShadows!==v||T.numPointShadows!==g||T.numSpotShadows!==F||T.numSpotMaps!==z)&&(n.directional.length=d,n.spot.length=p,n.rectArea.length=A,n.point.length=u,n.hemi.length=B,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=F,n.spotShadowMap.length=F,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=F+z-_,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=_,T.directionalLength=d,T.pointLength=u,T.spotLength=p,T.rectAreaLength=A,T.hemiLength=B,T.numDirectionalShadows=v,T.numPointShadows=g,T.numSpotShadows=F,T.numSpotMaps=z,n.version=iq++)}function o(m,h){let c=0,f=0,x=0,d=0,u=0;const p=h.matrixWorldInverse;for(let A=0,B=m.length;A<B;A++){const v=m[A];if(v.isDirectionalLight){const g=n.directional[c];g.direction.setFromMatrixPosition(v.matrixWorld),q.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(q),g.direction.transformDirection(p),c++}else if(v.isSpotLight){const g=n.spot[x];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(v.matrixWorld),q.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(q),g.direction.transformDirection(p),x++}else if(v.isRectAreaLight){const g=n.rectArea[d];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),g.halfWidth.set(v.width*.5,0,0),g.halfHeight.set(0,v.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),d++}else if(v.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const g=n.hemi[u];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(p),u++}}}return{setup:r,setupView:o,state:n}}function $8(i,e){const t=new sq(i,e),l=[],n=[];function q(){l.length=0,n.length=0}function s(h){l.push(h)}function a(h){n.push(h)}function r(h){t.setup(l,h)}function o(h){t.setupView(l,h)}return{init:q,state:{lightsArray:l,shadowsArray:n,lights:t},setupLights:r,setupLightsView:o,pushLight:s,pushShadow:a}}function rq(i,e){let t=new WeakMap;function l(q,s=0){const a=t.get(q);let r;return a===void 0?(r=new $8(i,e),t.set(q,[r])):s>=a.length?(r=new $8(i,e),a.push(r)):r=a[s],r}function n(){t=new WeakMap}return{get:l,dispose:n}}class oq extends F3{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mq extends F3{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cq=`uniform sampler2D shadow_pass;
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
}`;function uq(i,e,t){let l=new F5;const n=new r1,q=new r1,s=new R1,a=new oq({depthPacking:o0}),r=new mq,o={},m=t.maxTextureSize,h={0:v2,1:i3,2:w2},c=new B3({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new r1},radius:{value:4}},vertexShader:hq,fragmentShader:cq}),f=c.clone();f.defines.HORIZONTAL_PASS=1;const x=new D2;x.setAttribute("position",new L2(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new i2(x,c),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f7,this.render=function(v,g,F){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||v.length===0)return;const z=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),T=i.state;T.setBlending(q3),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let X=0,q1=v.length;X<q1;X++){const N=v[X],w=N.shadow;if(w===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(w.autoUpdate===!1&&w.needsUpdate===!1)continue;n.copy(w.mapSize);const W=w.getFrameExtents();if(n.multiply(W),q.copy(w.mapSize),(n.x>m||n.y>m)&&(n.x>m&&(q.x=Math.floor(m/W.x),n.x=q.x*W.x,w.mapSize.x=q.x),n.y>m&&(q.y=Math.floor(m/W.y),n.y=q.y*W.y,w.mapSize.y=q.y)),w.map===null){const Z=this.type!==f4?{minFilter:o2,magFilter:o2}:{};w.map=new C3(n.x,n.y,Z),w.map.texture.name=N.name+".shadowMap",w.camera.updateProjectionMatrix()}i.setRenderTarget(w.map),i.clear();const j=w.getViewportCount();for(let Z=0;Z<j;Z++){const G=w.getViewport(Z);s.set(q.x*G.x,q.y*G.y,q.x*G.z,q.y*G.w),T.viewport(s),w.updateMatrices(N,Z),l=w.getFrustum(),B(g,F,w.camera,N,this.type)}w.isPointLightShadow!==!0&&this.type===f4&&p(w,F),w.needsUpdate=!1}u.needsUpdate=!1,i.setRenderTarget(z,_,M)};function p(v,g){const F=e.update(d);c.defines.VSM_SAMPLES!==v.blurSamples&&(c.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new C3(n.x,n.y)),c.uniforms.shadow_pass.value=v.map.texture,c.uniforms.resolution.value=v.mapSize,c.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(g,null,F,c,d,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(g,null,F,f,d,null)}function A(v,g,F,z,_,M){let T=null;const X=F.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(X!==void 0?T=X:T=F.isPointLight===!0?r:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0){const q1=T.uuid,N=g.uuid;let w=o[q1];w===void 0&&(w={},o[q1]=w);let W=w[N];W===void 0&&(W=T.clone(),w[N]=W),T=W}return T.visible=g.visible,T.wireframe=g.wireframe,M===f4?T.side=g.shadowSide!==null?g.shadowSide:g.side:T.side=g.shadowSide!==null?g.shadowSide:h[g.side],T.alphaMap=g.alphaMap,T.alphaTest=g.alphaTest,T.clipShadows=g.clipShadows,T.clippingPlanes=g.clippingPlanes,T.clipIntersection=g.clipIntersection,T.displacementMap=g.displacementMap,T.displacementScale=g.displacementScale,T.displacementBias=g.displacementBias,T.wireframeLinewidth=g.wireframeLinewidth,T.linewidth=g.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0&&(T.referencePosition.setFromMatrixPosition(F.matrixWorld),T.nearDistance=z,T.farDistance=_),T}function B(v,g,F,z,_){if(v.visible===!1)return;if(v.layers.test(g.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&_===f4)&&(!v.frustumCulled||l.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld);const X=e.update(v),q1=v.material;if(Array.isArray(q1)){const N=X.groups;for(let w=0,W=N.length;w<W;w++){const j=N[w],Z=q1[j.materialIndex];if(Z&&Z.visible){const G=A(v,Z,z,F.near,F.far,_);i.renderBufferDirect(F,null,X,G,v,j)}}}else if(q1.visible){const N=A(v,q1,z,F.near,F.far,_);i.renderBufferDirect(F,null,X,N,v,null)}}const T=v.children;for(let X=0,q1=T.length;X<q1;X++)B(T[X],g,F,z,_)}}function fq(i,e,t){const l=t.isWebGL2;function n(){let b=!1;const n1=new R1;let O=null;const m1=new R1(0,0,0,0);return{setMask:function(o1){O!==o1&&!b&&(i.colorMask(o1,o1,o1,o1),O=o1)},setLocked:function(o1){b=o1},setClear:function(o1,F1,$1,V1,Z2){Z2===!0&&(o1*=V1,F1*=V1,$1*=V1),n1.set(o1,F1,$1,V1),m1.equals(n1)===!1&&(i.clearColor(o1,F1,$1,V1),m1.copy(n1))},reset:function(){b=!1,O=null,m1.set(-1,0,0,0)}}}function q(){let b=!1,n1=null,O=null,m1=null;return{setTest:function(o1){o1?S1(2929):d1(2929)},setMask:function(o1){n1!==o1&&!b&&(i.depthMask(o1),n1=o1)},setFunc:function(o1){if(O!==o1){if(o1)switch(o1){case w9:i.depthFunc(512);break;case T9:i.depthFunc(519);break;case L9:i.depthFunc(513);break;case o5:i.depthFunc(515);break;case P9:i.depthFunc(514);break;case R9:i.depthFunc(518);break;case I9:i.depthFunc(516);break;case N9:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);O=o1}},setLocked:function(o1){b=o1},setClear:function(o1){m1!==o1&&(i.clearDepth(o1),m1=o1)},reset:function(){b=!1,n1=null,O=null,m1=null}}}function s(){let b=!1,n1=null,O=null,m1=null,o1=null,F1=null,$1=null,V1=null,Z2=null;return{setTest:function(N1){b||(N1?S1(2960):d1(2960))},setMask:function(N1){n1!==N1&&!b&&(i.stencilMask(N1),n1=N1)},setFunc:function(N1,I2,p2){(O!==N1||m1!==I2||o1!==p2)&&(i.stencilFunc(N1,I2,p2),O=N1,m1=I2,o1=p2)},setOp:function(N1,I2,p2){(F1!==N1||$1!==I2||V1!==p2)&&(i.stencilOp(N1,I2,p2),F1=N1,$1=I2,V1=p2)},setLocked:function(N1){b=N1},setClear:function(N1){Z2!==N1&&(i.clearStencil(N1),Z2=N1)},reset:function(){b=!1,n1=null,O=null,m1=null,o1=null,F1=null,$1=null,V1=null,Z2=null}}}const a=new n,r=new q,o=new s,m=new WeakMap,h=new WeakMap;let c={},f={},x=new WeakMap,d=[],u=null,p=!1,A=null,B=null,v=null,g=null,F=null,z=null,_=null,M=!1,T=null,X=null,q1=null,N=null,w=null;const W=i.getParameter(35661);let j=!1,Z=0;const G=i.getParameter(7938);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=Z>=2);let P=null,I={};const $=i.getParameter(3088),J=i.getParameter(2978),K=new R1().fromArray($),c1=new R1().fromArray(J);function _1(b,n1,O){const m1=new Uint8Array(4),o1=i.createTexture();i.bindTexture(b,o1),i.texParameteri(b,10241,9728),i.texParameteri(b,10240,9728);for(let F1=0;F1<O;F1++)i.texImage2D(n1+F1,0,6408,1,1,0,6408,5121,m1);return o1}const H={};H[3553]=_1(3553,3553,1),H[34067]=_1(34067,34069,6),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),S1(2929),r.setFunc(o5),Y1(!1),m2(U5),S1(2884),H1(q3);function S1(b){c[b]!==!0&&(i.enable(b),c[b]=!0)}function d1(b){c[b]!==!1&&(i.disable(b),c[b]=!1)}function g1(b,n1){return f[b]!==n1?(i.bindFramebuffer(b,n1),f[b]=n1,l&&(b===36009&&(f[36160]=n1),b===36160&&(f[36009]=n1)),!0):!1}function h1(b,n1){let O=d,m1=!1;if(b)if(O=x.get(n1),O===void 0&&(O=[],x.set(n1,O)),b.isWebGLMultipleRenderTargets){const o1=b.texture;if(O.length!==o1.length||O[0]!==36064){for(let F1=0,$1=o1.length;F1<$1;F1++)O[F1]=36064+F1;O.length=o1.length,m1=!0}}else O[0]!==36064&&(O[0]=36064,m1=!0);else O[0]!==1029&&(O[0]=1029,m1=!0);m1&&(t.isWebGL2?i.drawBuffers(O):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(O))}function w1(b){return u!==b?(i.useProgram(b),u=b,!0):!1}const v1={[j3]:32774,[E9]:32778,[v9]:32779};if(l)v1[H5]=32775,v1[W5]=32776;else{const b=e.get("EXT_blend_minmax");b!==null&&(v1[H5]=b.MIN_EXT,v1[W5]=b.MAX_EXT)}const f1={[C9]:0,[D9]:1,[B9]:768,[d7]:770,[z9]:776,[S9]:774,[M9]:772,[y9]:769,[x7]:771,[b9]:775,[F9]:773};function H1(b,n1,O,m1,o1,F1,$1,V1){if(b===q3){p===!0&&(d1(3042),p=!1);return}if(p===!1&&(S1(3042),p=!0),b!==A9){if(b!==A||V1!==M){if((B!==j3||F!==j3)&&(i.blendEquation(32774),B=j3,F=j3),V1)switch(b){case K3:i.blendFuncSeparate(1,771,1,771);break;case k5:i.blendFunc(1,1);break;case G5:i.blendFuncSeparate(0,769,0,1);break;case V5:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case K3:i.blendFuncSeparate(770,771,1,771);break;case k5:i.blendFunc(770,1);break;case G5:i.blendFuncSeparate(0,769,0,1);break;case V5:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}v=null,g=null,z=null,_=null,A=b,M=V1}return}o1=o1||n1,F1=F1||O,$1=$1||m1,(n1!==B||o1!==F)&&(i.blendEquationSeparate(v1[n1],v1[o1]),B=n1,F=o1),(O!==v||m1!==g||F1!==z||$1!==_)&&(i.blendFuncSeparate(f1[O],f1[m1],f1[F1],f1[$1]),v=O,g=m1,z=F1,_=$1),A=b,M=null}function Q1(b,n1){b.side===w2?d1(2884):S1(2884);let O=b.side===v2;n1&&(O=!O),Y1(O),b.blending===K3&&b.transparent===!1?H1(q3):H1(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha),r.setFunc(b.depthFunc),r.setTest(b.depthTest),r.setMask(b.depthWrite),a.setMask(b.colorWrite);const m1=b.stencilWrite;o.setTest(m1),m1&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),T1(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?S1(32926):d1(32926)}function Y1(b){T!==b&&(b?i.frontFace(2304):i.frontFace(2305),T=b)}function m2(b){b!==p9?(S1(2884),b!==X&&(b===U5?i.cullFace(1029):b===_9?i.cullFace(1028):i.cullFace(1032))):d1(2884),X=b}function j1(b){b!==q1&&(j&&i.lineWidth(b),q1=b)}function T1(b,n1,O){b?(S1(32823),(N!==n1||w!==O)&&(i.polygonOffset(n1,O),N=n1,w=O)):d1(32823)}function x2(b){b?S1(3089):d1(3089)}function h2(b){b===void 0&&(b=33984+W-1),P!==b&&(i.activeTexture(b),P=b)}function y(b,n1){P===null&&h2();let O=I[P];O===void 0&&(O={type:void 0,texture:void 0},I[P]=O),(O.type!==b||O.texture!==n1)&&(i.bindTexture(b,n1||H[b]),O.type=b,O.texture=n1)}function E(){const b=I[P];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function U(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function e1(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function a1(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function x1(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function C(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Y(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function t1(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function s1(b){K.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),K.copy(b))}function i1(b){c1.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),c1.copy(b))}function p1(b,n1){let O=h.get(n1);O===void 0&&(O=new WeakMap,h.set(n1,O));let m1=O.get(b);m1===void 0&&(m1=i.getUniformBlockIndex(n1,b.name),O.set(b,m1))}function B1(b,n1){const m1=h.get(n1).get(b);m.get(b)!==m1&&(i.uniformBlockBinding(n1,m1,b.__bindingPointIndex),m.set(b,m1))}function P1(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),l===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},P=null,I={},f={},x=new WeakMap,d=[],u=null,p=!1,A=null,B=null,v=null,g=null,F=null,z=null,_=null,M=!1,T=null,X=null,q1=null,N=null,w=null,K.set(0,0,i.canvas.width,i.canvas.height),c1.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:S1,disable:d1,bindFramebuffer:g1,drawBuffers:h1,useProgram:w1,setBlending:H1,setMaterial:Q1,setFlipSided:Y1,setCullFace:m2,setLineWidth:j1,setPolygonOffset:T1,setScissorTest:x2,activeTexture:h2,bindTexture:y,unbindTexture:E,compressedTexImage2D:U,texImage2D:Y,texImage3D:t1,updateUBOMapping:p1,uniformBlockBinding:B1,texStorage2D:x1,texStorage3D:C,texSubImage2D:Q,texSubImage3D:e1,compressedTexSubImage2D:a1,scissor:s1,viewport:i1,reset:P1}}function dq(i,e,t,l,n,q,s){const a=n.isWebGL2,r=n.maxTextures,o=n.maxCubemapSize,m=n.maxTextureSize,h=n.maxSamples,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(y,E){return p?new OffscreenCanvas(y,E):C4("canvas")}function B(y,E,U,Q){let e1=1;if((y.width>Q||y.height>Q)&&(e1=Q/Math.max(y.width,y.height)),e1<1||E===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const a1=E?h6:Math.floor,x1=a1(e1*y.width),C=a1(e1*y.height);d===void 0&&(d=A(x1,C));const Y=U?A(x1,C):d;return Y.width=x1,Y.height=C,Y.getContext("2d").drawImage(y,0,0,x1,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+x1+"x"+C+")."),Y}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function v(y){return d5(y.width)&&d5(y.height)}function g(y){return a?!1:y.wrapS!==S2||y.wrapT!==S2||y.minFilter!==o2&&y.minFilter!==A2}function F(y,E){return y.generateMipmaps&&E&&y.minFilter!==o2&&y.minFilter!==A2}function z(y){i.generateMipmap(y)}function _(y,E,U,Q,e1=!1){if(a===!1)return E;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let a1=E;return E===6403&&(U===5126&&(a1=33326),U===5131&&(a1=33325),U===5121&&(a1=33321)),E===33319&&(U===5126&&(a1=33328),U===5131&&(a1=33327),U===5121&&(a1=33323)),E===6408&&(U===5126&&(a1=34836),U===5131&&(a1=34842),U===5121&&(a1=Q===U1&&e1===!1?35907:32856),U===32819&&(a1=32854),U===32820&&(a1=32855)),(a1===33325||a1===33326||a1===33327||a1===33328||a1===34842||a1===34836)&&e.get("EXT_color_buffer_float"),a1}function M(y,E,U){return F(y,U)===!0||y.isFramebufferTexture&&y.minFilter!==o2&&y.minFilter!==A2?Math.log2(Math.max(E.width,E.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?E.mipmaps.length:1}function T(y){return y===o2||y===X5||y===Y5?9728:9729}function X(y){const E=y.target;E.removeEventListener("dispose",X),N(E),E.isVideoTexture&&x.delete(E)}function q1(y){const E=y.target;E.removeEventListener("dispose",q1),W(E)}function N(y){const E=l.get(y);if(E.__webglInit===void 0)return;const U=y.source,Q=u.get(U);if(Q){const e1=Q[E.__cacheKey];e1.usedTimes--,e1.usedTimes===0&&w(y),Object.keys(Q).length===0&&u.delete(U)}l.remove(y)}function w(y){const E=l.get(y);i.deleteTexture(E.__webglTexture);const U=y.source,Q=u.get(U);delete Q[E.__cacheKey],s.memory.textures--}function W(y){const E=y.texture,U=l.get(y),Q=l.get(E);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),s.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let e1=0;e1<6;e1++)i.deleteFramebuffer(U.__webglFramebuffer[e1]),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[e1]);else{if(i.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let e1=0;e1<U.__webglColorRenderbuffer.length;e1++)U.__webglColorRenderbuffer[e1]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[e1]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let e1=0,a1=E.length;e1<a1;e1++){const x1=l.get(E[e1]);x1.__webglTexture&&(i.deleteTexture(x1.__webglTexture),s.memory.textures--),l.remove(E[e1])}l.remove(E),l.remove(y)}let j=0;function Z(){j=0}function G(){const y=j;return y>=r&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r),j+=1,y}function P(y){const E=[];return E.push(y.wrapS),E.push(y.wrapT),E.push(y.magFilter),E.push(y.minFilter),E.push(y.anisotropy),E.push(y.internalFormat),E.push(y.format),E.push(y.type),E.push(y.generateMipmaps),E.push(y.premultiplyAlpha),E.push(y.flipY),E.push(y.unpackAlignment),E.push(y.encoding),E.join()}function I(y,E){const U=l.get(y);if(y.isVideoTexture&&x2(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const Q=y.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{d1(U,y,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,U.__webglTexture)}function $(y,E){const U=l.get(y);if(y.version>0&&U.__version!==y.version){d1(U,y,E);return}t.activeTexture(33984+E),t.bindTexture(35866,U.__webglTexture)}function J(y,E){const U=l.get(y);if(y.version>0&&U.__version!==y.version){d1(U,y,E);return}t.activeTexture(33984+E),t.bindTexture(32879,U.__webglTexture)}function K(y,E){const U=l.get(y);if(y.version>0&&U.__version!==y.version){g1(U,y,E);return}t.activeTexture(33984+E),t.bindTexture(34067,U.__webglTexture)}const c1={[c5]:10497,[S2]:33071,[u5]:33648},_1={[o2]:9728,[X5]:9984,[Y5]:9986,[A2]:9729,[X9]:9985,[d6]:9987};function H(y,E,U){if(U?(i.texParameteri(y,10242,c1[E.wrapS]),i.texParameteri(y,10243,c1[E.wrapT]),(y===32879||y===35866)&&i.texParameteri(y,32882,c1[E.wrapR]),i.texParameteri(y,10240,_1[E.magFilter]),i.texParameteri(y,10241,_1[E.minFilter])):(i.texParameteri(y,10242,33071),i.texParameteri(y,10243,33071),(y===32879||y===35866)&&i.texParameteri(y,32882,33071),(E.wrapS!==S2||E.wrapT!==S2)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,10240,T(E.magFilter)),i.texParameteri(y,10241,T(E.minFilter)),E.minFilter!==o2&&E.minFilter!==A2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(E.type===p3&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===v4&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||l.get(E).__currentAnisotropy)&&(i.texParameterf(y,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),l.get(E).__currentAnisotropy=E.anisotropy)}}function S1(y,E){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,E.addEventListener("dispose",X));const Q=E.source;let e1=u.get(Q);e1===void 0&&(e1={},u.set(Q,e1));const a1=P(E);if(a1!==y.__cacheKey){e1[a1]===void 0&&(e1[a1]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,U=!0),e1[a1].usedTimes++;const x1=e1[y.__cacheKey];x1!==void 0&&(e1[y.__cacheKey].usedTimes--,x1.usedTimes===0&&w(E)),y.__cacheKey=a1,y.__webglTexture=e1[a1].texture}return U}function d1(y,E,U){let Q=3553;E.isDataArrayTexture&&(Q=35866),E.isData3DTexture&&(Q=32879);const e1=S1(y,E),a1=E.source;if(t.activeTexture(33984+U),t.bindTexture(Q,y.__webglTexture),a1.version!==a1.__currentVersion||e1===!0){i.pixelStorei(37440,E.flipY),i.pixelStorei(37441,E.premultiplyAlpha),i.pixelStorei(3317,E.unpackAlignment),i.pixelStorei(37443,0);const x1=g(E)&&v(E.image)===!1;let C=B(E.image,x1,!1,m);C=h2(E,C);const Y=v(C)||a,t1=q.convert(E.format,E.encoding);let s1=q.convert(E.type),i1=_(E.internalFormat,t1,s1,E.encoding,E.isVideoTexture);H(Q,E,Y);let p1;const B1=E.mipmaps,P1=a&&E.isVideoTexture!==!0,b=a1.__currentVersion===void 0||e1===!0,n1=M(E,C,Y);if(E.isDepthTexture)i1=6402,a?E.type===p3?i1=36012:E.type===x3?i1=33190:E.type===Q3?i1=35056:i1=33189:E.type===p3&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===g3&&i1===6402&&E.type!==_7&&E.type!==x3&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=x3,s1=q.convert(E.type)),E.format===n4&&i1===6402&&(i1=34041,E.type!==Q3&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Q3,s1=q.convert(E.type))),b&&(P1?t.texStorage2D(3553,1,i1,C.width,C.height):t.texImage2D(3553,0,i1,C.width,C.height,0,t1,s1,null));else if(E.isDataTexture)if(B1.length>0&&Y){P1&&b&&t.texStorage2D(3553,n1,i1,B1[0].width,B1[0].height);for(let O=0,m1=B1.length;O<m1;O++)p1=B1[O],P1?t.texSubImage2D(3553,O,0,0,p1.width,p1.height,t1,s1,p1.data):t.texImage2D(3553,O,i1,p1.width,p1.height,0,t1,s1,p1.data);E.generateMipmaps=!1}else P1?(b&&t.texStorage2D(3553,n1,i1,C.width,C.height),t.texSubImage2D(3553,0,0,0,C.width,C.height,t1,s1,C.data)):t.texImage2D(3553,0,i1,C.width,C.height,0,t1,s1,C.data);else if(E.isCompressedTexture){P1&&b&&t.texStorage2D(3553,n1,i1,B1[0].width,B1[0].height);for(let O=0,m1=B1.length;O<m1;O++)p1=B1[O],E.format!==T2?t1!==null?P1?t.compressedTexSubImage2D(3553,O,0,0,p1.width,p1.height,t1,p1.data):t.compressedTexImage2D(3553,O,i1,p1.width,p1.height,0,p1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P1?t.texSubImage2D(3553,O,0,0,p1.width,p1.height,t1,s1,p1.data):t.texImage2D(3553,O,i1,p1.width,p1.height,0,t1,s1,p1.data)}else if(E.isDataArrayTexture)P1?(b&&t.texStorage3D(35866,n1,i1,C.width,C.height,C.depth),t.texSubImage3D(35866,0,0,0,0,C.width,C.height,C.depth,t1,s1,C.data)):t.texImage3D(35866,0,i1,C.width,C.height,C.depth,0,t1,s1,C.data);else if(E.isData3DTexture)P1?(b&&t.texStorage3D(32879,n1,i1,C.width,C.height,C.depth),t.texSubImage3D(32879,0,0,0,0,C.width,C.height,C.depth,t1,s1,C.data)):t.texImage3D(32879,0,i1,C.width,C.height,C.depth,0,t1,s1,C.data);else if(E.isFramebufferTexture){if(b)if(P1)t.texStorage2D(3553,n1,i1,C.width,C.height);else{let O=C.width,m1=C.height;for(let o1=0;o1<n1;o1++)t.texImage2D(3553,o1,i1,O,m1,0,t1,s1,null),O>>=1,m1>>=1}}else if(B1.length>0&&Y){P1&&b&&t.texStorage2D(3553,n1,i1,B1[0].width,B1[0].height);for(let O=0,m1=B1.length;O<m1;O++)p1=B1[O],P1?t.texSubImage2D(3553,O,0,0,t1,s1,p1):t.texImage2D(3553,O,i1,t1,s1,p1);E.generateMipmaps=!1}else P1?(b&&t.texStorage2D(3553,n1,i1,C.width,C.height),t.texSubImage2D(3553,0,0,0,t1,s1,C)):t.texImage2D(3553,0,i1,t1,s1,C);F(E,Y)&&z(Q),a1.__currentVersion=a1.version,E.onUpdate&&E.onUpdate(E)}y.__version=E.version}function g1(y,E,U){if(E.image.length!==6)return;const Q=S1(y,E),e1=E.source;if(t.activeTexture(33984+U),t.bindTexture(34067,y.__webglTexture),e1.version!==e1.__currentVersion||Q===!0){i.pixelStorei(37440,E.flipY),i.pixelStorei(37441,E.premultiplyAlpha),i.pixelStorei(3317,E.unpackAlignment),i.pixelStorei(37443,0);const a1=E.isCompressedTexture||E.image[0].isCompressedTexture,x1=E.image[0]&&E.image[0].isDataTexture,C=[];for(let O=0;O<6;O++)!a1&&!x1?C[O]=B(E.image[O],!1,!0,o):C[O]=x1?E.image[O].image:E.image[O],C[O]=h2(E,C[O]);const Y=C[0],t1=v(Y)||a,s1=q.convert(E.format,E.encoding),i1=q.convert(E.type),p1=_(E.internalFormat,s1,i1,E.encoding),B1=a&&E.isVideoTexture!==!0,P1=e1.__currentVersion===void 0||Q===!0;let b=M(E,Y,t1);H(34067,E,t1);let n1;if(a1){B1&&P1&&t.texStorage2D(34067,b,p1,Y.width,Y.height);for(let O=0;O<6;O++){n1=C[O].mipmaps;for(let m1=0;m1<n1.length;m1++){const o1=n1[m1];E.format!==T2?s1!==null?B1?t.compressedTexSubImage2D(34069+O,m1,0,0,o1.width,o1.height,s1,o1.data):t.compressedTexImage2D(34069+O,m1,p1,o1.width,o1.height,0,o1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B1?t.texSubImage2D(34069+O,m1,0,0,o1.width,o1.height,s1,i1,o1.data):t.texImage2D(34069+O,m1,p1,o1.width,o1.height,0,s1,i1,o1.data)}}}else{n1=E.mipmaps,B1&&P1&&(n1.length>0&&b++,t.texStorage2D(34067,b,p1,C[0].width,C[0].height));for(let O=0;O<6;O++)if(x1){B1?t.texSubImage2D(34069+O,0,0,0,C[O].width,C[O].height,s1,i1,C[O].data):t.texImage2D(34069+O,0,p1,C[O].width,C[O].height,0,s1,i1,C[O].data);for(let m1=0;m1<n1.length;m1++){const F1=n1[m1].image[O].image;B1?t.texSubImage2D(34069+O,m1+1,0,0,F1.width,F1.height,s1,i1,F1.data):t.texImage2D(34069+O,m1+1,p1,F1.width,F1.height,0,s1,i1,F1.data)}}else{B1?t.texSubImage2D(34069+O,0,0,0,s1,i1,C[O]):t.texImage2D(34069+O,0,p1,s1,i1,C[O]);for(let m1=0;m1<n1.length;m1++){const o1=n1[m1];B1?t.texSubImage2D(34069+O,m1+1,0,0,s1,i1,o1.image[O]):t.texImage2D(34069+O,m1+1,p1,s1,i1,o1.image[O])}}}F(E,t1)&&z(34067),e1.__currentVersion=e1.version,E.onUpdate&&E.onUpdate(E)}y.__version=E.version}function h1(y,E,U,Q,e1){const a1=q.convert(U.format,U.encoding),x1=q.convert(U.type),C=_(U.internalFormat,a1,x1,U.encoding);l.get(E).__hasExternalTextures||(e1===32879||e1===35866?t.texImage3D(e1,0,C,E.width,E.height,E.depth,0,a1,x1,null):t.texImage2D(e1,0,C,E.width,E.height,0,a1,x1,null)),t.bindFramebuffer(36160,y),T1(E)?c.framebufferTexture2DMultisampleEXT(36160,Q,e1,l.get(U).__webglTexture,0,j1(E)):i.framebufferTexture2D(36160,Q,e1,l.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function w1(y,E,U){if(i.bindRenderbuffer(36161,y),E.depthBuffer&&!E.stencilBuffer){let Q=33189;if(U||T1(E)){const e1=E.depthTexture;e1&&e1.isDepthTexture&&(e1.type===p3?Q=36012:e1.type===x3&&(Q=33190));const a1=j1(E);T1(E)?c.renderbufferStorageMultisampleEXT(36161,a1,Q,E.width,E.height):i.renderbufferStorageMultisample(36161,a1,Q,E.width,E.height)}else i.renderbufferStorage(36161,Q,E.width,E.height);i.framebufferRenderbuffer(36160,36096,36161,y)}else if(E.depthBuffer&&E.stencilBuffer){const Q=j1(E);U&&T1(E)===!1?i.renderbufferStorageMultisample(36161,Q,35056,E.width,E.height):T1(E)?c.renderbufferStorageMultisampleEXT(36161,Q,35056,E.width,E.height):i.renderbufferStorage(36161,34041,E.width,E.height),i.framebufferRenderbuffer(36160,33306,36161,y)}else{const Q=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let e1=0;e1<Q.length;e1++){const a1=Q[e1],x1=q.convert(a1.format,a1.encoding),C=q.convert(a1.type),Y=_(a1.internalFormat,x1,C,a1.encoding),t1=j1(E);U&&T1(E)===!1?i.renderbufferStorageMultisample(36161,t1,Y,E.width,E.height):T1(E)?c.renderbufferStorageMultisampleEXT(36161,t1,Y,E.width,E.height):i.renderbufferStorage(36161,Y,E.width,E.height)}}i.bindRenderbuffer(36161,null)}function v1(y,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!l.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);const Q=l.get(E.depthTexture).__webglTexture,e1=j1(E);if(E.depthTexture.format===g3)T1(E)?c.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,e1):i.framebufferTexture2D(36160,36096,3553,Q,0);else if(E.depthTexture.format===n4)T1(E)?c.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,e1):i.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function f1(y){const E=l.get(y),U=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!E.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");v1(E.__webglFramebuffer,y)}else if(U){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=i.createRenderbuffer(),w1(E.__webglDepthbuffer[Q],y,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),w1(E.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function H1(y,E,U){const Q=l.get(y);E!==void 0&&h1(Q.__webglFramebuffer,y,y.texture,36064,3553),U!==void 0&&f1(y)}function Q1(y){const E=y.texture,U=l.get(y),Q=l.get(E);y.addEventListener("dispose",q1),y.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,s.memory.textures++);const e1=y.isWebGLCubeRenderTarget===!0,a1=y.isWebGLMultipleRenderTargets===!0,x1=v(y)||a;if(e1){U.__webglFramebuffer=[];for(let C=0;C<6;C++)U.__webglFramebuffer[C]=i.createFramebuffer()}else{if(U.__webglFramebuffer=i.createFramebuffer(),a1)if(n.drawBuffers){const C=y.texture;for(let Y=0,t1=C.length;Y<t1;Y++){const s1=l.get(C[Y]);s1.__webglTexture===void 0&&(s1.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&T1(y)===!1){const C=a1?E:[E];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let Y=0;Y<C.length;Y++){const t1=C[Y];U.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(36161,U.__webglColorRenderbuffer[Y]);const s1=q.convert(t1.format,t1.encoding),i1=q.convert(t1.type),p1=_(t1.internalFormat,s1,i1,t1.encoding),B1=j1(y);i.renderbufferStorageMultisample(36161,B1,p1,y.width,y.height),i.framebufferRenderbuffer(36160,36064+Y,36161,U.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(36161,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),w1(U.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if(e1){t.bindTexture(34067,Q.__webglTexture),H(34067,E,x1);for(let C=0;C<6;C++)h1(U.__webglFramebuffer[C],y,E,36064,34069+C);F(E,x1)&&z(34067),t.unbindTexture()}else if(a1){const C=y.texture;for(let Y=0,t1=C.length;Y<t1;Y++){const s1=C[Y],i1=l.get(s1);t.bindTexture(3553,i1.__webglTexture),H(3553,s1,x1),h1(U.__webglFramebuffer,y,s1,36064+Y,3553),F(s1,x1)&&z(3553)}t.unbindTexture()}else{let C=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?C=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,Q.__webglTexture),H(C,E,x1),h1(U.__webglFramebuffer,y,E,36064,C),F(E,x1)&&z(C),t.unbindTexture()}y.depthBuffer&&f1(y)}function Y1(y){const E=v(y)||a,U=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0,e1=U.length;Q<e1;Q++){const a1=U[Q];if(F(a1,E)){const x1=y.isWebGLCubeRenderTarget?34067:3553,C=l.get(a1).__webglTexture;t.bindTexture(x1,C),z(x1),t.unbindTexture()}}}function m2(y){if(a&&y.samples>0&&T1(y)===!1){const E=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],U=y.width,Q=y.height;let e1=16384;const a1=[],x1=y.stencilBuffer?33306:36096,C=l.get(y),Y=y.isWebGLMultipleRenderTargets===!0;if(Y)for(let t1=0;t1<E.length;t1++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+t1,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+t1,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let t1=0;t1<E.length;t1++){a1.push(36064+t1),y.depthBuffer&&a1.push(x1);const s1=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(s1===!1&&(y.depthBuffer&&(e1|=256),y.stencilBuffer&&(e1|=1024)),Y&&i.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[t1]),s1===!0&&(i.invalidateFramebuffer(36008,[x1]),i.invalidateFramebuffer(36009,[x1])),Y){const i1=l.get(E[t1]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,i1,0)}i.blitFramebuffer(0,0,U,Q,0,0,U,Q,e1,9728),f&&i.invalidateFramebuffer(36008,a1)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let t1=0;t1<E.length;t1++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+t1,36161,C.__webglColorRenderbuffer[t1]);const s1=l.get(E[t1]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+t1,3553,s1,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function j1(y){return Math.min(h,y.samples)}function T1(y){const E=l.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function x2(y){const E=s.render.frame;x.get(y)!==E&&(x.set(y,E),y.update())}function h2(y,E){const U=y.encoding,Q=y.format,e1=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===f5||U!==v3&&(U===U1?a===!1?e.has("EXT_sRGB")===!0&&Q===T2?(y.format=f5,y.minFilter=A2,y.generateMipmaps=!1):E=E7.sRGBToLinear(E):(Q!==T2||e1!==E3)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),E}this.allocateTextureUnit=G,this.resetTextureUnits=Z,this.setTexture2D=I,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=H1,this.setupRenderTarget=Q1,this.updateRenderTargetMipmap=Y1,this.updateMultisampleRenderTarget=m2,this.setupDepthRenderbuffer=f1,this.setupFrameBufferTexture=h1,this.useMultisampledRTT=T1}function xq(i,e,t){const l=t.isWebGL2;function n(q,s=null){let a;if(q===E3)return 5121;if(q===J9)return 32819;if(q===$9)return 32820;if(q===Y9)return 5120;if(q===j9)return 5122;if(q===_7)return 5123;if(q===Z9)return 5124;if(q===x3)return 5125;if(q===p3)return 5126;if(q===v4)return l?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(q===K9)return 6406;if(q===T2)return 6408;if(q===e0)return 6409;if(q===t0)return 6410;if(q===g3)return 6402;if(q===n4)return 34041;if(q===l0)return 6403;if(q===Q9)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(q===f5)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(q===n0)return 36244;if(q===q0)return 33319;if(q===i0)return 33320;if(q===a0)return 36249;if(q===M6||q===F6||q===S6||q===b6)if(s===U1)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(q===M6)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(q===F6)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(q===S6)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(q===b6)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(q===M6)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(q===F6)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(q===S6)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(q===b6)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(q===j5||q===Z5||q===J5||q===$5)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(q===j5)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(q===Z5)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(q===J5)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(q===$5)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(q===s0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(q===K5||q===Q5)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(q===K5)return s===U1?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(q===Q5)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(q===e8||q===t8||q===l8||q===n8||q===q8||q===i8||q===a8||q===s8||q===r8||q===o8||q===m8||q===h8||q===c8||q===u8)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(q===e8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(q===t8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(q===l8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(q===n8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(q===q8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(q===i8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(q===a8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(q===s8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(q===r8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(q===o8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(q===m8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(q===h8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(q===c8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(q===u8)return s===U1?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(q===f8)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(q===f8)return s===U1?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return q===Q3?l?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[q]!==void 0?i[q]:null}return{convert:n}}class pq extends d2{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Q4 extends J1{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _q={type:"move"};class l5{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Q4,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Q4,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Q4,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,l){let n=null,q=null,s=null;const a=this._targetRay,r=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){s=!0;for(const d of e.hand.values()){const u=t.getJointPose(d,l);if(o.joints[d.jointName]===void 0){const A=new Q4;A.matrixAutoUpdate=!1,A.visible=!1,o.joints[d.jointName]=A,o.add(A)}const p=o.joints[d.jointName];u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=u.radius),p.visible=u!==null}const m=o.joints["index-finger-tip"],h=o.joints["thumb-tip"],c=m.position.distanceTo(h.position),f=.02,x=.005;o.inputState.pinching&&c>f+x?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&c<=f-x&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else r!==null&&e.gripSpace&&(q=t.getPose(e.gripSpace,l),q!==null&&(r.matrix.fromArray(q.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),q.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(q.linearVelocity)):r.hasLinearVelocity=!1,q.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(q.angularVelocity)):r.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,l),n===null&&q!==null&&(n=q),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_q)))}return a!==null&&(a.visible=n!==null),r!==null&&(r.visible=q!==null),o!==null&&(o.visible=s!==null),this}}class gq extends C2{constructor(e,t,l,n,q,s,a,r,o,m){if(m=m!==void 0?m:g3,m!==g3&&m!==n4)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");l===void 0&&m===g3&&(l=x3),l===void 0&&m===n4&&(l=Q3),super(null,n,q,s,a,r,m,l,o),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:o2,this.minFilter=r!==void 0?r:o2,this.flipY=!1,this.generateMipmaps=!1}}class Aq extends y3{constructor(e,t){super();const l=this;let n=null,q=1,s=null,a="local-floor",r=null,o=null,m=null,h=null,c=null,f=null;const x=t.getContextAttributes();let d=null,u=null;const p=[],A=[],B=new d2;B.layers.enable(1),B.viewport=new R1;const v=new d2;v.layers.enable(2),v.viewport=new R1;const g=[B,v],F=new pq;F.layers.enable(1),F.layers.enable(2);let z=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let I=p[P];return I===void 0&&(I=new l5,p[P]=I),I.getTargetRaySpace()},this.getControllerGrip=function(P){let I=p[P];return I===void 0&&(I=new l5,p[P]=I),I.getGripSpace()},this.getHand=function(P){let I=p[P];return I===void 0&&(I=new l5,p[P]=I),I.getHandSpace()};function M(P){const I=A.indexOf(P.inputSource);if(I===-1)return;const $=p[I];$!==void 0&&$.dispatchEvent({type:P.type,data:P.inputSource})}function T(){n.removeEventListener("select",M),n.removeEventListener("selectstart",M),n.removeEventListener("selectend",M),n.removeEventListener("squeeze",M),n.removeEventListener("squeezestart",M),n.removeEventListener("squeezeend",M),n.removeEventListener("end",T),n.removeEventListener("inputsourceschange",X);for(let P=0;P<p.length;P++){const I=A[P];I!==null&&(A[P]=null,p[P].disconnect(I))}z=null,_=null,e.setRenderTarget(d),c=null,h=null,m=null,n=null,u=null,G.stop(),l.isPresenting=!1,l.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){q=P,l.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,l.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return r||s},this.setReferenceSpace=function(P){r=P},this.getBaseLayer=function(){return h!==null?h:c},this.getBinding=function(){return m},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(P){if(n=P,n!==null){if(d=e.getRenderTarget(),n.addEventListener("select",M),n.addEventListener("selectstart",M),n.addEventListener("selectend",M),n.addEventListener("squeeze",M),n.addEventListener("squeezestart",M),n.addEventListener("squeezeend",M),n.addEventListener("end",T),n.addEventListener("inputsourceschange",X),x.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:n.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:q};c=new XRWebGLLayer(n,t,I),n.updateRenderState({baseLayer:c}),u=new C3(c.framebufferWidth,c.framebufferHeight,{format:T2,type:E3,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let I=null,$=null,J=null;x.depth&&(J=x.stencil?35056:33190,I=x.stencil?n4:g3,$=x.stencil?Q3:x3);const K={colorFormat:32856,depthFormat:J,scaleFactor:q};m=new XRWebGLBinding(n,t),h=m.createProjectionLayer(K),n.updateRenderState({layers:[h]}),u=new C3(h.textureWidth,h.textureHeight,{format:T2,type:E3,depthTexture:new gq(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const c1=e.properties.get(u);c1.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(1),r=null,s=await n.requestReferenceSpace(a),G.setContext(n),G.start(),l.isPresenting=!0,l.dispatchEvent({type:"sessionstart"})}};function X(P){for(let I=0;I<P.removed.length;I++){const $=P.removed[I],J=A.indexOf($);J>=0&&(A[J]=null,p[J].dispatchEvent({type:"disconnected",data:$}))}for(let I=0;I<P.added.length;I++){const $=P.added[I];let J=A.indexOf($);if(J===-1){for(let c1=0;c1<p.length;c1++)if(c1>=A.length){A.push($),J=c1;break}else if(A[c1]===null){A[c1]=$,J=c1;break}if(J===-1)break}const K=p[J];K&&K.dispatchEvent({type:"connected",data:$})}}const q1=new S,N=new S;function w(P,I,$){q1.setFromMatrixPosition(I.matrixWorld),N.setFromMatrixPosition($.matrixWorld);const J=q1.distanceTo(N),K=I.projectionMatrix.elements,c1=$.projectionMatrix.elements,_1=K[14]/(K[10]-1),H=K[14]/(K[10]+1),S1=(K[9]+1)/K[5],d1=(K[9]-1)/K[5],g1=(K[8]-1)/K[0],h1=(c1[8]+1)/c1[0],w1=_1*g1,v1=_1*h1,f1=J/(-g1+h1),H1=f1*-g1;I.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(H1),P.translateZ(f1),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const Q1=_1+f1,Y1=H+f1,m2=w1-H1,j1=v1+(J-H1),T1=S1*H/Y1*Q1,x2=d1*H/Y1*Q1;P.projectionMatrix.makePerspective(m2,j1,T1,x2,Q1,Y1)}function W(P,I){I===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(I.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(n===null)return;F.near=v.near=B.near=P.near,F.far=v.far=B.far=P.far,(z!==F.near||_!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,_=F.far);const I=P.parent,$=F.cameras;W(F,I);for(let K=0;K<$.length;K++)W($[K],I);F.matrixWorld.decompose(F.position,F.quaternion,F.scale),P.matrix.copy(F.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);const J=P.children;for(let K=0,c1=J.length;K<c1;K++)J[K].updateMatrixWorld(!0);$.length===2?w(F,B,v):F.projectionMatrix.copy(B.projectionMatrix)},this.getCamera=function(){return F},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(c!==null)return c.fixedFoveation},this.setFoveation=function(P){h!==null&&(h.fixedFoveation=P),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=P)};let j=null;function Z(P,I){if(o=I.getViewerPose(r||s),f=I,o!==null){const $=o.views;c!==null&&(e.setRenderTargetFramebuffer(u,c.framebuffer),e.setRenderTarget(u));let J=!1;$.length!==F.cameras.length&&(F.cameras.length=0,J=!0);for(let K=0;K<$.length;K++){const c1=$[K];let _1=null;if(c!==null)_1=c.getViewport(c1);else{const S1=m.getViewSubImage(h,c1);_1=S1.viewport,K===0&&(e.setRenderTargetTextures(u,S1.colorTexture,h.ignoreDepthValues?void 0:S1.depthStencilTexture),e.setRenderTarget(u))}let H=g[K];H===void 0&&(H=new d2,H.layers.enable(K),H.viewport=new R1,g[K]=H),H.matrix.fromArray(c1.transform.matrix),H.projectionMatrix.fromArray(c1.projectionMatrix),H.viewport.set(_1.x,_1.y,_1.width,_1.height),K===0&&F.matrix.copy(H.matrix),J===!0&&F.cameras.push(H)}}for(let $=0;$<p.length;$++){const J=A[$],K=p[$];J!==null&&K!==void 0&&K.update(J,I,r||s)}j&&j(P,I),f=null}const G=new F7;G.setAnimationLoop(Z),this.setAnimationLoop=function(P){j=P},this.dispose=function(){}}}function Eq(i,e){function t(d,u){d.fogColor.value.copy(u.color),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function l(d,u,p,A,B){u.isMeshBasicMaterial||u.isMeshLambertMaterial?n(d,u):u.isMeshToonMaterial?(n(d,u),m(d,u)):u.isMeshPhongMaterial?(n(d,u),o(d,u)):u.isMeshStandardMaterial?(n(d,u),h(d,u),u.isMeshPhysicalMaterial&&c(d,u,B)):u.isMeshMatcapMaterial?(n(d,u),f(d,u)):u.isMeshDepthMaterial?n(d,u):u.isMeshDistanceMaterial?(n(d,u),x(d,u)):u.isMeshNormalMaterial?n(d,u):u.isLineBasicMaterial?(q(d,u),u.isLineDashedMaterial&&s(d,u)):u.isPointsMaterial?a(d,u,p,A):u.isSpriteMaterial?r(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function n(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map),u.alphaMap&&(d.alphaMap.value=u.alphaMap),u.bumpMap&&(d.bumpMap.value=u.bumpMap,d.bumpScale.value=u.bumpScale,u.side===v2&&(d.bumpScale.value*=-1)),u.displacementMap&&(d.displacementMap.value=u.displacementMap,d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap),u.normalMap&&(d.normalMap.value=u.normalMap,d.normalScale.value.copy(u.normalScale),u.side===v2&&d.normalScale.value.negate()),u.specularMap&&(d.specularMap.value=u.specularMap),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const p=e.get(u).envMap;if(p&&(d.envMap.value=p,d.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;const v=i.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*v}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity);let A;u.map?A=u.map:u.specularMap?A=u.specularMap:u.displacementMap?A=u.displacementMap:u.normalMap?A=u.normalMap:u.bumpMap?A=u.bumpMap:u.roughnessMap?A=u.roughnessMap:u.metalnessMap?A=u.metalnessMap:u.alphaMap?A=u.alphaMap:u.emissiveMap?A=u.emissiveMap:u.clearcoatMap?A=u.clearcoatMap:u.clearcoatNormalMap?A=u.clearcoatNormalMap:u.clearcoatRoughnessMap?A=u.clearcoatRoughnessMap:u.iridescenceMap?A=u.iridescenceMap:u.iridescenceThicknessMap?A=u.iridescenceThicknessMap:u.specularIntensityMap?A=u.specularIntensityMap:u.specularColorMap?A=u.specularColorMap:u.transmissionMap?A=u.transmissionMap:u.thicknessMap?A=u.thicknessMap:u.sheenColorMap?A=u.sheenColorMap:u.sheenRoughnessMap&&(A=u.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),d.uvTransform.value.copy(A.matrix));let B;u.aoMap?B=u.aoMap:u.lightMap&&(B=u.lightMap),B!==void 0&&(B.isWebGLRenderTarget&&(B=B.texture),B.matrixAutoUpdate===!0&&B.updateMatrix(),d.uv2Transform.value.copy(B.matrix))}function q(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity}function s(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function a(d,u,p,A){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*p,d.scale.value=A*.5,u.map&&(d.map.value=u.map),u.alphaMap&&(d.alphaMap.value=u.alphaMap),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let B;u.map?B=u.map:u.alphaMap&&(B=u.alphaMap),B!==void 0&&(B.matrixAutoUpdate===!0&&B.updateMatrix(),d.uvTransform.value.copy(B.matrix))}function r(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map),u.alphaMap&&(d.alphaMap.value=u.alphaMap),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let p;u.map?p=u.map:u.alphaMap&&(p=u.alphaMap),p!==void 0&&(p.matrixAutoUpdate===!0&&p.updateMatrix(),d.uvTransform.value.copy(p.matrix))}function o(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function m(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function h(d,u){d.roughness.value=u.roughness,d.metalness.value=u.metalness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap),e.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function c(d,u,p){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap)),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),d.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===v2&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap)),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=p.texture,d.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap)}function f(d,u){u.matcap&&(d.matcap.value=u.matcap)}function x(d,u){d.referencePosition.value.copy(u.referencePosition),d.nearDistance.value=u.nearDistance,d.farDistance.value=u.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:l}}function vq(i,e,t,l){let n={},q={},s=[];const a=t.isWebGL2?i.getParameter(35375):0;function r(A,B){const v=B.program;l.uniformBlockBinding(A,v)}function o(A,B){let v=n[A.id];v===void 0&&(x(A),v=m(A),n[A.id]=v,A.addEventListener("dispose",u));const g=B.program;l.updateUBOMapping(A,g);const F=e.render.frame;q[A.id]!==F&&(c(A),q[A.id]=F)}function m(A){const B=h();A.__bindingPointIndex=B;const v=i.createBuffer(),g=A.__size,F=A.usage;return i.bindBuffer(35345,v),i.bufferData(35345,g,F),i.bindBuffer(35345,null),i.bindBufferBase(35345,B,v),v}function h(){for(let A=0;A<a;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(A){const B=n[A.id],v=A.uniforms,g=A.__cache;i.bindBuffer(35345,B);for(let F=0,z=v.length;F<z;F++){const _=v[F];if(f(_,F,g)===!0){const M=_.value,T=_.__offset;typeof M=="number"?(_.__data[0]=M,i.bufferSubData(35345,T,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):M.toArray(_.__data),i.bufferSubData(35345,T,_.__data))}}i.bindBuffer(35345,null)}function f(A,B,v){const g=A.value;if(v[B]===void 0)return typeof g=="number"?v[B]=g:v[B]=g.clone(),!0;if(typeof g=="number"){if(v[B]!==g)return v[B]=g,!0}else{const F=v[B];if(F.equals(g)===!1)return F.copy(g),!0}return!1}function x(A){const B=A.uniforms;let v=0;const g=16;let F=0;for(let z=0,_=B.length;z<_;z++){const M=B[z],T=d(M);if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,z>0){F=v%g;const X=g-F;F!==0&&X-T.boundary<0&&(v+=g-F,M.__offset=v)}v+=T.storage}return F=v%g,F>0&&(v+=g-F),A.__size=v,A.__cache={},this}function d(A){const B=A.value,v={boundary:0,storage:0};return typeof B=="number"?(v.boundary=4,v.storage=4):B.isVector2?(v.boundary=8,v.storage=8):B.isVector3||B.isColor?(v.boundary=16,v.storage=12):B.isVector4?(v.boundary=16,v.storage=16):B.isMatrix3?(v.boundary=48,v.storage=48):B.isMatrix4?(v.boundary=64,v.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),v}function u(A){const B=A.target;B.removeEventListener("dispose",u);const v=s.indexOf(B.__bindingPointIndex);s.splice(v,1),i.deleteBuffer(n[B.id]),delete n[B.id],delete q[B.id]}function p(){for(const A in n)i.deleteBuffer(n[A]);s=[],n={},q={}}return{bind:r,update:o,dispose:p}}function Cq(){const i=C4("canvas");return i.style.display="block",i}function T7(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Cq(),t=i.context!==void 0?i.context:null,l=i.depth!==void 0?i.depth:!0,n=i.stencil!==void 0?i.stencil:!0,q=i.antialias!==void 0?i.antialias:!1,s=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,r=i.powerPreference!==void 0?i.powerPreference:"default",o=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let m;t!==null?m=t.getContextAttributes().alpha:m=i.alpha!==void 0?i.alpha:!1;let h=null,c=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=v3,this.physicallyCorrectLights=!1,this.toneMapping=Y2,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let u=!1,p=0,A=0,B=null,v=-1,g=null;const F=new R1,z=new R1;let _=null,M=e.width,T=e.height,X=1,q1=null,N=null;const w=new R1(0,0,M,T),W=new R1(0,0,M,T);let j=!1;const Z=new F5;let G=!1,P=!1,I=null;const $=new G1,J=new r1,K=new S,c1={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _1(){return B===null?X:1}let H=t;function S1(D,R){for(let k=0;k<D.length;k++){const L=D[k],V=e.getContext(L,R);if(V!==null)return V}return null}try{const D={alpha:!0,depth:l,stencil:n,antialias:q,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:r,failIfMajorPerformanceCaveat:o};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${v5}`),e.addEventListener("webglcontextlost",p1,!1),e.addEventListener("webglcontextrestored",B1,!1),e.addEventListener("webglcontextcreationerror",P1,!1),H===null){const R=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&R.shift(),H=S1(R,D),H===null)throw S1(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let d1,g1,h1,w1,v1,f1,H1,Q1,Y1,m2,j1,T1,x2,h2,y,E,U,Q,e1,a1,x1,C,Y,t1;function s1(){d1=new Tl(H),g1=new yl(H,d1,i),d1.init(g1),C=new xq(H,d1,g1),h1=new fq(H,d1,g1),w1=new Rl,v1=new eq,f1=new dq(H,d1,h1,v1,g1,C,w1),H1=new Fl(d),Q1=new wl(d),Y1=new X0(H,g1),Y=new Dl(H,d1,Y1,g1),m2=new Ll(H,Y1,w1,Y),j1=new Ul(H,m2,Y1,w1),e1=new Ol(H,g1,f1),E=new Ml(v1),T1=new Qn(d,H1,Q1,d1,g1,Y,E),x2=new Eq(d,v1),h2=new lq,y=new rq(d1,g1),Q=new Cl(d,H1,h1,j1,m,s),U=new uq(d,j1,g1),t1=new vq(H,w1,g1,h1),a1=new Bl(H,d1,w1,g1),x1=new Pl(H,d1,w1,g1),w1.programs=T1.programs,d.capabilities=g1,d.extensions=d1,d.properties=v1,d.renderLists=h2,d.shadowMap=U,d.state=h1,d.info=w1}s1();const i1=new Aq(d,H);this.xr=i1,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const D=d1.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=d1.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(D){D!==void 0&&(X=D,this.setSize(M,T,!1))},this.getSize=function(D){return D.set(M,T)},this.setSize=function(D,R,k){if(i1.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=D,T=R,e.width=Math.floor(D*X),e.height=Math.floor(R*X),k!==!1&&(e.style.width=D+"px",e.style.height=R+"px"),this.setViewport(0,0,D,R)},this.getDrawingBufferSize=function(D){return D.set(M*X,T*X).floor()},this.setDrawingBufferSize=function(D,R,k){M=D,T=R,X=k,e.width=Math.floor(D*k),e.height=Math.floor(R*k),this.setViewport(0,0,D,R)},this.getCurrentViewport=function(D){return D.copy(F)},this.getViewport=function(D){return D.copy(w)},this.setViewport=function(D,R,k,L){D.isVector4?w.set(D.x,D.y,D.z,D.w):w.set(D,R,k,L),h1.viewport(F.copy(w).multiplyScalar(X).floor())},this.getScissor=function(D){return D.copy(W)},this.setScissor=function(D,R,k,L){D.isVector4?W.set(D.x,D.y,D.z,D.w):W.set(D,R,k,L),h1.scissor(z.copy(W).multiplyScalar(X).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(D){h1.setScissorTest(j=D)},this.setOpaqueSort=function(D){q1=D},this.setTransparentSort=function(D){N=D},this.getClearColor=function(D){return D.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(D=!0,R=!0,k=!0){let L=0;D&&(L|=16384),R&&(L|=256),k&&(L|=1024),H.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",p1,!1),e.removeEventListener("webglcontextrestored",B1,!1),e.removeEventListener("webglcontextcreationerror",P1,!1),h2.dispose(),y.dispose(),v1.dispose(),H1.dispose(),Q1.dispose(),j1.dispose(),Y.dispose(),t1.dispose(),T1.dispose(),i1.dispose(),i1.removeEventListener("sessionstart",F1),i1.removeEventListener("sessionend",$1),I&&(I.dispose(),I=null),V1.stop()};function p1(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function B1(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const D=w1.autoReset,R=U.enabled,k=U.autoUpdate,L=U.needsUpdate,V=U.type;s1(),w1.autoReset=D,U.enabled=R,U.autoUpdate=k,U.needsUpdate=L,U.type=V}function P1(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function b(D){const R=D.target;R.removeEventListener("dispose",b),n1(R)}function n1(D){O(D),v1.remove(D)}function O(D){const R=v1.get(D).programs;R!==void 0&&(R.forEach(function(k){T1.releaseProgram(k)}),D.isShaderMaterial&&T1.releaseShaderCache(D))}this.renderBufferDirect=function(D,R,k,L,V,u1){R===null&&(R=c1);const A1=V.isMesh&&V.matrixWorld.determinant()<0,C1=u9(D,R,k,L,V);h1.setMaterial(L,A1);let E1=k.index;const L1=k.attributes.position;if(E1===null){if(L1===void 0||L1.count===0)return}else if(E1.count===0)return;let y1=1;L.wireframe===!0&&(E1=m2.getWireframeAttribute(k),y1=2),Y.setup(V,L,C1,k,E1);let M1,O1=a1;E1!==null&&(M1=Y1.get(E1),O1=x1,O1.setIndex(M1));const s3=E1!==null?E1.count:L1.count,S3=k.drawRange.start*y1,b3=k.drawRange.count*y1,b2=u1!==null?u1.start*y1:0,b1=u1!==null?u1.count*y1:1/0,z3=Math.max(S3,b2),W1=Math.min(s3,S3+b3,b2+b1)-1,_2=Math.max(0,W1-z3+1);if(_2!==0){if(V.isMesh)L.wireframe===!0?(h1.setLineWidth(L.wireframeLinewidth*_1()),O1.setMode(1)):O1.setMode(4);else if(V.isLine){let J2=L.linewidth;J2===void 0&&(J2=1),h1.setLineWidth(J2*_1()),V.isLineSegments?O1.setMode(1):V.isLineLoop?O1.setMode(2):O1.setMode(3)}else V.isPoints?O1.setMode(0):V.isSprite&&O1.setMode(4);if(V.isInstancedMesh)O1.renderInstances(z3,_2,V.count);else if(k.isInstancedBufferGeometry){const J2=Math.min(k.instanceCount,k._maxInstanceCount);O1.renderInstances(z3,_2,J2)}else O1.render(z3,_2)}},this.compile=function(D,R){function k(L,V,u1){L.transparent===!0&&L.side===w2?(L.side=v2,L.needsUpdate=!0,w4(L,V,u1),L.side=i3,L.needsUpdate=!0,w4(L,V,u1),L.side=w2):w4(L,V,u1)}c=y.get(D),c.init(),x.push(c),D.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(c.pushLight(L),L.castShadow&&c.pushShadow(L))}),c.setupLights(d.physicallyCorrectLights),D.traverse(function(L){const V=L.material;if(V)if(Array.isArray(V))for(let u1=0;u1<V.length;u1++){const A1=V[u1];k(A1,D,L)}else k(V,D,L)}),x.pop(),c=null};let m1=null;function o1(D){m1&&m1(D)}function F1(){V1.stop()}function $1(){V1.start()}const V1=new F7;V1.setAnimationLoop(o1),typeof self<"u"&&V1.setContext(self),this.setAnimationLoop=function(D){m1=D,i1.setAnimationLoop(D),D===null?V1.stop():V1.start()},i1.addEventListener("sessionstart",F1),i1.addEventListener("sessionend",$1),this.render=function(D,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),i1.enabled===!0&&i1.isPresenting===!0&&(i1.cameraAutoUpdate===!0&&i1.updateCamera(R),R=i1.getCamera()),D.isScene===!0&&D.onBeforeRender(d,D,R,B),c=y.get(D,x.length),c.init(),x.push(c),$.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Z.setFromProjectionMatrix($),P=this.localClippingEnabled,G=E.init(this.clippingPlanes,P,R),h=h2.get(D,f.length),h.init(),f.push(h),Z2(D,R,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(q1,N),G===!0&&E.beginShadows();const k=c.state.shadowsArray;if(U.render(k,D,R),G===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,D),c.setupLights(d.physicallyCorrectLights),R.isArrayCamera){const L=R.cameras;for(let V=0,u1=L.length;V<u1;V++){const A1=L[V];N1(h,D,A1,A1.viewport)}}else N1(h,D,R);B!==null&&(f1.updateMultisampleRenderTarget(B),f1.updateRenderTargetMipmap(B)),D.isScene===!0&&D.onAfterRender(d,D,R),Y.resetDefaultState(),v=-1,g=null,x.pop(),x.length>0?c=x[x.length-1]:c=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function Z2(D,R,k,L){if(D.visible===!1)return;if(D.layers.test(R.layers)){if(D.isGroup)k=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(R);else if(D.isLight)c.pushLight(D),D.castShadow&&c.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Z.intersectsSprite(D)){L&&K.setFromMatrixPosition(D.matrixWorld).applyMatrix4($);const A1=j1.update(D),C1=D.material;C1.visible&&h.push(D,A1,C1,k,K.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(D.isSkinnedMesh&&D.skeleton.frame!==w1.render.frame&&(D.skeleton.update(),D.skeleton.frame=w1.render.frame),!D.frustumCulled||Z.intersectsObject(D))){L&&K.setFromMatrixPosition(D.matrixWorld).applyMatrix4($);const A1=j1.update(D),C1=D.material;if(Array.isArray(C1)){const E1=A1.groups;for(let L1=0,y1=E1.length;L1<y1;L1++){const M1=E1[L1],O1=C1[M1.materialIndex];O1&&O1.visible&&h.push(D,A1,O1,k,K.z,M1)}}else C1.visible&&h.push(D,A1,C1,k,K.z,null)}}const u1=D.children;for(let A1=0,C1=u1.length;A1<C1;A1++)Z2(u1[A1],R,k,L)}function N1(D,R,k,L){const V=D.opaque,u1=D.transmissive,A1=D.transparent;c.setupLightsView(k),u1.length>0&&I2(V,R,k),L&&h1.viewport(F.copy(L)),V.length>0&&p2(V,R,k),u1.length>0&&p2(u1,R,k),A1.length>0&&p2(A1,R,k),h1.buffers.depth.setTest(!0),h1.buffers.depth.setMask(!0),h1.buffers.color.setMask(!0),h1.setPolygonOffset(!1)}function I2(D,R,k){const L=g1.isWebGL2;I===null&&(I=new C3(1,1,{generateMipmaps:!0,type:d1.has("EXT_color_buffer_half_float")?v4:E3,minFilter:d6,samples:L&&q===!0?4:0})),d.getDrawingBufferSize(J),L?I.setSize(J.x,J.y):I.setSize(h6(J.x),h6(J.y));const V=d.getRenderTarget();d.setRenderTarget(I),d.clear();const u1=d.toneMapping;d.toneMapping=Y2,p2(D,R,k),d.toneMapping=u1,f1.updateMultisampleRenderTarget(I),f1.updateRenderTargetMipmap(I),d.setRenderTarget(V)}function p2(D,R,k){const L=R.isScene===!0?R.overrideMaterial:null;for(let V=0,u1=D.length;V<u1;V++){const A1=D[V],C1=A1.object,E1=A1.geometry,L1=L===null?A1.material:L,y1=A1.group;C1.layers.test(k.layers)&&c9(C1,R,k,E1,L1,y1)}}function c9(D,R,k,L,V,u1){D.onBeforeRender(d,R,k,L,V,u1),D.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),V.onBeforeRender(d,R,k,L,D,u1),V.transparent===!0&&V.side===w2?(V.side=v2,V.needsUpdate=!0,d.renderBufferDirect(k,R,L,V,D,u1),V.side=i3,V.needsUpdate=!0,d.renderBufferDirect(k,R,L,V,D,u1),V.side=w2):d.renderBufferDirect(k,R,L,V,D,u1),D.onAfterRender(d,R,k,L,V,u1)}function w4(D,R,k){R.isScene!==!0&&(R=c1);const L=v1.get(D),V=c.state.lights,u1=c.state.shadowsArray,A1=V.state.version,C1=T1.getParameters(D,V.state,u1,R,k),E1=T1.getProgramCacheKey(C1);let L1=L.programs;L.environment=D.isMeshStandardMaterial?R.environment:null,L.fog=R.fog,L.envMap=(D.isMeshStandardMaterial?Q1:H1).get(D.envMap||L.environment),L1===void 0&&(D.addEventListener("dispose",b),L1=new Map,L.programs=L1);let y1=L1.get(E1);if(y1!==void 0){if(L.currentProgram===y1&&L.lightsStateVersion===A1)return N5(D,C1),y1}else C1.uniforms=T1.getUniforms(D),D.onBuild(k,C1,d),D.onBeforeCompile(C1,d),y1=T1.acquireProgram(C1,E1),L1.set(E1,y1),L.uniforms=C1.uniforms;const M1=L.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(M1.clippingPlanes=E.uniform),N5(D,C1),L.needsLights=d9(D),L.lightsStateVersion=A1,L.needsLights&&(M1.ambientLightColor.value=V.state.ambient,M1.lightProbe.value=V.state.probe,M1.directionalLights.value=V.state.directional,M1.directionalLightShadows.value=V.state.directionalShadow,M1.spotLights.value=V.state.spot,M1.spotLightShadows.value=V.state.spotShadow,M1.rectAreaLights.value=V.state.rectArea,M1.ltc_1.value=V.state.rectAreaLTC1,M1.ltc_2.value=V.state.rectAreaLTC2,M1.pointLights.value=V.state.point,M1.pointLightShadows.value=V.state.pointShadow,M1.hemisphereLights.value=V.state.hemi,M1.directionalShadowMap.value=V.state.directionalShadowMap,M1.directionalShadowMatrix.value=V.state.directionalShadowMatrix,M1.spotShadowMap.value=V.state.spotShadowMap,M1.spotLightMatrix.value=V.state.spotLightMatrix,M1.spotLightMap.value=V.state.spotLightMap,M1.pointShadowMap.value=V.state.pointShadowMap,M1.pointShadowMatrix.value=V.state.pointShadowMatrix);const O1=y1.getUniforms(),s3=s6.seqWithValue(O1.seq,M1);return L.currentProgram=y1,L.uniformsList=s3,y1}function N5(D,R){const k=v1.get(D);k.outputEncoding=R.outputEncoding,k.instancing=R.instancing,k.skinning=R.skinning,k.morphTargets=R.morphTargets,k.morphNormals=R.morphNormals,k.morphColors=R.morphColors,k.morphTargetsCount=R.morphTargetsCount,k.numClippingPlanes=R.numClippingPlanes,k.numIntersection=R.numClipIntersection,k.vertexAlphas=R.vertexAlphas,k.vertexTangents=R.vertexTangents,k.toneMapping=R.toneMapping}function u9(D,R,k,L,V){R.isScene!==!0&&(R=c1),f1.resetTextureUnits();const u1=R.fog,A1=L.isMeshStandardMaterial?R.environment:null,C1=B===null?d.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:v3,E1=(L.isMeshStandardMaterial?Q1:H1).get(L.envMap||A1),L1=L.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,y1=!!L.normalMap&&!!k.attributes.tangent,M1=!!k.morphAttributes.position,O1=!!k.morphAttributes.normal,s3=!!k.morphAttributes.color,S3=L.toneMapped?d.toneMapping:Y2,b3=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,b2=b3!==void 0?b3.length:0,b1=v1.get(L),z3=c.state.lights;if(G===!0&&(P===!0||D!==g)){const c2=D===g&&L.id===v;E.setState(L,D,c2)}let W1=!1;L.version===b1.__version?(b1.needsLights&&b1.lightsStateVersion!==z3.state.version||b1.outputEncoding!==C1||V.isInstancedMesh&&b1.instancing===!1||!V.isInstancedMesh&&b1.instancing===!0||V.isSkinnedMesh&&b1.skinning===!1||!V.isSkinnedMesh&&b1.skinning===!0||b1.envMap!==E1||L.fog===!0&&b1.fog!==u1||b1.numClippingPlanes!==void 0&&(b1.numClippingPlanes!==E.numPlanes||b1.numIntersection!==E.numIntersection)||b1.vertexAlphas!==L1||b1.vertexTangents!==y1||b1.morphTargets!==M1||b1.morphNormals!==O1||b1.morphColors!==s3||b1.toneMapping!==S3||g1.isWebGL2===!0&&b1.morphTargetsCount!==b2)&&(W1=!0):(W1=!0,b1.__version=L.version);let _2=b1.currentProgram;W1===!0&&(_2=w4(L,R,V));let J2=!1,o4=!1,D6=!1;const q2=_2.getUniforms(),r3=b1.uniforms;if(h1.useProgram(_2.program)&&(J2=!0,o4=!0,D6=!0),L.id!==v&&(v=L.id,o4=!0),J2||g!==D){if(q2.setValue(H,"projectionMatrix",D.projectionMatrix),g1.logarithmicDepthBuffer&&q2.setValue(H,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),g!==D&&(g=D,o4=!0,D6=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const c2=q2.map.cameraPosition;c2!==void 0&&c2.setValue(H,K.setFromMatrixPosition(D.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&q2.setValue(H,"isOrthographic",D.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||V.isSkinnedMesh)&&q2.setValue(H,"viewMatrix",D.matrixWorldInverse)}if(V.isSkinnedMesh){q2.setOptional(H,V,"bindMatrix"),q2.setOptional(H,V,"bindMatrixInverse");const c2=V.skeleton;c2&&(g1.floatVertexTextures?(c2.boneTexture===null&&c2.computeBoneTexture(),q2.setValue(H,"boneTexture",c2.boneTexture,f1),q2.setValue(H,"boneTextureSize",c2.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const B6=k.morphAttributes;if((B6.position!==void 0||B6.normal!==void 0||B6.color!==void 0&&g1.isWebGL2===!0)&&e1.update(V,k,L,_2),(o4||b1.receiveShadow!==V.receiveShadow)&&(b1.receiveShadow=V.receiveShadow,q2.setValue(H,"receiveShadow",V.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(r3.envMap.value=E1,r3.flipEnvMap.value=E1.isCubeTexture&&E1.isRenderTargetTexture===!1?-1:1),o4&&(q2.setValue(H,"toneMappingExposure",d.toneMappingExposure),b1.needsLights&&f9(r3,D6),u1&&L.fog===!0&&x2.refreshFogUniforms(r3,u1),x2.refreshMaterialUniforms(r3,L,X,T,I),s6.upload(H,b1.uniformsList,r3,f1)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(s6.upload(H,b1.uniformsList,r3,f1),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&q2.setValue(H,"center",V.center),q2.setValue(H,"modelViewMatrix",V.modelViewMatrix),q2.setValue(H,"normalMatrix",V.normalMatrix),q2.setValue(H,"modelMatrix",V.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const c2=L.uniformsGroups;for(let y6=0,x9=c2.length;y6<x9;y6++)if(g1.isWebGL2){const O5=c2[y6];t1.update(O5,_2),t1.bind(O5,_2)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _2}function f9(D,R){D.ambientLightColor.needsUpdate=R,D.lightProbe.needsUpdate=R,D.directionalLights.needsUpdate=R,D.directionalLightShadows.needsUpdate=R,D.pointLights.needsUpdate=R,D.pointLightShadows.needsUpdate=R,D.spotLights.needsUpdate=R,D.spotLightShadows.needsUpdate=R,D.rectAreaLights.needsUpdate=R,D.hemisphereLights.needsUpdate=R}function d9(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,R,k){v1.get(D.texture).__webglTexture=R,v1.get(D.depthTexture).__webglTexture=k;const L=v1.get(D);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=k===void 0,L.__autoAllocateDepthBuffer||d1.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,R){const k=v1.get(D);k.__webglFramebuffer=R,k.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(D,R=0,k=0){B=D,p=R,A=k;let L=!0;if(D){const E1=v1.get(D);E1.__useDefaultFramebuffer!==void 0?(h1.bindFramebuffer(36160,null),L=!1):E1.__webglFramebuffer===void 0?f1.setupRenderTarget(D):E1.__hasExternalTextures&&f1.rebindTextures(D,v1.get(D.texture).__webglTexture,v1.get(D.depthTexture).__webglTexture)}let V=null,u1=!1,A1=!1;if(D){const E1=D.texture;(E1.isData3DTexture||E1.isDataArrayTexture)&&(A1=!0);const L1=v1.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(V=L1[R],u1=!0):g1.isWebGL2&&D.samples>0&&f1.useMultisampledRTT(D)===!1?V=v1.get(D).__webglMultisampledFramebuffer:V=L1,F.copy(D.viewport),z.copy(D.scissor),_=D.scissorTest}else F.copy(w).multiplyScalar(X).floor(),z.copy(W).multiplyScalar(X).floor(),_=j;if(h1.bindFramebuffer(36160,V)&&g1.drawBuffers&&L&&h1.drawBuffers(D,V),h1.viewport(F),h1.scissor(z),h1.setScissorTest(_),u1){const E1=v1.get(D.texture);H.framebufferTexture2D(36160,36064,34069+R,E1.__webglTexture,k)}else if(A1){const E1=v1.get(D.texture),L1=R||0;H.framebufferTextureLayer(36160,36064,E1.__webglTexture,k||0,L1)}v=-1},this.readRenderTargetPixels=function(D,R,k,L,V,u1,A1){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let C1=v1.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&A1!==void 0&&(C1=C1[A1]),C1){h1.bindFramebuffer(36160,C1);try{const E1=D.texture,L1=E1.format,y1=E1.type;if(L1!==T2&&C.convert(L1)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const M1=y1===v4&&(d1.has("EXT_color_buffer_half_float")||g1.isWebGL2&&d1.has("EXT_color_buffer_float"));if(y1!==E3&&C.convert(y1)!==H.getParameter(35738)&&!(y1===p3&&(g1.isWebGL2||d1.has("OES_texture_float")||d1.has("WEBGL_color_buffer_float")))&&!M1){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=D.width-L&&k>=0&&k<=D.height-V&&H.readPixels(R,k,L,V,C.convert(L1),C.convert(y1),u1)}finally{const E1=B!==null?v1.get(B).__webglFramebuffer:null;h1.bindFramebuffer(36160,E1)}}},this.copyFramebufferToTexture=function(D,R,k=0){const L=Math.pow(2,-k),V=Math.floor(R.image.width*L),u1=Math.floor(R.image.height*L);f1.setTexture2D(R,0),H.copyTexSubImage2D(3553,k,0,0,D.x,D.y,V,u1),h1.unbindTexture()},this.copyTextureToTexture=function(D,R,k,L=0){const V=R.image.width,u1=R.image.height,A1=C.convert(k.format),C1=C.convert(k.type);f1.setTexture2D(k,0),H.pixelStorei(37440,k.flipY),H.pixelStorei(37441,k.premultiplyAlpha),H.pixelStorei(3317,k.unpackAlignment),R.isDataTexture?H.texSubImage2D(3553,L,D.x,D.y,V,u1,A1,C1,R.image.data):R.isCompressedTexture?H.compressedTexSubImage2D(3553,L,D.x,D.y,R.mipmaps[0].width,R.mipmaps[0].height,A1,R.mipmaps[0].data):H.texSubImage2D(3553,L,D.x,D.y,A1,C1,R.image),L===0&&k.generateMipmaps&&H.generateMipmap(3553),h1.unbindTexture()},this.copyTextureToTexture3D=function(D,R,k,L,V=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const u1=D.max.x-D.min.x+1,A1=D.max.y-D.min.y+1,C1=D.max.z-D.min.z+1,E1=C.convert(L.format),L1=C.convert(L.type);let y1;if(L.isData3DTexture)f1.setTexture3D(L,0),y1=32879;else if(L.isDataArrayTexture)f1.setTexture2DArray(L,0),y1=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,L.flipY),H.pixelStorei(37441,L.premultiplyAlpha),H.pixelStorei(3317,L.unpackAlignment);const M1=H.getParameter(3314),O1=H.getParameter(32878),s3=H.getParameter(3316),S3=H.getParameter(3315),b3=H.getParameter(32877),b2=k.isCompressedTexture?k.mipmaps[0]:k.image;H.pixelStorei(3314,b2.width),H.pixelStorei(32878,b2.height),H.pixelStorei(3316,D.min.x),H.pixelStorei(3315,D.min.y),H.pixelStorei(32877,D.min.z),k.isDataTexture||k.isData3DTexture?H.texSubImage3D(y1,V,R.x,R.y,R.z,u1,A1,C1,E1,L1,b2.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(y1,V,R.x,R.y,R.z,u1,A1,C1,E1,b2.data)):H.texSubImage3D(y1,V,R.x,R.y,R.z,u1,A1,C1,E1,L1,b2),H.pixelStorei(3314,M1),H.pixelStorei(32878,O1),H.pixelStorei(3316,s3),H.pixelStorei(3315,S3),H.pixelStorei(32877,b3),V===0&&L.generateMipmaps&&H.generateMipmap(y1),h1.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?f1.setTextureCube(D,0):D.isData3DTexture?f1.setTexture3D(D,0):D.isDataArrayTexture?f1.setTexture2DArray(D,0):f1.setTexture2D(D,0),h1.unbindTexture()},this.resetState=function(){p=0,A=0,B=null,h1.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Dq extends T7{}Dq.prototype.isWebGL1Renderer=!0;class Bq extends J1{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class L7 extends F3{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new z1(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K8=new G1,p5=new y5,e6=new x6,t6=new S;class yq extends J1{constructor(e=new D2,t=new L7){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const l=this.geometry,n=this.matrixWorld,q=e.params.Points.threshold,s=l.drawRange;if(l.boundingSphere===null&&l.computeBoundingSphere(),e6.copy(l.boundingSphere),e6.applyMatrix4(n),e6.radius+=q,e.ray.intersectsSphere(e6)===!1)return;K8.copy(n).invert(),p5.copy(e.ray).applyMatrix4(K8);const a=q/((this.scale.x+this.scale.y+this.scale.z)/3),r=a*a,o=l.index,h=l.attributes.position;if(o!==null){const c=Math.max(0,s.start),f=Math.min(o.count,s.start+s.count);for(let x=c,d=f;x<d;x++){const u=o.getX(x);t6.fromBufferAttribute(h,u),Q8(t6,u,r,n,e,t,this)}}else{const c=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let x=c,d=f;x<d;x++)t6.fromBufferAttribute(h,x),Q8(t6,x,r,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,l=Object.keys(t);if(l.length>0){const n=t[l[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let q=0,s=n.length;q<s;q++){const a=n[q].name||String(q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=q}}}}}function Q8(i,e,t,l,n,q,s){const a=p5.distanceSqToPoint(i);if(a<t){const r=new S;p5.closestPointToPoint(i,r),r.applyMatrix4(l);const o=n.ray.origin.distanceTo(r);if(o<n.near||o>n.far)return;q.push({distance:o,distanceToRay:Math.sqrt(a),point:r,index:e,face:null,object:s})}}class R2{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const l=this.getUtoTmapping(e);return this.getPoint(l,t)}getPoints(e=5){const t=[];for(let l=0;l<=e;l++)t.push(this.getPoint(l/e));return t}getSpacedPoints(e=5){const t=[];for(let l=0;l<=e;l++)t.push(this.getPointAt(l/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let l,n=this.getPoint(0),q=0;t.push(0);for(let s=1;s<=e;s++)l=this.getPoint(s/e),q+=l.distanceTo(n),t.push(q),n=l;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const l=this.getLengths();let n=0;const q=l.length;let s;t?s=t:s=e*l[q-1];let a=0,r=q-1,o;for(;a<=r;)if(n=Math.floor(a+(r-a)/2),o=l[n]-s,o<0)a=n+1;else if(o>0)r=n-1;else{r=n;break}if(n=r,l[n]===s)return n/(q-1);const m=l[n],c=l[n+1]-m,f=(s-m)/c;return(n+f)/(q-1)}getTangent(e,t){let n=e-1e-4,q=e+1e-4;n<0&&(n=0),q>1&&(q=1);const s=this.getPoint(n),a=this.getPoint(q),r=t||(s.isVector2?new r1:new S);return r.copy(a).sub(s).normalize(),r}getTangentAt(e,t){const l=this.getUtoTmapping(e);return this.getTangent(l,t)}computeFrenetFrames(e,t){const l=new S,n=[],q=[],s=[],a=new S,r=new G1;for(let f=0;f<=e;f++){const x=f/e;n[f]=this.getTangentAt(x,new S)}q[0]=new S,s[0]=new S;let o=Number.MAX_VALUE;const m=Math.abs(n[0].x),h=Math.abs(n[0].y),c=Math.abs(n[0].z);m<=o&&(o=m,l.set(1,0,0)),h<=o&&(o=h,l.set(0,1,0)),c<=o&&l.set(0,0,1),a.crossVectors(n[0],l).normalize(),q[0].crossVectors(n[0],a),s[0].crossVectors(n[0],q[0]);for(let f=1;f<=e;f++){if(q[f]=q[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(e2(n[f-1].dot(n[f]),-1,1));q[f].applyMatrix4(r.makeRotationAxis(a,x))}s[f].crossVectors(n[f],q[f])}if(t===!0){let f=Math.acos(e2(q[0].dot(q[e]),-1,1));f/=e,n[0].dot(a.crossVectors(q[0],q[e]))>0&&(f=-f);for(let x=1;x<=e;x++)q[x].applyMatrix4(r.makeRotationAxis(n[x],f*x)),s[x].crossVectors(n[x],q[x])}return{tangents:n,normals:q,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class z5 extends R2{constructor(e=0,t=0,l=1,n=1,q=0,s=Math.PI*2,a=!1,r=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=l,this.yRadius=n,this.aStartAngle=q,this.aEndAngle=s,this.aClockwise=a,this.aRotation=r}getPoint(e,t){const l=t||new r1,n=Math.PI*2;let q=this.aEndAngle-this.aStartAngle;const s=Math.abs(q)<Number.EPSILON;for(;q<0;)q+=n;for(;q>n;)q-=n;q<Number.EPSILON&&(s?q=0:q=n),this.aClockwise===!0&&!s&&(q===n?q=-n:q=q-n);const a=this.aStartAngle+e*q;let r=this.aX+this.xRadius*Math.cos(a),o=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const m=Math.cos(this.aRotation),h=Math.sin(this.aRotation),c=r-this.aX,f=o-this.aY;r=c*m-f*h+this.aX,o=c*h+f*m+this.aY}return l.set(r,o)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mq extends z5{constructor(e,t,l,n,q,s){super(e,t,l,l,n,q,s),this.isArcCurve=!0,this.type="ArcCurve"}}function w5(){let i=0,e=0,t=0,l=0;function n(q,s,a,r){i=q,e=a,t=-3*q+3*s-2*a-r,l=2*q-2*s+a+r}return{initCatmullRom:function(q,s,a,r,o){n(s,a,o*(a-q),o*(r-s))},initNonuniformCatmullRom:function(q,s,a,r,o,m,h){let c=(s-q)/o-(a-q)/(o+m)+(a-s)/m,f=(a-s)/m-(r-s)/(m+h)+(r-a)/h;c*=m,f*=m,n(s,a,c,f)},calc:function(q){const s=q*q,a=s*q;return i+e*q+t*s+l*a}}}const l6=new S,n5=new w5,q5=new w5,i5=new w5;class P7 extends R2{constructor(e=[],t=!1,l="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=l,this.tension=n}getPoint(e,t=new S){const l=t,n=this.points,q=n.length,s=(q-(this.closed?0:1))*e;let a=Math.floor(s),r=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/q)+1)*q:r===0&&a===q-1&&(a=q-2,r=1);let o,m;this.closed||a>0?o=n[(a-1)%q]:(l6.subVectors(n[0],n[1]).add(n[0]),o=l6);const h=n[a%q],c=n[(a+1)%q];if(this.closed||a+2<q?m=n[(a+2)%q]:(l6.subVectors(n[q-1],n[q-2]).add(n[q-1]),m=l6),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(o.distanceToSquared(h),f),d=Math.pow(h.distanceToSquared(c),f),u=Math.pow(c.distanceToSquared(m),f);d<1e-4&&(d=1),x<1e-4&&(x=d),u<1e-4&&(u=d),n5.initNonuniformCatmullRom(o.x,h.x,c.x,m.x,x,d,u),q5.initNonuniformCatmullRom(o.y,h.y,c.y,m.y,x,d,u),i5.initNonuniformCatmullRom(o.z,h.z,c.z,m.z,x,d,u)}else this.curveType==="catmullrom"&&(n5.initCatmullRom(o.x,h.x,c.x,m.x,this.tension),q5.initCatmullRom(o.y,h.y,c.y,m.y,this.tension),i5.initCatmullRom(o.z,h.z,c.z,m.z,this.tension));return l.set(n5.calc(r),q5.calc(r),i5.calc(r)),l}copy(e){super.copy(e),this.points=[];for(let t=0,l=e.points.length;t<l;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,l=this.points.length;t<l;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,l=e.points.length;t<l;t++){const n=e.points[t];this.points.push(new S().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function e7(i,e,t,l,n){const q=(l-e)*.5,s=(n-t)*.5,a=i*i,r=i*a;return(2*t-2*l+q+s)*r+(-3*t+3*l-2*q-s)*a+q*i+t}function Fq(i,e){const t=1-i;return t*t*e}function Sq(i,e){return 2*(1-i)*i*e}function bq(i,e){return i*i*e}function g4(i,e,t,l){return Fq(i,e)+Sq(i,t)+bq(i,l)}function zq(i,e){const t=1-i;return t*t*t*e}function wq(i,e){const t=1-i;return 3*t*t*i*e}function Tq(i,e){return 3*(1-i)*i*i*e}function Lq(i,e){return i*i*i*e}function A4(i,e,t,l,n){return zq(i,e)+wq(i,t)+Tq(i,l)+Lq(i,n)}class R7 extends R2{constructor(e=new r1,t=new r1,l=new r1,n=new r1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=l,this.v3=n}getPoint(e,t=new r1){const l=t,n=this.v0,q=this.v1,s=this.v2,a=this.v3;return l.set(A4(e,n.x,q.x,s.x,a.x),A4(e,n.y,q.y,s.y,a.y)),l}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pq extends R2{constructor(e=new S,t=new S,l=new S,n=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=l,this.v3=n}getPoint(e,t=new S){const l=t,n=this.v0,q=this.v1,s=this.v2,a=this.v3;return l.set(A4(e,n.x,q.x,s.x,a.x),A4(e,n.y,q.y,s.y,a.y),A4(e,n.z,q.z,s.z,a.z)),l}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T5 extends R2{constructor(e=new r1,t=new r1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new r1){const l=t;return e===1?l.copy(this.v2):(l.copy(this.v2).sub(this.v1),l.multiplyScalar(e).add(this.v1)),l}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const l=t||new r1;return l.copy(this.v2).sub(this.v1).normalize(),l}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rq extends R2{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const l=t;return e===1?l.copy(this.v2):(l.copy(this.v2).sub(this.v1),l.multiplyScalar(e).add(this.v1)),l}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I7 extends R2{constructor(e=new r1,t=new r1,l=new r1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=l}getPoint(e,t=new r1){const l=t,n=this.v0,q=this.v1,s=this.v2;return l.set(g4(e,n.x,q.x,s.x),g4(e,n.y,q.y,s.y)),l}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N7 extends R2{constructor(e=new S,t=new S,l=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=l}getPoint(e,t=new S){const l=t,n=this.v0,q=this.v1,s=this.v2;return l.set(g4(e,n.x,q.x,s.x),g4(e,n.y,q.y,s.y),g4(e,n.z,q.z,s.z)),l}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O7 extends R2{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new r1){const l=t,n=this.points,q=(n.length-1)*e,s=Math.floor(q),a=q-s,r=n[s===0?s:s-1],o=n[s],m=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return l.set(e7(a,r.x,o.x,m.x,h.x),e7(a,r.y,o.y,m.y,h.y)),l}copy(e){super.copy(e),this.points=[];for(let t=0,l=e.points.length;t<l;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,l=this.points.length;t<l;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,l=e.points.length;t<l;t++){const n=e.points[t];this.points.push(new r1().fromArray(n))}return this}}var U7=Object.freeze({__proto__:null,ArcCurve:Mq,CatmullRomCurve3:P7,CubicBezierCurve:R7,CubicBezierCurve3:Pq,EllipseCurve:z5,LineCurve:T5,LineCurve3:Rq,QuadraticBezierCurve:I7,QuadraticBezierCurve3:N7,SplineCurve:O7});class Iq extends R2{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new T5(t,e))}getPoint(e,t){const l=e*this.getLength(),n=this.getCurveLengths();let q=0;for(;q<n.length;){if(n[q]>=l){const s=n[q]-l,a=this.curves[q],r=a.getLength(),o=r===0?0:1-s/r;return a.getPointAt(o,t)}q++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let l=0,n=this.curves.length;l<n;l++)t+=this.curves[l].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let l=0;l<=e;l++)t.push(this.getPoint(l/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let l;for(let n=0,q=this.curves;n<q.length;n++){const s=q[n],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,r=s.getPoints(a);for(let o=0;o<r.length;o++){const m=r[o];l&&l.equals(m)||(t.push(m),l=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,l=e.curves.length;t<l;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,l=this.curves.length;t<l;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,l=e.curves.length;t<l;t++){const n=e.curves[t];this.curves.push(new U7[n.type]().fromJSON(n))}return this}}class _5 extends Iq{constructor(e){super(),this.type="Path",this.currentPoint=new r1,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,l=e.length;t<l;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const l=new T5(this.currentPoint.clone(),new r1(e,t));return this.curves.push(l),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,l,n){const q=new I7(this.currentPoint.clone(),new r1(e,t),new r1(l,n));return this.curves.push(q),this.currentPoint.set(l,n),this}bezierCurveTo(e,t,l,n,q,s){const a=new R7(this.currentPoint.clone(),new r1(e,t),new r1(l,n),new r1(q,s));return this.curves.push(a),this.currentPoint.set(q,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),l=new O7(t);return this.curves.push(l),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,l,n,q,s){const a=this.currentPoint.x,r=this.currentPoint.y;return this.absarc(e+a,t+r,l,n,q,s),this}absarc(e,t,l,n,q,s){return this.absellipse(e,t,l,l,n,q,s),this}ellipse(e,t,l,n,q,s,a,r){const o=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+o,t+m,l,n,q,s,a,r),this}absellipse(e,t,l,n,q,s,a,r){const o=new z5(e,t,l,n,q,s,a,r);if(this.curves.length>0){const h=o.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(o);const m=o.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class E4 extends _5{constructor(e){super(e),this.uuid=M3(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let l=0,n=this.holes.length;l<n;l++)t[l]=this.holes[l].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,l=e.holes.length;t<l;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,l=this.holes.length;t<l;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,l=e.holes.length;t<l;t++){const n=e.holes[t];this.holes.push(new _5().fromJSON(n))}return this}}const Nq={triangulate:function(i,e,t=2){const l=e&&e.length,n=l?e[0]*t:i.length;let q=k7(i,0,n,t,!0);const s=[];if(!q||q.next===q.prev)return s;let a,r,o,m,h,c,f;if(l&&(q=Vq(i,e,q,t)),i.length>80*t){a=o=i[0],r=m=i[1];for(let x=t;x<n;x+=t)h=i[x],c=i[x+1],h<a&&(a=h),c<r&&(r=c),h>o&&(o=h),c>m&&(m=c);f=Math.max(o-a,m-r),f=f!==0?1/f:0}return D4(q,s,t,a,r,f),s}};function k7(i,e,t,l,n){let q,s;if(n===ei(i,e,t,l)>0)for(q=e;q<t;q+=l)s=t7(q,i[q],i[q+1],s);else for(q=t-l;q>=e;q-=l)s=t7(q,i[q],i[q+1],s);return s&&_6(s,s.next)&&(y4(s),s=s.next),s}function a3(i,e){if(!i)return i;e||(e=i);let t=i,l;do if(l=!1,!t.steiner&&(_6(t,t.next)||I1(t.prev,t,t.next)===0)){if(y4(t),t=e=t.prev,t===t.next)break;l=!0}else t=t.next;while(l||t!==e);return e}function D4(i,e,t,l,n,q,s){if(!i)return;!s&&q&&jq(i,l,n,q);let a=i,r,o;for(;i.prev!==i.next;){if(r=i.prev,o=i.next,q?Uq(i,l,n,q):Oq(i)){e.push(r.i/t),e.push(i.i/t),e.push(o.i/t),y4(i),i=o.next,a=o.next;continue}if(i=o,i===a){s?s===1?(i=kq(a3(i),e,t),D4(i,e,t,l,n,q,2)):s===2&&Gq(i,e,t,l,n,q):D4(a3(i),e,t,l,n,q,1);break}}}function Oq(i){const e=i.prev,t=i,l=i.next;if(I1(e,t,l)>=0)return!1;let n=i.next.next;for(;n!==i.prev;){if($3(e.x,e.y,t.x,t.y,l.x,l.y,n.x,n.y)&&I1(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function Uq(i,e,t,l){const n=i.prev,q=i,s=i.next;if(I1(n,q,s)>=0)return!1;const a=n.x<q.x?n.x<s.x?n.x:s.x:q.x<s.x?q.x:s.x,r=n.y<q.y?n.y<s.y?n.y:s.y:q.y<s.y?q.y:s.y,o=n.x>q.x?n.x>s.x?n.x:s.x:q.x>s.x?q.x:s.x,m=n.y>q.y?n.y>s.y?n.y:s.y:q.y>s.y?q.y:s.y,h=g5(a,r,e,t,l),c=g5(o,m,e,t,l);let f=i.prevZ,x=i.nextZ;for(;f&&f.z>=h&&x&&x.z<=c;){if(f!==i.prev&&f!==i.next&&$3(n.x,n.y,q.x,q.y,s.x,s.y,f.x,f.y)&&I1(f.prev,f,f.next)>=0||(f=f.prevZ,x!==i.prev&&x!==i.next&&$3(n.x,n.y,q.x,q.y,s.x,s.y,x.x,x.y)&&I1(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;f&&f.z>=h;){if(f!==i.prev&&f!==i.next&&$3(n.x,n.y,q.x,q.y,s.x,s.y,f.x,f.y)&&I1(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;x&&x.z<=c;){if(x!==i.prev&&x!==i.next&&$3(n.x,n.y,q.x,q.y,s.x,s.y,x.x,x.y)&&I1(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function kq(i,e,t){let l=i;do{const n=l.prev,q=l.next.next;!_6(n,q)&&G7(n,l,l.next,q)&&B4(n,q)&&B4(q,n)&&(e.push(n.i/t),e.push(l.i/t),e.push(q.i/t),y4(l),y4(l.next),l=i=q),l=l.next}while(l!==i);return a3(l)}function Gq(i,e,t,l,n,q){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&$q(s,a)){let r=V7(s,a);s=a3(s,s.next),r=a3(r,r.next),D4(s,e,t,l,n,q),D4(r,e,t,l,n,q);return}a=a.next}s=s.next}while(s!==i)}function Vq(i,e,t,l){const n=[];let q,s,a,r,o;for(q=0,s=e.length;q<s;q++)a=e[q]*l,r=q<s-1?e[q+1]*l:i.length,o=k7(i,a,r,l,!1),o===o.next&&(o.steiner=!0),n.push(Jq(o));for(n.sort(Hq),q=0;q<n.length;q++)Wq(n[q],t),t=a3(t,t.next);return t}function Hq(i,e){return i.x-e.x}function Wq(i,e){if(e=Xq(i,e),e){const t=V7(e,i);a3(e,e.next),a3(t,t.next)}}function Xq(i,e){let t=e;const l=i.x,n=i.y;let q=-1/0,s;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const c=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(c<=l&&c>q){if(q=c,c===l){if(n===t.y)return t;if(n===t.next.y)return t.next}s=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!s)return null;if(l===q)return s;const a=s,r=s.x,o=s.y;let m=1/0,h;t=s;do l>=t.x&&t.x>=r&&l!==t.x&&$3(n<o?l:q,n,r,o,n<o?q:l,n,t.x,t.y)&&(h=Math.abs(n-t.y)/(l-t.x),B4(t,i)&&(h<m||h===m&&(t.x>s.x||t.x===s.x&&Yq(s,t)))&&(s=t,m=h)),t=t.next;while(t!==a);return s}function Yq(i,e){return I1(i.prev,i,e.prev)<0&&I1(e.next,i,i.next)<0}function jq(i,e,t,l){let n=i;do n.z===null&&(n.z=g5(n.x,n.y,e,t,l)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==i);n.prevZ.nextZ=null,n.prevZ=null,Zq(n)}function Zq(i){let e,t,l,n,q,s,a,r,o=1;do{for(t=i,i=null,q=null,s=0;t;){for(s++,l=t,a=0,e=0;e<o&&(a++,l=l.nextZ,!!l);e++);for(r=o;a>0||r>0&&l;)a!==0&&(r===0||!l||t.z<=l.z)?(n=t,t=t.nextZ,a--):(n=l,l=l.nextZ,r--),q?q.nextZ=n:i=n,n.prevZ=q,q=n;t=l}q.nextZ=null,o*=2}while(s>1);return i}function g5(i,e,t,l,n){return i=32767*(i-t)*n,e=32767*(e-l)*n,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jq(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $3(i,e,t,l,n,q,s,a){return(n-s)*(e-a)-(i-s)*(q-a)>=0&&(i-s)*(l-a)-(t-s)*(e-a)>=0&&(t-s)*(q-a)-(n-s)*(l-a)>=0}function $q(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Kq(i,e)&&(B4(i,e)&&B4(e,i)&&Qq(i,e)&&(I1(i.prev,i,e.prev)||I1(i,e.prev,e))||_6(i,e)&&I1(i.prev,i,i.next)>0&&I1(e.prev,e,e.next)>0)}function I1(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function _6(i,e){return i.x===e.x&&i.y===e.y}function G7(i,e,t,l){const n=q6(I1(i,e,t)),q=q6(I1(i,e,l)),s=q6(I1(t,l,i)),a=q6(I1(t,l,e));return!!(n!==q&&s!==a||n===0&&n6(i,t,e)||q===0&&n6(i,l,e)||s===0&&n6(t,i,l)||a===0&&n6(t,e,l))}function n6(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function q6(i){return i>0?1:i<0?-1:0}function Kq(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&G7(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function B4(i,e){return I1(i.prev,i,i.next)<0?I1(i,e,i.next)>=0&&I1(i,i.prev,e)>=0:I1(i,e,i.prev)<0||I1(i,i.next,e)<0}function Qq(i,e){let t=i,l=!1;const n=(i.x+e.x)/2,q=(i.y+e.y)/2;do t.y>q!=t.next.y>q&&t.next.y!==t.y&&n<(t.next.x-t.x)*(q-t.y)/(t.next.y-t.y)+t.x&&(l=!l),t=t.next;while(t!==i);return l}function V7(i,e){const t=new A5(i.i,i.x,i.y),l=new A5(e.i,e.x,e.y),n=i.next,q=e.prev;return i.next=e,e.prev=i,t.next=n,n.prev=t,l.next=t,t.prev=l,q.next=l,l.prev=q,l}function t7(i,e,t,l){const n=new A5(i,e,t);return l?(n.next=l.next,n.prev=l,l.next.prev=n,l.next=n):(n.prev=n,n.next=n),n}function y4(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function A5(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ei(i,e,t,l){let n=0;for(let q=e,s=t-l;q<t;q+=l)n+=(i[s]-i[q])*(i[q+1]+i[s+1]),s=q;return n}class e4{static area(e){const t=e.length;let l=0;for(let n=t-1,q=0;q<t;n=q++)l+=e[n].x*e[q].y-e[q].x*e[n].y;return l*.5}static isClockWise(e){return e4.area(e)<0}static triangulateShape(e,t){const l=[],n=[],q=[];l7(e),n7(l,e);let s=e.length;t.forEach(l7);for(let r=0;r<t.length;r++)n.push(s),s+=t[r].length,n7(l,t[r]);const a=Nq.triangulate(l,n);for(let r=0;r<a.length;r+=3)q.push(a.slice(r,r+3));return q}}function l7(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function n7(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class g6 extends D2{constructor(e=new E4([new r1(0,.5),new r1(-.5,-.5),new r1(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const l=[],n=[],q=[],s=[];let a=0,r=0;if(Array.isArray(e)===!1)o(e);else for(let m=0;m<e.length;m++)o(e[m]),this.addGroup(a,r,m),a+=r,r=0;this.setIndex(l),this.setAttribute("position",new t2(n,3)),this.setAttribute("normal",new t2(q,3)),this.setAttribute("uv",new t2(s,2));function o(m){const h=n.length/3,c=m.extractPoints(t);let f=c.shape;const x=c.holes;e4.isClockWise(f)===!1&&(f=f.reverse());for(let u=0,p=x.length;u<p;u++){const A=x[u];e4.isClockWise(A)===!0&&(x[u]=A.reverse())}const d=e4.triangulateShape(f,x);for(let u=0,p=x.length;u<p;u++){const A=x[u];f=f.concat(A)}for(let u=0,p=f.length;u<p;u++){const A=f[u];n.push(A.x,A.y,0),q.push(0,0,1),s.push(A.x,A.y)}for(let u=0,p=d.length;u<p;u++){const A=d[u],B=A[0]+h,v=A[1]+h,g=A[2]+h;l.push(B,v,g),r+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ti(t,e)}static fromJSON(e,t){const l=[];for(let n=0,q=e.shapes.length;n<q;n++){const s=t[e.shapes[n]];l.push(s)}return new g6(l,e.curveSegments)}}function ti(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,l=i.length;t<l;t++){const n=i[t];e.shapes.push(n.uuid)}else e.shapes.push(i.uuid);return e}class r4 extends D2{constructor(e=1,t=32,l=16,n=0,q=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:l,phiStart:n,phiLength:q,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),l=Math.max(2,Math.floor(l));const r=Math.min(s+a,Math.PI);let o=0;const m=[],h=new S,c=new S,f=[],x=[],d=[],u=[];for(let p=0;p<=l;p++){const A=[],B=p/l;let v=0;p==0&&s==0?v=.5/t:p==l&&r==Math.PI&&(v=-.5/t);for(let g=0;g<=t;g++){const F=g/t;h.x=-e*Math.cos(n+F*q)*Math.sin(s+B*a),h.y=e*Math.cos(s+B*a),h.z=e*Math.sin(n+F*q)*Math.sin(s+B*a),x.push(h.x,h.y,h.z),c.copy(h).normalize(),d.push(c.x,c.y,c.z),u.push(F+v,1-B),A.push(o++)}m.push(A)}for(let p=0;p<l;p++)for(let A=0;A<t;A++){const B=m[p][A+1],v=m[p][A],g=m[p+1][A],F=m[p+1][A+1];(p!==0||s>0)&&f.push(B,v,F),(p!==l-1||r<Math.PI)&&f.push(v,g,F)}this.setIndex(f),this.setAttribute("position",new t2(x,3)),this.setAttribute("normal",new t2(d,3)),this.setAttribute("uv",new t2(u,2))}static fromJSON(e){return new r4(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class L5 extends D2{constructor(e=new N7(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,l=1,n=8,q=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:l,radialSegments:n,closed:q};const s=e.computeFrenetFrames(t,q);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new S,r=new S,o=new r1;let m=new S;const h=[],c=[],f=[],x=[];d(),this.setIndex(x),this.setAttribute("position",new t2(h,3)),this.setAttribute("normal",new t2(c,3)),this.setAttribute("uv",new t2(f,2));function d(){for(let B=0;B<t;B++)u(B);u(q===!1?t:0),A(),p()}function u(B){m=e.getPointAt(B/t,m);const v=s.normals[B],g=s.binormals[B];for(let F=0;F<=n;F++){const z=F/n*Math.PI*2,_=Math.sin(z),M=-Math.cos(z);r.x=M*v.x+_*g.x,r.y=M*v.y+_*g.y,r.z=M*v.z+_*g.z,r.normalize(),c.push(r.x,r.y,r.z),a.x=m.x+l*r.x,a.y=m.y+l*r.y,a.z=m.z+l*r.z,h.push(a.x,a.y,a.z)}}function p(){for(let B=1;B<=t;B++)for(let v=1;v<=n;v++){const g=(n+1)*(B-1)+(v-1),F=(n+1)*B+(v-1),z=(n+1)*B+v,_=(n+1)*(B-1)+v;x.push(g,F,_),x.push(F,z,_)}}function A(){for(let B=0;B<=t;B++)for(let v=0;v<=n;v++)o.x=B/t,o.y=v/n,f.push(o.x,o.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new L5(new U7[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class H7 extends F3{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new z1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D5,this.normalScale=new r1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends F3{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new z1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D5,this.normalScale=new r1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=C5,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const c6={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ni{constructor(e,t,l){const n=this;let q=!1,s=0,a=0,r;const o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=l,this.itemStart=function(m){a++,q===!1&&n.onStart!==void 0&&n.onStart(m,s,a),q=!0},this.itemEnd=function(m){s++,n.onProgress!==void 0&&n.onProgress(m,s,a),s===a&&(q=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(m){n.onError!==void 0&&n.onError(m)},this.resolveURL=function(m){return r?r(m):m},this.setURLModifier=function(m){return r=m,this},this.addHandler=function(m,h){return o.push(m,h),this},this.removeHandler=function(m){const h=o.indexOf(m);return h!==-1&&o.splice(h,2),this},this.getHandler=function(m){for(let h=0,c=o.length;h<c;h+=2){const f=o[h],x=o[h+1];if(f.global&&(f.lastIndex=0),f.test(m))return x}return null}}}const qi=new ni;class A6{constructor(e){this.manager=e!==void 0?e:qi,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const l=this;return new Promise(function(n,q){l.load(e,n,t,q)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const V2={};class ii extends Error{constructor(e,t){super(e),this.response=t}}class ai extends A6{constructor(e){super(e)}load(e,t,l,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const q=c6.get(e);if(q!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(q),this.manager.itemEnd(e)},0),q;if(V2[e]!==void 0){V2[e].push({onLoad:t,onProgress:l,onError:n});return}V2[e]=[],V2[e].push({onLoad:t,onProgress:l,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,r=this.responseType;fetch(s).then(o=>{if(o.status===200||o.status===0){if(o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||o.body===void 0||o.body.getReader===void 0)return o;const m=V2[e],h=o.body.getReader(),c=o.headers.get("Content-Length"),f=c?parseInt(c):0,x=f!==0;let d=0;const u=new ReadableStream({start(p){A();function A(){h.read().then(({done:B,value:v})=>{if(B)p.close();else{d+=v.byteLength;const g=new ProgressEvent("progress",{lengthComputable:x,loaded:d,total:f});for(let F=0,z=m.length;F<z;F++){const _=m[F];_.onProgress&&_.onProgress(g)}p.enqueue(v),A()}})}}});return new Response(u)}else throw new ii(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`,o)}).then(o=>{switch(r){case"arraybuffer":return o.arrayBuffer();case"blob":return o.blob();case"document":return o.text().then(m=>new DOMParser().parseFromString(m,a));case"json":return o.json();default:if(a===void 0)return o.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),c=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(c);return o.arrayBuffer().then(x=>f.decode(x))}}}).then(o=>{c6.add(e,o);const m=V2[e];delete V2[e];for(let h=0,c=m.length;h<c;h++){const f=m[h];f.onLoad&&f.onLoad(o)}}).catch(o=>{const m=V2[e];if(m===void 0)throw this.manager.itemError(e),o;delete V2[e];for(let h=0,c=m.length;h<c;h++){const f=m[h];f.onError&&f.onError(o)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class si extends A6{constructor(e){super(e)}load(e,t,l,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const q=this,s=c6.get(e);if(s!==void 0)return q.manager.itemStart(e),setTimeout(function(){t&&t(s),q.manager.itemEnd(e)},0),s;const a=C4("img");function r(){m(),c6.add(e,this),t&&t(this),q.manager.itemEnd(e)}function o(h){m(),n&&n(h),q.manager.itemError(e),q.manager.itemEnd(e)}function m(){a.removeEventListener("load",r,!1),a.removeEventListener("error",o,!1)}return a.addEventListener("load",r,!1),a.addEventListener("error",o,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),q.manager.itemStart(e),a.src=e,a}}class P5 extends A6{constructor(e){super(e)}load(e,t,l,n){const q=new C2,s=new si(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){q.image=a,q.needsUpdate=!0,t!==void 0&&t(q)},l,n),q}}class W7 extends J1{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new z1(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const q7=new G1,i7=new S,a7=new S;class ri{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new r1(512,512),this.map=null,this.mapPass=null,this.matrix=new G1,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new F5,this._frameExtents=new r1(1,1),this._viewportCount=1,this._viewports=[new R1(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,l=this.matrix;i7.setFromMatrixPosition(e.matrixWorld),t.position.copy(i7),a7.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(a7),t.updateMatrixWorld(),q7.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(q7),l.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),l.multiply(t.projectionMatrix),l.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const s7=new G1,u4=new S,a5=new S;class oi extends ri{constructor(){super(new d2(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new r1(4,2),this._viewportCount=6,this._viewports=[new R1(2,1,1,1),new R1(0,1,1,1),new R1(3,1,1,1),new R1(1,1,1,1),new R1(3,0,1,1),new R1(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const l=this.camera,n=this.matrix,q=e.distance||l.far;q!==l.far&&(l.far=q,l.updateProjectionMatrix()),u4.setFromMatrixPosition(e.matrixWorld),l.position.copy(u4),a5.copy(l.position),a5.add(this._cubeDirections[t]),l.up.copy(this._cubeUps[t]),l.lookAt(a5),l.updateMatrixWorld(),n.makeTranslation(-u4.x,-u4.y,-u4.z),s7.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),this._frustum.setFromProjectionMatrix(s7)}}class X7 extends W7{constructor(e,t,l=0,n=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=l,this.decay=n,this.shadow=new oi}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mi extends W7{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hi{constructor(e,t,l=0,n=1/0){this.ray=new y5(e,t),this.near=l,this.far=n,this.camera=null,this.layers=new M5,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,l=[]){return E5(e,this,l,t),l.sort(r7),l}intersectObjects(e,t=!0,l=[]){for(let n=0,q=e.length;n<q;n++)E5(e[n],this,l,t);return l.sort(r7),l}}function r7(i,e){return i.distance-e.distance}function E5(i,e,t,l){if(i.layers.test(e.layers)&&i.raycast(e,t),l===!0){const n=i.children;for(let q=0,s=n.length;q<s;q++)E5(n[q],e,t,!0)}}class o7{constructor(e=1,t=0,l=0){return this.radius=e,this.phi=t,this.theta=l,this}set(e,t,l){return this.radius=e,this.phi=t,this.theta=l,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,l){return this.radius=Math.sqrt(e*e+t*t+l*l),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,l),this.phi=Math.acos(e2(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ci{constructor(){this.type="ShapePath",this.color=new z1,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new _5,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,l,n){return this.currentPath.quadraticCurveTo(e,t,l,n),this}bezierCurveTo(e,t,l,n,q,s){return this.currentPath.bezierCurveTo(e,t,l,n,q,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const A=[];for(let B=0,v=p.length;B<v;B++){const g=p[B],F=new E4;F.curves=g.curves,A.push(F)}return A}function l(p,A){const B=A.length;let v=!1;for(let g=B-1,F=0;F<B;g=F++){let z=A[g],_=A[F],M=_.x-z.x,T=_.y-z.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(z=A[F],M=-M,_=A[g],T=-T),p.y<z.y||p.y>_.y)continue;if(p.y===z.y){if(p.x===z.x)return!0}else{const X=T*(p.x-z.x)-M*(p.y-z.y);if(X===0)return!0;if(X<0)continue;v=!v}}else{if(p.y!==z.y)continue;if(_.x<=p.x&&p.x<=z.x||z.x<=p.x&&p.x<=_.x)return!0}}return v}const n=e4.isClockWise,q=this.subPaths;if(q.length===0)return[];let s,a,r;const o=[];if(q.length===1)return a=q[0],r=new E4,r.curves=a.curves,o.push(r),o;let m=!n(q[0].getPoints());m=e?!m:m;const h=[],c=[];let f=[],x=0,d;c[x]=void 0,f[x]=[];for(let p=0,A=q.length;p<A;p++)a=q[p],d=a.getPoints(),s=n(d),s=e?!s:s,s?(!m&&c[x]&&x++,c[x]={s:new E4,p:d},c[x].s.curves=a.curves,m&&x++,f[x]=[]):f[x].push({h:a,p:d[0]});if(!c[0])return t(q);if(c.length>1){let p=!1,A=0;for(let B=0,v=c.length;B<v;B++)h[B]=[];for(let B=0,v=c.length;B<v;B++){const g=f[B];for(let F=0;F<g.length;F++){const z=g[F];let _=!0;for(let M=0;M<c.length;M++)l(z.p,c[M].p)&&(B!==M&&A++,_?(_=!1,h[M].push(z)):p=!0);_&&h[B].push(z)}}A>0&&p===!1&&(f=h)}let u;for(let p=0,A=c.length;p<A;p++){r=c[p].s,o.push(r),u=f[p];for(let B=0,v=u.length;B<v;B++)r.holes.push(u[B].h)}return o}}class ui extends g6{constructor(e,t){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(e,t)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:v5}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=v5);const k1=[["8BD3708E-8E3D-44B8-9E92-1050FA7987E5",`the essence of 
 love / meaning`,14.5,90,10649230,40],["D4724AD1-EECD-4975-920C-CDAD71AA53C3",`the essence of 
 wisdom / will`,14.5,210,8965361,40],["0027E01B-C40A-49F0-9833-30244700C39E",`the essence of 
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
Can be trained`,162,73,10649230,35],["A870BA4E-6243-4C93-B823-BDF69104A69A","Cleaning up",162,59,10649230,30],["9BFCB2C3-78B9-4982-8501-2BFF113D4207",`What matters to 
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
positive regard`,129,298,15916398,40],["23D5758E-178A-43BD-A82B-5D1F11CC1223","Alliance work",137,301,15916398,40],["7D0652E2-E579-47BC-8FB9-E1FBA3539A3F","Conflict splits",112,275,15916398,40],["5D8415B8-AD5B-44AE-804C-9A2A62B177F8","Path of the Heart",112.5,81,7606813,70],["025E5CB8-BF2F-46EC-A170-4F80BD2FCA54","Anxiety splits",119,275,15916398,40],["C120D32F-4E27-481A-97F9-9B62BB394DF9","Evocative unfolding",128,279,15916398,40],["94D5EB98-E41E-4DD5-8B8D-06598E285B4E","Trauma retelling",137,282,15916398,40],["2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB","Self-soothing",143,293,15916398,40],["4F5D4105-E8C7-4F54-97E6-F9549BC75D4F","\u2190 back and forth between \u2192",91,3,15916398,30],["65FB0CCF-F7C4-4159-9D6D-0F929AB12136","\u2190 back and forth between \u2192",103,10,15916398,30],["CF403F63-27E2-4424-B4F3-5D6CB1252881","",180,0,7606813,70]],i6=[["8BD3708E-8E3D-44B8-9E92-1050FA7987E5","D4724AD1-EECD-4975-920C-CDAD71AA53C3","0027E01B-C40A-49F0-9833-30244700C39E"],["D4724AD1-EECD-4975-920C-CDAD71AA53C3","0027E01B-C40A-49F0-9833-30244700C39E"],["0027E01B-C40A-49F0-9833-30244700C39E"],["66F19982-732D-4744-AF06-F1F8A68D898B","287B1377-9E86-42B2-99F1-EBBEA971AB08","B5027C8B-D476-49B0-A713-ACC447159AE1"],["287B1377-9E86-42B2-99F1-EBBEA971AB08","B5027C8B-D476-49B0-A713-ACC447159AE1"],["B5027C8B-D476-49B0-A713-ACC447159AE1"],["4A481D1E-5DB6-4ABB-B9D0-8164F41393F9","876BC8AC-4013-448E-9ACA-A82DA031E09C"],["876BC8AC-4013-448E-9ACA-A82DA031E09C","008ADA1B-1D52-4F68-AB43-97D070D7774C"],["008ADA1B-1D52-4F68-AB43-97D070D7774C","3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A"],["3C87D468-FC43-4E9C-9CEE-0EFA0B63EA7A"],["D131CF5B-A895-4212-A4D4-A7E976CF5DA6","90212AAB-4CFE-4FDF-850A-7E6141F727AE"],["90212AAB-4CFE-4FDF-850A-7E6141F727AE","611A4954-9E7D-4D25-AD7D-E1FAB38482F5","5C63879D-74A6-458B-8193-AFA06A62F794","2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5","963CA1BA-9539-4089-96AB-EB0E78602390","EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F","2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7","C978C527-2523-4078-8B16-523DF8553FD5"],["611A4954-9E7D-4D25-AD7D-E1FAB38482F5"],["5C63879D-74A6-458B-8193-AFA06A62F794"],["2A36743D-9E95-4B9D-A8EB-6B4B11F20AB5"],["963CA1BA-9539-4089-96AB-EB0E78602390"],["EEA100C2-4D71-40C8-B70B-FE6A6D01D33B","982A6AFF-D536-4504-B63A-EC42A2712432"],["982A6AFF-D536-4504-B63A-EC42A2712432","F1EB56D4-15AE-4837-A070-40550E1262C7","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75","D456FA2C-65F4-40D2-AC84-4C7E2266BA84"],["F1EB56D4-15AE-4837-A070-40550E1262C7","506E723E-071E-4694-80AD-06BBD0681E26","2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F"],["506E723E-071E-4694-80AD-06BBD0681E26","0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","6BDD61FD-3F46-453B-8714-64AF81BCE3F9","A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["0DA43E60-8DB6-4401-A1B1-F3BC1B5EA856","3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["6BDD61FD-3F46-453B-8714-64AF81BCE3F9","A81C54C1-D640-4297-AFA9-346A25B8132E","9E19FF41-5144-4745-9C0B-A99858302CDE","050308DE-F371-436D-AE9F-B0D5B7F8C282"],["A81C54C1-D640-4297-AFA9-346A25B8132E"],["9E19FF41-5144-4745-9C0B-A99858302CDE"],["050308DE-F371-436D-AE9F-B0D5B7F8C282"],["A7D7AE08-AFD8-49B2-A964-2098C4ACEAF4","0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD"],["0EC034DC-AFC0-4C17-84CF-0DD0991AFDAD","302B64FD-4E04-4823-8E13-C7F2FAA4E7C9"],["302B64FD-4E04-4823-8E13-C7F2FAA4E7C9"],["2EF6A6A1-AC8E-4A00-BC75-F36E9AA0A60F"],["3F0021AE-02A1-44B8-AE19-11C0D2A4FE75"],["D456FA2C-65F4-40D2-AC84-4C7E2266BA84","B90D2293-D457-4567-8102-363F70D95781"],["B90D2293-D457-4567-8102-363F70D95781","2930997B-A726-473E-B6E9-333C2732271F","2B64F02A-BEAA-4403-8380-A8B2614D5F90","4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7"],["2930997B-A726-473E-B6E9-333C2732271F"],["2B64F02A-BEAA-4403-8380-A8B2614D5F90"],["4D70D48E-D8D1-45C6-8E15-C0837ABBC1D7","EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6"],["EFDE4F51-B2DD-443A-9C35-39F5DA1C1DB6","FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8","23979ADC-AD3F-4447-BF76-224A807C2144"],["FBC53F23-9EA7-4B55-B6D4-BC9C456FD9B8"],["23979ADC-AD3F-4447-BF76-224A807C2144"],["8F0D0BF3-BF3C-4E2B-9E1E-B16E615EFF0F"],["2A4B9CAB-EEC1-48A8-9BE6-5A519210D7A7"],["C978C527-2523-4078-8B16-523DF8553FD5"],["F47603CA-44A7-4009-B07B-29DFA540729D","87B9AFEC-9F64-4748-87F8-F64F2B31FC29","0EF99714-0619-45EC-A71D-B4F01B6211DC"],["87B9AFEC-9F64-4748-87F8-F64F2B31FC29","FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07"],["FEB31ADB-CF1C-45B6-9522-C37B4F4C1E07","EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C"],["EF7C61DB-A84C-4D0A-941F-B5EF2D64F28C","0EF99714-0619-45EC-A71D-B4F01B6211DC"],["0EF99714-0619-45EC-A71D-B4F01B6211DC","7AFE8322-410C-44FA-8223-F6080F45359C","89ED6168-2517-4EF9-A5D6-3635A0C80BDC","B20BB587-FDB1-45B4-9F6B-04D75DB45484"],["7AFE8322-410C-44FA-8223-F6080F45359C","236FD67F-CD44-4B75-96AD-B16FA578E708","C9DCCC19-CD84-427B-9234-09050646BCD3","10D1D640-DE4C-4334-B08F-A4716D198E5F"],["236FD67F-CD44-4B75-96AD-B16FA578E708"],["C9DCCC19-CD84-427B-9234-09050646BCD3"],["10D1D640-DE4C-4334-B08F-A4716D198E5F"],["89ED6168-2517-4EF9-A5D6-3635A0C80BDC","074931F9-D5F1-401B-ABE0-1F26BA921E1F","E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B"],["074931F9-D5F1-401B-ABE0-1F26BA921E1F"],["E0E6199E-B9CC-4E3B-924F-4F481CEB6B8B","9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD"],["9E5C67A2-894D-4AB1-AF81-E62C2BF4C1AD","39A86FA9-4CDF-4DD2-8AB6-78A36AC75762"],["39A86FA9-4CDF-4DD2-8AB6-78A36AC75762","60046B15-D09E-4F1F-9BC0-BA3900E29EB9"],["60046B15-D09E-4F1F-9BC0-BA3900E29EB9","263D9AEE-6F33-4D35-B945-CE35173E2F11"],["263D9AEE-6F33-4D35-B945-CE35173E2F11","3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","68B6E135-509A-4064-9FF9-DE55C3B66A8E","6A92592D-70EE-451D-941A-AD8F8435EF6E","DC5F27E6-E594-4651-A151-4F70145EDFD5","092BED79-8510-4E20-9040-0BF73C433EB0","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["3A45A8B4-3FEE-48C4-AB56-730C2284B9F0","37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","9CE480B4-FB41-45F1-ABF5-D956A5526141"],["37A0AEC4-634C-4BF4-A14B-7B6E25172BBC","4572B437-5182-4EBE-A383-F76440484F8E","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["4572B437-5182-4EBE-A383-F76440484F8E","9BA80071-89E9-400F-89CA-53CA700FA703"],["9BA80071-89E9-400F-89CA-53CA700FA703","450F8534-2F59-4A8E-BA92-D417FD0FE000","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C"],["450F8534-2F59-4A8E-BA92-D417FD0FE000","951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","C2B220C0-B7D4-432B-9ADC-1E40F1A66E25"],["951EBA46-9D4B-453F-B0B6-C03CFA9BD6C0","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["C2B220C0-B7D4-432B-9ADC-1E40F1A66E25","B470B5D1-31ED-4F91-A94D-6A94CF45E744","95A61B65-7A40-42FA-8622-D7A0B736BA9C","0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["B470B5D1-31ED-4F91-A94D-6A94CF45E744"],["95A61B65-7A40-42FA-8622-D7A0B736BA9C"],["0CEDFFCF-0C8D-4705-B40C-439631CCD3E1"],["B8BA585E-D985-44A9-A8E9-6BC1E3EA3731","AA38CD3C-7D47-4CD3-956C-5EE5C285E408","16C1A9C0-30BF-441E-8DA4-3216C0A42C51","807EE50B-B4E4-42B7-B1B4-10EBB38C1299","9CE480B4-FB41-45F1-ABF5-D956A5526141"],["AA38CD3C-7D47-4CD3-956C-5EE5C285E408"],["16C1A9C0-30BF-441E-8DA4-3216C0A42C51"],["4265E048-CDF8-4B44-836C-38549C965725"],["807EE50B-B4E4-42B7-B1B4-10EBB38C1299","B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","A35D6C5D-B56F-416F-B337-41FB9E923AE0"],["B5E8EA63-9C7A-4CAD-8B29-1EC4ACDF5F63","B07DBBCA-2123-4D55-828C-6931A999128B"],["B07DBBCA-2123-4D55-828C-6931A999128B","C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8","794FB1D5-42CF-496B-929F-9568976B58FF","12872E37-D9BC-4CDD-BB7E-E09FD46D993A","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["C6BACFDA-45F3-4BD7-ACE4-3720C8E6E7D8"],["794FB1D5-42CF-496B-929F-9568976B58FF"],["12872E37-D9BC-4CDD-BB7E-E09FD46D993A","2875511F-F91A-4807-9839-4B7153B23143","F7A69942-1F8A-42CC-A8C3-8DF26E439289"],["2875511F-F91A-4807-9839-4B7153B23143","F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","334445AA-FC20-48D6-9A7D-2558857C2346","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["F9E35865-1D97-4667-B3FE-A0EDB4D37B8A","3E8EDBA9-59E1-4835-8343-4AA9FF799D49","43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3"],["3E8EDBA9-59E1-4835-8343-4AA9FF799D49","64077339-5087-4CBD-A706-C1AA35E8AC8B","FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B"],["64077339-5087-4CBD-A706-C1AA35E8AC8B","9E801875-A714-49E5-969A-D9A5E5497D18","334445AA-FC20-48D6-9A7D-2558857C2346"],["9E801875-A714-49E5-969A-D9A5E5497D18","31475508-739B-4966-ADC9-D8EBCE5FE3DB"],["31475508-739B-4966-ADC9-D8EBCE5FE3DB","A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E"],["A0E9CFBE-CFD6-47E2-8D78-15E5382BBC1E"],["FBC40F7A-8C27-43BE-9E80-2E330B1EAE7B","9A853604-4CB0-4B1B-98E1-E4D95626433A","53296584-40BE-4F83-96D3-B77540245AC2"],["9A853604-4CB0-4B1B-98E1-E4D95626433A","93C64795-A33C-4578-9694-B8B0FFE287AE"],["93C64795-A33C-4578-9694-B8B0FFE287AE","73E6253F-D36B-45B8-ABF9-A72432F5F576","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["73E6253F-D36B-45B8-ABF9-A72432F5F576","D5F25680-4FED-4B74-A5D5-1B15A8C8A580","C5096451-E5CF-4498-AF7A-E97C3C8197F9"],["D5F25680-4FED-4B74-A5D5-1B15A8C8A580"],["C5096451-E5CF-4498-AF7A-E97C3C8197F9"],["53296584-40BE-4F83-96D3-B77540245AC2","EE9D175C-0953-4B73-9B31-5C7AD0C50288","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["EE9D175C-0953-4B73-9B31-5C7AD0C50288","5A058F3F-7A05-44E2-8417-7B99A2437742","42B4C435-0661-46DB-8D8B-AB2AA00D601B","64BC8F62-AA83-4E65-B1A3-D982DE8A86C1"],["5A058F3F-7A05-44E2-8417-7B99A2437742","42B4C435-0661-46DB-8D8B-AB2AA00D601B","87EFBBA1-F6E2-4A35-8897-A73210A18318","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["42B4C435-0661-46DB-8D8B-AB2AA00D601B","64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["64BC8F62-AA83-4E65-B1A3-D982DE8A86C1","FC6818C0-13A9-44E2-8A38-7C4D4FB8827B","8873A022-151A-41EA-B380-2284DEB82A22"],["87EFBBA1-F6E2-4A35-8897-A73210A18318","20790E3B-9D36-40B2-82CB-56322AA09DE7"],["FC6818C0-13A9-44E2-8A38-7C4D4FB8827B"],["8873A022-151A-41EA-B380-2284DEB82A22"],["43F70C8C-15B6-4EF0-81F4-E26FF4FB8DC3","D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9"],["D8BD31CF-36A0-45FD-8EFD-A5A1428C03E9","9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91"],["9CC41D5D-A392-4C0B-8FA9-B455CAF9AF91"],["334445AA-FC20-48D6-9A7D-2558857C2346","074F7C7B-C390-4328-A205-B73143806FFA"],["074F7C7B-C390-4328-A205-B73143806FFA","9E66D7AE-5825-4691-BADB-FC7A75F7B29D","2C809F14-A1A9-4178-B236-FA6408CD789D","7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6"],["9E66D7AE-5825-4691-BADB-FC7A75F7B29D"],["2C809F14-A1A9-4178-B236-FA6408CD789D"],["F7A69942-1F8A-42CC-A8C3-8DF26E439289","5AE32B80-01A1-4314-9A23-453A397A2599","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","68B6E135-509A-4064-9FF9-DE55C3B66A8E"],["5AE32B80-01A1-4314-9A23-453A397A2599","72A32148-45A5-41A7-A836-0CE959AF38D4","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","6A92592D-70EE-451D-941A-AD8F8435EF6E"],["72A32148-45A5-41A7-A836-0CE959AF38D4","3F0C901E-76B2-463D-B17A-8078CA2E1C91","E27CC807-EB70-45C4-84B3-DDF1F8AADB00","1E34F972-7322-4F63-A271-2BC8A5241BB8","76AB6EF8-AEF6-41D3-9576-2FE8D14F462B","5BEDE28D-38C4-4D03-B4C6-2C74ECD89078","D7868612-7C4F-49F8-BCAA-B03E2BCEF450","820F18C3-7140-4923-9D3A-2CD81A26B702","DC5F27E6-E594-4651-A151-4F70145EDFD5"],["3F0C901E-76B2-463D-B17A-8078CA2E1C91"],["E27CC807-EB70-45C4-84B3-DDF1F8AADB00"],["1E34F972-7322-4F63-A271-2BC8A5241BB8"],["76AB6EF8-AEF6-41D3-9576-2FE8D14F462B"],["5BEDE28D-38C4-4D03-B4C6-2C74ECD89078"],["D7868612-7C4F-49F8-BCAA-B03E2BCEF450"],["820F18C3-7140-4923-9D3A-2CD81A26B702"],["7BD9A4A4-29F0-46A8-8D8E-FAD18F242DB6","EB83C866-FF54-449B-A65C-24ECDE2820C1","3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58"],["EB83C866-FF54-449B-A65C-24ECDE2820C1"],["3D5EC2BE-F6E7-4BC2-A093-B8ABFF663C58"],["A35D6C5D-B56F-416F-B337-41FB9E923AE0","EDCAFFF6-FD78-40E0-B719-97569DCD8819"],["EDCAFFF6-FD78-40E0-B719-97569DCD8819","46CBB5AE-79D5-4808-A400-4B804DA91E12","E55861C5-E9D1-4B9A-956B-DC53B1C0E01E","8405A4E1-F7F9-4016-86B8-2E5C98520036","8573618D-34C1-481C-A217-71AB05C7C4D7","B9839052-6809-4E31-8792-FF4DF8C9FC48"],["46CBB5AE-79D5-4808-A400-4B804DA91E12","8D82CC00-C9F5-4B9E-B256-A879D4623B3C","9BFCB2C3-78B9-4982-8501-2BFF113D4207"],["8D82CC00-C9F5-4B9E-B256-A879D4623B3C","35476F95-E324-40D2-B224-A5E27568028C","9BFCB2C3-78B9-4982-8501-2BFF113D4207"],["35476F95-E324-40D2-B224-A5E27568028C","4D1CEB04-6987-4C58-93B0-57DBB0914867","7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8","5946ACA1-B182-4776-BAC0-5EC43E0480C6","05C8F42F-1F73-443B-B461-A3FFE6867199","4C0B70B2-C4EC-4716-A08C-220E856D5B4A"],["4D1CEB04-6987-4C58-93B0-57DBB0914867","0EF9450D-3CB7-4D13-BCFB-49088E87F374"],["0EF9450D-3CB7-4D13-BCFB-49088E87F374","80130A99-E12B-459A-B43D-1CE8BB3B1EF2"],["80130A99-E12B-459A-B43D-1CE8BB3B1EF2","2095179D-0AC4-4378-8E6F-8F71E2793FAD","D6B5FE51-C8D9-42EB-B0BE-07B09B51776C"],["2095179D-0AC4-4378-8E6F-8F71E2793FAD","AE242003-1C0A-40BF-AEA2-567E61901171","F3695B21-1EAA-404B-9239-0767DA0BC90C","B7A263AD-5457-4712-A089-03B24D041629","B4399091-3D0A-472B-A40C-BC8CDD097E7F","20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB"],["AE242003-1C0A-40BF-AEA2-567E61901171"],["F3695B21-1EAA-404B-9239-0767DA0BC90C"],["B7A263AD-5457-4712-A089-03B24D041629"],["B4399091-3D0A-472B-A40C-BC8CDD097E7F"],["20ADE73B-D8CA-4CF8-ABA2-4D0A52F1CAAB"],["D6B5FE51-C8D9-42EB-B0BE-07B09B51776C","6473A93C-A4A4-41D5-9765-D58B3F8A57EA","0A57B7F6-E875-485D-98F2-66458F5FBC6B","19DB1035-B51E-4F0A-8F97-888375D12E8F","34C06752-B7AD-461D-A5E9-B29CAE227645","83D9EEC0-3314-4BD5-826E-F1ADDA1492EA","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["6473A93C-A4A4-41D5-9765-D58B3F8A57EA"],["0A57B7F6-E875-485D-98F2-66458F5FBC6B"],["19DB1035-B51E-4F0A-8F97-888375D12E8F"],["34C06752-B7AD-461D-A5E9-B29CAE227645"],["83D9EEC0-3314-4BD5-826E-F1ADDA1492EA"],["1E7C0EB1-1DDE-4044-A8B7-E4540487DB1C","E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["E28DBBC9-DECF-4F9E-BFF7-6366EBCC51D4","DA6F224D-BC2D-47BF-91C5-9538BF062D81","14BA8BEB-FA35-44B7-9DE3-A1503614069D"],["DA6F224D-BC2D-47BF-91C5-9538BF062D81","603F93B5-AA5A-49C2-8AEE-440DA485BA40","F26DDAD3-74C1-48A8-9488-8BAB580947E7","05CF2077-5B2D-43E7-92AC-232082EA7F8C","DEA78281-438E-4CB6-ADCE-25DC85D9FF37"],["603F93B5-AA5A-49C2-8AEE-440DA485BA40"],["F26DDAD3-74C1-48A8-9488-8BAB580947E7"],["05CF2077-5B2D-43E7-92AC-232082EA7F8C","F0AA6E16-8A46-43FA-B435-942FFF734B06","BEA84E38-CF01-4A16-941B-F26EEE3E6D88","EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3","C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF"],["F0AA6E16-8A46-43FA-B435-942FFF734B06"],["BEA84E38-CF01-4A16-941B-F26EEE3E6D88"],["EB0FBD7E-7BA3-43E7-AB1C-2AC2DBFAC7F3"],["C07EE1B5-5DC2-4E9E-AD6C-A8550A7991FF"],["DEA78281-438E-4CB6-ADCE-25DC85D9FF37","202B8B0D-13DA-459A-9D5E-ED5DD40D30E4"],["202B8B0D-13DA-459A-9D5E-ED5DD40D30E4","0AA203B9-8B52-4412-B32D-D412F894D779","2BAF7986-984E-4937-BA03-E5CBAA234AEF","1D823800-DD7A-4B6F-94EA-517D4DE9876B"],["0AA203B9-8B52-4412-B32D-D412F894D779","6A20558B-3A35-4D14-8EBE-3C5DF4F02868"],["6A20558B-3A35-4D14-8EBE-3C5DF4F02868","96786F52-EB9D-42BB-B854-457841A162BA","28106D6F-9E60-4579-A457-B2F4DB781D6D","D81C6E33-ED3A-45ED-9567-78EC22F9A6C7","8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B","14BA8BEB-FA35-44B7-9DE3-A1503614069D"],["96786F52-EB9D-42BB-B854-457841A162BA"],["28106D6F-9E60-4579-A457-B2F4DB781D6D"],["D81C6E33-ED3A-45ED-9567-78EC22F9A6C7"],["8CFD3A14-106B-4D63-9B2B-1CA46A8CA16B"],["2BAF7986-984E-4937-BA03-E5CBAA234AEF","C0074FCF-7AB4-4781-BC26-3812FBA61015","CB62D122-2342-4D33-B98D-EE3BD70B6538","64192F80-785C-4B14-AF81-987193E41085","83BC3254-7B62-4D9C-BC20-192D2D442466","4788E206-DE47-48FA-8DC4-326274991F8D","111EBFA8-E400-4984-A638-63120DDC1590"],["C0074FCF-7AB4-4781-BC26-3812FBA61015"],["CB62D122-2342-4D33-B98D-EE3BD70B6538"],["64192F80-785C-4B14-AF81-987193E41085"],["83BC3254-7B62-4D9C-BC20-192D2D442466"],["4788E206-DE47-48FA-8DC4-326274991F8D"],["111EBFA8-E400-4984-A638-63120DDC1590"],["1D823800-DD7A-4B6F-94EA-517D4DE9876B","C0993BB8-9C64-4F7A-A673-289EA2A33D0D","4AF3AF2F-5D76-4620-911E-54398F84F288","672E2CBD-7421-4E94-9728-95353BCD772E"],["C0993BB8-9C64-4F7A-A673-289EA2A33D0D","00E891B6-75E2-43B7-97B4-62F6DD69B15B"],["00E891B6-75E2-43B7-97B4-62F6DD69B15B","B477D774-01E4-4F6A-93B1-111E699FFE75","E2D52070-A83C-4D48-A218-BB3DC7BEAF21","EBCF0E75-DA1D-4533-BEEA-73657C4588AF","4AF3AF2F-5D76-4620-911E-54398F84F288","83BA614D-5560-48B0-8377-217CF04E01FC"],["B477D774-01E4-4F6A-93B1-111E699FFE75"],["E2D52070-A83C-4D48-A218-BB3DC7BEAF21"],["EBCF0E75-DA1D-4533-BEEA-73657C4588AF"],["4AF3AF2F-5D76-4620-911E-54398F84F288"],["672E2CBD-7421-4E94-9728-95353BCD772E"],["14BA8BEB-FA35-44B7-9DE3-A1503614069D","1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","E8F9F0EB-2B89-4D4C-901E-A029C0211A93","268F9754-9375-4E1F-B752-233A8F83F592","B20BB587-FDB1-45B4-9F6B-04D75DB45484"],["1EABAD2F-1D1A-4124-A324-4EFAD6DDF176","A478FC19-7AC1-4480-A9C9-93AD4C925970","61282C0C-C654-4B5D-B2F9-ECF698B16489","9FC8F28B-4B52-4BFC-9349-4B5271FCDD84"],["A478FC19-7AC1-4480-A9C9-93AD4C925970","6E92A01E-0E8D-494E-8249-EF0EF0D22987","349EFC6D-D96C-4E61-A839-93D31BF698B5","ED71676A-652A-400A-AAEB-70A6B980A6F2"],["6E92A01E-0E8D-494E-8249-EF0EF0D22987"],["349EFC6D-D96C-4E61-A839-93D31BF698B5"],["ED71676A-652A-400A-AAEB-70A6B980A6F2"],["61282C0C-C654-4B5D-B2F9-ECF698B16489"],["9FC8F28B-4B52-4BFC-9349-4B5271FCDD84"],["E8F9F0EB-2B89-4D4C-901E-A029C0211A93","CCBD9962-2FF7-4C39-97B9-D93FA4044BD3","D0E50499-8C3F-4818-BBAA-FEB433FC1704","BC583511-0DA5-4F1E-B699-D72CB449DD00","C4B7A8B7-5171-4873-B269-0A0582CA2084","FC88FDFD-AE27-4F76-938D-6FE581E65D08","30F3B081-5F90-4F13-BC8D-BBC7293CEC04","D49F0D1E-5DD6-4147-88E2-604F7E4A3566"],["CCBD9962-2FF7-4C39-97B9-D93FA4044BD3"],["D0E50499-8C3F-4818-BBAA-FEB433FC1704"],["BC583511-0DA5-4F1E-B699-D72CB449DD00"],["C4B7A8B7-5171-4873-B269-0A0582CA2084"],["FC88FDFD-AE27-4F76-938D-6FE581E65D08"],["30F3B081-5F90-4F13-BC8D-BBC7293CEC04"],["D49F0D1E-5DD6-4147-88E2-604F7E4A3566"],["268F9754-9375-4E1F-B752-233A8F83F592","B46F4E38-26DA-4388-91DA-32731D7B44A1","21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F","A6BA6799-B325-453E-B4D1-BCD71CF12705"],["B46F4E38-26DA-4388-91DA-32731D7B44A1","6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0","8AABE820-1F0B-4DDD-BFF2-9177B2A47112","128A73FA-B982-4A3E-B9C8-4AFBAB70AB56"],["128A73FA-B982-4A3E-B9C8-4AFBAB70AB56"],["6DDD2CD3-CE4A-492C-A6BF-8044A902E5E0"],["8AABE820-1F0B-4DDD-BFF2-9177B2A47112"],["21DDAAEC-A832-4BB4-9A82-D2F10FCAA66F"],["A6BA6799-B325-453E-B4D1-BCD71CF12705","FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1","D358D3A2-957C-470B-BC5F-A71A7622AE07","55EF8116-598E-4168-ADBC-9248DB79A821"],["FEABFE95-869D-40F9-9D0B-5EE5BA3D85E1"],["D358D3A2-957C-470B-BC5F-A71A7622AE07"],["55EF8116-598E-4168-ADBC-9248DB79A821"],["CBDECA18-D9A1-4FDE-84FD-DDB8849710A3","A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["A5DD6CEA-4DFA-4DDB-B586-FE8629D274B1","F05326DF-FA0C-4619-8A75-0411CB1CB2F9"],["F05326DF-FA0C-4619-8A75-0411CB1CB2F9","9EAF3484-3F2C-415B-8067-B50A3FA1B974"],["9EAF3484-3F2C-415B-8067-B50A3FA1B974","ADBA0E07-67F4-47EC-B776-EE198BCA1A53"],["ADBA0E07-67F4-47EC-B776-EE198BCA1A53","75FF467B-7F2F-4EEC-ADC9-2D64EE46D692"],["75FF467B-7F2F-4EEC-ADC9-2D64EE46D692","03593653-145D-4B52-9873-D90B412C8468"],["03593653-145D-4B52-9873-D90B412C8468","4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953"],["4F429C0B-B3D5-49B9-AC7B-BE0B2BAA0953"],["B1212500-7C71-4B0B-B979-C8A5E93B544C","D7191BF4-96AD-46A9-89F8-B015FD27C991","5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["D7191BF4-96AD-46A9-89F8-B015FD27C991","F63DCD53-F24F-4AE7-84C0-61419A5D6E68"],["F63DCD53-F24F-4AE7-84C0-61419A5D6E68","6FD89C72-5D89-4A96-B643-4BDDDEC450AC"],["6FD89C72-5D89-4A96-B643-4BDDDEC450AC","28B608E4-AED5-4042-977B-B32908F4DC0F"],["28B608E4-AED5-4042-977B-B32908F4DC0F","04FEF0CF-A123-4DB2-A9CC-72E134399258"],["04FEF0CF-A123-4DB2-A9CC-72E134399258","E78076C8-224D-4606-81AD-7DF62AE1B946"],["E78076C8-224D-4606-81AD-7DF62AE1B946","6D9D49EF-63D9-441E-865B-80CFE99B3E48"],["6D9D49EF-63D9-441E-865B-80CFE99B3E48","E0E57B88-D092-45E3-93DE-F47199063BEA"],["E0E57B88-D092-45E3-93DE-F47199063BEA","1F0628F7-D965-4529-8228-AA53C73527B2"],["1F0628F7-D965-4529-8228-AA53C73527B2","5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B"],["5A3B2B58-7D59-4EA8-BA25-EE9243C1AB8B","EC74E906-1F03-4570-A640-5E95985106E8"],["EC74E906-1F03-4570-A640-5E95985106E8"],["7F7F7458-6893-4CAE-A35A-78DCBA2DF0A8"],["5946ACA1-B182-4776-BAC0-5EC43E0480C6"],["05C8F42F-1F73-443B-B461-A3FFE6867199","E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0"],["E8C9F6D8-E4E3-4764-9449-4AC760B4EAA0"],["4C0B70B2-C4EC-4716-A08C-220E856D5B4A","A870BA4E-6243-4C93-B823-BDF69104A69A"],["A870BA4E-6243-4C93-B823-BDF69104A69A"],["9BFCB2C3-78B9-4982-8501-2BFF113D4207","2C1FEC64-B01F-4D90-93AF-4F17977F3E05"],["2C1FEC64-B01F-4D90-93AF-4F17977F3E05","27D920A3-4748-497F-92C3-0CEAE399325B","FF0DE3EB-BA66-4B54-9700-1075754A5EB3","53CADF73-2F2C-4BCC-8748-842EE8177A85","5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B","8A3E20D3-00BC-47E5-AC05-E717C6A803C6"],["27D920A3-4748-497F-92C3-0CEAE399325B","3DB4BB32-A030-449C-B131-424A2FD3A651"],["3DB4BB32-A030-449C-B131-424A2FD3A651","FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D"],["FB0B3D0C-9C10-4533-924E-96F0ACC2BB2D","744A07BE-0872-47C6-B69E-6FD2A3E8EC1B","13BD4AA3-E5C9-4A13-A702-70244A2B81AC"],["744A07BE-0872-47C6-B69E-6FD2A3E8EC1B"],["13BD4AA3-E5C9-4A13-A702-70244A2B81AC","6940ABE5-F16A-451E-9986-1853902A8FAA","475EAF65-F5DA-4D50-AA66-64CF5305CBC9","A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","4D115C88-FC8E-4544-AC27-0B775B126D44"],["6940ABE5-F16A-451E-9986-1853902A8FAA","2657C9EE-BFA1-43FA-BB34-1A624A4E5237","228A6803-C3D9-420B-A083-476A5B6FE927"],["2657C9EE-BFA1-43FA-BB34-1A624A4E5237"],["228A6803-C3D9-420B-A083-476A5B6FE927","F095128A-1A37-4D3C-98C5-FAE6E3F9E808"],["F095128A-1A37-4D3C-98C5-FAE6E3F9E808"],["475EAF65-F5DA-4D50-AA66-64CF5305CBC9","39717030-47DE-4D14-8D3B-9D454BE3AF3B"],["39717030-47DE-4D14-8D3B-9D454BE3AF3B"],["A5D7A8C8-3B1D-44A4-AA31-4B1602B10252","08A7BDCA-0161-40B1-9F74-EF7E09C1BE13","8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["08A7BDCA-0161-40B1-9F74-EF7E09C1BE13","8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["8DFECF54-6362-48C2-84A0-B9A79FD7371A"],["4D115C88-FC8E-4544-AC27-0B775B126D44","4D115C88-FC8E-4544-AC27-0B775B126D44","84C0342B-29BC-4E8A-A39D-0D638491312E","F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["84C0342B-29BC-4E8A-A39D-0D638491312E","F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["F0CABC11-FB43-49D3-B32C-F6AC2F728BEF"],["FF0DE3EB-BA66-4B54-9700-1075754A5EB3"],["53CADF73-2F2C-4BCC-8748-842EE8177A85","D733DA5C-E0BC-4EAE-BD64-92B116E15988"],["D733DA5C-E0BC-4EAE-BD64-92B116E15988"],["5C54BDDE-E5AB-472E-BB3E-CC33CEDB5E2B","CC9D819E-DC87-4E17-97B4-AADC851E9E8E"],["CC9D819E-DC87-4E17-97B4-AADC851E9E8E"],["8A3E20D3-00BC-47E5-AC05-E717C6A803C6","83BA614D-5560-48B0-8377-217CF04E01FC"],["83BA614D-5560-48B0-8377-217CF04E01FC"],["E55861C5-E9D1-4B9A-956B-DC53B1C0E01E"],["8405A4E1-F7F9-4016-86B8-2E5C98520036"],["8573618D-34C1-481C-A217-71AB05C7C4D7","F05FC454-9C67-4E53-AAC4-A288D7E0E4E2"],["F05FC454-9C67-4E53-AAC4-A288D7E0E4E2"],["B9839052-6809-4E31-8792-FF4DF8C9FC48","38B0E475-2D54-4818-ABC6-E353229FDFF2"],["38B0E475-2D54-4818-ABC6-E353229FDFF2"],["68B6E135-509A-4064-9FF9-DE55C3B66A8E"],["6A92592D-70EE-451D-941A-AD8F8435EF6E"],["DC5F27E6-E594-4651-A151-4F70145EDFD5"],["092BED79-8510-4E20-9040-0BF73C433EB0","F1D5FF04-CA73-47D3-87C6-41C6BA8F6708","ACF82BBE-F34C-4E20-B18E-08F28B3ABA12","B6246F44-0855-4817-9D0D-D397E9DB7442","050CF590-16D7-48A8-9656-E58FD0B6E8BF","1EE48F2F-650A-413A-8F77-720A641BA416","C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA"],["F1D5FF04-CA73-47D3-87C6-41C6BA8F6708"],["ACF82BBE-F34C-4E20-B18E-08F28B3ABA12"],["B6246F44-0855-4817-9D0D-D397E9DB7442"],["050CF590-16D7-48A8-9656-E58FD0B6E8BF"],["1EE48F2F-650A-413A-8F77-720A641BA416"],["C2DF7137-7E37-4EAD-8AF9-BDCF24C7A5BA"],["20790E3B-9D36-40B2-82CB-56322AA09DE7","28763A09-FA38-43D2-A7C3-52E15D20F5B9"],["28763A09-FA38-43D2-A7C3-52E15D20F5B9"],["B20BB587-FDB1-45B4-9F6B-04D75DB45484","9C1A33F2-FA28-4FD0-B3A3-011939BF112E","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["9C1A33F2-FA28-4FD0-B3A3-011939BF112E","0B0E75E0-8E66-4B96-8D18-05B388B8166B","39C8C744-9E33-4FBD-B64F-4392BB1D7D43","F3CDF5ED-FE39-4306-9BC7-732E7252919B","C4AE0F47-95C9-42BF-875A-9DF1743AAFB2","EE895C76-B04A-4587-9970-5A6CBA56069C"],["0B0E75E0-8E66-4B96-8D18-05B388B8166B"],["39C8C744-9E33-4FBD-B64F-4392BB1D7D43"],["F3CDF5ED-FE39-4306-9BC7-732E7252919B"],["C4AE0F47-95C9-42BF-875A-9DF1743AAFB2","33DB61E6-CD56-4F49-98BD-5397EB788805","6C32C072-E56E-40F0-AC39-7909FC465612","64768881-AED3-403E-92A8-E4A3CBB39100"],["33DB61E6-CD56-4F49-98BD-5397EB788805","554920A7-A50D-44F4-8448-DD747BBB57DA"],["554920A7-A50D-44F4-8448-DD747BBB57DA","803C7EA0-EF36-42AE-B810-7620C3509FEA","21CBC21A-6D6E-424D-B1D0-DCCD5425A05B","A9BA755A-FE4B-498E-9952-40214F02B8D6","6C32C072-E56E-40F0-AC39-7909FC465612","64768881-AED3-403E-92A8-E4A3CBB39100","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["803C7EA0-EF36-42AE-B810-7620C3509FEA"],["21CBC21A-6D6E-424D-B1D0-DCCD5425A05B"],["A9BA755A-FE4B-498E-9952-40214F02B8D6","5503BDDB-9985-44D9-B9A4-F731513F6903","FEC6325D-1E5F-4790-A841-63709B264A8D","82F1F09B-EBCB-4F04-BDF1-4991F27E3724"],["82F1F09B-EBCB-4F04-BDF1-4991F27E3724","82F1F09B-EBCB-4F04-BDF1-4991F27E3724"],["5503BDDB-9985-44D9-B9A4-F731513F6903","FEC6325D-1E5F-4790-A841-63709B264A8D"],["FEC6325D-1E5F-4790-A841-63709B264A8D","905689F0-5537-42CC-B864-9166DA60C470","D8049867-1FC0-4817-BD67-64A421349C65"],["905689F0-5537-42CC-B864-9166DA60C470"],["D8049867-1FC0-4817-BD67-64A421349C65","6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB","DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["6CAB2F87-C43C-4231-BD7A-AD9747EDCDCB"],["6C32C072-E56E-40F0-AC39-7909FC465612"],["64768881-AED3-403E-92A8-E4A3CBB39100"],["EE895C76-B04A-4587-9970-5A6CBA56069C"],["DE7F9890-14E7-433A-AD84-B0E18BE5BD79"],["95BBCB02-420D-4FD9-A9BA-A404D72B41D3"],["6A893E71-2F6B-4958-B917-5F145FA37CF5","3041389D-AD21-46F6-9721-2DD4E9FC1F65"],["3041389D-AD21-46F6-9721-2DD4E9FC1F65"],["CC97CAEF-3828-466E-B55A-BA85783CE034","4F5D4105-E8C7-4F54-97E6-F9549BC75D4F"],["0F8B3461-7B9D-4E1D-A392-A6DE782AE537"],["DEADD385-73FB-4EA3-AACC-13C6B453E9E6","CDC69285-DE4B-40DE-BDFB-73C750FA8CB4"],["CDC69285-DE4B-40DE-BDFB-73C750FA8CB4","EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95"],["EEF6AD45-1ABB-4D2E-BCA0-A3BE592FCE95","662B5EE1-6533-44B3-BC7A-2DF7708F1658"],["662B5EE1-6533-44B3-BC7A-2DF7708F1658"],["973015FD-576A-40F3-A86C-2E8EDA196B5F","29155A2F-FCBB-4347-90DE-E8D3F86A3FFA","E400970C-2383-40ED-90F4-793AFAD87E45","65FB0CCF-F7C4-4159-9D6D-0F929AB12136"],["29155A2F-FCBB-4347-90DE-E8D3F86A3FFA"],["E400970C-2383-40ED-90F4-793AFAD87E45","788AC673-A0A0-4E77-93EC-2A21B981D7A8"],["788AC673-A0A0-4E77-93EC-2A21B981D7A8","3C66F9F4-19C8-497C-AD5A-377F74970968"],["3C66F9F4-19C8-497C-AD5A-377F74970968","829B047D-0C32-4887-8A3B-690BED8B847B","DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["829B047D-0C32-4887-8A3B-690BED8B847B","DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["DFDD1307-4F65-4A71-AC89-9E7B8A3D22FB"],["88244D22-DAEF-4189-83EB-E7B5D5726E62"],["9CE480B4-FB41-45F1-ABF5-D956A5526141"],["F2CA7E5B-766D-48F0-941D-D4B1FD54C097"],["987F0FDD-0FAF-44FC-9DE7-7D88E32D801D","6423DD8B-C097-4C26-9917-D401ACA5FE91"],["6423DD8B-C097-4C26-9917-D401ACA5FE91","6345AAF7-5F22-49C1-8052-E28059BFFC3F"],["6345AAF7-5F22-49C1-8052-E28059BFFC3F","29EA91F8-0360-45F4-9E0A-511D80C51516","2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","04C21F20-915C-446A-902D-A8D5D7076C6F"],["29EA91F8-0360-45F4-9E0A-511D80C51516","4798DE69-2868-4EA6-84D8-E4D0CE7A90E8"],["4798DE69-2868-4EA6-84D8-E4D0CE7A90E8"],["2DAB65D3-0549-4831-9C7C-8EBCDDE96F2D","2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3"],["2CE0722A-9C86-40E1-ACB8-DBD6EDCF10E3"],["04C21F20-915C-446A-902D-A8D5D7076C6F","23D5758E-178A-43BD-A82B-5D1F11CC1223"],["23D5758E-178A-43BD-A82B-5D1F11CC1223"],["7D0652E2-E579-47BC-8FB9-E1FBA3539A3F"],["5D8415B8-AD5B-44AE-804C-9A2A62B177F8"],["025E5CB8-BF2F-46EC-A170-4F80BD2FCA54"],["C120D32F-4E27-481A-97F9-9B62BB394DF9"],["94D5EB98-E41E-4DD5-8B8D-06598E285B4E"],["2E8B960D-5F3B-4AB7-8A28-23D9FE4326DB"],["4F5D4105-E8C7-4F54-97E6-F9549BC75D4F"],["65FB0CCF-F7C4-4159-9D6D-0F929AB12136"]];function a4(i,e,t){let l=i*Math.PI/180,n=e*Math.PI/180-Math.PI,q=t*Math.sin(l)*Math.sin(n),s=t*Math.cos(l),a=t*Math.sin(l)*Math.cos(n);return{x:q,y:s,z:a}}function fi(i,e,t){let l=Math.acos(e/Math.sqrt(Math.pow(t,2)+Math.pow(i,2)+Math.pow(e,2))),n=Math.atan(i/t),q=!1,s=!1;t>0&&(q=!0),i>0&&(s=!0);let a=l/Math.PI*180,r=n/Math.PI*180+180;return q==!1&&s==!1&&(r-=180),q==!1&&s==!0&&(r+=180),{lat:a,lng:r}}const m7={type:"change"},s5={type:"start"},h7={type:"end"};class di extends y3{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:w3.ROTATE,MIDDLE:w3.DOLLY,RIGHT:w3.PAN},this.touches={ONE:T3.ROTATE,TWO:T3.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",h2),this._domElementKeyEvents=C},this.saveState=function(){l.target0.copy(l.target),l.position0.copy(l.object.position),l.zoom0=l.object.zoom},this.reset=function(){l.target.copy(l.target0),l.object.position.copy(l.position0),l.object.zoom=l.zoom0,l.object.updateProjectionMatrix(),l.dispatchEvent(m7),l.update(),q=n.NONE},this.update=function(){const C=new S,Y=new D3().setFromUnitVectors(e.up,new S(0,1,0)),t1=Y.clone().invert(),s1=new S,i1=new D3,p1=2*Math.PI;return function(){const P1=l.object.position;C.copy(P1).sub(l.target),C.applyQuaternion(Y),a.setFromVector3(C),l.autoRotate&&q===n.NONE&&M(z()),l.enableDamping?(a.theta+=r.theta*l.dampingFactor,a.phi+=r.phi*l.dampingFactor):(a.theta+=r.theta,a.phi+=r.phi);let b=l.minAzimuthAngle,n1=l.maxAzimuthAngle;return isFinite(b)&&isFinite(n1)&&(b<-Math.PI?b+=p1:b>Math.PI&&(b-=p1),n1<-Math.PI?n1+=p1:n1>Math.PI&&(n1-=p1),b<=n1?a.theta=Math.max(b,Math.min(n1,a.theta)):a.theta=a.theta>(b+n1)/2?Math.max(b,a.theta):Math.min(n1,a.theta)),a.phi=Math.max(l.minPolarAngle,Math.min(l.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=o,a.radius=Math.max(l.minDistance,Math.min(l.maxDistance,a.radius)),l.enableDamping===!0?l.target.addScaledVector(m,l.dampingFactor):l.target.add(m),C.setFromSpherical(a),C.applyQuaternion(t1),P1.copy(l.target).add(C),l.object.lookAt(l.target),l.enableDamping===!0?(r.theta*=1-l.dampingFactor,r.phi*=1-l.dampingFactor,m.multiplyScalar(1-l.dampingFactor)):(r.set(0,0,0),m.set(0,0,0)),o=1,h||s1.distanceToSquared(l.object.position)>s||8*(1-i1.dot(l.object.quaternion))>s?(l.dispatchEvent(m7),s1.copy(l.object.position),i1.copy(l.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){l.domElement.removeEventListener("contextmenu",U),l.domElement.removeEventListener("pointerdown",H1),l.domElement.removeEventListener("pointercancel",m2),l.domElement.removeEventListener("wheel",x2),l.domElement.removeEventListener("pointermove",Q1),l.domElement.removeEventListener("pointerup",Y1),l._domElementKeyEvents!==null&&l._domElementKeyEvents.removeEventListener("keydown",h2)};const l=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let q=n.NONE;const s=1e-6,a=new o7,r=new o7;let o=1;const m=new S;let h=!1;const c=new r1,f=new r1,x=new r1,d=new r1,u=new r1,p=new r1,A=new r1,B=new r1,v=new r1,g=[],F={};function z(){return 2*Math.PI/60/60*l.autoRotateSpeed}function _(){return Math.pow(.95,l.zoomSpeed)}function M(C){r.theta-=C}function T(C){r.phi-=C}const X=function(){const C=new S;return function(t1,s1){C.setFromMatrixColumn(s1,0),C.multiplyScalar(-t1),m.add(C)}}(),q1=function(){const C=new S;return function(t1,s1){l.screenSpacePanning===!0?C.setFromMatrixColumn(s1,1):(C.setFromMatrixColumn(s1,0),C.crossVectors(l.object.up,C)),C.multiplyScalar(t1),m.add(C)}}(),N=function(){const C=new S;return function(t1,s1){const i1=l.domElement;if(l.object.isPerspectiveCamera){const p1=l.object.position;C.copy(p1).sub(l.target);let B1=C.length();B1*=Math.tan(l.object.fov/2*Math.PI/180),X(2*t1*B1/i1.clientHeight,l.object.matrix),q1(2*s1*B1/i1.clientHeight,l.object.matrix)}else l.object.isOrthographicCamera?(X(t1*(l.object.right-l.object.left)/l.object.zoom/i1.clientWidth,l.object.matrix),q1(s1*(l.object.top-l.object.bottom)/l.object.zoom/i1.clientHeight,l.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),l.enablePan=!1)}}();function w(C){l.object.isPerspectiveCamera?o/=C:l.object.isOrthographicCamera?(l.object.zoom=Math.max(l.minZoom,Math.min(l.maxZoom,l.object.zoom*C)),l.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),l.enableZoom=!1)}function W(C){l.object.isPerspectiveCamera?o*=C:l.object.isOrthographicCamera?(l.object.zoom=Math.max(l.minZoom,Math.min(l.maxZoom,l.object.zoom/C)),l.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),l.enableZoom=!1)}function j(C){c.set(C.clientX,C.clientY)}function Z(C){A.set(C.clientX,C.clientY)}function G(C){d.set(C.clientX,C.clientY)}function P(C){f.set(C.clientX,C.clientY),x.subVectors(f,c).multiplyScalar(l.rotateSpeed);const Y=l.domElement;M(2*Math.PI*x.x/Y.clientHeight),T(2*Math.PI*x.y/Y.clientHeight),c.copy(f),l.update()}function I(C){B.set(C.clientX,C.clientY),v.subVectors(B,A),v.y>0?w(_()):v.y<0&&W(_()),A.copy(B),l.update()}function $(C){u.set(C.clientX,C.clientY),p.subVectors(u,d).multiplyScalar(l.panSpeed),N(p.x,p.y),d.copy(u),l.update()}function J(C){C.deltaY<0?W(_()):C.deltaY>0&&w(_()),l.update()}function K(C){let Y=!1;switch(C.code){case l.keys.UP:N(0,l.keyPanSpeed),Y=!0;break;case l.keys.BOTTOM:N(0,-l.keyPanSpeed),Y=!0;break;case l.keys.LEFT:N(l.keyPanSpeed,0),Y=!0;break;case l.keys.RIGHT:N(-l.keyPanSpeed,0),Y=!0;break}Y&&(C.preventDefault(),l.update())}function c1(){if(g.length===1)c.set(g[0].pageX,g[0].pageY);else{const C=.5*(g[0].pageX+g[1].pageX),Y=.5*(g[0].pageY+g[1].pageY);c.set(C,Y)}}function _1(){if(g.length===1)d.set(g[0].pageX,g[0].pageY);else{const C=.5*(g[0].pageX+g[1].pageX),Y=.5*(g[0].pageY+g[1].pageY);d.set(C,Y)}}function H(){const C=g[0].pageX-g[1].pageX,Y=g[0].pageY-g[1].pageY,t1=Math.sqrt(C*C+Y*Y);A.set(0,t1)}function S1(){l.enableZoom&&H(),l.enablePan&&_1()}function d1(){l.enableZoom&&H(),l.enableRotate&&c1()}function g1(C){if(g.length==1)f.set(C.pageX,C.pageY);else{const t1=x1(C),s1=.5*(C.pageX+t1.x),i1=.5*(C.pageY+t1.y);f.set(s1,i1)}x.subVectors(f,c).multiplyScalar(l.rotateSpeed);const Y=l.domElement;M(2*Math.PI*x.x/Y.clientHeight),T(2*Math.PI*x.y/Y.clientHeight),c.copy(f)}function h1(C){if(g.length===1)u.set(C.pageX,C.pageY);else{const Y=x1(C),t1=.5*(C.pageX+Y.x),s1=.5*(C.pageY+Y.y);u.set(t1,s1)}p.subVectors(u,d).multiplyScalar(l.panSpeed),N(p.x,p.y),d.copy(u)}function w1(C){const Y=x1(C),t1=C.pageX-Y.x,s1=C.pageY-Y.y,i1=Math.sqrt(t1*t1+s1*s1);B.set(0,i1),v.set(0,Math.pow(B.y/A.y,l.zoomSpeed)),w(v.y),A.copy(B)}function v1(C){l.enableZoom&&w1(C),l.enablePan&&h1(C)}function f1(C){l.enableZoom&&w1(C),l.enableRotate&&g1(C)}function H1(C){l.enabled!==!1&&(g.length===0&&(l.domElement.setPointerCapture(C.pointerId),l.domElement.addEventListener("pointermove",Q1),l.domElement.addEventListener("pointerup",Y1)),Q(C),C.pointerType==="touch"?y(C):j1(C))}function Q1(C){l.enabled!==!1&&(C.pointerType==="touch"?E(C):T1(C))}function Y1(C){e1(C),g.length===0&&(l.domElement.releasePointerCapture(C.pointerId),l.domElement.removeEventListener("pointermove",Q1),l.domElement.removeEventListener("pointerup",Y1)),l.dispatchEvent(h7),q=n.NONE}function m2(C){e1(C)}function j1(C){let Y;switch(C.button){case 0:Y=l.mouseButtons.LEFT;break;case 1:Y=l.mouseButtons.MIDDLE;break;case 2:Y=l.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case w3.DOLLY:if(l.enableZoom===!1)return;Z(C),q=n.DOLLY;break;case w3.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(l.enablePan===!1)return;G(C),q=n.PAN}else{if(l.enableRotate===!1)return;j(C),q=n.ROTATE}break;case w3.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(l.enableRotate===!1)return;j(C),q=n.ROTATE}else{if(l.enablePan===!1)return;G(C),q=n.PAN}break;default:q=n.NONE}q!==n.NONE&&l.dispatchEvent(s5)}function T1(C){switch(q){case n.ROTATE:if(l.enableRotate===!1)return;P(C);break;case n.DOLLY:if(l.enableZoom===!1)return;I(C);break;case n.PAN:if(l.enablePan===!1)return;$(C);break}}function x2(C){l.enabled===!1||l.enableZoom===!1||q!==n.NONE||(C.preventDefault(),l.dispatchEvent(s5),J(C),l.dispatchEvent(h7))}function h2(C){l.enabled===!1||l.enablePan===!1||K(C)}function y(C){switch(a1(C),g.length){case 1:switch(l.touches.ONE){case T3.ROTATE:if(l.enableRotate===!1)return;c1(),q=n.TOUCH_ROTATE;break;case T3.PAN:if(l.enablePan===!1)return;_1(),q=n.TOUCH_PAN;break;default:q=n.NONE}break;case 2:switch(l.touches.TWO){case T3.DOLLY_PAN:if(l.enableZoom===!1&&l.enablePan===!1)return;S1(),q=n.TOUCH_DOLLY_PAN;break;case T3.DOLLY_ROTATE:if(l.enableZoom===!1&&l.enableRotate===!1)return;d1(),q=n.TOUCH_DOLLY_ROTATE;break;default:q=n.NONE}break;default:q=n.NONE}q!==n.NONE&&l.dispatchEvent(s5)}function E(C){switch(a1(C),q){case n.TOUCH_ROTATE:if(l.enableRotate===!1)return;g1(C),l.update();break;case n.TOUCH_PAN:if(l.enablePan===!1)return;h1(C),l.update();break;case n.TOUCH_DOLLY_PAN:if(l.enableZoom===!1&&l.enablePan===!1)return;v1(C),l.update();break;case n.TOUCH_DOLLY_ROTATE:if(l.enableZoom===!1&&l.enableRotate===!1)return;f1(C),l.update();break;default:q=n.NONE}}function U(C){l.enabled!==!1&&C.preventDefault()}function Q(C){g.push(C)}function e1(C){delete F[C.pointerId];for(let Y=0;Y<g.length;Y++)if(g[Y].pointerId==C.pointerId){g.splice(Y,1);return}}function a1(C){let Y=F[C.pointerId];Y===void 0&&(Y=new r1,F[C.pointerId]=Y),Y.set(C.pageX,C.pageY)}function x1(C){const Y=C.pointerId===g[0].pointerId?g[1]:g[0];return F[Y.pointerId]}l.domElement.addEventListener("contextmenu",U),l.domElement.addEventListener("pointerdown",H1),l.domElement.addEventListener("pointercancel",m2),l.domElement.addEventListener("wheel",x2,{passive:!1}),this.update()}}class xi extends A6{constructor(e){super(e)}load(e,t,l,n){const q=this,s=new ai(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){const r=q.parse(JSON.parse(a));t&&t(r)},l,n)}parse(e){return new pi(e)}}class pi{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const l=[],n=_i(e,t,this.data);for(let q=0,s=n.length;q<s;q++)l.push(...n[q].toShapes());return l}}function _i(i,e,t){const l=Array.from(i),n=e/t.resolution,q=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*n,s=[];let a=0,r=0;for(let o=0;o<l.length;o++){const m=l[o];if(m===`