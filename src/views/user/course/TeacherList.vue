<template>
    <div>
        <el-card style="height: 500px; width: 100%" class="teacher-list">
            <h1 style="color: white">Study&Skill 教师团队</h1>
            <el-carousel type="card" height="300px" :interval="2500">
                <el-carousel-item v-for="item in imagesBox" :key="item.id">
                    <img :src="item.idView" class="image">
                </el-carousel-item>
            </el-carousel>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "TeacherList",
        data(){
            return{
                imagesBox:[
                    {id:0,idView:require("../../../assets/images/T1.png")},
                    {id:1,idView:require("../../../assets/images/T2.png")},
                    {id:2,idView:require("../../../assets/images/T3.png")},
                    {id:3,idView:require("../../../assets/images/T4.png")},
                    {id:4,idView:require("../../../assets/images/T5.png")},
                ]
            }
        }
    }
</script>

<style scoped>
    .teacher-list{
        background: url("../../../assets/images/bg_teacher-list.jpg") no-repeat center;
        background-size: cover;
    }


</style>
