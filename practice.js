
function removeElemet(nums, val) {
  let x = 0;
  for (i=0; i<nums.length;i++){
    if(nums[i]  != val) {
      nums[x] = nums[i]
      x = x + 1;
    }
  }
  return x 
}

let nums = [2, 2, 3, 3, 4, 4]

let val = 3
let result = removeElemet(nums,val);
console.log(result);