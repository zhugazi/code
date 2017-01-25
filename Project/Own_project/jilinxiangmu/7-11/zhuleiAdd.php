<?php
	include("inc/inc.php");
	$action=$_GET["action"];
	
	//echo "111";
	//exit;
	
	
	if($action=="insert"){
		$dataName=$_POST["ccName"];
		$dataNum  =0;		
		$sql = "insert into data_list(dataNum,dataName) value ({$dataNum},'{$dataName}')";

	?>
	<script>
		alert("添加成功");
		location.href="leixingliebiao.php";
	</script>
	<?php
		mysql_query($sql);
	}else if($action=="delete"){
		$ccId=$_GET["dataId"];
		$sql="delete from data_list where dataId={$ccId}";
	?>
	<script>
		alert("删除成功");
		location.href="leixingliebiao.php";
	</script>
	<?php
		mysql_query($sql);		
	}elseif($action=="update"){
		
		$ccName = $_POST["ccName"];
		$ccId=$_GET["ccId"];
		$sql="update data_list set dataName='{$ccName}' where dataId={$ccId}";
		
	?>
	<script>
		alert("修改成功");
		location.href="leixingliebiao.php";
	</script>
	<?php
		mysql_query($sql);
		
	}
	//mysql_query($sql);
	
?>