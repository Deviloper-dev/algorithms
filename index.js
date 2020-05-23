const { Command } = require('commander')
const program = new Command()

// Sorting Algos
const { bruteforce, quicksort } = require('./sorting')

// let input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let input = [10, 8, 6, 4, 2, 1, 3, 5, 7, 9];


function processInput(value) {
  return value.split(',').map(v => Number(v.trim()))
}

function range(range) {
  let arr = [];

  for (let i = 0; i < range; i++) {
    arr[i] = Math.round(Math.random() * Math.random() * 10);
  }

  input = arr;

  return Number(range);
}

program
  .option('-i --input <value>', 'comma separated input array for for sorting algo', processInput, input)
  .option('-r --range <int>', 'range of array to be filed randomly', range, 10)
  .parse(process.argv)


function sort(source) {
  if (!source) {
    source = program.input;
  }

  let quicksortSource = Array.from(source);
  let bruteforceSource = Array.from(source);

  console.time('quicksort');
  quicksort(quicksortSource, 0, quicksortSource.length - 1);
  console.timeEnd('quicksort');

  console.time('bruteforce');
  bruteforce(bruteforceSource);
  console.timeEnd('bruteforce');

  process.exit(0);
}

// call
sort(input);