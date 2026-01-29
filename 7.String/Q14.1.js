// Approach 2: Using Sorting and Hash Map

var groupAnagram = function (strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) { //O-n
    // create a key
    let freqArr = Array(26).fill(0);
    let s = strs[i];
    for (let j = 0; j < s.length; j++) { //O-m
      let index = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
      freqArr[index]++;
    }
    let key = "";
    for (let k = 0; k < 26; k++) { //O-1
      key = key + '#' + freqArr[k];
    }
    // fill the map
    if (!map[key]) {
      map[key] = [s];
    }
    else {
      map[key].push(s);
    }
  }
  return [...Object.values(map)];
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));