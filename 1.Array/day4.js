// for loop
for (let i = 0; i < 4; i++) {
  console.log("Hello", i)
}

for (let i = 0; i <= 4; i++) {
  console.log("rahul", i)
}

for (let i = 0; i < 10; i++) {
  console.log(i + 3)
}

for (let i = 5; i > 0; i--) {
  console.log("for minus", i)
}

for (let i = 5; i < 6; i++) {
  console.log("rahul", i)
}

// infinite loop
// for (let i = 1; i > 0; i++) {
//   console.log("rahul", i)
// }

// calling function inside for loop
function
  greet(i) {
  console.log("function inside for loop", i)
}

for (let i = 0; i < 5; i++) {
  greet(i)
}


// length of the array
let arr = [2, 4, 5, 6, 7, 8]
let length = arr.length
console.log("length of the array", length) // 7
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])  same thing we can do using for loop
for (let i = 0; i < length; i++) {
  console.log(arr[i])
}




// loop

// 1. print all the  even number from the console
let arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 0) {
    console.log(arr1[i])
  }
}

// 1. print all the  odd number from the console
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 1) {
    console.log(arr2[i])
  }
}