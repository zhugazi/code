<?php
	include("inc/inc.php");
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<link href="css/admin.css" type="text/css" rel="stylesheet">
</head>
<BODY>
<?php
	$ccId=$_GET["ccId"];
	$sql="select dataName from data_list where dataId={$ccId}";
	$resulte=mysql_query($sql);
	$rs=mysql_fetch_assoc($resulte);
	
	
?>
<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
  <TR height=28>
    <TD background=images/title_bg1.jpg>当前位置:<?php echo $rs["dataName"] ?> 添加子类</TD></TR>
  <TR>
    <TD bgColor=#b1ceef height=1></TD></TR>
  <TR height=20>
    <TD background=images/shadow_bg.jpg></TD>
  </TR>
</TABLE>
<form action="zileiChuli.php?action=insert&ccId=<?php echo $ccId ?>" method="post">
	<table bgcolor="#F6F6F6" border="1" cellpadding="0" cellspacing="0" width="800" align="center" bordercolor="#fff" >
		<tr height="30px">
			<td align="right">子类名称:</td>
			<td><input type="text" name="ccName"/></td>
		</tr>
		<tr>
			<td colspan="2"  align="center"><input type="submit" /></td>
		</tr>
	</table>
</form>

</BODY>
</html>