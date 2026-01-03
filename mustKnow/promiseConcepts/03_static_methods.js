/**
 * --------------------------------------------------------------------------
 * 3. STATIC METHODS (CONCURRENCY)
 * --------------------------------------------------------------------------
 * 
 * Often we want to run multiple async operations in PARALLEL, not sequence.
 * 
 * METHODS:
 * 1. Promise.all([p1, p2]): Waits for ALL to succeed. Fails immediately if ONE fails.
 * 2. Promise.allSettled([p1, p2]): Waits for ALL to finish (success or fail).
 * 3. Promise.race([p1, p2]): Returns result of the FIRST one to settle (win the race).
 * 4. Promise.any([p1, p2]): Returns result of the FIRST one to SUCCEED.
 */

const slowSuccess = new Promise(r => setTimeout(() => r("Slow Success (2s)"), 2000));
const fastSuccess = new Promise(r => setTimeout(() => r("Fast Success (500ms)"), 500));
const fastFailure = new Promise((_, r) => setTimeout(() => r("Fast Failure (300ms)"), 300));
const instantFailure = Promise.reject("Instant Error");

console.log("--- 3. STATIC METHODS ---");

// -------------------------------------------------------
// 1. Promise.all()
// Use case: Dependent data. You need User + Posts + Settings to render page.
// If one missing, page is broken.
// -------------------------------------------------------
Promise.all([slowSuccess, fastSuccess])
    .then(results => {
        console.log("Promise.all [Success]:", results); // ["Slow Success...", "Fast Success..."]
    })
    .catch(err => console.error("Promise.all [Error]:", err));

// Demonstating Fail-Fast behavior of Promise.all
Promise.all([slowSuccess, fastFailure])
    .then(results => console.log("Won't run"))
    .catch(err => console.log("Promise.all [Fail-Fast]: Caught", err));


// -------------------------------------------------------
// 2. Promise.allSettled()
// Use case: Bulk operations. Sending 100 emails. 
// You want to know which failed and which succeeded, don't stop on one error.
// -------------------------------------------------------
Promise.allSettled([fastSuccess, fastFailure])
    .then(results => {
        console.log("Promise.allSettled Output:");
        console.log(results);
        /* Output:
        [
          { status: 'fulfilled', value: 'Fast Success (500ms)' },
          { status: 'rejected', reason: 'Fast Failure (300ms)' }
        ]
        */
    });


// -------------------------------------------------------
// 3. Promise.race()
// Use case: Timeouts. Race a Fetch request vs a 5-second timer.
// -------------------------------------------------------
Promise.race([slowSuccess, fastSuccess])
    .then(winner => console.log("Promise.race [Winner]:", winner)); 
    // Output: "Fast Success" because 500ms < 2s

// -------------------------------------------------------
// 4. Promise.any()
// Use case: Redundancy. Fetching from 3 different CDN mirrors. 
// You only need ONE successful download.
// -------------------------------------------------------
Promise.any([fastFailure, slowSuccess]) // fastFailure rejects, but it keeps waiting for a success
    .then(firstSuccess => console.log("Promise.any [First Success]:", firstSuccess))
    .catch(err => console.log("All promises failed"));
