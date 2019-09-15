<template>
    <el-card class="bg-card-login">
        <h2>登录</h2>
        <el-form status-icon label-width="25%" label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="账号" prop="name" v-loading="loading">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item prop="code" label="验证码">
                <el-col span="10">
                    <el-input type="text" v-model="ruleForm.code"></el-input>
                </el-col>
                <el-col span="2" offset="2">
                    <Identify :identifyCode="identifyCode" @click.native="refreshCode"></Identify>
                </el-col>
            </el-form-item>
            <el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>
            <el-row style="margin-left: 12px;margin-top: 18px">
                <el-button type="primary" @click="toHome('ruleForm')">登录</el-button>
            </el-row>
        </el-form>
    </el-card>
</template>

<script>
import Identify from './Identify'
import axios from 'axios'

  export default {
      name: 'LoginForm',
      components:{Identify},
      data() {
          return {
              rules:{
                  name: [
                      { required: true, message: '请输入账户名', trigger: 'blur' },
                  ],
                  password: [
                      { required: true, message: '请输入密码', trigger: 'blur' },
                  ],
                  code: [
                      { required: true, message: '请输入验证码', trigger: 'blur' },
                  ],
              },
              ruleForm: {
                  name: '',
                  password: '',
                  code:'',
              },
              checked: true,
              identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',
              identifyCode: '',
              loading:false,
          }
      },
      methods: {
          toHome(formName) {
              if(!this.ruleForm.name){
                  this.$message.error('账户名不能为空');
                  return;
              } else if(!this.ruleForm.password){
                  this.$message.error('密码不能为空');
                  return;
              } else if (this.ruleForm.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
                  this.$message.error('请填写正确验证码');
                  this.refreshCode();
                  return;
              }
              let {username, password} = this.ruleForm
              this.$refs[formName].validate((valid) => {
                  if (valid) {
                      let _this = this;
                      this.loading = true;
                      this.postRequest('/login', {username, password}).then(resp=> {
                          _this.loading = false;
                          if (resp && resp.status === 200) {
                              let data = resp.data;
                              _this.$store.commit('login', data.obj);
                              let path = _this.$route.query.redirect;
                              _this.$router
                                  .replace({path: path === 'login' || path === undefined ? '/home' : path});
                          }
                      });
                  } else {
                      return false;
                  }
              });
          },
          // 重置验证码
          refreshCode () {
              this.identifyCode = '';
              this.makeCode(this.identifyCodes, 4)
          },
          makeCode (o, l) {
              for (let i = 0; i < l; i++) {
                  this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
              }
          },
          randomNum (min, max) {
              return Math.floor(Math.random() * (max - min) + min)
          },
      },
      mounted() {
          // 初始化验证码
          this.identifyCode = '';
          this.makeCode(this.identifyCodes, 4)
      }
  }
</script>

<style>
    .bg-card-login{
        color: black;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #202020;
    }
    .el-form-item__label{
        color: black ;
    }
    .login_remember {
        font-weight: 400;
        color: black;
        text-align: left;
    }

</style>
