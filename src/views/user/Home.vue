<template>
 <div>
  <Layout></Layout>
  <el-main>
   <el-row>picture</el-row>
   <!-- <Index style="margin: 50px"></Index> -->
   <CourseList style="margin: 50px"></CourseList>
   <TeacherList style="margin: 50px"></TeacherList>
  </el-main>
 </div>

</template>

<script>

    import CourseList from "./course/CourseList";
    import Layout from "../../components/Layout";
    import TeacherList from "./course/TeacherList";

    export default {
        name: "Home",
        components: {
      
         TeacherList,
         Layout,
         CourseList,

        },
    }

</script>

<style scoped>
    @import url("//unpkg.com/element-ui@2.11.0/lib/theme-chalk/index.css");
    .el-header {
        background: #faffb7;
        padding: 0;
    }
    .el-container{
        background: gray;
        padding: 0;
        margin: 0;
        border: 0;
        height: 100%;
        vertical-align: middle;
    }

</style>
