const express = require('express');
/**
 * webpack-dev-server的作用：
 * 1. 当源文件改变的时候，自动进行编译(依赖文件的变动也能监测到)
 * 2. 开发时不在硬盘生成文件，而是在内存中
 * 3. 以production模式下生成文件的文件夹为服务目录
 */
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.dev.js');
const webpack = require('webpack');

const app = express();


//官方示例htmlwebpackPlugin写的index的路径不一样
const compiler = webpack(webpackConfig);
app.use(middleware(compiler, {
    //webpack-dev-server会根据output去寻找contentBase目录
    publicPath : '/'    //publicPath是‘/’，页面就是‘/index.html’；publicPath是‘/abc’，页面就是‘/abc/index.html’；
}));

//To create a virtual path prefix (where the path does not actually exist in the file system) 
//for files that are served by the express.static function, specify a mount path for the static directory,
//app.use(express.static('./dist'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))