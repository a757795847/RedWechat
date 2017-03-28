<template>
    <div id="publicListUp">
        <el-row class="tac">
            <el-menu mode="vertical" default-active="2" class="el-menu-vertical-demo">
                <i class="fansImage"></i>
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
        name:'zyManageMent',

    }
</script>

<style>
    #publicListUp{
        border-radius: 0 0 0 5px;
        height: 482px;
        margin-top: 4px;
        background-color: #fff;
    }
    #publicListUp .el-menu-item{
        text-indent: 20px;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
    }
    #publicListUp .el-menu-item-group__title{
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
    .fansImage{
        background: url("../../../assets/menu-fans.png") no-repeat;
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        background-size: 18px 18px;
        background-position: 15px 10px;
    }

</style>