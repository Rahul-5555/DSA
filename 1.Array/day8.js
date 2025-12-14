// write a function that return a largest number in array?


function largestNumber(arr) {
  let largest = -Infinity; // arr[0] we need there least number

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
    }
  }
  return largest;
}

let arr = [2, 4, 5, 18, 8, 11];
let res = largestNumber(arr)
console.log(res)