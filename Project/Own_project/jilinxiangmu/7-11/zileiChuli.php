<?php
	include("inc/inc.php");
	$action=$_GET["action"];
	if($action=="insert"){
		$ccName=$_POST["ccName"];
		$ccId  =$_GET["ccId"];
		$sql="insert into data_list (dataNum,dataName) value ({$ccId},'{$ccName}')";
		?>
		<script>
			alert("子类添加成功");
			location.href="leixingliebiao.php";
		</script>
		<?php
		mysql_query($sql);
	}else if($action=="delete"){
		$ccId  =$_GET["ccId"];
		$sql="delete from data_list where dataId={$ccId}";
		?>
		<script>
			alert("删除成功");
			location.href="leixingliebiao.php";
		</script>
		<?php
		mysql_query($sql);
	}else if($action=="update"){
		$ccId  =$_GET["ccId"];
		$ccName=$_POST["ccName"];
		$sql="update data_list set dataName='{$ccName}' where dataId={$ccId}";
		?>
		<script>
			alert("修改成功");
			location.href="leixingliebiao.php";
		</script>
		<?php
		mysql_query($sql);
	}
	
	
?>