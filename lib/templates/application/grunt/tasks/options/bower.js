module.exports = {
  all: {
    rjsConfig: "<%= settings.rootDir %><%= settings.requirejs.configFile %>",
     options: {
      transitive: true,
      "exclude-dev": true
    }
  }
}