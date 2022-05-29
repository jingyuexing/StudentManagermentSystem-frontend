<template>
  <a-layout>
    <a-layout-content>
      <a-input-search
        v-model:value="value"
        size="large"
        placeholder="seatch student"
        style="/*width: 200px*/"
        @search="onSearch"
    />
    <a-laout>
      <a-table :data-source="data" :rowKey="(record,index)=>record.id"></a-table>
    </a-laout>
    </a-layout-content>
  </a-layout>
</template>
<script>
  export default {
    name:"studentEditor",
    mounted(){
      // console.log(this.$route.path)
    },
    data(){
      return {
        value:"",
        data:[]
      }
    },
    components:{

    },
    methods:{
      onSearch(){

      }
    }
  }
</script>

<style>
  .ant-input-searchant-input-search{
    margin-bottom: 30px;
  }
</style>
