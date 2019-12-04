const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin"); // deperated

module.exports = {
    entry: {
        foo: path.resolve(__dirname, './src/foo'),
        bar: path.resolve(__dirname, './src/bar'),
        vendor: path.resolve(__dirname, './src/vendor.ts')
    },
    output: {
        // filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'tslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                // test: /\.m?js$/,
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    { loader: 'babel-loader' }
                ] // options 在 .babelrc 定义
            }, 
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: '[name].[ext]',
                            outputPath: 'assets/'
                        }
                    },
                    /* {
                             loader: 'image-webpack-loader',
                             options: {
                               bypassOnDebug: true,
                             }
                     }*/
                ]
            },
            {
                test: /\.html$/,
                use: { loader: 'html-loader' }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            title: 'Production'
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name:'common',
                    chunks: 'all',
                 //   minChunks: 2, // reference times is bigger than 2
                }
            }
        }
    },
    performance: {
        // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
        hints: "warning",
        // 开发环境设置较大防止警告
        // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
        maxEntrypointSize: 5000000, 
        // 最大单个资源体积，默认250000 (bytes)
        maxAssetSize: 3000000
    }
};