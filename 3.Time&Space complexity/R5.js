// Merge sort

// Merge sort style merge function

var merge = function (nums1, m, nums2, n) {

  // Step 1: nums1 ka pehla part copy kar lo (kyunki baad me overwrite ho jayega)
  let nums1Copy = nums1.slice(0, m);

  // p1 nums1Copy ko point karega
  let p1 = 0;

  // p2 nums2 ko point karega
  let p2 = 0;

  // Ab hum poore final array ko fill karenge
  for (i = 0; i < m + n; i++) {

    // Agar nums2 khatam hogya,
    // ya nums1Copy ka element chhota h nums2 ke element se
    // to nums1 me nums1Copy wali value daal do
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {

      nums1[i] = nums1Copy[p1];
      p1++; // nums1Copy pointer aage badhao
    }

    // warna nums2 ka element chhota h,
    // to nums1 me nums2[p2] daal do
    else {
      nums1[i] = nums2[p2];
      p2++; // nums2 pointer aage badhao
    }
  }
}



// Example usage:
let nums1 = [1, 3, 5, 0, 0, 0]
let m = 3;

let nums2 = [2, 4, 6];
let n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);  

// I'm studying insert sub , turn it into a game -- with characters, storylines, and challenges -- so it feel like i'm levelling up instead of memorizing facts