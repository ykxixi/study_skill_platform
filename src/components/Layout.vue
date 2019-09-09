<template>
    <el-container>
        <el-header style="height: 30%">
            <el-row>
                <el-col span="2" style="margin-top: 1%">
                    <img :src="logo" @click="toHome" style="width: 80%" alt="logo" class="logo">
                </el-col>
                <el-col span='1' offset="16">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                               style="margin-top: 12px" size="middle" @click="toPersonalCenter"></el-avatar>
                </el-col>
                <el-col span="2" style="margin-top: 23px">
                    <el-link @click="toPersonalCenter" :underline="false" style="color: white">个人中心</el-link>
                </el-col>
                <el-col span="2" style="margin-top: 23px">
                    <el-link :underline="false" @click="toShoppingMall" style="color: white">积分商城</el-link>
                </el-col>
            </el-row>

        </el-header>
    </el-container>
</template>

<script>
    export default {
        name: "Layout",
        data() {
            return {
                logo:require('../assets/images/logo.png')
            };
        },
        methods: {
            toHome(){
                this.$router.push('/home')
            },
            toPersonalCenter(){
                this.$router.push('/personal-center')
            },
            toShoppingMall(){
                this.$router.push('/shopping-mall')
            },
            toCourseSearch(){
                this.$router.push('/course-search')
            }
        }
    }
</script>

<style scoped>
    @import url("//unpkg.com/element-ui@2.11.0/lib/theme-chalk/index.css");
    .el-container{
        padding: 0;
        margin: 0;
        border: 0;
        height: 100%;
        vertical-align: middle;
    }
    .el-header {
        background: black;
        padding: 0;
        /*height: 20%;*/

    }
    .logo:hover{
        cursor: pointer;
    }
    .pc-button{
        background-color: black;
        color: white;
    }
    .el-dropdown{
        background-color: black;
        color: white;
    }
    .el-dropdown-menu{
        background-color: black;
        color: white;
    }
    .el-dropdown-link:hover{
        cursor: pointer;
    }
</style>
