const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let page_list = fs.readdirSync(path.resolve(__dirname,'../','src/pages'))
let script_list = fs.readdirSync(path.resolve(__dirname,'../','src/scripts')).filter(el=>el.indexOf('utils')<0)


let entry = {}
script_list.forEach(script=>{
    entry[script.replace(/^([^\.]*)\.[t|j]s/,'$1')] = path.resolve(__dirname,'../src/scripts/',script)
})

let htmlWebpackPlugins = page_list.map(page=>{
    return new HtmlWebpackPlugin({
        title: 'Development',
        template: path.resolve(__dirname, "../src/pages", page),
        filename: page,
        inject: "body",
        chunks: [page.replace(/^([^\.]*)\.html/,'$1')]
    })
})

module.exports = {
    // context是给其他路径作为根路径的，比如src 
    // 参考http://www.qinshenxue.com/article/20170315092242.html
    //context: path.resolve(__dirname, '../src/script'),
    entry,
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
        extensions: ['.js','.ts'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.[j|t]sx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, 
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
    plugins : [
        new CleanWebpackPlugin(['./dist'],{
            root : path.resolve(__dirname,'..'),
            verbose: true
        }),
        ...htmlWebpackPlugins
    ]
}