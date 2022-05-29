<template>
  <a-menu
    mode="inline"
    v-model:selectedKeys="selectedKeys2"
    v-model:openKeys="openKeys"
    :style="{ height: '100%', borderRight: 0 }"
  >
    <a-sub-menu key="sub1">
      <template #title>教师管理</template>
      <a-menu-item key="1">
        <router-link to="/teacher">添加教师信息</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/teacher/edit">修改教师信息</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/teacher/query">查询教师信息</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/teacher">删除教师信息</router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #title>学生管理</template>
      <a-menu-item key="5">
        <router-link to="/student">添加学生信息</router-link>
      </a-menu-item>
      <a-menu-item key="6">
        <router-link to="/student/edit">修改学生信息</router-link>
      </a-menu-item>
      <a-menu-item key="7">
        <router-link to="/student/query">查询学生信息</router-link>
      </a-menu-item>
      <a-menu-item key="8">
        <router-link to="/student">删除学生信息</router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <template #title>账号管理</template>
      <a-menu-item key="9">
        <router-link to="/admin">删除账号</router-link>
      </a-menu-item>
      <a-menu-item key="10">修改账号信息</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub4">
      <template #title>登录</template>
      <a-menu-item>
        <router-link to="/login">
          登录
        </router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
    name:"SiderBar",
}
</script>

<style>
</style>
