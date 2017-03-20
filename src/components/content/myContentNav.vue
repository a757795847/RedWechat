<template>
  <div id="contentNav">
    <el-row class="tac">
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item-group title="公众号">
            <el-menu-item index="1"></i>我的公众号</el-menu-item>
            <el-menu-item index="2"></i>添加公众号</el-menu-item>
          </el-menu-item-group>
        </el-menu>
    </el-row>
  </div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
#contentNav{
  float: left;
  width: 200px!important;
  background: white;
  height: 750px;
  border-radius: 5px 0 0 5px;
}
#contentNav .el-menu-item{
    background: white;
    height: 40px;
    line-height: 40px;
  }
#contentNav .el-menu-item.is-active{
  background: #68A593;
  color: white;
}
</style>
