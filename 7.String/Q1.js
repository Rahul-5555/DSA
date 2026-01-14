// find the length of last word?
// Approach 1:
var lengthOfLastWord = function (s) {
  s = s.trim();
  s = s.split(" ")
  return s[s.length - 1].length;
}

let s = "Hello World";
console.log(lengthOfLastWord(s));