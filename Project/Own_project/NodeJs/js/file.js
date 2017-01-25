//异步加载文件先执行完第一句之后直接打印end，最后触发执行打印文件
/*var fs=require('fs');
fs.readFile('file.txt','UTF-8',function(err,data){
	if(err){
		console.log("error");
	}else{
		console.log(data);
	}
})
console.log('end.')*/


//同步加载文件是直接向下打印先输出文件内容，再继续向下执行
var fs=require('fs');
var data=fs.readFileSync('file.txt','utf-8');
console.log(data);
console.log('end.')
