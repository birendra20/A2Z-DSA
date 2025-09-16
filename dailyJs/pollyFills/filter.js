// Polyfill for Array.prototype.filter
Array.prototype.myFilter = function (callback, context) {
  // New array to hold elements that pass the filter condition
  let arr = [];

  // Loop through each element
  for (let i = 0; i < this.length; i++) {
    // Execute the callback with the given context
    // callback gets (element, index, fullArray)
    if (callback.call(context, this[i], i, this)) {
      // If callback returns true → push element into result array
      arr.push(this[i]);
    }
  }

  // Return the filtered array
  return arr;
};

// Example input array
let arr = [1, 2, 4, 5, 6, 4];

// Define context object that will be used as "this" inside callback
let context = {
  condition: 5,
};

// Call custom myFilter
let newArr = arr.myFilter(function (value) {
  // Inside here, "this" refers to the context object
  // condition = 5, so only values > 5 should be kept
  return value > this.condition;
}, context);

console.log(newArr);
// Output: [6]
