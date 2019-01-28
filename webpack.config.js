// webpack是基于nodejs的，所以nodejs语法都可以使用
// why cannot user ES6 https://www.imooc.com/article/17870
// import webpack from "webpack";
// import path from "path";

var webpack = require("webpack");
var path = require("path");

module.exports = {
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
       
    ]
}