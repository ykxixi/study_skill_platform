<template>
    <div>
<!--hhh-->
        <el-card class="bg-register">
            <h2 style="color:white;">注册</h2>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" status-icon label-width="100px" class="demo-ruleForm" :fit="false">
                <el-form-item label="账号" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" placeholder="8～13位，包含字母、数字、特殊字符" show-password></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input v-model="ruleForm.checkPass" show-password></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="QQ" prop="qq">
                    <el-input v-model="ruleForm.qq"></el-input>
                </el-form-item>
            </el-form>
                <el-row style="margin-left: 35px">
                    <el-button plain type="primary" @click.native="goToHome">立即注册</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "RegisterForm",
        data(){
            const checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('账户名不能为空'));
                } else {
                    callback();
                }
            };
            const regNumber = /\d+/;
            const regString = /[a-zA-Z]+/;
            const regSpecial = /['"#$%&\\^*_=!@~`·¥()]/;
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                } else if(!regNumber.test(value)){
                        callback(new Error('密码需包含数字'))
                } else if(!regString.test(value)){
                        callback(new Error('密码需包含字母'))
                } else if(!regSpecial.test(value)){
                        callback(new Error('密码需包含特殊字符'))
                } else {
                        callback();
                }
            };
            const validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                ruleForm:{
                    name: '',
                    email:'',
                    password: '',
                    checkPass: '',
                    qq:'',
                },
                rules:{
                    name: [
                        { validator:checkName, required:true, trigger: 'blur' },
                    ],
                    email:[
                        {required: true, message: '请输入邮箱',trigger:'blur'},
                    ],
                    password: [
                        { validator:validatePass, trigger: 'blur' },
                        { min: 8, max: 13, message: '长度在 8 到 13 位', trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator:validatePass2, trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            goToHome(){
                const h = this.$createElement;
                this.$notify({
                    title: '小贴士',
                    message: h('i', { style: 'color: #29baf0'}, '进入个人中心完善信息可以获得积分哦'),
                    offset:50,
                    duration:0,
                });
                this.$router.push('/home')
            },
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
