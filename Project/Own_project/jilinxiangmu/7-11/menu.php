<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<link rel="stylesheet" href="css/reset.css" />
	<script type="text/javascript" src="js/dtree.js"></script>
	<style>
		body{
			width: 165px;
			height: 100%;
			background: url(images/menu_bg.jpg) repeat-y;
		}
		
	</style>
	
</head>
<body>
	
</body>
<script>
	var wrap=document.getElementById('wrap');
	var d = new dTree('d');
	
	d.add(0,-1,"管理中心");
	d.add(1,0,"关于我们");
	d.add(2,0,"新闻中心");
	d.add(3,0,"图片管理");
	d.add(4,0,"其他管理");
	d.add(5,0,"经典案例");
	d.add(6,0,"高级管理");
	d.add(7,0,"系统管理");
	d.add(8,0,"个人管理");
	d.add(9,0,"导航管理");

	
	d.add(10,1,"公司简介","guanlizhongxin/gongsijianjie.php","gongsi","initFrame");
	d.add(11,1,"荣誉资质","guanlizhongxin/rongyuzizhi.php","rongyu","initFrame");
	d.add(12,1,"分类管理","guanlizhongxin/fenleiguanli.php","fenlei","initFrame");
	d.add(13,1,"子类管理","guanlizhongxin/zileiguanli.php","zilei","initFrame");
	
	d.add(14,2,"新闻添加","xinwentianjia.php","gongsixinwen","initFrame");
	d.add(15,2,"新闻列表","xinwenliebiao.php","fenlei","initFrame");
	
	
	d.add(17,3,"图片轮播"/*,"guanlizhongxin/tupianlunbo.php","chanpin","initFrame"*/);
	d.add(18,3,"最新产品","guanlizhongxin/zuixinchanpin.php","zuixin","initFrame");
	d.add(19,3,"分类管理","guanlizhongxin/fenleiguanli.php","fenlei","initFrame");
	d.add(20,3,"子类管理","guanlizhongxin/zileiguanli.php","zilei","initFrame");
	
	d.add(21,4,"其他文章管理","qitawenzhangguanli.php","kehu","initFrame");
	/*d.add(22,4,"分类管理","guanlizhongxin/fenleiguanli.php","fenlei","initFrame");
	d.add(23,4,"子类管理","guanlizhongxin/zileiguanli.php","zilei","initFrame");*/
	
	d.add(24,5,"分类管理","guanlizhongxin/fenleiguanli.php","fenlei","initFrame");
	d.add(25,5,"子类管理","guanlizhongxin/zileiguanli.php","zilei","initFrame");
	
	d.add(26,6,"广告管理","guanlizhongxin/guanggaoguanli.php","guanggao","initFrame");
	d.add(27,6,"访问统计","guanlizhongxin/fangwentongji.php","fangwen","initFrame");
	d.add(28,6,"邮件发送设置","guanlizhongxin/youjianfasong.php","youjian","initFrame");
	d.add(29,6,"联系部门","guanlizhongxin/lianxibumen.php","lianxi","initFrame");
	d.add(30,6,"用户留言","guanlizhongxin/yonghuliuyan.php","yonghu","initFrame");
	d.add(31,6,"招聘职位","guanlizhongxin/zhaopinzhiwei.php","zhaopin","initFrame");
	d.add(32,6,"应聘人员","guanlizhongxin/yingpinrenyuan.php","yingpin","initFrame");
	d.add(33,6,"留言簿","guanlizhongxin/liuyanbu.php","liuyan","initFrame");
	d.add(34,6,"产品订购","guanlizhongxin/chanpindinggou.php","chanpindinggou","initFrame");
	d.add(35,6,"连接管理","guanlizhongxin/lianjieguanli.php","lianjie","initFrame");
	d.add(36,6,"文件管理","guanlizhongxin/wenjianguanli.php","wenjian","initFrame");
	d.add(37,6,"信息转移","guanlizhongxin/xinxizhuanyi.php","xinxi","initFrame");
	
	d.add(38,7,"基本设置","guanlizhongxin/jibenshezhi.php","jiben","initFrame");
	d.add(39,7,"样式管理","guanlizhongxin/yangshiguanli.php","yangshi","initFrame");
	d.add(40,7,"栏目管理","guanlizhongxin/lanmuguanli.php","lanmu","initFrame");
	d.add(41,7,"功能管理","guanlizhongxin/gongnengguanli.php","gongneng","initFrame");
	d.add(42,7,"菜单管理","guanlizhongxin/caidanguanli.php","caidan","initFrame");
	d.add(43,7,"首页设置","guanlizhongxin/shouyeshezhi.php","shouye","initFrame");
	d.add(44,7,"管理员列表","guanlizhongxin/guanliyuanliebiao.php","guanliyuan","initFrame");
	
	d.add(45,8,"修改口令","guanlizhongxin/xiugaikouling.php","xiugai","initFrame");
	d.add(46,8,"退出系统","guanlizhongxin/tuichuxitong.php","tuichu","initFrame");
	
	d.add(48,9,"主类添加","zhuleitianjia.php","zhulei","initFrame");
	d.add(49,9,"类型列表","leixingliebiao.php","leixing","initFrame");
	
	d.add(50,17,"图片添加","tupiantianjia.php","tupian","initFrame");
	//d.add(51,17,"图片添加","leixingliebiao.php","leixing","initFrame");
	
	
	document.write(d)
	
	
	
	
	
</script>
</html>