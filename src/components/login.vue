<template>
  <div class="wrapper">
    <el-card>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" hide-required-asterisk>
        <el-form-item label="用户名" :label-width="loginFormWidth" prop="username">
          <el-input type="text" placeholder="请输入用户名" v-model="loginForm.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="loginFormWidth" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="checkAndLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import API from '@/api';

  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        loginFormWidth: '60px'
      };
    },
    methods: {
      checkAndLogin() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            let token = this.loginForm.username;
            localStorage.setItem('token', token);
            this.$store.dispatch('updateToken', token);
            this.$router.push('/admin/upload');

            API.Login.adminLogin(
                    this.loginForm.username,
                    this.loginForm.password
            ).then((res) => {
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              let token = res.token;
              localStorage.setItem('token', token);
              this.$store.dispatch('updateToken', token);
              this.$router.push('/admin/upload');
            }).catch((err) => {
              this.$message({
                message: '用户名或密码错误',
                type: 'error'
              });
            });
          } else {
            this.$message({
              message: '请填写用户名和密码',
              type: 'error'
            });
            return false;
          }
        });
      }
    }
  };
</script>

<style scoped>
  .wrapper {
    background-color: #ecf0f1;
  }

  .el-card {
    width: 450px;
    position: relative;
    top: 200px;
    left: 300px;
  }

  .el-button {
    float: right;
    margin-right: 20px;
  }
</style>
