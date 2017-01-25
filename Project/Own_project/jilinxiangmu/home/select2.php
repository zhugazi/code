<?php
	include("inc/inc.php");
	$id=$_GET["id"];
	$sql="select caId,caTitle,caDate from cms_data where ccSid=".$id;
	$result=mysql_query($sql);
?>
<ul>
<?php
	while($rs=mysql_fetch_assoc($result)){
?>
	<li><a href="a.php?<?php echo $rs["caId"]?>"><?php echo $rs["caTitle"]?></a></li>
<?php
	}
?>
</ul>