/**
 167. Two Sum II - Input Array Is Sorted
Solved
Medium
Topics
Companies
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
 */

// NOTE solution of two sum will also work by just add +1 and return  , as it is 1 based index
// here array is sorted we can take advantage and Two pointer can be used

function twoSumII(nums, target) {
  let leftP = 0; // Left pointer starts at the beginning of the array
  let rightP = nums.length - 1; // Right pointer starts at the end of the array

  while (leftP < rightP) {
    let sum = nums[leftP] + nums[rightP]; // Calculate the sum of elements at leftP and rightP
    console.log("sum", sum);

    if (sum === target) {
      // ✅ If the sum matches the target, return the indices (1-based index)
      return [leftP + 1, rightP + 1];
    } else if (sum > target) {
      // 🔻 If sum is greater than the target, move the right pointer left to decrease the sum
      rightP--;
    } else {
      // 🔺 If sum is smaller than the target, move the left pointer right to increase the sum
      leftP++;
    }
  }

  return []; // Return an empty array if no valid pair is found
}

// Example test case
console.log(twoSumII([2, 7, 11, 15], 9)); // Output: [1,2]
/*
Explanation with Example

Input:

nums = [2, 7, 11, 15], target = 9

Steps using Two-Pointer Approach

Left Pointer (leftP)	Right Pointer (rightP)	Sum (nums[leftP] + nums[rightP])	Action
2 (index 0)	15 (index 3)	2 + 15 = 17	Move rightP left
2 (index 0)	11 (index 2)	2 + 11 = 13	Move rightP left
2 (index 0)	7 (index 1)	2 + 7 = 9 ✅	Return [1,2]

✔ The correct pair is found at index [0,1] (1-based index [1,2]).

Time & Space Complexity Analysis

Complexity	Explanation
Time Complexity (TC)	O(n) → The two-pointer approach processes each element at most once, making it linear time complexity.
Space Complexity (SC)	O(1) → No extra space is used, apart from a constant number of variables.



* */
