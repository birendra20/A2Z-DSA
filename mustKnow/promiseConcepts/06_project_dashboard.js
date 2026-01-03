/**
 * --------------------------------------------------------------------------
 * 6. REAL WORLD PROJECT: DASHBOARD LOAD SIMULATION
 * --------------------------------------------------------------------------
 * 
 * SCENARIO:
 * We are building a User Dashboard. 
 * When the user logs in, we need to fetch:
 * 1. User Profile (Critical)
 * 2. Recent Posts (Critical)
 * 3. Notifications (Non-Critical - okay if it fails)
 * 4. Friend Suggestions (Non-Critical)
 * 
 * We will use `async/await` and `Promise.allSettled` to handle this efficiently.
 */

// --- MOCK API SERVICE ---
const api = {
    fetchProfile: () => new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: "Alice Developer", role: "Admin" }), 800);
    }),
    fetchPosts: () => new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 101, title: "Understanding Promises" },
            { id: 102, title: "Async/Await Magic" }
        ]), 1200);
    }),
    fetchNotifications: () => new Promise((_, reject) => {
        // Simulating a server 500 error for notifications
        setTimeout(() => reject("500: Internal Server Error (Notifications Service)"), 600);
    }),
    fetchFriends: () => new Promise(resolve => {
        setTimeout(() => resolve(["Bob", "Charlie", "Dave"]), 1000);
    })
};


// --- DASHBOARD LOADER FUNCTION ---

async function loadDashboard() {
    console.log("🚀 Initializing Dashboard Loading...");
    const startTime = Date.now();

    try {
        // STRATEGY: 
        // We want to load everything in parallel to be fast.
        // But we have different error handling requirements.
        
        // Method 1: Promise.allSettled
        // Best for mixed requirements where we don't want one failure to kill the whole page.
        
        const results = await Promise.allSettled([
            api.fetchProfile(),         // index 0
            api.fetchPosts(),           // index 1
            api.fetchNotifications(),   // index 2
            api.fetchFriends()          // index 3
        ]);

        const [profileResult, postsResult, notifsResult, friendsResult] = results;

        // --- PROCESS CRITICAL DATA ---
        if (profileResult.status === 'rejected') {
            throw new Error("Critical Failure: Cannot load User Profile. Aborting.");
        }
        if (postsResult.status === 'rejected') {
            throw new Error("Critical Failure: Cannot load Posts. Aborting.");
        }

        const user = profileResult.value;
        const posts = postsResult.value;

        // --- PROCESS NON-CRITICAL DATA ---
        // If notifications fail, we just show an empty array or error message UI, not crash the app.
        const notifications = notifsResult.status === 'fulfilled' 
            ? notifsResult.value 
            : []; // Fallback to empty
        
        const friends = friendsResult.status === 'fulfilled' 
            ? friendsResult.value 
            : [];


        // --- RENDER DASHBOARD (Console Output) ---
        console.log("\n==============================");
        console.log(`WELCOME BACK, ${user.name.toUpperCase()}!`);
        console.log("==============================");
        
        console.log(`\n📌 Your Latest Posts (${posts.length}):`);
        posts.forEach(p => console.log(`   - ${p.title}`));

        console.log(`\n🔔 Notifications:`);
        if (notifsResult.status === 'rejected') {
            console.log(`   (⚠️ could not load notifications: ${notifsResult.reason})`);
        } else {
            console.log(`   ${notifications.length} new notifications.`);
        }

        console.log(`\n👥 Friends Online: ${friends.join(", ")}`);

        const totalTime = (Date.now() - startTime) / 1000;
        console.log(`\n✅ Dashboard loaded in ${totalTime}s`);

    } catch (criticalError) {
        // Handles failures in profile or posts
        console.error("\n🚨 APP CRASHED:", criticalError.message);
        console.log("Redirecting to login page...");
    }
}

// --- EXECUTE ---
loadDashboard();
