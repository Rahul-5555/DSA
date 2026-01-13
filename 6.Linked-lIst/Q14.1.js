function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var swapPairs = function (head) {
  // Edge case: empty list or only one node
  if (!head || !head.next) return head;

  // Dummy node helps handle head changes
  let dummy = new ListNode(0);
  dummy.next = head;

  // prev always points to node before the pair
  let prev = dummy;

  // Loop while a pair exists
  while (prev.next && prev.next.next) {
    let first = prev.next;        // first node of the pair
    let second = first.next;      // second node of the pair

    // 🔁 Swap nodes by changing links
    first.next = second.next;
    second.next = first;
    prev.next = second;

    // Move prev to the end of the swapped pair
    prev = first;
  }

  return dummy.next;
};
//  Swap Nodes in Pairs
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log(swapPairs(head));