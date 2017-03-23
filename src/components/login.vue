<template>
    <div id="login">
        <div class="custom-header">
            <img src="../assets/logo.jpg" alt="user" class="logo">
        </div>
        <p id="juta">聚塔微客户管理平台</p>
        <div class="mb-housite">
            <el-input v-model="input" placeholder="请输入账号" class="form-control"></el-input>
            <el-input v-model="pwd" placeholder="请输入密码" type="password" class="form-control pwd"></el-input>
        </div>
        <el-button>立即登录</el-button>
        <p class="text-right">
            <a href="../../../wechatUserInfo/forget" class="text-muted">忘记密码?</a>
        </p>
        <el-button class="btn-block">注册账号</el-button>
        </div>

</template>

<script>
    export default {
        data() {
            return {
                input: '',
                pwd:''
            }
        }
    }
</script>
<style>
    html,body,h1,h2,h3,p,li,ul,a,div{
        margin: 0;
        padding: 0;
    }
    body{
        font-size: 14px;
        background: #EAF2E9;
    }
    ul{
        list-style:none;
    }
    .clear{
        zoom: 1;
    }
    .clear:after{
        clear:both;
        content:'.';
        display: block;
        width: 0;
        height: 0;
        visibility: hidden;
    }
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
    .logo{
        height:195px;
        border: 0;
    }
    .custom-header{
     text-align: center;
    margin-bottom: 40px;
    }
    #juta{ margin-bottom:50px;
        margin-top:-24px;
        font-size:26px;
        color:rgb(82,82,82);
    }
    .el-input__inner {
        border-radius: 4px;
        border:none;
        box-shadow: none;
        padding-left:18px;
    }
    .form-control.pwd{
        margin-top:15px;
    }
    .el-button {
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
    .el-button:hover {
        background-color: #2791e1;
        border-color: #2ca2fb;
        color:#fff;
    }
    .text-right{
        text-align:right;
        margin:15px 0;
    }.text-muted{
             color: #747982;
         }
    .btn-block{
        background-color: #fff;
        border:none;
        height: 35px;
        border-radius: 4px;
        font-size: 16px;
        line-height: 15px;
        color:#444952;
        margin-top:0;
    }
    .btn-block:hover{
        background-color:#eaeaea;
        color:#444952;
    }

</style>
