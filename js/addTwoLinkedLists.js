// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoLinkedLists = (l1, l2) => {
  let returnList = null;
  let carryVal;

  while (l1 || l2) {
    let returnVal = 0;
    if (carryVal) {
      returnVal++;
      carryVal = 0;
    }

    if (l1?.val) returnVal += l1.val;
    if (l2?.val) returnVal += l2.val;

    if (returnVal > 9) {
      returnVal %= 10;
      carryVal = 1;
    }

    const newNode = new ListNode();
    newNode.val = returnVal;

    if (!returnList) {
      returnList = newNode;
    } else {
      previous.next = newNode;
    }

    previous = newNode;
    (l1 = l1?.next), (l2 = l2?.next);
  }
  if (carryVal) {
    const newNode = new ListNode(1);
    previous.next = newNode;
  }
  return returnList;
};

const listOne = new ListNode(2);
listOne.next = new ListNode(4);
listOne.next.next = new ListNode(3);

const listTwo = new ListNode(5);
listTwo.next = new ListNode(6);
listTwo.next.next = new ListNode(4);

console.log(addTwoLinkedLists(listOne, listTwo))