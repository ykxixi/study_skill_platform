<template>
    <el-container class="bg">
        <el-main>
            <el-row type="flex" justify="center" style="margin-top: 60px">
                <el-col span="10">
                    <el-card class="bg-register">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="账号" prop="name">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input v-model="ruleForm.password"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="checkPass">
                                <el-input v-model="ruleForm.checkPass"></el-input>
                            </el-form-item>
                            <el-row style="margin-left: 35px">
                                <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-row>
                        </el-form>
                    </el-card>
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
    export default {
        name: "Register",
        data(){
            return{
                ruleForm:{
                    name: '',
                    password: '',
                    checkPass: '',
                },
                rules:{
                    name: [
                        { required: true, message: '请输入账户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                    checkPass: [
                        { required: true, message: '请确认密码', trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push('/home')
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style>
    .bg{
        height: 700px;
        background: url("../../../assets/images/bg_register.jpeg") no-repeat;
        background-size: cover;
    }
    .bg-register{
        background: rgba(0,0,0,0.3);
    }

</style>
