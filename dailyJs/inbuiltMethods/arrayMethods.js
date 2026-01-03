/**
 * CATEGORIZED LIST OF JAVASCRIPT ARRAY METHODS
 * 
 * 1. Mutator Methods (Modify original array)
 * 2. Accessor / Non-Mutating Methods (Return new value)
 * 3. Array Creation & Utility Methods
 * 4. Iteration Helpers
 * 5. Legacy
 */

/* ==========================================================================
   1. MUTATOR METHODS (Modify original array)
   ========================================================================== */

{
  /*
    1. Array.prototype.push()
    • Definition: Adds one or more elements to the end of an array.
    • Return Value: The new length of the array.
    • Modifies original array: YES
  */
  const arr = [1, 2];
  const newLength = arr.push(3, 4);
  console.log(arr); // [1, 2, 3, 4]
  console.log(newLength); // 4
}

{
  /*
    2. Array.prototype.pop()
    • Definition: Removes the last element from an array.
    • Return Value: The removed element.
    • Modifies original array: YES
  */
  const arr = [1, 2, 3];
  const popped = arr.pop();
  console.log(arr); // [1, 2]
  console.log(popped); // 3
}

{
  /*
    3. Array.prototype.shift()
    • Definition: Removes the first element from an array.
    • Return Value: The removed element.
    • Modifies original array: YES
  */
  const arr = [1, 2, 3];
  const shifted = arr.shift();
  console.log(arr); // [2, 3]
  console.log(shifted); // 1
}

{
  /*
    4. Array.prototype.unshift()
    • Definition: Adds one or more elements to the beginning of an array.
    • Return Value: The new length of the array.
    • Modifies original array: YES
  */
  const arr = [2, 3];
  const newLength = arr.unshift(0, 1);
  console.log(arr); // [0, 1, 2, 3]
  console.log(newLength); // 4
}

{
  /*
    5. Array.prototype.splice()
    • Definition: Changes contents by removing/replacing existing elements and/or adding new ones.
    • Return Value: An array containing the deleted elements.
    • Modifies original array: YES
  */
  const months = ["Jan", "March", "April"];
  months.splice(1, 0, "Feb"); // Insert at index 1
  console.log(months); // ["Jan", "Feb", "March", "April"]
}

{
  /*
    6. Array.prototype.sort()
    • Definition: Sorts elements in place (default is string comparison).
    • Return Value: The sorted array (reference).
    • Modifies original array: YES
  */
  const nums = [3, 1, 4, 1, 5];
  nums.sort((a, b) => a - b);
  console.log(nums); // [1, 1, 3, 4, 5]
}

{
  /*
    7. Array.prototype.reverse()
    • Definition: Reverses an array in place.
    • Return Value: The reversed array (reference).
    • Modifies original array: YES
  */
  const arr = [1, 2, 3];
  arr.reverse();
  console.log(arr); // [3, 2, 1]
}

{
  /*
    8. Array.prototype.fill()
    • Definition: Fills elements with a static value from start to end index.
    • Return Value: The modified array.
    • Modifies original array: YES
  */
  const arr = [1, 2, 3, 4];
  arr.fill(0, 2, 4); // Fill with 0 from index 2 to 4
  console.log(arr); // [1, 2, 0, 0]
}

{
  /*
    9. Array.prototype.copyWithin()
    • Definition: Shallow copies part of an array to another location in the same array.
    • Return Value: The modified array.
    • Modifies original array: YES
  */
  const arr = ['a', 'b', 'c', 'd', 'e'];
  // Copy to index 0 the element at index 3
  arr.copyWithin(0, 3, 4);
  console.log(arr); // ['d', 'b', 'c', 'd', 'e']
}

/* ==========================================================================
   2. ACCESSOR / NON-MUTATING METHODS (Return new value)
   ========================================================================== */

{
  /*
    10. Array.prototype.concat()
    • Definition: Merges two or more arrays.
    • Return Value: A new array.
    • Modifies original array: NO
  */
  const arr1 = ['a'];
  const arr2 = ['b'];
  console.log(arr1.concat(arr2)); // ['a', 'b']
}

