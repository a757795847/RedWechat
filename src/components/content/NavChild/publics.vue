<template>
    <div id="publicList">
        <el-row class="tac">
            <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                <i class="gzhList"></i><el-menu-item-group title="公众号">
                    <el-menu-item index="1">我的公众号</el-menu-item>
                  <!--  <el-menu-item index="2">我的公众号</el-menu-item>-->
                </el-menu-item-group>
            </el-menu>
        </el-row>
        <div class="elDiv">
        <p><i class="addImage"></i>添加公众号</p>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>

<style>
   #publicList .elDiv{
       position: relative;
       height: 30px;
       padding-bottom: 10px;
       padding-top: 10px;
       width: 200px;
       background-color: #fff;
    }
    #publicList .el-menu-item{
        text-indent: 20px;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
    }
    #publicList .el-menu-item-group__title{
        font-size: 13px;
        font-weight: 700;
        border-radius: 5px 0 0;
        text-indent: 20px;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
        padding-top:0;
        color: #949494;
    }
    #publicList .el-menu-item.is-active{
        padding-left:39px;
        background: #68A593;
        color: white;
    }
    /*#publicList .el-icon-menu{*/
        /*position: absolute;*/
        /*z-index: 999;*/
        /*top: 13px;*/
        /*left: 67px;*/
    /*}*/
    #publicList p{
        color: #8d8d8d;
        text-indent: 40px;
        width: 150px;
        margin: 0 auto;
        line-height: 30px;
        border: dashed 1px #8d8d8d;
        cursor:pointer
    }
    #publicList .gzhList{
        background: url("../../../assets/menu-weixin.png") no-repeat;
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        background-size: 20px 20px;
        background-position: 15px 10px;
    }
    .addImage{
        background: url("../../../assets/menu-add.png") no-repeat;
        display: inline-block;
        width: 15px;
        height: 15px;
        position: absolute;
        background-size: 15px 15px;
        left: 46px;
        top: 18px;
    }

</style>