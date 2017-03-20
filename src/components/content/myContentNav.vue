<template>
  <div id="contentNav">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name:'myContentNav',
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
