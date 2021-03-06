/**
 * Module dependencies.
 */

var path = require('path');
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
  yeoman.generators.NamedBase.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../../templates/'));
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Generate files for a Flight component
 *
 * @api public
 */

Generator.prototype.createComponentFiles = function createComponentFiles() {
  this.name = this.name || 'my-component';
  this.baseDir = this.config.get('baseDir');
  this.jsDir = this.config.get('jsDir');
  this.lessDir = this.config.get('lessDir');
  this.template('component.js', this.baseDir + '/' + this.jsDir + '/component/' + this.name + '.js');
  this.template('spec.js', this.baseDir + '/' + this.jsDir + '/specs/component/' + this.name + '.test.js', {
    'requirePath': 'component/' + this.name,
    'type': 'component'
  });
  this.template('component.less', this.baseDir + '/' + this.lessDir + '/component/' + this.name + '.less');
};
