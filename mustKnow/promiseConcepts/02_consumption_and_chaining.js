/**
 * --------------------------------------------------------------------------
 * 2. CONSUMPTION & CHAINING
 * --------------------------------------------------------------------------
 * 
 * CONCEPTS:
 * - .then(onSuccess, onFailure): Handles successful resolution. Returns a NEW Promise.
 * - .catch(onFailure): Handles rejection. Catches errors from anywhere above it in the chain.
 * - .finally(callback): Runs regardless of outcome. Good for cleanup.
 * 
 * CHAINING:
 * Because .then() returns a new Promise, we can chain them to run async operations 
 * in SEQUENCE (one after another).
 */

console.log("--- 2. CONSUMPTION & CHAINING ---");

// Helper function that returns a promise
function simulateApiCall(endpoint, duration = 1000) {
    return new Promise((resolve, reject) => {
        console.log(`[API] Fetching ${endpoint}...`);
        setTimeout(() => {
            if (endpoint === "fail-me") {
                reject(`Error: Failed to fetch ${endpoint}`);
            } else {
                resolve(`Data from ${endpoint}`);
            }
        }, duration);
    });
}

// -------------------------------------------------------
// SCENARIO: Sequential Operations (The "Waterfall" or "Chain")
// 1. Fetch User -> 2. Fetch Posts -> 3. Fetch Comments
// -------------------------------------------------------

console.log("Starting chaining sequence...");

simulateApiCall("User Profile", 500)
    .then((userResponse) => {
        console.log("Step 1 Complete:", userResponse);
        // We return a NEW Promise here. The next .then() awaits this one.
        return simulateApiCall("User Posts", 1000);
    })
    .then((postsResponse) => {
        console.log("Step 2 Complete:", postsResponse);
        // We can also return a synchronous value. It is automatically wrapped in a Promise.
        return "Synchronous transformation of data"; 
    })
    .then((syncData) => {
        console.log("Step 3 Complete:", syncData);
        // Let's trigger an error intentionally now
        return simulateApiCall("fail-me", 500);
    })
    .then((neverRuns) => {
        // This line is SKIPPED because the previous promise rejected
        console.log("This will not print:", neverRuns);
    })
    .catch((error) => {
        // CATCH BLOCK
        // Handles the error from "fail-me".
        // Errors "bubble up" (or down the chain) until caught.
        console.error("!!! CAUGHT ERROR in chain:", error);
        
        // We can return a value from catch to "recover" the chain if we want
        return "Recovered Value";
    })
    .then((finalStep) => {
        // The chain continues after catch if we return something (or nothing/undefined)
        console.log("Chain recovered and continued with:", finalStep);
    })
    .finally(() => {
        // FINALLY BLOCK
        // Runs regardless of success or failure.
        // User for: Hiding loading spinners, closing connections.
        console.log("--- Cleanup: Operation sequence finished ---");
    });
