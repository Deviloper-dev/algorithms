const { swap } = require('../utils')

function bruteforce(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) swap(arr, i, j)
    }
  }
}

module.exports = bruteforce;