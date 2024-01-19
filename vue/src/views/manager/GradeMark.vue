<template>
  <div>
    <div class="card" style="margin-top: 10px; margin-bottom: 10px">
      <el-input style="width: 260px; margin-right: 10px" v-model="data.courseName" placeholder="请输入课程名称查询:" :prefix-icon="Search"/>
      <el-input style="width: 260px; margin-right: 10px" v-model="data.studentName" placeholder="请输入学生名称查询:" :prefix-icon="Search"/>
      <el-button type="primary" style="margin-left:10px" @click="load">查询</el-button>
      <el-button type="info" @click="reset">重置</el-button>
    </div>
    <div class="card" style="margin-top: 10px;">
      <div>
        <el-table :data="data.tableData" style="width: 100%">
          <el-table-column prop="id" label="序号" width="80"/>
          <el-table-column prop="courseName" label="课程名称"/>
          <el-table-column prop="studentName" label="学生名称"/>
          <el-table-column prop="score" label="课程分数"/>
          <el-table-column prop="comment" label="老师评语"/>
          <el-table-column prop="feedback" label="学生反馈"/>
          <el-table-column label="操 作" width="180px">
            <template #default = "scope">
              <el-button type="danger" @click="handleDeleteGrade(scope.row.id)" v-if="data.user.role === 'ADMIN'">删 除</el-button>
              <el-button type="primary" @click="handleEditGrade(scope.row)" v-if="data.user.role === 'ADMIN'">编 辑</el-button>
              <el-button type="primary" @click="setFeedback(scope.row)" v-if="data.user.role==='STUDENT'">反 馈</el-button>
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
      <el-dialog width="30%" v-model="data.feedbackFromVisable" title="反馈信息">
        <el-form :model="data.form" label-width="100px" label-position="right" style="margin-right: 40px">
          <el-form-item label="课程名称" >
            <el-input v-model="data.form.courseName" autocomplete="off" disabled/>
          </el-form-item>
          <el-form-item label="学生名称">
            <el-input v-model="data.form.studentName" autocomplete="off" disabled/>
          </el-form-item>
          <el-form-item label="课程评分" v-if="data.user.role === 'ADMIN'">
            <el-input v-model="data.form.score" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="老师评语" v-if="data.user.role === 'ADMIN'">
            <el-input v-model="data.form.comment" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="学生评价" v-if="data.user.role === 'STUDETN'">
            <el-input type="textarea" v-model="data.form.feedback" autocomplete="off" />
          </el-form-item>
        </el-form>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="data.feedbackFromVisable = false">取 消</el-button>
        <el-button type="primary" @click="gradeFormSave">保 存</el-button>
      </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import {Search} from "@element-plus/icons-vue";
import request from "@/utils/request";
import {ElMessage, ElMessageBox} from "element-plus";


const data = reactive({
  courseName: '',
  studentName: '',
  tableData: [],
  total: 0,
  pageNum: 1,   //每页个数
  pageSize: 3,  //当前页码
  user: JSON.parse(localStorage.getItem('student-user') || {}),
  form: {},
  feedbackFromVisable: false,
})
const load = () =>{
  const params = {
    pageNum: data.pageNum,
    pageSize: data.pageSize,
    courseName: data.courseName,
    studentName: data.studentName,
  };
  if (data.user.role === 'STUDENT') {
    params.studentId = data.user.id;
  }
  request.get('/grade/selectPage', { params: params }).then(res => {
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
      data.courseName = '',
      data.studentName='',
      load()
}
const handleDeleteGrade = (id) => {
  ElMessageBox.confirm('删除的数据无法恢复，您确定删除吗？','删除确认', {type:'warning'}).then(res => {
    request.delete('/grade/delete/' + id).then(res => {
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
const setFeedback = (row) =>{

  data.feedbackFromVisable = true
  data.form = JSON.parse(JSON.stringify(row))

}

const gradeFormSave = () => {
  request.put('/grade/update', data.form).then(res => {
    if(res.code === '200'){
      data.feedbackFromVisable = false
      ElMessage.success("操作成功")
      load()
    }else {
      ElMessage.error(res.msg)
    }
  })
}

const handleEditGrade = (row) => {
  data.feedbackFromVisable = true
  data.form = JSON.parse(JSON.stringify(row))

}
</script>