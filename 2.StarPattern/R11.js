// Palindrome Number Pattern: An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
// 1. find last digit then keep adding last digit to a variable then remove last digit from the number
// 2. finally check if the new variable is equal to the original number
// 3. if equal then it's palindrome else not
// 4. print the pattern accordingly

var isPalindrome = function (x) {
  if (x < 0) return false; // negative number is not palindrome
  let xCopy = x; // store original number
  let rev = 0;

  while (x > 0) {
    let rem = x % 10; // find last digit
    rev = (10 * rev) + rem; // add last digit to rev
    x = Math.floor(x / 10); // remove last digit from n
  }

  // if (rev === xCopy) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
  return rev === xCopy;
}
 
let x = 1211;
let result = isPalindrome(x);
console.log(result);


/*

Great 👍
Ab tumhara code **correct hai**.
Main isko **clear, step-by-step logic** mein explain karta hoon — bilkul interview style.

---

## 🔹 What this function does

**Check karta hai ki given number palindrome hai ya nahi.**

Palindrome = number jo **ulta aur seedha same ho**.

---

## 🔹 Code (Reference)

```js
function isPalindrome(x) {
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;

  while (x > 0) {
    let rem = x % 10;
    rev = (10 * rev) + rem;
    x = Math.floor(x / 10);
  }
  return rev === xCopy;
}
```

---

## 🧠 Logic Explained (Line by Line)

### 1️⃣ Negative number check

```js
if (x < 0) return false;
```

* Negative numbers palindrome nahi hote
* Example: `-121` ≠ `121-`

---

### 2️⃣ Store original number

```js
let xCopy = x;
```

* Original number ko save kar liya
* Kyunki loop ke andar `x` change ho jayega

---

### 3️⃣ Reverse variable

```js
let rev = 0;
```

* Yahan hum reversed number banayenge

---

### 4️⃣ While loop (main logic)

```js
while (x > 0)
```

* Jab tak number khatam (0) nahi hota
* Har loop mein **ek digit process hota hai**

---

### 5️⃣ Get last digit

```js
let rem = x % 10;
```

* `% 10` se **last digit** milta hai

Example:

```
1211 % 10 → 1
```

---

### 6️⃣ Build reverse number

```js
rev = (10 * rev) + rem;
```

👉 Ye 2 kaam karta hai:

1. Purane digits ko **left shift** karta hai
2. New digit ko **last mein add** karta hai

Example:

```
rev = 112
rem = 1
rev = 112 * 10 + 1 = 1121
```

---

### 7️⃣ Remove last digit from x

```js
x = Math.floor(x / 10);
```

* Last digit remove ho jata hai
* Next iteration ke liye ready

---

### 8️⃣ Compare reverse with original

```js
return rev === xCopy;
```

* Agar same → palindrome
* Warna → not palindrome

---

## 🔁 Dry Run (x = 1211)

| Step  | x    | rem | rev  |
| ----- | ---- | --- | ---- |
| Start | 1211 | –   | 0    |
| 1     | 121  | 1   | 1    |
| 2     | 12   | 1   | 11   |
| 3     | 1    | 2   | 112  |
| 4     | 0    | 1   | 1121 |

### Final check:

```
rev = 1121
xCopy = 1211
```

❌ Not equal → **false**

---

## 🧠 Logic in One Line (Interview ⭐)

> **We reverse the number digit by digit using modulo and division, then compare it with the original number to check if it is a palindrome.**

---

## ⏱️ Complexity

* **Time:** `O(d)` (number of digits)
* **Space:** `O(1)`

---

### 🔥 You’re doing really well

You:

* Fixed bugs yourself
* Understood `%` and `/` logic
* Asked for clarity (best habit)

Next options:

* 🔁 Optimized palindrome (reverse half only)
* 🔁 String approach
* 🔁 Recursive palindrome
* ❓ Interview follow-ups


*/