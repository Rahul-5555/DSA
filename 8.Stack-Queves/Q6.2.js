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





// Time Complexity: O(n) - We traverse the string once.
// Space Complexity: O(n) - In the worst case, the result string can be as long as the input string (if there are no outer parentheses).

/*
"Instead of using a stack which would require O(n) space, I'm using a single counter to track the nesting depth. The key insight is that outer parentheses occur at level 1 - opening when level becomes 1, closing when level returns to 0. By adding characters only when level > 1, we automatically skip all outer parentheses. This gives us O(n) time and O(1) extra space complexity."
*/