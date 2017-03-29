<template>
    <div id="appList">
        <p class="appListHeader">应用中心</p>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">
                <el-row :gutter="18">
                    <el-col :span="12" v-for="(item,index) in list" :index="index">
                        <zy-app-list-item :index="index"  :item = "item"></zy-app-list-item>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import zyAppListItem from './zyAppListItem.vue'
    export default{
        name:'zyAppList',
        data() {
            return {
                activeName: 'first',
                list:[
//                    {
//                        color:'darkgrey',
//                        header:'好评返现(无商家版)',
//                        text:'上传您的淘宝订单数据，给您的买家用户发送红包，不需要开通商家，甚至不需要公众号也能使用',
//                        state:'未开通',
//                        router:'aa'
//                    }
                ]
            };
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        components:{
            zyAppListItem
        },
        beforeCreate(){
            this.$http({
                url: 'app/list',
                method: 'POST',
                body:{
                    currentPageIndex:1
                }
            }).then((res) => {
                console.log(res)
                this.list = res.data.list;
            }, (res) => {

            });
        }
    }
</script>
<style>
#appList{
    padding: 20px;
}
#appList .appListHeader {
    padding-left: 3px;
    margin-bottom: 10px;
}
#appList .el-tabs__nav-scroll{
    padding-left: 0;
}
#appList .el-tabs__item{
    width: 70px;
    padding: 0 4px;
    line-height: 28px;
    height: 28px;
}
#appList .el-tabs__content {
    padding: 10px 0;
}

</style>