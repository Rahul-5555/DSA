// Leetcode 14. Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // Step 1: Initialize index
  let x = 0;  

  // Step 2: Loop through characters of first string
  while (x < strs[0].length) {
    // Step 3: current character uthao
    let ch = strs[0][x];

    // Step 4: for loop (compare with all other strings)
    for (let i = 1; i < strs.length; i++) {
      // step 5: if not match or end of string, return substring
      if (ch != strs[i][x] || x == strs[i].length) {
        return strs[0].substring(0, x)
      }
    }
    ++x;
  }
  return strs[0]; // agar pura loop complete ho gaya, to pura first string return kar do
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));