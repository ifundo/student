<template>
  <div>
    <div class="card" style="margin-top: 10px; margin-bottom: 10px">
      <el-input style="width: 260px; margin-right: 10px" v-model="data.username" placeholder="请输入账号查询:" :prefix-icon="Search"/>
      <el-input style="width: 260px; margin-right: 10px" v-model="data.name" placeholder="请输入名称查询:" :prefix-icon="Search"/>
      <el-button type="primary" style="margin-left:10px" @click="load">查 询</el-button>
      <el-button type="info" @click="reset">重 置</el-button>
    </div>
    <div class="card" style="margin-top: 10px;">
      <div >
        <el-button type="primary" @click="handleAdd">新 增</el-button>
      </div>
        <div>
          <el-table :data="data.tableData" style="width: 100%">
            <el-table-column prop="id" label="序号" width="80"/>
            <el-table-column prop="username" label="学生账号"/>
<!--            <el-table-column prop="password" label="学生密码"/>-->
            <el-table-column prop="name" label="学生名称"/>
            <el-table-column prop="phone" label="学生手机"/>
            <el-table-column prop="email" label="学生邮箱"/>
            <el-table-column prop="sex" label="学生性别" />
            <el-table-column prop="birth" label="学生生日" />
            <el-table-column prop="avatar" label="学生头像">
              <template #default="scope">
                <el-image v-if="scope.row.avatar" :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]" style="width: 40px; height: 40px; border-radius: 5px"/>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="180px">
              <template #default = "scope">
                <el-button type="primary" @click="handleEdit(scope.row)">编 辑</el-button>
                <el-button type="danger" @click="handleDelete(scope.row.id)">删 除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
    </div>
    <div class="card" style="margin-top: 10px">
      <el-pagination v-model:current-page="data.pageNum"
                     v-model:page-size="data.pageSize"
                     @current-change="handleCurrentChange"
                     background layout="prev, pager, next"
                     :total="data.total"/>
    </div>

    <div>
      <el-dialog width="30%" v-model="data.formVisible" title="学生信息" destroy-on-close>
        <el-form :model="data.form" :rules="rules" ref="formRef" label-width="100px" label-position="right" style="margin-right: 40px">
          <el-form-item label="学生账号" prop="username">
            <el-input v-model="data.form.username" autocomplete="off" />
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
          <el-form-item label="学生头像">
            <el-upload class="avatar-uploader" action="http://localhost:9090/files/uploadFile" :show-file-list="false" :on-success="handleImgUploadSuccess">
              <img v-if="data.form.avatar" :src = "data.form.avatar" class="avatar"/>
              <el-icon v-else class="el-icon-plus avatar-uploader-icon"></el-icon>
            </el-upload>
          </el-form-item>
        </el-form>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="data.formVisible = false">取 消</el-button>
        <el-button type="primary" @click="formSave">保 存</el-button>
      </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {Search} from "@element-plus/icons-vue";
import request from "@/utils/request";
import {ElMessage, ElMessageBox} from "element-plus";

const data = reactive({
  username: '',
  name: '',
  tableData: [],
  total: 0,
  pageNum: 1,   //每页个数
  pageSize: 3,  //当前页码
  formVisible: false,
  form:{},
})
const load = () =>{
  request.get('/student/selectPage', {
    params: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      username: data.username,
      name: data.name,
    }
  }).then(res => {
    data.tableData = res.data?.list || []
    data.total = res.data?.total || 0
  })
}
//调用方法 获取数据库数据
load()

const handleCurrentChange = () => {
  load()
}

const reset = () => {
  data.username = '',
  data.name='',
  load()
}
const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'}
  ],
})

const formRef = ref()
const handleAdd = () => {
  data.form = {}
  data.formVisible = true
}

const formSave = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      request.request({
        url: data.form.id ? '/student/updateStudentById' : '/student/addStudent',
        method: data.form.id ? 'PUT' : 'POST',
        data: data.form
      }).then(res => {
        if(res.code === '200'){
          ElMessage.success("操作成功")
          load()
          data.formVisible = false
        }else {
          ElMessage.error(res.msg)
        }
      })
    }
  })
}
const handleEdit = (row) => {
  data.form = JSON.parse(JSON.stringify(row))
  data.formVisible = true
}
const handleDelete = (id) => {
  ElMessageBox.confirm('删除的数据无法恢复，您确定删除吗？','删除确认', {type:'warning'}).then(res => {
    request.delete('/student/deleteStudentById/' + id).then(res => {
      if (res.code === '200'){
        ElMessage.success("操作成功")
        load()
      }else {
        ElMessage.error(res.msg)
      }
    })
  }).catch(res => {
    ElMessage({
      type: 'info',
      message: '删除取消',
    })
  })
}

const handleImgUploadSuccess = (res) => {
  data.form.avatar = res.data
}
</script>

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
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>