var http = require('http');
var url = require('url');
var router = require('./router');
http.createServer(function(request,response){
	if(request.url !== '/favicon.ico'){ // 消除第2次访问
		var pathname = url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');// 替换掉前面的/
		router[pathname](request,response);
	}
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");