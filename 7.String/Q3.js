// Approach 3: 
// 🎯 Goal(Same as before)

// Find the length of the last word in a string
// ✔ Ignore trailing spaces
// ✔ Count characters of the last word only
// 🧠 BIG IDEA (One Sentence)

// Start from the end, count letters when you see them, and stop when you hit a space after counting has started.
// // No extra loops.
// No trimming.
// Everything in one loop 🔥


lengthOfLastWord = function (s) {
  let n = s.length - 1; // n points to the last character of the string
  console.log("n",n)
  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") { // it belong to last word if not space
      ++count;
    }
    // CASE 2: Character IS a space
    // 🧠 Meaning:

    // “I already started counting a word, and now I hit a space — the word is over.”

    // 📌 This space separates words, so stop.
    else if (count > 0) {
      break;
    }
    --n;
  }
  return count;
}


let s = "Hello World   ";
console.log(lengthOfLastWord(s)); // Output: 5