<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航:
      <router-link to="/">首页</router-link> |
      <router-link to="/look/12345">看看</router-link> |
      <router-link to="/look/lookone">look1</router-link> |
      <!-- <p class="test" @click="go">look1</p> | -->
      
      <!-- <router-link to="/look/looktwo">look2</router-link> -->

      <router-link :to="{name:'LookTwo',params:{userid:2}}">look2</router-link>

      <router-link to="/detail">重定向</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    go(){
      this.$router.push({name:'LookOne',params:{name:'lookone'}}) //编程师路由跳转
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
