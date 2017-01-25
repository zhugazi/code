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
    <TD background=images/title_bg1.jpg>当前位置: 图片添加</TD></TR>
  <TR>
    <TD bgColor=#b1ceef height=1></TD></TR>
  <TR height=20>
    <TD background=images/shadow_bg.jpg></TD>
  </TR>
</TABLE>



	<table class="tab" bgcolor="#F6F6F6" bordercolor="#FFFFFF" border="1" width="800" align="center" cellpadding="0" cellspacing="0">		
		<tr height="40">	
			<form>	
				<td colspan="4"><button formaction="tianjialiebiao.php" formmethod="post" style="height: 40px;">图片添加</button></td>
			</form>
		</tr>
		<tr>
			<td width="200" align="center">标题</td>
			<td width="200" align="center">缩略图</td>
			<td width="200" align="center">类型</td>
			<td width="200" align="center">操作</td>
		</tr>
		<?php
			$sql1="select * from tupian_data where tuId>=0";
			$result1=mysql_query($sql1);
			$count=mysql_num_rows($result1);			
			$pagesize=5;
			$yeshu=ceil($count/$pagesize);
			if(isset($_GET["page"])){
				$page=$_GET["page"];
				if($page>$yeshu){$page=$yeshu;};
				if($page<1){$page=1;};
			}else{
				$page=1;
			}
			$start=($page-1)*5;
			$sql="select * from tupian_data where tuId>=0 limit $start,$pagesize";
			
			$result=mysql_query($sql);
			while($rs=mysql_fetch_assoc($result)){
				
		?>
		<tr>
			<td width="200" align="center"><?php echo $rs["tuTitle"]?></td>
			<td width="200" align="center"><img src="<?php echo $rs["tuUrl"]?>" height="40" width="40" style="display:block"/></td>
			<td width="200" align="center"><?php echo $rs["tuType"]?></td>
			<td width="200" align="center">
				<a href="tupianguanli.php?action=delete&id=<?php echo $rs["tuId"]?>">删除</a>
				|
				<a href="tupianxiugai.php?id=<?php echo $rs["tuId"]?>">修改</a>
			</td>
		</tr>
		<?php
			}
		?>
		<tr>
			<td colspan="4" align="right">
				共<?php echo $yeshu?>页/第<?php echo $page?>页
				|
				<a href="?page=1">首页</a>
				|
				<a href="?page=<?php echo $page-1?>">上一页</a>
				|
				<?php
				if($page<5){
					for($i=1;$i<=$yeshu;$i++){
						if($i==$yeshu){
							?>
							<a href="?page=<?php echo $i?>"><?php echo $i?></a>
							<?php
							break;
						}
						?>
							<a href="?page=<?php echo $i?>"><?php echo $i?></a>
							<?php
					}
				}else{
					for($i=$page-4;$i<=$page+5;$i++){
					?>
						<a href="?page=<?php echo $i?>"><?php echo $i?></a>
					<?php	
					}
				}
				?>
				|
				<a href="?page=<?php echo $page+1?>">下一页</a>
				|
				<a href="?page=<?php echo $yeshu?>">尾页</a>
				
			</td>
		</tr>
	</table>


</BODY>
</html>
