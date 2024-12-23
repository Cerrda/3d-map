import{u as Ar,r as po,o as jh,a as K2,c as j2,b as Al,w as Jh,v as $h,n as Qh,d as tf}from"./index-8aB9HxQj.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const G1="164",tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ef=0,bl=1,nf=2,J2=1,rf=2,Vn=3,_i=0,Ve=1,Xn=2,fi=0,Pr=1,wl=2,Rl=3,Cl=4,sf=5,Ni=100,af=101,of=102,lf=103,cf=104,uf=200,hf=201,ff=202,df=203,h1=204,f1=205,pf=206,mf=207,_f=208,gf=209,vf=210,xf=211,yf=212,Mf=213,Sf=214,Ef=0,Tf=1,Af=2,Da=3,bf=4,wf=5,Rf=6,Cf=7,$a=0,Pf=1,Lf=2,di=0,Df=1,Uf=2,If=3,Nf=4,Of=5,Ff=6,Bf=7,$2=300,Or=301,Fr=302,d1=303,p1=304,Qa=306,Xi=1e3,Fi=1001,m1=1002,hn=1003,zf=1004,Vs=1005,yn=1006,mo=1007,Bi=1008,gi=1009,kf=1010,Hf=1011,Q2=1012,tu=1013,Br=1014,li=1015,to=1016,eu=1017,nu=1018,Fs=1020,Vf=35902,Gf=1021,Wf=1022,Cn=1023,Xf=1024,Yf=1025,Lr=1026,Ms=1027,qf=1028,iu=1029,Zf=1030,ru=1031,su=1033,_o=33776,go=33777,vo=33778,xo=33779,Pl=35840,Ll=35841,Dl=35842,Ul=35843,Il=36196,Nl=37492,Ol=37496,Fl=37808,Bl=37809,zl=37810,kl=37811,Hl=37812,Vl=37813,Gl=37814,Wl=37815,Xl=37816,Yl=37817,ql=37818,Zl=37819,Kl=37820,jl=37821,yo=36492,Jl=36494,$l=36495,Kf=36283,Ql=36284,tc=36285,ec=36286,jf=3200,Jf=3201,W1=0,$f=1,oi="",An="srgb",Mi="srgb-linear",X1="display-p3",eo="display-p3-linear",Ua="linear",ie="srgb",Ia="rec709",Na="p3",nr=7680,nc=519,Qf=512,td=513,ed=514,au=515,nd=516,id=517,rd=518,sd=519,_1=35044,ic="300 es",Yn=2e3,Oa=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rc=1234567;const ds=Math.PI/180,Ss=180/Math.PI;function Ln(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[r&255]+Le[r>>8&255]+Le[r>>16&255]+Le[r>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ae(r,t,e){return Math.max(t,Math.min(e,r))}function Y1(r,t){return(r%t+t)%t}function ad(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function od(r,t,e){return r!==t?(e-r)/(t-r):0}function ps(r,t,e){return(1-e)*r+e*t}function ld(r,t,e,n){return ps(r,t,1-Math.exp(-e*n))}function cd(r,t=1){return t-Math.abs(Y1(r,t*2)-t)}function ud(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function hd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function fd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function dd(r,t){return r+Math.random()*(t-r)}function pd(r){return r*(.5-Math.random())}function md(r){r!==void 0&&(rc=r);let t=rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _d(r){return r*ds}function gd(r){return r*Ss}function vd(r){return(r&r-1)===0&&r!==0}function xd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Md(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),f=a((t-n)/2),d=s((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sd={DEG2RAD:ds,RAD2DEG:Ss,generateUUID:Ln,clamp:Ae,euclideanModulo:Y1,mapLinear:ad,inverseLerp:od,lerp:ps,damp:ld,pingpong:cd,smoothstep:ud,smootherstep:hd,randInt:fd,randFloat:dd,randFloatSpread:pd,seededRandom:md,degToRad:_d,radToDeg:gd,isPowerOfTwo:vd,ceilPowerOfTwo:xd,floorPowerOfTwo:yd,setQuaternionFromProperEuler:Md,normalize:Kt,denormalize:Mn};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,s,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],v=i[4],x=i[7],R=i[2],A=i[5],b=i[8];return s[0]=a*g+o*S+l*R,s[3]=a*p+o*v+l*A,s[6]=a*m+o*x+l*b,s[1]=c*g+u*S+h*R,s[4]=c*p+u*v+h*A,s[7]=c*m+u*x+h*b,s[2]=f*g+d*S+_*R,s[5]=f*p+d*v+_*A,s[8]=f*m+d*x+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,_=e*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new Bt;function ou(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Es(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ed(){const r=Es("canvas");return r.style.display="block",r}const sc={};function lu(r){r in sc||(sc[r]=!0,console.warn(r))}const ac=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oc=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gs={[Mi]:{transfer:Ua,primaries:Ia,toReference:r=>r,fromReference:r=>r},[An]:{transfer:ie,primaries:Ia,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[eo]:{transfer:Ua,primaries:Na,toReference:r=>r.applyMatrix3(oc),fromReference:r=>r.applyMatrix3(ac)},[X1]:{transfer:ie,primaries:Na,toReference:r=>r.convertSRGBToLinear().applyMatrix3(oc),fromReference:r=>r.applyMatrix3(ac).convertLinearToSRGB()}},Td=new Set([Mi,eo]),Jt={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Td.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Gs[t].toReference,i=Gs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Gs[r].primaries},getTransfer:function(r){return r===oi?Ua:Gs[r].transfer}};function Dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function So(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ir;class Ad{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ir===void 0&&(ir=Es("canvas")),ir.width=t.width,ir.height=t.height;const n=ir.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ir}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Es("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Dr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dr(e[n]/255)*255):e[n]=Dr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bd=0;class cu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Eo(i[a].image)):s.push(Eo(i[a]))}else s=Eo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Eo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ad.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class ke extends $i{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Fi,i=Fi,s=yn,a=Bi,o=Cn,l=gi,c=ke.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Ln(),this.name="",this.source=new cu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$2)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case m1:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case m1:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=$2;ke.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(d+1)/2,R=(m+1)/2,A=(u+f)/4,b=(h+g)/4,P=(_+p)/4;return v>x&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=b/n):x>R?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=P/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=P/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends $i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class uu extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cd extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-o;const m=l*f+c*d+u*_+h*g,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,m*S);p=Math.sin(p*A)/R,o=Math.sin(o*A)/R}const x=o*S;if(l=l*p+f*x,c=c*p+d*x,u=u*p+_*x,h=h*p+g*x,p===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-o*d,t[e+2]=c*_+u*d+o*f-l*h,t[e+3]=u*_-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new I,lc=new qi;class qr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),Xs.subVectors(this.max,$r),rr.subVectors(t.a,$r),sr.subVectors(t.b,$r),ar.subVectors(t.c,$r),ti.subVectors(sr,rr),ei.subVectors(ar,sr),Ai.subVectors(rr,ar);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-Ai.z,Ai.y,ti.z,0,-ti.x,ei.z,0,-ei.x,Ai.z,0,-Ai.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-Ai.y,Ai.x,0];return!Ao(e,rr,sr,ar,Xs)||(e=[1,0,0,0,1,0,0,0,1],!Ao(e,rr,sr,ar,Xs))?!1:(Ys.crossVectors(ti,ei),e=[Ys.x,Ys.y,Ys.z],Ao(e,rr,sr,ar,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,Ws=new qr,rr=new I,sr=new I,ar=new I,ti=new I,ei=new I,Ai=new I,$r=new I,Xs=new I,Ys=new I,bi=new I;function Ao(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){bi.fromArray(r,s);const o=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pd=new qr,Qr=new I,bo=new I;class no{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);const e=Qr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(bo)),this.expandByPoint(Qr.copy(t.center).sub(bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new I,wo=new I,qs=new I,ni=new I,Ro=new I,Zs=new I,Co=new I;class io{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wo.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(wo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(qs),o=ni.dot(this.direction),l=-ni.dot(qs),c=ni.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(wo).addScaledVector(qs,f),d}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,i,s){Ro.subVectors(e,t),Zs.subVectors(n,t),Co.crossVectors(Ro,Zs);let a=this.direction.dot(Co),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const l=o*this.direction.dot(Zs.crossVectors(ni,Zs));if(l<0)return null;const c=o*this.direction.dot(Ro.cross(ni));if(c<0||l+c>a)return null;const u=-o*ni.dot(Co);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,i,s,a,o,l,c,u,h,f,d,_,g,p){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,d,_,g,p)}set(t,e,n,i,s,a,o,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/or.setFromMatrixColumn(t,0).length(),s=1/or.setFromMatrixColumn(t,1).length(),a=1/or.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f-g*o,e[4]=-a*h,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=a*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=o*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Dd)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ii.crossVectors(n,Ke),ii.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ii.crossVectors(n,Ke)),ii.normalize(),Ks.crossVectors(Ke,ii),i[0]=ii.x,i[4]=Ks.x,i[8]=Ke.x,i[1]=ii.y,i[5]=Ks.y,i[9]=Ke.y,i[2]=ii.z,i[6]=Ks.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],v=n[7],x=n[11],R=n[15],A=i[0],b=i[4],P=i[8],y=i[12],M=i[1],D=i[5],H=i[9],L=i[13],N=i[2],U=i[6],z=i[10],K=i[14],k=i[3],$=i[7],tt=i[11],ct=i[15];return s[0]=a*A+o*M+l*N+c*k,s[4]=a*b+o*D+l*U+c*$,s[8]=a*P+o*H+l*z+c*tt,s[12]=a*y+o*L+l*K+c*ct,s[1]=u*A+h*M+f*N+d*k,s[5]=u*b+h*D+f*U+d*$,s[9]=u*P+h*H+f*z+d*tt,s[13]=u*y+h*L+f*K+d*ct,s[2]=_*A+g*M+p*N+m*k,s[6]=_*b+g*D+p*U+m*$,s[10]=_*P+g*H+p*z+m*tt,s[14]=_*y+g*L+p*K+m*ct,s[3]=S*A+v*M+x*N+R*k,s[7]=S*b+v*D+x*U+R*$,s[11]=S*P+v*H+x*z+R*tt,s[15]=S*y+v*L+x*K+R*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+g*(+e*l*d-e*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+p*(+e*c*h-e*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+m*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],S=h*p*c-g*f*c+g*l*d-o*p*d-h*l*m+o*f*m,v=_*f*c-u*p*c-_*l*d+a*p*d+u*l*m-a*f*m,x=u*g*c-_*h*c+_*o*d-a*g*d-u*o*m+a*h*m,R=_*h*l-u*g*l-_*o*f+a*g*f+u*o*p-a*h*p,A=e*S+n*v+i*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=S*b,t[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*b,t[2]=(o*p*s-g*l*s+g*i*c-n*p*c-o*i*m+n*l*m)*b,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*b,t[4]=v*b,t[5]=(u*p*s-_*f*s+_*i*d-e*p*d-u*i*m+e*f*m)*b,t[6]=(_*l*s-a*p*s-_*i*c+e*p*c+a*i*m-e*l*m)*b,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*d+e*l*d)*b,t[8]=x*b,t[9]=(_*h*s-u*g*s-_*n*d+e*g*d+u*n*m-e*h*m)*b,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*m+e*o*m)*b,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*d-e*o*d)*b,t[12]=R*b,t[13]=(u*g*i-_*h*i+_*n*f-e*g*f-u*n*p+e*h*p)*b,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*p-e*o*p)*b,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,_=s*h,g=a*u,p=a*h,m=o*h,S=l*c,v=l*u,x=l*h,R=n.x,A=n.y,b=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+x)*R,i[2]=(_-v)*R,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+m))*A,i[6]=(p+S)*A,i[7]=0,i[8]=(_+v)*b,i[9]=(p-S)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=or.set(i[0],i[1],i[2]).length();const a=or.set(i[4],i[5],i[6]).length(),o=or.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const c=1/s,u=1/a,h=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Yn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,_;if(o===Yn)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Oa)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Yn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),f=(e+t)*c,d=(n+i)*u;let _,g;if(o===Yn)_=(a+s)*h,g=-2*h;else if(o===Oa)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const or=new I,vn=new Qt,Ld=new I(0,0,0),Dd=new I(1,1,1),ii=new I,Ks=new I,Ke=new I,cc=new Qt,uc=new qi;class Tn{constructor(t=0,e=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uc.setFromEuler(this),this.setFromQuaternion(uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class q1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ud=0;const hc=new I,lr=new qi,zn=new Qt,js=new I,ts=new I,Id=new I,Nd=new qi,fc=new I(1,0,0),dc=new I(0,1,0),pc=new I(0,0,1),mc={type:"added"},Od={type:"removed"},cr={type:"childadded",child:null},Po={type:"childremoved",child:null};class ye extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new I,e=new Tn,n=new qi,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Bt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(dc,t)}rotateZ(t){return this.rotateOnAxis(pc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(dc,t)}translateZ(t){return this.translateOnAxis(pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(ts,js,this.up):zn.lookAt(js,ts,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),lr.setFromRotationMatrix(zn),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mc),cr.child=t,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Od),Po.child=t,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mc),cr.child=t,this.dispatchEvent(cr),cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new I(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new I,kn=new I,Lo=new I,Hn=new I,ur=new I,hr=new I,_c=new I,Do=new I,Uo=new I,Io=new I;class Sn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){xn.subVectors(i,e),kn.subVectors(n,e),Lo.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(kn),l=xn.dot(Lo),c=kn.dot(kn),u=kn.dot(Lo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),kn.subVectors(t,e),xn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ur.subVectors(i,n),hr.subVectors(s,n),Do.subVectors(t,n);const l=ur.dot(Do),c=hr.dot(Do);if(l<=0&&c<=0)return e.copy(n);Uo.subVectors(t,i);const u=ur.dot(Uo),h=hr.dot(Uo);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ur,a);Io.subVectors(t,s);const d=ur.dot(Io),_=hr.dot(Io);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(hr,o);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return _c.subVectors(s,i),o=(h-u)/(h-u+(d-_)),e.copy(i).addScaledVector(_c,o);const m=1/(p+g+f);return a=g*m,o=f*m,e.copy(n).addScaledVector(ur,a).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Js={h:0,s:0,l:0};function No(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Y1(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=No(a,s,t+1/3),this.g=No(a,s,t),this.b=No(a,s,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=An){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const n=hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}copyLinearToSRGB(t){return this.r=So(t.r),this.g=So(t.g),this.b=So(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return Jt.fromWorkingColorSpace(De.copy(this),t),Math.round(Ae(De.r*255,0,255))*65536+Math.round(Ae(De.g*255,0,255))*256+Math.round(Ae(De.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(De.copy(this),e);const n=De.r,i=De.g,s=De.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=An){Jt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Js);const n=ps(ri.h,Js.h,e),i=ps(ri.s,Js.s,e),s=ps(ri.l,Js.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Wt;Wt.NAMES=hu;let Fd=0;class Si extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Pr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=h1,this.blendDst=f1,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==h1&&(n.blendSrc=this.blendSrc),this.blendDst!==f1&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Da&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zi extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new I,$s=new st;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_1,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return lu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_1&&(t.usage=this.usage),t}}class fu extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class du extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class nn extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bd=0;const ln=new Qt,Oo=new ye,fr=new I,je=new qr,es=new qr,Te=new I;class _n extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ou(t)?du:fu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];je.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(je.min,es.min),je.expandByPoint(Te),Te.addVectors(je.max,es.max),je.expandByPoint(Te)):(je.expandByPoint(es.min),je.expandByPoint(es.max))}je.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Te.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Te.fromBufferAttribute(o,c),l&&(fr.fromBufferAttribute(t,c),Te.add(fr)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;const c=new I,u=new I,h=new I,f=new st,d=new st,_=new st,g=new I,p=new I;function m(P,y,M){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(D),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),o[P].add(g),o[y].add(g),o[M].add(g),l[P].add(p),l[y].add(p),l[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,y=S.length;P<y;++P){const M=S[P],D=M.start,H=M.count;for(let L=D,N=D+H;L<N;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new I,x=new I,R=new I,A=new I;function b(P){R.fromBufferAttribute(i,P),A.copy(R);const y=o[P];v.copy(y),v.sub(R.multiplyScalar(R.dot(y))).normalize(),x.crossVectors(A,y);const D=x.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,y=S.length;P<y;++P){const M=S[P],D=M.start,H=M.count;for(let L=D,N=D+H;L<N;L+=3)b(t.getX(L+0)),b(t.getX(L+1)),b(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new En(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gc=new Qt,wi=new io,Qs=new no,vc=new I,dr=new I,pr=new I,mr=new I,Fo=new I,ta=new I,ea=new st,na=new st,ia=new st,xc=new I,yc=new I,Mc=new I,ra=new I,sa=new I;class Ue extends ye{constructor(t=new _n,e=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Fo.fromBufferAttribute(h,t),a?ta.addScaledVector(Fo,u):ta.addScaledVector(Fo.sub(e),u))}e.add(ta)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(Qs.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Qs,vc)===null||wi.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(gc.copy(s).invert(),wi.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=S,R=v;x<R;x+=3){const A=o.getX(x),b=o.getX(x+1),P=o.getX(x+2);i=aa(this,m,t,n,c,u,h,A,b,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);i=aa(this,a,t,n,c,u,h,S,v,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=S,R=v;x<R;x+=3){const A=x,b=x+1,P=x+2;i=aa(this,m,t,n,c,u,h,A,b,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,v=p+1,x=p+2;i=aa(this,a,t,n,c,u,h,S,v,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function zd(r,t,e,n,i,s,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===_i,o),l===null)return null;sa.copy(o),sa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(sa);return c<e.near||c>e.far?null:{distance:c,point:sa.clone(),object:r}}function aa(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,dr),r.getVertexPosition(l,pr),r.getVertexPosition(c,mr);const u=zd(r,t,e,n,dr,pr,mr,ra);if(u){i&&(ea.fromBufferAttribute(i,o),na.fromBufferAttribute(i,l),ia.fromBufferAttribute(i,c),u.uv=Sn.getInterpolation(ra,dr,pr,mr,ea,na,ia,new st)),s&&(ea.fromBufferAttribute(s,o),na.fromBufferAttribute(s,l),ia.fromBufferAttribute(s,c),u.uv1=Sn.getInterpolation(ra,dr,pr,mr,ea,na,ia,new st)),a&&(xc.fromBufferAttribute(a,o),yc.fromBufferAttribute(a,l),Mc.fromBufferAttribute(a,c),u.normal=Sn.getInterpolation(ra,dr,pr,mr,xc,yc,Mc,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};Sn.getNormal(dr,pr,mr,h.normal),u.face=h}return u}class Bs extends _n{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(h,2));function _(g,p,m,S,v,x,R,A,b,P,y){const M=x/b,D=R/P,H=x/2,L=R/2,N=A/2,U=b+1,z=P+1;let K=0,k=0;const $=new I;for(let tt=0;tt<z;tt++){const ct=tt*D-L;for(let xt=0;xt<U;xt++){const wt=xt*M-H;$[g]=wt*S,$[p]=ct*v,$[m]=N,c.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[m]=A>0?1:-1,u.push($.x,$.y,$.z),h.push(xt/b),h.push(1-tt/P),K+=1}}for(let tt=0;tt<P;tt++)for(let ct=0;ct<b;ct++){const xt=f+ct+U*tt,wt=f+ct+U*(tt+1),Y=f+(ct+1)+U*(tt+1),et=f+(ct+1)+U*tt;l.push(xt,wt,et),l.push(wt,Y,et),k+=6}o.addGroup(d,k,y),d+=k,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(r){const t={};for(let e=0;e<r.length;e++){const n=zr(r[e]);for(const i in n)t[i]=n[i]}return t}function kd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function pu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Hd={clone:zr,merge:Be};var Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mu extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new I,Sc=new st,Ec=new st;class un extends mu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Sc,Ec),e.subVectors(Ec,Sc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ds*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _r=-90,gr=1;class Wd extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(_r,gr,t,e);i.layers=this.layers,this.add(i);const s=new un(_r,gr,t,e);s.layers=this.layers,this.add(s);const a=new un(_r,gr,t,e);a.layers=this.layers,this.add(a);const o=new un(_r,gr,t,e);o.layers=this.layers,this.add(o);const l=new un(_r,gr,t,e);l.layers=this.layers,this.add(l);const c=new un(_r,gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _u extends ke{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Or,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xd extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _u(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bs(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:fi});s.uniforms.tEquirect.value=e;const a=new Ue(i,s),o=e.minFilter;return e.minFilter===Bi&&(e.minFilter=yn),new Wd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Bo=new I,Yd=new I,qd=new Bt;class ai{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Bo.subVectors(n,e).cross(Yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qd.getNormalMatrix(t),i=this.coplanarPoint(Bo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new no,oa=new I;class Z1{constructor(t=new ai,e=new ai,n=new ai,i=new ai,s=new ai,a=new ai){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],S=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,p-d,x-m).normalize(),n[1].setComponents(l+s,f+c,p+d,x+m).normalize(),n[2].setComponents(l+a,f+u,p+_,x+S).normalize(),n[3].setComponents(l-a,f-u,p-_,x-S).normalize(),n[4].setComponents(l-o,f-h,p-g,x-v).normalize(),e===Yn)n[5].setComponents(l+o,f+h,p+g,x+v).normalize();else if(e===Oa)n[5].setComponents(o,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(oa.x=i.normal.x>0?t.max.x:t.min.x,oa.y=i.normal.y>0?t.max.y:t.min.y,oa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gu(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Zd(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,o),h.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class zs extends _n{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*f-a;for(let v=0;v<c;v++){const x=v*h-s;_.push(x,-S,0),g.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const v=S+c*m,x=S+c*(m+1),R=S+1+c*(m+1),A=S+1+c*m;d.push(v,x,A),d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l0=`#ifdef USE_IRIDESCENCE
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
#endif`,c0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,v0=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",b0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,w0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,H0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,q0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Z0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
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
#endif`,up=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Up=`float getShadowMask() {
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
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,e5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,n5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,i5=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a5=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o5=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c5=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u5=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,h5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f5=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,d5=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p5=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m5=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_5=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,g5=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,x5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y5=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,M5=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S5=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,E5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T5=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A5=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b5=`uniform float rotation;
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
}`,w5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Kd,alphahash_pars_fragment:jd,alphamap_fragment:Jd,alphamap_pars_fragment:$d,alphatest_fragment:Qd,alphatest_pars_fragment:t0,aomap_fragment:e0,aomap_pars_fragment:n0,batching_pars_vertex:i0,batching_vertex:r0,begin_vertex:s0,beginnormal_vertex:a0,bsdfs:o0,iridescence_fragment:l0,bumpmap_pars_fragment:c0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:d0,color_fragment:p0,color_pars_fragment:m0,color_pars_vertex:_0,color_vertex:g0,common:v0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:y0,displacementmap_pars_vertex:M0,displacementmap_vertex:S0,emissivemap_fragment:E0,emissivemap_pars_fragment:T0,colorspace_fragment:A0,colorspace_pars_fragment:b0,envmap_fragment:w0,envmap_common_pars_fragment:R0,envmap_pars_fragment:C0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:H0,envmap_vertex:L0,fog_vertex:D0,fog_pars_vertex:U0,fog_fragment:I0,fog_pars_fragment:N0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:F0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:z0,lights_pars_begin:k0,lights_toon_fragment:V0,lights_toon_pars_fragment:G0,lights_phong_fragment:W0,lights_phong_pars_fragment:X0,lights_physical_fragment:Y0,lights_physical_pars_fragment:q0,lights_fragment_begin:Z0,lights_fragment_maps:K0,lights_fragment_end:j0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:tp,map_fragment:ep,map_pars_fragment:np,map_particle_fragment:ip,map_particle_pars_fragment:rp,metalnessmap_fragment:sp,metalnessmap_pars_fragment:ap,morphinstance_vertex:op,morphcolor_vertex:lp,morphnormal_vertex:cp,morphtarget_pars_vertex:up,morphtarget_vertex:hp,normal_fragment_begin:fp,normal_fragment_maps:dp,normal_pars_fragment:pp,normal_pars_vertex:mp,normal_vertex:_p,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Mp,opaque_fragment:Sp,packing:Ep,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:bp,dithering_pars_fragment:wp,roughnessmap_fragment:Rp,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Pp,shadowmap_pars_vertex:Lp,shadowmap_vertex:Dp,shadowmask_pars_fragment:Up,skinbase_vertex:Ip,skinning_pars_vertex:Np,skinning_vertex:Op,skinnormal_vertex:Fp,specularmap_fragment:Bp,specularmap_pars_fragment:zp,tonemapping_fragment:kp,tonemapping_pars_fragment:Hp,transmission_fragment:Vp,transmission_pars_fragment:Gp,uv_pars_fragment:Wp,uv_pars_vertex:Xp,uv_vertex:Yp,worldpos_vertex:qp,background_vert:Zp,background_frag:Kp,backgroundCube_vert:jp,backgroundCube_frag:Jp,cube_vert:$p,cube_frag:Qp,depth_vert:t5,depth_frag:e5,distanceRGBA_vert:n5,distanceRGBA_frag:i5,equirect_vert:r5,equirect_frag:s5,linedashed_vert:a5,linedashed_frag:o5,meshbasic_vert:l5,meshbasic_frag:c5,meshlambert_vert:u5,meshlambert_frag:h5,meshmatcap_vert:f5,meshmatcap_frag:d5,meshnormal_vert:p5,meshnormal_frag:m5,meshphong_vert:_5,meshphong_frag:g5,meshphysical_vert:v5,meshphysical_frag:x5,meshtoon_vert:y5,meshtoon_frag:M5,points_vert:S5,points_frag:E5,shadow_vert:T5,shadow_frag:A5,sprite_vert:b5,sprite_frag:w5},pt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},wn={basic:{uniforms:Be([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Be([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Be([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Be([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Be([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Be([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Be([pt.points,pt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Be([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Be([pt.common,pt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Be([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Be([pt.sprite,pt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Be([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Be([pt.lights,pt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};wn.physical={uniforms:Be([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const la={r:0,b:0,g:0},Ci=new Tn,R5=new Qt;function C5(r,t,e,n,i,s,a){const o=new Wt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function g(S){let v=!1;const x=_(S);x===null?m(o,l):x&&x.isColor&&(m(x,1),v=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function p(S,v){const x=_(v);x&&(x.isCubeTexture||x.mapping===Qa)?(u===void 0&&(u=new Ue(new Bs(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:zr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(R5.makeRotationFromEuler(Ci)),u.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ie,(h!==x||f!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ue(new zs(2,2),new vi({name:"BackgroundMaterial",uniforms:zr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,v){S.getRGB(la,pu(r)),n.buffers.color.setClear(la.r,la.g,la.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:g,addToRenderList:p}}function P5(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(M,D,H,L,N){let U=!1;const z=h(L,H,D);s!==z&&(s=z,c(s.object)),U=d(M,L,H,N),U&&_(M,L,H,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,x(M,D,H,L),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function h(M,D,H){const L=H.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let U=N[D.id];U===void 0&&(U={},N[D.id]=U);let z=U[L];return z===void 0&&(z=f(l()),U[L]=z),z}function f(M){const D=[],H=[],L=[];for(let N=0;N<e;N++)D[N]=0,H[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:L,object:M,attributes:{},index:null}}function d(M,D,H,L){const N=s.attributes,U=D.attributes;let z=0;const K=H.getAttributes();for(const k in K)if(K[k].location>=0){const tt=N[k];let ct=U[k];if(ct===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),tt===void 0||tt.attribute!==ct||ct&&tt.data!==ct.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function _(M,D,H,L){const N={},U=D.attributes;let z=0;const K=H.getAttributes();for(const k in K)if(K[k].location>=0){let tt=U[k];tt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor));const ct={};ct.attribute=tt,tt&&tt.data&&(ct.data=tt.data),N[k]=ct,z++}s.attributes=N,s.attributesNum=z,s.index=L}function g(){const M=s.newAttributes;for(let D=0,H=M.length;D<H;D++)M[D]=0}function p(M){m(M,0)}function m(M,D){const H=s.newAttributes,L=s.enabledAttributes,N=s.attributeDivisors;H[M]=1,L[M]===0&&(r.enableVertexAttribArray(M),L[M]=1),N[M]!==D&&(r.vertexAttribDivisor(M,D),N[M]=D)}function S(){const M=s.newAttributes,D=s.enabledAttributes;for(let H=0,L=D.length;H<L;H++)D[H]!==M[H]&&(r.disableVertexAttribArray(H),D[H]=0)}function v(M,D,H,L,N,U,z){z===!0?r.vertexAttribIPointer(M,D,H,N,U):r.vertexAttribPointer(M,D,H,L,N,U)}function x(M,D,H,L){g();const N=L.attributes,U=H.getAttributes(),z=D.defaultAttributeValues;for(const K in U){const k=U[K];if(k.location>=0){let $=N[K];if($===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){const tt=$.normalized,ct=$.itemSize,xt=t.get($);if(xt===void 0)continue;const wt=xt.buffer,Y=xt.type,et=xt.bytesPerElement,vt=Y===r.INT||Y===r.UNSIGNED_INT||$.gpuType===tu;if($.isInterleavedBufferAttribute){const ot=$.data,Ct=ot.stride,It=$.offset;if(ot.isInstancedInterleavedBuffer){for(let F=0;F<k.locationSize;F++)m(k.location+F,ot.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let F=0;F<k.locationSize;F++)p(k.location+F);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let F=0;F<k.locationSize;F++)v(k.location+F,ct/k.locationSize,Y,tt,Ct*et,(It+ct/k.locationSize*F)*et,vt)}else{if($.isInstancedBufferAttribute){for(let ot=0;ot<k.locationSize;ot++)m(k.location+ot,$.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ot=0;ot<k.locationSize;ot++)p(k.location+ot);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let ot=0;ot<k.locationSize;ot++)v(k.location+ot,ct/k.locationSize,Y,tt,ct*et,ct/k.locationSize*ot*et,vt)}}else if(z!==void 0){const tt=z[K];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(k.location,tt);break;case 3:r.vertexAttrib3fv(k.location,tt);break;case 4:r.vertexAttrib4fv(k.location,tt);break;default:r.vertexAttrib1fv(k.location,tt)}}}}S()}function R(){P();for(const M in n){const D=n[M];for(const H in D){const L=D[H];for(const N in L)u(L[N].object),delete L[N];delete D[H]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const H in D){const L=D[H];for(const N in L)u(L[N].object),delete L[N];delete D[H]}delete n[M.id]}function b(M){for(const D in n){const H=n[D];if(H[M.id]===void 0)continue;const L=H[M.id];for(const N in L)u(L[N].object),delete L[N];delete H[M.id]}}function P(){y(),a=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function L5(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h;d++)this.render(c[d],u[d]);else{f.multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,n,1)}}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<f.length;g++)e.update(_,n,f[g])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function D5(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Cn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===to&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==gi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==li&&!b)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:x,maxSamples:R}}function U5(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new ai,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,v=S*4;let x=m.clippingState||null;l.value=x,x=u(_,f,v,d);for(let R=0;R!==v;++R)x[R]=e[R];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,x=d;v!==g;++v,x+=4)a.copy(h[v]).applyMatrix4(S,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function I5(r){let t=new WeakMap;function e(a,o){return o===d1?a.mapping=Or:o===p1&&(a.mapping=Fr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===d1||o===p1)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xd(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class vu extends mu{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const br=4,Tc=[.125,.215,.35,.446,.526,.582],Oi=20,zo=new vu,Ac=new Wt;let ko=null,Ho=0,Vo=0,Go=!1;const Ui=(1+Math.sqrt(5))/2,vr=1/Ui,bc=[new I(-Ui,vr,0),new I(Ui,vr,0),new I(-vr,0,Ui),new I(vr,0,Ui),new I(0,Ui,-vr),new I(0,Ui,vr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ko=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ko,Ho,Vo),this._renderer.xr.enabled=Go,t.scissorTest=!1,ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Or||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ko=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:to,format:Cn,colorSpace:Mi,depthBuffer:!1},i=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N5(s)),this._blurMaterial=O5(s,t,e)}return i}_compileMaterial(t){const e=new Ue(this._lodPlanes[0],t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,n,i){const o=new un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ac),u.toneMapping=di,u.autoClear=!1;const d=new zi({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),_=new Ue(new Bs,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(Ac),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const v=this._cubeSize;ca(i,S*v,m>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Or||t.mapping===Fr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ue(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ca(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,zo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=bc[(i-s-1)%bc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ue(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Oi;p>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);const m=[];let S=0;for(let b=0;b<Oi;++b){const P=b/g,y=Math.exp(-P*P/2);m.push(y),b===0?S+=y:b<p&&(S+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const x=this._sizeLods[i],R=3*x*(i>v-br?i-v+br:0),A=4*(this._cubeSize-x);ca(e,R,A,3*x,2*x),l.setRenderTarget(e),l.render(h,zo)}}function N5(r){const t=[],e=[],n=[];let i=r;const s=r-br+1+Tc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-br?l=Tc[a-r+br-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),v=new Float32Array(p*_*d),x=new Float32Array(m*_*d);for(let A=0;A<d;A++){const b=A%3*2/3-1,P=A>2?0:-1,y=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];S.set(y,g*_*A),v.set(f,p*_*A);const M=[A,A,A,A,A,A];x.set(M,m*_*A)}const R=new _n;R.setAttribute("position",new En(S,g)),R.setAttribute("uv",new En(v,p)),R.setAttribute("faceIndex",new En(x,m)),t.push(R),i>br&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(r,t,e){const n=new Yi(r,t,e);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function O5(r,t,e){const n=new Float32Array(Oi),i=new I(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:K1(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Cc(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:K1(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Pc(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:K1(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function K1(){return`

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
	`}function F5(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===d1||l===p1,u=l===Or||l===Fr;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new wc(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new wc(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function B5(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function z5(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let v=0,x=S.length;v<x;v+=3){const R=S[v+0],A=S[v+1],b=S[v+2];f.push(R,A,A,b,b,R)}}else if(_!==void 0){const S=_.array;g=_.version;for(let v=0,x=S.length/3-1;v<x;v+=3){const R=v+0,A=v+1,b=v+2;f.push(R,A,A,b,b,R)}}else return;const p=new(ou(f)?du:fu)(f,1);p.version=g;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function k5(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),e.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*a,_),e.update(d,n,_))}function u(f,d,_){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(f[p]/a,d[p]);else{g.multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}}function h(f,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=d[S];for(let S=0;S<g.length;S++)e.update(m,n,g[S])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function H5(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function V5(r,t,e){const n=new WeakMap,i=new we;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let x=o.attributes.position.count*v,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const A=new Float32Array(x*R*4*h),b=new uu(A,x,R,h);b.type=li,b.needsUpdate=!0;const P=v*4;for(let M=0;M<h;M++){const D=p[M],H=m[M],L=S[M],N=x*R*4*M;for(let U=0;U<D.count;U++){const z=U*P;d===!0&&(i.fromBufferAttribute(D,U),A[N+z+0]=i.x,A[N+z+1]=i.y,A[N+z+2]=i.z,A[N+z+3]=0),_===!0&&(i.fromBufferAttribute(H,U),A[N+z+4]=i.x,A[N+z+5]=i.y,A[N+z+6]=i.z,A[N+z+7]=0),g===!0&&(i.fromBufferAttribute(L,U),A[N+z+8]=i.x,A[N+z+9]=i.y,A[N+z+10]=i.z,A[N+z+11]=L.itemSize===4?i.w:1)}}f={count:h,texture:b,size:new st(x,R)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function G5(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class xu extends ke{constructor(t,e,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Lr,u!==Lr&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Lr&&(n=Br),n===void 0&&u===Ms&&(n=Fs),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yu=new ke,Mu=new xu(1,1);Mu.compareFunction=au;const Su=new uu,Eu=new Cd,Tu=new _u,Lc=[],Dc=[],Uc=new Float32Array(16),Ic=new Float32Array(9),Nc=new Float32Array(4);function Zr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Lc[i];if(s===void 0&&(s=new Float32Array(i),Lc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Se(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ro(r,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function W5(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function X5(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2fv(this.addr,t),Se(e,t)}}function Y5(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;r.uniform3fv(this.addr,t),Se(e,t)}}function q5(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4fv(this.addr,t),Se(e,t)}}function Z5(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Nc.set(n),r.uniformMatrix2fv(this.addr,!1,Nc),Se(e,n)}}function K5(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Ic.set(n),r.uniformMatrix3fv(this.addr,!1,Ic),Se(e,n)}}function j5(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Uc.set(n),r.uniformMatrix4fv(this.addr,!1,Uc),Se(e,n)}}function J5(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function $5(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2iv(this.addr,t),Se(e,t)}}function Q5(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3iv(this.addr,t),Se(e,t)}}function t6(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4iv(this.addr,t),Se(e,t)}}function e6(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function n6(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2uiv(this.addr,t),Se(e,t)}}function i6(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;r.uniform3uiv(this.addr,t),Se(e,t)}}function r6(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4uiv(this.addr,t),Se(e,t)}}function s6(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Mu:yu;e.setTexture2D(t||s,i)}function a6(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Eu,i)}function o6(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Tu,i)}function l6(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Su,i)}function c6(r){switch(r){case 5126:return W5;case 35664:return X5;case 35665:return Y5;case 35666:return q5;case 35674:return Z5;case 35675:return K5;case 35676:return j5;case 5124:case 35670:return J5;case 35667:case 35671:return $5;case 35668:case 35672:return Q5;case 35669:case 35673:return t6;case 5125:return e6;case 36294:return n6;case 36295:return i6;case 36296:return r6;case 35678:case 36198:case 36298:case 36306:case 35682:return s6;case 35679:case 36299:case 36307:return a6;case 35680:case 36300:case 36308:case 36293:return o6;case 36289:case 36303:case 36311:case 36292:return l6}}function u6(r,t){r.uniform1fv(this.addr,t)}function h6(r,t){const e=Zr(t,this.size,2);r.uniform2fv(this.addr,e)}function f6(r,t){const e=Zr(t,this.size,3);r.uniform3fv(this.addr,e)}function d6(r,t){const e=Zr(t,this.size,4);r.uniform4fv(this.addr,e)}function p6(r,t){const e=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function m6(r,t){const e=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function _6(r,t){const e=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function g6(r,t){r.uniform1iv(this.addr,t)}function v6(r,t){r.uniform2iv(this.addr,t)}function x6(r,t){r.uniform3iv(this.addr,t)}function y6(r,t){r.uniform4iv(this.addr,t)}function M6(r,t){r.uniform1uiv(this.addr,t)}function S6(r,t){r.uniform2uiv(this.addr,t)}function E6(r,t){r.uniform3uiv(this.addr,t)}function T6(r,t){r.uniform4uiv(this.addr,t)}function A6(r,t,e){const n=this.cache,i=t.length,s=ro(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||yu,s[a])}function b6(r,t,e){const n=this.cache,i=t.length,s=ro(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Eu,s[a])}function w6(r,t,e){const n=this.cache,i=t.length,s=ro(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Tu,s[a])}function R6(r,t,e){const n=this.cache,i=t.length,s=ro(e,i);Me(n,s)||(r.uniform1iv(this.addr,s),Se(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Su,s[a])}function C6(r){switch(r){case 5126:return u6;case 35664:return h6;case 35665:return f6;case 35666:return d6;case 35674:return p6;case 35675:return m6;case 35676:return _6;case 5124:case 35670:return g6;case 35667:case 35671:return v6;case 35668:case 35672:return x6;case 35669:case 35673:return y6;case 5125:return M6;case 36294:return S6;case 36295:return E6;case 36296:return T6;case 35678:case 36198:case 36298:case 36306:case 35682:return A6;case 35679:case 36299:case 36307:return b6;case 35680:case 36300:case 36308:case 36293:return w6;case 36289:case 36303:case 36311:case 36292:return R6}}class P6{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c6(e.type)}}class L6{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C6(e.type)}}class D6{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function Oc(r,t){r.seq.push(t),r.map[t.id]=t}function U6(r,t,e){const n=r.name,i=n.length;for(Wo.lastIndex=0;;){const s=Wo.exec(n),a=Wo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Oc(e,c===void 0?new P6(o,r,t):new L6(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new D6(o),Oc(e,h)),e=h}}}class wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);U6(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Fc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const I6=37297;let N6=0;function O6(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function F6(r){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(r);let n;switch(t===e?n="":t===Na&&e===Ia?n="LinearDisplayP3ToLinearSRGB":t===Ia&&e===Na&&(n="LinearSRGBToLinearDisplayP3"),r){case Mi:case eo:return[n,"LinearTransferOETF"];case An:case X1:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Bc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+O6(r.getShaderSource(t),a)}else return i}function B6(r,t){const e=F6(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function z6(r,t){let e;switch(t){case Df:e="Linear";break;case Uf:e="Reinhard";break;case If:e="OptimizedCineon";break;case Nf:e="ACESFilmic";break;case Ff:e="AgX";break;case Bf:e="Neutral";break;case Of:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function k6(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function H6(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V6(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function os(r){return r!==""}function zc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G6=/^[ \t]*#include +<([\w\d./]+)>/gm;function g1(r){return r.replace(G6,X6)}const W6=new Map;function X6(r,t){let e=Ft[t];if(e===void 0){const n=W6.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return g1(e)}const Y6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(r){return r.replace(Y6,q6)}function q6(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Z6(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===J2?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function K6(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Or:case Fr:t="ENVMAP_TYPE_CUBE";break;case Qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j6(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Fr:t="ENVMAP_MODE_REFRACTION";break}return t}function J6(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $a:t="ENVMAP_BLENDING_MULTIPLY";break;case Pf:t="ENVMAP_BLENDING_MIX";break;case Lf:t="ENVMAP_BLENDING_ADD";break}return t}function $6(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Q6(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Z6(e),c=K6(e),u=j6(e),h=J6(e),f=$6(e),d=k6(e),_=H6(s),g=i.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(os).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(os).join(`
`),m.length>0&&(m+=`
`)):(p=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),m=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Ft.tonemapping_pars_fragment:"",e.toneMapping!==di?z6("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,B6("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),a=g1(a),a=zc(a,e),a=kc(a,e),o=g1(o),o=zc(o,e),o=kc(o,e),a=Hc(a),o=Hc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=S+p+a,x=S+m+o,R=Fc(i,i.VERTEX_SHADER,v),A=Fc(i,i.FRAGMENT_SHADER,x);i.attachShader(g,R),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(D){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(R).trim(),N=i.getShaderInfoLog(A).trim();let U=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const K=Bc(i,R,"vertex"),k=Bc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+K+`
`+k)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(L===""||N==="")&&(z=!1);z&&(D.diagnostics={runnable:U,programLog:H,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:m}})}i.deleteShader(R),i.deleteShader(A),P=new wa(i,g),y=V6(i,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,I6)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N6++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let t7=0;class e7{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new n7(t),e.set(t,n)),n}}class n7{constructor(t){this.id=t7++,this.code=t,this.usedTimes=0}}function i7(r,t,e,n,i,s,a){const o=new q1,l=new e7,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,M,D,H,L){const N=H.fog,U=L.geometry,z=y.isMeshStandardMaterial?H.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||z),k=K&&K.mapping===Qa?K.image.height:null,$=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ct=tt!==void 0?tt.length:0;let xt=0;U.morphAttributes.position!==void 0&&(xt=1),U.morphAttributes.normal!==void 0&&(xt=2),U.morphAttributes.color!==void 0&&(xt=3);let wt,Y,et,vt;if($){const qt=wn[$];wt=qt.vertexShader,Y=qt.fragmentShader}else wt=y.vertexShader,Y=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),vt=l.getFragmentShaderID(y);const ot=r.getRenderTarget(),Ct=L.isInstancedMesh===!0,It=L.isBatchedMesh===!0,F=!!y.map,kt=!!y.matcap,Z=!!K,at=!!y.aoMap,J=!!y.lightMap,ut=!!y.bumpMap,it=!!y.normalMap,_t=!!y.displacementMap,Tt=!!y.emissiveMap,C=!!y.metalnessMap,T=!!y.roughnessMap,V=y.anisotropy>0,j=y.clearcoat>0,nt=y.dispersion>0,Q=y.iridescence>0,St=y.sheen>0,dt=y.transmission>0,ft=V&&!!y.anisotropyMap,Rt=j&&!!y.clearcoatMap,lt=j&&!!y.clearcoatNormalMap,Mt=j&&!!y.clearcoatRoughnessMap,zt=Q&&!!y.iridescenceMap,At=Q&&!!y.iridescenceThicknessMap,gt=St&&!!y.sheenColorMap,Dt=St&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,jt=!!y.specularColorMap,Nt=!!y.specularIntensityMap,E=dt&&!!y.transmissionMap,O=dt&&!!y.thicknessMap,G=!!y.gradientMap,rt=!!y.alphaMap,ht=y.alphaTest>0,Ut=!!y.alphaHash,Vt=!!y.extensions;let ae=di;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Ee={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:wt,fragmentShader:Y,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:It,instancing:Ct,instancingColor:Ct&&L.instanceColor!==null,instancingMorph:Ct&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Mi,alphaToCoverage:!!y.alphaToCoverage,map:F,matcap:kt,envMap:Z,envMapMode:Z&&K.mapping,envMapCubeUVHeight:k,aoMap:at,lightMap:J,bumpMap:ut,normalMap:it,displacementMap:f&&_t,emissiveMap:Tt,normalMapObjectSpace:it&&y.normalMapType===$f,normalMapTangentSpace:it&&y.normalMapType===W1,metalnessMap:C,roughnessMap:T,anisotropy:V,anisotropyMap:ft,clearcoat:j,clearcoatMap:Rt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Mt,dispersion:nt,iridescence:Q,iridescenceMap:zt,iridescenceThicknessMap:At,sheen:St,sheenColorMap:gt,sheenRoughnessMap:Dt,specularMap:Ht,specularColorMap:jt,specularIntensityMap:Nt,transmission:dt,transmissionMap:E,thicknessMap:O,gradientMap:G,opaque:y.transparent===!1&&y.blending===Pr&&y.alphaToCoverage===!1,alphaMap:rt,alphaTest:ht,alphaHash:Ut,combine:y.combine,mapUv:F&&g(y.map.channel),aoMapUv:at&&g(y.aoMap.channel),lightMapUv:J&&g(y.lightMap.channel),bumpMapUv:ut&&g(y.bumpMap.channel),normalMapUv:it&&g(y.normalMap.channel),displacementMapUv:_t&&g(y.displacementMap.channel),emissiveMapUv:Tt&&g(y.emissiveMap.channel),metalnessMapUv:C&&g(y.metalnessMap.channel),roughnessMapUv:T&&g(y.roughnessMap.channel),anisotropyMapUv:ft&&g(y.anisotropyMap.channel),clearcoatMapUv:Rt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(y.sheenRoughnessMap.channel),specularMapUv:Ht&&g(y.specularMap.channel),specularColorMapUv:jt&&g(y.specularColorMap.channel),specularIntensityMapUv:Nt&&g(y.specularIntensityMap.channel),transmissionMapUv:E&&g(y.transmissionMap.channel),thicknessMapUv:O&&g(y.thicknessMap.channel),alphaMapUv:rt&&g(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(it||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(F||rt),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,useLegacyLights:r._useLegacyLights,decodeVideoTexture:F&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xn,flipSided:y.side===Ve,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Vt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function m(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(S(M,y),v(M,y),M.push(r.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),y.push(o.mask)}function x(y){const M=_[y.type];let D;if(M){const H=wn[M];D=Hd.clone(H.uniforms)}else D=y.uniforms;return D}function R(y,M){let D;for(let H=0,L=u.length;H<L;H++){const N=u[H];if(N.cacheKey===M){D=N,++D.usedTimes;break}}return D===void 0&&(D=new Q6(r,M,y,s),u.push(D)),D}function A(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:P}}function r7(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function s7(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Gc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Wc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,d,_,g,p){let m=r[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),t++,m}function o(h,f,d,_,g,p){const m=a(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(h,f,d,_,g,p){const m=a(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||s7),n.length>1&&n.sort(f||Gc),i.length>1&&i.sort(f||Gc)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function a7(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Wc,r.set(n,[a])):i>=s.length?(a=new Wc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function o7(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Wt};break;case"SpotLight":e={position:new I,direction:new I,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function l7(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let c7=0;function u7(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function h7(r){const t=new o7,e=l7(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new Qt,a=new Qt;function o(c,u){let h=0,f=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let _=0,g=0,p=0,m=0,S=0,v=0,x=0,R=0,A=0,b=0,P=0;c.sort(u7);const y=u===!0?Math.PI:1;for(let D=0,H=c.length;D<H;D++){const L=c[D],N=L.color,U=L.intensity,z=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*U*y,f+=N.g*U*y,d+=N.b*U*y;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],U);P++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const $=L.shadow,tt=e.get(L);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,n.directionalShadow[_]=tt,n.directionalShadowMap[_]=K,n.directionalShadowMatrix[_]=L.shadow.matrix,v++}n.directional[_]=k,_++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(N).multiplyScalar(U*y),k.distance=z,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[p]=k;const $=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,$.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[p]=$.matrix,L.castShadow){const tt=e.get(L);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,n.spotShadow[p]=tt,n.spotShadowMap[p]=K,R++}p++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(N).multiplyScalar(U),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*y),k.distance=L.distance,k.decay=L.decay,L.castShadow){const $=L.shadow,tt=e.get(L);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=k,g++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(U*y),k.groundColor.copy(L.groundColor).multiplyScalar(U*y),n.hemi[S]=k,S++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==_||M.pointLength!==g||M.spotLength!==p||M.rectAreaLength!==m||M.hemiLength!==S||M.numDirectionalShadows!==v||M.numPointShadows!==x||M.numSpotShadows!==R||M.numSpotMaps!==A||M.numLightProbes!==P)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=S,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=R+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=P,M.directionalLength=_,M.pointLength=g,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=S,M.numDirectionalShadows=v,M.numPointShadows=x,M.numSpotShadows=R,M.numSpotMaps=A,M.numLightProbes=P,n.version=c7++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const v=c[m];if(v.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),h++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Xc(r){const t=new h7(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(u){t.setup(e,u)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function f7(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Xc(r),t.set(i,[o])):s>=a.length?(o=new Xc(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class d7 extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class p7 extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const m7=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_7=`uniform sampler2D shadow_pass;
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
}`;function g7(r,t,e){let n=new Z1;const i=new st,s=new st,a=new we,o=new d7({depthPacking:Jf}),l=new p7,c={},u=e.maxTextureSize,h={[_i]:Ve,[Ve]:_i,[Xn]:Xn},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:m7,fragmentShader:_7}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ue(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J2;let m=this.type;this.render=function(A,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=r.getRenderTarget(),M=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),H=r.state;H.setBlending(fi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const L=m!==Vn&&this.type===Vn,N=m===Vn&&this.type!==Vn;for(let U=0,z=A.length;U<z;U++){const K=A[U],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const $=k.getFrameExtents();if(i.multiply($),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,k.mapSize.y=s.y)),k.map===null||L===!0||N===!0){const ct=this.type!==Vn?{minFilter:hn,magFilter:hn}:{};k.map!==null&&k.map.dispose(),k.map=new Yi(i.x,i.y,ct),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const tt=k.getViewportCount();for(let ct=0;ct<tt;ct++){const xt=k.getViewport(ct);a.set(s.x*xt.x,s.y*xt.y,s.x*xt.z,s.y*xt.w),H.viewport(a),k.updateMatrices(K,ct),n=k.getFrustum(),x(b,P,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Vn&&S(k,P),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(y,M,D)};function S(A,b){const P=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yi(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,P,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,P,d,g,null)}function v(A,b,P,y){let M=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=M.uuid,L=b.uuid;let N=c[H];N===void 0&&(N={},c[H]=N);let U=N[L];U===void 0&&(U=M.clone(),N[L]=U,b.addEventListener("dispose",R)),M=U}if(M.visible=b.visible,M.wireframe=b.wireframe,y===Vn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=r.properties.get(M);H.light=P}return M}function x(A,b,P,y,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const L=t.update(A),N=A.material;if(Array.isArray(N)){const U=L.groups;for(let z=0,K=U.length;z<K;z++){const k=U[z],$=N[k.materialIndex];if($&&$.visible){const tt=v(A,$,y,M);A.onBeforeShadow(r,A,b,P,L,tt,k),r.renderBufferDirect(P,null,L,tt,A,k),A.onAfterShadow(r,A,b,P,L,tt,k)}}}else if(N.visible){const U=v(A,N,y,M);A.onBeforeShadow(r,A,b,P,L,U,null),r.renderBufferDirect(P,null,L,U,A,null),A.onAfterShadow(r,A,b,P,L,U,null)}}const H=A.children;for(let L=0,N=H.length;L<N;L++)x(H[L],b,P,y,M)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const y=c[P],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function v7(r){function t(){let E=!1;const O=new we;let G=null;const rt=new we(0,0,0,0);return{setMask:function(ht){G!==ht&&!E&&(r.colorMask(ht,ht,ht,ht),G=ht)},setLocked:function(ht){E=ht},setClear:function(ht,Ut,Vt,ae,Ee){Ee===!0&&(ht*=ae,Ut*=ae,Vt*=ae),O.set(ht,Ut,Vt,ae),rt.equals(O)===!1&&(r.clearColor(ht,Ut,Vt,ae),rt.copy(O))},reset:function(){E=!1,G=null,rt.set(-1,0,0,0)}}}function e(){let E=!1,O=null,G=null,rt=null;return{setTest:function(ht){ht?vt(r.DEPTH_TEST):ot(r.DEPTH_TEST)},setMask:function(ht){O!==ht&&!E&&(r.depthMask(ht),O=ht)},setFunc:function(ht){if(G!==ht){switch(ht){case Ef:r.depthFunc(r.NEVER);break;case Tf:r.depthFunc(r.ALWAYS);break;case Af:r.depthFunc(r.LESS);break;case Da:r.depthFunc(r.LEQUAL);break;case bf:r.depthFunc(r.EQUAL);break;case wf:r.depthFunc(r.GEQUAL);break;case Rf:r.depthFunc(r.GREATER);break;case Cf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}G=ht}},setLocked:function(ht){E=ht},setClear:function(ht){rt!==ht&&(r.clearDepth(ht),rt=ht)},reset:function(){E=!1,O=null,G=null,rt=null}}}function n(){let E=!1,O=null,G=null,rt=null,ht=null,Ut=null,Vt=null,ae=null,Ee=null;return{setTest:function(qt){E||(qt?vt(r.STENCIL_TEST):ot(r.STENCIL_TEST))},setMask:function(qt){O!==qt&&!E&&(r.stencilMask(qt),O=qt)},setFunc:function(qt,me,ne){(G!==qt||rt!==me||ht!==ne)&&(r.stencilFunc(qt,me,ne),G=qt,rt=me,ht=ne)},setOp:function(qt,me,ne){(Ut!==qt||Vt!==me||ae!==ne)&&(r.stencilOp(qt,me,ne),Ut=qt,Vt=me,ae=ne)},setLocked:function(qt){E=qt},setClear:function(qt){Ee!==qt&&(r.clearStencil(qt),Ee=qt)},reset:function(){E=!1,O=null,G=null,rt=null,ht=null,Ut=null,Vt=null,ae=null,Ee=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,S=null,v=null,x=null,R=null,A=new Wt(0,0,0),b=0,P=!1,y=null,M=null,D=null,H=null,L=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),U=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),U=z>=2);let k=null,$={};const tt=r.getParameter(r.SCISSOR_BOX),ct=r.getParameter(r.VIEWPORT),xt=new we().fromArray(tt),wt=new we().fromArray(ct);function Y(E,O,G,rt){const ht=new Uint8Array(4),Ut=r.createTexture();r.bindTexture(E,Ut),r.texParameteri(E,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(E,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<G;Vt++)E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY?r.texImage3D(O,0,r.RGBA,1,1,rt,0,r.RGBA,r.UNSIGNED_BYTE,ht):r.texImage2D(O+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ht);return Ut}const et={};et[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),vt(r.DEPTH_TEST),s.setFunc(Da),ut(!1),it(bl),vt(r.CULL_FACE),at(fi);function vt(E){c[E]!==!0&&(r.enable(E),c[E]=!0)}function ot(E){c[E]!==!1&&(r.disable(E),c[E]=!1)}function Ct(E,O){return u[E]!==O?(r.bindFramebuffer(E,O),u[E]=O,E===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=O),E===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=O),!0):!1}function It(E,O){let G=f,rt=!1;if(E){G=h.get(O),G===void 0&&(G=[],h.set(O,G));const ht=E.textures;if(G.length!==ht.length||G[0]!==r.COLOR_ATTACHMENT0){for(let Ut=0,Vt=ht.length;Ut<Vt;Ut++)G[Ut]=r.COLOR_ATTACHMENT0+Ut;G.length=ht.length,rt=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,rt=!0);rt&&r.drawBuffers(G)}function F(E){return d!==E?(r.useProgram(E),d=E,!0):!1}const kt={[Ni]:r.FUNC_ADD,[af]:r.FUNC_SUBTRACT,[of]:r.FUNC_REVERSE_SUBTRACT};kt[lf]=r.MIN,kt[cf]=r.MAX;const Z={[uf]:r.ZERO,[hf]:r.ONE,[ff]:r.SRC_COLOR,[h1]:r.SRC_ALPHA,[vf]:r.SRC_ALPHA_SATURATE,[_f]:r.DST_COLOR,[pf]:r.DST_ALPHA,[df]:r.ONE_MINUS_SRC_COLOR,[f1]:r.ONE_MINUS_SRC_ALPHA,[gf]:r.ONE_MINUS_DST_COLOR,[mf]:r.ONE_MINUS_DST_ALPHA,[xf]:r.CONSTANT_COLOR,[yf]:r.ONE_MINUS_CONSTANT_COLOR,[Mf]:r.CONSTANT_ALPHA,[Sf]:r.ONE_MINUS_CONSTANT_ALPHA};function at(E,O,G,rt,ht,Ut,Vt,ae,Ee,qt){if(E===fi){_===!0&&(ot(r.BLEND),_=!1);return}if(_===!1&&(vt(r.BLEND),_=!0),E!==sf){if(E!==g||qt!==P){if((p!==Ni||v!==Ni)&&(r.blendEquation(r.FUNC_ADD),p=Ni,v=Ni),qt)switch(E){case Pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wl:r.blendFunc(r.ONE,r.ONE);break;case Rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}m=null,S=null,x=null,R=null,A.set(0,0,0),b=0,g=E,P=qt}return}ht=ht||O,Ut=Ut||G,Vt=Vt||rt,(O!==p||ht!==v)&&(r.blendEquationSeparate(kt[O],kt[ht]),p=O,v=ht),(G!==m||rt!==S||Ut!==x||Vt!==R)&&(r.blendFuncSeparate(Z[G],Z[rt],Z[Ut],Z[Vt]),m=G,S=rt,x=Ut,R=Vt),(ae.equals(A)===!1||Ee!==b)&&(r.blendColor(ae.r,ae.g,ae.b,Ee),A.copy(ae),b=Ee),g=E,P=!1}function J(E,O){E.side===Xn?ot(r.CULL_FACE):vt(r.CULL_FACE);let G=E.side===Ve;O&&(G=!G),ut(G),E.blending===Pr&&E.transparent===!1?at(fi):at(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),s.setFunc(E.depthFunc),s.setTest(E.depthTest),s.setMask(E.depthWrite),i.setMask(E.colorWrite);const rt=E.stencilWrite;a.setTest(rt),rt&&(a.setMask(E.stencilWriteMask),a.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),a.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Tt(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function ut(E){y!==E&&(E?r.frontFace(r.CW):r.frontFace(r.CCW),y=E)}function it(E){E!==ef?(vt(r.CULL_FACE),E!==M&&(E===bl?r.cullFace(r.BACK):E===nf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ot(r.CULL_FACE),M=E}function _t(E){E!==D&&(U&&r.lineWidth(E),D=E)}function Tt(E,O,G){E?(vt(r.POLYGON_OFFSET_FILL),(H!==O||L!==G)&&(r.polygonOffset(O,G),H=O,L=G)):ot(r.POLYGON_OFFSET_FILL)}function C(E){E?vt(r.SCISSOR_TEST):ot(r.SCISSOR_TEST)}function T(E){E===void 0&&(E=r.TEXTURE0+N-1),k!==E&&(r.activeTexture(E),k=E)}function V(E,O,G){G===void 0&&(k===null?G=r.TEXTURE0+N-1:G=k);let rt=$[G];rt===void 0&&(rt={type:void 0,texture:void 0},$[G]=rt),(rt.type!==E||rt.texture!==O)&&(k!==G&&(r.activeTexture(G),k=G),r.bindTexture(E,O||et[E]),rt.type=E,rt.texture=O)}function j(){const E=$[k];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function St(){try{r.texSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function dt(){try{r.texSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Rt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function lt(){try{r.texStorage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Mt(){try{r.texStorage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function zt(){try{r.texImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function At(){try{r.texImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function gt(E){xt.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),xt.copy(E))}function Dt(E){wt.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),wt.copy(E))}function Ht(E,O){let G=l.get(O);G===void 0&&(G=new WeakMap,l.set(O,G));let rt=G.get(E);rt===void 0&&(rt=r.getUniformBlockIndex(O,E.name),G.set(E,rt))}function jt(E,O){const rt=l.get(O).get(E);o.get(O)!==rt&&(r.uniformBlockBinding(O,rt,E.__bindingPointIndex),o.set(O,rt))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},k=null,$={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,S=null,v=null,x=null,R=null,A=new Wt(0,0,0),b=0,P=!1,y=null,M=null,D=null,H=null,L=null,xt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:vt,disable:ot,bindFramebuffer:Ct,drawBuffers:It,useProgram:F,setBlending:at,setMaterial:J,setFlipSided:ut,setCullFace:it,setLineWidth:_t,setPolygonOffset:Tt,setScissorTest:C,activeTexture:T,bindTexture:V,unbindTexture:j,compressedTexImage2D:nt,compressedTexImage3D:Q,texImage2D:zt,texImage3D:At,updateUBOMapping:Ht,uniformBlockBinding:jt,texStorage2D:lt,texStorage3D:Mt,texSubImage2D:St,texSubImage3D:dt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Rt,scissor:gt,viewport:Dt,reset:Nt}}function x7(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,T){return d?new OffscreenCanvas(C,T):Es("canvas")}function g(C,T,V){let j=1;const nt=Tt(C);if((nt.width>V||nt.height>V)&&(j=V/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(j*nt.width),St=Math.floor(j*nt.height);h===void 0&&(h=_(Q,St));const dt=T?_(Q,St):h;return dt.width=Q,dt.height=St,dt.getContext("2d").drawImage(C,0,0,Q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Q+"x"+St+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==hn&&C.minFilter!==yn}function m(C){r.generateMipmap(C)}function S(C,T,V,j,nt=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=T;if(T===r.RED&&(V===r.FLOAT&&(Q=r.R32F),V===r.HALF_FLOAT&&(Q=r.R16F),V===r.UNSIGNED_BYTE&&(Q=r.R8)),T===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.R8UI),V===r.UNSIGNED_SHORT&&(Q=r.R16UI),V===r.UNSIGNED_INT&&(Q=r.R32UI),V===r.BYTE&&(Q=r.R8I),V===r.SHORT&&(Q=r.R16I),V===r.INT&&(Q=r.R32I)),T===r.RG&&(V===r.FLOAT&&(Q=r.RG32F),V===r.HALF_FLOAT&&(Q=r.RG16F),V===r.UNSIGNED_BYTE&&(Q=r.RG8)),T===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.RG8UI),V===r.UNSIGNED_SHORT&&(Q=r.RG16UI),V===r.UNSIGNED_INT&&(Q=r.RG32UI),V===r.BYTE&&(Q=r.RG8I),V===r.SHORT&&(Q=r.RG16I),V===r.INT&&(Q=r.RG32I)),T===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),T===r.RGBA){const St=nt?Ua:Jt.getTransfer(j);V===r.FLOAT&&(Q=r.RGBA32F),V===r.HALF_FLOAT&&(Q=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Q=St===ie?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(C,T){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==yn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function x(C){const T=C.target;T.removeEventListener("dispose",x),A(T),T.isVideoTexture&&u.delete(T)}function R(C){const T=C.target;T.removeEventListener("dispose",R),P(T)}function A(C){const T=n.get(C);if(T.__webglInit===void 0)return;const V=C.source,j=f.get(V);if(j){const nt=j[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(C),Object.keys(j).length===0&&f.delete(V)}n.remove(C)}function b(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const V=C.source,j=f.get(V);delete j[T.__cacheKey],a.memory.textures--}function P(C){const T=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let nt=0;nt<T.__webglFramebuffer[j].length;nt++)r.deleteFramebuffer(T.__webglFramebuffer[j][nt]);else r.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)r.deleteFramebuffer(T.__webglFramebuffer[j]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=C.textures;for(let j=0,nt=V.length;j<nt;j++){const Q=n.get(V[j]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(V[j])}n.remove(C)}let y=0;function M(){y=0}function D(){const C=y;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),y+=1,C}function H(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function L(C,T){const V=n.get(C);if(C.isVideoTexture&&it(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(V,C,T);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+T)}function N(C,T){const V=n.get(C);if(C.version>0&&V.__version!==C.version){xt(V,C,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+T)}function U(C,T){const V=n.get(C);if(C.version>0&&V.__version!==C.version){xt(V,C,T);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+T)}function z(C,T){const V=n.get(C);if(C.version>0&&V.__version!==C.version){wt(V,C,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+T)}const K={[Xi]:r.REPEAT,[Fi]:r.CLAMP_TO_EDGE,[m1]:r.MIRRORED_REPEAT},k={[hn]:r.NEAREST,[zf]:r.NEAREST_MIPMAP_NEAREST,[Vs]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[mo]:r.LINEAR_MIPMAP_NEAREST,[Bi]:r.LINEAR_MIPMAP_LINEAR},$={[Qf]:r.NEVER,[sd]:r.ALWAYS,[td]:r.LESS,[au]:r.LEQUAL,[ed]:r.EQUAL,[rd]:r.GEQUAL,[nd]:r.GREATER,[id]:r.NOTEQUAL};function tt(C,T){if(T.type===li&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===yn||T.magFilter===mo||T.magFilter===Vs||T.magFilter===Bi||T.minFilter===yn||T.minFilter===mo||T.minFilter===Vs||T.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,K[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,K[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,K[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,k[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,k[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hn||T.minFilter!==Vs&&T.minFilter!==Bi||T.type===li&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ct(C,T){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",x));const j=T.source;let nt=f.get(j);nt===void 0&&(nt={},f.set(j,nt));const Q=H(T);if(Q!==C.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),nt[Q].usedTimes++;const St=nt[C.__cacheKey];St!==void 0&&(nt[C.__cacheKey].usedTimes--,St.usedTimes===0&&b(T)),C.__cacheKey=Q,C.__webglTexture=nt[Q].texture}return V}function xt(C,T,V){let j=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=r.TEXTURE_3D);const nt=ct(C,T),Q=T.source;e.bindTexture(j,C.__webglTexture,r.TEXTURE0+V);const St=n.get(Q);if(Q.version!==St.__version||nt===!0){e.activeTexture(r.TEXTURE0+V);const dt=Jt.getPrimaries(Jt.workingColorSpace),ft=T.colorSpace===oi?null:Jt.getPrimaries(T.colorSpace),Rt=T.colorSpace===oi||dt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let lt=g(T.image,!1,i.maxTextureSize);lt=_t(T,lt);const Mt=s.convert(T.format,T.colorSpace),zt=s.convert(T.type);let At=S(T.internalFormat,Mt,zt,T.colorSpace,T.isVideoTexture);tt(j,T);let gt;const Dt=T.mipmaps,Ht=T.isVideoTexture!==!0,jt=St.__version===void 0||nt===!0,Nt=Q.dataReady,E=v(T,lt);if(T.isDepthTexture)At=r.DEPTH_COMPONENT16,T.type===li?At=r.DEPTH_COMPONENT32F:T.type===Br?At=r.DEPTH_COMPONENT24:T.type===Fs&&(At=r.DEPTH24_STENCIL8),jt&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,At,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,At,lt.width,lt.height,0,Mt,zt,null));else if(T.isDataTexture)if(Dt.length>0){Ht&&jt&&e.texStorage2D(r.TEXTURE_2D,E,At,Dt[0].width,Dt[0].height);for(let O=0,G=Dt.length;O<G;O++)gt=Dt[O],Ht?Nt&&e.texSubImage2D(r.TEXTURE_2D,O,0,0,gt.width,gt.height,Mt,zt,gt.data):e.texImage2D(r.TEXTURE_2D,O,At,gt.width,gt.height,0,Mt,zt,gt.data);T.generateMipmaps=!1}else Ht?(jt&&e.texStorage2D(r.TEXTURE_2D,E,At,lt.width,lt.height),Nt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,Mt,zt,lt.data)):e.texImage2D(r.TEXTURE_2D,0,At,lt.width,lt.height,0,Mt,zt,lt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ht&&jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,E,At,Dt[0].width,Dt[0].height,lt.depth);for(let O=0,G=Dt.length;O<G;O++)gt=Dt[O],T.format!==Cn?Mt!==null?Ht?Nt&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,O,0,0,0,gt.width,gt.height,lt.depth,Mt,gt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,O,At,gt.width,gt.height,lt.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Nt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,O,0,0,0,gt.width,gt.height,lt.depth,Mt,zt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,O,At,gt.width,gt.height,lt.depth,0,Mt,zt,gt.data)}else{Ht&&jt&&e.texStorage2D(r.TEXTURE_2D,E,At,Dt[0].width,Dt[0].height);for(let O=0,G=Dt.length;O<G;O++)gt=Dt[O],T.format!==Cn?Mt!==null?Ht?Nt&&e.compressedTexSubImage2D(r.TEXTURE_2D,O,0,0,gt.width,gt.height,Mt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,O,At,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Nt&&e.texSubImage2D(r.TEXTURE_2D,O,0,0,gt.width,gt.height,Mt,zt,gt.data):e.texImage2D(r.TEXTURE_2D,O,At,gt.width,gt.height,0,Mt,zt,gt.data)}else if(T.isDataArrayTexture)Ht?(jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,E,At,lt.width,lt.height,lt.depth),Nt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Mt,zt,lt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,At,lt.width,lt.height,lt.depth,0,Mt,zt,lt.data);else if(T.isData3DTexture)Ht?(jt&&e.texStorage3D(r.TEXTURE_3D,E,At,lt.width,lt.height,lt.depth),Nt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Mt,zt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,At,lt.width,lt.height,lt.depth,0,Mt,zt,lt.data);else if(T.isFramebufferTexture){if(jt)if(Ht)e.texStorage2D(r.TEXTURE_2D,E,At,lt.width,lt.height);else{let O=lt.width,G=lt.height;for(let rt=0;rt<E;rt++)e.texImage2D(r.TEXTURE_2D,rt,At,O,G,0,Mt,zt,null),O>>=1,G>>=1}}else if(Dt.length>0){if(Ht&&jt){const O=Tt(Dt[0]);e.texStorage2D(r.TEXTURE_2D,E,At,O.width,O.height)}for(let O=0,G=Dt.length;O<G;O++)gt=Dt[O],Ht?Nt&&e.texSubImage2D(r.TEXTURE_2D,O,0,0,Mt,zt,gt):e.texImage2D(r.TEXTURE_2D,O,At,Mt,zt,gt);T.generateMipmaps=!1}else if(Ht){if(jt){const O=Tt(lt);e.texStorage2D(r.TEXTURE_2D,E,At,O.width,O.height)}Nt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,zt,lt)}else e.texImage2D(r.TEXTURE_2D,0,At,Mt,zt,lt);p(T)&&m(j),St.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function wt(C,T,V){if(T.image.length!==6)return;const j=ct(C,T),nt=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const Q=n.get(nt);if(nt.version!==Q.__version||j===!0){e.activeTexture(r.TEXTURE0+V);const St=Jt.getPrimaries(Jt.workingColorSpace),dt=T.colorSpace===oi?null:Jt.getPrimaries(T.colorSpace),ft=T.colorSpace===oi||St===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Rt=T.isCompressedTexture||T.image[0].isCompressedTexture,lt=T.image[0]&&T.image[0].isDataTexture,Mt=[];for(let G=0;G<6;G++)!Rt&&!lt?Mt[G]=g(T.image[G],!0,i.maxCubemapSize):Mt[G]=lt?T.image[G].image:T.image[G],Mt[G]=_t(T,Mt[G]);const zt=Mt[0],At=s.convert(T.format,T.colorSpace),gt=s.convert(T.type),Dt=S(T.internalFormat,At,gt,T.colorSpace),Ht=T.isVideoTexture!==!0,jt=Q.__version===void 0||j===!0,Nt=nt.dataReady;let E=v(T,zt);tt(r.TEXTURE_CUBE_MAP,T);let O;if(Rt){Ht&&jt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,E,Dt,zt.width,zt.height);for(let G=0;G<6;G++){O=Mt[G].mipmaps;for(let rt=0;rt<O.length;rt++){const ht=O[rt];T.format!==Cn?At!==null?Ht?Nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,0,0,ht.width,ht.height,At,ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,Dt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?Nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,0,0,ht.width,ht.height,At,gt,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt,Dt,ht.width,ht.height,0,At,gt,ht.data)}}}else{if(O=T.mipmaps,Ht&&jt){O.length>0&&E++;const G=Tt(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,E,Dt,G.width,G.height)}for(let G=0;G<6;G++)if(lt){Ht?Nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Mt[G].width,Mt[G].height,At,gt,Mt[G].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Dt,Mt[G].width,Mt[G].height,0,At,gt,Mt[G].data);for(let rt=0;rt<O.length;rt++){const Ut=O[rt].image[G].image;Ht?Nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,0,0,Ut.width,Ut.height,At,gt,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,Dt,Ut.width,Ut.height,0,At,gt,Ut.data)}}else{Ht?Nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,At,gt,Mt[G]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Dt,At,gt,Mt[G]);for(let rt=0;rt<O.length;rt++){const ht=O[rt];Ht?Nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,0,0,At,gt,ht.image[G]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,rt+1,Dt,At,gt,ht.image[G])}}}p(T)&&m(r.TEXTURE_CUBE_MAP),Q.__version=nt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Y(C,T,V,j,nt,Q){const St=s.convert(V.format,V.colorSpace),dt=s.convert(V.type),ft=S(V.internalFormat,St,dt,V.colorSpace);if(!n.get(T).__hasExternalTextures){const lt=Math.max(1,T.width>>Q),Mt=Math.max(1,T.height>>Q);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,ft,lt,Mt,T.depth,0,St,dt,null):e.texImage2D(nt,Q,ft,lt,Mt,0,St,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),ut(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,nt,n.get(V).__webglTexture,0,J(T)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,nt,n.get(V).__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function et(C,T,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let j=r.DEPTH_COMPONENT24;if(V||ut(T)){const nt=T.depthTexture;nt&&nt.isDepthTexture&&(nt.type===li?j=r.DEPTH_COMPONENT32F:nt.type===Br&&(j=r.DEPTH_COMPONENT24));const Q=J(T);ut(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,j,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,j,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,j,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const j=J(T);V&&ut(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,T.width,T.height):ut(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const j=T.textures;for(let nt=0;nt<j.length;nt++){const Q=j[nt],St=s.convert(Q.format,Q.colorSpace),dt=s.convert(Q.type),ft=S(Q.internalFormat,St,dt,Q.colorSpace),Rt=J(T);V&&ut(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ft,T.width,T.height):ut(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ft,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ft,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),L(T.depthTexture,0);const j=n.get(T.depthTexture).__webglTexture,nt=J(T);if(T.depthTexture.format===Lr)ut(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(T.depthTexture.format===Ms)ut(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ot(C){const T=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");vt(T.__webglFramebuffer,C)}else if(V){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]=r.createRenderbuffer(),et(T.__webglDepthbuffer[j],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),et(T.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(C,T,V){const j=n.get(C);T!==void 0&&Y(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&ot(C)}function It(C){const T=C.texture,V=n.get(C),j=n.get(T);C.addEventListener("dispose",R);const nt=C.textures,Q=C.isWebGLCubeRenderTarget===!0,St=nt.length>1;if(St||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=T.version,a.memory.textures++),Q){V.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[dt]=[];for(let ft=0;ft<T.mipmaps.length;ft++)V.__webglFramebuffer[dt][ft]=r.createFramebuffer()}else V.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let dt=0;dt<T.mipmaps.length;dt++)V.__webglFramebuffer[dt]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(St)for(let dt=0,ft=nt.length;dt<ft;dt++){const Rt=n.get(nt[dt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&ut(C)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let dt=0;dt<nt.length;dt++){const ft=nt[dt];V.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[dt]);const Rt=s.convert(ft.format,ft.colorSpace),lt=s.convert(ft.type),Mt=S(ft.internalFormat,Rt,lt,ft.colorSpace,C.isXRRenderTarget===!0),zt=J(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,Mt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,V.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),et(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),tt(r.TEXTURE_CUBE_MAP,T);for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)Y(V.__webglFramebuffer[dt][ft],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,ft);else Y(V.__webglFramebuffer[dt],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(T)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let dt=0,ft=nt.length;dt<ft;dt++){const Rt=nt[dt],lt=n.get(Rt);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),tt(r.TEXTURE_2D,Rt),Y(V.__webglFramebuffer,C,Rt,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,0),p(Rt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),tt(dt,T),T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)Y(V.__webglFramebuffer[ft],C,T,r.COLOR_ATTACHMENT0,dt,ft);else Y(V.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,dt,0);p(T)&&m(dt),e.unbindTexture()}C.depthBuffer&&ot(C)}function F(C){const T=C.textures;for(let V=0,j=T.length;V<j;V++){const nt=T[V];if(p(nt)){const Q=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,St=n.get(nt).__webglTexture;e.bindTexture(Q,St),m(Q),e.unbindTexture()}}}const kt=[],Z=[];function at(C){if(C.samples>0){if(ut(C)===!1){const T=C.textures,V=C.width,j=C.height;let nt=r.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=n.get(C),dt=T.length>1;if(dt)for(let ft=0;ft<T.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ft=0;ft<T.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const Rt=n.get(T[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,V,j,0,0,V,j,nt,r.NEAREST),l===!0&&(kt.length=0,Z.length=0,kt.push(r.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(kt.push(Q),Z.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let ft=0;ft<T.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);const Rt=n.get(T[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,Rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function J(C){return Math.min(i.maxSamples,C.samples)}function ut(C){const T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function it(C){const T=a.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function _t(C,T){const V=C.colorSpace,j=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Mi&&V!==oi&&(Jt.getTransfer(V)===ie?(j!==Cn||nt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=M,this.setTexture2D=L,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=z,this.rebindTextures=Ct,this.setupRenderTarget=It,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=ut}function y7(r,t){function e(n,i=oi){let s;const a=Jt.getTransfer(i);if(n===gi)return r.UNSIGNED_BYTE;if(n===eu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Vf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===kf)return r.BYTE;if(n===Hf)return r.SHORT;if(n===Q2)return r.UNSIGNED_SHORT;if(n===tu)return r.INT;if(n===Br)return r.UNSIGNED_INT;if(n===li)return r.FLOAT;if(n===to)return r.HALF_FLOAT;if(n===Gf)return r.ALPHA;if(n===Wf)return r.RGB;if(n===Cn)return r.RGBA;if(n===Xf)return r.LUMINANCE;if(n===Yf)return r.LUMINANCE_ALPHA;if(n===Lr)return r.DEPTH_COMPONENT;if(n===Ms)return r.DEPTH_STENCIL;if(n===qf)return r.RED;if(n===iu)return r.RED_INTEGER;if(n===Zf)return r.RG;if(n===ru)return r.RG_INTEGER;if(n===su)return r.RGBA_INTEGER;if(n===_o||n===go||n===vo||n===xo)if(a===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pl||n===Ll||n===Dl||n===Ul)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Nl||n===Ol)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Il||n===Nl)return a===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ol)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fl||n===Bl||n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===Yl||n===ql||n===Zl||n===Kl||n===jl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ql)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===Jl||n===$l)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===yo)return a===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kf||n===Ql||n===tc||n===ec)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class M7 extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ua extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S7={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S7)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ua;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const E7=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T7=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A7{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new ke,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:E7,fragmentShader:T7,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ue(new zs(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class b7 extends $i{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new A7,p=e.getContextAttributes();let m=null,S=null;const v=[],x=[],R=new st;let A=null;const b=new un;b.layers.enable(1),b.viewport=new we;const P=new un;P.layers.enable(2),P.viewport=new we;const y=[b,P],M=new M7;M.layers.enable(1),M.layers.enable(2);let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=v[Y];return et===void 0&&(et=new Xo,v[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=v[Y];return et===void 0&&(et=new Xo,v[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=v[Y];return et===void 0&&(et=new Xo,v[Y]=et),et.getHandSpace()};function L(Y){const et=x.indexOf(Y.inputSource);if(et===-1)return;const vt=v[et];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",U);for(let Y=0;Y<v.length;Y++){const et=x[Y];et!==null&&(x[Y]=null,v[Y].disconnect(et))}D=null,H=null,g.reset(),t.setRenderTarget(m),d=null,f=null,h=null,i=null,S=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",N),i.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Yi(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,vt=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Ms:Lr,vt=p.stencil?Fs:Br);const Ct={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Ct),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Yi(f.textureWidth,f.textureHeight,{format:Cn,type:gi,depthTexture:new xu(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),wt.setContext(i),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(Y){for(let et=0;et<Y.removed.length;et++){const vt=Y.removed[et],ot=x.indexOf(vt);ot>=0&&(x[ot]=null,v[ot].disconnect(vt))}for(let et=0;et<Y.added.length;et++){const vt=Y.added[et];let ot=x.indexOf(vt);if(ot===-1){for(let It=0;It<v.length;It++)if(It>=x.length){x.push(vt),ot=It;break}else if(x[It]===null){x[It]=vt,ot=It;break}if(ot===-1)break}const Ct=v[ot];Ct&&Ct.connect(vt)}}const z=new I,K=new I;function k(Y,et,vt){z.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(vt.matrixWorld);const ot=z.distanceTo(K),Ct=et.projectionMatrix.elements,It=vt.projectionMatrix.elements,F=Ct[14]/(Ct[10]-1),kt=Ct[14]/(Ct[10]+1),Z=(Ct[9]+1)/Ct[5],at=(Ct[9]-1)/Ct[5],J=(Ct[8]-1)/Ct[0],ut=(It[8]+1)/It[0],it=F*J,_t=F*ut,Tt=ot/(-J+ut),C=Tt*-J;et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(C),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const T=F+Tt,V=kt+Tt,j=it-C,nt=_t+(ot-C),Q=Z*kt/V*T,St=at*kt/V*T;Y.projectionMatrix.makePerspective(j,nt,Q,St,T,V),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function $(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;g.texture!==null&&(Y.near=g.depthNear,Y.far=g.depthFar),M.near=P.near=b.near=Y.near,M.far=P.far=b.far=Y.far,(D!==M.near||H!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,H=M.far,b.near=D,b.far=H,P.near=D,P.far=H,b.updateProjectionMatrix(),P.updateProjectionMatrix(),Y.updateProjectionMatrix());const et=Y.parent,vt=M.cameras;$(M,et);for(let ot=0;ot<vt.length;ot++)$(vt[ot],et);vt.length===2?k(M,b,P):M.projectionMatrix.copy(b.projectionMatrix),tt(Y,M,et)};function tt(Y,et,vt){vt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ss*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null};let ct=null;function xt(Y,et){if(u=et.getViewerPose(c||a),_=et,u!==null){const vt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let ot=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let It=0;It<vt.length;It++){const F=vt[It];let kt=null;if(d!==null)kt=d.getViewport(F);else{const at=h.getViewSubImage(f,F);kt=at.viewport,It===0&&(t.setRenderTargetTextures(S,at.colorTexture,f.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(S))}let Z=y[It];Z===void 0&&(Z=new un,Z.layers.enable(It),Z.viewport=new we,y[It]=Z),Z.matrix.fromArray(F.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(F.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(kt.x,kt.y,kt.width,kt.height),It===0&&(M.matrix.copy(Z.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Z)}const Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const It=h.getDepthInformation(vt[0]);It&&It.isValid&&It.texture&&g.init(t,It,i.renderState)}}for(let vt=0;vt<v.length;vt++){const ot=x[vt],Ct=v[vt];ot!==null&&Ct!==void 0&&Ct.update(ot,et,c||a)}g.render(t,M),ct&&ct(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const wt=new gu;wt.setAnimationLoop(xt),this.setAnimationLoop=function(Y){ct=Y},this.dispose=function(){}}}const Pi=new Tn,w7=new Qt;function R7(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,pu(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ve&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ve&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),v=S.envMap,x=S.envMapRotation;if(v&&(p.envMap.value=v,Pi.copy(x),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),p.envMapRotation.value.setFromMatrix4(w7.makeRotationFromEuler(Pi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function C7(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const x=v.program;n.uniformBlockBinding(S,x)}function c(S,v){let x=i[S.id];x===void 0&&(_(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(S,R);const A=t.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function u(S){const v=h();S.__bindingPointIndex=v;const x=r.createBuffer(),R=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=i[S.id],x=S.uniforms,R=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,b=x.length;A<b;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,M=P.length;y<M;y++){const D=P[y];if(d(D,A,y,R)===!0){const H=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let U=0;U<L.length;U++){const z=L[U],K=g(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,H+N,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,N),N+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,v,x,R){const A=S.value,b=v+"_"+x;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const P=R[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(S){const v=S.uniforms;let x=0;const R=16;for(let b=0,P=v.length;b<P;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,D=y.length;M<D;M++){const H=y[M],L=Array.isArray(H.value)?H.value:[H.value];for(let N=0,U=L.length;N<U;N++){const z=L[N],K=g(z),k=x%R;k!==0&&R-k<K.boundary&&(x+=R-k),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=K.storage}}}const A=x%R;return A>0&&(x+=R-A),S.__size=x,S.__cache={},this}function g(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class P7{constructor(t={}){const{canvas:e=Ed(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;const v=this;let x=!1,R=0,A=0,b=null,P=-1,y=null;const M=new we,D=new we;let H=null;const L=new Wt(0);let N=0,U=e.width,z=e.height,K=1,k=null,$=null;const tt=new we(0,0,U,z),ct=new we(0,0,U,z);let xt=!1;const wt=new Z1;let Y=!1,et=!1;const vt=new Qt,ot=new I,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return b===null?K:1}let F=n;function kt(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${G1}`),e.addEventListener("webglcontextlost",E,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",G,!1),F===null){const B="webgl2";if(F=kt(B,w),F===null)throw kt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Z,at,J,ut,it,_t,Tt,C,T,V,j,nt,Q,St,dt,ft,Rt,lt,Mt,zt,At,gt,Dt,Ht;function jt(){Z=new B5(F),Z.init(),gt=new y7(F,Z),at=new D5(F,Z,t,gt),J=new v7(F),ut=new H5(F),it=new r7,_t=new x7(F,Z,J,it,at,gt,ut),Tt=new I5(v),C=new F5(v),T=new Zd(F),Dt=new P5(F,T),V=new z5(F,T,ut,Dt),j=new G5(F,V,T,ut),Mt=new V5(F,at,_t),ft=new U5(it),nt=new i7(v,Tt,C,Z,at,Dt,ft),Q=new R7(v,it),St=new a7,dt=new f7(Z),lt=new C5(v,Tt,C,J,j,f,l),Rt=new g7(v,j,at),Ht=new C7(F,ut,at,J),zt=new L5(F,Z,ut),At=new k5(F,Z,ut),ut.programs=nt.programs,v.capabilities=at,v.extensions=Z,v.properties=it,v.renderLists=St,v.shadowMap=Rt,v.state=J,v.info=ut}jt();const Nt=new b7(v,F);this.xr=Nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Z.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Z.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(U,z,!1))},this.getSize=function(w){return w.set(U,z)},this.setSize=function(w,B,q=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,z=B,e.width=Math.floor(w*K),e.height=Math.floor(B*K),q===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(U*K,z*K).floor()},this.setDrawingBufferSize=function(w,B,q){U=w,z=B,K=q,e.width=Math.floor(w*q),e.height=Math.floor(B*q),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,B,q,W){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,B,q,W),J.viewport(M.copy(tt).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(ct)},this.setScissor=function(w,B,q,W){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,B,q,W),J.scissor(D.copy(ct).multiplyScalar(K).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(w){J.setScissorTest(xt=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(w=!0,B=!0,q=!0){let W=0;if(w){let X=!1;if(b!==null){const mt=b.texture.format;X=mt===su||mt===ru||mt===iu}if(X){const mt=b.texture.type,yt=mt===gi||mt===Br||mt===Q2||mt===Fs||mt===eu||mt===nu,Et=lt.getClearColor(),bt=lt.getClearAlpha(),Pt=Et.r,Ot=Et.g,Gt=Et.b;yt?(d[0]=Pt,d[1]=Ot,d[2]=Gt,d[3]=bt,F.clearBufferuiv(F.COLOR,0,d)):(_[0]=Pt,_[1]=Ot,_[2]=Gt,_[3]=bt,F.clearBufferiv(F.COLOR,0,_))}else W|=F.COLOR_BUFFER_BIT}B&&(W|=F.DEPTH_BUFFER_BIT),q&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",E,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",G,!1),St.dispose(),dt.dispose(),it.dispose(),Tt.dispose(),C.dispose(),j.dispose(),Dt.dispose(),Ht.dispose(),nt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",qt),Nt.removeEventListener("sessionend",me),ne.stop()};function E(w){w.preventDefault(),x=!0}function O(){x=!1;const w=ut.autoReset,B=Rt.enabled,q=Rt.autoUpdate,W=Rt.needsUpdate,X=Rt.type;jt(),ut.autoReset=w,Rt.enabled=B,Rt.autoUpdate=q,Rt.needsUpdate=W,Rt.type=X}function G(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const B=w.target;B.removeEventListener("dispose",rt),ht(B)}function ht(w){Ut(w),it.remove(w)}function Ut(w){const B=it.get(w).programs;B!==void 0&&(B.forEach(function(q){nt.releaseProgram(q)}),w.isShaderMaterial&&nt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,q,W,X,mt){B===null&&(B=Ct);const yt=X.isMesh&&X.matrixWorld.determinant()<0,Et=Yh(w,B,q,W,X);J.setMaterial(W,yt);let bt=q.index,Pt=1;if(W.wireframe===!0){if(bt=V.getWireframeAttribute(q),bt===void 0)return;Pt=2}const Ot=q.drawRange,Gt=q.attributes.position;let _e=Ot.start*Pt,Ce=(Ot.start+Ot.count)*Pt;mt!==null&&(_e=Math.max(_e,mt.start*Pt),Ce=Math.min(Ce,(mt.start+mt.count)*Pt)),bt!==null?(_e=Math.max(_e,0),Ce=Math.min(Ce,bt.count)):Gt!=null&&(_e=Math.max(_e,0),Ce=Math.min(Ce,Gt.count));const Ze=Ce-_e;if(Ze<0||Ze===1/0)return;Dt.setup(X,W,Et,q,bt);let On,Zt=zt;if(bt!==null&&(On=T.get(bt),Zt=At,Zt.setIndex(On)),X.isMesh)W.wireframe===!0?(J.setLineWidth(W.wireframeLinewidth*It()),Zt.setMode(F.LINES)):Zt.setMode(F.TRIANGLES);else if(X.isLine){let Lt=W.linewidth;Lt===void 0&&(Lt=1),J.setLineWidth(Lt*It()),X.isLineSegments?Zt.setMode(F.LINES):X.isLineLoop?Zt.setMode(F.LINE_LOOP):Zt.setMode(F.LINE_STRIP)}else X.isPoints?Zt.setMode(F.POINTS):X.isSprite&&Zt.setMode(F.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?Zt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):Zt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Zt.renderInstances(_e,Ze,X.count);else if(q.isInstancedBufferGeometry){const Lt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,jr=Math.min(q.instanceCount,Lt);Zt.renderInstances(_e,Ze,jr)}else Zt.render(_e,Ze)};function Vt(w,B,q){w.transparent===!0&&w.side===Xn&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,Hs(w,B,q),w.side=_i,w.needsUpdate=!0,Hs(w,B,q),w.side=Xn):Hs(w,B,q)}this.compile=function(w,B,q=null){q===null&&(q=w),p=dt.get(q),p.init(B),S.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),w!==q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(v._useLegacyLights);const W=new Set;return w.traverse(function(X){const mt=X.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){const Et=mt[yt];Vt(Et,q,X),W.add(Et)}else Vt(mt,q,X),W.add(mt)}),S.pop(),p=null,W},this.compileAsync=function(w,B,q=null){const W=this.compile(w,B,q);return new Promise(X=>{function mt(){if(W.forEach(function(yt){it.get(yt).currentProgram.isReady()&&W.delete(yt)}),W.size===0){X(w);return}setTimeout(mt,10)}Z.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ae=null;function Ee(w){ae&&ae(w)}function qt(){ne.stop()}function me(){ne.start()}const ne=new gu;ne.setAnimationLoop(Ee),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(w){ae=w,Nt.setAnimationLoop(w),w===null?ne.stop():ne.start()},Nt.addEventListener("sessionstart",qt),Nt.addEventListener("sessionend",me),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(B),B=Nt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,b),p=dt.get(w,S.length),p.init(B),S.push(p),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),wt.setFromProjectionMatrix(vt),et=this.localClippingEnabled,Y=ft.init(this.clippingPlanes,et),g=St.get(w,m.length),g.init(),m.push(g),Jn(w,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(k,$);const q=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1;q&&lt.addToRenderList(g,w),this.info.render.frame++,Y===!0&&ft.beginShadows();const W=p.state.shadowsArray;Rt.render(W,w,B),Y===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,mt=g.transmissive;if(p.setupLights(v._useLegacyLights),B.isArrayCamera){const yt=B.cameras;if(mt.length>0)for(let Et=0,bt=yt.length;Et<bt;Et++){const Pt=yt[Et];$n(X,mt,w,Pt)}q&&lt.render(w);for(let Et=0,bt=yt.length;Et<bt;Et++){const Pt=yt[Et];an(g,w,Pt,Pt.viewport)}}else mt.length>0&&$n(X,mt,w,B),q&&lt.render(w),an(g,w,B);b!==null&&(_t.updateMultisampleRenderTarget(b),_t.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(v,w,B),Dt.resetDefaultState(),P=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],Y===!0&&ft.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Jn(w,B,q,W){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||wt.intersectsSprite(w)){W&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(vt);const yt=j.update(w),Et=w.material;Et.visible&&g.push(w,yt,Et,q,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||wt.intersectsObject(w))){const yt=j.update(w),Et=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),ot.copy(yt.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(vt)),Array.isArray(Et)){const bt=yt.groups;for(let Pt=0,Ot=bt.length;Pt<Ot;Pt++){const Gt=bt[Pt],_e=Et[Gt.materialIndex];_e&&_e.visible&&g.push(w,yt,_e,q,ot.z,Gt)}}else Et.visible&&g.push(w,yt,Et,q,ot.z,null)}}const mt=w.children;for(let yt=0,Et=mt.length;yt<Et;yt++)Jn(mt[yt],B,q,W)}function an(w,B,q,W){const X=w.opaque,mt=w.transmissive,yt=w.transparent;p.setupLightsView(q),Y===!0&&ft.setGlobalState(v.clippingPlanes,q),W&&J.viewport(M.copy(W)),X.length>0&&Nn(X,B,q),mt.length>0&&Nn(mt,B,q),yt.length>0&&Nn(yt,B,q),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function $n(w,B,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Yi(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?to:gi,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const mt=p.state.transmissionRenderTarget[W.id],yt=W.viewport||M;mt.setSize(yt.z,yt.w);const Et=v.getRenderTarget();v.setRenderTarget(mt),v.getClearColor(L),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const bt=v.toneMapping;v.toneMapping=di;const Pt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Y===!0&&ft.setGlobalState(v.clippingPlanes,W),Nn(w,q,W),_t.updateMultisampleRenderTarget(mt),_t.updateRenderTargetMipmap(mt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Gt=0,_e=B.length;Gt<_e;Gt++){const Ce=B[Gt],Ze=Ce.object,On=Ce.geometry,Zt=Ce.material,Lt=Ce.group;if(Zt.side===Xn&&Ze.layers.test(W.layers)){const jr=Zt.side;Zt.side=Ve,Zt.needsUpdate=!0,Kr(Ze,q,W,On,Zt,Lt),Zt.side=jr,Zt.needsUpdate=!0,Ot=!0}}Ot===!0&&(_t.updateMultisampleRenderTarget(mt),_t.updateRenderTargetMipmap(mt))}v.setRenderTarget(Et),v.setClearColor(L,N),Pt!==void 0&&(W.viewport=Pt),v.toneMapping=bt}function Nn(w,B,q){const W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,mt=w.length;X<mt;X++){const yt=w[X],Et=yt.object,bt=yt.geometry,Pt=W===null?yt.material:W,Ot=yt.group;Et.layers.test(q.layers)&&Kr(Et,B,q,bt,Pt,Ot)}}function Kr(w,B,q,W,X,mt){w.onBeforeRender(v,B,q,W,X,mt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(v,B,q,W,w,mt),X.transparent===!0&&X.side===Xn&&X.forceSinglePass===!1?(X.side=Ve,X.needsUpdate=!0,v.renderBufferDirect(q,B,W,X,w,mt),X.side=_i,X.needsUpdate=!0,v.renderBufferDirect(q,B,W,X,w,mt),X.side=Xn):v.renderBufferDirect(q,B,W,X,w,mt),w.onAfterRender(v,B,q,W,X,mt)}function Hs(w,B,q){B.isScene!==!0&&(B=Ct);const W=it.get(w),X=p.state.lights,mt=p.state.shadowsArray,yt=X.state.version,Et=nt.getParameters(w,X.state,mt,B,q),bt=nt.getProgramCacheKey(Et);let Pt=W.programs;W.environment=w.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(w.isMeshStandardMaterial?C:Tt).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",rt),Pt=new Map,W.programs=Pt);let Ot=Pt.get(bt);if(Ot!==void 0){if(W.currentProgram===Ot&&W.lightsStateVersion===yt)return Sl(w,Et),Ot}else Et.uniforms=nt.getUniforms(w),w.onBuild(q,Et,v),w.onBeforeCompile(Et,v),Ot=nt.acquireProgram(Et,bt),Pt.set(bt,Ot),W.uniforms=Et.uniforms;const Gt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=ft.uniform),Sl(w,Et),W.needsLights=Zh(w),W.lightsStateVersion=yt,W.needsLights&&(Gt.ambientLightColor.value=X.state.ambient,Gt.lightProbe.value=X.state.probe,Gt.directionalLights.value=X.state.directional,Gt.directionalLightShadows.value=X.state.directionalShadow,Gt.spotLights.value=X.state.spot,Gt.spotLightShadows.value=X.state.spotShadow,Gt.rectAreaLights.value=X.state.rectArea,Gt.ltc_1.value=X.state.rectAreaLTC1,Gt.ltc_2.value=X.state.rectAreaLTC2,Gt.pointLights.value=X.state.point,Gt.pointLightShadows.value=X.state.pointShadow,Gt.hemisphereLights.value=X.state.hemi,Gt.directionalShadowMap.value=X.state.directionalShadowMap,Gt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Gt.spotShadowMap.value=X.state.spotShadowMap,Gt.spotLightMatrix.value=X.state.spotLightMatrix,Gt.spotLightMap.value=X.state.spotLightMap,Gt.pointShadowMap.value=X.state.pointShadowMap,Gt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.currentProgram=Ot,W.uniformsList=null,Ot}function Ml(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=wa.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Sl(w,B){const q=it.get(w);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Yh(w,B,q,W,X){B.isScene!==!0&&(B=Ct),_t.resetTextureUnits();const mt=B.fog,yt=W.isMeshStandardMaterial?B.environment:null,Et=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Mi,bt=(W.isMeshStandardMaterial?C:Tt).get(W.envMap||yt),Pt=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ot=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Gt=!!q.morphAttributes.position,_e=!!q.morphAttributes.normal,Ce=!!q.morphAttributes.color;let Ze=di;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ze=v.toneMapping);const On=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Zt=On!==void 0?On.length:0,Lt=it.get(W),jr=p.state.lights;if(Y===!0&&(et===!0||w!==y)){const on=w===y&&W.id===P;ft.setState(W,w,on)}let re=!1;W.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==jr.state.version||Lt.outputColorSpace!==Et||X.isBatchedMesh&&Lt.batching===!1||!X.isBatchedMesh&&Lt.batching===!0||X.isInstancedMesh&&Lt.instancing===!1||!X.isInstancedMesh&&Lt.instancing===!0||X.isSkinnedMesh&&Lt.skinning===!1||!X.isSkinnedMesh&&Lt.skinning===!0||X.isInstancedMesh&&Lt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Lt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Lt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Lt.instancingMorph===!1&&X.morphTexture!==null||Lt.envMap!==bt||W.fog===!0&&Lt.fog!==mt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ft.numPlanes||Lt.numIntersection!==ft.numIntersection)||Lt.vertexAlphas!==Pt||Lt.vertexTangents!==Ot||Lt.morphTargets!==Gt||Lt.morphNormals!==_e||Lt.morphColors!==Ce||Lt.toneMapping!==Ze||Lt.morphTargetsCount!==Zt)&&(re=!0):(re=!0,Lt.__version=W.version);let Ti=Lt.currentProgram;re===!0&&(Ti=Hs(W,B,X));let El=!1,Jr=!1,uo=!1;const Pe=Ti.getUniforms(),Qn=Lt.uniforms;if(J.useProgram(Ti.program)&&(El=!0,Jr=!0,uo=!0),W.id!==P&&(P=W.id,Jr=!0),El||y!==w){Pe.setValue(F,"projectionMatrix",w.projectionMatrix),Pe.setValue(F,"viewMatrix",w.matrixWorldInverse);const on=Pe.map.cameraPosition;on!==void 0&&on.setValue(F,ot.setFromMatrixPosition(w.matrixWorld)),at.logarithmicDepthBuffer&&Pe.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Pe.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Jr=!0,uo=!0)}if(X.isSkinnedMesh){Pe.setOptional(F,X,"bindMatrix"),Pe.setOptional(F,X,"bindMatrixInverse");const on=X.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Pe.setValue(F,"boneTexture",on.boneTexture,_t))}X.isBatchedMesh&&(Pe.setOptional(F,X,"batchingTexture"),Pe.setValue(F,"batchingTexture",X._matricesTexture,_t));const ho=q.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0)&&Mt.update(X,q,Ti),(Jr||Lt.receiveShadow!==X.receiveShadow)&&(Lt.receiveShadow=X.receiveShadow,Pe.setValue(F,"receiveShadow",X.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qn.envMap.value=bt,Qn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Qn.envMapIntensity.value=B.environmentIntensity),Jr&&(Pe.setValue(F,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&qh(Qn,uo),mt&&W.fog===!0&&Q.refreshFogUniforms(Qn,mt),Q.refreshMaterialUniforms(Qn,W,K,z,p.state.transmissionRenderTarget[w.id]),wa.upload(F,Ml(Lt),Qn,_t)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(wa.upload(F,Ml(Lt),Qn,_t),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Pe.setValue(F,"center",X.center),Pe.setValue(F,"modelViewMatrix",X.modelViewMatrix),Pe.setValue(F,"normalMatrix",X.normalMatrix),Pe.setValue(F,"modelMatrix",X.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const on=W.uniformsGroups;for(let fo=0,Kh=on.length;fo<Kh;fo++){const Tl=on[fo];Ht.update(Tl,Ti),Ht.bind(Tl,Ti)}}return Ti}function qh(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Zh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,B,q){it.get(w.texture).__webglTexture=B,it.get(w.depthTexture).__webglTexture=q;const W=it.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const q=it.get(w);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,q=0){b=w,R=B,A=q;let W=!0,X=null,mt=!1,yt=!1;if(w){const bt=it.get(w);bt.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):bt.__webglFramebuffer===void 0?_t.setupRenderTarget(w):bt.__hasExternalTextures&&_t.rebindTextures(w,it.get(w.texture).__webglTexture,it.get(w.depthTexture).__webglTexture);const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(yt=!0);const Ot=it.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ot[B])?X=Ot[B][q]:X=Ot[B],mt=!0):w.samples>0&&_t.useMultisampledRTT(w)===!1?X=it.get(w).__webglMultisampledFramebuffer:Array.isArray(Ot)?X=Ot[q]:X=Ot,M.copy(w.viewport),D.copy(w.scissor),H=w.scissorTest}else M.copy(tt).multiplyScalar(K).floor(),D.copy(ct).multiplyScalar(K).floor(),H=xt;if(J.bindFramebuffer(F.FRAMEBUFFER,X)&&W&&J.drawBuffers(w,X),J.viewport(M),J.scissor(D),J.setScissorTest(H),mt){const bt=it.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,bt.__webglTexture,q)}else if(yt){const bt=it.get(w.texture),Pt=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.__webglTexture,q||0,Pt)}P=-1},this.readRenderTargetPixels=function(w,B,q,W,X,mt,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=it.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Et=Et[yt]),Et){J.bindFramebuffer(F.FRAMEBUFFER,Et);try{const bt=w.texture,Pt=bt.format,Ot=bt.type;if(!at.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-W&&q>=0&&q<=w.height-X&&F.readPixels(B,q,W,X,gt.convert(Pt),gt.convert(Ot),mt)}finally{const bt=b!==null?it.get(b).__webglFramebuffer:null;J.bindFramebuffer(F.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(w,B,q=0){const W=Math.pow(2,-q),X=Math.floor(B.image.width*W),mt=Math.floor(B.image.height*W);_t.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,w.x,w.y,X,mt),J.unbindTexture()},this.copyTextureToTexture=function(w,B,q,W=0){const X=B.image.width,mt=B.image.height,yt=gt.convert(q.format),Et=gt.convert(q.type);_t.setTexture2D(q,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,w.x,w.y,X,mt,yt,Et,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,yt,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,w.x,w.y,yt,Et,B.image),W===0&&q.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(w,B,q,W,X=0){const mt=w.max.x-w.min.x,yt=w.max.y-w.min.y,Et=w.max.z-w.min.z,bt=gt.convert(W.format),Pt=gt.convert(W.type);let Ot;if(W.isData3DTexture)_t.setTexture3D(W,0),Ot=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)_t.setTexture2DArray(W,0),Ot=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Gt=F.getParameter(F.UNPACK_ROW_LENGTH),_e=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ce=F.getParameter(F.UNPACK_SKIP_PIXELS),Ze=F.getParameter(F.UNPACK_SKIP_ROWS),On=F.getParameter(F.UNPACK_SKIP_IMAGES),Zt=q.isCompressedTexture?q.mipmaps[X]:q.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Zt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Zt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),q.isDataTexture||q.isData3DTexture?F.texSubImage3D(Ot,X,B.x,B.y,B.z,mt,yt,Et,bt,Pt,Zt.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Ot,X,B.x,B.y,B.z,mt,yt,Et,bt,Zt.data):F.texSubImage3D(Ot,X,B.x,B.y,B.z,mt,yt,Et,bt,Pt,Zt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Gt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,On),X===0&&W.generateMipmaps&&F.generateMipmap(Ot),J.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?_t.setTextureCube(w,0):w.isData3DTexture?_t.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?_t.setTexture2DArray(w,0):_t.setTexture2D(w,0),J.unbindTexture()},this.resetState=function(){R=0,A=0,b=null,J.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===X1?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===eo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class L7 extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class D7{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_1,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return lu("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new I;class Fa{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new En(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Au extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xr;const ns=new I,yr=new I,Mr=new I,Sr=new st,is=new st,bu=new Qt,ha=new I,rs=new I,fa=new I,Yc=new st,Yo=new st,qc=new st;class U7 extends ye{constructor(t=new Au){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new _n;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new D7(e,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new Fa(n,3,0,!1)),xr.setAttribute("uv",new Fa(n,2,3,!1))}this.geometry=xr,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),bu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-Mr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;da(ha.set(-.5,-.5,0),Mr,a,yr,i,s),da(rs.set(.5,-.5,0),Mr,a,yr,i,s),da(fa.set(.5,.5,0),Mr,a,yr,i,s),Yc.set(0,0),Yo.set(1,0),qc.set(1,1);let o=t.ray.intersectTriangle(ha,rs,fa,!1,ns);if(o===null&&(da(rs.set(-.5,.5,0),Mr,a,yr,i,s),Yo.set(0,1),o=t.ray.intersectTriangle(ha,fa,rs,!1,ns),o===null))return;const l=t.ray.origin.distanceTo(ns);l<t.near||l>t.far||e.push({distance:l,point:ns.clone(),uv:Sn.getInterpolation(ns,ha,rs,fa,Yc,Yo,qc,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function da(r,t,e,n,i,s){Sr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(is.x=s*Sr.x-i*Sr.y,is.y=i*Sr.x+s*Sr.y):is.copy(Sr),r.copy(t),r.x+=is.x,r.y+=is.y,r.applyMatrix4(bu)}class wu extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ba=new I,za=new I,Zc=new Qt,ss=new io,pa=new no,qo=new I,Kc=new I;class I7 extends ye{constructor(t=new _n,e=new wu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ba.fromBufferAttribute(e,i-1),za.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ba.distanceTo(za);t.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=s,t.ray.intersectsSphere(pa)===!1)return;Zc.copy(i).invert(),ss.copy(t.ray).applyMatrix4(Zc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=d,p=_-1;g<p;g+=c){const m=u.getX(g),S=u.getX(g+1),v=ma(this,t,ss,l,m,S);v&&e.push(v)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(d),m=ma(this,t,ss,l,g,p);m&&e.push(m)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=d,p=_-1;g<p;g+=c){const m=ma(this,t,ss,l,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=ma(this,t,ss,l,_-1,d);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ma(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(Ba.fromBufferAttribute(a,i),za.fromBufferAttribute(a,s),e.distanceSqToSegment(Ba,za,qo,Kc)>n)return;qo.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(qo);if(!(l<t.near||l>t.far))return{distance:l,point:Kc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new st:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],s=[],a=[],o=new I,l=new Qt;for(let d=0;d<=t;d++){const _=d/t;i[d]=this.getTangentAt(_,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ae(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ae(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class j1 extends In{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class N7 extends j1{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function J1(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const _a=new I,Zo=new J1,Ko=new J1,jo=new J1;class Ru extends In{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(_a.subVectors(i[0],i[1]).add(i[0]),c=_a);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(_a.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=_a),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Zo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,p),Ko.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,p),jo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ko.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),jo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Zo.calc(l),Ko.calc(l),jo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jc(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function O7(r,t){const e=1-r;return e*e*t}function F7(r,t){return 2*(1-r)*r*t}function B7(r,t){return r*r*t}function ms(r,t,e,n){return O7(r,t)+F7(r,e)+B7(r,n)}function z7(r,t){const e=1-r;return e*e*e*t}function k7(r,t){const e=1-r;return 3*e*e*r*t}function H7(r,t){return 3*(1-r)*r*r*t}function V7(r,t){return r*r*r*t}function _s(r,t,e,n,i){return z7(r,t)+k7(r,e)+H7(r,n)+V7(r,i)}class Cu extends In{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(_s(t,i.x,s.x,a.x,o.x),_s(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class G7 extends In{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(_s(t,i.x,s.x,a.x,o.x),_s(t,i.y,s.y,a.y,o.y),_s(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pu extends In{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class W7 extends In{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends In{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(ms(t,i.x,s.x,a.x),ms(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Du extends In{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(ms(t,i.x,s.x,a.x),ms(t,i.y,s.y,a.y),ms(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uu extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(jc(o,l.x,c.x,u.x,h.x),jc(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var ka=Object.freeze({__proto__:null,ArcCurve:N7,CatmullRomCurve3:Ru,CubicBezierCurve:Cu,CubicBezierCurve3:G7,EllipseCurve:j1,LineCurve:Pu,LineCurve3:W7,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:Du,SplineCurve:Uu});class X7 extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ka[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ka[i.type]().fromJSON(i))}return this}}class Jc extends X7{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pu(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Lu(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new Cu(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new j1(t,e,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Iu extends Jc{constructor(t){super(t),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Jc().fromJSON(i))}return this}}const Y7={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Nu(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,d;if(n&&(s=J7(r,t,s,e)),r.length>80*e){o=c=r[0],l=u=r[1];for(let _=e;_<i;_+=e)h=r[_],f=r[_+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Ts(s,a,e,o,l,d,0),a}};function Nu(r,t,e,n,i){let s,a;if(i===l8(r,t,e,n)>0)for(s=t;s<e;s+=n)a=$c(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=$c(s,r[s],r[s+1],a);return a&&so(a,a.next)&&(bs(a),a=a.next),a}function Zi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(so(e,e.next)||le(e.prev,e,e.next)===0)){if(bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(r,t,e,n,i,s,a){if(!r)return;!a&&s&&n8(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Z7(r,n,i,s):q7(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),bs(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=K7(Zi(r),t,e),Ts(r,t,e,n,i,s,2)):a===2&&j7(r,t,e,n,i,s):Ts(Zi(r),t,e,n,i,s,1);break}}}function q7(r){const t=r.prev,e=r,n=r.next;if(le(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=i>s?i>a?i:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&wr(i,o,s,l,a,c,_.x,_.y)&&le(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Z7(r,t,e,n){const i=r.prev,s=r,a=r.next;if(le(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,h=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=o>l?o>c?o:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=v1(d,_,t,e,n),S=v1(g,p,t,e,n);let v=r.prevZ,x=r.nextZ;for(;v&&v.z>=m&&x&&x.z<=S;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==a&&wr(o,u,l,h,c,f,v.x,v.y)&&le(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==a&&wr(o,u,l,h,c,f,x.x,x.y)&&le(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==a&&wr(o,u,l,h,c,f,v.x,v.y)&&le(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==a&&wr(o,u,l,h,c,f,x.x,x.y)&&le(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function K7(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!so(i,s)&&Ou(i,n,n.next,s)&&As(i,s)&&As(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),bs(n),bs(n.next),n=r=s),n=n.next}while(n!==r);return Zi(n)}function j7(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&s8(a,o)){let l=Fu(a,o);a=Zi(a,a.next),l=Zi(l,l.next),Ts(a,t,e,n,i,s,0),Ts(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function J7(r,t,e,n){const i=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=Nu(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(r8(c));for(i.sort($7),s=0;s<i.length;s++)e=Q7(i[s],e);return e}function $7(r,t){return r.x-t.x}function Q7(r,t){const e=t8(r,t);if(!e)return t;const n=Fu(e,r);return Zi(n,n.next),Zi(e,e.next)}function t8(r,t){let e=t,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&wr(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),As(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&e8(i,e)))&&(i=e,u=h)),e=e.next;while(e!==o);return i}function e8(r,t){return le(r.prev,r,t.prev)<0&&le(t.next,r,r.next)<0}function n8(r,t,e,n){let i=r;do i.z===0&&(i.z=v1(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,i8(i)}function i8(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function v1(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function r8(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function wr(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function s8(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!a8(r,t)&&(As(r,t)&&As(t,r)&&o8(r,t)&&(le(r.prev,r,t.prev)||le(r,t.prev,t))||so(r,t)&&le(r.prev,r,r.next)>0&&le(t.prev,t,t.next)>0)}function le(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function so(r,t){return r.x===t.x&&r.y===t.y}function Ou(r,t,e,n){const i=va(le(r,t,e)),s=va(le(r,t,n)),a=va(le(e,n,r)),o=va(le(e,n,t));return!!(i!==s&&a!==o||i===0&&ga(r,e,t)||s===0&&ga(r,n,t)||a===0&&ga(e,r,n)||o===0&&ga(e,t,n))}function ga(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function va(r){return r>0?1:r<0?-1:0}function a8(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Ou(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function As(r,t){return le(r.prev,r,r.next)<0?le(r,t,r.next)>=0&&le(r,r.prev,t)>=0:le(r,t,r.prev)<0||le(r,r.next,t)<0}function o8(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Fu(r,t){const e=new x1(r.i,r.x,r.y),n=new x1(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function $c(r,t,e,n){const i=new x1(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function x1(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function l8(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class gs{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return gs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Qc(t),t2(n,t);let a=t.length;e.forEach(Qc);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,t2(n,e[l]);const o=Y7.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Qc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function t2(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class $1 extends _n{constructor(t=new Iu([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new nn(i,3)),this.setAttribute("uv",new nn(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:c8;let v,x=!1,R,A,b,P;m&&(v=m.getSpacedPoints(u),x=!0,f=!1,R=m.computeFrenetFrames(u,!1),A=new I,b=new I,P=new I),f||(p=0,d=0,_=0,g=0);const y=o.extractPoints(c);let M=y.shape;const D=y.holes;if(!gs.isClockWise(M)){M=M.reverse();for(let Z=0,at=D.length;Z<at;Z++){const J=D[Z];gs.isClockWise(J)&&(D[Z]=J.reverse())}}const L=gs.triangulateShape(M,D),N=M;for(let Z=0,at=D.length;Z<at;Z++){const J=D[Z];M=M.concat(J)}function U(Z,at,J){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(at,J)}const z=M.length,K=L.length;function k(Z,at,J){let ut,it,_t;const Tt=Z.x-at.x,C=Z.y-at.y,T=J.x-Z.x,V=J.y-Z.y,j=Tt*Tt+C*C,nt=Tt*V-C*T;if(Math.abs(nt)>Number.EPSILON){const Q=Math.sqrt(j),St=Math.sqrt(T*T+V*V),dt=at.x-C/Q,ft=at.y+Tt/Q,Rt=J.x-V/St,lt=J.y+T/St,Mt=((Rt-dt)*V-(lt-ft)*T)/(Tt*V-C*T);ut=dt+Tt*Mt-Z.x,it=ft+C*Mt-Z.y;const zt=ut*ut+it*it;if(zt<=2)return new st(ut,it);_t=Math.sqrt(zt/2)}else{let Q=!1;Tt>Number.EPSILON?T>Number.EPSILON&&(Q=!0):Tt<-Number.EPSILON?T<-Number.EPSILON&&(Q=!0):Math.sign(C)===Math.sign(V)&&(Q=!0),Q?(ut=-C,it=Tt,_t=Math.sqrt(j)):(ut=Tt,it=C,_t=Math.sqrt(j/2))}return new st(ut/_t,it/_t)}const $=[];for(let Z=0,at=N.length,J=at-1,ut=Z+1;Z<at;Z++,J++,ut++)J===at&&(J=0),ut===at&&(ut=0),$[Z]=k(N[Z],N[J],N[ut]);const tt=[];let ct,xt=$.concat();for(let Z=0,at=D.length;Z<at;Z++){const J=D[Z];ct=[];for(let ut=0,it=J.length,_t=it-1,Tt=ut+1;ut<it;ut++,_t++,Tt++)_t===it&&(_t=0),Tt===it&&(Tt=0),ct[ut]=k(J[ut],J[_t],J[Tt]);tt.push(ct),xt=xt.concat(ct)}for(let Z=0;Z<p;Z++){const at=Z/p,J=d*Math.cos(at*Math.PI/2),ut=_*Math.sin(at*Math.PI/2)+g;for(let it=0,_t=N.length;it<_t;it++){const Tt=U(N[it],$[it],ut);ot(Tt.x,Tt.y,-J)}for(let it=0,_t=D.length;it<_t;it++){const Tt=D[it];ct=tt[it];for(let C=0,T=Tt.length;C<T;C++){const V=U(Tt[C],ct[C],ut);ot(V.x,V.y,-J)}}}const wt=_+g;for(let Z=0;Z<z;Z++){const at=f?U(M[Z],xt[Z],wt):M[Z];x?(b.copy(R.normals[0]).multiplyScalar(at.x),A.copy(R.binormals[0]).multiplyScalar(at.y),P.copy(v[0]).add(b).add(A),ot(P.x,P.y,P.z)):ot(at.x,at.y,0)}for(let Z=1;Z<=u;Z++)for(let at=0;at<z;at++){const J=f?U(M[at],xt[at],wt):M[at];x?(b.copy(R.normals[Z]).multiplyScalar(J.x),A.copy(R.binormals[Z]).multiplyScalar(J.y),P.copy(v[Z]).add(b).add(A),ot(P.x,P.y,P.z)):ot(J.x,J.y,h/u*Z)}for(let Z=p-1;Z>=0;Z--){const at=Z/p,J=d*Math.cos(at*Math.PI/2),ut=_*Math.sin(at*Math.PI/2)+g;for(let it=0,_t=N.length;it<_t;it++){const Tt=U(N[it],$[it],ut);ot(Tt.x,Tt.y,h+J)}for(let it=0,_t=D.length;it<_t;it++){const Tt=D[it];ct=tt[it];for(let C=0,T=Tt.length;C<T;C++){const V=U(Tt[C],ct[C],ut);x?ot(V.x,V.y+v[u-1].y,v[u-1].x+J):ot(V.x,V.y,h+J)}}}Y(),et();function Y(){const Z=i.length/3;if(f){let at=0,J=z*at;for(let ut=0;ut<K;ut++){const it=L[ut];Ct(it[2]+J,it[1]+J,it[0]+J)}at=u+p*2,J=z*at;for(let ut=0;ut<K;ut++){const it=L[ut];Ct(it[0]+J,it[1]+J,it[2]+J)}}else{for(let at=0;at<K;at++){const J=L[at];Ct(J[2],J[1],J[0])}for(let at=0;at<K;at++){const J=L[at];Ct(J[0]+z*u,J[1]+z*u,J[2]+z*u)}}n.addGroup(Z,i.length/3-Z,0)}function et(){const Z=i.length/3;let at=0;vt(N,at),at+=N.length;for(let J=0,ut=D.length;J<ut;J++){const it=D[J];vt(it,at),at+=it.length}n.addGroup(Z,i.length/3-Z,1)}function vt(Z,at){let J=Z.length;for(;--J>=0;){const ut=J;let it=J-1;it<0&&(it=Z.length-1);for(let _t=0,Tt=u+p*2;_t<Tt;_t++){const C=z*_t,T=z*(_t+1),V=at+ut+C,j=at+it+C,nt=at+it+T,Q=at+ut+T;It(V,j,nt,Q)}}}function ot(Z,at,J){l.push(Z),l.push(at),l.push(J)}function Ct(Z,at,J){F(Z),F(at),F(J);const ut=i.length/3,it=S.generateTopUV(n,i,ut-3,ut-2,ut-1);kt(it[0]),kt(it[1]),kt(it[2])}function It(Z,at,J,ut){F(Z),F(at),F(ut),F(at),F(J),F(ut);const it=i.length/3,_t=S.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);kt(_t[0]),kt(_t[1]),kt(_t[3]),kt(_t[1]),kt(_t[2]),kt(_t[3])}function F(Z){i.push(l[Z*3+0]),i.push(l[Z*3+1]),i.push(l[Z*3+2])}function kt(Z){s.push(Z.x),s.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return u8(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ka[i.type]().fromJSON(i)),new $1(n,t.options)}}const c8={generateTopUV:function(r,t,e,n,i){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new st(s,a),new st(o,l),new st(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],_=t[i*3+2],g=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-h),new st(f,1-_),new st(g,1-m)]:[new st(o,1-l),new st(u,1-h),new st(d,1-_),new st(p,1-m)]}};function u8(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Q1 extends _n{constructor(t=new Du(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new st;let u=new I;const h=[],f=[],d=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new nn(h,3)),this.setAttribute("normal",new nn(f,3)),this.setAttribute("uv",new nn(d,2));function g(){for(let v=0;v<e;v++)p(v);p(s===!1?e:0),S(),m()}function p(v){u=t.getPointAt(v/e,u);const x=a.normals[v],R=a.binormals[v];for(let A=0;A<=i;A++){const b=A/i*Math.PI*2,P=Math.sin(b),y=-Math.cos(b);l.x=y*x.x+P*R.x,l.y=y*x.y+P*R.y,l.z=y*x.z+P*R.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=e;v++)for(let x=1;x<=i;x++){const R=(i+1)*(v-1)+(x-1),A=(i+1)*v+(x-1),b=(i+1)*v+x,P=(i+1)*(v-1)+x;_.push(R,A,P),_.push(A,b,P)}}function S(){for(let v=0;v<=e;v++)for(let x=0;x<=i;x++)c.x=v/e,c.y=x/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Q1(new ka[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Bu extends Si{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Wt(16777215),this.specular=new Wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W1,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class h8 extends Si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W1,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const e2={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class f8{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const d8=new f8;class tl{constructor(t){this.manager=t!==void 0?t:d8,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}tl.DEFAULT_MATERIAL_NAME="__DEFAULT";class p8 extends tl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=e2.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Es("img");function l(){u(),e2.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class m8 extends tl{constructor(t){super(t)}load(t,e,n,i){const s=new ke,a=new p8(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class zu extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Jo=new Qt,n2=new I,i2=new I;class _8{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Z1,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;n2.setFromMatrixPosition(t.matrixWorld),e.position.copy(n2),i2.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(i2),e.updateMatrixWorld(),Jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class g8 extends _8{constructor(){super(new vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class v8 extends zu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new g8}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class x8 extends zu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class y8{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=r2(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=r2();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function r2(){return(typeof performance>"u"?Date:performance).now()}const s2=new Qt;class M8{constructor(t,e,n=0,i=1/0){this.ray=new io(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new q1,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return s2.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s2),this}intersectObject(t,e=!0,n=[]){return y1(t,this,n,e),n.sort(a2),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)y1(t[i],this,n,e);return n.sort(a2),n}}function a2(r,t){return r.distance-t.distance}function y1(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)y1(i[s],t,e,!0)}}class o2{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:G1}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=G1);const l2={type:"change"},$o={type:"start"},c2={type:"end"},xa=new io,u2=new ai,S8=Math.cos(70*Sd.DEG2RAD);class E8 extends $i{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:er.ROTATE,TWO:er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Rt),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(l2),n.update(),s=i.NONE},this.update=function(){const E=new I,O=new qi().setFromUnitVectors(t.up,new I(0,1,0)),G=O.clone().invert(),rt=new I,ht=new qi,Ut=new I,Vt=2*Math.PI;return function(Ee=null){const qt=n.object.position;E.copy(qt).sub(n.target),E.applyQuaternion(O),o.setFromVector3(E),n.autoRotate&&s===i.NONE&&H(M(Ee)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let me=n.minAzimuthAngle,ne=n.maxAzimuthAngle;isFinite(me)&&isFinite(ne)&&(me<-Math.PI?me+=Vt:me>Math.PI&&(me-=Vt),ne<-Math.PI?ne+=Vt:ne>Math.PI&&(ne-=Vt),me<=ne?o.theta=Math.max(me,Math.min(ne,o.theta)):o.theta=o.theta>(me+ne)/2?Math.max(me,o.theta):Math.min(ne,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Jn=!1;if(n.zoomToCursor&&A||n.object.isOrthographicCamera)o.radius=tt(o.radius);else{const an=o.radius;o.radius=tt(o.radius*c),Jn=an!=o.radius}if(E.setFromSpherical(o),E.applyQuaternion(G),qt.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&A){let an=null;if(n.object.isPerspectiveCamera){const $n=E.length();an=tt($n*c);const Nn=$n-an;n.object.position.addScaledVector(x,Nn),n.object.updateMatrixWorld(),Jn=!!Nn}else if(n.object.isOrthographicCamera){const $n=new I(R.x,R.y,0);$n.unproject(n.object);const Nn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Jn=Nn!==n.object.zoom;const Kr=new I(R.x,R.y,0);Kr.unproject(n.object),n.object.position.sub(Kr).add($n),n.object.updateMatrixWorld(),an=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;an!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(an).add(n.object.position):(xa.origin.copy(n.object.position),xa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(xa.direction))<S8?t.lookAt(n.target):(u2.setFromNormalAndCoplanarPoint(n.object.up,n.target),xa.intersectPlane(u2,n.target))))}else if(n.object.isOrthographicCamera){const an=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),an!==n.object.zoom&&(n.object.updateProjectionMatrix(),Jn=!0)}return c=1,A=!1,Jn||rt.distanceToSquared(n.object.position)>a||8*(1-ht.dot(n.object.quaternion))>a||Ut.distanceToSquared(n.target)>a?(n.dispatchEvent(l2),rt.copy(n.object.position),ht.copy(n.object.quaternion),Ut.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",zt),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",V),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",V),n.domElement.getRootNode().removeEventListener("keydown",dt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Rt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new o2,l=new o2;let c=1;const u=new I,h=new st,f=new st,d=new st,_=new st,g=new st,p=new st,m=new st,S=new st,v=new st,x=new I,R=new st;let A=!1;const b=[],P={};let y=!1;function M(E){return E!==null?2*Math.PI/60*n.autoRotateSpeed*E:2*Math.PI/60/60*n.autoRotateSpeed}function D(E){const O=Math.abs(E*.01);return Math.pow(.95,n.zoomSpeed*O)}function H(E){l.theta-=E}function L(E){l.phi-=E}const N=function(){const E=new I;return function(G,rt){E.setFromMatrixColumn(rt,0),E.multiplyScalar(-G),u.add(E)}}(),U=function(){const E=new I;return function(G,rt){n.screenSpacePanning===!0?E.setFromMatrixColumn(rt,1):(E.setFromMatrixColumn(rt,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(G),u.add(E)}}(),z=function(){const E=new I;return function(G,rt){const ht=n.domElement;if(n.object.isPerspectiveCamera){const Ut=n.object.position;E.copy(Ut).sub(n.target);let Vt=E.length();Vt*=Math.tan(n.object.fov/2*Math.PI/180),N(2*G*Vt/ht.clientHeight,n.object.matrix),U(2*rt*Vt/ht.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(G*(n.object.right-n.object.left)/n.object.zoom/ht.clientWidth,n.object.matrix),U(rt*(n.object.top-n.object.bottom)/n.object.zoom/ht.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(E,O){if(!n.zoomToCursor)return;A=!0;const G=n.domElement.getBoundingClientRect(),rt=E-G.left,ht=O-G.top,Ut=G.width,Vt=G.height;R.x=rt/Ut*2-1,R.y=-(ht/Vt)*2+1,x.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function tt(E){return Math.max(n.minDistance,Math.min(n.maxDistance,E))}function ct(E){h.set(E.clientX,E.clientY)}function xt(E){$(E.clientX,E.clientX),m.set(E.clientX,E.clientY)}function wt(E){_.set(E.clientX,E.clientY)}function Y(E){f.set(E.clientX,E.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;H(2*Math.PI*d.x/O.clientHeight),L(2*Math.PI*d.y/O.clientHeight),h.copy(f),n.update()}function et(E){S.set(E.clientX,E.clientY),v.subVectors(S,m),v.y>0?K(D(v.y)):v.y<0&&k(D(v.y)),m.copy(S),n.update()}function vt(E){g.set(E.clientX,E.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),z(p.x,p.y),_.copy(g),n.update()}function ot(E){$(E.clientX,E.clientY),E.deltaY<0?k(D(E.deltaY)):E.deltaY>0&&K(D(E.deltaY)),n.update()}function Ct(E){let O=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),O=!0;break}O&&(E.preventDefault(),n.update())}function It(E){if(b.length===1)h.set(E.pageX,E.pageY);else{const O=jt(E),G=.5*(E.pageX+O.x),rt=.5*(E.pageY+O.y);h.set(G,rt)}}function F(E){if(b.length===1)_.set(E.pageX,E.pageY);else{const O=jt(E),G=.5*(E.pageX+O.x),rt=.5*(E.pageY+O.y);_.set(G,rt)}}function kt(E){const O=jt(E),G=E.pageX-O.x,rt=E.pageY-O.y,ht=Math.sqrt(G*G+rt*rt);m.set(0,ht)}function Z(E){n.enableZoom&&kt(E),n.enablePan&&F(E)}function at(E){n.enableZoom&&kt(E),n.enableRotate&&It(E)}function J(E){if(b.length==1)f.set(E.pageX,E.pageY);else{const G=jt(E),rt=.5*(E.pageX+G.x),ht=.5*(E.pageY+G.y);f.set(rt,ht)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;H(2*Math.PI*d.x/O.clientHeight),L(2*Math.PI*d.y/O.clientHeight),h.copy(f)}function ut(E){if(b.length===1)g.set(E.pageX,E.pageY);else{const O=jt(E),G=.5*(E.pageX+O.x),rt=.5*(E.pageY+O.y);g.set(G,rt)}p.subVectors(g,_).multiplyScalar(n.panSpeed),z(p.x,p.y),_.copy(g)}function it(E){const O=jt(E),G=E.pageX-O.x,rt=E.pageY-O.y,ht=Math.sqrt(G*G+rt*rt);S.set(0,ht),v.set(0,Math.pow(S.y/m.y,n.zoomSpeed)),K(v.y),m.copy(S);const Ut=(E.pageX+O.x)*.5,Vt=(E.pageY+O.y)*.5;$(Ut,Vt)}function _t(E){n.enableZoom&&it(E),n.enablePan&&ut(E)}function Tt(E){n.enableZoom&&it(E),n.enableRotate&&J(E)}function C(E){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",V)),!Dt(E)&&(At(E),E.pointerType==="touch"?lt(E):j(E)))}function T(E){n.enabled!==!1&&(E.pointerType==="touch"?Mt(E):nt(E))}function V(E){switch(gt(E),b.length){case 0:n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",V),n.dispatchEvent(c2),s=i.NONE;break;case 1:const O=b[0],G=P[O];lt({pointerId:O,pageX:G.x,pageY:G.y});break}}function j(E){let O;switch(E.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case tr.DOLLY:if(n.enableZoom===!1)return;xt(E),s=i.DOLLY;break;case tr.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;wt(E),s=i.PAN}else{if(n.enableRotate===!1)return;ct(E),s=i.ROTATE}break;case tr.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;ct(E),s=i.ROTATE}else{if(n.enablePan===!1)return;wt(E),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent($o)}function nt(E){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Y(E);break;case i.DOLLY:if(n.enableZoom===!1)return;et(E);break;case i.PAN:if(n.enablePan===!1)return;vt(E);break}}function Q(E){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(E.preventDefault(),n.dispatchEvent($o),ot(St(E)),n.dispatchEvent(c2))}function St(E){const O=E.deltaMode,G={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(O){case 1:G.deltaY*=16;break;case 2:G.deltaY*=100;break}return E.ctrlKey&&!y&&(G.deltaY*=10),G}function dt(E){E.key==="Control"&&(y=!0,n.domElement.getRootNode().addEventListener("keyup",ft,{passive:!0,capture:!0}))}function ft(E){E.key==="Control"&&(y=!1,n.domElement.getRootNode().removeEventListener("keyup",ft,{passive:!0,capture:!0}))}function Rt(E){n.enabled===!1||n.enablePan===!1||Ct(E)}function lt(E){switch(Ht(E),b.length){case 1:switch(n.touches.ONE){case er.ROTATE:if(n.enableRotate===!1)return;It(E),s=i.TOUCH_ROTATE;break;case er.PAN:if(n.enablePan===!1)return;F(E),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case er.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Z(E),s=i.TOUCH_DOLLY_PAN;break;case er.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;at(E),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent($o)}function Mt(E){switch(Ht(E),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;J(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ut(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(E),n.update();break;default:s=i.NONE}}function zt(E){n.enabled!==!1&&E.preventDefault()}function At(E){b.push(E.pointerId)}function gt(E){delete P[E.pointerId];for(let O=0;O<b.length;O++)if(b[O]==E.pointerId){b.splice(O,1);return}}function Dt(E){for(let O=0;O<b.length;O++)if(b[O]==E.pointerId)return!0;return!1}function Ht(E){let O=P[E.pointerId];O===void 0&&(O=new st,P[E.pointerId]=O),O.set(E.pageX,E.pageY)}function jt(E){const O=E.pointerId===b[0]?b[1]:b[0];return P[O]}n.domElement.addEventListener("contextmenu",zt),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",V),n.domElement.addEventListener("wheel",Q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}}class T8 extends ye{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new st(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Er=new I,h2=new Qt,f2=new Qt,d2=new I,p2=new I;class A8{constructor(t={}){const e=this;let n,i,s,a;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(d,_){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),h2.copy(_.matrixWorldInverse),f2.multiplyMatrices(_.projectionMatrix,h2),c(d,d,_),f(d)},this.setSize=function(d,_){n=d,i=_,s=n/2,a=i/2,l.style.width=d+"px",l.style.height=_+"px"};function c(d,_,g){if(d.isCSS2DObject){Er.setFromMatrixPosition(d.matrixWorld),Er.applyMatrix4(f2);const p=d.visible===!0&&Er.z>=-1&&Er.z<=1&&d.layers.test(g.layers)===!0;if(d.element.style.display=p===!0?"":"none",p===!0){d.onBeforeRender(e,_,g);const S=d.element;S.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(Er.x*s+s)+"px,"+(-Er.y*a+a)+"px)",S.parentNode!==l&&l.appendChild(S),d.onAfterRender(e,_,g)}const m={distanceToCameraSquared:u(g,d)};o.objects.set(d,m)}for(let p=0,m=d.children.length;p<m;p++)c(d.children[p],_,g)}function u(d,_){return d2.setFromMatrixPosition(d.matrixWorld),p2.setFromMatrixPosition(_.matrixWorld),d2.distanceToSquared(p2)}function h(d){const _=[];return d.traverse(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(d){const _=h(d).sort(function(p,m){if(p.renderOrder!==m.renderOrder)return m.renderOrder-p.renderOrder;const S=o.objects.get(p).distanceToCameraSquared,v=o.objects.get(m).distanceToCameraSquared;return S-v}),g=_.length;for(let p=0,m=_.length;p<m;p++)_[p].element.style.zIndex=g-p}}}class b8{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let n=0;for(let i=0;i<this._n&&i<32;i++){const s=e[i],a=t+s,o=Math.abs(t)<Math.abs(s)?t-(a-s):s-(a-t);o&&(e[n++]=o),t=a}return e[n]=t,this._n=n+1,this}valueOf(){const t=this._partials;let e=this._n,n,i,s,a=0;if(e>0){for(a=t[--e];e>0&&(n=a,i=t[--e],a=n+i,s=i-(a-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(i=s*2,n=a+i,i==n-a&&(a=n))}return a}}function*w8(r){for(const t of r)yield*t}function ku(r){return Array.from(w8(r))}var ee=1e-6,R8=1e-12,Yt=Math.PI,He=Yt/2,m2=Yt/4,pn=Yt*2,Je=180/Yt,ve=Yt/180,ue=Math.abs,Hu=Math.atan,ws=Math.atan2,de=Math.cos,C8=Math.exp,P8=Math.log,pe=Math.sin,L8=Math.sign||function(r){return r>0?1:r<0?-1:0},ao=Math.sqrt,D8=Math.tan;function U8(r){return r>1?0:r<-1?Yt:Math.acos(r)}function Rs(r){return r>1?He:r<-1?-He:Math.asin(r)}function ls(){}function Ha(r,t){r&&g2.hasOwnProperty(r.type)&&g2[r.type](r,t)}var _2={Feature:function(r,t){Ha(r.geometry,t)},FeatureCollection:function(r,t){for(var e=r.features,n=-1,i=e.length;++n<i;)Ha(e[n].geometry,t)}},g2={Sphere:function(r,t){t.sphere()},Point:function(r,t){r=r.coordinates,t.point(r[0],r[1],r[2])},MultiPoint:function(r,t){for(var e=r.coordinates,n=-1,i=e.length;++n<i;)r=e[n],t.point(r[0],r[1],r[2])},LineString:function(r,t){M1(r.coordinates,t,0)},MultiLineString:function(r,t){for(var e=r.coordinates,n=-1,i=e.length;++n<i;)M1(e[n],t,0)},Polygon:function(r,t){v2(r.coordinates,t)},MultiPolygon:function(r,t){for(var e=r.coordinates,n=-1,i=e.length;++n<i;)v2(e[n],t)},GeometryCollection:function(r,t){for(var e=r.geometries,n=-1,i=e.length;++n<i;)Ha(e[n],t)}};function M1(r,t,e){var n=-1,i=r.length-e,s;for(t.lineStart();++n<i;)s=r[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function v2(r,t){var e=-1,n=r.length;for(t.polygonStart();++e<n;)M1(r[e],t,1);t.polygonEnd()}function I8(r,t){r&&_2.hasOwnProperty(r.type)?_2[r.type](r,t):Ha(r,t)}function S1(r){return[ws(r[1],r[0]),Rs(r[2])]}function kr(r){var t=r[0],e=r[1],n=de(e);return[n*de(t),n*pe(t),pe(e)]}function ya(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function Va(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}function Qo(r,t){r[0]+=t[0],r[1]+=t[1],r[2]+=t[2]}function Ma(r,t){return[r[0]*t,r[1]*t,r[2]*t]}function E1(r){var t=ao(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]/=t,r[1]/=t,r[2]/=t}function T1(r,t){function e(n,i){return n=r(n,i),t(n[0],n[1])}return r.invert&&t.invert&&(e.invert=function(n,i){return n=t.invert(n,i),n&&r.invert(n[0],n[1])}),e}function A1(r,t){return ue(r)>Yt&&(r-=Math.round(r/pn)*pn),[r,t]}A1.invert=A1;function Vu(r,t,e){return(r%=pn)?t||e?T1(y2(r),M2(t,e)):y2(r):t||e?M2(t,e):A1}function x2(r){return function(t,e){return t+=r,ue(t)>Yt&&(t-=Math.round(t/pn)*pn),[t,e]}}function y2(r){var t=x2(r);return t.invert=x2(-r),t}function M2(r,t){var e=de(r),n=pe(r),i=de(t),s=pe(t);function a(o,l){var c=de(l),u=de(o)*c,h=pe(o)*c,f=pe(l),d=f*e+u*n;return[ws(h*i-d*s,u*e-f*n),Rs(d*i+h*s)]}return a.invert=function(o,l){var c=de(l),u=de(o)*c,h=pe(o)*c,f=pe(l),d=f*i-h*s;return[ws(h*i+f*s,u*e+d*n),Rs(d*e-u*n)]},a}function N8(r){r=Vu(r[0]*ve,r[1]*ve,r.length>2?r[2]*ve:0);function t(e){return e=r(e[0]*ve,e[1]*ve),e[0]*=Je,e[1]*=Je,e}return t.invert=function(e){return e=r.invert(e[0]*ve,e[1]*ve),e[0]*=Je,e[1]*=Je,e},t}function O8(r,t,e,n,i,s){if(e){var a=de(t),o=pe(t),l=n*e;i==null?(i=t+n*pn,s=t-l/2):(i=S2(a,i),s=S2(a,s),(n>0?i<s:i>s)&&(i+=n*pn));for(var c,u=i;n>0?u>s:u<s;u-=l)c=S1([a,-o*de(u),-o*pe(u)]),r.point(c[0],c[1])}}function S2(r,t){t=kr(t),t[0]-=r,E1(t);var e=U8(-t[1]);return((-t[2]<0?-e:e)+pn-ee)%pn}function Gu(){var r=[],t;return{point:function(e,n,i){t.push([e,n,i])},lineStart:function(){r.push(t=[])},lineEnd:ls,rejoin:function(){r.length>1&&r.push(r.pop().concat(r.shift()))},result:function(){var e=r;return r=[],t=null,e}}}function Ra(r,t){return ue(r[0]-t[0])<ee&&ue(r[1]-t[1])<ee}function Sa(r,t,e,n){this.x=r,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function Wu(r,t,e,n,i){var s=[],a=[],o,l;if(r.forEach(function(_){if(!((g=_.length-1)<=0)){var g,p=_[0],m=_[g],S;if(Ra(p,m)){if(!p[2]&&!m[2]){for(i.lineStart(),o=0;o<g;++o)i.point((p=_[o])[0],p[1]);i.lineEnd();return}m[0]+=2*ee}s.push(S=new Sa(p,_,null,!0)),a.push(S.o=new Sa(p,null,S,!1)),s.push(S=new Sa(m,_,null,!1)),a.push(S.o=new Sa(m,null,S,!0))}}),!!s.length){for(a.sort(t),E2(s),E2(a),o=0,l=a.length;o<l;++o)a[o].e=e=!e;for(var c=s[0],u,h;;){for(var f=c,d=!0;f.v;)if((f=f.n)===c)return;u=f.z,i.lineStart();do{if(f.v=f.o.v=!0,f.e){if(d)for(o=0,l=u.length;o<l;++o)i.point((h=u[o])[0],h[1]);else n(f.x,f.n.x,1,i);f=f.n}else{if(d)for(u=f.p.z,o=u.length-1;o>=0;--o)i.point((h=u[o])[0],h[1]);else n(f.x,f.p.x,-1,i);f=f.p}f=f.o,u=f.z,d=!d}while(!f.v);i.lineEnd()}}}function E2(r){if(t=r.length){for(var t,e=0,n=r[0],i;++e<t;)n.n=i=r[e],i.p=n,n=i;n.n=i=r[0],i.p=n}}function t1(r){return ue(r[0])<=Yt?r[0]:L8(r[0])*((ue(r[0])+Yt)%pn-Yt)}function F8(r,t){var e=t1(t),n=t[1],i=pe(n),s=[pe(e),-de(e),0],a=0,o=0,l=new b8;i===1?n=He+ee:i===-1&&(n=-He-ee);for(var c=0,u=r.length;c<u;++c)if(f=(h=r[c]).length)for(var h,f,d=h[f-1],_=t1(d),g=d[1]/2+m2,p=pe(g),m=de(g),S=0;S<f;++S,_=x,p=A,m=b,d=v){var v=h[S],x=t1(v),R=v[1]/2+m2,A=pe(R),b=de(R),P=x-_,y=P>=0?1:-1,M=y*P,D=M>Yt,H=p*A;if(l.add(ws(H*y*pe(M),m*b+H*de(M))),a+=D?P+y*pn:P,D^_>=e^x>=e){var L=Va(kr(d),kr(v));E1(L);var N=Va(s,L);E1(N);var U=(D^P>=0?-1:1)*Rs(N[2]);(n>U||n===U&&(L[0]||L[1]))&&(o+=D^P>=0?1:-1)}}return(a<-ee||a<ee&&l<-R8)^o&1}function Xu(r,t,e,n){return function(i){var s=t(i),a=Gu(),o=t(a),l=!1,c,u,h,f={point:d,lineStart:g,lineEnd:p,polygonStart:function(){f.point=m,f.lineStart=S,f.lineEnd=v,u=[],c=[]},polygonEnd:function(){f.point=d,f.lineStart=g,f.lineEnd=p,u=ku(u);var x=F8(c,n);u.length?(l||(i.polygonStart(),l=!0),Wu(u,z8,x,e,i)):x&&(l||(i.polygonStart(),l=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),l&&(i.polygonEnd(),l=!1),u=c=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function d(x,R){r(x,R)&&i.point(x,R)}function _(x,R){s.point(x,R)}function g(){f.point=_,s.lineStart()}function p(){f.point=d,s.lineEnd()}function m(x,R){h.push([x,R]),o.point(x,R)}function S(){o.lineStart(),h=[]}function v(){m(h[0][0],h[0][1]),o.lineEnd();var x=o.clean(),R=a.result(),A,b=R.length,P,y,M;if(h.pop(),c.push(h),h=null,!!b){if(x&1){if(y=R[0],(P=y.length-1)>0){for(l||(i.polygonStart(),l=!0),i.lineStart(),A=0;A<P;++A)i.point((M=y[A])[0],M[1]);i.lineEnd()}return}b>1&&x&2&&R.push(R.pop().concat(R.shift())),u.push(R.filter(B8))}}return f}}function B8(r){return r.length>1}function z8(r,t){return((r=r.x)[0]<0?r[1]-He-ee:He-r[1])-((t=t.x)[0]<0?t[1]-He-ee:He-t[1])}const T2=Xu(function(){return!0},k8,V8,[-Yt,-He]);function k8(r){var t=NaN,e=NaN,n=NaN,i;return{lineStart:function(){r.lineStart(),i=1},point:function(s,a){var o=s>0?Yt:-Yt,l=ue(s-t);ue(l-Yt)<ee?(r.point(t,e=(e+a)/2>0?He:-He),r.point(n,e),r.lineEnd(),r.lineStart(),r.point(o,e),r.point(s,e),i=0):n!==o&&l>=Yt&&(ue(t-n)<ee&&(t-=n*ee),ue(s-o)<ee&&(s-=o*ee),e=H8(t,e,s,a),r.point(n,e),r.lineEnd(),r.lineStart(),r.point(o,e),i=0),r.point(t=s,e=a),n=o},lineEnd:function(){r.lineEnd(),t=e=NaN},clean:function(){return 2-i}}}function H8(r,t,e,n){var i,s,a=pe(r-e);return ue(a)>ee?Hu((pe(t)*(s=de(n))*pe(e)-pe(n)*(i=de(t))*pe(r))/(i*s*a)):(t+n)/2}function V8(r,t,e,n){var i;if(r==null)i=e*He,n.point(-Yt,i),n.point(0,i),n.point(Yt,i),n.point(Yt,0),n.point(Yt,-i),n.point(0,-i),n.point(-Yt,-i),n.point(-Yt,0),n.point(-Yt,i);else if(ue(r[0]-t[0])>ee){var s=r[0]<t[0]?Yt:-Yt;i=e*s/2,n.point(-s,i),n.point(0,i),n.point(s,i)}else n.point(t[0],t[1])}function G8(r){var t=de(r),e=2*ve,n=t>0,i=ue(t)>ee;function s(u,h,f,d){O8(d,r,e,f,u,h)}function a(u,h){return de(u)*de(h)>t}function o(u){var h,f,d,_,g;return{lineStart:function(){_=d=!1,g=1},point:function(p,m){var S=[p,m],v,x=a(p,m),R=n?x?0:c(p,m):x?c(p+(p<0?Yt:-Yt),m):0;if(!h&&(_=d=x)&&u.lineStart(),x!==d&&(v=l(h,S),(!v||Ra(h,v)||Ra(S,v))&&(S[2]=1)),x!==d)g=0,x?(u.lineStart(),v=l(S,h),u.point(v[0],v[1])):(v=l(h,S),u.point(v[0],v[1],2),u.lineEnd()),h=v;else if(i&&h&&n^x){var A;!(R&f)&&(A=l(S,h,!0))&&(g=0,n?(u.lineStart(),u.point(A[0][0],A[0][1]),u.point(A[1][0],A[1][1]),u.lineEnd()):(u.point(A[1][0],A[1][1]),u.lineEnd(),u.lineStart(),u.point(A[0][0],A[0][1],3)))}x&&(!h||!Ra(h,S))&&u.point(S[0],S[1]),h=S,d=x,f=R},lineEnd:function(){d&&u.lineEnd(),h=null},clean:function(){return g|(_&&d)<<1}}}function l(u,h,f){var d=kr(u),_=kr(h),g=[1,0,0],p=Va(d,_),m=ya(p,p),S=p[0],v=m-S*S;if(!v)return!f&&u;var x=t*m/v,R=-t*S/v,A=Va(g,p),b=Ma(g,x),P=Ma(p,R);Qo(b,P);var y=A,M=ya(b,y),D=ya(y,y),H=M*M-D*(ya(b,b)-1);if(!(H<0)){var L=ao(H),N=Ma(y,(-M-L)/D);if(Qo(N,b),N=S1(N),!f)return N;var U=u[0],z=h[0],K=u[1],k=h[1],$;z<U&&($=U,U=z,z=$);var tt=z-U,ct=ue(tt-Yt)<ee,xt=ct||tt<ee;if(!ct&&k<K&&($=K,K=k,k=$),xt?ct?K+k>0^N[1]<(ue(N[0]-U)<ee?K:k):K<=N[1]&&N[1]<=k:tt>Yt^(U<=N[0]&&N[0]<=z)){var wt=Ma(y,(-M+L)/D);return Qo(wt,b),[N,S1(wt)]}}}function c(u,h){var f=n?r:Yt-r,d=0;return u<-f?d|=1:u>f&&(d|=2),h<-f?d|=4:h>f&&(d|=8),d}return Xu(a,o,s,n?[0,-r]:[-Yt,r-Yt])}function W8(r,t,e,n,i,s){var a=r[0],o=r[1],l=t[0],c=t[1],u=0,h=1,f=l-a,d=c-o,_;if(_=e-a,!(!f&&_>0)){if(_/=f,f<0){if(_<u)return;_<h&&(h=_)}else if(f>0){if(_>h)return;_>u&&(u=_)}if(_=i-a,!(!f&&_<0)){if(_/=f,f<0){if(_>h)return;_>u&&(u=_)}else if(f>0){if(_<u)return;_<h&&(h=_)}if(_=n-o,!(!d&&_>0)){if(_/=d,d<0){if(_<u)return;_<h&&(h=_)}else if(d>0){if(_>h)return;_>u&&(u=_)}if(_=s-o,!(!d&&_<0)){if(_/=d,d<0){if(_>h)return;_>u&&(u=_)}else if(d>0){if(_<u)return;_<h&&(h=_)}return u>0&&(r[0]=a+u*f,r[1]=o+u*d),h<1&&(t[0]=a+h*f,t[1]=o+h*d),!0}}}}}var cs=1e9,Ea=-cs;function X8(r,t,e,n){function i(c,u){return r<=c&&c<=e&&t<=u&&u<=n}function s(c,u,h,f){var d=0,_=0;if(c==null||(d=a(c,h))!==(_=a(u,h))||l(c,u)<0^h>0)do f.point(d===0||d===3?r:e,d>1?n:t);while((d=(d+h+4)%4)!==_);else f.point(u[0],u[1])}function a(c,u){return ue(c[0]-r)<ee?u>0?0:3:ue(c[0]-e)<ee?u>0?2:1:ue(c[1]-t)<ee?u>0?1:0:u>0?3:2}function o(c,u){return l(c.x,u.x)}function l(c,u){var h=a(c,1),f=a(u,1);return h!==f?h-f:h===0?u[1]-c[1]:h===1?c[0]-u[0]:h===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,h=Gu(),f,d,_,g,p,m,S,v,x,R,A,b={point:P,lineStart:H,lineEnd:L,polygonStart:M,polygonEnd:D};function P(U,z){i(U,z)&&u.point(U,z)}function y(){for(var U=0,z=0,K=d.length;z<K;++z)for(var k=d[z],$=1,tt=k.length,ct=k[0],xt,wt,Y=ct[0],et=ct[1];$<tt;++$)xt=Y,wt=et,ct=k[$],Y=ct[0],et=ct[1],wt<=n?et>n&&(Y-xt)*(n-wt)>(et-wt)*(r-xt)&&++U:et<=n&&(Y-xt)*(n-wt)<(et-wt)*(r-xt)&&--U;return U}function M(){u=h,f=[],d=[],A=!0}function D(){var U=y(),z=A&&U,K=(f=ku(f)).length;(z||K)&&(c.polygonStart(),z&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),K&&Wu(f,o,U,s,c),c.polygonEnd()),u=c,f=d=_=null}function H(){b.point=N,d&&d.push(_=[]),R=!0,x=!1,S=v=NaN}function L(){f&&(N(g,p),m&&x&&h.rejoin(),f.push(h.result())),b.point=P,x&&u.lineEnd()}function N(U,z){var K=i(U,z);if(d&&_.push([U,z]),R)g=U,p=z,m=K,R=!1,K&&(u.lineStart(),u.point(U,z));else if(K&&x)u.point(U,z);else{var k=[S=Math.max(Ea,Math.min(cs,S)),v=Math.max(Ea,Math.min(cs,v))],$=[U=Math.max(Ea,Math.min(cs,U)),z=Math.max(Ea,Math.min(cs,z))];W8(k,$,r,t,e,n)?(x||(u.lineStart(),u.point(k[0],k[1])),u.point($[0],$[1]),K||u.lineEnd(),A=!1):K&&(u.lineStart(),u.point(U,z),A=!1)}S=U,v=z,x=K}return b}}const A2=r=>r;var Hr=1/0,Ga=Hr,Cs=-Hr,Wa=Cs,Y8={point:q8,lineStart:ls,lineEnd:ls,polygonStart:ls,polygonEnd:ls,result:function(){var r=[[Hr,Ga],[Cs,Wa]];return Cs=Wa=-(Ga=Hr=1/0),r}};function q8(r,t){r<Hr&&(Hr=r),r>Cs&&(Cs=r),t<Ga&&(Ga=t),t>Wa&&(Wa=t)}const b2=Y8;function el(r){return function(t){var e=new b1;for(var n in r)e[n]=r[n];return e.stream=t,e}}function b1(){}b1.prototype={constructor:b1,point:function(r,t){this.stream.point(r,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function nl(r,t,e){var n=r.clipExtent&&r.clipExtent();return r.scale(150).translate([0,0]),n!=null&&r.clipExtent(null),I8(e,r.stream(b2)),t(b2.result()),n!=null&&r.clipExtent(n),r}function Yu(r,t,e){return nl(r,function(n){var i=t[1][0]-t[0][0],s=t[1][1]-t[0][1],a=Math.min(i/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),o=+t[0][0]+(i-a*(n[1][0]+n[0][0]))/2,l=+t[0][1]+(s-a*(n[1][1]+n[0][1]))/2;r.scale(150*a).translate([o,l])},e)}function Z8(r,t,e){return Yu(r,[[0,0],t],e)}function K8(r,t,e){return nl(r,function(n){var i=+t,s=i/(n[1][0]-n[0][0]),a=(i-s*(n[1][0]+n[0][0]))/2,o=-s*n[0][1];r.scale(150*s).translate([a,o])},e)}function j8(r,t,e){return nl(r,function(n){var i=+t,s=i/(n[1][1]-n[0][1]),a=-s*n[0][0],o=(i-s*(n[1][1]+n[0][1]))/2;r.scale(150*s).translate([a,o])},e)}var w2=16,J8=de(30*ve);function R2(r,t){return+t?Q8(r,t):$8(r)}function $8(r){return el({point:function(t,e){t=r(t,e),this.stream.point(t[0],t[1])}})}function Q8(r,t){function e(n,i,s,a,o,l,c,u,h,f,d,_,g,p){var m=c-n,S=u-i,v=m*m+S*S;if(v>4*t&&g--){var x=a+f,R=o+d,A=l+_,b=ao(x*x+R*R+A*A),P=Rs(A/=b),y=ue(ue(A)-1)<ee||ue(s-h)<ee?(s+h)/2:ws(R,x),M=r(y,P),D=M[0],H=M[1],L=D-n,N=H-i,U=S*L-m*N;(U*U/v>t||ue((m*L+S*N)/v-.5)>.3||a*f+o*d+l*_<J8)&&(e(n,i,s,a,o,l,D,H,y,x/=b,R/=b,A,g,p),p.point(D,H),e(D,H,y,x,R,A,c,u,h,f,d,_,g,p))}}return function(n){var i,s,a,o,l,c,u,h,f,d,_,g,p={point:m,lineStart:S,lineEnd:x,polygonStart:function(){n.polygonStart(),p.lineStart=R},polygonEnd:function(){n.polygonEnd(),p.lineStart=S}};function m(P,y){P=r(P,y),n.point(P[0],P[1])}function S(){h=NaN,p.point=v,n.lineStart()}function v(P,y){var M=kr([P,y]),D=r(P,y);e(h,f,u,d,_,g,h=D[0],f=D[1],u=P,d=M[0],_=M[1],g=M[2],w2,n),n.point(h,f)}function x(){p.point=m,n.lineEnd()}function R(){S(),p.point=A,p.lineEnd=b}function A(P,y){v(i=P,y),s=h,a=f,o=d,l=_,c=g,p.point=v}function b(){e(h,f,u,d,_,g,s,a,i,o,l,c,w2,n),p.lineEnd=x,x()}return p}}var t9=el({point:function(r,t){this.stream.point(r*ve,t*ve)}});function e9(r){return el({point:function(t,e){var n=r(t,e);return this.stream.point(n[0],n[1])}})}function n9(r,t,e,n,i){function s(a,o){return a*=n,o*=i,[t+r*a,e-r*o]}return s.invert=function(a,o){return[(a-t)/r*n,(e-o)/r*i]},s}function C2(r,t,e,n,i,s){if(!s)return n9(r,t,e,n,i);var a=de(s),o=pe(s),l=a*r,c=o*r,u=a/r,h=o/r,f=(o*e-a*t)/r,d=(o*t+a*e)/r;function _(g,p){return g*=n,p*=i,[l*g-c*p+t,e-c*g-l*p]}return _.invert=function(g,p){return[n*(u*g-h*p+f),i*(d-h*g-u*p)]},_}function i9(r){return r9(function(){return r})()}function r9(r){var t,e=150,n=480,i=250,s=0,a=0,o=0,l=0,c=0,u,h=0,f=1,d=1,_=null,g=T2,p=null,m,S,v,x=A2,R=.5,A,b,P,y,M;function D(U){return P(U[0]*ve,U[1]*ve)}function H(U){return U=P.invert(U[0],U[1]),U&&[U[0]*Je,U[1]*Je]}D.stream=function(U){return y&&M===U?y:y=t9(e9(u)(g(A(x(M=U)))))},D.preclip=function(U){return arguments.length?(g=U,_=void 0,N()):g},D.postclip=function(U){return arguments.length?(x=U,p=m=S=v=null,N()):x},D.clipAngle=function(U){return arguments.length?(g=+U?G8(_=U*ve):(_=null,T2),N()):_*Je},D.clipExtent=function(U){return arguments.length?(x=U==null?(p=m=S=v=null,A2):X8(p=+U[0][0],m=+U[0][1],S=+U[1][0],v=+U[1][1]),N()):p==null?null:[[p,m],[S,v]]},D.scale=function(U){return arguments.length?(e=+U,L()):e},D.translate=function(U){return arguments.length?(n=+U[0],i=+U[1],L()):[n,i]},D.center=function(U){return arguments.length?(s=U[0]%360*ve,a=U[1]%360*ve,L()):[s*Je,a*Je]},D.rotate=function(U){return arguments.length?(o=U[0]%360*ve,l=U[1]%360*ve,c=U.length>2?U[2]%360*ve:0,L()):[o*Je,l*Je,c*Je]},D.angle=function(U){return arguments.length?(h=U%360*ve,L()):h*Je},D.reflectX=function(U){return arguments.length?(f=U?-1:1,L()):f<0},D.reflectY=function(U){return arguments.length?(d=U?-1:1,L()):d<0},D.precision=function(U){return arguments.length?(A=R2(b,R=U*U),N()):ao(R)},D.fitExtent=function(U,z){return Yu(D,U,z)},D.fitSize=function(U,z){return Z8(D,U,z)},D.fitWidth=function(U,z){return K8(D,U,z)},D.fitHeight=function(U,z){return j8(D,U,z)};function L(){var U=C2(e,0,0,f,d,h).apply(null,t(s,a)),z=C2(e,n-U[0],i-U[1],f,d,h);return u=Vu(o,l,c),b=T1(t,z),P=T1(u,b),A=R2(b,R),N()}function N(){return y=M=null,D}return function(){return t=r.apply(this,arguments),D.invert=t.invert&&H,L()}}function il(r,t){return[r,P8(D8((He+t)/2))]}il.invert=function(r,t){return[r,2*Hu(C8(t))-He]};function s9(){return a9(il).scale(961/pn)}function a9(r){var t=i9(r),e=t.center,n=t.scale,i=t.translate,s=t.clipExtent,a=null,o,l,c;t.scale=function(h){return arguments.length?(n(h),u()):n()},t.translate=function(h){return arguments.length?(i(h),u()):i()},t.center=function(h){return arguments.length?(e(h),u()):e()},t.clipExtent=function(h){return arguments.length?(h==null?a=o=l=c=null:(a=+h[0][0],o=+h[0][1],l=+h[1][0],c=+h[1][1]),u()):a==null?null:[[a,o],[l,c]]};function u(){var h=Yt*n(),f=t(N8(t.rotate()).invert([0,0]));return s(a==null?[[f[0]-h,f[1]-h],[f[0]+h,f[1]+h]]:r===il?[[Math.max(f[0]-h,a),o],[Math.min(f[0]+h,l),c]]:[[a,Math.max(f[1]-h,o)],[l,Math.min(f[1]+h,c)]])}return u()}function us(r,t,e){this.k=r,this.x=t,this.y=e}us.prototype={constructor:us,scale:function(r){return r===1?this:new us(this.k*r,this.x,this.y)},translate:function(r,t){return r===0&t===0?this:new us(this.k,this.x+this.k*r,this.y+this.k*t)},apply:function(r){return[r[0]*this.k+this.x,r[1]*this.k+this.y]},applyX:function(r){return r*this.k+this.x},applyY:function(r){return r*this.k+this.y},invert:function(r){return[(r[0]-this.x)/this.k,(r[1]-this.y)/this.k]},invertX:function(r){return(r-this.x)/this.k},invertY:function(r){return(r-this.y)/this.k},rescaleX:function(r){return r.copy().domain(r.range().map(this.invertX,this).map(r.invert,r))},rescaleY:function(r){return r.copy().domain(r.range().map(this.invertY,this).map(r.invert,r))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};us.prototype;function Gn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vr={duration:.5,overwrite:!1,delay:0},rl,Ne,se,fn=1e8,te=1/fn,w1=Math.PI*2,o9=w1/4,l9=0,Zu=Math.sqrt,c9=Math.cos,u9=Math.sin,Re=function(t){return typeof t=="string"},he=function(t){return typeof t=="function"},qn=function(t){return typeof t=="number"},sl=function(t){return typeof t>"u"},Un=function(t){return typeof t=="object"},Ge=function(t){return t!==!1},al=function(){return typeof window<"u"},Ta=function(t){return he(t)||Re(t)},Ku=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Oe=Array.isArray,R1=/(?:-?\.?\d|\.)+/gi,ju=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,e1=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ju=/[+-]=-?[.\d]+/,$u=/[^,'"\[\]\s]+/gi,h9=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,oe,bn,C1,ol,sn={},Xa={},Qu,th=function(t){return(Xa=Ki(t,sn))&&qe},ll=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ps=function(t,e){return!e&&console.warn(t)},eh=function(t,e){return t&&(sn[t]=e)&&Xa&&(Xa[t]=e)||sn},Ls=function(){return 0},f9={suppressEvents:!0,isStart:!0,kill:!1},Ca={suppressEvents:!0,kill:!1},d9={suppressEvents:!0},cl={},pi=[],P1={},nh,$e={},n1={},P2=30,Pa=[],ul="",hl=function(t){var e=t[0],n,i;if(Un(e)||he(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Pa.length;i--&&!Pa[i].targetTest(e););n=Pa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new bh(t[i],n)))||t.splice(i,1);return t},Hi=function(t){return t._gsap||hl(dn(t))[0]._gsap},ih=function(t,e,n){return(n=t[e])&&he(n)?t[e]():sl(n)&&t.getAttribute&&t.getAttribute(e)||n},We=function(t,e){return(t=t.split(",")).forEach(e)||t},fe=function(t){return Math.round(t*1e5)/1e5||0},be=function(t){return Math.round(t*1e7)/1e7||0},Ur=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},p9=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ya=function(){var t=pi.length,e=pi.slice(0),n,i;for(P1={},pi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},rh=function(t,e,n,i){pi.length&&!Ne&&Ya(),t.render(e,n,i||Ne&&e<0&&(t._initted||t._startAt)),pi.length&&!Ne&&Ya()},sh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match($u).length<2?e:Re(t)?t.trim():t},ah=function(t){return t},mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},m9=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ki=function(t,e){for(var n in e)t[n]=e[n];return t},L2=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Un(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},qa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},vs=function(t){var e=t.parent||oe,n=t.keyframes?m9(Oe(t.keyframes)):mn;if(Ge(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},_9=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},oh=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},oo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},xi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Vi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},g9=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},L1=function(t,e,n,i){return t._startAt&&(Ne?t._startAt.revert(Ca):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},v9=function r(t){return!t||t._ts&&r(t.parent)},D2=function(t){return t._repeat?Gr(t._tTime,t=t.duration()+t._rDelay)*t:0},Gr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Za=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},lo=function(t){return t._end=be(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},co=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),lo(t),n._dirty||Vi(n,t)),t},lh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Za(t.rawTime(),e),(!e._dur||ks(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),Vi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},Rn=function(t,e,n,i){return e.parent&&xi(e),e._start=be((qn(n)?n:n||t!==oe?cn(t,n,e):t._time)+e._delay),e._end=be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),oh(t,e,"_first","_last",t._sort?"_start":0),D1(e)||(t._recent=e),i||lh(t,e),t._ts<0&&co(t,t._tTime),t},ch=function(t,e){return(sn.ScrollTrigger||ll("scrollTrigger",e))&&sn.ScrollTrigger.create(e,t)},uh=function(t,e,n,i,s){if(dl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ne&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&nh!==Qe.frame)return pi.push(t),t._lazy=[s,i],1},x9=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},D1=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},y9=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&x9(t)&&!(!t._initted&&D1(t))||(t._ts<0||t._dp._ts<0)&&!D1(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=ks(0,t._tDur,e),u=Gr(l,o),t._yoyo&&u&1&&(a=1-a),u!==Gr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ne||i||t._zTime===te||!e&&t._zTime){if(!t._initted&&uh(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&L1(t,e,n,!0),t._onUpdate&&!n&&en(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&en(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&xi(t,1),!n&&!Ne&&(en(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},M9=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Wr=function(t,e,n,i){var s=t._repeat,a=be(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:be(a*(s+1)+t._rDelay*s):a,o>0&&!i&&co(t,t._tTime=t._tDur*o),t.parent&&lo(t),n||Vi(t.parent,t),t},U2=function(t){return t instanceof ze?Vi(t):Wr(t,t._dur)},S9={_start:0,endTime:Ls,totalDuration:Ls},cn=function r(t,e,n){var i=t.labels,s=t._recent||S9,a=t.duration()>=fn?s.endTime(!1):t._dur,o,l,c;return Re(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Oe(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},xs=function(t,e,n){var i=qn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ge(l.vars.inherit)&&l.parent;a.immediateRender=Ge(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new xe(e[0],a,e[s+1])},Ei=function(t,e){return t||t===0?e(t):e},ks=function(t,e,n){return n<t?t:n>e?e:n},Ie=function(t,e){return!Re(t)||!(e=h9.exec(t))?"":e[1]},E9=function(t,e,n){return Ei(n,function(i){return ks(t,e,i)})},U1=[].slice,hh=function(t,e){return t&&Un(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Un(t[0]))&&!t.nodeType&&t!==bn},T9=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Re(i)&&!e||hh(i,1)?(s=n).push.apply(s,dn(i)):n.push(i)})||n},dn=function(t,e,n){return se&&!e&&se.selector?se.selector(t):Re(t)&&!n&&(C1||!Xr())?U1.call((e||ol).querySelectorAll(t),0):Oe(t)?T9(t,n):hh(t)?U1.call(t,0):t?[t]:[]},I1=function(t){return t=dn(t)[0]||Ps("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return dn(e,n.querySelectorAll?n:n===t?Ps("Invalid scope")||ol.createElement("div"):t)}},fh=function(t){return t.sort(function(){return .5-Math.random()})},dh=function(t){if(he(t))return t;var e=Un(t)?t:{each:t},n=Gi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Re(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||e).length,p=a[g],m,S,v,x,R,A,b,P,y;if(!p){if(y=e.grid==="auto"?0:(e.grid||[1,fn])[1],!y){for(b=-fn;b<(b=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=a[g]=[],m=l?Math.min(y,g)*u-.5:i%y,S=y===fn?0:l?g*h/y-.5:i/y|0,b=0,P=fn,A=0;A<g;A++)v=A%y-m,x=S-(A/y|0),p[A]=R=c?Math.abs(c==="y"?x:v):Zu(v*v+x*x),R>b&&(b=R),R<P&&(P=R);i==="random"&&fh(p),p.max=b-P,p.min=P,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Ie(e.amount||e.each)||0,n=n&&g<0?Eh(n):n}return g=(p[f]-p.min)/p.max||0,be(p.b+(n?n(g):g)*p.v)+p.u}},N1=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(qn(n)?0:Ie(n))}},ph=function(t,e){var n=Oe(t),i,s;return!n&&Un(t)&&(i=n=t.radius||fn,t.values?(t=dn(t.values),(s=!qn(t[0]))&&(i*=i)):t=N1(t.increment)),Ei(e,n?he(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=fn,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-o,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||qn(a)?u:u+Ie(a)}:N1(t))},mh=function(t,e,n,i){return Ei(Oe(t)?!e:n===!0?!!(n=0):!i,function(){return Oe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},A9=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},b9=function(t,e){return function(n){return t(parseFloat(n))+(e||Ie(n))}},w9=function(t,e,n){return gh(t,e,0,1,n)},_h=function(t,e,n){return Ei(n,function(i){return t[~~e(i)]})},R9=function r(t,e,n){var i=e-t;return Oe(t)?_h(t,r(0,t.length),e):Ei(n,function(s){return(i+(s-t)%i)%i+t})},C9=function r(t,e,n){var i=e-t,s=i*2;return Oe(t)?_h(t,r(0,t.length-1),e):Ei(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Ds=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?$u:R1),n+=t.substr(e,i-e)+mh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},gh=function(t,e,n,i,s){var a=e-t,o=i-n;return Ei(s,function(l){return n+((l-t)/a*o||0)})},P9=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Re(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Oe(t)&&!Oe(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else i||(t=Ki(Oe(t)?[]:{},t));if(!u){for(l in e)fl.call(o,t,l,"get",e[l]);s=function(_){return _l(_,o)||(a?t.p:t)}}}return Ei(n,s)},I2=function(t,e,n){var i=t.labels,s=fn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},en=function(t,e,n){var i=t.vars,s=i[e],a=se,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&pi.length&&Ya(),o&&(se=o),u=l?s.apply(c,l):s.call(c),se=a,u},hs=function(t){return xi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ne),t.progress()<1&&en(t,"onInterrupt"),t},Cr,vh=[],xh=function(t){if(t)if(t=!t.name&&t.default||t,al()||t.headless){var e=t.name,n=he(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ls,render:_l,add:fl,kill:Y9,modifier:X9,rawVars:0},a={targetTest:0,get:0,getSetter:ml,aliases:{},register:0};if(Xr(),t!==i){if($e[e])return;mn(i,mn(qa(t,s),a)),Ki(i.prototype,Ki(s,qa(t,a))),$e[i.prop=e]=i,t.targetTest&&(Pa.push(i),cl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}eh(e,i),t.register&&t.register(qe,i,Xe)}else vh.push(t)},$t=255,fs={aqua:[0,$t,$t],lime:[0,$t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$t],navy:[0,0,128],white:[$t,$t,$t],olive:[128,128,0],yellow:[$t,$t,0],orange:[$t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$t,0,0],pink:[$t,192,203],cyan:[0,$t,$t],transparent:[$t,$t,$t,0]},i1=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*$t+.5|0},yh=function(t,e,n){var i=t?qn(t)?[t>>16,t>>8&$t,t&$t]:0:fs.black,s,a,o,l,c,u,h,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),fs[t])i=fs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&$t,i&$t,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&$t,t&$t]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(R1),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=i1(l+1/3,s,a),i[1]=i1(l,s,a),i[2]=i1(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(ju),n&&i.length<4&&(i[3]=1),i}else i=t.match(R1)||fs.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/$t,a=i[1]/$t,o=i[2]/$t,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Mh=function(t){var e=[],n=[],i=-1;return t.split(mi).forEach(function(s){var a=s.match(Rr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},N2=function(t,e,n){var i="",s=(t+i).match(mi),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=yh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Mh(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(mi,"1").split(Rr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(mi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},mi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in fs)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),L9=/hsl[a]?\(/,Sh=function(t){var e=t.join(" "),n;if(mi.lastIndex=0,mi.test(e))return n=L9.test(e),t[1]=N2(t[1],n),t[0]=N2(t[0],n,Mh(t[1])),!0},Us,Qe=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,S=p===!0,v,x,R,A;if((m>t||m<0)&&(n+=m-e),i+=m,R=i-n,v=R-a,(v>0||S)&&(A=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,a+=v+(v>=s?4:s-v),x=1),S||(l=c(g)),x)for(d=0;d<o.length;d++)o[d](R,f,A,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Qu&&(!C1&&al()&&(bn=C1=window,ol=bn.document||{},sn.gsap=qe,(bn.gsapVersions||(bn.gsapVersions=[])).push(qe.version),th(Xa||bn.GreenSockGlobals||!bn.gsap&&bn||{}),vh.forEach(xh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Us=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Us=0,c=Ls},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,S){var v=m?function(x,R,A,b){p(x,R,A,b),h.remove(v)}:p;return h.remove(p),o[S?"unshift":"push"](v),Xr(),v},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),Xr=function(){return!Us&&Qe.wake()},Xt={},D9=/^[\d.\-M][\d.\-,\s]/,U9=/["']/g,I9=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(U9,"").trim():+c,i=l.substr(o+1).trim();return e},N9=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},O9=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[I9(e[1])]:N9(t).split(",").map(sh)):Xt._CE&&D9.test(t)?Xt._CE("",t):n},Eh=function(t){return function(e){return 1-t(1-e)}},Th=function r(t,e){for(var n=t._first,i;n;)n instanceof ze?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Gi=function(t,e){return t&&(he(t)?t:Xt[t]||O9(t))||e},Qi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return We(t,function(o){Xt[o]=sn[o]=s,Xt[a=o.toLowerCase()]=n;for(var l in s)Xt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xt[o+"."+l]=s[l]}),s},Ah=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},r1=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/w1*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*u9((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Ah(o);return s=w1/s,l.config=function(c,u){return r(t,c,u)},l},s1=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ah(n);return i.config=function(s){return r(t,s)},i};We("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Qi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;Qi("Elastic",r1("in"),r1("out"),r1());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Qi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Qi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Qi("Circ",function(r){return-(Zu(1-r*r)-1)});Qi("Sine",function(r){return r===1?1:-c9(r*o9)+1});Qi("Back",s1("in"),s1("out"),s1());Xt.SteppedEase=Xt.steps=sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-te;return function(o){return((i*ks(0,a,o)|0)+s)*n}}};Vr.ease=Xt["quad.out"];We("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ul+=r+","+r+"Params,"});var bh=function(t,e){this.id=l9++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ih,this.set=e?e.getSetter:ml},Is=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Wr(this,+e.duration,1,1),this.data=e.data,se&&(this._ctx=se,se.data.push(this)),Us||Qe.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Xr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(co(this,n),!s._dp||s.parent||lh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Rn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===te||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+D2(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+D2(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Za(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(ks(-Math.abs(this._delay),this._tDur,s),i!==!1),lo(this),g9(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Rn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ge(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Za(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=d9);var i=Ne;return Ne=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ne=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,U2(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,U2(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(cn(this,n),Ge(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ge(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-te)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=he(n)?n:ah,o=function(){var c=i.then;i.then=null,he(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){hs(this)},r}();mn(Is.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var ze=function(r){qu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ge(n.sortChildren),oe&&Rn(n.parent||oe,Gn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ch(Gn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return xs(0,arguments,this),this},e.from=function(i,s,a){return xs(1,arguments,this),this},e.fromTo=function(i,s,a,o){return xs(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,vs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xe(i,s,cn(this,a),1),this},e.call=function(i,s,a){return Rn(this,xe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new xe(i,a,cn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,vs(a).immediateRender=Ge(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,vs(o).immediateRender=Ge(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:be(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,S,v,x,R,A,b;if(this!==oe&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,x=this._start,v=this._ts,m=!v,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=be(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),R=Gr(this._tTime,p),!o&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),A&&g&1&&(f=c-f,b=1),g!==R&&!this._lock){var P=A&&R&1,y=P===(A&&g&1);if(g<R&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(b?0:be(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&en(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Th(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=M9(this,be(o),be(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!g&&(en(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-te);break}}d=_}else{d=this._last;for(var M=i<0?i:f;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,a||Ne&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=M?-te:te);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-te)._zTime=f>=o?1:-1,this._ts))return this._start=x,lo(this),this.render(i,s,a);this._onUpdate&&!s&&en(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&xi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(en(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(qn(s)||(s=cn(this,s,i)),!(i instanceof Is)){if(Oe(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Re(i))return this.addLabel(i,s);if(he(i))i=xe.delayedCall(0,i);else return this}return this!==i?Rn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-fn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof xe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Re(i)?this.removeLabel(i):he(i)?this.killTweensOf(i):(oo(this,i),i===this._recent&&(this._recent=this._last),Vi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=be(Qe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=cn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=xe.delayedCall(0,s||Ls,a);return o.data="isPause",this._hasPause=1,Rn(this,o,cn(this,i))},e.removePause=function(i){var s=this._first;for(i=cn(this,i);s;)s._start===i&&s.data==="isPause"&&xi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ci!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=dn(i),l=this._first,c=qn(s),u;l;)l instanceof xe?p9(l._targets,o)&&(c?(!ci||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=cn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=xe.to(a,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||te,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Wr(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,mn({startAt:{time:cn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),I2(this,cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),I2(this,cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Vi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=fn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Rn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Wr(a,a===oe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(oe._ts&&(rh(oe,Za(i,oe)),nh=Qe.frame),Qe.frame>=P2){P2+=rn.autoSleep||120;var s=oe._first;if((!s||!s._ts)&&rn.autoSleep&&Qe._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qe.sleep()}}},t}(Is);mn(ze.prototype,{_lock:0,_hasPause:0,_forcing:0});var F9=function(t,e,n,i,s,a,o){var l=new Xe(this._pt,t,e,0,1,Dh,null,s),c=0,u=0,h,f,d,_,g,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ds(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),f=n.match(e1)||[];h=e1.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Ur(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=e1.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ju.test(i)||m)&&(l.e=0),this._pt=l,l},fl=function(t,e,n,i,s,a,o,l,c,u){he(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:he(h)?c?t[e.indexOf("set")||!he(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=he(h)?c?V9:Ph:pl,_;if(Re(i)&&(~i.indexOf("random(")&&(i=Ds(i)),i.charAt(1)==="="&&(_=Ur(f,i)+(Ie(f)||0),(_||_===0)&&(i=_))),!u||f!==i||O1)return!isNaN(f*i)&&i!==""?(_=new Xe(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?W9:Lh,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!h&&!(e in t)&&ll(e,i),F9.call(this,t,e,f,i,d,l||rn.stringFilter,c))},B9=function(t,e,n,i,s){if(he(t)&&(t=ys(t,s,e,n,i)),!Un(t)||t.style&&t.nodeType||Oe(t)||Ku(t))return Re(t)?ys(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ys(t[o],s,e,n,i);return a},wh=function(t,e,n,i,s,a){var o,l,c,u;if($e[t]&&(o=new $e[t]).init(s,o.rawVars?e[t]:B9(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Xe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Cr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ci,O1,dl=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:p,v=t._overwrite==="auto"&&!rl,x=t.timeline,R,A,b,P,y,M,D,H,L,N,U,z,K;if(x&&(!f||!s)&&(s="none"),t._ease=Gi(s,Vr.ease),t._yEase=h?Eh(Gi(h===!0?s:h,Vr.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(H=p[0]?Hi(p[0]).harness:0,z=H&&i[H.prop],R=qa(i,cl),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?Ca:f9),g._lazy=0),a){if(xi(t._startAt=xe.set(p,mn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Ge(l),startAt:null,delay:0,onUpdate:c&&function(){return en(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ne||!o&&!d)&&t._startAt.revert(Ca),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),b=mn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ge(l),immediateRender:o,stagger:0,parent:m},R),z&&(b[H.prop]=z),xi(t._startAt=xe.set(p,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ne?t._startAt.revert(Ca):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Ge(l)||l&&!_,A=0;A<p.length;A++){if(y=p[A],D=y._gsap||hl(p)[A]._gsap,t._ptLookup[A]=N={},P1[D.id]&&pi.length&&Ya(),U=S===p?A:S.indexOf(y),H&&(L=new H).init(y,z||R,t,U,S)!==!1&&(t._pt=P=new Xe(t._pt,y,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(k){N[k]=P}),L.priority&&(M=1)),!H||z)for(b in R)$e[b]&&(L=wh(b,R,t,U,y,S))?L.priority&&(M=1):N[b]=P=fl.call(t,y,b,"get",R[b],U,S,0,i.stringFilter);t._op&&t._op[A]&&t.kill(y,t._op[A]),v&&t._pt&&(ci=t,oe.killTweensOf(y,N,t.globalTime(e)),K=!t.parent,ci=0),t._pt&&l&&(P1[D.id]=1)}M&&Uh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,f&&e<=0&&x.render(fn,!0,!0)},z9=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return O1=1,t.vars[e]="+=0",dl(t,o),O1=0,l?Ps(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=fe(n)+Ie(h.e)),h.b&&(h.b=u.s+Ie(h.b))},k9=function(t,e){var n=t[0]?Hi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Ki({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},H9=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Oe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ys=function(t,e,n,i,s){return he(t)?t.call(e,n,i,s):Re(t)&&~t.indexOf("random(")?Ds(t):t},Rh=ul+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ch={};We(Rh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ch[r]=1});var xe=function(r){qu(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:vs(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||oe,v=(Oe(n)||Ku(n)?qn(n[0]):"length"in i)?[n]:dn(n),x,R,A,b,P,y,M,D;if(o._targets=v.length?hl(v):Ps("GSAP target "+n+" not found. https://gsap.com",!rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Ta(c)||Ta(u)){if(i=o.vars,x=o.timeline=new ze({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:v}),x.kill(),x.parent=x._dp=Gn(o),x._start=0,f||Ta(c)||Ta(u)){if(b=v.length,M=f&&dh(f),Un(f))for(P in f)~Rh.indexOf(P)&&(D||(D={}),D[P]=f[P]);for(R=0;R<b;R++)A=qa(i,Ch),A.stagger=0,m&&(A.yoyoEase=m),D&&Ki(A,D),y=v[R],A.duration=+ys(c,Gn(o),R,y,v),A.delay=(+ys(u,Gn(o),R,y,v)||0)-o._delay,!f&&b===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(y,A,M?M(R,y,v):0),x._ease=Xt.none;x.duration()?c=u=0:o.timeline=0}else if(_){vs(mn(x.vars.defaults,{ease:"none"})),x._ease=Gi(_.ease||i.ease||"none");var H=0,L,N,U;if(Oe(_))_.forEach(function(z){return x.to(v,z,">")}),x.duration();else{A={};for(P in _)P==="ease"||P==="easeEach"||H9(P,_[P],A,_.easeEach);for(P in A)for(L=A[P].sort(function(z,K){return z.t-K.t}),H=0,R=0;R<L.length;R++)N=L[R],U={ease:N.e,duration:(N.t-(R?L[R-1].t:0))/100*c},U[P]=N.v,x.to(v,U,H),H+=U.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!rl&&(ci=Gn(o),oe.killTweensOf(v),ci=0),Rn(S,Gn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===be(S._time)&&Ge(h)&&v9(Gn(o))&&S.data!=="nested")&&(o._tTime=-te,o.render(Math.max(0,-u)||0)),p&&ch(Gn(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-te&&!u?l:i<te?0:i,f,d,_,g,p,m,S,v,x;if(!c)y9(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=be(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===be(h/g)&&(f=c,_--),f>c&&(f=c)),m=this._yoyo&&_&1,m&&(x=this._yEase,f=c-f),p=Gr(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(v&&this._yEase&&Th(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(be(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(uh(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!s&&!_&&(en(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&L1(this,i,s,a),en(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&en(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&L1(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&xi(this,1),!s&&!(u&&!o)&&(h||o||m)&&(en(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Us||Qe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||dl(this,c),u=this._ease(c/this._dur),z9(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(co(this,0),this.parent||oh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?hs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ci&&ci.vars.overwrite!==!0)._first||hs(this),this.parent&&a!==this.timeline.totalDuration()&&Wr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?dn(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&_9(o,l))return s==="all"&&(this._pt=0),hs(this);for(h=this._op=this._op||[],s!=="all"&&(Re(s)&&(g={},We(s,function(S){return g[S]=1}),s=g),s=k9(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&oo(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&hs(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return xs(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return xs(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return oe.killTweensOf(i,s,a)},t}(Is);mn(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});We("staggerTo,staggerFrom,staggerFromTo",function(r){xe[r]=function(){var t=new ze,e=U1.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var pl=function(t,e,n){return t[e]=n},Ph=function(t,e,n){return t[e](n)},V9=function(t,e,n,i){return t[e](i.fp,n)},G9=function(t,e,n){return t.setAttribute(e,n)},ml=function(t,e){return he(t[e])?Ph:sl(t[e])&&t.setAttribute?G9:pl},Lh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},W9=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Dh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},_l=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},X9=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Y9=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?oo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},q9=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Uh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Xe=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Lh,this.d=l||this,this.set=c||pl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=q9,this.m=n,this.mt=s,this.tween=i},r}();We(ul+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return cl[r]=1});sn.TweenMax=sn.TweenLite=xe;sn.TimelineLite=sn.TimelineMax=ze;oe=new ze({sortChildren:!1,defaults:Vr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=Sh;var Wi=[],La={},Z9=[],O2=0,K9=0,a1=function(t){return(La[t]||Z9).map(function(e){return e()})},F1=function(){var t=Date.now(),e=[];t-O2>2&&(a1("matchMediaInit"),Wi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=bn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),a1("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),O2=t,a1("matchMedia"))},Ih=function(){function r(e,n){this.selector=n&&I1(n),this.data=[],this._r=[],this.isReverted=!1,this.id=K9++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){he(n)&&(s=i,i=n,n=he);var a=this,o=function(){var c=se,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=I1(s)),se=a,h=i.apply(a,arguments),he(h)&&a._r.push(h),se=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===he?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=se;se=null,n(this),se=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ze?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof xe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Wi.length;a--;)Wi[a].id===this.id&&Wi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),j9=function(){function r(e){this.contexts=[],this.scope=e,se&&se.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Un(n)||(n={matches:n});var a=new Ih(0,s||this.scope),o=a.conditions={},l,c,u;se&&!a.selector&&(a.selector=se.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=bn.matchMedia(n[c]),l&&(Wi.indexOf(a)<0&&Wi.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(F1):l.addEventListener("change",F1)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ka={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return xh(i)})},timeline:function(t){return new ze(t)},getTweensOf:function(t,e){return oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Re(t)&&(t=dn(t)[0]);var s=Hi(t||{}).get,a=n?ah:sh;return n==="native"&&(n=""),t&&(e?a(($e[e]&&$e[e].get||s)(t,e,n,i)):function(o,l,c){return a(($e[o]&&$e[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=dn(t),t.length>1){var i=t.map(function(u){return qe.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=$e[e],o=Hi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Cr._pt=0,h.init(t,n?u+n:u,Cr,0,[t]),h.render(1,h),Cr._pt&&_l(1,Cr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=qe.to(t,Ki((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gi(t.ease,Vr.ease)),L2(Vr,t||{})},config:function(t){return L2(rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!$e[o]&&!sn[o]&&Ps(e+" effect requires "+o+" plugin.")}),n1[e]=function(o,l,c){return n(dn(o),mn(l||{},s),c)},a&&(ze.prototype[e]=function(o,l,c){return this.add(n1[e](o,Un(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Xt[t]=Gi(e)},parseEase:function(t,e){return arguments.length?Gi(t,e):Xt},getById:function(t){return oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ze(t),i,s;for(n.smoothChildTiming=Ge(t.smoothChildTiming),oe.remove(n),n._dp=0,n._time=n._tTime=oe._time,i=oe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof xe&&i.vars.onComplete===i._targets[0]))&&Rn(n,i,i._start-i._delay),i=s;return Rn(oe,n,0),n},context:function(t,e){return t?new Ih(t,e):se},matchMedia:function(t){return new j9(t)},matchMediaRefresh:function(){return Wi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||F1()},addEventListener:function(t,e){var n=La[t]||(La[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=La[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:R9,wrapYoyo:C9,distribute:dh,random:mh,snap:ph,normalize:w9,getUnit:Ie,clamp:E9,splitColor:yh,toArray:dn,selector:I1,mapRange:gh,pipe:A9,unitize:b9,interpolate:P9,shuffle:fh},install:th,effects:n1,ticker:Qe,updateRoot:ze.updateRoot,plugins:$e,globalTimeline:oe,core:{PropTween:Xe,globals:eh,Tween:xe,Timeline:ze,Animation:Is,getCache:Hi,_removeLinkedListItem:oo,reverting:function(){return Ne},context:function(t){return t&&se&&(se.data.push(t),t._ctx=se),se},suppressOverwrites:function(t){return rl=t}}};We("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ka[r]=xe[r]});Qe.add(ze.updateRoot);Cr=Ka.to({},{duration:0});var J9=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},$9=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=J9(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},o1=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Re(s)&&(l={},We(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}$9(o,s)}}}},qe=Ka.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ne?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},o1("roundProps",N1),o1("modifiers"),o1("snap",ph))||Ka;xe.version=ze.version=qe.version="3.12.5";Qu=1;al()&&Xr();Xt.Power0;Xt.Power1;Xt.Power2;Xt.Power3;Xt.Power4;Xt.Linear;Xt.Quad;Xt.Cubic;Xt.Quart;Xt.Quint;Xt.Strong;Xt.Elastic;Xt.Back;Xt.SteppedEase;Xt.Bounce;Xt.Sine;Xt.Expo;Xt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var F2,ui,Ir,gl,ki,B2,vl,Q9=function(){return typeof window<"u"},Zn={},Ii=180/Math.PI,Nr=Math.PI/180,Tr=Math.atan2,z2=1e8,xl=/([A-Z])/g,tm=/(left|right|width|margin|padding|x)/i,em=/[\s,\(]\S/,Pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},B1=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},nm=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},im=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},rm=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Nh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Oh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},sm=function(t,e,n){return t.style[e]=n},am=function(t,e,n){return t.style.setProperty(e,n)},om=function(t,e,n){return t._gsap[e]=n},lm=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},cm=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},um=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ce="transform",Ye=ce+"Origin",hm=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Zn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Pn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Wn(i,o)}):this.tfm[t]=a.x?a[t]:Wn(i,t),t===Ye&&(this.tfm.zOrigin=a.zOrigin);else return Pn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ce)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ye,e,"")),t=ce}(s||e)&&this.props.push(t,e,s[t])},Fh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},fm=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(xl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=vl(),(!s||!s.isStart)&&!n[ce]&&(Fh(n),i.zOrigin&&n[Ye]&&(n[Ye]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bh=function(t,e){var n={target:t,props:[],revert:fm,save:hm};return t._gsap||qe.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},zh,z1=function(t,e){var n=ui.createElementNS?ui.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ui.createElement(t);return n&&n.style?n:ui.createElement(t)},Dn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(xl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Yr(e)||e,1)||""},k2="O,Moz,ms,Ms,Webkit".split(","),Yr=function(t,e,n){var i=e||ki,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(k2[a]+t in s););return a<0?null:(a===3?"ms":a>=0?k2[a]:"")+t},k1=function(){Q9()&&window.document&&(F2=window,ui=F2.document,Ir=ui.documentElement,ki=z1("div")||{style:{}},z1("div"),ce=Yr(ce),Ye=ce+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zh=!!Yr("perspective"),vl=qe.core.reverting,gl=1)},l1=function r(t){var e=z1("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Ir.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ir.removeChild(e),this.style.cssText=s,a},H2=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},kh=function(t){var e;try{e=t.getBBox()}catch{e=l1.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===l1||(e=l1.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+H2(t,["x","cx","x1"])||0,y:+H2(t,["y","cy","y1"])||0,width:0,height:0}:e},Hh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&kh(t))},ji=function(t,e){if(e){var n=t.style,i;e in Zn&&e!==Ye&&(e=ce),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(xl,"-$1").toLowerCase())):n.removeAttribute(e)}},hi=function(t,e,n,i,s,a){var o=new Xe(t._pt,e,n,0,1,a?Oh:Nh);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},V2={deg:1,rad:1,turn:1},dm={grid:1,flex:1},yi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ki.style,l=tm.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===a||!s||V2[i]||V2[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&Hh(t),(d||a==="%")&&(Zn[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],fe(d?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(f?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===ui||!g.appendChild)&&(g=ui.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Qe.time&&!p.uncache)return fe(s/p.width*h);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=h+i,_=t[u],S?t.style[e]=S:ji(t,e)}else(d||a==="%")&&!dm[Dn(g,"display")]&&(o.position=Dn(t,"position")),g===t&&(o.position="static"),g.appendChild(ki),_=ki[u],g.removeChild(ki),o.position="absolute";return l&&d&&(p=Hi(g),p.time=Qe.time,p.width=g[u]),fe(f?_*s/h:_&&s?h/_*s:0)},Wn=function(t,e,n,i){var s;return gl||k1(),e in Pn&&e!=="transform"&&(e=Pn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Zn[e]&&e!=="transform"?(s=Os(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ja(Dn(t,Ye))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ja[e]&&ja[e](t,e,n)||Dn(t,e)||ih(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yi(t,e,s,n)+n:s},pm=function(t,e,n,i){if(!n||n==="none"){var s=Yr(e,t,1),a=s&&Dn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Dn(t,"borderTopColor"))}var o=new Xe(this._pt,t.style,e,0,1,Dh),l=0,c=0,u,h,f,d,_,g,p,m,S,v,x,R;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Dn(t,e)||i,g?t.style[e]=g:ji(t,e)),u=[n,i],Sh(u),n=u[0],i=u[1],f=n.match(Rr)||[],R=i.match(Rr)||[],R.length){for(;h=Rr.exec(i);)p=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),p.charAt(1)==="="&&(p=Ur(d,p)+x),m=parseFloat(p),v=p.substr((m+"").length),l=Rr.lastIndex-v.length,v||(v=v||rn.units[e]||x,l===i.length&&(i+=v,o.e+=v)),x!==v&&(d=yi(t,e,g,v)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Oh:Nh;return Ju.test(i)&&(o.e=0),this._pt=o,o},G2={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mm=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=G2[n]||n,e[1]=G2[i]||i,e.join(" ")},_m=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Zn[o]&&(l=1,o=o==="transformOrigin"?Ye:ce),ji(n,o);l&&(ji(n,ce),a&&(a.svg&&n.removeAttribute("transform"),Os(n,1),a.uncache=1,Fh(i)))}},ja={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Xe(t._pt,e,n,0,0,_m);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Ns=[1,0,0,1,0,0],Vh={},Gh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},W2=function(t){var e=Dn(t,ce);return Gh(e)?Ns:e.substr(7).match(ju).map(fe)},yl=function(t,e){var n=t._gsap||Hi(t),i=t.style,s=W2(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ns:s):(s===Ns&&!t.offsetParent&&t!==Ir&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Ir.appendChild(t)),s=W2(t),l?i.display=l:ji(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ir.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},H1=function(t,e,n,i,s,a){var o=t._gsap,l=s||yl(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],v=e.split(" "),x=parseFloat(v[0])||0,R=parseFloat(v[1])||0,A,b,P,y;n?l!==Ns&&(b=d*p-_*g)&&(P=x*(p/b)+R*(-g/b)+(g*S-p*m)/b,y=x*(-_/b)+R*(d/b)-(d*S-_*m)/b,x=P,R=y):(A=kh(t),x=A.x+(~v[0].indexOf("%")?x/100*A.width:x),R=A.y+(~(v[1]||v[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&o.smooth?(m=x-c,S=R-u,o.xOffset=h+(m*d+S*g)-m,o.yOffset=f+(m*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=R,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ye]="0px 0px",a&&(hi(a,o,"xOrigin",c,x),hi(a,o,"yOrigin",u,R),hi(a,o,"xOffset",h,o.xOffset),hi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+R)},Os=function(t,e){var n=t._gsap||new bh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Dn(t,Ye)||"0",u,h,f,d,_,g,p,m,S,v,x,R,A,b,P,y,M,D,H,L,N,U,z,K,k,$,tt,ct,xt,wt,Y,et;return u=h=f=g=p=m=S=v=x=0,d=_=1,n.svg=!!(t.getCTM&&Hh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ce]!=="none"?l[ce]:"")),i.scale=i.rotate=i.translate="none"),b=yl(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),H1(t,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,A=n.yOrigin||0,b!==Ns&&(D=b[0],H=b[1],L=b[2],N=b[3],u=U=b[4],h=z=b[5],b.length===6?(d=Math.sqrt(D*D+H*H),_=Math.sqrt(N*N+L*L),g=D||H?Tr(H,D)*Ii:0,S=L||N?Tr(L,N)*Ii+g:0,S&&(_*=Math.abs(Math.cos(S*Nr))),n.svg&&(u-=R-(R*D+A*L),h-=A-(R*H+A*N))):(et=b[6],wt=b[7],tt=b[8],ct=b[9],xt=b[10],Y=b[11],u=b[12],h=b[13],f=b[14],P=Tr(et,xt),p=P*Ii,P&&(y=Math.cos(-P),M=Math.sin(-P),K=U*y+tt*M,k=z*y+ct*M,$=et*y+xt*M,tt=U*-M+tt*y,ct=z*-M+ct*y,xt=et*-M+xt*y,Y=wt*-M+Y*y,U=K,z=k,et=$),P=Tr(-L,xt),m=P*Ii,P&&(y=Math.cos(-P),M=Math.sin(-P),K=D*y-tt*M,k=H*y-ct*M,$=L*y-xt*M,Y=N*M+Y*y,D=K,H=k,L=$),P=Tr(H,D),g=P*Ii,P&&(y=Math.cos(P),M=Math.sin(P),K=D*y+H*M,k=U*y+z*M,H=H*y-D*M,z=z*y-U*M,D=K,U=k),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=fe(Math.sqrt(D*D+H*H+L*L)),_=fe(Math.sqrt(z*z+et*et)),P=Tr(U,z),S=Math.abs(P)>2e-4?P*Ii:0,x=Y?1/(Y<0?-Y:Y):0),n.svg&&(K=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Gh(Dn(t,ce)),K&&t.setAttribute("transform",K))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=fe(d),n.scaleY=fe(_),n.rotation=fe(g)+o,n.rotationX=fe(p)+o,n.rotationY=fe(m)+o,n.skewX=S+o,n.skewY=v+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ye]=Ja(c)),n.xOffset=n.yOffset=0,n.force3D=rn.force3D,n.renderTransform=n.svg?vm:zh?Wh:gm,n.uncache=0,n},Ja=function(t){return(t=t.split(" "))[0]+" "+t[1]},c1=function(t,e,n){var i=Ie(e);return fe(parseFloat(e)+parseFloat(yi(t,"x",n+"px",i)))+i},gm=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Wh(t,e)},Li="0deg",as="0px",Di=") ",Wh=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,v=n.zOrigin,x="",R=m==="auto"&&t&&t!==1||m===!0;if(v&&(h!==Li||u!==Li)){var A=parseFloat(u)*Nr,b=Math.sin(A),P=Math.cos(A),y;A=parseFloat(h)*Nr,y=Math.cos(A),a=c1(S,a,b*y*-v),o=c1(S,o,-Math.sin(A)*-v),l=c1(S,l,P*y*-v+v)}p!==as&&(x+="perspective("+p+Di),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(R||a!==as||o!==as||l!==as)&&(x+=l!==as||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Di),c!==Li&&(x+="rotate("+c+Di),u!==Li&&(x+="rotateY("+u+Di),h!==Li&&(x+="rotateX("+h+Di),(f!==Li||d!==Li)&&(x+="skew("+f+", "+d+Di),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Di),S.style[ce]=x||"translate(0, 0)"},vm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,v=parseFloat(a),x=parseFloat(o),R,A,b,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Nr,c*=Nr,R=Math.cos(l)*h,A=Math.sin(l)*h,b=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Nr,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),R*=y,A*=y)),R=fe(R),A=fe(A),b=fe(b),P=fe(P)):(R=h,P=f,A=b=0),(v&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(v=yi(d,"x",a,"px"),x=yi(d,"y",o,"px")),(_||g||p||m)&&(v=fe(v+_-(_*R+g*b)+p),x=fe(x+g-(_*A+g*P)+m)),(i||s)&&(y=d.getBBox(),v=fe(v+i/100*y.width),x=fe(x+s/100*y.height)),y="matrix("+R+","+A+","+b+","+P+","+v+","+x+")",d.setAttribute("transform",y),S&&(d.style[ce]=y)},xm=function(t,e,n,i,s){var a=360,o=Re(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ii:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*z2)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*z2)%a-~~(c/a)*a)),t._pt=f=new Xe(t._pt,e,n,i,c,nm),f.e=u,f.u="deg",t._props.push(n),f},X2=function(t,e){for(var n in e)t[n]=e[n];return t},ym=function(t,e,n){var i=X2({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ce]=e,o=Os(n,1),ji(n,ce),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ce],a[ce]=e,o=Os(n,1),a[ce]=c);for(l in Zn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Ie(c),_=Ie(u),h=d!==_?yi(n,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new Xe(t._pt,o,l,h,f-h,B1),t._pt.u=_||0,t._props.push(l));X2(o,i)};We("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ja[t>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return Wn(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var Xh={name:"css",register:k1,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,S,v,x,R,A,b,P;gl||k1(),this.styles=this.styles||Bh(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!($e[g]&&wh(g,e,n,i,t,s)))){if(d=typeof u,_=ja[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ds(u)),_)_(this,t,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",mi.lastIndex=0,mi.test(c)||(p=Ie(c),m=Ie(u)),m?p!==m&&(c=yi(t,g,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),P.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Re(c)&&~c.indexOf("random(")&&(c=Ds(c)),Ie(c+"")||c==="auto"||(c+=rn.units[g]||Ie(Wn(t,g))||""),(c+"").charAt(1)==="="&&(c=Wn(t,g))):c=Wn(t,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in Pn&&(g==="autoAlpha"&&(f===1&&Wn(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),hi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Pn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Zn,v){if(this.styles.save(g),x||(R=t._gsap,R.renderTransform&&!e.parseTransform||Os(t,e.parseTransform),A=e.smoothOrigin!==!1&&R.smooth,x=this._pt=new Xe(this._pt,o,ce,0,1,R.renderTransform,R,0,-1),x.dep=1),g==="scale")this._pt=new Xe(this._pt,R,"scaleY",R.scaleY,(S?Ur(R.scaleY,S+h):h)-R.scaleY||0,B1),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Ye,0,o[Ye]),u=mm(u),R.svg?H1(t,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&hi(this,R,"zOrigin",R.zOrigin,m),hi(this,o,g,Ja(c),Ja(u)));continue}else if(g==="svgOrigin"){H1(t,u,1,A,0,this);continue}else if(g in Vh){xm(this,R,g,f,S?Ur(f,S+u):u);continue}else if(g==="smoothOrigin"){hi(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){ym(this,u,t);continue}}else g in o||(g=Yr(g)||g);if(v||(h||h===0)&&(f||f===0)&&!em.test(u)&&g in o)p=(c+"").substr((f+"").length),h||(h=0),m=Ie(u)||(g in rn.units?rn.units[g]:p),p!==m&&(f=yi(t,g,c,m)),this._pt=new Xe(this._pt,v?R:o,g,f,(S?Ur(f,S+h):h)-f,!v&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?rm:B1),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=im);else if(g in o)pm.call(this,t,g,c,S?S+u:u);else if(g in t)this.add(t,g,c||t[g],S?S+u:u,i,s);else if(g!=="parseTransform"){ll(g,u);continue}v||(g in o?P.push(g,0,o[g]):P.push(g,1,c||t[g])),a.push(g)}}b&&Uh(this)},render:function(t,e){if(e.tween._time||!vl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Wn,aliases:Pn,getSetter:function(t,e,n){var i=Pn[e];return i&&i.indexOf(",")<0&&(e=i),e in Zn&&e!==Ye&&(t._gsap.x||Wn(t,"x"))?n&&B2===n?e==="scale"?lm:om:(B2=n||{})&&(e==="scale"?cm:um):t.style&&!sl(t.style[e])?sm:~e.indexOf("-")?am:ml(t,e)},core:{_removeProperty:ji,_getMatrix:yl}};qe.utils.checkPrefix=Yr;qe.core.getStyleSaver=Bh;(function(r,t,e,n){var i=We(r+","+t+","+e,function(s){Zn[s]=1});We(t,function(s){rn.units[s]="deg",Vh[s]=1}),Pn[i[13]]=r+","+t,We(n,function(s){var a=s.split(":");Pn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");We("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){rn.units[r]="px"});qe.registerPlugin(Xh);var V1=qe.registerPlugin(Xh)||qe;V1.core.Tween;function Y2(r){return typeof r=="function"?r():Ar(r)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const q2=()=>{};function Mm(r,t){function e(...n){return new Promise((i,s)=>{Promise.resolve(r(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(i).catch(s)})}return e}function Sm(r,t={}){let e,n,i=q2;const s=o=>{clearTimeout(o),i(),i=q2};return o=>{const l=Y2(r),c=Y2(t.maxWait);return e&&s(e),l<=0||c!==void 0&&c<=0?(n&&(s(n),n=null),Promise.resolve(o())):new Promise((u,h)=>{i=t.rejectOnCancel?h:u,c&&!n&&(n=setTimeout(()=>{e&&s(e),n=null,u(o())},c)),e=setTimeout(()=>{n&&s(n),n=null,u(o())},l)})}}function Em(r,t=200,e={}){return Mm(Sm(t,e),r)}const Tm=""+new URL("PixPin_2024-05-20_11-41-58-VUGSsSGE.jpg",import.meta.url).href,Am=""+new URL("demo-Cz4Zi9su.gif",import.meta.url).href,bm=""+new URL("grid-CwTkbZjd.png",import.meta.url).href,wm=""+new URL("grid_opacity-BPujVKus.jpg",import.meta.url).href,Rm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFZ0lEQVR4Xu1bXVIcNxBWaxfnMfgG6xssJ8gCzrPNCcI+BuyyOYHNCXDKAT+GnCDkOQZvThByAo9PkHk17EhpzcxSy66G7U/SDKkiUwVF7Upq9afur39GkHrgDz1w/dX/AHRlAaMju97vT4eG9FBZs657+luriP9WuVI2t8Z8UZoybWz28eXapKt9tWoBM6Wt1j+wQs/5Z12uGJ1ZZX6/2O+fyufgI1sBoFT8G/PGWrWLKe1XgEi9+7jXO8DVWz0jOQBP31+P+MR/YdGD1eKhEblV9iC1RSQDwJ1675Flxa0z9RYfuiyuaHNyQMwd8U8SAL4/vhoa1futhVNv0jDTqtj5Y//RZSwE0QDUJu+UBwgudtvl/JyM2YmNGFEA1Cf/6R6Uv0GQQdiMASEYgMrnzV8dmn2T2eSF1huTHykLsasgALojPKFKRJPzPb0pHH1rWBAAW++v35LWb0IEtjjn9Hy/N0bXhwEYfbCDnilNP4T0OHTRRJH5VVuTXV+tZS6clWvaYkiKvotJntgVnqCuAAPw9KQ44k2+BpHOOZs7nX7Vh5L4vfVz8ZrHH4Ey3HDYCiAAAk8/V2TH53v9M0ShSpbl8GqHyDzUCiAAto8Ll+LuAhuKYuiabDnMQiBAVoAC8BkIe0EnvwhuHW6dXCnn5EyGj6WHJAagTnoc+Ykeru8PL16uvfUN3jqe7hJxiWztoAKUS19T/N00fvtk+lxZctmm6EGSIzEAYOjLiytm5IWCZXX+QJdaTce+HH/72EUesSuI3UAMALIBX/0O+LOXN0qrUeQ4SPKI3QAAoLASyeUYsjuLrA9ZkCezq7ngH+ke2AIfS0KuCIA6/DkiEj0+4RxB3OalRKZ84QyxQi6XNyTlsggAkAAzZuEn80iB88upnGwdXLzovZtfZ/vEfOIvRpJTkBKhCIC65ndlr+Chy/N9vTE/EPTfyos8fUAkC+X22VjSPhMBACqwZAFoGCstwBNGkUQsKQCgAksMjBJYE5EyB7jUWNZz9BCxz3xFFoD6cCyB8Ua9eQRbgDwTTQkAeoI+AkMiiW9+ikMItgAUAKawJSJ0woW5gDeLE8690VFaFYpcwK0KmV9J48vJkPv4jhZ6zid/uBj63By8DPcfQLAFuIlICKoFLUWD+Q240Go0DbjIWe9RMZl1h3ybRNi/KYQ2xW+5BYAVWSWQzjgn2GkSLvk8qDskJMByh5JNlGZYtcHFufhs3bvK4lWya+Vd81WcQvNYqAkjBqDmAbQjVBsCTQqisbRhOfd2Ge09OnniUhiygBgrmJ20S2+npH9qAsIprtcMN0vUK54zWGUhvu+lRdDNnlAhKCF51+dyl4uazN0KcTdF3BhracS/ndKIuS8sj3MO5AKlFVTvBcSlMQpwxPicT39TUgLPy4ABcJMDQmKEXrKpoWQbBEBJiEBtLlMhZhRu+sEcMJsYGhZj1GyYm3EHakPS/vLND7aA0hWq+0DCRkkLqnPMD3nrFM0B8wskiQqB2IT6fVIASj7AevaB6i5NgxKeJqFRLrDAB8jrq1gQovw+uQV0zAdJLkdFRwHfEaJNixAz8HWLQtZpBYAO8oMkft+KCyzwQQu3x9LeEG3NAtzCaANTYMJBeb5gXXlDRLLYrfwgqIPkl5La71t1gdtJEvAiowHhNq/KO5FJ8oAm6wDuBDSpn/RmuE9IqwA4gRH9g9b8vjMXmAkC3y1W04DOLspPnQNQ5gfAFbu2/f5eAKhAkFx0aifeN1lJ6xwwL1hw568Tv783C3CC73g3mPG1lnHMPz+EcEGnFjDb4E3/X9Mz95ktij9Nv38qfXESouh/wgVSbjzVWvdiAak2n2KdBw/AvysO9F/qo2v4AAAAAElFTkSuQmCC",Cm=""+new URL("inset_rotating_texture-B1TYmmxk.png",import.meta.url).href,Pm=""+new URL("light_ball-DJwG_zbf.png",import.meta.url).href,Lm=""+new URL("outset_rotating_texture-CAivvQWo.png",import.meta.url).href,Dm=""+new URL("quan-BveJX1zm.png",import.meta.url).href,Um=""+new URL("side-DACH2GNx.png",import.meta.url).href,Im=""+new URL("top_surface_normal_map-DGwZGHHa.jpg",import.meta.url).href,Kn=r=>new URL(Object.assign({"../assets/images/PixPin_2024-05-20_11-41-58.jpg":Tm,"../assets/images/demo.gif":Am,"../assets/images/grid.png":bm,"../assets/images/grid_opacity.jpg":wm,"../assets/images/icon.png":Rm,"../assets/images/inset_rotating_texture.png":Cm,"../assets/images/light_ball.png":Pm,"../assets/images/outset_rotating_texture.png":Lm,"../assets/images/quan.png":Dm,"../assets/images/side.png":Um,"../assets/images/top_surface_normal_map.jpg":Im})[`../assets/images/${r}`],import.meta.url).href,tn=1;let Ji;const jn=new m8,Nm=jn.load(Kn("icon.png")),Om=jn.load(Kn("light_ball.png")),Aa=jn.load(Kn("grid.png")),Fm=jn.load(Kn("grid_opacity.jpg")),Bm=jn.load(Kn("inset_rotating_texture.png")),zm=jn.load(Kn("outset_rotating_texture.png")),km=jn.load(Kn("quan.png")),ba=jn.load(Kn("top_surface_normal_map.jpg")),Hm=jn.load(Kn("side.png")),Vm=r=>{Ji=s9();const t=new L7,e=new un(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(0,-9,9);const n=new v8(16777215,2);n.position.set(15,30,15);const i=new x8(16777215,3);t.add(n),t.add(i);const s=new P7({alpha:!0});s.setSize(window.innerWidth,window.innerHeight),r.appendChild(s.domElement);const a=new A8;a.domElement.style.position="absolute",a.domElement.style.top="0px",a.domElement.style.pointerEvents="none",a.setSize(window.innerWidth,window.innerHeight),r.appendChild(a.domElement);const o=new E8(e,s.domElement);o.enableDamping=!0;const l=new y8,c=new zs(20,20),u=new zi({color:9949154,map:Om,transparent:!0}),h=new Ue(c,u);h.position.z=-tn/2-.9,h.scale.set(1.3,1.3,1.3),t.add(h),Aa.repeat.set(20,20),Aa.wrapS=Xi,Aa.wrapT=Xi;const f=new Bu({color:138292,map:Aa,transparent:!0,alphaMap:Fm}),d=new Ue(c,f);d.position.z=-tn/2-1,d.scale.set(2,2,2),t.add(d);const _=new zi({color:1665439,map:Bm,transparent:!0}),g=new Ue(c,_);g.scale.set(.9,.9,.9),g.position.z=-tn/2-.7,t.add(g);const p=new zi({color:669278,map:zm,transparent:!0}),m=new Ue(c,p);m.position.z=-tn/2-.8,t.add(m);const S=new zi({color:1665439,map:km,transparent:!0});S.depthWrite=!1;const v=new Ue(c,S);v.scale.set(1.5,1.5,1.5),v.position.z=tn*2,t.add(v);const x=()=>{const R=l.getElapsedTime();o.update(),s.render(t,e),a.render(t,e),g.rotation.z=-R*.4,m.rotation.z=R*.05,s.setAnimationLoop(x)};return x(),window.addEventListener("resize",Em(()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight)},400)),{scene:t,camera:e,Object3D:ye,Raycaster:M8,Vector2:st}},Gm=r=>{const t=new Iu;r.forEach((a,o)=>{const[l,c]=Ji(a);o===0?t.moveTo(l,-c):t.lineTo(l,-c)});const e=new $1(t,{depth:tn,bevelEnabled:!1});ba.wrapS=Xi,ba.wrapT=Xi,ba.repeat.set(.05,.05);const n=new Bu({color:924474,normalMap:ba}),i=new h8({color:2868444,map:Hm});return new Ue(e,[n,i])},Wm=r=>{const t=[];r.forEach(s=>{const[a,o]=Ji(s);t.push(new I(a,-o,0))});const e=new _n().setFromPoints(t),n=new wu({color:2868444,linewidth:1}),i=new I7(e,n);return i.position.z=tn+1e-4,i},Xm=(r,t)=>{const e=document.createElement("div");e.classList.add("map-city-name"),e.textContent=r;const n=new T8(e),[i,s]=Ji(t);return n.position.set(i,-s-.2,tn),n},Ym=r=>{const t=new Au({map:Nm,transparent:!0,depthTest:!1}),e=new U7(t),[n,i]=Ji(r);return e.scale.set(.3,.3,.3),e.position.set(n,-i+.2,tn+.2),e},qm=r=>{const e=new qr().setFromObject(r).getCenter(new I),n=[0,0,0];r.position.x=r.position.x-e.x-n[0],r.position.y=r.position.y-e.y-n[1],r.position.z=r.position.z-e.z-n[2]},u1=(r,t)=>{r.children.forEach(e=>{e.type==="Line"?V1.to(e.position,{z:t+tn+1e-4,duration:.4,ease:"power1.out"}):V1.to(e.position,{z:t,duration:.4,ease:"power1.out"})})},Zm=()=>{const[r,t]=Ji([118.123854,24.676398]),[e,n]=Ji([118.894712,25.445304]),i=[new I(r,-t,tn),new I((r+e)/2,-(t+n)/2,tn+1),new I(e,-n,tn)],s=new Ru(i),a=new Q1(s,64,.02,8,!1),o=new zi({color:2868444});return new Ue(a,o)},Z2=(r,t,e,n,i)=>{t.name=i;const s=Gm(r),a=Wm(r);t.add(s,a),e.push(s),n.push(t)},Km={relative:"","overflow-hidden":""},jm=["innerHTML"],Jm={__name:"map",props:{mapJson:{type:Object,required:!0}},setup(r){const t=r,e=po(null),n=po(null),i=po({x:0,y:0,show:!0,content:""});return jh(()=>{const{scene:s,camera:a,Object3D:o,Raycaster:l,Vector2:c}=Vm(e.value),u=new o,h=[],f=[];t.mapJson.features.forEach(m=>{const S=new o,{centroid:v,center:x,name:R}=m.properties,{coordinates:A,type:b}=m.geometry,P=v||x,y=P&&Xm(R,P);y&&u.add(y);const M=P&&Ym(P);M&&u.add(M),A.forEach(D=>{b==="MultiPolygon"&&D.forEach(H=>Z2(H,S,h,f,R)),b==="Polygon"&&Z2(D,S,h,f,R)}),u.add(S)});const d=Zm();u.add(d),qm(u),s.add(u);const _=new l;let g="",p="";e.value.addEventListener("mousemove",m=>{const S=new c;S.x=m.clientX/window.innerWidth*2-1,S.y=-(m.clientY/window.innerHeight)*2+1,_.setFromCamera(S,a);const v=_.intersectObjects(h);if(v.length<=0){document.body.style.cursor="default",f.forEach(x=>u1(x,0)),g="",i.value.show=!1;return}i.value={x:m.x+20,y:m.y+20,show:!0,content:`${p}`},document.body.style.cursor="pointer",p=v[0].object.parent.name,g!==p&&(f.forEach(x=>{x.name===p?u1(x,.5):u1(x,0)}),g=p)})}),(s,a)=>(K2(),j2("div",Km,[Al("div",{ref_key:"mapRef",ref:e},null,512),Jh(Al("div",{ref_key:"tooltip",ref:n,innerHTML:Ar(i).content,style:Qh({transform:`translate(${Ar(i).x}px, ${Ar(i).y}px)`}),bg:"#19699F99",text:"#fff","pointer-events-none":"",absolute:"","left-0":"","top-0":"","border-rd-4":"","px-10":"","py-10":"","transition-transform":"","transition-duration-100":"","transition-ease-linear":""},null,12,jm),[[$h,Ar(i).show]])]))}},$m="FeatureCollection",Qm=[{type:"Feature",properties:{adcode:350100,name:"福州市",center:[119.306239,26.075302],centroid:[119.200519,26.047886],childrenNum:13,level:"city",parent:{adcode:35e4},subFeatureIndex:0,acroutes:[1e5,35e4]},geometry:{type:"MultiPolygon",coordinates:[[[[119.799983,26.546836],[119.794279,26.556833],[119.782628,26.566734],[119.763664,26.577063],[119.743676,26.575825],[119.744066,26.5684],[119.72871,26.559547],[119.699362,26.569257],[119.681909,26.559118],[119.675084,26.537647],[119.665529,26.535743],[119.659337,26.526077],[119.637936,26.52822],[119.622579,26.521125],[119.610391,26.527363],[119.605029,26.536124],[119.59562,26.540742],[119.585382,26.537219],[119.565492,26.546455],[119.557643,26.544932],[119.556229,26.554786],[119.534779,26.56107],[119.524444,26.573588],[119.530781,26.578348],[119.50665,26.607234],[119.500556,26.621222],[119.473889,26.631356],[119.466625,26.627264],[119.449075,26.630642],[119.424505,26.624695],[119.408466,26.6344],[119.401592,26.628121],[119.414559,26.623506],[119.406418,26.617464],[119.388039,26.622935],[119.380434,26.621508],[119.379556,26.611516],[119.371513,26.601524],[119.360641,26.598954],[119.351476,26.602999],[119.344212,26.597955],[119.348307,26.590198],[119.335486,26.585249],[119.332268,26.578919],[119.31501,26.575492],[119.320275,26.585249],[119.316083,26.591293],[119.29902,26.591436],[119.285126,26.570352],[119.279179,26.535076],[119.253682,26.54855],[119.246662,26.532886],[119.229111,26.52403],[119.215461,26.536743],[119.21512,26.545884],[119.204492,26.563402],[119.196107,26.568876],[119.182311,26.55431],[119.167247,26.549407],[119.159398,26.541266],[119.14838,26.543694],[119.141311,26.537933],[119.135022,26.542409],[119.115912,26.538885],[119.1125,26.55074],[119.101628,26.559213],[119.100312,26.575016],[119.090415,26.565973],[119.072134,26.56721],[119.063213,26.570875],[119.065406,26.579395],[119.07696,26.586296],[119.074084,26.59272],[119.057801,26.603665],[119.051317,26.597194],[119.028453,26.598431],[119.026259,26.587724],[119.015729,26.58977],[119.013974,26.573493],[119.006125,26.555738],[118.99384,26.553644],[119.00164,26.54536],[118.995108,26.528791],[118.983944,26.5336],[118.968197,26.532458],[118.953816,26.525554],[118.948307,26.510506],[118.940702,26.503219],[118.939824,26.493456],[118.950988,26.491646],[118.954206,26.482881],[118.950257,26.469496],[118.938313,26.465637],[118.926272,26.477594],[118.906528,26.477975],[118.872109,26.466494],[118.868599,26.456299],[118.860214,26.453392],[118.854803,26.439526],[118.827551,26.426374],[118.810342,26.432378],[118.811122,26.448056],[118.797521,26.460348],[118.804736,26.468305],[118.805321,26.4825],[118.796838,26.490026],[118.783822,26.493218],[118.782847,26.505648],[118.762274,26.511554],[118.748185,26.510792],[118.746917,26.50241],[118.754913,26.48512],[118.735656,26.470544],[118.73551,26.448151],[118.731171,26.43843],[118.762274,26.420941],[118.753304,26.398539],[118.766271,26.392675],[118.779922,26.373271],[118.798935,26.36054],[118.794157,26.340463],[118.773487,26.328635],[118.75345,26.334263],[118.751988,26.338651],[118.720543,26.340368],[118.711476,26.326679],[118.691829,26.311033],[118.690708,26.297913],[118.696607,26.291472],[118.681494,26.291806],[118.683395,26.286987],[118.666479,26.275344],[118.67306,26.251768],[118.668672,26.243416],[118.663261,26.227901],[118.651025,26.224751],[118.631378,26.23468],[118.611634,26.235587],[118.598764,26.22709],[118.612414,26.210284],[118.609733,26.204937],[118.60008,26.210093],[118.587356,26.209377],[118.578483,26.204029],[118.57434,26.185501],[118.579702,26.175902],[118.568002,26.176379],[118.564541,26.168499],[118.564882,26.138117],[118.572975,26.128848],[118.586771,26.132384],[118.581799,26.114227],[118.5837,26.098504],[118.588867,26.094107],[118.592329,26.076518],[118.601738,26.076518],[118.593596,26.061699],[118.600958,26.055245],[118.591939,26.052232],[118.577557,26.062177],[118.552792,26.057922],[118.516375,26.059308],[118.52242,26.042096],[118.515936,26.025168],[118.519056,25.986474],[118.513889,25.976667],[118.519983,25.969347],[118.515546,25.961691],[118.520568,25.957002],[118.514425,25.933553],[118.519592,25.924603],[118.507746,25.901531],[118.518325,25.887647],[118.512572,25.885493],[118.507259,25.896122],[118.485223,25.900095],[118.480251,25.90359],[118.471085,25.898563],[118.476887,25.882046],[118.476448,25.87132],[118.459824,25.865813],[118.463432,25.895786],[118.43618,25.918477],[118.432524,25.917615],[118.417411,25.899185],[118.418483,25.892387],[118.409806,25.889419],[118.406247,25.878455],[118.41239,25.875582],[118.421213,25.854607],[118.405028,25.843161],[118.397131,25.845843],[118.392743,25.82539],[118.382115,25.814132],[118.391914,25.809964],[118.397959,25.801005],[118.414632,25.789744],[118.417996,25.769186],[118.425016,25.761374],[118.430915,25.730552],[118.448514,25.718134],[118.454364,25.720723],[118.46855,25.71075],[118.479958,25.707106],[118.492438,25.688739],[118.510232,25.674974],[118.523736,25.659097],[118.540068,25.661592],[118.54348,25.671521],[118.566491,25.681114],[118.571853,25.674015],[118.577801,25.677325],[118.576241,25.687013],[118.583846,25.677804],[118.587746,25.689986],[118.598569,25.683368],[118.604906,25.685142],[118.605053,25.697084],[118.611975,25.699098],[118.610123,25.708496],[118.625479,25.697419],[118.631866,25.697995],[118.634937,25.708496],[118.653657,25.711757],[118.668234,25.708544],[118.676521,25.7014],[118.674425,25.694926],[118.691098,25.695022],[118.691634,25.689794],[118.707186,25.682888],[118.726296,25.694734],[118.727612,25.687157],[118.723322,25.669794],[118.729952,25.668163],[118.73785,25.678188],[118.744724,25.679147],[118.753596,25.696221],[118.760421,25.689123],[118.772414,25.686389],[118.798983,25.699961],[118.806491,25.709551],[118.801226,25.711709],[118.811902,25.720819],[118.82643,25.719812],[118.83891,25.70888],[118.853682,25.703845],[118.877862,25.708832],[118.874449,25.698331],[118.882786,25.702407],[118.905162,25.722257],[118.920324,25.726333],[118.921055,25.732086],[118.93451,25.747282],[118.942359,25.748528],[118.952597,25.760032],[118.951037,25.751979],[118.955035,25.732709],[118.951524,25.712716],[118.975461,25.732086],[119.014803,25.735489],[119.025869,25.74268],[119.041226,25.741769],[119.048782,25.747138],[119.071061,25.752698],[119.076717,25.748576],[119.088368,25.754999],[119.090562,25.749631],[119.105772,25.754472],[119.132877,25.752794],[119.152231,25.744741],[119.146771,25.731558],[119.124346,25.713723],[119.144139,25.709887],[119.151646,25.700297],[119.141604,25.697132],[119.144285,25.684855],[119.154718,25.675598],[119.145553,25.676269],[119.144236,25.668451],[119.133316,25.646337],[119.133999,25.633383],[119.151451,25.6187],[119.155205,25.603055],[119.162372,25.600703],[119.161689,25.591392],[119.169099,25.593216],[119.170708,25.581888],[119.163639,25.587216],[119.157009,25.584192],[119.166662,25.574304],[119.168807,25.566335],[119.180702,25.555101],[119.20186,25.5515],[119.203907,25.54497],[119.227746,25.564607],[119.23501,25.542713],[119.24437,25.527923],[119.243005,25.513659],[119.230818,25.503861],[119.223798,25.48969],[119.209416,25.492621],[119.212682,25.472011],[119.219751,25.468648],[119.256119,25.488922],[119.256119,25.479218],[119.272646,25.477824],[119.261482,25.451302],[119.263188,25.427898],[119.288002,25.410978],[119.35367,25.411844],[119.354547,25.443709],[119.343627,25.47254],[119.350208,25.50535],[119.357034,25.520719],[119.397399,25.506311],[119.401202,25.49363],[119.424651,25.488009],[119.435571,25.499538],[119.452926,25.493726],[119.442786,25.47254],[119.441275,25.459423],[119.44732,25.450773],[119.430257,25.435732],[119.438399,25.427369],[119.438642,25.412661],[119.4442,25.411747],[119.447856,25.425542],[119.456631,25.435059],[119.462482,25.447938],[119.490074,25.446833],[119.485931,25.422418],[119.507235,25.396316],[119.505382,25.389153],[119.491196,25.377084],[119.485736,25.367275],[119.496656,25.358812],[119.5008,25.36641],[119.519959,25.376892],[119.53395,25.372516],[119.531708,25.360639],[119.548527,25.366073],[119.552134,25.38045],[119.564858,25.385258],[119.568222,25.393864],[119.578898,25.400787],[119.572512,25.414343],[119.555352,25.429147],[119.559886,25.445728],[119.573,25.450293],[119.584115,25.425975],[119.581043,25.413526],[119.590404,25.398191],[119.58275,25.379921],[119.584261,25.370112],[119.596449,25.352944],[119.588795,25.345778],[119.597375,25.334668],[119.612,25.340969],[119.636034,25.33866],[119.6491,25.342941],[119.658508,25.354002],[119.657046,25.363284],[119.643152,25.355926],[119.630672,25.358667],[119.644956,25.362899],[119.654316,25.36992],[119.660215,25.366025],[119.665236,25.372084],[119.656461,25.396989],[119.65807,25.407806],[119.668356,25.40795],[119.672402,25.418958],[119.670111,25.435491],[119.656802,25.438519],[119.657143,25.428378],[119.646272,25.434194],[119.640081,25.429291],[119.62292,25.434049],[119.641104,25.44443],[119.648905,25.461681],[119.674986,25.468119],[119.680398,25.46072],[119.687564,25.4612],[119.68108,25.450341],[119.685516,25.440105],[119.703115,25.440489],[119.703018,25.433521],[119.718569,25.419727],[119.738606,25.416362],[119.756693,25.396268],[119.772537,25.395066],[119.783554,25.411507],[119.762348,25.417516],[119.764249,25.433377],[119.77512,25.437414],[119.803737,25.457597],[119.813828,25.458125],[119.826504,25.465285],[119.83991,25.46269],[119.845224,25.452792],[119.855072,25.450773],[119.866577,25.454954],[119.859459,25.461921],[119.863896,25.479746],[119.851464,25.47744],[119.843079,25.483686],[119.833085,25.481716],[119.829965,25.490171],[119.81612,25.493774],[119.811001,25.507127],[119.81456,25.529411],[119.821239,25.534886],[119.844054,25.544009],[119.854145,25.533493],[119.870867,25.53575],[119.887296,25.552412],[119.890367,25.565663],[119.884663,25.569695],[119.871891,25.56379],[119.845614,25.569743],[119.831427,25.580016],[119.841665,25.592064],[119.84069,25.601279],[119.808905,25.61846],[119.787991,25.615293],[119.780385,25.62369],[119.779264,25.637221],[119.791891,25.653868],[119.791403,25.665381],[119.784529,25.667492],[119.749575,25.646193],[119.727881,25.63842],[119.719447,25.622442],[119.712476,25.623738],[119.700288,25.616396],[119.692732,25.601999],[119.683761,25.595904],[119.692293,25.577424],[119.708283,25.571136],[119.717789,25.547466],[119.713353,25.536182],[119.714328,25.521055],[119.723932,25.517549],[119.718716,25.511594],[119.706723,25.513755],[119.696534,25.510777],[119.691756,25.501603],[119.676059,25.49142],[119.678935,25.483734],[119.674986,25.47499],[119.654121,25.470282],[119.652658,25.485655],[119.644029,25.485607],[119.634426,25.475182],[119.62448,25.473837],[119.627259,25.488874],[119.613901,25.504822],[119.612585,25.522304],[119.6198,25.537239],[119.616437,25.556781],[119.600349,25.576944],[119.602933,25.58592],[119.59679,25.593312],[119.586699,25.592112],[119.570757,25.582224],[119.534779,25.585344],[119.533706,25.594032],[119.542433,25.602527],[119.540239,25.628728],[119.532488,25.630648],[119.525711,25.624266],[119.510891,25.627721],[119.503822,25.624458],[119.49339,25.632375],[119.478326,25.631463],[119.473012,25.662311],[119.489294,25.667972],[119.490269,25.673536],[119.526638,25.683032],[119.5437,25.684423],[119.583335,25.679147],[119.602981,25.685286],[119.612049,25.703557],[119.602981,25.71473],[119.612195,25.727052],[119.626479,25.723312],[119.637594,25.749583],[119.636619,25.760847],[119.6276,25.768275],[119.625699,25.804742],[119.628478,25.872038],[119.634816,25.887121],[119.643054,25.892244],[119.68888,25.898084],[119.695169,25.904404],[119.702482,25.931591],[119.715206,25.96327],[119.722031,25.990349],[119.72364,26.011538],[119.715352,26.025455],[119.70019,26.032485],[119.675766,26.02579],[119.667137,26.028946],[119.659045,26.072264],[119.654413,26.090093],[119.644614,26.090475],[119.641933,26.108923],[119.632914,26.115565],[119.618728,26.11977],[119.611074,26.145713],[119.603664,26.153118],[119.605321,26.169741],[119.626479,26.179532],[119.643542,26.195769],[119.664456,26.202024],[119.668112,26.220311],[119.679764,26.22919],[119.67991,26.238499],[119.671525,26.247282],[119.669087,26.256971],[119.676254,26.26308],[119.72403,26.26957],[119.771318,26.285222],[119.781117,26.282788],[119.797692,26.268234],[119.814657,26.280307],[119.818411,26.293763],[119.803737,26.298963],[119.80676,26.307694],[119.845126,26.322768],[119.86097,26.315851],[119.862579,26.307598],[119.876863,26.310031],[119.898557,26.3086],[119.909916,26.310413],[119.913573,26.320574],[119.93434,26.334788],[119.954474,26.35272],[119.962372,26.373462],[119.940776,26.37289],[119.913231,26.360874],[119.893731,26.355867],[119.876571,26.359634],[119.880861,26.372842],[119.861458,26.391054],[119.861117,26.398634],[119.835669,26.437716],[119.837668,26.450057],[119.818557,26.504505],[119.799983,26.546836]]],[[[120.495608,26.371936],[120.486736,26.36898],[120.484834,26.380804],[120.478155,26.381138],[120.47289,26.36755],[120.480544,26.37289],[120.486931,26.365452],[120.484981,26.355438],[120.4979,26.352338],[120.506772,26.364546],[120.513939,26.360349],[120.511257,26.370601],[120.501068,26.376799],[120.495608,26.371936]]],[[[119.899825,25.582128],[119.907479,25.58952],[119.906504,25.600991],[119.897485,25.606942],[119.896217,25.601087],[119.882518,25.59864],[119.875937,25.606174],[119.876619,25.587168],[119.88403,25.588032],[119.899825,25.582128]]],[[[119.579873,25.627145],[119.587722,25.636597],[119.60108,25.641011],[119.61005,25.653868],[119.613219,25.668499],[119.598399,25.662024],[119.580848,25.649935],[119.572463,25.63391],[119.567881,25.646145],[119.560714,25.635014],[119.579873,25.627145]]],[[[120.006297,26.215202],[120.01629,26.208518],[120.020142,26.225658],[120.000885,26.23616],[119.988064,26.224369],[119.97066,26.217207],[119.969587,26.191136],[119.978362,26.193476],[119.980654,26.208374],[120.006297,26.215202]]],[[[119.967491,25.945374],[119.979337,25.951786],[119.992988,25.964658],[119.976461,25.964754],[119.968368,25.955662],[119.967491,25.945374]]],[[[119.705065,25.352848],[119.726711,25.356551],[119.735925,25.362514],[119.727296,25.368525],[119.724468,25.378671],[119.716571,25.371651],[119.697802,25.367035],[119.705065,25.352848]]],[[[119.69434,25.30388],[119.696339,25.310904],[119.712183,25.314464],[119.699215,25.327789],[119.705358,25.333658],[119.70292,25.342075],[119.693804,25.337121],[119.687174,25.325336],[119.690976,25.315426],[119.688051,25.30667],[119.69434,25.30388]]],[[[119.929465,26.134295],[119.936632,26.140124],[119.944968,26.139168],[119.955937,26.148866],[119.960032,26.147194],[119.970075,26.162767],[119.950769,26.163722],[119.945699,26.156127],[119.928832,26.160331],[119.933024,26.168833],[119.918253,26.169597],[119.918886,26.15436],[119.913036,26.140219],[119.929465,26.134295]]],[[[119.642908,26.129326],[119.65495,26.132623],[119.65339,26.144232],[119.657192,26.152115],[119.642908,26.157178],[119.627259,26.173132],[119.607125,26.169693],[119.605419,26.154838],[119.61863,26.139025],[119.642421,26.133817],[119.642908,26.129326]]],[[[119.88403,26.410979],[119.892853,26.41484],[119.885882,26.419892],[119.88403,26.410979]]],[[[119.474035,25.331349],[119.488124,25.329665],[119.485931,25.337217],[119.489197,25.351357],[119.471598,25.345201],[119.465797,25.333802],[119.474035,25.331349]]],[[[119.66236,25.646576],[119.662116,25.641155],[119.673572,25.632567],[119.697997,25.636357],[119.702725,25.640148],[119.712963,25.634198],[119.721933,25.639812],[119.716863,25.664758],[119.705943,25.656411],[119.682591,25.650031],[119.675571,25.658714],[119.66236,25.646576]]],[[[119.67328,25.756725],[119.683128,25.762668],[119.672402,25.765927],[119.67328,25.756725]]],[[[119.676156,26.124405],[119.684151,26.140936],[119.675571,26.142513],[119.662214,26.133865],[119.677278,26.113319],[119.676156,26.124405]]],[[[119.757326,25.298491],[119.764444,25.28959],[119.767564,25.298828],[119.757326,25.298491]]],[[[119.915815,26.418176],[119.90704,26.406976],[119.918886,26.409359],[119.915815,26.418176]]],[[[119.999228,26.239692],[120.011269,26.24752],[120.002592,26.246661],[119.999228,26.239692]]],[[[119.937119,25.963797],[119.953256,25.976236],[119.949063,25.979681],[119.930197,25.978628],[119.928783,25.97217],[119.937119,25.963797]]],[[[119.639593,25.672001],[119.641348,25.66754],[119.65963,25.680106],[119.643542,25.677181],[119.639593,25.672001]]],[[[119.390379,25.435107],[119.399008,25.436597],[119.396473,25.443517],[119.390379,25.435107]]],[[[119.636522,26.114705],[119.644371,26.109114],[119.647978,26.118145],[119.636571,26.119913],[119.636522,26.114705]]],[[[119.987138,26.262555],[119.994986,26.265943],[119.993865,26.28045],[119.98197,26.267804],[119.987138,26.262555]]],[[[120.221483,26.331974],[120.234353,26.34156],[120.223774,26.338651],[120.221483,26.331974]]],[[[119.649295,25.66495],[119.647686,25.654828],[119.66392,25.654636],[119.672256,25.661448],[119.661238,25.67296],[119.649295,25.66495]]],[[[119.579776,25.668403],[119.582311,25.66164],[119.59094,25.674111],[119.579776,25.668403]]]]}},{type:"Feature",properties:{adcode:350200,name:"厦门市",center:[118.11022,24.490474],centroid:[118.123854,24.676398],childrenNum:6,level:"city",parent:{adcode:35e4},subFeatureIndex:1,acroutes:[1e5,35e4]},geometry:{type:"MultiPolygon",coordinates:[[[[118.049001,24.418318],[118.052219,24.445064],[118.064553,24.464005],[118.084687,24.529916],[118.098386,24.54807],[118.105942,24.551749],[118.121347,24.569852],[118.1505,24.5835],[118.162005,24.572175],[118.169416,24.559252],[118.205004,24.533208],[118.242883,24.512485],[118.289928,24.522702],[118.346868,24.530545],[118.363541,24.530206],[118.375485,24.536403],[118.373486,24.547586],[118.377435,24.561575],[118.363492,24.568158],[118.373828,24.575611],[118.355546,24.575805],[118.353109,24.585097],[118.34175,24.592404],[118.341213,24.607259],[118.331512,24.598259],[118.329611,24.605324],[118.337021,24.617274],[118.34448,24.620951],[118.346966,24.630578],[118.34331,24.64214],[118.350817,24.649105],[118.352134,24.66434],[118.338727,24.673771],[118.338825,24.68204],[118.322493,24.692388],[118.322006,24.69819],[118.336533,24.718399],[118.332389,24.72942],[118.322249,24.733239],[118.316887,24.74885],[118.33512,24.752475],[118.337021,24.771032],[118.344772,24.771708],[118.338045,24.780358],[118.334876,24.774559],[118.322591,24.783837],[118.325564,24.798234],[118.312012,24.804901],[118.301238,24.826106],[118.28437,24.832482],[118.263748,24.825285],[118.252097,24.831371],[118.243224,24.824947],[118.231817,24.825961],[118.224163,24.838422],[118.22582,24.850834],[118.197106,24.86643],[118.197252,24.879998],[118.204077,24.882122],[118.194961,24.892646],[118.176923,24.893225],[118.161567,24.897618],[118.150695,24.891681],[118.137923,24.89477],[118.12554,24.888494],[118.113547,24.874735],[118.109696,24.875218],[118.085564,24.863727],[118.077764,24.854262],[118.072548,24.86194],[118.071865,24.874397],[118.06582,24.875411],[118.059141,24.86643],[118.042127,24.883087],[118.036765,24.899694],[118.015802,24.901818],[118.009074,24.892791],[117.996984,24.899839],[117.990305,24.892839],[118.004638,24.88777],[118.014486,24.879708],[118.011707,24.87517],[117.996984,24.877246],[117.991475,24.866913],[117.999032,24.859912],[117.971146,24.848081],[117.957788,24.868169],[117.947404,24.871114],[117.936436,24.86643],[117.930195,24.875508],[117.917715,24.879515],[117.913035,24.870293],[117.924735,24.864258],[117.940384,24.844652],[117.956375,24.845087],[117.962956,24.841175],[117.959153,24.823981],[117.961298,24.788137],[117.955156,24.76562],[117.947892,24.76243],[117.941018,24.742519],[117.948379,24.711727],[117.955497,24.708488],[117.965394,24.671014],[117.957788,24.66613],[117.954717,24.64925],[117.930293,24.632659],[117.920689,24.614226],[117.892365,24.611565],[117.893389,24.597775],[117.886027,24.590178],[117.91362,24.568593],[117.908453,24.555331],[117.913133,24.546666],[117.91206,24.53345],[117.931268,24.526672],[117.937508,24.513405],[117.958568,24.501251],[117.962371,24.480377],[117.956813,24.45921],[117.964077,24.444046],[117.975046,24.434889],[117.985089,24.433533],[117.992499,24.423067],[118.005515,24.418609],[118.028477,24.420547],[118.049001,24.418318]]],[[[118.204467,24.504786],[118.201591,24.525558],[118.191695,24.536839],[118.170196,24.545892],[118.155619,24.547779],[118.142554,24.561623],[118.111695,24.555282],[118.100287,24.54807],[118.089074,24.53253],[118.075717,24.494664],[118.069038,24.467735],[118.070354,24.455189],[118.088928,24.431304],[118.106186,24.424423],[118.134608,24.419675],[118.143236,24.420838],[118.156545,24.434405],[118.19891,24.468268],[118.206807,24.481491],[118.204467,24.504786]]],[[[118.378849,24.555525],[118.383724,24.551604],[118.394888,24.554411],[118.385382,24.560075],[118.378849,24.555525]]],[[[118.071329,24.43518],[118.077618,24.438717],[118.074937,24.446856],[118.061823,24.453154],[118.056509,24.445112],[118.062505,24.437263],[118.071329,24.43518]]]]}},{type:"Feature",properties:{adcode:350300,name:"莆田市",center:[119.007558,25.431011],centroid:[118.894712,25.445304],childrenNum:5,level:"city",parent:{adcode:35e4},subFeatureIndex:2,acroutes:[1e5,35e4]},geometry:{type:"MultiPolygon",coordinates:[[[[118.899849,25.241366],[118.918081,25.245843],[118.915546,25.256913],[118.930074,25.255854],[118.949282,25.265288],[118.954547,25.2714],[118.9837,25.269667],[118.994669,25.27679],[119.014364,25.274432],[119.023627,25.267887],[119.017484,25.255469],[119.006369,25.255132],[118.996863,25.266298],[118.988575,25.25417],[118.983505,25.237804],[118.975071,25.237611],[118.978435,25.222832],[118.989989,25.211662],[118.989989,25.201839],[119.012463,25.204391],[119.019629,25.210603],[119.055217,25.219462],[119.064675,25.206654],[119.074425,25.211373],[119.072231,25.191293],[119.062823,25.173907],[119.054291,25.168561],[119.037765,25.174871],[119.028453,25.164515],[119.029136,25.13961],[119.035717,25.125783],[119.052049,25.116676],[119.052341,25.112532],[119.075644,25.099809],[119.08281,25.108532],[119.134291,25.106074],[119.142384,25.096725],[119.128929,25.095231],[119.107283,25.075325],[119.118008,25.058115],[119.113377,25.052234],[119.096948,25.056139],[119.089928,25.052185],[119.106064,25.04452],[119.106698,25.032996],[119.119227,25.026582],[119.119422,25.012646],[119.127807,25.012597],[119.12576,25.021085],[119.147015,25.05585],[119.140531,25.056283],[119.141799,25.0827],[119.15813,25.092243],[119.164273,25.119133],[119.165784,25.145439],[119.160909,25.150931],[119.146333,25.146692],[119.138289,25.151895],[119.143993,25.157868],[119.141896,25.169525],[119.118788,25.175738],[119.108063,25.194086],[119.11913,25.212384],[119.131756,25.223217],[119.138533,25.224661],[119.146723,25.204199],[119.182457,25.178242],[119.198984,25.176412],[119.220385,25.187248],[119.231744,25.188982],[119.261043,25.175641],[119.269331,25.159987],[119.29356,25.178387],[119.30097,25.17805],[119.31345,25.189415],[119.31345,25.19452],[119.301653,25.204536],[119.293365,25.235108],[119.313158,25.237371],[119.332073,25.23092],[119.340946,25.240933],[119.356254,25.240211],[119.378289,25.248923],[119.385065,25.275683],[119.369709,25.271544],[119.353914,25.280591],[119.335681,25.285452],[119.313499,25.30643],[119.29902,25.328848],[119.292634,25.331156],[119.267381,25.329521],[119.253584,25.33587],[119.247491,25.33361],[119.248319,25.316196],[119.24047,25.316869],[119.235839,25.331156],[119.227064,25.344865],[119.228234,25.350732],[119.218776,25.367948],[119.195278,25.368333],[119.171049,25.37593],[119.162664,25.387037],[119.151744,25.382999],[119.14487,25.387999],[119.145845,25.405114],[119.151646,25.426504],[119.168709,25.438711],[119.184797,25.427225],[119.197033,25.424629],[119.232232,25.442267],[119.236034,25.448323],[119.219751,25.468648],[119.212682,25.472011],[119.209416,25.492621],[119.223798,25.48969],[119.230818,25.503861],[119.243005,25.513659],[119.24437,25.527923],[119.23501,25.542713],[119.227746,25.564607],[119.203907,25.54497],[119.20186,25.5515],[119.180702,25.555101],[119.168807,25.566335],[119.166662,25.574304],[119.157009,25.584192],[119.163639,25.587216],[119.170708,25.581888],[119.169099,25.593216],[119.161689,25.591392],[119.162372,25.600703],[119.155205,25.603055],[119.151451,25.6187],[119.133999,25.633383],[119.133316,25.646337],[119.144236,25.668451],[119.145553,25.676269],[119.154718,25.675598],[119.144285,25.684855],[119.141604,25.697132],[119.151646,25.700297],[119.144139,25.709887],[119.124346,25.713723],[119.146771,25.731558],[119.152231,25.744741],[119.132877,25.752794],[119.105772,25.754472],[119.090562,25.749631],[119.088368,25.754999],[119.076717,25.748576],[119.071061,25.752698],[119.048782,25.747138],[119.041226,25.741769],[119.025869,25.74268],[119.014803,25.735489],[118.975461,25.732086],[118.951524,25.712716],[118.955035,25.732709],[118.951037,25.751979],[118.952597,25.760032],[118.942359,25.748528],[118.93451,25.747282],[118.921055,25.732086],[118.920324,25.726333],[118.905162,25.722257],[118.882786,25.702407],[118.874449,25.698331],[118.877862,25.708832],[118.853682,25.703845],[118.83891,25.70888],[118.82643,25.719812],[118.811902,25.720819],[118.801226,25.711709],[118.806491,25.709551],[118.798983,25.699961],[118.772414,25.686389],[118.760421,25.689123],[118.753596,25.696221],[118.744724,25.679147],[118.73785,25.678188],[118.729952,25.668163],[118.723322,25.669794],[118.727612,25.687157],[118.726296,25.694734],[118.707186,25.682888],[118.691634,25.689794],[118.691098,25.695022],[118.674425,25.694926],[118.676521,25.7014],[118.668234,25.708544],[118.653657,25.711757],[118.634937,25.708496],[118.631866,25.697995],[118.625479,25.697419],[118.610123,25.708496],[118.611975,25.699098],[118.605053,25.697084],[118.604906,25.685142],[118.598569,25.683368],[118.587746,25.689986],[118.583846,25.677804],[118.576241,25.687013],[118.577801,25.677325],[118.571853,25.674015],[118.566491,25.681114],[118.54348,25.671521],[118.540068,25.661592],[118.544845,25.656555],[118.531293,25.642403],[118.550062,25.632279],[118.545187,25.617836],[118.533096,25.60795],[118.531293,25.601711],[118.511549,25.578576],[118.509989,25.56187],[118.490098,25.549963],[118.491463,25.546794],[118.474059,25.524465],[118.464748,25.516253],[118.465674,25.494975],[118.473572,25.491324],[118.466552,25.482917],[118.479373,25.480899],[118.477326,25.468888],[118.471329,25.46663],[118.460068,25.443613],[118.469818,25.424052],[118.482152,25.425494],[118.487661,25.40396],[118.497411,25.400835],[118.494388,25.385691],[118.503261,25.384633],[118.517984,25.372084],[118.520714,25.362899],[118.52983,25.35809],[118.522518,25.347269],[118.522371,25.333994],[118.512865,25.317591],[118.520519,25.312395],[118.528221,25.325817],[118.535729,25.320766],[118.530171,25.308739],[118.533389,25.291274],[118.563517,25.290263],[118.571853,25.286703],[118.578288,25.301282],[118.59618,25.302388],[118.61568,25.293102],[118.625577,25.293487],[118.632694,25.301378],[118.655705,25.301955],[118.66643,25.289782],[118.662579,25.280062],[118.650098,25.27448],[118.646442,25.268416],[118.659605,25.25778],[118.662042,25.265721],[118.672767,25.264807],[118.680421,25.271111],[118.695778,25.258502],[118.68476,25.244687],[118.688075,25.23453],[118.683444,25.230679],[118.682371,25.212384],[118.691537,25.212192],[118.682225,25.201213],[118.673645,25.200684],[118.677838,25.191679],[118.677789,25.177761],[118.692024,25.169332],[118.691585,25.15493],[118.70465,25.157579],[118.717521,25.169428],[118.725711,25.168754],[118.741019,25.1872],[118.74487,25.185851],[118.765101,25.195001],[118.778508,25.195387],[118.776753,25.203717],[118.781872,25.213829],[118.801323,25.220714],[118.800982,25.217103],[118.827697,25.218258],[118.848709,25.224902],[118.850123,25.216573],[118.869477,25.227646],[118.869623,25.237659],[118.875473,25.241366],[118.899849,25.241366]]],[[[119.471013,25.197072],[119.508454,25.181902],[119.509429,25.170921],[119.521226,25.166635],[119.523566,25.158061],[119.554474,25.164419],[119.547747,25.18118],[119.555742,25.183155],[119.554572,25.193075],[119.570903,25.193364],[119.578411,25.204776],[119.566613,25.209977],[119.555059,25.203525],[119.545065,25.210266],[119.540483,25.20208],[119.518155,25.208003],[119.514791,25.214599],[119.506162,25.214743],[119.49924,25.221773],[119.499435,25.240307],[119.488466,25.247046],[119.479008,25.243532],[119.479008,25.257732],[119.471452,25.25956],[119.467698,25.246324],[119.451708,25.242329],[119.453901,25.236552],[119.439179,25.236841],[119.446589,25.222495],[119.440982,25.211614],[119.444102,25.20208],[119.471013,25.197072]]],[[[119.58002,25.263892],[119.577533,25.26986],[119.570903,25.259272],[119.58002,25.263892]]],[[[119.371805,25.114893],[119.377899,25.120241],[119.369563,25.128866],[119.366784,25.118073],[119.371805,25.114893]]],[[[119.517131,25.264758],[119.530489,25.265769],[119.525419,25.278522],[119.518642,25.279244],[119.512305,25.266924],[119.517131,25.264758]]],[[[119.048344,25.101496],[119.049611,25.094749],[119.05824,25.102604],[119.048344,25.101496]]],[[[119.59211,25.187344],[119.602201,25.187633],[119.595181,25.194761],[119.59211,25.187344]]],[[[119.342165,25.311962],[119.34938,25.318698],[119.345236,25.323845],[119.338021,25.316437],[119.342165,25.311962]]],[[[119.57885,25.248538],[119.587527,25.241318],[119.584895,25.250945],[119.57885,25.248538]]],[[[119.018118,25.17333],[119.027039,25.171451],[119.036205,25.184262],[119.032597,25.189415],[119.015486,25.182336],[119.018118,25.17333]]],[[[119.368149,25.326539],[119.37707,25.327453],[119.362835,25.334283],[119.368149,25.326539]]],[[[119.461116,24.982307],[119.459508,24.992196],[119.449855,24.994752],[119.461116,24.982307]]]]}},{type:"Feature",properties:{adcode:350400,name:"三明市",center:[117.635001,26.265444],centroid:[117.400007,26.298093],childrenNum:11,level:"city",parent:{adcode:35e4},subFeatureIndex:3,acroutes:[1e5,35e4]},geometry:{type:"MultiPolygon",coordinates:[[[[117.71813,25.511978],[117.733779,25.514139],[117.731682,25.509385],[117.742944,25.505206],[117.752694,25.507703],[117.762444,25.497665],[117.769562,25.499442],[117.786478,25.481956],[117.798032,25.478017],[117.789111,25.493341],[117.789159,25.510057],[117.804516,25.508952],[117.820165,25.517069],[117.829135,25.50924],[117.840494,25.491852],[117.85312,25.488393],[117.864187,25.495743],[117.882517,25.498865],[117.892901,25.497424],[117.93195,25.511018],[117.941993,25.524129],[117.962566,25.528835],[117.980945,25.516349],[117.980214,25.531044],[117.994303,25.537431],[118.002152,25.549723],[118.030086,25.568639],[118.035058,25.5792],[118.033693,25.588128],[118.039495,25.59216],[118.043249,25.604783],[118.042907,25.619851],[118.038032,25.628249],[118.025552,25.628584],[118.019458,25.621387],[118.003565,25.616876],[117.993328,25.620283],[117.990646,25.613565],[117.985625,25.625897],[117.976655,25.629448],[117.967734,25.644418],[117.956472,25.640627],[117.953352,25.655739],[117.942042,25.65147],[117.937411,25.658426],[117.949745,25.668259],[117.946722,25.674639],[117.959738,25.672145],[117.968904,25.68097],[118.000104,25.685814],[118.006003,25.691857],[118.015168,25.718949],[118.009464,25.724223],[118.002932,25.715018],[117.98972,25.731271],[117.976362,25.760463],[117.983236,25.759553],[117.987673,25.771055],[117.998739,25.766694],[118.006198,25.769617],[118.011073,25.795638],[118.007368,25.797076],[118.011512,25.813701],[118.02643,25.831378],[118.030086,25.823378],[118.033303,25.835066],[118.018971,25.845076],[118.015412,25.857002],[118.031402,25.864041],[118.038812,25.856235],[118.049489,25.858343],[118.063773,25.848237],[118.085272,25.865143],[118.076935,25.876922],[118.078057,25.8842],[118.096631,25.886498],[118.104431,25.891765],[118.129781,25.899999],[118.148014,25.900239],[118.156399,25.907898],[118.177508,25.900143],[118.18019,25.884152],[118.19696,25.88511],[118.209001,25.898324],[118.215534,25.897893],[118.232938,25.883769],[118.246832,25.890855],[118.248148,25.896169],[118.267746,25.898707],[118.272718,25.903877],[118.266332,25.916514],[118.275497,25.929773],[118.285345,25.930825],[118.295924,25.922593],[118.308745,25.929533],[118.318008,25.913547],[118.336533,25.916754],[118.344675,25.935468],[118.350281,25.936999],[118.36008,25.929533],[118.36125,25.91795],[118.366564,25.914217],[118.369635,25.896361],[118.396107,25.899904],[118.409806,25.889419],[118.418483,25.892387],[118.417411,25.899185],[118.432524,25.917615],[118.43618,25.918477],[118.463432,25.895786],[118.459824,25.865813],[118.476448,25.87132],[118.476887,25.882046],[118.471085,25.898563],[118.480251,25.90359],[118.485223,25.900095],[118.507259,25.896122],[118.512572,25.885493],[118.518325,25.887647],[118.507746,25.901531],[118.519592,25.924603],[118.514425,25.933553],[118.520568,25.957002],[118.515546,25.961691],[118.519983,25.969347],[118.513889,25.976667],[118.519056,25.986474],[118.515936,26.025168],[118.52242,26.042096],[118.516375,26.059308],[118.552792,26.057922],[118.577557,26.062177],[118.591939,26.052232],[118.600958,26.055245],[118.593596,26.061699],[118.601738,26.076518],[118.592329,26.076518],[118.588867,26.094107],[118.5837,26.098504],[118.581799,26.114227],[118.586771,26.132384],[118.572975,26.128848],[118.564882,26.138117],[118.564541,26.168499],[118.568002,26.176379],[118.579702,26.175902],[118.57434,26.185501],[118.578483,26.204029],[118.587356,26.209377],[118.60008,26.210093],[118.609733,26.204937],[118.612414,26.210284],[118.598764,26.22709],[118.611634,26.235587],[118.631378,26.23468],[118.651025,26.224751],[118.663261,26.227901],[118.668672,26.243416],[118.655851,26.26265],[118.641859,26.263987],[118.633913,26.272004],[118.630452,26.288705],[118.615242,26.288228],[118.607929,26.304211],[118.599349,26.304545],[118.590769,26.316471],[118.592329,26.323817],[118.561811,26.325487],[118.563809,26.336219],[118.555912,26.341846],[118.54231,26.342371],[118.538167,26.337077],[118.526369,26.336075],[118.518325,26.351909],[118.501165,26.364927],[118.494925,26.364212],[118.46816,26.345662],[118.454266,26.338794],[118.450756,26.349334],[118.436814,26.355772],[118.427892,26.369552],[118.427015,26.379946],[118.436911,26.392675],[118.448806,26.382568],[118.454364,26.386573],[118.45373,26.403162],[118.443493,26.395011],[118.419897,26.398014],[118.408977,26.394153],[118.393425,26.394153],[118.371536,26.409502],[118.36242,26.400493],[118.349891,26.405117],[118.344967,26.416127],[118.341993,26.409311],[118.327856,26.407405],[118.323029,26.419559],[118.332633,26.425992],[118.333218,26.438049],[118.323322,26.430043],[118.310842,26.43133],[118.306795,26.437906],[118.297338,26.431664],[118.299921,26.419845],[118.289733,26.414602],[118.279544,26.422513],[118.26994,26.422561],[118.259653,26.409502],[118.262871,26.399635],[118.254144,26.394201],[118.240787,26.396012],[118.243614,26.403496],[118.224943,26.40974],[118.215095,26.404592],[118.216509,26.394963],[118.202664,26.38562],[118.18994,26.381329],[118.181408,26.388861],[118.167856,26.38724],[118.167417,26.380042],[118.153962,26.379517],[118.13607,26.365738],[118.131585,26.377658],[118.114035,26.379517],[118.113303,26.394248],[118.091707,26.395774],[118.08727,26.406404],[118.089659,26.415746],[118.08298,26.424181],[118.067039,26.427279],[118.059336,26.439479],[118.065528,26.453583],[118.057776,26.46092],[118.057679,26.4694],[118.045491,26.473259],[118.03735,26.464541],[118.029891,26.477975],[118.038471,26.488502],[118.033791,26.497647],[118.04476,26.506172],[118.037935,26.512458],[118.021164,26.507982],[118.003419,26.511315],[118.006393,26.529363],[117.993133,26.540123],[117.994741,26.551549],[118.011122,26.56959],[117.994985,26.577634],[117.9788,26.578491],[117.982164,26.567829],[117.97685,26.562783],[117.970415,26.567924],[117.950427,26.563545],[117.940287,26.574064],[117.922834,26.559499],[117.901579,26.563926],[117.899482,26.571208],[117.88437,26.564402],[117.878325,26.557166],[117.872475,26.581203],[117.862481,26.582584],[117.865796,26.597336],[117.856533,26.601334],[117.85351,26.620509],[117.868672,26.622554],[117.870573,26.631498],[117.85507,26.640299],[117.858483,26.653903],[117.848099,26.660038],[117.858678,26.674876],[117.853998,26.679631],[117.839421,26.67616],[117.826551,26.667505],[117.818605,26.671785],[117.813974,26.667457],[117.803443,26.671119],[117.791889,26.666459],[117.778824,26.666744],[117.769025,26.655472],[117.759568,26.661132],[117.744455,26.658611],[117.727343,26.663415],[117.701652,26.652999],[117.695753,26.641012],[117.683126,26.643914],[117.678788,26.636731],[117.667575,26.634733],[117.662797,26.646292],[117.668891,26.657089],[117.645003,26.656138],[117.640713,26.674733],[117.604101,26.686574],[117.605856,26.698128],[117.593522,26.70293],[117.60103,26.708825],[117.612292,26.727696],[117.624235,26.72589],[117.629988,26.735872],[117.645881,26.741813],[117.653193,26.753646],[117.656119,26.767616],[117.671475,26.783866],[117.666161,26.791182],[117.670646,26.804767],[117.65256,26.819729],[117.642176,26.836208],[117.634619,26.841004],[117.630573,26.858382],[117.619799,26.872102],[117.612877,26.872767],[117.601908,26.885536],[117.589379,26.892988],[117.579092,26.92317],[117.562322,26.923265],[117.551353,26.93043],[117.544284,26.922648],[117.524589,26.925543],[117.514546,26.919706],[117.505332,26.926729],[117.50387,26.943667],[117.50816,26.952301],[117.531706,26.960128],[117.534875,26.983226],[117.546234,26.9929],[117.533998,26.995224],[117.52961,27.003854],[117.523565,27.00191],[117.512547,27.008975],[117.485344,27.008975],[117.485198,27.022582],[117.478227,27.013669],[117.46521,27.010113],[117.458142,27.003285],[117.451658,27.005087],[117.450731,27.019026],[117.444296,27.022866],[117.447806,27.029835],[117.445223,27.042586],[117.43596,27.046521],[117.426015,27.044056],[117.438397,27.058369],[117.43908,27.064957],[117.405734,27.052493],[117.395497,27.067469],[117.382724,27.069411],[117.383455,27.099499],[117.365808,27.101536],[117.34777,27.096325],[117.329439,27.107174],[117.325052,27.113664],[117.301749,27.119916],[117.286636,27.129152],[117.276252,27.126311],[117.272547,27.113948],[117.288294,27.112053],[117.289659,27.100968],[117.280591,27.090687],[117.285418,27.075856],[117.282005,27.057848],[117.276447,27.057801],[117.260896,27.046947],[117.255241,27.034907],[117.244077,27.033485],[117.242371,27.041449],[117.225259,27.050075],[117.200104,27.058986],[117.190597,27.071023],[117.180165,27.093198],[117.160957,27.110253],[117.149452,27.107458],[117.139604,27.098931],[117.122297,27.09334],[117.102505,27.107269],[117.096557,27.107269],[117.086661,27.094146],[117.072962,27.097651],[117.063991,27.109779],[117.053217,27.101442],[117.032401,27.089739],[117.000177,27.080121],[116.967562,27.061782],[116.946795,27.037989],[116.936362,27.019311],[116.927684,27.031352],[116.910085,27.034576],[116.894339,27.032679],[116.880152,27.026564],[116.860944,27.011488],[116.85134,27.009354],[116.817702,27.018505],[116.782261,27.009591],[116.765003,27.000393],[116.7573,26.984364],[116.734095,26.993754],[116.704893,26.990909],[116.679299,26.978484],[116.659262,26.962215],[116.632986,26.933988],[116.602126,26.888716],[116.568976,26.858952],[116.557373,26.85183],[116.548647,26.840007],[116.544162,26.820441],[116.543674,26.803912],[116.547721,26.791134],[116.557909,26.773983],[116.558641,26.766809],[116.550207,26.751317],[116.537824,26.737107],[116.515106,26.720994],[116.511986,26.708254],[116.519884,26.684767],[116.545039,26.659658],[116.550548,26.651192],[116.566051,26.650145],[116.568781,26.642202],[116.561907,26.620651],[116.558982,26.596242],[116.553229,26.575778],[116.540944,26.568115],[116.540895,26.556357],[116.56259,26.544694],[116.579604,26.531601],[116.578775,26.521649],[116.586916,26.519982],[116.598763,26.510458],[116.589012,26.49798],[116.6012,26.490455],[116.597446,26.485358],[116.610755,26.476975],[116.638105,26.479499],[116.63713,26.466113],[116.630109,26.459634],[116.627964,26.445483],[116.610658,26.433284],[116.604174,26.415793],[116.604418,26.405784],[116.61056,26.39401],[116.608952,26.383808],[116.601395,26.372938],[116.584235,26.366119],[116.571072,26.370983],[116.553717,26.365404],[116.559226,26.38562],[116.553619,26.400255],[116.545186,26.397251],[116.534558,26.400779],[116.533437,26.408835],[116.519396,26.41036],[116.512181,26.402257],[116.511109,26.39115],[116.498287,26.387097],[116.494533,26.369028],[116.499799,26.361399],[116.459287,26.345137],[116.453827,26.331592],[116.438714,26.321385],[116.437105,26.308218],[116.427257,26.300251],[116.413071,26.298057],[116.422041,26.29152],[116.41819,26.279257],[116.401761,26.274867],[116.391669,26.256589],[116.395618,26.244561],[116.385429,26.238165],[116.393132,26.217446],[116.390451,26.210093],[116.400054,26.203791],[116.399372,26.189943],[116.392498,26.170314],[116.41507,26.159806],[116.435935,26.160044],[116.453632,26.166111],[116.463382,26.175424],[116.471474,26.175185],[116.482102,26.16014],[116.481907,26.137974],[116.489463,26.128753],[116.489268,26.113701],[116.477178,26.10271],[116.458409,26.091909],[116.44354,26.078908],[116.421749,26.065667],[116.418238,26.054575],[116.401322,26.04616],[116.400103,26.033059],[116.419506,26.021295],[116.439201,26.01589],[116.466355,26.01326],[116.474399,26.009673],[116.480493,25.998959],[116.481468,25.974849],[116.495508,25.966285],[116.538555,25.996806],[116.553132,25.990062],[116.581602,25.980972],[116.593546,25.991545],[116.611243,25.984321],[116.625429,25.99298],[116.629476,26.013786],[116.652925,25.999389],[116.644735,25.980016],[116.644978,25.969012],[116.650682,25.961117],[116.649707,25.942742],[116.666965,25.939249],[116.67418,25.931065],[116.683443,25.929868],[116.689537,25.919434],[116.707574,25.916562],[116.719811,25.90651],[116.737215,25.899712],[116.743601,25.889754],[116.748086,25.85408],[116.756033,25.84795],[116.778946,25.859636],[116.794107,25.856331],[116.781042,25.832048],[116.778214,25.818539],[116.783089,25.811785],[116.820237,25.783898],[116.837788,25.787397],[116.865186,25.796884],[116.875131,25.818204],[116.885222,25.824192],[116.892681,25.837125],[116.904674,25.849914],[116.924174,25.855948],[116.949086,25.846753],[116.952791,25.842107],[116.971267,25.846561],[116.986283,25.85432],[117.008318,25.857768],[117.024016,25.853122],[117.036106,25.811114],[117.056338,25.786151],[117.05702,25.766742],[117.06443,25.7573],[117.058239,25.747282],[117.065113,25.736448],[117.048342,25.725661],[117.055021,25.715641],[117.060969,25.721011],[117.068525,25.708448],[117.067648,25.692816],[117.057995,25.685958],[117.071743,25.684279],[117.080323,25.668307],[117.071889,25.668307],[117.081737,25.652573],[117.104747,25.657322],[117.132681,25.650175],[117.140043,25.642163],[117.141993,25.630648],[117.158958,25.612797],[117.168416,25.59624],[117.165783,25.570655],[117.183382,25.575216],[117.197179,25.559326],[117.21234,25.570271],[117.198495,25.570559],[117.209561,25.588848],[117.215948,25.591248],[117.220823,25.603487],[117.234424,25.618268],[117.237934,25.634054],[117.253924,25.642834],[117.283516,25.665093],[117.285661,25.677469],[117.274497,25.687348],[117.254802,25.683224],[117.248611,25.687061],[117.265917,25.715353],[117.266697,25.724942],[117.284589,25.737407],[117.306868,25.740571],[117.333437,25.753274],[117.346015,25.756437],[117.348501,25.780256],[117.354302,25.785863],[117.375801,25.782413],[117.383017,25.752938],[117.376679,25.747761],[117.382773,25.727052],[117.391255,25.721155],[117.391694,25.735394],[117.396228,25.733716],[117.401786,25.690418],[117.38989,25.667732],[117.392182,25.658714],[117.406417,25.658858],[117.435765,25.665669],[117.440738,25.669458],[117.456972,25.71262],[117.470281,25.720148],[117.472767,25.727339],[117.459263,25.731702],[117.461749,25.735777],[117.48788,25.739325],[117.489927,25.732997],[117.502602,25.735537],[117.493973,25.722593],[117.497581,25.708496],[117.506941,25.702886],[117.518641,25.717463],[117.536045,25.725134],[117.541749,25.722497],[117.549062,25.70466],[117.559641,25.697947],[117.580847,25.69411],[117.594351,25.673967],[117.58777,25.66658],[117.601176,25.649455],[117.611414,25.650558],[117.635253,25.666389],[117.646076,25.670706],[117.662115,25.664278],[117.676301,25.63842],[117.695655,25.623738],[117.718471,25.590528],[117.748258,25.596288],[117.745089,25.570079],[117.725783,25.547611],[117.705162,25.559806],[117.697703,25.555869],[117.688928,25.535078],[117.688392,25.518702],[117.691902,25.510681],[117.702188,25.517309],[117.71813,25.511978]]]]}},{type:"Feature",properties:{adcode:350500,name:"泉州市",center:[118.589421,24.908853],centroid:[118.267651,25.202187],childrenNum:12,level:"city",parent:{adcode:35e4},subFeatureIndex:4,acroutes:[1e5,35e4]},geometry:{type:"MultiPolygon",coordinates:[[[[118.899849,25.241366],[118.875473,25.241366],[118.869623,25.237659],[118.869477,25.227646],[118.850123,25.216573],[118.848709,25.224902],[118.827697,25.218258],[118.800982,25.217103],[118.801323,25.220714],[118.781872,25.213829],[118.776753,25.203717],[118.778508,25.195387],[118.765101,25.195001],[118.74487,25.185851],[118.741019,25.1872],[118.725711,25.168754],[118.717521,25.169428],[118.70465,25.157579],[118.691585,25.15493],[118.692024,25.169332],[118.677789,25.177761],[118.677838,25.191679],[118.673645,25.200684],[118.682225,25.201213],[118.691537,25.212192],[118.682371,25.212384],[118.683444,25.230679],[118.688075,25.23453],[118.68476,25.244687],[118.695778,25.258502],[118.680421,25.271111],[118.672767,25.264807],[118.662042,25.265721],[118.659605,25.25778],[118.646442,25.268416],[118.650098,25.27448],[118.662579,25.280062],[118.66643,25.289782],[118.655705,25.301955],[118.632694,25.301378],[118.625577,25.293487],[118.61568,25.293102],[118.59618,25.302388],[118.578288,25.301282],[118.571853,25.286703],[118.563517,25.290263],[118.533389,25.291274],[118.530171,25.308739],[118.535729,25.320766],[118.528221,25.325817],[118.520519,25.312395],[118.512865,25.317591],[118.522371,25.333994],[118.522518,25.347269],[118.52983,25.35809],[118.520714,25.362899],[118.517984,25.372084],[118.503261,25.384633],[118.494388,25.385691],[118.497411,25.400835],[118.487661,25.40396],[118.482152,25.425494],[118.469818,25.424052],[118.460068,25.443613],[118.471329,25.46663],[118.477326,25.468888],[118.479373,25.480899],[118.466552,25.482917],[118.473572,25.491324],[118.465674,25.494975],[118.464748,25.516253],[118.474059,25.524465],[118.491463,25.546794],[118.490098,25.549963],[118.509989,25.56187],[118.511549,25.578576],[118.531293,25.601711],[118.533096,25.60795],[118.545187,25.617836],[118.550062,25.632279],[118.531293,25.642403],[118.544845,25.656555],[118.540068,25.661592],[118.523736,25.659097],[118.510232,25.674974],[118.492438,25.688739],[118.479958,25.707106],[118.46855,25.71075],[118.454364,25.720723],[118.448514,25.718134],[118.430915,25.730552],[118.425016,25.761374],[118.417996,25.769186],[118.414632,25.789744],[118.397959,25.801005],[118.391914,25.809964],[118.382115,25.814132],[118.392743,25.82539],[118.397131,25.845843],[118.405028,25.843161],[118.421213,25.854607],[118.41239,25.875582],[118.406247,25.878455],[118.409806,25.889419],[118.396107,25.899904],[118.369635,25.896361],[118.366564,25.914217],[118.36125,25.91795],[118.36008,25.929533],[118.350281,25.936999],[118.344675,25.935468],[118.336533,25.916754],[118.318008,25.913547],[118.308745,25.929533],[118.295924,25.922593],[118.285345,25.930825],[118.275497,25.929773],[118.266332,25.916514],[118.272718,25.903877],[118.267746,25.898707],[118.248148,25.896169],[118.246832,25.890855],[118.232938,25.883769],[118.215534,25.897893],[118.209001,25.898324],[118.19696,25.88511],[118.18019,25.884152],[118.177508,25.900143],[118.156399,25.907898],[118.148014,25.900239],[118.129781,25.899999],[118.104431,25.891765],[118.096631,25.886498],[118.078057,25.8842],[118.076935,25.876922],[118.085272,25.865143],[118.063773,25.848237],[118.049489,25.858343],[118.038812,25.856235],[118.031402,25.864041],[118.015412,25.857002],[118.018971,25.845076],[118.033303,25.835066],[118.030086,25.823378],[118.02643,25.831378],[118.011512,25.813701],[118.007368,25.797076],[118.011073,25.795638],[118.006198,25.769617],[117.998739,25.766694],[117.987673,25.771055],[117.983236,25.759553],[117.976362,25.760463],[117.98972,25.731271],[118.002932,25.715018],[118.009464,25.724223],[118.015168,25.718949],[118.006003,25.691857],[118.000104,25.685814],[117.968904,25.68097],[117.959738,25.672145],[117.946722,25.674639],[117.949745,25.668259],[117.937411,25.658426],[117.942042,25.65147],[117.953352,25.655739],[117.956472,25.640627],[117.967734,25.644418],[117.976655,25.629448],[117.985625,25.625897],[117.990646,25.613565],[117.993328,25.620283],[118.003565,25.616876],[118.019458,25.621387],[118.025552,25.628584],[118.038032,25.628249],[118.042907,25.619851],[118.043249,25.604783],[118.039495,25.59216],[118.033693,25.588128],[118.035058,25.5792],[118.030086,25.568639],[118.002152,25.549723],[117.994303,25.537431],[117.980214,25.531044],[117.980945,25.516349],[117.962566,25.528835],[117.941993,25.524129],[117.93195,25.511018],[117.892901,25.497424],[117.882517,25.498865],[117.864187,25.495743],[117.85312,25.488393],[117.840494,25.491852],[117.829135,25.50924],[117.820165,25.517069],[117.804516,25.508952],[117.789159,25.510057],[117.789111,25.493341],[117.798032,25.478017],[117.786478,25.481956],[117.769562,25.499442],[117.762444,25.497665],[117.752694,25.507703],[117.742944,25.505206],[117.731682,25.509385],[117.733779,25.514139],[117.71813,25.511978],[117.715156,25.491468],[117.722371,25.48138],[117.713157,25.477921],[117.704041,25.457597],[117.697557,25.455675],[117.691414,25.440874],[117.699019,25.422226],[117.684101,25.396508],[117.691658,25.390595],[117.691512,25.368285],[117.678349,25.355349],[117.68025,25.347269],[117.661627,25.336351],[117.655192,25.320622],[117.619409,25.299598],[117.599811,25.293728],[117.604638,25.284152],[117.603468,25.260042],[117.621067,25.247479],[117.622285,25.240788],[117.6139,25.222254],[117.595765,25.221821],[117.578654,25.231257],[117.570707,25.220232],[117.555399,25.21171],[117.555692,25.194231],[117.562176,25.187489],[117.573193,25.188934],[117.582066,25.174871],[117.59674,25.171355],[117.604004,25.164323],[117.621603,25.160951],[117.620579,25.147993],[117.626624,25.138358],[117.653047,25.13407],[117.671524,25.124385],[117.671378,25.098797],[117.677471,25.08805],[117.699019,25.078699],[117.707551,25.067901],[117.721883,25.07788],[117.72671,25.071179],[117.731585,25.051077],[117.726222,25.043652],[117.73841,25.037287],[117.737142,25.026534],[117.718032,25.015009],[117.715497,25.00353],[117.701505,25.004495],[117.69507,24.992196],[117.685076,24.98853],[117.670841,24.999913],[117.654461,24.996971],[117.654802,24.981342],[117.637057,24.970922],[117.618239,24.964457],[117.604345,24.947908],[117.607026,24.930294],[117.630183,24.92571],[117.631451,24.912871],[117.614875,24.898004],[117.616728,24.877101],[117.624772,24.86672],[117.636618,24.866865],[117.644857,24.858946],[117.657581,24.85349],[117.668404,24.853972],[117.683419,24.848999],[117.711597,24.86363],[117.717788,24.874252],[117.729976,24.88077],[117.750403,24.877197],[117.76259,24.86841],[117.770244,24.868555],[117.770585,24.855952],[117.775753,24.85093],[117.789988,24.85716],[117.797545,24.865416],[117.802663,24.852669],[117.81256,24.849964],[117.822115,24.85798],[117.824991,24.866527],[117.821189,24.87459],[117.833864,24.881543],[117.849757,24.873866],[117.863992,24.878308],[117.871695,24.87179],[117.882566,24.895687],[117.893632,24.887191],[117.898605,24.874639],[117.913035,24.870293],[117.917715,24.879515],[117.930195,24.875508],[117.936436,24.86643],[117.947404,24.871114],[117.957788,24.868169],[117.971146,24.848081],[117.999032,24.859912],[117.991475,24.866913],[117.996984,24.877246],[118.011707,24.87517],[118.014486,24.879708],[118.004638,24.88777],[117.990305,24.892839],[117.996984,24.899839],[118.009074,24.892791],[118.015802,24.901818],[118.036765,24.899694],[118.042127,24.883087],[118.059141,24.86643],[118.06582,24.875411],[118.071865,24.874397],[118.072548,24.86194],[118.077764,24.854262],[118.085564,24.863727],[118.109696,24.875218],[118.113547,24.874735],[118.12554,24.888494],[118.137923,24.89477],[118.150695,24.891681],[118.161567,24.897618],[118.176923,24.893225],[118.194961,24.892646],[118.204077,24.882122],[118.197252,24.879998],[118.197106,24.86643],[118.22582,24.850834],[118.224163,24.838422],[118.231817,24.825961],[118.243224,24.824947],[118.252097,24.831371],[118.263748,24.825285],[118.28437,24.832482],[118.301238,24.826106],[118.312012,24.804901],[118.325564,24.798234],[118.322591,24.783837],[118.334876,24.774559],[118.338045,24.780358],[118.344772,24.771708],[118.337021,24.771032],[118.33512,24.752475],[118.316887,24.74885],[118.322249,24.733239],[118.332389,24.72942],[118.336533,24.718399],[118.322006,24.69819],[118.322493,24.692388],[118.338825,24.68204],[118.338727,24.673771],[118.352134,24.66434],[118.350817,24.649105],[118.34331,24.64214],[118.346966,24.630578],[118.34448,24.620951],[118.337021,24.617274],[118.329611,24.605324],[118.331512,24.598259],[118.341213,24.607259],[118.34175,24.592404],[118.353109,24.585097],[118.355546,24.575805],[118.373828,24.575611],[118.385674,24.582048],[118.391817,24.574062],[118.402981,24.578079],[118.401567,24.590855],[118.422091,24.598549],[118.444663,24.614952],[118.478642,24.615],[118.518569,24.605904],[118.557326,24.572901],[118.556497,24.562591],[118.547185,24.559203],[118.54621,24.549764],[118.563712,24.539308],[118.566442,24.52062],[118.558106,24.512582],[118.579946,24.507207],[118.590817,24.513792],[118.614267,24.521733],[118.620604,24.534805],[118.625382,24.535144],[118.639666,24.548748],[118.65746,24.55446],[118.655997,24.565883],[118.664285,24.573772],[118.673255,24.575079],[118.680324,24.582241],[118.689099,24.608952],[118.686856,24.633626],[118.672475,24.631449],[118.667015,24.621387],[118.661262,24.622257],[118.654973,24.633674],[118.652438,24.6537],[118.656095,24.669805],[118.670184,24.679767],[118.677496,24.667194],[118.68593,24.662599],[118.703432,24.665453],[118.716789,24.676576],[118.724053,24.677688],[118.731463,24.691372],[118.742237,24.698964],[118.7398,24.706264],[118.750525,24.716465],[118.742384,24.717142],[118.747259,24.723619],[118.752329,24.718785],[118.765979,24.728695],[118.765784,24.734592],[118.776509,24.740972],[118.784651,24.760062],[118.785431,24.77683],[118.744821,24.779488],[118.736095,24.783981],[118.731415,24.800939],[118.732243,24.815625],[118.72108,24.815866],[118.713036,24.809248],[118.710598,24.796736],[118.690903,24.799925],[118.673694,24.794466],[118.650391,24.808765],[118.645711,24.829053],[118.647905,24.843638],[118.672865,24.849578],[118.687734,24.85658],[118.696997,24.867879],[118.702408,24.865513],[118.698557,24.85262],[118.705187,24.844314],[118.731415,24.840692],[118.734925,24.826106],[118.745894,24.824512],[118.751207,24.845377],[118.765979,24.847984],[118.787234,24.855663],[118.80576,24.869859],[118.819654,24.86899],[118.834474,24.854262],[118.845784,24.863775],[118.835693,24.86812],[118.838325,24.875701],[118.847685,24.875701],[118.864748,24.887384],[118.876156,24.888205],[118.895851,24.884005],[118.906966,24.876135],[118.931439,24.870438],[118.948892,24.876232],[118.958008,24.871211],[118.991841,24.880336],[118.988185,24.896846],[118.972292,24.902252],[118.955522,24.896991],[118.942116,24.908189],[118.93295,24.906548],[118.928124,24.918711],[118.918276,24.923876],[118.918374,24.932466],[118.93334,24.949355],[118.945626,24.954036],[118.983456,24.938305],[118.982774,24.934396],[119.013926,24.94149],[119.032743,24.957654],[119.032451,24.961369],[119.017143,24.963444],[119.009392,24.958619],[119.006125,24.97015],[118.997886,24.968558],[118.989696,24.974058],[118.988575,24.995524],[119.005882,24.999334],[119.011927,25.0261],[119.024066,25.043507],[119.024456,25.051655],[119.016363,25.058501],[118.998959,25.055608],[118.991646,25.044037],[118.983603,25.044037],[118.97629,25.026775],[118.960348,25.02176],[118.945284,25.028511],[118.946259,25.043121],[118.920519,25.054934],[118.889172,25.084194],[118.892097,25.092725],[118.910866,25.093014],[118.916521,25.09899],[118.937777,25.098026],[118.955181,25.107905],[118.974779,25.115182],[118.973804,25.121687],[118.953913,25.127132],[118.951476,25.14939],[118.966588,25.153918],[118.985504,25.166105],[118.984431,25.195483],[118.973999,25.198806],[118.971074,25.20834],[118.950403,25.206173],[118.941921,25.211036],[118.945674,25.219606],[118.919739,25.233086],[118.917789,25.238285],[118.899849,25.241366]]],[[[118.412536,24.514325],[118.395034,24.508902],[118.399909,24.490693],[118.383675,24.480716],[118.390403,24.474904],[118.389525,24.465507],[118.374608,24.458774],[118.34526,24.468559],[118.318739,24.486625],[118.295729,24.47534],[118.294023,24.466766],[118.304797,24.454608],[118.311963,24.424617],[118.290123,24.423067],[118.290659,24.415023],[118.281932,24.410419],[118.294315,24.401453],[118.299483,24.39239],[118.318788,24.383617],[118.333072,24.383714],[118.339848,24.390161],[118.350671,24.412309],[118.372268,24.42641],[118.405272,24.428058],[118.416095,24.42171],[118.432377,24.418899],[118.437009,24.411],[118.43072,24.403586],[118.457728,24.41226],[118.459532,24.420062],[118.469818,24.425296],[118.465625,24.434211],[118.477033,24.437506],[118.478983,24.447971],[118.467527,24.459307],[118.467917,24.470448],[118.473474,24.477277],[118.462944,24.478537],[118.4549,24.504447],[118.43852,24.50774],[118.430525,24.521346],[118.414583,24.526672],[118.412536,24.514325]]],[[[118.230403,24.401308],[118.238203,24.40819],[118.246734,24.407317],[118.252779,24.4173],[118.269988,24.421419],[118.27345,24.441139],[118.255656,24.451943],[118.233864,24.445791],[118.229087,24.427961],[118.220701,24.42578],[118.217923,24.405621],[118.230403,24.401308]]],[[[119.004419,25.181951],[119.000958,25.185851],[118.994181,25.172559],[119.004419,25.181951]]],[[[119.028307,25.029669],[119.03679,25.031549],[119.027039,25.04047],[119.028307,25.029669]]]]}},{type:"Feature",properties:{adcode:350600,name:"漳州市",center:[117.661801,24.510897],centroid:[117.458578,24.330766],childrenNum:11,level:"city",parent:{adcode:35e4},subFeatureIndex:5,acroutes:[1e5,35e4]},geometry:{type:"MultiPolygon",coordinates:[[[[116.903894,24.369851],[116.896922,24.360106],[116.896142,24.350701],[116.908233,24.34178],[116.90911,24.330191],[116.919543,24.320977],[116.9134,24.312441],[116.914278,24.287705],[116.918178,24.283387],[116.929488,24.286201],[116.937727,24.282854],[116.935436,24.24797],[116.939141,24.239576],[116.934022,24.21929],[116.956155,24.21696],[116.971316,24.198079],[116.976337,24.199778],[116.991158,24.189875],[116.998617,24.179],[116.990378,24.168367],[116.978824,24.162055],[116.972925,24.153509],[116.964784,24.153364],[116.947087,24.13491],[116.934899,24.126945],[116.926563,24.098577],[116.929732,24.065441],[116.936996,24.054556],[116.95245,24.054702],[116.948793,24.037983],[116.940408,24.035116],[116.95518,24.020242],[116.954448,24.00595],[116.960055,24.002158],[116.969951,24.007457],[116.98131,23.996713],[116.975411,23.990635],[116.973169,23.974249],[116.982626,23.95932],[116.980189,23.941033],[116.973315,23.927072],[116.954741,23.920457],[116.959275,23.914473],[116.958836,23.900656],[116.973022,23.894817],[116.979263,23.884452],[116.97546,23.872287],[116.960055,23.86815],[116.962054,23.861385],[116.981554,23.855593],[116.984625,23.861288],[116.995107,23.862018],[117.012121,23.855301],[117.022456,23.838752],[117.026746,23.819912],[117.018458,23.81222],[117.020067,23.800729],[117.034058,23.789091],[117.042541,23.763766],[117.047806,23.758652],[117.051072,23.736731],[117.049317,23.724162],[117.053998,23.708522],[117.053217,23.698386],[117.066624,23.688786],[117.074083,23.69093],[117.089439,23.668559],[117.115424,23.665294],[117.124881,23.646039],[117.132974,23.65145],[117.147453,23.65379],[117.159348,23.64014],[117.173681,23.634631],[117.185917,23.63624],[117.192596,23.62956],[117.192937,23.561625],[117.271475,23.566162],[117.291268,23.571186],[117.29468,23.558991],[117.302627,23.550405],[117.317788,23.54899],[117.361761,23.556308],[117.382383,23.553527],[117.427526,23.572162],[117.441566,23.570698],[117.453998,23.57504],[117.463748,23.585185],[117.463358,23.598548],[117.455753,23.606399],[117.45468,23.628244],[117.466527,23.639896],[117.493096,23.642431],[117.501335,23.650524],[117.498605,23.667292],[117.490025,23.671728],[117.488855,23.679477],[117.502651,23.704623],[117.518739,23.704185],[117.544723,23.71583],[117.568611,23.712517],[117.589915,23.701846],[117.601518,23.701943],[117.612974,23.713394],[117.627648,23.749397],[117.639446,23.76776],[117.660311,23.789091],[117.661432,23.796931],[117.651633,23.815336],[117.658507,23.851797],[117.671963,23.878078],[117.691024,23.889027],[117.704041,23.890097],[117.76259,23.886983],[117.787892,23.899974],[117.792816,23.906299],[117.801981,23.93685],[117.807587,23.947404],[117.826064,23.966371],[117.847709,23.984752],[117.864918,24.004783],[117.890074,24.004783],[117.910646,24.011784],[117.927563,24.039879],[117.928099,24.056257],[117.925028,24.075159],[117.931609,24.094448],[117.947258,24.111353],[117.974754,24.134473],[117.990841,24.142729],[118.000055,24.152441],[118.00142,24.176864],[118.019409,24.197254],[118.03891,24.199292],[118.056704,24.209389],[118.063578,24.219241],[118.074693,24.225454],[118.115741,24.229385],[118.123834,24.235936],[118.125979,24.252531],[118.143431,24.251804],[118.15323,24.255831],[118.157423,24.263642],[118.157423,24.277906],[118.144406,24.293816],[118.145674,24.30633],[118.13958,24.314721],[118.1271,24.318455],[118.126856,24.333148],[118.121347,24.347258],[118.112133,24.356907],[118.096436,24.358458],[118.081372,24.356276],[118.075717,24.360882],[118.083565,24.370966],[118.088587,24.406154],[118.086295,24.410322],[118.049001,24.418318],[118.028477,24.420547],[118.005515,24.418609],[117.992499,24.423067],[117.985089,24.433533],[117.975046,24.434889],[117.964077,24.444046],[117.956813,24.45921],[117.962371,24.480377],[117.958568,24.501251],[117.937508,24.513405],[117.931268,24.526672],[117.91206,24.53345],[117.913133,24.546666],[117.908453,24.555331],[117.91362,24.568593],[117.886027,24.590178],[117.893389,24.597775],[117.892365,24.611565],[117.920689,24.614226],[117.930293,24.632659],[117.954717,24.64925],[117.957788,24.66613],[117.965394,24.671014],[117.955497,24.708488],[117.948379,24.711727],[117.941018,24.742519],[117.947892,24.76243],[117.955156,24.76562],[117.961298,24.788137],[117.959153,24.823981],[117.962956,24.841175],[117.956375,24.845087],[117.940384,24.844652],[117.924735,24.864258],[117.913035,24.870293],[117.898605,24.874639],[117.893632,24.887191],[117.882566,24.895687],[117.871695,24.87179],[117.863992,24.878308],[117.849757,24.873866],[117.833864,24.881543],[117.821189,24.87459],[117.824991,24.866527],[117.822115,24.85798],[117.81256,24.849964],[117.802663,24.852669],[117.797545,24.865416],[117.789988,24.85716],[117.775753,24.85093],[117.770585,24.855952],[117.770244,24.868555],[117.76259,24.86841],[117.750403,24.877197],[117.729976,24.88077],[117.717788,24.874252],[117.711597,24.86363],[117.683419,24.848999],[117.668404,24.853972],[117.657581,24.85349],[117.644857,24.858946],[117.636618,24.866865],[117.624772,24.86672],[117.616728,24.877101],[117.614875,24.898004],[117.631451,24.912871],[117.630183,24.92571],[117.607026,24.930294],[117.604345,24.947908],[117.618239,24.964457],[117.637057,24.970922],[117.654802,24.981342],[117.654461,24.996971],[117.670841,24.999913],[117.685076,24.98853],[117.69507,24.992196],[117.701505,25.004495],[117.715497,25.00353],[117.718032,25.015009],[117.737142,25.026534],[117.73841,25.037287],[117.726222,25.043652],[117.731585,25.051077],[117.72671,25.071179],[117.721883,25.07788],[117.707551,25.067901],[117.699019,25.078699],[117.677471,25.08805],[117.671378,25.098797],[117.671524,25.124385],[117.653047,25.13407],[117.626624,25.138358],[117.620579,25.147993],[117.621603,25.160951],[117.604004,25.164323],[117.59674,25.171355],[117.582066,25.174871],[117.573193,25.188934],[117.562176,25.187489],[117.555692,25.194231],[117.555399,25.21171],[117.545649,25.210988],[117.548184,25.192208],[117.535022,25.201165],[117.529415,25.185514],[117.515765,25.17569],[117.497435,25.174293],[117.495436,25.16519],[117.484564,25.164901],[117.483638,25.134455],[117.478763,25.127806],[117.481981,25.120386],[117.503041,25.10911],[117.510841,25.090315],[117.50387,25.041482],[117.492023,25.023689],[117.490561,25.016841],[117.495485,24.971404],[117.493145,24.962093],[117.483736,24.958185],[117.445515,24.95997],[117.425137,24.978207],[117.393742,24.980715],[117.383845,24.984767],[117.370293,24.973527],[117.361712,24.971983],[117.341286,24.978737],[117.318032,24.968317],[117.306965,24.96822],[117.30092,24.975746],[117.288781,24.971742],[117.293803,24.984237],[117.286588,24.990507],[117.279714,24.98771],[117.267916,24.974203],[117.236813,24.962527],[117.23457,24.954518],[117.245929,24.954036],[117.237057,24.930825],[117.237447,24.923393],[117.227063,24.909155],[117.219604,24.908431],[117.210293,24.921028],[117.184406,24.925854],[117.188598,24.903942],[117.196594,24.900804],[117.198007,24.885163],[117.172218,24.865948],[117.169391,24.826058],[117.154424,24.813306],[117.144235,24.790359],[117.137508,24.784803],[117.102358,24.789538],[117.080713,24.781034],[117.070768,24.785866],[117.072084,24.807654],[117.069208,24.821953],[117.056728,24.82374],[117.052827,24.812099],[117.052145,24.793403],[117.027965,24.780213],[117.02348,24.773641],[117.02387,24.739861],[117.018556,24.709213],[117.026892,24.693935],[117.039372,24.690792],[117.033327,24.671836],[117.046929,24.653313],[117.043467,24.633626],[117.037471,24.626128],[117.019872,24.62903],[117.014948,24.615774],[117.025186,24.602033],[117.023138,24.571352],[117.017142,24.555815],[117.006222,24.544294],[116.996813,24.540615],[116.980774,24.544584],[116.947721,24.544972],[116.932511,24.534128],[116.935582,24.521878],[116.929439,24.513599],[116.922078,24.526623],[116.91145,24.515681],[116.917349,24.490257],[116.927099,24.468268],[116.935874,24.456836],[116.944016,24.431885],[116.934899,24.390015],[116.928415,24.382599],[116.90326,24.380127],[116.903894,24.369851]]],[[[117.711548,23.772728],[117.717593,23.769611],[117.72437,23.775942],[117.708184,23.779205],[117.711548,23.772728]]],[[[117.683711,23.784611],[117.692828,23.774919],[117.690293,23.783929],[117.683711,23.784611]]],[[[118.151134,24.318358],[118.15635,24.331548],[118.146259,24.339113],[118.151134,24.318358]]],[[[117.669476,23.790503],[117.67674,23.788312],[117.67128,23.803358],[117.669476,23.790503]]]]}},{type:"Feature",properties:{adcode:350700,name:"南平市",center:[118.178459,26.635627],centroid:[118.147051,27.338631],childrenNum:10,level:"city",parent:{adcode:35e4},subFeatureIndex:6,acroutes:[1e5,35e4]},geometry:{type:"MultiPolygon",coordinates:[[[[119.262116,27.420623],[119.248953,27.418639],[119.247247,27.429504],[119.243444,27.419867],[119.222628,27.41708],[119.209465,27.422135],[119.194742,27.418733],[119.180263,27.428228],[119.168514,27.424874],[119.153987,27.428559],[119.147551,27.424827],[119.138776,27.434416],[119.12849,27.431771],[119.121421,27.438336],[119.125906,27.452221],[119.118886,27.46143],[119.131317,27.463083],[119.130781,27.47281],[119.115083,27.482819],[119.090074,27.464877],[119.072524,27.472243],[119.065163,27.466766],[119.055315,27.477626],[119.03718,27.4806],[119.020799,27.497926],[118.99891,27.496321],[118.99072,27.503355],[118.982774,27.496038],[118.990428,27.488579],[118.988283,27.477248],[118.966003,27.473377],[118.955425,27.449813],[118.949184,27.456377],[118.93334,27.463602],[118.910769,27.460863],[118.901457,27.464688],[118.897704,27.478948],[118.887807,27.483575],[118.890342,27.494103],[118.87991,27.499579],[118.873572,27.517751],[118.857874,27.516713],[118.859629,27.527568],[118.869184,27.539932],[118.889026,27.547482],[118.896046,27.563146],[118.910184,27.570317],[118.904041,27.575978],[118.902481,27.591591],[118.906771,27.595458],[118.908283,27.610597],[118.913889,27.619132],[118.902627,27.623659],[118.9037,27.638888],[118.894096,27.656896],[118.87991,27.667973],[118.874644,27.682818],[118.880543,27.689322],[118.875035,27.700961],[118.878496,27.705296],[118.900044,27.705013],[118.897947,27.718911],[118.89044,27.718723],[118.880641,27.73116],[118.870744,27.736671],[118.853974,27.774253],[118.840031,27.779291],[118.839398,27.788566],[118.851488,27.796005],[118.8471,27.812528],[118.838813,27.820671],[118.8354,27.838225],[118.826332,27.846648],[118.835741,27.866504],[118.826527,27.874831],[118.8315,27.886309],[118.820434,27.895387],[118.818435,27.916692],[118.803712,27.918338],[118.804541,27.927084],[118.7671,27.9418],[118.754181,27.94274],[118.753499,27.948006],[118.729903,27.97259],[118.732487,27.990872],[118.72654,28.000411],[118.726588,28.014178],[118.733511,28.02644],[118.732682,28.035976],[118.720348,28.045417],[118.718788,28.063639],[118.735363,28.075003],[118.743164,28.088526],[118.763541,28.094723],[118.76515,28.102939],[118.773584,28.108009],[118.785333,28.106741],[118.802298,28.117303],[118.800446,28.133448],[118.805906,28.153063],[118.798106,28.168922],[118.782944,28.172628],[118.775144,28.167983],[118.760958,28.16742],[118.769294,28.185763],[118.782116,28.193221],[118.794791,28.205931],[118.804151,28.207901],[118.81239,28.22558],[118.802055,28.240443],[118.781189,28.243116],[118.754523,28.253476],[118.740872,28.267492],[118.739361,28.277381],[118.72732,28.28113],[118.730147,28.296829],[118.719373,28.312057],[118.699288,28.309949],[118.689879,28.291019],[118.674815,28.271476],[118.666674,28.269741],[118.651366,28.277147],[118.640251,28.273491],[118.632987,28.261633],[118.623042,28.256617],[118.595741,28.256992],[118.597496,28.271991],[118.58448,28.284317],[118.568831,28.285255],[118.558593,28.282302],[118.547478,28.286567],[118.546259,28.274991],[118.53022,28.270445],[118.514132,28.269648],[118.50565,28.279912],[118.495607,28.273116],[118.492926,28.262711],[118.502676,28.246819],[118.490683,28.238427],[118.481031,28.245975],[118.459922,28.244381],[118.445296,28.250851],[118.448855,28.261539],[118.438617,28.261258],[118.430379,28.279537],[118.43306,28.293127],[118.424285,28.291534],[118.388453,28.266742],[118.373486,28.265851],[118.364467,28.253804],[118.350427,28.250288],[118.343456,28.234583],[118.339166,28.235895],[118.314888,28.22286],[118.319422,28.214466],[118.334144,28.206869],[118.339751,28.193878],[118.356082,28.192752],[118.374315,28.187967],[118.374656,28.173895],[118.379288,28.166576],[118.361055,28.155878],[118.361786,28.140393],[118.368416,28.129177],[118.356765,28.123921],[118.359544,28.111905],[118.356229,28.091672],[118.341993,28.084817],[118.339117,28.088244],[118.30816,28.089418],[118.291975,28.08261],[118.274912,28.082986],[118.253559,28.068758],[118.242542,28.07552],[118.22504,28.059319],[118.210415,28.057299],[118.199739,28.05002],[118.182725,28.051711],[118.153815,28.061855],[118.135095,28.053683],[118.120762,28.0418],[118.129099,28.017185],[118.123395,28.012534],[118.105893,28.016997],[118.093803,28.001868],[118.091999,27.98152],[118.097021,27.967608],[118.089903,27.964976],[118.074205,27.967514],[118.070744,27.977431],[118.060945,27.982695],[118.042712,27.980157],[118.034327,27.988193],[118.019166,27.981191],[118.006588,27.980392],[117.998057,27.991154],[117.985674,27.971556],[117.965199,27.962626],[117.958032,27.968971],[117.942773,27.974094],[117.932487,27.966762],[117.92025,27.963425],[117.912158,27.950074],[117.891,27.948476],[117.866576,27.937757],[117.855997,27.94589],[117.849123,27.936487],[117.836399,27.927789],[117.815144,27.920642],[117.7993,27.90136],[117.785503,27.892706],[117.788379,27.882922],[117.782529,27.866034],[117.788136,27.855824],[117.775753,27.836484],[117.759665,27.82693],[117.754351,27.812057],[117.741969,27.801183],[117.730951,27.803443],[117.716423,27.816246],[117.705649,27.833001],[117.682541,27.82373],[117.67323,27.828483],[117.667039,27.842272],[117.649976,27.851683],[117.610049,27.863446],[117.60259,27.869562],[117.603565,27.885933],[117.595521,27.899526],[117.586161,27.905593],[117.588696,27.918338],[117.58465,27.934936],[117.586795,27.942317],[117.57919,27.945749],[117.569635,27.935312],[117.560469,27.947254],[117.563687,27.956656],[117.558081,27.964882],[117.53234,27.973953],[117.530731,27.981708],[117.521761,27.982413],[117.511426,27.974517],[117.504845,27.954305],[117.482858,27.939402],[117.474717,27.930469],[117.462968,27.94133],[117.454046,27.93992],[117.429964,27.913118],[117.404613,27.893224],[117.396033,27.893224],[117.384382,27.886403],[117.378434,27.888661],[117.366588,27.882358],[117.353864,27.864904],[117.353425,27.858506],[117.340701,27.856294],[117.333047,27.862082],[117.336167,27.878265],[117.327684,27.894117],[117.318081,27.89407],[117.303358,27.87215],[117.289025,27.868527],[117.280786,27.871209],[117.276642,27.84806],[117.293608,27.843213],[117.303065,27.830225],[117.297751,27.798453],[117.306088,27.781833],[117.3056,27.775477],[117.29468,27.76394],[117.277812,27.767613],[117.279762,27.749859],[117.268111,27.740439],[117.264503,27.728898],[117.254412,27.729228],[117.243979,27.718111],[117.227745,27.719241],[117.203711,27.711373],[117.202639,27.683572],[117.186258,27.682677],[117.172657,27.678153],[117.142968,27.68885],[117.13156,27.687201],[117.121517,27.694222],[117.106648,27.686117],[117.096167,27.667501],[117.102115,27.662835],[117.111865,27.645394],[117.106015,27.642376],[117.109573,27.632004],[117.094071,27.627808],[117.078714,27.642235],[117.078714,27.650909],[117.061018,27.669057],[117.040786,27.670235],[117.020359,27.653078],[117.021627,27.643036],[117.013973,27.630213],[117.009196,27.633702],[117.003394,27.625969],[117.017044,27.611729],[117.013534,27.60673],[117.024503,27.59244],[117.016801,27.563476],[117.020018,27.557107],[117.042005,27.547293],[117.050877,27.549511],[117.054875,27.542622],[117.073839,27.559796],[117.084906,27.564089],[117.091048,27.547387],[117.098848,27.544131],[117.103138,27.533137],[117.103138,27.510766],[117.110353,27.494952],[117.10465,27.484614],[117.111523,27.474557],[117.110158,27.458833],[117.125417,27.451985],[117.126149,27.434463],[117.132779,27.422324],[117.127514,27.406687],[117.10738,27.393552],[117.105625,27.3824],[117.099141,27.379186],[117.104065,27.36671],[117.100262,27.339153],[117.109476,27.326861],[117.129561,27.322416],[117.140481,27.322795],[117.142578,27.316175],[117.137166,27.302982],[117.157154,27.301753],[117.160177,27.295747],[117.171877,27.290261],[117.166173,27.267084],[117.154424,27.260934],[117.149793,27.241394],[117.140579,27.231505],[117.120494,27.215936],[117.11635,27.207748],[117.106697,27.20363],[117.097142,27.205571],[117.084418,27.182802],[117.069305,27.175227],[117.056776,27.156951],[117.048781,27.152263],[117.043662,27.139809],[117.053217,27.101442],[117.063991,27.109779],[117.072962,27.097651],[117.086661,27.094146],[117.096557,27.107269],[117.102505,27.107269],[117.122297,27.09334],[117.139604,27.098931],[117.149452,27.107458],[117.160957,27.110253],[117.180165,27.093198],[117.190597,27.071023],[117.200104,27.058986],[117.225259,27.050075],[117.242371,27.041449],[117.244077,27.033485],[117.255241,27.034907],[117.260896,27.046947],[117.276447,27.057801],[117.282005,27.057848],[117.285418,27.075856],[117.280591,27.090687],[117.289659,27.100968],[117.288294,27.112053],[117.272547,27.113948],[117.276252,27.126311],[117.286636,27.129152],[117.301749,27.119916],[117.325052,27.113664],[117.329439,27.107174],[117.34777,27.096325],[117.365808,27.101536],[117.383455,27.099499],[117.382724,27.069411],[117.395497,27.067469],[117.405734,27.052493],[117.43908,27.064957],[117.438397,27.058369],[117.426015,27.044056],[117.43596,27.046521],[117.445223,27.042586],[117.447806,27.029835],[117.444296,27.022866],[117.450731,27.019026],[117.451658,27.005087],[117.458142,27.003285],[117.46521,27.010113],[117.478227,27.013669],[117.485198,27.022582],[117.485344,27.008975],[117.512547,27.008975],[117.523565,27.00191],[117.52961,27.003854],[117.533998,26.995224],[117.546234,26.9929],[117.534875,26.983226],[117.531706,26.960128],[117.50816,26.952301],[117.50387,26.943667],[117.505332,26.926729],[117.514546,26.919706],[117.524589,26.925543],[117.544284,26.922648],[117.551353,26.93043],[117.562322,26.923265],[117.579092,26.92317],[117.589379,26.892988],[117.601908,26.885536],[117.612877,26.872767],[117.619799,26.872102],[117.630573,26.858382],[117.634619,26.841004],[117.642176,26.836208],[117.65256,26.819729],[117.670646,26.804767],[117.666161,26.791182],[117.671475,26.783866],[117.656119,26.767616],[117.653193,26.753646],[117.645881,26.741813],[117.629988,26.735872],[117.624235,26.72589],[117.612292,26.727696],[117.60103,26.708825],[117.593522,26.70293],[117.605856,26.698128],[117.604101,26.686574],[117.640713,26.674733],[117.645003,26.656138],[117.668891,26.657089],[117.662797,26.646292],[117.667575,26.634733],[117.678788,26.636731],[117.683126,26.643914],[117.695753,26.641012],[117.701652,26.652999],[117.727343,26.663415],[117.744455,26.658611],[117.759568,26.661132],[117.769025,26.655472],[117.778824,26.666744],[117.791889,26.666459],[117.803443,26.671119],[117.813974,26.667457],[117.818605,26.671785],[117.826551,26.667505],[117.839421,26.67616],[117.853998,26.679631],[117.858678,26.674876],[117.848099,26.660038],[117.858483,26.653903],[117.85507,26.640299],[117.870573,26.631498],[117.868672,26.622554],[117.85351,26.620509],[117.856533,26.601334],[117.865796,26.597336],[117.862481,26.582584],[117.872475,26.581203],[117.878325,26.557166],[117.88437,26.564402],[117.899482,26.571208],[117.901579,26.563926],[117.922834,26.559499],[117.940287,26.574064],[117.950427,26.563545],[117.970415,26.567924],[117.97685,26.562783],[117.982164,26.567829],[117.9788,26.578491],[117.994985,26.577634],[118.011122,26.56959],[117.994741,26.551549],[117.993133,26.540123],[118.006393,26.529363],[118.003419,26.511315],[118.021164,26.507982],[118.037935,26.512458],[118.04476,26.506172],[118.033791,26.497647],[118.038471,26.488502],[118.029891,26.477975],[118.03735,26.464541],[118.045491,26.473259],[118.057679,26.4694],[118.057776,26.46092],[118.065528,26.453583],[118.059336,26.439479],[118.067039,26.427279],[118.08298,26.424181],[118.089659,26.415746],[118.08727,26.406404],[118.091707,26.395774],[118.113303,26.394248],[118.114035,26.379517],[118.131585,26.377658],[118.13607,26.365738],[118.153962,26.379517],[118.167417,26.380042],[118.167856,26.38724],[118.181408,26.388861],[118.18994,26.381329],[118.202664,26.38562],[118.216509,26.394963],[118.215095,26.404592],[118.224943,26.40974],[118.243614,26.403496],[118.240787,26.396012],[118.254144,26.394201],[118.262871,26.399635],[118.259653,26.409502],[118.26994,26.422561],[118.279544,26.422513],[118.289733,26.414602],[118.299921,26.419845],[118.297338,26.431664],[118.306795,26.437906],[118.310842,26.43133],[118.323322,26.430043],[118.333218,26.438049],[118.332633,26.425992],[118.323029,26.419559],[118.327856,26.407405],[118.341993,26.409311],[118.344967,26.416127],[118.349891,26.405117],[118.36242,26.400493],[118.371536,26.409502],[118.393425,26.394153],[118.408977,26.394153],[118.419897,26.398014],[118.443493,26.395011],[118.45373,26.403162],[118.454364,26.386573],[118.448806,26.382568],[118.436911,26.392675],[118.427015,26.379946],[118.427892,26.369552],[118.436814,26.355772],[118.450756,26.349334],[118.454266,26.338794],[118.46816,26.345662],[118.494925,26.364212],[118.501165,26.364927],[118.518325,26.351909],[118.526369,26.336075],[118.538167,26.337077],[118.54231,26.342371],[118.555912,26.341846],[118.563809,26.336219],[118.561811,26.325487],[118.592329,26.323817],[118.590769,26.316471],[118.599349,26.304545],[118.607929,26.304211],[118.615242,26.288228],[118.630452,26.288705],[118.633913,26.272004],[118.641859,26.263987],[118.655851,26.26265],[118.668672,26.243416],[118.67306,26.251768],[118.666479,26.275344],[118.665991,26.29381],[118.652,26.319572],[118.663359,26.329207],[118.662237,26.34218],[118.640641,26.355152],[118.629038,26.359348],[118.623919,26.366167],[118.609489,26.361971],[118.59813,26.351003],[118.592524,26.350764],[118.594327,26.360779],[118.584139,26.371698],[118.563127,26.367168],[118.562103,26.387002],[118.550891,26.391436],[118.549623,26.412981],[118.566247,26.428709],[118.566442,26.434237],[118.556692,26.444482],[118.567076,26.464874],[118.587502,26.474688],[118.601738,26.477546],[118.608611,26.48955],[118.605394,26.505886],[118.615193,26.523554],[118.615095,26.540314],[118.618947,26.554025],[118.604565,26.550787],[118.590866,26.553168],[118.580823,26.565068],[118.588721,26.605236],[118.584772,26.613324],[118.586625,26.627788],[118.594084,26.638158],[118.595644,26.653284],[118.600616,26.6598],[118.598764,26.669122],[118.589355,26.674733],[118.578435,26.675019],[118.572292,26.683435],[118.58175,26.692898],[118.581067,26.701218],[118.587892,26.709395],[118.602566,26.707921],[118.605248,26.727269],[118.61334,26.736395],[118.613584,26.7507],[118.624114,26.771228],[118.625284,26.787286],[118.637472,26.794744],[118.641274,26.818684],[118.625772,26.839817],[118.631817,26.852257],[118.649221,26.854631],[118.650927,26.860756],[118.663261,26.86313],[118.672572,26.859522],[118.690415,26.864601],[118.696022,26.872102],[118.692317,26.882213],[118.698313,26.888146],[118.703237,26.906182],[118.69334,26.928057],[118.671792,26.94732],[118.681348,26.963543],[118.696558,26.960412],[118.699775,26.950308],[118.712109,26.944378],[118.734876,26.956428],[118.74721,26.949597],[118.782652,26.947083],[118.792207,26.95306],[118.792889,26.965393],[118.803858,26.976349],[118.824675,26.981377],[118.837691,26.988585],[118.845053,27.000677],[118.841835,27.013527],[118.847685,27.023625],[118.860263,27.022155],[118.874157,27.035287],[118.880202,27.054151],[118.898289,27.072586],[118.902432,27.090403],[118.916034,27.096893],[118.924078,27.112385],[118.93178,27.113616],[118.946406,27.104995],[118.958106,27.117216],[118.956595,27.127353],[118.946357,27.127163],[118.947771,27.141324],[118.9349,27.137867],[118.931878,27.144876],[118.940214,27.162349],[118.933974,27.159887],[118.929733,27.168978],[118.937387,27.175511],[118.943773,27.171535],[118.964443,27.168552],[118.987893,27.158751],[118.9915,27.12669],[118.99969,27.121953],[118.991159,27.107695],[119.001445,27.097225],[119.013877,27.09642],[119.021969,27.102579],[119.042883,27.102484],[119.046394,27.106653],[119.059605,27.098078],[119.077058,27.10111],[119.093389,27.097272],[119.093779,27.082916],[119.107917,27.073866],[119.120446,27.058512],[119.11991,27.053109],[119.136436,27.056332],[119.134437,27.070975],[119.127661,27.087418],[119.143895,27.087891],[119.160373,27.092061],[119.161348,27.107553],[119.18548,27.116411],[119.195717,27.109211],[119.205077,27.115227],[119.205029,27.126311],[119.186016,27.133226],[119.191768,27.161828],[119.188307,27.169783],[119.175339,27.169073],[119.178118,27.176884],[119.178557,27.199559],[119.20147,27.209262],[119.207027,27.232025],[119.23501,27.224123],[119.234718,27.211676],[119.247198,27.201453],[119.255876,27.204624],[119.26353,27.197619],[119.271768,27.212575],[119.245492,27.238697],[119.233402,27.235338],[119.216631,27.252891],[119.204931,27.260887],[119.211805,27.263347],[119.208441,27.274983],[119.210684,27.297355],[119.217314,27.311588],[119.22877,27.312534],[119.235985,27.320998],[119.245882,27.3201],[119.242762,27.333101],[119.247393,27.345345],[119.254949,27.348513],[119.253877,27.365009],[119.267917,27.369404],[119.275327,27.379234],[119.273718,27.387173],[119.263578,27.397899],[119.259971,27.410655],[119.262116,27.420623]]]]}},{type:"Feature",properties:{adcode:350800,name:"龙岩市",center:[117.02978,25.091603],centroid:[116.74379,25.291574],childrenNum:7,level:"city",parent:{adcode:35e4},subFeatureIndex:7,acroutes:[1e5,35e4]},geometry:{type:"MultiPolygon",coordinates:[[[[116.400103,26.033059],[116.383284,26.029424],[116.371048,26.005464],[116.361054,26.000729],[116.359933,25.991497],[116.368025,25.974897],[116.369975,25.963318],[116.34833,25.961691],[116.326294,25.956572],[116.320249,25.940828],[116.304162,25.929485],[116.302407,25.922593],[116.280664,25.914408],[116.268232,25.914217],[116.258287,25.902967],[116.232205,25.90043],[116.225137,25.90852],[116.207196,25.901388],[116.191937,25.901005],[116.177653,25.89435],[116.169804,25.877018],[116.153473,25.876779],[116.130706,25.858726],[116.129244,25.838706],[116.131779,25.824288],[116.159274,25.809581],[116.160103,25.798753],[116.176288,25.78524],[116.181602,25.776423],[116.17702,25.768467],[116.17546,25.749487],[116.165953,25.74848],[116.166538,25.766023],[116.145965,25.759601],[116.129634,25.759169],[116.116764,25.738941],[116.118226,25.732805],[116.108476,25.723312],[116.110085,25.707585],[116.106965,25.701112],[116.082589,25.696221],[116.067623,25.704085],[116.067672,25.691329],[116.060164,25.694926],[116.056215,25.682409],[116.065234,25.676126],[116.05758,25.660153],[116.068939,25.646337],[116.067135,25.634342],[116.059628,25.63914],[116.05095,25.627577],[116.041639,25.626329],[116.046904,25.616972],[116.040956,25.606942],[116.052023,25.598592],[116.054411,25.578192],[116.062845,25.56331],[116.054168,25.546938],[116.040274,25.547995],[116.035301,25.540552],[116.036569,25.514764],[116.015752,25.508184],[116.013119,25.498193],[116.005466,25.490459],[116.007269,25.473741],[116.019213,25.474221],[116.012193,25.455242],[116.02209,25.437942],[116.021797,25.420688],[116.015167,25.414439],[116.005368,25.414247],[116.002297,25.40819],[116.008001,25.392855],[115.996008,25.379585],[115.992742,25.371074],[116.000005,25.357705],[115.991669,25.345105],[116.000152,25.343277],[116.005758,25.330868],[116.000834,25.324855],[116.008001,25.32144],[116.000054,25.301522],[115.986355,25.290793],[115.977629,25.298443],[115.974704,25.289878],[115.965636,25.286895],[115.951547,25.29315],[115.94716,25.288146],[115.949402,25.266202],[115.939506,25.253977],[115.930926,25.236023],[115.91825,25.230438],[115.901724,25.231353],[115.890804,25.217825],[115.878762,25.21431],[115.870523,25.221243],[115.855606,25.209447],[115.857507,25.178146],[115.853412,25.17646],[115.860432,25.16596],[115.853363,25.163889],[115.855118,25.153195],[115.867403,25.149053],[115.875837,25.152328],[115.884954,25.141489],[115.888366,25.129011],[115.873936,25.121831],[115.874033,25.1147],[115.883832,25.103183],[115.880078,25.092243],[115.908305,25.084531],[115.919372,25.072433],[115.913863,25.06067],[115.92098,25.061201],[115.928293,25.050498],[115.918348,25.038685],[115.912303,25.042929],[115.897873,25.037046],[115.88822,25.022918],[115.873643,25.019928],[115.876958,25.003193],[115.88198,24.995041],[115.899238,24.991761],[115.917129,24.974251],[115.925075,24.96079],[115.917227,24.958089],[115.904405,24.964361],[115.894996,24.962045],[115.892266,24.970054],[115.882955,24.976663],[115.872278,24.97208],[115.870231,24.959488],[115.884271,24.950899],[115.892559,24.937099],[115.897288,24.937147],[115.908451,24.923296],[115.955301,24.918518],[115.96276,24.913209],[115.976703,24.91596],[115.984941,24.900225],[116.003077,24.896508],[116.015264,24.905728],[116.023357,24.902156],[116.038324,24.886901],[116.04315,24.871162],[116.052266,24.861505],[116.062796,24.859912],[116.06889,24.849964],[116.083223,24.85349],[116.091316,24.838374],[116.094874,24.84924],[116.116032,24.851413],[116.13953,24.844701],[116.153229,24.846632],[116.181066,24.875121],[116.191742,24.877101],[116.200907,24.85798],[116.210901,24.854455],[116.220505,24.842624],[116.221139,24.830791],[116.229329,24.82601],[116.238933,24.830405],[116.250048,24.827893],[116.233717,24.806205],[116.233083,24.80065],[116.251267,24.793403],[116.264917,24.799877],[116.29134,24.800263],[116.299969,24.80292],[116.318153,24.818185],[116.332291,24.826638],[116.33273,24.821856],[116.344089,24.827555],[116.349159,24.836732],[116.349744,24.856725],[116.361785,24.869859],[116.374558,24.868458],[116.379238,24.877535],[116.394789,24.877873],[116.393912,24.856918],[116.407318,24.853296],[116.4178,24.840692],[116.377239,24.821083],[116.375972,24.803355],[116.384405,24.790939],[116.399664,24.793983],[116.407172,24.777797],[116.419116,24.767311],[116.415362,24.756438],[116.417166,24.743051],[116.437398,24.733577],[116.446075,24.714483],[116.455923,24.713709],[116.469719,24.719317],[116.486977,24.718592],[116.501505,24.698335],[116.504966,24.667049],[116.517495,24.652297],[116.50677,24.62129],[116.525929,24.604791],[116.553278,24.613065],[116.570438,24.621725],[116.572973,24.630143],[116.58638,24.636722],[116.596471,24.654039],[116.624113,24.641414],[116.632791,24.641269],[116.635131,24.647702],[116.667062,24.658633],[116.690122,24.659504],[116.700457,24.655683],[116.707331,24.665114],[116.741895,24.666565],[116.753839,24.654522],[116.777581,24.679574],[116.801225,24.678268],[116.815314,24.654571],[116.81195,24.644897],[116.798543,24.637157],[116.798885,24.623999],[116.787526,24.61471],[116.781627,24.603049],[116.7612,24.582967],[116.767782,24.564189],[116.756081,24.55504],[116.758373,24.546618],[116.772315,24.534757],[116.781091,24.533789],[116.779384,24.527688],[116.788111,24.511613],[116.796837,24.502074],[116.816825,24.490403],[116.812632,24.484058],[116.833595,24.496117],[116.849342,24.479069],[116.860749,24.462262],[116.85173,24.452767],[116.841493,24.453397],[116.838909,24.442544],[116.84822,24.426895],[116.855484,24.423842],[116.863528,24.409789],[116.869427,24.40722],[116.873278,24.391178],[116.885271,24.396219],[116.903894,24.369851],[116.90326,24.380127],[116.928415,24.382599],[116.934899,24.390015],[116.944016,24.431885],[116.935874,24.456836],[116.927099,24.468268],[116.917349,24.490257],[116.91145,24.515681],[116.922078,24.526623],[116.929439,24.513599],[116.935582,24.521878],[116.932511,24.534128],[116.947721,24.544972],[116.980774,24.544584],[116.996813,24.540615],[117.006222,24.544294],[117.017142,24.555815],[117.023138,24.571352],[117.025186,24.602033],[117.014948,24.615774],[117.019872,24.62903],[117.037471,24.626128],[117.043467,24.633626],[117.046929,24.653313],[117.033327,24.671836],[117.039372,24.690792],[117.026892,24.693935],[117.018556,24.709213],[117.02387,24.739861],[117.02348,24.773641],[117.027965,24.780213],[117.052145,24.793403],[117.052827,24.812099],[117.056728,24.82374],[117.069208,24.821953],[117.072084,24.807654],[117.070768,24.785866],[117.080713,24.781034],[117.102358,24.789538],[117.137508,24.784803],[117.144235,24.790359],[117.154424,24.813306],[117.169391,24.826058],[117.172218,24.865948],[117.198007,24.885163],[117.196594,24.900804],[117.188598,24.903942],[117.184406,24.925854],[117.210293,24.921028],[117.219604,24.908431],[117.227063,24.909155],[117.237447,24.923393],[117.237057,24.930825],[117.245929,24.954036],[117.23457,24.954518],[117.236813,24.962527],[117.267916,24.974203],[117.279714,24.98771],[117.286588,24.990507],[117.293803,24.984237],[117.288781,24.971742],[117.30092,24.975746],[117.306965,24.96822],[117.318032,24.968317],[117.341286,24.978737],[117.361712,24.971983],[117.370293,24.973527],[117.383845,24.984767],[117.393742,24.980715],[117.425137,24.978207],[117.445515,24.95997],[117.483736,24.958185],[117.493145,24.962093],[117.495485,24.971404],[117.490561,25.016841],[117.492023,25.023689],[117.50387,25.041482],[117.510841,25.090315],[117.503041,25.10911],[117.481981,25.120386],[117.478763,25.127806],[117.483638,25.134455],[117.484564,25.164901],[117.495436,25.16519],[117.497435,25.174293],[117.515765,25.17569],[117.529415,25.185514],[117.535022,25.201165],[117.548184,25.192208],[117.545649,25.210988],[117.555399,25.21171],[117.570707,25.220232],[117.578654,25.231257],[117.595765,25.221821],[117.6139,25.222254],[117.622285,25.240788],[117.621067,25.247479],[117.603468,25.260042],[117.604638,25.284152],[117.599811,25.293728],[117.619409,25.299598],[117.655192,25.320622],[117.661627,25.336351],[117.68025,25.347269],[117.678349,25.355349],[117.691512,25.368285],[117.691658,25.390595],[117.684101,25.396508],[117.699019,25.422226],[117.691414,25.440874],[117.697557,25.455675],[117.704041,25.457597],[117.713157,25.477921],[117.722371,25.48138],[117.715156,25.491468],[117.71813,25.511978],[117.702188,25.517309],[117.691902,25.510681],[117.688392,25.518702],[117.688928,25.535078],[117.697703,25.555869],[117.705162,25.559806],[117.725783,25.547611],[117.745089,25.570079],[117.748258,25.596288],[117.718471,25.590528],[117.695655,25.623738],[117.676301,25.63842],[117.662115,25.664278],[117.646076,25.670706],[117.635253,25.666389],[117.611414,25.650558],[117.601176,25.649455],[117.58777,25.66658],[117.594351,25.673967],[117.580847,25.69411],[117.559641,25.697947],[117.549062,25.70466],[117.541749,25.722497],[117.536045,25.725134],[117.518641,25.717463],[117.506941,25.702886],[117.497581,25.708496],[117.493973,25.722593],[117.502602,25.735537],[117.489927,25.732997],[117.48788,25.739325],[117.461749,25.735777],[117.459263,25.731702],[117.472767,25.727339],[117.470281,25.720148],[117.456972,25.71262],[117.440738,25.669458],[117.435765,25.665669],[117.406417,25.658858],[117.392182,25.658714],[117.38989,25.667732],[117.401786,25.690418],[117.396228,25.733716],[117.391694,25.735394],[117.391255,25.721155],[117.382773,25.727052],[117.376679,25.747761],[117.383017,25.752938],[117.375801,25.782413],[117.354302,25.785863],[117.348501,25.780256],[117.346015,25.756437],[117.333437,25.753274],[117.306868,25.740571],[117.284589,25.737407],[117.266697,25.724942],[117.265917,25.715353],[117.248611,25.687061],[117.254802,25.683224],[117.274497,25.687348],[117.285661,25.677469],[117.283516,25.665093],[117.253924,25.642834],[117.237934,25.634054],[117.234424,25.618268],[117.220823,25.603487],[117.215948,25.591248],[117.209561,25.588848],[117.198495,25.570559],[117.21234,25.570271],[117.197179,25.559326],[117.183382,25.575216],[117.165783,25.570655],[117.168416,25.59624],[117.158958,25.612797],[117.141993,25.630648],[117.140043,25.642163],[117.132681,25.650175],[117.104747,25.657322],[117.081737,25.652573],[117.071889,25.668307],[117.080323,25.668307],[117.071743,25.684279],[117.057995,25.685958],[117.067648,25.692816],[117.068525,25.708448],[117.060969,25.721011],[117.055021,25.715641],[117.048342,25.725661],[117.065113,25.736448],[117.058239,25.747282],[117.06443,25.7573],[117.05702,25.766742],[117.056338,25.786151],[117.036106,25.811114],[117.024016,25.853122],[117.008318,25.857768],[116.986283,25.85432],[116.971267,25.846561],[116.952791,25.842107],[116.949086,25.846753],[116.924174,25.855948],[116.904674,25.849914],[116.892681,25.837125],[116.885222,25.824192],[116.875131,25.818204],[116.865186,25.796884],[116.837788,25.787397],[116.820237,25.783898],[116.783089,25.811785],[116.778214,25.818539],[116.781042,25.832048],[116.794107,25.856331],[116.778946,25.859636],[116.756033,25.84795],[116.748086,25.85408],[116.743601,25.889754],[116.737215,25.899712],[116.719811,25.90651],[116.707574,25.916562],[116.689537,25.919434],[116.683443,25.929868],[116.67418,25.931065],[116.666965,25.939249],[116.649707,25.942742],[116.650682,25.961117],[116.644978,25.969012],[116.644735,25.980016],[116.652925,25.999389],[116.629476,26.013786],[116.625429,25.99298],[116.611243,25.984321],[116.593546,25.991545],[116.581602,25.980972],[116.553132,25.990062],[116.538555,25.996806],[116.495508,25.966285],[116.481468,25.974849],[116.480493,25.998959],[116.474399,26.009673],[116.466355,26.01326],[116.439201,26.01589],[116.419506,26.021295],[116.400103,26.033059]]]]}},{type:"Feature",properties:{adcode:350900,name:"宁德市",center:[119.527082,26.65924],centroid:[119.489399,26.971518],childrenNum:9,level:"city",parent:{adcode:35e4},subFeatureIndex:8,acroutes:[1e5,35e4]},geometry:{type:"MultiPolygon",coordinates:[[[[119.799983,26.546836],[119.799349,26.556167],[119.789746,26.566925],[119.793256,26.573969],[119.788381,26.58325],[119.769514,26.591769],[119.752597,26.596194],[119.740069,26.610707],[119.72793,26.614133],[119.699264,26.610184],[119.689611,26.610993],[119.679033,26.617654],[119.67016,26.617987],[119.660995,26.609994],[119.636327,26.601809],[119.620678,26.592149],[119.607954,26.594053],[119.577923,26.622269],[119.584115,26.633829],[119.591866,26.63264],[119.619508,26.649099],[119.628234,26.67635],[119.634572,26.676017],[119.640958,26.685195],[119.633207,26.698793],[119.637741,26.703025],[119.65768,26.7006],[119.66431,26.72185],[119.656851,26.728124],[119.65339,26.744664],[119.657533,26.744284],[119.6647,26.726128],[119.695072,26.696701],[119.711062,26.686621],[119.741531,26.684386],[119.787552,26.690996],[119.810416,26.684196],[119.830452,26.690948],[119.852488,26.682104],[119.862433,26.673877],[119.858338,26.659895],[119.861409,26.645436],[119.873938,26.642915],[119.90821,26.661417],[119.901141,26.671547],[119.9047,26.676588],[119.899191,26.693183],[119.905041,26.69751],[119.913134,26.713056],[119.929758,26.725462],[119.93824,26.74205],[119.938338,26.749274],[119.924688,26.770182],[119.932293,26.780112],[119.943067,26.784768],[119.95896,26.78282],[119.968905,26.786098],[119.967442,26.777879],[119.979581,26.774934],[119.99562,26.781395],[120.028966,26.78206],[120.056364,26.785956],[120.063091,26.774363],[120.059484,26.766191],[120.041153,26.748656],[120.032427,26.747706],[120.020581,26.739104],[120.019557,26.728409],[119.993963,26.720566],[119.989185,26.710298],[119.970562,26.691566],[119.977046,26.677301],[119.971245,26.66779],[119.970172,26.652904],[119.957985,26.648671],[119.961153,26.637492],[119.949209,26.624457],[119.946431,26.61204],[119.940337,26.623078],[119.918496,26.621317],[119.901921,26.624553],[119.892366,26.61675],[119.851952,26.595385],[119.84576,26.589009],[119.844444,26.568924],[119.834986,26.561165],[119.836595,26.549502],[119.830209,26.541075],[119.828551,26.52422],[119.83913,26.51422],[119.867016,26.508887],[119.884663,26.510077],[119.893731,26.51403],[119.902165,26.530506],[119.911818,26.53998],[119.933609,26.545122],[119.93902,26.555881],[119.947649,26.560641],[119.937997,26.576539],[119.946918,26.589722],[119.967735,26.59767],[119.983871,26.593482],[120.00771,26.595623],[120.030769,26.607948],[120.059971,26.625932],[120.068064,26.627455],[120.079228,26.616274],[120.093902,26.613705],[120.103798,26.620509],[120.13807,26.638016],[120.144603,26.649432],[120.127832,26.648576],[120.130952,26.661893],[120.120763,26.658849],[120.11545,26.663843],[120.110623,26.692803],[120.12793,26.705354],[120.150306,26.709538],[120.15991,26.715908],[120.16576,26.731499],[120.150453,26.734493],[120.158545,26.746708],[120.148454,26.749987],[120.126467,26.741242],[120.11428,26.743429],[120.106821,26.752838],[120.124127,26.781015],[120.137046,26.788189],[120.13651,26.797785],[120.128515,26.794317],[120.121787,26.798165],[120.102336,26.795695],[120.094243,26.814647],[120.104773,26.823671],[120.102433,26.826805],[120.082592,26.822294],[120.063676,26.824288],[120.050172,26.840244],[120.049441,26.853492],[120.054462,26.863699],[120.070599,26.863699],[120.083469,26.871533],[120.103701,26.872957],[120.11818,26.882878],[120.12169,26.895551],[120.117887,26.90585],[120.118765,26.9189],[120.12676,26.920418],[120.138411,26.915293],[120.146894,26.922648],[120.156157,26.917856],[120.180581,26.920418],[120.190038,26.914629],[120.208369,26.915958],[120.226114,26.91311],[120.231915,26.907226],[120.237522,26.917856],[120.247223,26.924831],[120.248734,26.938211],[120.243615,26.939492],[120.250928,26.973172],[120.261312,26.982657],[120.27857,26.985787],[120.279399,27.009828],[120.274426,27.027939],[120.256534,27.031874],[120.263896,27.035239],[120.295681,27.035713],[120.299776,27.039553],[120.286857,27.062493],[120.290806,27.074387],[120.282762,27.089787],[120.28754,27.093909],[120.306601,27.087986],[120.319862,27.094382],[120.326833,27.08737],[120.358911,27.085712],[120.392062,27.081258],[120.40186,27.089266],[120.403274,27.100636],[120.426041,27.111816],[120.461678,27.142555],[120.445297,27.160881],[120.438375,27.161023],[120.426138,27.173476],[120.4257,27.183323],[120.404396,27.204009],[120.400934,27.211534],[120.413951,27.230937],[120.398545,27.242483],[120.401763,27.250857],[120.415364,27.256392],[120.422385,27.25081],[120.430038,27.258852],[120.408783,27.276639],[120.401373,27.298584],[120.383433,27.312676],[120.374804,27.329272],[120.358326,27.337545],[120.351452,27.346764],[120.355255,27.353901],[120.343262,27.366237],[120.351598,27.383581],[120.340727,27.399647],[120.331757,27.396056],[120.319813,27.399694],[120.315572,27.4056],[120.315279,27.393268],[120.302701,27.392229],[120.289539,27.395914],[120.273353,27.389393],[120.258192,27.412687],[120.263798,27.418025],[120.262433,27.432905],[120.248978,27.439895],[120.24693,27.434558],[120.221629,27.420292],[120.213195,27.420292],[120.202372,27.42837],[120.176876,27.419962],[120.165614,27.424827],[120.134511,27.41982],[120.130514,27.413395],[120.137192,27.40234],[120.128856,27.391614],[120.121592,27.397426],[120.107162,27.395583],[120.096242,27.390339],[120.096876,27.379612],[120.077034,27.369215],[120.061141,27.347425],[120.052269,27.33868],[120.027552,27.342273],[120.026626,27.350781],[120.015949,27.364772],[120.009612,27.363921],[120.005224,27.376682],[119.994206,27.379186],[119.988356,27.371389],[119.960276,27.366096],[119.96403,27.360471],[119.960178,27.351869],[119.951306,27.346764],[119.938874,27.323788],[119.944042,27.314142],[119.933512,27.316553],[119.903286,27.317594],[119.899045,27.311494],[119.887637,27.313338],[119.87896,27.309602],[119.878131,27.301847],[119.865602,27.306198],[119.871306,27.315419],[119.856729,27.314804],[119.846199,27.324071],[119.83484,27.312534],[119.844834,27.306623],[119.840154,27.298915],[119.822311,27.301422],[119.819532,27.29603],[119.80988,27.304495],[119.795742,27.310454],[119.790477,27.302604],[119.770587,27.305678],[119.769758,27.323267],[119.784968,27.323598],[119.781458,27.330501],[119.768393,27.335749],[119.769124,27.34544],[119.750647,27.350403],[119.746991,27.360235],[119.740507,27.36222],[119.750452,27.373232],[119.741434,27.375453],[119.739581,27.386795],[119.732512,27.389819],[119.724907,27.401253],[119.709551,27.404702],[119.704675,27.424686],[119.689514,27.430826],[119.685468,27.438431],[119.693902,27.438667],[119.703408,27.44731],[119.703993,27.45855],[119.709941,27.462469],[119.706723,27.483339],[119.709989,27.495849],[119.703018,27.499295],[119.708576,27.514259],[119.684639,27.541159],[119.682591,27.536959],[119.667186,27.533561],[119.659337,27.539696],[119.668844,27.556494],[119.672012,27.556399],[119.675084,27.574374],[119.645443,27.578195],[119.630867,27.582676],[119.626479,27.620499],[119.641104,27.625403],[119.64754,27.640538],[119.639642,27.652653],[119.644029,27.663495],[119.635157,27.66868],[119.606248,27.67476],[119.594986,27.666889],[119.583968,27.665145],[119.578947,27.669858],[119.566516,27.663731],[119.550135,27.663825],[119.549307,27.670141],[119.539167,27.675372],[119.541897,27.663919],[119.53707,27.658923],[119.525906,27.66029],[119.520446,27.650108],[119.511476,27.653455],[119.50119,27.649872],[119.497972,27.625875],[119.500946,27.608239],[119.488709,27.598807],[119.481836,27.585648],[119.484809,27.570411],[119.477497,27.553851],[119.474669,27.539318],[119.466528,27.526435],[119.451708,27.513551],[119.438496,27.508783],[119.432841,27.513031],[119.426893,27.53106],[119.416656,27.539649],[119.394962,27.539271],[119.376826,27.534977],[119.360056,27.524406],[119.341872,27.506801],[119.347673,27.492781],[119.334706,27.480034],[119.285029,27.457652],[119.276449,27.435502],[119.267868,27.421473],[119.262116,27.420623],[119.259971,27.410655],[119.263578,27.397899],[119.273718,27.387173],[119.275327,27.379234],[119.267917,27.369404],[119.253877,27.365009],[119.254949,27.348513],[119.247393,27.345345],[119.242762,27.333101],[119.245882,27.3201],[119.235985,27.320998],[119.22877,27.312534],[119.217314,27.311588],[119.210684,27.297355],[119.208441,27.274983],[119.211805,27.263347],[119.204931,27.260887],[119.216631,27.252891],[119.233402,27.235338],[119.245492,27.238697],[119.271768,27.212575],[119.26353,27.197619],[119.255876,27.204624],[119.247198,27.201453],[119.234718,27.211676],[119.23501,27.224123],[119.207027,27.232025],[119.20147,27.209262],[119.178557,27.199559],[119.178118,27.176884],[119.175339,27.169073],[119.188307,27.169783],[119.191768,27.161828],[119.186016,27.133226],[119.205029,27.126311],[119.205077,27.115227],[119.195717,27.109211],[119.18548,27.116411],[119.161348,27.107553],[119.160373,27.092061],[119.143895,27.087891],[119.127661,27.087418],[119.134437,27.070975],[119.136436,27.056332],[119.11991,27.053109],[119.120446,27.058512],[119.107917,27.073866],[119.093779,27.082916],[119.093389,27.097272],[119.077058,27.10111],[119.059605,27.098078],[119.046394,27.106653],[119.042883,27.102484],[119.021969,27.102579],[119.013877,27.09642],[119.001445,27.097225],[118.991159,27.107695],[118.99969,27.121953],[118.9915,27.12669],[118.987893,27.158751],[118.964443,27.168552],[118.943773,27.171535],[118.937387,27.175511],[118.929733,27.168978],[118.933974,27.159887],[118.940214,27.162349],[118.931878,27.144876],[118.9349,27.137867],[118.947771,27.141324],[118.946357,27.127163],[118.956595,27.127353],[118.958106,27.117216],[118.946406,27.104995],[118.93178,27.113616],[118.924078,27.112385],[118.916034,27.096893],[118.902432,27.090403],[118.898289,27.072586],[118.880202,27.054151],[118.874157,27.035287],[118.860263,27.022155],[118.847685,27.023625],[118.841835,27.013527],[118.845053,27.000677],[118.837691,26.988585],[118.824675,26.981377],[118.803858,26.976349],[118.792889,26.965393],[118.792207,26.95306],[118.782652,26.947083],[118.74721,26.949597],[118.734876,26.956428],[118.712109,26.944378],[118.699775,26.950308],[118.696558,26.960412],[118.681348,26.963543],[118.671792,26.94732],[118.69334,26.928057],[118.703237,26.906182],[118.698313,26.888146],[118.692317,26.882213],[118.696022,26.872102],[118.690415,26.864601],[118.672572,26.859522],[118.663261,26.86313],[118.650927,26.860756],[118.649221,26.854631],[118.631817,26.852257],[118.625772,26.839817],[118.641274,26.818684],[118.637472,26.794744],[118.625284,26.787286],[118.624114,26.771228],[118.613584,26.7507],[118.61334,26.736395],[118.605248,26.727269],[118.602566,26.707921],[118.587892,26.709395],[118.581067,26.701218],[118.58175,26.692898],[118.572292,26.683435],[118.578435,26.675019],[118.589355,26.674733],[118.598764,26.669122],[118.600616,26.6598],[118.595644,26.653284],[118.594084,26.638158],[118.586625,26.627788],[118.584772,26.613324],[118.588721,26.605236],[118.580823,26.565068],[118.590866,26.553168],[118.604565,26.550787],[118.618947,26.554025],[118.615095,26.540314],[118.615193,26.523554],[118.605394,26.505886],[118.608611,26.48955],[118.601738,26.477546],[118.587502,26.474688],[118.567076,26.464874],[118.556692,26.444482],[118.566442,26.434237],[118.566247,26.428709],[118.549623,26.412981],[118.550891,26.391436],[118.562103,26.387002],[118.563127,26.367168],[118.584139,26.371698],[118.594327,26.360779],[118.592524,26.350764],[118.59813,26.351003],[118.609489,26.361971],[118.623919,26.366167],[118.629038,26.359348],[118.640641,26.355152],[118.662237,26.34218],[118.663359,26.329207],[118.652,26.319572],[118.665991,26.29381],[118.666479,26.275344],[118.683395,26.286987],[118.681494,26.291806],[118.696607,26.291472],[118.690708,26.297913],[118.691829,26.311033],[118.711476,26.326679],[118.720543,26.340368],[118.751988,26.338651],[118.75345,26.334263],[118.773487,26.328635],[118.794157,26.340463],[118.798935,26.36054],[118.779922,26.373271],[118.766271,26.392675],[118.753304,26.398539],[118.762274,26.420941],[118.731171,26.43843],[118.73551,26.448151],[118.735656,26.470544],[118.754913,26.48512],[118.746917,26.50241],[118.748185,26.510792],[118.762274,26.511554],[118.782847,26.505648],[118.783822,26.493218],[118.796838,26.490026],[118.805321,26.4825],[118.804736,26.468305],[118.797521,26.460348],[118.811122,26.448056],[118.810342,26.432378],[118.817021,26.436143],[118.82526,26.432998],[118.827551,26.426374],[118.854803,26.439526],[118.860214,26.453392],[118.868599,26.456299],[118.872109,26.466494],[118.906528,26.477975],[118.926272,26.477594],[118.938313,26.465637],[118.950257,26.469496],[118.954206,26.482881],[118.950988,26.491646],[118.939824,26.493456],[118.940702,26.503219],[118.948307,26.510506],[118.953816,26.525554],[118.968197,26.532458],[118.983944,26.5336],[118.995108,26.528791],[119.00164,26.54536],[118.99384,26.553644],[119.006125,26.555738],[119.013974,26.573493],[119.015729,26.58977],[119.026259,26.587724],[119.028453,26.598431],[119.051317,26.597194],[119.057801,26.603665],[119.074084,26.59272],[119.07696,26.586296],[119.065406,26.579395],[119.063213,26.570875],[119.072134,26.56721],[119.090415,26.565973],[119.100312,26.575016],[119.101628,26.559213],[119.1125,26.55074],[119.115912,26.538885],[119.135022,26.542409],[119.141311,26.537933],[119.14838,26.543694],[119.159398,26.541266],[119.167247,26.549407],[119.182311,26.55431],[119.196107,26.568876],[119.204492,26.563402],[119.21512,26.545884],[119.215461,26.536743],[119.229111,26.52403],[119.246662,26.532886],[119.253682,26.54855],[119.279179,26.535076],[119.285126,26.570352],[119.29902,26.591436],[119.316083,26.591293],[119.320275,26.585249],[119.31501,26.575492],[119.332268,26.578919],[119.335486,26.585249],[119.348307,26.590198],[119.344212,26.597955],[119.351476,26.602999],[119.360641,26.598954],[119.371513,26.601524],[119.379556,26.611516],[119.380434,26.621508],[119.388039,26.622935],[119.406418,26.617464],[119.414559,26.623506],[119.401592,26.628121],[119.408466,26.6344],[119.424505,26.624695],[119.449075,26.630642],[119.466625,26.627264],[119.473889,26.631356],[119.500556,26.621222],[119.50665,26.607234],[119.530781,26.578348],[119.524444,26.573588],[119.534779,26.56107],[119.556229,26.554786],[119.557643,26.544932],[119.565492,26.546455],[119.585382,26.537219],[119.59562,26.540742],[119.605029,26.536124],[119.610391,26.527363],[119.622579,26.521125],[119.637936,26.52822],[119.659337,26.526077],[119.665529,26.535743],[119.675084,26.537647],[119.681909,26.559118],[119.699362,26.569257],[119.72871,26.559547],[119.744066,26.5684],[119.743676,26.575825],[119.763664,26.577063],[119.782628,26.566734],[119.794279,26.556833],[119.799983,26.546836]]],[[[118.82526,26.432998],[118.817021,26.436143],[118.810342,26.432378],[118.827551,26.426374],[118.82526,26.432998]]],[[[120.713329,26.988253],[120.712744,26.974642],[120.720544,26.974737],[120.725566,26.990529],[120.713329,26.988253]]],[[[120.694414,27.002858],[120.695048,26.993327],[120.706358,26.998022],[120.708113,27.006983],[120.696218,27.008596],[120.694414,27.002858]]],[[[120.249466,26.934131],[120.247662,26.914059],[120.265163,26.916764],[120.267845,26.925543],[120.258338,26.924451],[120.269843,26.935459],[120.257899,26.930287],[120.249466,26.934131]]],[[[120.318155,26.930667],[120.324103,26.934415],[120.308893,26.939112],[120.283932,26.930098],[120.293634,26.923977],[120.314597,26.922696],[120.318155,26.930667]]],[[[119.807588,26.673497],[119.81339,26.665317],[119.827284,26.674448],[119.80949,26.682342],[119.797594,26.683721],[119.807588,26.673497]]],[[[120.350867,26.640679],[120.369051,26.634828],[120.35545,26.647291],[120.350867,26.640679]]],[[[119.906796,26.68976],[119.904651,26.682294],[119.916839,26.674686],[119.925565,26.675019],[119.926784,26.664604],[119.934048,26.666554],[119.946723,26.659753],[119.939167,26.670644],[119.943652,26.684101],[119.950818,26.69247],[119.919618,26.692232],[119.906796,26.68976]]],[[[119.801251,26.567496],[119.814023,26.560403],[119.816949,26.572684],[119.801251,26.567496]]],[[[120.348625,26.701456],[120.344481,26.696226],[120.350331,26.690283],[120.372025,26.699316],[120.359252,26.708872],[120.348625,26.701456]]],[[[120.034377,26.488788],[120.048125,26.494599],[120.06197,26.494504],[120.071281,26.508887],[120.071574,26.521316],[120.060264,26.522411],[120.057485,26.516268],[120.049197,26.52022],[120.036132,26.515935],[120.032817,26.500886],[120.026431,26.497504],[120.034377,26.488788]]],[[[120.150063,26.555643],[120.148356,26.551597],[120.164737,26.554786],[120.157034,26.562355],[120.150063,26.555643]]],[[[120.137387,26.684244],[120.14002,26.691852],[120.125054,26.696511],[120.124712,26.688856],[120.137387,26.684244]]],[[[120.132659,26.53041],[120.146991,26.527982],[120.153621,26.533077],[120.147089,26.544408],[120.137972,26.54198],[120.140117,26.536124],[120.132659,26.53041]]],[[[120.373634,26.959559],[120.377193,26.952538],[120.392062,26.958847],[120.373634,26.959559]]],[[[120.002982,26.544313],[119.997668,26.533743],[120.002933,26.533172],[120.011269,26.542599],[120.001909,26.551978],[120.002982,26.544313]]],[[[119.760885,26.613277],[119.766979,26.604331],[119.776485,26.599811],[119.792134,26.605473],[119.797789,26.611421],[119.811488,26.608804],[119.818752,26.621032],[119.798862,26.631213],[119.7603,26.620889],[119.760885,26.613277]]],[[[119.796766,26.600192],[119.80793,26.600382],[119.8013,26.60614],[119.796766,26.600192]]],[[[120.403908,27.096135],[120.421263,27.097415],[120.425163,27.104474],[120.413171,27.103242],[120.403908,27.096135]]],[[[120.135925,26.550978],[120.150404,26.560213],[120.150745,26.568733],[120.166979,26.571494],[120.171074,26.598907],[120.162933,26.605569],[120.150843,26.602571],[120.136802,26.588057],[120.134609,26.581394],[120.117936,26.569114],[120.126419,26.554691],[120.135925,26.550978]]],[[[120.219581,26.872245],[120.228941,26.87647],[120.224651,26.887102],[120.214755,26.878273],[120.219581,26.872245]]],[[[120.133682,26.48955],[120.134901,26.483263],[120.146114,26.489883],[120.14392,26.497933],[120.133682,26.48955]]],[[[120.360617,26.916859],[120.380166,26.927393],[120.39562,26.926444],[120.394402,26.933893],[120.380508,26.940251],[120.370514,26.961883],[120.354231,26.970942],[120.339021,26.970373],[120.320934,26.956143],[120.322348,26.940203],[120.343116,26.922221],[120.360617,26.916859]]],[[[120.141531,26.798877],[120.144603,26.791752],[120.16108,26.787856],[120.161812,26.803437],[120.150501,26.804245],[120.141531,26.798877]]],[[[119.66821,26.628454],[119.694487,26.630071],[119.720666,26.636065],[119.758789,26.659515],[119.762835,26.674971],[119.74899,26.681105],[119.712866,26.668504],[119.691708,26.671024],[119.673962,26.68082],[119.666162,26.679536],[119.656851,26.669883],[119.651927,26.648909],[119.658606,26.634353],[119.66821,26.628454]]],[[[119.778045,26.676065],[119.788673,26.680392],[119.791452,26.688476],[119.777802,26.685147],[119.778045,26.676065]]]]}}],t3={type:$m,features:Qm},n3={__name:"index",setup(r){return(t,e)=>(K2(),j2("div",null,[tf(Jm,{"map-json":Ar(t3)},null,8,["map-json"])]))}};export{n3 as default};
