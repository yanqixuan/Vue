const mongoose = require('mongoose');
const Article = mongoose.model('Article');
exports.getArticles = async (req, res) => {
  const total = await Article.find({}).exec().length; //将查询操作执行，返回长度
  const data = await Article.find({}).exec();
  res.json({
    total,
    data
  })
}