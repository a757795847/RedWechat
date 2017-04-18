import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import indexDefault from '@/components/content/index.vue'
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/phone/login',
            name: 'c',
            component: index,
        },
    ]
})
