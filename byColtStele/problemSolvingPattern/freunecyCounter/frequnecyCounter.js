/**
The function should return true if every value in the
array has it's corresponding value squared in the second
array. The frequency of values must be the same.

same([1,2,3] [4,1,9]);  //true;
same([1,2,3],[1,9]) // false
same([1,2,1],[4,4,1]) // false  

 */

/**
 * The function should return true if every value in the
 * first array has its corresponding squared value in the second array.
 * The frequency of values must be the same.
 *
 * @param {number[]} arr1 - First array of numbers.
 * @param {number[]} arr2 - Second array of numbers.
 * @returns {boolean} - True if the condition is met, otherwise false.
 */
function same(arr1, arr2) {
  // If the arrays have different lengths, return false immediately
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate through each number in arr1
  for (let i = 0; i < arr1.length; i++) {
    // Find the index of the squared value in arr2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    // If the squared value is not found, return false
    if (correctIndex === -1) {
      return false;
    }

    // Remove the found squared value from arr2 to prevent duplicate matches
    arr2.splice(correctIndex, 1);
  }

  // If all values are matched correctly, return true
  return true;
}

// Test cases
// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false

//Time Complexity: O(n²) (Quadratic)
//Space Complexity: O(1) (Constant)

//[1, 2, 3,2], [4, 1, 9,4]

obj1 = { 1: 1, 2: 2, 3: 1 };
obj2 = { 4: 2, 1: 1, 9: 1 };

//will run a loop fo obj1
// then  will check if key**2 of obj 1 is present in obj2
//if not then return false
// if key**2 === obj2[key]

function optimizedSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < arr1.length; i++) {
    let elem1 = arr1[i];

    if (obj1[elem1[i]] > 0) {
      obj1[elem1[i]]++;
    } else {
      obj1[elem1] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let elem = arr2[i];

    if (obj2[elem[i]] > 0) {
      obj2[elem[i]]++;
    } else {
      obj2[elem] = 1;
    }
  }

  // obj1 = { 1: 1, 2: 2, 3: 1 };
  // obj2 = { 4: 2, 1: 1, 9: 1 };

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj1[key ** 2] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(optimizedSame([1, 2, 3], [4, 1, 9]));

console.log(optimizedSame([1, 2, 3], [4, 1, 9])); // true
console.log(optimizedSame([1, 2, 3], [1, 9])); // false
console.log(optimizedSame([1, 2, 1], [4, 4, 1])); // false

function refactoredOptimizedSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  // Count occurrences in arr1
  for (let num of arr1) {
    freqCounter1[num] = (freqCounter1[num] || 0) + 1;
  }

  // Count occurrences in arr2
  for (let num of arr2) {
    freqCounter2[num] = (freqCounter2[num] || 0) + 1;
  }

  // Check if each value's square appears the correct number of times
  for (let key in freqCounter1) {
    let squared = key ** 2;
    if (!(squared in freqCounter2)) {
      return false;
    }
    if (freqCounter2[squared] !== freqCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log("test", (undefined || 0) + 1);
