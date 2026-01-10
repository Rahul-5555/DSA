/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)   // node ka data
 *   this.next = (next===undefined ? null : next) // next node ka reference
 * }
 */

var addTwoNumbers = function (l1, l2) {

  // 🔹 Step 1: Dummy node banaya (starting point)
  // Isse first node ke liye special case handle nahi karna padega
  let ans = new ListNode();

  // 🔹 Step 2: Head ko save kar liya
  // Final answer isi pointer se return hoga
  let ansHead = ans;

  // 🔹 Step 3: Carry initialize ki (addition ke overflow ke liye)
  let carry = 0;

  // 🔹 Step 4: Loop tab tak chalega
  // jab tak l1 ya l2 me nodes bache ho
  // ya last me carry bacha ho
  while (l1 || l2 || carry) {

    // 🔹 Step 5: Current digits ka sum nikala
    // Agar koi list khatam ho jaye to uska digit 0 maan liya
    let sum =
      (!l1 ? 0 : l1.val) +
      (!l2 ? 0 : l2.val) +
      carry;

    // 🔹 Step 6: New carry calculate ki
    // Example: sum = 15 → carry = 1
    carry = Math.floor(sum / 10);

    // 🔹 Step 7: Current digit nikala
    // Example: sum = 15 → digit = 5
    let digit = sum % 10;

    // 🔹 Step 8: Digit ke liye naya node banaya
    let newNode = new ListNode(digit);

    // 🔹 Step 9: Answer list me naya node attach kiya
    ans.next = newNode;

    // 🔹 Step 10: Answer pointer ko aage move kiya
    ans = ans.next;

    // 🔹 Step 11: l1 pointer ko next node par le gaye
    // Agar l1 null hai to null hi rahega
    l1 = l1 && l1.next;

    // 🔹 Step 12: l2 pointer ko next node par le gaye
    l2 = l2 && l2.next;
  }

  // 🔹 Step 13: Dummy node ke next se actual answer start hota hai
  return ansHead.next;
};
