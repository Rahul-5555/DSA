// leetcode 232: Implement Queue using Stacks

// leetcode 232: Implement Queue using Stacks

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop();
};

MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2[this.s2.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

// use case
var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);

console.log(obj.pop());  // 1
console.log(obj.pop());  // 2

obj.push(5);
obj.push(6);

console.log(obj.peek()); // 3
console.log(obj.pop());  // 3
console.log(obj.pop());  // 4
console.log(obj.pop());  // 5
console.log(obj.pop());  // 6

console.log(obj.empty()); // true
