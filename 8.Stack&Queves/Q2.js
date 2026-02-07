// Implement stack using one queue
//leetcode:225 Implement stack using two queues

var MyStack = function () {
  this.q = [];
}

MyStack.prototype.push = function (x) {
  this.q.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    // let frontElement = this.q1.shift();
    // this.q2.push(frontElement);
    this.q.push(this.q.shift());
  };

  return this.q.shift();
};

MyStack.prototype.top = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }
  let front = this.q[0];

  this.q.push(this.q.shift());

  return front;
}

MyStack.prototype.empty = function () {
  return this.q.length === 0;
}

// usage
let stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.top();
console.log(stack.top()); // 4
console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.empty()); // true