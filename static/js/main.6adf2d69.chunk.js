(this.webpackJsonpcafemap=this.webpackJsonpcafemap||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(13),i=n.n(s),r=n(7),o=(n(22),n(23),n(17)),j=n(0);var d=function(e){var t=e.name,n=e.setPlace,a=Object(c.useState)(!1),s=Object(r.a)(a,2),i=s[0],d=s[1],l=Object(c.useState)(""),u=Object(r.a)(l,2),b=u[0],p=u[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o.a.Provider,{value:{color:"#fff"},children:Object(j.jsxs)("nav",{className:i?"nav-menu active":"nav-menu",children:[Object(j.jsx)("ul",{className:"nav-menu-items",children:Object(j.jsxs)("body",{children:[Object(j.jsx)("div",{children:"\uce74\ud398- \ud0d0\uc0c9\uae30-"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{className:"inputForm",onSubmit:function(e){e.preventDefault(),n(b),p("")},children:[Object(j.jsx)("input",{placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:function(e){p(e.target.value)},value:b}),Object(j.jsx)("button",{type:"submit",children:"\uac80\uc0c9"})]}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{children:"\uc120\ud0dd\ub41c \ubaa9\uc801\uc9c0\ub294 "})]}),Object(j.jsx)("input",{type:"text",value:t,disabled:!0}),Object(j.jsx)("div",{}),Object(j.jsx)("section",{id:"theme",children:Object(j.jsxs)("select",{onChange_gender:function(e){console.log(e.target.value)},children:[Object(j.jsx)("option",{value:"10\ub300",children:"10\ub300"}),Object(j.jsx)("option",{value:"20\ub300",children:"20\ub300"}),Object(j.jsx)("option",{value:"30\ub300",children:"30\ub300"}),Object(j.jsx)("option",{value:"40\ub300",children:"40\ub300"}),Object(j.jsx)("option",{value:"50\ub300 \uc774\uc0c1",children:"50\ub300 \uc774\uc0c1"}),Object(j.jsx)("option",{value:"\uc120\ud0dd \uc548\ud568",children:"\uc120\ud0dd \uc548\ud568"})]})}),Object(j.jsx)("section",{id:"theme",children:Object(j.jsxs)("select",{onChange_sex:function(e){console.log(e.target.value)},children:[Object(j.jsx)("option",{value:"\ub0a8\uc131",children:"\ub0a8\uc131"}),Object(j.jsx)("option",{value:"\uc5ec\uc131",children:"\uc5ec\uc131"}),Object(j.jsx)("option",{value:"\uc120\ud0dd \uc548\ud568",children:"\uc120\ud0dd \uc548\ud568"})]})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"\ucd94\ucc9c \uce74\ud398\ubcf4\uae30!"})})]})}),Object(j.jsx)("button",{className:"toggle-menu",onClick:function(){return d(!i)}})]})})})},l=n(14),u=n(2),b=function(){return Object(j.jsx)("div",{})},p=function(){return Object(j.jsx)("div",{children:"About"})},x=function(){return Object(j.jsx)("div",{})};var h=function(e){return Object(j.jsx)("div",{style:{position:"fixed",right:"10px",bottom:"10px",width:"150px",height:"100px",zIndex:"10"},children:Object(j.jsx)("button",{onClick:e.getCurrentPosBtn,children:"\ud604 \uc704\uce58 \ubcf4\uae30"})})},m=window.kakao;var O=function(e){var t,n,a=e.setName,s=e.searchPlace,i=Object(c.useState)([]),o=Object(r.a)(i,2),d=o[0],l=o[1];function u(e){var n=new m.maps.LatLng(e.coords.latitude,e.coords.longitude);t.panTo(n);var c=new m.maps.Marker({position:n});c.setMap(null),c.setMap(t)}function b(e){alert("\uc704\uce58 \uc815\ubcf4\ub97c \uac00\uc838\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4")}function p(){navigator.geolocation.getCurrentPosition(u,b)}function x(e,n,c){if(n===m.maps.services.Status.OK){for(var a=new m.maps.LatLngBounds,s=0;s<e.length;s++)O(e[s]),a.extend(new m.maps.LatLng(e[s].y,e[s].x));t.setBounds(a),function(e){var t,n=document.getElementById("pagination"),c=document.createDocumentFragment();for(;n.hasChildNodes();)n.removeChild(n.lastChild);for(t=1;t<=e.last;t++){var a=document.createElement("a");a.href="#",a.innerHTML=t,t===e.current?a.className="on":a.onclick=function(t){return function(){e.gotoPage(t)}}(t),c.appendChild(a)}n.appendChild(c)}(c),l(e)}}function O(e){var c=new m.maps.Marker({map:t,position:new m.maps.LatLng(e.y,e.x)});m.maps.event.addListener(c,"click",(function(){var s=document.createElement("div");s.setAttribute("style","padding:5px;font-size:12px;");var i=document.createTextNode(e.place_name);s.appendChild(i);var r=document.createElement("button");r.innerText="\ud655\uc778",r.onclick=function(){return a(e.place_name)},s.appendChild(r),n.setContent(s),n.open(t,c)}))}return Object(c.useEffect)((function(){n=new m.maps.InfoWindow({zIndex:1});var e=document.getElementById("myMap"),c={center:new m.maps.LatLng(33.499505,126.53113),level:7};t=new m.maps.Map(e,c),(new m.maps.services.Places).keywordSearch(s,x),p()}),[s,a]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{id:"myMap",style:{width:"100vw",height:"100vh"}}),Object(j.jsxs)("div",{id:"result-list",children:[d.map((function(e,t){return Object(j.jsxs)("div",{style:{marginTop:"20px"},children:[Object(j.jsx)("span",{children:t+1}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h5",{children:e.place_name}),e.road_address_name?Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:e.road_address_name}),Object(j.jsx)("span",{children:e.address_name})]}):Object(j.jsx)("span",{children:e.address_name}),Object(j.jsx)("span",{children:e.phone})]})]},t)})),Object(j.jsx)("div",{id:"pagination"})]}),Object(j.jsx)(h,{getCurrentPosBtn:p})]})};var v=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),o=i[0],h=i[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{name:n,setPlace:h}),Object(j.jsx)(l.a,{children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/",component:function(){return Object(j.jsx)(O,{setName:a,searchPlace:o})},exact:!0}),Object(j.jsx)(u.a,{path:"/ToExamine",component:b,exact:!0}),Object(j.jsx)(u.a,{path:"/About",component:p,exact:!0}),Object(j.jsx)(u.a,{path:"/Contact",component:x,exact:!0})]})})]})};n(33);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6adf2d69.chunk.js.map