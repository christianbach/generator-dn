var context = require.context('./<%= baseDir %>/<%= jsDir %>', true, /\.test\.js$/);
context.keys().forEach(context);
