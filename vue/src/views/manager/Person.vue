<template>
  <div>
    <div class="card" style="width: 60%;margin-left: 20%;margin-top: 5%">
      <el-form :model="data.form" :rules="rules" ref="formRef" label-width="100px" label-position="right" style="margin-right: 40px">
        <el-form-item label="学生头像">
          <el-upload class="avatar-uploader" action="http://localhost:9090/files/uploadFile" :show-file-list="false" :on-success="handleImgUploadSuccess">
            <img v-if="data.form.avatar" :src = "data.form.avatar" class="avatar"/>
            <el-icon v-else class="el-icon-plus avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="学生账号" prop="username">
          <el-input v-model="data.form.username" autocomplete="off" disabled />
        </el-form-item>
        <el-form-item label="学生密码" prop="password">
          <el-input show-password v-model="data.form.password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生名称">
          <el-input v-model="data.form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生手机">
          <el-input v-model="data.form.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生邮箱">
          <el-input v-model="data.form.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学生性别">
          <el-radio-group v-model="data.form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学生生日">
          <el-date-picker v-model="data.form.birth" format="YYYY-MM-DD" value-format="YYYY-MM-DD"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updatePerson">保 存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import {reactive, ref} from "vue";
import request from "@/utils/request";
import {ElMessage} from "element-plus";
import router from "@/router";
import {Plus} from "@element-plus/icons-vue";

const data = reactive({
  form: JSON.parse(localStorage.getItem('account-user') || "{}"),
})

const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'}
  ],
})

const formRef = ref()

const handleImgUploadSuccess = (res) => {
  data.form.avatar = res.data
}

const updatePerson = () => {
  formRef.value.validate((valid) => {
    if (valid){
      request.put("/account/updateAccountById", data.form).then(res => {
        if (res.code === '200'){
          request.get("/account/selectAccount", {
            params: {
              username: data.form.username,
              role: data.form.role
            }
          }).then(res2 => {
            if (res2.code === '200'){
              localStorage.setItem('account-user', JSON.stringify(res2.data))
              ElMessage.success("操作成功")
            }else {
              ElMessage.error(res2.msg)
            }
          })
          router.push('/person')
        }else {
          ElMessage.error(res.msg)
        }
      })
    }
  })
}
</script>
<style scoped>
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>