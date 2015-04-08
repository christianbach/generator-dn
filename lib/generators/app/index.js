/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
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

  this.argument('name', {
    type: String,
    required: false
  });
  this.name = this.name || path.basename(process.cwd());
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
  var cb = this.async();

  var prompts = [
    {
      type: 'confirm',
      name: 'dncorecss',
      message: 'Include DN core css?'
    }];

  this.prompt(prompts, function(props) {
    this.dncorecss = props.dncorecss;
    cb();
  }.bind(this));
};

/**
 * Setup the default directory structure
 *
 * @api public
 */

Generator.prototype.setupEnv = function setupEnv() {
  this.mkdir('content');
  this.mkdir('content/less');
  this.mkdir('content/less/config');
  this.mkdir('content/less/mixins');
  this.mkdir('content/less/components');
  this.mkdir('content/css');
  this.mkdir('content/img');
  this.mkdir('content/scripts');
  this.mkdir('content/scripts/mixins');
  this.mkdir('content/scripts/components');
  this.mkdir('content/scripts/specs');
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
  // Create in generated root
  this.copy('application/bowerrc', '.bowerrc');
  this.copy('application/karma.conf.js', 'karma.conf.js');
  this.copy('application/gitignore', '.gitignore');
  this.copy('application/gitattributes', '.gitattributes');
  this.copy('application/Gruntfile.js', 'Gruntfile.js');
  this.copy('application/jshintrc', '.jshintrc');
  this.bulkDirectory('application/grunt/tasks', 'grunt/tasks');
  this.bulkDirectory('application/grunt/templates', 'grunt/templates');
  this.copy('application/grunt/settings.json', 'grunt/settings.json');
  this.copy('application/grunt/frontend-config.json', 'grunt/frontend-config.json');
  //this.copy('application/grunt/templates', 'grunt/templates');
  this.template('application/bower.json', 'bower.json');
  this.template('application/package.json', 'package.json');

  // copy hello world templates
  this.template('component.js', 'content/scripts/components/hello-world.js', {
    name: 'helloWorld'
  });

  this.template('spec.js', 'content/scripts/specs/hello-world-test.js', {
    type: 'component',
    requirePath: 'components/hello-world'
  });

  if(this.dncorecss) {
    this.copy('application/less/main.less', 'content/less/main.less');
  }

  /*
  this.template('application/CHANGELOG.md', 'CHANGELOG.md');
  this.template('application/CONTRIBUTING.md', 'CONTRIBUTING.md');
  this.template('application/LICENSE.md', 'LICENSE.md');
  this.template('application/README.md', 'README.md');
  */
  // Create in generated 'app' dir
  /*
  this.copy('application/app/favicon.ico', 'app/favicon.ico');
  this.copy('application/app/robots.txt', 'app/robots.txt');
  this.template('application/app/404.html', 'app/404.html');
  this.template('application/app/index.html', 'app/index.html');
  this.template('application/app/main.css', 'app/css/main.css');
  this.template('application/app/main.js', 'app/js/main.js');
  this.template('page.js', 'app/js/page/default.js');
*/
  //
  this.copy('application/tests.webpack.js', 'tests.webpack.js');
};

Generator.name = 'Flight';
