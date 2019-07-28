import Vue from 'vue'
import app from './App.vue'
import store from './store/index'
import router from './router/index.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  render: h => h(app),
  store,
  router
}).$mount('#app')
