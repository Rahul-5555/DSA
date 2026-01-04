// leetcode 876
// Find the middle of the linked list

// Definition for singly-linked list
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
var middleNode = function(head){
  let slow = head;
  let fast = head;
  while(fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Create linked list: 1 → 2 → 3 → 4 → 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

// Call function
let result = middleNode(head);

// Print result
console.log(result.val);