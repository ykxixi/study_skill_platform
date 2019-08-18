<template>
    <el-card class="bg-card">
        <el-form ref="form" :model="form" label-width="40px" label-position="left">
            <el-form-item label="账号">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-row style="margin-left: 12px">
                <el-button type="primary" @click="toHome">登录</el-button>
            </el-row>
        </el-form>
    </el-card>
</template>

<script>


  export default {
    name: 'Login',
      data(){
        return{
            form: {
                name:'',
                password:''
            }
        }
      },
      methods: {
        toHome(){
            this.$router.push('/home')
        }
      }

  };
</script>

<style>
    .bg-card{
        color: white;
        background: rgba(0,0,0,0.5);
    }
    .el-form-item__label{
        color: white ;
    }

</style>
