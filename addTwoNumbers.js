/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  let end = dummy;
  let carry = 0;

  while (l1 || l2) {
    l1Val = l1 ? l1.val : 0;
    l2Val = l2 ? l2.val : 0;
    const sum = l1Val + l2Val + carry;

    let newNode;
    if (sum >= 10) {
      newNode = new ListNode(sum % 10);
      carry = 1;
    } else {
      newNode = new ListNode(sum);
      carry = 0;
    }
    end.next = newNode;
    end = end.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) {
    end.next = new ListNode(1);
  }

  return dummy.next;
};

/*
  Walk through lists simultaneously, add nodes together
    create a new node with sum, add to list
  If sum is >= 10, the new node should be sum % 10
    set a carry variable to 1
    set carry back to 0 if not
  Only move onto next node if node.next exists
  node vals are either node.val or 0 if null
  if there's a lingering carry at the very end, append a node w val 1 to the end
*/
