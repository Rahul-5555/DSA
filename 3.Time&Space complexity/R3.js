// Reverse String , do not return anything, modify s in-place instead.

var reverseString = function(s){
  let len = s.length;
  let halflen = Math.floor(len/2);

  for(i=0; i<halflen; i++){
    let temp = s[i];
    s[i] = s[len -1 - i];
    s[len -1 -i] = temp;
  }
}

let s = ["a", "k", "s", "h", "a", "y"];

// let res = reverseString(s)
console.log(s)