## webpack 4.0
---

### webpack详解
---
> webpack是一个打包工具，他的宗旨是一切静态资源即可打包。webpack是现代前端技术的基石，常规的开发方式，比如jquery,html,css静态网页开发已经落后了。现在是MVVM的时代，数据驱动界面。webpack将现代js开发中的各种新型有用的技术，集合打包。

### webpack 4 的零配置主要应用于：
---
- entry 默认设置为 ./src/index.js
- output 默认设置为 ./dist/main.js
- production 和 development 两种模式

### 项目搭建
---
项目搭建，我们对webpack的诉求是：

- js的处理：转换 ES6 代码，解决浏览器兼容问题
- css的处理：编译css，自动添加前缀，抽取- css到独立文件
- html的处理：复制并压缩html文件
- dist的清理：打包前清理源目录文件
- assets的处理：静态资源处理
- server的启用：development 模式下启动服务器并实时刷新

