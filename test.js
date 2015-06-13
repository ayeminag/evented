var EventModel = require('./eventmodel');

Function.prototype.extends = function(parent) {
  if(parent.constructor === Function) {
    this.prototype = new parent;
    this.prototype.parent = parent.prototype;
  } else {
    this.prototype = parent;
    this.prototype.parent = parent;
  }
  this.prototype.constructor = this;
  return this;
}

var Evented = function(name, age) {
  this.name = name;
  this.age = age;
}

var Evented = Evented.extends(EventModel);
var evented = new Evented("devine", "age");

evented.on('changename', function(name){
  this.name = name;
});

evented.emit('changename', "Aye Min Aung");
console.log(evented);
