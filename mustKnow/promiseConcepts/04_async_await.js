/**
 * --------------------------------------------------------------------------
 * 4. ASYNC / AWAIT
 * --------------------------------------------------------------------------
 * 
 * CONCEPT:
 * "Syntactic Sugar" over Promises. It makes async code look and behave 
 * like synchronous code (top-to-bottom reading).
 * 
 * KEYWORDS:
 * - async: Marks a function as returning a Promise.
 * - await: Pauses execution until the Promise resolves.
 * 
 * ERROR HANDLING:
 * Use standard `try { ... } catch (e) { ... }` blocks.
 */

const util = {
    wait: (ms) => new Promise(r => setTimeout(r, ms)),
    failAfter: (ms) => new Promise((_, r) => setTimeout(() => r("Async Error!"), ms))
};

console.log("--- 4. ASYNC / AWAIT ---");

// 1. Standard Async Function
async function getData() {
    console.log("1. Starting async function...");
    
    try {
        // Execution PAUSES here for 1 second
        await util.wait(1000); 
        console.log("2. Timer finished.");

        // We can assign result to variable directly
        const result = "Fetched Data"; 
        
        // Let's try something that fails
        console.log("3. About to fail...");
        await util.failAfter(500);

    } catch (error) {
        // Standard JS error handling works for async rejection!
        console.error("4. CAUGHT ERROR inside async function:", error);
    } finally {
        console.log("5. Cleanup inside async function");
    }

    return "Function Completed";
}

// executing
getData().then(finalVal => console.log("Final Return Value:", finalVal));


// -------------------------------------------------------
// 2. PARALLEL EXECUTION MISTAKE
// -------------------------------------------------------

async function sequentialMistake() {
    // BAD: This takes 1s + 1s = 2s total
    // Because the second await doesn't start until first finishes.
    await util.wait(1000);
    await util.wait(1000); 
}

async function parallelCorrect() {
    // GOOD: Start both tasks immediately
    // takes max(1s, 1s) = 1s total
    const p1 = util.wait(1000);
    const p2 = util.wait(1000);
    
    await Promise.all([p1, p2]);
}
