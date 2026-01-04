function Node(val) {
  this.val = val;          // node ke andar data store hota hai
  this.next = null;       // next node ka reference (initially null)
  console.log("🟢 Node created with value:", val);
}

var MyLinkedList = function () {
this.head = null;       // head pehla node hota hai (start point)
this.size = 0;          // list me total nodes ki count
console.log("📦 New Linked List initialized (empty)");
};

MyLinkedList.prototype.addAtHead = function (val) {
  console.log(`➕ ADD AT HEAD: ${val}`);

  // Step 1: naya node create karo
  let newNode = new Node(val);

  // Step 2: new node ka next → current head
  newNode.next = this.head;

  // Step 3: head ko update karke new node bana do
  this.head = newNode;

  // Step 4: size increase
  this.size++;

  console.log("✅ New head is:", this.head.val);
  console.log("📏 Current size:", this.size);
};

let list = new MyLinkedList();
list.addAtHead(10);
console.log(list);
