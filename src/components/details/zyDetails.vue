<template>
    <div id="details">
        <div id="detailsHeader">
            <div class="returnAppBtn" v-on:click="returnIndex"><i class="el-icon-arrow-left"></i>返回我的应用</div>
            <div class="detailsTab">
                <span id="appName">红包返现后台</span>
                <ul>
                    <li v-for="( item , index ) in dataList" :class="isActive === index ? 'isActive' : ''" @click="IsActive(index)">{{ item.name }}</li>
                </ul>
                <transition name="detailsTabActive">
                    <div class="activeTab" :style="{ left: isActive * 90 + 'px' }"></div>
                </transition>
            </div>
        </div>
        <div id="detailsBody" class="clear">
            <div class="detailsBodyTab detailsBodyTable" :class="isActive === 0 ? 'isActive' : ''">
                <div>
                    <el-button type="text">上传订单</el-button>
                    <el-button type="text">发送红包</el-button>
                    <el-button type="text">拒绝</el-button>
                    <el-upload
                            class="upload-demo"
                            action="http://115.29.188.190:8085/order/parseCsv"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :headers="{'Authorization':token}"
                            :on-success="upSuccessful"
                            :on-progress="upProcess"
                            accept="csv"
                    >
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </div>
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="40"
                            >
                    </el-table-column>
                    <el-table-column
                            label="订单编号"
                            width="140"
                            >
                        <template scope="scope">{{ scope.row.order_number }}
                            <el-popover
                                    ref="popover"
                                    placement="right"
                                    width="400"
                                    trigger="click">
                                {{ scope.row.order_number }}
                            </el-popover>

                            <el-button class="detail" v-popover:popover></el-button>

                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="微信用户名"
                            >
                    </el-table-column>
                    <el-table-column
                            prop="img"
                            label="用户上传图片"
                            width="130"
                    >
                        <template scope="scope" >
                            <img v-for="(item,index) in scope.row.img"  :src="item" :index="index">
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="label"
                            label="订单标签"
                            width="70"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="importDate"
                            label="导入日期"
                            width="100"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="fanxianDate"
                            label="返现日期"
                            width="100"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="payment"
                            label="付款金额"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="红包类型"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="money"
                            label="红包金额"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="状态"
                            width="60"
                    >
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="150"
                    >
                        <template scope="scope">
                            <el-button type="text">发送红包</el-button>
                            <el-button type="text">拒绝</el-button>

                        </template>
                    </el-table-column>

                </el-table>

                <div class="block">
                    <el-pagination
                            layout="prev, pager, next"
                            :total="pageData.count"
                            :page-size="pageData.page_size"
                            @current-change="currentChange"
                    >
                    </el-pagination>
                </div>
            </div>
            </div>
            <div class="detailsBodyTab" :class="isActive === 1 ? 'isActive' : ''">

            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'zyDetails',
    data(){
        return{
            token:'Bearer ' + localStorage.getItem('default-auth-token'),
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
            tableData: [
//                {
//                    name: '无聊的风',
//                    num: '177123ster123',
//                    img:['../../assets/logo.jpg','../../assets/logo.jpg','../../assets/logo.jpg'],
//                    label:'双11',
//                    importDate: '2016-05-03',
//                    fanxianDate: '2016-05-03',
//                    payment:18,
//                    type:'固定',
//                    money:18,
//                    state:'审核中',
//                }
            ],
            multipleSelection: [],
            pageData:{}

        }
    },
    methods:{
        IsActive( index ){
            this.isActive = index;
        },
        returnIndex(){
            console.log(this.$route)
            if(this.$route.path == '/' || this.$route.path == '/details'){
                this.$router.push('index')
            }else{
                this.$router.go(-1)
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //上传文件
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        upSuccessful(response, file, fileList){
            console.log(response)
            console.log(file)
            console.log(fileList)
        },
        upProcess(event, file, fileList){
            console.log(event)
            console.log(file)
            console.log(fileList)
        },
        //分页
        currentChange(val){
            console.log(`当前页: ${val}`);
            this.pageAjax(val);
        },
        //分页AJAX
        pageAjax(index){
            this.$http({
                url: 'order/list',
                method: 'POST',
                body:{
                    currentPageIndex:index,
                    status:[0]
                }
            }).then((res) => {
                console.log(res)
                if(res.data.status == 1){
                    this.tableData = res.data.list;
                }
            }, (res) => {

            });
        }
    },
    beforeCreate(){
        this.$http({
            url: 'order/list',
            method: 'POST',
            body:{
                currentPageIndex:1,
                status:[0]
            }
        }).then((res) => {
            console.log(res)
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
    text-indent: 15px;
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
    width: 90px;
    margin-left: 220px;
    background-color: #68A593;
    z-index: 1;
    transition: left .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
}
#detailsBody{
    background: white;
    width: 100%;
    min-height: 700px;
    border-radius: 5px ;
}
#detailsBody .detailsBodyTab{
    display: none;
    height: 100%;
    padding: 10px 20px;
}
#detailsBody .isActive{
    display: block;
}


#detailsBody .detailsBodyTable button.el-button.el-button--text {
    color: #68A593;
    padding: 7px 3px;
    font-size: 13px;
    margin-bottom: 10px;
}
#detailsBody .detailsBodyTable button.el-button.el-button--text:hover{
    background: #E4EDE2;
}
#detailsBody .el-table--border td, .el-table--border th {
     border-right: none;
}
#detailsBody .el-table .cell, .el-table th>div {
    padding-left: 10px;
    padding-right: 0;
}
#detailsBody .el-table td, .el-table th.is-leaf {
    font-weight: normal;
    text-align: center;
}
#detailsBody img{
    height: 27px;
    width:25px;
    margin-right: 2px;
    padding-top: 5px;
}
#detailsBody .detail{
    background: url("../../assets/app-hongbao-detail.png") no-repeat;
    width: 12px;
    height: 12px;
    display: inline-block;
    background-position: 0px 0px;
    background-size: 12px;
    cursor:pointer;
    border: none;
    padding: 0;
}
#detailsBody .el-table_1_column_2{
    color:#589680;
}
#detailsBody .el-pagination{
    float: right;
    margin-top: 20px;
    margin-bottom: 20px;
}
#detailsBody .el-pager li.active{
    background: #589680;
    border-color: #589680;
}
#detailsBody .el-pager li:hover,#detailsBody .el-pagination button:hover {
    color:#589680;
}
#detailsBody .el-pagination button.disabled {
    color: #e4e4e4;
}
#detailsBody .el-table__body-wrapper button.el-button.el-button--text {
    margin-bottom: 0;
}
</style>