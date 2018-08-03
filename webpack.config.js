module.exports = {
	devtool: "eval-source-map", //生产阶段不建议启动
	entry: __dirname + "/app/main.js", //入口文件
	output: {
		path: __dirname + "/public", //打包文件存放位置
		filename: "build.js" // 打包后输出的文件名字
	},

	devServer: {
		contentBase: "./public", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, // 不跳转
		inline: true, //实时刷新
		port: "3033"
	},

	module: {
		rules: [{
			test: /(\.jsx|\.js)$/,
			use: {
				loader: "babel-loader",
				options: {
					presets: [
						"env", "react"
					]
				}
			},
			exclude: /node_modules/
		}]
	}
}