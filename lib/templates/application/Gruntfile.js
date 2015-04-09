'use strict';
module.exports = function(grunt) {

  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync("*", {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/, "");
      object[key] = require(path + option);
    });

    return object;
  }

  function registerTasks(tasks) {
    Object.keys(tasks).forEach(function(task) {
      grunt.registerTask(task, tasks[task]);
    });
  }

  var config = {
    pkg: grunt.file.readJSON("package.json"),
    settings: grunt.file.readJSON("./grunt/settings.json"),
    frontendConfig: grunt.file.readJSON("./grunt/frontend-config.json"),
    env: process.env
  };

  grunt.util._.extend(config, loadConfig("./grunt/tasks/options/"));

  grunt.initConfig(config);

  grunt.loadTasks("./grunt/tasks");

  require("load-grunt-tasks")(grunt);

  registerTasks(config.settings.tasks);
};
