开始安装

首先确保自己已经安装了nodejs

然后安装yeoman

npm install -g yo
然后安装脚手架

npm install -g generator-reactpackage
在自己的空项目中运行：

yo reactpackage
然后就会在此目录下生成以下目录结构：

├── data
│   └── test.json
├── src
│   ├── components
│   │   └── App.js
│   ├── images
│   │   └── yeoman.png
│   ├── styles
│   │   └── app.scss
│   ├── vendor
│   │   └── jquery.js
│   ├── views
│   │   └── home.html
├── node_modules
├── index.html
├── package.json
└── webpack.config.js
然后使用以下命令启动服务：

npm run dev
本项目默认监听端口是8888，所以在浏览器输入 http://localhost:8888 就能看到效果了。

注意：

如果执行上述命令提示错误：Error: getaddrinfo ENOTFOUND localhost，在host文件里面添加127.0.0.1 localhost即可。
监听端口和实时刷新的功能都能在webpack.config.js文件中修改配置
开发完成之后，对项目进行打包，使用以下命令：

npm run build