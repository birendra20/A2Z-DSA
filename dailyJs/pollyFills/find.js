// Polyfill for Array.prototype.find
Array.prototype.myFind = function (callback, context) {
  for (let i = 0; i < this.length; i++) {
    // Call the callback with context, current element, index, and the array
    if (callback.call(context, this[i], i, this)) {
      return this[i]; // return the first matching element
    }
  }
  return undefined; // if no element matches
};

// Example usage:
let numbers = [5, 12, 8, 130, 44];
let result = numbers.myFind(function (value) {
  return value > 10;
});

console.log(result); // 12

/*
📝 Explanation for Interviews:
	•	Iterates over the array.
	•	Runs the callback for each element.
	•	If the callback returns true, immediately returns that element.
	•	If no match is found, returns undefined.
	•	Supports an optional context (just like thisArg in the real method).

*/
