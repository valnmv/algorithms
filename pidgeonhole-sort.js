const assert = require('assert');

// works on items with integer keys, like [[2, "some value"], ...]
// key <= max 32 bit unsigned
class PidgeonholeSort {
  constructor() {
    this.items = [];
  }

  sort() {
    const newItems = [];
    // newItems.length = 100;

    for (let i = 0; i < this.items.length; i++) {
      const key = this.items[i][0];
      if (newItems[key] === undefined) {
        newItems[key] = [];
      }

      newItems[key].push(this.items[i]);
    }

    let i = 0;
    this.items = [];

    newItems.forEach((v) => {
      for (let j = 0; j < v.length; j++) {
        this.items[i++] = v[j];
        // console.log(this.items[i - 1]);
      }
    });
  }

  sortTest() {
    this.items = [[6, 'a'], [1, 'b'], [20, 'c'], [6, 'd'], [3, 'e'], [6, 'f']];
    this.sort();
    assert.deepEqual(this.items, [[1, 'b'], [3, 'e'], [6, 'a'], [6, 'd'], [6, 'f'],
      [20, 'c']]);
  }
}

module.exports = PidgeonholeSort;
