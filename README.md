# DN generator

A [Yeoman](http://yeoman.io/) generator for DN with
[Flight](http://flightjs.github.io/), Twitter's client-side JavaScript.
Get up and running with everything you need to create an
application.


## Recommended setup

Install [Node.js](http://nodejs.org/) (which comes with npm). It's best to have
npm version 1.2.x or above installed.

Next, globally install the Flight generator. This will automatically install
[Bower](http://bower.io/) and [Yo](http://yeoman.io/) as global dependencies.
These tools will help manage your dependencies and generate the boilerplate
Flight application.

```
npm install -g generator-dn
```

Make a new directory, and `cd` into it:

```
mkdir my-app && cd $_
```

You're now ready to generate an app!


## Main generator

To generate a Flight-based application:

```
yo DN:all
```

**N.B.** All your Node and client-side dependencies will be installed
automatically unless you include the `--skip-install` option.


## All generators and their output

Available generators (to be run in the root directory of a project).

* `DN`
* `DN:component <component-name>`
* `DN:mixin <mixin-name>`
* `DN:all`

### DN:app

Scaffolds a application file structure.

Example:

```
yo DN
```

Produces:

TODO


### DN:component

Generates a mixin component in `<baseDir>/<scriptDir>/component`.

Example:

```
yo DN:component my-component
```

Produces `<baseDir>/<scriptDir>/component/my-component.js`:

```js
define(function (require) {
  var defineComponent = require('flight/lib/component');

  return defineComponent(tweetBox);

  function tweetBox() {
    this.attributes({});
    this.after('initialize', function () {});
  }
});
```

And the test file `<baseDir>/<scriptDir>/specs/component/my-component.test.js`:

```js
'use strict';
var component = require('component/my-component.js');

describeComponent(component, function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    this.setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should do something');

});
```

And the less file `<baseDir>/<scriptDir>/less/component/my-component.less`:

```less
/***
 * Components: my-component
 */

 /**
  * my-component:
  * Something to describe your component.
  *
  *     @example
  *     <div class="my-component">my-component</div>
  */

.my-component {
  // Blocks
  &__block {

  }
  // Modifiers
  &--modifier {

  }
}
```

### DN:mixin

Generates a mixin component in `<baseDir>/<scriptDir>/mixin`.

Example:

```
yo DN:mixin my-mixin
```

Produces `<baseDir>/<scriptDir>/mixin/my-mixin.js`:

```js
'use strict';

/**
 * Module exports
 */

module.exports = myMixin;

/**
 * Module function
 */

function myMixin () {
  this.attributes({

  });

  this.after('initialize', function() {

  });
}
```

And the test file `<baseDir>/<scriptDir>/specs/mixins/my-mixin.test.js`:

```js
'use strict';
var component = require('mixin/my-mixin.js');

describeMixin(component, function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    this.setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should do something');

});
```

### DN:all

Shortcut that runs `DN:app`, `DN:component my_component`, and
`DN:mixin my_mixin`.
