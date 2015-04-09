module.exports = {
	options: {
        	jshintrc: '.jshintrc'
      	},
  	all: {
        src: [
	        "<%= settings.rootDir %><%= settings.patterns.scripts %>",
            "!<%= settings.rootDir %>Content/scripts/shared-config.js",
	        "!<%= settings.rootDir %>Content/scripts/vendor/**/*.js", 
	        "!<%= settings.rootDir %>Content/scripts/dist/**/*.js",
	        "!<%= settings.rootDir %>Content/scripts/libraries/**/*.js",
	        "!<%= settings.rootDir %>Content/scripts/require.js"
        ]
        
    }
}

