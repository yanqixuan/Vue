# vuex_counter

> A Vue.js project

Vue的大型项目开发，分成两种任务
1. 组件的开发工作 业务量开发
2. vuex 数据设计    
store是独立于组件之外的,应用的中央数据管理中心.
  state 共享的状态
  actions 动作方法  (修改状态的动作，但不能直接修改)
  mutations 修改state 维护状态的正确性(state) 负责审核对状态的修改是否合规
  getters 对state的包装 只能读
  
修改:dispathc 派发 action('name',payload)
 => action commit('mutationName')  提交给mutations
 => state 修改数据

组件 读: 使用数据  this.$store.state.count
     通过 mapActions mapGetters 引入

写: actions负责 actions(组件调用方法)

- data 是组件自身数据,并不能被共享。
- 共享状态  由vuex state管理
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
