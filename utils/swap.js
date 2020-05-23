function swap(arr, left, right) {
  // if (left == right) return;
  // console.log(`swap ${left} ${right}`, arr);
  let temp = arr[left];

  arr[left] = arr[right];
  arr[right] = temp;
}

module.exports = swap;