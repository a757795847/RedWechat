<template>
  <div id="contentBody">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="公众号列表" name="first">
        <gzh-list></gzh-list>
        <form v-on:submit.prevent="login()">
          <table><tr>
            <td>Username:</td>
            <td><input v-model="data.body.username" /></td>
          </tr><tr>
            <td>Password:</td>
            <td><input v-model="data.body.password" type="password" /></td>
          </tr><tr>
            <td></td>
            <td><label><input v-model="data.rememberMe" type="checkbox" /> Remember Me</label></td>
          </tr><tr>
            <td></td>
            <td><button type="submit">Login</button></td>
          </tr></table>
          <hr/>
          <div v-show="error" style="color:red; word-wrap:break-word;">{{ error | json }}</div>
        </form>
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
        activeName: 'first',

        data: {
          body: {
            username: '2',
            password: '1'
          },
          rememberMe: false
        },

        error: null
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab);
      },
      login() {
        var redirect = this.$auth.redirect();
        this.$auth.options.loginData.url = '/login';

//        this.$axios.post('/login',{
//          body: {success: true, topic_id: '5433d5e4e737cbe96dcef312'}
//        })

        this.$axios.post('/login',{success: true, topic_id: '5433d5e4e737cbe96dcef312'})


//        this.$auth.login({
//          body: JSON.stringify(this.data.body),
//          rememberMe: this.data.rememberMe,
//          redirect: {name: redirect ? redirect.from.name : '/'},
//          success() {
//            console.log('success ' + this.context);
//          },
//          error(res) {
//            console.log('error ' + this.context);
//
//            this.error = res.data;
//          }
//        });
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
