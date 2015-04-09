 module.exports = {
 	options: {
      compress: {
        drop_console: true
      }
    },
 	modern: {
        files: {
            "<%= settings.rootDir %><%= settings.js.outputDistCombinedMinified %>": ["<%= settings.rootDir %><%= settings.js.outputDistCombined %>"]
        }
    },
    legacy: {
    	files: {
            "<%= settings.rootDir %><%= settings.js.outputDistLegacyCombinedMinified %>": ["<%= settings.rootDir %><%= settings.js.outputDistLegacyCombined %>"]
        }
    }
}