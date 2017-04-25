
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import VueRouter from 'vue-router';
import router from './router'
import VueResource from 'vue-resource';
// import $ from 'jquery'
// import VueAuth from '@websanova/vue-auth'
import store from './store/';

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.router = router;
Vue.http.options.root = 'http://115.29.188.190:8085';
/*Vue.http.options.root = 'http://192.168.1.115:8081';*/

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  refreshData: {enabled: false},
});

// const administrationRouter = ['/app/bag'];
router.beforeEach((to, from, next) => {
  var list = localStorage.getItem('default-auth-token');
  // var state = false;
  // if(administrationRouter.indexOf(to.path) != -1){
  //   console.log('进入拦截器');
  //   for(var i=0;i< list.length;i++){
  //     if('/app/'+list[i] == to.path){
  //       state = true;
  //     }
  //   }
  //   if(state == false){
  //     next('/');
  //     return;
  //   }
  // }
  Vue.router._to = to;
  Vue.router._from = from;
  next();
})

App.router = Vue.router;
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});