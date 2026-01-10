// Merge two sorted list : 

// this solution is without dummy node we will improve it in next file

var mergetwoLists = function (list1, list2) {
 
  let start = new ListNode();
  let curr = start;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
    }
    else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  if (!list1) {
    curr.next = list2;
  }
  else {
    curr.next = list1;
  }
  return start.next;
}