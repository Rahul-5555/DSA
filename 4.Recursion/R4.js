// find sum of all elements using recursion?

let arr = [5, 3, 2, 10, 1]

function sum(n) {
  if (n == 0) {
    return arr[n];
  }
 
    

  return arr[n] + sum(n - 1)
}
console.log(sum(arr.length - 1))


/*
🧠 Logic (Simple Hinglish)

Array: [5, 3, 2, 10, 1]

Tum function ko last index se call kar rahe ho:

sum(arr.length - 1)  // sum(4)


Function ka kaam:

Har index ka element add karna

Jab n == 0 ho → ruk jaana (base case)

🧱 Base Case
if (n == 0) {
  return arr[n];
}


👉 Matlab:

Jab index 0 aa jaye

Sirf arr[0] return kar do

Iske baad recursion ruk jaata hai

🔁 Recursive Case
return arr[n] + sum(n - 1)


Current element add karo

Baaki ka sum recursion se aayega

🧪 Dry Run (Step by Step)
Initial Call
sum(4)

Calls going down ⬇️
sum(4) = arr[4] + sum(3) = 1  + sum(3)
sum(3) = arr[3] + sum(2) = 10 + sum(2)
sum(2) = arr[2] + sum(1) = 2  + sum(1)
sum(1) = arr[1] + sum(0) = 3  + sum(0)
sum(0) = arr[0] = 5   ← base case

Returning back ⬆️
sum(0) = 5
sum(1) = 3  + 5  = 8
sum(2) = 2  + 8  = 10
sum(3) = 10 + 10 = 20
sum(4) = 1  + 20 = 21

✅ Final Output
21

⚠️ Small Improvement (Best Practice)

Agar empty array ho to current code fail karega.
Better base case 👇

function sum(n) {
  if (n < 0) return 0;
  return arr[n] + sum(n - 1)
}


✔ Safer
✔ Interview-friendly

⏱️ Complexity

Time Complexity: O(n)

Space Complexity: O(n) (recursion stack)

🧠 One-line understanding

Har index ka element add hota hai jab tak index 0 na aa jaye

Agar chaho next:

🔄 iterative version

🎯 interview answer format

🧩 recursion vs loop comparison
*/