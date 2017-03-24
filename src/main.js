
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router';
import router from './router'
import VueResource from 'vue-resource';
import $ from 'jquery'
import VueAuth from '@websanova/vue-auth'

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.router = router;
Vue.http.options.root = 'http://115.29.188.190:8085';

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
});

App.router = Vue.router;
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});