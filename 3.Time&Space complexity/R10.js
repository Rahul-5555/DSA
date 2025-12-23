// find single number in an array?

var singleNumber = function (nums) {
  let hash = {}

  for (i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
}

let nums = [3, 1, 5, 4, 1, 5, 3];
let res = singleNumber(nums)
console.log(res)