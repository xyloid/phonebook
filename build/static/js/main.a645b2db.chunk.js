(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),u=t.n(c),o=t(4),l=t(2),i=function(e){var n=e.changeHandler,t=e.pattern;return r.a.createElement("div",null,"filter: ",r.a.createElement("input",{onChange:function(e){n(e)},value:t}))},f=function(e){var n=e.nameHandler,t=e.phoneHander,a=e.addHandler,c=e.name,u=e.phone;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:function(e){return n(e)},value:c})),r.a.createElement("div",null,"number:",r.a.createElement("input",{onChange:function(e){return t(e)},value:u})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return a(e)},type:"submit"},"add")))},m=function(e){var n=e.persons,t=e.deleteHandler;return n.map((function(e){return r.a.createElement("p",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e)}},"delete"))}))},d=t(3),s=t.n(d),h="/api/persons",p=function(){return s.a.get(h).then((function(e){return e.data}))},b=function(e){return s.a.post(h,e).then((function(e){return e.data}))},E=function(e){return s.a.delete("".concat(h,"/").concat(e))},v=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},j=(t(37),function(e){var n=e.message,t=e.className;return null==n?null:r.a.createElement("p",{className:"".concat(t)},n)}),O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),s=d[0],h=d[1],O=Object(a.useState)(""),g=Object(l.a)(O,2),w=g[0],H=g[1],k=Object(a.useState)(""),C=Object(l.a)(k,2),S=C[0],y=C[1],N=Object(a.useState)(null),D=Object(l.a)(N,2),I=D[0],J=D[1],L=Object(a.useState)(""),x=Object(l.a)(L,2),A=x[0],B=x[1];Object(a.useEffect)((function(){p().then((function(e){return c(e)}))}),[]);var P=function(e){J(e),setTimeout((function(){J(null,null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(j,{message:I,className:A}),r.a.createElement(i,{changeHandler:function(e){y(e.target.value)},pattern:S}),r.a.createElement("h3",null,"Add a new "),r.a.createElement(f,{nameHandler:function(e){h(e.target.value)},phoneHander:function(e){H(e.target.value)},addHandler:function(e){if(e.preventDefault(),t.some((function(e){return e.name===s}))){if(window.confirm("".concat(s," is already added to the phonebook, replace the old number with a new one ?"))){var n=t.find((function(e){return e.name===s})),a=Object(o.a)(Object(o.a)({},n),{},{number:w});v(a.id,a).then((function(e){c(t.map((function(n){return n.name===e.name?e:n}))),B("notification"),P("".concat(s," updated."))})).catch((function(e){c(t.filter((function(e){return a.id!==e.id}))),B("error"),P("Information of ".concat(s," has already been removed from the server."))}))}}else if(s.length>0){b({name:s,number:w}).then((function(e){c(t.concat(e)),B("notification"),P("".concat(s," added."))}))}h(""),H("")},name:s,phone:w}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(m,{persons:t.filter((function(e){return function(e){return 0===S.trim()||e.name.toLowerCase().includes(S.toLowerCase())}(e)})),deleteHandler:function(e){window.confirm("Delete ".concat(e.name,"?"))&&E(e.id).then((function(n){c(t.filter((function(n){return e.id!==n.id})))}))}}))};u.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a645b2db.chunk.js.map