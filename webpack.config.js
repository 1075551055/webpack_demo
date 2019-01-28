// webpack是基于nodejs的，所以nodejs语法都可以使用
// why cannot user ES6 https://www.imooc.com/article/17870
// import webpack from "webpack";
// import path from "path";

var webpack = require("webpack");
var path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 配置完mode，entry，output后就可以直接命令行输入webpack进行打包了
    // 设置development模式，webpack 4版本要求严格，必须指定当前是开发模式还是生产模式，有警告也无法打包 
    mode: "development",
    // 要打包的文件
    entry: path.join(__dirname, './src/main.js'),
    // 打包文件到哪个目录
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins:[
       new htmlWebpackPlugin({
           //要被生成到内存的页面
           template: "./src/index.html",
           //生成到内存的页面的名字，默认访问路径http://localhost:8080/index.html，可以右键查看页面源码，发现使用的是内存中的bundle.js
           filename: "index.html"
       })
    ]
}