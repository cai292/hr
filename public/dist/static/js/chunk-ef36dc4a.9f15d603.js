(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef36dc4a"],{"0aac":function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return c}));var n=r("b775"),a=function(e){return Object(n["a"])({method:"get",url:"/sys/permission",params:e})},o=function(e){return Object(n["a"])({method:"put",url:"/sys/permission/".concat(e.id),data:e})},i=function(e){return Object(n["a"])({method:"get",url:"/sys/permission/".concat(e)})},s=function(e){return Object(n["a"])({method:"DELETE",url:"/sys/permission/".concat(e)})},c=function(e){return Object(n["a"])({method:"POST",url:"/sys/permission",data:e})}},"0ccb":function(e,t,r){var n=r("50c4"),a=r("1148"),o=r("1d80"),i=Math.ceil,s=function(e){return function(t,r,s){var c,l,u=String(o(t)),d=u.length,m=void 0===s?" ":String(s),f=n(r);return f<=d||""==m?u:(c=f-d,l=a.call(m,i(c/m.length)),l.length>c&&(l=l.slice(0,c)),e?u+l:l+u)}};e.exports={start:s(!1),end:s(!0)}},1276:function(e,t,r){"use strict";var n=r("d784"),a=r("44e7"),o=r("825a"),i=r("1d80"),s=r("4840"),c=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),m=r("d039"),f=[].push,p=Math.min,h=4294967295,b=!m((function(){return!RegExp(h,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(i(this)),o=void 0===r?h:r>>>0;if(0===o)return[];if(void 0===e)return[n];if(!a(e))return t.call(n,e,o);var s,c,l,u=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,b=new RegExp(e.source,m+"g");while(s=d.call(b,n)){if(c=b.lastIndex,c>p&&(u.push(n.slice(p,s.index)),s.length>1&&s.index<n.length&&f.apply(u,s.slice(1)),l=s[0].length,p=c,u.length>=o))break;b.lastIndex===s.index&&b.lastIndex++}return p===n.length?!l&&b.test("")||u.push(""):u.push(n.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,r):n.call(String(a),t,r)},function(e,a){var i=r(n,e,this,a,n!==t);if(i.done)return i.value;var d=o(e),m=String(this),f=s(d,RegExp),g=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(b?"y":"g"),w=new f(b?d:"^(?:"+d.source+")",v),x=void 0===a?h:a>>>0;if(0===x)return[];if(0===m.length)return null===u(w,m)?[m]:[];var y=0,k=0,O=[];while(k<m.length){w.lastIndex=b?k:0;var D,R=u(w,b?m:m.slice(k));if(null===R||(D=p(l(w.lastIndex+(b?0:k)),m.length))===y)k=c(m,k,g);else{if(O.push(m.slice(y,k)),O.length===x)return O;for(var j=1;j<=R.length-1;j++)if(O.push(R[j]),O.length===x)return O;k=y=D}}return O.push(m.slice(y)),O}]}),!b)},"1bcb":function(e,t,r){"use strict";r("79ec")},4840:function(e,t,r){var n=r("825a"),a=r("1c0b"),o=r("b622"),i=o("species");e.exports=function(e,t){var r,o=n(e).constructor;return void 0===o||void 0==(r=n(o)[i])?t:a(r)}},"4d90":function(e,t,r){"use strict";var n=r("23e7"),a=r("0ccb").start,o=r("9a0c");n({target:"String",proto:!0,forced:o},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},7424:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-container"},[r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("el-tabs",[r("el-tab-pane",{attrs:{label:"角色管理"}},[r("el-row",{staticStyle:{height:"60px"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"small",disabled:!e.checkPermission("addRote")},on:{click:e.addRole}},[e._v("新增角色")])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),r("el-table-column",{attrs:{prop:"name",label:"角色名",sortable:""}}),r("el-table-column",{attrs:{prop:"description",label:"描述",sortable:""}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"small",type:"success"},on:{click:function(r){return e.assignPerm(t.row.id)}}},[e._v("分配权限")]),r("el-button",{attrs:{size:"small",type:"primary",disabled:!e.checkPermission("editRote")},on:{click:function(r){return e.updataRole(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(r){return e.deleteRole(t.row.id)}}},[e._v("删除")])]}}])})],1),r("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",justify:"center",align:"middle"}},[r("el-pagination",{attrs:{layout:"prev, pager, next",total:e.page.total,"current-page":e.page.page,"page-size":e.page.pagesize},on:{"current-change":e.handleCurrentChange}})],1)],1),r("el-tab-pane",{attrs:{label:"公司信息"}},[r("el-alert",{staticStyle:{"margin-bottom":"30px"},attrs:{title:"对公司名称、公司地址、营业执照、公司地区等公司资料不能修改！！！",type:"info","show-icon":"",closable:!1}}),r("el-form",{ref:"form",attrs:{"label-width":"80px"}},[r("el-form-item",{attrs:{label:"企业名称"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{disabled:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),r("el-form-item",{attrs:{label:"公司地址"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{disabled:""},model:{value:e.formData.companyAddress,callback:function(t){e.$set(e.formData,"companyAddress",t)},expression:"formData.companyAddress"}})],1),r("el-form-item",{attrs:{label:"公司电话"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{disabled:""},model:{value:e.formData.companyPhone,callback:function(t){e.$set(e.formData,"companyPhone",t)},expression:"formData.companyPhone"}})],1),r("el-form-item",{attrs:{label:"邮箱"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{disabled:""},model:{value:e.formData.mailbox,callback:function(t){e.$set(e.formData,"mailbox",t)},expression:"formData.mailbox"}})],1),r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{disabled:"",type:"textarea",rows:3},model:{value:e.formData.remarks,callback:function(t){e.$set(e.formData,"remarks",t)},expression:"formData.remarks"}})],1)],1)],1)],1)],1)],1),r("el-dialog",{attrs:{title:e.roleForm.id?"编辑角色":"添加角色",visible:e.showDialog,width:"50%"},on:{"update:visible":function(t){e.showDialog=t},close:e.btnCancel}},[r("el-form",{ref:"roleformRef",attrs:{model:e.roleForm}},[r("el-form-item",{attrs:{label:"角色名称"}},[r("el-input",{model:{value:e.roleForm.name,callback:function(t){e.$set(e.roleForm,"name",t)},expression:"roleForm.name"}})],1),r("el-form-item",{attrs:{label:"角色描述"}},[r("el-input",{model:{value:e.roleForm.description,callback:function(t){e.$set(e.roleForm,"description",t)},expression:"roleForm.description"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.btnCancel}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.btnOK}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配权限",visible:e.showPermDialog,width:"50%"},on:{"update:visible":function(t){e.showPermDialog=t},close:e.btnPermCancel}},[r("el-tree",{ref:"permTree",attrs:{data:e.permData,"node-key":"id","show-checkbox":"","check-strictly":"","default-expand-all":"","default-checked-keys":e.selectCheck,props:e.defaultProps}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.btnPermCancel}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.btnPermOK}},[e._v("确 定")])],1)],1)],1)},a=[],o=r("1da1"),i=r("5530"),s=(r("96cf"),r("90e7")),c=r("2f62"),l=r("0aac"),u=r("ed08"),d={data:function(){return{list:[],page:{page:1,pagesize:10,total:0},formData:{name:"广州市朝睿有限公司",companyAddress:"广州天河区厚和大厦",companyPhone:"400-111-1212",mailbox:"12345678@qq.com",remarks:"互联网公司"},roleForm:{name:"",description:""},rulus:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},showDialog:!1,showPermDialog:!1,permData:[],defaultProps:{label:"name"},selectCheck:[],roleId:null}},computed:Object(i["a"])({},Object(c["c"])(["companyId"])),created:function(){this.getRoleList()},methods:{assignPerm:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.t0=u["a"],r.next=3,Object(l["d"])();case 3:return r.t1=r.sent,t.permData=(0,r.t0)(r.t1,"0"),r.next=7,Object(s["e"])(e);case 7:n=r.sent,a=n.permIds,t.selectCheck=a,t.roleId=e,t.showPermDialog=!0;case 12:case"end":return r.stop()}}),r)})))()},getRoleList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["f"])(e.page);case 2:r=t.sent,n=r.total,a=r.rows,e.page.total=n,e.list=a;case 7:case"end":return t.stop()}}),t)})))()},addRole:function(){this.showDialog=!0},handleCurrentChange:function(e){this.page.page=e,this.getRoleList()},getCompanyInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["d"])(e.companyId);case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)})))()},deleteRole:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(n=r.sent,"confirm"===n){r.next=5;break}return r.abrupt("return",t.$message.info("用户取消删除"));case 5:return r.next=7,Object(s["c"])(e);case 7:t.$message.success("删除角色成功"),t.getRoleList();case 9:case"end":return r.stop()}}),r)})))()},updataRole:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.showDialog=!0,r.next=3,Object(s["e"])(e);case 3:t.roleForm=r.sent;case 4:case"end":return r.stop()}}),r)})))()},btnCancel:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.roleForm={name:"",description:""},e.$refs.roleformRef.resetFields(),e.showDialog=!1;case 3:case"end":return t.stop()}}),t)})))()},btnOK:function(){var e=this;this.$refs.roleformRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("表单验证失败"));case 2:if(!e.roleForm.id){t.next=7;break}return t.next=5,Object(s["g"])(e.roleForm);case 5:t.next=9;break;case 7:return t.next=9,Object(s["a"])(e.roleForm);case 9:e.$message.success("操作成功"),e.getRoleList(),e.showDialog=!1;case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},btnPermCancel:function(){this.selectCheck=[],this.showPermDialog=!1},btnPermOK:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["b"])({id:e.roleId,permIds:e.$refs.permTree.getCheckedKeys()});case 2:e.$message.success("分配权限成功"),e.showPermDialog=!1;case 4:case"end":return t.stop()}}),t)})))()}}},m=d,f=(r("1bcb"),r("2877")),p=Object(f["a"])(m,n,a,!1,null,"65742537",null);t["default"]=p.exports},"79ec":function(e,t,r){},"90e7":function(e,t,r){"use strict";r.d(t,"f",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"e",(function(){return s})),r.d(t,"g",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r("b775"),a=function(e){return Object(n["a"])({method:"get",url:"/sys/role",params:e})},o=function(e){return Object(n["a"])({method:"get",url:"/company/".concat(e)})},i=function(e){return Object(n["a"])({method:"DELETE",url:"/sys/role/".concat(e)})},s=function(e){return Object(n["a"])({method:"GET",url:"/sys/role/".concat(e)})},c=function(e){return Object(n["a"])({method:"PUT",url:"/sys/role/".concat(e.id),data:e})},l=function(e){return Object(n["a"])({method:"POST",url:"/sys/role",data:e})},u=function(e){return Object(n["a"])({method:"put",url:"/sys/role/assignPrem",data:e})}},"9a0c":function(e,t,r){var n=r("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("53ca"),r("ac1f"),r("5319"),r("4d63"),r("25f0"),r("d3b7"),r("4d90"),r("1276"),r("159b");function n(e,t){var r=[];return e.forEach((function(a){if(a.pid===t){var o=n(e,a.id);o.length&&(a.children=o),r.push(a)}})),r}}}]);