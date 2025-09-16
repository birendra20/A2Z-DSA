/*

given an array nums of integer and an integer k , return the max sum of the pair such that 
1) the sum is less than k 
2) if no such pair exist return -1

nums = [34, 23,1,23,75,33,54,8] , k = 60
output = 58;

*/

function twoSumLessThanK(nums, k) {
  let left = 0;
  let right = nums.length - 1;
  nums.sort((a, b) => a - b);

  let maxSum = -1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum < k) {
      maxSum = Math.max(maxSum, sum);
      left++;
    } else {
      right--;
    }
  }
  return maxSum;
}

console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60));
