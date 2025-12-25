// find sum of odd numbers in an array?

let arr = [5, 3, 7, 2, 10, 1];

function sum(n) {
  let isOdd = (arr[n] % 2 != 0)
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return ((isOdd ? arr[n] : 0) + sum(n - 1))
}

console.log(sum(arr.length - 1))



/*

Nice logic 👍
Tumne **odd check + recursion** dono sahi use kiye hain.
Ab main **explain + dry run + clean version** simple **Hinglish** me bataata hoon.

---

## ✅ Given Code

```js
let arr = [5, 3, 7, 2, 10, 1];

function sum(n) {
  let isOdd = (arr[n] % 2 != 0)
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return ((isOdd ? arr[n] : 0) + sum(n - 1))
}

console.log(sum(arr.length - 1))
```

---

## 🧠 Logic (Simple Hinglish)

* Array ke **har element** ko check karna:

  * Agar **odd** hai → add karo
  * Agar **even** hai → ignore (0 add)
* Recursion:

  * Har call me index `n` kam hota jaata hai
  * Jab `n == 0` ho jaaye → base case

---

## 🧱 Odd Check

```js
let isOdd = (arr[n] % 2 != 0)
```

* `% 2 != 0` → odd number

---

## 🧱 Base Case

```js
if (n == 0) {
  return isOdd ? arr[n] : 0;
}
```

* Agar index `0` odd hai → add
* Warna → `0` return

---

## 🔁 Recursive Case

```js
return (isOdd ? arr[n] : 0) + sum(n - 1)
```

* Current element (agar odd) + baaki array ka sum

---

## 🧪 Dry Run (Step by Step)

### Array

```
[5, 3, 7, 2, 10, 1]
 index: 0  1  2  3   4  5
```

### Initial Call

```
sum(5)
```

### Going Down ⬇️

```
sum(5): arr[5]=1   (odd) → 1 + sum(4)
sum(4): arr[4]=10  (even)→ 0 + sum(3)
sum(3): arr[3]=2   (even)→ 0 + sum(2)
sum(2): arr[2]=7   (odd) → 7 + sum(1)
sum(1): arr[1]=3   (odd) → 3 + sum(0)
sum(0): arr[0]=5   (odd) → 5
```

---

### Returning Back ⬆️

```
sum(0) = 5
sum(1) = 3 + 5 = 8
sum(2) = 7 + 8 = 15
sum(3) = 0 + 15 = 15
sum(4) = 0 + 15 = 15
sum(5) = 1 + 15 = 16
```

---

## ✅ Final Output

```js
16
```

(Odd numbers: `5 + 3 + 7 + 1 = 16`)

---

## 🔧 Cleaner & Safer Version (Interview-ready)

```js
function sumOdd(n) {
  if (n < 0) return 0;
  return (arr[n] % 2 !== 0 ? arr[n] : 0) + sumOdd(n - 1);
}
```

---

## ⏱️ Complexity

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(n)` (recursion stack)

---

## 🧠 One-line Explanation (Interview)

> “Main recursion se array traverse karta hoon, har element ko odd check karta hoon, odd ho to add karta hoon, warna skip karta hoon.”

Agar chaho next:

* 🔁 even numbers ka sum
* 🎯 max odd number
* 🧩 recursion vs loop comparison

Bolo bhai 🚀

*/