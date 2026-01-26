var ln = function(num){
  n = num.length -1;
  while(n>=0){
    if(num[n]% 2 !==0){
      return num.substring(0,n+1);
    }
    n--;
  }
  return ""
}