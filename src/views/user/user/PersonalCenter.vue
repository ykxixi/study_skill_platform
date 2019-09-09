<template>
    <div class="bg">
        <Layout></Layout>
        <el-container class="bg">
            <el-main style="margin-top: 20px;height: 100%">
                <router-view></router-view>
            </el-main>
            <el-aside style="margin-top: 100px;margin-right: 20px">
                <el-card class="menu">
                    <el-menu
                            router
                            default-active="user-info"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose">
                        <el-menu-item index="user-info">
                            <i class="el-icon-user"></i>
                            <span slot="title">个人信息</span>
                        </el-menu-item>
                        <el-menu-item index="temp-demand">
                            <i class="el-icon-lollipop"></i>
                            <span slot="title">发布临时需求</span>
                        </el-menu-item>
                        <el-menu-item index="my-course">
                            <i class="el-icon-notebook-2"></i>
                            <span slot="title">我的课程</span>
                        </el-menu-item>
                        <el-menu-item index="my-income">
                            <i class="el-icon-coin"></i>
                            <span slot="title">我的收益</span>
                        </el-menu-item>
                    </el-menu>
                </el-card>
            </el-aside>
        </el-container>
    </div>


</template>

<script>
    import Layout from "../../../components/Layout";
    export default {
        name: "PersonalCenter",
        components: {Layout},
        data(){
            return {
                tabPosition:'right',
                child:['./user-info','./temp-demand','./my-course','./my-income']
            }
        },
        methods:{
        },
        mounted() {
            this.$router.push('./user-info')
        }
    }
</script>

<style scoped>
    .bg{
        height: 100%;
        background: url("../../../assets/images/bg_personal2.png") no-repeat;
        background-size: cover;
    }
    .menu{
        background: rgba(255,255,255,0.5);
        margin-bottom: 300px;
        color: white;
    }
    .el-menu-vertical-demo{
        background: inherit;
    }
    .el-menu-item.is-active{
        background-color: #bcdcdd;
    }

</style>
