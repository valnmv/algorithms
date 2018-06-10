class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(item) {
    item.next = this.head;
    this.head = item;
    this.length++;
  }

  reverse() {
    let item = this.head;
    let prev = null;

    while (item !== null) {
      const { next } = item;
      item.next = prev;
      prev = item;
      item = next;
    }

    this.head = prev;
  }

  print() {
    let item = this.head;
    while (item !== null) {
      console.log(item.data);
      item = item.next;
    }
  }
}

class ListNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

module.exports = { LinkedList, ListNode };
