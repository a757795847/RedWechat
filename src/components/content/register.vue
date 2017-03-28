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



    </div>
</div>
    </template>
<script>
    export default {
        name:'zyRegister',
        props:{

        },
        data() {
            return {
                phoneNub: '',
                messCode:'',
                onePwd:'',
                twoPwd:''

            }
        },
        methods:{
            registered(){
                this.$parent.$data.zylogin = !this.$parent.$data.zylogin
            },
            verificationCode(){
                this.$http({
                    url: 'verificationCode',
                    method: 'GET'
                }).then((res) => {
                    console.log('success ' + this.context);
                }, (res) => {
                        console.log('error ' + this.context);
                });
            }

        }
    }
</script>

<style>





</style>
