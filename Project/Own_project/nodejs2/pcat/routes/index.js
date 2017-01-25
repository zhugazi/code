var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name:'朱鹏辉'});
});
router.get('/pcat', function(req, res, next) {
  res.render('pcat', { title: 'Express',name:'张家幸',_layoutFile:'pcatlayout'});
});
router.get('/list', function(req, res, next) {
  res.render('list', { title: 'Express',names:['张家幸','张娜','李亚宁']});
});

module.exports = router;
