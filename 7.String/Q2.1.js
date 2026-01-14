// Find the length of last word 
// Approach 2:
//1. trim all spaces
//2. count the character until you reach a space 

var lengthOfLastWord = function (s) {
  // trim all spaces at the end
  let n = s.length - 1; // start from last charcter
  while (n >= 0) {
    if (s[n] != " ") {
      break;
    }
    --n;
  }
  // n is the point where my last word starts

  // count the character until you reach a space
  let count = 0;
  while (n >= 0) {
    if (s[n] === " ") break;
    --n;
    ++count;
  }
  return count;
}