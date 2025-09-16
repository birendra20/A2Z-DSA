{
  /**
 1. Array.prototype.some()
	•	Definition: Tests whether at least one element in the array passes the provided callback function.
	•	Return Value: true if any element satisfies the condition, otherwise false.
	•	Does not modify the original array.
	•	Stops iterating early once a match is found.
 */

  const nums = [1, 3, 5, 8];
  const hasEven = nums.some((num) => num % 2 === 0);
  console.log(hasEven); // true (because 8 is even)
}

{
  /*
    2. Array.prototype.every()
	•	Definition: Tests whether all elements in the array pass the provided callback function.
	•	Return Value: true if every element satisfies the condition, otherwise false.
	•	Stops early once a failure is found.
    */

  const nums = [2, 4, 6, 8];
  const allEven = nums.every((num) => num % 2 === 0);
  console.log(allEven); // true
}

{
  /*
    3. Array.prototype.flat()
	•	Definition: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
	•	Default depth = 1.
	•	Does not modify original array.
    */

  const arr = [1, [2, [3, [4]]]];
  console.log(arr.flat()); // [1, 2, [3, [4]]]  (default depth = 1)
  console.log(arr.flat(2)); // [1, 2, 3, [4]]
  console.log(arr.flat(Infinity)); // [1, 2, 3, 4]
}

{
  /*
    4. Array.prototype.flatMap()
	•	Definition: First maps each element using a callback, then flattens the result by one level.
	•	Combines map() + flat(1) in a single step (more efficient).
  */

  const words = ["hello", "world"];
  const result = words.flatMap((word) => word.split(""));
  console.log(result);
  // ["h","e","l","l","o","w","o","r","l","d"]
}

{
  /*
    5. Array.from()
	•	Definition: Creates a new, shallow-copied array from an array-like or iterable object.
	•	Array-like = has length + numeric indexes (e.g., arguments, NodeList).
	•	Iterable = supports iteration (e.g., strings, Sets, Maps).
	•	Can also take a mapping function as the second argument.
    */

  console.log(Array.from("123")); // ["1", "2", "3"]

  const set = new Set([1, 2, 3]);
  console.log(Array.from(set)); // [1, 2, 3]

  console.log(Array.from([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
}

{
  /*
    6. Array.isArray()
	•	Definition: Checks whether a value is an array.
	•	Return Value: true if the value is an array, otherwise false.
	•	Safer than instanceof Array (works across iframes).
    */

  console.log(Array.isArray([1, 2, 3])); // true
  console.log(Array.isArray("hello")); // false
  console.log(Array.isArray({ length: 2 })); // false
}
