// leetcode 203:- remove elements from linked list?

var removeElement = function (head, val) {

  // 🟢 Step 1: Create a sentinel (dummy) node
  // Ye fake node hai jo real head se pehle lagta hai
  // Isse head delete karna bhi easy ho jaata hai
  let sentinel = new ListNode();

  // Sentinel ka next actual head ko point karega
  sentinel.next = head;

  // 🟢 Step 2: prev pointer banaya
  // prev hamesha us node pe hoga jiske next ko hum check / delete karenge
  let prev = sentinel;

  // 🟢 Step 3: Traverse linked list
  // prev.next check kar rahe hain kyunki deletion prev ke through hota hai
  while (prev && prev.next) {

    // 🟡 Step 4: Agar next node ki value = val hai
    if (prev.next.val === val) {

      // 🔴 Delete operation
      // prev.next ko skip kar diya (node remove ho gaya)
      prev.next = prev.next.next;

      // ❗ prev ko move nahi karte
      // Kyunki ho sakta hai next node bhi val ke equal ho
    }
    else {

      // 🟢 Step 5: Agar delete nahi karna
      // Normal traversal → prev ko aage badhao
      prev = prev.next;
    }
  }

  // 🟢 Step 6: New head return karo
  // Agar original head delete hua hoga
  // to sentinel.next new head hoga
  return sentinel.next;
};


/*

🎯 Interview Ready Explanation (One Shot)

“I use a sentinel node to avoid special cases for head deletion and remove nodes by adjusting the next pointer of the previous node.”

> “I use a sentinel node before the head to handle deletions uniformly.
> I traverse using a `prev` pointer and delete nodes by skipping `prev.next` when its value matches.
> This avoids special handling for head deletion.”

*/
