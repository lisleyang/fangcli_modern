const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

let config = merge(baseConfig, {
    output: {
        publicPath: './'
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         title: 'Development',
    //         template: path.resolve(__dirname, "../src/pages", "login.html"),
    //         filename: path.join(__dirname,'../dist',"login.html"),
    //         inject: "body",
    //         chunks: ["login"]
    //     })
    // ],
    mode : "production"
    //压缩生成的js；与webpack --optimize-minimize功能相同
    // plugins: [new webpack.optimize.UglifyJsPlugin()]
});

module.exports = config;