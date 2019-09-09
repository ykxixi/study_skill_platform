<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col span="3" style="margin-top: 15px">
                    <el-link :underline="false" @click="toHome" style="color: white">网站logo</el-link>
                </el-col>

                <el-col span='4' offset="8" style="margin-top: 10px">
                    <el-input v-model="searchInfo" placeholder="搜索感兴趣的课程"></el-input>
                </el-col>
                              
                <el-col span='1'  style="margin-top: 10px">
                    <el-button icon="el-icon-search" circle @click="toCourseSearch"></el-button>
                </el-col>

                <el-col span='1' offset="2">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                               style="margin-top: 5px" size="middle" @click="toPersonalCenter"></el-avatar>
                </el-col>
                
                <el-col span="2" style="margin-top: 15px">
                    <el-link @click="toPersonalCenter" :underline="false" style="color: white">个人中心</el-link>

<!--                    下拉框形式"个人中心"-->
<!--                    <el-dropdown>-->
<!--                        <span class="el-dropdown-link" @click="toPersonalCenter">个人中心<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i></span>-->
<!--                        <el-dropdown-menu slot="dropdown">-->
<!--                            <el-dropdown-item>我的信息</el-dropdown-item>-->
<!--                            <el-dropdown-item>完善信息</el-dropdown-item>-->
<!--                            <el-dropdown-item>发布临时需求</el-dropdown-item>-->
<!--                            <el-dropdown-item>我的课程</el-dropdown-item>-->
<!--                            <el-dropdown-item>我的收益</el-dropdown-item>-->
<!--                        </el-dropdown-menu>-->
<!--                    </el-dropdown>-->
                </el-col>
                <el-col span="2" style="margin-top: 15px">
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
                searchInfo:''
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
