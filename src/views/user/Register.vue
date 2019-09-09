<template>
    <el-container class="bg">
        <el-main>
<!--            <el-row>-->
<!--                <el-steps :active="1" simple :space="100">-->
<!--                    <el-step title="步骤 1" icon="el-icon-edit"></el-step>-->
<!--                    <el-step title="步骤 2" icon="el-icon-upload"></el-step>-->
<!--                    <el-step title="步骤 3" icon="el-icon-picture"></el-step>-->
<!--                </el-steps>-->
<!--            </el-row>-->
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
<!--            <el-row style="margin-top: 25px">-->
<!--                <el-col span="3" offset="15">-->
<!--                    <el-link :underline="false" style="font-size: 16px; color: white;" @click="toHome">-->
<!--                        跳过<i class="el-icon-s-promotion el-icon&#45;&#45;right"></i> </el-link>-->
<!--                </el-col>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--                <el-col span="8" offset="4">-->
<!--                    <GatherInfo></GatherInfo>-->
<!--                </el-col>-->
<!--            </el-row>-->
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
