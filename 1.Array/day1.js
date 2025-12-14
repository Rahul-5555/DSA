// dealing with arrays
let arr = [3,5,6,7,8]

let sum = arr[1] + arr[3] // accessing array elements using index
console.log(sum) // 12

// accessing last element of array
console.log(arr[arr.length - 1]) // 8
// accessing second last element of array
console.log(arr[arr.length - 2]) // 7


let names = ["aish","monii","riya", 7, false, [5,9]]

// names[5] = [5, 9]
// names[5][0] = 5

console.log(names[5][0]) // accessing nested array element



// Dealing with objects
let person = {
    name: "Aish",
    age: 20,
    isStudent: true,
    subjects: ["Math", "Science", "English"],
    address: {
        city: "Delhi",
        country: "India"
    }
};
// Accessing object properties
console.log(person.subjects)