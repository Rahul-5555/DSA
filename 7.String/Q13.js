// leetcode205: Isomorphic Strings
// Isomorphic hone ke Rules

//1. Same character hamesha same character se map hoga

//2. Ek character sirf ek hi character se map ho sakta hai

//3. Do different characters same character se map nahi ho sakte

//4. Characters ka order same rehna chahiye

var isIsomorphic = function (s, t) {
  // Sub-Problem 1: Length Check
  if (s.length !== t.length) return false;
  // Sub-Problem 2: Character Mapping Check
  let mapST = {};
  let mapTS = {};
  // Sub-Problem 3: Har Character Pair Check Karna
  for (let i = 0; i < s.length; i++) {

    // Sub-Problem 4: s → t Mapping Conflict Check
    if (mapST[s[i]] && mapST[s[i]] !== t[i]) {
      return false;
    }

    // Sub-Problem 5: t → s Reverse Conflict Check
    if (mapTS[t[i]] && mapTS[t[i]] !== s[i]) {
      return false;
    }

    // Sub-Problem 6: Mapping Save Karna
    mapST[s[i]] = t[i]; // 
    mapTS[t[i]] = s[i];
  }
  // Sub - Problem 7: Final Decision
  return true;
};

console.log(isIsomorphic("egg", "add")); // true
