// =======================
// NODE STRUCTURE
// =======================
// Ye function ek single node banata hai
// Har node ke paas:
// 1️⃣ value (data)
// 2️⃣ next pointer (next node ka address)
function Node(val) {
  this.val = val;          // node ke andar data store hota hai
  this.next = null;       // next node ka reference (initially null)
  console.log("🟢 Node created with value:", val);
}

// =======================
// LINKED LIST STRUCTURE
// =======================
// Ye poori linked list ka container hai
// Ye head pointer aur size ko manage karta hai
var MyLinkedList = function () {
  this.head = null;       // head pehla node hota hai (start point)
  this.size = 0;          // list me total nodes ki count
  console.log("📦 New Linked List initialized (empty)");
};

// =======================
// GET VALUE AT INDEX
// =======================
// Diye gaye index par value return karta hai
// Agar index galat ho → -1 return karta hai
MyLinkedList.prototype.get = function (index) {
  console.log(`🔍 GET called for index: ${index}`);

  // ❌ Index out of bounds check
  if (index < 0 || index >= this.size) {
    console.log("❌ Invalid index");
    return -1;
  }

  // Traversal hamesha head se start hoti hai
  let curr = this.head;
  console.log("➡️ Start from head:", curr.val);

  // Index tak pahunchne ke liye next pointers follow karo
  for (let i = 0; i < index; i++) {
    curr = curr.next;
    console.log("➡️ Move to next node:", curr.val);
  }

  // Required index ki value return karo
  console.log("✅ Value found:", curr.val);
  return curr.val;
};

// =======================
// ADD NODE AT HEAD
// =======================
// Naya node list ke start me add karta hai
// Ye operation O(1) time me hota hai
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

// =======================
// ADD NODE AT TAIL
// =======================
// Naya node list ke end me add karta hai
// Ye operation O(n) time leta hai
MyLinkedList.prototype.addAtTail = function (val) {
  console.log(`➕ ADD AT TAIL: ${val}`);

  // Step 1: naya node create
  let newNode = new Node(val);

  // Agar list empty hai
  if (this.head === null) {
    this.head = newNode;   // new node hi head ban jayega
    console.log("🔗 List empty → new node becomes head");
  }
  else {
    // Step 2: head se traversal start
    let curr = this.head;
    console.log("➡️ Traversing to reach last node");

    // Jab tak last node na mile
    while (curr.next !== null) {
      console.log("➡️ Currently at node:", curr.val);
      curr = curr.next;
    }

    // Step 3: last node ke next me new node jod do
    curr.next = newNode;
    console.log("🔗 New node linked after:", curr.val);
  }

  // Step 4: size increase
  this.size++;
  console.log("📏 Current size:", this.size);
};

// =======================
// ADD NODE AT GIVEN INDEX
// =======================
// Specific index par node insert karta hai
MyLinkedList.prototype.addAtIndex = function (index, val) {
  console.log(`➕ ADD ${val} AT INDEX ${index}`);

  // ❌ Invalid index check
  if (index < 0 || index > this.size) {
    console.log("❌ Invalid index");
    return;
  }

  // Agar index 0 hai → head insertion
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  // Agar index size ke equal hai → tail insertion
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  // Step 1: new node create
  let newNode = new Node(val);

  // Step 2: index-1 tak pahunchna (previous node)
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    console.log("➡️ Traversing, at node:", curr.val);
    curr = curr.next;
  }

  // Step 3: links adjust karo
  newNode.next = curr.next; // next ko safe rakho
  curr.next = newNode;      // new node insert karo

  // Step 4: size increase
  this.size++;
  console.log(`🔗 Node ${val} inserted after ${curr.val}`);
  console.log("📏 Current size:", this.size);
};

// =======================
// DELETE NODE AT INDEX
// =======================
// Diye gaye index ka node delete karta hai
MyLinkedList.prototype.deleteAtIndex = function (index) {
  console.log(`🗑️ DELETE AT INDEX ${index}`);

  // ❌ Invalid index check
  if (index < 0 || index >= this.size) {
    console.log("❌ Invalid index");
    return;
  }

  // Agar head delete karna ho
  if (index === 0) {
    console.log("🗑️ Deleting head:", this.head.val);
    this.head = this.head.next; // head ko next node par shift
  }
  else {
    // Step 1: index-1 tak pahunchna
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      console.log("➡️ Traversing, at node:", curr.val);
      curr = curr.next;
    }

    // Step 2: node ko skip karo (delete)
    console.log("🗑️ Deleting node:", curr.next.val);
    curr.next = curr.next.next;
  }

  // Step 3: size decrease
  this.size--;
  console.log("📏 Current size:", this.size);
};


let list = new MyLinkedList();

list.addAtHead(10);
list.addAtHead(20);
list.addAtTail(30);

list.get(1);

list.addAtIndex(1, 15);

list.deleteAtIndex(2);
