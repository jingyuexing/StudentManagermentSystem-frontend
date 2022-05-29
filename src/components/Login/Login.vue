<template>
  <a-row type="flex" justify="center" align="center">
    <a-col :span="4">
      <a-form :model="login">
        <a-form-item label="用户">
          <a-input
            placeholder="用户名或者邮箱"
            v-model:value="login.username"/>
        </a-form-item>
        <a-form-item label="密码">
          <a-input
            placeholder="密码"
            v-model:value="login.password"/>
        </a-form-item>
        <a-form-item>
          <a-row type="flex" justify="space-around">
            <a-col :span="2">
              <a-button
                size="large"
                shape="round"
                type="primary">
                  登录
              </a-button>
            </a-col>
            <a-col :span="2">
              <a-button
                id
                size="large"
                shape="round"
                >
                  注册
              </a-button>
            </a-col>
          </a-row>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'loginPage',
        data(){
          return {
            login:{
              password:"",
              username:""
            }
          }
        },
        components:{
        }
    }
</script>

<style scope>
  .ant-btn{
  }
</style>
