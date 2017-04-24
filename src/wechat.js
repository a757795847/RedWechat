
import Vue from 'vue'
import App from './App2'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router';
import router from './router/phone'
import VueResource from 'vue-resource';
import base64 from 'base64-coder-node'

// import $ from 'jquery'
// import VueAuth from '@websanova/vue-auth'
// import store from './store/';

Vue.use(base64);
Vue.use(base64);
Vue.use(VueResource);
// Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.router = router;
// Vue.http.options.root = 'http://115.29.188.190:8085';
/*Vue.http.options.root = 'http://192.168.1.115:8081';*/

Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    refreshData: {enabled: false},
});
// const administrationRouter = ['/app/bag'];
router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from)
    if(to.path.slice(0,19) == '/wechat/redpackage/'){
        var appId = localStorage.getItem('default-auth-token');
        var appIdState = base64().decode(appId).indexOf('anonymous') == -1;
        // if(!appIdState){
        //     router.push(`/wechat/authOpenId/${to.params.id}?callbackUrl=${to.path}`)
        // }
    }
    next();
})

App.router = Vue.router;
new Vue({
    // store,
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
});