var http = require('http');
var optfile = require('./models/optfile.js');

http.createServer(function(request,response){
	// response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	response.writeHead(200,{'Content-Type':'image/jpeg'});
	if(request.url !== '/favicon.ico'){ // 清除2次访问
		console.log('访问');
		// response.write('hello,worle'); // 不能向客户端输出任何字节，只能二进制流
		optfile.readImg('./imgs/pig.jpg',response);
	}
}).listen(8000)
console.log("Server running at http://127.0.0.1:8000/");