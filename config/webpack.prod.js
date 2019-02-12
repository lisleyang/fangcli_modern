const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

let config = merge(baseConfig, {
    output: {
        publicPath: './'
    },
});

module.exports = config;