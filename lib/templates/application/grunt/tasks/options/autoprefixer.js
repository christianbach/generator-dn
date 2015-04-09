module.exports = {
	options: {
       	browsers: "<%= settings.css.browsers %>"
	},
  	all: {
        src: "<%= settings.rootDir %><%= settings.css.outputLessCompiled %>",
		dest: "<%= settings.rootDir %><%= settings.css.outputCombined %>",
    }
}
