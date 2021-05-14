(this["webpackJsonpfeel-good"]=this["webpackJsonpfeel-good"]||[]).push([[0],{156:function(e,t,s){},476:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(26),i=s.n(n),l=(s(156),s(1));function r(){return Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h1",{children:"FeelGood."}),Object(l.jsx)("h3",{children:"The app to help you feel better"})]})}var o=s(145),d=s(146),h=s(17),j=s(152),u=s(151),b=s(87),x=s.n(b),g=s(8),f=s(7),m=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={enough_sleep:!1,medicine:!1,diet:!1,excercise:!1,good_day:!1,wake_up:"",changes:"",comments:"",success:"",failure:""},c.enoughSleep=c.enoughSleep.bind(Object(h.a)(c)),c.medicine=c.medicine.bind(Object(h.a)(c)),c.diet=c.diet.bind(Object(h.a)(c)),c.excercise=c.excercise.bind(Object(h.a)(c)),c.goodDay=c.goodDay.bind(Object(h.a)(c)),c.wakeUp=c.wakeUp.bind(Object(h.a)(c)),c.changes=c.changes.bind(Object(h.a)(c)),c.comments=c.comments.bind(Object(h.a)(c)),c.submit=c.submit.bind(Object(h.a)(c)),c}return Object(d.a)(s,[{key:"updateStyling",value:function(e){console.log(e);var t=e.target.previousElementSibling?e.target.previousElementSibling:null,s=e.target.nextElementSibling?e.target.nextElementSibling:null;t?(t.classList.remove("activeButton"),t.style.color="",t.style.removeProperty("border-color")):s&&(s.classList.remove("activeButton"),s.style.color="",s.style.removeProperty("border-color")),e.target.classList.add("activeButton"),e.target.style.color="white",e.target.style.borderColor="white"}},{key:"enoughSleep",value:function(e){var t=e.target.value;this.updateStyling(e),this.setState({enough_sleep:t})}},{key:"medicine",value:function(e){var t=e.target.value;this.updateStyling(e),this.setState({medicine:t})}},{key:"diet",value:function(e){var t=e.target.value;this.updateStyling(e),this.setState({diet:t})}},{key:"excercise",value:function(e){var t=e.target.value;this.updateStyling(e),this.setState({excercise:t})}},{key:"goodDay",value:function(e){var t=e.target.value;this.updateStyling(e),this.setState({good_day:t}),console.log(this.state)}},{key:"wakeUp",value:function(e){var t=e.target.value;this.setState({wake_up:t})}},{key:"changes",value:function(e){var t=e.target.value;this.setState({changes:t})}},{key:"comments",value:function(e){this.setState({comments:e.target.value})}},{key:"submit",value:function(e){var t=this;e.preventDefault();var s=new Headers;s.append("Content-Type","application/x-www-form-urlencoded");var c=new URLSearchParams;c.append("enough_sleep",this.state.enough_sleep),c.append("wake_up",this.state.wake_up),c.append("medicine",this.state.medicine),c.append("excercise",this.state.excercise),c.append("diet",this.state.diet),c.append("comments",this.state.comments),c.append("changes",this.state.changes),c.append("good_day",this.state.good_day),fetch("https://highscore-api.herokuapp.com/day-details/",{method:"POST",headers:s,body:c,redirect:"follow"}).then((function(e){e.ok?(console.log(e),t.setState({success:"Successfully Posted Your Update. Refresh to view it."}),document.getElementById("success-message").scrollIntoView(),document.getElementById("feel-good-form").style.display="none"):t.setState({failure:"There was an error"})})).catch((function(e){console.log("error",e),t.setState({failure:e.message}),document.getElementById("failure-message").scrollIntoView(),document.getElementById("feel-good-form").style.display="none"}))}},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{class:"text-center py-4",children:"FeelGood Forms"}),Object(l.jsxs)("div",{class:"text-center py-4 mt-3",children:[Object(l.jsx)("button",{class:"btn btn-cyan waves-effect waves-light text-center",type:"button",onClick:function(e){document.getElementById("feel-good-form").style.display="block",document.getElementById("previousDays").style.display="none"},children:"Submit New Form"}),Object(l.jsx)("button",{class:"btn btn-cyan waves-effect waves-light text-center",type:"button",onClick:function(e){document.getElementById("feel-good-form").style.display="none",document.getElementById("previousDays").style.display="block"},children:"View Previous Days"})]}),Object(l.jsxs)("div",{class:"card-body",children:[Object(l.jsx)("div",{className:"text-center",style:{color:"greenyellow"},id:"success-message",children:Object(l.jsx)("h1",{children:this.state.success})}),Object(l.jsx)("div",{className:"text-center",id:"failure-message",children:Object(l.jsx)("h1",{children:this.state.failure})}),Object(l.jsxs)("form",{id:"feel-good-form",style:{display:"none"},onSubmit:this.submit,children:[Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.a,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Enough Sleep?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.enoughSleep,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.enoughSleep,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.e,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Did you take your medicine?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.medicine,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.medicine,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.j,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Did you eat healthier?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.diet,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.diet,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.f,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Did you excercise?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.excercise,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.excercise,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.g,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Did you have a good day?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.goodDay,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.goodDay,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.b,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0What time did you wake up?"}),Object(l.jsx)("div",{class:"md-form",children:Object(l.jsx)("input",{type:"text",id:"materialFormCardEmailEx",class:"form-control",value:this.state.wake_up,onChange:this.wakeUp})})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.d,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0List any changes you would like to make to your day:"}),Object(l.jsx)("div",{class:"md-form",children:Object(l.jsx)("input",{type:"text",id:"materialFormCardEmailEx",class:"form-control",value:this.state.changes,onChange:this.changes})})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.c,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Additional Comments: "}),Object(l.jsx)("div",{class:"md-form",children:Object(l.jsx)("input",{type:"text",id:"materialFormCardEmailEx",class:"form-control",value:this.state.comments,onChange:this.comments})})]}),Object(l.jsx)("div",{class:"text-center py-4 mt-3",children:Object(l.jsx)("button",{class:"btn btn-cyan waves-effect waves-light",type:"button",onClick:this.submit,children:"Submit"})})]})]})]})}}]),s}(a.a.Component),p=(s(101),s(88)),y=s.n(p),v=s(149),O=s(91),w=s.p+"static/media/logo.6ce24c58.svg";function k(e){var t=e.data;return Object(l.jsxs)("div",{id:"previousDays",style:{display:""},children:[Object(l.jsx)("h2",{class:"text-center py-4",children:"Previous Days"}),t.map((function(e){return Object(l.jsxs)("div",{style:{backgroundColor:"#161b22"},class:"card-body py-4 mt-3",children:[Object(l.jsxs)("h2",{className:"text-center",children:["Date: ",Object(l.jsx)("i",{children:new Date(e.createdAt.toString()).getMonth()+"/"+new Date(e.createdAt.toString()).getUTCDate()+"/"+new Date(e.createdAt.toString()).getFullYear()})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Overall: ","true"===e.good_day.toString()?Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.i,size:"lg"}):Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Enough Sleep? ","true"===e.enough_sleep.toString()?Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.i,size:"lg"}):Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you take your medicine? ","true"===e.medicine.toString()?Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.i,size:"lg"}):Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you try to eat healthy? ","true"===e.diet.toString()?Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.i,size:"lg"}):Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you excercise? ","true"===e.excercise.toString()?Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.i,size:"lg"}):Object(l.jsx)(f.a,{className:"fa fa-user prefix grey-text",icon:g.h,size:"lg"})]}),Object(l.jsx)("h3",{className:"text-center",children:"Changes I would Like to make: "}),Object(l.jsxs)("h5",{className:"text-center",children:['"',e.changes.toString(),'"']}),Object(l.jsx)("h3",{className:"text-center",children:"Additional Comments: "}),Object(l.jsxs)("h5",{className:"text-center",children:['"',e.comments.toString(),'"']})]},e.id)}))]})}function S(){var e=Object(c.useState)([{changes:"",comments:"",createdAt:"",diet:!1,enough_sleep:!1,excercise:!1,good_day:!1,id:"",medicine:!1,updatedAt:"",wake_up:""}]),t=Object(O.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!0),i=Object(O.a)(n,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(v.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://highscore-api.herokuapp.com/day-details");case 2:t=e.sent,console.log(t.data),a(t.data),o(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r?Object(l.jsx)("p",{children:"Loading..."}):Object(l.jsx)(k,{data:s})}function N(e){e.name.name;return Object(l.jsx)(S,{})}function C(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{}),Object(l.jsx)(N,{name:"Dane"})]})}function D(){return Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h2",{children:"Breezie's Page"}),Object(l.jsx)(N,{name:"Breezie"})]})}var z=s(51),E=s(6);function _(){return Object(l.jsx)(z.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{id:"nav",children:[Object(l.jsx)(z.b,{className:"hover",to:"/",children:Object(l.jsx)("img",{id:"navImage",src:w,alt:"Logo"})}),Object(l.jsxs)("div",{id:"navLinkContainer",children:[Object(l.jsx)(z.c,{className:"navLink",to:"/feel-good/dane",children:"Dane"}),Object(l.jsx)(z.c,{className:"navLink",to:"/feel-good/breezie",children:"Breezie"})]})]}),Object(l.jsxs)(E.c,{children:[Object(l.jsx)(E.a,{path:"/feel-good/dane",children:Object(l.jsx)(C,{})}),Object(l.jsx)(E.a,{path:"/feel-good/breezie",children:Object(l.jsx)(D,{})}),Object(l.jsx)(E.a,{path:"/",children:Object(l.jsx)(r,{})})]})]})})}function B(){return Object(l.jsx)(_,{})}var I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,477)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root")),I()}},[[476,1,2]]]);
//# sourceMappingURL=main.fae69511.chunk.js.map