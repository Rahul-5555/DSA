// Playing with Stack (LIFO - Last In First Out)

// Create an empty stack (array is used as stack)
let stack = [];

// PUSH → element ko stack ke top par add karta hai
stack.push(1);   // stack = [1]
stack.push(4);   // stack = [1, 4]
stack.push(7);   // stack = [1, 4, 7]

console.log(stack); // Output: [1, 4, 7]

// POP → top element ko remove karta hai
stack.pop();     // removes 7
console.log(stack); // Output: [1, 4]

// TOP → stack ka last element (remove nahi karta)
let top = stack[stack.length - 1];
console.log(top); // Output: 4
