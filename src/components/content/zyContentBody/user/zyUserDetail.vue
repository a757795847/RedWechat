<template>
    <div id="userDetail">
        <p class="userDetailHeader">我的帐户</p>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="充值记录" name="first" class="recharge">
                <el-row>
                    <el-col :span="24" class="remaining">
                        当前账户余额<span class="remainingMoney">{{remainMoney}}</span>元
                        <el-button type="text" @click="dialogVisible = true">我要充值</el-button>
                    </el-col>
                    <p :style="{color:'#A8A8A8'}">充值记录</p>
                    <el-col :span="16" class="history">
                        <el-table
                                :data="tableData"
                                style="width: 100%">hu
                            <el-table-column
                                    prop="date"
                                    label="充值日期">
                                <template scope="scope">
                                    {{dateText(scope.row.date)}}
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="type"
                                    label="充值类型">
                            </el-table-column>
                            <el-table-column
                                    label="充值金额">
                                <template scope="scope">
                                    {{scope.row.count/100}}
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="block" style="float: right;marginTop: 10px" v-if="pageData.count > 0">
                            <el-pagination
                                    layout="prev, pager, next"
                                    :total="pageData.count"
                                    :page-size="pageData.page_size"
                                    @current-change="currentChange">
                            </el-pagination>
                        </div>
                    </el-col>
                </el-row>

                <el-dialog title="充值" v-model="dialogVisible" size="tiny">
                    <p>选择充值金额</p>
                    <el-button class="moneyBtn" :class="item.lab == activeMoneyBtn ? 'isActive':''"
                               v-for="(item,index) in moneyBtn" :key="index" @click="moneyBtnActive(item.lab)">
                        {{item.num}}
                    </el-button>
                    <p style="marginTop:20px">选择充值金额</p>
                    <el-button class="isActive payBtn"><i class="weixinLogo"></i>微信支付</el-button>
                    <span slot="footer" class="dialog-footer">
                      <el-button type="text" @click="dialogVisibleClose" style="color:#2B2C2F">取 消</el-button>
                      <el-button type="text" @click="recharge">确 定</el-button>
                    </span>
                </el-dialog>
                <el-dialog :title="!rechargeState?'扫码完成支付':'支付完成'" v-model="erweiPayState" class="erweiPay"
                           :close-on-press-escape="false"
                           :close-on-click-modal="false"
                           :show-close="false"
                >
                    <div v-if="!rechargeState"  slot="footer" >
                        <div ref="erwei"></div>
                        <!--<img style="width: 120px" :src="'http://open.izhuiyou.com/pay/test?value='+erweima" alt="">-->
                        <p>使用微信扫一扫</p>
                        <p style="color:#CE6D72">请在5分钟内完成支付</p>
                        <el-button type="primary" class="closeRecharge" @click="erweiPayState = false;forAjaxState = true">取消</el-button>
                    </div>
                    <div v-else  slot="footer" class="succeed">
                        <img src="../../../../assets/pay-success.png">
                        <p>充值成功</p>
                        <p>我们会努力为您提供优质的服务</p>
                        <el-button type="primary" class="closeRecharge" @click="recoverState()">关闭</el-button>
                    </div>
                </el-dialog>
            </el-tab-pane>
        </el-tabs>
        <span class="disappear">消费记录</span>
    </div>
</template>
<script>
    import QArt from 'qartjs'
    import erweima from '../../../../assets/erwei.png'
