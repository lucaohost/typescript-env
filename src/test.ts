class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let numberL1: number = extractNumber(l1);
    let numberL2: number = extractNumber(l2);
    let sumArray = (numberL1 + numberL2).toString().split("").reverse();
    let root: ListNode = new ListNode(parseInt(sumArray[0]));
    let node = root;
    sumArray.shift()
    for (let digit of sumArray) {
        let nextNode: ListNode = new ListNode(parseInt(digit));
        node.next = nextNode;
        node = nextNode;
    }
    return root;

};

function extractNumber(linkedList: ListNode): number {
    let digits: string = "";
    digits += linkedList.val.toString();
    let node: ListNode = linkedList.next;
    while (node !== null && node.next !== null) {
        digits += node.val.toString();
        node = node.next;
    }
    if (node !== null) {
        digits += node.val.toString();
    }
    return parseInt(digits);
}