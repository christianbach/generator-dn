// Karma configuration
//
// For all available config options and default values, see:
// http://karma-runner.github.io/0.10/config/configuration-file.html

var webpack = require('webpack');
var path = require("path");

module.exports = function(config) {
  'use strict';

  config.set({

    browsers: ['PhantomJS'],

    //singleRun: true,

    frameworks: ['jasmine'],

    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      'bower_components/webpack-jasmine-flight/lib/jasmine-flight.js',
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
      'bower_components/webpack-jasmine-flight/lib/jasmine-flight.js': ['webpack']
    },

    reporters: ['dots'],

    webpack: {

      devtool: 'inline-source-map',

      plugins: [
        new webpack.ResolverPlugin(
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
      ],

      resolve: {
        root: [path.join(__dirname, "bower_components")],
        modulesDirectories: ['scripts', 'bower_components', 'node_modules'],
        alias: {
          "iframe-resizer": "iframe-resizer/src/iframeResizer"
        }
      },

      module: {
        loaders: [{
          test: /[\\\/]bower_components[\\\/]modernizr[\\\/]modernizr\.js$/,
          loader: "imports?this=>window!exports?window.Modernizr"
        }]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    captureTimeout: 5000,
    singleRun: false,
    reportSlowerThan: 500,
    color: true

  });
};
/*
old stuff
module.exports = function (config) {
  'use strict';

  config.set({
    autoWatch: true,
    basePath: '',
    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
    captureTimeout: 5000,
    exclude: [
      'app/js/main.js'
    ],
    files: [

    ],
    frameworks: [
      'jasmine',
      'requirejs'
    ],
    reporters: [process.env.TRAVIS ? 'dots' : 'progress'],
    reportSlowerThan: 500,
    singleRun: false
  });
};
*/
