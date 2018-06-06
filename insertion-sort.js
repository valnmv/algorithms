const assert = require('assert');

class InsertionSort {
  constructor() {
    this.items = [];
  }

  // insert value key in sorted array [0..rightIndex]
  insert(rightIndex, key) {
    let i = 0;
    for (i = rightIndex; i >= 0 && this.items[i] > key; i--) {
      this.items[i + 1] = this.items[i];
    }

    this.items[i + 1] = key;
  }

  insertTest() {
    this.items = [2, 8, 10, -4, 5, 19];
    this.insert(2, -4);
    assert.deepEqual(this.items, [-4, 2, 8, 10, 5, 19]);
  }

  sort() {
    for (let i = 1; i < this.items.length; ++i) {
      this.insert(i - 1, this.items[i]);
    }
  }

  sortTest() {
    this.items = [19, 8, 2, 10, -4, 5];
    this.sort();
    assert.deepEqual(this.items, [-4, 2, 5, 8, 10, 19]);
  }
}

module.exports = InsertionSort;
