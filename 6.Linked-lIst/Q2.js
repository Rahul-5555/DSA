// Reversed Linked 
// Definition for singly-linked list
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Your reverse function
var reverseList = function (head) {
  let prev = null;  // starting m koi previous node nahi hota isiliye null
  let curr = head;
  // ➡️ Jab tak curr null nahi ho jata
  // ➡️ Tab tak loop chalta rahega
  while (curr) {
    let temp = curr.next;  // save next node
    curr.next = prev;     // reverse link
    prev = curr;          // move prev forward
    curr = temp;          // move curr forward
  }

  head = prev;
  return head;
};

// ---------------- TEST CASE ----------------

// Create linked list: 1 → 2 → 3 → 4 → 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Reverse list
let reversedHead = reverseList(head);

// Print reversed list
let temp = reversedHead;
let output = [];
while (temp) {
  output.push(temp.val);
  temp = temp.next;
}

console.log(output.join(" → "));



/*

Perfect question 👍
This is a **very important interview problem**.
I’ll explain it **slowly, simply, and step-by-step** with a dry run.

---

## 🔁 Problem

**Reverse a Linked List**

### Input

```
1 → 2 → 3 → 4 → 5 → null
```

### Output

```
5 → 4 → 3 → 2 → 1 → null
```

---

## 🧠 Your Code (Correct ✅)

```js
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;  // save next node
    curr.next = prev;     // reverse link
    prev = curr;          // move prev forward
    curr = temp;          // move curr forward
  }

  head = prev;
  return head;
}
```

---

## 🧩 Meaning of Variables (Very Simple)

| Variable | Role                                |
| -------- | ----------------------------------- |
| `prev`   | Previous node (starts as `null`)    |
| `curr`   | Current node                        |
| `temp`   | Saves next node so we don’t lose it |

---

## 🧪 Dry Run (Step-by-Step)

### Initial State

```
prev = null
curr = 1 → 2 → 3 → 4 → 5 → null
```

---

### 🔹 Iteration 1

```
temp = 2
curr.next = null
prev = 1
curr = 2
```

Result:

```
null ← 1    2 → 3 → 4 → 5
```

---

### 🔹 Iteration 2

```
temp = 3
curr.next = 1
prev = 2
curr = 3
```

Result:

```
null ← 1 ← 2    3 → 4 → 5
```

---

### 🔹 Iteration 3

```
temp = 4
curr.next = 2
prev = 3
curr = 4
```

Result:

```
null ← 1 ← 2 ← 3    4 → 5
```

---

### 🔹 Iteration 4

```
temp = 5
curr.next = 3
prev = 4
curr = 5
```

Result:

```
null ← 1 ← 2 ← 3 ← 4    5
```

---

### 🔹 Iteration 5

```
temp = null
curr.next = 4
prev = 5
curr = null  (loop stops)
```

Result:

```
null ← 1 ← 2 ← 3 ← 4 ← 5
```

---

## ✅ Final Step

```js
head = prev;
```

### Final Linked List

```
5 → 4 → 3 → 2 → 1 → null
```

---

## 🎯 Why `temp` Is Important?

If we don’t store `curr.next`:
➡️ we **lose the rest of the list forever** ❌

So:

```js
let temp = curr.next;
```

is **mandatory**.

---

## ⏱️ Complexity

* **Time:** `O(n)`
* **Space:** `O(1)` (no extra memory)

---

## 🗣️ Interview-Ready Explanation (Short)

> We iterate through the list and reverse links one by one using three pointers:
> `prev`, `curr`, and `temp`.
> At the end, `prev` becomes the new head.

---

If you want next:

* 🔹 Animated mental trick to remember this forever
* 🔹 Recursive reverse linked list
* 🔹 How to explain this confidently in interview (Hinglish)

Just tell me 👍

*/