//leetcode:3541 Find most frequent vovel and consonant

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let map = {}

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1
    } else {
      ++map[s[i]];
    }
  }

  // find the max vovel and consonant inside the map
  let vovels = ["a", "e", "i", "o", "u"]
  let maxVovel = 0;
  let maxConsonant = 0;
  for (let i = 0; i < s.length; i++) {
    // vovel
    if (vovels.includes(s[i])) {
      if (map[s[i]] > maxVovel) {
        maxVovel = map[s[i]];
      }
    }
    else {
      // consonant 
      if (map[s[i]] > maxConsonant) {
        maxConsonant = map[s[i]]
      }
    }
  }
  return maxConsonant + maxVovel;

};
/*
 Interview Tip(Say this line)

 “I first counted character frequencies using a hashmap.
Then I iterated again to find the maximum frequency among vowels and consonants separately.

“I used a map because it allows me to store the frequency of each character in constant time and retrieve it efficiently when determining the maximum vowel and consonant frequency

*/