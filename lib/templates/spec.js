'use strict';
var component = require('<%= requirePath %>');

describe<%= _.classify(type) %>(component, function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    this.setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  it('should do something');

});
