// Leetcode  150: Evaluate Reverse Polish Notation

// Given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation, evaluate the expression.

var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
      let num2 = stack.pop();
      let num1 = stack.pop();
      let ans = eval(`${b}${tokens[i]}${num2}`);
      stack.push(Match.trunc(ans));
    }
    else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack.pop());
};