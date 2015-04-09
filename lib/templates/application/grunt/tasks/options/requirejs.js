module.exports = {
  options: {
    mainConfigFile : "<%= settings.rootDir %><%= settings.requirejs.configFile %>",
    baseUrl: "<%= settings.requirejs.baseUrl %>",
    deps: "<%= settings.requirejs.deps %>",
    removeCombined: true,
    findNestedDependencies: true,
    preserveLicenseComments: false,
    waitSeconds: "<%= settings.requirejs.waitSeconds %>",
    optimize: "<%= settings.requirejs.optimize %>",
    logLevel: "<%= settings.requirejs.logLevel %>",
    throwWhen: {
        optimize: true
    },
    done: function(done, output) {
      var grunt = require("grunt");
      var lines = output.split("\n");
      var createdFile = lines[1];
      var buffer = grunt.file.read(createdFile);
      grunt.log.ok("Created: " + createdFile);
      grunt.log.ok((buffer.length / 1000).toFixed() + " kB");
      done();
    }
  }
};
