<template>
  <section id="content">
    <keep-alive>
      <zy-content-nav></zy-content-nav>
    </keep-alive>
    <div  id="contentBody">
      <router-view></router-view>
    </div>
   <!-- <zy-content-body></zy-content-body>-->

  </section>
</template>
<script>
  import zyContentNav from './zyContentNav.vue'
  export default {
    name:'zyIndex',
    mounted: function () {
    },
    components:{
      zyContentNav
    }
  }
</script>
<style>
  #content{
    max-width: 1160px;
    min-width: 1000px;
    height: 750px;
    margin: 0 auto;
    border-radius: 5px;
    padding: 0 20px;
  }
  #contentBody{
    float: right;
    margin-left: 4px;
    width: calc(100% - 204px);
    background: white;
    height: 750px;
    border-radius: 0 5px 5px 0;
  }
  #contentBody .el-tabs__nav-scroll{
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    background: white;
  }
  #contentBody .el-tabs__content{,
    padding:10px;
  }
  #contentBody .el-tabs__item.is-active{
    color: #589680;
    text-align: center;
  }
  #contentBody .el-tabs__active-bar{
    background: #589680;
    height: 5px;
  }
</style>
