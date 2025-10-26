// write a function that return the number of negative number in the array?

function negativeNumber(arr) {
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1
    }
  }
  return count;
}

let arr = [2, 4, 5, -3, -2, -11]
let result = negativeNumber(arr)

console.log(result)