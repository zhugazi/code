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
		<link rel="stylesheet" href="css/jigoustyle.css" />		
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
						<img src="img/dabanner.png" />
						
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
							
							<div class="main2_right" style="height: 182px;width: 148px;">
							<p style="width: 148px;">林业视频</p>
							<ul style="width: 148px;">
								<li><a href="#">· 退耕还林网</a></li>
								<li><a href="#">· 为了中华民族的永...</a></li>
								<li><a href="#">· 中国林业生物质能源网</a></li>
								<li><a href="#">· 吉林省“三北”防...</a></li>
								<li><a href="#">· 第三届全国林业信...</a></li>
							</ul>
							</div>
							
						<div id="main_right_bott2" style="border: 1px solid #55B15A;height: 145px;
						 		margin-top: 5px; width: 148px;">
							<div id="main_right_bot_topp2" style="width: 148px;font-size: 14px;">
								政策法规
							</div>
							<ul style="margin-left: 3px;">
								<li style="margin-top: 7px;"><a href="#">法律法规</a></li>
								<li><a href="#">政府规章</a></li>
								<li><a href="#">政策解读</a></li>
								<li><a href="#">标准规程</a></li>
							</ul>
						</div>
							
							<div id="main_left1_top">
								<p>办事指南</p>
								<div>
									<img src="img/left_i.png" />
								</div>
							</div>
							
						</div>
						
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
						
						</div>
						
					</div>
					
					<div id="main_center">
						
						<p>
							<span>当前位置:</span>
							<a href="###">首页</a>
							<a style="cursor:inherit;">></a>
							<a href="###">林业机构</a>
						</p>
						
						<div id="main_center_top">
							<h2>林业厅简介</h2>
							<p>吉林省林业厅是吉林省政府组成部门之一，依据《中共中央办公厅、国务院办公厅关于印发〈吉林省人民政府机构改革方案〉的通知》(厅字〔2008〕25号)，主要负责加强保护和合理开发全省森林、湿地、荒漠和陆生野生动植物资源,优化配置林业资源,促进林业可持续发展；加强全省湿地保护、荒漠化防治工作的组织、协调、指导和监督；加强组织指导全省林业改革和农村林业发展,依法维护农民经营林业合法权益等职责（详情查看更多介绍）。吉林省林业厅设有13个内设机构，办公地点：长春市南关区亚泰大街3698号，值班电话：0431-88626650。</p>
							<button></button>
							<div>
								<div style="margin-left: 10px;">
									<ul>
										<li><a href="">厅长</a><a href="">兰宏良</a></li>
										<li><a href="">副厅长</a><a href=""><span>孙光之</span><span>孙亚兰</span><span>王伟</span></a></li>
										<li><a href="">巡视员</a><a href=""></a></li>
										<li><a href="">副巡视员</a><a href=""></a></li>
										<li><a href="">总工程师</a><a href="">刘建华</a></li>
									</ul>
								</div>
								<div>
									<ul>
										<li style="margin-top: 36px;"><a href="">纪检组长</a><a href="">刘长璐</a></li>
										<li><a href="">森防副指挥</a><a href="">郭世林</a></li>
										
									</ul>
								</div>
							</div>
					
						</div>
						<div id="main_center_center">
							<h2>
								<span>机关处室</span>
								<span><a href="">更多》</a></span>
							</h2>
							<ul style="margin-left: 24px;margin-top: 5px;">
								<li><a href="">办公室</a></li>
								<li><a href="">造林绿化管理处(省绿化委员会办公室)</a></li>
								<li><a href="">野生动植物保护与自然保护区管理处</a></li>
								<li><a href="">发展规划处</a></li>
								<li><a href="">科技产业处</a></li>								
							</ul>
							<ul style="margin-top: 5px;">
								<li><a href="">办公室</a></li>
								<li><a href="">造林绿化管理处(省绿化委员会办公室)</a></li>
								<li><a href="">野生动植物保护与自然保护区管理处</a></li>
								<li><a href="">发展规划处</a></li>
								<li><a href="">科技产业处</a></li>									
							</ul>
						</div>
						
						<div id="main_center_center">
							<h2>
								<span>事业单位</span>
								<span><a href="">更多》</a></span>
							</h2>
							<ul style="margin-left: 24px;margin-top: 5px;">
								<li><a href="">办公室</a></li>
								<li><a href="">造林绿化管理处(省绿化委员会办公室)</a></li>
								<li><a href="">野生动植物保护与自然保护区管理处</a></li>
								<li><a href="">发展规划处</a></li>
								<li><a href="">科技产业处</a></li>								
							</ul>
							<ul style="margin-top: 5px;">
								<li><a href="">办公室</a></li>
								<li><a href="">造林绿化管理处(省绿化委员会办公室)</a></li>
								<li><a href="">野生动植物保护与自然保护区管理处</a></li>
								<li><a href="">发展规划处</a></li>
								<li><a href="">科技产业处</a></li>									
							</ul>
						</div>
						
						<div id="main_center_center">
							<h2>
								<span>国有林业局</span>
								<span><a href="">更多》</a></span>
							</h2>
							<ul style="margin-left: 24px;margin-top: 5px;">
								<li><a href="">办公室</a></li>
								<li><a href="">造林绿化管理处(省绿化委员会办公室)</a></li>
								<li><a href="">野生动植物保护与自然保护区管理处</a></li>
								<li><a href="">发展规划处</a></li>
								<li><a href="">科技产业处</a></li>								
							</ul>
							<ul style="margin-top: 5px;">
								<li><a href="">办公室</a></li>
								<li><a href="">造林绿化管理处(省绿化委员会办公室)</a></li>
								<li><a href="">野生动植物保护与自然保护区管理处</a></li>
								<li><a href="">发展规划处</a></li>
								<li><a href="">科技产业处</a></li>									
							</ul>
						</div>
						
						<div id="main_center_center">
							<h2>
								<span>市州林业局</span>
								<span><a href="">更多》</a></span>
							</h2>
							<ul style="margin-left: 24px;margin-top: 5px;">
								<li><a href="">办公室</a></li>
								<li><a href="">造林绿化管理处(省绿化委员会办公室)</a></li>
								<li><a href="">野生动植物保护与自然保护区管理处</a></li>
								<li><a href="">发展规划处</a></li>
								<li><a href="">科技产业处</a></li>								
							</ul>
							<ul style="margin-top: 5px;">
								<li><a href="">办公室</a></li>
								<li><a href="">造林绿化管理处(省绿化委员会办公室)</a></li>
								<li><a href="">野生动植物保护与自然保护区管理处</a></li>
								<li><a href="">发展规划处</a></li>
								<li><a href="">科技产业处</a></li>									
							</ul>
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
							<p>推荐链接</p>
							<ul>
								<li><a href="#">· 退耕还林网</a></li>
								<li><a href="#">· 为了中华民族的永...</a></li>
								<li><a href="#">· 中国林业生物质能源网</a></li>
								<li><a href="#">· 吉林省“三北”防...</a></li>
								<li><a href="#">· 第三届全国林业信...</a></li>
							</ul>
						</div>
						<div class="main_right_gun">
							<h2>吉林林业</h2>
							<div id="scroll">
								<ul>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
									<li><a href="">造林绿化</a></li>
								</ul>
							</div>
						</div>
						
					</div>
					
				</div>
				
			</section>
			
			<footer style="clear: both;">
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
