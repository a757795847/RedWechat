<template>
    <div id="detailBag">
        <div class="detailsHeader">
            <div class="returnAppBtn" v-on:click="returnIndex"><i class="el-icon-arrow-left"></i>返回我的应用</div>
            <div class="detailsTab">
                <span id="appName">红包返现</span>
                <ul>
                    <li v-for="( item , index ) in dataList" :class="isActive === index ? 'isActive' : ''" @click="IsActive(index)">{{ item.name }}</li>
                </ul>
                <transition name="detailsTabActive">
                    <div class="activeTab" :style="{ left: isActive * 90 + 'px' }"></div>
                </transition>
            </div>
        </div>
        <div class="detailsBody clear">
            <div class="detailsBodyTab detailsBodyTable" :class="isActive === 0 ? 'isActive' : ''">
                <div class="detailsBodyThead">
                    <el-row>
                        <el-col :span="8">
                            <el-popover ref="popover" placement="right"  width="200" trigger="click" content="此功能暂时未开通">
                            </el-popover>
                            <el-button type="text" @click="dialogFormVisible = true">上传订单</el-button>
                            <el-button type="text" v-popover:popover>批量发送</el-button>

                        </el-col>
                        <el-col :span="12" :offset="4">
                            <el-button type="text" :style="{  float: 'right',padding: '8px 12px',marginTop: '3px'}" @click="handleSearchClick">搜索</el-button>
                            <el-input
                                    placeholder="输入订单标签或订单号搜索"
                                    class="search"
                                    v-model="search"
                                    :style="{margin:'0 10px 0 20px'}"
                            >
                            </el-input>
                            <el-select v-model="types.active" placeholder="请选择" >
                                <el-option
                                        v-for="list in types.list"
                                        :label="list.label"
                                        :value="list.value"
                                        :key="list.value"
                                >
                                </el-option>
                            </el-select>

                        </el-col>
                    </el-row>
                </div>
                <div class="detailsBodyTBody">
                    <el-table
                            :data="tableData"
                            border
                            style="width: 100%"
                            empty-text="目前没有任何需要处理的返现申请"
                            @selection-change="handleSelectionChange"
                            @cell-click="openDetail"
                    >
                        <el-table-column
                                fixed
                                type="selection"
                                width="40"
                                :selectable="selectableState"
                        >
                        </el-table-column>
                        <el-table-column
                                label="订单编号"
                                width="190"
                                prop="order_number"
                        >
                            <!--<template scope="scope">-->
                                <!--<p @click="openDetail(scope.$index)"  class="detail">{{ scope.row.order_number }}</p>-->
                            <!--</template>-->
                        </el-table-column>
                        <el-table-column
                                prop="wechat_name"
                                width="100"
                                label="微信用户名"
                        >
                        </el-table-column>
                        <el-table-column
                                label="用户上传图片"
                                width="150"
                        >
                            <template scope="scope">
                                <el-popover
                                        ref="popoverImg"
                                        placement="right"
                                        trigger="hover"
                                >
                                    <div>
                                        <img class="magnifyImg" v-if="scope.row.comment_file1" :src="imgSrc+scope.row.comment_file1+'?jwt='+token" >
                                        <img class="magnifyImg" v-if="scope.row.comment_file2" :src="imgSrc+scope.row.comment_file2+'?jwt='+token" >
                                        <img class="magnifyImg" style="marginRight: 0" v-if="scope.row.comment_file3" :src="imgSrc+scope.row.comment_file3+'?jwt='+token" >
                                    </div>
                                </el-popover>
                                <el-button class="magnifyImgBtn" v-popover:popoverImg>
                                    <img v-if="scope.row.comment_file1" :src="imgSrc+scope.row.comment_file1+'?jwt='+token" >
                                    <img v-if="scope.row.comment_file2" :src="imgSrc+scope.row.comment_file2+'?jwt='+token" >
                                    <img v-if="scope.row.comment_file3" :src="imgSrc+scope.row.comment_file3+'?jwt='+token" >
                                </el-button>

                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="label"
                                label="订单标签"
                                width="100"
                        >
                        </el-table-column>
                        <el-table-column
                                label="状态"
                                width="100"
                        >
                            <template scope="scope">
                                {{ auditState(scope.row.gift_state) }}
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="导入日期"
                                width="120"
                        >
                            <template scope="scope">
                                {{new Date(scope.row.create_date).toLocaleDateString()}}
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="返现日期"
                                width="120"
                        >
                            <template scope="scope">
                                <div v-if="scope.row.send_date != null">
                                    {{new Date(scope.row.send_date).toLocaleDateString()}}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="amount"
                                label="付款金额"
                                width="80"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="type"
                                label="红包类型"
                                width="100"
                        >
                            <template scope="scope">
                                <p>固定</p>
                                <!--<p @click="bagType(scope.$index)">固定</p>-->
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="红包金额"
                                width="80"
                        >
                            <template scope="scope">
                                {{(scope.row.red_package_size/100).toFixed(2)}}
                            </template>
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="140"
                        >
                            <template scope="scope">
                                <el-button v-show="scope.row.gift_state == 1" type="text" @click="sendBag(scope.$index)">发送红包</el-button>
                                <el-button v-show="scope.row.gift_state == 1" type="text">拒绝</el-button>
                            </template>
                        </el-table-column>

                    </el-table>
                </div>
                <div class="block" v-show="pageData.count>0">
                    <el-pagination
                            layout="prev, pager, next"
                            :total="pageData.count"
                            :page-size="pageData.page_size"
                            @current-change="currentChange"
                            :current-page="currentPage"
                    >
                    </el-pagination>
                </div>
                <!--订单上传-->
                <el-dialog class="upTable" title="订单上传" v-model="dialogFormVisible" @close="closeForm">
                    <el-row>
                        <el-col :span="12">
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="订单标签">
                                    <el-input v-model="form.name" placeholder="输入订单标签(可为空)" :style="{width:200+'px'}"></el-input>
                                </el-form-item>
                                <el-form-item label="红包类型">
                                    <el-select v-model="form.type" placeholder="请选择">
                                        <el-option
                                                v-for="item in form.types"
                                                :label="item.label"
                                                :value="item.value"
                                                :key="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="红包金额">
                                    <el-input placeholder="输入金额" v-model="form.money" :style="{width:150+'px'}">
                                        <template slot="append">元</template>
                                    </el-input>
                                </el-form-item>
                            </el-form>
                            <p class="hint">注：建议一次上传订单数量不要超过1000个订单导入后红包类型仍可编辑</p>
                        </el-col>
                        <el-col :span="12">
                            <el-upload
                                    class="upload-demo"
                                    ref="upload"
                                    drag
                                    action="http://115.29.188.190:8085/order/parseCsv"
                                    :headers="{'Authorization':token}"
                                    :auto-upload="false"
                                    :on-success="upSuccessful"
                                    :on-error="upError"
                                    :data="{
                                        'redPackageSize':parseInt(form.money*100),
                                        'label':form.name
                                    }"
                                    accept="csv"
                                    :before-upload="beforeUpload"
                                    :on-progress="upProgress"
                                    >
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em :style="{color:'#68A593'}">点击上传</em><br/>文件后缀名: csv</div>
                            </el-upload>
                        </el-col>
                    </el-row>
                    <div slot="footer" class="dialog-footer">
                        <el-button  type="text" @click="closeForm" :style="{color:'#393A3E'}">取 消</el-button>
                        <el-button type="text" @click="submitUpload">上 传</el-button>
                    </div>
                </el-dialog>
                <!--订单上传结束-->
                <el-dialog class="upLoading" :title="!upLoadingState?'订单导入中':'订单导入完成'" v-model="upLoading"
                           size="tiny"
                           :close-on-click-modal="false"
                           :close-on-press-escape="false"
                           :show-close="false"
                           top="20%"  >
                    <el-row v-if="!upLoadingState">
                        <el-col :span="24">
                                <el-progress :width="100" type="circle" :percentage="upLoadingIn"></el-progress>
                                <p>正在为您努力导入订单，请耐心等候订单的个数决定了导入的时间</p>
                                <p :style="{color:'#CE6D72'}">导入期间请不要关闭或刷新浏览器</p>
                        </el-col>
                    </el-row>
                    <el-row v-else>
                        <el-col :span="24">
                            <img src="../../assets/wechat-auth-4.png">
                            <p>导入完毕，共导入{{uploadFormData.num}}条订单数</p>
                            <p v-if="uploadFormData.error != 0">有<span style="color:#CE6D72">{{uploadFormData.error}}</span>条数据导入失败，点击
                                <a :href="this.$http.options.root+'/order/downloadErrorList?key='+uploadFormData.url+'&jwt='+token"
                                   :style="{textDecoration:'none',color:'#589680'}"
                                >这里下载</a>
                            </p>
                        </el-col>
                    </el-row>
                      <span v-if="upLoadingState" slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="uploadClose">关闭</el-button>
                      </span>
                </el-dialog>
                <!--订单详情-->
                <el-dialog  class="orderDetail" ref="orderDetail" v-if="tableData.length > 0" @close="closeOrderDetail">
                    <el-tabs v-model="orderDetail">
                        <el-tab-pane label="订单详情" class="order" name="detail">
                            <el-row>
                                <el-col :span="10">订单属性</el-col>
                                <el-col :span="14">详情</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="10">订单号</el-col>
                                <el-col :span="14">{{tableData[orderDetailIndex].order_number}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="10">买家会员名</el-col>
                                <el-col :span="14">{{tableData[orderDetailIndex].buyer_name}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="10">订单创建时间</el-col>
                                <el-col :span="14">{{tableData[orderDetailIndex].order_create_time}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="10">订单付款时间</el-col>
                                <el-col :span="14">{{tableData[orderDetailIndex].order_pay_time}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="10">买家支付宝账号</el-col>
                                <el-col :span="14">{{tableData[orderDetailIndex].buyer_zhifubao}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="10">付款金额</el-col>
                                <el-col :span="14">{{tableData[orderDetailIndex].amount}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="10">收货人姓名</el-col>
                                <el-col :span="14">{{tableData[orderDetailIndex].receiver}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="10">收货地址</el-col>
                                <el-col :span="14" >
                                    <el-tooltip class="item" effect="dark" :content="tableData[orderDetailIndex].receiver_address" placement="top-start">
                                        <el-button class="siteText">{{tableData[orderDetailIndex].receiver_address}}</el-button>
                                    </el-tooltip>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="10">收货人手机号</el-col>
                                <el-col :span="14">{{tableData[orderDetailIndex].receiver_mobile}}</el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="红包日志" class="log" name="log">
                            <p v-if="tableData[orderDetailIndex].create_date" class="logImport">
                                <span class="logTime">{{ dateText(tableData[orderDetailIndex].create_date)}}</span>订单导入
                            </p>
                            <p v-if="tableData[orderDetailIndex].send_date"  class="logSend">
                                <span class="logTime">{{dateText(tableData[orderDetailIndex].send_date)}}</span>审核通过，红包发送
                            </p>
                            <p v-if="tableData[orderDetailIndex].send_date" class="logSucceed">
                                <span class="logTime">{{dateText(tableData[orderDetailIndex].send_date)}}</span>红包发送成功
                            </p>
                            <p v-if="tableData[orderDetailIndex].recieve_date" class="logSucceed">
                                <span class="logTime">{{dateText(tableData[orderDetailIndex].recieve_date)}}</span>红包已领取
                            </p>
                        </el-tab-pane>
                    </el-tabs>
                </el-dialog>
                <!--红包类型-->
                <el-dialog title="修改订单红包发送类型" class="bagType" ref="bagTypeOperation" v-if="tableData.length>0">
                    <el-col :span="24">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="订单标签">
                                {{ tableData[orderDetailIndex].order_number }}
                            </el-form-item>
                            <el-form-item label="红包类型">
                                <el-select v-model="bagTypes.value" placeholder="请选择">
                                    <el-option
                                            v-for="item in bagTypes.list"
                                            :label="item.label"
                                            :value="item.value"
                                            :key="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="红包金额">
                                <el-col :span="9">
                                    <el-input v-model="bagTypes.beginNum" placeholder="请输入内容"></el-input>
                                </el-col>
                                <el-col class="line" :span="2">至</el-col>
                                <el-col :span="9">
                                    <el-input v-model="bagTypes.overNum" placeholder="请输入内容"></el-input>
                                </el-col>
                                <el-col class="line" :span="4">元</el-col>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <span slot="footer" class="dialog-footer">
                       <el-button type="text" >取 消</el-button>
                       <el-button type="text" >确 定</el-button>
                    </span>
                </el-dialog>

            </div>
            <div class="detailsBodyTab" :class="isActive === 1 ? 'isActive' : ''">

            </div>
            <div class="detailsBodyTab serve" :class="isActive === 2 ? 'isActive' : ''">
                <ul>
                    <li>服务链接地址</li>
                    <li>{{serve.url}}</li>
                </ul>
                <ul>
                    <li>服务地址二维码</li>
                    <li>
                        <div ref="qart"></div>
                    </li>
                </ul>
                <ul>
                    <li>注：</li>
                    <li>1. 好评返现服务配置近期升级中，升级后可以配置多个链接地址，方便用户统计不同来源的红包申请<br>
                        2. 目前该服务链接采用平台方公众号进行用户授权，升级后可以选择用户绑定下的公众号进行授权<br>
                        3. 红包的发送仍统一由平台方公众号发送，用户通过余额支付红包发送费用，并收取一定的服务费率</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import QArt from 'qartjs'
    import erwei from '../../assets/erwei.png'
export default{
    name:'zyDetails',
    data(){
        return{
            token:'Bearer ' + localStorage.getItem('default-auth-token'),
            imgSrc:this.$http.options.root+'/order/picture/',
            search:'',
            types:{
                active:'1',
                list:[
                    {
                        value: '4',
                        label: '全部状态'
                    },
                    {
                        value: '0',
                        label: '未申领'
                    },
                    {
                        value: '1',
                        label: '审核中'
                    },
                    {
                        value: '3',
                        label: '红包已发送'
                    },
                ]
            },
            dataList:[
                {
                    name:'订单管理'
                },
                {
                    name:'统计'
                },
                {
                    name:'服务设置'
                }
            ],
            isActive : 0,
            tableData: [],
            multipleSelection: [],
            pageData:{},
            //上传文件
            dialogFormVisible:false,//表单页面
            form: {
                type: '选项1',
                name: '',
                money: '',
                types:[
                    {
                        value: '选项1',
                        label: '固定金额'
                    }
                ],
                file:false
            },//表单信息
            upLoading:false,//上传中页面
            upLoadingIn:0,//进度条
            upLoadingState:false,//是否上传成功
            uploadFormData:{
                num:0,
                error:0,
                url:''
            },//成功后返回正确错误条数及下载地址
            orderDetailIndex:0,
            serve:{
                url:''
            },
            bagTypes:{
                beginNum:0,
                overNum:0,
                num:0,
                value:0,
                list:[
                    {
                        label:'固定金额',
                        value:0
                    },
                    {
                        label:'随机金额',
                        value:1
                    }
                ]
            },
            orderDetail:'detail',
            currentPage:1,//当前页
        }
    },
    methods:{
        auditState(index){
            switch (index){
                case 0:
                    return '未申领';
                case 1:
                    return '审核中';
                case 2:
                    return '审核已通过';
                case 3:
                    return '红包已发放';
            }
        },
        IsActive( index ){
            this.isActive = index;
        },
        returnIndex(){
            if(this.$router._from.path == '/login'){
                this.$router.push('/')
            }else{
                this.$router.go(-1)
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //上传文件
        //上传失败清除表单
        clearUpState(){
            this.upLoadingIn = 0;
            this.upLoading = false;
            this.upLoadingState = false;
            this.$refs.upload.clearFiles();
        },
        //订单导入完成
        upSuccessful(response, file, fileList){
            if(response.status == 1){
                this.upLoadingState = true;
                this.pageAjax(1,[0,1,3]);
                this.types.active = '4';
                this.uploadFormData.num = response.data.successCount;
                this.uploadFormData.error = response.data.errorCount;
                this.uploadFormData.url = response.data.errorKey;
                this.clearForm();
                this.upLoadingIn = 100;
            }else{
                this.$message.error(response.message);
                this.clearUpState()
            }
        },
        //文件上传之前
        beforeUpload(file){
            if(file == undefined){
                return false;
            }
            this.form.file = true;
            return true;
        },
        //文件上传错误
        upError(err, file, fileList){
            if(err){
                this.$message.error('上传失败');
                this.upLoadingIn = 0;
                this.clearUpState()
            }
        },
        //文件上传中
        upProgress(event,file,fileList){
            if(this.upLoadingIn < 98){
                this.upLoadingIn = parseInt(event.percent * 10)/10;
            }
        },
        //文件上传
        submitUpload() {
            if(this.form.money == ''){
                this.$message({
                    message: '请输入金额',
                    type: 'warning'
                });
            }else{
                if(this.$refs.upload.uploadFiles.length == 0){
                    this.$message({
                        message: '请上传文件',
                        type: 'warning'
                    });
                }else if(this.$refs.upload.uploadFiles.length > 1){
                    this.$message({
                        message: '只能上传一个文件',
                        type: 'warning'
                    });
                    this.$refs.upload.clearFiles();
                }else if(this.$refs.upload.uploadFiles[0].size > 5242880){
                    this.$message({
                        message: '文件大小不能大于5',
                        type: 'warning'
                    });
                    this.$refs.upload.clearFiles();
                }else{
                    this.$refs.upload.submit();
                    this.upLoading = true;
//                    this.upload(6);
                }

            }

        },
        //计时器
        upload(i){
            if(this.upLoadingIn >= 100){
                this.upLoadingIn = 100;
                return;
            }
            this.upLoadingIn += i;
            if(this.upLoadingIn > 80){
                i = Math.ceil(i/2);
            }
            setTimeout(function () {
                this.upload(i);
            }.bind(this),100)

        },
        //上传成功关闭
        uploadClose(){
            this.clearUpState();
            this.form.name='';
            this.form.type = '选项1';
            this.form.money = '';
            this.dialogFormVisible = false;
        },
        //关闭上传表单
        closeForm(){
            this.dialogFormVisible = false;
            this.clearForm();
        },
        //清除表单
        clearForm(){
            this.form.name = '';
            this.form.money = '';
            this.$refs.upload.clearFiles();
        },
        //分页
        currentChange(val){
            this.currentPage = val;
            var arr =  this.types.active == 4 ? [0,1,3]:[parseInt(this.types.active)];
            this.pageAjax(val,arr);
        },
        //分页AJAX
        pageAjax(index,status){
            var data = {
                pageSize:10,
                currentPageIndex:index,
                status:status
            };
            if(this.search != ''){
                data.pageIndex = this.search;
            };
            this.$http({
                url: 'order/list',
                method: 'POST',
                body:data
            }).then((res) => {
//                console.log('分页ajax=》',res);
                if(res.body.status == 1){
                    this.tableData = res.body.list;
                    this.pageData = res.body.page;
                }
            }, (res) => {

            });
        },
        //发送红包
        sendBag(index){
            var token = this.serve.url.split('/');
            this.$http({
                url: 'order/redSend',
                method: 'POST',
                body:{
                    id:this.tableData[index].id,
                    token:token[token.length-1]
                }
            }).then((res) => {
//                console.log('发送红包',res)
                if(res.body.status == 1){
                    this.tableData[index].gift_state = 3 ;
                }else{
                    this.$message.error('红包发送失败');
                }
            }, (res) => {
                this.$message.error('红包发送失败');
            });
        },
        //搜索
        handleSearchClick(){
            var arr =  this.types.active == 4 ? [0,1,3]:[parseInt(this.types.active)];
            if(this.search == ''){
//                this.selectStateAjax(this.types.active);
                this.pageAjax(1,arr);
                this.currentPage = 1;
            }else{
                this.$http({
                    url: 'order/lookup/'+this.search,
                    method: 'POST',
                    body:{
                        pageSize:10,
                        currentPageIndex:1,
                        status:arr
                    }
                }).then((res) => {
                    if(res.data.status == 1){
                        this.tableData = res.body.list;
                        this.pageData = res.body.page;
                        this.currentPage = 1;
                    }
                }, (res) => {

                });
            }

        },
        //打开详情
        openDetail(row, column, cell, event){
            if(column.property=="order_number"){
                for(var i =0;i<this.tableData.length;i++){
                    if(this.tableData[i].order_number == row.order_number){
                        this.orderDetailIndex = i;
                        this.$refs.orderDetail.open();
                    }
                }

            }
        },
        closeDetail(index){
            this.$refs.orderDetail.close();
        },
        selectStateAjax(val){
            var arr =  val == 4 ? [0,1,3]:[parseInt(val)];
            this.pageAjax(1,arr);
        },
        selectableState(row, index){
            return row.gift_state == 1;
        },
        bagType(index){
            this.orderDetailIndex = index;
            this.$refs.bagTypeOperation.open();
        },
        //关闭详情页
        closeOrderDetail(){
            this.orderDetail = 'detail'
        },
        dateText(time){
            var times = new Date(time).toLocaleDateString()+' '+new Date(time).toTimeString();
            return times.split('G')[0]
        }
    },
    beforeCreate(){
        this.$http({
            url: 'order/list',
            method: 'POST',
            body:{
                pageSize:10,
                currentPageIndex:1,
                status:[1]
            }
        }).then((res) => {
            if(res.body.status == 1){
                this.tableData = res.body.list;
                this.pageData = res.body.page;
            }
        }, (res) => {
            if(res.status == 400){
                this.$router.go(-1)
            }
        });
    },
    mounted(){
        this.$http({
            url: 'app/config/list/zyappid1',
            method: 'POST',
        }).then((res) => {
            new QArt({
                value: res.body.data[0].url,
                imagePath: erwei,
                filter:'filter'
            }).make(this.$refs.qart);
            this.serve.url = res.body.data[0].url;
        }, (res) => {

        });
    }
}
</script>
<style>
#detailBag{
    min-height: 750px;
    min-width: 1000px;
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 20px;
}
#detailBag .detailsHeader{
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
}
#detailBag .detailsHeader .returnAppBtn{
    background: white;
    border-radius: 5px 0 0 5px;
    width: 165px;
    height: 100%;
    line-height: 40px;
    text-indent: 13px;
    background-size: 20px 20px;
    background-position: 28px 10px;
    color: #68A593;
    margin-right: 3px;
    float: left;
    cursor: pointer;
}
#detailBag .detailsHeader .returnAppBtn .el-icon-arrow-left{
    margin-right: 10px;
}
#detailBag .detailsHeader .detailsTab{
    width: calc(100% - 168px);
    background: white;
    display: inline-block;
    float: left;
    height: 100%;
    border-radius: 0 5px 5px 0;
    line-height: 40px;
    position: relative;
}
#detailBag .detailsHeader .detailsTab #appName{
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
#detailBag .detailsHeader .detailsTab ul{
    float: left;
}
#detailBag .detailsHeader .detailsTab li{
    float: left;
    width: 90px;
    text-align: center;
    cursor:pointer;
}
#detailBag .detailsHeader .activeTab{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 90px;
    margin-left: 220px;
    background-color: #68A593;
    z-index: 1;
    transition: left .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
}
#detailBag .detailsBody{
    background: white;
    width: 100%;
    min-height: 700px;
    border-radius: 5px ;
}
#detailBag .detailsBody .detailsBodyTab{
    display: none;
    height: 100%;
    padding:12px 20px 10px;
}
#detailBag .detailsBody .isActive{
    display: block;
}
#detailBag .detailsBody .detailsBodyThead{
    margin: 0 0 12px;
    line-height: 36px;
}
#detailBag .detailsBody .detailsBodyThead  .el-select ,#detailBag .detailsBody .detailsBodyThead .search {
    float: right;
}
#detailBag .detailsBody .detailsBodyThead .el-input__icon+.el-input__inner {
    width: 150px;
}
#detailBag .detailsBody .detailsBodyThead .el-input{
    width: initial;
}
#detailBag .detailsBody .detailsBodyThead .search{
    width: 200px;
    min-width: 140px;
}


