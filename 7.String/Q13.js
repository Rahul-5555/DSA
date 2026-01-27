// leetcode205: Isomorphic Strings
// Isomorphic hone ke Rules

//1. Same character hamesha same character se map hoga

//2. Ek character sirf ek hi character se map ho sakta hai

//3. Do different characters same character se map nahi ho sakte

//4. Characters ka order same rehna chahiye

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let mapST = {};
  let mapTS = {};

  for (let i = 0; i < s.length; i++) {

    // s -> t check
    if (mapST[s[i]] && mapST[s[i]] !== t[i]) {
      return false;
    }

    // t -> s check
    if (mapTS[t[i]] && mapTS[t[i]] !== s[i]) {
      return false;
    }

    // assign mapping
    mapST[s[i]] = t[i]; // 
    mapTS[t[i]] = s[i];
  }

  return true;
};

console.log(isIsomorphic("egg", "add")); // true
