
function removeDuplicates(nums) {
  let x = 0;
  for (i=0; i<nums.length;i++){
    if(nums[i] > nums[x] ) {
      x = x + 1;
      nums[x] = nums[i]
    }
  }
  return x + 1;
}

let nums = [2, 2, 3, 3, 4, 4]

let result = removeDuplicates(nums);
console.log(result);