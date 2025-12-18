

// ## ✅ Corrected Code(with comments)

// ```js
var removeElement = function (nums, val) {
  let x = 0; // pointer for placing valid elements

  for (let i = 0; i < nums.length; i++) {
    // agar current element "val" ke equal nahi hai
    if (nums[i] !== val) {
      // us element ko x position par rakh do
      nums[x] = nums[i];
      x = x + 1; // x ko aage badhao
    }
  }

  // x batata hai kitne elements valid bache
  return x;
};

let nums = [3, 2, 1, 5, 3, 4, 8, 3];
let val = 3;

let res = removeElement(nums, val);
console.log(res);          // 5
console.log(nums.slice(0, res)); // [2, 1, 5, 4, 8]


// ## 🧠 Logic Explanation(Simple)

// ### Problem kya hai ?

// * Array se ** given value(`val`) ko remove ** kana hai
//   * New array nahi banana
//     * Sirf ** count return** karna hai

// ---

// ### 🔑 Core Idea(Two Pointer)

//   * `i` → pura array traverse karta hai
//     * `x` → batata hai next valid element kaha rakhenge

// ---

// ### Step - by - step Dry Run

// Array:

// ```js
// [3, 2, 1, 5, 3, 4, 8, 3]
// val = 3
// ```

//   | i | nums[i] | val se equal ? | action | x | array(valid part) |
// | - | ------- | ------------- | --------- | - | ------------------ |
// | 0 | 3 | yes ❌         | skip | 0 | [] |
// | 1 | 2 | no ✅          | nums[0]=2 | 1 | [2] |
// | 2 | 1 | no ✅          | nums[1]=1 | 2 | [2, 1] |
// | 3 | 5 | no ✅          | nums[2]=5 | 3 | [2, 1, 5] |
// | 4 | 3 | yes ❌         | skip | 3 |                    |
// | 5 | 4 | no ✅          | nums[3]=4 | 4 | [2, 1, 5, 4] |
// | 6 | 8 | no ✅          | nums[4]=8 | 5 | [2, 1, 5, 4, 8] |
// | 7 | 3 | yes ❌         | skip | 5 |                    |

//   ---

// ## ✅ Final Result

//   * ** Return value:** `5`
//     * ** Valid array part:**

//       ```js
//   [2, 1, 5, 4, 8]
//   ```

// ---

// ## ⏱ Complexity(Interview Point)

//   * ** Time:** `O(n)`
//     * ** Space:** `O(1)`(in -place)

// ---

// ## 🗣 Interview Me Kaise Bologe ?

// > “I used a two - pointer approach.One pointer scans the array, and the other keeps track of the position where the next valid element should be placed.Elements equal to the given value are skipped, and the final pointer value gives the count of remaining elements.”

// ---

