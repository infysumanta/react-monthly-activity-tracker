(this["webpackJsonpreact-monthly-activity-tracker"]=this["webpackJsonpreact-monthly-activity-tracker"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),i=a(8),s=a.n(i),r=(a(14),a(6)),o=a(2),l=a(3),d=a(5),u=a(4),j=a(0),h=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("section",{className:"flex center height-100",children:Object(j.jsx)("div",{className:"donut"})})}}]),a}(n.Component),v=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={activity:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({activity:this.props.activity})}},{key:"render",value:function(){var t=this;return Object(j.jsx)(j.Fragment,{children:this.state.activity?Object(j.jsxs)("article",{className:"article-activity flex",children:[Object(j.jsx)("div",{className:"article-left flex-30 flex center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:this.state.activity.ActivityName}),Object(j.jsx)("h4",{children:this.state.activity.month.name})]})}),Object(j.jsx)("div",{className:"article-right flex-70 flex",children:this.state.activity.days.map((function(e,a){return Object(j.jsx)("a",{href:"#",className:e.isDone?"button active":"button",onClick:function(n){t.props.handleClickDay(e,a,t.props.dataIndex)},children:e.noOfDay},a)}))}),Object(j.jsx)("div",{className:"close-div",children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-circle",viewBox:"0 0 16 16",onClick:function(e){t.props.removeActivity(t.props.dataIndex)},children:[Object(j.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(j.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})})]}):Object(j.jsx)(h,{})})}}]),a}(n.Component),y=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).removeActivity=function(t){n.props.removeEntry(t)},n.handleClickDay=function(t,e,a){var c=Object(r.a)(n.state.data);c[a].days[e].isDone=!c[a].days[e].isDone,n.props.updateMainData(c)},n.state={data:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.props.data})}},{key:"componentDidUpdate",value:function(t,e){e.data!==this.props.data&&this.setState({data:this.props.data})}},{key:"render",value:function(){var t=this;return Object(j.jsx)(j.Fragment,{children:this.state.data?Object(j.jsx)("section",{className:"activityDiv-sec container",children:this.state.data.map((function(e,a){return Object(j.jsx)(v,{activity:e,dataIndex:a,handleClickDay:t.handleClickDay,removeActivity:t.removeActivity},e.ActivityName)}))}):Object(j.jsx)(h,{})})}}]),a}(n.Component),m=a(9),b=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleChange=function(t,e){n.setState(Object(m.a)({},e,t.target.value))},n.state={},n}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("section",{className:"header",children:[Object(j.jsx)("h1",{className:"text-center",children:"Monthly Activity Tracker"}),Object(j.jsxs)("form",{className:"flex",onSubmit:function(e){e.preventDefault(),e.target.input.value&&t.props.addNewActivity(e)},children:[Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("label",{htmlFor:"input"}),Object(j.jsx)("input",{type:"text",name:"input",id:"input",placeholder:"e.g. Learn React"}),Object(j.jsx)("span",{})]}),Object(j.jsx)("button",{type:"submit",children:"Add Activity"})]})]})}}]),a}(n.Component),O=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).removeEntry=function(t){var e=Object(r.a)(n.state.data);e.splice(t,1),n.setState((function(t){return localStorage.setItem("data",JSON.stringify(e)),{data:e}}))},n.updateMainData=function(t){n.setState((function(e){return localStorage.setItem("data",JSON.stringify(t)),{data:t}}))},n.monthFinder=function(t){return{0:{name:"January ",days:31},1:{name:"February  ",days:28},2:{name:"March  ",days:31},3:{name:"April  ",days:30},4:{name:"May  ",days:31},5:{name:"June  ",days:30},6:{name:"July  ",days:31},7:{name:"August  ",days:31},8:{name:"September ",days:30},9:{name:"October ",days:31},10:{name:"November ",days:30},11:{name:"December ",days:31}}[t]},n.addNewActivity=function(t){for(var e=t.target.input.value,a=new Date,c=n.monthFinder(a.getMonth()),i=[],s=0;s<c.days;s++)i[s]={noOfDay:s+1,isDone:!1};var r={ActivityName:e,month:c,days:i};console.log("newly created Data",r),n.setState((function(t){return t.data?(localStorage.setItem("data",JSON.stringify(t.data.concat(r))),{data:t.data.concat(r)}):(localStorage.setItem("data",JSON.stringify([r])),{data:[r]})})),t.target.input.value=null},n.state={data:[{ActivityName:"",month:{},days:[]}]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("data"));this.setState({data:t})}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{addNewActivity:this.addNewActivity}),this.state.data?this.state.data.length>0?Object(j.jsx)(y,{data:this.state.data,updateMainData:this.updateMainData,removeEntry:this.removeEntry}):Object(j.jsx)("section",{className:"error-sec",children:Object(j.jsx)("h2",{className:"text-center",children:"No Activity To Display"})}):""]})}}]),a}(n.Component);var p=function(){return Object(j.jsx)(O,{})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fcbafe00.chunk.js.map