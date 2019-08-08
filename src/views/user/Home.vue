<template>
 <Layout></Layout>
</template>

<script>

    export default {
        name: "Home",
        components: {
            Layout: () => import('@/components/Layout.vue')
        },
        mounted() {
            this.$router.push('/info');
        }
    }

</script>

<style scoped>
    @import url("//unpkg.com/element-ui@2.11.0/lib/theme-chalk/index.css");
    .el-header {
        background: #faffb7;
        padding: 0;
    }
    .el-container{
        background: gray;
        padding: 0;
        margin: 0;
        border: 0;
        height: 100%;
        vertical-align: middle;
    }

</style>
