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
	
	
	

	//悬浮框效果
	$(".oul1>li").on("mouseover",function(){
		$(this).addClass("on");
	}).on("mouseout",function(){
		$(this).removeClass("on");
	})
	
});
$(function(){
	if($(window).scrollTop()>530){
			$(".dcb_xuanfu").show();
		}else{
			$(".dcb_xuanfu").hide();
		}
	$(window).on("scroll",function(){
		if($(this).scrollTop()>530){
			$(".dcb_xuanfu").show();
		}else{
			$(".dcb_xuanfu").hide();
		}
	})
	
	$(".oul1>li").on("mouseover",function(){
		$(this).addClass("on");
	}).on("mouseout",function(){
		$(this).removeClass("on");
	})
	$("#returnTop").on("click",function(){
		location.href="#actOne"
	})
	$(".toggleShow").on("click",function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).html("点击查看更多抽奖信息<em></em>");
			$(".actOne_box3").hide();
			location.href="#guize"
		}else{
			$(this).addClass("on");
			$(this).html("点击收起更多抽奖信息<em></em>");
			$(".actOne_box3").show();
			location.href="#guize"
		}
	})
	$(".guize").on("click",function(){
		location.href="#guize";
	})
	
})



