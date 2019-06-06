前端路由实现，核心本质是 不刷新页面，但是可以在页面上显示不同的内容，也是单页应用的本质。
1. hash 实现，锚链接
  url 以#开始的为hash部分
  hash 部分的改变不会刷新页面
  用来动态的加载组件及数据
  hashchange事件
  js DHTML
  - 单页应用避免了传统后端路由每次跳转都刷新页面，给用户带来的慢，白屏(多了http请求),前端路由可以立即加载,路由对应组件,最简单的方式为hashchange
  http://localhost:8080#a
  传统的url使用 /path?部分  queryString都会重新刷新页面(独立的http请求) 页面打开变慢


2. 封装一个route-link组件
  to="#/" 走向哪  props
  home    slot  插槽