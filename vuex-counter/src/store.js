import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 整个项目的状态
const state = {
  count:0
}

export default new Vuex.Store({
  state
})