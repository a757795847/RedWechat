import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/content/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/details',
      name: 'myDetails',
      component:function (resolve) {
        require(['../components/details/myDetails.vue'],resolve)
      }
    }
  ]
})
