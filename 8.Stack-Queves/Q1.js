//leetcode:225 Implement stack using two queues

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
}

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    // let frontElement = this.q1.shift();
    // this.q2.push(frontElement);
    this.q2.push(this.q1.shift());
  }
  let ans = this.q1.shift();
  // exchange the names of two queues
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ans;
};

MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let front = this.q1[0];

  this.q2.push(this.q1.shift());

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return front;
}

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
}

// usage
let stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.top();
console.log(stack.top());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.empty());