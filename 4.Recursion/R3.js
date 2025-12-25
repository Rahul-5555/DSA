// find sum of first n natural numbers using recursion
function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1)
}

console.log(sum(5))

/*
---

## 🧠 Logic(Simple Hinglish)

  * Ye function ** first n natural numbers ka sum ** nikalta hai
  👉 `1 + 2 + 3 + ... + n`
  * ** Recursion ** ka matlab:
  👉 function ** khud ko call karta hai **

### 🔹 Base Case(Important)

  ```js
if (n == 0) return 0;
```

  * Jab`n = 0` ho jaye → ** ruk jao **
* Agar base case nahi hota → function ** infinite call ** karta

---

## 🔁 Recursive Call

  ```js
return n + sum(n - 1)
```

  * Har step pe:

  * current`n` ko add karo
  * baaki ka kaam `sum(n-1)` karega

---

## 🧪 Dry Run(sum(5))

### Step - by - step calls 👇

```
sum(5)
= 5 + sum(4)

sum(4)
= 4 + sum(3)

sum(3)
= 3 + sum(2)

sum(2)
= 2 + sum(1)

sum(1)
= 1 + sum(0)

sum(0)
= 0   ← base case hit
```

---

### 🔙 Ab return hote waqt(Stack unwind)

  ```
sum(0) = 0
sum(1) = 1 + 0 = 1
sum(2) = 2 + 1 = 3
sum(3) = 3 + 3 = 6
sum(4) = 4 + 6 = 10
sum(5) = 5 + 10 = 15
```

---

## ✅ Final Output

  ```js
15
```

---

## 🧠 Recursion ka flow yaad rakhne ka trick

  > ** Recursion pehle niche jata hai(base case tak) **
> ** Answer baad me upar aata hai **

  ---

## ⏱️ Time & Space Complexity

  * ** Time Complexity:** `O(n)`
    * ** Space Complexity:** `O(n)`(call stack ki wajah se)

---

  Agar chaho to next step me:

* 🔁 ** Iterative version **
* 🎮 ** Recursion ko game / story ke form me **
* 🧠 ** Interview - ready answer **

  Bas bolo 😄

*/