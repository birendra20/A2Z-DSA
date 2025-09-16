// Polyfill for Array.prototype.every
if (!Array.prototype.myEvery) {
  Array.prototype.myEvery = function (callback, context) {
    for (let i = 0; i < this.length; i++) {
      // If callback returns false for any element → return false
      if (!callback.call(context, this[i], i, this)) {
        return false;
      }
    }
    // If all elements satisfy the condition → return true
    return true;
  };
}

// Example
console.log(numbers.myEvery((x) => x > 0)); // true
console.log(numbers.myEvery((x) => x > 2)); // false
