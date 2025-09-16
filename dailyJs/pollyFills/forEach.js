// Polyfill for Array.prototype.forEach
Array.prototype.myForEach = function (callback) {
  // Loop through all elements of the array
  for (let i = 0; i < this.length; i++) {
    // Execute the callback function for each element
    // Arguments passed:
    //   this[i] → current element
    //   i → current index
    //   this → the whole array
    callback(this[i], i, this);
  }
};

// Example array
const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Call custom myForEach
arrData.myForEach((element) => {
  // Callback function runs for each element
  console.log(element); // Just logs the current element
});
