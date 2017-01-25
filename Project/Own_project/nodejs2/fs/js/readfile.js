var fs=require('fs');
fs.readFile('../content.txt',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data)
	}
})
fs.readFile('../content2.txt','UTF-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data)
	}
})

try{
	var data=fs.readFileSync('../content3.txt','UTF-8');
	console.log(data)
}catch(e){
	console.log(e)
}




