// Polyfill for Array.from
if (!Array.myFrom) {
  Array.myFrom = function (arrayLike, mapFn, thisArg) {
    // Convert to object and get length
    const obj = Object(arrayLike);
    const len = obj.length >>> 0; // ensure length is number
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
      let value = obj[i];
      // Apply mapping function if provided
      result[i] = mapFn ? mapFn.call(thisArg, value, i) : value;
    }

    return result;
  };
}

// Example
console.log(Array.myFrom("hello")); // ['h', 'e', 'l', 'l', 'o']
console.log(Array.myFrom([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
