// intersection of two linked list

var getIntersectionNode = function (headA, headB) {
  // put all elements of headB inside a set
  let store = Set();
  while (headB) {
    store.add(headB);
    headB = headB.next;
  }

  // check for each element of headA. if they are present in set
  while (headA) {
    if (store.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  return null;
}