<?php
	header("content-type:text/html;charset=utf-8");
	//创建一个公共的外部文件
	include("inc/inc.php");
	session_start();
	
	
	//接受用户名和密码
	$aName=$_POST["aName"];	
	$aPwd=$_POST["aPwd"];
	
	//验证用户名
	$sql="select * from user where aName='{$aName}'";	
	$result=mysql_query($sql);
	
	//判断一下是否存在
	$count=mysql_num_rows($result);//对select语句有效
	//echo $count;
	if($count>0){
		$rs=mysql_fetch_assoc($result);//转换成关联数组
		//echo $rs["aPwd"];
		//exit;
		if($rs["aPwd"]==$aPwd){
			$_SESSION["aName"] 	= $rs["aName"];
			$_SESSION["aId"]	= $rs["aId"];
		?>
			<script>
				alert("登陆成功");
				location.href="main.php";
			</script>
		
			<?php
			exit;
		}else{
		?>
		<script>
			alert("登陆错误，请重新登录")
			location.href="denglu.php";
		</script>
		<?php
			
			exit;	
		}
		
		
		
	}else{
		?>
		<script>
			alert("登陆错误，请重新登录")
			location.href="denglu.php";
		</script>
		<?php
			
		exit;
	}
	
	
	
	
	
	
	
	
	
	
	
?>