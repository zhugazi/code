var http=require("http");
var url=require('url');

function start(route){
	function onRequest(request,response){
		var pathname=url.parse(request.url).pathname;
		console.log("Request for "+ pathname +" received.");
		route(pathname);
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write('<h1>Gongxi Zhu Penghui He Zhang Jiaxing Xi Jie Lian Li</h1>');
		response.end('<p>终于等到你</p>');
	}

	http.createServer(onRequest).listen(3000);
	console.log("Server has started.");
}
exports.start = start;
