SEO Nuxt  vue的ssr框架  ssr服务端渲染(server side render)
可以对搜索引擎友好，爬虫友好
nuxt 预定大于配置

SPA 单页面 只有一个挂载点，其他的都是vue编译成的js.

- 数据库
  const mongoose = require('mongoose');
  const { Schema } = mongoose;

- pages/  页面
  mvc control => model => control => html => html response (ssr,seo好)
  mvvm webpack => .js => render => root(js DOM)

  把.vue放到后端来编译  .vue(html模板) => nuxt => html代码
  查看网页源代码是后端请求，process.server

- server目录  后端开发目录
  MVC
  server目录下，routes为后端路由，
  models目录，模型声明文件，描述相关的数据库操作，数据表字段
  controllers目录，control层


- store目录   全局store 及状态管理
  nuxt自带vuex,在需要使用全局状态的组件中,计算属性引入store的state,mutations,actions

- nuxt配置
  - nuxt.config.js
    nuxt配置文件,plugins,layout,SEO

  - plugins目录
    components.js 将components目录下的组件通过Vue.component挂载为全局组件。
