module.exports = {
    // Global options
    options: {
        encoding: 'utf8',
        fileNameFormat: '${name}.v${hash}.${ext}',
        renameFiles: true
    },
    "production-fonts": {
        src: [
            "<%= settings.rootDir %><%= settings.fonts.type1 %>",  
	        "<%= settings.rootDir %><%= settings.fonts.type2 %>",    
	        "<%= settings.rootDir %><%= settings.fonts.type3 %>",   
	        "<%= settings.rootDir %><%= settings.fonts.type4 %>"   	     
        ],
        // File that refers to above files and needs to be updated with the hashed name
        dest: [
            "<%= settings.rootDir %><%= settings.css.outputCombined %>",
            "<%= settings.rootDir %><%= settings.css.outputCombinedMinified %>",
        ]
    },
    "production-sprites": {
        src: [
            "<%= settings.rootDir %><%= settings.image.outputSvgStandard %>",
            "<%= settings.rootDir %><%= settings.image.outputSpriteStandard %>",
            "<%= settings.rootDir %><%= settings.image.outputSpriteRetina %>"
        ],
        // File that refers to above files and needs to be updated with the hashed name
        dest: [
            "<%= settings.rootDir %><%= settings.css.outputCombined %>",
            "<%= settings.rootDir %><%= settings.css.outputCombinedMinified %>",
            "<%= settings.rootDir %><%= settings.css.outputLegacyCombined %>",
            "<%= settings.rootDir %><%= settings.css.outputLegacyCombinedMinified %>"
        ]
    },
    "production-css": {
        src: [
            "<%= settings.rootDir %><%= settings.css.outputCombined %>",
            "<%= settings.rootDir %><%= settings.css.outputCombinedMinified %>",
            "<%= settings.rootDir %><%= settings.css.outputLegacyCombined %>",
            "<%= settings.rootDir %><%= settings.css.outputLegacyCombinedMinified %>"
        ],
        // File that refers to above files and needs to be updated with the hashed name
        dest: [
            "<%= settings.rootDir %><%= settings.razor.insertCommonStylesAndScriptsView %>"
        ]
    }
}