export default{
    name:'zyAppList',
    data() {
        return {
            activeName: 'first',
            tableData: [],
            dialogVisible:false,
            activeMoneyBtn:1,
            moneyBtn:[
                {
                    num:100,
                    lab:1
                },
                {
                    num:200,
                    lab:2
                },
                {
                    num:500,
                    lab:3
                },
                {
                    num:1000,
                    lab:4
                },
                {
                    num:2000,
                    lab:5
                },
                {
                    num:5000,
                    lab:6
                },
            ],
            erweiPayState:false,//二维码弹窗
            rechargeState:false,//二维码弹窗(是否支付(页面))
//            zhifuState:false,//是否支付
            remainMoney:this.$auth.user().cash /100,//用户金额
            billno:'',//轮训ajax参数
//            erweima:'',//二维码
            pageData:{},//分页data
            forAjaxState:false,//轮训ajax状态
            aa:true
        };
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        },
        moneyBtnActive(num){
            this.activeMoneyBtn = num;
        },
        recharge(){
            this.forAjaxState = false;
            this.$http({
                url: 'pay/qr',
                method: 'POST',
                body:{
                    count:this.activeMoneyBtn
                }
            }).then((res) => {
                this.erweiPayState = true;
                new QArt({
                    value: res.data.data.codeUrl,
                    imagePath: erweima,
                    filter:'filter'
                }).make(this.$refs.erwei);
//                this.erweima = res.data.data.codeUrl
                this.billno = res.data.data.billno;
                var that = this;
                var times = setInterval(function () {
                    this.$http({
                        url: 'pay/checkPayStatus',
                        method: 'POST',
                        body:{
                            billno:this.billno
                        }
                    }).then((res) => {
                        if(res.body.status == 1){
                            clearInterval(times);
                            this.rechargeState = true;
                            that.moneyDataAjax();
                            that.pageAjax(1)
                            return;
                        }else if(that.forAjaxState == true){
                            clearInterval(times);
                            return;
                        }
                    }, (res) => {

                    });
                }.bind(this),100)

            }, (res) => {

            });
        },
        moneyDataAjax(){
            this.$http({
                url: 'auth/user',
                method: 'GET',
            }).then((res) => {
                this.remainMoney = res.body.data.cash / 100
            }, (res) => {

            });
        },
        //分页
        currentChange(val){
            this.pageAjax(val);
        },
        //分页AJAX
        pageAjax(index){
            this.$http({
                url: 'pay/topUpRecord',
                method: 'POST',
                body:{
                    pageSize:10,
                    currentPageIndex:index
                }
            }).then((res) => {
//                console.log(res);
                if(res.data.status == 1){
                    this.tableData = res.data.list;
                    this.pageData = res.data.page;
                }
            }, (res) => {

            });
        },
        recoverState(){
            this.erweiPayState = false;
            this.dialogVisible = false;
            this.rechargeState = false;
            this.forAjaxState == false;
        },
        dateText(time){
            var times = new Date(time).toLocaleDateString()+' '+new Date(time).toTimeString();
            return times.split('G')[0]
        },
        dialogVisibleClose(){
            this.dialogVisible = false;
            setTimeout(()=>{
                this.activeMoneyBtn = 1;
            },300);
        }
    },
    mounted(){
    },
    beforeCreate(){
        this.$http({
            url: 'pay/topUpRecord',
            method: 'POST',
            body:{
                pageSize:10,
                currentPageIndex:1
            }
        }).then((res) => {
            if(res.data.status == 1){
                this.tableData = res.data.list;
                this.pageData = res.data.page;
            }
        }, (res) => {

        });
    }
}
</script>
<style>
    #userDetail{
        padding: 20px;
        position: relative;
    }
    #userDetail .userDetailHeader {
        padding-left: 7px;
        margin-bottom: 10px;
    }
    #userDetail .disappear{
        position: absolute;
        top: 62px;
        left: 100px;
    }
    #userDetail .el-tabs__nav-scroll{
        padding-left: 0;
    }
    #userDetail .el-tabs__item{
        width: 70px;
        padding: 0 4px;
        line-height: 28px;
        height: 28px;
        text-align: center;
    }
    #userDetail .el-tabs__content {
        padding: 10px 0;
    }
    #userDetail .el-tabs__content{
        padding-left: 10px;
    }
    #userDetail .recharge .remaining{
        margin-bottom: 25px;
    }
    #userDetail .recharge .remaining .el-button.el-button--text{
        margin-left: 20px;
        color:#68A593;
        padding: 10px 15px;
    }
    #userDetail .recharge .remaining .el-button.el-button--text:hover{
        background: #E4EDE2;
    }
    #userDetail .recharge .remainingMoney{
        font-size: 24px;
        color:#589680;
        margin-left: 10px;
    }
    #userDetail .recharge .history{
        margin-top: 5px;
        min-width: 458px;
    }
    #userDetail .recharge .history .el-table th ,#userDetail .history .el-table__header-wrapper thead div {
        background-color: #E4EDE2;
        text-align: center;
    }
    #userDetail .recharge .history .el-table .cell {
        text-align: center;
    }
    /*弹窗*/
    #userDetail .recharge .el-dialog__body{
        padding-bottom: 0;
        padding-left: 30px;
        padding-right: 10px;
    }
    #userDetail .recharge .el-dialog.el-dialog--tiny{
        width: 405px;
        height: 325px;
    }
    #userDetail .recharge .el-dialog__header{
        padding-top: 15px;
    }
    #userDetail .recharge .el-dialog__title{
        font-weight: inherit;
        color: #2B2C2F;
    }
    #userDetail .recharge .el-dialog__close:hover {
        color: #589680;
    }
    #userDetail .recharge .el-button.el-button--default{
        width: 100px;
        height: 36px;
        margin-top: 10px;
        margin-right: 20px;
        margin-left: 0;
        color: #C8C8C8;
        border-color:#C8C8C8;
    }
    #userDetail .recharge .isActive.el-button.el-button--default{
        color: #589680;
        border-color:#589680;
        background: url("../../../../assets/input-selected.png") no-repeat;
        background-size: 20px;
        background-position: 79px 14px;
    }
    #userDetail .recharge .payBtn.el-button.el-button--default{
        width: 140px;
        height: 36px;
        margin-bottom: 10px;
    }
    #userDetail .recharge  .payBtn.el-button.el-button--default.isActive{
        background-position: 120px 14px;
    }
    #userDetail .recharge .weixinLogo{
        background: url("../../../../assets/weixinpay.png") no-repeat;
        display: inline-block;
        width: 20px;
        height: 20px;
        background-size: 20px;
        margin-left: 10px;
        float: left;
        margin-top: -2px;
    }
    #userDetail .recharge .el-dialog__footer .el-button--text{
        color: #68A593;
        padding: 9px 13px;
        font-size: 13px;
    }
    #userDetail .recharge .el-dialog__footer .el-button--text:hover{
        background: #E4EDE2;
    }
    /*扫码*/
    #userDetail .recharge .erweiPay .el-dialog.el-dialog--small{
        width: 250px;
        height: 260px;
    }
    #userDetail .recharge .erweiPay .el-dialog__body{
        padding-top: 0;
    }
    #userDetail .recharge .erweiPay .el-dialog__footer{
        padding: 10px 20px 0;
        text-align: center;
    }
    #userDetail .recharge .erweiPay .el-dialog__footer div{
        text-align: center;
    }
    #userDetail .recharge .erweiPay .el-dialog__footer div canvas{
        width: 120px;
    }
    #userDetail .recharge .erweiPay .succeed{
        margin-top: 10px;
    }
    #userDetail .recharge .erweiPay .closeRecharge{
        width: 84px;
        height: 30px;
        padding: 8px 15px;
        background: #589680;
        border:none;
        margin-top: 15px;
    }
    #userDetail .recharge .erweiPay img{
        width: 80px;
    }
</style>