function insertionSort(arr) {
  let n = arr.length;

  for (let i=1; i<n;i++){
    let curr = arr[i];
    let prev = i-1;

    while(arr[prev] > curr && prev >=0) {
      arr[prev+1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}
let arr = [1,2,-3,4,-5,6];
console.log(insertionSort(arr))
