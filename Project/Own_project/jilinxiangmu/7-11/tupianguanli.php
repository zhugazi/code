<?php
	include("inc/inc.php");
	$action=$_GET["action"];
	if($action=="add"){
		//$img=$_FILES['img1']['name'];
		$filePath='upload/'.date('Ymd').'/';
		if(!is_dir($filePath)){
			mkdir($filePath);
		}
		foreach($_FILES["img1"]["error"] as $i => $error){
			if($error==UPLOAD_ERR_OK){
				$img=$_FILES['img1']['name'][$i];
				$ciTitle=$_POST['ciTilte'][$i];
				$ciType=$_POST['ciType'];
				$houzhui=end(explode('.',$img));
				
				if($houzhui != "jpg" && $houzhui != "png" && $houzhui != "gif"){
					echo "图片类型，不对";
					exit;
				}
				
				if($img["size"]>=6000){
					echo "图片太大";
					exit;
				}
				
				$fileName=$filePath.date('His').rand(10000, 99999).rand(10000, 99999).'.'.$houzhui;
				//echo $fileName;
				
				//$size=getimagesize($fileName);
				//print_r($size);
				//exit;
				//if($fileName)
				move_uploaded_file($_FILES['img1']['tmp_name'][$i], $fileName);				
				
				if($ciType==3){	
					$size=getimagesize($fileName);
					$width=$size[0];
					//echo $width;
					//exit;
					$height=$size[1];
					if($width<699 || $height<96){
						echo "图片长或宽小于限制";
						exit;
					}elseif($width>699 || $height>96){
						echo "图片长或宽超出限制";
						exit;
					}
				}
				$sql=" insert into tupian_data(tuUrl,tuType,tuTitle) values('{$fileName}','{$ciType}','{$ciTitle}')";				
				
				mysql_query($sql);
				
			}
			
		}
		?>
				<script>
					alert("添加成功");
					location.href="tupiantianjia.php";
				</script>
				<?php
		
	}elseif($action=="delete"){
		$id=$_GET["id"];
		$sql1="select * from tupian_data where tuId=".$id;
		$result=mysql_query($sql1);
		$rs=mysql_fetch_assoc($result);
		if(is_file($rs["tuUrl"])){
			unlink($rs["tuUrl"]);
		}		
		$sql="delete from tupian_data where tuId=".$id;
		?>
		<script>
			alert("删除成功");
			location.href="tupiantianjia.php";
		</script>
		<?php
		mysql_query($sql);
	}else if($action=="update"){
		$id=$_GET["id"];
		$tuTitle=$_POST["tuTitle"];
		$tuType=$_POST["tuType"];
		$tuUrl=$_FILES["tuUrl"];
		
		if(strlen($tuUrl["name"])>0){
			
			$sql="select * from tupian_data where tuId=".$id;
			$result=mysql_query($sql);
			$rs=mysql_fetch_assoc($result);
			if(is_file($rs["tuUrl"])){
				unlink($rs["tuUrl"]);
			}
			$houzhui=end(explode(".", $tuUrl["name"]));
			
			$filePath="upload/".date("Ymd")."/";
			if(!is_dir($filePath)){
				mkdir($filePath);
			}
			
			$fileName=$filePath.time().rand(100000, 999999).rand(100000, 999999).".".$houzhui;
			move_uploaded_file($tuUrl["tmp_name"], $fileName);
			
		}else{
			$sql_0="select tuUrl from tupian_data where tuId=".$id;
			$result_0=mysql_query($sql_0);
			$rs_0=mysql_fetch_assoc($result_0);
			$fileName=$rs_0["tuUrl"];
		}
		
		$sql1="update tupian_data set tuUrl='{$fileName}',tuType='{$tuType}',tuTitle='{$tuTitle}' where tuId=".$id;
		
		mysql_query($sql1);
	}
?>