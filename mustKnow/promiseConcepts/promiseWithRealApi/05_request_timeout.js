/**
 * --------------------------------------------------------------------------
 * 5. REQUEST TIMEOUT (Promise.race)
 * --------------------------------------------------------------------------
 * 
 * SCENARIO:
 * The API is sometimes slow. If it takes longer than 2 seconds, 
 * we want to cancel/ignore it and show a "Timeout" message to the user,
 * rather than making them wait forever.
 */

const BASE = 'https://dummyjson.com';

// 1. A slow request (We can't easily force dummyjson to sleep, so we'll simulate speed check)
// We'll target a "heavy" endpoint like getting 500 users
const dataRequest = fetch(`${BASE}/users?limit=100`)
    .then(res => res.json())
    .then(data => "✅ Data received");

// 2. A Timeout Promise
// This will reject after X milliseconds
const timeoutRequest = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Request timed out (took too long)"));
    }, 100); // 100ms is very short, so it SHOULD fail
});

// 3. The Race
console.log("--- 5. TIMEOUT PATTERN ---");
console.log("Racing a network request vs a 100ms timer...");

Promise.race([dataRequest, timeoutRequest])
    .then(winner => {
        console.log(winner);
    })
    .catch(error => {
        console.log(`⏱️ TIMEOUT: ${error.message}`);
    });


/**
 * NOTE ON ABORTCONTROLLER:
 * In modern JS, it's better to use `AbortController` to actually kill the network request,
 * which saves bandwidth. `Promise.race` just ignores the result but the request continues in background.
 * 
 * Example usage if you want to be pro:
 */
/*
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 2000);

fetch(url, { signal: controller.signal })
  .then(...)
  .catch(err => {
      if (err.name === 'AbortError') console.log('Fetch aborted');
  });
*/
