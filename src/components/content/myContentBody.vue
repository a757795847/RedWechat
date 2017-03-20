<template>
  <div id="contentBody">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="公众号列表" name="first">
        <gzh-list></gzh-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import gzhList from './myContentBody/gzhCard.vue'
  export default {
    name:'myContentBody',
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab);
      }
    },
    components:{
      gzhList
    }
  };
</script>
<style>
  #contentBody{
    float: right;
    margin-left: 6px;
    width: calc(100% - 206px);
    background: white;
    min-height: 750px;
    border-radius: 0 5px 5px 0;
  }
  #contentBody .el-tabs__nav-scroll{
    padding-left: 20px;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    background: white;
  }
  #contentBody .el-tabs__content{
    padding:10px;
  }
  #contentBody .el-tabs__item.is-active{
    color: #68A593;
  }
  #contentBody .el-tabs__active-bar{
    background: #68A593;
    height: 5px;
  }
</style>
