Perfect question 🔥
Code **100% correct** ✅
Ab main **bilkul zero se**, **har ek chhoti detail**, **logic → code → why it works → complexity**, sab explain kar raha hoon.
End me **ready-to-use Markdown (.md) notes** bhi dunga jo tum **GitHub pe directly paste** kar sakte ho 📘✨

---

# 🧩 LeetCode 49 – Group Anagrams

### ❓ Question kya bol raha hai?

Tumhe **strings ka array** diya gaya hai.
Tumhe **anagrams ko ek group me** rakhna hai.

### 🔤 Anagram kya hota hai?

Agar **letters same ho**, bas **order different ho**, to wo **anagram** hote hain.

👉 Example:

* `"eat"`, `"tea"`, `"ate"` → same letters → anagrams
* `"tan"`, `"nat"` → anagrams
* `"bat"` → akela

---

## 📥 Input

```js
["eat", "tea", "tan", "ate", "nat", "bat"]
```

## 📤 Output

```js
[
  ["eat","tea","ate"],
  ["tan","nat"],
  ["bat"]
]
```

---

# 🧠 Human Thinking (Without Code)

Socho tum ek **sorting machine** ho:

1. Har word lo
2. Uske letters **alphabetical order me sort** karo
3. Jo bhi words ka **sorted form same ho**, wo **same group** me jaayenge

### Example:

| Word | Sorted |
| ---- | ------ |
| eat  | aet    |
| tea  | aet    |
| ate  | aet    |
| tan  | ant    |
| nat  | ant    |
| bat  | abt    |

👉 `"aet"` wale ek group
👉 `"ant"` wale ek group
👉 `"abt"` akela group

---

# 🧠 Core Idea (Interview Line)

> **Sorted string ko key bana kar HashMap me original strings ko group karo**

---

# 💻 Code (Tumhara hi Code)

```js
var groupAnagram = function (strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split('').sort().join('');

    if (!map[sortedStr]) {
      map[sortedStr] = [strs[i]];
    }
    else {
      map[sortedStr].push(strs[i]);
    }
  }
  return [...Object.values(map)];
}
```

---

# 🔍 Line by Line Deep Explanation

### 1️⃣ Function start

```js
var groupAnagram = function (strs) {
```

* `strs` = array of strings
* Example: `["eat","tea","tan"...]`

---

### 2️⃣ HashMap create kiya

```js
let map = {};
```

* Ye object **groups store karega**
* Format:

```js
{
  "aet": ["eat","tea","ate"],
  "ant": ["tan","nat"],
  "abt": ["bat"]
}
```

---

### 3️⃣ Loop har string ke liye

```js
for (let i = 0; i < strs.length; i++) {
```

* Ek ek string process ho rahi hai

---

### 4️⃣ String ko sort kiya

```js
let sortedStr = strs[i].split('').sort().join('');
```

Break it 👇

| Part        | Kaam                          |
| ----------- | ----------------------------- |
| `split('')` | string → array of characters  |
| `sort()`    | letters ko alphabetical order |
| `join('')`  | array → string                |

👉 `"eat"` → `"aet"`

---

### 5️⃣ Check: key exist karti hai ya nahi

```js
if (!map[sortedStr]) {
```

* Agar pehli baar aa raha hai `"aet"`

---

### 6️⃣ Naya group banao

```js
map[sortedStr] = [strs[i]];
```

Example:

```js
map["aet"] = ["eat"];
```

---

### 7️⃣ Agar key pehle se hai

```js
else {
  map[sortedStr].push(strs[i]);
}
```

Example:

```js
map["aet"].push("tea");
```

---

### 8️⃣ Sirf values return karo

```js
return [...Object.values(map)];
```

* `Object.values(map)` → sirf arrays nikaalta hai
* Spread `[...]` se naya array bana diya

---

# 🧪 Dry Run (Short)

Input: `"tea"`

```js
sortedStr = "aet"

map = {
  "aet": ["eat"]
}
```

After push:

```js
map = {
  "aet": ["eat","tea"]
}
```

---

# ⏱️ Time & Space Complexity

### ⏱️ Time Complexity

* Har string sort hoti hai → `O(k log k)`
* Total strings = `n`

👉 **O(n × k log k)**

---

### 💾 Space Complexity

* HashMap me saare strings store ho rahe hain

👉 **O(n)**

---

# ❌ Common Mistakes Students Karte Hain

❌ Anagram ko sirf compare karna
❌ Nested loops use karna (slow)
❌ HashMap use na karna

