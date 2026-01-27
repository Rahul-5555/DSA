// leetchode 242: is anagram second Approach using hash map?
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    // map[s[i]] = (map[s[i]] || 0) + 1;
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      ++map[s[i]];
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] < 0) {
      return false;
    }
    else {
      --map[t[i]];
    }
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true