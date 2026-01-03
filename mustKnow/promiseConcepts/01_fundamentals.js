/**
 * --------------------------------------------------------------------------
 * 1. THE CORE FUNDAMENTALS
 * --------------------------------------------------------------------------
 * 
 * CONCEPT:
 * A Promise is an object representing the eventual completion (or failure) 
 * of an asynchronous operation and its resulting value.
 * 
 * THREE STATES:
 * 1. Pending: Initial state, neither fulfilled nor rejected.
 * 2. Fulfilled (Resolved): Operation completed successfully.
 * 3. Rejected: Operation failed.
 * 
 * IMMUTABILITY:
 * Once a Promise settles (resolves or rejects), its state CANNOT change.
 * It is "settled".
 */

console.log("--- 1. FUNDAMENTALS ---");

// 1. Creating a Promise using the constructor
// The function passed involved is called the "Executor Function".
// It runs SYNCHRONOUSLY and IMMEDIATELY.
const simplePromise = new Promise((resolve, reject) => {
    // This code runs immediately!
    console.log("(Inside Executor): Asynchronous operation started...");

    const success = true;

    // We simulate an async operation using setTimeout
    setTimeout(() => {
        if (success) {
            // Transition from Pending -> Fulfilled
            // We pass the "value" of the success
            resolve("Operation Successful! Data loaded.");
        } else {
            // Transition from Pending -> Rejected
            // We pass the "reason" for the failure
            reject(new Error("Operation Failed!"));
        }
    }, 1000);
});

console.log("(Sync context): Promise created, waiting for it to settle...");

// Inspecting the promise directly (in Node strictly, it just shows Promise { <pending> })
console.log("Current State Object:", simplePromise); 

// Note: You cannot synchronously access the value of a promise. 
// You must use .then() or await to get it (covered in next files).

// -------------------------------------------------------
// DEMONSTRATING IMMUTABILITY (Once settled, it stays settled)
// -------------------------------------------------------
const frozenPromise = new Promise((resolve, reject) => {
    resolve("I resolved first!");
    reject("I won't happen because it's already resolved."); // This is ignored
    resolve("I won't happen either."); // Also ignored
});

frozenPromise.then((val) => {
    console.log("Immutability Check:", val); // Output: "I resolved first!"
});
