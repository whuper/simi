webpackJsonp([1],{"+7Ze":function(t,e){},"2+Hf":function(t,e){},"3YEE":function(t,e){},COLv:function(t,e){},HAPY:function(t,e){},KcW8:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("NYxO"),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},r={data:function(){return{showNavigation:!1,showToolBar:!0}},computed:i({},Object(n.c)(["userInfo"]),Object(n.d)({title:function(t){return t.report.title}})),created:function(){},methods:i({},Object(n.b)(["updateinfo"]),{login:function(){this.$router.push("/login")},logout:function(){this.isLogouting=!0,this.delCookie("userId"),this.delCookie("passWord"),localStorage.removeItem("userInfo"),this.$store.commit("updateinfo_req",{}),this.isLogouting=!1,this.$router.push("/login/")}})},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu-links"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showToolBar,expression:"!showToolBar"}],staticClass:"text-right"},[s("md-button",{staticClass:"expand-more",on:{click:function(e){t.showToolBar=!0}}},[s("md-icon",[t._v("expand_more")])],1)],1),t._v(" "),s("md-toolbar",{directives:[{name:"show",rawName:"v-show",value:t.showToolBar,expression:"showToolBar"}],staticClass:"md-primary"},[s("md-button",{directives:[{name:"show",rawName:"v-show",value:t.userInfo.username,expression:"userInfo.username"}],staticClass:"md-icon-button",on:{click:function(e){t.showNavigation=!0}}},[s("md-icon",[t._v("menu")])],1),t._v(" "),s("span",{staticClass:"md-title"},[s("md-icon",{directives:[{name:"show",rawName:"v-show",value:!t.userInfo.username,expression:"!userInfo.username"}]},[t._v("sentiment_very_satisfied")]),t._v(" \n\t\t\t\t"+t._s(t.title)+" ")],1),t._v(" "),s("div",{staticClass:"md-toolbar-section-end"},[s("md-button",{on:{click:function(e){t.showToolBar=!1}}},[s("md-icon",[t._v("expand_less")])],1)],1)],1),t._v(" "),s("md-drawer",{attrs:{"md-active":t.showNavigation},on:{"update:mdActive":function(e){t.showNavigation=e}}},[s("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[s("span",{staticClass:"md-title"},[s("md-icon",[t._v("person")]),t._v(" "+t._s(t.userInfo.username)+" ")],1)]),t._v(" "),s("md-list",[s("md-list-item",[s("router-link",{attrs:{to:"/report"}},[s("md-button",[s("md-icon",[t._v("chrome_reader_mode")]),t._v("  预览 ")],1)],1)],1),t._v(" "),s("md-list-item",[s("router-link",{attrs:{to:"/"}},[s("md-button",[s("md-icon",[t._v("home")]),t._v("\n          主页")],1)],1)],1),t._v(" "),s("md-list-item",[s("router-link",{attrs:{to:"/login"}},[s("md-button",[s("md-icon",[t._v("arrow_right_alt")]),t._v("\n          登录")],1)],1)],1)],1),t._v(" "),s("md-list",[s("md-subheader",[t._v("其他")]),t._v(" "),s("md-list-item",[s("md-button",{staticClass:"md-raised",on:{click:t.logout}},[s("md-icon",[t._v("eject")]),t._v(" "),s("span",[t._v("注销")])],1)],1)],1)],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"toolbar clearfix"},[e("div",{staticClass:"user "},[e("span",{staticClass:"info"})])])}]};var l=s("VU/8")(r,o,!1,function(t){s("+7Ze")},null,null).exports,c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},d={components:{HeaderBar:l},name:"App",data:function(){return{title:""}},watch:{$route:function(){console.log("路由改变"),this.checkLogin()}},mounted:function(){this.getUserInfo()},created:function(){this.checkLogin()},computed:c({showSnackbar:{get:function(){return this.$store.state.report.showSnackbar},set:function(){}}},Object(n.d)({bMsg:function(t){return t.report.bMsg}})),methods:c({},Object(n.b)(["setShowSnackbar"]),{getUserInfo:function(){this.getCookie("userId")?(this.userInfo=JSON.parse(localStorage.getItem("userInfo")),console.log("## userInfo",this.userInfo),this.$store.commit("updateinfo_req",this.userInfo)):this.$router.push("/login")},checkLogin:function(){if(this.getCookie("userId")&&localStorage.getItem("userInfo")){var t=JSON.parse(localStorage.getItem("userInfo"));this.$store.commit("updateinfo_req",t)}else console.log("###没有登录"),this.$router.push("/login")},closebar:function(){this.setShowSnackbar(!1)}})},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-container md-layout-column ",attrs:{id:"app"}},[s("div",{staticClass:"header"},[s("header-bar")],1),t._v(" "),s("div",{staticClass:"page"},[s("transition",{attrs:{name:"slide"}},[s("router-view")],1)],1),t._v(" "),s("md-snackbar",{attrs:{"md-position":"center","md-duration":1/0,"md-active":t.showSnackbar,"md-persistent":!0},on:{"update:mdActive":function(e){t.showSnackbar=e}}},[s("span",[t._v(t._s(t.bMsg))]),t._v(" "),s("md-button",{staticClass:"md-primary md-raised",on:{click:t.closebar}},[t._v("忽略")])],1)],1)},staticRenderFns:[]};var m=s("VU/8")(d,u,!1,function(t){s("UaWV")},null,null).exports,v=s("/ocq"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},_={name:"task",data:function(){return{msg:"工作周报",message:"",currentFirstDate:"",movingDom:"",taskIsMoving:!1,extraIsMoving:!1,plansIsMoving:!1,schedules:{},newItemIndex:null,twinkleOut:null,isSubmiting:!1}},computed:h({},Object(n.c)(["userInfo"])),beforeRouteLeave:function(t,e,s){this.updateSchedules(this.schedules),s()},mounted:function(){this.currentWeekDays=this.getWeekDays(new Date);var t=this.addDate(this.currentWeekDays[0].dateStr,7);this.nextWeekDays=this.getWeekDays(new Date(t)),this.setTitle("工作周报"),this.$store.state.report.schedules.tasks&&this.$store.state.report.schedules.tasks.length>0?this.schedules=this.$store.state.report.schedules:(this.schedules=this.getSampleData(),console.log("this.schedules",this.schedules),this.weekNumber=this.getWeekOfYear(),this.getSchedules())},methods:h({},Object(n.b)(["setTitle","updateSchedules","setShowSnackbar"]),{dosubmit:function(){if(this.checkForm());},checkForm:function(){var t=this;return this.schedules.plans.length<1?(this.setShowSnackbar("请填写下周计划"),!1):(this.schedules.plans.forEach(function(e){if(!e.title||!e.title.replace(/(^\s*)|(\s*$)/g,""))return t.setShowSnackbar("下周计划没有填写完整"),!1;console.log("下周计划 ok")}),this.schedules.tasks.length<1?(this.setShowSnackbar("请填写本周任务"),!1):(this.schedules.tasks.forEach(function(e){if(!(e.title&&e.percent&&e.title.replace(/(^\s*)|(\s*$)/g,"")))return t.setShowSnackbar("本周工作信息不完整,请检查"),document.body.scrollTop=0,document.documentElement.scrollTop=0,!1;console.log("本周任务 ok")}),this.schedules.extraTasks.length>0&&this.schedules.extraTasks.forEach(function(e){if(!e.title||!e.title.replace(/(^\s*)|(\s*$)/g,""))return t.setShowSnackbar("额外任务信息不完整,请检查"),!1}),!0))},getSchedules:function(){var t=this,e=this.$qs.stringify({userId:this.userInfo.userId,weekNumber:this.weekNumber-1});this.$axios.post("/simi/index.php/report/getSchedules",e).then(function(e){e.data?t.renderData(e.data):t.setShowSnackbar("错误#02")}).catch(function(t){console.log(t)})},renderData:function(t){if(t.plans)this.schedules.tasks=JSON.parse(t.plans),this.schedules.tasks.forEach(function(t){t.finishDate=t.scheduledDate,t.remark&&"null"!=t.remark||(t.remark=" ")});else{var e=this.getSampleData("tasks");this.schedules.tasks=[e]}},addTask:function(t,e){if(t){if(0==e||e)return this.schedules[t].splice(e+1,0,JSON.parse(JSON.stringify(this.schedules[t][e]))),void this.twinkle(e+1,t);var s=this.getSampleData(t);if(s.scheduledDate)0!=new Date(s.scheduledDate).getDay()&&(s.scheduledDate=this.addDate(s.scheduledDate,1));if(s.finishDate)0!=new Date(s.finishDate).getDay()&&(s.finishDate=this.addDate(s.finishDate,1));s.title="",s.title,this.schedules[t].push(s)}},removeTask:function(t,e){(0==e||e)&&this.schedules[t].splice(e,1)},clearTask:function(t,e){this.schedules[t][e].title="",this.schedules[t][e].percent=null,this.schedules[t][e].remark=""},getSampleData:function(t){return"tasks"==t?{title:"",scheduledDate:this.currentWeekDays[0].dateStr,percent:null,finishDate:this.currentWeekDays[0].dateStr,remark:""}:"plans"==t?{title:"",scheduledDate:this.nextWeekDays[0].dateStr,remark:""}:"extraTasks"==t?{title:" ",hours:"2",finishDate:this.currentWeekDays[0].dateStr,remark:" "}:{tasks:[{title:" ",scheduledDate:this.currentWeekDays[0].dateStr,percent:null,finishDate:this.currentWeekDays[0].dateStr,remark:" "}],extraTasks:[],plans:[{title:" ",scheduledDate:this.nextWeekDays[0].dateStr,remark:" "}]}},formatDate:function(t){return{dateStr:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),week:["日","一","二","三","四","五","六"][t.getDay()],index:t.getDay()}},getWeekDays:function(t){var e=t.getDay()-1;t.setDate(t.getDate()+-1*e),this.currentFirstDate=new Date(t);for(var s=[],a=0;a<7;a++){var n="";0==a?n=this.formatDate(t):(t.setDate(t.getDate()+1),n=this.formatDate(t)),s.push(n)}return s},getWeekOfYear:function(){var t=new Date,e=new Date(t.getFullYear(),0,1),s=e.getDay(),a=1;0!=s&&(a=7-s+1),e=new Date(t.getFullYear(),0,1+a);var n=Math.ceil((t.valueOf()-e.valueOf())/864e5);return Math.ceil(n/7)+1},addDate:function(t,e){console.log("date",t);var s=new Date(t.replace(/-/g,"/"));s.setDate(s.getDate()+e);var a=s.getMonth()+1;return s.getFullYear()+"-"+a+"-"+s.getDate()},drag:function(t,e){this.movingDom=t.currentTarget,this[e]=!0},drop:function(t,e){t.preventDefault(),this[e]=!1;var s="";switch(e){case"taskIsMoving":s="tasks";break;case"extraIsMoving":s="extraTasks";break;case"plansIsMoving":s="plans";break;default:return}for(var a=t.target.parentNode;"TR"!=a.tagName;)a=a.parentNode;for(;"TR"!=this.movingDom.tagName;)this.movingDom=this.movingDom.parentNode;var n=a.getAttribute("id"),i=this.movingDom.getAttribute("id");if(Math.abs(n-i)>=2)if(i>n){var r=JSON.stringify(this.schedules[s][i]);this.schedules[s].splice(i,1),this.schedules[s].splice(n,0,JSON.parse(r)),this.twinkle(n,s)}else this.twinkle(n-1,s),this.schedules[s].splice(n,0,this.schedules[s][i]),this.schedules[s].splice(i,1)},allowDrop:function(t){t.preventDefault()},shuffle:function(){this.tasks.reverse()},twinkle:function(t,e){clearTimeout(this.twinkleOut),this.newItemIndex=e+t;var s=this;this.twinkleOut=setTimeout(function(){s.newItemIndex=null},2e3)},allDone:function(){var t=this;this.setShowSnackbar("还没做"),setTimeout(function(){t.setShowSnackbar(!1)},1e3)}})},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task md-layout-item md-size-90 md-large-size-80 md-xlarge-size-60 ma"},[s("form",{attrs:{novalidate:""}},[s("transition-group",{staticClass:"report-table md-card",class:{move:t.taskIsMoving},attrs:{name:"list",tag:"md-table"}},[s("md-table-toolbar",{key:"1515"},[s("div",{staticClass:"md-toolbar-section-start"},[s("h1",{staticClass:"md-title"},[t._v("本周工作小结")])]),t._v(" "),s("div",{staticClass:"md-toolbar-section-end"},[s("md-button",{staticClass:"md-raised md-primary",on:{click:t.allDone}},[t._v(" 一键完成")])],1)]),t._v(" "),s("md-table-row",{key:15},[s("md-table-head"),t._v(" "),s("md-table-head",[t._v("内容")]),t._v(" "),s("md-table-head",[t._v("计划日期")]),t._v(" "),s("md-table-head",[t._v("完成百分比")]),t._v(" "),s("md-table-head",[t._v("完成日期")]),t._v(" "),s("md-table-head",[t._v("备注 ")]),t._v(" "),s("md-table-head",[t._v("操作")])],1),t._v(" "),t._l(t.schedules.tasks,function(e,a,n){return s("md-table-row",{key:a,staticClass:"item ",class:{newItem:t.newItemIndex=="tasks"+a},attrs:{id:a},on:{drop:function(e){t.drop(e,"taskIsMoving")},dragover:function(e){t.allowDrop(e,"taskIsMoving")}}},[s("md-table-cell",{staticClass:"md-table-cell w-50"},[s("p",{staticClass:"move",attrs:{draggable:"true"},on:{dragstart:function(e){t.drag(e,"taskIsMoving")}}},[s("md-icon",[t._v("arrow_right")])],1)]),t._v(" "),s("md-table-cell",[s("md-field",[s("md-input",{model:{value:e.title,callback:function(s){t.$set(e,"title",s)},expression:"task.title"}})],1)],1),t._v(" "),s("md-table-cell",{staticClass:"w-160"},[s("div",{staticClass:"md-layout-item"},[s("md-field",[s("md-select",{model:{value:e.scheduledDate,callback:function(s){t.$set(e,"scheduledDate",s)},expression:"task.scheduledDate"}},t._l(t.currentWeekDays,function(e,a){return s("md-option",{key:a,attrs:{value:e.dateStr}},[t._v("周"+t._s(e.week)+"("+t._s(e.dateStr)+")")])}))],1)],1)]),t._v(" "),s("md-table-cell",{staticClass:"percent"},[s("md-field",[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.percent,expression:"task.percent",modifiers:{number:!0}}],attrs:{type:"range"},domProps:{value:e.percent},on:{__r:function(s){t.$set(e,"percent",t._n(s.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "+t._s(e.percent)+"%\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),s("md-table-cell",{staticClass:"w-160"},[s("div",{staticClass:"md-layout-item"},[s("md-field",[s("md-select",{model:{value:e.finishDate,callback:function(s){t.$set(e,"finishDate",s)},expression:"task.finishDate"}},t._l(t.currentWeekDays,function(e,a){return s("md-option",{key:a,attrs:{value:e.dateStr}},[t._v("周"+t._s(e.week)+"("+t._s(e.dateStr)+")")])}))],1)],1)]),t._v(" "),s("md-table-cell",[s("md-field",[s("md-input",{model:{value:e.remark,callback:function(s){t.$set(e,"remark",s)},expression:"task.remark"}})],1)],1),t._v(" "),s("md-table-cell",[s("md-menu",{attrs:{"md-size":"small"}},[s("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[s("md-icon",[t._v("more_vert")])],1),t._v(" "),s("md-menu-content",[s("md-menu-item",{on:{click:function(e){t.addTask("tasks",a)}}},[s("md-icon",[t._v("note_add")]),t._v("\n\t\t\t 复制\n\t\t\t\t ")],1),t._v(" "),s("md-menu-item",{directives:[{name:"show",rawName:"v-show",value:t.schedules.tasks.length>1,expression:"schedules.tasks.length > 1"}],on:{click:function(e){t.removeTask("tasks",a)}}},[s("md-icon",[t._v("remove")]),t._v("\n\t\t\t\t移除\n\t\t\t\t ")],1),t._v(" "),s("md-menu-item",{on:{click:function(e){t.clearTask("tasks",a)}}},[s("md-icon",[t._v("delete_sweep")]),t._v("\n\t\t\t\t擦除\n\t\t\t\n\t\t\t\t")],1)],1)],1)],1)],1)})],2),t._v(" "),s("div",{staticClass:"action text-r"},[s("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){t.addTask("tasks",null)}}},[s("md-icon",[t._v("add")]),t._v(" "),s("md-tooltip",{attrs:{"md-direction":"left"}},[t._v("添加任务")])],1)],1),t._v(" "),s("transition-group",{staticClass:"report-table md-card",class:{move:t.extraIsMoving},attrs:{name:"list",tag:"md-table"}},[s("md-table-toolbar",{key:"1616"},[s("h1",{staticClass:"md-title"},[t._v("本周额外任务")])]),t._v(" "),s("md-table-row",{key:"161"},[s("md-table-head"),t._v(" "),s("md-table-head",[t._v("内容")]),t._v(" "),s("md-table-head",[t._v("投入时间(小时)")]),t._v(" "),s("md-table-head",[t._v("完成日期")]),t._v(" "),s("md-table-head",[t._v("备注 ")]),t._v(" "),s("md-table-head",[t._v("操作")])],1),t._v(" "),t._l(t.schedules.extraTasks,function(e,a,n){return s("md-table-row",{key:a,staticClass:"item",class:{newItem:t.newItemIndex=="extraTasks"+a},attrs:{id:a},on:{drop:function(e){t.drop(e,"extraIsMoving")},dragover:function(e){t.allowDrop(e)}}},[s("md-table-cell",{staticClass:"md-table-cell "},[s("p",{staticClass:"move",attrs:{draggable:"true"},on:{dragstart:function(e){t.drag(e,"extraIsMoving")}}},[s("md-icon",[t._v("arrow_right")])],1)]),t._v(" "),s("md-table-cell",[s("md-field",[s("md-input",{model:{value:e.title,callback:function(s){t.$set(e,"title",s)},expression:"task.title"}})],1)],1),t._v(" "),s("md-table-cell",{staticClass:"w-160"},[s("md-field",[s("md-input",{model:{value:e.hours,callback:function(s){t.$set(e,"hours",s)},expression:"task.hours"}})],1)],1),t._v(" "),s("md-table-cell",{staticClass:"w-160"},[s("div",{staticClass:"md-layout-item"},[s("md-field",[s("md-select",{model:{value:e.finishDate,callback:function(s){t.$set(e,"finishDate",s)},expression:"task.finishDate"}},t._l(t.currentWeekDays,function(e,a){return s("md-option",{key:a,attrs:{value:e.dateStr}},[t._v("周"+t._s(e.week)+"("+t._s(e.dateStr)+")")])}))],1)],1)]),t._v(" "),s("md-table-cell",{staticClass:"w-250"},[s("md-field",[s("md-input",{model:{value:e.remark,callback:function(s){t.$set(e,"remark",s)},expression:"task.remark"}})],1)],1),t._v(" "),s("md-table-cell",[s("md-menu",{attrs:{"md-size":"small"}},[s("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[s("md-icon",[t._v("more_vert")])],1),t._v(" "),s("md-menu-content",[s("md-menu-item",{on:{click:function(e){t.addTask("extraTasks",a)}}},[s("md-icon",[t._v("note_add")]),t._v("\n\t\t\t 复制\n\t\t\t\t ")],1),t._v(" "),s("md-menu-item",{on:{click:function(e){t.removeTask("extraTasks",a)}}},[s("md-icon",[t._v("remove")]),t._v("\n\t\t\t\t移除\n\t\t\t\t ")],1),t._v(" "),s("md-menu-item",{on:{click:function(e){t.clearTask("extraTasks",a)}}},[s("md-icon",[t._v("delete_sweep")]),t._v("\n\t\t\t\t擦除\t\t\t\n\t\t\t\t")],1)],1)],1)],1)],1)})],2),t._v(" "),s("div",{staticClass:"action text-r"},[s("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){t.addTask("extraTasks",null)}}},[s("md-icon",[t._v("add")]),t._v(" "),s("md-tooltip",{attrs:{"md-direction":"left"}},[t._v("添加额外任务")])],1)],1),t._v(" "),s("transition-group",{staticClass:"report-table md-card",class:{move:t.plansIsMoving},attrs:{name:"list",tag:"md-table"}},[s("md-table-toolbar",{key:"1717"},[s("h1",{staticClass:"md-title"},[t._v("下周计划")])]),t._v(" "),s("md-table-row",{key:"171"},[s("md-table-head"),t._v(" "),s("md-table-head",[t._v("内容")]),t._v(" "),s("md-table-head",[t._v("计划完成日期")]),t._v(" "),s("md-table-head",[t._v("备注")]),t._v(" "),s("md-table-head",[t._v("操作")])],1),t._v(" "),t._l(t.schedules.plans,function(e,a,n){return s("md-table-row",{key:a,staticClass:"item",class:{newItem:t.newItemIndex=="plans"+a},attrs:{id:a},on:{drop:function(e){t.drop(e,"plansIsMoving")},dragover:function(e){t.allowDrop(e)}}},[s("md-table-cell",{staticClass:"md-table-cell "},[s("p",{staticClass:"move",attrs:{draggable:"true"},on:{dragstart:function(e){t.drag(e,"plansIsMoving")}}},[s("md-icon",[t._v("arrow_right")])],1)]),t._v(" "),s("md-table-cell",[s("md-field",[s("md-input",{model:{value:e.title,callback:function(s){t.$set(e,"title",s)},expression:"plan.title"}})],1)],1),t._v(" "),s("md-table-cell",{staticClass:"w-160"},[s("div",{staticClass:"md-layout-item"},[s("md-field",[s("md-select",{model:{value:e.scheduledDate,callback:function(s){t.$set(e,"scheduledDate",s)},expression:"plan.scheduledDate"}},t._l(t.nextWeekDays,function(e,a){return s("md-option",{key:a,attrs:{value:e.dateStr}},[t._v("周"+t._s(e.week)+"("+t._s(e.dateStr)+")")])}))],1)],1)]),t._v(" "),s("md-table-cell",[s("md-field",[s("md-input",{model:{value:e.remark,callback:function(s){t.$set(e,"remark",s)},expression:"plan.remark"}})],1)],1),t._v(" "),s("md-table-cell",[s("md-menu",{attrs:{"md-size":"small"}},[s("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[s("md-icon",[t._v("more_vert")])],1),t._v(" "),s("md-menu-content",[s("md-menu-item",{on:{click:function(e){t.addTask("plans",a)}}},[s("md-icon",[t._v("note_add")]),t._v("\n\t\t\t 复制\n\t\t\t\t ")],1),t._v(" "),s("md-menu-item",{directives:[{name:"show",rawName:"v-show",value:t.schedules.plans.length>1,expression:"schedules.plans.length > 1"}],on:{click:function(e){t.removeTask("plans",a)}}},[s("md-icon",[t._v("remove")]),t._v("\n\t\t\t\t移除\n\t\t\t\t ")],1),t._v(" "),s("md-menu-item",{on:{click:function(e){t.clearTask("plans",a)}}},[s("md-icon",[t._v("delete_sweep")]),t._v("\n\t\t\t\t擦除\t\t\t\n\t\t\t\t")],1)],1)],1)],1)],1)})],2),t._v(" "),s("div",{staticClass:"action text-r"},[s("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){t.addTask("plans",null)}}},[s("md-icon",[t._v("add")]),t._v(" "),s("md-tooltip",{attrs:{"md-direction":"left"}},[t._v("添加下周计划")])],1)],1),t._v(" "),s("p",{staticClass:"text-center"},[s("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:t.isSubmiting},on:{click:t.dosubmit}},[t._v("  提交")])],1)],1)])},staticRenderFns:[]};var p=s("VU/8")(_,f,!1,function(t){s("utLe")},null,null).exports,k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("h2",[this._v("list")])])},staticRenderFns:[]};var b=s("VU/8")({name:"ListPage",data:function(){return{msg:"Welcome to ListPage"}}},k,!1,function(t){s("COLv")},"data-v-77fffd28",null).exports,g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("detail")]),t._v(" "),s("p",[t._v("\n\t    "+t._s(t.$route.params.id)+"\n\t  ")]),t._v(" "),s("h3",[t._v(" "+t._s(t.product.title)+" ")]),t._v(" "),s("p",[t._v("\n\t  "+t._s(t.product.content)+"\n\t  ")]),t._v(" "),s("p",[t._v("\n\t  "+t._s(t.product.date)+"\n\t  ")])])},staticRenderFns:[]};var w=s("VU/8")({name:"DetailPage",data:function(){return{msg:"Welcome to DetailPage",product:{}}},computed:{},created:function(){this.getDetail(this.$route.params.id)},methods:{getDetail:function(t){var e=this;this.$axios.get("/news/detail/1").then(function(t){e.product=t.data.detail,e.msg="sad"})}}},g,!1,function(t){s("YAbn")},"data-v-a8a9f12c",null).exports,C={name:"NewsItem",props:{newsDate:Object},data:function(){return{}},computed:{},methods:{jumpPage:function(){console.log("this",this),this.$router.push({name:"detail",params:{id:1}})}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"news-list"},[s("h3",{on:{click:t.jumpPage}},[t._v(t._s(t.newsDate.title))]),t._v(" "),s("p",{staticClass:"Cleft"}),t._v(" "),s("p",{staticClass:"Cright"},[s("span",{staticClass:"fl"},[t._v(t._s(t.newsDate.author_name))]),t._v(" "),s("span",[t._v(t._s(t.newsDate.date))]),t._v(" "),s("router-link",{staticClass:"title",attrs:{to:{name:"detail",params:{id:t.newsDate.id}}}},[t._v(t._s("view"))])],1)])},staticRenderFns:[]};var y={name:"News",data:function(){return{newsListShow:[]}},components:{NewsItem:s("VU/8")(C,D,!1,function(t){s("VnDM")},"data-v-6e327c72",null).exports},created:function(){this.setNewsApi()},methods:{setNewsApi:function(){var t=this;this.$axios.get("/news/list").then(function(e){console.log(e),t.newsListShow=e.data.articles})}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list"},this._l(this.newsListShow,function(t,s){return e("ul",[e("news-item",{key:s,attrs:{newsDate:t}})],1)}))},staticRenderFns:[]};var x=s("VU/8")(y,S,!1,function(t){s("KcW8")},null,null).exports,I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},T={name:"Login",data:function(){return{msg:"Welcome to Log on",isLoging:!1,userId:"0147",passwd:"123456"}},computed:I({},Object(n.d)(["showSnackbar"])),methods:I({},Object(n.b)(["setShowSnackbar"]),{doLogin:function(t){var e=this;this.$store.commit("updateSchedules_req",{});var s=this.$qs.stringify({userId:this.userId,passWord:this.passwd});this.$axios.post("/simi/index.php/user/login",s).then(function(t){if(t.data&&t.data.userId){e.setCookie("userId",t.data.userId,720),e.setCookie("passWord",t.data.password,720),localStorage.setItem("userInfo",JSON.stringify(t.data)),e.$store.commit("updateinfo_req",t.data),e.setShowSnackbar("登录成功"),setTimeout(function(){e.$router.push("/"),e.setShowSnackbar(!1)},500)}else e.setShowSnackbar("无法登录 错误#01")}).catch(function(t){this.setShowSnackbar("无法登录,服务器故障.."),console.log(t)})}})},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[s("form",{staticClass:"md-layout",attrs:{novalidate:""}},[s("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100 login-box"},[s("md-card-header",[s("div",{staticClass:"md-title text-center"},[t._v("用户登录")])]),t._v(" "),s("md-card-content",[s("md-field",[s("label",[t._v("请输入用户名(工号)")]),t._v(" "),s("md-input",{model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}})],1),t._v(" "),s("md-field",[s("label",[t._v("密码")]),t._v(" "),s("md-input",{model:{value:t.passwd,callback:function(e){t.passwd=e},expression:"passwd"}})],1),t._v(" "),s("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:!t.userId||!t.passwd},on:{click:t.doLogin}},[t._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var $=s("VU/8")(T,O,!1,function(t){s("v9BR")},"data-v-5a2cce04",null).exports,N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},j={mounted:function(){this.getAllProducts()},computed:N({},Object(n.c)(["allProducts"])),methods:N({},Object(n.b)(["getAllProducts"]))},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-container"},t._l(t.allProducts,function(e){return s("div",{staticClass:"product"},[s("router-link",{staticClass:"title",attrs:{to:{name:"product",params:{id:e.id}}}},[t._v(t._s(e.title))]),t._v(" "),s("span",{staticClass:"price"},[t._v("$ "+t._s(e.price))])],1)}))},staticRenderFns:[]};var P=s("VU/8")(j,M,!1,function(t){s("nkcH")},null,null).exports,W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},q={computed:W({},Object(n.c)({products:"cartProducts"}),{checkoutStatus:function(){return this.$store.state.cart.lastCheckout},total:function(){return this.products.reduce(function(t,e){return t+e.price*e.quantity},0)}}),methods:W({},Object(n.b)(["checkout"]))},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart"},[s("p",{directives:[{name:"show",rawName:"v-show",value:!t.products.length,expression:"!products.length"}]},[s("i",[t._v("Please add some products to cart.")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.products.length>0,expression:"products.length > 0"}]},[s("table",{staticClass:"checkout-table"},[t._m(0),t._v(" "),s("tbody",[t._l(t.products,function(e){return s("tr",[s("td",[s("router-link",{attrs:{to:{name:"product",params:{id:e.id}}}},[t._v(t._s(e.title))])],1),t._v(" "),s("td",[t._v("$ "+t._s(e.price))]),t._v(" "),s("td",[t._v(t._s(e.quantity))]),t._v(" "),s("td",[t._v("$ "+t._s(e.price*e.quantity))])])}),t._v(" "),s("tr",{staticClass:"total"},[t._m(1),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("$ "+t._s(t.total))])])],2)]),t._v(" "),s("p",[s("button",{staticClass:"checkout-button",attrs:{disabled:!t.products.length},on:{click:function(e){t.checkout(t.products)}}},[t._v("Checkout")])])]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.checkoutStatus,expression:"checkoutStatus"}]},[t._v("Checkout "+t._s(t.checkoutStatus)+".")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Quantity")]),this._v(" "),e("th",[this._v("Per Unit")]),this._v(" "),e("th",[this._v("Total")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("b",[this._v("TOTAL")])])}]};var A=s("VU/8")(q,L,!1,function(t){s("3YEE")},null,null).exports,E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},F={mounted:function(){this.getAllProducts()},computed:E({},Object(n.c)(["allProducts"]),{product:function(){var t=parseInt(this.$route.params.id);return this.allProducts.find(function(e){return e.id===t})||{}}}),methods:E({},Object(n.b)(["getAllProducts","addToCart"]))},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-item"},[s("router-link",{staticClass:"back-link",attrs:{to:"/productList"}},[t._v("BACK")]),t._v(" "),s("div",{staticClass:"product-title"},[t._v(t._s(t.product.title))]),t._v(" "),s("div",{staticClass:"product-details"},[s("div",{staticClass:"inventory"},[t._v("In Stock: "+t._s(t.product.inventory))]),t._v(" "),s("button",{staticClass:"add-button",attrs:{disabled:!t.product.inventory},on:{click:function(e){t.addToCart(t.product)}}},[t._v(t._s(t.product.inventory>0?"Add to cart":"Out Of Stock"))])])],1)},staticRenderFns:[]};var U=s("VU/8")(F,R,!1,function(t){s("2+Hf")},null,null).exports,V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},Y={name:"Report",data:function(){return{msg:""}},methods:V({},Object(n.b)(["setTitle"])),mounted:function(){this.setTitle("周报预览")},computed:V({},Object(n.c)(["schedules"]))},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"report md-layout-item md-size-90 md-large-size-80 md-xlarge-size-60 ma"},[s("md-table",{attrs:{"md-card":""}},[s("md-table-toolbar",[s("h1",{staticClass:"md-title"},[t._v("本周任务")])]),t._v(" "),s("md-table-row",[s("md-table-head",[t._v("内容")]),t._v(" "),s("md-table-head",[t._v("计划日期")]),t._v(" "),s("md-table-head",[t._v("完成百分比")]),t._v(" "),s("md-table-head",[t._v("完成日期")]),t._v(" "),s("md-table-head",[t._v("备注")])],1),t._v(" "),t._l(t.schedules.tasks,function(e,a,n){return s("md-table-row",{key:a,attrs:{id:a}},[s("md-table-cell",[t._v("  "+t._s(e.title)+" ")]),t._v(" "),s("md-table-cell",[t._v("  "+t._s(e.scheduledDate)+" ")]),t._v(" "),s("md-table-cell",[t._v("  "+t._s(e.percent+"%")+" ")]),t._v(" "),s("md-table-cell",[t._v("  "+t._s(e.FinishDate)+" ")]),t._v(" "),s("md-table-cell",[t._v("  "+t._s(e.remark)+" ")])],1)})],2),t._v(" "),s("p"),t._v(" "),s("md-table",{attrs:{"md-card":""}},[s("md-table-toolbar",[s("h1",{staticClass:"md-title"},[t._v("本周额外任务")])]),t._v(" "),s("md-table-row",[s("md-table-head",[t._v("内容")]),t._v(" "),s("md-table-head",[t._v("投入时间")]),t._v(" "),s("md-table-head",[t._v("完成日期")]),t._v(" "),s("md-table-head",[t._v("备注")])],1),t._v(" "),t._l(t.schedules.extratTasks,function(e,a,n){return s("md-table-row",{key:a,attrs:{id:a}},[s("md-table-cell",[t._v("  "+t._s(e.title)+" ")]),t._v(" "),s("md-table-cell",[t._v("  "+t._s(e.hours)+" 小时 ")]),t._v(" "),s("md-table-cell",[t._v("  "+t._s(e.FinishDate)+" ")]),t._v(" "),s("md-table-cell",[t._v("  "+t._s(e.remark)+" ")])],1)})],2),t._v(" "),s("p"),t._v(" "),s("md-table",{attrs:{"md-card":""}},[s("md-table-toolbar",[s("h1",{staticClass:"md-title"},[t._v("下周计划")])]),t._v(" "),s("md-table-row",[s("md-table-head",[t._v("内容")]),t._v(" "),s("md-table-head",[t._v("计划完成日期")]),t._v(" "),s("md-table-head",[t._v("备注")])],1),t._v(" "),t._l(t.schedules.plans,function(e,a,n){return s("md-table-row",{key:a,attrs:{id:a}},[s("md-table-cell",[t._v("  "+t._s(e.title)+" ")]),t._v(" "),s("md-table-cell",[t._v("  "+t._s(e.scheduledDate)+" ")]),t._v(" "),s("md-table-cell",[t._v("  "+t._s(e.remark)+" ")])],1)})],2)],1)},staticRenderFns:[]};var B=s("VU/8")(Y,z,!1,function(t){s("Xx9W")},null,null).exports;a.default.use(v.a);var H=new v.a({routes:[{path:"/",name:"index",component:p},{path:"/report",name:"report",component:B},{path:"/login",name:"login",component:$},{path:"/list",name:"list",component:b},{path:"/news",name:"news",component:x},{path:"/news/detail/:id",name:"detail",component:w},{path:"/productList",name:"productList",component:P},{path:"/cart",name:"cart",component:A},{path:"/product/:id",name:"product",component:U}]}),J=[{id:1,title:"iPad 4 Mini",price:500.01,inventory:2},{id:2,title:"H&M T-Shirt White",price:10.99,inventory:10},{id:3,title:"Charli XCX - Sucker CD",price:19.99,inventory:5}],G=function(t){setTimeout(function(){return t(J)},100)},X=function(t,e,s){setTimeout(function(){Math.random()>.5||navigator.userAgent.indexOf("PhantomJS")>-1?e():s()},100)};var K={state:{added:[],lastCheckout:null},actions:{checkout:function(t,e){var s=t.commit,a=t.state,n=[].concat(function(t){if(Array.isArray(t)){for(var e=0,s=Array(t.length);e<t.length;e++)s[e]=t[e];return s}return Array.from(t)}(a.added));s("checkout_request"),X(e,function(){return s("checkout_successful")},function(){return s("checkout_failure",n)})}},mutations:{add_to_cart:function(t,e){t.lastCheckout=null;var s=t.added.find(function(t){return t.id===e});s?s.quantity++:t.added.push({id:e,quantity:1})},checkout_request:function(t){t.added=[],t.lastCheckout=null},checkout_successful:function(t){t.lastCheckout="successful"},checkout_failure:function(t,e){t.added=e,t.lastCheckout="failed"}},getters:{cartProducts:function(t,e,s){return t.added.map(function(t){var e=t.id,a=t.quantity,n=s.products.all.find(function(t){return t.id===e});return{title:n.title,price:n.price,id:e,quantity:a}})},cartCount:function(t){var e=0;return t.added.forEach(function(t){var s=t.quantity;e+=s}),e}}},Z={state:{all:[]},actions:{addToCart:function(t,e){(0,t.commit)("add_to_cart",e.id)},getAllProducts:function(t){var e=t.commit;G(function(t){e("recieve_products",t)})}},mutations:{recieve_products:function(t,e){t.all=e},add_to_cart:function(t,e){t.all.find(function(t){return t.id===e}).inventory--}},getters:{allProducts:function(t){return t.all}}},Q={state:{id:"",userInfo:{username:""}},actions:{updateinfo:function(t){var e=t.commit;t.state,e("updateinfo_req")},login:function(t){var e=t.commit;t.state,e("login_req")},logout:function(t){var e=t.commit;t.state,e("logout_req")}},mutations:{updateinfo_req:function(t,e){t.userInfo=e},login_req:function(){console.log("login_req")},logout_req:function(){console.log("logout_req")}},getters:{userInfo:function(t,e,s){return t.userInfo}}},tt={state:{showSnackbar:!1,title:"欢迎你的到来,请登录",bMsg:"",schedules:{tasks:[],extratTasks:[],plans:[]}},actions:{setShowSnackbar:function(t,e){var s=t.commit;t.state;s("updateSnackBar_req",e)},setTitle:function(t,e){var s=t.commit;t.state;s("setTitle_req",e)},updateSchedules:function(t,e){var s=t.commit;t.state;console.log("schedules",e),s("updateSchedules_req",e)}},mutations:{updateSnackBar_req:function(t,e){e?(t.bMsg=e,t.showSnackbar=!0):t.showSnackbar=!1},setTitle_req:function(t,e){t.title=e},updateSchedules_req:function(t,e){t.schedules=e}},getters:{title:function(t,e,s){return t.title},schedules:function(t,e,s){return t.schedules}}};a.default.use(n.a);var et=new n.a.Store({modules:{cart:K,products:Z,user:Q,report:tt}}),st=s("mtWM"),at=s.n(st),nt=s("mw3O"),it=s.n(nt);function rt(t,e,s){var a=new Date;a.setTime(a.getTime()+3600*Number(s)*1e3),document.cookie=t+"="+escape(e)+(null==s?"":";expires="+a.toGMTString())}function ot(t){var e,s=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(s))?e[2]:null}function lt(t){var e=new Date;e.setTime(e.getTime()-1);var s=ot(t);null!=s&&(document.cookie=t+"="+s+";expires="+e.toGMTString())}at.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var ct={install:function(t,e){t.prototype.getData=function(){console.log("我是插件中的方法")},t.prototype.$axios=at.a,t.prototype.$qs=it.a,t.prototype.setCookie=rt,t.prototype.getCookie=ot,t.prototype.delCookie=lt}},dt=s("Lgyv"),ut=s.n(dt);s("tzNG"),s("VLml"),s("hYwu"),s("HAPY");a.default.use(ct),a.default.use(ut.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:H,store:et,components:{App:m},template:"<App/>"})},UaWV:function(t,e){},VLml:function(t,e){},VnDM:function(t,e){},Xx9W:function(t,e){},YAbn:function(t,e){},hYwu:function(t,e){},nkcH:function(t,e){},tzNG:function(t,e){},utLe:function(t,e){},v9BR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cdd10a62e0fac27586bc.js.map
