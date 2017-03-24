<template>
<div id="register">
    <div class="custom-header">
        <img src="../../assets/logo.jpg" alt="" class="logos">
        <br>
        <br>
        <h4 class="text-info">开启微信公众号的神奇之旅</h4>


    </div>
    <!--<div class="custom-body">


        <div class="custom-progress mb-housite">
            <span class="step dot done" style="left:-11px;"></span>
            <small class="step title text-muted" style="left:-35px;">注册登录账号</small>
            <span class="step dot" style="right:-11px;"></span>
            <small class="step title text-muted" style="right: -40px;">开启神奇之旅</small>
        </div>


        <div class="mb-housite" style="background-color:white;padding:50px 170px 20px;">
            <input type="text" class="form-control" placeholder="输入你的手机号" style="margin-bottom:10px;" id="mobile">
            <div class="input-group" style="margin-bottom:10px;">
                <input type="text" class="form-control" placeholder="输入短信验证码" id="Verification">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" id="getcode">获取验证码</button>
                    </span>
            </div>
            <div class="text-right" style="margin-bottom: 30px;height:20px;">

            </div>
            <input type="password" class="form-control" placeholder="请输入六位以上密码" style="margin-bottom:10px;" id="password">
            <input type="password" class="form-control" placeholder="请再次输入确认密码" style="margin-bottom:30px;" id="passwords">
            <p class="text-center mb-housite">
                <button class="btn btn-primary btn-lg btn-block" id="addID">创建账号</button>

            </p>
            <p class="text-center">已经有账号?</p>
            <p class="text-center">
                <a href="/login" class="text-info">登录</a>
            </p>

        </div>
    </div>-->

</div>
    </template>

<script>
    export default {
        name:'zyRegister'
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
    .form-control {
        border-radius: 0;
        border-color: #f2f2f2;
        box-shadow: none;
    }
    .btn-primary {
        color:#fff;
        background-color: rgb(66,140,187);
        border-color: #2ca2fb;
    }
    .btn-block {
        display: block;
        width: 100%;
    }
    .btn-primary:hover{
        background-color:#2791e1 ;
        border-color:#2ca2fb;

    }

    .mb-housite{
        margin-bottom: 20px;
    }
    .custom-panel input{
        background-color: #f5f5f5;

    }
    .custom-progress {
        border-top: 2px solid rgb(66,140,187);
        margin: 0 20px 60px 20px;
        position: relative;
    }
    .custom-progress .step {
        position: absolute;
    }
    .custom-progress .dot{
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 10px;
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
    .text-center {
        text-align: center;
    }
    .text-muted{
        color:#747982;
    }
    .small{
        font-size:85%;
    }
    .text-center .text-info {
        color: #2ca2fb;
    }
    .text-center .text-info:hover{
        color:#337ab7;

    }


</style>
