import{r as d}from"./vendor-DEkiJG1s.js";/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=a=>a==null?void 0:a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function fe(a,e,o=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:ge(a),size:24,node:e,...o.length>0?{aliases:o}:{}}}/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=a=>{let e="",o=!1;for(const n of a){if(n==="-"||n==="_"||n<=" "){o=e.length>0;continue}e.length===0?e+=n.toLowerCase():e+=o?n.toUpperCase():n,o=!1}return e};/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=a=>{const e=we(a);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(...a)=>a.filter((e,o,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function g(a){return a!=null}function De(a,e={}){var M,m;const o=e.attributeNames??{},n=c=>o[c]??c,h=a.size??a.width??i.width,k=a.size??a.height??i.height,l=((M=a.aliases)==null?void 0:M.filter(c=>typeof c=="string"&&c.trim()!=="").map(c=>`lucide-${c}`))??[],p=[...a.name?[`lucide-${a.name}`]:[],...l],s=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?f(...s):f("lucide",...p,...s),z=e.absoluteStrokeWidth?Number(e.strokeWidth??i["stroke-width"])*Number(a.size??a.width??i.width)/Number(e.size??e.width??i.width):e.strokeWidth??i["stroke-width"];return["svg",{...Object.entries(i).reduce((c,[r,y])=>(c[n(r)]=y,c),{}),..."color"in e&&e.color&&{[n("stroke")]:e.color},..."size"in e&&g(e.size)&&{[n("width")]:e.size,[n("height")]:e.size},..."width"in e&&g(e.width)&&{[n("width")]:e.width},..."height"in e&&g(e.height)&&{[n("height")]:e.height},[n("stroke-width")]:z,...u&&{[n("class")]:u},[n("viewBox")]:`0 0 ${h} ${k}`,...e.hasA11yProp===!1?{[n("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},a.node.map(c=>{const[r,y,x]=c,_=e.nonScalingStroke?{[n("vector-effect")]:"non-scaling-stroke",...y}:y;return x?[r,_,x]:[r,_]})]}/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $e(a,e={}){return De(a,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},je=d.createContext({}),Ae=()=>d.useContext(je),qe=d.forwardRef(({color:a,size:e,width:o,height:n,strokeWidth:h,absoluteStrokeWidth:k,nonScalingStroke:l,className:p="",children:s,iconNode:u=[],icon:z={node:u,aliases:[],size:24},...v},M)=>{const{size:m=24,strokeWidth:c=2,absoluteStrokeWidth:r=!1,nonScalingStroke:y=!1,color:x="currentColor",className:_=""}=Ae()??{},ue=!!s||Ce(v),[Me,xe,_e=[]]=$e(z,{color:a??x,width:o??e??m,height:n??e??m,strokeWidth:h??c,absoluteStrokeWidth:k??r,nonScalingStroke:l??y,className:f(_,p),hasA11yProp:ue,attributes:v});return d.createElement(Me,{ref:M,...xe},[..._e.map(([ze,ve])=>d.createElement(ze,ve)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function t(a,e=[],o=[]){const n=typeof a=="string"?fe(a,e,o):a,h=d.forwardRef(({className:k,...l},p)=>d.createElement(qe,{ref:p,icon:n,className:k,...l}));return n.name&&(h.displayName=be(n.name)),h}/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};w.node;const Se=t(w);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b={name:"app-window",size:24,node:[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]};b.node;const Le=t(b);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};D.node;const Ve=t(D);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};$.node;const Ne=t($);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};C.node;const We=t(C);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};j.node;const Be=t(j);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A={name:"briefcase",size:24,node:[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};A.node;const Ee=t(A);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q={name:"building-complex",size:24,node:[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],aliases:["building-2"]};q.node;const Fe=t(q);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};H.node;const Ie=t(H);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S={name:"chart-column",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aliases:["bar-chart-3"]};S.node;const Pe=t(S);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};L.node;const Ue=t(L);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};V.node;const Re=t(V);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};N.node;const Te=t(N);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W={name:"code",size:24,node:[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]};W.node;const Ge=t(W);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};B.node;const Je=t(B);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};E.node;const Ke=t(E);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};F.node;const Oe=t(F);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I={name:"file-check-corner",size:24,node:[["path",{d:"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",key:"g5mvt7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14 20 2 2 4-4",key:"15kota"}]],aliases:["file-check-2"]};I.node;const Xe=t(I);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};P.node;const Ze=t(P);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U={name:"folder-git-2",size:24,node:[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]};U.node;const Qe=t(U);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R={name:"folder-lock",size:24,node:[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]};R.node;const Ye=t(R);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T={name:"git-branch",size:24,node:[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]};T.node;const et=t(T);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};G.node;const tt=t(G);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J={name:"layout-dashboard",size:24,node:[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]};J.node;const at=t(J);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};K.node;const nt=t(K);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};O.node;const ot=t(O);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};X.node;const ct=t(X);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};Z.node;const st=t(Z);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};Q.node;const it=t(Q);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Y.node;const dt=t(Y);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};ee.node;const ht=t(ee);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};te.node;const rt=t(te);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};ae.node;const yt=t(ae);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};ne.node;const kt=t(ne);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};oe.node;const lt=t(oe);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};ce.node;const pt=t(ce);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};se.node;const mt=t(se);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};ie.node;const ut=t(ie);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};de.node;const Mt=t(de);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};he.node;const xt=t(he);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};re.node;const _t=t(re);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye={name:"user-check",size:24,node:[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};ye.node;const zt=t(ye);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};ke.node;const vt=t(ke);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};le.node;const gt=t(le);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe={name:"wind",size:24,node:[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]};pe.node;const ft=t(pe);/**
 * @license lucide-react v1.63.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};me.node;const wt=t(me);export{Le as A,Ee as B,Ke as C,ut as D,Oe as E,Qe as F,et as G,Ue as H,Je as I,rt as J,Ye as K,at as L,nt as M,it as P,dt as R,kt as S,Mt as T,vt as U,ft as W,wt as X,Ne as a,Ze as b,Xe as c,ct as d,st as e,mt as f,Te as g,tt as h,Fe as i,pt as j,Pe as k,xt as l,Ve as m,ht as n,Re as o,lt as p,Se as q,_t as r,yt as s,ot as t,Ie as u,zt as v,Be as w,Ge as x,We as y,gt as z};
