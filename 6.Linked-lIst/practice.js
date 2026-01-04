function Node(val){
  this.val = val;
  this.next = null;
  console.log("🟢 Node created with value:", val);
}

let node1 = new Node(10);
console.log(node1)
let node2 = new Node(20);
console.log(node2)

node1.next = node2;
console.log(node1)

