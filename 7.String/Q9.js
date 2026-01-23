// Leetcode 125: find the string is palindrome or not
// solution 1:
// in this solution we use built in functions to reverse the string

var isPalindrome = function (s) {

  // converting str to lowercase
  s = s.toLowerCase();
  // filter value
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/)) {
      filteredString = filteredString + s[i];
      // filteredString += s[i];  // same as above
    }
  }
  // console.log(filteredString)
  // reverse the filtered string
  let rev = filteredString.split("").reverse().join("");
  console.log(rev)
  return filteredString === rev;
}

let s = "A man, a plane , a canal: Panama"
isPalindrome(s)