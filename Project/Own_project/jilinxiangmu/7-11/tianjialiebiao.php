<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>添加列表</title>
</head>
<body>
	<form action="tupianguanli.php?action=add" method="post" enctype="multipart/form-data">
	<table width="800" align="center" bgcolor="#F6F6F6" bordercolor="#FFFFFF" border="1" cellpadding="0" cellspacing="0">
		<tr height="40">
			<td width="180" height="40" align="center">图片1</td>
			<td width="220" height="40" align="center"><input type="file" name="img1[]"/></td>
			<td width="180" height="40" align="center">标题:</td>	
			<td width="220" height="40" align="center"><input type="text" name="ciTilte[]"/></td>		
		</tr>
		<tr height="40">
			<td width="180" height="40" align="center">图片2</td>
			<td width="220" height="40" align="center"><input type="file" name="img1[]"/></td>
			<td width="180" height="40" align="center">标题:</td>	
			<td width="220" height="40" align="center"><input type="text" name="ciTilte[]"/></td>		
		</tr>
		<tr height="40">
			<td width="180" height="40" align="center">图片3</td>
			<td width="220" height="40" align="center"><input type="file" name="img1[]"/></td>
			<td width="180" height="40" align="center">标题:</td>	
			<td width="220" height="40" align="center"><input type="text" name="ciTilte[]"/></td>		
		</tr>
		<tr height="40">
			<td width="180" height="40" align="center">图片4</td>
			<td width="220" height="40" align="center"><input type="file" name="img1[]"/></td>
			<td width="180" height="40" align="center">标题:</td>	
			<td width="220" height="40" align="center"><input type="text" name="ciTilte[]"/></td>		
		</tr>
		<tr height="40">
			<td width="180" height="40" align="center">图片5</td>
			<td width="220" height="40" align="center"><input type="file" name="img1[]"/></td>
			<td width="180" height="40" align="center">标题:</td>	
			<td width="220" height="40" align="center"><input type="text" name="ciTilte[]"/></td>		
		</tr>
		 <tr>
		 	<td align="center">图片类型:</td>
		 	<td align="center" colspan="3"><input type="text" name="ciType"/></td>
		 </tr>
		<tr height="40">
			<td colspan="4" align="center">
				<input type="submit" />
			</td>						
		</tr>
	</table>
	</form>
</body>
</html>