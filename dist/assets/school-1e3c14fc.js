import{aa as p,_ as w,d as E,o as F,c as C,b as c,a as l,w as a,I as k,e as m}from"./index-471bd290.js";import{E as r,a as y}from"./el-overlay-29f0aa49.js";import{a as v,b as U,E as N}from"./el-input-85a4f968.js";import{c as P,E as T,a as $}from"./el-table-column-a5cc9bc2.js";import{E as S}from"./el-button-46f1502a.js";import"./scroll-0c5fd281.js";import"./debounce-9516b403.js";const B=e=>p.request({url:"/api/school/all",params:e}),I=e=>p.request({url:"/api/school/delete",params:e}),q=e=>p.request({url:"/api/school/add",method:"post",data:e}),z=e=>p.request({url:"/api/school/edit",method:"post",data:e}),_=E({data(){return{schools:[],page:{total:0,current:1,size:1},dialogFormVisible:!1,dialogFormVisible1:!1,school:{address:"",area:"",city:"",createTime:"",deleted:0,description:"",enable:0,id:0,latitude:"",longitude:"",province:"",schoolName:"",updateTime:""},formLabelWidth:80}},mounted(){this.getSchoolsPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.school=P(e)},getSchoolsPage(e){B({current:e,size:2}).then(d=>{console.log(d);const h=d.data.schools;this.schools=h,this.page=h}).catch(d=>{console.log(d)})},currentchange(e){this.getSchoolsPage(e),this.page.current=e},cancle(){this.dialogFormVisible1=!1},dele(e){I({id:e}).then(d=>{if(console.log(e),d.success)this.getSchoolsPage(this.page.current);else return console.log(d.msg),!1}).catch(d=>{}),this.dialogFormVisible1=!1},toAdd(){this.dialogFormVisible=!0},save(){const e=this.school;e.id==0?q(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getSchoolsPage(this.page.current),r(o.msg);else return r(o.msg),!1}).catch(o=>{r("网络错误联系管理员")}):z(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getSchoolsPage(this.page.current),r(o.msg);else return r(o.msg),!1}).catch(o=>{r("网络错误联系管理员")})}}}),A={class:"dialog-footer"};function D(e,o,d,h,L,M){const s=$,u=S,f=T,i=v,n=U,b=N,g=y;return F(),C(k,null,[c("div",null,[l(f,{data:e.schools,style:{width:"100%"},"row-class-name":e.tableRowClassName},{default:a(()=>[l(s,{fixed:"",prop:"id",label:"id",width:"80",sortable:!0,"sort-method":e.sortById},null,8,["sort-method"]),l(s,{prop:"schoolName",label:"学校名称",width:"130"}),l(s,{prop:"description",label:"学校说明",width:"130"}),l(s,{prop:"longitude",label:"经度",width:"130"}),l(s,{prop:"latitude",label:"纬度",width:"130"}),l(s,{prop:"enable",label:"是否启用",width:"60"}),l(s,{prop:"deleted",label:"删除",width:"60"}),l(s,{prop:"updateTime",label:"更新时间",width:"130"}),l(s,{prop:"createTime",label:"创建时间",width:"130"}),l(s,{prop:"province",label:"省",width:"130"}),l(s,{prop:"area",label:"市|县",width:"130"}),l(s,{prop:"city",label:"城市",width:"130"}),l(s,{prop:"address",label:"地址",width:"130"}),l(s,{fixed:"right",label:"操作",width:"200"},{default:a(t=>[l(u,{type:"info",size:"small",onClick:V=>e.toEdit(t.row)},{default:a(()=>[m("更新")]),_:2},1032,["onClick"]),l(u,{type:"info",size:"small",onClick:V=>e.dele(t.row.id)},{default:a(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","row-class-name"])]),l(u,{type:"info",onClick:e.toAdd,round:""},{default:a(()=>[m("添加")]),_:1},8,["onClick"]),l(g,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[9]||(o[9]=t=>e.dialogFormVisible=t),title:"学校信息编辑"},{footer:a(()=>[c("span",A,[l(u,{onClick:o[8]||(o[8]=t=>e.dialogFormVisible=!1)},{default:a(()=>[m("取消")]),_:1}),l(u,{type:"primary",onClick:e.save},{default:a(()=>[m(" 保存 ")]),_:1},8,["onClick"])])]),default:a(()=>[l(b,{model:e.school},{default:a(()=>[l(n,{label:"学校名称","label-width":140},{default:a(()=>[l(i,{modelValue:e.school.schoolName,"onUpdate:modelValue":o[0]||(o[0]=t=>e.school.schoolName=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(n,{label:"学校说明","label-width":140},{default:a(()=>[l(i,{modelValue:e.school.description,"onUpdate:modelValue":o[1]||(o[1]=t=>e.school.description=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(n,{label:"经度","label-width":140},{default:a(()=>[l(i,{modelValue:e.school.longitude,"onUpdate:modelValue":o[2]||(o[2]=t=>e.school.longitude=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(n,{label:"纬度","label-width":140},{default:a(()=>[l(i,{modelValue:e.school.latitude,"onUpdate:modelValue":o[3]||(o[3]=t=>e.school.latitude=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(n,{label:"省","label-width":140},{default:a(()=>[l(i,{modelValue:e.school.province,"onUpdate:modelValue":o[4]||(o[4]=t=>e.school.province=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(n,{label:"市|县","label-width":140},{default:a(()=>[l(i,{modelValue:e.school.area,"onUpdate:modelValue":o[5]||(o[5]=t=>e.school.area=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(n,{label:"城市","label-width":140},{default:a(()=>[l(i,{modelValue:e.school.city,"onUpdate:modelValue":o[6]||(o[6]=t=>e.school.city=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(n,{label:"地址","label-width":140},{default:a(()=>[l(i,{modelValue:e.school.address,"onUpdate:modelValue":o[7]||(o[7]=t=>e.school.address=t),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const O=w(_,[["render",D]]);export{O as default};
