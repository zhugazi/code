<?php
	function getSql($str){
		if(!empty($str)||$str!=""){
			$state="where {$str}";
		}else{
			$state="";
		}
		$sql="select * from data_list {$state}";
		return $sql;
	}
?>