<template>
  <div id="main">
      <input type="text" placeholder="please input your name" v-model="loginName">
      <button @click="toApp">Begin</button>
  </div>
    
</template>

<script>
export default {
    name: "main",
    data () {
        return {
            loginName: "",
        }
    },
    methods: {
        toApp() {
            if(!this.loginName) {
                return;
            }
            this.$store.commit('setLoginName', this.loginName);
            this.$router.push(`/home`);
        }
    }
}
</script>

<style>
 #main {
    padding: 20px;
    width: 400px;
    margin: 0 auto;
    margin-top: 40px;
    background: white;
    border-radius: 5px;
} 
</style>
