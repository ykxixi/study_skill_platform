<template>
    <el-container>
        <el-header :style="{ height: 'none' }">
            <el-row class="banner">

                <el-col span="3">网站logo</el-col>

                <el-col :span='1' :style="{ height: '15px' }" class="user-logo right" offset="14">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </el-col>

                <el-col :span='6' :style="{ height: '15px' }" class="user-info right">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                             background-color="#faffb7">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">账户名XXX</template>
                            <el-menu-item index="2-1">注册</el-menu-item>
                            <el-menu-item index="2-2" disabled>登录</el-menu-item>
                            <el-menu-item index="2-3">退出</el-menu-item>
                            <el-menu-item index="2-4">个人信息</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3">我的课程</el-menu-item>
                    </el-menu>
                </el-col>

            </el-row>

            <el-row>
                <el-col :span='24' :style="{ height: '150px' }">
                    <span style="display: block; margin: 100px">picture</span>
                </el-col>
            </el-row>

        </el-header>
        
        <el-header>
            <!--导航菜单-->
            <el-menu
                    router
                    default-active="info"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="info">首页</el-menu-item>
                <el-menu-item index="course-list">课程中心</el-menu-item>
                <el-menu-item index="shopping-mall">积分商城</el-menu-item>
            </el-menu>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>

    </el-container>
</template>

<script>
    export default {
        name: "Layout",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            },
            logout(){
                this.$router.push('/user-info')
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
        background: #faffb7;
        padding: 0;
    }
    /*.el-dropdown-link {*/
    /*    cursor: pointer;*/
    /*    color: black;*/
    /*    font-size: 18px;*/
    /*}*/
    /*.el-icon-arrow-down {*/
    /*    font-size: 12px;*/
    /*}*/
</style>
