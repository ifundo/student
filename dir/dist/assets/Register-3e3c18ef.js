/* empty css             *//* empty css                  *//* empty css               */import{r as v}from"./request-fdbd87a6.js";import{_ as w,l as m,D as y,o as b,c as V,a as r,d as o,w as s,C as k,k as c,p as E,g as I,y as u,L as B,m as R,B as q,n as C}from"./index-eeec9794.js";const _=l=>(E("data-v-6ce79620"),l=l(),I(),l),N={class:"login-container"},S={style:{width:"350px"},class:"login-box"},U=_(()=>r("div",{style:{"font-weight":"bold","font-size":"24px","text-align":"center","margin-bottom":"30px"}},"注 册",-1)),F=_(()=>r("div",{style:{"margin-top":"30px","text-align":"right"}},[c(" 已有账号？请"),r("a",{href:"/login"},"登陆")],-1)),L={__name:"Register",setup(l){const t=m({form:{role:""}}),f=m({username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],role:[{required:!0,message:"请选择角色",trigger:"blur"}]}),i=y(),g=()=>{i.value.validate(d=>{d&&v.post("/register",t.form).then(e=>{e.code==="200"?(u.success("注册成功"),B.push("/login")):u.error(e.msg)})})};return(d,e)=>{const p=R,a=q,x=C,h=k;return b(),V("div",null,[r("div",N,[r("div",S,[U,o(h,{model:t.form,ref_key:"formRef",ref:i,rules:f},{default:s(()=>[o(a,{label:"账户",prop:"username"},{default:s(()=>[o(p,{"prefix-icon":"User",modelValue:t.form.username,"onUpdate:modelValue":e[0]||(e[0]=n=>t.form.username=n),placeholder:"清输入账号"},null,8,["modelValue"])]),_:1}),o(a,{label:"密码",prop:"password"},{default:s(()=>[o(p,{"show-password":"","prefix-icon":"Lock",modelValue:t.form.password,"onUpdate:modelValue":e[1]||(e[1]=n=>t.form.password=n),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),o(a,null,{default:s(()=>[o(x,{type:"primary",style:{width:"100%"},onClick:g},{default:s(()=>[c("注 册")]),_:1})]),_:1})]),_:1},8,["model","rules"]),F])])])}}},A=w(L,[["__scopeId","data-v-6ce79620"]]);export{A as default};
