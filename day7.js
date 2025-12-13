// Write a function that return (COUNT NEGATIVE NUMBER) the negative number in an array?

function countNegativeNumber(arr) {
  let count = 0; // Step 1: Start with a counter at 0

  // Step 2: Loop through all array elements
  for (i = 0; i < arr.length; i++) {
    // Step 3: Check if the element is negative
    if (arr[i] < 0) {
      count = count + 1; // Step 4: Increase count if condition is true
    }
  }

  // Step 5: Return the total count of negative numbers
  return count;
}

// Example array
let arr = [2, 4, 5, -3, -2, -11];

// Call the function and store result
let result = countNegativeNumber(arr);

// Print the result 
console.log(result); // Output: 3



/* 

🧩 How it works step-by-step for this example:
Step	Element	Condition (arr[i] < 0)	Action	Count
1	2	false	skip	0
2	4	false	skip	0
3	5	false	skip	0
4	-3	true	count++	1
5	-2	true	count++	2
6	-11	true	count++	3

✅ Final count = 3 → printed result is 3.

*/




/* 

⚙️ Alternative (Shorter) Approach

You can also use the filter() method:

function negativeNumber(arr) {
  return arr.filter(num => num < 0).length;
}


This does the same thing in one line — filters only negative numbers and returns their count.

*/