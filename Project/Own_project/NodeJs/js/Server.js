var http = require("http");

function onRequest(request, response){
	console.log("Request received.");
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write('<h1>你好世界，我叫朱鹏辉</h1>');
  response.end('<p>张家幸和朱鹏辉早生贵子</p>');
}
http.createServer(onRequest).listen(8888);
console.log("Server has started.");