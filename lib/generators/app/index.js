/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
//var chalk = require('chalk');
var pkg = require('./../../../package.json');
var util = require('util');
var yeoman = require('yeoman-generator');


/**
 * Module exports.
 */

module.exports = Generator;

/**
 * Generator constructor.
 *
 * @api public
 */

function Generator() {
  yeoman.generators.Base.apply(this, arguments);

  this.genVersion = pkg.version;

  this.sourceRoot(path.join(__dirname, '../../templates/'));

  this.on('end', function() {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  });
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Prompts for information to seed the generated app
 *
 * @api public
 */

Generator.prototype.askFor = function askFor() {
  var done = this.async();

  var prompts = [{
    type: 'input',
    name: 'name',
    message: 'What\'s your project called',
    default: this.config.get('name') || 'my_app'
  }, {
    type: 'input',
    name: 'baseDir',
    message: 'What\'s your frontend base directory',
    default: this.config.get('baseDir') || 'Content'
  }, {
    type: 'input',
    name: 'jsDir',
    message: 'In your base directory, where do you want your js files',
    default: this.config.get('jsDir') || 'scripts'
  }, {
    type: 'input',
    name: 'lessDir',
    message: 'In your base directory, where do you want your less files',
    default: this.config.get('lessDir') || 'less'
  }, {
    type: 'input',
    name: 'svgDir',
    message: 'In your base directory, where do you want your SVG files',
    default: this.config.get('svgDir') || 'svg'
  }, {
    type: 'input',
    name: 'distDir',
    message: 'In your base directory, where do you want your built files for production',
    default: this.config.get('distDir') || 'dist'
  }, {
    type: 'confirm',
    name: 'coreCss',
    message: 'Do you whant to include DN core css',
    default: this.config.get('coreCss')
  }, {
    type: 'confirm',
    name: 'coreJs',
    message: 'Do you whant to include DN core js',
    default: this.config.get('coreJs')
  }];

  this.prompt(prompts, function(answers) {
    this.name = answers.name;
    this.baseDir = answers.baseDir;
    this.jsDir = answers.jsDir;
    this.lessDir = answers.lessDir;
    this.distDir = answers.distDir;
    this.svgDir = answers.svgDir;
    this.coreCss = answers.coreCss;
    this.coreJs = answers.coreJs;

    // Save user configuration options to .yo-rc.json file
    this.config.set({
      name: this.name,
      baseDir: this.baseDir,
      jsDir: this.jsDir,
      lessDir: this.lessDir,
      distDir: this.distDir,
      svgDir: this.svgDir,
      coreCss: this.coreCss,
      coreJs: this.coreJs
    });
    this.config.save();

    // And where done
    done();

  }.bind(this));
};



/**
 * Setup the default directory structure
 *
 * @api public
 */

Generator.prototype.setupEnv = function setupEnv() {

  var subDirHelper = function(folder) {
    this.mkdir(this.baseDir + folder);
  }.bind(this);

  // static files
  this.mkdir(this.baseDir);
  subDirHelper('/' + this.distDir);
  subDirHelper('/' + this.lessDir);
  subDirHelper('/' + this.lessDir + '/config');
  subDirHelper('/' + this.lessDir + '/mixins');
  subDirHelper('/' + this.lessDir + '/component');
  subDirHelper('/' + this.svgDir);
  subDirHelper('/' + this.jsDir);
  subDirHelper('/' + this.jsDir + '/mixin');
  subDirHelper('/' + this.jsDir + '/component');
  subDirHelper('/' + this.jsDir + '/specs');

  // grunt
  this.mkdir('grunt');
  this.mkdir('grunt/tasks');
  this.mkdir('grunt/tasks/options');
  this.mkdir('grunt/templates');
  this.mkdir('grunt/templates/svg-sprites');
};

/**
 * Generate the standard project files
 *
 * Copy over basic files that don't require any app-specific data.
 * Other files are templates that require app-specific data.
 *
 * @api public
 */

Generator.prototype.projectFiles = function projectFiles() {

  // Create root configurations
  this.copy('application/bowerrc', '.bowerrc');
  this.copy('application/karma.conf.js', 'karma.conf.js');
  this.copy('application/gitignore', '.gitignore');
  this.copy('application/gitattributes', '.gitattributes');
  this.copy('application/Gruntfile.js', 'Gruntfile.js');
  this.copy('application/gulpfile.js', 'gulpfile.js');
  this.copy('application/jshintrc', '.jshintrc');
  this.template('application/bower.json', 'bower.json');
  this.template('application/package.json', 'package.json');

  // Grunt
  this.template('application/grunt/settings.json', 'grunt/settings.json');
  this.copy('application/grunt/frontend-config.json', 'grunt/frontend-config.json');

  // Grunt templates
  this.copy('application/grunt/templates/svg-sprites/dn-stylesheet-less.hbs', 'grunt/templates/svg-sprites/dn-stylesheet-less.hbs');

  // Grunt tasks
  this.copy('application/grunt/tasks/bonnier-core.js', 'grunt/tasks/bonnier-core.js');
  //this.copy('application/grunt/tasks/build-webpack.js', 'grunt/tasks/build-webpack.js');

  // Grunt tasks options
  this.copy('application/grunt/tasks/options/assemblyinfo.js', 'grunt/tasks/options/assemblyinfo.js');
  this.copy('application/grunt/tasks/options/autoprefixer.js', 'grunt/tasks/options/autoprefixer.js');
  this.copy('application/grunt/tasks/options/clean.js', 'grunt/tasks/options/clean.js');
  this.copy('application/grunt/tasks/options/copy.js', 'grunt/tasks/options/copy.js');
  this.copy('application/grunt/tasks/options/cssmin.js', 'grunt/tasks/options/cssmin.js');
  this.copy('application/grunt/tasks/options/dr-svg-sprites.js', 'grunt/tasks/options/dr-svg-sprites.js');
  this.copy('application/grunt/tasks/options/hashres.js', 'grunt/tasks/options/hashres.js');
  this.copy('application/grunt/tasks/options/jshint.js', 'grunt/tasks/options/jshint.js');
  this.copy('application/grunt/tasks/options/karma.js', 'grunt/tasks/options/karma.js');
  this.copy('application/grunt/tasks/options/less.js', 'grunt/tasks/options/less.js');
  this.copy('application/grunt/tasks/options/pixrem.js', 'grunt/tasks/options/pixrem.js');
  this.copy('application/grunt/tasks/options/shared_config.js', 'grunt/tasks/options/shared_config.js');
  this.copy('application/grunt/tasks/options/string-replace.js', 'grunt/tasks/options/string-replace.js');
  this.copy('application/grunt/tasks/options/stripmq.js', 'grunt/tasks/options/stripmq.js');
  this.copy('application/grunt/tasks/options/watch.js', 'grunt/tasks/options/watch.js');
  this.copy('application/grunt/tasks/options/webpack.js', 'grunt/tasks/options/webpack.js');

  // Assets
  this.template('application/app/main.js', this.baseDir + '/' + this.jsDir + '/main.js');
  this.template('application/app/main.less', this.baseDir + '/' + this.lessDir + '/' + this.name + '.less');
  this.copy('application/app/dn-logo.svg', this.baseDir + '/' + this.svgDir + '/dn-logo.svg');

  // Webpack
  this.template('application/tests.webpack.js', 'tests.webpack.js');
  this.template('application/dev.webpack.js', 'dev.webpack.js');
};

Generator.name = 'DN';
