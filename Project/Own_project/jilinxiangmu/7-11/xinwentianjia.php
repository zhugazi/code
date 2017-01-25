<?php
	include("inc/inc.php");
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
    <TD background=images/title_bg1.jpg>当前位置: 新闻添加</TD></TR>
  <TR>
    <TD bgColor=#b1ceef height=1></TD></TR>
  <TR height=20>
    <TD background=images/shadow_bg.jpg></TD>
  </TR>
</TABLE>


<form action="xinwen.php?action=insert" method="post" enctype="multipart/form-data">
	<table class="tab" bgcolor="#F6F6F6" bordercolor="#FFFFFF" border="1" width="800" align="center" cellpadding="0" cellspacing="0">
		<tr>
			<td align="right">文章添加:</td>
			<td colspan="3">
				<input type="text" name="caTitle" style="width: 300px;"/>
			</td>
		</tr>
		<script>
			$(function(){
				$("#ccFid").change(function(){
					$.ajax({
						type:"get",
						url:"sel.php?ccFid="+$(this).val()+"&random="+Math.random(),
						dataType:"html",
						success:function(data){
							$("#ccSid").html(data);
						}
					});
				})
			})
		</script>
		
		<tr>
			<td align="right">新闻类型:</td>
			<td colspan="3">
				<select id="ccFid" name="ccFid">
					<option value="-1">请选择主类型</option>
					<?php
						$sql="select * from data_list where dataNum=0";
						$result=mysql_query($sql);
						
						while($rs=mysql_fetch_assoc($result)){
					?>
					<option value="<?php echo $rs["dataId"] ?>"><?php echo $rs["dataName"] ?></option>
					<?php
					}
					?>
				</select>
				<select id="ccSid" name="ccSid">
					<option>请选择子类型</option>
				</select>
			</td>
		</tr>
		<tr>
			<td align="right">来源网址:</td>
			<td><input type="text" name="caWebUrl"/></td>
			<td align="right">来源媒体:</td>
			<td><input type="text" name="caSource"/></td>
		</tr>
		<tr>
			<td align="right">记者:</td>
			<td><input type="text" name="ccJizhe"/></td>
			<td align="right">新闻图片:</td>
			<td><input type="file" name="ccImg"/></td>
		</tr>
		<tr>
			<td align="right">新闻内容:</td>
			<td  colspan="3">
				<textarea rows="10" cols="80" name="ccNeirong"></textarea>
			</td>
			<script>
				CKEDITOR.replace("ccNeirong",{
					toolbar:"basic"
				})
				
			</script>
		</tr>
		<tr>
			<td align="center" colspan="4"><input type="submit" /></td>
		</tr>
	</table>
</form>

</BODY>
</html>
