
module.exports = {
	entry: __dirname + "/app/main.js",  //入口文件
	output : {
		path: __dirname + "/public", //打包文件存放位置
		filename: "build.js" // 打包后输出的文件名字
	}
}
