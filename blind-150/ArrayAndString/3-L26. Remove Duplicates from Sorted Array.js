/*
You’re given a sorted array nums.
Remove duplicates in-place such that each unique element appears only once.
Return the new length k, where the first k elements of nums are unique.

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Here:

New length = 2

First 2 elements are [1,2]

_ (anything after index 2) doesn’t matter.

Complexity

Time: O(n)

Space: O(1) (in-place)

*/

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0; // last unique index

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j]; //overwrite with new unique value
    }
  }
  return i + 1;
};
