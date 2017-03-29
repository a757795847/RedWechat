<template>
    <div>
    <div id="publicLists">
        <el-row class="tac">
            <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" name="first">
                <i class="appList"></i><el-menu-item-group title="应用">
                <el-menu-item index="2">我的应用</el-menu-item>
            </el-menu-item-group>
            </el-menu>
        </el-row>
        <div class="elDiv">
            <p><i class="addImage"></i>添加应用</p>
        </div>

    </div>
    </div>
</template>
<script>
    export default {

    }
</script>

<style>
    #publicLists{
        margin-top:4px;
        min-height:130px;
    }
    #publicLists .elDiv{
        position: relative;
        height: 30px;
        padding-bottom:10px;
        padding-top: 10px;
        width: 200px;
        background-color: #fff;
    }
    #publicLists .el-menu-item{
        text-indent: 20px;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
    }
    #publicLists .el-menu-item-group__title{
        font-size: 13px;
        font-weight: 700;
        text-indent: 20px;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
        padding-top:0;
        color: #949494;
    }
    #publicLists .el-menu-item.is-active{
        padding-left:39px;
        background: #68A593;
        color: white;
    }
    #publicLists .el-icon-menu{
        position: absolute;
        z-index: 999;
        top: 13px;
        left: 67px;
    }
    #publicLists p{
        color: #8d8d8d;
        text-indent: 40px;
        width: 150px;
        margin: 0 auto;
        line-height: 30px;
        border: dashed 1px #8d8d8d;
        cursor:pointer
    }
    .appList{
        background: url("../../../assets/menu-app.png") no-repeat;
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        background-size: 18px 18px;
        background-position: 15px 10px;
    }
</style>