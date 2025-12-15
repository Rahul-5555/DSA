/*

Perfect 👍
Ab tum concept samajh chuke ho, isliye main **exact LeetCode-style question** generate kar raha hoon — **same concept (two pointers + sorted array)** par.

---

## 🧩 LeetCode-Style Question

### **Remove Duplicates from Sorted Array (Easy)**

You are given a **sorted integer array `nums`**.

Your task is to **remove the duplicates in-place** such that each unique element appears **only once**.

* You must not use extra space for another array.
* Modify the input array in-place.
* Return the **number of unique elements**.

After removing the duplicates, the **first `k` elements** of the array should contain the unique elements in **the same order** as they appeared originally.

It does not matter what you leave beyond the first `k` elements.

---

### ✅ Example 1

```js
Input: nums = [1,1,2]
Output: 2
Explanation: The modified array is [1,2,_]
```

---

### ✅ Example 2

```js
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5
Explanation: The modified array is [0,1,2,3,4,_,_,_,_,_]
```

---

### 🔒 Constraints

* `1 <= nums.length <= 3 * 10^4`
* `-100 <= nums[i] <= 100`
* `nums` is **sorted in non-decreasing order**

---

## 🧠 What this question tests (Interview Point of View)

* Understanding of **sorted arrays**
* **Two-pointer technique**
* In-place array modification
* Difference between **index (`x`)** and **count (`x + 1`)**
* Time Complexity optimization → `O(n)`

---

## ✍️ Bonus Practice (Think & Answer)

1️⃣ What will be returned for:

```js
[1,1,1,1]
```

2️⃣ Why does this solution **fail** if the array is **not sorted**?

3️⃣ How would you explain this solution in **2 lines in an interview**?

---

If you want next:

* 🔄 **LeetCode follow-up question** (allow at most 2 duplicates)
* 🧪 **Tricky test cases**
* 🎤 **Exact interview answer script**

Bas bolo friend 😄

*/

var removeDuplicates = function (nums) {

  let x = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let res = removeDuplicates(nums)
console.log(res)



/*

Bilkul friend 😊
Main **simple language + step-by-step logic** me samjhaata hoon.

---

## 📌 Problem samjho (LeetCode: Remove Duplicates from Sorted Array)

* Array **sorted** hai
* Duplicate values hain
* Hume **same array me hi duplicates remove** karne hain
* Sirf **unique elements count** return karna hai

Input:

```js
[0,0,1,1,1,2,2,3,3,4]
```

Output:

```js
5   // unique elements: 0,1,2,3,4
```

---

## 🔑 Core Idea (Two Pointer Technique)

* `i` → loop chalane ke liye
* `x` → **last unique element ka index**

---

## 🧠 Code ka Logic (Line by Line)

```js
var removeDuplicates = function (nums) {
```

➡ Function banaya jo array leta hai

---

```js
let x = 0;
```

➡ `x` pointer
➡ Ye batata hai **last unique element ka index**

Starting me:

```
x = 0 → nums[0] = 0
```

---

```js
for (i = 0; i < nums.length; i++) {
```

➡ Pure array me loop

---

```js
if (nums[i] > nums[x]) {
```

➡ **Important condition**

Kyuki array sorted hai:

* Agar `nums[i] > nums[x]`
* Matlab **new unique element mila**

❌ equal hoga → duplicate
✅ greater hoga → new number

---

```js
x = x + 1;
nums[x] = nums[i];
```

➡ Jab new unique mila:

1. `x` ko aage badhao
2. Us position par new value daal do

Array ko **in-place modify** kar rahe hain

---

```js
return x + 1;
```

➡ `x` index hai
➡ Elements count = `x + 1`

---

## 🧪 Dry Run (Step by Step)

| i | nums[i] | nums[x] | Condition | x | Array (important part) |
| - | ------- | ------- | --------- | - | ---------------------- |
| 0 | 0       | 0       | ❌         | 0 | [0]                    |
| 1 | 0       | 0       | ❌         | 0 | [0]                    |
| 2 | 1       | 0       | ✅         | 1 | [0,1]                  |
| 3 | 1       | 1       | ❌         | 1 |                        |
| 4 | 1       | 1       | ❌         | 1 |                        |
| 5 | 2       | 1       | ✅         | 2 | [0,1,2]                |
| 6 | 2       | 2       | ❌         | 2 |                        |
| 7 | 3       | 2       | ✅         | 3 | [0,1,2,3]              |
| 8 | 3       | 3       | ❌         | 3 |                        |
| 9 | 4       | 3       | ✅         | 4 | [0,1,2,3,4]            |

Final:

```
x = 4
return x + 1 = 5
```

---

## 📦 Final Array (Valid Part)

```js
[0, 1, 2, 3, 4]
```

---

## ⏱ Time & Space Complexity

* **Time:** `O(n)` → ek hi loop
* **Space:** `O(1)` → extra memory nahi

---

## 🧠 Interview me kaise bolega?

> “I used two pointers. One pointer tracks the last unique element, and the other scans the array. Since the array is sorted, whenever I find a number greater than the last unique value, I move the pointer forward and update the array in place.”


🔒 Interview Golden Line (yaad rakhna)

“This approach works only because the array is sorted.
If the array is not sorted, this logic will fail.”

👆 Ye line bol doge → interviewer impressed 😎
---

🧠 Kyun ye code fail karega?

Tumhara logic is line par based hai 👇

if (nums[i] > nums[x]) { ... }

🔥 Interview One-liner

“I traverse the sorted array and keep a pointer for the last unique element. When I find a larger value, I update the next position and increase the pointer.
👉 Ye condition sirf tab kaam karti hai jab array sorted ho

Kyun?

Sorted array me:

duplicates = same ya chhote values

new unique = always greater

Unsorted array me:

new element chhota bhi ho sakta hai

condition fail ho jaati hai

Agar chaho:

* ❓ main tumse **practice questions** poochu
* 🔄 same logic ka **diagram banaun**
* 🧪 ya **edge cases** explain karun

Bas bolo friend 😄


*/