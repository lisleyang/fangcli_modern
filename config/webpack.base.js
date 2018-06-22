const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // context是给其他路径作为根路径的，比如src 
    // 参考http://www.qinshenxue.com/article/20170315092242.html
    //context: path.resolve(__dirname, '../src/script'),
    entry: {
        "login" : path.resolve(__dirname,'../src/scripts/login'),
        "login1" : path.resolve(__dirname,'../src/scripts/login1')
        // "pay_buy_tianxiayun": [path.resolve(__dirname, '../src/script/common'), path.resolve(__dirname, '../src/script/pay_buy_tianxiayun')],
        // "pay_order_manage": path.resolve(__dirname, '../src/script/pay_order_manage')
    },
    //不打包项
    //import * as $ from jquery ，这时候就不会打包进去
    externals: {
        vue: "vue",
        axios: 'axios',
        jquery : 'jquery'
    },
    output: {
        path: path.join(__dirname, '../dist'), // context对output无效，output.path建议采用绝对路径
        filename: '[name].js'
    },
    // 处理文件的别名、拓展名等
    resolve: {
        extensions: ['.ts','.js'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
            ,
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "babel-loader",
            //     options: {
            //         "presets": [
            //             ["env", { "targets": { "browsers": ["ie >= 9"] }, "useBuiltIns": true }]
            //         ]
            //     }
            // }, 
            {
                test: /\.css$/,
                /* use: ["style-loader", "css-loader"] */
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader'
                    }]
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        name: '[name].[hash:7].[ext]',
                        outputPath: 'assets/img/',
                        publicPath: '../../'
                    }
                }]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin([path.resolve(__dirname, '../dist/')], {
        //     root: path.resolve(__dirname, '../')
        // }),
        
        // new HtmlWebpackPlugin({
        //     title: 'Development',
        //     template: path.resolve(__dirname, "../src/pages", "pay_order_manage.html"),
        //     filename: "pay_order_manage.html",
        //     inject: "body",
        //     chunks: ["pay_order_manage"]
        // }),
        // new ExtractTextPlugin("assets/css/[name].css")
    ]
}