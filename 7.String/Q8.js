// leetcode 541: Reverse String 2

var reverseStr = function (s, k) {
  s = s.split(""); // ["h","e","l","l","o"]

  // Step 1: Outer loop(blocks of 2k)
  for (let x = 0; x < s.length; x = x + (2 * k)) {

    // step 2: reverse the first k element starting from x
    let n = k; // only reverse k elements
    // let n = Math.min(k, s.length - x);
    let mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
      let temp = s[x + i];
      s[x + i] = s[x + n - 1 - i];
      s[x + n - 1 - i] = temp;
    }
  }
  return s.join("")
}

// let s = "hello"
// console.log(s)
// reverseStr(s, 2)