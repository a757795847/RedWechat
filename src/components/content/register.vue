<template>
<div id="register">
    <div class="custom-header">
        <img src="../../assets/logo.jpg" alt="" class="logos">
        <br>
        <br>
        <h4 class="text-info">开启微信公众号的神奇之旅</h4>
    </div>
    <div class="custom-body">
        <div class="custom-progress mb-housite">
            <span class="step dot done"></span>
            <small class="step title text-muted" :style="{ left: -29 + 'px' }">注册登录账号</small>
            <span class="step dot" :style="{  right: -11 + 'px' }"></span>
            <small class="step title text-muted" :style="{ right: -35 + 'px' }">开启神奇之旅</small>
        </div>


        <div class="mb-housite" id="father">
            <el-input type="text" class="form-control" v-model="phoneNub" placeholder="输入你的手机号" :style="{ marginBottom: 10 + 'px' }"></el-input>
            <div class="input-group" :style="{ marginBottom: 30 + 'px' }">
                <el-input v-model="messCode" placeholder="输入短信验证码" class="form-control" :style="{ width: 53 + '%' }"></el-input>
                    <span class="input-group-btn">
                        <el-button class="btn btn-primary" id="getcode" :style="{ position:'relative' }">获取验证码</el-button>
                    </span>
            </div>
            <div class="text-right">

            </div>
            <el-input type="password" class="form-control" placeholder="请输入六位以上密码" v-model="onePwd" :style="{ marginBottom: 10 + 'px' }"></el-input>
            <el-input type="password" class="form-control" placeholder="请再次输入确认密码" v-model="twoPwd" :style="{ marginBottom: 30 + 'px' }"></el-input>
            <p class="text-center mb-housite">
                <el-button class="btn btn-primary btn-lg btn-block" id="addID">创建账号</el-button>
            </p>
            <p class="text-center">已经有账号?</p>
            <p class="text-center">
                <a href="" class="text-info">登录</a>
            </p>

        </div>
    </div>
</div>
    </template>
<script>
    export default {
        name:'zyRegister',
        data() {
            return {
                phoneNub: '',
                messCode:'',
                onePwd:'',
                twoPwd:''

            }
        }
    }
</script>

<style>

    #register{
        position:absolute;
        left:50%;
        top:50px;
        width: 600px;
        margin-left: -300px;
    }
    .logos{
        height:80px;
        border: 0;
    }
    h4{
        color: #444952;
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
        ont-family: inherit;
        line-height: 1.1;

    }
    .custom-header{
        text-align: center;
        margin-bottom: 40px;
    }
    #register .el-input__inner {
        display: block;
        width: 100%;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #f5f5f5;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 0;
        border-color: #f2f2f2;
        box-shadow: none;
    }
    #register .el-button{
        border-radius:0;
    }
    #register .el-button:hover{
        background-color:#2e87ca;
        border-color:#2e87ca;
    }
    #register .input-group {
        height: 34px;
        width: 310px;
    }
    #register .input-group .form-control {
        display: table-cell;
        position: relative;
        z-index: 2;
        float: left;
        width: 100%;
        margin-bottom: 0;
    }
    #register .input-group-btn{
        float:left;
        position: relative;
    }
    #register .btn {
        background-color: #2ca2fb;
        border-color: #2ca2fb;
        display: inline-block;
        padding: 7px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        border: 1px solid transparent;
    }

    #register .btn-primary {
        color:#fff;
        background-color: #2ca2fb;
        border-color: #2ca2fb;
    }
    #register #addID{
        width:100%;
        padding:12px 16px;
        font-size:18px;
    }
    #register .btn-block {
        display: block;
        width: 100%;
    }

    #register .mb-housite{
        margin-bottom: 20px;
    }
    #father{
        background-color:white;
        padding:50px 170px 20px;
    }
    #register .custom-panel input{
        background-color: #f5f5f5;

    }
    #register .custom-progress {
        border-top: 2px solid rgb(66,140,187);
        margin: 0 20px 60px 20px;
        position: relative;
    }
    #register .custom-progress .step {
        position: absolute;
    }
    .custom-progress.text-right{
        margin-bottom: 30px;height:20px;
    }
    .custom-progress .dot{
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 12px;
        top: -11px;
        background-color: #fff;
        border: 2px solid rgb(66,140,187);
    }
    .custom-progress .dot.done{
        background-color: rgb(66,140,187);
    }
    .custom-progress .title{
        top:15px;

    }
    #register .text-center {
        text-align: center;
    }
    #register .text-muted{
        color:#747982;
    }
    #register .small{
        font-size:85%;
    }
    #register .text-center .text-info {
        color: #2ca2fb;
    }
    #register .text-center .text-info:hover{
        color:#337ab7;
    }



</style>
