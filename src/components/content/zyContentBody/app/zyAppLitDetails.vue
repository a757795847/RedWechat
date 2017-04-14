<template>
    <div id="appListDetails" v-loading="loading">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/appList' }">应用中心</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="24">
                <div class="appListDetailsHeader" :style="{backgroundColor:detail.background_color}">
                    <div>
                        <div class="appListDetailsHeaderBody">
                            <p>{{detail.name}}</p>
                            <p>{{!state?'未开通':'已开通'}}</p>
                        </div>
                        <el-button type="primary" v-if="!state" @click="dialogVisible = true">开通</el-button>
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
                        <li>
                            <pre>{{detail.description}}</pre>
                        </li>
                    </ul>
                    <!--<ul>-->
                        <!--<li>免责声明</li>-->
                        <!--<li>{{detail.escape_clause}}-->
                        <!--</li>-->
                    <!--</ul>-->
                </div>
            </el-col>
        </el-row>
        <p v-if="state"  :style="{color:'#CE6D72'}" class="cancels" @click="cancelState = true" >取消服务</p>
        <el-dialog class="operation" title="是否开通" v-model="dialogVisible" size="tiny">
            <span>{{detail.charge_standard}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="text" @click="dialogVisible = false" :style="{color:'#2B2C2F'}">取 消</el-button>
                <el-button type="text" @click="clickOpen">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog class="operation" title="是否取消" v-model="cancelState" size="tiny" :top="'25%'">
            <p style="textIndent: 10px">是否取消<span>{{detail.name}}</span>应用</p>
            <span slot="footer" class="dialog-footer">
                <el-button type="text" @click="cancelState = false" :style="{color:'#2B2C2F'}">取 消</el-button>
                <el-button type="text" @click="cancelServer">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        name: 'zyAppListDetails',
        data(){
            return {
                loading:true,
                dialogVisible: false,
                detail: {},
                state: false,
                color:'',
                title:'',
                cancelState:false
            }
        },
        beforeCreate(){
            this.$http({
                url: 'app/info',
                method: 'POST',
                params: {
                    id: this.$route.params.id
                }
            }).then((res) => {
//                console.log('app/info',res)
                if(res.data.status == 1){
                    this.detail = res.data.applicationInfo;
                    this.color=res.data.applicationInfo.font_color;
                    this.state = res.data.isOpened;
                    this.title = res.data.applicationInfo.name;
                    this.loading = false;
                }
            }, (res) => {

            });
        },
        methods:{
            enter(){
                this.$router.push('/details/'+this.detail.abbreviation);
            },
            clickOpen(){

                this.dialogVisible = false;
                this.$http({
                    url: 'app/open',
                    method: 'POST',
                    body: {
                        id: this.detail.id
                    }
                }).then((res) => {
//                    console.log('res=>applistDetail=>',res)
                    if(res.body.status!=0){
                        this.state = true;
                        this.$store.dispatch('add_app_list',res.body.data);
                        this.$message({
                            type: 'success',
                            message: '开通成功',
                            customClass:'messageSucceed',
                            iconClass:'el-icon-check'
                        });
                    }
                }, (res) => {

                });
            },
            cancelServer(){
                this.$http({
                    url: 'app/close?appid='+this.detail.id,
                    method: 'POST'
                }).then((res) => {
//                    console.log('cancelServer=>',res)
                    if(res.body.status == 1){
                        this.state = false;
                        this.$store.dispatch('delete_app_list',{
                            id: this.detail.id,
                        })
                        this.cancelState = false;
                    }
                }, (res) => {

                });
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
        background: url("../../../../assets/app-fanxian.png") no-repeat;
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
        min-height: 330px;
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
        background: url("../../../../assets/app-detail-tiaojian.png") no-repeat;
        background-size: 20px;
    }
    #appListDetails .appListDetailsBody .standard{
        background: url("../../../../assets/app-detail-shoufei.png") no-repeat;
        background-size: 20px;
    }
    #appListDetails .appListDetailsBody .service{
        background: url("../../../../assets/app-detail-neirong.png") no-repeat;
        background-size: 20px;
    }
    #appListDetails .cancels{
        border-radius:6px;
        text-align: center;
        width:60px;
        color: #2B2C2F;
        padding: 7px 12px;
        font-size: 13px;
        cursor:pointer;
    }
    #appListDetails .cancels:hover{
        background: #F2D9D9;
    }
    #appListDetails .operation .el-dialog--tiny{
        width: 400px;
    }
    #appListDetails .operation .el-dialog--tiny .el-dialog__body{
        padding-bottom: 0;
    }
    #appListDetails .operation .el-button--text{
        color: #68A593;
        padding: 9px 16px;
        font-size: 13px;
    }
    #appListDetails .operation .el-button--text:hover{
        background: #E4EDE2;
    }
  /*  #appListDetails .cancels:hover{
        background: black;
    }*/

</style>