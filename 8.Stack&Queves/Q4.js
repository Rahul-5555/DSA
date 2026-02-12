// leetcode 20:  Valid Parenttheses

var isValid = function(s){
  let stack = [];


  for(let i=0; i<s.length;i++){
    if(s[i] === '(' || s[i] === '{' || s[i] === '['){
      stack.push(s[i]);
    }
    else {
      let top = stack.pop();
      if(!top || (top === "[" && s[i] !== "]") || (top === "{" && s[i] !== "}") || (top === "(" && s[i] !== ")")){
        return false;
      }
    }
  }
  return stack.length === 0;
}

// test case
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true