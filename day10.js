// write a function that return a second largest number in array?

function secondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i]
    }
    else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest

}

let arr = [2, 4, 6, 8, 12]
let res = secondLargest(arr)
console.log(res)