//leetcode:3541 Find most frequent vovel and consonant

var maxFreqSum = function (s) {
  // store all the values with freq in a map
  let map = {}  // object

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i] = 1]
    } else {
      ++map[s[i]];
    }
  }

  // find the max vovel & consonant inside the map
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
}