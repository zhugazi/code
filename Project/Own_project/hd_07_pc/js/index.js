$(document).ready(function() {

	if($("#lottery_winners_data").length > 0){
		new winners_list_rolling("#lottery_winners_data");
	}
	if($(".lottery_list_scroll").length > 0){
		$(".lottery_list_scroll").each(function(index, val){
			val.id = "lottery_list_scroll"+index;
			new winners_list_rolling("#"+val.id);
		})
	}


});

(function(){
	winners_list_rolling = function (id){
		var this_ = this;
		this.id = id;
		this.rolling_flag = true;
		this.direction = $(id).attr("data-direction");
		this.length = 28;
		if(this.direction == "horizontal"){
			var obj = $(this.id + " li:first")[0];
			this.length = obj.offsetWidth + 17;
			if(!this.length){
				this.length = 28;
			}
		}
		this.init = function(){
			if(this_.direction == "horizontal"){
				this_.rollingH(this_);
			}else{
				this_.rolling(this_);
			}
			$(id).hover(function(){
				this_.stop(this_);
			},function(){
				this_.goon(this_);
			});
		}
	
		this.init();
	}
	
	winners_list_rolling.prototype.rolling = function(this_){
		$(this_.id).append($(this_.id).html());
		var speed = 1;
		setInterval(function(){
			if(!this_.rolling_flag)return false;
			$(this_.id).css("top", -speed);
			speed += 1;
			if(speed >= this_.length){
				speed = 0;
				this_.moveLine(this_);
				this_.moveLine(this_);
				$(this_.id).css("top", 0);
			}
		}, 30);
	}
	
	winners_list_rolling.prototype.moveLine = function(this_){
		var first = $(this_.id+" li:first");
		first.remove();
		var second = $(this_.id+" li:first");
		second.remove();
		var third = $(this_.id+" li:first");
		third.remove();
		$(this_.id).append(first);
		$(this_.id).append(second);
		$(this_.id).append(third);
	}
	
	winners_list_rolling.prototype.rollingH = function(this_){
		$(this_.id).append($(this_.id).html());
		var speed = 1;
		setInterval(function(){
			if(!this_.rolling_flag)return false;
			$(this_.id).css("left", -speed);
			speed += 1;
			if(speed >= this_.length){
				speed = 0;
				this_.moveLineH(this_);
				$(this_.id).css("left", 0);
			}
		}, 30);
	}
	winners_list_rolling.prototype.moveLineH = function(this_){
		var first = $(this_.id+" li:first");
		first.remove();
		$(this_.id).append(first);
	}	
	
	winners_list_rolling.prototype.goon = function(this_){
		if(!this_.rolling_flag)this_.rolling_flag = true;
	}
	
	winners_list_rolling.prototype.stop = function(this_){
		if(this_.rolling_flag)this_.rolling_flag = false;
	}
}());

(function($){
	var scrollHeight = 0;
	var scrollObjHeight = 0;
	window.onload = function(){
		scrollHeight =  document.documentElement.scrollHeight || document.body.scrollHeight;
		scrollObjHeight = $("#lottery3_tollbar")[0].offsetHeight;
		scrollHeight -= scrollObjHeight;
		window.onscroll = function(){
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop < 295){
				$("#lottery3_tollbar").removeClass("lottery3_toolBar_fix");
				$("#lottery3_tollbar").removeClass("lottery3_toolBar_bottom");
			}else if(scrollHeight - scrollTop > 20){
				$("#lottery3_tollbar").addClass("lottery3_toolBar_fix");
				$("#lottery3_tollbar").removeClass("lottery3_toolBar_bottom");
			}else{
				$("#lottery3_tollbar").addClass("lottery3_toolBar_bottom");
			}
		}
	}
}($));

var siteurl ='http://818.hexindai.com/choujiang';
var stitle = '和信贷周年庆典大抽奖 iPhone 5S土豪金，iPad Mini2 求带走';


function share(str){
	if(str == 'qq_zone'){
		window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+siteurl+'&title='+stitle);return false;;
	}
	if(str == 'sina'){
		window.open('http://service.weibo.com/share/share.php?url='+siteurl+'&title='+stitle);return false;;
	}	
	if(str == 'qq'){
		var _t = stitle;  var _url = siteurl; var _appkey = '333cf198acc94876a684d043a6b48e14'; var _site = encodeURI; var _u = 'http://v.t.qq.com/share/share.php?title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site; window.open( _u,'转播到腾讯微博');return false;
	}
	if(str == 'renren'){
		window.open('http://widget.renren.com/dialog/share?resourceUrl='+siteurl+'&description='+stitle+'&appkey=1343713053');return false;
	}
	if(str == 'douban'){
		window.open('http://shuo.douban.com/!service/share?href='+siteurl+'&name='+stitle)
	}
	return false;
}