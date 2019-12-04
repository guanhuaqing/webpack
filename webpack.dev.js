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
                    {
                        loader:'postcss-loader',
                        options: {
                            plugins: [
                                require("autoprefixer")({
                                   /* browsers: [
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
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            // Options...
          })
    ],
    performance: {
        // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
        hints: "warning",
        // 开发环境设置较大防止警告
        // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
        maxEntrypointSize: 5000000, 
        // 最大单个资源体积，默认250000 (bytes)
        maxAssetSize: 3000000
    }
});