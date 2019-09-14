<template>
 <div class="user-info">
  <!-- <h1>个人信息展示页</h1> -->
  <!-- <h2>账户信息</h2>
  <h3>账户名</h3>
  <h3>头像</h3>
  <h3>我的积分</h3>
  <h2>我的兴趣：标签</h2>
  <h2>我的优惠券</h2> -->
    <!-- <h2>账户信息</h2> -->
    <!-- <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="70" style="margin-left:100px"></el-avatar> -->
    <el-container>

    <el-main style="align-items:center">
    <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <h4 >点击头像上传</h4>
    <el-form ref="form" :model="form" label-width="80px" style="align-self:center">
        <el-form-item label="昵称:" style="width:300px">
            <el-input v-model="form.name" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="性别:" style="width:200px">
            <el-radio-group v-model="form.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="积分:" style="width:200px">
            <el-input v-model="form.points" :disabled="true"></el-input>
        </el-form-item>
    </el-form>
    </el-main>

    <el-footer>
    <el-popover
    placement="top-start"
    title=""
    width="15"
    trigger="hover"
    content="确认更新信息">
    <el-button slot="reference" @click="alert"><i class="el-icon-upload el-icon--right"></i>保存信息</el-button>
    </el-popover>
    </el-footer>

    </el-container>
 </div>


</template>

<script>
    export default {
        data(){
            return{
                form:{
                    name:'NJUer',
                    sex:'male',
                    points:'100'
                },
                imageUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
            }
        },
        methods:{
            submit:"",
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            onSuccess(){
                this.$message.error('上传成功');
            },
            alert(){
                
            this.$alert('', '删除成功', {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                type: 'info',
                message: `action: ${ action }`
                });
            }
            });
    
            }
        }
    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-left: 500px;
    margin-bottom: 600px;
    }
    .avatar-uploader .el-upload:hover {
        border-color: black;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 100px;
        height: 100px;
        display: block;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        position: relative;
        overflow: hidden;
    
    }
</style>
