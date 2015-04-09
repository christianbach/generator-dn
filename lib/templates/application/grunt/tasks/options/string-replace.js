module.exports = {
    production: {
        files: {
            "<%= settings.rootDir %><%= settings.css.outputCombined %>": "<%= settings.rootDir %><%= settings.css.outputCombined %>",
            "<%= settings.rootDir %><%= settings.css.outputCombinedMinified %>": "<%= settings.rootDir %><%= settings.css.outputCombinedMinified %>"
        },
        options: {
            replacements: [
              // place files inline example
              {
                  pattern: /\/Content\/fonts\//mig,
                  replacement: '/Content/fonts/dist/'
              }
            ]
        }
    },
    webpackhash: {
        files: {
            "<%= settings.rootDir %><%= settings.razor.insertCommonStylesAndScriptsView %>": "<%= settings.rootDir %><%= settings.razor.insertCommonStylesAndScriptsView %>",
            "<%= settings.rootDir %><%= settings.razor.insertSpecificStylesAndScriptsView %>": "<%= settings.rootDir %><%= settings.razor.insertSpecificStylesAndScriptsView %>"
        },
        options: {
            replacements: [
              // place files inline example
              {
                  pattern: "<%= settings.js.outputDistCombined %>",
                  replacement: "<%= settings.js.outputDistCombinedPath %><%= settings.js.outputDistCombinedFileNameStart %>.<%= webpackStatus.hash %>.<%= settings.js.outputDistCombinedFileNameMin %>.<%= settings.js.outputDistCombinedFileNameEnd %>"
              }
            ]
        }
    },
    newproduction: {
        files: {
            "<%= settings.rootDir %><%= settings.css.outputCombined %>": "<%= settings.rootDir %><%= settings.css.outputCombined %>",
            "<%= settings.rootDir %><%= settings.css.outputCombinedMinified %>": "<%= settings.rootDir %><%= settings.css.outputCombinedMinified %>",
            "<%= settings.rootDir %><%= settings.razor.insertCommonStylesAndScriptsView %>": "<%= settings.rootDir %><%= settings.razor.insertCommonStylesAndScriptsView %>"
        },
        options: {
            replacements: [
              // place files inline example
            {
                pattern: /\/Content\/fonts\//mig,
                replacement: 'http://content.dn.se/dnse/'
            },
              {
                  pattern: /\/Content\/sprites\//mig,
                  replacement: 'http://content.dn.se/dnse/'
              },
              {
                  pattern: /~\/Content\/css\//mig,
                  replacement: 'http://content.dn.se/dnse/'
              },
              {
                  pattern: /~\/Content\/scripts\/dist\//mig,
                  replacement: 'http://content.dn.se/dnse/'
              }
            ]
        }
    }
}
