// Creating node in linked list
// Ye comment batata hai ki hum linked list ka node bana rahe hain

function Node(val) {
  // Node constructor function
  // Jab bhi new Node() call hoga, ye function chalega

  this.val = val; // train ka dibba jisme data store hota hai
  // this.val me node ka actual data (value) store hota hai

  this.next = null; // agla dibba jisme next node ka reference store hota hai
  // this.next me next node ka reference store hota hai
  // Abhi null hai kyunki koi next node connected nahi hai

  console.log("🟢 Node created with value:", val);
  // Console me message print hota hai jab bhi naya node banta hai
}

let node1 = new Node(10); // dibba 1 create karo usme value 10 daalo
// Ek naya node create hota hai jiska value 10 hai
// node1 ek object ko point karta hai

let node2 = new Node(20); // dibba 2 create karo usme value 20 daalo
// Dusra node create hota hai jiska value 20 hai
// node2 bhi ek alag object ko point karta hai

node1.next = node2;  // dibba 1 ke next me dibba 2 ka reference daalo
// node1 ke next pointer me node2 ka reference store kar diya
// Is line se node1 aur node2 connect ho gaye (linked list bani)

console.log("➡️ node1 points to node2:", node1.next.val);
// Confirm kar rahe hain ki node1 ka next sach me node2 ko point kar raha hai
// node1.next.val print karega 20
