module.exports = {
    production: {
    files: [
      // includes files within path
      {expand: true, flatten: true,src: ["<%= settings.rootDir %><%= settings.fonts.copyFrom %>"], dest: "<%= settings.rootDir %><%= settings.fonts.copyTo %>", filter: 'isFile'},   
    ],
  },
}