const { swap } = require('../utils')

function sort(arr) {
  quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  const pivotIndex = Math.floor((left + right) / 2);
  const pivot = arr[pivotIndex];

  const index = partition(arr, pivot, left, right);
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);
}

function partition(arr, pivot, left, right) {
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

module.exports = sort;