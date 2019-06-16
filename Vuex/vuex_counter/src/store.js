import Vue from 'vue';
import Vuex from 'vuex';
// this.$store vue 全局实例
Vue.use(Vuex);  //启用vuex  可拔插的功能

const state={
  count:0
}

// 读

// 改   mutations 对状态的修改
const mutations = {
  // 方法  可以拿到全局的state
  increment(state){
    state.count++
  },
  decrement(state){
    state.count--
  },
  // incrementIfOdd(state){
  //   if(state.count%2 == 1){
  //     state.count++
  //   }
  // }
}

// 相当于 computed属性  对状态进行包装
const getters = {
  evenOrOdd:state=>state.count %2 ==0 ? 'even':'odd'
}
//  actions 组件只能跟actions交互  actions交给mutations中的方法
//  组件不可以直接跟state交流
const actions = {
  increment:({commit})=>commit('increment'),
  decrement:({commit})=>commit('decrement'),
  // incrementIfOdd:({commit})=>commit('incrementIfOdd')
  incrementIfOdd({commit,state}){ //需要逻辑判断
    if(state.count%2 == 1)
    commit('increment')
  },
  incrementAsync({commit}){ //异步修改
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        commit('increment')
        resolve();
      },2000)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})