#detailBag .detailsBody .detailsBodyTable button.el-button.el-button--text {
    color: #68A593;
    padding: 9px 16px;
    font-size: 13px;
}
#detailBag .detailsBody .detailsBodyTable button.el-button.el-button--text:hover{
    background: #E4EDE2;
}
#detailBag .detailsBody .el-table--border td, .el-table--border th {
     border-right: none;
}

#detailBag .detailsBody .el-table td, .el-table th.is-leaf {
    font-weight: normal;
    text-align: center;
}
#detailBag .detailsBody img{
    height: 27px;
    width:25px;
    margin-right: 2px;
    padding-top: 5px;
}

#detailBag .detailsBody .detailsBodyTBody tbody tr td:nth-child(2) .cell{
    background: url("../../assets/app-hongbao-detail.png") no-repeat;
    cursor: pointer;
    color: rgb(88, 150, 128);
    display: inline-block;
    background-position: 160px 6px;
    background-size: 12px;
    border: none;
    padding: 0;
    width: 100%;
    cursor : pointer;
    color:#589680;
}
#detailBag .detailsBody .el-table_1_column_2{
    color:#589680;
}
#detailBag .detailsBody .el-pagination{
    float: right;
    margin-top: 20px;
    margin-bottom: 20px;
}

#detailBag .detailsBody .el-pagination button.disabled {
    color: #e4e4e4;
}
#detailBag .detailsBody .el-table__body-wrapper button.el-button.el-button--text {
    margin-bottom: 0;
}
/*上传表单*/
#detailBag .detailsBody .el-dialog--small {
    width: 578px;
}
#detailBag .detailsBody .upTable .el-upload-dragger{
    width: 200px;
    height: 165px;
    margin-left: 30px;
    border: 1px dashed #95989A;
}
#detailBag .detailsBody .upTable .el-dialog__close:hover {
    color: #68A593;
}
#detailBag .detailsBody .upTable .el-form-item {
    margin-bottom: 20px;
}
#detailBag .detailsBody .upTable .hint{
    color: #CE6D72;
    text-align: center;
    padding-left: 10px;
}
#detailBag .detailsBody .upTable .el-upload-list__item-name {
    padding-left: 27px;
}
#detailBag .detailsBody .upTable .el-upload-list__item-status-label
,#detailBag .detailsBody .upTable .el-upload-list.el-upload-list--text div{
    display: none;
}

