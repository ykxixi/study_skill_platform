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
    <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-form-item label="昵称:" style="width:300px">
            <el-input v-model="form.name" placeholder="请输入昵称" class="lalala"></el-input>
        </el-form-item>
        <el-form-item label="性别:" style="width:200px">
            <el-radio-group v-model="form.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="年级:" style="width:300px">
            <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        </el-form-item>
        <el-form-item label="学校:" style="width:300px">
            <el-input  placeholder="请输入学校名称" class="lalala"></el-input>
        </el-form-item>
        <el-form-item label="我的兴趣:">
            <div class="emmm">
            <el-checkbox-group v-model="form.type" style="float:left">
            <el-checkbox label="计算机" name="type"></el-checkbox>
            <el-checkbox label="心理学" name="type"></el-checkbox>
            <el-checkbox label="物理" name="type"></el-checkbox>
            <el-checkbox label="化学" name="type"></el-checkbox>
            <el-checkbox label="英语" name="type"></el-checkbox>
            <el-checkbox label="声乐" name="type"></el-checkbox>
            <el-checkbox label="书法" name="type"></el-checkbox>
            <el-checkbox label="语文" name="type"></el-checkbox>
            <el-checkbox label="历史" name="type"></el-checkbox>
            <el-checkbox label="考研政治" name="type"></el-checkbox>
            <el-checkbox label="微积分" name="type"></el-checkbox>
            <el-checkbox label="线性代数" name="type"></el-checkbox>
            </el-checkbox-group>
            </div>
        </el-form-item>
        <el-form-item label="积分:" style="width:200px">
            <el-input v-model="form.points" :disabled="true"></el-input>
        </el-form-item>
        
    </el-form>

        

    </el-main>

    <el-footer>
    <!-- <el-popover
    placement="top-start"
    title=""
    width="15"
    trigger="hover"
    content="确认更新信息"> -->
    <p></p>
    
    <el-button  @click="alert"><i class="el-icon-upload el-icon--right"></i>保存信息</el-button>
    <!-- </el-popover> -->
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
                    points:'100',
                    type:['计算机','物理']
                },
                imageUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                options: [{
                value: '选项1',
                label: '高三'
                }, {
                value: '选项2',
                label: '大一'
                }, {
                value: '选项3',
                label: '大二'
                }, {
                value: '选项4',
                label: '大三'
                }, {
                value: '选项5',
                label: '大四'
                }],
                value: ''
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
                
            this.$alert('', '确认更新？', {
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
    .emmm{
        filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;
        background-color: skyblue;
        border-radius: 5%;
        width: 400px;
        height: 150px;

    }
    .form{
        margin-left: 33%
    }
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
    .user-info{
        text-align: center
    }
    p{
        margin-bottom:8% 
    }
</style>
