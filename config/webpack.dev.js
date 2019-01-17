const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

let config = merge(baseConfig, {
    output: {
        publicPath: '/'
    },
    mode : 'development',
    devtool : "inline-source-map",
    //热重载     只有webpack-dev-server有用,因为webpack-dev-server自己开了一个服务，需要端口；webpack-dev-middleware没用。
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://a.txyun.test.fang.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
        disableHostCheck: true
    },
    devtool: 'inline-source-map'
});

//局部刷新；HMR
config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;