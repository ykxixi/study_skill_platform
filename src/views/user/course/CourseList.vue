<template>
 <div>
  <el-card style="height: 500px; width: 100%">
    <div slot="header" class="clearfix">
      <span>推荐课程列表</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="toCourseSearch">更多课程</el-button>
    </div>


  </el-card>
 </div>
</template>

<script>
    export default {
        name: "CourseList",
        methods: {
          toCourseSearch(){
              this.$router.push('/course-search')
          }
      }
    }
</script>

<style scoped>

</style>
