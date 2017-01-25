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
<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
  <TR height=28>
    <TD background=images/title_bg1.jpg>当前位置: 主类修改</TD></TR>
  <TR>
    <TD bgColor=#b1ceef height=1></TD></TR>
  <TR height=20>
    <TD background=images/shadow_bg.jpg></TD>
  </TR>
</TABLE>

<?php
	$ccId=$_GET["ccId"];
	$sql="select cc.dataName  from data_list as cc where dataId={$ccId}";
	$result=mysql_query($sql);
	$rs=mysql_fetch_assoc($result);
?>

<form action="zileiChuli.php?action=update&ccId=<?php echo $ccId; ?>" method="post">
	<table border="1" cellpadding="0" cellspacing="0" width="800" align="center" bordercolor="#C8D0D3" >
		<tr height="30px">
			<td align="right">主类名称:</td>
			<td><input type="text" name="ccName" value="<?php echo $rs["dataName"] ?>"/></td>
		</tr>
		<tr>
			<td colspan="2"  align="center"><input type="submit" /></td>
		</tr>
	</table>
</form>

</BODY>
</html>