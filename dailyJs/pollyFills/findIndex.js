// Polyfill for Array.prototype.findIndex
Array.prototype.myFindIndex = function (callback, context) {
  for (let i = 0; i < this.length; i++) {
    // Call the callback with context
    if (callback.call(context, this[i], i, this)) {
      return i; // return the index of the first match
    }
  }
  return -1; // if no element matches
};

// Example usage:
let numbers = [5, 12, 8, 130, 44];
let index = numbers.myFindIndex(function (value) {
  return value > 100;
});

console.log(index); // 3 (because 130 is at index 3)

/*
📝 Explanation for Interviews:
	•	Iterates over the array.
	•	Executes callback on each element.
	•	Returns the index of the first element for which callback returns true.
	•	If no element satisfies, returns -1.
*/
