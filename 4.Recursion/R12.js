// Selection Sort Algorithm in JavaScript
// Unsorted array
let numbers = [7, 1, 5, 0, 4, 3, 2];

function selectionSort(arr) {

  // Total elements count
  let length = arr.length;

  // Outer loop: har iteration me ek element apni
  // correct position par place hota hai
  for (let currentIndex = 0; currentIndex < length - 1; currentIndex++) {

    // Assume kar liya ki currentIndex par
    // sabse chhota element hai
    let minIndex = currentIndex;

    // Inner loop: remaining array me
    // sabse chhota element dhundhne ke liye
    for (let nextIndex = currentIndex + 1; nextIndex < length; nextIndex++) {

      // Agar current min se chhota element mil gaya
      if (arr[nextIndex] < arr[minIndex]) {
        minIndex = nextIndex; // new minimum mil gaya
      }
    }

    // Agar minimum element current position se
    // alag jagah par mila
    if (minIndex !== currentIndex) {

      // Swap process
      let temp = arr[currentIndex];
      arr[currentIndex] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  // Sorted array return
  return arr;
}

// Function call
let sortedArray = selectionSort(numbers);
console.log(sortedArray);


/*

✅ 2️⃣ Dry Run (Step by Step)
Initial Array
[7, 1, 5, 0, 4, 3, 2]

🔁 Pass 1 (currentIndex = 0)
Index	Value
0	7
1	1
2	5
3	0
4	4
5	3
6	2

👉 Smallest = 0 (index 3)
👉 Swap with index 0

[0, 1, 5, 7, 4, 3, 2]

🔁 Pass 2 (currentIndex = 1)

Remaining array:

[1, 5, 7, 4, 3, 2]


👉 Smallest = 1 (already correct)
👉 No swap

[0, 1, 5, 7, 4, 3, 2]

🔁 Pass 3 (currentIndex = 2)

Remaining array:

[5, 7, 4, 3, 2]


👉 Smallest = 2 (index 6)
👉 Swap with index 2

[0, 1, 2, 7, 4, 3, 5]

🔁 Pass 4 (currentIndex = 3)

Remaining array:

[7, 4, 3, 5]


👉 Smallest = 3 (index 5)
👉 Swap

[0, 1, 2, 3, 4, 7, 5]

🔁 Pass 5 (currentIndex = 4)

Remaining array:

[4, 7, 5]


👉 Smallest = 4 (already correct)
👉 No swap

🔁 Pass 6 (currentIndex = 5)

Remaining array:

[7, 5]


👉 Smallest = 5
👉 Swap

[0, 1, 2, 3, 4, 5, 7]

✅ Final Output
[0, 1, 2, 3, 4, 5, 7]

🧠 How to Remember Selection Sort (Mental Model)

🧲 Har baar bacha hua array me se smallest uthao
aur front me rakhte jao

🎯 Interview One-Liner

Selection Sort works by repeatedly finding the minimum element from the unsorted part and placing it at the correct position.

*/