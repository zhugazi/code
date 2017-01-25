var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('begin', { title: '启动项目'});
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录项目'});
});
router.get('/lianxiren', function(req, res, next) {
  res.render('lianxiren', { title: '联系人项目','layout':'layout2'});
});
router.get('/dongtai', function(req, res, next) {
  res.render('dongtai', { title: '动态项目','layout':'layout2'});
});
router.get('/xiaoxi', function(req, res, next) {
  res.render('xiaoxi', { title: '消息项目','layout':'layout2'});
});
router.get('/Newxiaoxi', function(req, res, next) {
  res.render('Newxiaoxi', { title: '新朋友项目','layout':'layout2'});
});
router.get('/Special', function(req, res, next) {
  res.render('Special', { title: '特别关心项目','layout':'layout2'});
});
module.exports = router;
