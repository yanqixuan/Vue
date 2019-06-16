<template>
  <div id="app">
    <!-- 读取 -->
    Click {{$store.state.count}} times,count is {{evenOrOdd}}
    <!-- 修改 -->
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">IncrementAsync</button>
  </div>
</template>

<script>
// 从store映射过来的方法
import {mapActions,mapGetters} from 'vuex';
export default {
  name: 'App',
  computed:mapGetters([
    'evenOrOdd'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
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
