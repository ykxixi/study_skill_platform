<template>
    <div>
        <Layout></Layout>
        <div style="margin: 20px">
            <el-menu router :default-active="user-info" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="personal-center/user-info">个人信息</el-menu-item>
                <el-menu-item index="personal-center/gather-info">完善信息</el-menu-item>
                <el-menu-item index="personal-center/my-course">我的课程</el-menu-item>
                <el-menu-item index="personal-center/temp-demand">发布临时需求</el-menu-item>
            </el-menu>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Layout from "../../../components/Layout";
    export default {
        name: "PersonalCenter",
        components: {Layout},
        methods:{

        }
    }
</script>

<style scoped>

</style>
