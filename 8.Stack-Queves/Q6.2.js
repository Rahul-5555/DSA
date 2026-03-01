// Remove outer parentheses withot using stack?

var removeOuterParentheses = function(S) {
  let level = 0;
  let ans = '';
  for(let i=0; i<S.length;i++){
    if(S[i] === '('){
      ++level;
      ans += ((level > 1) ? S[i] : '');
    } else {
      ans += ((level > 1) ? S[i] : '');
      --level;
    }
  }
  return ans;
}

// use case
console.log(removeOuterParentheses("(()())(())")); // "()()()"