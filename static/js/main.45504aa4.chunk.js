(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),l=a(1),o=(a(14),a(9)),d=a.n(o),u=a(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],b=function(e){var t=e.todo,a=function(e){return j.find((function(t){return t.id===e.userId}))||null}(t);return Object(u.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),a&&Object(u.jsx)(m,{user:a})]})},h=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(b,{todo:e},e.id)}))})};function f(e){return j.find((function(t){return t.id===e}))||null}var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:f(e.userId)})})),p=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(0),c=Object(s.a)(i,2),o=c[0],d=c[1],m=Object(l.useState)(!1),b=Object(s.a)(m,2),p=b[0],x=b[1],v=Object(l.useState)(!1),S=Object(s.a)(v,2),y=S[0],I=S[1],N=Object(l.useState)(O),g=Object(s.a)(N,2),C=g[0],_=g[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),!a.length&&0===o)return x(!0),void I(!0);if(0!==o)if(a.length){var t={id:Math.max.apply(Math,Object(r.a)(C.map((function(e){return e.id}))))+1,title:a,completed:!1,userId:o,user:f(o)};a.trim()&&o&&(_([].concat(Object(r.a)(C),[t])),n(""),d(0))}else x(!0);else I(!0)},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"titleInput",children:"Title: "}),Object(u.jsx)("input",{id:"titleInput",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),x(!1)}}),p&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"userSelect",children:"User: "}),Object(u.jsxs)("select",{"data-cy":"userSelect",id:"userSelect",value:o,onChange:function(e){d(+e.target.value),I(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),j.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),y&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(h,{todos:C})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.45504aa4.chunk.js.map