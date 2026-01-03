/**
 * --------------------------------------------------------------------------
 * 1. FETCH MISTAKES & BASICS
 * --------------------------------------------------------------------------
 * 
 * REAL WORLD CONTEXT:
 * `fetch` returns a Promise. 
 * specific "gotcha": fetch does NOT reject on HTTP 404 or 500 errors. 
 * It only rejects on network failure (offline, DNS issues).
 * You MUST check `response.ok` manually.
 * 
 * API Used: https://dummyjson.com/products/1
 */

console.log("--- 1. REAL FETCH BASICS ---");

const PRODUCT_URL = 'https://dummyjson.com/products/1';
const BAD_URL = 'https://dummyjson.com/http/404'; // Returns 404

// Helper to simulate a "clean" fetch wrapper that most projects use
async function fetchWithCheck(url) {
    console.log(`\n🌐 Requesting: ${url}`);
    
    try {
        const response = await fetch(url);
        
        console.log(`   - Status Code: ${response.status}`);
        console.log(`   - Headers OK?: ${response.ok}`);

        // CRITICAL STEP: Check if request was successful at HTTP level
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        // We also wait for the JSON parsing (returns a promise!)
        const data = await response.json(); 
        return data;

    } catch (error) {
        console.error(`   ❌ Fetch Failed: ${error.message}`);
        // Re-throw so the caller knows it failed
        throw error;
    }
}

// EXECUTION
(async () => {
    // 1. Successful Request
    try {
        const product = await fetchWithCheck(PRODUCT_URL);
        console.log(`   ✅ Success! Got Product: ${product.title}`);
    } catch (e) { /* ignored */ }

    // 2. Failed Request (404)
    // Pay attention: standard fetch() wouldn't throw here! 
    // Our wrapper does because of the `response.ok` check.
    try {
        await fetchWithCheck(BAD_URL);
    } catch (e) { 
        console.log("   (This error was expected and caught correctly)");
    }
})();
