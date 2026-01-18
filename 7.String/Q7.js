// leetcode:1221: split a string in a balanced string?

var balamcedstringSplit = function (s) {
  let R = 0;
  let L = 0;
  let count = 0;
  for(let i=0; i< s.length; i++){
    if(s[i] === "R"){
      ++R;
    }
    else {
      ++L;
    }
    if(L === R){
      ++count;
      R = 0;
      L = 0;
    }
  }
  return count;
}

