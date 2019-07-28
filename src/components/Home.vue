<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider
      collapsible
      v-model="collapsed"
    >
      <a-layout-header>
          <a-button @click="backToMain">return</a-button>
          <span>{{this.$store.getters.getLoginName}}</span>
      </a-layout-header>
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1" @click="goTodoList">
          <a-icon type="pie-chart" />
          <span>To Do List</span>
        </a-menu-item>
        <a-menu-item key="2" @click="goUserInfo">
          <a-icon type="user" />
          <span>User</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
          <!-- <TodoList></TodoList> -->
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Thanks for your use!
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
      goTodoList() {
        console.log("hello");
        this.$router.push('/home');
      },
      goUserInfo() {
        console.log("dlfld")
        this.$router.push('/home/user-info');
      }
  }
}
</script>

<script>
import TodoList from './TodoList.vue'
export default {
    name: "home",
    components: {
        TodoList
    },
    methods: {
        backToMain() {
            confirm("Are you sure return to the welcome page?") ? this.$router.push("/") : '';
        }
    }
}
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>