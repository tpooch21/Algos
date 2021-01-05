const deleteDuplicates = function(head) {
  if (!head) return null;

  const dummy = new ListNode(0);
  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    if (curr.val !== curr.next.val) {
      prev.next = curr;
      prev = prev.next;
    } else {
      while (curr.next && (curr.val === curr.next.val)) {
        curr = curr.next;
      }
    }

    curr = curr.next;
  }

  prev.next = curr;
  return dummy.next;
};

/*
  delete all nodes that have duplicate numbers
  I: head of sorted linked list
  O: head of sorted linked list, duplicates removed
  C: none
  E: empty LL

  create dummy head
  prev = head
  curr = head.next
  compare curr to curr.next
    if not the same, append curr to prev
      curr -> curr.next
      prev -> prev.next
    if same
      enter while loop, condition curr is equal to curr.next
      increase curr every time
