/* empty css             *//* empty css               *//* empty css                    *//* empty css                  *//* empty css               *//* empty css               *//* empty css                  *//* empty css               *//* empty css                */import{l as z,o as g,c as w,a as u,d as t,b as _,w as l,m as U,n as D,q as B,s as M,v as A,x as V,k as d,t as P,e as b,f as N,z as T,y as p,A as $,B as q,C as J}from"./index-d8dc67dd.js";import{r as f}from"./request-8e591587.js";const O={class:"card",style:{"margin-top":"10px","margin-bottom":"10px"}},j={class:"card",style:{"margin-top":"10px"}},G={class:"card",style:{"margin-top":"10px"}},H={class:"dialog-footer"},le={__name:"StudentSchedule",setup(K){const e=z({name:"",no:"",tableData:[],total:0,pageNum:1,pageSize:8,user:JSON.parse(localStorage.getItem("account-user")||{}),gradeForm:{},gradeFormVisible:!1}),m=()=>{const r={pageNum:e.pageNum,pageSize:e.pageSize,courseName:e.name,courseNo:e.no};e.user.role==="account"&&(r.accountId=e.user.id),f.get("/selectcourse/selectPage",{params:r}).then(a=>{var n,s;e.tableData=((n=a.data)==null?void 0:n.list)||[],e.total=((s=a.data)==null?void 0:s.total)||0})};m();const x=()=>{m()},y=()=>{e.name="",e.no="",m()},F=r=>{T.confirm("删除的数据无法恢复，您确定删除吗？","删除确认",{type:"warning"}).then(a=>{f.delete("/selectcourse/deleteCourse/"+r).then(n=>{n.code==="200"?(p.success("操作成功"),m()):p.error(n.msg)})}).catch(a=>{p({type:"info",message:"删除取消"})})},C=r=>{e.gradeFormVisible=!0,e.gradeForm.courseName=r.courseName,e.gradeForm.accountName=r.accountName,e.gradeForm.accountId=r.accountId,e.gradeForm.courseId=r.courseId},k=()=>{f.post("/grade/add",e.gradeForm).then(r=>{r.code==="200"?(e.gradeFormVisible=!1,p.success("操作成功"),m()):p.error(r.msg)})};return(r,a)=>{const n=U,s=D,i=$,v=B,S=M,c=q,h=J,E=A;return g(),w("div",null,[u("div",O,[t(n,{style:{width:"260px","margin-right":"10px"},modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=o=>e.name=o),placeholder:"请输入课程名称查询:","prefix-icon":_(V)},null,8,["modelValue","prefix-icon"]),t(n,{style:{width:"260px","margin-right":"10px"},modelValue:e.no,"onUpdate:modelValue":a[1]||(a[1]=o=>e.no=o),placeholder:"请输入课程编号查询:","prefix-icon":_(V)},null,8,["modelValue","prefix-icon"]),t(s,{type:"primary",style:{"margin-left":"10px"},onClick:m},{default:l(()=>[d("查询")]),_:1}),t(s,{type:"info",onClick:y},{default:l(()=>[d("重置")]),_:1})]),u("div",j,[u("div",null,[t(v,{data:e.tableData,style:{width:"100%"}},{default:l(()=>[t(i,{type:"index",label:"序号",width:"80",align:"center"},{default:l(({$index:o})=>[d(P(o+1+(e.pageNum-1)*e.pageSize),1)]),_:1}),t(i,{prop:"courseName",label:"课程名称"}),t(i,{prop:"courseNo",label:"课程编号"}),e.user.role==="ADMIN"?(g(),b(i,{key:0,prop:"accountName",label:"学生名称"})):N("",!0),t(i,{label:"操 作",width:"180px"},{default:l(o=>[t(s,{type:"danger",onClick:I=>F(o.row.courseId)},{default:l(()=>[d("删 除")]),_:2},1032,["onClick"]),e.user.role==="ADMIN"?(g(),b(s,{key:0,type:"primary",onClick:I=>C(o.row)},{default:l(()=>[d("打 分")]),_:2},1032,["onClick"])):N("",!0)]),_:1})]),_:1},8,["data"])])]),u("div",G,[t(S,{"current-page":e.pageNum,"onUpdate:currentPage":a[2]||(a[2]=o=>e.pageNum=o),"page-size":e.pageSize,"onUpdate:pageSize":a[3]||(a[3]=o=>e.pageSize=o),onCurrentChange:x,background:"",layout:"prev, pager, next",total:e.total},null,8,["current-page","page-size","total"])]),u("div",null,[t(E,{width:"30%",modelValue:e.gradeFormVisible,"onUpdate:modelValue":a[9]||(a[9]=o=>e.gradeFormVisible=o),title:"成绩信息"},{footer:l(()=>[u("span",H,[t(s,{onClick:a[8]||(a[8]=o=>e.gradeFormVisible=!1)},{default:l(()=>[d("取 消")]),_:1}),t(s,{type:"primary",onClick:k},{default:l(()=>[d("保 存")]),_:1})])]),default:l(()=>[t(h,{model:e.gradeForm,"label-width":"100px","label-position":"right",style:{"margin-right":"40px"}},{default:l(()=>[t(c,{label:"课程名称"},{default:l(()=>[t(n,{modelValue:e.gradeForm.courseName,"onUpdate:modelValue":a[4]||(a[4]=o=>e.gradeForm.courseName=o),autocomplete:"off",disabled:""},null,8,["modelValue"])]),_:1}),t(c,{label:"学生名称"},{default:l(()=>[t(n,{modelValue:e.gradeForm.accountName,"onUpdate:modelValue":a[5]||(a[5]=o=>e.gradeForm.accountName=o),autocomplete:"off",disabled:""},null,8,["modelValue"])]),_:1}),t(c,{label:"学生分数"},{default:l(()=>[t(n,{modelValue:e.gradeForm.score,"onUpdate:modelValue":a[6]||(a[6]=o=>e.gradeForm.score=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(c,{label:"成绩评价"},{default:l(()=>[t(n,{modelValue:e.gradeForm.comment,"onUpdate:modelValue":a[7]||(a[7]=o=>e.gradeForm.comment=o),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])])}}};export{le as default};
