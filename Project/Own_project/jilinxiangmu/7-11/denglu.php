<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
		<title></title>
		<link rel="stylesheet" href="css/reset.css" />
		<link rel="stylesheet" href="css/style.css" />
		
		
	</head>
	<body>
		<div id="wrap">
			<div id="box">
				<div id="top">
					<img src="images/top.jpg" />
				</div>
				<div id="bot">
					<div id="bot_left">
						<img src="images/login_3.jpg" />
					</div>
					<div id="bot_right">
						<img src="images/login_4.jpg" />
					</div>
					<form action="checkLogin.php" method="post">
					<div id="bot_center">
						<div id="bot_center_top">
							<label>用户名</label>
							<input type="text" name="aName"  />
						</div>
						<div id="bot_center_bot" style="margin-top: 14px;">
							<label>口<span style="visibility: hidden;">是</span>令</label>
							<input type="password" name="aPwd"  />
						</div>
						<div id="bot_center_bot" style="margin-top: 10px;">
							<input type="submit" value="登录" style="background: #ccc; font-size: 12px;"/>
						</div>
					</div>
					</form>
					<div id="bot_bot">
						<img src="images/login_5.jpg" />
					</div>
				</div>
				<div id="bot2">
					<img src="images/bott.jpg" />
				</div>
			</div>
		</div>
		
		
	</body>
</html>
