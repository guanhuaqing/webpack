const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = merge(common, {
    mode: 'production',
   // devtool: 'inline-source-map',
    devtool: false,
    output: {
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[chunkhash].js'
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
                        loader:'postcss-loader',
                        options: {
                            plugins: [
                                require("autoprefixer")({
                                  /*  browsers: [
                                        "ie >= 11",
                                        "ff >= 30",
                                        "chrome >= 34",
                                        "safari >= 7",
                                        "opera >= 23",
                                        "ios >= 7",
                                        "android >= 4.4",
                                        "bb >= 10"
                                    ]*/
                                })
                            ]
                        }
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
          }),
        new webpack.HashedModuleIdsPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
           // skiWaiting: true
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                styles: {
                    name:'styles',
                    test: /.css$/,
                    chunks: 'all',
                    enforce: true,
                    priority: 20
                },
                vendor: {
                    test: /node_modules/,
                    chunks:'all',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        }
    }
});