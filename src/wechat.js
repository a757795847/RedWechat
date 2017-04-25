
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
    function setCookie(c_name,value,expiredays)
    {
        var exdate=new Date()
        exdate.setDate(exdate.getDate()+expiredays)
        document.cookie=c_name+ "=" +escape(value)+
            ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
    }

//取回cookie
    function getCookie(c_name)
    {
        if (document.cookie.length>0)
        {
            c_start=document.cookie.indexOf(c_name + "=")
            if (c_start!=-1)
            {
                c_start=c_start + c_name.length+1
                c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
            }
        }
        return ""
    }
    // var appId = localStorage.getItem('default-auth-token');
    if(to.path.slice(0,19) == '/wechat/redpackage/'){
        var appId = getCookie('default-auth-token')
        console.log(appId)
        alert(appId == null)
        alert(appId == undefined)
        if(appId == null && to.query.ticket == undefined){
            alert(1)
            window.location.href = 'http://open.izhuiyou.com/wechat/authOpenId/'+to.params.id+'?callbackUrl='+window.location.href;
            return;
        }
        if(appId == null && to.query.ticket != undefined){
            alert(2)
            Vue.http.get("http://open.izhuiyou.com/wechat/getOpenId?id="+to.query.ticket)
                .then(function (res) {
                    console.log('to.query.ticket =>',res)
                    setCookie('default-auth-token',localStorage.getItem('default-auth-token'),365)
                    // localStorage.setItem('default-auth-token',localStorage.getItem('default-auth-token'))
                },function (err) {

                })
        }

        if(appId != null  && base64().decode(appId).indexOf('anonymous') != -1){
            alert(3)
            window.location.href = 'http://open.izhuiyou.com/wechat/authOpenId/'+to.params.id+'?callbackUrl='+window.location.href;
            return
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