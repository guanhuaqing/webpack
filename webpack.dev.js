const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    output: {
        filename: '[name].bundle.js',
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
      //  compress: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            // Options...
          })
    ]
});