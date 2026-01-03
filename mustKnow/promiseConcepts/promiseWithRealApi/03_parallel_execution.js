/**
 * --------------------------------------------------------------------------
 * 3. PARALLEL EXECUTION (Promise.all)
 * --------------------------------------------------------------------------
 * 
 * SCENARIO:
 * You are loading an E-commerce homepage. You need:
 * 1. List of Categories
 * 2. Featured Products (using a limit=5)
 * 3. Top Users (using a limit=3)
 * 
 * These are INDEPENDENT. Creating a waterfall (awaiting one by one) is SLOW.
 * use Promise.all to fetch them concurrently.
 */

const BASE = 'https://dummyjson.com';

async function loadHomepage() {
    console.log("--- 3. PARALLEL FETCH ---");
    console.time("Sequential Time");
    
    // --- BAD WAY (Sequential) ---
    // const categories = await fetch(...).then(r=>r.json());
    // const products = await fetch(...).then(r=>r.json());
    // ... this doubles/triples the load time.


    // --- GOOD WAY (Parallel) ---
    console.log("🚀 Firing 3 requests simultaneously...");
    console.time("Parallel Time");   // Start timer

    try {
        const [categoriesRes, productsRes, usersRes] = await Promise.all([
            fetch(`${BASE}/products/categories`),
            fetch(`${BASE}/products?limit=5`),
            fetch(`${BASE}/users?limit=3`)
        ]);

        // Note: We have to await the .json() parsing too.
        // We can do this in parallel too:
        const [categories, products, users] = await Promise.all([
            categoriesRes.json(),
            productsRes.json(),
            usersRes.json()
        ]);

        console.timeEnd("Parallel Time"); // End timer

        console.log("\n📦 DATA SUMMARY:");
        console.log(`   1. Categories: ${categories.length} found (Example: ${categories[0].name})`);
        console.log(`   2. Products:   ${products.products.length} found`);
        console.log(`   3. Users:      ${users.users.length} found`);

    } catch (error) {
        // FAIL-FAST: If *any* of the 3 requests fail (e.g., offline), this block runs immediately.
        console.error("💥 One of the requests failed:", error.message);
    }
}

loadHomepage();
