<?php
	include("inc/inc.php");
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<link href="css/admin.css" type="text/css" rel="stylesheet">
	<style>
		#table td{
			border-bottom:1px solid #fff;
			border-right:1px solid #fff;
		}
	</style>
</head>
<BODY>
<TABLE cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
  <TR height=28>
    <TD background=images/title_bg1.jpg>当前位置: 类型列表</TD></TR>
  <TR>
    <TD bgColor=#b1ceef height=1></TD></TR>
  <TR height=20>
    <TD background=images/shadow_bg.jpg></TD>
  </TR>
</TABLE>

	<?php
		
		$sql_1="select * from data_list where dataNum=0";
		$result_1=mysql_query($sql_1);
		$count_1=mysql_num_rows($result_1);			
		$pageSize=4;
		$pageNum=ceil($count_1/$pageSize);
		//echo $pageNum;
		//exit;
		if(isset($_GET["page"])){
			$page=$_GET["page"];
			if($page>$pageNum){$page=$pageNum;};
			if($page<1){$page=1;};
		}else{
			$page=1;
		}
		$start=($page-1)*$pageSize;
		$sql="select * from data_list where dataNum=0 limit {$start}, {$pageSize}";
		//echo $sql;
		$result=mysql_query($sql);
	?>
	<table bgcolor="#F6F6F6" border="1" cellpadding="0" cellspacing="0" width="800" align="center" bordercolor="#fff" >
		<tr align="center" style="background: url(images/zilei_bg.jpg) repeat-x;">
			<td>主类名称</td>
			<td>主类操作</td>
			<td>子类管理</td>
		</tr>
	<?php
	while($rs=mysql_fetch_assoc($result)){
		
		
	?>
		<tr align="center">
			<td width="286" ><?php echo $rs["dataName"] ?></td>
			<td width= "286">
				<a href="zhuleiAdd.php?action=delete&dataId=<?php echo $rs["dataId"] ?>">删除</a> 
				| 
				<a href="update.php?ccId=<?php echo $rs["dataId"] ?>">修改</a>	 
				| 
				<a href="zileiAdd.php?ccId=<?php echo $rs["dataId"] ?>">子类增加</a>
			</td>
			<td width="286" >
				
				<table id="table" align="center" width="286" cellpadding="0" cellspacing="0">
					<?php
					$sql_son2="select * from data_list where dataNum=".$rs["dataId"];
					$pagesize_son2=2;
					$result_son2=mysql_query($sql_son2);
					$count_son2=mysql_num_rows($result_son2);
					$yeshu_son2=ceil($count_son2/$pagesize_son2);
					if(isset($_GET["page_1"])){
						$page_1=$_GET["page_1"];
						if($page_1>$yeshu_son2){
							$page_1=$yeshu_son2;
						}else if($page_1<1){
							$page_1=1;};
					}else{
						$page_1=1;
					}
					$start_son2=($page_1-1)*$pagesize_son2;
					$sql_son="select * from data_list where dataNum={$rs["dataId"]}";
					$sql_son.=" limit {$start_son2},{$pagesize_son2}";
					$resulte_son=mysql_query($sql_son);
					while($rs_son=mysql_fetch_assoc($resulte_son)){
				?>
					<tr height="30">
						<td width="100" align="center" height="30"><?php echo $rs_son["dataName"] ;?></td>
						<td width="186" align="center" height="30">
							<a href="zileiChuli.php?action=delete&ccId=<?php echo $rs_son["dataId"] ?>">删除</a>
							|
							<a href="zileiChange.php?action=delete&ccId=<?php echo $rs_son["dataId"] ?>">修改</a>
						</td>
					</tr>
					<?php
				}
				?>
					<tr>
						<td align="right" colspan="3">
							<a href="?page_1=1">首页</a>
							|
							<a href="?page_1=<?php echo $page_1-1?>">上一页</a>
							|
							<a href="?page_1=<?php echo $page_1+1?>">下一页</a>
							|
							<a href="?page_1=<?php echo $yeshu_son2?>">尾页</a>
						</td>
					</tr>
				</table>
				
				
			</td>
		</tr>
		
	<?php	
	}
	?>
	<tr>
			<td colspan="3" align="right">
				共<?php echo $pageNum ?>页/第<?php echo $page ?>页
				|
				<a href="?page=<?php echo 1 ?>">首页</a>
				|
				<a href="?page=<?php echo $page-1 ?>">上一页</a>
				|
				<?php
					if($page<5){
						for($i=1;$i<=10;$i++){
							if($i==$pageNum){
								?>
								<a href="?page=<?php echo $i ?>"><?php echo $i ?></a>
								<?php
								break;
							}
						?>
						<a href="?page=<?php echo $i ?>"><?php echo $i ?></a>
						<?php
							
						}
					}else{
						for($i=$page-4;$i<=$page+5;$i++){
							if($i==$pageNum){
								?>
								<a href="?page=<?php echo $i ?>"><?php echo $i ?></a>
								<?php
								break;
							}
						?>
						<a href="?page=<?php echo $i ?>"><?php echo $i ?></a>
						<?php
							
						}
					}
				?>
				|
				<a href="?page=<?php echo $page+1 ?>">下一页</a>
				|
				<a href="?page=<?php echo $pageNum ?>">尾页</a>
				
			</td>
		</tr>
	</table>


</BODY>
</html>