var webpack = require("webpack");
var path = require("path");

var config = {
  cache: true,
  entry: {},
  output: {
    path: "./Content/dist",
    filename: "alma.[name].js",
    publicPath: "/Content/dist/"
  },
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "modernizr": "Modernizr",
    "jquery": "$"
  },
  devtool: "source-map",
  plugins: [
    // this plugin makes webpack not only looking for package.json,
    // but also for a bower.json with a main-field
    new webpack.DefinePlugin({
      DEBUG: true,
      PRODUCTION: false,
      SOURCEMAPWAIT: 500,
      LIVERELOAD: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ]),
    new webpack.ProvidePlugin({
      $: "jquery"
    }),
    // new CommonsChunkPlugin({filename : "commons.js"}),
  ],

  resolve: {
    modulesDirectories: ['./Content/scripts', './bower_components', './node_modules'],
    root: path.resolve("bower_components")
  },

  stats: {
    // Configure the console output
    colors: true,
    modules: false,
    reasons: true
  },
  // stats: false disables the stats output

  storeStatsTo: "webpackStatus", // writes the status to a variable named xyz
  // you may use it later in grunt i.e.

  progress: true, // Don't show progress
  // Defaults to true

  failOnError: true, // don't report error to grunt if webpack find errors
  // Use this if webpack errors are tolerable and grunt should continue

  watch: false, // use webpacks watcher
  // You need to keep the grunt process alive

  keepalive: false, // don't finish the grunt task
  // Use this in combination with the watch option
};

module.exports = config;
