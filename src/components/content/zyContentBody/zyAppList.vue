<template>
    <div id="appList">
        <p class="appListHeader">应用中心</p>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="用户管理" name="firsst">用户管理</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default{
        name:'zyAppList',
        data() {
            return {
                activeName: 'first',
            };
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>
<style>
#appList{
    padding: 20px;
}
#appList .appListHeader {
    padding-left: 8px;
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

</style>