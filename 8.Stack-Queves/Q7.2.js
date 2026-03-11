/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {

    if (["+", "-", "*", "/"].includes(tokens[i])) {

      let num2 = stack.pop();
      let num1 = stack.pop();

      let ans;

      if (tokens[i] === "+") ans = num1 + num2;
      else if (tokens[i] === "-") ans = num1 - num2;
      else if (tokens[i] === "*") ans = num1 * num2;
      else ans = Math.trunc(num1 / num2);

      stack.push(ans);

    } else {
      stack.push(Number(tokens[i]));
    }
  }

  return stack.pop();
};

// use cases
console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 4 + (13 / 5) = 4 + 2 = 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22