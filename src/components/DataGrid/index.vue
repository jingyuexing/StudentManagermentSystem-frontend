<template>
  <div>
    <a-table :columns="StudentColums" :data-source="data" :rowKey="(record,index)=>record.id">
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #customTitle>
        <span>
          <smile-outlined />
          Name
        </span>
      </template>
      <template #gender="{text:gender}">
        <a-tag :key="gender" :color="gender!=0?'volcano':'green'">{{gender!=0?"男":"女"}}</a-tag>
      </template>
      <template #action>
        <span>
          <a-button type="primary" shape="round">修改</a-button>
          <a-button type="primary" shape="round" danger>删除</a-button>
        </span>
      </template>
    </a-table>
    <!-- <a-row type="flex" justify="center" style="margin: 6px auto">
      <a-pagination
        v-model:current="current"
        :total="totalist"
        @change="changeHandle"
      ></a-pagination>
    </a-row> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import { UserOutlined } from '@ant-design/icons-vue';
import {ref} from 'vue';
import axios from 'axios';
const StudentColums = [
  {
    title:"姓名",
    dataIndex:"name",
    key:"name"
  },
  {
    title:"年龄",
    dataIndex:"age",
    key:"age"
  },
  {
    title:"性别",
    dataIndex:"gender",
    key:"gender",
    slots:{
      customRender:'gender'
    }
  },
  {
    title:"学号",
    dataIndex:"schoolID",
    key:"schoolID"
  },
  {
    title:"手机",
    dataIndex:"phone",
    key:"phone"
  },
  {
    title:"身份证",
    dataIndex:"IDCard",
    key:"IDCard"
  },
  {
    title:"班级号",
    dataIndex:"classID",
    key:"classID"
  },
  {
    title:"年级",
    dataIndex:"grade",
    key:"grade"
  },
  {
    title:"学院",
    dataIndex:"academy",
    key:"academy"
  },
];
const TeacherColums = [
  {
    title:"头像",
    dataIndex:"face",
    key:"face"
  },
  {
    title:"名称",
    dataIndex:"name",
    key:"name"
  },
  {
    title:"年龄",
    dataIndex:"age",
    key:"age"
  },
  {
    title:"性别",
    dataIndex:"gender",
    key:"gender"
  },
  {
    title:"学院",
    dataIndex:"academy",
    key:"academy"
  },
  {
    title:"部门",
    dataIndex:"department",
    key:"department"
  },
];

const AccountColums = [
  {
    title:"用户名",
    dataIndex:"username",
    key:"username"
  },
  {
    title:"密码",
    dataIndex:"paassword",
    key:"paassword"
  },
  {
    title:"手机号",
    dataIndex:"phone",
    key:"phone"
  },
  {
    title:"邮箱",
    dataIndex:"email",
    key:"email"
  },
  {
    title:"后缀",
    dataIndex:"suffix",
    key:"suffix"
  },
  {
    title:"账号类型",
    dataIndex:"accountType",
    key:"accountType"
  },
]


console.log(AccountColums,StudentColums,TeacherColums)
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle', customRender: 'name' },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    slots: { customRender: 'tags' },
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
];


export default {
  name:"DataGrid",
  beforeMount(){
    this.getStudentList(1,10).then(value=>{
      this.data = value.data['data'];
      console.log(value.data.data)
    },(resean)=>{
      console.log(resean)
    })
  },
  data(){
    return {
      current:ref(1),
      totalist:ref(500),
      data:[],
      columns,
      StudentColums,
      TeacherColums,
      AccountColums,
    };
  },
  components: {
  },
  methods:{
    changeHandle(page,pageSize){
      this.getStudentList(page,pageSize).then(function(value){
        this.data = value.data['data'];
      },function(){

      });
    },
    getStudentList(pagesize,page){
      return axios({
        url:"http://localhost:1966/api/interface/v1/student/list",
        params:{
          limit:pagesize,
          page,
        }
      })
    }
  }
};
</script>

<style scope>
.ant-btn {
  margin-right: 10px;
}
</style>
