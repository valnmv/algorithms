const assert = require('assert');

const InsertionSort = require('./insertion-sort.js');
const PidgeonholeSort = require('./pidgeonhole-sort');
const Hanoi = require('./hanoi');
const { LinkedList, ListNode } = require('./linked-list');

let sortAlgorithm = new InsertionSort();
sortAlgorithm.sortTest();

sortAlgorithm = new PidgeonholeSort();
sortAlgorithm.sortTest();

const hanoi = new Hanoi();
hanoi.testGetSparePeg();

// hanoi.allPegs.A = ['1', '2', '3', '4'];
// hanoi.run(4, 'A', 'B');

const linkedList = new LinkedList();
assert.equal(linkedList.head, null);

const listNode = new ListNode('World!');
linkedList.insertAtHead(listNode);
linkedList.insertAtHead(new ListNode('Hello '));
linkedList.insertAtHead(new ListNode('List '));
assert.equal(linkedList.length, 3);

linkedList.print();
linkedList.reverse();
linkedList.print();
linkedList.reverse();
linkedList.print();
