(this["webpackJsonpgithub-job-finder"]=this["webpackJsonpgithub-job-finder"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(13),o=c.n(s),i=(c(19),c(20),c.p+"static/media/octocat.237e2214.png"),r=c.p+"static/media/job-logo.bb022661.svg",l=(c(21),c(0)),j=function(){return Object(l.jsxs)("div",{className:"Header",children:[Object(l.jsxs)("div",{className:"logos",children:[Object(l.jsx)("img",{src:i,alt:"GitHub Logo",className:"github-logo"}),Object(l.jsx)("img",{src:r,alt:"Job Logo",className:"job-logo"})]}),Object(l.jsxs)("h1",{children:[Object(l.jsx)("span",{children:"G"}),"ITHUB ",Object(l.jsx)("span",{children:"J"}),"OB ",Object(l.jsx)("span",{children:"F"}),"INDER"]})]})},d=c(3),b=(c(23),c.p+"static/media/loading.11562bdd.gif"),p=c(14),u=c.n(p),m=c.p+"static/media/404.ed881872.png",O=(c(42),function(e){var t=e.data;return Object(l.jsxs)("div",{className:"Job card border border-success rounded w-50 my-5 text-uppercase",children:["null"!==t.company_logo?Object(l.jsx)("img",{src:t.company_logo,alt:"Company Logo",className:"company-logo card-img-top py-3"}):Object(l.jsx)("div",{className:"no-company_logo py-5"}),Object(l.jsxs)("div",{className:"job-info border border-success",children:[Object(l.jsx)("h2",{className:"title card-header text-danger",children:t.title.split(" ").map((function(e,t){return Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"title-initial",children:e[0]}),e.slice(1)," "]},"word".concat(t))}))}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("p",{className:"company-and-location fw-bold",children:t.company_and_location.split(" ").map((function(e,t){return Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"cl-initial",children:e[0]}),e.slice(1)," "]},"word".concat(t))}))}),Object(l.jsx)("p",{className:"job-type",children:t.type.split(" ").map((function(e,t){return Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"type-initial",children:e[0]}),e.slice(1)," "]},"word".concat(t))}))}),Object(l.jsx)("a",{className:"job-apply btn btn-success text-white w-50",href:t.apply.split("href=")[1].split(">")[0].slice(1,-1),rel:"noreferrer",target:"_blank",children:"APPLY"})]})]})]})}),h=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),i=o[0],r=o[1],j=Object(n.useState)(""),p=Object(d.a)(j,2),h=p[0],g=p[1],x=Object(n.useState)(!1),f=Object(d.a)(x,2),N=f[0],y=f[1],v=Object(n.useState)(!1),_=Object(d.a)(v,2),w=_[0],S=_[1];return Object(l.jsxs)("div",{className:"Form",children:[Object(l.jsxs)("form",{action:"/",method:"get",className:"container",children:[Object(l.jsx)("div",{className:"description",children:Object(l.jsx)("input",{className:"description__input",type:"text",value:i,onChange:function(e){r(e.target.value)},placeholder:"DESCRIPTION"})}),Object(l.jsx)("div",{className:"location",children:Object(l.jsx)("input",{className:"location__input",type:"text",value:h,onChange:function(e){g(e.target.value)},placeholder:"LOCATION"})}),Object(l.jsx)("button",{className:"search",type:"button",onClick:function(){y(!0),u.a.get("/positions.json?description=".concat(i,"&location=").concat(h)).then((function(e){if(404===e.status)throw new Error("Something went wrong : ".concat(e.status));return e.data.map((function(e){return{company_logo:"".concat(e.company_logo),title:"".concat(e.title),company_and_location:"".concat(e.company,"-").concat(e.location),type:"".concat(e.type),apply:"".concat(e.how_to_apply)}}))})).then((function(e){y(!1),a(e)})).catch((function(e){console.log(e),y(!1),S(!0)}))},children:"search"})]}),N&&Object(l.jsx)("img",{src:b,alt:"Loading Gif",className:"loading-gif w-25 mx-auto"}),null===c||void 0===c?void 0:c.map((function(e,t){return Object(l.jsx)(O,{data:e},"job".concat(t))})),0===(null===c||void 0===c?void 0:c.length)&&Object(l.jsx)("img",{src:m,alt:"404 Error",className:"404-error w-50 mx-auto"}),w&&Object(l.jsx)("img",{src:m,alt:"404 Error",className:"404-error w-50 mx-auto"})]})},g=c.p+"static/media/design.9f215bce.svg",x=(c(43),function(){return Object(l.jsx)("div",{className:"Footer",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("span",{className:"wrapper__designer",children:Object(l.jsx)("em",{children:String("<ata/>")})}),Object(l.jsx)("img",{src:g,alt:"Design Icon",className:"wrapper__icon"}),Object(l.jsx)("span",{className:"wrapper__design",children:"design"})]})})});var f=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(h,{}),Object(l.jsx)(x,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),N()}},[[44,1,2]]]);
//# sourceMappingURL=main.ccd853f2.chunk.js.map