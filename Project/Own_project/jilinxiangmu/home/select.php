<?php
	include("inc/inc.php");
	$id=$_GET["id"];
	$sql="select caId,caTitle,caDate from cms_data where ccSid=".$id." limit 0,6";
	/*echo $sql;
	exit;*/
	$result=mysql_query($sql);
	
?>
<ul>
<?php
	while($rs=mysql_fetch_assoc($result)){
?>
	<li><a href="a.php?caId=<?php echo $rs["caId"]?>"><?php echo $rs["caTitle"]?></a><span><?php echo $rs["caDate"]?></span></li>
<?php
	}
?>
</ul>
