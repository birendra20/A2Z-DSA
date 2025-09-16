// Polyfill for Array.prototype.flatMap
if (!Array.prototype.myFlatMap) {
  Array.prototype.myFlatMap = function (callback, context) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
      // Apply callback to each element
      let mapped = callback.call(context, this[i], i, this);

      // If result is array → spread into result, else push
      if (Array.isArray(mapped)) {
        result.push(...mapped);
      } else {
        result.push(mapped);
      }
    }

    return result;
  };
}

// Example
const nums = [1, 2, 3];
console.log(nums.myFlatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 3, 6]
