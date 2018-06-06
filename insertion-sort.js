const assert = require('assert');

class InsertionSort {
  constructor() {
    this.items = [];
  }

  // insert value key in sorted array [0..rightIndex]
  insert(array, rightIndex, key) {
    let i = 0;
    for (i = rightIndex; i >= 0 && array[i] > key; i--) {
      array[i + 1] = array[i];
    }

    array[i + 1] = key;
  }

  insertTest() {
    const array = [2, 8, 10, -4, 5, 19];
    this.insert(array, 2, -4);
    assert.deepEqual(array, [-4, 2, 8, 10, 5, 19]);
  }

  sort() {
    this.items = [19, 8, 2, 10, -4, 5];
    for (let i = 1; i < this.items.length; ++i) {
      this.insert(this.items, i - 1, this.items[i]);
    }
  }

  sortTest() {
    this.sort(this.items);
    assert.deepEqual(this.items, [-4, 2, 5, 8, 10, 19]);
  }
}

module.exports = InsertionSort;
