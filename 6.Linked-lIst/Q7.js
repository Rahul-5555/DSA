// delete the nth element from end of list

// Definition for singly-linked list
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode(); // 🟢 Step 1: Create a sentinel (dummy) node
  sentinel.next = head; // Sentinel ka next actual head ko point karega
  let length = 0; // 🟢 Step 2: Calculate the length of the linked list
  while (head) {
    head = head.next;
    length++;
  }
  let prevPosition = length - n; // 🟢 Step 3: Find the position to delete from the start

  let prev = sentinel; // 🟢 Step 4: Initialize prev pointer to sentinel
  for (let i = 0; i < prevPosition; i++) {
    prev = prev.next; // 🟢 Step 5: Move prev to the node before the target
  }
  prev.next = prev.next.next; // 🟢 Step 6: Remove the nth node from the end
  return sentinel.next; // 🟢 Step 7: Return the modified list
}

// test case
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(removeNthFromEnd(head, 2)); // Output: [1,2,3,5]
// “I do this by maintaining a `prev` pointer that stops just before the node to be deleted, allowing me to skip over it by adjusting the `next` pointer.”
// > This effectively removes the nth node from the end of the list while maintaining the integrity of the linked list structure.”