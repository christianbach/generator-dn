module.exports = {
	modern: {
      src: "<%= settings.js.combine.modern.src %>",
      dest: "<%= settings.js.combine.modern.dest %>"
  },
  legacy: {
      src: "<%= settings.js.combine.legacy.src %>",
      dest: "<%= settings.js.combine.legacy.dest %>"
  }
}