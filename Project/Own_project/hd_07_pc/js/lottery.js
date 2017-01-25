
	//加载初始化		
	$(document).ready(function(){
		Roulette.flashInit();
		checkLogin();
		checkTotal();	
		lotterylist();
		$('.dowebok').liMarquee({
			direction: 'up'
		});
	});

		
	//初始化Flash转盘		
	var g_iCurShownPrizeIndex = 0;
    var resultPid = 0;
	var resultMsg = "";
	
	var Roulette = (function () {
        var flashvars = {
			config: "config.xml",
            onStart: "onRouletteStart",
            onStop: "onRouletteStop"
        };
        var params = {
            wmode: "transparent",
            allowScriptAccess: "always"
        };
        var attributes = {
            id: "ID_swf",
            name: "ID_swf"
        };
        var Roulette = {
            flashInit: function () {
                swfobject.embedSWF("dzp/Roulette.swf", "ID_swf", "595", "595","9.0.0","js/expressInstall.swf", flashvars, params, attributes);		
            },
            flashObj:{
				invoke: function (sFunc) {
					var p, i;
					movieName = "ID_swf";
					if (navigator.appName.indexOf("Microsoft") != -1) {
						this._oElement = document.getElementById(movieName);
					} else {
						this._oElement = document[movieName];
					}
					if (!this._oElement) throw "SWFlash.invoke: required element!";
					if (this._oElement[sFunc]) {
						p = Array.prototype.slice.call(arguments, 1);
						return this._oElement[sFunc].apply(this._oElement, p);
					}
				}
			}
        }
        return Roulette;
    })();

    function flashReset() {
        Roulette.flashObj.invoke("reset");
    }

    function enterRange(iIndex) {
        showPrizeDetail(iIndex);
        return -1;
    }
	
	function showPrizeDetail(iIndex) {
        g_iCurShownPrizeIndex = iIndex;
    }

    function onRouletteStart() {
        playRoulette();
        return -1;
    }
	
	//输出结果
	function onRouletteStop() {		
		msgBox('温馨提示',resultMsg);
		checkLogin();
        return -1;
    }
	
	
	//基础弹出框
	function msgBox(_title,_content){		
		art.dialog({
			id: 'xymf_box',
			title: _title,
			width: 350,
			height: 100,
			content: _content,
			ok: function () {
				Roulette.flashObj.invoke("reset")
                this.close();
            },
			close:function(){
				Roulette.flashObj.invoke("reset");
			},
            okVal: '确定',
            lock: true
		});
	}
	
	function checkLogin(){
				$.ajax({
					url: 'user.php?action=checkLogin',
					dataType: 'json',
					cache: false,
					type: 'POST',
					success: function (obj) {
						switch(obj.stat){
							case "-1":								
								break;
							case "0":
								$("#lottery_id_info").html(obj.user+',次数：'+obj.count+'</br><a href="javascript:prizeBox(1)">我的礼品</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="user.php?action=logout" >退出</a>');
								//$("#lottery_nums").html('<p>您当天的抽奖次数为<i>'+obj.count+'</i>次。完成<a href="#a">每日任务</a>可以获取更多抽奖次数');
								break;
						}						
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						var x = 1;
					}
				})		
	}

	function checkTotal(){
		$.ajax({
					url: 'user.php?action=getTotal',
					dataType: 'json',
					cache: false,
					type: 'POST',
					success: function (obj) {
						switch(obj.stat){
							case "-1":								
								break;
							case "0":
								$("#lottery_id_num").html(obj.count);
								break;
						}						
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						var x = 1;
					}
				})		
	}
	
	//登录框
	function logBox(){
		var sHtml = '<div style="text-align:right;">'
		+ '<p style="height:25px;">手投网用户名：<input id="login-user" style="width:150px;" type="text" value="" /></p>'
        + '<p style="height:25px;">&nbsp;手投网密码：<input id="login-phone" style="width:150px;" type="password" value="" /></p>'
		+ '<p style="height:25px;">验证码：<input id="login-code" style="width:100px;" type="text" value="" /><img style="width:50px;cursor:pointer;"  onClick="this.src=\'lib/yzm.php\'"  src="lib/yzm.php" /></p>'
		+ '</div>';
		art.dialog({
			id: 'xymf_box_login',
			title: '登录系统',
			content: sHtml,
			width: 350,
			height: 100,
			lock: true,
			ok: function () {
				var _username = $("#login-user").val();
				var _userphone = $("#login-phone").val();
				var _usercode = $("#login-code").val();
				if(_username==""||_userphone==""||_usercode==""){
					alert("请检查输入内容不能为空!");
					return false;
				}
				
				var l = $("#login-phone").val().length;
				
				
				
				var _obj = this;
				$.ajax({
					url: 'user.php?action=login',
					dataType: 'json',
					cache: false,
					data : {username:_username,userphone:_userphone,usercode:_usercode},
					type: 'POST',
					success: function (obj) {
						switch(obj.stat){
							case "-1":
								alert("账户名或者密码错误!");
								break;
							case "-3":
								alert("验证码错误!");
								break;
							case "11":
								alert("尊敬的用户，请通过三项认证后再进行抽奖!");
								break;
							case "0":
								alert("登录成功!");
								$("#lottery_id_info").html(obj.user+',次数：'+obj.count+'</br><a href="javascript:prizeBox(1)">我的礼品</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="user.php?action=logout" >退出</a>');
								//$("#lottery_nums").html('<p>您当天的抽奖次数为<i>'+obj.count+'</i>次。完成<a href="#task">每日任务</a>可以获取更多抽奖次数');
								_obj.close();
								break;
						}						
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						var x = 1;
					}
				})
				return false;
			},
			okValue: '确定',
			cancel: function () {}
		});
	}
	
	//中奖列表
	function prizeBox(p){
		var dialog = art.dialog({id: 'xymf_myprize',title: "我的礼品",padding: "0px",lock: true});
		$.ajax({
			url: 'winprize.php?p='+p,
			success: function (data) {
				dialog.content(data);
			},
			cache: false
		});
	}	
	
	//抽奖触发事件
	function playRoulette() {
        $.ajax({
            url: 'bonus.php',
            dataType: 'json',
            cache: false,
            type: 'POST',
            success: function (obj) {
                switch (obj.stat) {
                    case '-1':
						Roulette.flashObj.invoke("reset");
						logBox();
                        break;	
				    case '-2':						
						Roulette.flashObj.invoke("reset");
                        msgBox('温馨提示',obj.msg);
                        break;
					case '5':						
						Roulette.flashObj.invoke("reset");
                        msgBox('温馨提示',obj.desc);
                        break;	
                    case '0':                    
                        resultPid = obj.pId;
						resultMsg = obj.msg;
                        Roulette.flashObj.invoke("turnTo", parseInt(resultPid));
                        break;
                    default:
					    Roulette.flashObj.invoke("reset");
						msgBox('温馨提示','网络错误,请稍后再抽奖');
                        break;
                    }
                },
                failure: function () {
                    //api请求失败处理
                },
				error: function(XMLHttpRequest, textStatus, errorThrown) {
						Roulette.flashObj.invoke("reset");
						msgBox('温馨提示','网络错误,请稍后再抽奖');
                    }
            })
    }
	
	//中奖列表
	function lotterylist(){
    	$.ajax({
            url: 'ajax.php?action=lotterylist',
            dataType: 'json',
            cache: false,
            type: 'POST',
            success: function (obj) {     
                    var sAwardEle = "";
                	$.each(obj, function(i, award){
						//sAwardEle += '<li><span class="win_user">'+award.user+'</span><span class="win_tel">'+award.phone+'</span></li></li>';
						sAwardEle += '<li style="line-height: 30px;	padding: 0 12px;float: left;font-size: 16px;"><em style="display: inline-block;	width: 125px;	text-align: center;">'+award.user+'</em><em style="display: inline-block;	width: 125px;	text-align: center;">'+award.date+'</em><em style="display: inline-block;	width: 125px;	text-align: center;">'+award.prize+'</em></li>';
         				});
					$("#ulMoney").html(sAwardEle);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
                    var x = 1;
            }
        }) 
    }
	
	

	