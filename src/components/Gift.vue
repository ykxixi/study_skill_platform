<template>
  <div class="aGift">
    <div class="img">
      <img src="../assets/images/包.jpg" alt="礼品图片"/>
    </div>
    <div class="name">礼品名称</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
</template>

<script>
    export default {
        name: "Gift.vue",
        data(){
            return{
                num:0
            }
        }
    }
</script>

<style scoped>
.aGift{
  margin:2%;
  width:21%;
  background-color: #ffffff;
  float:left;
  height:350px;
  border-bottom:3px solid #DFDFDF;
}
.aGift:hover{
  border-bottom:3px solid #4FB59D;
  transform:translateY(-10px);
}
  .right{
    float:right;
  }
  .left{
    float:left;
  }
  img{
    margin:30px 20px 20px 20px;
    width:70%;
    height:200px;
  }
  .name{
    font-size: large;
    margin:10px;
  }
  .coupon{
    color:#47a0ff;
    font-size:20px;
    margin:10px;
  }
  .num{
    line-height:30px;
    margin:10px;
  }
</style>
