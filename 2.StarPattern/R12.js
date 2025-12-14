
var reverse = function (x) {
  let xCopy = x;
  x = Math.abs(x) // convert negative number to positive
  let rev = 0;
  while (x > 0) {
    let last = x % 10;
    rev = (10 * rev) + last;
    x = Math.floor(x/10)
  }
  let limit = Math.pow(2,32);
  if(rev < -limit || rev > limit) return 0;
  return (xCopy<0) ? -rev : rev;
}

let number = 123
let res = reverse(number)
console.log(res)