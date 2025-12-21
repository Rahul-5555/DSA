// Missing Number 

var missingNumber = function (nums) {
  let n = nums.length  // calculating length of nums
  let totalSum = n * (n + 1) / 2;
  let partialSum = 0;

  for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i];
  }
  return totalSum - partialSum;
}

let nums = [0, 3, 1]
let res = missingNumber(nums)
console.log(res)