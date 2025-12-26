// Binary search: apply only sorted array

var binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
      return middle;
    }
    else if (target < nums[middle]) {
      right = middle - 1;
    }
    else {
      left = middle + 1
    }
  }
  return -1;
}

let nums = [2, 4, 5, 6, 7]
console.log(binarySearch(nums,7))