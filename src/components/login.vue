<template>
    <div id="login">
        <div class="custom-header">
            <img src="../assets/logo.jpg" alt="user" class="logo">
        </div>
        <p id="juta">聚塔微客户管理平台</p>
        <div v-show="zylogin" >
            <div class="mb-housite">
                <el-input v-model="data.body.username" placeholder="请输入账号" class="form-control"></el-input>
                <el-input v-model="data.body.password" placeholder="请输入密码" type="password" class="form-control pwd"></el-input>
            </div>
            <!--<p v-show="errorLogin" class="errorLogin">账号密码错误</p>-->
            <el-button v-on:click.prevent="login()">立即登录</el-button>
            <p class="text-right">
                <a href="" class="text-muted">忘记密码?</a>
            </p>
            <el-button class="btn-block" v-on:click="zylogin = false">注册账号</el-button>
        </div>
        <div v-show="!zylogin">
            <div class="mb-housite" id="father">
                <el-input type="text" class="form-control" v-model="register.phoneNub" placeholder="输入你的手机号" :style="{ marginBottom: 10 + 'px' }"></el-input>
                <div class="input-group" :style="{ marginBottom: 30 + 'px' }">
                    <el-input v-model="register.messCode" placeholder="输入短信验证码" class="form-control validationText" :style="{ width: 65+ '%'}"></el-input>
                    <span class="input-group-btn">
                        <el-button class="btn btn-primary" id="getcode" :style="{ position:'relative' }" v-on:click="dialogVisible = validation()">获取验证码</el-button>
                    </span>
                </div>
                <div id="validationImg">
                    <el-dialog title="请输入验证码" v-model="dialogVisible" size="tiny" >
                        <div>
                            <div class="input-group" >
                                <el-input v-model="validationText" placeholder="请输入验证码" class="form-control validationText" :style="{ width: 65+ '%'}"></el-input>
                                <span class="input-group-btn">
                                    <img :src="validationImgSrc" v-on:click="getValidationImg()">
                                </span>
                                <p></p>
                            </div>
                        </div>
                    <span slot="footer" class="dialog-footer">
                       <el-button type="primary" @click="getcode()">确 定</el-button>
                    </span>
                    </el-dialog>
                </div>
                <el-input type="password" class="form-control" placeholder="请输入六位以上密码" v-model="register.onePwd" :style="{ marginBottom: 10 + 'px' }"></el-input>
                <el-input type="password" class="form-control" placeholder="请再次输入确认密码" v-model="register.twoPwd" :style="{ marginBottom: 30 + 'px' }"></el-input>
                <!--<p v-show="errorRegistered" class="errorLogin">{{errorRegisteredText}}</p>-->
                <p class="text-center mb-housite">
                    <el-button class="btn btn-primary btn-lg btn-block" id="addID" v-on:click="create()">创建账号</el-button>
                </p>
                <p class="text-center">已经有账号?</p>
                <p class="text-center">
                    <a href="javascript:;" class="text-info" v-on:click="zylogin = true">登录</a>
                </p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'zyLogin',
        data() {
            return {
                data: {
                    body: {
                        username: '2',
                        password: '1'
                    },
                    rememberMe: false
                },
                zylogin:true,
                errorLogin:false,
                error: null,
                register:{
                    phoneNub: '15053467982',
                    messCode:'',
                    onePwd:'',
                    twoPwd:''
                },
                dialogVisible:false,
                validationText:'',
                validationImgSrc:''
//                errorRegistered:false,
//                errorRegisteredText:''
            }
        },
        methods: {
            login() {
                var redirect = this.$auth.redirect();

                this.$auth.login({
                    body: this.data.body,
                    rememberMe: this.data.rememberMe,
                    redirect: {name: redirect ? redirect.from.name : 'indexBody'},
                    success(res) {
                        console.log(res);
                    },
                    error(res) {
                        console.log(res);
                        if(res.status === 401){
                            this.$message.error('账号密码错误');
                        }
                        this.error = res.data;
                    }
                });
            },
            validation(){
                if(this.register.phoneNub != ''){
                    if(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.register.phoneNub)){
                        return true;
                    }else{
                        this.$message.error('请输入正确手机号');
                        return false;
                    }
                }else{
                    this.$message.error('请输入手机号');
                    return false;
                }
            },
            getcode(){
                if(this.validation()){
                    this.$http({
                        url: 'verificationCode',
                        method: 'GET',
                        params:{
                            code:this.validationText,
                            phone:this.register.phoneNub
                        },
                    }).then((res) => {
                        console.log('success ' , res);
                        this.dialogVisible = false;
                    }, (res) => {
                        this.$message.error('验证码不正确');
                        this.dialogVisible = true;
                    });
                }
            },
            create(){
                if(this.validation()){
                    if(this.register.onePwd.length < 6){
                        this.$message.error('密码长度小于6位');
                    }else if(this.register.onePwd !== this.register.twoPwd){
                        this.$message.error('两次密码不匹配');
                    }else{
                        this.$http({
                            url: 'register',
                            method: 'POST',
                            body:{
                                verificationCode:this.register.messCode,
                                phone:this.register.phoneNub,
                                password:this.register.onePwd
                            },
                        }).then((res) => {
                            console.log('success ' , res);
//                            this.$http({
//                                url: 'auth/user',
//                                method: 'GET',
//                            }).then((res) => {
//                                console.log(this.$auth.user().name)
//                                this.$router.push({name:'zyDetails',params:{appId:index}});
//                            }, (res) => {
//
//                            });

                        }, (res) => {

                        });
                    }
                }
            },
            getValidationImg(){
                this.validationImgSrc = this.$http.options.root +'/getcodeImage?jwt=bearer '+localStorage.getItem('default-auth-token')+'&num='+Math.random();
            },

        },
        beforeCreate(){
            this.$http({
                url: 'test',
                method: 'GET',
            }).then((res) => {
                this.validationImgSrc = this.$http.options.root +'/getcodeImage?jwt=bearer '+localStorage.getItem('default-auth-token')+'&num='+Math.random();
            }, (res) => {
            });
        }
    }
