// Leetcode 242: Valid Anagram

var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

let s = "anagram";
let t = "nagaram";

console.log(isAnagram(s, t)); // true
