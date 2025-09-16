// Polyfill for Array.prototype.some
if (!Array.prototype.mySome) {
  Array.prototype.mySome = function (callback, context) {
    // Iterate through each element in the array
    for (let i = 0; i < this.length; i++) {
      // Call the callback with (element, index, array)
      if (callback.call(context, this[i], i, this)) {
        // If callback returns true for any element → return true
        return true;
      }
    }
    // If no element satisfied the condition → return false
    return false;
  };
}

// Example
const numbers = [1, 2, 3, 4];
console.log(numbers.mySome((x) => x > 3)); // true
console.log(numbers.mySome((x) => x > 5)); // false
