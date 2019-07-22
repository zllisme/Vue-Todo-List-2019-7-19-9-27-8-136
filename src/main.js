import Vue from 'vue'
import todoApp from './TodoList.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(todoApp),
}).$mount('#app')
