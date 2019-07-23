const router = require('express').Router();
const article = require('../controllers/article.controller');

router.get('/articles', article.getArticles)
// function(req,res){
//   res.json({
//     total:0
//   })
// }

module.exports = router;