


$(function(){

	var phoneyan={
			"yan":[
				{
					"shouji":"18910522895",
					"imgyan":"1234",
					"shouyan":"1111"
				}
			]
	}
	
	//手机号判断
	
	$(".tg_reg>ul>li>input").on("focus",function(){
		$(this).css({"border":"1px solid #52acca"});
	}).on("blur",function(){
		var that=$(this),
			thisV=$(this).val(),
			reg=/^[0-9_a-zA-Z]{6,16}$/,
			Phonereg=/^(13|14|15|18|17)[0-9]{9}$/,
			imgUrl="Style/Touch/images/sep/wap_zhuolu01_panduan_03.jpg";
		$(this).css({"border":"1px solid #d4d4d4"});
		if(that.hasClass("phone_num")){
			
			if(thisV.replace(/\s+/g,"")==""){
				$(this).nextAll("p").show().html("<img src='"+imgUrl+"'/>手机号不能为空");
				$(this).parents("li").css({"height":"0.94rem"})	
				//that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 手机号不可以为空");
			}else if(!(Phonereg.test(thisV))){
				$(this).nextAll("p").show().html("<img src='"+imgUrl+"'/>手机号格式不对");
				$(this).parent("li").css({"height":"0.94rem"});
				//that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 手机号格式不正确");
			}else{
				$.ajax({
					type:"get",
					url:"/promotion/checkPhone?phone="+thisV,
					async:true,
					dataType: "json",
					success:function(data){

						if(data.status == 2){
							that.nextAll("p").hide();
							that.parent("li").css({"height":"0.64rem"});
						}else{
							that.nextAll("p").show().html("<img src='"+imgUrl+"'/>"+data.message);
							that.parent("li").css({"height":"0.94rem"});
							//that.parent().next().html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> "+data.message);

						}
					}
				});
			}
		}else if(that.hasClass("img_yan")){
			
			if(thisV.replace(/\s+/g,"")==""){
				$(this).nextAll("p").show().html("<img src='"+imgUrl+"'/>图片验证码不可以为空");
				$(this).parents("li").css({"height":"0.94rem"})
				//that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 图片验证码不可以为空");
			}else{
				$.ajax({
					type:"get",
					url:"/promotion/checkimgcode?imgcode="+thisV,
					async:true,
					dataType: "json",
					success:function(data){
						if(data.status == 2){
							that.nextAll("p").hide();
							that.parent("li").css({"height":"0.64rem"});
						}else{
							//that.parent().next().html("<img src='"+imgSrc+"' width='13px' style='vertical-align: middle;'/> "+data.message);
							$(this).nextAll("p").show().html("<img src='"+imgUrl+"'/>"+data.message);
							$(this).parents("li").css({"height":"0.94rem"});
						}
					}
				});
			}
		}else if(that.hasClass("phone_yan")){
			if(thisV.replace(/\s+/g,"")==""){
				$(this).nextAll("p").show().html("<img src='"+imgUrl+"'/>短信验证码不能为空");
				$(this).parents("li").css({"height":"0.94rem"})
				//that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 短信验证码不可以为空");
			}
			else{
				$.ajax({
					type:"post",
					url:"/promotion/checkphonecode",
					data: {"vercode":thisV},
					async:true,
					dataType: "json",
					success:function(d){
						 if (d.status != 2) {
								$(this).nextAll("p").show().html("<img src='"+imgUrl+"'/>"+d.message);
								$(this).parents("li").css({"height":"0.94rem"});
							//that.parent().next().html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> "+d.message);
                        } else {
							that.nextAll("p").hide();
							that.parent("li").css({"height":"0.64rem"});
                        }

					}
				});
			}
		}else if(that.hasClass("login_mima")){
			var str = thisV;
			if(thisV.replace(/\s+/g,"")==""){
				$(this).next().show().html("<img src='"+imgUrl+"'/>密码不能为空");
				$(this).parents("li").css({"height":"0.94rem"})				
				//that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 密码不可以为空");
			}else if (str.indexOf(' ')== -1&&str.length>5&&str.length<17) {
				$(this).next().hide();
				$(this).parents('li').css({"height":"0.64rem"});
				//that.parent().next().css({"visibility":"hidden","margin":"0"})
			}else{
				//that.parent().next().css("margin","3px 0 10px 0").html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 密码6-16个字符，空格除外");
				$(this).next().show().html("<img src='"+imgUrl+"'/>密码6-16个字符，空格除外");
				$(this).parents("li").css({"height":"0.94rem"})
			}
		}else{
			//that.parent().next().css("display","none");
			$(this).next().hide();
			$(this).parent("li").css({"height":"0.64rem"});
		}

	})

	$("#getCode").on('click',function(){
            sendMobileValidSMSCode();
        })
    var sendMobileValidSMSCode = function (){
    	var imgSrc="/Style/promotion/201601/images/zhuolu_panduan_03.jpg";
            var mobile = $("#txt_phone").val();
            var imgcode = $("#imgcode").val();
            if(imgcode==''){
            	$("#imgcode").nextAll("p").show().html("<img src='"+imgSrc+"'/>图片验证码不能为空");
				$("#imgcode").parents("li").css({"height":"0.94rem"});
              // $("#imgcode").parent("li").css({"margin":"3px 0 10px 0","visibility":"visible"}).html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 图片验证码不能为空");
                  return;   
            }
            if (is_mobile()) {
                $.ajax({
                    url: "/member/common/sendcodewap",
                    type: "post",
                    dataType: "json",
                    data: {"cellphone":mobile,"imgcode":imgcode},
                    success: function(d) {
                        if (d.status == 1) {
                            $("#getCode").hide();
                            $("#getCodeTime").show().addClass("hui");
                            $('#seconds').html(60);
                        } else if (d.status == 2) {
               				$("#txt_phone").nextAll("p").show().html("<img src='"+imgSrc+"'/>手机号已存在");
							$("#txt_phone").parents("li").css({"height":"0.94rem"});
               				//$("#txt_phone").parent().next().css({"margin":"3px 0 10px 0","visibility":"visible"}).html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 手机号已存在");
                            return;
                        } else{
               				$("#imgcode").nextAll("p").show().html("<img src='"+imgSrc+"'/>"+d.message);
							$("#imgcode").parents("li").css({"height":"0.94rem"});
               				//$("#vercode").parent().next().css({"margin":"3px 0 10px 0","visibility":"visible"}).html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> "+d.message);
                            return;
                        }
                    }
                });
            } else {
              $("#txt_phone").nextAll("p").show().html("<img src='"+imgSrc+"'/>手机号格式不正确");
				$("#txt_phone").parents("li").css({"height":"0.94rem"});
            }
        }
        var is_mobile = function(){
			var imgSrc="/Style/promotion/201601/images/zhuolu_panduan_03.jpg";
            var mbTest = /^(13|14|15|18|17)[0-9]{9}$/;
            var mobile = $("#txt_phone").val();
            if ("" == mobile) {
                $("#txt_phone").nextAll("p").show().html("<img src='"+imgSrc+"'/>手机号不能为空");
				$("#txt_phone").parents("li").css({"height":"0.94rem"});
                //$("#txt_phone").css({"margin":"3px 0 10px 0"}).html("<img src='"+imgSrc+"' width='13' style='vertical-align: middle;'/> 手机号格式不正确");
            }
            return mbTest.test(mobile);
        }
        $('#register').on('click',function(){
			var imgSrc="/Style/promotion/201601/images/zhuolu_panduan_03.jpg";
            var vercode = $("#vercode").val();
            var txtPwd = $("#txtPwd").val();
            var txtRec = $("#txtRec").val();
            var mobile = $("#txt_phone").val();
            var imgcode = $("#imgcode").val();
            var promoteid = $("#promoteid").val();
            
             if(!imgcode) {
            	$("#txt_phone").nextAll("p").show().html("<img style='vertical-align: middle;' src='"+imgSrc+"'/>手机号不能为空");
				$("#txt_phone").parents("li").css({"height":"0.94rem"});
            	return;
            }
            if(!is_mobile()){
            	$("#txt_phone").nextAll("p").show().html("<img src='"+imgSrc+"'/>手机号格式不正确");
				$("#txt_phone").parents("li").css({"height":"0.94rem"});
            	return ;
        	}
            if(!imgcode) {
            	$("#imgcode").nextAll("p").show().html("<img src='"+imgSrc+"'/>图片验证码不能为空");
				$("#imgcode").parents("li").css({"height":"0.94rem"});
            	return;
            }
            if(!vercode){
            	$("#vercode").nextAll("p").show().html("<img src='"+imgSrc+"'/>短信验证码不能为空");
				$("#vercode").parents("li").css({"height":"0.94rem"});
            	return ;
            }
            if(!txtPwd) {
            	$("#txtPwd").nextAll("p").show().html("<img src='"+imgSrc+"'/>密码不可以为空");
				$("#txtPwd").parents("li").css({"height":"0.94rem"});
            	return;
            }
            var str = txtPwd;
            if (str.indexOf(' ')== -1&&str.length>5&&str.length<17) {
            }else{
            	$("#txtPwd").nextAll("p").show().html("<img src='"+imgSrc+"'/>密码6-16个字符，空格除外");
				$("#txtPwd").parents("li").css({"height":"0.94rem"});
				return; 
            }
            if(6 > txtPwd.length) { 
            	$("#txtPwd").nextAll("p").show().html("<img src='"+imgSrc+"'/>密码最少6位字符");
				$("#txtPwd").parents("li").css({"height":"0.94rem"});
            	return;
            }
            var check = $("#zhucexieyi").attr("class");
            if(check==''){
                $("#xieyi").html("<img src='"+imgSrc+"'/>请阅读注册协议");
                return false;
            }
            $.ajax({
                url: "/member/common/newpromotion/",
                data: {"vercode": vercode,"phone":mobile,"txtPwd": txtPwd,"txtRec": txtRec,"promoteid":promoteid},
                cache: false,
                type: "post",
                dataType: "json",
                success: function (d, s, r) {
                    console.log(d);
                    if(d){
                        if(d.status=='phone_exit'){
                             $("#txt_phone").nextAll("p").show().html("<img src='"+imgSrc+"'/>"+d.message);
							$("#txt_phone").parents("li").css({"height":"0.94rem"});
                        }else if(d.status=='user_exit'){
                            $("#txt_phone").nextAll("p").show().html("<img src='"+imgSrc+"'/>"+d.message);
							$("#txt_phone").parents("li").css({"height":"0.94rem"});
                        }else if(d.status=='vercode_isnull'){
                             $("#vercode").nextAll("p").show().html("<img src='"+imgSrc+"'/>"+d.message);
							$("#vercode").parents("li").css({"height":"0.94rem"});
                        }else if(d.status=='vercode_error'){
                             $("#vercode").nextAll("p").show().html("<img src='"+imgSrc+"'/>"+d.message);
							$("#vercode").parents("li").css({"height":"0.94rem"});
                        }else if(d.status=='register_fail'){
                             $("#zhucexieyi").nextAll("p").show().html("<img src='"+imgSrc+"'/>"+d.message);
							$("#zhucexieyi").parents("li").css({"height":"0.94rem"});
                        }else if(d.status=='success'){
							window.location.href="/promotion/idcards";
                        }else{
                             $("#zhucexieyi").nextAll("p").show().html("<img src='"+imgSrc+"'/>"+d.message);
							$("#zhucexieyi").parents("li").css({"height":"0.94rem"});
                        }
                    }
                }
            });
        });
	$(".cheked").on("click",function(){
		if($(this).hasClass("cheked")){
			$(this).removeClass("cheked");
		}else{
			$(this).addClass("cheked");
			$("#xieyi").html("");
		}
	})
})








