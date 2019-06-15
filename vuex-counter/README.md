# vuex-counter
## vue 数据管理
两个组件都要用到count状态
使用父子组件 两个子组件共用父组件的count  调用父组件的方法

- 1.0时代   data() 私有状态,自给自足的状态
- 2.0时代   组件变多，组件的层次及关系，兄弟组件，共享数据，需要使用父组件管理这个状态，通过props+$emit
- 3.0 vuex  简单项目不用，管理应用层状态
  跨组件，跨层级，管理共享应用状态
  多个组件，多个路由，要共享太多状态，很有用
> A Vue.js project

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
