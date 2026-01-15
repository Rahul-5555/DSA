
var lengthOfLastWord = function (s) {
  // 🟢 STEP 1: Start from the last character
  let n = s.length - 1; // n points to the last index of the string

  // 🟢 STEP 2: Remove trailing spaces
  // n = 7, s[n] = ' ' 
  while (n >= 0) {
    if (s[n] === " ") {
      --n;
    } else {
      break;
    }
  }
  // Now, n points to the last character of the last word
  // STEP 3: Count the characters of the last word
  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      --n;
      ++count;
    }
    else {
      break;
    }
  }
  return count;
}

let s = "Hello World   ";
console.log(lengthOfLastWord(s)); // Output: 5