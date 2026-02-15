// leetcode 115: Min stack

var MinStack = function () {
  this.s = [];
}

MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
    this.s.push([val, val]);
  } else {
    // compare current value with last minimum
    let minVal = Math.min(val, this.s[this.s.length - 1][1]);
    this.s.push([val, minVal]);
  }
};

MinStack.prototype.pop = function () {
  this.s.pop();
};

MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0];
};

MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};

// use case
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top());    // 0
console.log(minStack.getMin()); // -2
