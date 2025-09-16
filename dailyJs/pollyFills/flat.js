// Polyfill for Array.prototype.flat
if (!Array.prototype.myFlat) {
  Array.prototype.myFlat = function (depth = 1) {
    let result = [];

    // Helper recursive function
    function flatten(arr, d) {
      for (let item of arr) {
        if (Array.isArray(item) && d > 0) {
          // If element is array and depth left > 0 → recurse
          flatten(item, d - 1);
        } else {
          // Otherwise push directly
          result.push(item);
        }
      }
    }

    flatten(this, depth);
    return result;
  };
}

// Example
const nested = [1, [2, [3, [4]]]];
console.log(nested.myFlat(1)); // [1, 2, [3, [4]]]
console.log(nested.myFlat(2)); // [1, 2, 3, [4]]
console.log(nested.myFlat(3)); // [1, 2, 3, 4]
