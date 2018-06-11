var http = require('http');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url !== '/favicon.ico'){ // 清除2次访问
		console.log("访问");
		response.write('hello,world');
		response.end('你好，世界');	// 结束请求中状态
	}
}).listen(8000)
console.log("Server running at http://127.0.0.1:8000/");