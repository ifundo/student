<template>
  <div>
    <div class="card" style="margin-top: 10px; margin-bottom: 10px">
      <el-input style="width: 260px; margin-right: 10px" v-model="data.name" placeholder="请输入课程名称查询:" :prefix-icon="Search"/>
      <el-input style="width: 260px; margin-right: 10px" v-model="data.no" placeholder="请输入课程编号查询:" :prefix-icon="Search"/>
      <el-button type="primary" style="margin-left:10px" @click="load">查询</el-button>
      <el-button type="info" @click="reset">重置</el-button>
    </div>
    <div class="card" style="margin-top: 10px;">
      <div>
        <el-table :data="data.tableData" style="width: 100%">
<!--          <el-table-column prop="id" label="序号" width="80"/>-->
          <el-table-column type="index" label="序号" width="80" align="center" >
            <template v-slot="{ $index }">
              {{ ($index + 1) + (data.pageNum - 1) * data.pageSize }}
            </template>
          </el-table-column>
          <el-table-column prop="courseName" label="课程名称"/>
          <el-table-column prop="courseNo" label="课程编号"/>
          <el-table-column prop="accountName" label="学生名称" v-if="data.user.role === 'ADMIN'"/>
          <el-table-column label="操 作" width="180px">
            <template #default = "scope">
              <el-button type="danger" @click="handleDeleteCourse(scope.row.courseId)">删 除</el-button>
              <el-button type="primary" @click="handleMarkCourse(scope.row)" v-if="data.user.role==='ADMIN'">打 分</el-button>
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
      <el-dialog width="30%" v-model="data.gradeFormVisible" title="成绩信息">
        <el-form :model="data.gradeForm" label-width="100px" label-position="right" style="margin-right: 40px">
          <el-form-item label="课程名称">
            <el-input v-model="data.gradeForm.courseName" autocomplete="off" disabled/>
          </el-form-item>
          <el-form-item label="学生名称">
            <el-input v-model="data.gradeForm.accountName" autocomplete="off" disabled/>
          </el-form-item>
          <el-form-item label="学生分数">
            <el-input v-model="data.gradeForm.score" autocomplete="off" />
          </el-form-item>
          <el-form-item label="成绩评价">
            <el-input v-model="data.gradeForm.comment" autocomplete="off" />
          </el-form-item>
        </el-form>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="data.gradeFormVisible = false">取 消</el-button>
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
  name: '',
  no: '',
  tableData: [],
  total: 0,
  pageNum: 1,   //每页个数
  pageSize: 8,  //当前页码
  user: JSON.parse(localStorage.getItem('account-user') || {}),
  gradeForm: {},
  gradeFormVisible: false,
})
const load = () =>{
  const params = {
    pageNum: data.pageNum,
    pageSize: data.pageSize,
    courseName: data.name,
    courseNo: data.no,
  };
  if (data.user.role === 'account') {
    params.accountId = data.user.id;
  }
  request.get('/selectcourse/selectPage', { params }).then(res => {
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
      data.name = '',
      data.no='',
      load()
}
const handleDeleteCourse = (courseId) => {
  ElMessageBox.confirm('删除的数据无法恢复，您确定删除吗？','删除确认', {type:'warning'}).then(res => {
    request.delete('/selectcourse/deleteCourse/' + courseId).then(res => {
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
const handleMarkCourse = (row) =>{

  // data.gradeForm.
  data.gradeFormVisible = true
  data.gradeForm.courseName = row.courseName
  data.gradeForm.accountName = row.accountName
  data.gradeForm.accountId = row.accountId
  data.gradeForm.courseId = row.courseId;
}

const gradeFormSave = () => {
  request.post('/grade/add', data.gradeForm).then(res => {
    if(res.code === '200'){
      data.gradeFormVisible = false
      ElMessage.success("操作成功")
      load()
    }else {
      ElMessage.error(res.msg)
    }
  })
}
</script>