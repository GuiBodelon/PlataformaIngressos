module.exports = function () {
  var deliveryVegasMap = require('./deliveryvegasmap.js');
  var events = require('./events.js');
  var cities = require('./cities.js');
  var states = require('./states.js');

  return {
    'delivery-transaction': deliveryVegasMap(),
    events: events(),
    cities: cities(),
    states: states(),
  };
};
