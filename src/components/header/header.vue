<template>
  <header>
    <div id="header">
      <div id="title">
        <h1>聚塔微客</h1>
        <span>后台管理系统</span>
      </div>
      <div id="user">
        <span id="returnBtn">退出</span>
        <span>冷链电商</span>
        <img src="../assets/logo.jpg" alt="user">
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style>
  header{
    width: 100%;
    background:#393A3E ;
    margin-bottom: 20px;
  }
  #header {
    height: 60px;
    max-width: 1280px;
    min-width: 1000px;
    margin: 0 auto;
    line-height: 60px;
  }
  #title{
    float: left;
    width: 300px;
    color: #ccc;
  }
  #title h1{
    display: inline-block;
    float: left;
    font-family: Hiragino Maru Gothic Pro;
    text-indent: 60px;
    background: url("../assets/logo.jpg") no-repeat;
    background-size: 40px 40px;
    background-position: 10px 10px;
  }
  #title span{
    float: left;
    line-height: 60px;
    margin-left: 5px;
    margin-top: 8px;
  }
  #user{
    float: right;
    width: 200px;
    height: 60px;
    line-height: 60px;
    color: white;
    font-size: 14px;
  }
  #user img{
    float: right;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
    margin-top: 15px;
  }
  #user span{
    float: right;
    margin-left: 10px;
  }
  #returnBtn::before{
    content: '|';
    color: white;
    height: 26px;
    display: inline-block;
    margin-right: 10px;
    width: 2px;
  }
  #user #returnBtn{
    margin-left: 10px;
  }

</style>
