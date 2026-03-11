// Leetcode  150: Evaluate Reverse Polish Notation

// Given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation, evaluate the expression.

var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (["+", "-", "*", "/"].includes(tokens[i])) {
      let num2 = stack.pop();
      let num1 = stack.pop();
      let ans = eval(`${num1}${tokens[i]}${num2}`);
      stack.push(Math.trunc(ans));
    }
    else {
      stack.push(tokens[i]);
    }
  }
  // return stack[0];
  return Number(stack.pop());
};


// use cases
console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 4 + (13 / 5) = 4 + 2 = 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22