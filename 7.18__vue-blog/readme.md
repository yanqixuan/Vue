SEO Nuxt  vue的ssr框架  ssr服务端渲染(server side render)
可以对搜索引擎友好，爬虫友好

SPA 单页面 只有一个挂载点，其他的都是vue编译成的js.

- pages/  页面
  mvc control => model => control => html => html response
  mvvm webpack => .js => render => root(js DOM)

  把.vue放到后端来编译  .vue(html模板) => nuxt => html代码
  查看网页源代码是后端请求，process.server