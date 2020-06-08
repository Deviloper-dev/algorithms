function mergeSort(source) {
  if (source.length === 1) {
    return source;
  }

  const middle = Math.floor(source.length / 2);

  return mergeHalves(mergeSort(source.slice(0, middle)), mergeSort(source.slice(middle, source.length)));
}

function mergeHalves(left, right) {
  const sortedArr = [];

  while (left.length > 0 && right.length > 0) {
    left[0] <= right[0]
      ? sortedArr.push(left.shift(1))
      : sortedArr.push(right.shift(1));
  }

  return [...sortedArr, ...left, ...right];
}

module.exports = mergeSort;