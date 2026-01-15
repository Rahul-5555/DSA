// Find words containing character solving without include method
// find Word Containing character?




/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let res = []

  for (let i = 0; i < words.length; i++) {
    // find if char x is present in words[i]
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
};

// m- no of words
// n- length of each word
// TC: O(n*m)
// SC: O(1) excluding the result array