
'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin"); //css单独打包

module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + '/src/entry.js',  //唯一入口文件
    output: {
        path: __dirname + '/build',   //打包后文件存放的地方
        filename: 'bundle.js'          //打包后输出的文件名
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss")},
            { test: /\.scss/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass")},
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
        ]
    },
    postcss: [
        require('autoprefixer') //调用autoprefixer插件,自动补全css3前缀
    ],
    devServer: {
        //contentBase: './src/views'  //本地服务器所加载的页面所在目录
        port: 8888,
        colors: true, //终端输出为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },

    pugins: [
        new ExtractTextPlugin('main.css'),
    ]
}