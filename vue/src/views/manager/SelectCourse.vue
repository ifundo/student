<template>
  <div>
    <div class="card" style="margin-top: 10px; margin-bottom: 10px">
      <el-input style="width: 260px; margin-right: 10px" v-model="data.name" placeholder="请输入课程名称查询:" :prefix-icon="Search"/>
      <el-input style="width: 260px; margin-right: 10px" v-model="data.no" placeholder="请输入课程编号查询:" :prefix-icon="Search"/>
      <el-input style="width: 260px; margin-right: 10px" v-model="data.teacher" placeholder="请输入课程老师查询:" :prefix-icon="Search"/>
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
          <el-table-column prop="name" label="课程名称"/>
          <el-table-column prop="no" label="课程编号"/>
          <el-table-column prop="descr" label="课程描述"/>
          <el-table-column prop="times" label="课时"/>
          <el-table-column prop="teacher" label="任课老师" />
          <el-table-column label="操作" width="180px">
            <template #default = "scope">
              <el-button type="primary" @click="selectCourse(scope.row)">选 课</el-button>
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
  teacher: '',
  tableData: [],
  total: 0,
  pageNum: 1,   //当前页码
  pageSize: 8,  //每页个数
  user: JSON.parse(localStorage.getItem('account-user') || {}),
})
const load = () =>{
  request.get('/course/selectPage', {
    params: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      name: data.name,
      no: data.no,
      teacher: data.teacher,
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
  data.name = '',
      data.name='',
      data.no='',
      data.teacher='',
      load()
}
const selectCourse = (row) => {
  request.post('/selectcourse/add', {
    accountId: data.user.id,
    courseName: row.name,
    courseNo: row.no,
    courseId: row.id
  }).then(res => {
    if (res.code === '200'){
      ElMessage.success("选课成功")
      load()
    }else {
      ElMessage.error(res.msg)
    }
  })
}

</script>