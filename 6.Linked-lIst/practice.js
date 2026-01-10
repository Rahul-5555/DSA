function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function buildList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let v of arr) {
    curr.next = new ListNode(v);
    curr = curr.next;
  }
  return dummy.next;
}

// Linked List → Array (output dekhne ke liye)
function printList(head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  console.log(res.join(" → "));
}

var addTwoNumbers = function (l1, l2) {
  let ans = new ListNode();
  ansHead = ans;
  let carry = 0;
  while (l1 !== null && l2 !== null || carry) {
    let sum = l1.val + l2.val;
    let carry = Math.floor(sum / 10);
    let digit = sum % 10;

    let newNode = new ListNode(digit);
    ans.next = newNode;
    ans = ans.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return ansHead.next;

}

let l1 = buildList([2, 4, 3]);
let l2 = buildList([5, 6, 4]);

let result = addTwoNumbers(l1, l2);
printList(result);   // 7 → 0 → 8
