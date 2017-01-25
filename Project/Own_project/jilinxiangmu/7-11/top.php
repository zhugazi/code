<?php
session_start();

?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<link rel="stylesheet" href="css/reset.css" />
	<style>
		#wrap{
			display: -webkit-box;
			-webkit-box-align: center;
			-webkit-box-pack: justify;
			width: 100%;
			height: 60px;	
			background: url(images/header_bg.jpg) repeat-x;		
		}
		div img{
			display: block;
			margin-top: -4px;
		}
		#wrap>div{
			-webkit-box-flex: 1;
			width: 100%;
			height: 100%;
			background: url(images/header_bg.jpg) repeat-x;
		}
		div img:nth-of-type(1){
			vertical-align: top;
			width: 260px;
		}
		div img:nth-of-type(2){
			
			width: 268px;
		}
		#box ul{
			width: 100%;
			height: 100%;
			display: -webkit-box;
			-webkit-box-align: center;
			-webkit-box-pack: center;
		}
		#box ul li{
			padding-right: 18px;
			
			color: #fff;
		}
		#box ul li a{
			color: #fff;
		}
	</style>
</head>
<body>
	<div id="wrap">
		<img src="images/header_left.jpg" />
		<div id="box">
			<ul>
				<li>当前用户:<span><?php echo $_SESSION["aName"]?></span></li>				
				<li><a href="#">修改口令</a></li>
				<li><a href="tuichuxitong.php">退出系统</a></li>
			</ul>
		</div>
		<img src="images/header_right.jpg" />
	</div>
</body>
</html>




