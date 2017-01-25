// JavaScript Document

//通用弹出层触发动作 begin
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
		var h=$(''+id+' .popBox').height();//获取高度
		popHeight.height(h);
		$(".bgIframe,.bgDiv").fadeIn(200);
	  });
   return false;	  
}
	  
//关闭弹层窗口
function hidePop(id,className){
	$(''+id+',.bgIframe,.bgDiv').fadeOut(function(){
		   $(this).removeClass(className);
		   $(''+id+'.popWrap,'+id+' .popWrap_sub,'+id+' .popIframe').height('');
		})
}
//---------- end

$(function(){
	
	var ajaxqian={
		"shua":[
			{"qian":"1111","mingci":"3"}
		]
	}
	
	$(".ajaxrefresh").on("click",function(){
		$.each(ajaxqian, function(i,k) {
			$(".qian").html(k[0].qian+"元");
			$(".ming").html(k[0].mingci)
		});
	})
	$(".ajaxrefresh2").on("click",function(){
		$.each(ajaxqian, function(i,k) {
			$(".qian2").html(k[0].qian+"元");
		});
	})
	
	
	$(".oul1>li").on("mouseover",function(){
		$(this).find("p").show();
	}).on("mouseout",function(){
		$(this).find("p").hide();
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
	
	
	
	
	
	
	
})








