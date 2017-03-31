<template>
    <div id="appListDetails">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/appList' }">应用中心</el-breadcrumb-item>
            <el-breadcrumb-item>好评返现(无商家版)</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="24">
                <div class="appListDetailsHeader" :style="{backgroundColor:detail.background_color}">
                    <div>
                        <div class="appListDetailsHeaderBody">
                            <p>{{detail.name}}</p>
                            <p>{{state?'已开通':'未开通'}}</p>
                        </div>
                        <el-button type="primary" v-if="!state">开通</el-button>
                        <el-button type="primary" v-else @click="enter">进入后台</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="appListDetailsBody">
                    <ul>
                        <li class="open">开通条件</li>
                        <li>{{detail.open_condition}}</li>
                    </ul>
                    <ul>
                        <li class="standard">收费标准</li>
                        <li>{{detail.charge_standard}}</li>
                    </ul>
                    <ul>
                        <li class="service">服务内容</li>
                        <li>{{detail.description}}
                        </li>
                    </ul>
                    <ul>
                        <li>免责声明</li>
                        <li>{{detail.escape_clause}}
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
        <el-button type="text" v-if="state">取消服务</el-button>
    </div>
</template>
<script>
    export default{
        name:'zyAppListDetails',
        data(){
            return{
                detail:{},
                state:true
            }
        },
        beforeCreate(){
            console.log(this);
            this.$http({
                url: 'app/info',
                method: 'POST',
                params:{
                    id:this.$route.params.id
                }
            }).then((res) => {
                if(res.data.status == 1){
                    this.detail = res.data.applicationInfo;
                    this.state = res.data.isOpened;
                }
            }, (res) => {

            });
        },
        methods:{
            enter(){
                this.$router.push('/details/bag');
            }
        }
    }
</script>
<style>
    #appListDetails{
        padding:30px 20px;
    }
    #appListDetails .el-breadcrumb__item__inner {
        color:#48576a;
    }
    #appListDetails .appListDetailsHeader{
        height: 80px;
        background: url("../../../assets/app-fanxian.png") no-repeat;
        margin-top: 30px;
        background-size: 60px;
        background-position: 20px 10px;
        position: relative;
        line-height: 80px;
    }
    #appListDetails .appListDetailsHeader .appListDetailsHeaderBody{
        margin-left: 90px;
        padding-top: 20px;
        height: 44px;
        width: 500px;
        display: inline-block;
        line-height: 19px;
    }
    #appListDetails .appListDetailsHeader .appListDetailsHeaderBody p{
        width: 500px;
        display: inline-block;
    }
    #appListDetails .appListDetailsHeader .appListDetailsHeaderBody p:last-child{
        margin-top: 5px;
        color:#A8A8A8;
        font-size: 13px;
    }
    #appListDetails .appListDetailsHeader  .el-button--primary {
        float: right;
        padding: 5px 24px;
        margin: 30px 20px;
        background-color: #589680;
        border-color: #589680;
    }
    #appListDetails .appListDetailsBody{
        min-height: 350px;
        margin-top:7px;
        padding-left: 28px;
        max-width: 800px;
    }
    #appListDetails .appListDetailsBody ul{
        min-height: 70px;
    }
    #appListDetails .appListDetailsBody ul li:first-child{
        color:#A8A8A8;
        text-indent: 28px;
        margin-bottom: 10px;
    }
    #appListDetails .appListDetailsBody ul li:last-child{
        padding-left: 28px;
        font-size: 14px;
        line-height: 25px;
    }
    #appListDetails .appListDetailsBody .open{
        background: url("../../../assets/app-detail-tiaojian.png") no-repeat;
        background-size: 20px;
    }
    #appListDetails .appListDetailsBody .standard{
        background: url("../../../assets/app-detail-shoufei.png") no-repeat;
        background-size: 20px;
    }
    #appListDetails .appListDetailsBody .service{
        background: url("../../../assets/app-detail-neirong.png") no-repeat;
        background-size: 20px;
    }
    #appListDetails   button.el-button.el-button--text {
        color: #ab3e3e;
        padding: 7px 12px;
        font-size: 13px;
        margin-top: 20px;
    }
    #appListDetails   button.el-button.el-button--text:hover{
        background: #ffcece;
    }

</style>