var removeOuterParentheses = function (S) {
  let level = 0;      // Tracks current nesting depth
  let ans = '';       // Stores result

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      ++level;        // Entering deeper level
      // Only add '(' if we're NOT at level 1 (i.e., not outer)
      ans += ((level > 1) ? S[i] : '');
    } else {
      // For ')', we check BEFORE decrementing
      ans += ((level > 1) ? S[i] : '');
      --level;        // Exiting current level
    }
  }
  return ans;
}

// Example usage:
console.log(removeOuterParentheses("(()())(())"));