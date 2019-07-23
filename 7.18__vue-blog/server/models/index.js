const mongoose = require ('mongoose');  //数据库驱动
const path = require('path')
const requireAll = require('require-all') //第三方插件包
// ORM 将数据库映射为对象
requireAll({
  dirname: path.join(__dirname,'./'),
  filter: /(.+)\.model\.js$/,
  recursive: true
})  //引入所有模型声明文件并执行
const mongoUrl = `mongodb://127.0.0.1:27017/blog`
const User = mongoose.model('User') //创建一个实例
mongoose.connection
  .openUri(mongoUrl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    user:'',
    pass:''
  })
  .once('open', async () => { //只执行一次事件
    console.log('数据库连接成功')
    const Article = mongoose.model('Article');  //Article实例
    const article = new Article({
      title: '欢迎使用博客',
      content: '当你看到这篇文章时，我已经入职BAT了'
    });
    let user = new User({
      role: 'superAdmin',
      username: 'root',
      password: '123456',
      email: '666@qq.com'
    });
    article.save();
    user.save();
  })