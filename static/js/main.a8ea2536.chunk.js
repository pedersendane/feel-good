(this["webpackJsonpfeel-good"]=this["webpackJsonpfeel-good"]||[]).push([[0],{156:function(e,t,s){},476:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(26),i=s.n(n),l=(s(156),s(0));function r(){return Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h1",{children:"FeelGood."}),Object(l.jsx)("h3",{children:"The app to help you feel better"})]})}var o=s(61),d=s(62),j=s(9),h=s(64),u=s(63),b=s(91),x=s.n(b),g=s(4),y=s(3),m=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={enough_sleep:!1,medicine:!1,diet:!1,excercise:!1,good_day:!1,wake_up:"",changes:"",comments:"",success:"",failure:""},a.enoughSleep=a.enoughSleep.bind(Object(j.a)(a)),a.medicine=a.medicine.bind(Object(j.a)(a)),a.diet=a.diet.bind(Object(j.a)(a)),a.excercise=a.excercise.bind(Object(j.a)(a)),a.goodDay=a.goodDay.bind(Object(j.a)(a)),a.wakeUp=a.wakeUp.bind(Object(j.a)(a)),a.changes=a.changes.bind(Object(j.a)(a)),a.comments=a.comments.bind(Object(j.a)(a)),a.submit=a.submit.bind(Object(j.a)(a)),a.cancel=a.cancel.bind(Object(j.a)(a)),a}return Object(d.a)(s,[{key:"updateStyling",value:function(e){console.log(e);var t=e.target.previousElementSibling?e.target.previousElementSibling:null,s=e.target.nextElementSibling?e.target.nextElementSibling:null;t?(t.classList.remove("activeButton"),t.style.color="",t.style.removeProperty("border-color")):s&&(s.classList.remove("activeButton"),s.style.color="",s.style.removeProperty("border-color")),e.target.classList.add("activeButton"),e.target.style.color="white",e.target.style.borderColor="white"}},{key:"enoughSleep",value:function(e){var t=e.target.value;this.updateStyling(e),this.setState({enough_sleep:t})}},{key:"medicine",value:function(e){var t=e.target.value;this.updateStyling(e),this.setState({medicine:t})}},{key:"diet",value:function(e){var t=e.target.value;this.updateStyling(e),this.setState({diet:t})}},{key:"excercise",value:function(e){var t=e.target.value;this.updateStyling(e),this.setState({excercise:t})}},{key:"goodDay",value:function(e){var t=e.target.value;this.updateStyling(e),this.setState({good_day:t}),console.log(this.state)}},{key:"wakeUp",value:function(e){var t=e.target.value;this.setState({wake_up:t})}},{key:"changes",value:function(e){var t=e.target.value;this.setState({changes:t})}},{key:"comments",value:function(e){this.setState({comments:e.target.value})}},{key:"cancel",value:function(e){this.setState({enough_sleep:!1,medicine:!1,diet:!1,excercise:!1,good_day:!1,wake_up:"",changes:"",comments:"",success:"",failure:""}),document.getElementById("feel-good-form").style.display="none",document.getElementById("previousDays").style.display="none",document.getElementById("message-container").style.display="none",document.getElementById("topButtonsContainer").style.display="block"}},{key:"submit",value:function(e){var t=this;e.preventDefault();var s=new Headers;s.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("enough_sleep",this.state.enough_sleep),a.append("wake_up",this.state.wake_up),a.append("medicine",this.state.medicine),a.append("excercise",this.state.excercise),a.append("diet",this.state.diet),a.append("comments",this.state.comments),a.append("changes",this.state.changes),a.append("good_day",this.state.good_day),fetch("https://highscore-api.herokuapp.com/day-details/",{method:"POST",headers:s,body:a,redirect:"follow"}).then((function(e){e.ok?(console.log(e),t.setState({success:"Successfully Posted Your Update. Click here to return home"}),document.getElementById("success-message").scrollIntoView(),document.getElementById("home-button").style.display="initial",document.getElementById("feel-good-form").style.display="none"):(t.setState({failure:"There was an error"}),document.getElementById("home-button").style.display="initial")})).catch((function(e){console.log("error",e),t.setState({failure:e.message}),document.getElementById("failure-message").scrollIntoView(),document.getElementById("home-button").style.display="initial",document.getElementById("feel-good-form").style.display="none"}))}},{key:"render",value:function(){var e=Object(l.jsxs)("div",{class:"text-center py-4 mt-3",children:[Object(l.jsx)("button",{class:"btn btn-cyan waves-effect waves-light text-center",type:"button",onClick:function(e){document.getElementById("message-container").style.display="block";var t=document.getElementById("feel-good-form");t.style.display="initial",t.scrollIntoView(),document.getElementById("previousDays").style.display="none",document.getElementById("topButtonsContainer").style.display="none"},children:"Submit New Form"}),Object(l.jsx)("button",{class:"btn btn-cyan waves-effect waves-light text-center",type:"button",onClick:function(e){var t=document.getElementById("previousDays");t.style.display="block",t.scrollIntoView(),document.getElementById("feel-good-form").style.display="none",document.getElementById("topButtonsContainer").style.display="none"},children:"View Previous Days"})]});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"topButtonsContainer",children:[Object(l.jsx)("h2",{class:"text-center py-4",children:"FeelGood Forms"}),e]}),Object(l.jsxs)("div",{class:"card-body",id:"message-container",style:{display:"none"},children:[Object(l.jsx)("h1",{className:"text-center",children:"New FeelGood Form"}),Object(l.jsxs)("div",{className:"text-center success",id:"success-message",children:[Object(l.jsx)("h2",{children:this.state.success}),Object(l.jsx)("div",{class:"text-center py-4 mt-3",children:Object(l.jsx)("button",{id:"home-button",style:{display:"none"},class:"btn btn-green waves-effect waves-light",type:"button",onClick:function(){window.location.href="/feel-good"},children:"Home"})})]}),Object(l.jsx)("div",{className:"text-center failure",id:"failure-message",children:Object(l.jsx)("h1",{children:this.state.failure})}),Object(l.jsxs)("form",{id:"feel-good-form",style:{display:"none"},onSubmit:this.submit,children:[Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(y.a,{className:"fa fa-user prefix grey-text",icon:g.a,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Enough Sleep?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.enoughSleep,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.enoughSleep,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(y.a,{className:"fa fa-user prefix grey-text",icon:g.e,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Did you take your medicine?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.medicine,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.medicine,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(y.a,{className:"fa fa-user prefix grey-text",icon:g.j,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Did you eat healthier?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.diet,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.diet,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(y.a,{className:"fa fa-user prefix grey-text",icon:g.f,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Did you excercise?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.excercise,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.excercise,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(y.a,{className:"fa fa-user prefix grey-text",icon:g.g,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Did you have a good day?"})]}),Object(l.jsxs)("div",{class:"text-center py-4",children:[Object(l.jsx)("button",{class:"btn btn-green waves-effect waves-light",type:"button",value:!0,onClick:this.goodDay,children:"Yes"}),Object(l.jsx)("button",{class:"btn btn-red waves-effect waves-light",type:"button",value:!1,onClick:this.goodDay,children:"No"})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(y.a,{className:"fa fa-user prefix grey-text",icon:g.b,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0What time did you wake up?"}),Object(l.jsx)("div",{class:"md-form",children:Object(l.jsx)("input",{type:"text",id:"materialFormCardEmailEx",class:"form-control",value:this.state.wake_up,onChange:this.wakeUp})})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(y.a,{className:"fa fa-user prefix grey-text",icon:g.d,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0List any changes you would like to make to your day:"}),Object(l.jsx)("div",{class:"md-form",children:Object(l.jsx)("input",{type:"text",id:"materialFormCardEmailEx",class:"form-control",value:this.state.changes,onChange:this.changes})})]}),Object(l.jsxs)("div",{class:"text-center ",children:[Object(l.jsx)(y.a,{className:"fa fa-user prefix grey-text",icon:g.c,size:"lg"}),Object(l.jsx)("label",{class:"font-weight-light",children:"\xa0Additional Comments: "}),Object(l.jsx)("div",{class:"md-form",children:Object(l.jsx)("input",{type:"text",id:"materialFormCardEmailEx",class:"form-control",value:this.state.comments,onChange:this.comments})})]}),Object(l.jsxs)("div",{class:"text-center py-4 mt-3",children:[Object(l.jsx)("button",{class:"btn btn-cyan waves-effect waves-light",type:"button",onClick:this.submit,children:"Submit"}),Object(l.jsx)("button",{class:"btn btn-cyan waves-effect waves-light",type:"button",onClick:this.cancel,children:"Cancel"})]})]})]})]})}}]),s}(c.a.Component),f=(s(105),s(92)),A=s.n(f),O=s(151),p=s(95),v=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={data:e.data,badDaysOnly:!1,goodDaysOnly:!1},a.badDaysOnly=a.badDaysOnly.bind(Object(j.a)(a)),a.goodDaysOnly=a.goodDaysOnly.bind(Object(j.a)(a)),a.allDays=a.allDays.bind(Object(j.a)(a)),a}return Object(d.a)(s,[{key:"badDaysOnly",value:function(e){this.setState({badDaysOnly:!0,goodDaysOnly:!1}),console.log(e.target),e.target.scrollIntoView()}},{key:"goodDaysOnly",value:function(e){this.setState({goodDaysOnly:!0,badDaysOnly:!1}),console.log(this.state)}},{key:"allDays",value:function(e){this.setState({goodDaysOnly:!1,badDaysOnly:!1}),console.log(this.state)}},{key:"render",value:function(){var e=this.state.data,t=this.state.data.filter((function(e){return"false"===e.good_day.toString()})),s=this.state.data.filter((function(e){return"true"===e.good_day.toString()})),a=function(e){var t=new Date(e),s=t.getMonth()+1,a=t.getUTCDate(),c=t.getFullYear();return console.log("Month: "+s),console.log("Day: "+a),console.log("Year: "+c),String(s+"/"+a+"/"+c)},c=Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{class:"text-center py-4 mt-3",children:Object(l.jsx)("button",{class:"btn btn-cyan waves-effect waves-light text-center",type:"button",onClick:function(){document.getElementById("message-container").style.display="block";var e=document.getElementById("feel-good-form");e.style.display="block",e.scrollIntoView(),document.getElementById("previousDays").style.display="none"},children:"Submit New Form"})})}),n=!1===this.state.goodDaysOnly&&!1===this.state.badDaysOnly?Object(l.jsx)("a",{class:"nav-link active","aria-current":"page",onClick:this.allDays,children:"All Days"}):Object(l.jsx)("a",{class:"nav-link",onClick:this.allDays,children:"All Days"}),i=!0===this.state.goodDaysOnly&&!1===this.state.badDaysOnly?Object(l.jsx)("a",{class:"nav-link active","aria-current":"page",onClick:this.goodDaysOnly,children:"Good Days"}):Object(l.jsx)("a",{class:"nav-link",onClick:this.goodDaysOnly,children:"Good Days"}),r=!0===this.state.badDaysOnly&&!1===this.state.goodDaysOnly?Object(l.jsx)("a",{class:"nav-link active","aria-current":"page",onClick:this.badDaysOnly,children:"Bad Days"}):Object(l.jsx)("a",{class:"nav-link",onClick:this.badDaysOnly,children:"Bad Days"});return this.state.badDaysOnly?Object(l.jsxs)("div",{id:"previousDays",style:{display:"none"},children:[Object(l.jsx)("h2",{class:"text-center py-4",children:"Previous Days"}),c,Object(l.jsxs)("ul",{class:"nav nav-pills",children:[Object(l.jsx)("li",{class:"nav-item",children:n}),Object(l.jsx)("li",{class:"nav-item",children:i}),Object(l.jsx)("li",{class:"nav-item",children:r})]}),t.map((function(e){return Object(l.jsxs)("div",{style:{backgroundColor:"#161b22"},class:"card-body py-4 mt-3",children:[Object(l.jsxs)("h2",{className:"text-center",children:["Date: ",Object(l.jsx)("i",{children:a(e.createdAt.toString())})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Overall: ","true"===e.good_day.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Enough Sleep? ","true"===e.enough_sleep.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you take your medicine? ","true"===e.medicine.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you try to eat healthy? ","true"===e.diet.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you excercise? ","true"===e.excercise.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsx)("h3",{className:"text-center",children:"Changes I would Like to make: "}),Object(l.jsxs)("h5",{className:"text-center",children:['"',e.changes.toString(),'"']}),Object(l.jsx)("h3",{className:"text-center",children:"Additional Comments: "}),Object(l.jsxs)("h5",{className:"text-center",children:['"',e.comments.toString(),'"']})]},e.id)}))]}):this.state.goodDaysOnly?Object(l.jsxs)("div",{id:"previousDays",style:{display:"none"},children:[Object(l.jsx)("h2",{class:"text-center py-4",children:"Previous Days"}),c,Object(l.jsxs)("ul",{class:"nav nav-pills",children:[Object(l.jsx)("li",{class:"nav-item",children:n}),Object(l.jsx)("li",{class:"nav-item",children:i}),Object(l.jsx)("li",{class:"nav-item",children:r})]}),s.map((function(e){return Object(l.jsxs)("div",{style:{backgroundColor:"#161b22"},class:"card-body py-4 mt-3",children:[Object(l.jsxs)("h2",{className:"text-center",children:["Date: ",Object(l.jsx)("i",{children:a(e.createdAt.toString())})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Overall: ","true"===e.good_day.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Enough Sleep? ","true"===e.enough_sleep.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you take your medicine? ","true"===e.medicine.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you try to eat healthy? ","true"===e.diet.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you excercise? ","true"===e.excercise.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsx)("h3",{className:"text-center",children:"Changes I would Like to make: "}),Object(l.jsxs)("h5",{className:"text-center",children:['"',e.changes.toString(),'"']}),Object(l.jsx)("h3",{className:"text-center",children:"Additional Comments: "}),Object(l.jsxs)("h5",{className:"text-center",children:['"',e.comments.toString(),'"']})]},e.id)}))]}):Object(l.jsxs)("div",{id:"previousDays",style:{display:"none"},children:[Object(l.jsx)("h2",{class:"text-center py-4",children:"Previous Days"}),c,Object(l.jsxs)("ul",{class:"nav nav-pills",children:[Object(l.jsx)("li",{class:"nav-item",children:n}),Object(l.jsx)("li",{class:"nav-item",children:i}),Object(l.jsx)("li",{class:"nav-item",children:r})]}),e.map((function(e){return Object(l.jsxs)("div",{style:{backgroundColor:"#161b22"},class:"card-body py-4 mt-3",children:[Object(l.jsxs)("h2",{className:"text-center",children:["Date: ",Object(l.jsx)("i",{children:a(e.createdAt.toString())})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Overall: ","true"===e.good_day.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Enough Sleep? ","true"===e.enough_sleep.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you take your medicine? ","true"===e.medicine.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you try to eat healthy? ","true"===e.diet.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsxs)("h3",{className:"text-center",children:["Did you excercise? ","true"===e.excercise.toString()?Object(l.jsx)(y.a,{className:"fa fa-user prefix success",icon:g.i,size:"lg"}):Object(l.jsx)(y.a,{className:"fa fa-user prefix failure",icon:g.h,size:"lg"})]}),Object(l.jsx)("h3",{className:"text-center",children:"Changes I would Like to make: "}),Object(l.jsxs)("h5",{className:"text-center",children:['"',e.changes.toString(),'"']}),Object(l.jsx)("h3",{className:"text-center",children:"Additional Comments: "}),Object(l.jsxs)("h5",{className:"text-center",children:['"',e.comments.toString(),'"']})]},e.id)}))]})}}]),s}(c.a.Component);function N(){var e=Object(a.useState)(),t=Object(p.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!0),i=Object(p.a)(n,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(O.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://highscore-api.herokuapp.com/day-details");case 2:t=e.sent,console.log(t.data),c(t.data),o(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r?Object(l.jsx)("p",{children:"Loading..."}):Object(l.jsx)(v,{data:s})}function D(e){e.name.name;return Object(l.jsx)(N,{})}function S(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{}),Object(l.jsx)(D,{name:"Dane"})]})}function k(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{}),Object(l.jsx)(D,{name:"Breezie"})]})}var w=s(51),C=s(8);function z(){return Object(l.jsx)(w.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{id:"nav",children:[Object(l.jsx)(w.b,{className:"hover",to:"/feel-good",children:Object(l.jsx)("img",{id:"navImage",src:"data:image/png;base64,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",alt:"Logo"})}),Object(l.jsxs)("div",{id:"navLinkContainer",children:[Object(l.jsx)(w.c,{className:"navLink",to:"/feel-good/dane",children:"Dane"}),Object(l.jsx)(w.c,{className:"navLink",to:"/feel-good/breezie",children:"Breezie"})]})]}),Object(l.jsxs)(C.c,{children:[Object(l.jsx)(C.a,{path:"/feel-good/dane",children:Object(l.jsx)(S,{})}),Object(l.jsx)(C.a,{path:"/feel-good/breezie",children:Object(l.jsx)(k,{})}),Object(l.jsx)(C.a,{path:"/feel-good",children:Object(l.jsx)(r,{})}),Object(l.jsx)(C.a,{path:"/",children:Object(l.jsx)(r,{})})]})]})})}function B(){return Object(l.jsx)(z,{})}var E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,477)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root")),E()}},[[476,1,2]]]);
//# sourceMappingURL=main.a8ea2536.chunk.js.map