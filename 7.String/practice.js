var isPalindrome = function(s){
  s = s.toLowerCase();
  let filtereString = "";
  let rev = "";

  for(let i=0; i<s.length;i++){
    if(s[i].match(/[a-z0-9]/)){
      filtereString = filtereString + s[i];
      rev = s[i] + rev;
    }
  }
  return filtereString === rev;
}