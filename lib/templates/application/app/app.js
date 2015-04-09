var fastclick = require("fastclick");
var flight = require("flight");

function App() {

}

App.prototype.ready = function() {

  fastclick.attach(document.body);

};


module.exports = App;
