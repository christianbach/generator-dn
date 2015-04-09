module.exports = {
	modern: {
        src: ["<%= settings.rootDir %><%= settings.css.outputCombined %>"],
        dest: "<%= settings.rootDir %><%= settings.css.outputCombinedMinified %>"
    },
    legacy: {
        src: ["<%= settings.rootDir %><%= settings.css.outputLegacyCombined %>"],
        dest: "<%= settings.rootDir %><%= settings.css.outputLegacyCombinedMinified %>"
    }	
}