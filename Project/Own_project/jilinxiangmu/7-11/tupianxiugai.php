<?php
	include("inc/inc.php");
	$id=$_GET["id"];
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<link href="css/admin.css" type="text/css" rel="stylesheet">
	<script src="js/jquery1.8.3.min.js"></script>
	<script src="js/ckeditor_4.5.1_standard/ckeditor/ckeditor.js"></script>
	<style>
		.tab tr{
			height: 40px;
		}
	</style>
	
</head>
<BODY>

<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
  <TR height=28>
    <TD background=images/title_bg1.jpg>当前位置: 图片修改</TD></TR>
  <TR>
    <TD bgColor=#b1ceef height=1></TD></TR>
  <TR height=20>
    <TD background=images/shadow_bg.jpg></TD>
  </TR>
</TABLE>


<form action="tupianguanli.php?action=update&id=<?php echo $id?>" method="post" enctype="multipart/form-data">
	<table class="tab" bgcolor="#F6F6F6" bordercolor="#FFFFFF" border="1" width="800" align="center" cellpadding="0" cellspacing="0">		
		<?php
			$sql="select * from tupian_data where tuId=".$id;
			$result=mysql_query($sql);
			$rs=mysql_fetch_assoc($result);
		?>
		<tr>
			<td width="50" align="center">标题:</td>
			<td width="200" align="left"><input type="text" value="<?php echo $rs["tuTitle"]?>" name="tuTitle"/></td>
		</tr>
		<tr>
			<td width="50" align="center">原图:</td>
			<td width="200" align="left"><img src="<?php echo $rs["tuUrl"]?>" height="40" width="40" style="display:block" /></td>
		</tr>
		<tr>
			<td width="50" align="center">新图:</td>
			<td width="200" align="left"><input type="file" name="tuUrl"/></td>
		</tr>
		<tr>
			<td width="50" align="center">类型:</td>
			<td width="200" align="left"><input type="text" value="<?php echo $rs["tuType"]?>" name="tuType"/></td>
		</tr>
		
		<tr>
			<td colspan="2"><input type="submit" /></td>
			
		</tr>
		
	</table>
</form>

</BODY>
</html>
