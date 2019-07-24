import Vue from 'vue'
import app from './App.vue'
import store from './store/index'
import router from './router/index.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(app),
  store,
  router
}).$mount('#app')
