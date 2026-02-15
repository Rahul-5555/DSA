// leetcode 20:  Valid Parenttheses using map

var isValid = function (s) {
  let stack = [];

  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
    // if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    }
    else {
      let top = stack.pop();
      // if (!top || (top === "[" && s[i] !== "]") || (top === "{" && s[i] !== "}") || (top === "(" && s[i] !== ")")) {
      if (!top || map[top] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// test case
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

// time complexity: O(n)
// space complexity: O(n) in worst case when all characters are opening brackets.