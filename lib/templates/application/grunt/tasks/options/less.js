module.exports = {
	    
    development: {
    	files: {
        	"<%= settings.rootDir %><%= settings.css.outputLessCompiled %>": "<%= settings.rootDir %><%= settings.less.main %>"
    	},
    	options: {
	        sourceMap: "<%= settings.less.development.sourceMap %>",
	        cleancss: "<%= settings.less.development.cleancss %>",
	        compress: "<%= settings.less.development.compress %>"
    	}
    },
	production: {
		files: {
	    	"<%= settings.rootDir %><%= settings.css.outputLessCompiled %>": "<%= settings.rootDir %><%= settings.less.main %>"
		},
		options: {
			sourceMap: "<%= settings.less.production.sourceMap %>",
	        cleancss: "<%= settings.less.production.cleancss %>",
	        compress: "<%= settings.less.production.compress %>"
		}

	}
}