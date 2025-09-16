// Polyfill for Array.prototype.includes (simple version)
// Only handles basic case (no fromIndex, no NaN special handling)
if (!Array.prototype.myIncludes) {
  Array.prototype.myIncludes = function (searchElement) {
    // Loop through each element in the array
    for (let i = 0; i < this.length; i++) {
      // Compare current element with searchElement
      // Using strict equality (===) check
      if (this[i] === searchElement) {
        // If match found, return true immediately
        return true;
      }
    }
    // If loop completes without finding, return false
    return false;
  };
}

// --------------------
// Example usage
// --------------------

const array = [1, 2, 3, 4, 5];

console.log(array.myIncludes(3)); // true  → because 3 exists in the array
console.log(array.myIncludes(6)); // false → because 6 does not exist