</script>
<style>
    #login{
        text-align:center;
        margin-top: -330px;
        position:absolute;
        height:400px;
        top:50%;
        left:50%;
        width:300px;
        margin-left:-150px;
        box-sizing: border-box;
        border-bottom: none;
        border-radius: 0;
        border-color: #f2f2f2;
        box-shadow: none;
    }
    #login .logo{
        height:195px;
        border: 0;
    }
    #login .custom-header{
     text-align: center;
    margin-bottom: 40px;
    }
    #login #juta{
        margin-bottom:50px;
        margin-top:-24px;
        font-size:26px;
        color:rgb(82,82,82);
    }
    #login .el-input__inner {
        border-radius: 4px;
        border:none;
        box-shadow: none;
        padding-left:18px;
    }
    #login .form-control.pwd{
        margin-top:15px;
    }
    #login .el-button {
        color:#fff;
        width:100%;
        border: none;
        margin-top:15px;
        height: 37px;
        border-radius: 4px;
        font-size: 16px;
        line-height: 17px;
        background-color: rgb(66, 140, 187);
    }
    #login .el-button:hover {
        background-color: #2791e1;
        border-color: #2ca2fb;
        color:#fff;
    }
    #login .text-right{
        text-align:right;
        margin:15px 0;
    }
    #login .text-muted{
             color: #747982;
         }
    #login .btn-block{
        background-color: #fff;
        border:none;
        height: 35px;
        border-radius: 4px;
        font-size: 16px;
        line-height: 15px;
        color:#444952;
        margin-top:0;
    }
    #login .btn-block:hover{
        background-color:#eaeaea;
        color:#444952;
    }
    #login .errorLogin{
        margin-top: -10px;
        float: left;
        margin-bottom: -10px;
        color: #c73636;
    }



    #father .el-input__inner {
        display: block;
        width: 100%;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        border-radius: 4px;
        background-image: none;
        border: 1px solid #ccc;
        border-color: #f2f2f2;
        box-shadow: none;
    }
    #father .el-button{
        border-radius:0;
    }
    #father .el-button:hover{
        background-color:#2e87ca;
        border-color:#2e87ca;
    }
    #father .input-group {
        height: 34px;
        width: 310px;
    }
    #father .input-group .form-control {
        display: table-cell;
        position: relative;
        z-index: 2;
        float: left;
        width: 100%;
        margin-bottom: 0;
    }
    #father .input-group-btn{
        float:left;
        position: relative;
    }
    #father .btn {
        background-color: #2ca2fb;
        border-color: #2ca2fb;
        display: inline-block;
        padding: 7px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        border: 1px solid transparent;
    }

    #father .btn-primary {
        color:#fff;
        background-color: rgb(66, 140, 187);
        border-color: rgb(66, 140, 187);
    }
    #father #addID{
        width:100%;
        padding:12px 16px;
        font-size:16px;
        border-radius: 4px;
    }
    #father .btn-block {
        display: block;
        width: 100%;
    }

    #father .mb-housite{
        margin-bottom: 20px;
    }
    #father{
    }
    #father .custom-panel input{
        background-color: #f5f5f5;

    }
    #father .custom-progress {
        border-top: 2px solid rgb(66,140,187);
        margin: 0 20px 60px 20px;
        position: relative;
    }
    #register .custom-progress .step {
        position: absolute;
    }
    #father .custom-progress.text-right{
        margin-bottom: 30px;height:20px;
    }
    #father .custom-progress .dot{
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 12px;
        top: -11px;
        background-color: #fff;
        border: 2px solid rgb(66,140,187);
    }
    #father .custom-progress .dot.done{
        background-color: rgb(66,140,187);
    }
    #father .custom-progress .title{
        top:15px;

    }
    #father .text-center {
        text-align: center;
    }
    #father .text-muted{
        color:#747982;
    }
    #father .small{
        font-size:85%;
    }
    #father .text-center .text-info {
        color: #2ca2fb;
    }
    #father .text-center .text-info:hover{
        color:#337ab7;
    }
    #father #getcode{
        margin-top: 0px;
        height: 36px;
    }
    #father .validationText input{
        border-radius: 4px 0 0 4px;
    }
    #validationImg img{
        height: 36px;
    }
    #validationImg .input-group {
        height: 18px;
    }
    #validationImg .el-button{
        width: initial;
        border-radius: 4px;
        margin-top: initial;
        height: initial;
        font-size: 14px;
    }
    #father .errorLogin {
        margin-top: -24px;
        float: left;
        margin-bottom: 0;
        color: #c73636;
    }
    #father .el-dialog--tiny{
        width: 40%;
    }
</style>