---

# ⭐ Interview Me Kaise Bolna Hai

> “Main har string ko sort karke ek key banata hoon aur us key ke basis par HashMap me strings ko group karta hoon.”

---

# 📘 GITHUB READY NOTES (Markdown)

Copy–paste this 👇

````md
# LeetCode 49 – Group Anagrams

## Problem
Given an array of strings, group the anagrams together.

## Approach
- Sort each string
- Use the sorted string as a key in a HashMap
- Group original strings with the same sorted key

## Code
```js
var groupAnagram = function (strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split('').sort().join('');

    if (!map[sortedStr]) {
      map[sortedStr] = [strs[i]];
    } else {
      map[sortedStr].push(strs[i]);
    }
  }
  return Object.values(map);
};
````

## Time Complexity

O(n × k log k)

## Space Complexity

O(n)

## Key Insight

Sorted strings of anagrams are always equal.

```

---

Perfect 👌
Ye **sabse important doubt** hai 👍
Ab main **bilkul basic se**, **one-by-one**, **slow + clear** explain kar raha hoon:

> **`let map = {};` me string kaise store hoti hai?**

---

## 🧠 Sabse pehle samjho: `map` kya hai?

```js
let map = {};
```

👉 Ye ek **JavaScript Object (HashMap)** hai

Object ka format hota hai:

```js
{
  key: value
}
```

* **key → hamesha string hoti hai**
* **value → kuch bhi ho sakta hai (array, number, object, etc.)**

---

## 🔑 Is question me:

* **key** = `sorted string`
* **value** = `array of original strings`

---

## 🧪 Step-by-Step Dry Run (ONE BY ONE)

Input:

```js
["eat", "tea", "tan", "ate", "nat", "bat"]
```

---

### 🔹 Step 0: Start

```js
map = {}
```

---

## 🔹 Step 1: `"eat"`

```js
strs[i] = "eat"
sortedStr = "aet"
```

Check:

```js
if (!map["aet"])
```

✔ true (kyunki map empty hai)

So:

```js
map["aet"] = ["eat"];
```

📦 map ab:

```js
{
  "aet": ["eat"]
}
```

👉 **Yaha "aet" string key ban gayi**

---

## 🔹 Step 2: `"tea"`

```js
strs[i] = "tea"
sortedStr = "aet"
```

Check:

```js
if (!map["aet"])
```

❌ false (already exist)

So else:

```js
map["aet"].push("tea");
```

📦 map ab:

```js
{
  "aet": ["eat", "tea"]
}
```

---

## 🔹 Step 3: `"tan"`

```js
sortedStr = "ant"
```

Check:

```js
if (!map["ant"])
```

✔ true

So:

```js
map["ant"] = ["tan"];
```

📦 map:

```js
{
  "aet": ["eat", "tea"],
  "ant": ["tan"]
}
```

---

## 🔹 Step 4: `"ate"`

```js
sortedStr = "aet"
```

Already exist 👉 push

```js
map["aet"].push("ate");
```

📦 map:

```js
{
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan"]
}
```

---

## 🔹 Step 5: `"nat"`

```js
sortedStr = "ant"
```

```js
map["ant"].push("nat");
```

📦 map:

```js
{
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan", "nat"]
}
```

---

## 🔹 Step 6: `"bat"`

```js
sortedStr = "abt"
```

```js
map["abt"] = ["bat"];
```

📦 FINAL map:

```js
{
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan", "nat"],
  "abt": ["bat"]
}
```

---

## 🔥 IMPORTANT CONCEPT (Interview Gold)

### ❓ JavaScript object me string automatically key kaise ban jaati hai?

```js
map[sortedStr] = ...
```

👉 JavaScript internally ye karta hai:

```js
map["aet"] = ...
```

**Object ki keys hamesha string hoti hain**
Agar number bhi doge → JS usko string bana deta hai

---

## 🧠 Visual Memory Trick 🧠

Socho `map` ek **almirah** hai:

* `"aet"` → ek drawer
* `"ant"` → doosra drawer
* `"abt"` → teesra drawer

Har drawer me **same type ke words** pade hain 🗂️

---

## ❌ Common Beginner Confusion

❌ `map = []` ❌ (galat)
✔ `map = {}` ✔ (sahi)

Kyuki:

* `[]` → index se access hota hai
* `{}` → key se access hota hai

---

## ⭐ One-Line Yaad Rakhne Wali Baat

> **Sorted string key banti hai aur us key ke andar original strings ka array store hota hai**

---

