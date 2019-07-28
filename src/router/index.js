import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList.vue'
import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import UserInfo from '../components/UserInfo.vue'



Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   children: [
    //     {
    //       path: 'cool',
    //       name: 'HelloCool',
    //       component: HelloCool
    //     },
    //     {
    //       path: 'java',
    //       name: 'HelloJava',
    //       component: HelloJava
    //     }
    //   ]
    // },
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/home',
      name: "home",
      component: Home,
      children: [
        {
          path: '',
          component: TodoList
        },
        {
          path: 'user-info',
          component: UserInfo
        }
      ]
    }
  ]
})
