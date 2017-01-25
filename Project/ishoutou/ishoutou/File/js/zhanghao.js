	var Mycanvas=document.getElementById("Mycanvas"),
		cans=Mycanvas.getContext("2d");		
		
	var data=[
			{
				'name':'冻结资金',
				'date':'799.80'
			},
			{
				'name':'可用资金',
				'date':'799.80'
			},
			{
				'name':'代收本金',
				'date':'799.80'
			},
			{
				'name':'待收利息',
				'date':'99.80'
			}
		]
	function yuan(){
		var color = ["#e94d1c","#afcfdd","#fbe2bc","#c5c4c5"];
		var he =0;
		$.each(data, function(i,k) {
			he+=parseFloat(k.date);
		});
		var kaishi = 135*(Math.PI/180);
		
		cans.beginPath();
		//冻结资金开始
		cans.lineWidth=1;
		
		cans.fillStyle="#e94d1c";
		cans.font="20px 微软雅黑";
		cans.fillText("799",108,80);
		
		cans.fillStyle="#9b9b9b";
		cans.font="14px 微软雅黑";
		cans.fillText("冻结资金",37,80);
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#e94d1c";
		cans.fillText(".80",144,80);
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#9b9b9b";
		cans.fillText("元",167,80);
		cans.fill();
		
		/*cans.strokeStyle="#eee";
		cans.moveTo(37,93);
		cans.lineTo(316,93);
		
		cans.strokeStyle="#eee";
		cans.moveTo(316,93);
		cans.lineTo(355,114);
		cans.stroke();*/
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#e94d1c";
		cans.fillText("查看还款列表 查看所有投标记录",37,115);
		cans.fill();
		//冻结资金结束
		
		//待收利息开始
		cans.font="14px 微软雅黑";
		cans.fillStyle="#9b9b9b";
		cans.fillText("待收利息",92,330);
		
		cans.font="20px 微软雅黑";
		cans.fillStyle="#484448";
		cans.fillText("99",165,330);
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#484448";
		cans.fillText(".80",189,330);
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#9b9b9b";
		cans.fillText("元",212,330);
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#484448";
		cans.fillText("查看逾期列表 查看所有逾期记录",92,365);
		cans.fill();
		
		/*cans.strokeStyle="#eee";
		cans.moveTo(92,344);
		cans.lineTo(390,344);
		cans.stroke();*/
		//待收利息结束
		
		//可用资金开始
		cans.fillStyle="#9b9b9b";
		cans.font="14px 微软雅黑";
		cans.fillText("可用资金",747,120);
		
		cans.font="20px 微软雅黑";
		cans.fillStyle="#007eab";
		cans.fillText("799",815,120);
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#007eab";
		cans.fillText(".80",851,120);
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#9b9b9b";
		cans.fillText("元",874,120);
		cans.fill();
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#007eab";
		cans.fillText("查看利息列表 查看所有利息记录",747,155);
		cans.fill();
		
		/*cans.strokeStyle="#eee";
		cans.moveTo(674,150);
		cans.lineTo(704,133);
		
		cans.strokeStyle="#eee";
		cans.moveTo(704,133);
		cans.lineTo(984,133);*/
		
		cans.stroke();
		//可用资金结束
		
		//代收本金开始
		cans.font="14px 微软雅黑";
		cans.fillStyle="#9b9b9b";
		cans.fillText("待收本金",676,348);
		
		cans.font="20px 微软雅黑";
		cans.fillStyle="#fca72b";
		cans.fillText("799",747,348);
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#fca72b";
		cans.fillText(".80",783,348);
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#9b9b9b";
		cans.fillText("元",807,348);
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#fca72b";
		cans.fillText("查看借款列表 查看所有借款记录",676,380);
		cans.fill();
		
		/*cans.strokeStyle="#eee";
		cans.moveTo(615,360);
		cans.lineTo(900,360);
		cans.stroke();*/
		//代收本金结束
		
		
		cans.closePath();
	
	}
	
	yuan();
		cans.beginPath();
		//中心内容开始
		cans.font="18px 微软雅黑";
		cans.fillStyle="#9b9b9b";
		cans.fillText("账户总资产",466,160);
		
		cans.font="30px 微软雅黑";
		cans.fillStyle="#007eab";
		cans.fillText("10000.79",446,205);
		cans.fill();
		
		cans.strokeStyle="#007eab";
		cans.moveTo(455,230);
		cans.lineTo(550,230);
		cans.arcTo(570,230,570,235,5);
		cans.moveTo(570,235);
		cans.lineTo(570,270);
		cans.arcTo(570,275,550,275,5);
		cans.moveTo(565,275);
		cans.lineTo(457,275);
		cans.arcTo(450,275,450,270,5);
		cans.moveTo(450,270);
		cans.lineTo(450,235);
		cans.arcTo(450,230,455,230,5);
		cans.stroke();
		
		cans.font="16px 微软雅黑";
		cans.fillStyle="#007eab";
		cans.fillText("立即投资",476,258);
		//中心内容结束
		cans.closePath();
		
		cans.beginPath();
		
		cans.fillStyle="#e94d1c";
		cans.fillRect(45,454,50,16);
		cans.fill();
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#484448";
		cans.fillText("冻结资金[已投入]",110,467);
		
		cans.fillStyle="#007eab";
		cans.fillRect(279,454,50,16);
		cans.fill();
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#484448";
		cans.fillText("可用资金［未投入］",344,467);
		
		cans.fillStyle="#fca72b";
		cans.fillRect(523,454,50,16);
		cans.fill();
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#484448";
		cans.fillText("待收本金［本金］",590,467);
		
		cans.fillStyle="#484448";
		cans.fillRect(760,454,50,16);
		cans.fill();
		
		cans.font="14px 微软雅黑";
		cans.fillStyle="#484448";
		cans.fillText("待收利息［已赚取］",829,467);
		
		
		cans.closePath();
		
		
	