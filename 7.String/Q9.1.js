// Leetcode 125: Valid Palindrome
// Solution 2: without using built-in reverse()

var isPalindrome = function (s) {

  // convert to lowercase
  s = s.toLowerCase();

  let filteredString = "";
  let rev = "";

  // filter + reverse in one loop
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/)) {
      filteredString += s[i];   // forward build
      rev = s[i] + rev;         // reverse build
    }
  }

  // compare
  return filteredString === rev;
};

let s = "A man, a plane , a canal: Panama";
console.log(isPalindrome(s)); // true
