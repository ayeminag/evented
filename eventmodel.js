__slice = Array.prototype.slice;
var EventModel = function(){};
EventModel.prototype.addEventListener = EventModel.prototype.on;

EventModel.prototype.on = function(event, callback) {
  this.hasOwnProperty("__events") || (this.__events = {});
  this.__events.hasOwnProperty(event) || (this.__events[event] = []);
  this.__events[event].push(callback);
  return this;
}

EventModel.prototype.emit = function(event) {
  var args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  if(this.__events.hasOwnProperty(event)) {
    var callbacks = this.__events[event];
    for(var i = 0, l = callbacks.length; i < l; i++) {
      var callback = callbacks[i];
      callback.apply(this, args);
    }
  }
  return this;
}

module.exports = EventModel;
