<template>
    <div style="width: 100%;height: 100%;">
        <h1 >我的收益</h1>
        <div id="main" style="width: 60%;height: 60%;"></div>
        <h4>书中自有黄金屋，书中自有颜如玉</h4>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: '',
        data() {
            return {
                charts: '',
            /*  opinion: ["1", "3", "3", "4", "5"],*/
                opinionData: ["3", "2", "4", "4", "5"]
            }
        },
        methods: {
            drawLine(id) {
                this.charts = echarts.init(document.getElementById(id))
                this.charts.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['近七日收益']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },

                    toolbox: {
                        feature: {
                            // saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                    data: ["1","2","3","4","5"]
                    
                    },
                    yAxis: {
                        type: 'value'
                    },

                    series: [{
                        name: '近七日收益',
                        type: 'line',
                        stack: '总量',
                        data: this.opinionData
                    }]
                })
            }
        },
        //调用
        mounted() {
            this.$nextTick(function() {
                this.drawLine('main')
            })
        }
    }
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    main{
        margin-left: 70%
    }
    h1{
        margin-left: -40%
    }
    h4{
        color: gray
    }
</style>
