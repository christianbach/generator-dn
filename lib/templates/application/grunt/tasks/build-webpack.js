'use strict';
module.exports = function(grunt) {
  grunt.registerTask('webpack-development-task', 'Build dev files!', function() {
    var done = this.async();
    var settings = grunt.config.get("settings");
    var webpackSettings = grunt.config.get("webpack");
    var merge = require('deepmerge')

    var userPreference = require("../../" + settings.rootDir + settings.contentDir + settings.js.webpackUserSettingsFileName);
    var devConfig = merge(webpackSettings.dev, userPreference);

    webpackSettings.dev = devConfig;
    webpackSettings.dev
    grunt.config.set("webpack", webpackSettings);
    grunt.task.run("webpack:dev");
    done();
  });
  grunt.registerTask('webpack-production-task', 'Build dev files!', function() {
    var done = this.async();
    var settings = grunt.config.get("settings");
    var webpackSettings = grunt.config.get("webpack");
    var merge = require('deepmerge')

    var userPreference = require("../../" + settings.rootDir + settings.contentDir + settings.js.webpackUserSettingsFileName);
    var devConfig = merge(webpackSettings.production, userPreference);

    webpackSettings.production = devConfig;
    grunt.config.set("webpack", webpackSettings);
    grunt.task.run("webpack:production");
    done();
  });
};