#detailBag .detailsBody .upLoading .el-dialog--tiny {
    width: 300px;
    height: 270px;
}
#detailBag .detailsBody .upLoading .el-col-24 {
    padding: 0 17px;
    margin: 0 auto;
    text-align: center;
}
#detailBag .detailsBody .upLoading .el-dialog__title{
    font-weight: normal;
}
#detailBag .detailsBody .upLoading .el-dialog__header {
    padding: 14px 20px 0;
}
#detailBag .detailsBody .upLoading .el-dialog__body{
    padding-top: 16px;
    padding-bottom: 16px;
}
#detailBag .detailsBody .upLoading img{
    width: 80px;
    height: 80px;
}
#detailBag .detailsBody .upLoading .el-button--primary {
    color: #fff;
    background-color: #589680;
    border-color: #589680;
    padding: 7px 27px;
}
#detailBag .detailsBody .upLoading .el-dialog__footer {
    text-align: center;
}
#detailBag .detailsBody .el-table__empty-block {
    background: #DDDDDD;
}
#detailBag .detailsBody .detailsBodyTable .el-table th,
#detailBag .detailsBody .detailsBodyTable .el-table__fixed-header-wrapper thead div,
#detailBag .detailsBody .detailsBodyTable .el-table__header-wrapper thead div{
    background-color: #E4EDE2;
}
#detailBag .detailsBody .detailsBodyTBody button.el-button.el-button--text {
    padding:10px 5px;
}
#detailBag .detailsBody .detailsBodyTBody  .cell, .el-table th>div {
    padding-left: 10px;
    padding-right: 10px;
}
#detailBag .detailsBody .detailsBodyTBody .magnifyImgBtn{
    line-height: initial;
    white-space: initial;
    display: block;
    border: none;
    color: white;
    box-sizing: initial;
    outline: none;
    background: none;
    padding: 0;
    border-radius: 0;
    width: 100%;
}
/*orderDetail*/
#detailBag .detailsBody  .orderDetail .el-dialog--small{
    width: 440px;
    min-width: 440px;
    min-height: 480px;
}
#detailBag .detailsBody  .orderDetail .el-dialog__body{
    padding-top: 0;
}
#detailBag .detailsBody  .orderDetail .el-dialog__headerbtn, .el-pagination__rightwrapper {
    z-index: 100;
    position: relative;
}
#detailBag .detailsBody  .orderDetail .el-dialog__close:hover {
    color: #E4EDE2;
}
#detailBag .detailsBody  .orderDetail  .el-tabs__header {
    border-bottom: none;
}
#detailBag .detailsBody  .orderDetail  .el-tabs__active-bar {
    height: 5px;
}
#detailBag .detailsBody  .orderDetail .el-tabs__item {
    padding: 0 10px;
}

