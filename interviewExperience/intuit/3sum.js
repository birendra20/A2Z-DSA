/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105



*/

/**
 
https://chatgpt.com/share/67d45c74-b998-800a-b613-16e04bb07de6

TODO : Need to understand and solve and dry run pending.
Optimized Approach: 3Sum Problem (Using Sorting + Two Pointers)

This problem requires finding unique triplets in an array where the sum is equal to 0.

Approach: Sorting + Two-Pointer Technique (O(n²))
	1.	Sort the array → This helps with duplicate handling and enables the two-pointer technique.
	2.	Iterate through the array:
	•	Fix one element (nums[i]) and use two pointers (left and right) to find the remaining two numbers.
	3.	Avoid duplicates → Skip duplicate values for nums[i], left, and right.

Code with Comments & Time Complexity Analysis
 */
function threeSum(nums) {
  let result = [];

  // Step 1: Sort the array to easily skip duplicates and use two-pointer technique
  nums.sort((a, b) => a - b);

  // Step 2: Iterate through the array, fixing one element at a time
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements to avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1; // Left pointer (next element)
    let right = nums.length - 1; // Right pointer (last element)

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // ✅ Found a valid triplet, add to the result
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate values for left pointer
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicate values for right pointer
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move pointers to next possible triplet
        left++;
        right--;
      } else if (sum < 0) {
        // 🔺 If sum is too small, move `left` to increase sum
        left++;
      } else {
        // 🔻 If sum is too large, move `right` to decrease sum
        right--;
      }
    }
  }

  return result;
}

// Example test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

/**
Explanation with Example

Input:

nums = [-1, 0, 1, 2, -1, -4]

Step 1: Sorting

Sorted array:

nums = [-4, -1, -1, 0, 1, 2]

Step 2: Iterate and Use Two-Pointer Approach

Fixed (i)	Left (left)	Right (right)	Sum (nums[i] + nums[left] + nums[right])	Action
-4	-1	2	-3	Move left right
-4	0	2	-2	Move left right
-4	1	2	-1	Move left right
-1	-1	2	0	✅ Store [-1,-1,2], Move both pointers
-1	0	1	0	✅ Store [-1,0,1], Move both pointers

Final Output:

[[-1, -1, 2], [-1, 0, 1]]

Time & Space Complexity Analysis

Complexity	Explanation
Time Complexity (TC)	O(n²) → Sorting takes O(n log n), and the two-pointer approach runs in O(n²).
Space Complexity (SC)	O(1) → We use constant extra space, apart from the output array.

Why is This Solution Efficient?

✅ Avoids O(n³) brute force
✅ Handles duplicates efficiently
✅ Two-pointer reduces unnecessary checks

🚀 Final Verdict: Best approach for solving the 3Sum problem in O(n²) time!
Let me know if you have any questions! 😊

 */
