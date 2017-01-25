$(function(){
	
	$(".checked").on("click",function(){
		if($(this).hasClass("checked")){
			$(this).removeClass("checked");
		}else{
			$(this).addClass("checked");
		}
	})
	
	$(".guide_reg_box input").on("focus",function(){
		$(this).css({"border":"1px solid #52acca"});
	}).on("blur",function(){
		$(this).css("border","1px solid #d4d4d4").parent().next().css("visibility","visible");
		var thisV=$(this).val(),
			imgSrc="images/zhuolu_panduan_03.jpg",
			reg=/^[0-9_a-zA-Z]{6,16}$/,
			Phonereg=/^1[3,5,8]{1}[0-9]{9}$/,
			that=$(this);
		if(that.hasClass("phone_num")){
			that.parent().css("margin-bottom","0px");
			if(thisV.replace(/\s+/g,"")==""){
				that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 手机号不可以为空");
			}else if(!(Phonereg.test(thisV))){
				that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 手机号格式不正确");
			}else{
				$.ajax({
					type:"get",
					url:"js/yanzheng.json",
					async:true,
					success:function(data){
						$.each(data, function(i,k) {
							if(thisV==k.phone_num){
								that.parent().next().html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 此手机号已注册");
							}else{
								that.parent().next().css({"visibility":"hidden","margin":"0"})
							}
						});
						
					}
				});
			}
		}else if(that.hasClass("img_yan")){
			that.parent().css("margin-bottom","0px");
			if(thisV.replace(/\s+/g,"")==""){
				that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 验证码不可以为空");
			}else{
				$.ajax({
					type:"get",
					url:"js/yanzheng.json",
					async:true,
					success:function(data){
						$.each(data, function(i,k) {
							if(!(thisV==k.img_yan)){
								that.parent().next().html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 验证码输入错误");
							}else{
								that.parent().next().css({"visibility":"hidden","margin":"0"})
							}
						});
					}
				});
			}
		}else if(that.hasClass("note_yan")){
			that.parent().css("margin-bottom","0px");
			if(thisV.replace(/\s+/g,"")==""){
				that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 验证码不可以为空");
			}else{
				$.ajax({
					type:"get",
					url:"js/yanzheng.json",
					async:true,
					success:function(data){
						$.each(data, function(i,k) {
							if(!(thisV==k.img_yan)){
								that.parent().next().html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 验证码输入错误");
							}else{
								that.parent().next().css({"visibility":"hidden","margin":"0"})
							}
						});
					}
				});
			}
		}else if(that.hasClass("login_mima")){
			that.parent().css("margin-bottom","0px");
			if(thisV.replace(/\s+/g,"")==""){
				that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 密码不可以为空");
			}else if(!(reg.test(that.val()))){
				that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 密码格式不正确");
			}else{
				that.parent().next().css({"visibility":"hidden","margin":"0"})
			}
		}else{
			that.parent().next().css("display","none");
		}
	})
	
	$(".chakan").on("click",function(){
		var h=$(document).height();
		$("#Christmas_zhe").css({
			"height":h,
			"display":"block"
		})
		$(".alert_winBox").css("display","block");
	})
	$(".alert_winBox_cha").on("click",function(){
		$("#Christmas_zhe").css({"display":"none"})
		$(".alert_winBox").css("display","none");
	})
	
	/*var oimgBox=$(".guide_box3_top_tu>div>img");
	oimgBox.on("mouseover",function(){
		var opH=$(this).height(),
			opBox=$(this).next(),
			imgUrl=$(this).prev().attr("src"),
			h=$(document).height();
			console.log(opH)
		opBox.css({
			"display":"block",
			"line-height":"18px",
			"padding-top":(opH/2-10)+"px",
			"height":(opH-(opH/2-10))+"px"
		}).animate({
			"opacity":"1",
			"filter":"alpha(opacity=100)"
		},300).parent().parent().siblings("div").find("p").css({"display":"none","opacity":"0","filter":"alpha(opacity=0)"});
		opBox.parent().siblings("div").find("p").css({"display":"none","opacity":"0","filter":"alpha(opacity=0)"});
		opBox.parent().parent().parent().siblings().find("p").css({"display":"none","opacity":"0","filter":"alpha(opacity=0)"});
		opBox.next().css({
			"display":"block",
			"height":opH+"px"
		}).animate({
			"opacity":"0.8",
			"filter":"alpha(opacity=80)"
		},200)
		if(opBox.hasClass("jian_padding")){
			opBox.css({"padding-top":(opH/2-25)+"px","height":(opH-(opH/2-25))+"px"})
		}
		opBox.on("click",function(){
			$("#Christmas_zhe").css({
				"height":h,
				"display":"block"
			}).on("click",function(){
				$(this).css("display","none");
				$(".tan_datu").css("display","none");
			})
			$(".tan_datu").on("click",function(){
				$(this).css("display","none");
				$("#Christmas_zhe").css("display","none");
			})
			$(".tan_datu").html("<img class='newImg' src='"+imgUrl+"'/>");
			var newImgH=$(".tan_datu").height(),
				newImgW=$(".tan_datu").width();
				console.log(newImgW);
			$(".tan_datu").css({
				"display":"block",
				"top":"50%",
				"left":"50%",
				"marginLeft":-(newImgW/2),
				"marginTop":-(newImgH/2)
			});
		})
		
	})*/
	
	
	/*$(".Memory_erwei").on("mouseenter",function(){
		$(".Memory_er").css("display","block");
	}).on("mouseout",function(){
		$(".Memory_er").css("display","none");
	})
	$(".huiding").on("click",function(){
		$("body,html").animate({
			"scrollTop":"0"
		},500)
	}).on("mouseenter",function(){
		$(this).attr("src","images/zhuolu_right4.png");
	}).on("mouseout",function(){
		$(this).attr("src","images/zhuolu_right2.png");
	})
	$(window).on("scroll",function(){	
		if($(window).scrollTop() > 574){
			$(".huiding").css({
				"opacity":"1",
				"filter":"alpha(opacity=100)"
			})
		}else{
			$(".huiding").css({
				"opacity":"0",
				"filter":"alpha(opacity=0)"
			})
		}
	})*/
	

	//悬浮框效果
	$(".oul1>li").on("mouseover",function(){
		$(this).addClass("on");
	}).on("mouseout",function(){
		$(this).removeClass("on");
	})
	
});




