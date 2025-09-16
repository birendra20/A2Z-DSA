/*
arr = [1,2,3], k = 2.5;  ==> true
arr = [1,3,3,4,6,7,10,12,19] , k = 8  ==> true
arr = [-1,0,3,4,5,6] k=4.1,  ==> false
arr = [], 4



*/

function averagePair(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;

    if (avg === k) {
      return true;
    } else if (avg > k) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
