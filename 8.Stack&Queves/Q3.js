// leetcode 232: Implement Queue using Stacks

var MyQueue = function (x) {
  this.s1 = [];
  this.s2 = [];
}

MyQueue.prototype.push = function (x) {
  this.s1.push(x);
}

MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    while (this.s2.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop();
}

MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2[this.s2.length - 1];
}

MyQueue.prototype.peek = function () {
  return this.s1.length === 0 && this.s2.length === 0;
}