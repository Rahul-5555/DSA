// Merge two sorted list : 

// this solution is with dummy node for simplification


// Merge two sorted linked lists using a dummy node
// Think of this like merging two sorted queues into one sorted queue

var mergetwoLists = function (list1, list2) {

  // 🧍 Dummy node = fake starting point
  // This helps us avoid edge cases when building the result list
  let start = new ListNode();

  // 🚶 curr is our walker who builds the new list step by step
  let curr = start;

  // 🔁 Loop until one of the lists becomes empty
  while (list1 && list2) {

    // 👀 Compare the current values of both lists
    if (list1.val < list2.val) {

      // 🪢 Connect the smaller node (from list1) to our result list
      curr.next = list1;

      // ➡️ Move list1 forward (because we already used its current node)
      list1 = list1.next;

    } else {

      // 🪢 Connect the smaller node (from list2) to our result list
      curr.next = list2;

      // ➡️ Move list2 forward
      list2 = list2.next;
    }

    // 🚶 Move curr forward to continue building the list
    curr = curr.next;
  }

  // 🧹 One list is finished, the other still has nodes left
  // Since lists are already sorted, just attach the remaining part
  if (!list1) {
    curr.next = list2;   // 🧲 attach rest of list2
  } else {
    curr.next = list1;   // 🧲 attach rest of list1
  }

  // 🎯 start was fake, real answer starts from start.next
  return start.next;
}

/*


---

**

  ---

// ## 💡 One - Line Explanation(Interview Gold)

> “We use a dummy node to simplify list construction, compare nodes from both lists, attach the smaller one, and finally append the remaining list.”

*/

