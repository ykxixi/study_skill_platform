<template>
    <div>
      <div class="gray">
        <el-link href="#" target="_blank" class="learn">进入课程</el-link>
        <span>
          <span class="itemone">id</span>
          <span class="itemone">name</span>
        </span>
      </div>
      <div class="below">

        <div>
          <span class="itemtwo">授课：</span>
          <span class="itemtwo">上课时间：</span>
          <span class="itemtwo">价格：</span>
          <span class="itemtwo">课程状态：</span>
          <div class="tag">
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
  .gray{
    background-color: gray;
    margin:0px;
    width:100%;
    height:30px;
  }
  .learn{
    float:left;
    margin-left:5px;
  }
  .itemone{
    margin:15px;
  }
  .tag{
    margin:5px;
  }
  .below{
    border-color: #202020;
    border-style:solid;
    border-width:1px;
    margin-left:0px;
    margin-right:0px;
    margin-top:0px;
    margin-bottom:10px;
  }
  .itemtwo{
    margin:10px;
  }
</style>
