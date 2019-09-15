<template>
<div>
    <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/包.jpg" alt="礼品图片"/>
    </div>
    <div class="name">包</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/笔芯.jpg" alt="礼品图片"/>
    </div>
    <div class="name">笔芯</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/活页纸.jpg" alt="礼品图片"/>
    </div>
    <div class="name">活页纸</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/书1.jpg" alt="礼品图片"/>
    </div>
    <div class="name">书</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/文件袋.jpg" alt="礼品图片"/>
    </div>
    <div class="name">文件袋</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/纸胶带.jpg" alt="礼品图片"/>
    </div>
    <div class="name">纸胶带</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/桌面收纳盒.jpg" alt="礼品图片"/>
    </div>
    <div class="name">桌面收纳盒</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/中性笔圆珠笔.jpg" alt="礼品图片"/>
    </div>
    <div class="name">中性笔</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/卡通橡皮擦.jpg" alt="礼品图片"/>
    </div>
    <div class="name">卡通橡皮擦</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/储物箱.jpg" alt="礼品图片"/>
    </div>
    <div class="name">储物箱</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/花卉木制笔筒.jpg" alt="礼品图片"/>
    </div>
    <div class="name">花卉木制笔筒</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  <div class="aGift">
    <div class="img">
      <img src="../../../assets/images/彩色铅笔.jpg" alt="礼品图片"/>
    </div>
    <div class="name">彩色铅笔</div>
    <div class="left coupon">所需积分数</div>
    <div class="right num">库存数量：{{num}}</div>
  </div>
  
  
  
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
