<template>

    <div id="zyUserSet">
        <p class="appListHeader">用户账号设置</p>
        <el-tabs v-model="activeName">
            <el-tab-pane label="基础信息" name="first">
                <div class="Userform">
                    <el-form ref="form" :model="form" label-width="88px">
                        <el-form-item label="头像">
                            <img :src="this.$store.state.cart.userImg" alt="" v-if="this.$store.state.cart.userImg !== ''">
                            <el-upload v-else
                                       class="avatar-uploader"
                                       action="http://115.29.188.190:8085/user/uploadHeadImage"
                                       :headers="{'Authorization':token}"
                                       :show-file-list="false"
                                       :on-success="handleAvatarSuccess"
                                       :before-upload="beforeAvatarUpload">
                                <img v-if="this.$store.state.cart.userImg" :src="this.$store.state.cart.userImg" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>

                        </el-form-item>
                        <el-form-item label="账户名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="登录手机号">
                            <el-input v-model="form.phone"></el-input>
                            <p>手机用于登录及登录密码找回、修改、同时接收重要提醒。</p>
                        </el-form-item>
                        <el-form-item label="登录密码" class="LoginPwd">
                            <el-input type="password" v-model="form.pwd" ></el-input>
                            <el-button type="text" @click="dialogVisible = true">修改密码</el-button>
                            <p>本密码用于账号登录、登录后可进行所有操作、请妥善保管。</p>
                        </el-form-item>

                    </el-form>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-dialog title="密码修改" v-model="dialogVisible" size="tiny" id="changePwd">
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="旧密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="outPass">
                    <el-input type="password" v-model="ruleForm2.outPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                </el-form-item>

            </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm2')">确 定</el-button>
  </span>
        </el-dialog>

    </div>

</template>
<script>
    export default{
        name: 'zyUserSet',
        data() {

            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var outPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.checkPass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                token:'Bearer ' + localStorage.getItem('default-auth-token'),
                imgSrc:this.$http.options.root+'/order/picture/',
                activeName: 'first',
                form: {
                    name: this.$auth.user().name,
                    phone:this.$auth.user().phone,
                    pwd:'123456',
                },
                dialogVisible: false,
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    outPass: ''
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    outPass: [
                        { validator: outPass, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
//                this.form.img = URL.createObjectURL(file.raw);
                this.$store.dispatch('update_user_img',URL.createObjectURL(file.raw));
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                      console.log('submit!!');
                    } else {
                        console.log('error submit!!');
                return false;
            }
            });
            },
            beforeAvatarUpload(file) {
                const isNPG = file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isNPG) {
                    this.$message.error('上传头像图片只能是 PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isNPG && isLt2M;
            }
        }
    }
</script>

<style>
    #zyUserSet{
        padding:20px;
    }
    #zyUserSet .appListHeader {
        padding-left: 3px;
        margin-bottom: 10px;
    }
    #zyUserSet .el-tabs__nav-scroll{
        padding-left: 0;
    }
    #zyUserSet .el-tabs__item{
        width: 70px;
        padding: 0 4px;
        line-height: 28px;
        height: 28px;
    }
    #zyUserSet .el-tabs__content {
        padding: 26px 73px;
    }
    #zyUserSet .Userform{

    }
    #zyUserSet .Userform img{
        width:34px;
    }
    #zyUserSet .el-form-item__label{
        padding:12px 18px 11px 0px;
    }
    #zyUserSet .el-form-item{
        margin-bottom:10px;
    }

    #zyUserSet .el-input__inner{
        width:200px;
    }
    #zyUserSet .Userform p{
        color:rgb(142,142,142);
        font-size:13px;
    }
    #zyUserSet .LoginPwd .el-input__inner{
        border-color:#fff;
    }
    #zyUserSet .LoginPwd input{
        width:70px;
    }
    #zyUserSet .el-input{
        width:10%;
    }
    #zyUserSet .LoginPwd button{
        display:inline;
        color: #68A593;
    }
    #zyUserSet .dialog-footer button{
        background:#fff;
        border:none;
        color: #68A593;
        padding: 9px 16px;
        font-size: 13px;
    }
    #zyUserSet .dialog-footer button:hover{
        background:#E4EDE2;
    }
    #zyUserSet #changePwd .el-form-item{
        margin-bottom:20px;
    }
    #zyUserSet .el-dialog__body{
        padding:27px 20px 0 20px;
    }
</style>