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
        <el-main class="main-bg" style="height: 110%;">
            <el-row>
                <el-col span="7" offset="16">
                    <LoginForm class="login-form"></LoginForm>
                    <el-link class="guest-login" :underline="false" type="primary" @click="jump">以游客身份登录
                        <i class="el-icon-d-arrow-right el-icon--right"></i></el-link>
                </el-col>
            </el-row>
        </el-main>
        <el-footer class="footer" style="height: 30%;">
            <el-image :src="about"></el-image>
            <div class="ad">
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Study&Skill项目拟搭建一个以大学生为主体的新型互联网教育平台。该项目立足于教育行业，利用计算机技术，通过建立动态数据库等方式提高用户的使用体验与效率。</p>
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着互联网的普及与人们对教育的重视程度的日益增长，未来的教育必然与互联网紧密结合。同时，由于教育产业的长期发展，各种教育资源浩如烟海，给用户的筛选甄别带来了困难。因此，借助动态数据库、精准描述用户需求趋势、为用户提供实时更新的量身定制课程的软件拥有巨大的潜力。</p>
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鉴于教育市场的纷乱与用户对精准度的需求，Study&Skill项目旨在为用户提供良好的个性化服务，改善教育市场中课程质量不高、制度不完善等缺陷。</p>
            </div>
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
                logo:require('../../assets/images/logo.png'),
                about:require('../../assets/images/aboutSS3.gif')
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
        margin:0% 5% 5% 5%;
        background-color: inherit;
        color: white;
        text-align: center;
        font-size: 20px;
        padding-top: 50px;
    }

</style>
