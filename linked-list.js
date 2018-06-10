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

  delete(pos) {
    if (pos >= this.length) {
      return;
    }

    let prev = null;
    let item = this.head;
    for (let i = 0; i < pos; i++) {
      prev = item;
      item = item.next;
    }

    if (prev !== null) {
      prev.next = item.next;
    } else {
      this.head = item.next;
    }

    this.length--;
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
    console.log(`length: ${this.length}`);
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
