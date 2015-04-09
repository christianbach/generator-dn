module.exports = {
	
	all: {
		options: {
			spriteElementPath: "<%= settings.rootDir %><%= settings.image.svgFolder %>",
			spritePath: "<%= settings.rootDir %><%= settings.image.outputSvgStandardPath %>",
			cssPath: "<%= settings.rootDir %><%= settings.less.outputSprites %>",
			sizes: {
		        retina: 80,
		        standard: 40
		    },
		    unit: 10,
		    layout: "packed",
		    refSize: "standard",
		    template: "grunt/templates/svg-sprites/dn-stylesheet-less.hbs",
		    selector: function (filename, tokens) {
	            var parts = [filename];
	            if (tokens.prefix) {
	                parts.unshift(tokens.prefix);
	            }
	            if (tokens.size) {
	                parts.push(tokens.size);
	            }
	            return "@" + parts.join("-");
	        }
		}
	}
}