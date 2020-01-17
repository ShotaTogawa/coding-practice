function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[right] + arr[left];
    if (sum === 0) {
      return [arr[right], arr[left]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i;
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));
