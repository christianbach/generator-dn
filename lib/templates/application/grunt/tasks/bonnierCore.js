'use strict';
module.exports = function(grunt) {
  var bower = require('bower');
  var cwd = process.cwd();
  var settings = grunt.config.get("settings");
  var rc = grunt.file.readJSON(".bowerrc");

  function deleteBowerBonnierCore(dirs) {
    dirs.forEach(function(dir) {
      grunt.file.delete(dir, {
        force: true
      });
      grunt.log.ok(["Removed: " + dir])
    })
  };

  function getBowerBonnierCore() {
    var pattern = rc.directory + "/BonnierCore-*";
    return grunt.file.expand(pattern);
  };

  function bowerUpdate(path, done, callback) {
    bower.commands.update([], {}, {cwd: path}).on('end', function(updated) {
      callback(updated);
      done();
    });
  };

  grunt.registerTask("BonnierCore:update", "", function() {
    // make this task async
    var done = this.async();
    
    // get all dirs
    var bonnierCoreDirs = getBowerBonnierCore();

    // delete all dirs
    deleteBowerBonnierCore(bonnierCoreDirs);

    // run bower updates
    bowerUpdate(cwd, done, function(updated) {
      Object.keys(updated).forEach(function(pkg) {
        grunt.log.ok(["Updated: " + pkg]);
      });
    });
  });
};