var optfile = require('./models/optfile.js');
function getRecall(req,res){
	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

	function recall(data){
		res.write(data);
		res.end('');	// 结束请求中状态,不写则没有http协议尾
	}

	return recall;
}

module.exports = {
	login:function(req,res){
		recall = getRecall(req,res);
		optfile.readfile('./views/login.html',recall);
	},
	zhuce:function(req,res){
		recall = getRecall(req,res);
		optfile.readfile('./views/zhuce.html',recall);
	},
	writefile:function(req,res){
		function recall(data){
			res.write(data);
			res.end('');	// 结束请求中状态,不写则没有http协议尾	
		}
		optfile.writefile('./views/one.txt','我的写入文件',recall);
	},
	showimg:function(req,res){
		res.writeHead(200,{'Content-Type':'image/jpeg'});
		optfile.readImg('./imgs/pig.jpg',res);
	}
}