
import Vue from 'vue'
import App from './App2'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router';
import router from './router/phone'
import VueResource from 'vue-resource';
import base64 from 'base64-coder-node'
import VueCookie from 'vue-cookie'

// import $ from 'jquery'
// import VueAuth from '@websanova/vue-auth'
// import store from './store/';

Vue.use(VueCookie)
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
    // var appId = localStorage.getItem('default-auth-token');
    var appId = VueCookie.get('default-auth-token')
    console.log(appId)
    if(to.path.slice(0,19) == '/wechat/redpackage/' ){
        if(appId == null && to.query.ticket == undefined){
            window.location.href = 'http://open.izhuiyou.com/wechat/authOpenId/'+to.params.id+'?callbackUrl='+window.location.href;
            return;
        }

        if(appId != null){
            var appidState = base64().decode(appId.toString());
            if(appidState.indexOf('anonymous') != -1){
                window.location.href = 'http://open.izhuiyou.com/wechat/authOpenId/'+to.params.id+'?callbackUrl='+window.location.href;
                return;
            }
        }
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