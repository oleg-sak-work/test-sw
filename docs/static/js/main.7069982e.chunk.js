(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(10),o=n.n(a),i=(n(41),n(11)),s=n.n(i),l=n(32),u=n(16),d=n(14),j=n(78),b=n(76),p=n(73),f=n(77),h=n(79),O=n(80),m=n.p+"static/media/logo_name.5b93b3e6.png",g=n(21),x=n(31),v={queue:"queue"},w=Object(g.a)({},v.queue,"id"),k=function(e){return Object(x.a)("dev",2,{upgrade:function(t){if(console.warn("upgrade db, version",2),v[e]){var n=Object.values(v);Array.from(t.objectStoreNames).forEach((function(e){n.includes(e)||t.deleteObjectStore(e)})),n.forEach((function(e){t.objectStoreNames.contains(e)||t.createObjectStore(e,{keyPath:w[e]||"id"})}))}else console.error("Store name does not exists! Please, use store name from STORE_NAMES",{STORE_NAMES:v,storeName:e})}})},y=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n,r){var c,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n);case 2:return c=t.sent,a=c.transaction(n,"readwrite"),a.objectStore(n)[e](r),t.abrupt("return",a.complete);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},S=y("put"),N=y("delete"),C=function(e){return k(e).then((function(t){return t.transaction(e,"readonly").objectStore(e).getAll()}))},E=(n(43),n(2)),L="http://192.168.100.3:5000",F=Object(p.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,borderRadius:"4px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),transform:"translate(-50%, -50%)",left:"50%",top:"50%"}}})),T=function(e){return fetch("".concat(L,"/api/upload"),{method:"POST",body:e,headers:{origin:origin}})},U=function(e){var t=e.items,n=e.apiItems;if(!n.length&&!t.length)return"No results";var r=function(e){return function(t){var n=t.id,r=t.values,c=r.power,a=r.water,o=r.gas,i=r.outlets,s=r.gfc,l=r.img;return Object(E.jsxs)("div",{className:"card".concat(e?" pending":""),children:[Object(E.jsx)("img",{src:e?URL.createObjectURL(l):"".concat(L,"/").concat(n,".png"),alt:"",className:"ava"}),Object(E.jsxs)("div",{style:{fontSize:"13px"},children:[Object(E.jsx)("b",{children:"Utilities Check"}),Object(E.jsx)("hr",{}),Object(E.jsxs)("span",{style:{color:"rgba(0,0,0,0.6)"},children:["Power: ",Object(E.jsx)("i",{children:c?"Yes":"No"}),"; Water: ",Object(E.jsx)("i",{children:a?"Yes":"No"}),"; Gas: ",Object(E.jsx)("i",{children:o?"Yes":"No"})]}),Object(E.jsx)("br",{}),Object(E.jsx)("b",{style:{marginTop:"4px",display:"block"},children:"Electrical"}),Object(E.jsx)("hr",{}),Object(E.jsxs)("span",{style:{color:"rgba(0,0,0,0.6)"},children:["Outlets Checked: ",i?"Yes":"No"]}),Object(E.jsx)("br",{}),Object(E.jsxs)("span",{style:{color:"rgba(0,0,0,0.6)"},children:["GFCIs Checked: ",s?"Yes":"No"]})]}),e&&Object(E.jsx)("div",{style:{position:"absolute",right:"15px",bottom:"15px"},children:Object(E.jsx)(f.a,{size:10})})]},n)}};return Object(E.jsx)("div",{children:Object(E.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[t.slice().reverse().map(r(!0)),n.slice().reverse().map((function(e){var t=e.power,n=e.water,r=e.gas,c=e.outlets,a=e.gfc;return{id:e.id,values:{power:t,water:n,gas:r,outlets:c,gfc:a}}})).map(r(!1))]})})},A=function(){var e=Object(r.useState)(window.navigator.onLine),t=Object(d.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([]),i=Object(d.a)(o,2),p=i[0],g=i[1],x=Object(r.useState)([]),w=Object(d.a)(x,2),k=w[0],y=w[1],A=Object(r.useState)(!0),W=Object(d.a)(A,2),I=W[0],P=W[1],R=function(){return C(v.queue).then(g)},q=function(){return fetch("".concat(L,"/api/items")).then((function(e){return e.json()})).then(y).catch((function(){return y([])})).finally((function(){return P(!1)}))},Y=function(){return a(!1)},D=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,q();case 3:return e.next=5,R();case 5:C(v.queue).then(function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=s.a.mark((function e(n){var r,c,a,o,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t[n],c=r.id,a=r.values,o=a.img,i=Object(l.a)(a,["img"]),(u=new FormData).append("imgToUpload",o),Object.entries(i).forEach((function(e){var t=Object(d.a)(e,2),n=t[0],r=t[1];u.set(n,r)})),u.set("id",c),e.next=7,T(u).then((function(e){return e.json()})).then((function(e){return N(v.queue,c).then((function(){return R().then((function(){return y(e)}))}))}));case 7:case"end":return e.stop()}}),e)})),r=0;case 2:if(!(r<t.length)){e.next=7;break}return e.delegateYield(n(r),"t0",4);case 4:r++,e.next=2;break;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){window.navigator.onLine&&D(),q(),window.addEventListener("online",D),window.addEventListener("offline",Y)}),[]);var z=function(e,t){var n=F(),a=c.a.useState(!1),o=Object(d.a)(a,2),i=o[0],s=o[1],l=Object(r.useState)(!1),u=Object(d.a)(l,2),p=u[0],m=u[1],g=Object(r.useState)(null),x=Object(d.a)(g,2),w=x[0],k=x[1],y=function(){return s(!1)||k(null)||m(null)},N=w&&URL.createObjectURL(w),C=Object(E.jsx)("div",{className:n.paper,children:Object(E.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.target.elements,c=r.power,a=r.water,o=r.gas,i=r.outlets,s=r.gfc,l=Date.now(),u={power:!!c.checked,water:!!a.checked,gas:!!o.checked,outlets:!!i.checked,gfc:!!s.checked,img:w},d=new FormData;d.append("imgToUpload",w),d.set("power",!!c.checked),d.set("water",!!a.checked),d.set("gas",!!o.checked),d.set("outlets",!!i.checked),d.set("gfc",!!s.checked),d.set("id",l),m(!0),T(d).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(){m(!1),S(v.queue,{id:l,values:u})})).finally((function(){return y()||e()}))},children:[Object(E.jsx)("h2",{id:"simple-modal-title",children:"Add Item"}),Object(E.jsx)("p",{className:"Fields",children:"Utilities Check"}),Object(E.jsx)("hr",{}),Object(E.jsx)(O.a,{control:Object(E.jsx)(h.a,{name:"power",color:"primary"}),label:"Power On"}),Object(E.jsx)("br",{}),Object(E.jsx)(O.a,{control:Object(E.jsx)(h.a,{name:"water",color:"primary"}),label:"Water On"}),Object(E.jsx)("br",{}),Object(E.jsx)(O.a,{control:Object(E.jsx)(h.a,{name:"gas",color:"primary"}),label:"Gas On"}),Object(E.jsx)("br",{}),Object(E.jsx)("p",{className:"Fields",children:"Electrical"}),Object(E.jsx)("hr",{}),Object(E.jsx)(O.a,{control:Object(E.jsx)(h.a,{name:"outlets",color:"primary"}),label:"Outlets Checked"}),Object(E.jsx)("br",{}),Object(E.jsx)(O.a,{control:Object(E.jsx)(h.a,{name:"gfc",color:"primary"}),label:"GFCIs Checked"}),Object(E.jsx)("p",{className:"Fields",children:"Photo"}),Object(E.jsx)("hr",{}),Object(E.jsx)("br",{}),Object(E.jsx)("input",{name:"photo",className:"fileI",type:"file",id:"load",multiple:!0,accept:"image/jpeg,image/png,image/gif",onChange:function(e){k(e.target.files[0]),e.target.value=""}}),w?Object(E.jsx)("img",{src:N,alt:"",className:"loadImg"}):Object(E.jsx)("label",{htmlFor:"load",children:Object(E.jsx)(b.a,{variant:"outlined",color:"primary",component:"span",children:"Upload"})}),p?Object(E.jsx)(f.a,{size:20,style:{marginLeft:"auto",display:"block",marginTop:"20px"}}):Object(E.jsx)(b.a,{disabled:p,variant:"contained",color:"primary",type:"submit",style:{marginLeft:"auto",display:"block",marginTop:"20px"},children:"Save"})]})});return Object(E.jsxs)("div",{className:"openModal",children:[Object(E.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){return s(!0)},className:"buttonAdd",style:{marginLeft:"auto",display:"block"},children:"Add Item"}),i&&Object(E.jsx)(j.a,{open:i,onClose:y,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:C},i)]})}(R,y);return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)("div",{className:"leftSide",children:Object(E.jsx)("img",{src:m,alt:"",className:"logo"})}),Object(E.jsxs)("div",{className:"rightSide",children:[Object(E.jsx)("div",{className:n?"Online":"Offline",children:n?"Online":"Offline"}),z,I?Object(E.jsx)(f.a,{size:20}):Object(E.jsx)(U,{items:p,apiItems:k})]})]})},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(A,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(t,e)}))}}(),P()}},[[49,1,2]]]);
//# sourceMappingURL=main.7069982e.chunk.js.map