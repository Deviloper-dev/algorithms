const { swap } = require('../utils')

/**
 * Quicksort algorithm i mplementation
 * @param {Array} arr Input source array to sort
 * @param {Number} left left index
 * @param {Number} right Right index
 */
function quicksort(arr, left, right) {
  if (left >= right) {
    return
  }
  let pivotIndex = Math.floor((left + right) / 2);
  let pivot = arr[pivotIndex];
  let index = partition(arr, left, right, pivot);
  quicksort(arr, left, index - 1)
  quicksort(arr, index, right)
}

function partition(arr, left, right, pivot) {
  // console.log(`partition ${left} ${right}`)
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
}

/* function swap(arr, left, right) {
  // if (left == right) return;
  // console.log(`swap ${left} ${right}`, arr);
  let temp = arr[left];

  arr[left] = arr[right];
  arr[right] = temp;
} */

module.exports = quicksort;