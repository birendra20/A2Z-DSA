/*
leetCode-167 two sumII => input arr is sorted 
1-based index 
arr = [2,7,11,15] target = 9; [1,9] 



*/

function twoSumII(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}

console.log(twoSumII([2, 7, 11, 15], 9));
console.log(twoSumII([2, 3, 4], 6));
