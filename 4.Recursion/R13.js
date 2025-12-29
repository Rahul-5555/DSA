// Insertion Sort Algorithm in JavaScript?

let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];

function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while(arr[prev] > curr && prev >= 0){
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

let result = insertionSort(arr);
console.log(result)