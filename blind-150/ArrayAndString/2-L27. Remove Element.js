/*
Problem Statement

You are given an integer array nums and an integer val.
Remove all occurrences of val in-place and return the new length of the array.

The order of elements may be changed, but it doesn’t matter what values are beyond the returned length.


Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

Explanation: We removed all 3s. The array up to index 2 is valid: [2,2].
The underscores (_) don’t matter since we only care about the first k elements.




*/

/*
Approach: Two Pointers

We want to overwrite unwanted values.

1. Use a pointer i to track position for placing valid elements (not equal to val).

2. Loop through the array with pointer j.

If nums[j] != val, copy it to nums[i] and increase i.

If nums[j] == val, skip it.

At the end, i will represent the length of the array without val
*/

var removeElement = function (nums, val) {
  let i = 0; // pointer for valid position
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]; // copy valid elem forward
      i++;
    }
  }
  return i;
};
