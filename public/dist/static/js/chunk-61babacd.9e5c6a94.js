(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61babacd"],{2506:function(t,e,r){"use strict";r.d(e,"h",(function(){return s})),r.d(e,"l",(function(){return n})),r.d(e,"m",(function(){return o})),r.d(e,"n",(function(){return c})),r.d(e,"i",(function(){return u})),r.d(e,"j",(function(){return p})),r.d(e,"g",(function(){return l})),r.d(e,"k",(function(){return i})),r.d(e,"p",(function(){return d})),r.d(e,"o",(function(){return f})),r.d(e,"c",(function(){return b})),r.d(e,"f",(function(){return v})),r.d(e,"d",(function(){return h})),r.d(e,"e",(function(){return m})),r.d(e,"a",(function(){return g})),r.d(e,"b",(function(){return _})),r.d(e,"q",(function(){return j}));r("99af");var a=r("b775");function s(t){return Object(a["a"])({url:"/user/process/instance/".concat(t.page,"/").concat(t.pageSize),method:"put",data:t})}function n(t){return Object(a["a"])({url:"/user/process/instance/getById/".concat(t)})}function o(t){return Object(a["a"])({url:"/approvals/flows/".concat(t)})}function c(t){return Object(a["a"])({url:"/approvals/setting",method:"put",data:t})}function u(t){return Object(a["a"])({url:"/user/process/instance/".concat(t)})}function p(t){return Object(a["a"])({url:"/user/process/instance/tasks/".concat(t)})}function l(t){return Object(a["a"])({url:"//user/process/buss/showBussImgById/".concat(t)})}function i(t){return Object(a["a"])({url:"/user/process/definition",params:t})}function d(t){return Object(a["a"])({url:"/user/process/suspend/".concat(t.processKey),params:t})}function f(t){return Object(a["a"])({url:"/user/process/startProcess",data:t,method:"post"})}function b(t){return Object(a["a"])({url:"/user/process_leave/startProcess",data:t,method:"post"})}function v(t){return Object(a["a"])({url:"/user/approvals/".concat(t.id,"/reject"),method:"put",data:t})}function h(t){return Object(a["a"])({url:"/user/approvals/".concat(t),method:"delete"})}function m(t){return Object(a["a"])({url:"/user/process/instance/commit",method:"put",data:t})}function g(t){return Object(a["a"])({url:"/user/process_dimission/startProcess",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/user/process_overtime/startProcess",method:"post",data:t})}function j(t){return Object(a["a"])({url:"/sys/user/".concat(t.id),method:"put",data:t})}},"944f":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"dashboard-container"},[r("div",{staticClass:"app-container"},[r("page-tools",{attrs:{"show-before":!0},scopedSlots:t._u([{key:"before",fn:function(){return[t._v("当前审批中 "+t._s(t.approveIn.length)+" 本月审批通过 "+t._s(t.approvepass.length)+" 本月审批驳回 "+t._s(t.approvereject.length))]},proxy:!0},{key:"after",fn:function(){return[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.$router.push("/approvals/securitySetting")}}},[t._v("流程设置")])]},proxy:!0}])}),r("el-card",{staticClass:"hr-block"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"default-sort":{prop:"date",order:"descending"}}},[r("el-table-column",{attrs:{type:"selection",width:"30"}}),r("el-table-column",{attrs:{type:"index",width:"80",label:"序号"}}),r("el-table-column",{attrs:{prop:"processName",label:"审批类型",sortable:""}}),r("el-table-column",{attrs:{prop:"username",label:"申请人",sortable:""}}),r("el-table-column",{attrs:{prop:"procCurrNodeUserName",label:"当前审批人",sortable:""}}),r("el-table-column",{attrs:{label:"审批发起时间",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(t._f("formatDate")(e.row.procApplyTime)))])]}}])}),r("el-table-column",{attrs:{prop:"process_state",label:"审批状态",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return["0"===e.row.processState?r("span",{staticClass:"rovalsState"},[r("em",{staticClass:"sub"}),t._v("已提交 ")]):t._e(),"1"===e.row.processState?r("span",{staticClass:"rovalsState"},[r("em",{staticClass:"stay"}),t._v("审批中 ")]):t._e(),"2"===e.row.processState?r("span",{staticClass:"rovalsState"},[r("em",{staticClass:"adopt"}),t._v("审批通过 ")]):t._e(),"3"===e.row.processState?r("span",{staticClass:"rovalsState"},[r("em",{staticClass:"reject"}),t._v("审批不通过 ")]):t._e(),"4"===e.row.processState?r("span",{staticClass:"rovalsState"},[r("em",{staticClass:"revoke"}),t._v("撤销 ")]):t._e()]}}])}),r("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(r){return t.toDetail(e.row)}}},[t._v(" 查看 ")])]}}])})],1),r("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",align:"middle",justify:"center"}},[r("el-pagination",{attrs:{total:t.page.total,"page-size":t.page.pagesize,layout:"prev, pager, next"},on:{"current-change":t.changePage}})],1)],1)],1)])},s=[],n=r("5530"),o=r("1da1"),c=(r("96cf"),r("4de4"),r("2506")),u={name:"SocialTableIndex",components:{},data:function(){return{list:[],loading:!1,page:{page:1,total:0,pageSize:10},approveIn:[],approvepass:[],approvereject:[]}},created:function(){this.getApprovalList()},methods:{getApprovalList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(c["h"])(Object(n["a"])({year:2018},t.page));case 3:r=e.sent,a=r.rows,s=r.total,t.page.total=s,t.list=a,t.approveIn=t.list.filter((function(t){return"1"===t.processState})),t.approvepass=t.list.filter((function(t){return"2"===t.processState})),t.approvereject=t.list.filter((function(t){return"3"===t.processState})),t.loading=!1;case 12:case"end":return e.stop()}}),e)})))()},toDetail:function(t){var e=t.processName;switch(e){case"工资":this.$router.push({path:"/approvals/salaryApproval/"+t.processId});break;case"入职":this.$router.push({path:"/approvals/enterApproval/"+t.processId});break;case"请假":this.$router.push({path:"/approvals/leaveApproval/"+t.processId});break;case"离职":this.$router.push({path:"/approvals/quitApproval/"+t.processId});break;case"加班":this.$router.push({path:"/approvals/overtimeApproval/"+t.processId})}},changePage:function(t){this.page.newPage=t,this.getApprovalList()}}},p=u,l=r("2877"),i=Object(l["a"])(p,a,s,!1,null,null,null);e["default"]=i.exports}}]);