import{_ as h,d as c,o as w,c as C,b as r,a as l,w as a,I as E,e as p}from"./index-471bd290.js";import{E as s,a as U}from"./el-overlay-29f0aa49.js";import{a as F,b as k,E as v}from"./el-input-85a4f968.js";import{c as I,E as $,a as P}from"./el-table-column-a5cc9bc2.js";import{E as T}from"./el-button-46f1502a.js";import{c as B,a as z,b as N,d as D}from"./community-14acfdf8.js";import"./scroll-0c5fd281.js";import"./debounce-9516b403.js";const L=c({data(){return{communitys:[],page:{total:0,current:1,size:5},dialogFormVisible:!1,dialogFormVisible1:!1,community:{address:"",charger:0,createTime:"",deleted:0,depart:0,description:"",email:"",id:0,logo:"",mobile:"",name:"",schoolId:0,status:0,teachers:"",type:0,updateTime:"",version:0,weixin:""},formLabelWidth:80}},mounted(){this.getCommunitysPage(1)},methods:{get(){this.$router.push({path:"/presidentLogin",params:{id:1}})},toEdit(e){console.log(e),this.dialogFormVisible=!0,this.community=I(e)},getCommunitysPage(e){B({current:e,size:5}).then(n=>{console.log(n);const f=n.data.communities;this.communitys=f,this.page=f}).catch(n=>{console.log(n)})},currentchange(e){this.getCommunitysPage(e),this.page.current=e},cancle(){this.dialogFormVisible1=!1},dele(e){z({id:e}).then(n=>{if(console.log(e),n.success)this.getCommunitysPage(this.page.current);else return console.log(n.msg),!1}).catch(n=>{}),this.dialogFormVisible1=!1},save(){const e=this.community;e.id==0?N(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getCommunitysPage(this.page.current),s(o.msg);else return s(o.msg),!1}).catch(o=>{s("网络错误联系管理员")}):D(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getCommunitysPage(this.page.current),s(o.msg);else return s(o.msg),!1}).catch(o=>{s("网络错误联系管理员")})}}}),A={class:"dialog-footer"};function M(e,o,n,f,R,W){const i=P,u=T,b=$,m=F,d=k,g=v,V=U;return w(),C(E,null,[r("div",null,[r("button",{onClick:o[0]||(o[0]=(...t)=>e.get&&e.get(...t))},"返回")]),r("div",null,[l(b,{data:e.communitys,style:{width:"100%"},"row-class-name":e.tableRowClassName},{default:a(()=>[l(i,{fixed:"",prop:"id",label:"id",width:"80",sortable:!0,"sort-method":e.sortById},null,8,["sort-method"]),l(i,{prop:"name",label:"团设名称",width:"60"}),l(i,{prop:"address",label:"团社地址",width:"130"}),l(i,{prop:"charger",label:"团社会长",width:"130"}),l(i,{prop:"createTime",label:"创建时间",width:"100"}),l(i,{prop:"deleted",label:"逻辑删除",width:"60"}),l(i,{prop:"depart",label:"学院编号",width:"60"}),l(i,{prop:"description",label:"团社介绍",width:"200"}),l(i,{prop:"email",label:"团社邮箱",width:"60"}),l(i,{prop:"deleted",label:"删除",width:"60"}),l(i,{prop:"logo",label:"团社logo",width:"60"}),l(i,{prop:"mobile",label:"团社电话",width:"60"}),l(i,{prop:"schoolId",label:"学校id",width:"60"}),l(i,{prop:"status",label:"状态",width:"60"}),l(i,{prop:"teachers",label:"导师",width:"60"}),l(i,{prop:"type",label:"类型",width:"60"}),l(i,{prop:"updateTime",label:"更新时间",width:"60"}),l(i,{prop:"version",label:"版本",width:"60"}),l(i,{prop:"weixin",label:"团社公众号",width:"60"}),l(i,{fixed:"right",label:"操作",width:"200"},{default:a(t=>[l(u,{type:"info",size:"small",onClick:y=>e.toEdit(t.row)},{default:a(()=>[p("更新")]),_:2},1032,["onClick"]),l(u,{type:"info",size:"small",onClick:y=>e.dele(t.row.id)},{default:a(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","row-class-name"])]),l(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[15]||(o[15]=t=>e.dialogFormVisible=t),title:"用户等级编辑"},{footer:a(()=>[r("span",A,[l(u,{onClick:o[14]||(o[14]=t=>e.dialogFormVisible=!1)},{default:a(()=>[p("取消")]),_:1}),l(u,{type:"primary",onClick:e.save},{default:a(()=>[p(" 保存 ")]),_:1},8,["onClick"])])]),default:a(()=>[l(g,{model:e.community},{default:a(()=>[l(d,{label:"团设名称","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.name,"onUpdate:modelValue":o[1]||(o[1]=t=>e.community.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"团社地址","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.address,"onUpdate:modelValue":o[2]||(o[2]=t=>e.community.address=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"团社会长","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.charger,"onUpdate:modelValue":o[3]||(o[3]=t=>e.community.charger=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"学院编号","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.depart,"onUpdate:modelValue":o[4]||(o[4]=t=>e.community.depart=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"团社介绍","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.description,"onUpdate:modelValue":o[5]||(o[5]=t=>e.community.description=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"团社介绍","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.description,"onUpdate:modelValue":o[6]||(o[6]=t=>e.community.description=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"团社介绍","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.description,"onUpdate:modelValue":o[7]||(o[7]=t=>e.community.description=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"团社邮箱","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.email,"onUpdate:modelValue":o[8]||(o[8]=t=>e.community.email=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"团社电话","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.mobile,"onUpdate:modelValue":o[9]||(o[9]=t=>e.community.mobile=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"学校id","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.schoolId,"onUpdate:modelValue":o[10]||(o[10]=t=>e.community.schoolId=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"导师","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.teachers,"onUpdate:modelValue":o[11]||(o[11]=t=>e.community.teachers=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"类型","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.type,"onUpdate:modelValue":o[12]||(o[12]=t=>e.community.type=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(d,{label:"微信公众号","label-width":140},{default:a(()=>[l(m,{modelValue:e.community.weixin,"onUpdate:modelValue":o[13]||(o[13]=t=>e.community.weixin=t),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const S=h(L,[["render",M]]);export{S as default};
