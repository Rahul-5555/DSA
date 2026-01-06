//234- leetcode: Palindrome linked list
/*
🔴 Problem: Palindrome Linked List (LeetCode 234)

Linked list palindrome hai ya nahi check karna
(forward aur backward same values honi chahiye)

Example:

1 → 2 → 2 → 1 ✅

1 → 2 → 3 ❌


*/
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}


var isPalindrome = function (head) {
  // finding the middle element
  let slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse the second half of the linked list
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // checking for palindrome
  let firstList = head;  // start node
  let secondList = prev;  // last node
  while (secondList) {
    if (firstList.val != secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
}

// ✅ Step 4: Test Case banaana (MOST IMPORTANT)
// 🔹 Helper function (array → linked list)
function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

// 🧪 Test Case 1: Even Palindrome
let head1 = createLinkedList([1, 2, 2, 1]);
console.log(isPalindrome(head1)); // true

// 🧪 Test Case 2: Odd Palindrome
let head2 = createLinkedList([1, 2, 3, 2, 1]);
console.log(isPalindrome(head2)); // true

// Test Case 3: Not a Palindrome
let head3 = createLinkedList([1, 2, 3]);
console.log(isPalindrome(head3)); // false

// Test Case 4: Single Node (Palindrome)
let head4 = createLinkedList([1]);
console.log(isPalindrome(head4)); // true


// Test Case 5: Two Nodes (Not Palindrome)
let head5 = createLinkedList([1, 2]);
console.log(isPalindrome(head5)); // false
