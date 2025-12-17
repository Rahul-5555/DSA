// Moves zeroes to the end of an array while maintaining the order of non-zero elements

var moveZeroes = function(nums) {
    let lastNonZeroIndex = 0; // Pointer for the position of the last non-zero element
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
        nums[lastNonZeroIndex] = nums[i];
        lastNonZeroIndex++;
      }
    }
    // Fill the remaining positions with zeroes
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
      nums[i] = 0;
    }
}

// Example usage:
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]