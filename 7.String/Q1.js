// find the length of last word?
// Approach 1:
var lengthOfLastWord = function (s) {
  s = s.trim();  // remove extra spaces from the front & back.
  console.log(s)
  s = s.split(" ") // give you an array of word
  console.log(s)
  console.log(s[s.length - 1]) // give the last word of the array

  return s[s.length - 1].length;
}

let s = "Hello World   ";
console.log(lengthOfLastWord(s));