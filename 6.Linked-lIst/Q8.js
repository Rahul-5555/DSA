// remove nth node from end of the linked list?

var removeNthFromEnd = function (head, n) {
  // add sentinel node at start
  let sentinel = new ListNode();
  sentinel.next = head;

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


/*
🧠 Core Idea (Two Pointer Technique)

First pointer ko aage bhejo n steps

Second pointer ko start se chalao

Jab first last node par pahunch jaye,
tab second us node ke just pehle hota hai jise delete karna hai

*/