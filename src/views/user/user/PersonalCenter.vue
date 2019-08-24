<template>
    <div>
        <Layout></Layout>
        <el-container>
            <el-main>
                <el-col>
                    <el-row style="margin-top: 20px">
                            <el-tabs :tab-position="tabPosition">
                                <el-tab-pane label="个人信息">
                                   <UserInfo></UserInfo>
                                </el-tab-pane>
                                <el-tab-pane label="完善信息">
                                    <SelectInterest></SelectInterest>
                                </el-tab-pane>
                                <el-tab-pane label="发布临时需求">
                                    <TempDemand></TempDemand>
                                </el-tab-pane>
                                <el-tab-pane label="我的课程">
                                    <MyCourse></MyCourse>
                                </el-tab-pane>
                                <el-tab-pane label="我的收益">
                                    <MyIncome></MyIncome>
                                </el-tab-pane>
                            </el-tabs>
                    </el-row>
                </el-col>
            </el-main>
        </el-container>
    </div>


</template>

<script>
    import Layout from "../../../components/Layout";
    import SelectInterest from "./SelectInterest";
    import UserInfo from "./UserInfo";
    import TempDemand from "./TempDemand"
    import MyCourse from "./MyCourse"
    import MyIncome from "./MyIncome"
    export default {
        name: "PersonalCenter",
        components: {SelectInterest, Layout,UserInfo,TempDemand,MyCourse,MyIncome},
        data(){
            return {
                tabPosition:'right',
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
