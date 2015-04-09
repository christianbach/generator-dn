module.exports = {
	options: {
      rootvalue: "<%= frontendConfig['font-base'] %>",
      replace: true
    },
    dist: {
      src: "<%= settings.rootDir %><%= settings.css.outputLegacyCombined %>",
      dest: "<%= settings.rootDir %><%= settings.css.outputLegacyCombined %>"
    }
}