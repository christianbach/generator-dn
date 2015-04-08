var context = require.context('./script/', true, /-test\.js$/);
context.keys().forEach(context);
