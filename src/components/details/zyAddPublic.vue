<template>
<div id="lpp">
    <zy-header></zy-header>
    <div id="details">
    <div id="detailsHeader">
        <div class="returnAppBtn" v-on:click="returnIndex"><i class="el-icon-arrow-left"></i>返回我的公众号</div>
        <div class="detailsTab">
            <span id="appName">授权公众号流程</span>
        </div>
    </div>

        <div id="detailsBody">
                <el-steps :space="200" :active="1">
                    <el-step description="了解授权须知点击授权按钮" :style="{ width: 140+ 'px' }"></el-step>
                    <el-step description="跳转到微信进行授权" :style="{ width: 140+ 'px' }"></el-step>
                    <el-step description="授权完成导入粉丝数据" :style="{ width: 140+ 'px' }"></el-step>
                </el-steps>
           <p class="logos">
               微信图标|授权绑定公众号
           </p>
            <div class="father">
                <p :style="{ color:'#68A593'}">授权须知</p>
                <ul>
                    <li>
                        <img src="../../assets/wechat-auth-1.png" alt="">
                        <p>
                            确保您是公众号管理员
                        </p>
                    </li>
                    <li>
                        <img src="../../assets/wechat-auth-2.png" alt="">
                        <p>跳转到微信页面后使用您的微信扫一扫</p>
                    </li>
                    <li>
                        <img src="../../assets/wechat-auth-3.png" alt="">
                        <p>勾选授权清单请尽量全部选择</p>
                    </li>
                    <li>
                        <img src="../../assets/wechat-auth-4.png" alt="">
                        <p>授权完成后微信会跳回此页面继续</p>
                    </li>
                </ul>
            </div>

            </div>
    </div>
    </div>

    </template>


<script>
    import zyHeader from '../header/header.vue'

    export default {
        name:'zyAddPublic',
        data(){
            return{
            }
        },
        components:{
            zyHeader
        },
        methods:{
            IsActive( index ){
                this.isActive = index;
            },
            returnIndex(){
                if(this.$route.path == '/'){
                    this.$router.push('index')
                }else{
                    this.$router.go(-1)
                }
            }
        }

    }
</script>

<style>
    #details{
        min-height: 750px;
        min-width: 1000px;
        max-width: 1160px;
        margin: 0 auto;
        padding: 0 20px;
    }
    #detailsHeader{
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
    }
    #detailsHeader .returnAppBtn{
        background: white;
        border-radius: 5px 0 0 5px;
        width: 150px;
        height: 100%;
        line-height: 40px;
        text-indent: 9px;
        background-size: 20px 20px;
        background-position: 28px 10px;
        color: #68A593;
        font-weight: bold;
        margin-right: 3px;
        float: left;
        cursor: pointer;
    }
    #detailsHeader .detailsTab{
        width: calc(100% - 153px);
        background: white;
        display: inline-block;
        float: left;
        height: 100%;
        border-radius: 0 5px 5px 0;
        line-height: 40px;
        position: relative;
    }
    #detailsHeader .detailsTab #appName{
        padding-left: 20px;
        width: 150px;
        float: left;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
        margin-right: 50px;
    }

    #detailsHeader .detailsTab ul{
        float: left;
    }
    #detailsHeader .detailsTab li{
        float: left;
        width: 90px;
        text-align: center;
        cursor:pointer;
    }
    #detailsHeader .activeTab{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width:  90px;
        margin-left: 220px;
        background-color: #68A593;
        z-index: 1;
        transition: left .3s cubic-bezier(.645,.045,.355,1);
        list-style: none;
    }
    #detailsBody{
        text-align:center;
        background: white;
        width: 100%;
        min-height: 700px;
        border-radius: 5px;
    }

   /* #detailsBody .sidebar{
        width:650px;
        margin:0 auto;
        padding-top:80px;

    }*/
    #detailsBody .el-steps.is-horizontal{
        padding-top:80px;
        padding-left:100px;
        width:420px;
        margin:0 auto;
    }
    #detailsBody .el-step__description{
        line-height:20px;
        text-align:center;
        font-size:14px;
        color:#b8babb;
        width: 84px;
        margin-top: 10px;
        margin-left: -25px;
    }
    #detailsBody .el-step__head.is-text.is-process {
        color: #bfcbd9;
        background-color: #fbfdff;
        border-color: #bfcbd9;
    }
    .el-step__head.is-text.is-finish{
        background-color:rgb(104,165,147);
        border-color: rgb(104,165,147);
    }
    .logos{
        margin-top:40px;
    }
    #detailsBody .father{
        margin:35px auto;
        padding: 20px 0 59px 0px;
        width:800px;
        background-color:rgb(228,237,226);
        text-align: center;
    }
    .father li{
        float:left;
        margin-left:60px;
    }
    .father ul{
        margin-top:40px;
        margin-left:44px;
    }
    .father ul:after{
        content:".";
        display:block;
        height:0;
        clear:both;
        visibility:hidden;
    }
    .father li img{
        width:80px;
    }
    .father li p{
        color:#68A593;
        width:100px;
        margin-top:10px;
    }



</style>