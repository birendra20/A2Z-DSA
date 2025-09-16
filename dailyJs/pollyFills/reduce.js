// Polyfill for Array.prototype.reduce
Array.prototype.myReduce = function (callback, acc) {
  // 'output' will hold the accumulated result
  let output = acc;

  // Start index for iteration
  let startIndex = 0;

  // If no initial accumulator is provided
  if (output === undefined) {
    // Take the first element of the array as initial accumulator
    output = this[0];
    startIndex++; // Skip the first element since it's already used
  }

  // Iterate through the array
  for (let i = startIndex; i < this.length; i++) {
    // Call the callback with:
    // output → current accumulated value
    // this[i] → current element
    // i → current index
    // this → the full array
    output = callback(output, this[i], i, this);
  }

  // Return the final accumulated result
  return output;
};

// Example usage
const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"] },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
];

// Using myReduce to merge all 'books' arrays into a single array
const allBooks = friends.myReduce((acc, cur) => {
  // acc → accumulated array
  // cur → current friend object
  return [...acc, ...cur.books];
}, []); // Initial value is an empty array

console.log(allBooks);
// ["Bible", "Harry Potter", "War and peace", "Romeo and Juliet", "The Lord of the Rings", "The Shining"]

/* 
✅ Key Notes:
	•	reduce works like a rolling snowball: each iteration takes the previous result (accumulator) and the current element, combines them, and returns the new accumulator.
	•	If an initial value is given, iteration starts from index 0.
	•	If not, the first element is taken as the accumulator, and iteration starts from index 1.
	•	Great for:
	•	Summing numbers
	•	Flattening arrays
	•	Counting items
	•	Building objects/maps

*/
