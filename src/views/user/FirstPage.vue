<template>
    <el-container style="height: 100%" class="bg">
        <el-header style="background: black">
            <el-row>
                <el-col span="2" style="color: white; margin-top: 20px">
                    网站logo
                </el-col>
                <el-col span="1" offset="19" style="color: white; margin-top: 20px;">
                    <el-link :underline="false" @click="toR">注册</el-link>
                </el-col>
                <el-col span="1" style="color: white; margin-top: 20px">
                    <el-link :underline="false" @click="toL">登录</el-link>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="main-bg">
            <el-row>
                <el-col span="2" offset="11">
                    <el-button style="margin-top: 400px" type="primary" @click="jump">Go!</el-button>
                </el-col>
                <el-col span="6" offset="5" style="margin-top: 60px">
                    <Login v-show="showL"></Login>
                </el-col>
            </el-row>
        </el-main>
        <el-footer class="footer">
<!--            比如最好的啥最好的啥那种哈哈-->
            <el-row style="text-align: center; height: 100px; font-size: 50px">推销1</el-row>
            <el-row style="text-align: center; height: 100px; font-size: 50px">推销2</el-row>
            <el-row style="text-align: center; height: 100px; font-size: 50px">推销3</el-row>
        </el-footer>
    </el-container>
</template>

<script>
    import Login from "../../components/Login";

    export default {
        name: "FirstPage",
        components: {Login},
        data(){
            return{
                showL: false
            }
        },
        methods:{
            jump(){
                this.$router.push({
                    path: '/home',
                })
            },
            toR(){
                this.$router.push('/register')
            },
            toL(){
                this.showL = true;
                this.showR = false;
            }
        }
    }
</script>

<style scoped>
    .bg{
        background: url("../../assets/images/bg_fp.jpeg") no-repeat;
        background-size: cover;
    }
    .main-bg{
        height: 600px;
        background: inherit;
        margin-bottom: 0;
    }
    .footer{
        height: 300px !important;
        background-color: #bfc5cc;
    }

</style>
