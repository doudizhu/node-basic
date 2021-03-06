var http = require('http');
var url = require('url');
var router = require('./router');
var exception = require('./models/Exception');
http.createServer(function(request,response){
	if(request.url !== '/favicon.ico'){ // 消除第2次访问
		var pathname = url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');// 替换掉前面的/
		try{
			// router[pathname](request,response);

			// 抛出异常
			// 方式一：抛出
			data = exception.expfun(0);
			// // 方式二：不抛出
			// data = exception.expfun(10);
			response.write(data);
			response.end('');
		}catch(err){// 同步错误捕获（主程序，如果异步已报错或已抛出异常，则不执行）
			console.log("aaaaa="+err);
			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
			response.write(err.toString());
			response.end('')
		}
		console.log("server执行完毕");
	}
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");