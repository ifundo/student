/* empty css             *//* empty css               *//* empty css                    *//* empty css                  *//* empty css              *//* empty css             *//* empty css               *//* empty css                  *//* empty css               *//* empty css               *//* empty css                */import{l as V,D as J,o as c,c as y,a as i,d as a,b as v,w as t,m as O,n as $,q as A,s as G,v as H,x,k as p,e as w,f as j,y as f,z as K,A as L,F as Q,B as W,G as X,H as Z,I as ee,J as ae,C as le,h as oe}from"./index-84ed3226.js";import{r as _}from"./request-6b8e7046.js";const te={class:"card",style:{"margin-top":"10px","margin-bottom":"10px"}},re={class:"card",style:{"margin-top":"10px"}},ne={class:"card",style:{"margin-top":"10px"}},se=["src"],me={class:"dialog-footer"},he={__name:"Student",setup(de){const e=V({username:"",name:"",tableData:[],total:0,pageNum:1,pageSize:3,formVisible:!1,form:{}}),u=()=>{_.get("/student/selectPage",{params:{pageNum:e.pageNum,pageSize:e.pageSize,username:e.username,name:e.name}}).then(n=>{var l,r;e.tableData=((l=n.data)==null?void 0:l.list)||[],e.total=((r=n.data)==null?void 0:r.total)||0})};u();const h=()=>{u()},k=()=>{e.username="",e.name="",u()},E=V({username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),g=J(),C=()=>{e.form={},e.formVisible=!0},S=()=>{g.value.validate(n=>{n&&_.request({url:e.form.id?"/student/updateStudentById":"/student/addStudent",method:e.form.id?"PUT":"POST",data:e.form}).then(l=>{l.code==="200"?(f.success("操作成功"),u(),e.formVisible=!1):f.error(l.msg)})})},U=n=>{e.form=JSON.parse(JSON.stringify(n)),e.formVisible=!0},D=n=>{K.confirm("删除的数据无法恢复，您确定删除吗？","删除确认",{type:"warning"}).then(l=>{_.delete("/student/deleteStudentById/"+n).then(r=>{r.code==="200"?(f.success("操作成功"),u()):f.error(r.msg)})}).catch(l=>{f({type:"info",message:"删除取消"})})},N=n=>{e.form.avatar=n.data};return(n,l)=>{const r=O,d=$,s=L,z=Q,B=A,I=G,m=W,b=X,Y=Z,M=ee,P=oe,q=ae,T=le,F=H;return c(),y("div",null,[i("div",te,[a(r,{style:{width:"260px","margin-right":"10px"},modelValue:e.username,"onUpdate:modelValue":l[0]||(l[0]=o=>e.username=o),placeholder:"请输入账号查询:","prefix-icon":v(x)},null,8,["modelValue","prefix-icon"]),a(r,{style:{width:"260px","margin-right":"10px"},modelValue:e.name,"onUpdate:modelValue":l[1]||(l[1]=o=>e.name=o),placeholder:"请输入名称查询:","prefix-icon":v(x)},null,8,["modelValue","prefix-icon"]),a(d,{type:"primary",style:{"margin-left":"10px"},onClick:u},{default:t(()=>[p("查 询")]),_:1}),a(d,{type:"info",onClick:k},{default:t(()=>[p("重 置")]),_:1})]),i("div",re,[i("div",null,[a(d,{type:"primary",onClick:C},{default:t(()=>[p("新 增")]),_:1})]),i("div",null,[a(B,{data:e.tableData,style:{width:"100%"}},{default:t(()=>[a(s,{prop:"id",label:"序号",width:"80"}),a(s,{prop:"username",label:"学生账号"}),a(s,{prop:"name",label:"学生名称"}),a(s,{prop:"phone",label:"学生手机"}),a(s,{prop:"email",label:"学生邮箱"}),a(s,{prop:"sex",label:"学生性别"}),a(s,{prop:"birth",label:"学生生日"}),a(s,{prop:"avatar",label:"学生头像"},{default:t(o=>[o.row.avatar?(c(),w(z,{key:0,src:o.row.avatar,"preview-src-list":[o.row.avatar],style:{width:"40px",height:"40px","border-radius":"5px"}},null,8,["src","preview-src-list"])):j("",!0)]),_:1}),a(s,{label:"操作",width:"180px"},{default:t(o=>[a(d,{type:"primary",onClick:R=>U(o.row)},{default:t(()=>[p("编 辑")]),_:2},1032,["onClick"]),a(d,{type:"danger",onClick:R=>D(o.row.id)},{default:t(()=>[p("删 除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),i("div",ne,[a(I,{"current-page":e.pageNum,"onUpdate:currentPage":l[2]||(l[2]=o=>e.pageNum=o),"page-size":e.pageSize,"onUpdate:pageSize":l[3]||(l[3]=o=>e.pageSize=o),onCurrentChange:h,background:"",layout:"prev, pager, next",total:e.total},null,8,["current-page","page-size","total"])]),i("div",null,[a(F,{width:"30%",modelValue:e.formVisible,"onUpdate:modelValue":l[12]||(l[12]=o=>e.formVisible=o),title:"学生信息","destroy-on-close":""},{footer:t(()=>[i("span",me,[a(d,{onClick:l[11]||(l[11]=o=>e.formVisible=!1)},{default:t(()=>[p("取 消")]),_:1}),a(d,{type:"primary",onClick:S},{default:t(()=>[p("保 存")]),_:1})])]),default:t(()=>[a(T,{model:e.form,rules:E,ref_key:"formRef",ref:g,"label-width":"100px","label-position":"right",style:{"margin-right":"40px"}},{default:t(()=>[a(m,{label:"学生账号",prop:"username"},{default:t(()=>[a(r,{modelValue:e.form.username,"onUpdate:modelValue":l[4]||(l[4]=o=>e.form.username=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"学生密码",prop:"password"},{default:t(()=>[a(r,{"show-password":"",modelValue:e.form.password,"onUpdate:modelValue":l[5]||(l[5]=o=>e.form.password=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"学生名称"},{default:t(()=>[a(r,{modelValue:e.form.name,"onUpdate:modelValue":l[6]||(l[6]=o=>e.form.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"学生手机"},{default:t(()=>[a(r,{modelValue:e.form.phone,"onUpdate:modelValue":l[7]||(l[7]=o=>e.form.phone=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"学生邮箱"},{default:t(()=>[a(r,{modelValue:e.form.email,"onUpdate:modelValue":l[8]||(l[8]=o=>e.form.email=o),autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(m,{label:"学生性别"},{default:t(()=>[a(Y,{modelValue:e.form.sex,"onUpdate:modelValue":l[9]||(l[9]=o=>e.form.sex=o)},{default:t(()=>[a(b,{label:"男"}),a(b,{label:"女"})]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"学生生日"},{default:t(()=>[a(M,{modelValue:e.form.birth,"onUpdate:modelValue":l[10]||(l[10]=o=>e.form.birth=o),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),a(m,{label:"学生头像"},{default:t(()=>[a(q,{class:"avatar-uploader",action:"http://localhost:9090/files/uploadFile","show-file-list":!1,"on-success":N},{default:t(()=>[e.form.avatar?(c(),y("img",{key:0,src:e.form.avatar,class:"avatar"},null,8,se)):(c(),w(P,{key:1,class:"el-icon-plus avatar-uploader-icon"}))]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])])}}};export{he as default};
