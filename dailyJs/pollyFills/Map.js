// Polyfill for Array.prototype.map
Array.prototype.myMap = function (callback, context) {
  // Create a new array to hold results
  let arr = [];

  // Loop through each element of the array
  for (let i = 0; i < this.length; i++) {
    // Use callback.call(context, …) so that "this" inside callback refers to the provided context
    // Pass three arguments to the callback:
    //   - current element (this[i])
    //   - current index (i)
    //   - the full array (this)
    arr.push(callback.call(context, this[i], i, this));
  }

  // Return the new transformed array
  return arr;
};

// Example array
let arr = [1, 2, 4, 5, 6, 4];

// Define a "context" object
// This will become "this" inside the callback
let context = {
  multiplier: 7,
  offset: 10,
};

// Call our custom myMap
let newArr = arr.myMap(function (value) {
  // Inside here, "this" refers to the context object above
  // So this.multiplier = 7 and this.offset = 10
  return value * this.multiplier + this.offset;
}, context);

// Output: each element transformed using the context object
console.log(newArr);
// [17, 24, 38, 45, 52, 38]
