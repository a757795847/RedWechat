<template>

    <div id="zyUserSet">
        <p class="appListHeader">用户账号设置</p>
        <el-tabs v-model="activeName">
            <el-tab-pane label="基础信息" name="first">
                <div class="Userform">
                    <el-form ref="form" :model="form" label-width="88px">
                        <el-form-item label="头像">
                            <img src="../../../assets/logo.jpg" alt="">
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
                            <el-button type="text">修改密码</el-button>
                            <p>本密码用于账号登录、登录后可进行所有操作、请妥善保管。</p>
                        </el-form-item>

                    </el-form>
                </div>

            </el-tab-pane>
        </el-tabs>
    </div>

</template>
<script>
    export default{
        name: 'zyUserSet',
        data() {
            return {
                activeName: 'first',
                form: {
                    name: this.$auth.user().name,
                    phone:this.$auth.user().phone,
                    pwd:'123456'
                }
            };
        },
        beforeCreate(){
            console.log(this.$auth.user())
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
</style>