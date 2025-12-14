// write a function that return a second largest number in array? but in a array have a single element then return null it's called corner cases. also handle duplicate array element?

function secondLargest(arr) {
  if (arr.length < 2) {
    return null; // improvement if array has single element.
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i]
    }
    // handling duplicate array element
    else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest

}

let arr = [4,8,0,2,8,7]
let res = secondLargest(arr)
console.log(res)