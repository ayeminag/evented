var EventModel = require('./eventmodel');
var __extends = function(child, parent) {
  for(property in parent) {
    child[property] = parent[property];
  }
  child.prototype = new parent();
  child.prototype.constructor = child;
  return child;
}

var Evented = function(name, age) {
  this.name = name;
  this.age = age;
}

var Evented = __extends(Evented, EventModel);
var evented = new Evented("devine", "age");

evented.on('changename', function(name){
  this.name = name;
});

evented.emit('changename', "Aye Min Aung");
console.log(evented);
