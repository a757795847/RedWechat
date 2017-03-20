// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
// import router from './router'
Vue.component(
  'my-index',
  () => System.import('./components/content/index.vue')
)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
