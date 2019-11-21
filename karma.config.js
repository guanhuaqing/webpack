const webpackConfig = require('./webpack.dev.js');
// Karma configuration
// Generated on Thu Nov 21 2019 17:04:10 GMT+0800 (China Standard Time)
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    plugins: [
        require('karma-webpack'),
        require('karma-jasmine'),
        require('karma-coverage'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-sourcemap-loader'),
        require('karma-remap-coverage')
        // require('karma-coverage-istanbul-reporter')
    ],

    // list of files / patterns to load in the browser
    files: [
      'src/**/*.ts',
      'test/**/*.ts',
    ],


    // list of files / patterns to exclude
    exclude: [
    ],

  
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/**/*.ts': ['webpack'],
        'src/**/*.ts': ['webpack','coverage']
    },
     /* 新增的配置项 */
     coverageReporter: {
        type: 'html',
        dir: 'coverage/'
      },
    coverageIstanbulReporter: {
        dir: require('path').join(__dirname, 'test-coverage/'),
        reports: ['html', 'lcovonly'],
        fixWebpackSourcePaths: true,
        thresholds: {
            emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
            // thresholds for all files
            global: {
              statements: 100,
              lines: 100,
              branches: 100,
              functions: 100
            },
            // thresholds per file
            each: {
              statements: 100,
              lines: 100,
              branches: 100,
              functions: 100,
              overrides: {
                'baz/component/**/*.js': {
                  statements: 98
                }
              }
            }
          }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage','kjhtml'],
    webpack: {
        module: webpackConfig.module,
        resolve: webpackConfig.resolve,
        mode: webpackConfig.mode,
        devtool: 'inline-source-map',
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
