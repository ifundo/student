/* empty css             *//* empty css                    *//* empty css               *//* empty css               *//* empty css                  *//* empty css               *//* empty css                */import{l as C,o as N,c as V,a as i,d as a,b as m,w as p,m as S,n as v,q as z,s as k,x as u,k as d,t as w,y as g,A as E}from"./index-eeec9794.js";import{r as _}from"./request-fdbd87a6.js";const U={class:"card",style:{"margin-top":"10px","margin-bottom":"10px"}},B={class:"card",style:{"margin-top":"10px"}},D={class:"card",style:{"margin-top":"10px"}},I=i("div",null,null,-1),H={__name:"SelectCourse",setup(P){const e=C({name:"",no:"",teacher:"",tableData:[],total:0,pageNum:1,pageSize:8,user:JSON.parse(localStorage.getItem("account-user")||{})}),s=()=>{_.get("/course/selectPage",{params:{pageNum:e.pageNum,pageSize:e.pageSize,name:e.name,no:e.no,teacher:e.teacher}}).then(l=>{var t,r;e.tableData=((t=l.data)==null?void 0:t.list)||[],e.total=((r=l.data)==null?void 0:r.total)||0})};s();const x=()=>{s()},f=()=>{e.name="",e.name="",e.no="",e.teacher="",s()},h=l=>{_.post("/selectcourse/add",{accountId:e.user.id,courseName:l.name,courseNo:l.no,courseId:l.id}).then(t=>{t.code==="200"?(g.success("选课成功"),s()):g.error(t.msg)})};return(l,t)=>{const r=S,c=v,n=E,b=z,y=k;return N(),V("div",null,[i("div",U,[a(r,{style:{width:"260px","margin-right":"10px"},modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.name=o),placeholder:"请输入课程名称查询:","prefix-icon":m(u)},null,8,["modelValue","prefix-icon"]),a(r,{style:{width:"260px","margin-right":"10px"},modelValue:e.no,"onUpdate:modelValue":t[1]||(t[1]=o=>e.no=o),placeholder:"请输入课程编号查询:","prefix-icon":m(u)},null,8,["modelValue","prefix-icon"]),a(r,{style:{width:"260px","margin-right":"10px"},modelValue:e.teacher,"onUpdate:modelValue":t[2]||(t[2]=o=>e.teacher=o),placeholder:"请输入课程老师查询:","prefix-icon":m(u)},null,8,["modelValue","prefix-icon"]),a(c,{type:"primary",style:{"margin-left":"10px"},onClick:s},{default:p(()=>[d("查询")]),_:1}),a(c,{type:"info",onClick:f},{default:p(()=>[d("重置")]),_:1})]),i("div",B,[i("div",null,[a(b,{data:e.tableData,style:{width:"100%"}},{default:p(()=>[a(n,{type:"index",label:"序号",width:"80",align:"center"},{default:p(({$index:o})=>[d(w(o+1+(e.pageNum-1)*e.pageSize),1)]),_:1}),a(n,{prop:"name",label:"课程名称"}),a(n,{prop:"no",label:"课程编号"}),a(n,{prop:"descr",label:"课程描述"}),a(n,{prop:"times",label:"课时"}),a(n,{prop:"teacher",label:"任课老师"}),a(n,{label:"操作",width:"180px"},{default:p(o=>[a(c,{type:"primary",onClick:T=>h(o.row)},{default:p(()=>[d("选 课")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),i("div",D,[a(y,{"current-page":e.pageNum,"onUpdate:currentPage":t[3]||(t[3]=o=>e.pageNum=o),"page-size":e.pageSize,"onUpdate:pageSize":t[4]||(t[4]=o=>e.pageSize=o),onCurrentChange:x,background:"",layout:"prev, pager, next",total:e.total},null,8,["current-page","page-size","total"])]),I])}}};export{H as default};
