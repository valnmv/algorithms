require('assert');

const InsertionSort = require('./insertion-sort.js');
const PidgeonholeSort = require('./pidgeonhole-sort');
const Hanoi = require('./hanoi');

let sortAlgorithm = new InsertionSort();
sortAlgorithm.sortTest();

sortAlgorithm = new PidgeonholeSort();
sortAlgorithm.sortTest();

const hanoi = new Hanoi();
hanoi.testGetSparePeg();

hanoi.allPegs.A = ['1', '2', '3'];
hanoi.run(3, 'A', 'B');
