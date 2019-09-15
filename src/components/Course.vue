<template>
    <div class="course">
      <div class="title">
<!--        <el-link href="#" target="_blank" class="learn">进入课程</el-link>-->
        <span>课程名称</span>
      </div>
      <div class="below">
        <div>
          <div class="time"><span>上课时间</span></div>
          <div class="teacher"><span>授课</span></div>
          <div class="status"><span>课程状态</span></div>
          <div class="tags">
            <el-tag class="tag">标签一</el-tag>
            <el-tag class="tag">标签二</el-tag>
            <el-tag class="tag">标签三</el-tag>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Course.vue"
    }
</script>

<style scoped>
  /**{*/
  /*  margin:0;*/
  /*  padding:0;*/
  /*}*/
  .course{
    width:46%;
    float:left;
    margin:2%;
    /*padding:1%;*/
    background-color: #f5f5f5;
    height:250px;
    cursor:pointer;
  }

  .course:hover{
    /*border-top:1px solid #4FB59D;*/
    /*transform:translateY(-5px);*/
    box-shadow:1px 1px 2px #333333;
  }
  .below{
    margin:20px;
  }

  .tag{
    margin:5px;
  }
  .tags{
    margin:30px;
  }
  .title{
    margin:30px;
    font-size: x-large;
    color:#47a0ff;
  }

</style>
