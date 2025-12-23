// second approach for find single number

var singleNumber = function(nums){
  let xor = 0;
  for(let i=0; i<nums.length;i++){
    xor = xor ^ nums[i];
  }
  return xor;
}

let nums = [2,2,4,3,4]
let res = singleNumber(nums)
console.log(res)