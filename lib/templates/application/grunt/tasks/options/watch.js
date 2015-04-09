module.exports = {
    specs: {
        files: ["<%= settings.rootDir %><%= settings.patterns.specs %>"],
        tasks: ["watch-specs"]
    },
    grunt: {
		files: ["<%= settings.patterns.grunt %>"],
		options: {
		    reload: true
		},
		tasks: ["default"]
	},
	scripts: {
	    files: [
            "<%= settings.rootDir %><%= settings.patterns.scripts %>",
            "!<%= settings.rootDir %><%= settings.patterns.scriptsVendor %>",
            "!<%= settings.rootDir %><%= settings.patterns.excludeScripts %>"],
		tasks: ["watch-scripts"],
		options: {
		    spawn: false,
		    livereload: 1360
		}
	},
	stylesheets: {
		files: ["<%= settings.rootDir %><%= settings.patterns.less %>"],
		tasks: ["watch-stylesheets"],
		options: {
		    spawn: false,
			livereload: 1360
		}
	},
	sprites: {
		files: ["<%= settings.rootDir %><%= settings.patterns.sprites %>"],
		tasks: ["watch-sprites"],
		options: {
		    spawn: false,
			livereload: 1360
		}
	},
	coreScripts: {
		files: ["<%= settings.scriptCoreDir %><%= settings.patterns.sharedScripts %>"],
		tasks: ["watch-core"],
		options: {
		    spawn: false,
			 livereload: 1360
		}
	}
}