<template>
    <div id="jiFen">
        <Layout></Layout>
        <el-header>
            <el-menu
                    router
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#ffffff"
                    active-text-color="#47a0ff">
                <el-menu-item index="/gifts">商城礼品</el-menu-item>
                <el-menu-item index="/coupon-record" >积分明细</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </div>
</template>

<script>
    import Layout from "../../../components/Layout";
    export default {
        name: "ShoppingMall",
        components: {Layout},
        data(){
            return {
                activeIndex: '/gifts',
            }
        }
    }
</script>

<style scoped>
    #jiFen{
        background-color:#f5f5f5 ;
    }
    .el-menu-demo{
        width:96%;
        margin:20px auto;

    }
    /*el-menu-item{*/
    /*    margin:20px 40px;*/
    /*}*/
</style>
