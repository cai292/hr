(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bfe3433e"],{"173d":function(t,e,r){"use strict";r.d(e,"f",(function(){return a})),r.d(e,"h",(function(){return o})),r.d(e,"g",(function(){return i})),r.d(e,"d",(function(){return c})),r.d(e,"k",(function(){return s})),r.d(e,"e",(function(){return l})),r.d(e,"a",(function(){return u})),r.d(e,"i",(function(){return p})),r.d(e,"c",(function(){return d})),r.d(e,"j",(function(){return h})),r.d(e,"b",(function(){return b}));var n=r("b775");function a(t){return Object(n["a"])({url:"/salarys/list",data:t,method:"post"})}function o(t){return Object(n["a"])({url:"/salarys/tips/".concat(t)})}function i(){return Object(n["a"])({url:"/salarys/settings"})}function c(){return Object(n["a"])({url:"/salarys/company-settings"})}function s(t){return Object(n["a"])({url:"/salarys/settings",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/salarys/modify/".concat(t)})}function u(t){return Object(n["a"])({url:"/salarys/modify/".concat(t.userId),method:"post",data:t})}function p(t){return Object(n["a"])({url:"/salarys/init/".concat(t.userId),method:"post",data:t})}function d(t){return Object(n["a"])({url:"/salarys/reports/".concat(t.yearMonth),params:t})}function h(t){return Object(n["a"])({url:"/salarys/reports/".concat(t.yearMonth,"/newReport"),method:"put",data:t})}function b(t){return Object(n["a"])({url:"/salarys/reports/".concat(t.yearMonth,"/archive"),data:t,method:"post"})}},"6e5b":function(t,e,r){"use strict";r("b2a2")},b2a2:function(t,e,r){},f42a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"monthStatementBox"},[t._m(0),r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"monthStatementTable"},[r("div",{staticClass:"itemDropDown"},[r("div",{staticClass:"topLab"},[r("div"),r("div",{staticClass:"rightLabBox"},[r("a",{staticClass:"el-button fr el-button--primary el-button--mini",attrs:{title:"导出"},on:{click:function(e){return t.handleExport()}}},[t._v("导出")])])]),r("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{id:"item",data:t.contentData,border:""}},[r("el-table-column",{attrs:{type:"index",label:"序号",center:"",width:"50"}}),r("el-table-column",{attrs:{prop:"username",label:"姓名",width:"150px"}}),r("el-table-column",{attrs:{prop:"mobile",label:"手机号",width:"150px"}}),r("el-table-column",{attrs:{prop:"workNumber",label:"工号",width:"150px"}}),r("el-table-column",{attrs:{prop:"departmentName",label:"部门名称",width:"150px"}}),r("el-table-column",{attrs:{prop:"inServiceStatus",formatter:t.inService,label:"在职状态",width:"150px"}}),r("el-table-column",{attrs:{prop:"providentFundIndividual",label:"公积金个人",width:"150px"}}),r("el-table-column",{attrs:{prop:"socialSecurityIndividual",label:"社保个人",width:"150px"}}),r("el-table-column",{attrs:{prop:"socialSecurityEnterprise",label:"社保企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"providentFundEnterprises",label:"公积金企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"socialSecurityProvidentFundEnterprises",label:"公积金社保企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"currentBaseSalary",label:"基本工资",width:"150px"}}),r("el-table-column",{attrs:{prop:"currentBaseSalary",label:"岗位工资",width:"150px"}}),r("el-table-column",{attrs:{prop:"salaryChangeAmount",label:"福利津贴",width:"150px"}}),r("el-table-column",{attrs:{prop:"attendanceDeductionMonthly",label:"考勤扣款",width:"150px"}}),r("el-table-column",{attrs:{prop:"currentSalaryTotalBase",label:"税前工资合计",width:"150px"}}),r("el-table-column",{attrs:{prop:"salaryByTax",label:"应纳税工资",width:"150px"}}),r("el-table-column",{attrs:{prop:"tax",label:"应扣税",width:"150px"}}),r("el-table-column",{attrs:{prop:"payment",label:"实发工资",width:"150px"}})],1)],1)]),r("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",justify:"center",align:"middle"}},[r("el-col",{attrs:{span:12}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.archivingReportForm}},[t._v("归档"+t._s(t.yearMonth?t.yearMonth.substr(4):"")+"报表")]),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.createReportForm}},[t._v("新建报表")]),r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.back()}}},[t._v("取消")])],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"monthStatementTop"},[r("div",{staticClass:"title"},[r("span",[t._v("工资报表")])])])}],o=r("1da1"),i=(r("fb6a"),r("96cf"),r("173d")),c={name:"HistoricalArchiving",data:function(){return{loading:!1,num:0,contentData:[],yearMonth:this.$route.query.yearMonth}},created:function(){},methods:{inService:function(t){return"1"===t.inServiceStatus?"在职":"离职"},getArchivingCont:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,r=t.yearMonth,e.next=4,Object(i["c"])({yearMonth:r,opType:1});case 4:t.contentData=e.sent,t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},clickCancel:function(){this.$router.back(-1)},archivingReport:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r="您确认归档当月报表吗？(报表归档将覆盖上一次归档记录，无法恢复)",t.$confirm(r,"归档"+t.yearMonth+"报表").then((function(){t.$message.success("success")}));case 2:case"end":return e.stop()}}),e)})))()},archivingReportForm:function(){var t=this;this.$confirm("您确认归档当月报表吗？").then(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["b"])({yearMonth:t.yearMonth});case 2:t.$message.success("归档成功");case 3:case"end":return e.stop()}}),e)}))))},createReportForm:function(){var t=this,e=this.getNextMonth(),r=e.substring(0,4),n=e.substring(4);this.$confirm("您将创建 《 "+r+"年"+n+"月 》 报表").then((function(){t.yearMonth=e,t.createNewReport(t.yearMonth),t.$message.success("新建报表成功"),t.getArchivingCont()}))},createNewReport:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["j"])({yearMonth:t});case 2:case"end":return e.stop()}}),e)})))()},getNextMonth:function(){var t=this.yearMonth.substring(0,4),e=this.yearMonth.slice(4),r=t,n=parseInt(e)+1;13===n&&(r=parseInt(r)+1,n=1),n<10&&(n="0"+n);var a=r+n;return a},handleExport:function(){}}},s=c,l=(r("6e5b"),r("2877")),u=Object(l["a"])(s,n,a,!1,null,"3d384b67",null);e["default"]=u.exports}}]);