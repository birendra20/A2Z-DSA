/**
 * --------------------------------------------------------------------------
 * 5. EVENT LOOP & MICROTASK QUEUE
 * --------------------------------------------------------------------------
 * 
 * CONCEPT:
 * Promises do NOT use the standard Task Queue (Macrotasks) like setTimeout.
 * They use the **Microtask Queue**.
 * 
 * PRIORITY:
 * 1. Synchronous Code (Call Stack)
 * 2. Microtask Queue (Promises, queueMicrotask) -> processed until EMPTY.
 * 3. Macrotask Queue (setTimeout, setInterval, I/O) -> processed one by one.
 */

console.log("--- 5. EVENT LOOP ORDER ---");

console.log("1. Script Start (Sync)");

// Macrotask (setTimeout)
setTimeout(() => {
    console.log("5. setTimeout (Macrotask) - Runs LAST");
}, 0);

// Microtask (Promise)
Promise.resolve().then(() => {
    console.log("3. Promise 1 (Microtask) - Runs after Sync");
}).then(() => {
    console.log("4. Promise 2 (Microtask Chain) - Runs immediately after previous microtask");
});

console.log("2. Script End (Sync)");

/**
 * EXPECTED OUTPUT ORDER:
 * 1. Script Start
 * 2. Script End
 * 3. Promise 1
 * 4. Promise 2
 * 5. setTimeout
 * 
 * Explanation:
 * The sync code must finish first. 
 * Then the engine checks Microtasks. It clears ALL of them (including new ones added during execution).
 * Only then does it touch the Macrotasks (setTimeout).
 */
