(this["webpackJsonpfeel-good"]=this["webpackJsonpfeel-good"]||[]).push([[0],{146:function(e,t,c){},449:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),i=c(23),a=c.n(i),l=(c(146),c(1));function r(){return Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h1",{children:"FeelGood."}),Object(l.jsx)("h3",{children:"The app to help you feel better"})]})}var o=c(135),d=c(136),j=c(14),h=c(142),b=c(141),u=c(28),x=c(27),g=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).state={enough_sleep:!1,medicine:!1,diet:!1,excercise:!1,good_day:!1,wake_up:"",changes:"",comments:""},s.enoughSleep=s.enoughSleep.bind(Object(j.a)(s)),s.medicine=s.medicine.bind(Object(j.a)(s)),s.diet=s.diet.bind(Object(j.a)(s)),s.excercise=s.excercise.bind(Object(j.a)(s)),s.goodDay=s.goodDay.bind(Object(j.a)(s)),s.wakeUp=s.wakeUp.bind(Object(j.a)(s)),s.changes=s.changes.bind(Object(j.a)(s)),s.comments=s.comments.bind(Object(j.a)(s)),s.submit=s.submit.bind(Object(j.a)(s)),s}return Object(d.a)(c,[{key:"enoughSleep",value:function(e){var t=e.target.value;this.setState({enough_sleep:t})}},{key:"medicine",value:function(e){var t=e.target.value;this.setState({medicine:t})}},{key:"diet",value:function(e){var t=e.target.value;this.setState({diet:t})}},{key:"excercise",value:function(e){var t=e.target.value;this.setState({excercise:t})}},{key:"goodDay",value:function(e){var t=e.target.value;this.setState({good_day:t})}},{key:"wakeUp",value:function(e){var t=e.target.value;this.setState({wake_up:t})}},{key:"changes",value:function(e){var t=e.target.value;this.setState({changes:t})}},{key:"comments",value:function(e){this.setState({comments:e.target.value})}},{key:"submit",value:function(e){console.log(this.state),e.preventDefault();var t={enough_sleep:this.state.enough_sleep,medicine:this.state.medicine,diet:this.state.diet,excercise:this.state.excercise,good_day:this.state.good_day,wake_up:this.state.wake_up,changes:this.state.changes,comments:this.state.comments},c=[];for(var s in t){var n=encodeURIComponent(s),i=encodeURIComponent(t[s]);c.push(n+"="+i)}c=c.join("&"),fetch("http://localhost:9000/day-details",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(l.jsx)("div",{class:"card-body",children:Object(l.jsxs)("form",{id:"feel-good-form",onSubmit:this.submit,children:[Object(l.jsx)("h2",{class:"text-center py-4",children:"FeelGoodForm"}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(x.a,{className:"fa fa-user prefix grey-text",icon:u.a,size:"lg"}),Object(l.jsx)("label",{for:"enough_sleep",class:"font-weight-light",children:"\xa0Enough Sleep?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.enoughSleep,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.enoughSleep,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(x.a,{className:"fa fa-user prefix grey-text",icon:u.e,size:"lg"}),Object(l.jsx)("label",{for:"medicine",class:"font-weight-light",children:"\xa0Did you take your medicine?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.medicine,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.medicine,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(x.a,{className:"fa fa-user prefix grey-text",icon:u.h,size:"lg"}),Object(l.jsx)("label",{for:"diet",class:"font-weight-light",children:"\xa0Did you eat healthier?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.diet,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.diet,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(x.a,{className:"fa fa-user prefix grey-text",icon:u.f,size:"lg"}),Object(l.jsx)("label",{for:"excercise",class:"font-weight-light",children:"\xa0Did you excercise?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.excercise,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.excercise,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(x.a,{className:"fa fa-user prefix grey-text",icon:u.g,size:"lg"}),Object(l.jsx)("label",{for:"good_day",class:"font-weight-light",children:"\xa0Did you have a good day?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:"true",onClick:this.goodDay,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:"false",onClick:this.enoughSleep,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(x.a,{className:"fa fa-user prefix grey-text",icon:u.b,size:"lg"}),Object(l.jsx)("label",{for:"wake_up",class:"font-weight-light",children:"\xa0What time did you wake up?"}),Object(l.jsx)("div",{class:"md-form",children:Object(l.jsx)("input",{type:"text",id:"materialFormCardEmailEx",class:"form-control",value:this.state.wake_up,onChange:this.wakeUp})})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(x.a,{className:"fa fa-user prefix grey-text",icon:u.d,size:"lg"}),Object(l.jsx)("label",{for:"changes",class:"font-weight-light",children:"\xa0List any changes you would like to make to your day:"}),Object(l.jsx)("div",{class:"md-form",children:Object(l.jsx)("input",{type:"text",id:"materialFormCardEmailEx",class:"form-control",value:this.state.changes,onChange:this.changes})})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(x.a,{className:"fa fa-user prefix grey-text",icon:u.c,size:"lg"}),Object(l.jsx)("label",{for:"comments",class:"font-weight-light",children:"\xa0Additional Comments: "}),Object(l.jsx)("div",{class:"md-form",children:Object(l.jsx)("input",{type:"text",id:"materialFormCardEmailEx",class:"form-control",value:this.state.comments,onChange:this.comments})})]}),Object(l.jsx)("div",{class:"text-center py-4 mt-3",children:Object(l.jsx)("button",{class:"btn btn-cyan waves-effect waves-light",type:"button",onClick:this.submit,children:"Submit"})})]})})}}]),c}(n.a.Component),f=(c(91),c(85)),O=c.n(f),v=c(139),m=c(88),p=c.p+"static/media/logo.6ce24c58.svg";function y(e){var t=e.data,c=t.createdAt;return console.log(c),console.log(t),Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:new Date(e.createdAt.toString()).getMonth()+"/"+new Date(e.createdAt.toString()).getUTCDate()+"/"+new Date(e.createdAt.toString()).getFullYear()}),Object(l.jsx)("li",{children:e.enough_sleep.toString()}),Object(l.jsx)("li",{children:e.wake_up}),Object(l.jsx)("li",{children:e.medicine.toString()}),Object(l.jsx)("li",{children:e.diet.toString()}),Object(l.jsx)("li",{children:e.excercise.toString()}),Object(l.jsx)("li",{children:e.changes}),Object(l.jsx)("li",{children:e.comments}),Object(l.jsx)("li",{children:e.good_day.toString()})]},e.id)}))})}function w(){var e=Object(s.useState)([{changes:"",comments:"",createdAt:"",diet:!1,enough_sleep:!1,excercise:!1,good_day:!1,id:"",medicine:!1,updatedAt:"",wake_up:""}]),t=Object(m.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(!0),a=Object(m.a)(i,2),r=a[0],o=a[1];return Object(s.useEffect)((function(){function e(){return(e=Object(v.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://highscore-api.herokuapp.com/day-details");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,console.log("Fetch Api"),console.log(t),n(t),o(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r?Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:p,style:{height:"100%",width:"100%"},alt:"logo"}),Object(l.jsx)("h2",{children:"Loading..."})]}):Object(l.jsx)(y,{data:c})}function k(e){e.name.name;return Object(l.jsx)(w,{})}function S(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"title",children:"Dane's Page"}),Object(l.jsx)(g,{}),Object(l.jsx)(k,{name:"Dane"})]})}function C(){return Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h2",{children:"Breezie's Page"}),Object(l.jsx)(k,{name:"Breezie"})]})}var _=c(50),N=c(6);function D(){return Object(l.jsx)(_.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{id:"nav",children:[Object(l.jsx)(_.b,{className:"hover",to:"/",children:Object(l.jsx)("img",{id:"navImage",src:p,alt:"Logo"})}),Object(l.jsxs)("div",{id:"navLinkContainer",children:[Object(l.jsx)(_.c,{className:"navLink",to:"/dane",children:"Dane"}),Object(l.jsx)(_.c,{className:"navLink",to:"/breezie",children:"Breezie"})]})]}),Object(l.jsxs)(N.c,{children:[Object(l.jsx)(N.a,{path:"/dane",children:Object(l.jsx)(S,{})}),Object(l.jsx)(N.a,{path:"/breezie",children:Object(l.jsx)(C,{})}),Object(l.jsx)(N.a,{path:"/",children:Object(l.jsx)(r,{})})]})]})})}function z(){return Object(l.jsx)(D,{})}var F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,450)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(z,{})}),document.getElementById("root")),F()}},[[449,1,2]]]);
//# sourceMappingURL=main.9abd12b0.chunk.js.map