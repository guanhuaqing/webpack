const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

// "build": "webpack --config webpack.prod.js --process --colors",
// "serve": "webpack-dev-server --open --config webpack.dev.js --process --colors",
module.exports = (env,argv) => {
    console.log(env)
    return (env.mode==='dev')? devConfig:prodConfig;
};