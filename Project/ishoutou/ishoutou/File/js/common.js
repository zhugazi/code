// JavaScript Document
function TabMove(name,cursel,n){
	n = n || 50;
	for (i=1;i<=n;i++){
		var menu=document.getElementById(name+"Tab"+i);
		var con=document.getElementById(name+"_"+i);
		menu.className=i==cursel?"current":"";
		con.style.display=i==cursel?"block":"none";
		if(i==cursel){
			$(".companyInfoList .companyTit").removeClass("on").fadeIn(600).find("em").show();
			$(".companyInfoList .companyTit").find(".back").hide();
			$(".companyInfoList .companyTit").parents(".companyInfoList").find(".companyCon").fadeOut(600);
			$(".companyInfoList .companyTit").parents(".companyInfoList").find(".pages").show();
		}
	}
	//$('#rank_'+i).hide();
	//$('#rank_'+cursel).show();
}
function goTop(){
	$("html,body").animate({scrollTop:0},500);
}
$(function(){

	$(".tenderShowBox .tenderBox").hover(
		function(){
			$(this).find(".tenderCon").addClass("over").parent(".tenderBox").find(".tenderTips").fadeIn();
		},
		function(){
			$(this).find(".tenderCon").removeClass("over").parent(".tenderBox").find(".tenderTips").fadeOut();
		}
	);
	$(".index_codeBox .index_showCode").hover(
		function(){
			$(this).find(".index_code").css("display","block");
		},
		function(){
			$(this).find(".index_code").css("display","none");

		}
	);
	$(".postCardBox ul li").hover(
		function(){
			$(this).addClass("over");
			$(this).find(".videoIcon").show().stop().animate({paddingTop:"40px"},200);
		},
		function(){
			$(this).removeClass("over");
			$(this).find(".videoIcon").hide().stop().animate({paddingTop:"0px"},200);
		}
	);
	$(".partnerTix li a").hover(
		function(){
			$(this).addClass("over");
			$(this).parents(".partnerBox").find(".eventMain").addClass("on");
		},
		function(){
			$(this).removeClass("over");
			$(this).parents(".partnerBox").find(".eventMain").removeClass("on");
		}
	);
	$(".partnerBox .eventMain").hover(
		function(){
			$(this).addClass("on");
			$(this).parent(".partnerBox").find(".partnerBar ul li a").addClass("over");
		},
		function(){
			$(this).removeClass("on");
			$(this).parent(".partnerBox").find(".partnerBar ul li a").removeClass("over");
		}
	);
	$(".followUs span .wb").hover(
		function(){
			$(this).find("img").css("display","block");
		},
		function(){
			$(this).find("img").css("display","none");
		}
	);
	$(".followUs span .wx").hover(
		function(){
			$(this).find("img").css("display","block");
		},
		function(){
			$(this).find("img").css("display","none");
		}
	);
	$(".add_activity li").hover(
		function(){
			$(this).addClass("over");
		},
		function(){
			$(this).removeClass("over");
		}
	);
	$(".staggererCon li").hover(
		function(){
			$(this).addClass("over");
			$(this).find("p").show();
		},
		function(){
			$(this).removeClass("over");
			$(this).find("p").hide();
		}
	);
	$(function() {
		$(".award").mouseover(function(){
			$(this).find(".biaoInfo").show();
		});
		$(".award").mouseout(function(){
			$(this).find(".biaoInfo").hide();
		});
	})

	$(function() {
		$(".new_wechat").mouseover(function(){
			$(this).parents("tr").addClass("over");
			$(this).find(".sweep_wechat").show();
		});
		$(".new_wechat").mouseout(function(){
			$(this).parents("tr").removeClass("over");
			$(this).find(".sweep_wechat").hide();
		});
	})
	$(function() {
		$(".photoWallBox a").mouseover(function(){
			$(this).find("i").hide();
		});
		$(".photoWallBox a").mouseout(function(){
			$(this).find("i").show();
		});
	})

	//��վ����
	$(".companyInfoList .companyTit").on("click",function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on").parents(".companyInfoList").find(".companyTit").fadeIn(600).find("em").show();
			$(this).find("em").show();
			$(this).find(".releaseTime").hide();
			$(this).find(".back").hide();
			$(this).parents(".companyInfoList").find(".companyCon").fadeOut(200);
			$(this).parents(".companyInfoList").find(".pages").show();
			
		}else{
			$(this).addClass("on").siblings('.companyTit').fadeOut(200);
			$(this).find("em").hide();
			$(this).find(".releaseTime").show();
			$(this).find(".back").show();
			$(this).next('.companyCon').fadeIn(600).siblings('.companyCon').fadeOut(200);
			$(this).parents(".companyInfoList").find(".pages").hide();
		}
	})

	//��������
	$(".helpCenterMain dt").click(function(){
		$(this).hide().siblings("dt").slideDown();
		$(this).next("dd").slideDown().siblings("dd").slideUp();
	})

	//��ѡ
	$("#chk1 label").click(function(){
		//����labelѡ��
		$("#chk1 label").find("span").removeClass("selected");
		$("#chk1 label").find("input").attr('checkbox','false');

		//��ǰlabelѡ��
		$(this).find("span").addClass("selected");
		$(this).find("input").attr('checkbox','true');
	});
	$("#chk2 label").click(function(){
		$("#chk2 label").find("span").removeClass("selected");
		$("#chk2 label").find("input").attr('checkbox','false');
		$(this).find("span").addClass("selected");
		$(this).find("input").attr('checkbox','true');
	});
	$("#chk3 label").click(function(){
		$("#chk3 label").find("span").removeClass("selected");
		$("#chk3 label").find("input").attr('checkbox','false');
		$(this).find("span").addClass("selected");
		$(this).find("input").attr('checkbox','true');
	});
	$("#chk4 label").click(function(){
		$("#chk4 label").find("span").removeClass("selected");
		$("#chk4 label").find("input").attr('checkbox','false');
		$(this).find("span").addClass("selected");
		$(this).find("input").attr('checkbox','true');
	});
	$("#chk5 label").click(function(){
		$("#chk5 label").find("span").removeClass("selected");
		$("#chk5 label").find("input").attr('checkbox','false');
		$(this).find("span").addClass("selected");
		$(this).find("input").attr('checkbox','true');
		if($(".chk5Tit1").hasClass("selected")){
			$(this).parents(".CA_Main").find(".chk5Con1").show();
			$(this).parents(".CA_Main").find(".chk5Con2").hide();
		}
		if($(".chk5Tit2").hasClass("selected")){
			$(this).parents(".CA_Main").find(".chk5Con2").show();
			$(this).parents(".CA_Main").find(".chk5Con1").hide();
		}
	});
	$(".fpwBox p label span,.loginArea p label span").toggle(
		function () {
			$(this).removeClass("selected");
		},
		function () {
			$(this).addClass("selected");
		}
	)
	$(".chk5Tit1.selected").click(function(){
		$(this).parents(".CA_show").next(".chk5Con1").show();

	})
	//�Զ�Ͷ��
	$(".chooseAll .lan_border,.controls").click(function(){
		$(this).parents(".chooseAll").find("span").addClass("selected");
		if($(this).parents(".chooseAll").find("span").hasClass("selected")){
			$(".chooseAll .choose").click(function(){
				$(this).parents(".chooseAll").find("span").removeClass("selected");
			})
		}else{
			$(".chooseAll .choose").click(function(){
				$(this).parents(".chooseAll").find("span").addClass("selected");
			})
		}
	});
	/*
	 $(".chooseAll label").toggle(
	 function(){
	 $(this).find("span").addClass("selected");
	 $(this).find("input").attr('checkbox','true');
	 },
	 function(){
	 $(this).find("span").removeClass("selected");
	 $(this).find("input").attr('checkbox','false');
	 })*/

	$(".personal_infoTop .xgBtn").click(function(){
		$(this).parents(".personal_infoTop").find(".amendConBox_write").hide();
		$(this).parents(".personal_infoTop").find(".amendConBox").show();
		$(this).hide();
	})
	$(".fillInfoBox .xgBtn").click(function(){
		$(this).parents(".fillInfoBox").find(".amendConBox_write").hide();
		$(this).parents(".fillInfoBox").find(".amendConBox").show();
		$(this).hide();
	})
	//��ʾ
	$(".sendCode").click(function(){
		$(".alertContent").fadeIn().delay(2000).fadeOut(300);
	});
	//������֤��
	$(".sendCode").click(function(){
		$(this).next(".gainCode").show();
	})
	$(".getCode").click(function(){
		$("#getCode").hide();
		$("#getCodeTime").show().addClass("hui");

	});
	$(".inpStyle").click(function(){
		$(this).addClass("selected");
	})
	$(".inpStyle").blur(function(){
		$(this).removeClass("selected");
	})

	//��֤����
	$(".CA_stepBox a,.invite_stepBox a").mouseover(function(){
		$(this).addClass("over");
		$(this).find("i").show();
	});
	$(".CA_stepBox a,.invite_stepBox a").mouseout(function(){
		$(this).removeClass("over");
		$(this).find("i").hide();
	});

	//时间轴
	$('.course_nr li').hover(function(){
		$(this).find('.shiji').slideDown(600);
	},function(){
		$(this).find('.shiji').slideUp(400);
	});

	$(".guide_box6 ul li").hover(
		function(){
			$(this).find("p").stop().animate({height:"240px"},400);
			$(this).find("p em").stop().animate({paddingTop:"0px"},400);
		},
		function(){
			$(this).find("p").stop().animate({height:"50px"},400);
			$(this).find("p em").stop().animate({paddingTop:"0px"},400);
		}
	);

	$(".CA_stepBox .CA_step1").click(function(){
		$(this).parents(".stpBox").find(".stp1").show();
		$(this).css("background","#007eab");
		$(".CA_step3").css("background","#fff");
		$(this).parents(".stpBox").find(".stp3").hide();
	})
	$(".CA_stepBox .CA_step3").click(function(){
		$(this).parents(".stpBox").find(".stp3").show();
		$(this).css("background","#007eab");
		$(".CA_step1").css("background","#fff");
		$(this).parents(".stpBox").find(".stp1").hide();
	})
	$(".invite_stepBox .invite_step1").click(function(){
		$(this).parents(".personal_dataMain").find(".invite1").show();
		$(this).css("background","#007eab");
		$(".invite_step2").css("background","#fff");
		$(this).parents(".personal_dataMain").find(".invite2").hide();
	})
	$(".invite_stepBox .invite_step2").click(function(){
		$(this).parents(".personal_dataMain").find(".invite2").show();
		$(this).css("background","#007eab");
		$(".invite_step1").css("background","#fff");
		$(this).parents(".personal_dataMain").find(".invite1").hide();
	})
	$(".invite_stepBox .zdtb_step1").click(function(){
		$(this).parents(".personal_dataMain").find(".invite3").show();
		$(this).css("background","#007eab");
		$(".zdtb_step2").css("background","#fff");
		$(this).parents(".personal_dataMain").find(".invite4").hide();
	})
	$(".invite_stepBox .zdtb_step2").click(function(){
		$(this).parents(".personal_dataMain").find(".invite4").show();
		$(this).css("background","#007eab");
		$(".zdtb_step1").css("background","#fff");
		$(this).parents(".personal_dataMain").find(".invite3").hide();
	})
	/**************/
	$('.jobsList i').click(function(){
		$(this).toggleClass("fold").parent(".jobsList").find(".jobsConBox").slideToggle(600);


		if($(this).hasClass("fold")){
			$(this).parent(".jobsList").find(".jobsTitBox .jobsTit").slideUp(600);
			$(this).parent(".jobsList").find(".jobsTitBox .jobsDec").slideUp(600);
		}else {
			$(this).parent(".jobsList").find(".jobsTitBox .jobsTit").slideDown(600);
			$(this).parent(".jobsList").find(".jobsTitBox .jobsDec").slideDown(600);
		}
	});
	//技术保障
	$(".baseInfoMain_boxtu h3").on("mouseover",function(){
		$(this).addClass("on").siblings("h3").removeClass("on");
		$(this).next().addClass("on").siblings("p").removeClass("on");
	})
	//右侧QQ客服


});

