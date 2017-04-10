<template>
<div id="zyAddPublic">
    <div class="details">
        <div class="detailsHeader">
            <div class="returnAppBtn" v-on:click="returnIndex"><i class="el-icon-arrow-left"></i>返回我的公众号</div>
            <div class="detailsTab">
                <span id="appName">授权公众号流程</span>
            </div>
        </div>
        <div class="detailsBody">
                <el-steps :space="200" :active="1">
                    <el-step description="了解授权须知点击授权按钮" :style="{ width: 140+ 'px' }"></el-step>
                    <el-step description="跳转到微信进行授权" :style="{ width: 140+ 'px' }"></el-step>
                    <el-step description="授权完成导入粉丝数据" :style="{ width: 140+ 'px' }"></el-step>
                </el-steps>
           <p class="logos">
               <img src="../../assets/40B4E7CA-D969-4379-BEBF-D08764CE007B.png" @click="dialogVisible = true">
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
    <el-dialog title="Sorry" v-model="dialogVisible" size="tiny">
        <span>绑定公众号正在马不停蹄的日夜开发中</span>
        <span>敬请期待</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="text" @click="dialogVisible = false" :style="{color:'#393a3e'}">取 消</el-button>
                <el-button type="text" @click="dialogVisible = false">确 定</el-button>
            </span>
    </el-dialog>
    </div>

</template>


<script>

    export default {
        name:'zyAddPublic',
        data(){
            return{
                dialogVisible: false
            }
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
    #zyAddPublic .details{
        min-height: 750px;
        min-width: 1000px;
        max-width: 1160px;
        margin: 0 auto;
        padding: 0 20px;
    }
    #zyAddPublic .detailsHeader{
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
    }
    #zyAddPublic .detailsHeader .returnAppBtn{
        background: white;
        border-radius: 5px 0 0 5px;
        width: 150px;
        height: 100%;
        line-height: 40px;
        text-indent: 9px;
        background-size: 20px 20px;
        background-position: 28px 10px;
        color: #68A593;
        margin-right: 3px;
        float: left;
        cursor: pointer;
    }
    #zyAddPublic .detailsHeader .detailsTab{
        width: calc(100% - 153px);
        background: white;
        display: inline-block;
        float: left;
        height: 100%;
        border-radius: 0 5px 5px 0;
        line-height: 40px;
        position: relative;
    }
    #zyAddPublic .detailsHeader .detailsTab #appName{
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

    #zyAddPublic .detailsHeader .detailsTab ul{
        float: left;
    }
    #zyAddPublic .detailsHeader .detailsTab li{
        float: left;
        width: 90px;
        text-align: center;
        cursor:pointer;
    }
    #zyAddPublic .detailsHeader .activeTab{
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
    #zyAddPublic  .detailsBody{
        text-align:center;
        background: white;
        width: 100%;
        min-height: 700px;
        border-radius: 5px;
    }
    #zyAddPublic .el-button{
        color: #68A593;
        padding: 9px 16px;
        font-size: 13px;
    }
    #zyAddPublic .el-button:hover{
        background: #E4EDE2;
    }
   /* .detailsBody .sidebar{
        width:650px;
        margin:0 auto;
        padding-top:80px;

    }*/
    #zyAddPublic .detailsBody .el-steps.is-horizontal{
        padding-top:80px;
        padding-left:100px;
        width:420px;
        margin:0 auto;
    }
    #zyAddPublic .detailsBody .el-step__description{
        line-height:20px;
        text-align:center;
        font-size:14px;
        color:#b8babb;
        width: 84px;
        margin-top: 10px;
        margin-left: -25px;
    }
    #zyAddPublic .detailsBody .el-step__head.is-text.is-process {
        color: #bfcbd9;
        background-color: #fbfdff;
        border-color: #bfcbd9;
    }
    #zyAddPublic .el-step__head.is-text.is-finish{
        background-color:rgb(104,165,147);
        border-color: rgb(104,165,147);
    }
    #zyAddPublic .logos{
        margin-top:40px;
    }
    #zyAddPublic .detailsBody .father{
        margin:35px auto;
        padding: 20px 0 59px 0px;
        width:800px;
        background-color:rgb(228,237,226);
        text-align: center;
    }
    #zyAddPublic .father li{
        float:left;
        margin-left:60px;
    }
    #zyAddPublic .father ul{
        margin-top:40px;
        margin-left:44px;
    }
    #zyAddPublic .father ul:after{
        content:".";
        display:block;
        height:0;
        clear:both;
        visibility:hidden;
    }
    #zyAddPublic .father li img{
        width:80px;
    }
    #zyAddPublic .father li p{
        color:#68A593;
        width:100px;
        margin-top:10px;
    }
    #zyAddPublic [class*=" el-icon-"], [class^=el-icon-]{
        margin-right: 8px;
    }



</style>