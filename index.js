const { Command } = require('commander')
const program = new Command()

// Sorting Algos
const { bruteforce, mergesort, quicksort } = require('./sorting')

let input = [10, 5, 2, 7, 4, 9, 12, 1, 8, 6, 11, 3];


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
  let mergesortSource = Array.from(source);

  console.time('quicksort');
  quicksort(quicksortSource, 0, quicksortSource.length - 1);
  console.timeEnd('quicksort');

  console.time('bruteforce');
  bruteforce(bruteforceSource);
  console.timeEnd('bruteforce');

  console.time('mergesort');
  mergesort(mergesortSource);
  console.timeEnd('mergesort');

  process.exit();
}

// call
sort(input);