/**
let a = 5;  // Declare variable 'a' and assign it the value 5
let b = a++; // 'b' gets the current value of 'a' (5), then 'a' is incremented by 1

// After the above line:
// a = 6 (incremented after assignment)
// b = 5 (assigned before increment)

console.log(a + b); // 6 + 5 = 11
 */

/* */

// Adding a boolean (true) to a number (1)
// true is converted to 1, so the result is 1 + 1 = 2
console.log(true + 1); // Output: 2

// Adding a boolean (true) to a string ("1")
// true is converted to "true", so the result is "true" + "1" = "true1"
console.log(true + "1"); // Output: "true1"

//----------------------------------------------

setTimeout(() => {
  console.log("timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
});

//----------------------------------------------

// setTimeout with a delay of 0 milliseconds
// This schedules the callback to be executed after the current call stack is cleared
setTimeout(() => {
  console.log("timeout 1");
}, 0);

// Promise resolution
// This schedules the callback to be executed as a microtask, which runs before the next event loop iteration
Promise.resolve().then(() => {
  console.log("promise 1");
});

// The output will be:
// "promise 1" (because microtasks have higher priority than macrotasks)
// "timeout 1" (executed after the current call stack is cleared)

//----------------------------------------------
/*
Let’s break down this JavaScript code in detail, focusing on the event loop, microtasks, and macrotasks to understand why the output appears in a particular order.

Code Execution Breakdown

setTimeout(() => {
  console.log("timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
});

Step 1: Understanding JavaScript’s Event Loop

JavaScript has an event loop that handles asynchronous operations. It divides tasks into two main queues:
	1.	Microtask Queue (Higher Priority)
	•	Includes:
	•	Promises (.then, .catch, .finally)
	•	MutationObserver
	•	Executed immediately after the main execution (synchronous code) and before macrotasks.
	2.	Macrotask Queue (Lower Priority)
	•	Includes:
	•	setTimeout
	•	setInterval
	•	setImmediate (Node.js)
	•	I/O operations
	•	Runs after the microtasks are completed.

Step 2: Execution of the Code

1. Initial Execution (Call Stack)
	•	JavaScript starts executing the script synchronously, line by line.
	•	The setTimeout function is encountered:
	•	A timer is set with 0ms delay.
	•	The callback function is registered in the macrotask queue.
	•	The Promise.resolve().then(...) is encountered:
	•	The .then() callback is added to the microtask queue.

2. Microtasks Execution (Higher Priority)
	•	The main thread is now empty, so the event loop moves to the microtask queue.
	•	The Promise.then callback executes immediately:

console.log("promise 1");

Output so far:

promise 1



3. Macrotasks Execution (Lower Priority)
	•	Now, the event loop moves to the macrotask queue.
	•	The setTimeout callback is executed:

console.log("timeout 1");

Final Output:

promise 1
timeout 1

Final Output Order

promise 1
timeout 1

Key Takeaways
	1.	Microtasks (Promise.then) always run before macrotasks (setTimeout).
	2.	Even though setTimeout has a 0ms delay, it is placed in the macrotask queue and will run after all microtasks are completed.
	3.	The event loop prioritizes microtasks before checking the macrotask queue.

Let me know if you need more clarification! 🚀

*/

`
Certainly! To deepen your understanding of JavaScript’s event loop, microtasks, and macrotasks, here are some authoritative resources:
	•	MDN Web Docs: In-depth Guide on Microtasks and the JavaScript Runtime Environment
This guide provides a comprehensive look into how microtasks operate within the JavaScript runtime, detailing their execution order and interaction with the event loop.
https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth
	•	JavaScript.info: Event Loop
An insightful article that explains the mechanics of the event loop, including the distinction between macrotasks and microtasks, with practical examples.
https://javascript.info/event-loop
	•	Stack Overflow: Difference Between Microtask and Macrotask Within an Event Loop Context
A detailed discussion on the differences between microtasks and macrotasks, providing clarity on their roles and execution order within the event loop.
https://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context
	•	GeeksforGeeks: What are the Microtask and Macrotask Within an Event Loop in JavaScript?
This article explains the concepts of microtasks and macrotasks, their differences, and how they are managed within the JavaScript event loop.
https://www.geeksforgeeks.org/what-are-the-microtask-and-macrotask-within-an-event-loop-in-javascript/

These resources should provide a thorough and detailed understanding of the JavaScript event loop and the roles of microtasks and macrotasks within it.

`;
