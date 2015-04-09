module.exports = {
    frontend: {
        options: {
            name: "DN = DN ||{}; DN.config",
            cssFormat: "uppercase",
            jsFormat: "uppercase",
			amd : true
        },
        src: "./grunt/frontend-config.json",
        dest: [
            "<%= settings.rootDir %><%= settings.css.outputSharedConfig %>",
            "<%= settings.rootDir %><%= settings.js.outputSharedConfig %>",
        ]
    }  
}
