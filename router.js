var optfile = require('./models/optfile.js');

module.exports = {
	login:function(req,res){
		function recall(data){
			res.write(data);
			res.end('ok');	// 结束请求中状态,不写则没有http协议尾	
		}
		optfile.readfile('./views/login.html',recall);
	},
	zhuce:function(req,res){
		function recall(data){
			res.write(data);
			res.end('');	// 结束请求中状态,不写则没有http协议尾	
		}
		optfile.readfile('./views/zhuce.html',recall);
	}
}