$(function(){

	//低栏切换效果
	$('div.footer ul li').on('click',function(){
		/*$(this).addClass('on').siblings().removeClass('on');*/
		console.log($(this).index())
	})

	//左侧个性设置效果
	$('.gerenset').on('click',function(e){
		
		e.stopPropagation();
		var that=$(this);

		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('div.shouye_box1').animate({'left':'5.36rem'});
			$('div.shouye_box2').animate({'left':'0rem'});
			$(this).css({"opacity":"0","filter":"alpha(opacity=0)"});
		}else{
			$(this).addClass('on');
			$('div.shouye_box1').animate({'left':'0rem'});
			$('div.shouye_box2').animate({'left':'-5.36rem'},function(){
				that.css({"opacity":"1","filter":"alpha(opacity=100)"})
			});

		}
	
	})


	//联系人列表效果
	$(".shouye_shebei li").on('click',function(){
		listxiang($(this));	
	})
	
	function listxiang(obj){
		var index=obj.index(),len=obj.parent().find('li').length-1;
		if (obj.hasClass('on')) {
			obj.removeClass('on');
			obj.next().css('border-top','1px solid #f1f1f2');
			if(index==len){
				obj.parent().css('border-bottom','1px solid #f1f1f2');
			} 			
		}else{
			obj.addClass('on');
			obj.next().css('border-top','0');
			if(index==len){
				obj.parent().css('border-bottom','0');				
			}
		}
		if(obj.hasClass('top') && obj.hasClass('on')){
			obj.find('div').eq(0).css('border-top','1px solid #f1f1f2');
		}
	}

})