module.exports = {
	 //Viewport options
        options: {
            width: "<%= frontendConfig['screen-lg'] %>",
            type: 'screen',
            cleanCss: false
        },
        all: {
            files: {
                "<%= settings.rootDir %><%= settings.css.outputLegacyCombined %>": ["<%= settings.rootDir %><%= settings.css.outputCombined %>"]
            }
        }
}