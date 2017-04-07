<template>
    <div id="userDetail">
        <p class="userDetailHeader">我的帐户</p>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="充值记录" name="first" class="recharge">
                <el-row>
                    <el-col :span="24" class="remaining">
                        当前账户余额<span class="remainingMoney">1111</span>元
                        <el-button type="text" @click="dialogVisible = true">我要充值</el-button>
                    </el-col>
                    <p :style="{color:'#A8A8A8'}">充值记录</p>
                    <el-col :span="16" class="history">
                        <el-table
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    prop="date"
                                    label="充值日期">
                            </el-table-column>
                            <el-table-column
                                    prop="type"
                                    label="充值类型">
                            </el-table-column>
                            <el-table-column
                                    prop="money"
                                    label="充值金额">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <el-dialog title="充值" v-model="dialogVisible" size="tiny">
                    <p>选择充值金额</p>
                    <el-button class="moneyBtn" :class="item.num == activeMoneyBtn ? 'isActive':''"
                               v-for="(item,index) in moneyBtn" :key="index" @click="moneyBtnActive(item.num)">
                        {{item.num}}
                    </el-button>
                    <p style="marginTop:20px">选择充值金额</p>
                    <el-button class="isActive payBtn">微信支付</el-button>
                    <span slot="footer" class="dialog-footer">
                      <el-button type="text" @click="dialogVisible = false" style="color:#2B2C2F">取 消</el-button>
                      <el-button type="text" @click="erweiPay = true">确 定</el-button>
                    </span>
                </el-dialog>
                <el-dialog title="扫码完成支付" v-model="erweiPay" class="erweiPay"
                           :close-on-press-escape="false"
                           :close-on-click-modal="false"
                           :show-close="false"
                >
                    <div>
                        <div ref="qart"></div>
                        <p>使用微信扫一扫</p>
                        <p style="color:#CE6D72">请在5分钟内完成支付</p>
                        <el-button type="primary" class="closeRecharge">取消充值</el-button>
                    </div>

                </el-dialog>
            </el-tab-pane>
        </el-tabs>
        <span class="disappear">消费记录</span>
    </div>
</template>
<script>
    import QArt from 'qartjs'
    import erwei from '../../../assets/erwei.png'
    export default{
        name:'zyAppList',
        data() {
            return {
                activeName: 'first',
                tableData: [{
                    date: '2016-05-02 11.12',
                    type: '王小虎',
                    money: '100元'
                },],
                dialogVisible:false,
                activeMoneyBtn:100,
                moneyBtn:[
                    {
                        num:100
                    },
                    {
                        num:200
                    },
                    {
                        num:500
                    },
                    {
                        num:1000
                    },
                    {
                        num:2000
                    },
                    {
                        num:5000
                    },
                ],
                erweiPay:true
            };
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            moneyBtnActive(num){
                this.activeMoneyBtn = num;
            }
        },
        mounted(){
            this.$http({
                url: 'pay/qr',
                method: 'POST',
                body:{
                    count:10
                }
            }).then((res) => {
                console.log('充值',res)
                new QArt({
                    value: res.data.data.codeUrl,
                    imagePath: erwei,
                    filter:'filter'
                }).make(this.$refs.qart);
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
    }
    #userDetail .recharge .payBtn.el-button.el-button--default{
        width: 140px;
        height: 36px;
        margin-bottom: 10px;
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
        height: 280px;
    }
    #userDetail .recharge .erweiPay .el-dialog__body{
        padding: 10px 20px 0;
        text-align: center;
    }
    #userDetail .recharge .erweiPay .el-dialog__body div{
        text-align: center;
    }
    #userDetail .recharge .erweiPay .el-dialog__body div canvas{
        width: 120px;
    }
    #userDetail .recharge .erweiPay .closeRecharge{
        width: 84px;
        height: 36px;
        background: #589680;
        border:none;
        margin-top: 15px;
    }
</style>