{
  /*
    11. Array.prototype.slice()
    • Definition: Returns a shallow copy of a portion of an array.
    • Return Value: A new array.
    • Modifies original array: NO
  */
  const animals = ['ant', 'bison', 'camel', 'duck'];
  console.log(animals.slice(2)); // ['camel', 'duck']
}

{
  /*
    12. Array.prototype.includes()
    • Definition: Checks if array includes a certain value.
    • Return Value: boolean.
    • Modifies original array: NO
  */
  const nums = [1, 2, 3];
  console.log(nums.includes(2)); // true
}

{
  /*
    13. Array.prototype.indexOf()
    • Definition: Returns the first index at which a given element can be found.
    • Return Value: Index (integer) or -1 if not present.
    • Modifies original array: NO
  */
  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  console.log(beasts.indexOf('bison')); // 1
}

{
  /*
    14. Array.prototype.lastIndexOf()
    • Definition: Returns the last index at which a given element can be found.
    • Return Value: Index (integer) or -1.
    • Modifies original array: NO
  */
  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  console.log(beasts.lastIndexOf('bison')); // 4
}

{
  /*
    15. Array.prototype.join()
    • Definition: Joins all elements into a string.
    • Return Value: A string.
    • Modifies original array: NO
  */
  const elements = ['Fire', 'Air', 'Water'];
  console.log(elements.join('-')); // "Fire-Air-Water"
}

{
  /*
    16. Array.prototype.toString()
    • Definition: Returns a string representing the array and its elements.
    • Return Value: A string.
    • Modifies original array: NO
  */
  const array1 = [1, 2, 'a', '1a'];
  console.log(array1.toString()); // "1,2,a,1a"
}

{
  /*
    17. Array.prototype.every()
    • Definition: Tests whether all elements pass the test implemented by the provided function.
    • Return Value: boolean.
    • Modifies original array: NO
  */
  const isBelowThreshold = (currentValue) => currentValue < 40;
  const array1 = [1, 30, 39, 29, 10, 13];
  console.log(array1.every(isBelowThreshold)); // true
}

{
  /*
    18. Array.prototype.some()
    • Definition: Tests whether at least one element passes the test implemented by the provided function.
    • Return Value: boolean.
    • Modifies original array: NO
  */
  const array = [1, 2, 3, 4, 5];
  const even = (element) => element % 2 === 0;
  console.log(array.some(even)); // true
}

{
  /*
    19. Array.prototype.find()
    • Definition: Returns the first element that satisfies the provided testing function.
    • Return Value: Value or undefined.
    • Modifies original array: NO
  */
  const array1 = [5, 12, 8, 130, 44];
  const found = array1.find((element) => element > 10);
  console.log(found); // 12
}

{
  /*
    20. Array.prototype.findIndex()
    • Definition: Returns the index of the first element that satisfies the provided testing function.
    • Return Value: Index or -1.
    • Modifies original array: NO
  */
  const array1 = [5, 12, 8, 130, 44];
  const isLargeNumber = (element) => element > 13;
  console.log(array1.findIndex(isLargeNumber)); // 3
}

{
  /*
    21. Array.prototype.map()
    • Definition: Creates a new array with the results of calling a provided function on every element.
    • Return Value: A new array.
    • Modifies original array: NO
  */
  const array1 = [1, 4, 9, 16];
  const map1 = array1.map((x) => x * 2);
  console.log(map1); // [2, 8, 18, 32]
}

{
  /*
    22. Array.prototype.filter()
    • Definition: Creates a shallow copy of a portion of a given array, filtered down to just the elements that pass the test.
    • Return Value: A new array.
    • Modifies original array: NO
  */
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  const result = words.filter((word) => word.length > 6);
  console.log(result); // ["exuberant", "destruction", "present"]
}

{
  /*
    23. Array.prototype.reduce()
    • Definition: Executes a reducer function on each element of the array, resulting in a single output value.
    • Return Value: The accumulated result.
    • Modifies original array: NO
  */
  const array1 = [1, 2, 3, 4];
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  console.log(sumWithInitial); // 10
}

{
  /*
    24. Array.prototype.flat()
    • Definition: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    • Return Value: A new array.
    • Modifies original array: NO
  */
  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat()); // [0, 1, 2, 3, 4]
}

