var context = require.context('./content/scripts/', true, /\.test\.js$/);
context.keys().forEach(context);
