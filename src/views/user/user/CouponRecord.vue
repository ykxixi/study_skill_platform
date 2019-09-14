<template>
<div>
  <div class="left title">目前您的积分数是{{coupon}}</div>
  <el-table
          :data="tableData"
          height="400"
          border
          style="width: 96%; margin:0 auto">
    <el-table-column
            prop="date"
            label="日期"
            >
    </el-table-column>
    <el-table-column
            prop="name"
            label="名称"
            >
    </el-table-column>
    <el-table-column
            prop="inAndOut"
            label="收支"
            >
    </el-table-column>
    <el-table-column
            prop="coupon"
            label="积分数"
            >
    </el-table-column>
  </el-table>
</div>
</template>

<script>
    export default {
        name: "couponRecord.vue",
        data(){
            return{
                coupon:0,
                tableData: [{
                    date: '2016-05-03',
                    name: '购买课程',
                    inAndOut:'+10',
                    coupon:'10'
                }, {
                    date: '2016-05-03',
                    name: '兑换奖品',
                    inAndOut:'-10',
                    coupon:'0'
                },{
                    date: '2016-05-03',
                    name: '购买课程',
                    inAndOut:'+10',
                    coupon:'10'
                }, {
                    date: '2016-05-03',
                    name: '兑换奖品',
                    inAndOut:'-10',
                    coupon:'0'
                },{
                    date: '2016-05-03',
                    name: '购买课程',
                    inAndOut:'+10',
                    coupon:'10'
                }, {
                    date: '2016-05-03',
                    name: '兑换奖品',
                    inAndOut:'-10',
                    coupon:'0'
                },{
                    date: '2016-05-03',
                    name: '购买课程',
                    inAndOut:'+10',
                    coupon:'10'
                }, {
                    date: '2016-05-03',
                    name: '兑换奖品',
                    inAndOut:'-10',
                    coupon:'0'
                },{
                    date: '2016-05-03',
                    name: '购买课程',
                    inAndOut:'+10',
                    coupon:'10'
                }, {
                    date: '2016-05-03',
                    name: '兑换奖品',
                    inAndOut:'-10',
                    coupon:'0'
                },{
                    date: '2016-05-03',
                    name: '购买课程',
                    inAndOut:'+10',
                    coupon:'10'
                }, {
                    date: '2016-05-03',
                    name: '兑换奖品',
                    inAndOut:'-10',
                    coupon:'0'
                }]
            }
        }
    }
</script>

<style scoped>
.left{
  float:left;
}
  .title{
    font-size: x-large;
    margin:20px auto;
    padding-left:2%;
  }
</style>
