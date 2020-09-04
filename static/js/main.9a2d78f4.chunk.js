(this["webpackJsonpreact-announcement"]=this["webpackJsonpreact-announcement"]||[]).push([[0],{28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(33),a(9)),i=a(2),m=a(10),s=a(13),u=a(3),d=a(5),b="ANNOUNCEMENT_ADD",p="ANNOUNCEMENT_DELETE",E="ANNOUNCEMENT_UPDATE",f=function(){var e=Object(d.b)(),t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],l=a[1],o=function(){var e=Object(n.useState)({title:"",description:""}),t=Object(u.a)(e,2),a=t[0],r=t[1];return[a,function(e){r(Object(s.a)(Object(s.a)({},a),{},Object(m.a)({},e.target.id,e.target.value)))}]}(),p=Object(u.a)(o,2),E=p[0],f=p[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),N=g[0],O=g[1];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(i.a,{to:"/"}),r.a.createElement("h3",{className:"mt-2 mb-4 text-center"},"Create new announcement!"),N?r.a.createElement("div",{className:"alert alert-warning",role:"alert"},N):null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),E.title.trim()&&E.description.trim()?(e(function(e){var t={id:Date.now(),title:e.title,description:e.description,date:(new Date).toLocaleDateString()};return localStorage.setItem(t.id,JSON.stringify(t)),{type:b,payload:t}}(E)),l(!0)):O("Some field is empty! Fill all fields for create announcement")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{className:"form-control",onChange:f,id:"title",type:"text",value:E.title})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{className:"form-control",onChange:f,id:"description",value:E.description,rows:"10"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary float-right",type:"submit"},"Add announcement"))))};var v=function(e){var t=e.filter;return r.a.createElement("form",{className:"mt-3 search-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"p-2",id:"serchInput",onChange:function(e){return t(e.target.value)},type:"text",placeholder:"What do you search?"})))},g=function(){var e=Object(d.c)((function(e){return e.announcementState.announcements})),t=Object(n.useState)(e),a=Object(u.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(v,{filter:function(t){l(e.filter((function(e){return~e.title.toLowerCase().indexOf(t.toLowerCase())})))}})),r.a.createElement("div",{className:"row"},r.a.createElement("ul",{className:"list-group announcements-list"},c.length?c.map((function(e){return r.a.createElement("li",{className:"list-group-item list-group-item-action",key:e.id},r.a.createElement(o.b,{to:"/announcement/".concat(e.id)},e.title))})):"List of announcements is empty")))},N=function(e){var t=e.title,a=e.description,c=e.id,l=e.modeSwitcher,o=Object(d.b)(),i=Object(n.useState)(""),b=Object(u.a)(i,2),p=b[0],f=b[1],v=Object(n.useState)({title:t,description:a,id:c}),g=Object(u.a)(v,2),N=g[0],O=g[1];function h(e){O(Object(s.a)(Object(s.a)({},N),{},Object(m.a)({},e.target.name,e.target.value)))}return r.a.createElement(r.a.Fragment,null,p?r.a.createElement("div",{className:"alert alert-warning mt-2",role:"alert"},p):null,r.a.createElement("form",{className:"mt-2",onSubmit:function(e){var t;e.preventDefault(),N.title.trim()&&N.description.trim()?(o(((t=N).date=(new Date).toLocaleDateString(),localStorage.setItem(t.id,JSON.stringify(t)),{type:E,payload:t})),l()):f("Field can't be empty!")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{id:"title",type:"text",name:"title",onChange:h,value:N.title,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",onChange:h,value:N.description,id:"description",className:"form-control",rows:"10"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-success btn-sm",type:"submit"},"SAVE"))))},O=function(e){var t=e.title,a=e.parentId,n=e.sameListLength,c=void 0===n?3:n,l=Object(d.c)((function(e){return e.announcementState.announcements.filter((function(e){if(e.id!==a){var n=/[!?.,-/+{}()]/g,r=e.title.replace(n,"").split(" ").filter((function(e){return""!==e})),c=t.replace(n,"").split(" ").filter((function(e){return""!==e}));return r.some((function(e){return c.includes(e)}))}return!1}))}));return l.length>c&&(l.length=c),r.a.createElement("ul",{className:"list-group announcements-list mt-5"},l.length?l.map((function(e){return r.a.createElement("li",{className:"list-group-item list-group-item-action",key:e.id},r.a.createElement(o.b,{to:"/announcement/".concat(e.id)},e.title))})):null)},h=function(e){var t=e.message,a=e.callback;function n(e){"true"===e.target.name?a(!0):a(!1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"alert alert-danger mt-2",role:"alert"},t),r.a.createElement("div",{className:"btn-group float-right btn-group-sm",role:"group","aria-label":"Basic example"},r.a.createElement("button",{className:"btn btn-danger",onClick:n,name:"true"},"Yes"),r.a.createElement("button",{className:"btn btn-secondary",onClick:n,name:"false"},"No")),r.a.createElement("div",{className:"clearfix"}))},j=function(e){var t=e.match,a=Object(d.b)(),c=Object(d.c)((function(e){return e.announcementState.announcements.find((function(e){return e.id===+t.params.id}))||{title:"",description:"",date:"",id:""}})),l=c.title,o=c.description,m=c.date,s=c.id,b=Object(n.useState)(!1),E=Object(u.a)(b,2),f=E[0],v=E[1],g=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return[a,function(){r((function(e){return!e}))}]}(),j=Object(u.a)(g,2),S=j[0],y=j[1],w=Object(n.useState)(!1),C=Object(u.a)(w,2),D=C[0],k=C[1];return r.a.createElement(r.a.Fragment,null,D&&r.a.createElement(h,{message:"Do you really want to delete the announcement?",callback:function(e){var t;e?(v(!0),a((t=s,localStorage.removeItem(t),{type:p,payload:t}))):k(!1)}}),f&&r.a.createElement(i.a,{to:"/"}),S?r.a.createElement(N,{modeSwitcher:y,title:l,description:o,id:s}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"mt-2 mb-4 text-center"},l),r.a.createElement("div",{className:"text-justify mb-4 announcement-desc"},r.a.createElement("p",null,o),r.a.createElement("span",{className:"float-right small"},r.a.createElement("b",null,m))),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-info btn-sm",onClick:y},"UPDATE"),r.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){k(!0)}},"DELETE"))),r.a.createElement(O,{title:l,parentId:s}))};var S=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("span",{className:"navbar-brand"},"Announcements App"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",activeClassName:"active",to:"/",exact:!0},"Announcements")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",activeClassName:"active",to:"/create"},"New announcement")))))},y=function(){return r.a.createElement("h1",null,"404")},w="/react-announcement/";var C=function(){return r.a.createElement(o.a,null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:w,exact:!0,component:g}),r.a.createElement(i.b,{path:"".concat(w,"create"),component:f}),r.a.createElement(i.b,{path:"".concat(w,"announcement/:id"),component:j}),r.a.createElement(i.b,{path:"*",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D,k=a(11),x=a(27),A=(D={DEFAULT:function(e){return e}},Object(m.a)(D,b,(function(e,t){return{announcements:[].concat(Object(x.a)(e.announcements),[t.payload])}})),Object(m.a)(D,p,(function(e,t){return{announcements:e.announcements.filter((function(e){return e.id!==t.payload}))}})),Object(m.a)(D,E,(function(e,t){return{announcements:e.announcements.map((function(e){return e.id===t.payload.id?t.payload:e}))}})),D),F={announcements:Object.values(localStorage).map((function(e){return JSON.parse(e)}))};var T=Object(k.combineReducers)({announcementState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=A[t.type]||A.DEFAULT;return a(e,t)}}),L=a(26),I=Object(k.createStore)(T,Object(L.composeWithDevTools)());l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:I},r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.9a2d78f4.chunk.js.map