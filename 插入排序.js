let arr = [23, 45, 18, 37, 92, 13, 24];

const insertSort = function (arr) {
  let length = arr.length;
  let curr, prev;
  for (let i = 1; i < length; i++) {
    prev = i - 1;
    curr = arr[i];
    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
};

let res = insertSort(arr);

console.log(res);