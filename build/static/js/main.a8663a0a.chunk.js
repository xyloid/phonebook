(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),o=t.n(c),u=t(4),l=t(2),i=function(e){var n=e.changeHandler,t=e.pattern;return r.a.createElement("div",null,"filter: ",r.a.createElement("input",{onChange:function(e){n(e)},value:t}))},f=function(e){var n=e.nameHandler,t=e.phoneHander,a=e.addHandler,c=e.name,o=e.phone;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:function(e){return n(e)},value:c})),r.a.createElement("div",null,"number:",r.a.createElement("input",{onChange:function(e){return t(e)},value:o})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return a(e)},type:"submit"},"add")))},m=function(e){var n=e.persons,t=e.deleteHandler;return n.map((function(e){return r.a.createElement("p",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e)}},"delete"))}))},d=t(3),s=t.n(d),h="/api/persons",p=function(){return s.a.get(h).then((function(e){return e.data}))},b=function(e){return s.a.post(h,e).then((function(e){return e.data}))},E=function(e){return s.a.delete("".concat(h,"/").concat(e))},v=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return s.a.get("".concat(h,"/?name=").concat(e)).then((function(e){return e.data}))},j=(t(37),function(e){var n=e.message,t=e.className;return null==n?null:r.a.createElement("p",{className:"".concat(t)},n)}),O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),s=d[0],h=d[1],O=Object(a.useState)(""),w=Object(l.a)(O,2),H=w[0],k=w[1],C=Object(a.useState)(""),y=Object(l.a)(C,2),S=y[0],N=y[1],D=Object(a.useState)(null),I=Object(l.a)(D,2),J=I[0],L=I[1],x=Object(a.useState)(""),A=Object(l.a)(x,2),B=A[0],P=A[1];Object(a.useEffect)((function(){p().then((function(e){return c(e)}))}),[]);var T=function(e){L(e),setTimeout((function(){L(null,null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(j,{message:J,className:B}),r.a.createElement(i,{changeHandler:function(e){N(e.target.value)},pattern:S}),r.a.createElement("h3",null,"Add a new "),r.a.createElement(f,{nameHandler:function(e){h(e.target.value)},phoneHander:function(e){k(e.target.value)},addHandler:function(e){e.preventDefault(),g(s).then((function(e){if(console.log(e),e.length>0){if(console.log("already has ",s),window.confirm("".concat(s," is already added to the phonebook, replace the old number with a new one ?"))){var n=t.find((function(e){return e.name===s})),a=Object(u.a)(Object(u.a)({},n),{},{number:H});v(a.id,a).then((function(e){c(t.map((function(n){return n.name===e.name?e:n}))),P("notification"),T("".concat(s," updated."))})).catch((function(e){c(t.filter((function(e){return a.id!==e.id}))),P("error"),T("Information of ".concat(s," has already been removed from the server."))}))}}else if(console.log("a new name ",s),t.some((function(e){return e.name===s})));else if(s.length>0){b({name:s,number:H}).then((function(e){c(t.concat(e)),P("notification"),T("".concat(s," added."))}))}})),h(""),k("")},name:s,phone:H}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(m,{persons:t.filter((function(e){return function(e){return 0===S.trim()||e.name.toLowerCase().includes(S.toLowerCase())}(e)})),deleteHandler:function(e){window.confirm("Delete ".concat(e.name,"?"))&&E(e.id).then((function(n){c(t.filter((function(n){return e.id!==n.id})))}))}}))};o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8663a0a.chunk.js.map