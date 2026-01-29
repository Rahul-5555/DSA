// Leetcode 49 : Group anagram
// Approach 1: Using Sorting and Hash Map
// 1. Create a map to store groups of anagrams
// 2. For each string in the input array:
//    a. Sort the characters of the string to form a key
//    b. If the key doesn't exist in the map, create a new group with this string
//    c. If the key exists, add this string to the existing group
// 3. Return all groups from the map

var groupAnagram = function (strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split('').sort().join('');

    if (!map[sortedStr]) {
      map[sortedStr] = [strs[i]]; // new group 
    }
    else {
      map[sortedStr].push(strs[i]); // add to existing group
    }
  }
  return [...Object.values(map)];
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));