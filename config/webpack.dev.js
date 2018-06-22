const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = merge(baseConfig, {
    output: {
        publicPath: '/'
    },
    mode : 'development',
    devtool : "inline-source-map",
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: path.resolve(__dirname, "../src/pages", "login.html"),
            filename: 'login.html',   //默认位置和output.path相同
            // template : 'index.html',
            // filename : 'index.html',
            inject: "body",
            chunks: ["login"]
        })
    ],
    //热重载
    // devServer: {
    //     contentBase: path.join(__dirname, '../dist'),
    //     port: 9000,
    //     proxy: {
    //         '/api': {
    //             target: 'http://a.txyun.test.fang.com',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/api': '/api'
    //             }
    //         }
    //     },
    //     disableHostCheck: true
    // },
    devtool: 'inline-source-map'
});

//局部刷新；HMR
config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;