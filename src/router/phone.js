import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
// import indexDefault from '@/components/content/index.vue'
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/wechat/redpackage/:id',
            name: 'bag',
            component: function (resolve) {
                require(['../wechat/redpackage.vue'],resolve)
            }
        },
        {
            path: '/wechat/attention/:id',
            name: 'attention',
            component: function (resolve) {
                require(['../wechat/attention.vue'],resolve)
            }
        },
    ]
})
