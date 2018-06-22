const rm = require('rimraf');
const path = require('path');
const webpack = require('webpack');
const buildConfig = require('./webpack.prod.js');
const colors = require('colors');
const ora = require('ora');

const spinner = ora('building for production...')
spinner.start()
//webpackConfig中mode设置为production导致process.env.NODE_ENV=production只在编译的时候有效（比如在js里打印process.env.NODE_ENV），在进程的其他时间无效
process.env.NODE_ENV = "production"

rm(path.resolve(__dirname,'../dist'),err=>{
    spinner.stop();
    if(err) throw err;

    //https://webpack.js.org/api/node/
    webpack(buildConfig, (err, stats) => {
        //The err object will not include compilation errors and those must be handled separately using stats.hasErrors() 
        //which will be covered in detail in Error Handling section of this guide. The err object will only contain 
        //webpack-related issues, such as misconfiguration, etc.
        if(err) throw err;

        //输出打包详情
        //process.stdout.write和console.log相同
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
          }) + '\n\n')

        if(stats.hasErrors()){
            console.log(colors.red('Build failed with error'));
            //console.log(stats.toString())
        }

        console.log('NODE_ENV：'+ process.env.NODE_ENV)
        // Done processing
    });
})