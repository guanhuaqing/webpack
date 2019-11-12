const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js'
  },
  devtool:false,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' } // options 在 .babelrc 定义
      }, {
        test:/\.(scss|sass)$/,
        exclude: /(node_modules|bower_components)/,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: 'css-loader?sourceMap'
          }, {
              loader: 'sass-loader?sourceMap'
          }],
          fallback: 'style-loader'
      })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000
            }
          }
        ]
      }, 
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: {loader: 'file-loader'}
      // }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      title: 'Webpack App',
      hash: process.env.NODE_ENV === 'production',
  }),
  new ExtractTextPlugin({
    filename: 'style.css',
    disable: false
  }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}

/**url-loader 和 file-loader关系
 * 1、url-loader依赖于file-loader。如果options设置limit之后。小于limit的会被直接打包进js文件。但是如果图片大于limit则使用file-loader对其进行拷贝
 * 2、使用url-loader有好处是可以减少浏览器请求次数。但是也会影响首次加载的速度。并且不能对图片做按需加载
 * 
 */