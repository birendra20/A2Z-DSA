/*
AN EXAMPLE Write a function called sumZero which accepts a sorted
array of integers. The function should find the first pair
where the sum is 0. Return an array that includes both
values that sum to zero or undefined if a pair does not exist *
sumZero ([-3,-2,-1,0,1,2,31) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero ([1,2,3]) // undefined



*/
// Function to find the first pair of numbers whose sum is zero
// This is a brute force approach
function sumZeroBrute(arr) {
  // Outer loop to iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Inner loop to iterate through the next element after 'i'
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the sum of the current pair is 0
      if (arr[i] + arr[j] === 0) {
        // If found, return the pair as an array
        return [arr[i], arr[j]];
      }
    }
  }

  // If no pair is found, return undefined
  return undefined;
}

/**
 * Time Complexity: O(n^2)
 * -----------------------
 * - The outer loop runs 'n' times.
 * - The inner loop runs 'n-1', 'n-2', 'n-3', ..., 1 times.
 * - In the worst case, the total number of iterations is approximately n^2.
 * - Hence, the time complexity is O(n^2).
 *
 * Space Complexity: O(1)
 * -----------------------
 * - We are not using any extra space that grows with the input size.
 * - Only a constant amount of space is used for variables like i, j, and the return value.
 * - Hence, the space complexity is O(1).
 */

// console.log(sumZeroBrute([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined

//------------------

// Function to find the first pair of numbers whose sum is zero
// This is an optimized approach using the two-pointer technique
function sumZeroOptimized(arr) {
  // Initialize two pointers:
  // leftP starts from the beginning of the array
  let leftP = 0;

  // rightP starts from the end of the array
  let rightP = arr.length - 1;

  // Iterate the loop until the two pointers cross each other
  while (leftP < rightP) {
    // Calculate the sum of the values at leftP and rightP
    let sum = arr[leftP] + arr[rightP];

    // Check if the sum is zero, if true return the pair
    if (sum === 0) {
      return [arr[leftP], arr[rightP]];
    }

    // If the sum is greater than zero,
    // move the right pointer to the left to reduce the sum
    else if (sum > 0) {
      rightP--;
    }

    // If the sum is less than zero,
    // move the left pointer to the right to increase the sum
    else {
      leftP++;
    }
  }

  // If no such pair exists, return undefined
  return undefined;
}

// Test cases
console.log(sumZeroOptimized([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZeroOptimized([-2, 0, 1, 3])); // undefined
console.log(sumZeroOptimized([1, 2, 3])); // undefined

/**
 * Time Complexity: O(n)
 * ---------------------
 * - The loop runs until leftP < rightP.
 * - In the worst case, it traverses the entire array once.
 * - Hence, the time complexity is O(n).
 *
 * Space Complexity: O(1)
 * ----------------------
 * - We are not using any extra space except for a few variables (leftP, rightP, sum).
 * - No data structures like arrays, hash maps, etc., are used.
 * - Hence, the space complexity is O(1).
 */

console.log(sumZeroOptimized([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZeroOptimized([-2, 0, 1, 3])); // undefined
console.log(sumZeroOptimized([1, 2, 3])); // undefined
