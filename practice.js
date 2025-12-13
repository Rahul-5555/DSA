function SecondlargestNumber(arr) {
  let firstL = -Infinity;
  let secondL= -Infinity;
  for(i=0; i<arr.length; i++) {
    if(arr[i] > firstL) {
      secondL = firstL
      firstL = arr[i]
    }
    else if(arr[i] > secondL) {
      secondL = arr[i]
    }
  }
  return secondL;
}

let arr = [2,23,12,14]
let res = SecondlargestNumber(arr)
console.log(res)