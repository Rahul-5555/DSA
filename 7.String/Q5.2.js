// Jwels ans stones problem using set?

var numJewelsInStone = function (jewels, stones) {
  // Step 1: Create a Set to store all jewel types
  // Set allows fast lookup (O(1)) and stores unique values
  let jewelSet = new Set();

  // Step 2: Add each character from jewels string into the Set
  for (let i = 0; i < jewels.length; i++) {
    jewelSet.add(jewels[i]);
  }

  // Step 3: Initialize count to store number of jewels found in stones
  let count = 0;

  // Step 4: Iterate through each stone
  for (let i = 0; i < stones.length; i++) {
    // Step 5: Check if the current stone exists in jewelSet
    if (jewelSet.has(stones[i])) {
      count++; // Increment count if stone is a jewel
    }
  }

  // Step 6: Return total number of jewels found
  return count;
};


// Tc: O(1) Sc:O(1)

// TEST CASES
// =====================

// Test Case 1
let jewels1 = "aA";
let stones1 = "aAAbbbb";
console.log("Test 1 Output:", numJewelsInStone(jewels1, stones1));
// Expected Output: 3

// Test Case 2
let jewels2 = "z";
let stones2 = "ZZ";
console.log("Test 2 Output:", numJewelsInStone(jewels2, stones2));
// Expected Output: 0

// Test Case 3 (edge case)
let jewels3 = "abc";
let stones3 = "aaabbbccc";
console.log("Test 3 Output:", numJewelsInStone(jewels3, stones3));
// Expected Output: 9

// Test Case 4 (no jewels)
let jewels4 = "xyz";
let stones4 = "aaaa";
console.log("Test 4 Output:", numJewelsInStone(jewels4, stones4));
// Expected Output: 0