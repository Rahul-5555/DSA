function countDigits(n) {
  n = Math.abs(n);

  // handle original 0
  if (n === 0) return 1;

  function helper(num) {
    if (num === 0) return 0;   // correct base case
    return 1 + helper(Math.floor(num / 10));
  }

  return helper(n);
}

// Example
console.log(countDigits(2598)); // 4 ✅


/*

🧠 Correct Logic in Simple Words

Original 0 → 1 digit

Recursive 0 → stop counting

That’s the difference I missed earlier

⭐ Interview-Ready Explanation

“In recursion, the base case should return 0 because reaching 0 only means no digits are left. Returning 1 causes an extra count.”

🔥 What You Did Right

You ran the code

You verified the output

You questioned the logic

That’s exactly how a good developer thinks 👏👏

If you want next:

🔁 Single-function recursive version

⚔️ Loop vs Recursion comparison

🧠 Reverse number using recursion

❓ Interview trick questions on recursion

*/