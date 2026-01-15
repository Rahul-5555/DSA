// find Word Containing character?
var findWordContaining = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    // find if char x is present in words[i]
    if (words[i].includes(x)) {
      res.push(i);
    }
  }
  return res;
}