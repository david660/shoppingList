(this.webpackJsonppokeman=this.webpackJsonppokeman||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(4),a=n(1),c=n(8),s=n(2),r=n.n(s),o=n(7),l=n.n(o),m=n(0),d=function(e){var t=e.modalContent,n=e.closeModal;return setTimeout((function(){n()}),3e3),Object(m.jsx)("div",{style:{color:"red",marginTop:"5px"},children:t})},u=(n(14),n(15),function(e,t){if("ADD_ITEM"===t.type){var n=[].concat(Object(c.a)(e.items),[t.payload]);return Object(a.a)(Object(a.a)({},e),{},{items:n,isModalOpen:!0,modalContent:"Item Added"})}if("NO_VALUE"===t.type)return Object(a.a)(Object(a.a)({},e),{},{isModalOpen:!0,modalContent:"No value is provided"});if("CLOSE_MODAL"===t.type)return Object(a.a)(Object(a.a)({},e),{},{isModalOpen:!1,modalContent:""});if("REMOVE_USER"===t.type){var i=e.items.filter((function(e){return e.id!==t.payload}));return Object(a.a)(Object(a.a)({},e),{},{items:i,isModalOpen:!0,modalContent:"Item is succesfully removed"})}if("CLEAR_USERS"===t.type)return Object(a.a)(Object(a.a)({},e),{},{items:[],isModalOpen:!0,modalContent:"Items List is successfully cleared"});throw new Error("No matching error type")}),p={items:JSON.parse(window.localStorage.getItem("items"))||"",isModalOpen:!1,modalContent:""},j=function(){var e=r.a.useState(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=r.a.useState(""),s=Object(i.a)(c,2),o=s[0],l=s[1],j=r.a.useReducer(u,p),O=Object(i.a)(j,2),b=O[0],f=O[1],h=r.a.useState(0),y=Object(i.a)(h,2),v=y[0],x=y[1];r.a.useEffect((function(){if(b.items.length>1){var e=b.items.reduce((function(e,t){return Number(e+parseInt(t.price))}),0);x(e)}1===b.items.length&&x(b.items[0].price),0===b.items.length&&x(0)}),[b.items]),r.a.useEffect((function(){window.localStorage.setItem("items",JSON.stringify(b.items))}),[b.items]);return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"title",children:"Muyiwa's Shopping List"}),Object(m.jsx)("div",{children:b.isModalOpen&&Object(m.jsx)(d,{modalContent:b.modalContent,closeModal:function(){f({type:"CLOSE_MODAL"})}})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("form",{className:"form",children:Object(m.jsxs)("div",{className:"inputs-container",children:[Object(m.jsxs)("div",{className:"item-container",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{type:"text",id:"name",className:"inputs",placeholder:"Enter the name of the item",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(m.jsxs)("div",{className:"item-container",children:[Object(m.jsx)("label",{htmlFor:"price",children:"Price:"}),Object(m.jsx)("input",{type:"number",id:"price",placeholder:"Set the price of the item",className:"inputs",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(m.jsx)("button",{type:"submit",className:"btn",onClick:function(e){if(e.preventDefault(),n&&o){var t={id:"item".concat(n),name:n,price:o};f({type:"ADD_ITEM",payload:t})}else f({type:"NO_VALUE"});a(""),l("")},children:"Submit"})]})}),Object(m.jsx)("div",{className:"items-display",children:b.items.map((function(e,t){return Object(m.jsxs)("div",{className:"item-display",children:[Object(m.jsx)("p",{className:"numerator",children:t+1<10?"0"+(t+1):t+1}),Object(m.jsx)("p",{className:"name-item",children:e.name}),Object(m.jsx)("p",{children:e.price}),Object(m.jsx)("button",{type:"button",className:"btn",id:"del",onClick:function(){return t=e.id,void f({type:"REMOVE_USER",payload:t});var t},children:"Delete"})]},e.id)}))}),"Total amount is #".concat(v),b.items.length>0&&Object(m.jsx)("button",{style:{display:"block",marginLeft:"auto"},className:"btn",id:"del",onClick:function(){f({type:"CLEAR_USERS"})},children:"Clear Items"})]})]})};l.a.render(Object(m.jsx)(j,{}),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8582f16d.chunk.js.map