// two pointer optimal solution for intersection of two linked list

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  // Agar koi bhi list empty hai → intersection possible hi nahi
  // Isliye direct null

  // 2-> Two pointers create kiye
  let pA = headA;
  let pB = headB;

  // pA list A se chalega
  // pB list B se chalega
  // 🧠 Dono same speed(1 step) se move karte hain

  while (pA !== pB) {
    // Jab tak dono same node(reference) pe nahi aate
    // Value compare nahi, node compare ho raha hai

    pA = (pA === null) ? headB : pA.next;
    pB = (pB === null) ? headA : pB.next;
    // Iska matlab:
    // Agar pA list A ke end pe pahunch gaya
    // 👉 usko list B ke start pe bhej do

    // Agar pB list B ke end pe pahunch gaya
    // 👉 usko list A ke start pe bhej do
    //   
  }

  return pA; // intersection node OR null
};




/*
Perfect 👍
Main is **two-pointer optimal solution** ko **line-by-line**, **dry run**, aur **intuition** ke saath explain kar raha hoon — **simple Hinglish**, interview-ready.

---

## 🔴 Problem Reminder

Do linked lists diye gaye hain.
👉 **Intersection ka matlab**: **same memory node**, value same hona enough nahi.

---

## ✅ Code (Tumhara hi)

```js
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = (pA === null) ? headB : pA.next;
    pB = (pB === null) ? headA : pB.next;
  }

  return pA; // intersection node OR null
};
```

---

## 🧩 Line-by-Line Explanation

### 1️⃣ Edge case check

```js
if (!headA || !headB) return null;
```

* Agar koi bhi list empty hai → intersection **possible hi nahi**
* Isliye direct `null`

---

### 2️⃣ Two pointers create kiye

```js
let pA = headA;
let pB = headB;
```

* `pA` list A se chalega
* `pB` list B se chalega

🧠 Dono **same speed (1 step)** se move karte hain

---

### 3️⃣ Main logic (MAGIC PART)

```js
while (pA !== pB) {
```

* Jab tak dono **same node (reference)** pe nahi aate
* Value compare **nahi**, node compare ho raha hai

---

### 4️⃣ Pointer movement + Head switch

```js
pA = (pA === null) ? headB : pA.next;
pB = (pB === null) ? headA : pB.next;
```

#### 🧠 Iska matlab:

* Agar `pA` list A ke end pe pahunch gaya
  👉 usko **list B ke start** pe bhej do
* Agar `pB` list B ke end pe pahunch gaya
  👉 usko **list A ke start** pe bhej do

🎯 **Why this works?**

* Dono pointers **A + B** total distance cover karte hain
* Length difference automatically adjust ho jaata hai

---

## 🎬 Dry Run (Step-by-Step)

### Example:

```
A: 1 → 2 → 3 → 8 → 9
B: 4 → 5 ─────┘
Intersection = 8
```

| Step | pA   | pB   |
| ---- | ---- | ---- |
| 1    | 1    | 4    |
| 2    | 2    | 5    |
| 3    | 3    | 8    |
| 4    | 8    | 9    |
| 5    | 9    | null |
| 6    | null | 1    |
| 7    | 4    | 2    |
| 8    | 5    | 3    |
| 9    | 8    | 8 ✅  |

➡️ Loop stops → return node `8`

---

## ❓ Agar intersection NA ho?

```
A: 1 → 2 → 3
B: 4 → 5 → 6
```

* Dono pointers:

  * A + B
  * B + A
* End me **dono `null` pe milte hain**

➡️ `return null`

---

## 🧠 ONE-LINE INTUITION (Yaad rakhne ke liye)

> **“End pe pahuncho → dusri list ke head pe jao → equal distance → mil jaoge.”**

---

## ⏱ Complexity (Interview Must)

| Type  | Complexity   |
| ----- | ------------ |
| Time  | **O(n + m)** |
| Space | **O(1)**     |

---

## ⚠️ Common Mistakes (Quick)

❌ `pA.val === pB.val`
✅ `pA === pB`

❌ Length count karna
✅ Head switch logic use karna

---

## 🎯 Interview Ready Answer

> “I use two pointers. When a pointer reaches the end of one list, I redirect it to the head of the other list. This ensures both pointers traverse equal total length and meet at the intersection node.”

🎯 Interview Me Kya Bolna Hai?
Agar time kam ho:

“I can solve it using a Set in O(n) space.”

Phir immediately add karo 👇

“But the optimal solution uses two pointers with O(1) space.”

🔥 This line = strong impression

---

*/
