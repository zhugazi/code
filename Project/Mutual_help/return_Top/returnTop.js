;(function($){
	$.fn.extend({
		SCorlltop:function(obj,zhi){
			$(window).scroll(function(){
				var sTop=$(this).scrollTop();
				if(sTop>=zhi){
					obj.css({
						"display":"block"
					}).on("click",function(){
						$(window).scrollTop(0)
					})
				}else{
					obj.css({
						"display":"none"
					})
				}
			})
		}
		
	});
})(jQuery)
