<?php
	include("inc/inc.php");
	$caId=$_GET["caId"];
	$sql="select * from cms_data where caId=".$caId;
	$result=mysql_query($sql);
	$rs=mysql_fetch_assoc($result);
	
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


<form action="xinwen.php?action=updata&caId=<?php echo $caId ?>" method="post" enctype="multipart/form-data">
	<table class="tab" bgcolor="#F6F6F6" bordercolor="#FFFFFF" border="1" width="800" align="center" cellpadding="0" cellspacing="0">
		<tr>
			<td align="right">文章添加:</td>
			<td colspan="3">
				<input type="text" name="caTitle" value="<?php echo $rs["caTitle"] ?>" style="width: 300px;"/>
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
				<?php
					$sql_0="select * from data_list where dataNum=0";
					$result_0=mysql_query($sql_0);
				?>
				<select id="ccFid" name="ccFid">
					<option value="-1">请选择主类型</option>					
					<?php	
						while($rs_0=mysql_fetch_assoc($result_0)){
							
					?>
					<option value="<?php echo $rs_0["dataId"] ?>" <?php if($rs["ccFid"]==$rs_0["dataId"]){echo "selected='selected'";} ?>><?php echo $rs_0["dataName"] ?></option>
					<?php
						/*echo $rs_0["dataName"];
						exit;*/
					}
					?>
				</select>
				<?php 
					$sql_1="select * from data_list where dataNum=".$rs["ccFid"];
					$result_1=mysql_query($sql_1);
				?>
				<select id="ccSid" name="ccSid">
					<?php
						while($rs_1=mysql_fetch_assoc($result_1)){
					?>
					<option value="<?php echo $rs_1["dataId"] ?>"<?php if($rs["ccSid"]==$rs_1["dataId"]){echo "selected='selected'";}?>><?php echo $rs_1["dataName"] ?></option>
					<?php
						}
					?>
				</select>
			</td>
		</tr>
		<tr>
			<td align="right">来源网址:</td>
			<td><input type="text" name="caWebUrl" value="<?php echo $rs["caWebUrl"] ?>"/></td>
			<td align="right">来源媒体:</td>
			<td><input type="text" name="caSource" value="<?php echo $rs["caSource"] ?>"/></td>
		</tr>
		<tr>
			<td align="right">记者:</td>
			<td colspan="3"><input type="text" name="ccJizhe" value="<?php echo $rs["caJizhe"] ?>"/></td>			
		</tr>
		<tr>
			<td align="right">原图:</td>
			<td><img src="<?php echo $rs["caImg"] ?>" width="40" height="40" style="vertical-align: middle; display: block;"/></td>
		</tr>
		<tr>
			<td align="right">新闻图片:</td>
			<td><input type="file" name="ccImg"/></td>
		</tr>
		<tr>
			<td align="right">新闻内容:</td>
			<td  colspan="3">
				<textarea rows="10" cols="80" name="ccNeirong"><?php echo $rs["caNeirong"] ?></textarea>
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
