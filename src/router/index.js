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
      meta:{auth:undefined}
    },
    {
      path: '/',
      name: 'index',
      component:index,
      meta:{auth:true},
      children:[
        {
          path: '/',
          name: 'indexDefault',
          component:function (resolve) {
            require(['../components/content/index.vue'],resolve)
          },
          children:[
            {
              path: '/',
              name: 'indexBody',
              component:function (resolve) {
                require(['../components/content/zyContentBody/gzh/gzhBody.vue'],resolve)
              }
            },
            {
              path: '/userSet',
              name: 'zyUserSet',
              component:function (resolve) {
                require(['../components/content/zyContentBody/user/zyUserSet.vue'],resolve)
              }
            },
            {
              path: '/userDetail',
              name: 'zyUserDetail',
              component:function (resolve) {
                require(['../components/content/zyContentBody/user/zyUserDetail.vue'],resolve)
              }
            },
            {
              path: '/addMyapplist',
              name: 'zyMyappList',
              component: function (resolve) {
                require(['../components/content/zyContentBody/app/zyMyapplist.vue'],resolve)
              }
            },
            {   
              path: '/appList',
              name: 'zyAppLit',
              component:function (resolve) {
                require(['../components/content/zyContentBody/app/zyAppList.vue'],resolve)
              }
            },
            {
              path: '/appList/:id',
              name: 'zyAppLitDetails',
              component:function (resolve) {
                require(['../components/content/zyContentBody/app/zyAppLitDetails.vue'],resolve)
              }
            },
          ]
        },
        {
          path: '/addPublic',
          name: 'zyAddPublic',
          component: function (resolve) {
            require(['../components/details/zyAddPublic.vue'],resolve)
          }
        },
        {
          path: '/app/redpackage',
          name: 'zyDetailRedpackage',
          component:function (resolve) {
            require(['../components/details/zyDetailRedpackage.vue'],resolve)
          }
        },
      ]
    },
    {
      path: '/404',
      name: '404',
      component: function (resolve) {
        require(['../components/404.vue'],resolve)
      },
      meta:{auth:undefined}
    },
    { path: '/*', redirect:'/404'}


    // {
    //   path: '*',
    //   name:'404',
    //   component: function (resolve) {
    //         require(['../components/404.vue'],resolve)
    //   }
    // }
  ]
})
