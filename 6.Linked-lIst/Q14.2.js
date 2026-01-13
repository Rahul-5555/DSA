var swapPairs = function (head) {
  // Base case: empty list or only one node
  if (!head || !head.next) return head;

  let first = head;        // first node of the pair
  let second = head.next; // second node of the pair

  // Recursively swap remaining list
  first.next = swapPairs(second.next);

  // Swap current pair
  second.next = first;

  // New head after swap
  return second;
};
