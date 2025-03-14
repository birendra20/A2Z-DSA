/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraint	Explanation
2 <= nums.length <= 10⁴	The array has at least two elements and at most 10,000 elements.
-10⁹ <= nums[i] <= 10⁹	The values in the array can be very large or very small, so we must consider negative numbers too.
-10⁹ <= target <= 10⁹	The target value can also be large or small, so we must check for all possibilities.
“Only one valid answer exists.”	There is always one and only one pair that satisfies the condition. No need to handle multiple solutions or check for edge cases where no solution exists.


*/

function twoSum(nums, target) {
  // Iterate over each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Iterate over the next elements after i
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the sum of nums[i] and nums[j] equals the target
      if (nums[i] + nums[j] === target) {
        // Return the indices as a result
        return [i, j];
      }
    }
  }
  return []; // Return empty array if no solution is found (though problem guarantees one solution)
}

// // Example test cases
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0,1]
// console.log(twoSum([3, 2, 4], 6)); // Output: [1,2]
// console.log(twoSum([3, 3], 6)); // Output: [0,1]

/*
Complexity	Analysis
Time Complexity	O(n²) → Because we use two nested loops to check all pairs. For n elements, we check (n-1) + (n-2) + ... + 1 ≈ n² comparisons.
Space Complexity	O(1) → We are using only a constant amount of extra space (not counting input and output). The result array takes just O(1) space.

*/

function twoSumOptimized(nums, target) {
  // Create a HashMap to store numbers and their indices
  const map = new Map();

  // Iterate over the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement (the number needed to reach the target)
    const complement = target - nums[i];

    // Check if the complement exists in the map
    if (map.has(complement)) {
      console.log("map", map);
      return [map.get(complement), i]; // Return indices of complement and current element
    }

    // Store the current number and its index in the map
    map.set(nums[i], i);
  }
  console.log("map is", map);
  return []; // Return an empty array if no solution is found (though the problem guarantees one)
}

// Example test cases
console.log(twoSumOptimized([2, 7, 11, 15], 9)); // Output: [0,1]
console.log(twoSumOptimized([3, 2, 4], 6)); // Output: [1,2]
console.log(twoSumOptimized([3, 3], 6)); // Output: [0,1]
