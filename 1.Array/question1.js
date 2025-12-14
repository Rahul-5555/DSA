/* 
 ✅ Question 1: Two Sum

Given: num array + target
Find: do indexes jinke numbers ka sum = target
*/
function twoSum(num, target) {
  const map = new Map();

  for (i = 0; i < num.length; i++) {
    const diff = target - num[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(num[i], i)
  }

  return [];
}


const num = [2, 7, 4, 15];
const target = 11;

const result = twoSum(num, target);
console.log("Result:", result);