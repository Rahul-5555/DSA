// remove nth node from end of the linked list?

var removeNthFromEnd = function (head, n) {
  // add sentinel node at start
  let sentinel = new ListNode();
  sentinel = head;

  // move my first pointer ahead by n
  let first = sentinel;
  for (i = 0; i < n; i++) {
    first = first.next;
  }
  // move both pointer untill first pointer reaches to the last node
  let second = sentinel;
  while (first.next) {
    second = second.next;
  }
  // just delete second next
  second.next = second.next.next;
  return sentinel.next;
}