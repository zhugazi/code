<?php
	include("inc/inc.php");
	include("inc/fun.php");
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<link rel="stylesheet" href="css/reset.css" />
		<link rel="stylesheet" href="css/style.css" />
		<!--<script src="js/zepto.min.js"></script>-->
		<script src="js/jquery.js"></script>
		
		<script src="js/jquery.kxbdmarquee.js"></script>
	</head>
	<body>
		<div id="wrap">
			<header>
				<div id="h_top">
					<img src="img/jilih_top1.png" />
					<div id="h_top_right">
						<form>
							<label>财务通邮箱</label>
							<label>用户名:</label>
							<input type="text" />
							<label>@jigov.cn</label>
							<label>密码:</label>
							<input type="password"  />
							<input type="submit" />
						</form>
						<ul>
							<li><a href="#">设为首页</a></li>
							<li><a href="#">添加收藏</a></li>
							<li><a href="#">政务微博</a></li>
							<li><a href="#" style="background: none;">编委会</a></li>
						</ul>
					</div>
					
				</div>
				<div id="banner">
					<?php
					$sql_8="select * from tupian_data where tuType=1 limit 4,6";
					$result_8=mysql_query($sql_8);
					
					?>
					<ul>
						<?php 
						while($rs_8=mysql_fetch_assoc($result_8)){
						?>
						<li><a href="###"><img src="../7-11/<?php echo $rs_8["tuUrl"]?>" /></a></li>
											
						<?php
						}
						?>
					</ul>	
					
					<script>
						function autotop(){
							$("#banner ul").animate({
								"top":"-200px"
							},function(){
								$("#banner ul li").eq(0).appendTo($(this));
								$(this).css({"top":"0"});
							});
							
						}
						setInterval(function(){
							autotop()
						},2000)
					</script>
				</div>
			</header>
			<div id="gundong">
				<p style="font-size: 12px; color: #947B9D;margin-left: 10px;margin-right: 50px;">115年7月16日 星期四</p>
				<p style="font-size: 12px;margin-right: 40px;">长春<img src="img/qing.png"/>18℃~29℃ 东风</p>
				<marquee><a href="#" style="color: #FF0000;">2015春防无重大森林火灾任务</a></marquee>
				<marquee><a href="#" style="color: #000066;">2015年6月15日森林火险预警任务</a></marquee>
				<form>
					<label>站内检索</label>
					<input type="text" />
					<input type="submit" placeholder="请输入关键字"/>
				</form>
			</div>
			
			<section id="main">
				
					<div id="main_left">
						<ul>
							<li><a href="jilinShouye.php">本站首页</a></li>
							<?php
								$sql_0=getSql("dataNum=0");
								$result_0=mysql_query($sql_0);
								while($rs_0=mysql_fetch_assoc($result_0)){
							?>
							<li><a href="###"><?php echo $rs_0["dataName"]?></a></li>
							
							<?php
								}
							?>
							
						</ul>
						
						
						
						<div id="main_left1">
							<div id="main_left1_top">
								<p>公告公示</p>
								<div>
									<img src="img/left_i.png" />
								</div>
							</div>
							<div id="main_left1_bot">
								<p>吉林林情</p>
								<div>
									<ul>
										<li style="background: url(img/left_bg3.png) no-repeat right center;"><a href="#">林情综述</a></li>
										
										<li><a href="#">林业规划</a></li>
										<li style="background: url(img/left_bg3.png) no-repeat right center;"><a href="#">林业年报</a></li>
										
										<li><a href="#">成就展厅</a></li>
										<li><a href="#">大事记</a></li>
									</ul>
								</div>
							</div>
							
						</div>
					</div>
					
					<div id="main_center">
						<div>
							<div>
								<img src="img/W020150708506049098095.jpg" />
							</div>
							<div id="main_center_lunbo">
								
								<ul>
									<?php
									$sql_lunbo="select * from tupian_data where tuType=1";
									$result_lunbo=mysql_query($sql_lunbo);
									while($rs_lunbo=mysql_fetch_assoc($result_lunbo)){
									?>
									<li><img src="../7-11/<?php echo $rs_lunbo["tuUrl"]?>"/></li>
									
									<?php
									}
									?>
								</ul>
								<p>
									<a href="###" class="on">1</a>
									<a href="###">2</a>
									<a href="###">3</a>
									<a href="###">4</a>
								</p>
							</div>
							<script>
							
								var Left=$('#main_center_lunbo ul').offset().left;
								var liwidth=$('#main_center_lunbo ul li').eq(0).width();
								var i=0;
								var timer=null;
								var object1=$('#main_center_lunbo ul');
								var index=0;
								
								$('#main_center_lunbo p a').on('click',function(){
									clearInterval(timer);
									index=$(this).index();			
									$(this).addClass("on").siblings().removeClass("on");
									$('#main_center_lunbo ul').animate({
										"left":-index*liwidth
									})
								})
								
								timer=setInterval(auto,1000);
								function auto(){
									$('#main_center_lunbo p a').eq(i).addClass("on").siblings().removeClass("on");
									$('#main_center_lunbo ul').animate({
										"left":-i*liwidth
									})
									if(i>=$('#main_center_lunbo p a').length-1){
										i=0
									}else{
										i++;
									}
								}
								$('#main_center_lunbo p a').on('mouseout',function(){
									clearInterval(timer);
									timer=setInterval(auto,1000);
									i=$(this).index();
								})
								
								
							</script>
							
							<div id="main_center_qiehuan">
								<?php
									$sql_1=getSql("dataNum=3 limit 6,11");
									$result_1=mysql_query($sql_1);
									$j=1;
									$str_1 = "";							?>
								<p>
								<?php
								while($rs_1=mysql_fetch_assoc($result_1)){
										if($j==1){
											$str_1 = "class='on'";
											?>
											<a href="#" id="a_<?php echo $rs_1["dataId"]?>" <?php echo $str_1;?>  ><?php echo $rs_1["dataName"]?></a>
											<?php
											
										}else{
											
											?>
											<a href="#" id="a_<?php echo $rs_1["dataId"]?>" ><?php echo $rs_1["dataName"]?></a>
											<?php
										}
										
									$j++;
								}
								?>
								</p>
								
								<div>
									<?php
										$sql_2="select caId,caTitle,caDate from cms_data where ccSid=33 limit 0,6";
										$result_2=mysql_query($sql_2);
									?>
									
									<ul style="display: block;">
										<?php
										while($rs_2=mysql_fetch_assoc($result_2)){
										?>
										<li><a href="a.php?caId=<?php echo $rs_2["caId"]?>"><?php echo $rs_2["caTitle"]?></a><span>[<?php echo $rs_2["caDate"]?>]</span></li>
										<?php
										}
										?>
										
									</ul>
									
								</div>
							</div>
							
							<script>
							
								$('#main_center_qiehuan>p a').on('mouseover',function(){
									var index=$(this).index();
									$(this).addClass("on").siblings().removeClass("on");
									$('#main_center_qiehuan>div ul').eq(index).show().siblings().hide();
									var $id=$(this).attr("id").split("_");
									
									//alert($id[1]);
									$.ajax({
										type:"get",
										url:"select.php?random="+Math.random()+"&id="+$id[1],
										async:true,
										success:function(data){
											$("#main_center_qiehuan div>ul").html(data);
											//console.log(data);
										}
									});
								})
								
							</script>
							
							
							
							<div>
								<img src="img/center_bg.png"/>
							</div>
						</div>
						
						<div id="jilin_datu">
							<?php
							$sql_5="select * from tupian_data where tuType=3";
							$result_5=mysql_query($sql_5);
							?>
							<ul>
								<?php
								while($rs_5=mysql_fetch_assoc($result_5)){
								?>
								<li><img src="../7-11/<?php echo $rs_5["tuUrl"]?>"/></li>
								<?php
								}
								?>
							</ul>
							<p>
								<a href="###">1</a>
								<a href="###">2</a>
								<a href="###">3</a>
								<a href="###">4</a>
							</p>
							<script>
								var $jilin_index=0;
								var $timer=null;
								$("#jilin_datu>p>a").live("click",function(){
									clearInterval($timer);
									var index=$(this).index();					
									$("#jilin_datu>ul li").eq(index).show().siblings().hide();
									
								})
								$("#jilin_datu>p>a").live("mouseout",function(){
										$jilin_index=index;
										$timer=setInterval(function(){	
											$jilin_index++;
											if($jilin_index > $("#jilin_datu>p>a").length-1){
												$jilin_index=0
											}				
											lun_qie($jilin_index);
										},2000)
									})
								function lun_qie($jilin_index){
									
									$("#jilin_datu>ul li").eq($jilin_index).show().siblings().hide();
									
								}
								$timer=setInterval(function(){
									$jilin_index++;
									if($jilin_index > $("#jilin_datu>p>a").length-1){
										$jilin_index=0
									}
									lun_qie($jilin_index);
								},2000)
							</script>
							
						</div>
						<div id="main_center3">
							<div id="main_center33">
								<?php
									$sql_3=getSql("dataNum=3 limit 0,2");
									
									$result_3=mysql_query($sql_3);
									$i=1;
								?>
								<p>
									<?php
										while($rs_3=mysql_fetch_assoc($result_3)){
											
											if($i==1){
												$str_1 = "class='on'";
												?>
												<a href="###" id="a_<?php echo $rs_3["dataId"]?>" <?php echo $str_1?>><?php echo $rs_3["dataName"]?></a>
												<?php
											}else{											
												?>
												<a href="###" id="a_<?php echo $rs_3["dataId"]?>" ><?php echo $rs_3["dataName"]?></a>										
												<?php
											}
											$i++;
										}
									?>
								</p>
								
								<div>
									<ul>
										<li style="margin-top: 10px;"><span>厅长:</span>兰宏良444444</li>
										<li><span>副厅长:</span>孙光芝 孙亚强 王伟</li>
										<li><span>纪检组长:</span>刘长璐<span style="margin-left: 15px;">森防副指挥:</span>郭石林</li>
										<li><span>巡视员:</span></li>
										<li><span>总工程师:</span>刘建华</li>
									</ul>
									<ul style="display: none;">
										<li style="margin-top: 10px;"><span>厅长:</span>兰宏良33333</li>
										<li><span>副厅长:</span>孙光芝 孙亚强 王伟</li>
										<li><span>纪检组长:</span>刘长璐<span style="margin-left: 15px;">森防副指挥:</span>郭石林</li>
										<li><span>巡视员:</span></li>
										<li><span>总工程师:</span>刘建华</li>
									</ul>
								</div>
							</div>
							<div id="main_center333">
								<?php
									$sql_4=getSql("dataNum=3 limit 0,2");
									$result_4=mysql_query($sql_4);
									$ii=1;
								?>
								<p>
									<?php
										while($rs_4=mysql_fetch_assoc($result_4)){
											
											if($ii==1){
												$str_2="class='on'";
												?>
												<a href="###" id="c_<?php echo $rs_4["dataId"]?>" <?php echo $str_2?>><?php echo $rs_4["dataName"]?></a>
												<?php
												
											}else{
									?>
										<a href="###" id="c_<?php echo $rs_4["dataId"]?>"><?php echo $rs_4["dataName"]?></a>
									<?php
											}
											$ii++;
											
										}
									?>
								</p>
								<div>
									<ul>
										<li style="margin-top: 10px;"><span>厅长:</span>兰宏良2222222</li>
										<li><span>副厅长:</span>孙光芝 孙亚强 王伟</li>
										<li><span>纪检组长:</span>刘长璐<span style="margin-left: 15px;">森防副指挥:</span>郭石林</li>
										<li><span>巡视员:</span></li>
										<li><span>总工程师:</span>刘建华</li>
									</ul>
									<ul style="display: none;">
										<li style="margin-top: 10px;"><span>厅长:</span>兰宏良2111111</li>
										<li><span>副厅长:</span>孙光芝 孙亚强 王伟</li>
										<li><span>纪检组长:</span>刘长璐<span style="margin-left: 15px;">森防副指挥:</span>郭石林</li>
										<li><span>巡视员:</span></li>
										<li><span>总工程师:</span>刘建华</li>
									</ul>
								</div>
							</div>
							
							<script>
								$('#main_center33>p>a').on("click",function(){
									var index=$(this).index();
									$(this).addClass("on").siblings().removeClass("on");
									$('#main_center33>div ul').eq(index).show().siblings().hide();
									$('#main_center333>div ul').eq(index).show().siblings().hide();
									$cId=$(this).attr("id").split("_");
									
									$.ajax({
										type:"get",
										url:"select1.php?random="+Math.random()+"&id"+$cId,
										success:function(data){
											//alert(data);
										}
									});
									
								})
								$('#main_center333>p>a').on("click",function(){
									var index=$(this).index();
									$(this).addClass("on").siblings().removeClass("on");
									
									$('#main_center333>div ul').eq(index).show().siblings().hide();
									$ccId=$(this).attr("id").split("_");
									$.ajax({
										type:"get",
										url:"select2.php?random="+Math.random()+"&id"+$ccId,
										success:function(data){
											
										}
									});
								})
							</script>
							
						</div>
					</div>
					
					
					
					
					<div id="main_right">
					<div id="main_right_top">
						<div id="main_right_top_top">
							<img src="img/14410_lytgfwb04.jpg" />
							<img src="img/14410_lytgfwb01.jpg" id="img_down"/>
						</div>
						
						<script>
							$(function($){
								$("#img_down").on("mouseenter",function(e){
									var X=e.pageX,
										Y=e.pageY;
										var newimg="<img src='img/14410_lytgfwb01.jpg' />"
										$("#main_right_top_top").appendChild(newimg);
										
								})
							},jQuery)
						</script>
						
						<div id="main_right_top_bot">
							<img src="img/14410_lytgfwb05.jpg" />
							<img src="img/14410_lytgfwb02.jpg" />
						</div>
					</div>
					<div id="main_right_bot">
						<div id="main_right_bot_top">
							信息公开
						</div>
						<ul>
							<li><a href="#" style="padding-right: 4px;">依申请公开</a></li>
							<li><a href="#">公开指南</a></li>
							<li><a href="#">公开目录</a></li>
							<li><a href="#">相关规定</a></li>
						</ul>
					</div>
					
					<div id="main_right_bott" style="border: 1px solid #55B15A;height: 145px; margin-top: 2px;">
						<div id="main_right_bot_topp">
							应急管理
						</div>
						<ul>
							<li><a href="#">机构设置</a></li>
							<li><a href="#">预警信息</a></li>
							<li><a href="#">应急预案</a></li>
							<li><a href="#">我要报警</a></li>
						</ul>
					</div>
					
					<div id="main_right_bott2" style="border: 1px solid #55B15A;height: 145px; margin-top: 2px;">
						<div id="main_right_bot_topp2">
							政策法规
						</div>
						<ul>
							<li><a href="#">法律法规</a></li>
							<li><a href="#">政府规章</a></li>
							<li><a href="#">政策解读</a></li>
							<li><a href="#">标准规程</a></li>
						</ul>
					</div>
					
				</div>
				<div id="main_fenge">
					<div id="main_fenge_left">
						<img src="img/jilin1.png" />
					</div>
					<div id="main_fenge_right">
						<img src="img/jilin2.png" />
					</div>
					<div id="main_fenge_top">
						<img src="img/jilin3.png" />
					</div>
					<div id="main_fenge_bot">
						<img src="img/jilin4.png" />
					</div>
					<div id="main_fenge_center">
						<script>
							$(function($){
								$("#main_fenge_center ul li").on("mouseover",function(){
									$(this).find("div").show().parent("li").siblings().find("div").hide();
								})
								$("#main_fenge_center ul").on("mouseout",function(){
									$(this).find("div").hide();
								})
							},jQuery)
						</script>
						<ul>
							<li style="margin-left: 8px;">
								<a href="#"><img src="img/a_data_003/linqing_01.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_03.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_05.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_07.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_09.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_11.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_13.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_15.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_17.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_19.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_21.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_23.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_25.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_27.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_29.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_31.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_33.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_35.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_37.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_39.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_41.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_43.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_45.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_47.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_49.jpg"/></a>
								<div>
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_51.jpg"/></a>
								<div style="right: 0;">
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_53.jpg"/></a>
								<div style="right: 0;">
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
							<li>
								<a href="#"><img src="img/a_data_003/linqing_55.jpg"/></a>
								<div style="right: 0;">
									<p>
										造林绿化
									</p>
									<h3>
										<p>造林动态</p>
										<p>工程管理</p>
										<p>古树名木</p>
									</h3>
								</div>
							</li>
						</ul>
					</div>
				</div>
				
				<div id="main2">
					<div id="main2_left">
						<div id="main2_lefttop">
							<p>林业应用</p>
							<ul>
								<li><a href="#"><img src="img/W020140422535555083966.jpg"/></a></li>
								<li><a href="#"><img src="img/W020140422535558078900.jpg"/></a></li>
								<li><a href="#"><img src="img/W020140422535560432972.jpg"/></a></li>
								<li><a href="#"><img src="img/W020140422535561854912.jpg"/></a></li>
								<li><a href="#"><img src="img/W020140422535563303133.jpg"/></a></li>
								<li><a href="#"><img src="img/W020140422535565185784.jpg"/></a></li>
								<li><a href="#"><img src="img/W020141203399096392869.jpg"/></a></li>
							</ul>
						</div>
						<div id="main2_left1_bot">
								<p>林业在线</p>
								<div>
									<ul>
										<li style="background: url(img/left_bg3.png) no-repeat right center;"><a href="#">林情综述</a></li>
										
										<li><a href="#">林业规划</a></li>
										<li style="background: url(img/left_bg3.png) no-repeat right center;"><a href="#">林业年报</a></li>
										
										<li><a href="#">成就展厅</a></li>
										<li><a href="#">大事记</a></li>
									</ul>
									
								</div>
								<button>服务热线</button>
						</div>
						
					</div>
					
					<div id="main2_center">
						<div class="main2_center1">
							<h2><span>更多»</span>访谈专栏</h2>
							<dl>
								<dt><img src="img/W020150707392710483861.jpg"/></dt>
								<dd>
									<p>加快推进林地清收 确保一方山清水秀</p>
									<p>近年来，非法侵占林地地问题比较突出，对林业生态建设构成严重威胁，省里从建设生态大省的战略出发，在全省范围内深入开展了...</p>
								</dd>
							</dl>
							<ul>
								<li><a href="#">· 加大林地清收力度　推动依法治林</a></li>
								<li><a href="#">· 实施生态修复 促进绿色发展</a></li>
								<li><a href="#">· 高位推进 多措并举持续推进林地清收还林工作</a></li>
								<li><a href="#">· 既要金山银山 又要绿水青山</a></li>
								<li><a href="#">· 朝霞夕阳写真情</a></li>
							</ul>
						</div>
						
						<div class="main2_center1" style="float: right;">
							<h2><span>更多»</span>专题专栏</h2>
							<dl>
								<dt><img src="img/W020150508493121465045.jpg"/></dt>
								<dd>
									<p>绿色龙湾——与梦想同行</p>
									<p style="text-indent: 2em;">“吉林龙湾野生杜鹃花卉旅游节开幕式暨“IUCN自然（生态）保护地绿色名录揭牌仪式”将于5月15日上午9：30时，在龙湾群国...</p>
								</dd>
							</dl>
							<ul style="width: 160px;float: left;">
								<li><a href="#">· 守护绿色希望，寻找...</a></li>
								<li><a href="#">· "莫莫格杯"美丽中国...</a></li>
								<li><a href="#">· 林业走基层</a></li>
								<li><a href="#">· 全国第二届生态作品...</a></li>
								<li><a href="#">· 森林防火专题</a></li>
							</ul>
							<ul style="width: 160px;float: left;">
								<li><a href="#">· 吉林森林生态旅游</a></li>
								<li><a href="#">· 林业自然保护标识设...</a></li>
								<li><a href="#">· 党的群众路线教育实...</a></li>
								<li><a href="#">· 十八大专题</a></li>
								<li><a href="#">· 朝绿美吉林</a></li>
							</ul>
							
						</div>
						
						<div class="main2_center1" style="height: 174px;background-size:100%;">
							<h2><span>我要问正</span>网络问政</h2>
							<p style="width: 344px; height: 144px;font-size: 12px;
							padding: 4px 10px;box-sizing: border-box;line-height: 22px;">
								<span style="font-weight: 600;">沧海一粟：</span>
								 按照国家有关部署，把发展生态林业、民生林业作为吉林省林业推进生态文明建设的平台与载体。
								 发展生态林业、民生林业，既能改善生态、筑牢民生之基，
								 又能保障供给、满足民生之需，还能扩大就业、夯实民生之本，
								 体现了林业属性的多元化、也兼顾了社会需求的多样化，是符合中央对林业的...
							</p>
							
						</div>
						
						<div class="main2_center1" style="height: 174px;background-size:100%;">
							<h2><span>我要问正</span>技术咨询</h2>
							<ul>
								<li><span style="font-size: 12px;">[已回复]</span><a href="">动物保护咨询</a></li>
								<li><span style="font-size: 12px;">[已回复]</span><a href="">只想问问咱们省林业公安电话</a></li>
								<li><span style="font-size: 12px;">[已回复]</span><a href="">超限时采伐是否违法？</a></li>
								<li><span style="font-size: 12px;">[已回复]</span><a href="">收购、运输盗伐、滥伐的林木是否属于犯罪？</a></li>
								<li><span style="font-size: 12px;">[已回复]</span><a href="">为什么抓了几只树鸡被判了刑，而有人抓野鸡...</a></li>
							</ul>
							
						</div>
						
					</div>
					
					<div id="main2_right">
						<div class="main2_right">
							<p>网上直播</p>
							<div>
								<h2>
									<a href="#">重大活动</a>
									<a href="#">新闻发布</a>
								</h2>
								<dl>
									<dt><img src="img/duorentu.png"/></dt>
									<dd>
										<p style="color: red;"><span style="color: #767676;">时间：</span>2014年7月1日上午9时</p>
										<p><span style="color: #767676;">嘉宾：</span>隋忠诚、赵胜利、兰宏良</p>
										<p><span style="color: #767676;">标题：</span>吉林省关爱保...</p>
									</dd>
								</dl>
							</div>
						</div>
						<div class="main2_right" style="height: 182px;">
							<p>网上直播</p>
							<ul>
								<li><a href="#">· 退耕还林网</a></li>
								<li><a href="#">· 为了中华民族的永...</a></li>
								<li><a href="#">· 中国林业生物质能源网</a></li>
								<li><a href="#">· 吉林省“三北”防...</a></li>
								<li><a href="#">· 第三届全国林业信...</a></li>
							</ul>
						</div>
					</div>
					
				</div>
				
				<div id="gekai1">
					<div id="gekai1_left"><img src="img/jiekai1.png"/></div>
					<div id="gekai1_right">
						<ul>
							<li><a href="#">厅林业视频</a></li>
							<li><a href="#">地方林业视频</a></li>
							<li><a href="#">自然保护区</a></li>
							<li><a href="#">森林公园</a></li>
							<li><a href="#">湿地公园</a></li>
							<li><a href="#">林业产业</a></li>
							<li><a href="#">林业人物</a></li>
						</ul>
						<div>
							<div id="marquee1">	
								<?php
								$sql_6="select * from tupian_data where tuType=2";
								$result_6=mysql_query($sql_6);
								?>
								<ul>
									<?php
									while($rs_6=mysql_fetch_assoc($result_6)){
									?>
									<li><a href="#"><img src="../7-11/<?php echo $rs_6["tuUrl"]?>" /></a></li>
									<?php
									}
									?>
								</ul>
							</div>
							
							<script>
								
								$(function($){
									
									$("#marquee1").kxbdMarquee({direction:"left"},{isEqual:false});
									
								},jQuery)
								
							</script>
						</div>
						
					</div>
				</div>
				
				<div id="main4">
					<div id="main4_left">
						<div class="main4_left_top">
							<div>
								<p>办事大厅</p>
								<ul>
									<li style="margin-left: 4px;"><a href="#" class="on">办事指南</a></li>
									<li><a href="#">取件通知</a></li>
									<li><a href="#">办件情况查询</a></li>
									<li><a href="#" style="background: none;">行政审批结果公告</a></li>
								</ul>
								<div>
									
								</div>
							</div>
							<div style="float: right;margin-top: 29px;">
								
								<ul>
									<li style="margin-left: 4px;"><a href="#" class="on">下载中心</a></li>
								</ul>
								<div>
									
								</div>
							</div>
						</div>
						
						<div class="main4_left_bot">
							<div>
								<p>吉林省森林公园与国家保护区查询系统</p>
								<ul>
									<li><a href="#">白城市</a></li>
									<li><a href="#">松原市</a></li>
									<li><a href="#">长春市</a></li>
									<li><a href="#">四平市</a></li>
									<li><a href="#">吉林市</a></li>
									<li><a href="#">辽源市</a></li>
									<li><a href="#">通化市</a></li>
									<li><a href="#">延边州</a></li>
									<li><a href="#">白山市</a></li>
								</ul>
							</div>
							
							<div style="float: right;">
								<p>林业厅子站群</p>
								<div id="marquee2">
									<ul>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
										<li><a href="#">· 市县林业站群</a><a href="#">· 直属单位站群</a></li>
									</ul>
								</div>
								
								<script>
								
									$(function($){
										$("#marquee2").kxbdMarquee({direction:"up",isEqual:false});
									},jQuery)
								
								</script>
								
							</div>
							 
						</div>
						
					</div>
					
					<div id="main4_right">
						<div class="main4_right">
							<p>成就展示</p>
							<div>
								<a href="#">国有林区展厅</a>
								<a href="#">综合展厅</a>
								<a href="#">地方林业展厅</a>
								<a href="#">省直单位展厅</a>
								<a href="#">专题展厅</a>
							</div>
						</div>
						<div class="main4_right1">
							<h2><a href="#">信息采用量</a><a href="#">子站访问量</a>信息排行榜</h2>
							<div>
								<p><span style="float: left;margin-left: 34px;color: #BD383A;">热门部门</span>
									<span style="float: right;margin-right: 15px;">访问量</span></p>
								<ul>
									<li style="margin-top: 5px;background: url(img/1.jpg) 10px center no-repeat;"><a href="#">延边州林业管理局</a><span>111774</span></li>
									<li style="background: url(img/2.jpg) 10px center no-repeat;"><a href="#">舒兰市林业局</a><span>111774</span></li>
									<li style="background: url(img/3.jpg) 10px center no-repeat;"><a href="#">红石林业局</a><span>111774</span></li>
									<li style="background: url(img/4.jpg) 10px center no-repeat;"><a href="#">临江林业局</a><span>111774</span></li>
									<li style="background: url(img/5.jpg) 10px center no-repeat;"><a href="#">白河林业局</a><span>111774</span></li>
								</ul>
							</div>
							
						</div>
					</div>
					
				</div>
				
				<div id="gekai2">
					<div id="gekai2_left">
						<img src="img/gekai2.png" />
					</div>
					<div id="gekai2_right">
						<ul>
							<li><a href="#">林业好风光</a></li>
							<li><a href="#">林业好风光</a></li>
							<li><a href="#">林业好风光</a></li>
							<li><a href="#">林业好风光</a></li>
							<li><a href="#">林业好风光</a></li>
							<li><a href="#">林业好风光</a></li>
						</ul>
						<div>
							<ul>
								<li style="border-top:1px solid #528E57"><a href="#">林业好风</a></li>
								<li><a href="#">林业好风</a></li>
								<li><a href="#">林业好风</a></li>
							</ul>
							<div id="marquee3">
								<?php
								$sql_7="select * from tupian_data where tuType=2";
								$result_7=mysql_query($sql_7);
								?>
								<ul>
									<?php
									while($rs_7=mysql_fetch_assoc($result_7)){
									?>
									<li><a href="#"><img src="../7-11/<?php echo $rs_7["tuUrl"]?>" /></a></li>
									<?php
									}
									?>
								</ul>
							</div>
						</div>
						<script>
							$(function($){
								$("#marquee3").kxbdMarquee({direction:"left",isEqual:false});
							},jQuery)					
						</script>
					</div>
				</div>
				
				<div id="xuanxiang">
					<form>
						<select>
							<option>按时大大</option>
							<option>啊实打实的</option>
						</select>
						<select>
							<option>按时大大</option>
							<option>啊实打实的</option>
						</select>
					</form>
					<form>
						<select>
							<option>按时大大</option>
							<option>啊实打实的</option>
						</select>
						<select>
							<option>按时大大</option>
							<option>啊实打实的</option>
						</select>
					</form>
					<form>
						<select>
							<option>按时大大</option>
							<option>啊实打实的</option>
						</select>
						<select>
							<option>按时大大</option>
							<option>啊实打实的</option>
						</select>
					</form>
					<form>
						<select>
							<option>按时大大</option>
							<option>啊实打实的</option>
						</select>
						<select>
							<option>按时大大</option>
							<option>啊实打实的</option>
						</select>
					</form>
					<form>
						<select>
							<option>按时大大</option>
							<option>啊实打实的</option>
						</select>
						<select>
							<option>按时大大</option>
							<option>啊实打实的</option>
						</select>
					</form>
				</div>
				
			</section>
			
			<footer>
				<div id="f_top">
					<ul>
						<li><a href="#">网站地图</a></li>
						<li><a href="#">关于我们</a></li>
						<li><a href="#">网站通告</a></li>
						<li style="background: none;"><a href="#">联系我们</a></li>
					</ul>
				</div>
				<div id="f_bot">
					<p>主办单位：吉林省林业厅 承办维护：吉林省林业信息中心</p>
					<p>地址：长春市亚泰大街3698号 邮编：130022 </p>
					<p>电子邮箱：lyt@jl.gov.cn 联系电话：0431-88627583 吉icp备084512号</p>
					<p>吉大正元信息技术股份有限公司 技术支持</p>
				</div>
			</footer>
			
			
		</div>
		
	</body>
</html>
