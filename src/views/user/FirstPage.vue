<template>
    <el-container>
        <el-main>
            <el-row>
                <el-button type="primary" @click="jump">Go! Study&Skill</el-button>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "FirstPage",
        methods:{
            jump(){
                this.$router.push({
                    path: '/home',
                })
            }
        }
    }
</script>

<style scoped>

</style>
