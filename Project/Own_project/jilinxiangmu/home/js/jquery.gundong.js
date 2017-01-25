;(function($){
	$.fn.extend({
			//定义插件
			"gundong":function(obj){
					var thisbox=this;//装图片的盒子
					
					//把参数传进来 把值给变量
					var width=obj.width;
					var height=obj.height;
					
					
					//获得向左的按钮
					var left=thisbox.parent().next();
					//获得向右的按钮
					var right=thisbox.parent().siblings().last();
					
					//对向左的按钮执行click操作
					left.on("click",function(){
						//
						clickfn(-1);
					});
					
					
					function clickfn(n)
					{
						//获取装图片盒子的左边位置
						var imgboxleft=thisbox.parent().position().left;
						//获取一共有几个图片
						var imgboxnum=thisbox.length;
						
						//alert(imgboxleft);
						//移动几个图片
						var flag=Math.floor(imgboxleft/width)+n;
						//执行动画
						animate_go(flag*width);
						
					}
					
					function animate_go(len)
					{
						//当达到最后一张图片的位置
						var last_l=-width*(thisbox.length-1);
						//对装图片的长条盒子执行动画
						thisbox.parent().animate({"left":len},function(){
							
								if(last_l==$(this).position().left)
								{
									$(this).children().first().appendTo(thisbox.parent());
									$(this).css({"left":last_l+width});
								}
								
							});
					}
				
				
				
				}
		});
})(jQuery);