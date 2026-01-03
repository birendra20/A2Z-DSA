/**
 * --------------------------------------------------------------------------
 * 2. CHAINING DEPENDENCIES (Sequential)
 * --------------------------------------------------------------------------
 * 
 * SCENARIO:
 * 1. Search for a User by username (e.g., 'emilys').
 * 2. Get that User's ID from the result.
 * 3. Fetch that specific User's posts.
 * 
 * This is a "Waterfall" request. We cannot fetch posts until we know the ID.
 */

// If node < 18, you might need: const fetch = require('node-fetch');

const BASE_URL = 'https://dummyjson.com';

function getUser(username) {
    return fetch(`${BASE_URL}/users/search?q=${username}`)
        .then(res => res.json())
        .then(data => {
            if (data.users.length === 0) throw new Error("User not found");
            return data.users[0]; // Return the first matching user
        });
}

function getPostsByUserId(userId) {
    return fetch(`${BASE_URL}/posts/user/${userId}`)
        .then(res => res.json());
}

console.log("--- 2. SEQUENTIAL FETCH ---");
console.log("🔍 Searching for user 'emilys'...");

getUser('emilys')
    .then(user => {
        console.log(`✅ Step 1 Found User: ${user.firstName} ${user.lastName} (ID: ${user.id})`);
        
        // CHAINING: Return the next promise
        console.log(`⏳ Step 2 Fetching posts for ID ${user.id}...`);
        return getPostsByUserId(user.id);
    })
    .then(postsData => {
        console.log(`✅ Step 2 Success: Found ${postsData.posts.length} posts.`);
        console.log(`   - First Post Title: "${postsData.posts[0].title}"`);
    })
    .catch(err => {
        console.error("🚨 Error in chain:", err.message);
    });
