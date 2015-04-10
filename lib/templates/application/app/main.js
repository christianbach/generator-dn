var fastclick = require("fastclick");
var flight = require("flight");

function App() {

}

App.prototype.init = function() {
  fastclick.attach(document.body);
};

require.ensure([], function () {
  App.init();
});
