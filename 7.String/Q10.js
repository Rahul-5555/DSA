// LeetCode 1903: Find the largest odd number in a string. 
var largestOddNumber = function (num) {
  let n = num.length - 1;
  while (n >= 0) {
    if (num[n] % 2 !== 0) {
      return num.substring(0, n + 1);
    }
    n--;
  }
  return "";
}

// Example usage:
console.log(largestOddNumber("523246"));