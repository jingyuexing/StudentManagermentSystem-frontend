<template>
  <a-layout>
    <a-layout-content></a-layout-content>
  </a-layout>
</template>
<script>
  export default {
    name:"studentEditor",
    mounted(){
      console.log(this.$route.query)
    },
    components:{}
  }
</script>
