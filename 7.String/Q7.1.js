// Improve solution leetcode 1221: Split a string in balanced string?

var balancedStringSplit = function (s) {
  let temp = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      ++temp;
    }
    else {
      --temp;
    }
    if (temp === 0) {
      ++count;
    }
  }
  return count;
}