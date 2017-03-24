import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import indexDefault from '@/components/content/index.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['../components/login.vue'],resolve)
      },
      meta:{auth:false}
    },
    {
      path: '/',
      name: 'index',
      component:index,
      meta:{auth:true},
      children:[
        {
          path: '/index',
          name: 'indexDefault',
          component:function (resolve) {
            require(['../components/content/index.vue'],resolve)
         }
        },
        {
          path: '/details/:appId',
          name: 'zyDetails',
          component:function (resolve) {
            require(['../components/details/zyDetails.vue'],resolve)
          }
        }
      ]
    },
  ]
})
