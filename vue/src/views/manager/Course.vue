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
      <div >
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </div>
        <div>
          <el-table :data="data.tableData" style="width: 100%">
<!--            <el-table-column prop="id" label="序号" width="80"/>-->
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
      <el-dialog width="30%" v-model="data.formVisible" title="课程信息">
        <el-form :model="data.form" label-width="100px" label-position="right" style="margin-right: 40px">
          <el-form-item label="课程名称">
            <el-input v-model="data.form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="课程编号">
            <el-input v-model="data.form.no" autocomplete="off" />
          </el-form-item>
          <el-form-item label="课程描述">
            <el-input v-model="data.form.descr" autocomplete="off" />
          </el-form-item>
          <el-form-item label="课程时间">
            <el-input v-model="data.form.times" autocomplete="off" />
          </el-form-item>
          <el-form-item label="课程老师">
            <el-input v-model="data.form.teacher" autocomplete="off" />
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
  pageNum: 1,   //每页个数
  pageSize: 10,  //当前页码
  formVisible: false,
  form:{},
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

const handleAdd = () => {
  data.form = {}
  data.formVisible = true
}

const formSave = () => {
  request.request({
    url: data.form.id ? '/course/updateCourseById' : 'course/addCourse',
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
const handleEdit = (row) => {
  data.form = JSON.parse(JSON.stringify(row))
  data.formVisible = true
}
const handleDelete = (id) => {
  ElMessageBox.confirm('删除的数据无法恢复，您确定删除吗？','删除确认', {type:'warning'}).then(res => {
    request.delete('/course/deleteCourseById/' + id).then(res => {
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
</script>