{
  /*
    25. Array.prototype.flatMap()
    • Definition: Maps each element using a mapping function (like map()), then flattens the result into a new array.
    • Return Value: A new array.
    • Modifies original array: NO
  */
  const arr1 = [1, 2, 1];
  const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
  console.log(result); // [1, 2, 2, 1]
}

{
  /*
    26. Array.prototype.entries()
    • Definition: Returns a new Array Iterator object that contains the key/value pairs for each index.
    • Return Value: Iterator.
    • Modifies original array: NO
  */
  const array1 = ['a', 'b', 'c'];
  const iterator1 = array1.entries();
  console.log(iterator1.next().value); // [0, "a"]
  console.log(iterator1.next().value); // [1, "b"]
}

{
  /*
    27. Array.prototype.keys()
    • Definition: Returns a new Array Iterator object that contains the keys (indices) for each index.
    • Return Value: Iterator.
    • Modifies original array: NO
  */
  const array1 = ['a', 'b', 'c'];
  const iterator = array1.keys();
  for (const key of iterator) {
    console.log(key); // 0, 1, 2
  }
}

{
  /*
    28. Array.prototype.values()
    • Definition: Returns a new Array Iterator object that iterates the value of each item.
    • Return Value: Iterator.
    • Modifies original array: NO
  */
  const array1 = ['a', 'b', 'c'];
  const iterator = array1.values();
  for (const value of iterator) {
    console.log(value); // "a", "b", "c"
  }
}

{
  /*
    29. Array.prototype.at()
    • Definition: Takes an integer value and returns the item at that index. Allows negative integers to count from the end.
    • Return Value: The element at the given index.
    • Modifies original array: NO
  */
  const array1 = [5, 12, 8, 130, 44];
  console.log(array1.at(2)); // 8
  console.log(array1.at(-1)); // 44
}


/* ==========================================================================
   3. ARRAY CREATION & UTILITY METHODS
   ========================================================================== */

{
  /*
    30. Array.from()
    • Definition: Creates a new, shallow-copied Array instance from an array-like or iterable object.
    • Return Value: A new Array instance.
  */
  console.log(Array.from('foo')); // ["f", "o", "o"]
}

{
  /*
    31. Array.of()
    • Definition: Creates a new Array instance from a variable number of arguments.
    • Return Value: A new Array instance.
  */
  console.log(Array.of(1, 2, 3)); // [1, 2, 3]
  console.log(Array.of(7));       // [7] (compared to Array(7) which creates 7 empty slots)
}

{
  /*
    32. Array.isArray()
    • Definition: Determines whether the passed value is an Array.
    • Return Value: boolean.
  */
  console.log(Array.isArray([1, 2, 3])); // true
  console.log(Array.isArray('foobar')); // false
}

{
  /*
    33. Array.fromAsync() (ES2024 / Newer Node versions)
    • Definition: Creates a new Array instance from an async iterable, iterable, or array-like object.
    • Return Value: A Promise that fulfills to a new Array instance.
  */
  // Note: This may throw if environment doesn't support it yet.
  if (Array.fromAsync) {
    (async () => {
      const asyncIterable = (async function* () {
        yield 1;
        yield 2;
        yield 3;
      })();
      const arr = await Array.fromAsync(asyncIterable);
      console.log('Array.fromAsync:', arr); // [1, 2, 3]
    })();
  } else {
    console.log("Array.fromAsync not supported in this environment");
  }
}

/* ==========================================================================
   4. ITERATION HELPERS
   ========================================================================== */

{
  /*
    34. Array.prototype.forEach()
    • Definition: Executes a provided function once for each array element.
    • Return Value: undefined.
    • Modifies original array: NO (however, the callback can mutate it)
  */
  const array1 = ['a', 'b', 'c'];
  array1.forEach((element) => console.log('forEach:', element));
  // Output: forEach: a, forEach: b, forEach: c
}

/* ==========================================================================
   BONUS: LEGACY
   ========================================================================== */

{
  /*
    35. Array.prototype.toLocaleString()
    • Definition: Returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods.
    • Return Value: A string.
  */
  const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
  const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
  console.log(localeString); // "1,a,12/21/1997, 2:12:00 PM" (varies by locale)
}
