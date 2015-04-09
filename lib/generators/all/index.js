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
  yeoman.generators.Base.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../../templates/root'));

  // the api to hookFor and pass arguments may vary a bit.
  this.hookFor('DN', {
    as: 'app',
    options: {
      options: {
        'skip-install': true
      }
    }
  });

  this.hookFor('DN', {
    as: 'component',
    args: ['my-component']
  });

  this.hookFor('DN', {
    as: 'mixin',
    args: ['my-mixin']
  });

  this.on('end', function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  });
}

util.inherits(Generator, yeoman.generators.Base);