//������  begin
$(function(){
	var Video=$(".videoCon>div,.videoCon>em"),
		col=$(".videoListBox_video>a"),
		thistext="";
	var bgstr="<div class='banbg'></div>";
	$(".videoCon").append(bgstr);
	$(".videoCon").live("mouseover",function(){
		$(this).find("div.banbg").show();
		if($(this).hasClass("on")){
			$(this).css("box-shadow","none");
		}else{
			$(this).css("box-shadow","2px 2px 2px #999");
		}
	}).live("mouseout",function(){
		$(this).find("div.banbg").hide();
		$(this).css("box-shadow","none");
	})
	$(".anchor_tab>li").on("click",function(){
		var tabIndex=$(this).index();
		$(this).find("a").addClass("gColor").parent().siblings().find("a").removeClass("gColor");
		$(".videoListBox>div").eq(tabIndex).addClass("videoListBox_box_show").siblings().removeClass("videoListBox_box_show");
	})
	
	Video.live("click",function(){
		var DIVindex=$(this).parent().parent().index(),
			thit=$(this).parent().parent(),
			that=$(this).parent(),
			W=thit.width(),
			ospan=$(".videoListBox_video_cont>span"),
			oDiv=$(".videoListBox_video_cont"),
			yincang=that.next();
			thistext=that.html();
		that.addClass("on");
		var ObjVideo="<object class='Object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540001'"+
			"codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='100%' height='450'>"+
			"<param name='movie' value='http://player.youku.com/player.php/sid/XMTMyMzk4MzMyOA==/v.swf'>"+
			"<param name='quality' value='high'>"+
			"<param name='allowFullScreen' value='true' />"+
			"<param name='wmode' value='transparent'>"+
			"<embed src='http://player.youku.com/player.php/sid/XMTMyMzk4MzMyOA==/v.swf' allowFullScreen='true' wmode='opaque' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='100%' height='450'></embed>"+
			"</object>";
		var newtext="<div class='newText' style='background:#fbfbfb'><h3>首期名茶交易产品正式挂牌金马甲</h3>"+
			"<div class='Iscroll'>"+
			"<p>时至六月，京城已彻底进入火辣的盛夏，若能在闲暇之余品上一杯甘醇怡人的好茶，定能一扫酷热与烦躁，身心得到放空和宁静。2015年6月18日下午，一场弥漫着茶香与古乐的发布会——金马甲高端商品交易平台名茶交易启动新闻发布会，在丰汇时代大厦三层交易大厅隆重举行，包括北京金马甲产权网络交易有限公司副总裁陈慧明、名茶运营合作方盈富信展（北京）资产管理有限公司总裁何思博、挂牌方云南昌泰茶业集团董事长陈卫等在内的相关领导悉数到场，共襄盛举。会上北京金马甲产权网络交易有限公司宣布由云南昌泰茶业集团昌泰茶行有限责任公司出品的首期普洱茶交易产品正式挂牌金马甲高端商品交易平台，挂牌总金额为2400万元。</p>"+
			"<p>据记者了解，本次金马甲高端商品交易平台正式挂牌的首期普洱茶交易产品分为昌泰生馨普洱生茶和昌泰熟韵普洱熟茶两类，共计发行20吨（生茶、熟茶各10吨），以公开挂牌交易的形式面向金马甲高端商品交易用户进行销售，仅用时短短4天时间即全数售罄。购买到本期普洱茶交易产品的用户可以在交易期内通过金马甲高端商品交易平台自由买卖或提货消费。</p>"+
			"<p>北京金马甲产权网络交易有限公司副总裁陈慧明在发布会上表示，基于当前社会投资、消费环境的改变，本次普洱茶交易产品从设计上突破了过去金马甲高端商品交易平台以白酒为主导的产品结构，不仅满足各类名茶收藏、投资爱好者的需求，更显示了金马甲对这一交易产品的信心。</p>"+
			"<p>云南昌泰茶业集团董事长陈卫表示：近年来，在狠抓质量、拓展销路的同时，昌泰茶业集团也一直在思考并尝试可以与金融市场相结合的创新模式，不断需求突破与创新，努力创造传统行业的新价值。正是看重了金马甲先进的互联网交易经验和技术实力，昌泰茶业集团很荣幸成为行业内第一个“吃螃蟹”的企业。此次昌泰茶业集团出品的普洱茶可以顺利挂牌金马甲这样响当当的网络交易平台，意义非同凡响。这不仅是对昌泰茶业集团的肯定，也有助于昌泰茶业集团拓宽市场渠道，提高企业与品牌的知名度，进一步打开了高端茶叶的市场。</p>"+
			"<p>运营合作方盈富信展（北京）资产管理有限公司总裁何思博表示：此次普洱茶交易产品挂牌还将具有更深远的意义。普洱茶作为中国茶叶精品正处在发展的上升期，随着时间的推移将逐步成长为高端茶叶中的明珠，其时间的不可复制性决定了它的内在升值是具有物质基础的，同时市场和消费者对日益增长的健康需求也让普洱茶的价值不断突显，通过本次在金马甲高端商品平台的普</p>"+
			"</div>"+
			"<span>2015年7月2日</span></div>";
		thit.css({"zIndex":"500"});
		
		if(DIVindex <= 1){
			if(that.hasClass("aboutUsConVt")){
				$('html,body').animate({scrollTop:'616px'},300,function(){
					hou();
					that.next().find("h3").css({"padding-left":"20px","color":"#007cad"}).next().css({"padding":"10px 20px"});
				});
			}else if(that.hasClass("aboutUsConVb")){
				$('html,body').animate({scrollTop:'1749px'},300,function(){
					hou();
					that.next().find("h3").css({"padding-left":"20px","color":"#007cad"}).next().css({"padding":"10px 20px"});
				});
			}else{
				$('html,body').animate({scrollTop:'690px'},300,function(){
					hou();
					that.next().find("h3").css({"padding-left":"20px","color":"#007cad"}).next().css({"padding":"10px 20px"});
				});
			}
		}else if(DIVindex <= 3){
			$('html,body').animate({scrollTop:'1210px'},300,function(){
				hou();
				that.next().find("h3").css({"padding-left":"20px","color":"#007cad"}).next().css({"padding":"10px 20px"});
			});
		}else{
			$('html,body').animate({scrollTop:'1720px'},300,function(){
				hou();
				that.next().find("h3").css({"padding-left":"20px","color":"#007cad"}).next().css({"padding":"10px 20px"});
			});
		}
		function hou(){
			$(".indexBox_zhezhao").css("display","block").animate({
				"opacity":"0.9"
			});
			if(DIVindex%2==0){
				if(that.hasClass("aboutUsConV")){
					thit.animate({"height":"100%","margin-left":"87px","width":"940px"}).parents(".videoListBox").css("height","710px")
				}else if(that.hasClass("aboutUsConV2")){
					thit.animate({"height":"100%","width":"940px"}).parents(".videoListBox").css("height","710px")
				}else{
					thit.animate({
						"margin-left":"87px",
						"width":"940px",
						"height":"647px"
					},300)
				}
				if(!that.hasClass("videoCon_Iocn")){
					yincang.css("display","none");
					that.html(newtext);
				}else{
					that.html(ObjVideo);
					thit.find("p").css({"height":"150px","overflow-x":"hidden"})
				}
				that.animate({
					"width":"100%"
				})
				
			}else{
				if(that.hasClass("aboutUsConV")){
					thit.animate({"height":"100%","margin-left":"87px","width":"940px"}).parents(".videoListBox").css("height","682px")
				}else if(that.hasClass("aboutUsConV2")){
					thit.animate({"height":"100%","margin-right":"87px","width":"940px"}).parents(".videoListBox").css("height","710px")
				}else if(!(that.hasClass("videoCon_Iocn"))){
					yincang.css("display","none");
					that.html(newtext);
					thit.animate({
						"margin-right":"87px",
						"width":"940px",
						"height":"647px"
					},300)
				
				}else{
					thit.animate({
						"margin-right":"87px",
						"width":"940px",
						"height":"524px"
					},300)
					thit.find("p").css({"height":"150px","overflow-x":"hidden"})
					that.html(ObjVideo);
				}
				
			}
			$(".Special .videoListBox_box .videoListBox_video").css("background","#fbfbfb").find(".videoListBox_video_cont").css("background","#fbfbfb");
			$(".videoListBox_video_cont span em.line").css("display","none");
			thit.find("a").css("display","block");
			ospan.css({"bottom":"10px","right":"25px"});
			oDiv.css({"border":"none"});
			that.animate({
				"width":"100%",
				"height":"450px"
			},30).css({"border":"0"});
			that.next().css({"height":"240px"});
		}
		
	})
	
	col.live("click",function(){
		var thit=$(this).parent(),
			Video=thit.find(".videoCon"),
			DIVindex=$(this).parent().index(),
			that=$(this).next(),
			yincang=that.next(),
			ospan=$(".videoListBox_video_cont>span"),
			oDiv=$(".videoListBox_video_cont");
		var ObjVideo="<img src='http://www.ishoutou.com/UF/Uploads/image/20151028/1446020980189298.jpg' width='514' height='300' alt=''/>"+
			"<em class='vIcon'></em>";
		var ObjVideo2="<img src='http://www.ishoutou.com/UF/Uploads/image/20151028/1446020980189298.jpg' width='514' height='300' alt=''/>";
		that.removeClass("on");
		if(DIVindex%2==0){
			thit.animate({
				"margin-left":"0px",
				"width":"490px",
				"height":"276px"
			},100)
			Video.animate({
				"height":"276px"
			},100)			
			if(that.hasClass("videoCon_Iocn")){
				that.html(thistext);
			}else{
				that.html(thistext);
			}
			
		}else{
			thit.animate({
				"margin-right":"0px",
				"width":"490px",
				"height":"276px"
			},100)
			Video.animate({
				"height":"276px"
			},100)
			if(that.hasClass("videoCon_Iocn")){
				that.html(thistext);
			}else{
				that.html(thistext);
			}
		}
		yincang.css("display","block");
		yincang.find("p").css("height","108px");
		thit.parents(".c2pVideo").css("height","480px");
		thit.css({"zIndex":"10"});
		ospan.css({"bottom":"-10px","right":"0px"});
		oDiv.css({"height":"145px"});
		$(this).next().next().find("h3").css({"display":"block"}).next().css({"padding":"0"});
		$(".indexBox_zhezhao").animate({
			"opacity":"0"
		}).css("display","none");
		$(this).css({"display":"none"});
		that.css("border","12px solid #fff");
		$(".Special .videoListBox_box .videoListBox_video").css("background","none").find(".videoListBox_video_cont").css({"background":"none","border-bottom":"0"});
		$(".videoListBox_video_cont span em.line").css({"display":"block"});
	})
})

