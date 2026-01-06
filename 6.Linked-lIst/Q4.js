//234- leetcode: Palindrome linked list

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
  while(secondList){
    if(firstList.val != secondList.val){
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
}