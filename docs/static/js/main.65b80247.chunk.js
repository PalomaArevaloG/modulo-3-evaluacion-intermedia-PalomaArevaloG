(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,c){},15:function(e,n,c){"use strict";c.r(n);var a=c(1),t=c(6),s=c.n(t),l=c(8),b=c(3),r=(c(13),c(7)),u=c(0);var i=function(){var e=Object(a.useState)(r),n=Object(b.a)(e,2),c=n[0],t=n[1],s=Object(a.useState)(""),i=Object(b.a)(s,2),o=i[0],d=i[1],j=Object(a.useState)(!1),m=Object(b.a)(j,2),O=m[0],p=m[1],h=Object(a.useState)(!1),k=Object(b.a)(h,2),_=k[0],x=k[1],N=c.map((function(e,n){return Object(u.jsxs)("li",{className:"club__item",children:[Object(u.jsx)("p",{className:"club__name",children:Object(u.jsx)("label",{className:"club__label",children:"#".concat(n,": ").concat(e.name)})}),Object(u.jsx)("p",{className:"club__openWeekdays",children:Object(u.jsx)("label",{className:"club__label",children:"Abierto entre semana:".concat(e.openOnWeekdays?"Si":"No")})}),Object(u.jsx)("p",{className:"club__openWeekend",children:Object(u.jsx)("label",{className:"club__label",children:"Abierto el fin de semana:".concat(e.openOnWeekend?"Si":"No")})})]},n)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h1",{className:"header__title",children:"Mis clubs"})}),Object(u.jsxs)("main",{children:[Object(u.jsx)("ul",{className:"club__list",children:N}),Object(u.jsxs)("form",{className:"new-club__form",children:[Object(u.jsx)("h2",{className:"new-club__title",children:"A\xf1ade un nuevo club"}),"Nombre"," ",Object(u.jsx)("input",{className:"new-club__input",type:"text",name:"name",id:"name",placeholder:"Nombre",onChange:function(e){d(e.currentTarget.value)},value:o,required:!0}),"\xbfAbre entre semana?",Object(u.jsx)("input",{className:"new-club__input",type:"checkbox",name:"weekdays",id:"weekdays",onChange:function(e){p(e.currentTarget.checked)},checked:!!O}),"\xbfAbre los fines de semana?",Object(u.jsx)("input",{className:"new-club__input",type:"checkbox",name:"weekend",id:"weekend",onChange:function(e){x(e.currentTarget.checked)},checked:!!_}),Object(u.jsx)("input",{className:"new-club__btn",type:"submit",value:"A\xf1adir",onClick:function(e){e.preventDefault();var n={name:o,openOnWeekdays:O,openOnWeekend:_};t([].concat(Object(l.a)(c),[n])),d(""),p(""),x("")}})]})]})]})};s.a.render(Object(u.jsx)(i,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.65b80247.chunk.js.map