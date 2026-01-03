/**
 * --------------------------------------------------------------------------
 * 4. ROBUST HANDLING (Promise.allSettled)
 * --------------------------------------------------------------------------
 * 
 * SCENARIO:
 * You want to show widgets on a page.
 * 1. Quotes Widget (https://dummyjson.com/quotes)
 * 2. Weather Widget (Let's use a BROKEN URL to simulate service down)
 * 3. Todos Widget (https://dummyjson.com/todos)
 * 
 * If the Weather service is down, the whole page should NOT crash.
 * The other widgets should still load.
 */

const urls = [
    { name: "Quotes", url: "https://dummyjson.com/quotes/random" },
    { name: "Weather", url: "https://dummyjson.com/http/500" }, // Intentionally Broken (500 Error)
    { name: "Todos", url: "https://dummyjson.com/todos/random" }
];

async function loadWidgets() {
    console.log("--- 4. ROBUST FETCH (AllSettled) ---");
    console.log("Attempting to load 3 widgets (1 is broken)...");

    // We promise to fetch json for each.
    // Ensure we handle HTTP errors inside the promise so rejection happens correctly
    const fetchPromises = urls.map(service => 
        fetch(service.url)
            .then(res => {
                if (!res.ok) throw new Error(`Service ${service.name} returned ${res.status}`);
                return res.json();
            })
            // Attaching name to result so we know which one is which later
            .then(data => ({ serviceName: service.name, data })) 
    );

    // Promise.allSettled is the key here
    const results = await Promise.allSettled(fetchPromises);

    console.log("\n📊 WIDGET STATUS REPORT:");

    results.forEach((result, index) => {
        const serviceName = urls[index].name;

        if (result.status === 'fulfilled') {
            console.log(`   ✅ [${serviceName}]: Loaded!`);
            // Access result.value.data here
        } else {
            console.log(`   ⚠️ [${serviceName}]: Failed to load. (Reason: "${result.reason.message}")`);
            // We can resolve a fallback UI state here
        }
    });
}

loadWidgets();
