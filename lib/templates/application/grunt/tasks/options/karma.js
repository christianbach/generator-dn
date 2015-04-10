module.exports = {
	options: {
		configFile: 'karma.conf.js',
		basePath: "<%= settings.karma.basePath %>"
	},
	production: {
		singleRun: true,
		browsers: ['PhantomJS']

	},
	teamcity: {
		singleRun: true,
		browsers: ['PhantomJS'],
		reporters: ['teamcity']
	},
	dev: {
		reporters: 'dots',
		browsers: ['Chrome']
	}
}
