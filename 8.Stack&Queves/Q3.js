// Implement Queue using Stacks

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
}

MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
}