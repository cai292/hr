(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55d10719"],{"0ccb":function(e,t,r){var n=r("50c4"),a=r("1148"),o=r("1d80"),i=Math.ceil,c=function(e){return function(t,r,c){var s,u,l=String(o(t)),d=l.length,p=void 0===c?" ":String(c),m=n(r);return m<=d||""==p?l:(s=m-d,u=a.call(p,i(s/p.length)),u.length>s&&(u=u.slice(0,s)),e?l+u:u+l)}};e.exports={start:c(!1),end:c(!0)}},1276:function(e,t,r){"use strict";var n=r("d784"),a=r("44e7"),o=r("825a"),i=r("1d80"),c=r("4840"),s=r("8aa5"),u=r("50c4"),l=r("14c3"),d=r("9263"),p=r("d039"),m=[].push,f=Math.min,h=4294967295,g=!p((function(){return!RegExp(h,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(i(this)),o=void 0===r?h:r>>>0;if(0===o)return[];if(void 0===e)return[n];if(!a(e))return t.call(n,e,o);var c,s,u,l=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,g=new RegExp(e.source,p+"g");while(c=d.call(g,n)){if(s=g.lastIndex,s>f&&(l.push(n.slice(f,c.index)),c.length>1&&c.index<n.length&&m.apply(l,c.slice(1)),u=c[0].length,f=s,l.length>=o))break;g.lastIndex===c.index&&g.lastIndex++}return f===n.length?!u&&g.test("")||l.push(""):l.push(n.slice(f)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,r):n.call(String(a),t,r)},function(e,a){var i=r(n,e,this,a,n!==t);if(i.done)return i.value;var d=o(e),p=String(this),m=c(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),w=new m(g?d:"^(?:"+d.source+")",v),D=void 0===a?h:a>>>0;if(0===D)return[];if(0===p.length)return null===l(w,p)?[p]:[];var x=0,y=0,j=[];while(y<p.length){w.lastIndex=g?y:0;var O,k=l(w,g?p:p.slice(y));if(null===k||(O=f(u(w.lastIndex+(g?0:y)),p.length))===x)y=s(p,y,b);else{if(j.push(p.slice(x,y)),j.length===D)return j;for(var R=1;R<=k.length-1;R++)if(j.push(k[R]),j.length===D)return j;y=x=O}}return j.push(p.slice(x)),j}]}),!g)},"1eef":function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return c})),r.d(t,"e",(function(){return s}));var n=r("b775"),a=function(){return Object(n["a"])({method:"get",url:"/company/department"})},o=function(e){return Object(n["a"])({method:"delete",url:"/company/department/".concat(e)})},i=function(e){return Object(n["a"])({method:"post",url:"/company/department",data:e})},c=function(e){return Object(n["a"])({method:"GET",url:"/company/department/".concat(e)})},s=function(e){return Object(n["a"])({method:"PUT",url:"/company/department/".concat(e.id),data:e})}},4840:function(e,t,r){var n=r("825a"),a=r("1c0b"),o=r("b622"),i=o("species");e.exports=function(e,t){var r,o=n(e).constructor;return void 0===o||void 0==(r=n(o)[i])?t:a(r)}},"4d90":function(e,t,r){"use strict";var n=r("23e7"),a=r("0ccb").start,o=r("9a0c");n({target:"String",proto:!0,forced:o},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"8f00":function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return c})),r.d(t,"h",(function(){return s})),r.d(t,"g",(function(){return u})),r.d(t,"j",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"i",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r("b775"),a=function(){return Object(n["a"])({method:"get",url:"/sys/user/simple"})},o=function(e){return Object(n["a"])({method:"get",url:"/sys/user",params:e})},i=function(e){return Object(n["a"])({method:"delete",url:"/sys/user/".concat(e)})},c=function(e){return Object(n["a"])({method:"post",url:"/sys/user",data:e})},s=function(e){return Object(n["a"])({method:"put",url:"/sys/user/".concat(e.id),data:e})},u=function(e){return Object(n["a"])({method:"get",url:"/employees/".concat(e,"/personalInfo")})},l=function(e){return Object(n["a"])({method:"put",url:"/employees/".concat(e.userId,"/personalInfo"),data:e})},d=function(e){return Object(n["a"])({method:"get",url:"/employees/".concat(e,"/jobs")})},p=function(e){return Object(n["a"])({method:"put",url:"/employees/".concat(e.userId,"/jobs"),data:e})},m=function(e){return Object(n["a"])({method:"put",url:"/sys/user/assignRoles",data:e})}},"90aa":function(e,t,r){},"9a0c":function(e,t,r){var n=r("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},c18d:function(e,t,r){"use strict";r("90aa")},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("53ca"),r("ac1f"),r("5319"),r("4d63"),r("25f0"),r("d3b7"),r("4d90"),r("1276"),r("159b");function n(e,t){var r=[];return e.forEach((function(a){if(a.pid===t){var o=n(e,a.id);o.length&&(a.children=o),r.push(a)}})),r}},fb3b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[r("el-card",{staticClass:"tree-card"},[r("treeTools",{attrs:{"tree-node":e.company,"is-root":!0},on:{addDepartment:e.addDepartment}}),r("el-tree",{attrs:{data:e.departs,props:e.defaultProps,"default-expand-all":!0,"expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){return[r("treeTools",{attrs:{"tree-node":t.data},on:{delDepartment:e.getDepartments,addDepartment:e.addDepartment,editDepartment:e.editDepartment}})]}}])})],1),r("addDept",{ref:"addDept",attrs:{"tree-node":e.treeNode,"show-dialog":e.showDialog},on:{"update:showDialog":function(t){e.showDialog=t},"update:show-dialog":function(t){e.showDialog=t},addDepartment:e.getDepartments}})],1)},a=[],o=r("1da1"),i=(r("96cf"),r("1eef")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticStyle:{height:"40px",width:"100%"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("el-col",[r("span",[e._v(e._s(e.treeNode.name))])]),r("el-col",{attrs:{span:4}},[r("el-row",{attrs:{type:"flex",justify:"end"}},[r("el-col",[e._v(e._s(e.treeNode.manager))]),r("el-col",[r("el-dropdown",[r("span",{staticClass:"el-dropdown-link"},[e._v(" 操作"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{nativeOn:{click:function(t){return e.addDepartment(t)}}},[e._v("添加子部门")]),e.isRoot?e._e():r("el-dropdown-item",{nativeOn:{click:function(t){return e.editDepartment(t)}}},[e._v("编辑部门")]),e.isRoot?e._e():r("el-dropdown-item",{nativeOn:{click:function(t){return e.delDepartment(t)}}},[e._v("删除部门")])],1)],1)],1)],1)],1)],1)},s=[],u={props:{treeNode:{type:Object,required:!0},isRoot:{type:Boolean,default:!1}},methods:{delDepartment:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$confirm("是否确认删除");case 3:return t.next=5,Object(i["b"])(e.treeNode.id);case 5:e.$message.success("删除成功"),e.$emit("delDepartment"),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},addDepartment:function(){this.$emit("addDepartment",this.treeNode)},editDepartment:function(){this.$emit("editDepartment",this.treeNode)}}},l=u,d=r("2877"),p=Object(d["a"])(l,c,s,!1,null,null,null),m=p.exports,f=r("ed08"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.showTitle,visible:e.showDialog},on:{close:e.btnCancel}},[r("el-form",{ref:"addEmployee",attrs:{"label-width":"120px",model:e.formData,rules:e.rules}},[r("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),r("el-form-item",{attrs:{label:"部门编码",prop:"code"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),r("el-form-item",{attrs:{label:"部门负责人",prop:"manager"}},[r("el-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择"},model:{value:e.formData.manager,callback:function(t){e.$set(e.formData,"manager",t)},expression:"formData.manager"}},e._l(e.employeeList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1),r("el-form-item",{attrs:{label:"部门介绍",prop:"introduce"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-300个字符",type:"textarea",rows:3},model:{value:e.formData.introduce,callback:function(t){e.$set(e.formData,"introduce",t)},expression:"formData.introduce"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.btnCancel}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.btnOK}},[e._v("确 定")])],1)],1)},g=[],b=r("5530"),v=(r("4de4"),r("b0c0"),r("8f00")),w={props:{showDialog:{type:Boolean,required:!0},treeNode:{type:Object,required:!0}},data:function(){var e=this,t=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r,n,a){var o,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["d"])();case 2:o=t.sent,c=o.depts,s=!1,s=e.formData.id?c.filter((function(t){return t.id!==e.formData.id&&t.pid===e.treeNode.pid})).some((function(e){return e.name===n})):c.filter((function(t){return t.pid===e.treeNode.id})).some((function(e){return e.name===n})),s?a(new Error("同级部门下已经有".concat(n,"的部门了"))):a();case 7:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),r=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r,n,a){var o,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["d"])();case 2:o=t.sent,c=o.depts,s=!1,s=e.formData.id?c.some((function(t){return t.id!==e.formData.id&&t.code===n&&n})):c.some((function(e){return e.code===n&&n})),s?a(new Error("组织架构中已经有部门使用".concat(n,"编码"))):a();case 7:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}();return{formData:{name:"",code:"",manager:"",introduce:""},rules:{code:[{required:!0,message:"该项不能为空",trigger:"blur"},{max:50,message:"编码必须在50个字符以内",trigger:"blur"},{trigger:"blur",validator:r}],introduce:[{required:!0,message:"该项不能为空",trigger:"blur"},{max:300,message:"介绍必须在300个字符以内",trigger:"blur"}],manager:[{required:!0,message:"该项不能为空",trigger:"blur"}],name:[{required:!0,message:"该项不能为空",trigger:"blur"},{max:50,message:"名称必须在50个字符以内",trigger:"blur"},{trigger:"blur",validator:t}]},employeeList:[]}},computed:{showTitle:function(){return this.formData.id?"编辑部门":"新增子部门"}},created:function(){this.getEmployeeSimple()},methods:{getEmployeeSimple:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(v["e"])();case 2:e.employeeList=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getDepartDetail:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(i["c"])(e);case 2:t.formData=r.sent;case 3:case"end":return r.stop()}}),r)})))()},btnCancel:function(){this.formData={name:"",code:"",manager:"",introduce:""},this.$refs.addEmployee.resetFields(),this.$emit("update:showDialog",!1),this.$emit("addDepartment")},btnOK:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.addEmployee.validate();case 2:if(!e.formData.id){t.next=7;break}return t.next=5,Object(i["e"])(e.formData);case 5:t.next=10;break;case 7:return r=e.treeNode.id?e.treeNode.id:"",t.next=10,Object(i["a"])(Object(b["a"])(Object(b["a"])({},e.formData),{},{pid:r}));case 10:e.$message.success("操作成功"),e.$emit("update:showDialog",!1),e.$emit("addDepartment");case 13:case"end":return t.stop()}}),t)})))()}}},D=w,x=Object(d["a"])(D,h,g,!1,null,null,null),y=x.exports,j={components:{treeTools:m,addDept:y},data:function(){return{company:{},departs:[],showDialog:!1,defaultProps:{children:"children",label:"name"},treeNode:{},loading:!1}},created:function(){this.getDepartments()},methods:{getDepartments:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(i["d"])();case 3:r=t.sent,e.company={name:"广州市朝睿有限公司",manager:"负责人",id:""},e.departs=Object(f["a"])(r.depts,""),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},addDepartment:function(e){this.showDialog=!0,this.treeNode=e},editDepartment:function(e){this.treeNode=e,this.$refs.addDept.getDepartDetail(e.id),this.showDialog=!0}}},O=j,k=(r("c18d"),Object(d["a"])(O,n,a,!1,null,"343a6112",null));t["default"]=k.exports}}]);