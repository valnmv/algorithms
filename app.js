"use strict";

const assert = require('assert');

const InsertionSort = require('./insertion-sort.js');
const PidgeonholeSort = require('./pidgeonhole-sort');

var sortAlgorithm = new InsertionSort;
sortAlgorithm.sortTest();

sortAlgorithm = new PidgeonholeSort;
sortAlgorithm.sortTest();
