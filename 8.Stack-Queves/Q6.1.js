// Remove outermost Parenthesis
var removeOuterParentheses = function (s) {
  let stack = [];
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      ans += stack.length > 1 ? s[i] : "";
    } else {
      ans += stack.length > 1 ? s[i] : "";
      stack.pop();
    }

  }
  return ans;
}

// Example usage:
const input = "(()())(())";
const result = removeOuterParentheses(input);
console.log(result); // Output: "()()()"