// Factorial using recursion

function Factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * Factorial(n - 1);
}

console.log(Factorial(6))

/*

Perfect example 👍
Ab main **factorial using recursion** ko **logic + dry run + interview tips** ke saath **simple Hinglish** me explain karta hoon.

---

## ✅ Given Code

```js
function Factorial(n){
  if(n == 1) {
    return 1;
  }
  return n * Factorial(n-1);
}

console.log(Factorial(5))
```

---

## 🧠 Factorial ka matlab

```
5! = 5 × 4 × 3 × 2 × 1 = 120
```

---

## 🧠 Logic (Simple Hinglish)

* Har number ko uske **previous factorial** se multiply karte hain
* **Recursion**:

  * Function khud ko call karta hai
* **Base case**:

  * Jab `n == 1` ho → ruk jao

---

## 🧱 Base Case

```js
if(n == 1) {
  return 1;
}
```

👉 Important hai, warna **infinite recursion** ho jayegi

---

## 🔁 Recursive Case

```js
return n * Factorial(n-1);
```

👉 Matlab:

* Current `n` × baaki ka factorial

---

## 🧪 Dry Run (Factorial(5))

### Calls going down ⬇️

```
Factorial(5)
= 5 × Factorial(4)

Factorial(4)
= 4 × Factorial(3)

Factorial(3)
= 3 × Factorial(2)

Factorial(2)
= 2 × Factorial(1)

Factorial(1)
= 1   ← base case hit
```

---

### Returning back (Stack Unwind) ⬆️

```
Factorial(1) = 1
Factorial(2) = 2 × 1 = 2
Factorial(3) = 3 × 2 = 6
Factorial(4) = 4 × 6 = 24
Factorial(5) = 5 × 24 = 120
```

---

## ✅ Final Output

```js
120
```

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(n)` (recursion call stack)

---

## ⚠️ Small Improvement (Best Practice)

Factorial of `0` bhi hota hai:

```js
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
```

---

## 🧠 Interview One-liner

> “Main recursion ka use karta hoon jisme base case `n == 1` hai aur har call me `n * factorial(n-1)` calculate hota hai.”

Agar chaho next:

* 🔁 iterative factorial
* 🧩 recursion vs loop
* 🎮 factorial ko story/game ke form me

Batao bhai 😄

*/