<template>
  <header>
    <div id="header">
      <div class="title">
        <h1>聚塔微客</h1>
        <span>后台管理系统</span>
      </div>
      <div class="user">
        <span class="returnBtn" v-on:click="logout()">退出</span>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{this.$auth.user().name}}
          </span>
          <el-dropdown-menu slot="dropdown" :style="{width: '145px',marginTop: '-10px',borderRadius: '3px'}" >
            <el-dropdown-item class="setUser" command="user" >用户账户设置</el-dropdown-item>
            <el-dropdown-item class="setFinance" command="finance">我的账户</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
          <img v-if="this.$store.state.cart.userImg != ''" :src="this.$store.state.cart.userImg" alt="user">
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'zyHeader',
    data(){
      return{
        token:'Bearer ' + localStorage.getItem('default-auth-token'),
        imgSrc:this.$http.options.root+'/order/picture/',
      }
    },
    methods:{
      logout() {
        this.$auth.logout({
          makeRequest: true,
          success() {
            that.$store.dispatch('empty_app_list')
            this.$router.push('/');
          },
          error() {
          }
        });
      },
      handleCommand(command) {
        if(command == 'user'){
          this.$store.dispatch('update_db','aaaa');
          this.$router.push('/userSet')
        }else if(command == 'finance'){
          this.$store.dispatch('update_db','bbb');
          this.$router.push('/userDetail')
        }
      },
    },
    beforeCreate(){

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
  #header .title{
    float: left;
    width: 300px;
    color: #ccc;
    font-family: Hiragino Maru Gothic Pro;
  }
  #header .title h1{
    display: inline-block;
    float: left;
    font-weight: 100;
    text-indent: 45px;
    background: url("../../assets/logo.jpg") no-repeat;
    background-size: 40px 40px;
    background-position: 0 10px;
    color:#FBFCFF;
  }
  #header .title span{
    float: left;
    line-height: 60px;
    margin-left: 5px;
    margin-top: 8px;
    color:#A8A8A8;
  }
   #header .user{
    float: right;
    width: 280px;
    height: 60px;
    line-height: 60px;
    color: white;
    font-size: 14px;
    margin-right: 15px;
  }
   #header .user img{
     display: i;
    float: right;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
    margin-top: 15px;
  }
   #header .user span{
    float: right;
    margin-left: 10px;
    color:#FBFCFF;
  }
  #header .returnBtn::before{
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
   #header .user .returnBtn{
    position: relative;
    cursor:pointer;
    margin-left: 20px;
  }
  #header .el-dropdown-menu__item{
    padding:0;
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
  .el-menu-item, .el-submenu__title{
    color:#393a3e
  }
  .el-dialog__close:hover {
    color: #68A593;
  }
  .el-pager li.active{
    background: #589680;
    border-color: #589680;
  }
  .el-pager li:hover,.el-pagination button:hover {
    color:#589680;
  }
  .el-pager li.active:hover{
    color:white;
  }
  #header .el-dropdown{
    float:right;
    padding-right: 20px;
    cursor:pointer;
  }
  .setUser{
    text-indent: 16px;
    background: url("../../assets/user-menu-setting.png") no-repeat;
    background-size: 20px;
    background-position: 7px 8px;
    text-align: center;
    color: #393a3e;
  }
  .setFinance{
    text-indent: -14px;
    background: url("../../assets/user-menu-amount.png") no-repeat;
    background-size: 20px;
    background-position: 7px 8px;
    text-align: center;
  }

</style>
