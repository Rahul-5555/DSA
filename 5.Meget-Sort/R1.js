// Merge Sort function
var sortArray = function (arr) {

  // Array ki length n me store (yahan use nahi ho rahi, par samajhne ke liye)
  let n = arr.length;

  // 🛑 Base Case:
  // Agar array me 0 ya 1 element hai, to wo already sorted hai
  if (arr.length <= 1) return arr;

  // Array ko beech se todne ke liye mid nikalte hain
  let mid = Math.floor(arr.length / 2);

  // Left half: index 0 se mid-1 tak
  // Recursively left part ko sort kar rahe hain
  let left = sortArray(arr.slice(0, mid));

  // Right half: mid se end tak
  // Recursively right part ko sort kar rahe hain
  let right = sortArray(arr.slice(mid));

  // Dono sorted halves ko merge karke return kar dete hain
  return merge(left, right);
};

// Merge function: do sorted arrays ko ek sorted array me convert karta hai
function merge(left, right) {

  // Result array jisme final sorted elements jayenge
  let res = [];

  // i -> left array ka pointer
  let i = 0;

  // j -> right array ka pointer
  let j = 0;

  // Jab tak dono arrays me elements bache hue hain
  while (i < left.length && j < right.length) {

    // Agar left ka element chhota hai
    if (left[i] < right[j]) {
      res.push(left[i]); // left ka element add
      i++;               // left pointer aage badhao
    }
    // Agar right ka element chhota ya equal hai
    else {
      res.push(right[j]); // right ka element add
      j++;                // right pointer aage badhao
    }
  }

  // Agar left ya right me elements bach gaye ho
  // unhe directly result me add kar dete hain
  return [
    ...res,
    ...left.slice(i),
    ...right.slice(j)
  ];
}

// Input array
let arr = [5, 3, 1, 2];

// Merge Sort call
console.log(sortArray(arr));

/*

🧠 Merge Sort ka Logic (Simple Words)

1️⃣ Divide
Array ko tab tak do parts me todte jao jab tak single element na reh jaye.

2️⃣ Conquer (Sort)
Single element array already sorted hota hai.

3️⃣ Combine (Merge)
Do sorted arrays ko compare karke ek sorted array bana do.

👉 Ye process recursion se hota hai.

🔁 Dry Run (Step-by-Step)
Input:
[5, 3, 1, 2]

Step 1: Pehla split
left  = [5, 3]
right = [1, 2]

Step 2: Left part [5, 3]
[5]  [3]


Merge:

compare 5 & 3 → 3 smaller
result = [3, 5]

Step 3: Right part [1, 2]
[1] [2]


Merge:

compare 1 & 2 → already sorted
result = [1, 2]

Step 4: Final Merge

Merge [3, 5] & [1, 2]

Compare	Pick	Result
3 vs 1	1	[1]
3 vs 2	2	[1, 2]
Left remaining	3,5	[1,2,3,5]
✅ Final Output: [1, 2, 3, 5]
*/