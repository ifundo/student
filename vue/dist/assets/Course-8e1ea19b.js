/* empty css             *//* empty css               *//* empty css                    *//* empty css                  *//* empty css               *//* empty css               *//* empty css                  *//* empty css               *//* empty css                */import{l as U,o as N,c as z,a as s,d as l,b as c,w as a,m as B,n as D,q as P,s as T,v as I,x as g,k as m,t as q,y as f,z as O,A as $,B as A,C as F}from"./index-d8dc67dd.js";import{r as V}from"./request-8e591587.js";const J={class:"card",style:{"margin-top":"10px","margin-bottom":"10px"}},M={class:"card",style:{"margin-top":"10px"}},j={class:"card",style:{"margin-top":"10px"}},G={class:"dialog-footer"},te={__name:"Course",setup(H){const e=U({name:"",no:"",teacher:"",tableData:[],total:0,pageNum:1,pageSize:10,formVisible:!1,form:{}}),p=()=>{V.get("/course/selectPage",{params:{pageNum:e.pageNum,pageSize:e.pageSize,name:e.name,no:e.no,teacher:e.teacher}}).then(r=>{var o,n;e.tableData=((o=r.data)==null?void 0:o.list)||[],e.total=((n=r.data)==null?void 0:n.total)||0})};p();const _=()=>{p()},b=()=>{e.name="",e.name="",e.no="",e.teacher="",p()},x=()=>{e.form={},e.formVisible=!0},y=()=>{V.request({url:e.form.id?"/course/updateCourseById":"course/addCourse",method:e.form.id?"PUT":"POST",data:e.form}).then(r=>{r.code==="200"?(f.success("操作成功"),p(),e.formVisible=!1):f.error(r.msg)})},h=r=>{e.form=JSON.parse(JSON.stringify(r)),e.formVisible=!0},C=r=>{O.confirm("删除的数据无法恢复，您确定删除吗？","删除确认",{type:"warning"}).then(o=>{V.delete("/course/deleteCourseById/"+r).then(n=>{n.code==="200"?(f.success("操作成功"),p()):f.error(n.msg)})}).catch(o=>{f({type:"info",message:"删除取消"})})};return(r,o)=>{const n=B,i=D,d=$,v=P,k=T,u=A,w=F,E=I;return N(),z("div",null,[s("div",J,[l(n,{style:{width:"260px","margin-right":"10px"},modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.name=t),placeholder:"请输入课程名称查询:","prefix-icon":c(g)},null,8,["modelValue","prefix-icon"]),l(n,{style:{width:"260px","margin-right":"10px"},modelValue:e.no,"onUpdate:modelValue":o[1]||(o[1]=t=>e.no=t),placeholder:"请输入课程编号查询:","prefix-icon":c(g)},null,8,["modelValue","prefix-icon"]),l(n,{style:{width:"260px","margin-right":"10px"},modelValue:e.teacher,"onUpdate:modelValue":o[2]||(o[2]=t=>e.teacher=t),placeholder:"请输入课程老师查询:","prefix-icon":c(g)},null,8,["modelValue","prefix-icon"]),l(i,{type:"primary",style:{"margin-left":"10px"},onClick:p},{default:a(()=>[m("查询")]),_:1}),l(i,{type:"info",onClick:b},{default:a(()=>[m("重置")]),_:1})]),s("div",M,[s("div",null,[l(i,{type:"primary",onClick:x},{default:a(()=>[m("新增")]),_:1})]),s("div",null,[l(v,{data:e.tableData,style:{width:"100%"}},{default:a(()=>[l(d,{type:"index",label:"序号",width:"80",align:"center"},{default:a(({$index:t})=>[m(q(t+1+(e.pageNum-1)*e.pageSize),1)]),_:1}),l(d,{prop:"name",label:"课程名称"}),l(d,{prop:"no",label:"课程编号"}),l(d,{prop:"descr",label:"课程描述"}),l(d,{prop:"times",label:"课时"}),l(d,{prop:"teacher",label:"任课老师"}),l(d,{label:"操作",width:"180px"},{default:a(t=>[l(i,{type:"primary",onClick:S=>h(t.row)},{default:a(()=>[m("编 辑")]),_:2},1032,["onClick"]),l(i,{type:"danger",onClick:S=>C(t.row.id)},{default:a(()=>[m("删 除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),s("div",j,[l(k,{"current-page":e.pageNum,"onUpdate:currentPage":o[3]||(o[3]=t=>e.pageNum=t),"page-size":e.pageSize,"onUpdate:pageSize":o[4]||(o[4]=t=>e.pageSize=t),onCurrentChange:_,background:"",layout:"prev, pager, next",total:e.total},null,8,["current-page","page-size","total"])]),s("div",null,[l(E,{width:"30%",modelValue:e.formVisible,"onUpdate:modelValue":o[11]||(o[11]=t=>e.formVisible=t),title:"课程信息"},{footer:a(()=>[s("span",G,[l(i,{onClick:o[10]||(o[10]=t=>e.formVisible=!1)},{default:a(()=>[m("取 消")]),_:1}),l(i,{type:"primary",onClick:y},{default:a(()=>[m("保 存")]),_:1})])]),default:a(()=>[l(w,{model:e.form,"label-width":"100px","label-position":"right",style:{"margin-right":"40px"}},{default:a(()=>[l(u,{label:"课程名称"},{default:a(()=>[l(n,{modelValue:e.form.name,"onUpdate:modelValue":o[5]||(o[5]=t=>e.form.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(u,{label:"课程编号"},{default:a(()=>[l(n,{modelValue:e.form.no,"onUpdate:modelValue":o[6]||(o[6]=t=>e.form.no=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(u,{label:"课程描述"},{default:a(()=>[l(n,{modelValue:e.form.descr,"onUpdate:modelValue":o[7]||(o[7]=t=>e.form.descr=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(u,{label:"课程时间"},{default:a(()=>[l(n,{modelValue:e.form.times,"onUpdate:modelValue":o[8]||(o[8]=t=>e.form.times=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),l(u,{label:"课程老师"},{default:a(()=>[l(n,{modelValue:e.form.teacher,"onUpdate:modelValue":o[9]||(o[9]=t=>e.form.teacher=t),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])])}}};export{te as default};
