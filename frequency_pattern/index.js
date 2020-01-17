function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequentCounter1 = {};
  let frequentCounter2 = {};

  for (let val of arr1) {
    frequentCounter1[val] = (frequentCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequentCounter2[val] = (frequentCounter2[val] || 0) + 1;
  }

  console.log(frequentCounter1);

  for (let key in frequentCounter1) {
    if (!(key ** 2 in frequentCounter2)) {
      return false;
    }
    if (frequentCounter2[key ** 2] !== frequentCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));
