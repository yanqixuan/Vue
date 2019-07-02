import { State } from '@/store/interface'
import { Commit } from 'vuex';
import { getMovieList } from '@/api/movie';

const getters = {}
// State类型约束    代码提示更加友好
const state:State = {
  movieList:[]
}
const mutations = {}
const actions = {  
  // movieList方法 限定参数类型
  async movieList(context:{ commit:Commit }, cate:string){  //commit 给 mutation
    const res = await getMovieList(cate).then((response:any) => response)
    return res;
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}