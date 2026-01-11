//  Rotate list 

var rotateRight = function (head, k) {
  // step1: corner cases head is null or has only one node
  if (!head || !head.next) return head;

  // calculate length
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }
  // to avoid unnecessary rotation
  k = k % length;

  let s = head;
  let f = head;
  // move f pointer to k step ahead
  for (i = 0; i < k; i++) {
    f = f.next;
  }
  // reaching the end of the list
  while (f.next) {
    s = s.next;
    f = f.next;
  }
  
  // now f is at last node and s is at new tail
  f.next = head;
  let newHead = s.next;

  s.next = null;

  return newHead;
}