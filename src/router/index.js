import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/content/index'


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
      // meta:{auth:true},
    },
    {
      path: '/',
      name: 'index',
      component:function (resolve) {
        require(['../components/index'],resolve)
      },
      children:[
        {
          path: '/index',
          name: 'indexDefault',
          component:function (resolve) {
            require(['../components/content/index.vue'],resolve)
         }
        },
        {
          path: '/details',
          name: 'myDetails',
          component:function (resolve) {
            require(['../components/details/myDetails.vue'],resolve)
          }
        }
      ]
      // meta:{auth:true}
    },
    // {
    //   path: '/details',
    //   name: 'myDetails',
    //   component:function (resolve) {
    //     require(['../components/details/myDetails.vue'],resolve)
    //   }
    // }
  ]
})
