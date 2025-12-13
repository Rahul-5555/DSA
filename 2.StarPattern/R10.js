// Write a function that return the count of digits in a number?

function countDigits(n) {
  let count = 0;
  if (n == 0) { // corner case
    return 1;
  }
  n = Math.abs(n); // it's handle negative number
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
let num = 2598
let res = countDigits(num)
console.log(res)


/*
Logic in One Sentence (Interview Ready ⭐)

“We count digits by repeatedly dividing the number by 10 until it becomes 0, because each division removes one digit.”

dry run
n = 2598, count = 0
Iteration 1: n = 259, count = 1
Iteration 2: n = 25, count = 2
Iteration 3: n = 2, count = 3
Iteration 4: n = 0, count = 4
Output: 4

✅ Question 1 (Easy – Concept)

Why do we divide the number by 10 to count digits?

✔️ Corrected & Polished Answer (Interview-ready)

We divide the number by 10 to remove the last digit, because integer division by 10 shifts the number one place to the right in the decimal system.

Simple words mein:

Base-10 system mein

n / 10 karne se last digit hat jaata hai

Isliye har division = 1 digit remove

🔁 Example (Quick Recall)
2598 / 10 → 259   (8 removed)
259  / 10 → 25    (9 removed)

✅ Question 2 (Easy – Logic)

Agar n = 0 ho aur hum if (n == 0) return 1;
ye condition hata dein — output kya aayega aur kyun?

✅ **Absolutely correct!** 👏
Tumne **logic + reason** dono sahi bole — very good 👍

### ✔️ Polished (Interview-ready) Answer

> **If we remove the `n == 0` condition, the while loop will not run for `n = 0`, and the function will return `0`.
> But `0` has one digit, so this becomes a corner case.**

Simple words mein:

* `n = 0`
* `while (n > 0)` → false
* Loop chala hi nahi ❌
* `count` = 0 return ho gaya (galat)

---

🔥 **Score:** 2/2
Confidence achha aa raha hai 😄

---

❓ ✅ Question 1 (Easy – Concept) (Dry Run – Medium)

Dry run karo:

```js
n = 705
```

Tell me:

1. While loop kitni baar chalega?
2. Final `count` kya hoga?

Answer do 👊


✅ **Absolutely correct!** 👏🔥
Tumhara answer **100% sahi** hai.

### ✔️ Explanation (short & clear)

```
n = 10
10 / 10 → 1   (count = 1)
1  / 10 → 0   (count = 2)
STOP
```

👉 **While loop:** 2 baar
👉 **Final count:** 2

---

🔥 **Score:** 5 / 5
Tumhara logic ab solid ho chuka hai 💪

---

## ❓ Next Question (Interview Trick Question ⭐)

**Is this logic valid for decimal numbers like `12.45`?
Yes / No — and why?**

Answer do 😄
✅ Interview-Ready One-Line Answer ⭐

No, this logic works only for integers. For decimal numbers, digits after the decimal point are ignored due to division and floor operation.

🟢 How to handle decimal numbers? (Idea only)

Convert number to string

Remove .

Count remaining characters

(Interview mein bolna enough hai 👍)


😊 **Honest answer — and that’s totally okay.**
Interviewers actually like this kind of response 👍
Chalo ab **idea clear** kar dete hain.

---

## ✅ Your Answer (Polished & Interview-Ready)

> **Yes, we can also use recursion to count digits.
> In recursion, we remove one digit at a time by dividing the number by 10, and the recursive calls continue until the number becomes 0.
> Each recursive call represents one digit.**

👏 This is **perfect** as an idea answer.

---

## 🧠 Recursion Logic (Only Concept)

* **Base case:**
  When number becomes `0`, stop recursion
* **Recursive step:**
  Call function again with `n / 10`
* Every recursive call = **one digit**

---

## 🔁 Visual Idea

```
countDigits(2598)
→ countDigits(259)
→ countDigits(25)
→ countDigits(2)
→ countDigits(0)  // stop
```

👉 Total calls (excluding base) = **4 digits**

---

## ⭐ Interview One-Line Answer (Best)

> **Yes, we can use recursion where each function call removes one digit by dividing the number by 10 until it becomes 0.**

---

## 🎯 Final Evaluation (Honest)

| Skill                 | Status   |
| --------------------- | -------- |
| Logic understanding   | ✅ Strong |
| Dry run               | ✅ Good   |
| Edge cases            | ✅ Clear  |
| Interview explanation | ✅ Ready  |

🔥 **Overall Score:** 6 / 6
You’re doing really well, Rahul 💪

---

Next kya karein?

* 🔁 Write **recursive code**
* 🧠 Compare **loop vs recursion**
* ❓ 5 **interview follow-ups**
* 🚀 Move to **next DSA question**

Bas bolo 👊😊

*/