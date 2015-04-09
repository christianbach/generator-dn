var webpack = require("webpack");
var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var grunt = require("grunt");

var baseProductionConfig = {
    entry: {
        start: "./<%= settings.webpack.baseUrl %>/main.js"
    },
    output: {
        path: "./<%= settings.rootDir %><%= settings.js.outputDistCombinedPath %>",
        filename: "<%= settings.js.outputDistCombinedFileNameStart %>.[hash].<%= settings.js.outputDistCombinedFileNameMin %>.<%= settings.js.outputDistCombinedFileNameEnd %>",
        publicPath: "/Content/Scripts/dist/"
    },
    externals: {
        "modernizr": "Modernizr",
        "jquery": "$"
    },
    plugins: [
        // this plugin makes webpack not only looking for package.json,
        // but also for a bower.json with a main-field
        new webpack.BannerPlugin("DN - DagnesNyheter, 2015", {}),
        new webpack.DefinePlugin({
            DEBUG: false,
            PRODUCTION: true,
            SOURCEMAPWAIT: 0
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }),
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ]),
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],

    resolve: {
        modulesDirectories: ['<%= settings.webpack.baseUrl %>', '<%= settings.webpack.baseUrl %>/vendor', './<%= settings.coreDir %>/node_modules'],
        root: path.resolve("<%= settings.webpack.baseUrl %>/vendor/")
    },

    stats: {
        // Configure the console output
        colors: true,
        modules: false,
        reasons: true
    },
    // stats: false disables the stats output

    storeStatsTo: "webpackStatus", // writes the status to a variable named xyz
    // you may use it later in grunt i.e. <%= xyz.hash %>

    progress: true, // Don't show progress
    // Defaults to true

    failOnError: true, // don't report error to grunt if webpack find errors
    // Use this if webpack errors are tolerable and grunt should continue

    watch: false, // use webpacks watcher
    // You need to keep the grunt process alive

    keepalive: false, // don't finish the grunt task
    // Use this in combination with the watch option
};

var baseDevConfig = {
    cache: true,
    entry: {
        start: "./<%= settings.webpack.baseUrl %>/main.js"
    },
    output: {
        path: "./<%= settings.rootDir %><%= settings.js.outputDistCombinedPath %>",
        filename: "<%= settings.js.outputDistCombinedFileNameStart %>.<%= settings.js.outputDistCombinedFileNameCombined %>.<%= settings.js.outputDistCombinedFileNameEnd %>",
        publicPath: "/Content/Scripts/dist/"
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "modernizr": "Modernizr",
        "jquery": "$"
    },
    devtool: "sourcemap",
    plugins: [
       // this plugin makes webpack not only looking for package.json,
       // but also for a bower.json with a main-field
       new webpack.DefinePlugin({
           DEBUG: true,
           PRODUCTION: false,
           SOURCEMAPWAIT: 500,
		   LIVERELOAD : true
       }),
       new webpack.ResolverPlugin([
           new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
       ]),
       new webpack.ProvidePlugin({
           $: "jquery"
       }),
       // new CommonsChunkPlugin({filename : "commons.js"}),
    ],

    resolve: {
        modulesDirectories: ['<%= settings.webpack.baseUrl %>', '<%= settings.webpack.baseUrl %>/vendor', './<%= settings.coreDir %>/node_modules'],
        root: path.resolve("<%= settings.webpack.baseUrl %>/vendor/")
    },

    stats: {
        // Configure the console output
        colors: true,
        modules: false,
        reasons: true
    },
    // stats: false disables the stats output

    storeStatsTo: "webpackStatus", // writes the status to a variable named xyz
    // you may use it later in grunt i.e. <%= xyz.hash %>

    progress: true, // Don't show progress
    // Defaults to true

    failOnError: true, // don't report error to grunt if webpack find errors
    // Use this if webpack errors are tolerable and grunt should continue

    watch: false, // use webpacks watcher
    // You need to keep the grunt process alive

    keepalive: false, // don't finish the grunt task
    // Use this in combination with the watch option
};


//Copy the Dev-conf and add the minify-step.
var minDevConfig = grunt.util._.clone(baseDevConfig, true);
minDevConfig.plugins = minDevConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
]);
minDevConfig.output.filename = "<%= settings.js.outputDistCombinedFileNameStart %>.<%= settings.js.outputDistCombinedFileNameMin %>.<%= settings.js.outputDistCombinedFileNameEnd %>";


module.exports = {
    "dev": baseDevConfig,
    "dev-min": minDevConfig,
    "production": baseProductionConfig
}
