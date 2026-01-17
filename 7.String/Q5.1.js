//Approach 2: Jwels ans stones problem without using inbuilt method?

var numJewelsInStones = function (jewels, stones) {

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    // if (jewels.includes(stones[i])) {
    //   ++count;
    // }
    for (let j = 0; j < jewels.length; j++){
      if(jewels[j] === stones[i]){
        ++count;
      }
    }
  }
  return count;
}
// it is brute force approach
// m = length of jewels
// n = length of stone
// TC: O(m*n)  SC: O(1)