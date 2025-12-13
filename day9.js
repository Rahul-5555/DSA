// write a function that return a smalest number in array?


function smalestNumber(arr) {
  let smalest = +Infinity; // arr[0] we need there maximum number

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < smalest) {
      smalest = arr[i]
    }
  }
  return smalest;
}

let arr = [2, 4, 5, 18, 8, 11];
let res = smalestNumber(arr)
console.log(res)