/* empty css             *//* empty css                    *//* empty css               *//* empty css               *//* empty css                  *//* empty css               *//* empty css                */import{l as C,o as V,c as N,a as i,d as a,b as m,w as s,m as v,n as S,q as k,s as z,x as u,k as c,y as g,A as w}from"./index-84ed3226.js";import{r as _}from"./request-6b8e7046.js";const E={class:"card",style:{"margin-top":"10px","margin-bottom":"10px"}},U={class:"card",style:{"margin-top":"10px"}},B={class:"card",style:{"margin-top":"10px"}},I=i("div",null,null,-1),G={__name:"SelectCourse",setup(D){const e=C({name:"",no:"",teacher:"",tableData:[],total:0,pageNum:1,pageSize:3,user:JSON.parse(localStorage.getItem("student-user")||{})}),p=()=>{_.get("/course/selectPage",{params:{pageNum:e.pageNum,pageSize:e.pageSize,name:e.name,no:e.no,teacher:e.teacher}}).then(l=>{var t,r;e.tableData=((t=l.data)==null?void 0:t.list)||[],e.total=((r=l.data)==null?void 0:r.total)||0})};p();const x=()=>{p()},h=()=>{e.name="",e.name="",e.no="",e.teacher="",p()},f=l=>{_.post("/selectcourse/add",{studentId:e.user.id,courseName:l.name,courseNo:l.no,courseId:l.id}).then(t=>{t.code==="200"?(g.success("选课成功"),p()):g.error(t.msg)})};return(l,t)=>{const r=v,d=S,n=w,b=k,y=z;return V(),N("div",null,[i("div",E,[a(r,{style:{width:"260px","margin-right":"10px"},modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.name=o),placeholder:"请输入课程名称查询:","prefix-icon":m(u)},null,8,["modelValue","prefix-icon"]),a(r,{style:{width:"260px","margin-right":"10px"},modelValue:e.no,"onUpdate:modelValue":t[1]||(t[1]=o=>e.no=o),placeholder:"请输入课程编号查询:","prefix-icon":m(u)},null,8,["modelValue","prefix-icon"]),a(r,{style:{width:"260px","margin-right":"10px"},modelValue:e.teacher,"onUpdate:modelValue":t[2]||(t[2]=o=>e.teacher=o),placeholder:"请输入课程老师查询:","prefix-icon":m(u)},null,8,["modelValue","prefix-icon"]),a(d,{type:"primary",style:{"margin-left":"10px"},onClick:p},{default:s(()=>[c("查询")]),_:1}),a(d,{type:"info",onClick:h},{default:s(()=>[c("重置")]),_:1})]),i("div",U,[i("div",null,[a(b,{data:e.tableData,style:{width:"100%"}},{default:s(()=>[a(n,{prop:"id",label:"序号",width:"80"}),a(n,{prop:"name",label:"课程名称"}),a(n,{prop:"no",label:"课程编号"}),a(n,{prop:"descr",label:"课程描述"}),a(n,{prop:"times",label:"课时"}),a(n,{prop:"teacher",label:"任课老师"}),a(n,{label:"操作",width:"180px"},{default:s(o=>[a(d,{type:"primary",onClick:P=>f(o.row)},{default:s(()=>[c("选 课")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),i("div",B,[a(y,{"current-page":e.pageNum,"onUpdate:currentPage":t[3]||(t[3]=o=>e.pageNum=o),"page-size":e.pageSize,"onUpdate:pageSize":t[4]||(t[4]=o=>e.pageSize=o),onCurrentChange:x,background:"",layout:"prev, pager, next",total:e.total},null,8,["current-page","page-size","total"])]),I])}}};export{G as default};