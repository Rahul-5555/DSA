// remove nth node from end of the linked list?

var removeNthFromEnd = function (head, n) {
  // (1️⃣ Dummy / sentinel node) add sentinel node at start
  let sentinel = new ListNode();
  sentinel.next = head;

  // (2️⃣ First pointer ko n steps aage le jao) move my first pointer ahead by n
  let first = sentinel;
  for (i = 0; i < n; i++) {
    first = first.next;
  }
  //(3️⃣ Second pointer start se) move both pointer untill first pointer reaches to the last node
  let second = sentinel;

  // 4️⃣ Dono ko saath chalao
  while (first.next) {
    second = second.next;
  }
  // just delete second next
  second.next = second.next.next;

  // 6️⃣ New head return
  return sentinel.next;
}


/*
🧠 Core Idea (Two Pointer Technique)

First pointer ko aage bhejo n steps

Second pointer ko start se chalao

Jab first last node par pahunch jaye,
tab second us node ke just pehle hota hai jise delete karna hai

*/