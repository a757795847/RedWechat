<template>
    <div id="publicListUp">
        <el-row class="tac">
            <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                <i class="el-icon-menu"></i>
                <el-menu-item-group title="微客管理">
                    <el-menu-item index="3">我的粉丝</el-menu-item>
                    <el-menu-item index="2">消息发送(敬请期待)</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </el-row>
    </div>
</template>
<script>
    export default {

    }
</script>

<style>
    #publicListUp{
        height: 478px;
        margin-top: 6px;
        background-color: #fff;
    }
    #publicListUp .el-menu-item{
        text-align: center;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
    }
    #publicListUp .el-menu-item-group__title{
        text-align: center;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
        padding-top:0;
        color:rgb(141,141,141);
    }
    #publicListUp .el-menu-item.is-active{
        padding-left:39px;
        background: #68A593;
        color: white;
    }
    #publicListUp .el-icon-menu{
        position: absolute;
        z-index: 999;
        top: 13px;
        left: 67px;
    }


</style>