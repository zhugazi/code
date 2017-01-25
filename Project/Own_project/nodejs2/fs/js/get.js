var http=require('http');
var url=require('url');
var util=require('util');
//启动服务
http.createServer(function(req,res){
	console.log('请求数据成功，解析参数');
	var params=url.parse(req.url,true);
	console.log('解析完成');
	console.log(util.inspect(params));
	console.log('向客户端返回');
	res.end(params.query.name);
}).listen(3000);
http.get({
	'host':'localhost',
	'path':'/user?name=marico&age=21',
	'port':3000},function(res){
		res.setEncoding('utf-8');
		res.on('data',function(data){
			console.log('服务端返回数据为 '+data)
		})
	}
)
