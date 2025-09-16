// Polyfill for Array.isArray
if (!Array.myIsArray) {
  Array.myIsArray = function (arg) {
    // Use Object.prototype.toString to check type
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}

// Example
console.log(Array.myIsArray([1, 2, 3])); // true
console.log(Array.myIsArray("hello")); // false
