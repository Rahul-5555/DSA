// Approach 3: 
var lengthOfLastWord = function (s) {
  let n = s.length - 1;

  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      ++count;
    }
    else if (count > 0) {
      break;
    }
    --n;
  }
  return count;
}


let s = "Hello World   ";
console.log(lengthOfLastWord(s)); // Output: 5