/**
 * --------------------------------------------------------------------------
 * 6. REAL PROJECT: USER PROFILE DASHBOARD
 * --------------------------------------------------------------------------
 * 
 * OBJECTIVE:
 * Build a `getDashboardData(userId)` function.
 * 
 * REQUIREMENTS:
 * 1. Fetch User Details (Name, Email).
 * 2. Fetch User's Todos (Parallel).
 * 3. Fetch User's Carts (Parallel).
 * 4. Combine into a single dashboard object.
 * 5. If 'Carts' fails, just return empty array (Graceful degradation).
 * 6. If 'User' fails, throw standard error (Critical failure).
 */

const BASE = 'https://dummyjson.com';

async function getDashboardData(userId) {
    console.log(`\n📂 Loading Dashboard for User ID: ${userId}...`);
    console.time("Dashboard Load Time");

    try {
        // STEP 1: Fetch User (Critical)
        // We await this first because if user doesn't exist, no point fetching other stuff.
        const userRes = await fetch(`${BASE}/users/${userId}`);
        
        if (!userRes.ok) throw new Error(`User ${userId} not found`);
        
        const user = await userRes.json();
        console.log(`   👤 User authenticated: ${user.firstName} ${user.lastName}`);

        // STEP 2: Fetch Related Data (Parallel)
        // We use allSettled because Carts might fail or be empty, we don't want to crash.
        const [todosResult, cartsResult, postsResult] = await Promise.allSettled([
            fetch(`${BASE}/todos/user/${userId}`).then(r => r.json()),
            fetch(`${BASE}/carts/user/${userId}`).then(r => r.json()),
            fetch(`${BASE}/posts/user/${userId}`).then(r => r.json())
        ]);

        // STEP 3: Process Results
        
        // Todos
        const todos = todosResult.status === 'fulfilled' ? todosResult.value.todos : [];
        
        // Carts
        const carts = cartsResult.status === 'fulfilled' ? cartsResult.value.carts : [];
        
        // Posts
        const posts = postsResult.status === 'fulfilled' ? postsResult.value.posts : [];


        console.timeEnd("Dashboard Load Time");

        // STEP 4: Return Final View Object
        return {
            fullName: `${user.firstName} ${user.lastName}`,
            email: user.email,
            stats: {
                pendingTodos: todos.filter(t => !t.completed).length,
                totalCarts: carts.length,
                totalPosts: posts.length
            },
            recentTodo: todos[0]?.todo || "No pending tasks",
            status: "Active"
        };

    } catch (error) {
        console.error(`   🚨 CRITICAL DASHBOARD ERROR: ${error.message}`);
        return null;
    }
}


// --- EXECUTION SIMULATION ---

(async () => {
    // Test 1: Valid User
    const dashboard = await getDashboardData(1);
    if (dashboard) {
        console.log("\n🖥️  RENDER DASHBOARD UI:");
        console.table(dashboard);
    }

    // Test 2: Invalid User
    await getDashboardData(99999); // Doesn't exist
})();
