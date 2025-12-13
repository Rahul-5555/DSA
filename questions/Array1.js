function twoSum(nums, target) {            // 1. function declaration: nums (array) aur target (number) parameter
  const map = new Map();                   // 2. ek Map banaya jisme value->index store karenge
  console.log(map)

  for (let i = 0; i < nums.length; i++) {  // 3. for-loop: array ke har index ko iterate karenge
    const diff = target - nums[i];         // 4. current number ka partner nikaalo: diff = target - nums[i]

    if (map.has(diff)) {                   // 5. agar map mein diff already maujood hai to
      return [map.get(diff), i];           // 6. wahi index aur current index return kar do
    }

    map.set(nums[i], i);                   // 7. agar partner nahi mila to current number ko map mein store karo
  }

  return [];                               // 8. agar koi pair nahi mila to empty array return karo
}

// Test the function here
// -----------------------
const nums = [2, 7, 4, 15];
const target = 11;

const result = twoSum(nums, target);
console.log("Result:", result);




/* 

Perfect — नीचे मैं **poore function ko line-by-line** simple Hindi mein explain kar raha hoon. Pehle ek **annotated code** dunga (jis mein har line ka short comment hai), phir har line ka detailed explanation and example walkthrough bhi de dunga.

# Annotated Code (comments Hindi mein)

```js
function twoSum(nums, target) {            // 1. function declaration: nums (array) aur target (number) parameter
  const map = new Map();                   // 2. ek Map banaya jisme value->index store karenge

  for (let i = 0; i < nums.length; i++) {  // 3. for-loop: array ke har index ko iterate karenge
    const diff = target - nums[i];         // 4. current number ka partner nikaalo: diff = target - nums[i]

    if (map.has(diff)) {                   // 5. agar map mein diff already maujood hai to
      return [map.get(diff), i];           // 6. wahi index aur current index return kar do
    }

    map.set(nums[i], i);                   // 7. agar partner nahi mila to current number ko map mein store karo
  }

  return [];                               // 8. agar koi pair nahi mila to empty array return karo
}
```

# Line-by-line detailed explanation (simple Hindi)

1. `function twoSum(nums, target) {`

   * Yeh function define kar raha hai.
   * `nums` ek array hai (jaise `[2,7,11,15]`) aur `target` ek number hai (jaise `9`).
   * Jab tum `twoSum([2,7,11,15], 9)` call karoge, code yahin se chalna shuru karega.

2. `const map = new Map();`

   * Yahan hum JavaScript ka `Map` object banate hain.
   * `Map` key-value pairs rakhta hai. Hum **number -> index** store karenge.
     Example: agar humne `2` ko index `0` pe dekha, to `map` mein entry hogi `2 => 0`.
   * Map ka fayda: lookup O(1) average time mein hota hai, isliye fast.

3. `for (let i = 0; i < nums.length; i++) {`

   * Ye loop array ke har element pe chalega.
   * `i` current index hai (0 se start).
   * Agar `nums` ki length 4 hai, `i` 0,1,2,3 lega.

4. `const diff = target - nums[i];`

   * `diff` matlab humara required partner number.
   * Agar `target = 9` aur `nums[i] = 2`, to `diff = 9 - 2 = 7`.
   * Hum check karenge: kya kabhi pehle 7 dekha gaya? (agar haan toh pair mil gaya)

5. `if (map.has(diff)) {`

   * `map.has(x)` check karta hai ki key `x` map mein maujood hai ya nahi.
   * Agar `diff` map mein ho — matlab pehle humne woh number array mein kisi earlier index par dekha tha.
   * Example: i=1 (number=7), `diff = 9 - 7 = 2`. Agar map mein `2` hai (index 0 pe store), to pair mil gaya.

6. `return [map.get(diff), i];`

   * Agar partner mil gaya to hum turant answer return kar dete hain — ek array jisme **earlierIndex** aur **currentIndex** hote hain.
   * `map.get(diff)` pehle aaye huye number ka index deta hai. `i` current index.
   * Example output: `[0, 1]`. Function yahi pe stop ho jayega (aur loop break).

7. `map.set(nums[i], i);`

   * Agar partner nahi mila to hum current number ko map mein store kar dete hain, taaki future iterations mein usse match kiya ja sake.
   * `map.set(2, 0)` — matlab key = 2, value = 0.
   * Dhyaan: store karne ke baad agar future mein koi number `target - futureNumber` ban jaata hai, to match mil jayega.

8. `return [];`

   * Agar poora loop chal gaya aur koi pair nahi mila, to function empty array return karta hai (ya tum error throw kar sakte ho — design choice).
   * Yeh line sirf tab execute hogi jab `for` loop se kabhi `return` nahi hua.

# Example Walkthrough (nums = [2,7,11,15], target = 9)

* Start: `map = {}` (khaali)
* i = 0 → nums[0] = 2

  * diff = 9 - 2 = 7
  * map.has(7)? → false
  * map.set(2, 0) → map = {2 => 0}
* i = 1 → nums[1] = 7

  * diff = 9 - 7 = 2
  * map.has(2)? → true (kyunki 2 => 0 stored hai)
  * return [map.get(2), 1] → return [0, 1] → function stops
* Console output: `Result: [0, 1]`

# Complexity (simple)

* Time complexity: **O(n)** — kyunki hum array ko ek baar hi traverse karte hain.
* Space complexity: **O(n)** — worst-case mein hum map mein saare elements store kar sakte hain.

# Kuch important notes / edge cases

* Agar same value do baar chahiye (e.g., `nums = [3,3]`, `target = 6`) — yeh code sahi kaam karega:

  * i=0 store 3->0, i=1 diff=3, map.has(3) true → return [0,1].
* Agar koi solution na ho to code `[]` return karega. Agar chaho to `null` ya `throw new Error("No pair")` kar sakte ho.
* Agar tum order matter karna chahte ho (smaller index pehle), code already aisa return karta hai — earlier index pehle aata hai (map se).

---

Agar chaho to main ab **step-by-step console run** karke output dikha du (kuch custom inputs ke saath), ya code ko thoda modify karke multiple pairs print karwa du. Bol — kya karna hai? 😊



*/