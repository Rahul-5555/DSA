//  Swap Nodes in Pairs 

var swapPairs = function (head) {
  // step1: corner cases head is null or has only one node
  if (!head || !head.next) return head;

  // step:1 creatiing dummy node
  let dummy = new ListNode();
  dummy.next = head;

  // step:3 mark prev, curr, next
  let prev = dummy;
  let curr = head;
  let n = head.next;

  // step:4 swap only when curr is there and next is there otherwise beak the loop.
  while (curr && n) {
    // step:5 swapping the values
    prev.next = n;
    curr.next = n.next;
    n.next = curr;

    // step:6 moves my pointer ahead
    prev = curr;
    curr = prev.next;
    n = curr && curr.next;
  }
  return dummy.next;
}



/*
“I used a dummy node to manage head changes and swapped adjacent nodes by re-linking pointers, not by swapping values. After each swap, I moved the pointers forward by two nodes.”
*/