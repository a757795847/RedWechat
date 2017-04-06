<template>
  <header>
    <div id="header">
      <div id="title">
        <h1>聚塔微客</h1>
        <span>后台管理系统</span>
      </div>
      <div id="user">
        <span id="returnBtn" v-on:click="logout()">退出</span>
        <el-dropdown menu-align="start">
        <span class="el-dropdown-link">{{this.$auth.user().name}}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
          </el-dropdown>
          <img src="../../assets/logo.jpg" alt="user">
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'zyHeader',
    methods:{
      logout() {
        this.$auth.logout({
          makeRequest: true,
          success() {
            console.log('success ' + this.context);
          },
          error() {
            console.log('error ' + this.context);
          }
        });
      },
    }

  }
</script>

<style>
  header{
    width: 100%;
    background:#393A3E;
    margin-bottom: 20px;
    min-width: 1000px;
  }
  #header {
    height: 60px;
    max-width: 1160px;
    min-width: 1000px;
    background: #393A3E;
    margin: 0 auto;
    line-height: 60px;
    padding: 0 20px;
  }
  #title{
    float: left;
    width: 300px;
    color: #ccc;
    font-family: Hiragino Maru Gothic Pro;
  }
  #title h1{
    display: inline-block;
    float: left;
    font-weight: 100;
    text-indent: 45px;
    background: url("../../assets/logo.jpg") no-repeat;
    background-size: 40px 40px;
    background-position: 0 10px;
    color:#FBFCFF;
  }
  #title span{
    float: left;
    line-height: 60px;
    margin-left: 5px;
    margin-top: 8px;
    color:#A8A8A8;
  }
  #user{
    float: right;
    width: 200px;
    height: 60px;
    line-height: 60px;
    color: white;
    font-size: 14px;
    margin-right: 15px;
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
    color:#FBFCFF;
  }
  #returnBtn::before{
    content: '';
    position: absolute;
    color: white;
    height: 25px;
    top: 17px;
    left: -20px;
    display: inline-block;
    margin-right: 20px;
    border-left: 1px solid #7d7d7d;
  }
  #user #returnBtn{
    position: relative;
    cursor:pointer;
    margin-left: 40px;
  }
  .el-input__inner:focus ,.el-select .el-input__inner:focus{
    outline: 0;
    border-color: #68A593;
  }
  .el-tabs__item.is-active {
    color: #589680;
  }
  .el-tabs__active-bar {
    background-color: #589680;
  }
  .el-select-dropdown__item.selected, .el-select-dropdown__item.selected.hover{
    background-color: #71A593;
  }
  #header .el-dropdown{
   float:right;
  }
</style>
