//leetcode:225 Implement stack using two queues

var MyStack = function(){
  this.q1 = [];
  this.q2 = [];
}

MyStack.prototype.push = function(x){
  this.q1.push(x);
};

MyStack.prototype.pop = function(){
  
}