<template>

    <div>
        <div v-show="mylogin" id="login">
        <div class="custom-header">
            <img src="../assets/logo.jpg" alt="user" class="logo">
        </div>
        <p id="juta">聚塔微客户管理平台</p>
        <div class="mb-housite">
            <el-input v-model="data.body.username" placeholder="请输入账号" class="form-control"></el-input>
            <el-input v-model="data.body.password" placeholder="请输入密码" type="password" class="form-control pwd"></el-input>
        </div>
        <p v-show="errorLogin" class="errorLogin">账号密码错误</p>
        <el-button v-on:click.prevent="login()">立即登录</el-button>
        <p class="text-right">
            <a href="" class="text-muted">忘记密码?</a>
        </p>
        <el-button class="btn-block">注册账号</el-button>
        </div>
        <zy-register v-show="myregister"></zy-register>
    </div>


</template>

<script>
    import zyRegister from './content/register.vue'
    export default {
        components:{
            zyRegister
        },
        data() {
            return {
                data: {
                    body: {
                        username: '2',
                        password: '1'
                    },
                    rememberMe: false
                },
                mylogin:true,
                myregister:false,
                errorLogin:false,
                error: null
            }
        },
        methods: {

            login() {
                var redirect = this.$auth.redirect();

                this.$auth.login({
                    body: this.data.body,
                    rememberMe: this.data.rememberMe,
                    redirect: {name: redirect ? redirect.from.name : 'indexDefault'},
                    success() {
                        console.log('success ' + this.context);
                    },
                    error(res) {
                        console.log('error  res ===>  ',res);
                        console.log('error ' + this.context);
                        if(res.status === 401){
                            this.errorLogin = true;
                        }
                        this.error = res.data;
                    }
                });

            }
        },
        beforeCreate(){
//            this.$auth.options.refreshData.enabled = false;
//            this.$auth.options
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
    #login #juta{ margin-bottom:50px;
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

</style>
