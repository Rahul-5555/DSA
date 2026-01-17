// improve Q 6
//leetcode:3541 Find most frequent vovel and consonant

var maxFreqSum = function (s) {
  // store all the values with freq in a map
  let map = {}  // object

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    // if (!map[s[i]]) {
    //   map[s[i] = 1]
    // } else {
    //   ++map[s[i]];
    // }
  }

  // find the max vovel & consonant inside the map
  let vovels = ["a", "e", "i", "o", "u"]
  let maxVovel = 0;
  let maxConsonant = 0;
  let mapKeys = Object.keys(map);
  for (let i = 0; i < mapKeys.length; i++) {
    // vovel
    if (vovels.includes(mapKeys[i])) {
      maxVovel = Math.max(maxVovel, map[mapKeys[i]]);
      // if (map[mapKeys[i]] > maxVovel) {
      //   maxVovel = map[mapKeys[i]];
      // }
    }
    else {
      // consonant 
      maxConsonant = Math.max(maxConsonant, map[mapKeys[i]]);
      // if (map[mapKeys[i]] > maxConsonant) {
      //   maxConsonant = map[mapKeys[i]]
      // }
    }
  }
  return maxConsonant + maxVovel;
}