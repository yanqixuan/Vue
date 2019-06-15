<template>
  <div>
    <!-- <counter :count="count" v-on:increment = 'incrementCount'/> -->
    <counter />
    <!-- <counter-brother :count="count"/> -->
    <counter-brother />
  </div>
</template>

<script>

import Counter from './components/counter'
import CounterBrother from './components/counterBrother'

export default {
  name: 'App',
  data(){
    // return {
    //   count:0
    // }
  },
  components: {
    'counter':Counter,
    'counter-brother':CounterBrother
  },
  methods:{
    // incrementCount(){
    //   this.count++;
    // }
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
