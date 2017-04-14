<template>
  <router-view></router-view>
</template>

<script>
  export default {
    beforeCreate(){
      if(localStorage.getItem('jurisdiction') == null){
        localStorage.setItem('jurisdiction',"[]")
      }
    }
  }
</script>
<style>
  body{
    font-family: 'Microsoft Yahei','\5FAE\8F6F\96C5\9ED1',Arial,'Hiragino Sans GB','\5B8B\4F53';
  }
  .el-message.messageSucceed .el-message__icon,
  .el-message.messageError .el-message__icon{
    width: 40px;
    height: 40px;
    background: #68a593;
    position: absolute;
    top: -10px;
    left: -12px;
    line-height: 40px;
    text-align: center;
    color: white;
  }
  .el-message.messageSucceed .el-message__group ,
  .el-message.messageError .el-message__group{
    padding-left: 40px;
  }
  .el-message.messageError .el-message__icon{
    background: #F2D9D9;
  }
</style>

