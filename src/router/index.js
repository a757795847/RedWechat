import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
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
          path: '/details',
          name: 'myDetails',
          component:function (resolve) {
            require(['../components/details/myDetails.vue'],resolve)
          }
        }
      ]
      // meta:{auth:true}
    },
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['../components/login.vue'],resolve)
      },
      meta:{auth:false}
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
