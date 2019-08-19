<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col span="3" style="color: white; margin-top: 15px">
                    <el-link :underline="false" @click="toHome">网站logo</el-link>
                </el-col>
                <el-col span='1' offset="15">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                               style="margin-top: 5px" size="middle" @click="toPersonalCenter"></el-avatar>
                </el-col>
                <el-col span="2" style="margin-top: 15px">
                    <el-link :underline="false" @click="toPersonalCenter">个人中心</el-link>
                </el-col>
                <el-col span="2" style="margin-top: 15px">
                    <el-link :underline="false" @click="toShoppingMall">积分商城</el-link>
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

    }
</style>
