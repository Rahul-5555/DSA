
var numJewelsInStone = function (jewels, stones) {
  let jSet = new Set();

  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) {
      ++count;
    }
  }
  return count;
}