//----------������   end

/*探访邮币仓库B*/
$(function(){
	
	var bgstr="<div class='banbg'></div>";
	$(".postCard_box_videobox_left").append(bgstr);
	$(".postCard_box_videobox_left").live("mouseover",function(){
		$(this).next().find("h3>a").css("color","#007eab");
		$(this).find("div.banbg").show();
		if($(this).hasClass("on")){
			$(this).css("box-shadow","none");
		}else{
			$(this).css("box-shadow","2px 2px 2px #999");
		}
	}).live("mouseout",function(){
		$(this).next().find("h3>a").css("color","#272727");
		$(this).find("div.banbg").hide();
		$(this).css("box-shadow","none");
	})
	var Video=$(".postCard_box_videobox_left>em,.postCard_box_videobox_left>div.banbg"),
		col=$(".postCard_box_videobox>a"),
		thistext="";
	Video.live("click",function(){
		var that=$(this).parent();
		var ObjVideo="<object class='Object' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540001'"+
			"codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='100%' height='450'>"+
			"<param name='movie' value='http://player.youku.com/player.php/sid/XMTMyMzk4MzMyOA==/v.swf'>"+
			"<param name='quality' value='high'>"+
			"<param name='allowFullScreen' value='true' />"+
			"<param name='wmode' value='transparent'>"+
			"<embed src='http://player.youku.com/player.php/sid/XMTMyMzk4MzMyOA==/v.swf' allowFullScreen='true' wmode='opaque' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='100%' height='450'></embed>"+
			"</object>";
		thistext=that.html();
		that.addClass("on");
		that.parent().css({"zIndex":"500"});
		that.css("border","0");
		if(that.hasClass("postCard_box_videobox_left2")){
			$('html,body').animate({scrollTop:'777px'},300,function(){
				that.parent().animate({
					"margin-right":"80px",
					"margin-top":"-180px",
					"width":"940px",
					"height":"647px"
				},300)
				hou();
			})
		}else if(that.hasClass("postCard_box_videobox_left3")){
			$('html,body').animate({scrollTop:'1160px'},300,function(){
				hou();
			})
		}else{
			$('html,body').animate({scrollTop:'389px'},300,function(){
				hou();
			})
		}
		
		function hou(){
			$(".indexBox_zhezhao").css("display","block").animate({
				"opacity":"0.9"
			});
			that.animate({
				"width":"940px",
				"height":"450px"
			})
			that.parent().animate({
				"margin-left":"87px",
				"margin-top":"-180px",
				"width":"940px",
				"height":"647px"
			},function(){
				that.prev().css({"display":"block","margin-left":"-60px","margin-top":"5px","zIndex":"501"});
				that.parent().css("background","#fff")
			})
			that.css({"box-shadow":"none"});
			that.next().addClass("on");
			that.next().animate({
				"width":"100%",
				"height":"320px",
				"margin-top":"390px",
				"float":"none",
				"clear":"both"
			}).find("p").animate({
				"width":"900px",
				"height":"150px"
			})
			that.html(ObjVideo);
		}
	})
	
	col.live("click",function(){
		var thit=$(this).next().next(),
			that=$(this).next();
		var ObjVideo="<img src='http://www.ishoutou.com/UF/Uploads/image/20151028/1446020980189298.jpg' width='514' height='300' alt=''/>"+
			"<em class='vIcon'></em>";
			thit.removeClass("on");
			if(that.hasClass("postCard_box_videobox_left2")){
				that.parent().animate({
					"margin-right":"0px",
					"margin-left":"0",
					"margin-top":"0px",
					"width":"1100px",
					"height":"303px"
				})
				that.animate({
					"width":"490px",
					"height":"276px"
				},100)
			}else{
				that.parent().animate({
					"margin-right":"0px",
					"margin-left":"0",
					"margin-top":"0px",
					"width":"1100px",
					"height":"303px"
				})
				that.animate({
					"width":"490px",
					"height":"276px"
				},100)
			}
			thit.animate({
				"width":"490px",
				"height":"276px",
				"margin-top":"0"
			}).find("p").animate({
				"width":"100%",
				"height":"auto"
			})
			that.html(thistext);
			that.parent().css({"zIndex":"10","background":"#fbfbfb"});
			$(".indexBox_zhezhao").animate({
				"opacity":"0"
			}).css("display","none");
			that.css({"border":"12px solid #fff"}).removeClass("on");
			$(this).css({"display":"none","margin-left":"-55px","margin-top":"5px","zIndex":"1"});
	})
})
/*探访邮币仓库E*/
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

