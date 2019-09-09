<template>
    <el-container style="height: 100%" class="bg">
        <el-header style="background: black; height: 30%">
            <el-row>
                <el-col span="2" style="color: white; margin-top: 20px">
                    <img :src="logo" style="width: 80%" alt="logo">
                </el-col>
                <el-col span="4" offset="17" style="color: white; margin-top: 30px;">
                    <el-link :underline="false" @click="toR" style="color: white">还没有账户？立即注册
                        <i class="el-icon-s-promotion el-icon--right"></i></el-link>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="main-bg">
            <el-row>
                <el-col span="7" offset="16">
                    <LoginForm class="login-form"></LoginForm>
                    <el-link class="guest-login" :underline="false" type="primary" @click="jump">以游客身份登录
                        <i class="el-icon-d-arrow-right el-icon--right"></i></el-link>
                </el-col>
            </el-row>
        </el-main>
        <el-footer class="footer">
<!--            比如最好的啥最好的啥那种哈哈-->
            <el-row class="ad">推销1</el-row>
            <el-row class="ad">推销2</el-row>
            <el-row class="ad">推销3</el-row>
        </el-footer>
    </el-container>
</template>

<script>
    import LoginForm from "../../components/LoginForm";

    export default {
        name: "Login",
        components: {LoginForm},
        data(){
            return{
                logo:require('../../assets/images/logo.png')
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
        }
    }
</script>

<style scoped>
    .bg{
        background: url("../../assets/images/bg_login.png") no-repeat;
        background-size: cover;
    }
    .main-bg{
        height: 600px;
        background: inherit;
        margin-bottom: 0;
    }
    .login-form{
        margin-top: 50px;
        background-color: rgba(255,255,255,0.5);
        color: white;
    }
    .guest-login{
        margin-top: 60px;
        font-size: 16px;
    }
    .footer{
        /*height: 300px !important;*/
        padding: 0;
        background-color: #202020;
        color: white;
    }
    .ad{
        background-color: inherit;
        color: white;
        text-align: center;
        font-size: 50px;
        padding-top: 50px;
    }

</style>
