<template>
    <div>
        <el-card class="bg-register">
            <h2 style="color:white;">注册</h2>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :fit="false">
                <el-form-item label="账号" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input v-model="ruleForm.checkPass"></el-input>
                </el-form-item>
                <el-form-item label="QQ" prop="qq">
                    <el-input v-model="ruleForm.qq"></el-input>
                </el-form-item>
            </el-form>
                <el-row style="margin-left: 35px">
                    <el-button plain type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "RegisterForm",
        data(){
            return{
                showR:true,
                showS:false,
                ruleForm:{
                    name: '',
                    email:'',
                    password: '',
                    checkPass: '',
                    qq:'',
                },
                rules:{
                    name: [
                        { required: true, message: '请输入账户名', trigger: 'blur' },
                    ],
                    email:[
                        {required: true, message: '请输入邮箱',trigger:'blur'},
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
                        const h = this.$createElement;
                        this.$notify({
                            title: '小贴士',
                            message: h('i', { style: 'color: #29baf0'}, '进入个人中心完善信息可以获得积分哦'),
                            offset:50,
                            duration:0,
                        });
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
    .bg-register{
        height: 500px;
        width: 600px;
        background: rgba(173,162,156,0.3);
    }
    .el-form-item__label{
        color: black;
    }

</style>
