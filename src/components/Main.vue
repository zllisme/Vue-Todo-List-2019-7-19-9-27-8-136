<template>
  <div id="main">
      <input type="text" placeholder="please input your name">
      <button @click="toApp">Begin</button>
  </div>
    
</template>

<script>
export default {
    name: "main",
    methods: {
        toApp() {
            this.$router.push("/todoList");
        }
    }
}
</script>