//ͨ�õ����㴥������ begin
function showPop(id,className){
	$(".bgIframe").css({
		"filter":"alpha(opacity=0)",
		"opacity":"0"
	});
	$(".bgDiv").css({
		"filter":"alpha(opacity=50)",
		"opacity":"0.5"
	});
	$(id).addClass(className).fadeIn(10,function(){
		var	popHeight = $(''+id+'.popWrap,'+id+' .popWrap_sub,'+id+' .popIframe');
		var h=$(''+id+' .popBox').height();//��ȡ�߶�
		popHeight.height(h+12);
		$(".bgIframe,.bgDiv").fadeIn(200);
	});
	return false;
}

//�رյ��㴰��
function hidePop(id,className){
	$(''+id+',.bgIframe,.bgDiv').fadeOut(function(){
		$(this).removeClass(className);
		$(''+id+'.popWrap,'+id+' .popWrap_sub,'+id+' .popIframe').height('');
	})
}
//---------- end

//理财滚动效果
$(function(){
	var i=0,j=0,
		oul=$(".tabpic_box ul"),
		liwidth=$(".tabpic_box ul li").width(),
		lilenght=$(".tabpic_box ul li").length,
		Zleft=2*liwidth-40,
		oul2=$(".collectTopPic_boxpic ul"),
		liwidth2=$(".collectTopPic_boxpic ul li").width(),
		lilenght2=$(".collectTopPic_boxpic ul li").length;
	oul.css("width",lilenght*liwidth);
	oul2.css("width",lilenght2*liwidth2);
	$(".tabpic_left").on("click",function(){
		LR("left",oul);
	})
	$(".tabpic_right").on("click",function(){
		LR("right",oul);
	})
	$(".collectTopPic_box_left").on("click",function(){
		LR2("left",oul2);
	})
	$(".collectTopPic_box_right").on("click",function(){
		LR2("right",oul2);
	})
	$(".collectTopPic_boxpic ul li").on("mouseover",function(){
		var index=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".collectTopPic ul li").eq(index).addClass("on").siblings().removeClass("on");
	})
	function LR(direction,obj){
		if(direction=="left"){
			i--;
			if(i<=0){
				i=0;
				obj.animate({"left":-(i*liwidth)});
				return false;
			}
			obj.animate({"left":-(i*liwidth)});
		}else if(direction=="right"){
			i++;
			if(i>2){
				i=2;
				obj.animate({"left":-(i*liwidth)});
				return false;
			}
			obj.animate({"left":-(i*liwidth)});
		}
	}
	function LR2(direction,obj){
		if(direction=="left"){
			j--;
			if(j<=0){
				j=0;
				obj.animate({"left":-(j*liwidth2)});
				return false;
			}
			obj.animate({"left":-(j*liwidth2)});
		}else if(direction=="right"){
			j++;
			if(j>2){
				j=2;
				obj.animate({"left":-(j*liwidth2)});
				return false;
			}
			obj.animate({"left":-(j*liwidth2)});
		}
	}
})












