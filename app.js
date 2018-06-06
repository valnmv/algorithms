require('assert');

const InsertionSort = require('./insertion-sort.js');
const PidgeonholeSort = require('./pidgeonhole-sort');

let sortAlgorithm = new InsertionSort();
sortAlgorithm.sortTest();

sortAlgorithm = new PidgeonholeSort();
sortAlgorithm.sortTest();
