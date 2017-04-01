<template>
    <div id="myappList">
      <!--  <zy-zyContentNav></zy-zyContentNav>-->
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户列表" name="first">
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
  /*  import zyContentNav from '../zyContentNav.vue'*/
  import zyAppListItem from './zyAppListItem.vue'
    export default{
        name:'zyMyappList',
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
    #myappList{
        padding: 20px;
    }
    #myappList .appListHeader {
        padding-left: 3px;
        margin-bottom: 10px;
    }
    #myappList .el-tabs__nav-scroll{
        padding-left: 0;
    }
    #myappList .el-tabs__item{
        width: 70px;
        padding: 0 4px;
        line-height: 28px;
        height: 28px;
    }
    #myappList .el-tabs__content {
        padding: 10px 0;
    }

</style>