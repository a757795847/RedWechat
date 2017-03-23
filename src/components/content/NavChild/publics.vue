<template>
    <div id="publicList">
        <el-row class="tac">
            <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                <i class="el-icon-menu"></i><el-menu-item-group title="公众号">
                    <el-menu-item index="1">我的公众号</el-menu-item>
                  <!--  <el-menu-item index="2">我的公众号</el-menu-item>-->
                </el-menu-item-group>
            </el-menu>
        </el-row>
        <div class="elDiv">
        <p><i class="el-icon-setting"></i>添加公众号</p>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>

<style>
   #publicList .elDiv{
       height: 30px;
       padding-bottom: 10px;
       padding-top: 10px;
       width: 200px;
       background-color: #fff;
    }
    

    #publicList .el-menu-item{
        text-align: center;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
    }
    #publicList .el-menu-item-group__title{
        text-align: center;
        padding-left:0;
        background: white;
        height: 40px;
        line-height: 40px;
        padding-top:0;
        color:rgb(141,141,141);
    }
    #publicList .el-menu-item.is-active{
        padding-left:39px;
        background: #68A593;
        color: white;
    }
    #publicList .el-icon-menu{
        position: absolute;
        z-index: 999;
        top: 13px;
        left: 67px;
    }
    #publicList p{
        color: #8d8d8d;
        text-align: center;
        width: 150px;
        margin: 0 auto;
        line-height: 30px;
        border: dashed 1px #8d8d8d;
    }

</style>