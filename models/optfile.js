var fs = require('fs');
module.exports = {
	readfileSync:function(path){ // 同步读取
		var data = fs.readFileSync(path,'utf-8');
		console.log(data);
		console.log('同步方法执行完毕');
	},
	readfile:function(path,recall){ // 异步读取
		var data = fs.readFileSync(path,'utf-8');
		console.log('异步方法执行完毕');
		fs.readFile(path,function(err,data){
			if(err){
				console.log(err);
			}else{
				console.log(data.toString());
				recall(data);
			}
		})
	},
	writefile:function(path,data,recall){ // 异步方法
		fs.writeFile(path,data,function(err){
			if(err){
				throw err;
			}
			console.log('It\'s saved!'); // 文件被保存
			recall('写文件成功')
		})
	},
	writefileSync:function(path,data){ // 异步方法
		fs.writeFile(path,data);
		console.log('同步写文件完成');
	},
}