#detailBag .detailsBody  .orderDetail .order .el-row{
    width: 400px;
    height: 40px;
    border: 1px solid #C8C8C8;
    box-sizing: border-box;
    line-height: 40px;
    border-bottom: none;
}
#detailBag .detailsBody  .orderDetail .order .el-row:first-child{
    background: #E4EDE2;
}
#detailBag .detailsBody  .orderDetail .order .el-row:last-child{
    border-bottom: 1px solid #C8C8C8;
}
#detailBag .detailsBody  .orderDetail .order .el-col{
    padding-left: 20px;
}
#detailBag .detailsBody  .orderDetail .order .el-col-14{
    padding-left: 0;
}
#detailBag .detailsBody  .orderDetail .order .siteText{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 20px;
    border: none;
    padding: 0;
    text-align: left;
    width: 90%;
    color: #48576a;
}
#detailBag .detailsBody  .orderDetail .order .siteText:hover{
    color: #48576a;
}
#detailBag .detailsBody  .orderDetail .log p{
    height: 25px;
    line-height: 25px;
    margin: 8px 10px;
    text-indent: 32px;
}
#detailBag .detailsBody  .orderDetail .log p span{
    color: #A8A8A8;
    margin-right: 16px;
}

#detailBag .detailsBody  .orderDetail .log .logImport{
    background: url("../../assets/app-hongbao-log-start.png") no-repeat;
    background-size: 22px 22px;
}
#detailBag .detailsBody  .orderDetail .log .logSend{
    background: url("../../assets/app-hongbao-log-send.png") no-repeat;
    background-size: 22px 22px;
}
#detailBag .detailsBody  .orderDetail .log .logSucceed{
    background: url("../../assets/app-hongbao-log-get.png") no-repeat;
    background-size: 22px 22px;
}
/*红包类型*/
#detailBag .detailsBody  .bagType .el-dialog--small{
    min-width: 300px;
    width: 373px;
    height: 250px;
}
#detailBag .detailsBody  .bagType .el-dialog__header,#detailBag .detailsBody  .bagType .el-dialog__body {
    padding-top: 15px;
}
#detailBag .detailsBody  .bagType .el-input__icon+.el-input__inner{
    width: 150px;
}
#detailBag .detailsBody  .bagType .el-col.el-col-9 .el-input{
    width: 82px;
}
#detailBag .detailsBody  .bagType .line.el-col.el-col-2{
    text-indent: -1px;
}
#detailBag .detailsBody  .bagType .el-form-item{
    margin-bottom: 15px;
}
#detailBag .detailsBody  .bagType .el-select-dropdown__item{
    font-size: 13px;
}
#detailBag .detailsBody  .bagType .el-select-dropdown__item.selected {
    background-color: #71A593;
}
/*服务设置*/
#detailBag .detailsBody  .serve {
    padding: 60px 36px 0;
}
#detailBag .detailsBody  .serve li:first-child{
    color:#A8A8A8;
    text-indent: 0;
}
#detailBag .detailsBody  .serve li:last-child{
    padding-left: 15px;
}
#detailBag .detailsBody  .serve li{
    margin-bottom: 12px;
}
#detailBag .detailsBody  .serve img{
    width: 100px;
    height: 100px;
}
    .magnifyImg{
        width: 200px;
        margin-right: 10px;
    }

</style>