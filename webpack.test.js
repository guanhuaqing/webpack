const merge = require('webpack-merge');
const webpackDevConfig = require('./webpack.dev.js');
module.exports = merge(webpackDevConfig, {
    modules:{
        rules: [
            {
                enforce: 'post',
                exclude: /(node_modules|\.test\.[tj]sx?$)/,
                test: /\.[tj]s$/,
                use: {
                  loader: 'istanbul-instrumenter-loader',
                  options: {esModules: true}
                },
              }
        ]
    }
});