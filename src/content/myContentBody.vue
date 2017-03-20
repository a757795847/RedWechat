<template>
  <div id="contentBody">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理
        <my-index></my-index>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab);
      },
    }
  };
</script>
<style>
  #contentBody{
    float: right;
    margin-left: 2px;
    width: calc(100% - 202px);
    background: white;
    height: 750px;
    border-radius: 0 5px 5px 0;
  }
  #contentBody .el-tabs__nav-scroll{
    padding-left: 20px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    background: #efefef;
  }
  #contentBody .el-tabs__item.is-active{
    color: #68A593;
  }
  #contentBody .el-tabs__active-bar{
    background: #68A593;
  }
</style>
