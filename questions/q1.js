// Problem 1: write a function that searches for an element in an array and return the index, if the element is not present then return just -1

function searchElement(arr, e) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == e) {
      return i;
    }
  }
  return -1
}

let arr = [4, 2, 0, 10, 8, 30]
let result = searchElement(arr, 58)
console.log(result)

// searchElement(arr, 4) => 0
// searchElement(arr, 2) => 1
// searchElement(arr, 10) => 3
// searchElement(arr, 8) => 4
// searchElement(arr,10) => 30