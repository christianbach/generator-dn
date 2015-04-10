module.exports = {
	options: {
       	browsers: "<%= settings.autoprefixer.browsers %>"
	},
  	all: {
        src: "<%= settings.rootDir %><%= settings.css.outputLessCompiled %>",
		dest: "<%= settings.rootDir %><%= settings.css.outputCombined %>",
    }
}
