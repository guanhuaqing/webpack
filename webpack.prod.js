const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(common, {
    mode: 'production',
   // devtool: 'inline-source-map',
    devtool: false,
    output: {
        filename: '[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,   
                    },
                    {
                        loader: 'css-loader?sourceMap'
                    },
                    {
                        loader: 'sass-loader?sourceMap'
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
    ],
    /*optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name:'styles',
                    test: /.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }*/
});