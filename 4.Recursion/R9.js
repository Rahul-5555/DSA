// Linear search

let arr = [2,4,6,7,9,3];

function linearSearch(arr,target){
  for(let i=0; i<arr.length; i++){
    if(arr[i] == target){
      return i;
    }
  }
  return -1;
}

let result = linearSearch(arr,11)
console.log(result)