// Merge sort optimize approach?

// Merge two sorted arrays (optimized approach)

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;      // last index of nums1 actual elements
  let p2 = n - 1;      // last index of nums2
  let i = m + n - 1;   // last index of nums1 (extra space)

  for (i = 0; i < m + n; i++) {
    //i < m + n = 0 < 3 + 3  // condition true
  }
};
// Example usage:
let nums1 = [1, 3, 5, 0, 0, 0]
let m = 3;
let nums2 = [8, 4, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]


/*

Good question 👍
This is **not Merge Sort**, this is **“Merge Two Sorted Arrays (optimized, in-place)”**
(LeetCode: *Merge Sorted Array*).

I’ll do **3 things**:
1️⃣ Fix your code
2️⃣ Explain the logic **step by step (simple language)**
3️⃣ Give you **interview-ready explanation**

---

## ❌ Mistakes in Your Code (Important)

### ❌ 1. Break condition is wrong

```js
if (p2 >= 0) {
  break;
}
```

This breaks the loop **too early**.

✅ Correct:

```js
if (p2 < 0) break;
```

👉 If `num2` is finished, we stop.

---

### ❌ 2. `i` is not declared

```js
for(i = m+n-1; i >= 0; i--)
```

✅ Use `let i`

---

## ✅ Correct Optimized Code (In-Place)

```js
// Merge two sorted arrays (optimized approach)

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;      // last index of nums1 actual elements
  let p2 = n - 1;      // last index of nums2
  let i = m + n - 1;   // last index of nums1 (extra space)

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
    i--;
  }
};
```

---

## 🧠 Core Idea (Very Important)

👉 **We merge from the end, not from the start**

Why?

* `nums1` already has extra space at the end
* If we merge from front → data overwrite problem
* From back → safe and clean

---

## 🔍 Dry Run (Simple)

### Input:

```js
nums1 = [1,3,5,0,0,0], m = 3
nums2 = [2,4,6],       n = 3
```

### Pointers:

```
p1 → 5
p2 → 6
i  → last index
```

### Step-by-step:

```
Compare 5 & 6 → put 6
Compare 5 & 4 → put 5
Compare 3 & 4 → put 4
Compare 3 & 2 → put 3
Compare 1 & 2 → put 2
Put 1
```

### Result:

```js
[1,2,3,4,5,6]
```

---

## 🧩 Logic in One Line (Golden Line ⭐)

> **We compare the largest elements from both arrays and place the bigger one at the end of nums1.**

Say this in interviews 🔥

---

## ⏱️ Complexity

* **Time Complexity:** `O(m + n)`
* **Space Complexity:** `O(1)` (no extra array)

---

## ❗ Very Common Interview Trap

❓ Why don’t we check `p1 >= 0` in the `while` condition?

✅ Because:

* If `nums1` finishes first, remaining `nums2` must be copied
* If `nums2` finishes first → nums1 is already correct

---

## 🟢 Practice Question (One by One)

Bilkul 👍
Main **bilkul simple, friendly Hindi (Hinglish)** mein explain karta hoon — step by step, bina heavy terms ke.

---

## 📌 Problem kya hai?

Hume **2 sorted arrays** ko merge karna hai **bina extra array use kiye**.

### Example:

```js
nums1 = [1,3,5,0,0,0]
m = 3   // nums1 ke valid elements
nums2 = [2,4,6]
n = 3
```

👉 Result chahiye:

```
[1,2,3,4,5,6]
```

---

## 🤔 Trick kya hai? (Main Idea)

👉 **Merge piche se karte hain, aage se nahi**

❓ Kyun?

* nums1 ke end mein already **extra space** hai
* Agar aage se merge karoge → data overwrite ho jayega ❌
* Isliye **last index se compare karte hain** ✅

---

## 🧠 Teen Pointer Use hote hain

### 1️⃣ `p1`

* nums1 ke **last actual element** par

```js
p1 = m - 1
```

### 2️⃣ `p2`

* nums2 ke **last element** par

```js
p2 = n - 1
```

### 3️⃣ `i`

* nums1 ke **last index** par

```js
i = m + n - 1
```

---

## 🔄 Kaam kaise hota hai?

### Rule:

👉 nums1[p1] aur nums2[p2] ko compare karo
👉 Jo bada ho, usse nums1[i] mein daal do
👉 Phir pointer piche le jao

---

## 🔍 Dry Run (Asaan Language)

### Start:

```
nums1 = [1,3,5,0,0,0]
nums2 = [2,4,6]

p1 = 2 → 5
p2 = 2 → 6
i  = 5
```

---

### Step 1:

```
5 vs 6 → 6 bada
nums1[5] = 6
p2--, i--
```

---

### Step 2:

```
5 vs 4 → 5 bada
nums1[4] = 5
p1--, i--
```

---

### Step 3:

```
3 vs 4 → 4 bada
nums1[3] = 4
p2--, i--
```

---

### Step 4:

```
3 vs 2 → 3 bada
nums1[2] = 3
p1--, i--
```

---

### Step 5:

```
1 vs 2 → 2 bada
nums1[1] = 2
p2--, i--
```

---

### nums2 khatam 🎯

Ab nums1 ka jo bacha hai wo already sahi jagah par hai.

### Final:

```
[1,2,3,4,5,6]
```

---

## 🧠 Yaad rakhne wali line (Interview GOLD)

> **Hum end se merge karte hain kyunki nums1 ke end mein free space hoti hai.**

---

## ⏱️ Complexity (Simple)

* **Time:** `O(m + n)`
* **Space:** `O(1)` (koi extra array nahi)

---

## 🟢 Ab tumhari baari (Practice – bina code)

```js
nums1 = [4,5,6,0,0,0]
nums2 = [1,2,3]
```

❓ Final nums1 kya banega?

Answer karo, phir main **next tricky case** samjhaunga 🔥


*/