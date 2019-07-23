const {
  Nuxt,
  Builder // mvc req res    pages/index.vue
} = require('nuxt')
require('./models');  //模型文件
const express = require('express');

const app = express();
const path = require('path');
const config = require('../nuxt.config.js')
const requireAll = require('require-all');

const routes = requireAll({
  dirname: path.join(__dirname, './routes/'),
  filter: /(.+)\.route\.js$/
})
console.log(routes);
for(const router of Object.values(routes)) {
  console.log(router);
  app.use('/api',router); //在后端启动了一个路由 以/api开头
}

const start = async() => {
  const nuxt = new Nuxt(config);
  if(true) {  //如果是开发阶段，实时编译
    const builder = new Builder(nuxt) 
    await builder.build()
  }
  app.use(nuxt.render); //使用此中间件
  // nuxt /index /about .vue template
  app.listen(3025, () => {
    console.log('server started at 127.0.0.1:3025')
  })
}
start();