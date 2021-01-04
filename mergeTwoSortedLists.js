/**
 * merged two sorted lists, return one sorted list
 * l1 = [1, 2, 4]
 * l2 = [1, 3, 4]
 * 1 -> 1 -> 2 -> 3 -> 4 -> 4
 * I: two sorted lists
 * O: one sorted list, (2 inputs merged)
 * C: none
 * E: one or more empty lists
 *
 * 1 -> 2 -> 4
 * 1 -> 3 -> 4
 * create a dummy head node
 *  assign current var to dummy
    dummy -> l1curr -> l2curr
    while loop that's entered as long as l1 and l2 are not null
      compare l1.val to l2.val
      append smaller to current, and move pointer
    when loop finishes, append the list that is NOT null to end
    return dummy.next
 */

const mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode();
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;
  return dummy.next;
};
