<template>
  <a-layout :style="{height: '100%'}">
      <a-layout-header>
        <h1>学生管理系统</h1>
      </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <side-bar/>
      </a-layout-sider>
      <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin:'0 auto'}"
        >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  import SideBar from "./components/DashBoard/SideBar.vue"
  export default {
    components:{
      SideBar
    }
  }
</script>
<style scope>
  #app{
    height: 100%;
  }
  .ant-layout-header h1{
    font-weight: bold;
    color: #fff;
  }
</style>
