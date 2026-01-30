// Playing with Queue (FIFO - First In First Out)

// Queue (FIFO - First In First Out)

let queue = [];

// ENQUEUE → add at end
queue.push(10);
queue.push(20);
queue.push(30);

console.log(queue); // [10, 20, 30]

// DEQUEUE → remove from front
queue.shift();
console.log(queue); // [20, 30]

// FRONT element
let front = queue[0];
console.log(front); // 20



// NEVER DO THIS - DEQUEUE using pop (WRONG WAY) 