<template>
    <el-container class="bg">
        <el-main>
            <el-row style="margin-top: 70px">
                <el-col>
                    <el-row>
                        <el-col span="5" offset="8" style="color: white; margin-top: 30px;">
                            <el-link :underline="false" @click="toR" style="color: cadetblue" href="../../components/LoginForm.vue">已有账户？立即登陆
                                <i class="el-icon-s-promotion el-icon--right"></i></el-link>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 16px">
                        <RegisterForm style="padding-left: 40px"></RegisterForm>
                    </el-row>
                </el-col>
            </el-row>

        </el-main>
    </el-container>
</template>

<script>
    import RegisterForm from "../../components/RegisterForm";
    export default {
        name: "Register",
        components:{RegisterForm},
        methods:{

        }
    }
</script>

<style>
    .bg{
        height: 700px;
        background: url("../../assets/images/bg_register3.jpg") no-repeat;
        background-size: cover;
    }
</style>
